import openai
import json
from pathlib import Path
from datetime import datetime
import re
import os

# ---- CONFIG ----
MODEL = "gpt-4.1-nano"   # or your preferred model
TEMPERATURE = 0.6
MAX_TOKENS = 2500

# ---- FILES ----
SYSTEM_PROMPT = Path("assistant-instructions.md").read_text(encoding="utf-8").strip()
OUTLINE_DIR = Path("outlines")
OUTPUT_ROOT = Path("output")

# ---- FOLDER SETUP ----
def get_run_folder(version="v1"):
    ts = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    folder = OUTPUT_ROOT / f"book_run_{version}_{ts}"
    folder.mkdir(parents=True, exist_ok=True)
    Path("latest_run.txt").write_text(str(folder), encoding="utf-8")
    return folder

# ---- OUTLINE PARSING ----
def get_outline_titles(node, prefix=""):
    """Collect all section titles for a TOC-like listing."""
    lines = []
    for key, value in node.items():
        if key == "title":
            continue
        if isinstance(value, dict):
            title = value.get("title", "")
            heading = f"{prefix}{key}"
            if title:
                lines.append(f"- {heading}: {title}")
            else:
                lines.append(f"- {heading}")
            # Recurse
            lines += get_outline_titles(value, prefix + key + " > ")
    return lines

def find_sections_with_description(node, path=None):
    """Find every node with a description, yielding (key_path, node)"""
    if path is None:
        path = []
    results = []
    for key, value in node.items():
        if key == "title":
            continue
        if isinstance(value, dict):
            if "description" in value:
                results.append((path + [key], value))
            # Recurse deeper
            results.extend(find_sections_with_description(value, path + [key]))
    return results

def get_tree_context(outline, key_path):
    """Return a concise parent tree outline as a string."""
    node = outline
    context_lines = []
    for k in key_path:
        title = node[k].get("title", None)
        if title:
            context_lines.append(f"{k}: {title}")
        else:
            context_lines.append(k)
        node = node[k]
    # Only show up to the parent, not the current section itself
    if context_lines:
        return "\n↳ ".join(context_lines[:-1])
    else:
        return "(root)"

def get_outline_globally(outlines_dir, depth=1):
    """
    Returns a markdown list of the major sections (and optionally first-level children)
    across all outline JSON files in outlines_dir, up to specified depth.
    """
    lines = []
    for outline_file in sorted(Path(outlines_dir).glob("*.json")):
        outline = json.loads(outline_file.read_text(encoding="utf-8"))
        for key, value in outline.items():
            if key == "title":
                continue
            # Level 1: Major section
            section_title = value.get("title", "")
            lines.append(f"- {key}: {section_title}")
            if depth > 1:
                # Level 2: First-level subsections
                for sub_key, sub_value in value.items():
                    if sub_key in ["title", "description"]:
                        continue
                    sub_title = sub_value.get("title", "")
                    lines.append(f"    - {sub_key}: {sub_title}")
    return "\n".join(lines)

def get_sibling_context(parent_node, current_key):
    """Returns (prev_heading, prev_desc, next_heading, next_desc) for siblings, or None if not found."""
    # Only consider keys that are sections (not title/description)
    keys = [k for k in parent_node.keys() if isinstance(parent_node[k], dict) and "description" in parent_node[k]]
    if current_key not in keys:
        return None, None, None, None
    idx = keys.index(current_key)
    prev_key, next_key = None, None
    if idx > 0:
        prev_key = keys[idx - 1]
    if idx < len(keys) - 1:
        next_key = keys[idx + 1]
    prev = (
        prev_key,
        parent_node[prev_key].get("description") if prev_key else None,
    ) if prev_key else (None, None)
    next_ = (
        next_key,
        parent_node[next_key].get("description") if next_key else None,
    ) if next_key else (None, None)
    return prev[0], prev[1], next_[0], next_[1]

def get_parent_titles(outline, key_path):
    """Get parent sections for context."""
    parents = []
    node = outline
    for k in key_path[:-1]:
        t = node[k].get("title", None)
        if t:
            parents.append(f"{k}: {t}")
        else:
            parents.append(k)
        node = node[k]
    return parents

def slugify(text):
    return re.sub(r'\W+', '-', text).strip('-').lower()

# ---- MAIN ----
def main(resume=False):
    openai.api_key = os.getenv("OPENAI_API_KEY")
    run_folder = None
    if resume and Path("latest_run.txt").exists():
        run_folder = Path(Path("latest_run.txt").read_text(encoding="utf-8").strip())
        print(f"🔁 Resuming from: {run_folder}")
    else:
        run_folder = get_run_folder()
        print(f"🚀 New run at: {run_folder}")

    for outline_file in sorted(OUTLINE_DIR.glob("*.json")):
        print(f"⏳ Processing outline: {outline_file.name}")
        section_folder = run_folder / outline_file.stem
        section_folder.mkdir(exist_ok=True)
        outline = json.loads(outline_file.read_text(encoding="utf-8"))

        # Prepare outline listing (TOC)
        #outline_listing = "\n".join(get_outline_titles(outline))
        global_outline = get_outline_globally(OUTLINE_DIR, depth=2)


        # Each describable section:
        for key_path, node in find_sections_with_description(outline):
            filename = f"{'-'.join(str(i).zfill(2) for i in range(len(key_path)))}-{slugify(key_path[-1])}.md"
            out_path = section_folder / filename
            if out_path.exists():
                print(f"⏩ Skipping existing: {out_path.name}")
                continue

            heading = key_path[-1]
            description = node["description"]
            parent_context = get_tree_context(outline, key_path)

            # Find parent node
            parent_node = outline
            for k in key_path[:-1]:
                parent_node = parent_node[k]
            prev_key, prev_desc, next_key, next_desc = get_sibling_context(parent_node, key_path[-1])

            sibling_context_lines = []
            if prev_key and prev_desc:
                sibling_context_lines.append(
                    f"Previous section ({prev_key}): {prev_desc.strip()}"
                )
            if next_key and next_desc:
                sibling_context_lines.append(
                    f"Next section ({next_key}): {next_desc.strip()}"
                )
            sibling_context = "\n\n".join(sibling_context_lines)

            # ---- Compose prompt ----
            user_prompt = f"""

Book Outline (key sections):
{global_outline}

Current location in outline for context:
{parent_context} > {heading}

{sibling_context if sibling_context else ""}

Write a complete section for:
Heading: {heading}

Use the following description as your central focus, integrating the established tone, logic, and principles from above. If the description leaves room for interpretation, ground your answer in the book’s broader biomechanical perspective.

Description:
\"\"\"{description}\"\"\"
""".strip()

            print(f"✍️  Generating: {heading}")

            # ---- OpenAI API Call ----
            response = openai.chat.completions.create(
                model=MODEL,
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": user_prompt},
                ],
                temperature=TEMPERATURE,
                max_tokens=MAX_TOKENS,
            )

            # ---- Output ----
            content = response.choices[0].message.content.strip()
            out_path.write_text(content + "\n", encoding="utf-8")
            usage = response.usage
            print(f"✅ Wrote: {out_path} | Prompt: {usage.prompt_tokens} | Output: {usage.completion_tokens} | Total: {usage.total_tokens}")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--resume", action="store_true", help="Resume from latest_run.txt and skip completed files")
    args = parser.parse_args()
    main(resume=args.resume)


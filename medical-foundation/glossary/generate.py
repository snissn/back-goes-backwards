import os
import re
import json
from pathlib import Path
from openai import OpenAI
from collections import defaultdict


# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
MODEL_NAME = "gpt-4o-mini"

# Define the directory containing markdown files
parent_dir = Path(__file__).resolve().parent.parent
md_files = sorted([
    f for f in parent_dir.glob("*.md")
    if "section" in f.name.lower() and f.suffix == ".md"
])
import re

def call_chatgpt(chapter_text: str) -> dict:
    """Call ChatGPT to generate glossary JSON from chapter text, or fallback to regex parsing."""
    system_prompt = (
        "You are an expert book editor. Extract glossary terms and definitions from the following chapter. "
        "Return them as JSON with terms as keys and definitions as values. Avoid any commentary or markdown formatting."
    )
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"Create a glossary of key terms from this chapter:\n\n{chapter_text}"}
        ],
        max_tokens=4000,
        temperature=0.5
    )

    content = response.choices[0].message.content.strip()

    # Try JSON parsing first
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        print("⚠️ Failed to parse JSON. Attempting regex fallback...")

        glossary = {}
        # Try to extract lines like: Term: Definition
        matches = re.findall(r"^\s*([\w\s\-\(\)]+?)\s*[:\-–]\s*(.+)$", content, re.MULTILINE)
        for term, definition in matches:
            glossary[term.strip()] = definition.strip()

        if not glossary:
            glossary["RAW_RESPONSE"] = content  # Fallback for manual inspection

        return glossary

def title_case(term: str) -> str:
    # Match base + optional parenthetical
    match = re.match(r'^(.*?)\s*(\(([^)]+)\))?\s*$', term.strip())
    if not match:
        return term.strip().title()

    base, _, paren_content = match.groups()
    base_title = " ".join(
        w.upper() if w.isupper() else w.capitalize()
        for w in base.strip().split()
    )

    if paren_content:
        paren_content = paren_content.strip()
        if " " in paren_content:
            paren_title = " ".join(w.capitalize() for w in paren_content.split())
        else:
            paren_title = paren_content.upper()
        return f"{base_title} ({paren_title})"
    else:
        return base_title

def build_glossary():
    full_glossary = defaultdict(list)


    for md_path in md_files:
        print(f"📘 Processing: {md_path.name}")
        with md_path.open("r", encoding="utf-8") as f:
            chapter_text = f.read()

        glossary = call_chatgpt(f"Create a glossary of key terms from this chapter:\n\n{chapter_text}")

        if isinstance(glossary, dict):
            for term, definition in glossary.items():
                term_case_fix = title_case(term)
                print(term_case_fix)
                full_glossary[term_case_fix].append(definition)

    return full_glossary

def remove_glossary_duplicates(glossary):
    # Step 2: Prepare disambiguation prompt
    disambiguation_prompt = (
        "You're a biomechanical glossary editor. Given multiple definitions of the same term from different chapters, "
        "synthesize a single, precise, and comprehensive definition for each. Return a JSON object with the canonical term "
        "as the key and the merged definition as the value.\n\n"
        "Format:\n{\n  \"Term A\": \"Unified definition...\",\n  \"Term B\": \"Unified definition...\"\n}\n\n"
    )

    disambiguation_input = {}
    for term, defs in glossary.items():
        if len(defs) > 1:
            disambiguation_input[term] = defs
    if disambiguation_input:
        formatted_input = json.dumps(disambiguation_input, indent=2)
        print("🧠 Calling OpenAI to unify definitions...")

        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": disambiguation_prompt},
                {"role": "user", "content": formatted_input}
            ],
            temperature=0.3,
            max_tokens=2048
        )

        try:
            unified_defs = json.loads(response.choices[0].message.content.strip())
        except json.JSONDecodeError:
            print("⚠️ Failed to parse JSON from disambiguation. Using originals.")
            unified_defs = {}

    for term, unified_def in unified_defs.items():
        glossary[title_case(term)] = [unified_def]

    final_glossary = {}
    for term, definition_list in glossary.items():
        final_glossary[term] = definition_list[0]

    return final_glossary



def add_cross_references(glossary: dict) -> dict:
    """Bold any glossary terms when they appear in other definitions."""
    terms = list(glossary.keys())
    terms_sorted_by_length = sorted(terms, key=len, reverse=True)  # Match longer terms first to avoid substring overlap

    updated = {}
    for term, definition in glossary.items():
        defn = definition

        for other_term in terms_sorted_by_length:
            if other_term == term:
                continue

            # Use word boundary for whole term match (case-insensitive)
            pattern = r'\b(' + re.escape(other_term) + r')\b'
            repl = r'<strong>\1</strong>'

            # Replace only if not already inside formatting
            defn = re.sub(pattern, repl, defn, flags=re.IGNORECASE)

        updated[term] = defn

    return updated

if __name__ == "__main__":
    glossary = build_glossary()
    glossary = remove_glossary_duplicates(glossary)
    glossary = add_cross_references(glossary)

    output_path = Path(__file__).resolve().parent / "combined_glossary.json"
    # Write final glossary output as HTML-style markdown
    md_glossary_path = parent_dir / "98-glossary.md"
    with md_glossary_path.open("w", encoding="utf-8") as f:
        f.write('<div class="glossary-section">\n')
        f.write('  <h1 id="ref-glossary">Glossary</h1>\n')

        for term in sorted(glossary):
            definition = glossary[term]
            f.write(f'  <p><strong>{term}</strong> — {definition}</p>\n')

        f.write('</div>\n')

    print(f"✅ Glossary markdown written to {md_glossary_path}")




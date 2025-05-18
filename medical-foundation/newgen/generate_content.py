from openai import OpenAI
from pathlib import Path
from datetime import datetime
import os
import sys
import re

# --- Setup ---
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
MODEL = "gpt-4.1-nano"
TEMPERATURE = 0.7

# --- Load shared context ---
tone_guide = Path("tone-guide.md").read_text(encoding="utf-8").strip()
book_memo = Path("book-memo.md").read_text(encoding="utf-8").strip()
task_template = Path("task-prompt.md").read_text(encoding="utf-8").strip()

# Get full outline content from all .md files in the outline folder
outline_dir = Path("outline")
outline_texts = [p.read_text(encoding="utf-8") for p in sorted(outline_dir.glob("*.md"))]
full_outline = "\n\n".join(outline_texts).strip()

# Compose shared context
shared_context = f"{tone_guide}\n\n{book_memo}\n\n# FULL BOOK OUTLINE\n\n{full_outline}"

# Helper to create slug from heading
def slugify(heading: str) -> str:
    heading_text = re.sub(r"#+\s*", "", heading).strip()
    heading_text = re.sub(r"[^\w\s-]", "", heading_text)
    heading_text = re.sub(r"\s+", "-", heading_text)
    return heading_text.lower()[:60]

# --- Set output base folder (latest) ---
output_base = sorted(Path("output").glob("book_output_*"))[-1]

# --- Iterate over each outline file ---
for outline_file in sorted(outline_dir.glob("*.md")):
    section_name = outline_file.stem
    output_dir = output_base / section_name

    with open(outline_file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    for i, line in enumerate(lines):
        if not line.strip().startswith("#"):
            continue

        heading = line.strip()
        task_prompt = task_template.replace("{{HEADING}}", heading)
        prompt = f"{shared_context}\n\n---\n\n{task_prompt}"
        print(prompt)

        try:
            response = client.chat.completions.create(
                model=MODEL,
                messages=[{"role": "user", "content": prompt}],
                temperature=TEMPERATURE
            )
            content = response.choices[0].message.content.strip()
        except Exception as e:
            content = f"ERROR: {str(e)}"
            print(f"❌ Error processing line {i} in {section_name}: {e}")

        safe_filename = f"{i:02d}-{slugify(heading)}.md"
        out_path = output_dir / safe_filename

        with open(out_path, "w", encoding="utf-8") as out_file:
            out_file.write(f"{content}\n")

        print(f"✅ Wrote: {out_path}")


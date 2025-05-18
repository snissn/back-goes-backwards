import os
from openai import OpenAI
from pathlib import Path
from datetime import datetime

# --- Config ---
MODEL = "gpt-4.1-nano"
TEMPERATURE = 0.7
TONE_GUIDE = "The tone should be warm, clinical, and biomechanics-informed."
BASE_PROMPT = f"You are helping write a book. {TONE_GUIDE} Please write a short, clear, focused paragraph for the following book heading:\n\n"

OUTLINE_DIR = "outline"
OUTPUT_BASE = sorted(Path("output").glob("book_output_*"))[-1]  # Use latest output folder

# --- Setup OpenAI Client ---
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# --- Process each outline file ---
for outline_file in sorted(Path(OUTLINE_DIR).glob("*.md")):
    section_name = outline_file.stem
    output_dir = OUTPUT_BASE / section_name

    with open(outline_file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    for i, line in enumerate(lines):
        if line.strip().startswith("#"):  # Only process headers
            prompt = BASE_PROMPT + line.strip()

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

            out_path = output_dir / f"{i:02d}.md"
            with open(out_path, "w", encoding="utf-8") as out_file:
                out_file.write(f"## {line.strip()}\n\n{content}\n")

            print(f"✅ Wrote: {out_path}")
        break



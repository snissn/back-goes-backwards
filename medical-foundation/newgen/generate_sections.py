import argparse
from openai import OpenAI
from pathlib import Path
import os
import json
import re
import time

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Parse CLI arguments
parser = argparse.ArgumentParser(description="Generate book sections using Assistants API.")
parser.add_argument("--section", type=int, help="Only generate this specific line number (zero-based)")
parser.add_argument("--file", type=str, help="Only process this outline file (filename only, no path)")
args = parser.parse_args()

# Load assistant ID
assistant_id = json.loads(Path("assistant_id.json").read_text(encoding="utf-8"))["assistant_id"]

# Slugify helper
def slugify(text: str) -> str:
    text = re.sub(r"#+\s*", "", text).strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"\s+", "-", text)
    return text.lower()[:60]

# Determine output root (resume support)
output_path_file = Path("latest_output_path.txt")
if output_path_file.exists():
    output_root = Path(output_path_file.read_text(encoding="utf-8").strip())
    print(f"🔁 Resuming from: {output_root}")
else:
    timestamp = time.strftime("%Y-%m-%d_%H-%M-%S")
    output_root = Path("output") / f"book_output_{timestamp}"
    output_root.mkdir(parents=True, exist_ok=True)
    output_path_file.write_text(str(output_root), encoding="utf-8")
    print(f"🚀 Starting new output folder: {output_root}")

# Process outlines
outline_dir = Path("outline")
target_files = [outline_dir / args.file] if args.file else sorted(outline_dir.glob("*.md"))

for outline_file in target_files:
    section_name = outline_file.stem
    output_dir = output_root / section_name
    output_dir.mkdir(parents=True, exist_ok=True)

    lines = outline_file.read_text(encoding="utf-8").splitlines()
    for i, line in enumerate(lines):
        if not line.strip().startswith("#"):
            continue
        if args.section is not None and i != args.section:
            continue

        heading = re.sub(r"#+\s*", "", line.strip())
        filename = f"{i:02d}-{slugify(heading)}.md"
        out_path = output_dir / filename

        if out_path.exists():
            print(f"⏩ Skipping existing: {out_path.name}")
            continue

        print(f"✍️  Generating: {heading}")

        thread = client.beta.threads.create()
        client.beta.threads.messages.create(
            thread_id=thread.id,
            role="user",
            content=f"Write the full section for the heading: “{heading}”."
        )

        run = client.beta.threads.runs.create(
            thread_id=thread.id,
            assistant_id=assistant_id
        )

        while True:
            run_status = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)
            if run_status.status in ["completed", "failed", "cancelled"]:
                break
            time.sleep(1)

        print(run_status)
        messages = client.beta.threads.messages.list(thread_id=thread.id)
        content = messages.data[0].content[0].text.value.strip()
        out_path.write_text(content + "\n", encoding="utf-8")
        print(f"✅ Wrote: {out_path}")



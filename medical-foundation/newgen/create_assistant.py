# Create a new unified assistant that includes all full context (tone guide, book memo, task prompt, and outline)
# in the `instructions` field instead of uploading files.

from openai import OpenAI
from pathlib import Path
import os
import json

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Load model name
model_name = Path("MODEL_NAME.txt").read_text(encoding="utf-8").strip()

# Load content blocks
tone_guide = Path("tone-guide.md").read_text(encoding="utf-8").strip()
book_memo = Path("book-memo.md").read_text(encoding="utf-8").strip()
task_prompt = Path("task-prompt.md").read_text(encoding="utf-8").strip()

# Load and collapse outline content (headings only)
outline_dir = Path("outline")
outline_lines = []
for file in sorted(outline_dir.glob("*.md")):
    for line in file.read_text(encoding="utf-8").splitlines():
        if line.strip().startswith("#"):
            outline_lines.append(line.strip())
outline_text = "\n".join(outline_lines)

# Compose full prompt-style instructions block
full_instructions = f"""
# TONE GUIDE
{tone_guide}

# BOOK MEMO
{book_memo}

# BOOK OUTLINE
{outline_text}

# TASK TEMPLATE
{task_prompt}

You will receive one heading per message. Write a complete, structured section for that heading using the context above.
Do not introduce or refer to the book or files. Simply write the content for that section in biomechanical and clinical language, as described.
""".strip()

# Create Assistant
assistant = client.beta.assistants.create(
    name="Back Goes Backwards Book Writer — Fully Embedded Context",
    model=model_name,
    instructions=full_instructions,
    tools=[]
)

# Save assistant ID
Path("assistant_id.json").write_text(json.dumps({"assistant_id": assistant.id}), encoding="utf-8")
print(f"✅ Embedded-context Assistant created with ID: {assistant.id}")



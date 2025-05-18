import os
from datetime import datetime
from pathlib import Path
import pandas as pd

# Configuration
OUTLINE_DIR = "outline"
OUTPUT_BASE_DIR = "output"

# Generate a unique output directory using a human-readable timestamp
timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
output_dir = Path(OUTPUT_BASE_DIR) / f"book_output_{timestamp}"
output_dir.mkdir(parents=True, exist_ok=True)

# Discover all markdown files in the outline directory
outline_path = Path(OUTLINE_DIR)
outline_files = sorted(outline_path.glob("*.md"))

# Create a subdirectory in the output folder for each markdown file
output_structure = []
for outline_file in outline_files:
    section_name = outline_file.stem
    section_output_dir = output_dir / section_name
    section_output_dir.mkdir(parents=True, exist_ok=True)
    output_structure.append({
        "Section": section_name,
        "Input File": str(outline_file.resolve()),
        "Output Folder": str(section_output_dir.resolve())
    })

# Display structure in terminal (optional)
df = pd.DataFrame(output_structure)
print(df.to_markdown(index=False))

# Optional: Save output structure log
structure_log_path = output_dir / "structure_log.csv"
df.to_csv(structure_log_path, index=False)

print(f"\n✅ Output directory created at: {output_dir}")


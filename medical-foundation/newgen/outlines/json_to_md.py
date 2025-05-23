import json
import sys
filename = sys.argv[1]
def json_to_markdown(d, level=1):
    md = ""
    for key, value in d.items():
        if key == "description":
            md += f"- {value}\n\n"
        elif key == "title":
            # Optionally, handle the top-level title as a doc title if at root
            if level == 1:
                md = f"# {value}\n\n" + md
            continue  # Skip titles in sub-sections
        else:
            md += f"{'#' * level} {key}\n"
            md += json_to_markdown(value, level + 1)
    return md

# Load your JSON outline
with open(filename) as f:
    outline = json.load(f)

# Convert to markdown
markdown = json_to_markdown(outline)
print(markdown)

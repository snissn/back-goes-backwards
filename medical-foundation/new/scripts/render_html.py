#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import subprocess
import tempfile
from pathlib import Path
from shutil import which


def resolve_existing(path: str | Path) -> Path:
    resolved = Path(path).expanduser()
    if not resolved.exists():
        raise FileNotFoundError(f"File not found: {resolved}")
    return resolved


def convert_markdown_to_fragment(combined_file: Path, css_files: list[Path], title: str) -> str:
    with tempfile.NamedTemporaryFile(suffix=".html", delete=False) as tmp:
        tmp_path = Path(tmp.name)

    command = [
        which("pandoc") or "pandoc",
        str(combined_file),
        "--from=gfm",
        "--to=html5",
        "--wrap=none",
        "--no-highlight",
        "--section-divs",
        "-o",
        str(tmp_path),
    ]

    for css in css_files:
        command.extend(["--css", str(css)])

    command.extend(["--metadata", f"title={title}"])

    completed = subprocess.run(command)
    if completed.returncode != 0:
        tmp_path.unlink(missing_ok=True)
        raise SystemExit(f"pandoc failed with code {completed.returncode}")

    fragment = tmp_path.read_text(encoding="utf-8")
    tmp_path.unlink(missing_ok=True)
    return fragment.strip()


def apply_layout(layout_path: Path, body_html: str, title: str, description: str) -> str:
    layout = layout_path.read_text(encoding="utf-8")

    # Layout copy in `new/` is plain HTML, so only minimal cleanup is required.
    layout = re.sub(r"\{%[^%]*%\}", "", layout)
    layout = re.sub(r"<script[^>]*MathJax-script[^>]*>.*?</script>", "", layout, flags=re.I | re.S)

    replacements = {
        "{{TITLE}}": title,
        "{{DESCRIPTION}}": description,
        "{{CONTENT}}": body_html,
        "{{ page.title | default: site.title | default: site.github.repository_name }}": title,
        "{{ page.description | default: site.description | default: site.github.project_tagline }}": description,
        "{{ '/assets/css/print.css' | relative_url }}": "../../assets/css/print.css",
        "{{ '/assets/css/style.css?v=' | append: site.github.build_revision | relative_url }}": "../../assets/css/style.css",
        "{{ '/assets/css/override.css?v=' | append: site.github.build_revision | relative_url }}": "../../assets/css/override.css",
    }

    for from_text, to_text in replacements.items():
        layout = layout.replace(from_text, to_text)

    # Keep legacy fallback if someone passes an older layout with {{ content }}.
    layout = layout.replace("{{ content }}", body_html)

    # Defensive cleanup for unknown placeholders.
    layout = re.sub(r"\{\{[^}]*\}\}", "", layout)

    return layout


def render_with_template(template_path: Path, combined_file: Path, title: str, css_files: list[Path]) -> str:
    with tempfile.NamedTemporaryFile(suffix=".html", delete=False) as tmp:
        tmp_path = Path(tmp.name)

    command = [
        which("pandoc") or "pandoc",
        str(combined_file),
        "-s",
        "--from=gfm",
        "--to=html5",
        "--section-divs",
        "--template",
        str(template_path),
        "--standalone",
        "--metadata",
        f"title={title}",
        "-o",
        str(tmp_path),
    ]

    for css in css_files:
        command.extend(["--css", str(css)])

    completed = subprocess.run(command)
    if completed.returncode != 0:
        tmp_path.unlink(missing_ok=True)
        raise SystemExit(f"pandoc failed with code {completed.returncode}")

    rendered = tmp_path.read_text(encoding="utf-8")
    tmp_path.unlink(missing_ok=True)
    return rendered


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Render combined.md into combined.html.")
    parser.add_argument("--combined-file", required=True, type=Path)
    parser.add_argument("--output-file", required=True, type=Path)
    parser.add_argument("--template", required=True, type=Path)
    parser.add_argument("--layout", default=None, type=Path, help="Optional local layout file")
    parser.add_argument("--title", default="The Back Goes Backwards")
    parser.add_argument("--description", default="Integrating Biomechanics into Modern Medicine")
    parser.add_argument("--css", action="append", default=[])
    return parser.parse_args()


def main() -> None:
    args = parse_args()

    combined_file = resolve_existing(args.combined_file)
    output_file_path = Path(args.output_file).expanduser()
    output_file_path.parent.mkdir(parents=True, exist_ok=True)

    css_files: list[Path] = []
    for css in args.css:
        css_files.append(resolve_existing(css))

    if args.layout:
        layout = resolve_existing(args.layout)
        body = convert_markdown_to_fragment(combined_file, css_files, args.title)
        rendered = apply_layout(layout, body, args.title, args.description)
        output_file_path.write_text(rendered, encoding="utf-8")
        print(f"Rendered with layout {layout} -> {output_file_path}")
        return

    rendered = render_with_template(resolve_existing(args.template), combined_file, args.title, css_files)
    output_file_path.write_text(rendered, encoding="utf-8")
    print(f"Rendered with template {resolve_existing(args.template)} -> {output_file_path}")


if __name__ == "__main__":
    main()

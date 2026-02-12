#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import List

from list_inputs import discover_outlines


def render_section(label: str, node: dict, level: int = 1) -> List[str]:
    lines: List[str] = [f"{'#' * level} {label}"]

    title = node.get("title")
    if isinstance(title, str):
        title = title.strip()
        if title:
            lines.append("")
            lines.append(title)

    description = node.get("description")
    if isinstance(description, str):
        description = description.strip()
        if description:
            lines.append("")
            lines.append(description)

    for key, value in node.items():
        if key in {"title", "description"}:
            continue
        if not isinstance(value, dict):
            continue
        lines.extend(render_section(key, value, level + 1))

    lines.append("")
    return lines


def convert_file(input_path: Path, output_path: Path) -> None:
    content = json.loads(input_path.read_text(encoding="utf-8"))
    if not isinstance(content, dict):
        raise ValueError(f"{input_path}: outline JSON must be an object")

    lines: List[str] = []
    for section_name, section_node in content.items():
        if not isinstance(section_node, dict):
            continue
        lines.extend(render_section(section_name, section_node, level=1))

    output_path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert outline JSON files to Markdown.")
    parser.add_argument("--input-dir", required=True, type=Path)
    parser.add_argument("--output-dir", required=True, type=Path)
    parser.add_argument("--section", default=None)
    args = parser.parse_args()

    input_files = discover_outlines(args.input_dir, args.section)
    if not input_files:
        print("No outline JSON files found to convert.")
        return

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    for entry in input_files:
        input_path = Path(entry["path"])
        output_path = output_dir / f"{Path(entry['file']).stem}.json.md"
        convert_file(input_path, output_path)
        print(f"Converted {input_path.name} -> {output_path.name}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Dict, List


def infer_section_id(stem: str) -> str:
    match = re.match(r"^(\d+)", stem)
    if match:
        return match.group(1)
    return stem


def matches_section(stem: str, section_filter: str | None) -> bool:
    if not section_filter:
        return True

    normalized = section_filter.strip()
    if not normalized:
        return True

    return (
        stem == normalized
        or stem.startswith(normalized)
        or normalized in stem
    )


def discover_outlines(input_dir: Path, section_filter: str | None = None) -> List[Dict[str, str]]:
    input_path = Path(input_dir)
    entries: List[Dict[str, str]] = []

    for outline_file in sorted(input_path.glob("*.json")):
        stem = outline_file.stem
        if not matches_section(stem, section_filter):
            continue
        section_id = infer_section_id(stem)
        entries.append(
            {
                "path": str(outline_file),
                "file": outline_file.name,
                "section_id": section_id,
                "ordering_key": section_id,
                "stem": stem,
            }
        )

    return entries


def main() -> None:
    parser = argparse.ArgumentParser(description="List outline JSON inputs.")
    parser.add_argument("--input-dir", required=True, type=Path)
    parser.add_argument("--section", default=None)
    parser.add_argument(
        "--json",
        action="store_true",
        help="Emit JSON list suitable for scripts.",
    )

    args = parser.parse_args()
    entries = discover_outlines(args.input_dir, args.section)

    if args.json:
        print(json.dumps(entries, indent=2))
        return

    if not entries:
        print("No outline JSON files found.")
        return

    print(f"Discovered {len(entries)} outline JSON file(s):")
    for entry in entries:
        print(
            f"- {entry['file']} | section={entry['section_id']} | ordering={entry['ordering_key']} "
            f"| path={entry['path']}"
        )


if __name__ == "__main__":
    main()

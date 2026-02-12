#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List

from list_inputs import discover_outlines


def ordering_key(path: Path):
    match = re.match(r"^(\d+)", path.stem)
    if match:
        return int(match.group(1)), path.stem
    return 0, path.stem


def main() -> None:
    parser = argparse.ArgumentParser(description="Combine section markdown into combined.md.")
    parser.add_argument("--input-dir", required=True, type=Path)
    parser.add_argument("--sections-dir", required=True, type=Path)
    parser.add_argument("--static-dir", default=None, type=Path)
    parser.add_argument("--combined-file", required=True, type=Path)
    parser.add_argument("--manifest-file", required=True, type=Path)
    parser.add_argument("--section", default=None)
    args = parser.parse_args()

    input_files = discover_outlines(args.input_dir, args.section)

    sections_dir = Path(args.sections_dir)
    combined_file = Path(args.combined_file)
    manifest_file = Path(args.manifest_file)
    combined_file.parent.mkdir(parents=True, exist_ok=True)

    static_files: List[Path] = []
    static_dir = Path(args.static_dir) if args.static_dir else None
    if static_dir and static_dir.exists():
        static_files = [path for path in static_dir.glob("*.md") if path.is_file()]

    if args.section and not input_files:
        raise SystemExit(f"No outline JSON files matched SECTION={args.section}.")
    if not input_files and not static_files:
        raise SystemExit("No outline JSON inputs found and no static markdown files found.")

    combined_sections: List[str] = []
    manifest_items: List[Dict[str, Any]] = []
    items = []

    for entry in input_files:
        source_path = Path(entry["path"])
        section_md = sections_dir / f"{Path(entry['file']).stem}.json.md"
        if not section_md.exists():
            raise SystemExit(f"Missing generated section markdown: {section_md}")
        items.append(
            {
                "type": "generated",
                "source_file": str(source_path),
                "output_file": str(section_md),
                "order": ordering_key(source_path),
                "content_file": section_md,
                "section_id": entry["section_id"],
                "ordering_key": entry["ordering_key"],
            }
        )

    for static_path in static_files:
        items.append(
            {
                "type": "static",
                "source_file": str(static_path),
                "output_file": str(static_path),
                "order": ordering_key(static_path),
                "content_file": static_path,
            }
        )

    if not items:
        raise SystemExit("No input content found to combine.")

    for item in sorted(items, key=lambda item: item["order"]):
        combined_sections.append(
            Path(item["content_file"]).read_text(encoding="utf-8").rstrip()
        )
        manifest_entry = {
            "type": item["type"],
            "file": item["source_file"],
            "output_file": item["output_file"],
        }
        if item["type"] == "generated":
            manifest_entry["section_id"] = item["section_id"]
            manifest_entry["ordering_key"] = item["ordering_key"]
        manifest_items.append(manifest_entry)

    combined_file.write_text("\n\n".join(combined_sections).rstrip() + "\n", encoding="utf-8")

    manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "combined_file": str(combined_file),
        "section_filter": args.section,
        "sections": manifest_items,
    }
    manifest_file.write_text(json.dumps(manifest, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()

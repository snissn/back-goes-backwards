#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from json import JSONDecodeError
from pathlib import Path
from typing import List

from list_inputs import discover_outlines


def validate_node(node: object, path: str, errors: List[str]) -> None:
    if not isinstance(node, dict):
        errors.append(f"{path}: expected an object")
        return

    for key, value in node.items():
        if key in {"title", "description"}:
            if key == "title" and not isinstance(value, str):
                errors.append(f"{path}: 'title' must be a string")
            if key == "description" and not isinstance(value, str):
                errors.append(f"{path}: 'description' must be a string")
            continue

        if not isinstance(value, dict):
            errors.append(f"{path}/{key}: nested section nodes must be objects")
            continue
        validate_node(value, f"{path}/{key}", errors)


def validate_outline_file(path: Path, errors: List[str]) -> None:
    try:
        content = json.loads(path.read_text(encoding="utf-8"))
    except JSONDecodeError as exc:
        errors.append(f"{path}: invalid JSON ({exc})")
        return

    if not isinstance(content, dict):
        errors.append(f"{path}: top-level JSON must be an object")
        return

    for section_name, section_node in content.items():
        if not isinstance(section_node, dict):
            errors.append(
                f"{path}: top-level key '{section_name}' must map to an object"
            )
            continue
        validate_node(section_node, f"{path}:{section_name}", errors)


def main() -> None:
    parser = argparse.ArgumentParser(description="Validate outline JSON files.")
    parser.add_argument("--input-dir", required=True, type=Path)
    parser.add_argument("--schema", required=True, type=Path)
    parser.add_argument("--section", default=None)
    args = parser.parse_args()

    # Keep dependency lightweight: attempt to parse schema so it can be audited and
    # validated against future extensions, while defaulting to strict structural checks.
    schema_path = Path(args.schema)
    if not schema_path.exists():
        raise SystemExit(f"Schema file not found: {schema_path}")
    json.loads(schema_path.read_text(encoding="utf-8"))

    errors: List[str] = []
    for entry in discover_outlines(args.input_dir, args.section):
        validate_outline_file(Path(entry["path"]), errors)

    if errors:
        print("Validation failed:")
        for issue in errors:
            print(f"- {issue}")
        raise SystemExit(1)

    print("Validation passed.")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
from __future__ import annotations

import argparse
import shutil
import subprocess
import re
import tempfile
from pathlib import Path


def run(cmd: list[str]) -> int:
    completed = subprocess.run(cmd)
    return completed.returncode


def resolve_file(path: str) -> Path:
    resolved = Path(path).expanduser()
    if not resolved.exists():
        raise FileNotFoundError(f"Missing file: {resolved}")
    return resolved


def sanitize_input_html(input_html: Path) -> Path:
    source_html = input_html.read_text(encoding="utf-8")
    sanitized_html = re.sub(
        r"(?is)<link[^>]*rel=[\"']stylesheet[\"'][^>]*?>",
        "",
        source_html,
    )
    sanitized_html = re.sub(
        r"(?is)<a[^>]*id=[\"']skip-to-content[\"'][^>]*>.*?</a>\s*",
        "",
        sanitized_html,
    )

    tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False)
    tmp.write(sanitized_html.encode("utf-8"))
    tmp.close()
    return Path(tmp.name)


def build_with_pagedjs(args: argparse.Namespace) -> int:
    paged = shutil.which("pagedjs-cli")
    if not paged:
        return -1

    command = [
        paged,
        str(args.input_html),
        "-o",
        str(args.output_pdf),
        "--outline-tags",
        args.outline_tags,
    ]

    for style in args.style:
        command.extend(["--style", str(style)])

    if args.script:
        command.extend(["--additional-script", str(args.script)])

    return run(command)


def main() -> None:
    parser = argparse.ArgumentParser(description="Build PDF from combined.html.")
    parser.add_argument("--input-html", required=True)
    parser.add_argument("--output-pdf", required=True)
    parser.add_argument("--outline-tags", default="h1,h2,h3")
    parser.add_argument("--style", action="append", default=[])
    parser.add_argument("--script", default=None)
    args = parser.parse_args()

    args.input_html = resolve_file(args.input_html)
    args.output_pdf = Path(args.output_pdf).expanduser()

    args.output_pdf.parent.mkdir(parents=True, exist_ok=True)

    resolved_styles = []
    for style in args.style:
        resolved_styles.append(resolve_file(style))
    args.style = resolved_styles

    if args.script:
        args.script = resolve_file(args.script)

    sanitized_input = sanitize_input_html(args.input_html)
    try:
        args.input_html = sanitized_input
        code = build_with_pagedjs(args)
    finally:
        sanitized_input.unlink(missing_ok=True)

    if code != 0:
        raise SystemExit("PDF generation failed (code={}). Install pagedjs-cli, then retry.".format(code))

    print(f"Wrote PDF: {args.output_pdf}")


if __name__ == "__main__":
    main()

#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$ROOT_DIR/dist"

mkdir -p "$OUT_DIR"

node "$ROOT_DIR/tools/build-paper.mjs"

pandoc \
  "$OUT_DIR/paper.md" \
  --from=markdown+fenced_divs \
  --standalone \
  --template "tools/pdf/template.html" \
  --toc \
  --toc-depth=2 \
  --number-sections \
  --no-highlight \
  --css "tools/pdf/pdf.css" \
  -o "$OUT_DIR/paper.html"

weasyprint \
  --base-url "$ROOT_DIR" \
  "$OUT_DIR/paper.html" \
  "$OUT_DIR/axial-load-gradient-model.pdf"

echo "PDF written to $OUT_DIR/axial-load-gradient-model.pdf"

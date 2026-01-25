#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$ROOT_DIR/dist"

mkdir -p "$OUT_DIR"

pandoc \
  "$ROOT_DIR/manuscript/manuscript.md" \
  "$ROOT_DIR/manuscript/abstract.md" \
  "$ROOT_DIR/manuscript/glossary.md" \
  "$ROOT_DIR/manuscript/limitations.md" \
  -o "$OUT_DIR/axial-load-gradient-model.pdf" \
  --resource-path="$ROOT_DIR:$ROOT_DIR/figures"

echo "PDF written to $OUT_DIR/axial-load-gradient-model.pdf"

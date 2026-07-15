#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/standing-sequence-source-faithful/source-pages/page-32.jpg"
OUT="$ROOT/standing-sequence-row-layout-prototype"
mkdir -p "$OUT/figures" "$OUT/print"

# Individually isolate the two original drawings and their printed figure labels.
magick "$SRC" -crop 520x1100+330+1370 +repage -colorspace Gray \
  -contrast-stretch 0.5%x0.5% "$OUT/figures/figure-2-1.png"
magick "$SRC" -crop 610x1100+900+1370 +repage -colorspace Gray \
  -contrast-stretch 0.5%x0.5% "$OUT/figures/figure-2-2.png"

weasyprint "$OUT/page-32-review.html" "$OUT/print/page-32-review.pdf"
pdftoppm -f 1 -singlefile -png -r 180 "$OUT/print/page-32-review.pdf" \
  "$OUT/print/page-32-review" >/dev/null
qpdf --check "$OUT/print/page-32-review.pdf"

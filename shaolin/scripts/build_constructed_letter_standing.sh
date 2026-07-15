#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/standing-sequence-source-faithful/source-pages"
OUT="$ROOT/standing-sequence-constructed-letter"

mkdir -p "$OUT/book-art" "$OUT/print/pages" "$OUT/previews"

# Keep the book's original figure fields intact. Crops remove only the running
# header and most prose; figure labels and supplementary views remain visible.
while read -r p y h; do
  magick "$SRC/page-$p.jpg" -crop "x${h}+0+${y}" +repage \
    -trim +repage -bordercolor white -border 18 "$OUT/book-art/page-$p-figures.jpg"
done <<'CROPS'
32 1050 1550
33 500 2100
34 430 2140
35 470 2110
36 520 2050
37 470 2110
38 560 2010
39 360 2220
40 330 2250
41 470 2100
42 430 2140
43 320 2260
44 260 2320
45 430 2150
CROPS

weasyprint "$OUT/standing-sequence-constructed-letter.html" \
  "$OUT/print/standing-sequence-constructed-letter.pdf"

rm -f "$OUT/print/pages/"*.png
pdftoppm -png -r 150 "$OUT/print/standing-sequence-constructed-letter.pdf" \
  "$OUT/print/pages/page" >/dev/null

magick montage "$OUT/print/pages/"*.png -thumbnail 330x440 -tile 4x \
  -geometry +14+14 -background '#e8e8e8' \
  "$OUT/previews/standing-sequence-constructed-letter-contact-sheet.jpg"

qpdf --check "$OUT/print/standing-sequence-constructed-letter.pdf"
pdfinfo "$OUT/print/standing-sequence-constructed-letter.pdf" | sed -n '/Pages:/p;/Page size:/p'

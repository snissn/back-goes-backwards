#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/standing-sequence-source-faithful"
SRC="$ROOT/tmp/source-jpg"

mkdir -p "$OUT/source-pages" "$OUT/print/letter/pages" "$OUT/print/a4/pages" "$OUT/previews"

# Each crop isolates the photographed page that contains the standing sequence.
# The crop is deliberately conservative: no figure, caption, page number, or
# instruction is trimmed away. IMG_7815 is a duplicate photograph of page 42;
# IMG_7814 is used because its full page is the cleaner of the two records.
declare -a PAGE_SPECS=(
  "32 IMG_7804.jpg 2180x3520+0+430"
  "33 IMG_7805.jpg 2068x3450+200+500"
  "34 IMG_7806.jpg 2180x3500+0+430"
  "35 IMG_7807.jpg 2018x3480+250+450"
  "36 IMG_7808.jpg 2180x3480+0+470"
  "37 IMG_7809.jpg 1968x3500+300+430"
  "38 IMG_7810.jpg 2180x3500+0+430"
  "39 IMG_7811.jpg 2018x3500+250+430"
  "40 IMG_7812.jpg 2150x3500+0+430"
  "41 IMG_7813.jpg 1968x3500+300+430"
  "42 IMG_7814.jpg 2100x3500+0+430"
  "43 IMG_7816.jpg 1868x3500+400+430"
  "44 IMG_7817.jpg 2180x3500+0+430"
  "45 IMG_7818.jpg 2088x3500+180+400"
)

for spec in "${PAGE_SPECS[@]}"; do
  read -r page image crop <<<"$spec"
  magick "$SRC/$image" \
    -crop "$crop" +repage \
    -colorspace Gray \
    -contrast-stretch 0.5%x8% \
    -resize '1800x2700>' \
    -bordercolor white -border 20 \
    -units PixelsPerInch -density 300 \
    -strip \
    -quality 92 \
    "$OUT/source-pages/page-$page.jpg"
done

pandoc "$OUT/standing-sequence-bilingual.md" \
  --from=gfm \
  --to=html5 \
  --standalone \
  --template="$ROOT/scripts/standing_print_template.html" \
  --metadata title="Standing Sequence — Source-Faithful Bilingual Print Edition" \
  --lua-filter="$ROOT/scripts/standing_print_pages.lua" \
  --css="styles/base.css" \
  --output="$OUT/standing-sequence.html"

weasyprint \
  -s "$OUT/styles/letter.css" \
  "$OUT/standing-sequence.html" \
  "$OUT/print/standing-sequence-source-faithful-letter.pdf"

weasyprint \
  -s "$OUT/styles/a4.css" \
  "$OUT/standing-sequence.html" \
  "$OUT/print/standing-sequence-source-faithful-a4.pdf"

rm -f "$OUT/print/letter/pages/"*.png "$OUT/print/a4/pages/"*.png
pdftoppm -png -r 160 \
  "$OUT/print/standing-sequence-source-faithful-letter.pdf" \
  "$OUT/print/letter/pages/page" >/dev/null 2>&1
pdftoppm -png -r 160 \
  "$OUT/print/standing-sequence-source-faithful-a4.pdf" \
  "$OUT/print/a4/pages/page" >/dev/null 2>&1

magick montage "$OUT/print/letter/pages/"*.png \
  -thumbnail '660x510>' \
  -tile 2x \
  -geometry '+18+18' \
  -background white \
  -border 1 -bordercolor '#777777' \
  "$OUT/previews/standing-sequence-letter-contact-sheet.jpg"

qpdf --check "$OUT/print/standing-sequence-source-faithful-letter.pdf"
qpdf --check "$OUT/print/standing-sequence-source-faithful-a4.pdf"

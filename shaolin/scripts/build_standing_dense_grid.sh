#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/standing-sequence-source-faithful/source-pages"
OUT="$ROOT/standing-sequence-dense-grid"
mkdir -p "$OUT/figures" "$OUT/print/pages" "$OUT/previews"
rm -f "$OUT/print/pages/"*.png

# step page x y width height [cornerW cornerH] — crops keep the original diagram and
# its label. A gentle level plus a fuzz-trim on the grayscale drop the light reverse-side
# bleed-through, so the crop tightens to — and centres on — the dark figure instead of an
# empty margin held open by a faint mark. A conservative threshold then avoids binarising
# residual grime into blobs, and despeckle clears specks. The two figures that carry a
# solid dark scan-blob in a bottom corner get a second pass that paints out a
# cornerW×cornerH box at the bottom-left and re-trims (drawing on the finished bilevel
# image; drawing before the level/threshold corrupts them).
while read -r n page x y w h cw ch; do
  f="$OUT/figures/figure-2-$n.png"
  magick "$SRC/page-$page.jpg" -crop "${w}x${h}+${x}+${y}" +repage \
    -colorspace Gray -level 18%,92% -fuzz 45% -trim +repage \
    -threshold 60% -despeckle -trim +repage -bordercolor white -border 34 "$f"
  if [ -n "${cw:-}" ]; then
    fh=$(magick identify -format "%h" "$f")
    magick "$f" -fill white -draw "rectangle 0,$((fh-ch)) ${cw},${fh}" \
      -trim +repage -bordercolor white -border 34 "$f"
  fi
done <<'CROPS'
1 32 330 1370 520 1100
2 32 900 1370 610 880
3 33 120 780 560 1000
4 33 650 1150 900 1050
5 34 300 720 620 1100
6 34 750 1370 700 860
7 35 100 620 520 1100
8 35 400 1100 1080 1300
9 36 300 760 760 980
10 36 760 1370 720 1050
11 37 100 650 720 1050
12 37 650 1370 720 980
13 38 340 780 720 980 175 200
14 38 750 1430 700 1050
15 39 100 560 1050 780
16 39 650 1400 750 850
17 40 100 560 1120 1000 250 160
18 40 760 1600 700 900
19 41 100 650 700 950
20 41 600 1350 820 1050
21 42 300 700 680 1050
22 42 650 1350 820 1200
23 43 100 560 1120 780
24 43 650 1450 680 950
25 44 860 360 560 900
26 44 300 1450 1100 900
27 45 100 900 500 1220
28 45 470 1000 600 1050
29 45 960 1050 520 1050
CROPS

node "$ROOT/scripts/build_standing_dense_grid.mjs"
magick montage "$OUT/print/pages/"*.png -thumbnail 330x440 -tile 4x \
  -geometry +12+12 -background '#e8e8e8' "$OUT/previews/contact-sheet.jpg"
qpdf --check "$OUT/print/standing-sequence-dense-grid-letter.pdf"
pdfinfo "$OUT/print/standing-sequence-dense-grid-letter.pdf" | sed -n '/Pages:/p;/Page size:/p'

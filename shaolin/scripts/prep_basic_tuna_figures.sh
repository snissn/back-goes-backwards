#!/usr/bin/env bash
# Extract and clean figures 1-1 through 1-46 from the scanned Chapter 1 PDF.
# The crop rectangles are deliberately generous; final trim is gentle and a white
# border is restored so heads, hands, feet, and the book's motion arrows survive.
# Portable to the macOS system bash (3.2): no associative arrays.
set -euo pipefail
cd "$(dirname "$0")/.."

PDF=basic-tuna-practice/source/20260716115716_001.pdf
PAGES=basic-tuna-practice/source-pages
FIGS=basic-tuna-practice/figures

mkdir -p "$PAGES" "$FIGS"
pdftoppm -jpeg -r 180 "$PDF" "$PAGES/raw" >/dev/null 2>&1

# Every normalized spread is 1938x1484. Pages 3, 4, 8, and 9 were photographed
# upside down; pages 1, 10, and 14 were photographed sideways.
for n in $(seq -w 1 14); do
  rotate=0
  case "$n" in
    03|04|08|09) rotate=180 ;;
    01|10|14) rotate=90 ;;
  esac
  magick "$PAGES/raw-$n.jpg" -rotate "$rotate" "$PAGES/page-$n.jpg"
done

crop_figure() {
  n=$1
  page=$2
  geometry=$3
  magick "$PAGES/page-$page.jpg" \
    -crop "$geometry" +repage \
    -colorspace Gray -level 45%,94% \
    -fuzz 3% -trim +repage \
    -bordercolor white -border 9%x6% \
    "$FIGS/figure-1-$n.png"
}

# Pages 4-5 of the book: seated breath-counting alternatives.
crop_figure 1 02 300x290+430+600
crop_figure 2 02 270x280+1320+430

# Pages 7-8: standing palm-press sequence.
crop_figure 3 03 330x540+1080+650
crop_figure 4 03 290x520+1480+670
crop_figure 5 04 300x450+230+410
crop_figure 6 04 280x460+640+400

# Pages 9-10: seated torso-turn sequence. Keep the primary drawing, not the
# adjacent supplemental back/side view.
crop_figure 7 04 240x300+1150+600
crop_figure 8 04 240x290+1150+980
crop_figure 9 05 240x300+270+390
crop_figure 10 05 240x300+670+390

# Pages 10-12: standing torso-turn sequence. Figure 1-11's supplemental view is
# excluded, while the primary view retains both hands and the head-turn arrow.
crop_figure 11 05 250x440+1160+160
crop_figure 12 05 240x450+1310+800
crop_figure 13 06 250x430+470+250

# Pages 13-15: shoulder-release / joint-opening sequence. Supplemental side
# views beside 1-15 and 1-17 are excluded.
crop_figure 14 06 210x450+1340+200
crop_figure 15 06 250x470+1140+750
crop_figure 16 07 220x450+470+330
crop_figure 17 07 230x440+280+840
crop_figure 18 07 270x430+1360+380

# Pages 16-17: power-and-sound breath plus the opening stance of method 7.
crop_figure 19 08 240x440+280+620
crop_figure 20 08 250x450+700+770
crop_figure 21 08 260x420+1340+800

# Pages 18-21: method 7 opening and Push Qi.
crop_figure 22 09 240x450+440+520
crop_figure 23 09 230x270+1170+600
crop_figure 24 09 230x285+1500+590
crop_figure 25 09 270x350+1340+930
crop_figure 26 10 250x450+260+320
crop_figure 27 10 230x420+490+820
crop_figure 28 10 250x460+1150+400
crop_figure 29 10 220x450+1520+740

# Pages 22-24: Divide Qi and its transition into Scoop Qi.
crop_figure 30 11 250x300+270+550
crop_figure 31 11 240x300+650+550
crop_figure 32 11 270x370+480+910
crop_figure 33 11 250x460+1170+380
crop_figure 34 11 380x470+1370+760
crop_figure 35 12 390x490+130+370
crop_figure 36 12 230x460+650+780
crop_figure 37 12 280x400+1280+570
crop_figure 38 12 480x300+1190+970

# Pages 26-28: Scoop Qi and the closing stance.
crop_figure 39 13 380x290+330+520
crop_figure 40 13 360x410+190+870
crop_figure 41 13 340x420+600+860
crop_figure 42 13 340x600+1100+320
crop_figure 43 13 370x440+1440+350
crop_figure 44 13 370x330+1280+920
crop_figure 45 14 240x470+260+580
crop_figure 46 14 220x470+650+820

# Figure 1-42's generous crop is required to preserve both feet and the vertical
# arrows. Source prose sits above the arrowheads and its caption sits below the
# feet, so remove those two bands after the complete figure has been isolated.
magick "$FIGS/figure-1-42.png" \
  -gravity North -chop 0x180 +repage \
  -gravity South -chop 0x60 +repage \
  -bordercolor white -border 0x20 \
  "$FIGS/figure-1-42.png"

# Figure 1-37's caption is separated from the feet by clean white space.
magick "$FIGS/figure-1-37.png" \
  -gravity South -chop 0x58 +repage \
  -bordercolor white -border 0x16 \
  "$FIGS/figure-1-37.png"

echo "rebuilt $PAGES and $FIGS from $PDF"

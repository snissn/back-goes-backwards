#!/usr/bin/env bash
# Extract, straighten, and crop the figures from Chapter 1 of 少林铁腿绝技.
#
# The photographed book page is normalized before any figure crop is chosen.
# Crops are deliberately generous so heads, hands, feet, supports, and source
# movement arrows survive the final trim.
set -euo pipefail
cd "$(dirname "$0")/.."

PDF=iron-leg-skill/source/20260718115903_001.pdf
PAGES=iron-leg-skill/source-pages
FIGS=iron-leg-skill/figures

mkdir -p "$PAGES" "$FIGS"
pdfimages -j "$PDF" "$PAGES/raw"

# The scanner alternated which side held the complete photographed book page.
# Six pages were also photographed upside down. First orient the scan, isolate
# the complete physical page, then deskew from its printed text baselines.
for book_page in $(seq 1 19); do
  n=$(printf '%02d' "$book_page")
  raw=$(printf '%03d' "$((book_page - 1))")
  rotate=0
  case "$n" in
    01|03|07|09|11|19) rotate=180 ;;
  esac

  if (( book_page % 2 == 0 )); then
    page_crop=1240x1760+0+0
  else
    page_crop=1240x1760+400+394
  fi

  magick "$PAGES/raw-$raw.jpg" \
    -rotate "$rotate" -crop "$page_crop" +repage \
    -colorspace sRGB -background white -deskew 40% +repage \
    "$PAGES/page-$n.jpg"
done

crop_figure() {
  n=$1
  page=$2
  geometry=$3
  mask_top=${4:-0}
  mask_left=${5:-0}
  mask_right=${6:-0}
  crop_width=${geometry%%x*}

  cmd=(magick "$PAGES/page-$page.jpg" -crop "$geometry" +repage)
  if (( mask_top > 0 )); then
    cmd+=(-fill white -draw "rectangle 0,0 9999,$mask_top")
  fi
  if (( mask_left > 0 )); then
    cmd+=(-fill white -draw "rectangle 0,0 $mask_left,9999")
  fi
  if (( mask_right > 0 )); then
    cmd+=(-fill white -draw "rectangle $((crop_width-mask_right)),0 9999,9999")
  fi
  cmd+=(
    -colorspace Gray -level 45%,94% -fuzz 3% -trim +repage
    -bordercolor white -border 9%x6% "$FIGS/figure-1-$n.png"
  )
  "${cmd[@]}"
}

# Flexibility training: figures 1-1 through 1-17.
crop_figure 1 02 330x330+230+470
crop_figure 2 02 470x490+680+310
crop_figure 3 02 350x470+210+1160
crop_figure 4 02 430x470+690+1160
crop_figure 5 03 500x470+120+640
crop_figure 6 03 490x490+660+620
crop_figure 7 04 530x220+670+220
crop_figure 8 04 260x500+170+1120
crop_figure 9 04 390x470+450+1140
crop_figure 10 04 280x520+870+1100
crop_figure 11 05 330x470+170+640
crop_figure 12 05 340x480+650+630
crop_figure 13 06 480x500+50+570
crop_figure 14 06 600x530+640+540
crop_figure 15 06 570x340+660+1160
crop_figure 16 07 650x300+560+540
crop_figure 17 07 380x500+20+950

# Speed training: figures 1-18 through 1-55.
crop_figure 18 08 460x530+90+950
crop_figure 19 08 500x490+650+990
crop_figure 20 09 480x500+130+220
crop_figure 21 09 470x500+680+220
crop_figure 22 09 300x560+910+970
crop_figure 23 10 440x500+40+410
crop_figure 24 10 390x490+480+420
crop_figure 25 10 360x490+840+420
crop_figure 26 11 500x500+50+160
crop_figure 27 11 520x510+620+150
crop_figure 28 11 500x530+50+740
crop_figure 29 11 590x540+600+730
crop_figure 30 12 500x530+190+540
crop_figure 31 12 500x540+690+540
crop_figure 32 12 520x470+150+1150
crop_figure 33 12 480x480+700+1140
crop_figure 34 13 350x490+50+650
crop_figure 35 13 360x510+430+630 0 70 25
crop_figure 36 13 380x520+820+620
crop_figure 37 14 300x530+300+450
crop_figure 38 14 510x500+690+450
crop_figure 39 14 310x500+930+1070
crop_figure 40 15 330x520+840+220
crop_figure 41 15 460x520+120+930
crop_figure 42 15 480x540+700+900
crop_figure 43 16 400x530+170+220
crop_figure 44 16 500x540+680+210
crop_figure 45 17 530x500+80+250 0 20
crop_figure 46 17 560x520+600+240
crop_figure 47 17 510x510+90+830 0 20
crop_figure 48 17 500x520+650+830
crop_figure 49 18 480x520+270+330 20
crop_figure 50 18 480x500+750+350
crop_figure 51 18 150x520+1090+1080 0 20
crop_figure 52 19 405x500+745+150
crop_figure 53 19 360x500+120+1060
crop_figure 54 19 360x520+450+1040 20
crop_figure 55 19 300x500+820+1070

magick montage "$FIGS"/figure-1-*.png \
  -thumbnail 190x190 -tile 8x -geometry +8+18 \
  -background white -fill '#222' -pointsize 14 -set label '%t' \
  iron-leg-skill/figures-contact-sheet.jpg

echo "rebuilt $PAGES and $FIGS from $PDF"

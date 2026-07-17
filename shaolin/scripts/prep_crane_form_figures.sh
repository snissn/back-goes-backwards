#!/usr/bin/env bash
# Extract and clean the Crane-Form figures from the scanned Chapter 3 PDF.
# Crops are intentionally generous; gentle trim plus restored white border keeps
# complete heads, hands, feet, source arrows, and the supplemental diagrams.
set -euo pipefail
cd "$(dirname "$0")/.."

PDF=crane-form-tuna/source/20260716174702_001.pdf
PAGES=crane-form-tuna/source-pages
FIGS=crane-form-tuna/figures

mkdir -p "$PAGES" "$FIGS"
pdftoppm -jpeg -r 180 "$PDF" "$PAGES/raw" >/dev/null 2>&1

# Normalize every photographed spread to an upright 1938x1484 landscape page.
for n in $(seq -w 1 24); do
  rotate=0
  case "$n" in
    01|09) rotate=90 ;;
    02|04|05|06|12|13|14|15|16|19|22) rotate=180 ;;
  esac
  magick "$PAGES/raw-$n.jpg" -rotate "$rotate" "$PAGES/page-$n.jpg"
done

# The first photographed section has different skew on the two physical pages.
# Straighten each page half from its printed header/rules before choosing any
# figure crop. These are page corrections, not figure-level aesthetic tweaks.
normalize_page_half() {
  page=$1; side=$2; angle=$3
  if [[ "$side" == left ]]; then
    geometry=969x1484+0+0
  else
    geometry=969x1484+969+0
  fi
  magick "$PAGES/page-$page.jpg" -crop "$geometry" +repage \
    -background white -virtual-pixel white -rotate "$angle" +repage \
    "$PAGES/page-$page-$side.jpg"
}

normalize_page_half 02 left 3.80
normalize_page_half 02 right 0.22
normalize_page_half 03 left 4.02
normalize_page_half 03 right 0
normalize_page_half 04 left 3.74
normalize_page_half 04 right -0.11
normalize_page_half 05 left 0.62
normalize_page_half 05 right -1.01
normalize_page_half 06 left 0.78
normalize_page_half 06 right -0.84
normalize_page_half 07 left 0.62
normalize_page_half 07 right -1.01
normalize_page_half 08 left 0.45
normalize_page_half 08 right -0.39
normalize_page_half 09 left 1.57
normalize_page_half 09 right 0.11

crop_source() {
  n=$1; source=$2; geometry=$3; angle=${4:-0}; mask_top=${5:-0}; mask_left=${6:-0}; mask_right=${7:-0}; flood_right_fuzz=${8:-}
  crop_width=${geometry%%x*}
  cmd=(magick "$source" -crop "$geometry" +repage
    -background white -virtual-pixel white -rotate "$angle" +repage)
  if [[ -n "$flood_right_fuzz" ]]; then
    # Remove a connected photographed page edge without drawing over a figure
    # that reaches the same side of the crop (for example, figure 3-11's foot).
    cmd+=(-fuzz "$flood_right_fuzz" -fill white -draw "color $((crop_width-1)),0 floodfill")
  fi
  if (( mask_top > 0 )); then
    cmd+=(-fill white -draw "rectangle 0,0 9999,$mask_top")
  fi
  if (( mask_left > 0 )); then
    cmd+=(-fill white -draw "rectangle 0,0 $mask_left,9999")
  fi
  if (( mask_right > 0 )); then
    cmd+=(-fill white -draw "rectangle $((crop_width-mask_right)),0 9999,9999")
  fi
  cmd+=(-colorspace Gray -level 45%,94% -fuzz 3% -trim +repage
    -bordercolor white -border 9%x6% "$FIGS/figure-3-$n.png")
  "${cmd[@]}"
}

crop_figure() {
  n=$1; page=$2; geometry=$3; angle=${4:-0}; mask_top=${5:-0}; mask_left=${6:-0}; mask_right=${7:-0}
  crop_source "$n" "$PAGES/page-$page.jpg" "$geometry" "$angle" "$mask_top" "$mask_left" "$mask_right" ""
}

crop_normalized() {
  n=$1; page=$2; side=$3; geometry=$4; angle=${5:-0}; mask_top=${6:-0}; mask_left=${7:-0}; mask_right=${8:-0}; flood_right_fuzz=${9:-}
  crop_source "$n" "$PAGES/page-$page-$side.jpg" "$geometry" "$angle" "$mask_top" "$mask_left" "$mask_right" "$flood_right_fuzz"
}

# Opening and first eight linked movements: figures 3-1 through 3-30.
crop_normalized 1 02 left 370x480+305+850
crop_normalized 2 02 left 340x485+650+850 0 0 0 75
crop_normalized 3 02 right 388x418+85+315 0 0 30
crop_normalized 4 02 right 398x419+455+313
crop_normalized 5 02 right 378x399+477+813
crop_normalized 6 03 left 363x428+252+441
crop_normalized 7 03 left 360x430+620+825 0 0 0 50
crop_normalized 8 03 right 406x446+83+402 0 0 30
crop_normalized 9 03 right 446x466+403+712
crop_normalized 10 04 left 440x375+230+740
crop_normalized 11 04 left 330x410+650+920 0 0 0 0 18%
crop_normalized 12 04 right 408x407+74+473 0 0 30
crop_normalized 13 04 right 517x388+364+843
crop_normalized 14 05 left 492x453+199+625
crop_normalized 15 05 left 362x451+561+823
crop_normalized 16 05 right 544x456+176+345
crop_normalized 17 05 right 524x436+198+835
crop_normalized 18 06 left 372x431+202+679
crop_normalized 19 06 left 372x382+553+754
crop_normalized 20 06 right 443x423+250+626
crop_normalized 21 07 left 371x401+200+677
crop_normalized 22 07 left 370x341+561+753
crop_normalized 23 07 right 360x250+320+420
crop_normalized 24 07 right 523x366+241+726
crop_normalized 25 08 left 350x420+198+706
crop_normalized 26 08 left 390x400+529+753
crop_normalized 27 08 right 400x470+266+604
crop_normalized 28 09 left 390x365+380+400
crop_normalized 28a 09 left 407x417+364+789
crop_normalized 29 09 right 408x468+104+363
crop_normalized 30 09 right 418x498+454+653

# Book pages 84-85 (figures 3-31 through 3-33) are absent from this scan.
# Resume exactly where the supplied source resumes, at figure 3-34.
crop_figure 34 10 520x330+280+660
crop_figure 35 10 550x390+1170+390
crop_figure 36 10 520x420+1170+830
crop_figure 37 11 600x430+180+630
crop_figure 38 11 500x380+1180+390
crop_figure 39 11 580x290+1160+860
crop_figure 40 12 500x380+290+480
crop_figure 41 12 420x330+340+930
crop_figure 42 12 430x320+1030+740
crop_figure 43 12 370x270+1450+1010
crop_figure 44 13 250x500+230+630
crop_figure 45 13 360x500+530+630
crop_figure 46 13 420x320+1200+430
crop_figure 47 13 360x430+1230+820
crop_figure 48 14 410x410+330+410
crop_figure 49 14 430x300+330+900
crop_figure 50 14 350x390+1050+660
crop_figure 51 14 350x390+1410+660
crop_figure 52 15 380x270+350+280
crop_figure 53 15 400x390+190+860
crop_figure 54 15 360x390+550+860
crop_figure 55 15 360x430+1060+680
crop_figure 56 15 480x440+1370+660
crop_figure 57 16 500x350+270+280
crop_figure 58 16 390x370+180+920 0 35
crop_figure 59 16 380x380+520+900
crop_figure 60 16 450x420+1020+760 0 0 40
crop_figure 61 16 400x430+1430+740
crop_figure 62 17 340x470+190+620
crop_figure 62a 17 400x460+530+630
crop_figure 63 17 400x460+1030+330
crop_figure 64 17 400x450+1420+330
crop_figure 65 17 430x430+1400+820
crop_figure 66 18 270x440+210+620
crop_figure 67 18 290x420+610+860
crop_figure 68 18 340x410+1240+400
crop_figure 69 18 430x360+1200+900
crop_figure 70 19 380x460+370+600
crop_figure 71 19 370x500+1070+350
crop_figure 72 19 400x430+1390+700
crop_figure 73 20 340x430+560+330
crop_figure 73a 20 260x320+260+880
crop_figure 73b 20 250x310+610+880
crop_figure 74 20 350x420+1250+370
crop_figure 75 20 350x400+1080+880
crop_figure 75a 20 320x350+1450+900
crop_figure 76 21 340x390+390+280
crop_figure 77 21 380x430+190+760
crop_figure 77a 21 320x430+590+780
crop_figure 78 21 390x430+1060+360
crop_figure 79 21 430x380+1030+880 0 0 18
crop_figure 79a 21 300x400+1460+850
crop_figure 80 22 300x310+570+200
crop_figure 81 22 320x300+380+980
crop_figure 82 22 430x390+1030+630
crop_figure 83 22 370x410+1430+830
crop_figure 84 23 380x430+180+430
crop_figure 85 23 380x410+530+800
crop_figure 86 23 450x400+1020+660
crop_figure 87 23 330x450+1470+800
crop_figure 88 24 230x430+410+300
crop_figure 89 24 330x430+370+830
crop_figure 90 24 250x440+1310+310
crop_figure 91 24 250x450+1310+800

magick montage "$FIGS"/*.png -thumbnail 190x190 -tile 8x -geometry +8+18 \
  -background white -fill '#222' -pointsize 14 -set label '%t' \
  crane-form-tuna/figures-contact-sheet.jpg

echo "rebuilt $PAGES and $FIGS from $PDF"

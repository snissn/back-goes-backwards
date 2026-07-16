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

crop_figure() {
  n=$1; page=$2; geometry=$3; angle=${4:-0}; mask_top=${5:-0}
  cmd=(magick "$PAGES/page-$page.jpg" -crop "$geometry" +repage
    -background white -virtual-pixel white -rotate "$angle" +repage)
  if (( mask_top > 0 )); then
    cmd+=(-fill white -draw "rectangle 0,0 9999,$mask_top")
  fi
  cmd+=(-colorspace Gray -level 45%,94% -fuzz 3% -trim +repage
    -bordercolor white -border 9%x6% "$FIGS/figure-3-$n.png")
  "${cmd[@]}"
}

# Opening and first eight linked movements: figures 3-1 through 3-30.
crop_figure 1 02 250x480+290+830 -0.5
crop_figure 2 02 300x430+620+830
crop_figure 3 02 370x400+1060+320
crop_figure 4 02 380x400+1430+320
crop_figure 5 02 360x380+1450+820
crop_figure 6 03 320x390+230+420
crop_figure 7 03 350x360+550+790
crop_figure 8 03 390x430+1060+410
crop_figure 9 03 430x450+1380+720
crop_figure 10 04 500x400+150+680
crop_figure 11 04 330x430+620+850
crop_figure 12 04 390x390+1050+480
crop_figure 13 04 500x370+1340+850
crop_figure 14 05 470x430+200+630
crop_figure 15 05 340x430+560+830
crop_figure 16 05 520x430+1140+350
crop_figure 17 05 500x410+1170+840
crop_figure 18 06 350x410+200+680
crop_figure 19 06 350x360+550+760
crop_figure 20 06 420x400+1220+630
crop_figure 21 07 350x380+200+680
crop_figure 22 07 350x320+560+760
crop_figure 23 07 350x310+1260+370
crop_figure 24 07 500x340+1210+730
crop_figure 25 08 330x400+200+710
crop_figure 26 08 370x380+530+760
crop_figure 27 08 380x450+1240+610
crop_figure 28 09 400x420+350+350
crop_figure 28a 09 380x390+350+790
crop_figure 29 09 390x450+1080+370
crop_figure 30 09 400x480+1430+660

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
crop_figure 60 16 450x420+1020+760
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
crop_figure 79 21 430x380+1030+880
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

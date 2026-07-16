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
  n=$1; page=$2; geometry=$3
  magick "$PAGES/page-$page.jpg" -crop "$geometry" +repage \
    -colorspace Gray -level 45%,94% -fuzz 3% -trim +repage \
    -bordercolor white -border 9%x6% "$FIGS/figure-3-$n.png"
}

# Opening and first eight linked movements: figures 3-1 through 3-30.
crop_figure 1 02 360x430+250+800
crop_figure 2 02 380x430+560+800
crop_figure 3 02 390x440+1060+270
crop_figure 4 02 420x450+1420+250
crop_figure 5 02 420x450+1400+730
crop_figure 6 03 430x500+180+360
crop_figure 7 03 520x500+390+650
crop_figure 8 03 400x520+1050+300
crop_figure 9 03 480x560+1340+600
crop_figure 10 04 520x560+170+490
crop_figure 11 04 380x650+580+660
crop_figure 12 04 400x480+1020+390
crop_figure 13 04 590x600+1280+620
crop_figure 14 05 520x500+170+600
crop_figure 15 05 430x500+470+750
crop_figure 16 05 520x520+1050+330
crop_figure 17 05 520x530+1070+760
crop_figure 18 06 460x560+180+520
crop_figure 19 06 480x520+470+660
crop_figure 20 06 520x520+1110+520
crop_figure 21 07 500x520+180+640
crop_figure 22 07 450x500+470+650
crop_figure 23 07 520x420+1110+310
crop_figure 24 07 560x480+1090+700
crop_figure 25 08 450x550+170+610
crop_figure 26 08 410x500+520+700
crop_figure 27 08 460x590+1240+500
crop_figure 28 09 460x450+330+320
crop_figure 28a 09 450x360+320+790
crop_figure 29 09 500x450+1050+330
crop_figure 30 09 520x550+1330+600

# Book pages 84-85 (figures 3-31 through 3-33) are absent from this scan.
# Resume exactly where the supplied source resumes, at figure 3-34.
crop_figure 34 10 600x450+200+590
crop_figure 35 10 580x460+1090+360
crop_figure 36 10 600x430+1050+770
crop_figure 37 11 600x480+190+610
crop_figure 38 11 550x500+1110+320
crop_figure 39 11 620x450+1050+760
crop_figure 40 12 620x430+190+480
crop_figure 41 12 520x390+300+850
crop_figure 42 12 540x390+1040+650
crop_figure 43 12 530x400+1360+820
crop_figure 44 13 360x500+180+600
crop_figure 45 13 430x500+500+600
crop_figure 46 13 550x430+1080+360
crop_figure 47 13 430x500+1210+700
crop_figure 48 14 480x450+280+360
crop_figure 49 14 600x420+220+780
crop_figure 50 14 400x430+1100+610
crop_figure 51 14 400x430+1420+610
crop_figure 52 15 500x380+230+280
crop_figure 53 15 480x450+180+750
crop_figure 54 15 420x450+520+750
crop_figure 55 15 380x520+1100+560
crop_figure 56 15 440x520+1360+550
crop_figure 57 16 600x420+200+250
crop_figure 58 16 500x430+180+820
crop_figure 59 16 430x430+500+820
crop_figure 60 16 430x470+1040+730
crop_figure 61 16 500x470+1360+720
crop_figure 62 17 450x530+160+580
crop_figure 62a 17 440x500+500+580
crop_figure 63 17 480x500+1020+300
crop_figure 64 17 480x500+1400+300
crop_figure 65 17 480x520+1360+760
crop_figure 66 18 380x470+180+570
crop_figure 67 18 440x480+520+700
crop_figure 68 18 420x500+1150+320
crop_figure 69 18 450x450+1150+760
crop_figure 70 19 500x480+250+600
crop_figure 71 19 540x560+1070+300
crop_figure 72 19 500x520+1350+600
crop_figure 73 20 460x520+450+280
crop_figure 73a 20 330x360+190+820
crop_figure 73b 20 330x360+560+820
crop_figure 74 20 440x480+1190+330
crop_figure 75 20 370x450+1040+770
crop_figure 75a 20 360x430+1470+760
crop_figure 76 21 480x480+320+250
crop_figure 77 21 450x440+180+720
crop_figure 77a 21 380x430+550+760
crop_figure 78 21 450x480+1210+310
crop_figure 79 21 450x430+980+790
crop_figure 79a 21 350x450+1500+730
crop_figure 80 22 400x430+520+180
crop_figure 81 22 500x430+340+820
crop_figure 82 22 500x500+1030+550
crop_figure 83 22 500x470+1370+740
crop_figure 84 23 430x520+160+350
crop_figure 85 23 480x430+430+780
crop_figure 86 23 560x450+1040+660
crop_figure 87 23 420x550+1420+680
crop_figure 88 24 390x520+280+250
crop_figure 89 24 440x520+260+760
crop_figure 90 24 430x520+1220+250
crop_figure 91 24 380x530+1240+760

magick montage "$FIGS"/*.png -thumbnail 190x190 -tile 8x -geometry +8+18 \
  -background white -fill '#222' -pointsize 14 -set label '%t' \
  crane-form-tuna/figures-contact-sheet.jpg

echo "rebuilt $PAGES and $FIGS from $PDF"

#!/usr/bin/env bash
# Extract, straighten, and crop book pages 20-58 from 少林铁腿绝技.
#
# This continuation completes Chapter 1 (figures 1-56 through 1-74) and
# continues through Chapter 2 figure 2-100. Every crop is derived from a
# complete physical page after coarse orientation and printed-page deskew.
set -euo pipefail
cd "$(dirname "$0")/.."

PDF=iron-leg-skill/source/20260718121433_001.pdf
PAGES=iron-leg-skill/source-pages
FIGS=iron-leg-skill/figures

mkdir -p "$PAGES" "$FIGS"
pdfimages -j "$PDF" "$PAGES/raw-cont"

for scan_page in $(seq 1 39); do
  scan_n=$(printf '%02d' "$scan_page")
  raw_n=$(printf '%03d' "$((scan_page - 1))")
  book_page=$((scan_page + 19))
  book_n=$(printf '%02d' "$book_page")
  rotate=0
  case "$scan_n" in
    01|02|09|11|12|14|18|28|29|32|36|38) rotate=180 ;;
  esac

  if (( book_page % 2 == 0 )); then
    page_crop=1240x1760+0+0
  else
    page_crop=1240x1760+400+394
  fi

  magick "$PAGES/raw-cont-$raw_n.jpg" \
    -rotate "$rotate" -crop "$page_crop" +repage \
    -colorspace sRGB -background white -deskew 40% +repage \
    "$PAGES/page-$book_n.jpg"
done

crop_figure() {
  chapter=$1
  n=$2
  page=$3
  geometry=$4
  mask_top=${5:-0}
  mask_left=${6:-0}
  mask_right=${7:-0}
  mask_bottom=${8:-0}
  mask_extra=${9:-}
  crop_width=${geometry%%x*}
  crop_height=${geometry#*x}
  crop_height=${crop_height%%+*}
  tmp="$FIGS/.figure-$chapter-$n-crop.png"

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
  if (( mask_bottom > 0 )); then
    cmd+=(-fill white -draw "rectangle 0,$((crop_height-mask_bottom)) 9999,9999")
  fi
  if [[ -n "$mask_extra" ]]; then
    cmd+=(-fill white -draw "$mask_extra")
  fi
  cmd+=(
    -colorspace Gray -level 45%,94% "$tmp"
  )
  "${cmd[@]}"

  # Only multi-character horizontal text at an outer edge is eligible for
  # automated cleanup. Compact marks are categorically excluded so facial
  # features, feet, garment marks, props, and arrows remain protected.
  text_masks=()
  while IFS= read -r mask; do
    [[ -n "$mask" ]] && text_masks+=(-fill white -draw "$mask")
  done < <(scripts/vision_ocr.swift --boxes "$tmp")
  if (( ${#text_masks[@]} > 0 )); then
    magick "$tmp" "${text_masks[@]}" \
      -fuzz 3% -trim +repage -bordercolor white -border 9%x6% \
      "$FIGS/figure-$chapter-$n.png"
  else
    magick "$tmp" \
      -fuzz 3% -trim +repage -bordercolor white -border 9%x6% \
      "$FIGS/figure-$chapter-$n.png"
  fi
  rm -f "$tmp"
}

# Crop definitions are grouped below by printed book page. The geometries
# intentionally include every visible hand, foot, prop, and movement arrow.

# Chapter 1 continuation: strength and hardening exercises.
crop_figure 1 56 20 250x520+980+440 35
crop_figure 1 57 20 540x520+140+1000

crop_figure 1 58 21 550x570+50+400 65 70
crop_figure 1 59 21 610x460+600+520 25 0 0 45
crop_figure 1 60 21 520x500+700+990 25

crop_figure 1 61 22 170x560+1070+210 0 0 0 55
crop_figure 1 62 22 960x500+180+1090 60

crop_figure 1 63 23 610x640+270+260
crop_figure 1 64 23 830x500+270+1080

crop_figure 1 65 24 430x500+450+240

crop_figure 1 66 25 400x510+110+240
crop_figure 1 67 25 430x510+630+240
crop_figure 1 68 25 430x550+100+900 45
crop_figure 1 69 25 430x550+620+900

crop_figure 1 70 26 460x500+170+250
crop_figure 1 71 26 470x500+690+250
crop_figure 1 72 26 650x500+380+1130

crop_figure 1 73 27 540x550+80+170 0 55
crop_figure 1 74 27 560x550+620+170

# Chapter 2, section 1: footwork.
crop_figure 2 1 28 500x520+240+1110
crop_figure 2 2 28 390x520+840+1110

crop_figure 2 3 29 440x570+750+150 0 0 0 0 "rectangle 0,0 34,160"
crop_figure 2 4 29 510x590+90+800 0 30
crop_figure 2 5 29 520x590+620+800

crop_figure 2 6 30 420x520+180+510 0 0 0 40
crop_figure 2 7 30 380x520+690+510
crop_figure 2 8 30 300x500+930+1090 0 30

crop_figure 2 9 31 370x510+80+510 25
crop_figure 2 10 31 350x510+420+510 45
crop_figure 2 11 31 390x530+780+510 25

crop_figure 2 12 32 430x600+200+360
crop_figure 2 13 32 420x600+780+360
crop_figure 2 14 32 370x500+840+1030

crop_figure 2 15 33 480x550+90+460
crop_figure 2 16 33 450x550+660+460

crop_figure 2 17 34 300x610+930+180
crop_figure 2 18 34 340x590+140+900 0 0 0 30
crop_figure 2 19 34 310x590+520+900 0 0 0 30
crop_figure 2 20 34 320x590+910+900 0 0 0 30

crop_figure 2 21 35 420x670+790+170
crop_figure 2 22 35 245x470+135+830 0 5
crop_figure 2 23 35 370x620+410+780
crop_figure 2 24 35 390x620+800+780

crop_figure 2 25 36 430x550+200+670
crop_figure 2 26 36 310x550+650+670
crop_figure 2 27 36 260x550+980+670

crop_figure 2 28 37 380x600+90+350 45
crop_figure 2 29 37 350x600+430+350 45
crop_figure 2 30 37 370x600+810+350
crop_figure 2 31 37 470x550+720+950

crop_figure 2 32 38 350x550+190+320 25
crop_figure 2 33 38 300x550+620+320 45
crop_figure 2 34 38 260x550+980+320 25
crop_figure 2 35 38 340x570+860+1090

crop_figure 2 36 39 470x590+100+320 0 55
crop_figure 2 37 39 530x590+620+320
crop_figure 2 38 39 450x530+730+1050

crop_figure 2 39 40 590x520+70+300
crop_figure 2 40 40 490x520+730+300
crop_figure 2 41 40 580x510+70+920 45
crop_figure 2 42 40 560x510+680+920

crop_figure 2 43 41 470x570+90+300 0 55
crop_figure 2 44 41 540x470+650+490
crop_figure 2 45 41 420x530+780+950 0 0 0 45

crop_figure 2 46 42 500x520+150+250
crop_figure 2 47 42 480x520+700+250
crop_figure 2 48 42 380x520+840+1000 0 0 40 40

crop_figure 2 49 43 490x560+70+160 0 80 0 100
crop_figure 2 50 43 460x560+660+160
crop_figure 2 51 43 322x500+108+1040
crop_figure 2 52 43 300x560+450+1040 0 35
crop_figure 2 53 43 300x560+800+1040

# Chapter 2, section 2: body methods.
crop_figure 2 54 44 330x640+270+910
crop_figure 2 55 44 330x640+800+910

crop_figure 2 56 45 500x640+90+610 0 55
crop_figure 2 57 45 510x640+660+610

crop_figure 2 58 46 500x610+90+360
crop_figure 2 59 46 510x610+660+360

crop_figure 2 60 47 500x590+80+160 0 55 0 45
crop_figure 2 61 47 520x590+650+160
crop_figure 2 62 47 500x590+80+960 0 0 0 40
crop_figure 2 63 47 510x590+660+960 0 0 0 30

crop_figure 2 64 48 420x590+790+160 0 45 35
crop_figure 2 65 48 500x640+90+760
crop_figure 2 66 48 510x640+660+760

crop_figure 2 67 49 500x610+80+450 40 55
crop_figure 2 68 49 500x610+650+450 40
crop_figure 2 69 49 380x580+820+1010 35

crop_figure 2 70 50 330x550+130+350 0 0 0 40
crop_figure 2 71 50 300x550+450+350 0 0 0 40
crop_figure 2 72 50 300x550+800+350 0 0 0 40
crop_figure 2 73 50 320x560+900+1020 0 0 35

crop_figure 2 74 51 450x590+80+270 30 55 0 40
crop_figure 2 75 51 520x590+620+270
crop_figure 2 76 51 338x500+122+1040 45 0 0 0 \
  "rectangle 0,0 4,400"
crop_figure 2 77 51 330x630+520+960 0 0 0 40
crop_figure 2 78 51 290x630+910+960 0 0 0 40

crop_figure 2 79 52 440x550+140+700
crop_figure 2 80 52 500x550+660+700 0 0 25
crop_figure 2 81 52 560x260+370+1400

crop_figure 2 82 53 500x580+80+440 0 80
crop_figure 2 83 53 540x430+630+590

crop_figure 2 84 54 500x580+80+260
crop_figure 2 85 54 500x580+660+260
crop_figure 2 86 54 390x600+90+1070 0 15 0 40
crop_figure 2 87 54 540x600+650+1070 0 0 45

crop_figure 2 88 55 500x730+80+500 0 80
crop_figure 2 89 55 510x730+650+500

crop_figure 2 90 56 400x560+70+500 35 0 0 40
crop_figure 2 91 56 300x560+420+500 30 0 0 30
crop_figure 2 92 56 420x560+780+500 0 0 50 30
crop_figure 2 93 56 310x570+890+1090 0 0 35 40

crop_figure 2 94 57 500x640+80+290 0 80 0 40
crop_figure 2 95 57 510x640+650+290

crop_figure 2 96 58 460x600+100+210 0 0 0 75
crop_figure 2 97 58 430x600+740+210
crop_figure 2 98 58 390x520+70+1170 35 0 0 40
crop_figure 2 99 58 350x520+470+1170
crop_figure 2 100 58 320x520+880+1170 0 0 45

echo "rebuilt continuation pages 20-58 from $PDF"

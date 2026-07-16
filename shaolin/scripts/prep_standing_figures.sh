#!/usr/bin/env bash
# Rebuild standing-sequence-dense-grid/figures-clean/ from the original book scans:
#  - gentle trim (fuzz 3% keeps the faint fingertip lines; 8% ate them)
#  - chop the Chinese 图2-N caption off the bottom
#  - crop composites (front view + 附图 side-view / stray) to the front figure only
#  - add a white margin so nothing touches the frame edge
# Requires ImageMagick (`magick`). Run from anywhere; paths are repo-relative.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=standing-sequence-dense-grid/figures
DST=standing-sequence-dense-grid/figures-clean
mkdir -p "$DST"

# composites: keep the leftmost N% (front view), dropping the side-view / stray on the right
# (portable — avoids bash-4 associative arrays so it runs on macOS bash 3.2)
left_pct() {
  case "$1" in
    7) echo 62 ;; 8) echo 55 ;; 15) echo 56 ;; 17) echo 56 ;; 23) echo 57 ;; 26) echo 65 ;;
    *) echo "" ;;
  esac
}

for n in $(seq 1 29); do
  src="$SRC/figure-2-$n.png"; dst="$DST/figure-2-$n.png"
  lp=$(left_pct "$n")
  if [ "$n" = 9 ]; then
    # figure 9's left hand is cut off in the tight figures/ scan; re-crop it complete
    # from the full book page (page-36) and whiten the faint page bleed-through
    magick standing-sequence-source-faithful/source-pages/page-36.jpg -crop 706x760+226+692 +repage \
      -white-threshold 68% -fuzz 4% -trim +repage -bordercolor white -border 9%x6% "$dst"
  elif [ "$n" = 4 ]; then
    # figure 4: drop only the stray vertical scan line on the right
    magick "$src" -gravity West -crop 84%x100%+0+0 +repage -fuzz 3% -trim +repage \
      -gravity South -chop 0x6% +repage -bordercolor white -border 9%x6% "$dst"
  elif [ -n "$lp" ]; then
    magick "$src" -gravity West -crop "${lp}%x100%+0+0" +repage -fuzz 3% -trim +repage \
      -gravity South -chop 0x6% +repage -bordercolor white -border 9%x6% "$dst"
  else
    magick "$src" -fuzz 3% -trim +repage -gravity South -chop 0x6% +repage \
      -bordercolor white -border 9%x6% "$dst"
  fi
done
echo "rebuilt $DST from $SRC"
# NOTE: figure 2-9's left hand is cut off in the original scan itself — not recoverable here.

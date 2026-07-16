---
name: breath-flow-guide
description: Build a print "read-by-the-breath" practice guide for a sequenced breathing/movement set (e.g. Shaolin Standing-Method Tu-Na) from the book's own figures. Use when creating or revising these Letter-size PDF guides — covers the layout spec, the figure-cleaning rules (no strange crops, no cut-off heads/hands, consistent sizing), the finalize/polish checklist, and the required commit workflow.
---

# Breath-Flow Practice Guide

A single-purpose template for turning a numbered exercise sequence (poses + breathing
instructions from a source book) into a wall-readable, print-ready practice guide.

The reference implementation is the Standing-Method Tu-Na set:
- Layout generator: `shaolin/scripts/build_standing_breath_flow.mjs`
- Figure cleaner:  `shaolin/scripts/prep_standing_figures.sh`
- Output:          `shaolin/standing-sequence-breath-flow/` (HTML + `preview/*.pdf` + `page-NN.png`)

Rebuild both, in order, after any change:
```
cd shaolin
bash scripts/prep_standing_figures.sh          # rebuild figures-clean/ (only if a crop changed)
node scripts/build_standing_breath_flow.mjs    # rebuild HTML + PDF + page PNGs
```
Requires: ImageMagick (`magick`), `weasyprint`, `pdftoppm`, `node`.

## Core idea — the breath is the unit

- **One panel = one breath**, shown as a **transition**: the pose you start in → the
  pose(s) you end in. The change is self-evident from the two figures. Consecutive
  breaths **repeat** the shared boundary pose (`figs:[3,4,5]` then `figs:[5,6]`).
- **The coloured arrow between poses IS the breath**: green ▲→ inhale, red ▼→ exhale,
  gold ▸→ set-up. A multi-pose breath is one unbroken breath, so every arrow in that
  panel is the same colour. "Continue"/"不停" is never a held breath.
- **All figures render solid dark.** Do NOT fade the start pose (it reads as
  inconsistent — the same figure appears in two panels).
- **No hand-drawn / synthetic arrows.** Use only the book's own motion arrows (they
  live in the scans). Meaning comes from the pose-to-pose change + the breath arrow.
- **Captions carry hand/palm orientation verbatim from the source** (原文), e.g. step 3
  is *palms down* (掌心向下), not up. Verify every orientation against the source text.

## Layout spec (encoded in `build_standing_breath_flow.mjs`)

- **Data model:** the `rows` array, one entry per breath:
  `{ kind, name, dur, caption, figs:[...], contd? }`. `kind` ∈ inhale|exhale|both|settle
  drives colour. Long breaths are split into ≤3-fig panels, the 2nd marked `contd:true`.
- **Exactly 2 panels per page** (`PER_PAGE = 2`), each panel flex-grows to fill the
  page height. This is a hard template rule for every packet, including long forms.
  Never switch to three rows to reduce page count. If the packet has an odd number
  of panels, let the final panel occupy one half-page row; do not vertically center it
  in a mostly empty page.
- **Two panel shapes, chosen by figure count:**
  - **2 poses → text-left / images-right.** Breath label + duration + caption stacked
    in a ~2.55in left column; the two large figures fill the right.
  - **3 poses → text-on-top / full-width filmstrip.** Label+caption as a band across
    the top, the three figures run full width below. (Three poses can't be large beside
    a left column.)
- **Big type:** breath label 34pt, caption 15.5–18pt Georgia. Readable across a room.
- Figures are sized by `figH()` to fill their panel, capped by the image-column width so
  the filmstrip never overflows the margin.

## Figure rules (the non-negotiables)

Source figures come from the book scans in `standing-sequence-dense-grid/figures/`;
cleaned versions go to `figures-clean/` via `prep_standing_figures.sh`. Rules:

1. **Never crop strangely / never cut a head, hand, foot, arm, garment edge, or
   source motion arrow.** Start from the full-resolution normalized source page, not
   an already-tight derivative. Draw a deliberately generous crop around the complete
   figure, inspect it at full size, then trim GENTLY (`-fuzz 3%`, never 8% — aggressive
   fuzz eats faint fingertip and shoe lines). Add a white margin (`-border 9%x6%`) so
   nothing touches the edge. A visible head, hand, or foot within roughly one border
   width of the crop edge is a failed crop and must be widened.
2. **If the tight scan already cut a segment, re-crop from the full page.** The
   per-figure `figures/` crops sometimes clip a hand (e.g. figure 9's left hand).
   Re-crop that figure from `standing-sequence-source-faithful/source-pages/page-NN.jpg`
   with `-white-threshold` to knock out the page bleed-through. (Find the page by its
   图2-N caption.)
3. **Composites (front view + 附图 side view, or a stray bleed-figure): keep the FRONT
   view, cropped WIDE enough to include the whole front figure AND its motion arrows.**
   Too-tight a crop slices the raised hand. Affected: 7, 8, 15, 17, 23, 26.
4. **Preserve the book's motion arrows** (dashed arcs, foot-step lines) — they are
   subtle but essential.
5. **Consistent sizing within a section**, figures aligned (bottom-aligned filmstrip).
   Every figure in a panel is sized from one `figH()`; don't let one figure render
   noticeably smaller than its neighbours (watch wide arms-spread poses).
6. Chop the Chinese 图2-N caption off the bottom (`-chop 0x6%`); where an arc loop dips
   below the feet and blocks it, either accept the faint caption or re-crop from the page.
7. **Exclude source prose, captions, page gutters, adjacent figures, and stray writing.**
   Do not rely on whitespace trim to remove them: tighten the rectangular crop around
   the complete illustration while retaining all anatomy and arrows. The only writing
   allowed inside a figure asset is writing intrinsic to a required instructional inset
   (for example, acupoint or footwork labels). If prose cannot be removed without losing
   part of the illustration, mask only the prose region with white and document that
   operation in the reproducible prep script.
8. **Deskew individual figures when the scan is visibly tilted.** Use the smallest
   manual rotation that makes the body's intended vertical axis or ground line straight,
   normally about 0.1–2 degrees. Rotate on white with enough virtual canvas before the
   final gentle trim and border. Do not auto-deskew every figure and do not rotate a
   deliberately leaning or dynamic posture upright.
9. **Inspect assets before page layout.** Build a numerically ordered contact sheet,
   then open every cleaned figure at full resolution. Do not proceed to the PDF until
   every asset has complete anatomy/arrows, clean white surroundings, and appropriate
   straightness. A contact sheet alone is insufficient for checking fingertips and feet.

Every crop tweak goes into `prep_standing_figures.sh` (portable bash — no `declare -A`;
it must run on macOS bash 3.2), never as a one-off command, so `figures-clean/` is
reproducible.

## Finalize / polish pass (run every time before you call it done)

First open every cleaned figure at full resolution. Then render all pages
(`node scripts/build_standing_breath_flow.mjs`) and open every `preview/page-NN.png`.
For EACH figure and panel, verify:

- [ ] No head, hand, foot, arm, or other segment cut off. Spread-arm poses: both hands present.
- [ ] No stray marks, bleed, or leftover 图2-N captions.
- [ ] No surrounding source prose, page gutters, adjacent figures, or non-instructional writing.
- [ ] Any modest deskew is correct; intentional body leans remain intentional.
- [ ] Figures within a section are consistently sized and aligned; none looks shrunk.
- [ ] Captions fit — no clipping, no overflow off the right margin; orientation words correct.
- [ ] No page overflow: physical page count (`ls preview/page-*.png | wc -l`) == expected.
- [ ] Arrow colour matches the breath (green inhale / red exhale); split breaths marked "continued".
- [ ] Big enough to read from across a room.
- [ ] Exactly two panel rows are laid out per page; no generated page uses three rows.

Fix, rebuild, re-check. Only ship a page once every box passes.

## Commit workflow (required)

- **Commit BEFORE** starting a substantive change (figures, layout, captions) so there's
  a clean restore point.
- **Commit AFTER** every substantive change, with a message that says what changed and why.
- Then push (`git push origin main`).
- Small/preview-only rebuilds don't each need a commit, but any change you'd want to keep does.

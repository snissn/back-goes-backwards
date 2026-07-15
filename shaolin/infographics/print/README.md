# Printer-friendly Shaolin exercise infographics

This is the high-contrast monochrome edition of the 16-plate [Shaolin exercise infographic set](../README.md). It uses white pages, black line illustrations, outline-only panels, and explicit written breath states. No instruction depends on color.

## Ready-to-print PDFs

- [US Letter · 8.5 × 11 inches · 300 DPI](shaolin-printer-friendly-letter.pdf)
- [A4 · 210 × 297 mm · 300 DPI](shaolin-printer-friendly-a4.pdf)

Both PDFs contain the five standing-method plates first, followed by the eleven seated-exercise plates.

## Individual pages

- [`letter/`](letter/) — sixteen 2550 × 3300 PNG pages
- [`a4/`](a4/) — sixteen 2480 × 3508 PNG pages
- [`plates/`](plates/) — sixteen uncropped 1800 × 2600 monochrome compositions
- [`svg/`](svg/) — editable monochrome SVG compositions
- [Contact sheet](previews/printer-friendly-contact-sheet.jpg)

## Fidelity notes

- Every inhale, exhale, natural-breathing, and no-explicit-cue statement is retained from the full-color set.
- The standing sequences across steps 19–22 and 24–26 still identify one uninterrupted inhalation rather than a breath hold.
- Breath states are written explicitly beside each step and in the bottom timeline; they do not rely on grayscale shades or patterns.
- The illustrations are converted to true bilevel black-and-white line art. Text is rendered separately at full contrast for legibility.

For the full source transcription and exact bilingual wording, see [the complete translation](../../shaolin-exercises-translation.md).

## Printing

Select the PDF matching the paper in the printer. Use “Fit” or “Fit to printable area” if the printer cannot print to the edge. The compositions already include generous white margins.

## Rebuild

From the project root:

```sh
node scripts/build_print_infographics.mjs
```

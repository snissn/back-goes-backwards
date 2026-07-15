# Standing Sequence — Source-Faithful Bilingual Print Edition

This folder is a separate, standing-only reconstruction of printed pages 32–45. It deliberately does **not** reuse the generated poses, movement arrows, breath diagrams, or regrouped step panels from the earlier infographic set.

Every print sheet keeps the photographed book page as the visual authority. Beside it are:

- the exact Chinese instruction, retyped for legibility;
- a close technical English translation;
- the original printed page number, running header, and figure labels;
- a short translator's note only where a compact martial-arts term would otherwise lose information in English.

The result is monochrome: white page, black rules and type, and a contrast-cleaned grayscale reproduction of the source page.

## Files

- [`standing-sequence-bilingual.md`](standing-sequence-bilingual.md) — the complete page-by-page Chinese transcription and technical translation.
- [`standing-sequence.html`](standing-sequence.html) — the print layout source.
- [`print/standing-sequence-source-faithful-letter.pdf`](print/standing-sequence-source-faithful-letter.pdf) — 14-sheet US Letter landscape edition.
- [`print/standing-sequence-source-faithful-a4.pdf`](print/standing-sequence-source-faithful-a4.pdf) — 14-sheet A4 landscape edition.
- `print/letter/pages/` and `print/a4/pages/` — individual rendered sheets as PNG files.
- [`previews/standing-sequence-letter-contact-sheet.jpg`](previews/standing-sequence-letter-contact-sheet.jpg) — small visual index of the whole Letter set.
- `source-pages/` — cropped, grayscale reproductions of the 14 unique photographed pages.

## Fidelity rules used here

1. The 29 numbered instructions remain in the book's exact order and page groupings.
2. Chinese punctuation and explicit figure references are retained.
3. No movement, alignment, repetition count, breath phase, or breath hold is added.
4. `吸气不停` and `呼气不停` are translated as continuation of the same inhalation or exhalation **without interruption**. Neither phrase means to hold the breath.
5. `吸气至满` is translated as continuing the inhalation until full; it is not silently changed into a breath hold.
6. Directional distinctions are preserved: `相对` means facing/opposed, `相接` means meeting/touching, and `相贴` means placed in contact.
7. The source's own anatomical wording is retained. For example, it glosses `丹田` as `小腹`, the lower abdomen; the translation does not impose a more specific point.

## Compact technical terms

| Chinese | Rendering used | Precision note |
|---|---|---|
| `吐纳` (*tǔnà*) | Tu-Na | Literally “exhale / inhale”; retained as the name of the coordinated breathing practice. |
| `掌` | open hand / palm | “Hand” denotes the whole open hand in movement; “palm” denotes the surface and its orientation. |
| `虎口` | tiger's mouth | The web/open angle between thumb and index finger. |
| `合十` (*héshí*) | palms joined in *heshi* | The two palms are placed together, fingers upward, in the palms-together salutation. |
| `掌根` | heel of the palm | The proximal, fleshy base of the palm at the wrist. |
| `坐腕` (*zuòwàn*) | set the wrist in extension | A technical palm position: the wrist is extended/set back so the palm stands vertical; it does not mean lowering the whole hand. |
| `拳心` | palm side of the fist | The inward/palmar surface of a closed fist; its facing direction is technically important here. |
| `拳面` | fist face / knuckle face | The plane formed by the front knuckles, distinct from `拳心`. |
| `前脚掌` | forefoot / ball of the foot | The front weight-bearing part of the sole while the heel is raised. |

The fist/palm terminology was cross-checked against the [International Wushu Federation's 2024 Taolu rules](https://www.iwuf.org/xhimg/soft/240912/WUSHU-TAOLU-COMPETITION-RULES-AND-JUDGING-METHODS-2024.pdf). The interpretation of `坐腕立掌` / `坐腕竖掌` and the palms-together `合十` position was also checked against technical material from the [General Administration of Sport of China](https://www.sport.gov.cn/qgzx/n5407/c670029/content.html) and its [Fitness Qigong Management Center](https://www.sport.gov.cn/qgzx/n5407/c845145/content.html). These references clarify terminology only; the photographed book remains the authority for this sequence.

## Source-page choice

`IMG_7814.HEIC` and `IMG_7815.HEIC` are duplicate photographs of printed page 42. This edition uses `IMG_7814.HEIC`, because it gives the cleaner complete-page record. No source content is omitted by excluding the duplicate photograph.

## Rebuild

From this directory's parent (`shaolin/`):

```sh
bash scripts/build_source_faithful_standing.sh
```

The build requires ImageMagick, WeasyPrint, Poppler's `pdftoppm`, and qpdf. It regenerates the cleaned source pages, Letter and A4 PDFs, individual PNG sheets, and contact sheet.

For ordinary printing, use the PDF matching the paper size and select “fit to printable area.” For left-edge duplex binding in landscape orientation, printer drivers commonly label the correct setting “flip on short edge.”


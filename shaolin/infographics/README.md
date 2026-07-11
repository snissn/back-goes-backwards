# Shaolin exercise infographic set

This directory contains 16 final exercise infographics derived from the photographed pages translated in [the complete bilingual translation](../shaolin-exercises-translation.md).

There are 12 distinct exercises. The single 29-step standing exercise is split into five plates so its hand positions and breath phases remain readable. Each of the 11 seated exercises has its own plate.

## Final infographics

### Standing-method exercise

1. [Steps 1–6](final/standing-01-steps-01-06.png) — setup; natural breath; first inhale/exhale cycles
2. [Steps 7–12](final/standing-02-steps-07-12.png) — two inhale/exhale cycles
3. [Steps 13–18](final/standing-03-steps-13-18.png) — overhead prayer and forward push
4. [Steps 19–23](final/standing-04-steps-19-23.png) — the explicit four-step uninterrupted inhalation
5. [Steps 24–29](final/standing-05-steps-24-29.png) — heel lift, final push, and closing breath

### Seated-method exercises

1. [Circulating the Four Cong Points](final/seated-01-four-cong.png)
2. [Sun and Moon Shining Bright](final/seated-02-sun-moon.png)
3. [Descent of the Two Yang Channels](final/seated-03-two-yang.png)
4. [Turning at Tinggong · Hearing Palace](final/seated-04-tinggong.png)
5. [Circulation of the Five Wheels](final/seated-05-five-wheels.png)
6. [Tap the Teeth Audibly](final/seated-06-tap-teeth.png)
7. [Fire Refines the Golden Elixir](final/seated-07-golden-elixir.png)
8. [Heat Dispersal at Heding · Crane's Crown](final/seated-08-heding.png)
9. [Revolving Qian and Kun · Heaven and Earth](final/seated-09-qian-kun.png)
10. [Azure Dragon Probes Its Head](final/seated-10-azure-dragon.png)
11. [Immortal Crane Soars into the Air](final/seated-11-crane.png)

The [contact sheet](previews/all-infographics-contact-sheet.jpg) shows the complete set at a glance.

## Reading the breath annotations

- Blue: inhale
- Cinnabar: exhale
- Green: natural breathing
- Gray: the source gives no explicit breath cue
- Ochre: physical phase context only; the source does not repeat a breath cue
- Purple: a panel contains both inhale and exhale, or a full undivided breath cycle

`CONTINUE INHALING` and `CONTINUE EXHALING` appear only where the Chinese explicitly says `吸气不停`, `深吸不停`, or `呼气不停`. They do not mean “hold the breath.”

## Fidelity and provenance

- The source photos and their printed figure numbers were used as pose and route references.
- The line-art plates in `base/` were generated with OpenAI's built-in image-generation tool. They contain no generated prose.
- English titles, step labels, acupoint names, breath labels, and timelines are deterministic SVG typesetting from [the build script](../scripts/build_infographics.mjs), not text produced inside the illustrations.
- The final PNG files are 1800 × 2600 pixels. Editable SVG compositions are in `final/svg/`.
- The Heding exercise was deliberately regenerated without movement arrows after a draft failed to reverse the second direction. Its verified captions alone specify inside → outside on inhale and outside → inside on exhale.
- These are visual study aids. For pose-critical hand placement, cross-check the printed figure number named on each plate and the complete source transcription.

## Rebuild

From the project root:

```sh
node scripts/build_infographics.mjs
```


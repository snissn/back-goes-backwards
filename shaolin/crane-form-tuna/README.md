# Crane-Form Tu-Na Health Practice

Source-faithful illustrated practice packets derived from the supplied scan of
Chapter 3, `鹤形吐纳养生功`.

The chapter is one linked form: each named movement continues from the preceding
posture. The supplied scan omits original book pages 84–85 and figures 3-31
through 3-33, so the form is delivered as two continuous packets rather than
inventing the missing transition:

- Part 1: figures 3-1–3-30
- Part 2: figures 3-34–3-91

The source specifies `吐纳随动法`: breathing follows the movement naturally,
without a fixed inhale/exhale assignment. The packet therefore uses neutral flow
cues and never invents breath timing.

Rebuild the normalized source pages and figure assets with:

```sh
bash scripts/prep_crane_form_figures.sh
```

Rebuild the print packets and rendered QA previews with:

```sh
node scripts/build_crane_form_packets.mjs
```

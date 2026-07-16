# Shaolin Basic Tu-Na Practice Packets

Source: the 14-page scan `source/20260716115716_001.pdf`, Chapter 1,
“Shaolin Basic Tu-Na Exercises” (`少林吐纳基本功`).

The chapter is partitioned by actual practice continuity:

1. Seated Static Breath Counting (`坐势静功数息法`) — alternative seated postures.
2. Standing Palm-Press Tu-Na (`站势按掌吐纳法`) — figures 1-3 through 1-6.
3. Seated Torso-Turn Tu-Na (`坐势扭身吐纳法`) — figures 1-7 through 1-10.
4. Standing Torso-Turn Tu-Na (`站势扭身吐纳法`) — figures 1-11 through 1-13.
5. Shoulder-Release and Joint-Opening Tu-Na (`伸筋活络吐纳法`) — figures 1-14 through 1-18.
6. Power-and-Sound Tu-Na (`发力发声吐纳法`) — figures 1-19 through 1-20.
7. Breath-Exchange Strengthening (`吐纳换气强身法`) — one continuous packet,
   figures 1-21 through 1-46. Its internal phases continue from the preceding
   posture and therefore are not split into misleading standalone sequences.

Rebuild cleaned figures:

```sh
bash scripts/prep_basic_tuna_figures.sh
```

The crop script intentionally uses generous source regions, gentle trimming, and
restored white margins. Crop changes belong in the script, never in one-off edits.
`preview/figures-contact-sheet.jpg` is the all-figure crop QA sheet.

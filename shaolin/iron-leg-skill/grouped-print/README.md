# Grouped printable edition

This directory reorganizes the 59 standalone Shaolin Iron-Leg Skill packets
into practice families without changing their instructional pages:

1. Flexibility & Leg Control — packets 01–10
2. Kicks & Aerial Kicks — packets 11–19
3. Strength & Conditioning — packets 20–28
4. Fundamental Footwork — packets 29–43
5. Fundamental Body Methods — packets 44–59

`shaolin-iron-leg-grouped-workbook.pdf` contains the complete collection with
a contents page and five section dividers. The `sections/` directory contains
the five groups as separate printable PDFs.

All instructional pages remain US Letter portrait with exactly two rows. For
duplex printing, flip on the long edge.

Rebuild:

```sh
node scripts/build_iron_leg_packets.mjs
node scripts/build_iron_leg_grouped_print.mjs
```

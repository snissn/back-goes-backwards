# Series Synthesis Editorial Workspace

**Status:** working synthesis for joint review

**Date:** 2026-07-10

This directory is the inclusive editorial control surface for *The Back Goes Backwards*. It synthesizes two source architectures:

- the [`new` JSON outline archive](../../new/inputs/outlines/), interpreted through the [source-reconciliation audit](../new-json-source-reconciliation.md); and
- the [initial provisional multi-book outline](../provisional-multi-book-outline.md), interpreted within the [project-model memo](../project-model-memo.md).

Neither source is treated as a manuscript. The JSON archive has strong structural and conceptual material mixed with generated extrapolation and pipeline artifacts. The provisional outline is a more aligned editorial synthesis, but it intentionally compressed many source programs. This workspace preserves both while creating a cleaner basis for actual editorial selection.

## What is authoritative here

This is a proposed synthesis, not a final contract. It preserves authorial intent generously and makes placement reviewable.

The current authority order is:

1. direct author formulations and corrections recorded in the project-model memo;
2. jointly aligned project intentions and distinctions in that memo;
3. this synthesis, once a placement has been reviewed together;
4. the provisional multi-book outline as an editorial source;
5. the `new` JSON archive as a structural and conceptual source;
6. generated prose, prompts, and pipeline artifacts as salvage sources only.

Scientific confidence is a different question from project authority. An idea can be authoritative as a statement of the research program while remaining scientifically provisional.

## Files

- [series-outline.md](series-outline.md) gives the series arc, dependencies, and book map.
- [`books/`](books/) contains the clean working outline for each book. These files state the intended argument without narrating their edit history.
- [metadata-schema.md](metadata-schema.md) defines stable IDs, tags, claim confidence, medical exposure, editorial readiness, and deferred-work gates.
- [source-coverage.md](source-coverage.md) is the conservation ledger. Every grouped obligation from the `new` reconciliation and every structural obligation from the provisional outline must resolve to an included unit or a quarantine record.
- [quarantine.md](quarantine.md) holds formulations and artifacts that are not promoted into the outline. It preserves their conceptual kernels and re-entry conditions.

Decision notes can later be added under `decisions/` when the first joint review produces actual accept, merge, split, defer, or retire decisions. The clean outlines should not accumulate migration scars.

## Conservation rule

Inclusion is the default at this stage.

- A mechanically or medically ambitious idea remains available as a hypothesis, research question, candidate example, or later-book program.
- Uncertainty changes its label, required work, and possible publication layer; it does not by itself erase the idea.
- A poor formulation is quarantined separately from the underlying concept.
- A concept is not considered covered merely because a broader neighboring topic appears somewhere. The coverage ledger must name its editorial home.
- Quarantine is reversible and is not a deletion bin.

No substantive source concept is intentionally retired in this first synthesis. Later editorial rounds may merge, transform, ablate, or retire material, but those decisions should be explicit and provenance-preserving.

## Working sequence

1. Review the five book architectures and their boundaries.
2. Review the source-coverage ledger for misplaced, over-compressed, or misunderstood concepts.
3. Accept or revise the metadata levels and controlled vocabulary.
4. Record actual decisions without scarring the clean outline.
5. Develop Book I chapter briefs and its claim/evidence map first while retaining Books II-V as inclusive future-work maps.

The metadata is deliberately lighter than a manuscript database. It is sufficient to prevent idea loss and expose deferred work without requiring claim-level bureaucracy for every exploratory sentence.

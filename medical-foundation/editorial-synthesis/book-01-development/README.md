# Book I Development Workspace

**Book:** *The Back Goes Backwards*, Book I: *Medical Foundations*

**Status:** active development workspace

## Purpose

This directory is the working control surface for developing Book I from an accepted series concept into a researched, briefed, and drafted manuscript. It sits between the inclusive series synthesis and reader-facing prose.

The workspace has three responsibilities:

1. preserve the full intended Book I argument and its provenance;
2. make structural, evidentiary, medical, and publication decisions explicit before prose hides them; and
3. prevent generated or legacy material from becoming canonical merely because it is already written.

Book I is the independently useful medical foundation of the five-book series. Its argument must remain valid without requiring the preferred-configuration hypothesis, the signed Yin/Yang coordinate map, the Six-Division correspondence, a breath-driven geometry, or a corrective practice system to be correct.

## Authority

The [Book I contract](book-contract.md) governs the purpose, audience, promise, claim posture, scope, tone, evidence burden, and completion criteria for this volume. It replaces the legacy [`book/book_contract/book_contract.md`](../../book/book_contract/book_contract.md) as the active Book I contract while preserving that document as a source record.

The [detailed Book I outline](../series-synthesis/books/01-medical-foundations.md) remains the authoritative proposed structure until individual placements are accepted or changed through the structure review. The [series outline](../series-synthesis/series-outline.md) governs the boundary between books. The [project-model memo](../project-model-memo.md) governs authorial intent and project vocabulary where this workspace has not made a more specific accepted Book I decision.

No development document establishes scientific truth by editorial authority. External evidence constrains what can be published and at what strength; it does not erase an authorial hypothesis or its provenance.

## Source order

When sources conflict, interpret them in this order:

1. direct authorial formulations and corrections;
2. accepted Book I decisions and this contract;
3. the project-model memo and accepted series boundary;
4. the detailed Book I outline and its internal inventories;
5. the source-coverage ledger and `new`-archive reconciliation;
6. the provisional multi-book outline and legacy contract;
7. the `new` JSON outlines as structural and conceptual sources;
8. generated prose, prompts, and pipeline artifacts as salvage sources only.

This is an authority order for project intent, not an evidence hierarchy. Research, clinical review, historical review, and formal analysis remain independent constraints.

## Workspace map

| Path | Function |
|---|---|
| `book-contract.md` | Governing audience, promise, boundaries, standards, and definition of success |
| `structure-review.md` | Part- and chapter-level accept, rename, merge, split, move, or defer decisions |
| `claim-evidence-ledger.md` | Normalized load-bearing claims, evidence, intermediate links, alternatives, and permissible wording |
| `model-registry.md` | Mechanical models, analogies, assumptions, variables, scopes, and failure conditions |
| `example-registry.md` | Candidate examples and worked narratives, including alternatives and medical exposure |
| `figure-registry.md` | Free-body diagrams, anatomy figures, explanatory models, and their technical review state |
| `chapter-briefs/` | Accepted chapter briefs used to govern salvage and drafting |
| `decisions/` | Durable decision records kept outside clean contracts, outlines, and briefs |

The registries and reviews may begin as compact tables and grow only when the material requires it. The goal is control and traceability, not administrative volume.

## Stable identifiers

Use the identifier system in the [series metadata schema](../series-synthesis/metadata-schema.md).

- Existing `BGB-U-*` identifiers remain attached to their editorial objects when titles or placements change.
- Do not renumber chapters merely because the outline is reordered.
- Create `BGB-C-*` records only for load-bearing, repeated, disputed, medically exposed, or publication-sensitive claims.
- Use `BGB-M-*`, `BGB-X-*`, `BGB-P-*`, `BGB-D-*`, and `BGB-DEC-*` for models, examples, practices, deferrals, and decisions as needed.
- Preserve both raw and normalized wording when a clean claim record translates informal, generated, traditional, or legacy language.

Scientific confidence, medical exposure, and editorial readiness remain independent. A proposition may be central to the author's program, scientifically exploratory, and safely preserved in the internal workspace at the same time.

## Development sequence

### 1. Accept the contract

Review the reader promise, Book I boundary, evidence posture, and definition of success. Record substantive changes in `decisions/`; keep the accepted contract clean.

### 2. Accept the structure

Review the six Parts and 30 chapters in `structure-review.md`. For each unit, state its unique job, reader-entry and reader-exit state, dependencies, later-book boundary, and disposition. An accepted placement advances from `R1` to `R2`; prose polish does not.

### 3. Test the method vertically

Develop three deliberately different units before scaling the process:

- `BGB-U-0002`, the foundational language of load;
- `BGB-U-0013`, constraint-maintained deformation and loss of excursion; and
- `BGB-U-0024`, the thoracic-outlet worked narrative.

Together they test ordinary mechanics, the project's distinctive synthesis, and a medically exposed application.

### 4. Build the control maps

For accepted chapters, normalize load-bearing claims, models, examples, figures, evidence obligations, intermediate links, alternatives, measurements, and expert-review needs. Research exact propositions rather than asking whether a whole chapter is simply “right.”

### 5. Write chapter briefs

Each brief defines the chapter's job, opening, argument sequence, indispensable claims, definitions, examples, figures, objections, evidence obligations, exclusions, conclusion, transition, and legacy sources worth inspecting.

### 6. Salvage against accepted briefs

Inspect the JSON outlines, legacy Markdown, and generated runs only after the relevant brief exists. Classify passages as reusable with editing, conceptual source, provenance lead, incompatible with the contract, or pipeline contamination. Do not promote an entire generated run.

### 7. Draft and review

Draft the three vertical-slice chapters first, establish the manuscript voice and technical density, then proceed by Part. Introduction and conclusion are finalized after the body argument is stable. Evidence, citation, medical-coauthor, repetition, figure, accessibility, and series-seam reviews precede layout work.

## Working rules

- Preserve authorial hypotheses generously; increase definition, evidence, and review requirements as artifacts approach publication.
- Read exploratory health language at the weakest reasonable level consistent with its context, then make the intended outcome and causal scope explicit in manuscript work.
- Quarantine defective wording, equations, citations, protocols, or artifacts separately from their protected conceptual kernels.
- Keep editorial instructions, metadata, migration notes, and acceptance criteria out of reader-facing prose.
- Keep accepted clean documents free of revision narration. Use `decisions/`, version control, and provenance records for history.
- Commit and push coherent development passes so the workspace remains recoverable and reviewable.

## Immediate milestone

The first milestone is complete when:

1. this contract is jointly accepted;
2. every Book I chapter has a recorded structural disposition and unique job;
3. the three vertical-slice units have claim, model, example, figure, and evidence maps; and
4. those units have accepted chapter briefs suitable for controlled salvage and drafting.

Only then should Book I manuscript prose become the main development artifact.

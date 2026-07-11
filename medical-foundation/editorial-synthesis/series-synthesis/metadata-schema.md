# Editorial Metadata Schema

This schema separates placement, scientific confidence, medical exposure, and editorial readiness. Those are independent properties. None is a proxy for whether an idea is important or allowed to remain in the project.

The values assigned in the current outlines are editorial priors, not the result of a completed evidence review.

## Stable object IDs

IDs identify editorial objects, not their present location. They remain stable when a chapter moves, changes title, or is split across books.

| Prefix | Object |
|---|---|
| `BGB-U-####` | Outline unit: book, Part, chapter, major section, or internal inventory |
| `BGB-S-####` | Source fragment or direct formulation |
| `BGB-C-####` | Normalized load-bearing claim |
| `BGB-M-####` | Model, analogy, correspondence, or hypothesis |
| `BGB-X-####` | Candidate example or case context |
| `BGB-P-####` | Practice, test, cue, protocol, or pedagogical sequence |
| `BGB-D-####` | Deferred-work record |
| `BGB-Q-####` | Quarantine record |
| `BGB-DEC-####` | Editorial decision record |

The human-readable book and chapter number is mutable placement metadata. Each chapter heading carries its `BGB-U` locator so crosswalks survive reordering.

## Unit metadata

Each chapter or inventory receives a compact metadata line:

```text
Unit BGB-U-0013 · state proposed · posture SYN/HYP · confidence E1 · medical M2 · readiness R1
Tags domain:mechanics, model:hard-soft, mech:constraint · gates DEF, EVID, ALT, CLIN
```

The outline then states the unit's editorial job and preserved scope in ordinary prose. Sources and more granular claim records belong in the coverage ledger or later claim/evidence maps rather than crowding every heading.

### Unit state

| State | Meaning |
|---|---|
| `captured` | Preserved from a source but not yet aligned or placed |
| `aligned` | Authorial meaning has been checked sufficiently for current planning |
| `proposed` | Has a proposed place in the synthesized architecture |
| `accepted` | Placement and job have been jointly accepted |
| `drafted` | Reader-facing prose exists against an accepted brief |
| `reviewed` | Applicable editorial, evidence, clinical, and safety reviews have passed |
| `published` | Cleared in its intended audience and form |

All current outline placements are `proposed` until joint review changes them.

### Claim posture

Posture describes what kind of statement the unit is expected to contain. Multiple values may apply.

| Code | Meaning |
|---|---|
| `FND` | Foundational mechanics, anatomy, or shared background |
| `SYN` | Organizing synthesis or interpretive framework |
| `HYP` | Authorial mechanical or biological hypothesis |
| `TRD` | Traditional observation, textual claim, or cross-tradition correspondence |
| `APP` | Clinical, health, performance, pedagogical, or practice application candidate |
| `EDT` | Editorial structure, inventory, or research-program design |

## Three independent review axes

### Epistemic confidence

| Level | Working meaning |
|---|---|
| `E0` | Unassessed: captured without a support judgment |
| `E1` | Exploratory: proposed observation, intuition, correspondence, analogy, or hypothesis |
| `E2` | Plausible synthesis: mechanically or biologically plausible, with support not yet sufficient or specific enough for the intended claim |
| `E3` | Supported within a stated scope after a claim-level evidence review |
| `E4` | High-confidence common ground or mature consensus within a stated scope |

No current assignment above `E2` should be read as final until the evidence map is built. Direct authorial intent can be project-authoritative while scientifically `E1`.

### Medical exposure

Exposure is assigned after a generous, context-sensitive reading of the intended claim. Informal health language is not automatically expanded into its strongest possible medical meaning.

| Level | Working meaning |
|---|---|
| `M0` | No health outcome: mechanics, anatomy, history, vocabulary, or conceptual organization |
| `M1` | Comfort, function, movement, performance, or low-stakes general observation |
| `M2` | General health, recovery, resilience, risk, physiological association, or possible mechanism |
| `M3` | Named condition or disease-specific causality, prevention, prognosis, diagnosis, or treatment |
| `M4` | Individualized advice, home test, corrective protocol, contraindication, referral decision, or substitution for care |

Exposure controls the review burden and publication form. It does not decide whether the idea remains in the internal program.

### Editorial readiness

| Level | Working meaning |
|---|---|
| `R0` | Captured with enough provenance not to be lost |
| `R1` | Intent provisionally aligned and wording normalized for planning |
| `R2` | Scope, role, and structural placement jointly accepted |
| `R3` | Evidence, alternatives, intermediate links, and measurements mapped |
| `R4` | Applicable scientific, medical-coauthor, clinical, historical, ethical, and safety reviews passed |
| `R5` | Publication-approved for a named audience and form |

Prose polish does not raise readiness. A beautiful generated paragraph can remain `R0`.

## Deferred-work gates

Gates are compact pointers to the work a unit must survive. A unit can remain in the outline before its gates are complete.

| Gate | Required work |
|---|---|
| `INTENT` | Confirm the intended meaning with the author; reconcile conflicting source versions |
| `PROV` | Recover exact provenance and distinguish authorial, traditional, generated, and editorial sources |
| `DEF` | Define terms, variables, scope, scale, and system boundary |
| `FORM` | Build or repair the mechanical, mathematical, or geometric model; check dimensional consistency |
| `EVID` | Map claim-level primary evidence and suitable reviews; identify the strength actually supported |
| `LINK` | Make every intermediate step in a causal or physiological chain explicit |
| `ALT` | Record competing mechanisms, confounds, counterexamples, and null predictions |
| `MEAS` | Specify observables, measurements, falsifiers, and decision criteria |
| `HIST` | Perform textual, historical, lineage, terminology, and translation review |
| `CLIN` | Perform condition-specific and medical-coauthor review, including diagnostic uncertainty |
| `SAFE` | Review contraindications, adverse events, personalization, referral, and professional scope |
| `ETH` | Review cultural translation, accessibility, autonomy, and ethical presentation |
| `AUD` | Decide audience, publication form, and whether material belongs in main prose, appendix, professional manual, or research protocol |
| `VIS` | Design and technically review diagrams, free-body models, anatomical overlays, or visual analogies |

Typical survival rules are:

- `M0-M1`: may remain exploratory if its posture and uncertainty are visible; factual statements still need sourcing.
- `M2`: needs `DEF`, `EVID`, `LINK`, and `ALT` before assertive publication.
- `M3`: additionally needs condition-specific `CLIN`; an `E1` item may remain only as a clearly non-advisory research hypothesis.
- `M4`: needs `SAFE`, `CLIN`, and `AUD` and belongs in a practice-facing product rather than Book I unless the contract changes.

## Controlled tags

Tags are namespaced so that `breathing`, `breath`, and `respiration` do not become three unsearchable categories. New tags should be added deliberately; aliases can be recorded later without rewriting old decisions.

### Domain

`domain:mechanics`, `domain:biomechanics`, `domain:anatomy`, `domain:mechanobiology`, `domain:medicine`, `domain:health`, `domain:rehabilitation`, `domain:history`, `domain:tradition`, `domain:practice`, `domain:pedagogy`, `domain:research`, `domain:public-health`

### Mechanical pattern

`mech:geometry`, `mech:concentration`, `mech:instability`, `mech:discoordination`, `mech:constraint`, `mech:interruption`, `mech:substitution`, `mech:compensation`, `mech:scale-transition`, `mech:pressure-flow`, `mech:energy-storage`, `mech:force-torque`, `mech:stress-strain`, `mech:load-path`

### Project model

`model:hard-soft`, `model:posterior-chain`, `model:preferred-configuration`, `model:three-axis`, `model:orthotropy`, `model:yin-yang`, `model:six-divisions`, `model:tcm`, `model:meridian`, `model:yoga`, `model:bandha`, `model:breath-loop`, `model:tensegrity`, `model:hyoid-4d`, `model:cube-4d`, `model:tall-torus`, `model:topology`, `model:metastability`

### Anatomy

The appendix's twelve regional categories remain exact tags: `anat:cervical`, `anat:thoracic`, `anat:lumbar`, `anat:craniofacial`, `anat:upper-extremity`, `anat:lower-extremity`, `anat:cranial-pressure`, `anat:upper-airway`, `anat:rib-thoracic`, `anat:abdominal-pressure`, `anat:pelvic-urogenital`, `anat:visceral-suspension`.

Cross-cutting tags include `anat:posterior-chain`, `anat:skeleton`, `anat:fascia`, `anat:muscle-tendon`, `anat:neural`, `anat:vascular`, `anat:lymphatic`, `anat:hyoid`, `anat:airway`, and `anat:organ-support`.

### Process or context

`process:breathing`, `process:gait`, `process:stance`, `process:locomotion`, `process:development`, `process:aging`, `process:recovery`, `process:adaptation`, `process:remodeling`, `context:environment`, `context:ergonomics`, `context:sport`, `context:clinical-reasoning`, `context:self-experimentation`

### Intended use

`use:foundation`, `use:organizing-model`, `use:hypothesis`, `use:worked-example`, `use:diagram`, `use:clinical-reference`, `use:practice`, `use:protocol`, `use:research-program`, `use:public-education`

Confidence, exposure, readiness, provenance, and disposition are fields, not tags.

## Provenance types

| Type | Meaning |
|---|---|
| `author-direct` | Direct formulation or correction from the author |
| `project-model` | Aligned formulation in the project-model memo |
| `editorial-synthesis` | Structure or wording developed during editorial reconciliation |
| `exploratory-note` | Internal working thought whose authority is not yet settled |
| `generated-outline` | JSON or other generated outline material; structurally useful but not presumptively factual |
| `generated-prose` | Generated manuscript text; salvage source only |
| `traditional-source` | Historical or living-tradition source requiring its own provenance and translation work |
| `external-evidence` | Research, textbook, guideline, or other external source |
| `visual-analogy` | Image, engineering analogy, or geometric representation used to think with |
| `pipeline-artifact` | Prompt, migration note, placeholder, or rendering scaffold |

Where a polished formulation normalizes a rough source statement, later claim records should retain both `raw_form` and `normalized_statement`.

## Deferral and quarantine

A deferred item must record:

- its preserved conceptual kernel;
- exact provenance;
- proposed destination or named unplaced inventory;
- incomplete gates;
- a milestone for reconsideration; and
- the audience or claim form it might eventually support.

Deferral states are `captured → intent-aligned → scoped → eligible → activated → resolved`.

Quarantine applies to a formulation, equation, citation, protocol, or artifact—not automatically to the idea underneath it. Every quarantine record must name the protected kernel and re-entry conditions. Its lifecycle is `flagged → quarantined → normalized/reintegrated`, `deferred`, or `retired`; a retired item can be reopened.

## Anti-churn rule

Do not create a separate claim record for every outline sentence. Use claim records for propositions that are load-bearing, repeated, disputed, medically exposed, or likely to change publication form. The chapter metadata is a planning instrument; full claim decomposition belongs in the book-specific evidence phase.

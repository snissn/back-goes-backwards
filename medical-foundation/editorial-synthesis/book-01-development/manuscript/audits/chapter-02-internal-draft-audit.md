# Chapter 2 internal first-draft audit

**Draft:** [Chapter 2 — A working language of load](../chapters/02-a-working-language-of-load.md)

**Audit date:** 2026-07-11

**Decision:** Pass for controlled vertical-slice use and the Chapter 13 dependency; publication review remains open

**Authority:** [Chapter 2 brief](../../chapter-briefs/BGB-U-0002-working-language-of-load.md), [definitions and notation pack](../../evidence/chapter-02-definitions-and-notation.md), [controlled-salvage sheet](../../salvage/chapter-02-working-language-of-load.md), [Wave 1 closure](../../decisions/pilot-closure-record.md), and [drafting style and citation guide](../drafting-style-and-citation-guide.md)

## Audit boundary

This is the internal mechanics, reader-level, source-note, visual-placeholder, salvage-provenance, and publication-gate audit required after the first vertical-slice chapter. It does not advance a claim, model, example, or figure lifecycle; represent external mechanics or biomechanics review; approve final art; or close a publication gate.

The draft is a clean-sheet reconstruction. No legacy or generated sentence, equation, citation, case detail, or image has been promoted verbatim.

## Draft metrics

| Measure | Result | Control |
|---|---:|---|
| Body words, excluding notes and figure material | 4,138 | Within the 3,500–4,500 target |
| Text-native figures | 5 | All required Chapter 2 teaching jobs represented |
| Source notes | 9 | Every note marker has one definition; no unused definitions |
| Persistent source links | 13 | All identities checked; automated retrieval returned 200 for 11 and publisher bot-denial 403 for 2 DOI routes independently verified through their primary records |
| Reader-facing control IDs | 0 | Pass |
| Local control links in this audit | 5 | All resolve |
| Placeholder citations or raw archive references | 0 | Pass |

The word count is calculated from reader body prose before `## Notes`, excluding every blockquoted figure, caption, and text alternative. Headings and the displayed moment relation remain in the count; this slightly overstates ordinary paragraph prose and does not threaten the upper bound.

## Mechanics and notation audit

| Check | Evidence in draft | Result | Residual gate |
|---|---|---|---|
| System precedes force inventory | Person-plus-object, person, forearm, and tissue boundaries are redrawn around one unchanged event | Pass | External mechanics review of final free-body art |
| Internal/external status is boundary-relative | Hand–object and joint interactions change category only when the selected system changes | Pass | None for controlled draft |
| Dynamics is not collapsed into statics | Hold is separated from lift, carry, braking, and placement; momentum-rate language controls the balance | Pass | Review final arrows and any later numerical calculation |
| Force and distributed resultant remain different | Equivalent force-and-moment pair is distinguished from local contact distribution | Pass | Final mechanics review |
| Moment is specified about a point | `M_O = r × F` defines `O`, `r`, and `F` in adjacent prose; moment arm is perpendicular to the line of action | Pass | Final typography and sign-convention review |
| Moment and energy remain different | Shared `N m` dimensions are acknowledged without object-type collapse | Pass | None for controlled draft |
| Contact pressure and fluid pressure remain different | Solid normal contact, fluid scalar field, area, pressure difference, wall state, and flow are separated | Pass | Biomechanics review where later anatomy replaces the generic tube |
| Stress, deformation, displacement, and strain remain different | Local tensor, reference state, rigid translation/rotation countercase, and nonuniform field are explicit | Pass | External continuum/biomechanics review |
| Small- versus finite-deformation boundary is respected | No small-strain equation is used as universal; finite-strain notation is omitted because the reader example does not need it | Pass | Reopen if later editing adds a finite-deformation calculation |
| Living-tissue qualifications are bounded | Nonlinearity, anisotropy, heterogeneity, viscoelasticity, poroelasticity, activity, history, and prestress qualify constitutive transfer | Pass | Tissue-specific review for every later application |
| Stiffness, compliance, strength, tolerance, capacity, and reserve remain different | Object-transfer countercase and commensurability rule prevent permanent-tissue or single-scalar use | Pass | Review any later numerical threshold |
| Exposure history is not an invented score | Magnitude, direction, rate, duration, repetition, sequence, variability, rest, state, and recovery remain an ordered description | Pass | Tissue-specific evidence for any later dose metric |
| Work, power, energy, and efficiency remain bounded | Energy account follows the selected system; net joint power and health or preferred efficiency are not equated | Pass | Reopen for any later whole-body objective |
| Load path retains balance, carrier, quantity, and nonuniqueness | Path begins and ends, can branch or become a field, and cannot silently change force into health | Pass | Validation remains model-specific |
| Three force-line senses remain separate | External geometry, inferred multicarrier relation, and embodied report have distinct objects and evidence jobs | Pass | Final authorial-intent and visual review of embodied panel |

No equation supplies an anatomical route, posterior preference, decompression, injury threshold, medical outcome, or later-book conclusion. The quarantined angular-velocity and disc-spring expressions are absent.

## Reader and narrative audit

| Requirement | Result |
|---|---|
| Concrete opening | One ordinary object transfer creates the vocabulary problem before definitions appear |
| Cumulative argument | Boundary → quantities → local material state → capacity → history → transfer model → Chapter 3 role question |
| Reader level | Ordinary language precedes the one displayed equation; specialized terms receive a physical job rather than glossary-only definitions |
| Technical density | One recurring task and one idealized strip carry the explanation; no optional anatomical miniature or numerical tissue value is added |
| Countercases | Same event/different boundary, same force/different moment, same resultant/different field, rigid motion without strain, same task/different internal solution, and multiple compatible paths |
| Tone | Direct and constructive; no anti-medical claim, posture moralization, universal prescription, or defensive disclaimer cadence |
| Uncertainty | Measurement, calculation, inference, model, hypothesis, and embodied report are named locally through the provenance key |
| Conclusion | Returns to the object, reconstructs the usable grammar, states the stronger questions not decided, and creates the exact hard/soft handoff |
| Traditional signpost | Uses the accepted “motivated by” wording once at the Chapter 3 seam; makes no claim of definitional identity or scientific validation |
| Later-book boundary | No preferred configuration, signed generalized mode, all-Yang state, posterior necessity, breath geometry, torus model, bandha, self-test, or practice claim carries the chapter |

The chapter deliberately does not stand alone as a mechanics textbook. It assumes Chapter 1 has established why the mechanical dimension belongs in the book and hands Chapter 3 a precise division-of-labor question.

## Figure-placeholder audit

| Figure | Teaching job | Evidence-state control | First-draft result | Publication gate |
|---|---|---|---|---|
| 2.1 — One task, several boundaries | Make boundary-relative force accounting visible | Declared qualitative `MOD`; values are not presented as measured | Pass | Mechanics and accessibility review of final free-body art |
| 2.2 — External demand to local exposure | Expose every scale transition and the separate biological layer | `OBS`, `MEAS`, `CALC`, `INF`, and `MOD` shown redundantly in text | Pass | Mechanics, biomechanics, and accessibility review |
| 2.3 — Quantity comparison | Keep vector, axial vector, scalar field, tensor field, displacement, and strain distinct | Definition table rather than empirical display | Pass | Tensor/vector/scalar and final notation review |
| 2.4 — Exposure through time | Show non-equivalent histories without a universal score | Explicit constructed `MOD`, not measured traces | Pass | Technical review of final curves and accessibility |
| 2.5 — Three force-line senses | Prevent similar language from creating one evidentiary object | Known/open columns plus distinct representation descriptions | Pass | Mechanics, authorial-intent, accessibility, and final visual review |

All five figures have a provisional reader number and title, one captioned teaching claim, one explicit limit, and a substantive text alternative. They do not rely on color or imported anatomy. Figure 2.1 remains a storyboard rather than a solved free-body calculation; Figure 2.4 is a comparison of constructed histories rather than empirical traces. Final visual design may replace the text-native forms without changing their inference limits.

## Source-note audit

The notes use authoritative or primary publisher records for their assigned jobs:

1. BIPM controls SI units and the object-versus-dimension warning.
2. Gurtin–Fried–Anand and MIT OpenCourseWare control systems, balances, resultants, traction, and stress.
3. Winter controls human-movement force, moment, work, power, and inverse-analysis boundaries.
4. Gurtin–Fried–Anand, Holzapfel, and Bathe control stress, deformation, reference state, and strain distinctions.
5. Holzapfel–Humphrey–Ogden supports the bounded living-tissue constitutive qualifications.
6. Gómez-González and colleagues supports the measurement-versus-inference boundary in living tissue.
7. The National Academies source supports the operational separation of external exposure, internal exposure, tolerance, capacity, and time; its medical conclusions are explicitly not imported.
8. McBride and Silva supplies one tissue-specific example of exposure structure and response without universal transfer.
9. TU Delft supplies the bounded structural meaning of *load path*; the biological multicarrier extension is declared as project vocabulary.

Every factual or technical proposition in the draft is either standard mechanics covered by notes 1–4, a bounded biological or measurement qualification covered by notes 5–8, or a declared project definition covered by the load-path/force-line discussion. No internal project file is cited as scientific evidence.

## Controlled-salvage provenance audit

| Draft location | Recovered kernel | Archive disposition honored |
|---|---|---|
| Opening and system boundary | `SAL-02-01`, `SAL-02-04`, `SAL-02-11` | Quantity stack, geometry, history, and authorial continuity retained; no old causal certainty or wording copied |
| Boundary, phase, and frame | `SAL-02-01`, narrow lesson from `SAL-02-08` | System and phase are explicit; legacy matrix and Book II generalized modes remain absent |
| Force, moment, pressure | `SAL-02-01`, `SAL-02-04`, `SAL-02-06` | Lever and contact kernels rebuilt from standard mechanics; no posterior route inferred |
| Stress, strain, deformation | `SAL-02-03`, `SAL-02-05`, bounded `SAL-02-10` | Candidate carriers and material behavior separated; disc-spring biology and universal network claims absent |
| Stiffness through capacity | `SAL-02-03`, `SAL-02-05`, `SAL-02-07` | Role exchange and contextual capacity retained; no fixed tissue bins or health sequence asserted |
| Exposure history | `SAL-02-01`, `SAL-02-04`, bounded `SAL-02-10` | History dimensions retained; no universal score, degeneration chain, or recovery equation created |
| Load path and force line | `SAL-02-01`, `SAL-02-02`, narrow `SAL-02-05`–`SAL-02-07` | Multicarrier and embodied kernels retained at distinct statuses; no hidden cable, meridian identity, or generated route language |
| Conclusion and handoff | `SAL-02-07`, `SAL-02-11` | Shape-preserving/form-receiving question and TCM motivation retained; hard/soft definition remains Chapter 3's job |

Quarantine check:

- `SAL-02-09`'s dimensionally inconsistent coupled-angular-velocity equation is absent; its question remains protected for Book II.
- `SAL-02-10`'s disc scalar-spring medical inference is absent; only general work, energy, deformation, and history distinctions survive.
- `SAL-02-12` contributes no copied generated metaphor or heel-to-spine route.
- `SAL-02-13` contributes no independent wording, authority, or citation.

## Post-draft term audit

The required search was run for *load*, *stress*, *strain*, *pressure*, *force line*, *path*, *support*, *absorb*, *redirect*, *efficient*, *optimal*, and *designed*.

- *Load* functions as the declared umbrella, a quoted phrase under analysis, a source title, or part of the defined term *load path*; no use substitutes for a known technical quantity.
- *Stress* and *strain* occur frequently because the chapter owns their distinction. Each consequential use identifies field, material, reference, inference, or response boundary.
- *Pressure* distinguishes contact and fluid meanings and never functions as a synonym for force or flow.
- *Force line* appears only in the controlled three-sense discussion and figure.
- *Path* appears only with system, carrier, quantity, balance, or nonuniqueness constraints.
- *Support* appears in ordinary contact, pressure-mediated carrier, and next-chapter role contexts; it does not imply health or preferred organization.
- *Efficient* appears once as one among several possible explanations for an alternative movement solution, not as a defined whole-body objective.
- *Absorb*, *redirect*, *optimal*, and *designed* do not appear.

Searches also found no reader-facing control ID, archive locator, migration note, editorial acceptance criterion, generated instruction, `TODO`, `TBD`, `FIXME`, raw legacy equation, protocol, treatment recommendation, self-test, or claim that publication review has occurred.

## Chapter 13 dependency check

Chapter 13 can inherit without redefinition:

- boundary-relative external and internal action;
- force, moment, traction, contact pressure, fluid pressure, stress, strain, deformation, and excursion as non-equivalent quantities;
- observed baseline versus stress-free reference;
- stiffness/compliance versus role, strength, tolerance, and capacity;
- time-structured exposure and recovery as a change in receiving state rather than a force subtraction;
- line of action versus load path versus inferred or embodied force line;
- `OBS`, `MEAS`, `CALC`, `INF`, `MOD`, `HYP`, and `EMB` as figure-provenance labels; and
- the rule that a complete mechanical narrative does not establish a biological or medical consequence.

Chapter 13 still owns the hard/soft definition, maintained-constraint family, conduit analogy, tendon–SSCT relative-glide comparison, recovery boundary, and its own anatomy and measurement evidence. Chapter 2 has not pre-decided those results.

## Publication-gate inventory

The following remain open and must not be represented as completed:

1. external mechanics review of the final prose, equation, free-body figures, resultants, sign conventions, and pure-couple language;
2. external biomechanics review of inverse-analysis language and every living-tissue inference;
3. final authorial-intent review of the embodied-force-line passage and panel;
4. visual communication and accessibility review of all final figures and text alternatives;
5. final source-note and bibliography normalization, including literature freshness;
6. final typography for vectors, tensors, scalars, units, and provenance labels;
7. anatomy, source, and rights review if any later revision adds a specific anatomical inset; and
8. post-integration continuity and repetition review after Chapters 13 and 24 exist.

Any later addition of numerical human values, a specific anatomical route, a tissue-specific dose, a biological threshold, a medical consequence, preferred configuration, posterior necessity, or practice claim reopens its own control and evidence gate.

## Internal decision and next action

Chapter 2 passes its controlled first-draft gate. It provides a readable mechanical grammar, source-grounded notes, five reviewable figure arguments, a clean Chapter 3 handoff, and the precise distinctions required by Chapters 13 and 24. The draft remains correctable without losing its chapter job if external review narrows a definition or replaces a figure.

Proceed to Chapter 13 using this draft and its provenance key as inherited controls. After Chapters 13 and 24 are drafted, rerun the cross-slice voice, density, terminology, evidence migration, composite-provenance, and publication-gate audit before freezing the style guide for the remaining 27 chapters.

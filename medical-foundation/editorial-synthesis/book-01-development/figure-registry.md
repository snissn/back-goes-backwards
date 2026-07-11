# Book I Figure Registry

**Status:** Pilot figure program for `BGB-U-0002`, `BGB-U-0013`, and `BGB-U-0024`
**Asset state:** Specifications only; no illustration is publication-approved.

## Figure standard

Figures are explanatory models with their own claim burden. Every final asset must identify:

- the system boundary, frame, scale, phase, and task where relevant;
- whether geometry and quantities are measured, calculated, inferred, idealized, or merely illustrative;
- force and moment application points, distributed contacts, units, and sign conventions where shown;
- which elements are simultaneous and which depict a sequence;
- assumptions and limits in the caption rather than through decorative uncertainty marks;
- source, license, attribution, and anatomical review status;
- a text alternative that communicates the argument without relying on color; and
- the exact claims, models, and examples the figure is permitted to support.

The book-specific identifiers `BGB-FIG-01-###` are asset IDs. They do not replace the `BGB-M` record for the model being drawn.

Figures move through `specified → sketched → technical review → evidence review → accessibility and rights review → publication-approved`.

`BGB-FIG-01-001` through `005` inherit the symbols, units, and `OBS`/`MEAS`/`CALC`/`INF`/`MOD`/`HYP`/`EMB` provenance legend from the [Chapter 2 definitions and notation pack](evidence/chapter-02-definitions-and-notation.md). Later figures reuse that legend rather than inventing new evidence-state graphics.

## Pilot index

| Figure | Working title | Primary unit | Format | State |
|---|---|---|---|---|
| `BGB-FIG-01-001` | One task, several system boundaries | `BGB-U-0002` | Sequential free-body panels | specified |
| `BGB-FIG-01-002` | From external demand to local exposure | `BGB-U-0002` | Nested scale diagram | specified |
| `BGB-FIG-01-003` | Force, moment, pressure, stress, and strain | `BGB-U-0002` | Comparative mechanics plate | specified |
| `BGB-FIG-01-004` | Mechanical exposure through time | `BGB-U-0002` | Time-series and descriptor | specified |
| `BGB-FIG-01-005` | Three meanings of force line | `BGB-U-0002` | Controlled comparison | specified |
| `BGB-FIG-01-006` | Shape-preserving and form-receiving roles | `BGB-U-0013` | Relational role diagram | specified |
| `BGB-FIG-01-007` | What holds a hose kinked? | `BGB-U-0013` | Five-state analogy sequence | specified |
| `BGB-FIG-01-008` | Intrinsic, extrinsic, and mixed constraint | `BGB-U-0013` | Differential model matrix | specified |
| `BGB-FIG-01-009` | Objective-aTOS system boundary | `BGB-U-0024` | Reviewed anatomy schematic | specified provisionally |
| `BGB-FIG-01-010` | The thoracic-outlet causal chain | `BGB-U-0024` | Branching evidence map | specified |
| `BGB-FIG-01-011` | Exposure, injury, and retained state through time | `BGB-U-0024` | Evidence-state timeline | specified provisionally |
| `BGB-FIG-01-012` | What transfers to tendon–SSCT relative glide? | `BGB-U-0024` | Comparative matrix | specified provisionally |

## BGB-FIG-01-001 — One task, several system boundaries

- **Editorial job:** Make `BGB-C-0002` visible by redrawing one object-transfer event with different boundaries.
- **Model / example:** `BGB-M-0001`; `BGB-X-0001`.
- **Required panels:** Person plus object; person alone with object contact external; selected limb or trunk segment; simplified joint or tissue region. Add a dynamic inset contrasting a hold with acceleration.
- **Required labels:** Boundary; external contacts; gravity; support reactions; applied object force; acceleration; point or axis used for moments; known versus unknown interactions.
- **Visual encoding:** Solid boundary for the chosen system; arrows only for forces crossing that boundary; a consistent neutral palette; different line style, not color alone, for measured versus unknown quantities.
- **Caption obligation:** State that changing the boundary changes the force inventory and that the figure does not reveal local stress or a unique load path.
- **Technical review:** Free-body balance, arrow origin, sign convention, moment reference, dynamic versus static language.
- **Accessibility:** Text alternative enumerates the forces added or removed at each boundary change.
- **Rights / provenance:** Commissioned schematic or original vector drawing; no stock anatomy required.
- **Failure to avoid:** Drawing muscle or joint forces as external to the person-level system; showing a balanced diagram during acceleration without an inertial term.

## BGB-FIG-01-002 — From external demand to local exposure

- **Editorial job:** Show the non-equivalent levels in `BGB-C-0004` and where modeling or measurement is required between them.
- **Model / example:** `BGB-M-0002`; `BGB-X-0001`.
- **Required structure:** Task and environment → segment force and moment → joint/contact or pressure distribution → tissue stress and strain → separately bounded biological response. Use nested magnification rather than a single arrow implying direct causation.
- **Required labels:** Quantity, unit family, scale, measurement status, and uncertainty at every level. Mark the transition to biological response as outside the purely mechanical stack.
- **Visual encoding:** Separate observed, calculated, modeled, and unknown states by symbol shape and redundant labels.
- **Caption obligation:** External load and visible configuration do not determine a unique local tissue exposure without geometry, boundary conditions, active forces, and material behavior.
- **Technical review:** Dimensional consistency and correct placement of pressure, traction, stress, strain, and deformation.
- **Accessibility:** Text alternative lists each level and the additional information required to reach the next.
- **Rights / provenance:** Original diagram.
- **Failure to avoid:** A smooth funnel that visually converts object weight directly into tissue damage.

## BGB-FIG-01-003 — Force, moment, pressure, stress, and strain

- **Editorial job:** Give `BGB-C-0003` a compact visual grammar.
- **Model / example:** `BGB-M-0002`; `BGB-X-0002` if an anatomical inset is retained.
- **Required panels:** Force vector and point of application; moment about a chosen point or axis; distributed pressure over an interface; traction on a material plane; simple deformation with stated strain measure. Include units.
- **Required labels:** `F`, `r`, `M_O = r × F`, area, normal, pressure, stress/traction, reference and deformed states.
- **Visual encoding:** Use one simple block or idealized joint across panels where possible so the quantity changes, not the entire visual context.
- **Caption obligation:** These quantities are related through a defined model but are not interchangeable; pressure shown as force per area is an average under stated assumptions.
- **Technical review:** Mechanics specialist; verify tensor/vector/scalar distinctions and strain definition.
- **Accessibility:** Text alternative explains the physical question answered by each quantity.
- **Rights / provenance:** Original diagram; anatomical inset only after source and license review.
- **Failure to avoid:** Using a curved arrow as though it were a torque vector without a stated axis, or depicting stress as an external force.

## BGB-FIG-01-004 — Mechanical exposure through time

- **Editorial job:** Prevent a peak load from standing in for the full exposure history in `BGB-C-0005`.
- **Model / example:** `BGB-M-0003`; `BGB-X-0001` repeated under several task histories.
- **Required panels:** Equal peak with different duration; equal cumulative magnitude with different rate; repeated versus variable sequence; work and rest; changing capacity or recovery shown on a separate layer rather than subtracted into an unsupported score.
- **Required labels:** Named quantity, magnitude, direction or sign, time, repetition, recovery interval, and selected response window.
- **Visual encoding:** Small multiples with identical scales. Do not imply that more variability or more rest is always better.
- **Caption obligation:** The relevant exposure descriptor is tissue-, task-, and outcome-specific; the figure proposes dimensions to ask about, not a universal dose equation.
- **Technical review:** Confirm that any areas under curves have defined meaning and units.
- **Accessibility:** Text alternative describes how histories differ even when one summary value matches.
- **Rights / provenance:** Original diagram.
- **Failure to avoid:** An unlabeled “stress” curve mixing psychological stress, mechanical stress, and task demand.

## BGB-FIG-01-005 — Three meanings of force line

- **Editorial job:** Preserve the authorial term while enforcing the distinctions in `BGB-C-0006` and `BGB-C-0007`.
- **Model / example:** `BGB-M-0004`; `BGB-X-0001`.
- **Required panels:** External force and its line of action; inferred internal multicarrier transfer network; embodied or felt connection presented as an observation with candidate correlates, not an anatomical cable.
- **Required labels:** Sense, boundary, carrier, quantity, scale, task, observation status. Use a branching network for the internal model rather than one highlighted tendon.
- **Visual encoding:** Geometric arrow for external line of action; network or field for inferred transfer; distinct perceptual annotation for embodied continuity. Caption and line style must carry the difference without color.
- **Caption obligation:** Similar language does not make the three objects identical. The embodied sense can motivate measurement without already proving the internal route.
- **Technical and intent review:** Mechanics review plus author review of the embodied panel.
- **Accessibility:** Text alternative contrasts what is known and inferred in each panel.
- **Rights / provenance:** Original diagram; direct-author formulation `BGB-S-9005` credited internally.
- **Failure to avoid:** Three nearly identical glowing lines that visually assert the very equivalence the text rejects.

## BGB-FIG-01-006 — Shape-preserving and form-receiving roles

- **Editorial job:** Present the hard/soft model as a changing division of labor, including the adverse substitution case.
- **Model / example:** `BGB-M-0005`; provisionally selected comparison `BGB-X-0004`.
- **Required panels:** Successful task-specific role relation; same tissue changing role with direction or phase; form-receiving structure held as a substitute boundary; counterexample in which substantial soft-tissue loading is normal; controlled tendon–SSCT inset showing separate motion traces and an unresolved recovery-after-release cell.
- **Required labels:** Scale, direction, task, state, timescale, carrier, deformation or excursion, and whether the panel is hypothesis or ordinary mechanics.
- **Visual encoding:** Do not color anatomy permanently hard or soft. Encode roles on interactions or states, with a legend that permits tissue roles to switch.
- **Caption obligation:** Hard and soft are relative mechanical roles, not tissue classes, moral categories, or a demand for zero deformation.
- **Technical and intent review:** Authorial-intent review; biomechanics review; later traditional-language review if Yin/Yang enters the caption.
- **Accessibility:** Text alternative describes which relation is shape-preserving and which remains able to conform in each panel.
- **Rights / provenance:** Original schematic.
- **Failure to avoid:** Posterior body colored “good/hard” and anterior body “bad/soft,” or bone alone carrying all demand.

## BGB-FIG-01-007 — What holds a hose kinked?

- **Editorial job:** Show causal order in `BGB-C-0008`, `BGB-C-0010`, and `BGB-C-0011` without making the hose evidence for a biological vessel.
- **Model / example:** `BGB-M-0007`; `BGB-X-0003`.
- **Required panels:** Open reference; brief deformation; recovered state after release; externally held deformation; intrinsic or residual narrowing; optional mixed state if visual complexity remains manageable.
- **Required labels:** External contact or bending moment; internal and external pressure; wall deformation; lumen/course; inlet and outlet; volumetric flow if shown; time sequence.
- **Visual encoding:** Put the maintaining boundary in view. If arrows show flow, do not make slower flow visually synonymous with wall strain.
- **Caption obligation:** In the extrinsic panel, the surrounding boundary maintains wall deformation; the changed geometry then enters a pressure-flow relation. Biological transfer requires active-wall, pulsatile, branching, regulatory, and tissue-specific evidence.
- **Technical review:** Solid and fluid mechanics; verify that the phrase “unkink on its own” is conditioned on material state and pressures.
- **Accessibility:** Text alternative explains what maintains each state and how the states differ.
- **Rights / provenance:** Original schematic or reproducible project photograph with recorded setup and rights.
- **Failure to avoid:** An unexplained pinched hose floating in space, or a diameter-to-flow arrow presented as a universal biological law.

## BGB-FIG-01-008 — Intrinsic, extrinsic, and mixed constraint

- **Editorial job:** Make `BGB-C-0013` a reusable differential model.
- **Model / example:** `BGB-M-0006`; `BGB-X-0003` and `BGB-X-0004`.
- **Required structure:** Three columns—intrinsic, extrinsic, mixed/history-dependent—and rows for maintaining condition, response to boundary release, measurement, alternative, and unresolved question.
- **Required labels:** Reference state, current boundary demand, wall or tissue state, recovery timescale, excursion or geometry, and candidate test.
- **Visual encoding:** Equal visual weight for all three models; the project's interest in the extrinsic case must not visually pre-decide it.
- **Caption obligation:** Similar observed geometry can arise from different maintaining relations, and chronic cases can cross categories through remodeling or adhesion.
- **Technical review:** Constitutive and biological realism; ensure “intrinsic” does not mean nonmechanical.
- **Accessibility:** Table-form text alternative reproduces the comparison.
- **Rights / provenance:** Original diagram.
- **Failure to avoid:** A binary diagram that forces every case into purely external or purely internal causation.

## BGB-FIG-01-009 — Thoracic-outlet system boundary

- **Editorial job:** Orient the selected presentation and expose the anatomy and contacts included in `BGB-C-0015` through `BGB-C-0017`.
- **Model / example:** `BGB-M-0008`; provisional objective-aTOS lead `BGB-X-0005`.
- **Required anatomy:** Only the focal bony relation and subclavian-artery anatomy required by the source-grounded composite. Candidate focal relations include cervical-rib/first-rib fusion, first-rib anomaly, or healed clavicular fracture; use only the relation supported by the selected source base.
- **Required panels:** Observed focal anatomy and adjacent arterial lesion; distal arterial or ischemic consequence where sourceable; a separate reconstruction panel for the proposed repeated contact or deformation. Do not imply that one image directly observed cumulative exposure.
- **Required labels:** Corridor definition, side, body position, task, respiratory phase, selected structure, imposed contact or force if evidenced, and anatomical variation.
- **Visual encoding:** Anatomically faithful geometry; hypothesis arrows visually distinct from verified anatomy; no generic red pinch mark standing in for measured deformation.
- **Caption obligation:** The illustration defines the candidate system and does not diagnose thoracic outlet syndrome or establish which structure is consequential.
- **Technical review:** Anatomist, relevant clinician, biomechanics review, and rights review.
- **Accessibility:** Text alternative names the spatial relationships and proposed changes without depending on the image.
- **Rights / provenance:** Commissioned original, properly licensed source adaptation, or reviewed public-domain base. Source anatomy and modifications recorded.
- **Failure to avoid:** Combining all proposed thoracic-outlet spaces and presentations into one anatomically impossible “pinch point.”

## BGB-FIG-01-010 — The thoracic-outlet causal chain

- **Editorial job:** Require every bridge claim to remain visible and separately evidenced.
- **Model / example:** `BGB-M-0008`; objective-aTOS lead `BGB-X-0005`; negative comparison `BGB-X-0007`; venous timeline `BGB-X-0009` only as a separately labeled branch.
- **Required structure:** Focal anatomy and task → reconstructed repeated arterial deformation → objective wall lesion → thrombus, embolus, or occlusion where present → distal arterial or ischemic consequence → presentation and diagnosis. Alternatives enter at each arrow, not only at the end; definition-based selection is visible.
- **Required labels:** Claim IDs `BGB-C-0015` through `BGB-C-0022`; evidence state for each link once review begins; observed versus inferred quantity.
- **Visual encoding:** Branches and gates rather than one inevitable downward arrow. A link can be marked supported, conditional, unresolved, or disfavored only after evidence review.
- **Caption obligation:** Support for one link does not establish the next; the model remains useful if review narrows or rejects part of the chain.
- **Technical and clinical review:** Claim-ledger consistency; medical-coauthor review; no diagnostic or treatment implication.
- **Accessibility:** Text alternative follows each branch and names its alternatives.
- **Rights / provenance:** Original diagram.
- **Failure to avoid:** A posture-to-symptom cascade, an exposure arrow rendered as directly observed, or a composite drawn as one fully documented patient.

## BGB-FIG-01-011 — Exposure, injury, and retained state through time

- **Editorial job:** Show the chronology protected by `BGB-C-0020`: current imposed state, cumulative exposure reconstructed from later evidence, retained material pathology, and mixed future response are different objects.
- **Model / example:** `BGB-M-0008`; objective-aTOS lead `BGB-X-0005` and thrombotic-vTOS timeline `BGB-X-0009`.
- **Required content:** One arterial row distinguishing observed focal anatomy, reconstructed repeated deformation, objective wall lesion, distal event, and later state; one shorter venous row showing proposed exposure, DVT, retained obstruction or recanalization, collaterals, and changed future response.
- **Required labels:** Phenotype; time; observed, measured, inferred, and reconstructed status; current maintaining terms; retained intrinsic state; missing exposure history; treatment-altered measurements where relevant.
- **Visual encoding:** Parallel timelines or state-transition panels. Never place unlike quantities on a balance scale or pool arterial and venous variables.
- **Caption obligation:** Present geometry and pathology can record history without directly revealing the initiating exposure; the arterial repeated-injury arrow remains reconstructed, and the venous timeline is a comparison rather than a second complete case.
- **Technical review:** Biomechanics, vascular medicine/surgery, claim-provenance, and medical-coauthor review.
- **Accessibility:** Text alternative follows both timelines and names which links are observed, reconstructed, retained, or unresolved.
- **Rights / provenance:** Original diagram.
- **Failure to avoid:** A generic vascular timeline, treatment narrative, or smooth causal arrow that hides the change from extrinsic to intrinsic or mixed state.

## BGB-FIG-01-012 — What transfers to a second compliant system?

- **Editorial job:** Test, rather than merely illustrate, the generalization in `BGB-C-0012` through `BGB-C-0014`.
- **Model / example:** `BGB-M-0006`; selected transfer record `BGB-X-0008`, inheriting neutral variables from `BGB-X-0004` without inheriting its evidence as support for aTOS.
- **Required structure:** Side-by-side matrix for objective aTOS and tendon–SSCT relative glide: object; required freedom; boundary or maintaining relation; observed or reconstructed state; restoring behavior; tissue-specific function; measurement; intrinsic alternative; noncorresponding observation; recovery status.
- **Required labels:** Which rows are shared model structure and which are system-specific.
- **Visual encoding:** Empty or unresolved cells remain visibly unresolved; do not fill them with analogous words unsupported in the second system.
- **Caption obligation:** Shared questions about boundary conditions, tissue-specific freedom, time, and alternatives do not imply shared anatomy, constitutive behavior, physiology, clinical importance, or intervention. The tendon example does not establish adverse constraint, and its kinematic reversal is not recovery after release.
- **Technical review:** Specialist for each system plus cross-model review.
- **Accessibility:** The comparison matrix doubles as the text alternative.
- **Rights / provenance:** Original diagram; anatomical insets subject to separate rights records.
- **Failure to avoid:** Matching “narrowing” to “restriction” by vocabulary alone and declaring a universal mechanism.

## Production order

1. Sketch `BGB-FIG-01-001` through `005` while the Chapter 2 brief is reviewed.
2. Obtain authorial and technical approval of the hard/soft observable and provisionally selected tendon–SSCT example before commissioning `006` and `008`.
3. Technically review `007` before any biological conduit analogy is drafted.
4. Obtain author and medical-coauthor approval of the provisional objective-aTOS lead before producing `009` or `011`.
5. Build `010` directly from the evidence ledger so its evidence-state labels cannot outrun the research.
6. Build `012` from the tendon–SSCT focused pack and preserve every unresolved cell rather than forcing visual symmetry with aTOS.

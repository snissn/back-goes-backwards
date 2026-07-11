# Book I Model Registry

**Status:** Pilot registry for `BGB-U-0002`, `BGB-U-0013`, and `BGB-U-0024`
**Model state:** Proposed for formalization and review; none is a validated clinical model.

## Purpose and lifecycle

This registry separates a model from the prose, example, figure, and claim that use it. A model can survive while one application fails, and an analogy can remain pedagogically useful without becoming evidence for a biological mechanism.

Each model moves through:

`captured → specified → checked → evidence-linked → validated within scope → publication-approved`

A model record identifies its purpose, variables, system boundary, assumptions, claim dependencies, outputs, competing representations, validation work, and limits. Equations are included only where they clarify the object being modeled; they do not create maturity by mathematical appearance.

## Pilot index

| Model | Name | Primary units | Current state | Main gates |
|---|---|---|---|---|
| `BGB-M-0001` | Nested systems and free bodies | `BGB-U-0002` | specified | DEF, FORM, VIS |
| `BGB-M-0002` | Mechanical quantity and scale stack | `BGB-U-0002` | specified | DEF, FORM, EVID, VIS |
| `BGB-M-0003` | Time-structured exposure descriptor | `BGB-U-0002` | captured | DEF, FORM, EVID, MEAS |
| `BGB-M-0004` | Load path and force-line family | `BGB-U-0002` | captured | INTENT, DEF, FORM, EVID, MEAS, VIS |
| `BGB-M-0005` | Hard/soft division of mechanical labor | `BGB-U-0003`; applied in `BGB-U-0013` | specified | DEF, FORM, EVID, ALT, MEAS |
| `BGB-M-0006` | Constraint-maintained deformation | `BGB-U-0013` | specified | DEF, FORM, EVID, LINK, ALT, MEAS |
| `BGB-M-0007` | Deformable-tube and garden-hose analogy | `BGB-U-0013` | specified | DEF, FORM, EVID, ALT, VIS |
| `BGB-M-0008` | Thoracic-outlet corridor model | `BGB-U-0024` | captured | PROV, DEF, FORM, EVID, LINK, ALT, MEAS, CLIN, VIS |

## BGB-M-0001 — Nested systems and free bodies

- **Purpose:** Teach why the system boundary must precede the force inventory and give all later chapters a reusable free-body method.
- **Provenance:** Standard mechanical method, selected and organized by `editorial-synthesis` for the recurring object-transfer task.
- **Claim dependencies:** `BGB-C-0002`, `BGB-C-0003`, `BGB-C-0004`.
- **Primary example:** `BGB-X-0001`.
- **System levels:** Person plus object; person alone; selected limb or trunk segment; joint; tissue region.
- **Inputs:** Boundary; external contacts; gravitational field; applied forces; accelerations; points or axes for moments; time interval; stated quasi-static or dynamic assumption.
- **Core representation:** For a chosen body, list forces crossing the boundary and apply the appropriate balance relations. In the simplest rigid-body notation:

  ```text
  sum F_ext = dP/dt
  sum M_O,ext = dH_O/dt
  ```

  Static balance is a special case, not the default meaning of a free-body diagram.
- **Outputs:** External force and moment inventory; known and unknown interactions; a visible statement of what the diagram cannot determine internally.
- **Assumptions to declare:** Rigid or deformable body; inertial frame; planar or three-dimensional simplification; contact model; treatment of muscle and joint forces at the selected boundary.
- **Competing or complementary representations:** Whole-body inverse dynamics; multibody dynamics; continuum models; finite-element or fluid-structure models at smaller scales.
- **Validation work:** Verify balance, sign conventions, units, and boundary crossings for each diagram; compare simplified results with accepted worked examples.
- **Failure conditions:** Double-counted forces; an “internal” force drawn across a boundary where it is external; unexplained support reactions; a static result used for an accelerating task.
- **Publication limit:** The diagram establishes accounting at its own scale. It does not reveal a unique tissue load path or local strain.
- **Figure links:** `BGB-FIG-01-001`, `BGB-FIG-01-002`.

## BGB-M-0002 — Mechanical quantity and scale stack

- **Purpose:** Keep unlike mechanical objects distinct while showing how a whole-body task can be traced toward tissue exposure.
- **Provenance:** `project-model` memo §7 and `editorial-synthesis` in `BGB-U-0002`.
- **Claim dependencies:** `BGB-C-0001`, `BGB-C-0003`, `BGB-C-0004`.
- **Levels:**

  1. **Task and environment:** mass, acceleration, gravity, external contact, applied force.
  2. **Segment or section:** resultant force and moment pair `(F, M)`.
  3. **Pressure-bearing interface or fluid system:** pressure, pressure gradient, contact-pressure distribution.
  4. **Tissue field:** current and reference configurations, deformation map `χ(X,t)`, deformation gradient `F_def`, stress tensor `σ`, declared strain measure, strain rate, and time history.
  5. **Biological response:** a separate downstream layer, not another synonym for mechanical load.

- **Minimal relations:**

  ```text
  M_O = r x F                         turning effect about O
  t(n) = sigma n                      traction on a plane with normal n
  p_avg = F_normal / A                average pressure using the declared current or reference area
  ```

  The strain measure and constitutive relation must be selected for the deformation regime; the registry does not impose one universal biological material law.
- **Outputs:** A quantity map with units, scale, frame or reference configuration, provenance label (`OBS`, `MEAS`, `CALC`, `INF`, `MOD`, `HYP`, or `EMB`), and uncertainty for every important arrow.
- **Assumptions to declare:** Geometry, material behavior, active forces, boundary conditions, reference configuration, homogeneity or anisotropy, and timescale.
- **Competing or complementary representations:** Direct local measurement; inverse estimation; continuum simulation; descriptive kinematics when forces cannot be justified.
- **Validation work:** Dimensional audit; sensitivity to boundary conditions and constitutive assumptions; validation against direct measurements where possible.
- **Failure conditions:** Treating force as stress, pressure as force, angle as moment, kinematics as kinetics, or a modeled internal quantity as directly observed.
- **Publication limit:** The stack organizes questions. It does not guarantee that every intermediate quantity is identifiable in a living person.
- **Figure links:** `BGB-FIG-01-002`, `BGB-FIG-01-003`.

## BGB-M-0003 — Time-structured exposure descriptor

- **Purpose:** Replace “too much load” with a tissue- and task-specific account of mechanical exposure over time.
- **Provenance:** `editorial-synthesis`, preserving `BGB-S-1105`, `BGB-S-1110`, `BGB-S-1117`, and `BGB-S-1218`.
- **Claim dependency:** `BGB-C-0005`.
- **Provisional representation:** An ordered descriptor rather than a vector with commensurable components:

  ```text
  \mathcal{E}[q; S, t_0:t_1] = {
       quantity and location; magnitude; direction;
       application rate; duration; repetition; sequence;
       variability; rest; recovery and material state}
  ```

- **Inputs:** A named mechanical quantity and location, time series or task history, tissue or system state, and candidate response.
- **Outputs:** A reproducible multidimensional exposure record—not a scalar dose or a vector whose unlike entries can be added—and a smaller candidate set of predictive features for the selected context.
- **Assumptions to declare:** Relevant observation window; independence or interaction among dose features; treatment of recovery; validity of exposure measurement.
- **Competing or complementary representations:** Peak value, impulse, cumulative load, cycle count, fatigue-damage model, work or energy, strain-time integral, task-class exposure, or state-space history.
- **Validation work:** Compare the descriptor with simpler alternatives; estimate repeatability and predictive value; identify which features matter for each tissue and outcome.
- **Failure conditions:** Adding dimensions that do not improve explanation; summing quantities with incompatible units; assuming variability or repetition has the same sign in every context.
- **Publication limit:** No universal injury threshold, adaptation law, or health score is implied.
- **Figure link:** `BGB-FIG-01-004`.

## BGB-M-0004 — Load path and force-line family

- **Purpose:** Preserve the project's routing language while separating the objects that a line or path can represent.
- **Provenance:** `author-direct` `BGB-S-9005`; `project-model` memo §7; source obligations `BGB-S-1104`, `BGB-S-1208`, `BGB-S-1214`, and `BGB-S-1216`; literalized variants governed by `BGB-Q-0016`.
- **Claim dependencies:** `BGB-C-0006`, `BGB-C-0007`.
- **Submodels:**

  | Submodel | Object | Minimum specification |
  |---|---|---|
  | External line of action | Geometric line associated with a force vector | Force, point or distributed contact, frame, task |
  | Internal transfer relation (`LP-n` or `FL_inf`) | Inferred route or network of resultants, contacts, tension, compression, pressure, and active control | System boundary, carriers, quantity, scale, balance, uncertainty, `INF`/`MOD`/`HYP` status |
  | Embodied force line (`FL_emb`) | Felt continuity or coordination used to generate a hypothesis | Reporter, task, sidedness, phase, phenomenology, candidate measured correlates, `EMB` status |

- **Representation:** A path may be a single line, branching graph, distributed field, or time-varying network. The choice is part of the model, not a decorative decision.
- **Inputs:** Defined task; boundaries; candidate carriers; measured or modeled forces, moments, pressure, or deformation; embodied observation where relevant.
- **Outputs:** An inspectable routing hypothesis and explicit uncertainty about uniqueness and carrier.
- **Assumptions to declare:** Whether the relation is mechanical, perceptual, or both; continuity; direction; phase; network granularity; treatment of parallel paths.
- **Competing or complementary representations:** Stress field, principal-stress trajectories, force-transmission graph, muscle-synergy model, pressure network, or purely phenomenological map.
- **Validation work:** Force balance; sensitivity to carrier choice; repeatability across tasks; measured correlates for embodied observations; comparison against diffuse and multiple-path alternatives.
- **Failure conditions:** A line is drawn because anatomy looks continuous; a felt connection is declared a resultant force; or different carriers and scales are silently merged.
- **Publication limit:** No “hidden cable,” meridian identity, or one correct body-wide route is established in Book I.
- **Figure link:** `BGB-FIG-01-005`.

The [Chapter 2 definitions and notation pack](evidence/chapter-02-definitions-and-notation.md) controls the symbols, units, provenance legend, and category-error checks for `BGB-M-0002` through `BGB-M-0004`.

## BGB-M-0005 — Hard/soft division of mechanical labor

- **Purpose:** Formalize the project's compact intuition as a relational model that can describe both successful support and adverse substitution.
- **Primary ownership:** Chapter 3 defines the general polarity and its provenance; Chapter 13 owns the maintained-constraint and adverse-substitution application.
- **Provenance:** `author-direct` and `project-model`; motivated by traditional Chinese medicine's hard/soft and Yin/Yang concepts without claiming definitional identity; source obligations `BGB-S-1201`, `BGB-S-1214`, `BGB-S-1217`, and `BGB-S-1219`; protected by `BGB-Q-0009`.
- **Claim dependency:** `BGB-C-0009`.
- **Core formulation:**

  > Load wants to travel through the hard body so that the soft body can remain soft.

  In normalized form, *hard* identifies relatively shape-preserving, path-establishing, or structurally resolving behavior; *soft* identifies relatively form-receiving and shape-conforming behavior. The roles are assigned for a stated scale, direction, task, state, and timescale.
- **Candidate state variables:** Deformation under demand; tangent stiffness or effective structural stiffness; shape recovery; excursion; contact or constraint; active force; pressure; share of gross resultant; energetic cost; task performance.
- **Candidate successful pattern:** Gross demand is resolved through a capable combination of skeletal, tensile, active, contact, and pressure-mediated structures while other structures retain the deformation, glide, containment, and recovery needed for their functions.
- **Candidate adverse pattern:** A form-receiving structure assumes a consequential substitute boundary or path-establishing role through maintained deformation, activation, contact, or lost excursion.
- **Assumptions to declare:** Role is relative, not categorical; normal soft tissue bears load; deformation is not itself failure; pressure can create a shape-preserving assembly; roles can change with direction and phase.
- **Competing or complementary representations:** Tissue-specific stiffness and capacity; load-sharing ratios; impedance; joint stability; tensegrity or prestress; conventional anatomy and material models without Yin/Yang-derived role language.
- **Validation work:** Determine whether the role distinction makes nontrivial predictions; compare with conventional quantities; identify counterexamples and switching behavior.
- **Failure conditions:** Hard becomes a synonym for bone or posterior, soft for weak or anterior, or successful organization for zero soft-tissue strain. The model also fails as a scientific explanation if it adds no observable distinction beyond existing terms.
- **Publication limit:** Book I presents an organizing hypothesis and mechanical intuition, with its traditional motivation signposted but not used as scientific validation. Exact traditional correspondence and preferred all-Yang organization remain later-book work.
- **Figure links:** `BGB-FIG-01-006`, `BGB-FIG-01-008`.

## BGB-M-0006 — Constraint-maintained deformation

- **Purpose:** Represent a class of cases in which boundary conditions maintain deformation or restrict the functional excursion of a compliant structure.
- **Provenance:** `author-direct` clarification and `project-model` memo §8; source obligations `BGB-S-1111`, `BGB-S-1112`, `BGB-S-1119`, `BGB-S-1217`, `BGB-S-1219`, and `BGB-S-1223`.
- **Claim dependencies:** `BGB-C-0008` through `BGB-C-0014`.
- **System boundary:** The selected compliant structure plus the contacts, supports, pressure fields, active structures, and movements capable of maintaining or relieving its state.
- **State description:**

  ```text
  configuration and whole-system demand
      -> maintaining boundary conditions
      -> traction/contact/pressure and internal stress
      -> deformation, changed course, or restricted excursion
      -> tissue-specific functional variable
      -> possible biological or experiential consequence
  ```

- **Inputs:** Reference state; geometry; external and internal pressures; contact, traction, bending, tethering, or active force; constitutive behavior; time; movement or task.
- **Outputs:** Stress and strain or a defensible proxy; geometry; excursion or recovery; restoring response; separately modeled downstream function.
- **Model classes:**

  1. **Extrinsic:** Current surrounding demand is necessary to maintain the state.
  2. **Intrinsic:** Material or geometry within the structure or corridor maintains the state independently of current surrounding demand.
  3. **Mixed/history-dependent:** External demand and intrinsic remodeling, adhesion, tone, or pathology interact.

- **Assumptions to declare:** Reference configuration; linear or nonlinear response; viscoelasticity and hysteresis; active regulation; contact; timescale; whether deformation is harmful, neutral, protective, or unknown.
- **Competing or complementary representations:** Stenosis as geometry; entrapment model; contact mechanics; tethering and excursion model; active-control model; pathological remodeling; symptom-first clinical model.
- **Validation work:** Manipulate or observe maintaining terms and restoration; measure deformation and excursion over time; compare intrinsic, extrinsic, and mixed models; test the downstream link separately.
- **Pilot non-lumen instantiation:** Authorially selected `BGB-X-0004`, flexor tendon–SSCT relative glide during controlled healthy finger motion, tests task-dependent excursion and the null branch. It does not yet validate adverse maintained loss or recovery after release.
- **Failure conditions:** The model treats narrowing as its own cause, skips from geometry to symptoms, or ignores a persistent intrinsic state after the proposed external constraint changes.
- **Publication limit:** A generic failure family, not a diagnosis and not proof that relieving a proposed constraint will improve health.
- **Figure links:** `BGB-FIG-01-006`, `BGB-FIG-01-008`.

## BGB-M-0007 — Deformable-tube and garden-hose analogy

- **Purpose:** Make the distinction between transient shape change, extrinsically maintained deformation, and intrinsic narrowing visible before applying it to biology.
- **Provenance:** `author-direct` garden-hose formulation; `visual-analogy` normalized in `BGB-U-0013`.
- **Claim dependency:** `BGB-C-0011` and, pedagogically, `BGB-C-0008`, `BGB-C-0010`, and `BGB-C-0013`.
- **Mechanical objects:** Wall geometry and constitutive behavior; internal pressure; external pressure or contact; bending and tethering; lumen area and course; volumetric flow; inlet and outlet conditions.
- **Provisional representation:** Let `A(s,t)` describe cross-sectional area along the tube and `p_i - p_o` the transmural pressure. External contact and bending alter the wall equilibrium and therefore `A` and course. A flow relation then depends on that geometry and the stated fluid and boundary conditions.
- **Pedagogical panels:** Unloaded/open; briefly deformed and recovering; deformation held by external geometry; intrinsic or residual narrowing; mixed case.
- **Assumptions to declare:** A garden hose is passive and simplified. Biological vessels are active, branching, pulsatile, viscoelastic, tethered, and regulated. A familiar radius-to-resistance relation may illustrate sensitivity only under its restrictive assumptions and must not be presented as a universal vascular equation.
- **Competing or complementary representations:** Collapsible-tube model; fluid-structure interaction; active vessel-wall model; poroelastic or soft-tissue contact model.
- **Validation work:** Specialist review of fluid and wall mechanics; confirm that every visual arrow corresponds to a stated force or pressure; label where the analogy ends.
- **Failure conditions:** Fluid is described as receiving mechanical “strain” from the wall without defining the relevant velocity gradient or stress; the hose substitutes for biological evidence; flow reduction is assumed from narrowing without pressures and regulation.
- **Publication limit:** Illustration of causal order only.
- **Figure link:** `BGB-FIG-01-007`.

## BGB-M-0008 — Thoracic-outlet corridor model

- **Purpose:** Apply the generic constraint model to an objective-aTOS evidence anchor while keeping structure-specific arterial, venous, neural, anatomical, functional, symptomatic, and diagnostic quantities separate. The subtype distinctions control evidence transfer; they are not the reader-facing thesis.
- **Provenance:** Source obligations `BGB-S-1111`, `BGB-S-1112`, `BGB-S-1119`, `BGB-S-1223`, `BGB-S-1224`, and `BGB-S-1314`; normalized by `editorial-synthesis` and direct authorial clarification about imposed load.
- **Claim dependencies:** `BGB-C-0015` through `BGB-C-0022`.
- **Model variants:**

  | Variant | Constrained object | Mechanical outputs | Downstream outputs kept separate |
  |---|---|---|---|
  | Arterial evidence anchor | Subclavian artery adjacent to a defined focal bony relation | Reconstructed repeated deformation; objective wall lesion; thrombus, embolus, or occlusion where present | Distal arterial or ischemic consequence, presentation, diagnosis |
  | Thrombotic-venous timeline | Axillary-subclavian vein and retained thrombotic/outflow state | Proposed repeated exposure; wall and flow change; thrombus; residual obstruction, recanalization, or collaterals | Swelling, discoloration, function, symptoms, diagnosis kept separate |
  | Neural | Selected neural structure | Contact pressure, strain, bending, excursion | Intraneural physiology, conduction, function, symptoms, diagnosis |
  | Mixed | Explicitly named structures | Variant-specific outputs | Interactions rather than pooled outcome |

- **System inputs:** Individual anatomy; clavicle, first rib, scapula, cervical and thoracic relationships; surrounding muscles and fascia; arm position and task; respiration; external support or load; prior tissue state.
- **Maintaining terms:** Candidate contact, compression, traction, bending, torsion, tethering, active tension, or pressure difference.
- **Restoring and modifying terms:** Tissue elasticity and viscosity; vessel pressure and flow; neural tension and excursion; active movement; respiration; collateral or regulatory response.
- **Outputs:** Observed anatomy and pathology; reconstructed exposure; retained or changing tissue state; tissue-specific physiological measurement; function; symptoms; clinical classification—each reported separately.
- **Assumptions to declare:** Selected presentation and criteria; side and task; corridor definition; temporal relationship; measurement limits; whether the case is illustrative, representative, or exceptional.
- **Competing or interacting models:** Congenital or fixed anatomy; intrinsic neural or vascular disease; scar or mass effect; cervical or distal neural source; systemic vascular or neurological disease; sensitization and other symptom mechanisms; behavioral and environmental exposure.
- **Validation work:** Current clinical taxonomy; source table for every composite fact and causal arrow; definition- and referral-enrichment audit; anatomy and dynamic measurement review; comparison observations; claim-by-claim evidence mapping; medical-coauthor and relevant specialist review.
- **Failure conditions:** Static posture is treated as diagnosis; neural and vascular findings are pooled; geometry substitutes for imposed load; symptom improvement is assumed to validate the proposed path; or the case is generalized to every compliant structure.
- **Publication limit:** One transparent worked hypothesis. It provides no home test, corrective drill, or substitution for clinical evaluation.
- **Figure links:** `BGB-FIG-01-009`, `BGB-FIG-01-010`, `BGB-FIG-01-011`.

## Registry-wide gates still required

1. Select a notation and mathematical depth suitable for Book I without weakening dimensional precision.
2. Decide whether *load path* and *force line* share one reader-facing figure or require separate introductions.
3. Formally review a minimum observable test for the accepted hard/soft role distinction beyond ordinary stiffness and load sharing.
4. Complete medical and provenance review of the selected objective-aTOS evidence anchor and source-grounded composite before commissioning anatomy or drafting condition-specific prose.
5. Complete anatomical and measurement review of the selected flexor tendon–SSCT comparison; median-nerve excursion remains the reserve.

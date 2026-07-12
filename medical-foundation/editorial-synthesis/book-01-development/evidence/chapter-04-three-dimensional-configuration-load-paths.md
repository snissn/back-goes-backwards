# Chapter 4 three-dimensional configuration and load paths — evidence and model-control pack

**Unit:** `BGB-U-0004` — *Three-Dimensional Configuration and Load Paths*

**Status:** Internally researched and authorized for controlled first-draft development as of 2026-07-11; not reader prose, not a new stable-claim allocation, and not evidence that the later preferred-configuration model is correct

**Controls:** `BGB-C-0002`, `BGB-C-0004`, `BGB-C-0006`; `BGB-M-0001`, `BGB-M-0002`, `BGB-M-0004`; `BGB-X-0001` and candidate `BGB-X-0002`; `BGB-S-9001`, `BGB-S-9006`, `BGB-S-1104`, `BGB-S-1403`–`BGB-S-1406`; `BGB-Q-0002`, `BGB-Q-0004`, `BGB-Q-0015`, and `BGB-Q-0016`

## Editorial decision

Chapter 4 may make four firm foundational moves:

1. Human movement and internal loading occur in three spatial dimensions, even when a planar reduction is adequate for a particular question.
2. Position, orientation, contacts, constraints, active force, pressure, material state, and reference state jointly define a mechanical configuration richer than visible posture.
3. Geometry changes moment arms, contact relations, and the internal problem to be solved, but external kinematics and resultants generally do not identify one internal force distribution, tissue exposure, or biological consequence.
4. A load path is an explicit, revisable representation of transfer through named carriers at a stated scale and phase. Several paths may coexist, branch, exchange share, or remain observationally indistinguishable.

The chapter must also establish a negative result that protects the whole series: the presence of three directions in several descriptions does not make those descriptions identical. A spatial basis, the project's generalized axial/opening/expansive modes, an optional material-symmetry frame, and a current principal-stress frame are four different mathematical and empirical objects.

Book I teaches spatial frames and the configuration/load-path method. It may preview the generalized modes so readers understand what Book II will need to define. It does not derive those modes from Euclidean dimensionality, orthotropy, principal stress, or traditional correspondence.

## Inherited notation and evidence states

The [Chapter 2 definitions and notation pack](chapter-02-definitions-and-notation.md) governs symbols, units, provenance, force/moment terminology, stress and strain, finite rotation, and the load-path model. Chapter 4 adds no competing notation system.

Every state or quantity that could look directly known retains one of the inherited labels:

| Label | Chapter 4 use |
|---|---|
| `OBS` | Observed pose, contact event, landmark relation, motion sequence, or qualitative geometry |
| `MEAS` | Instrument-derived position, orientation, force, pressure, displacement, or other quantity with method and uncertainty |
| `CALC` | Quantity calculated from declared inputs and equations, such as an external moment about a point |
| `INF` | Non-unique internal quantity reconstructed through inverse methods, optimization, or other assumptions |
| `MOD` | Forward-model result under stated geometry, boundary conditions, active forces, and material model |
| `HYP` | Proposed carrier, coupling, generalized mode, or cross-level relation not established for the system |
| `EMB` | First-person sense of connection or organization, recorded as an observation and hypothesis source |

Three distinctions must survive every example:

- changing components by changing basis is not the same as changing the physical state;
- changing the system boundary is not a change of basis; and
- changing a model's generalized coordinates is not necessarily a rotation of an ordinary spatial frame.

## Minimum configuration record

*Configuration* should be presented as an ordered model record, not as a claim that the book has found one universal state vector. For a selected system `S`, phase `t`, reference state, and question, retain only the entries the model actually needs:

```text
CFG = {
  boundary and environment,
  geometry and spatial orientation,
  contacts and other constraints,
  active force or activation state,
  pressure state where relevant,
  material or tissue state,
  retained stress, strain, or deformation fields,
  available movement or admissible degrees of freedom,
  frame, scale, phase, provenance, and uncertainty
}
```

This is an accounting template rather than an additive vector. Some entries are observed; some are measured; some exist only inside a selected model; many will remain unknown. A reader-facing definition can therefore be compact:

> A mechanical configuration is the arrangement and state that determine which interactions and movements are available for the question being asked. It includes more than visible posture.

### Observability matrix

| Configuration entry | Typical access | What it does not determine by itself |
|---|---|---|
| External pose or landmark geometry | `OBS` or `MEAS` from examination, image, or motion capture | Active muscle forces, pressure, local contact, tissue stress, capacity, or consequence |
| Segment orientation and velocity | `MEAS`, dependent on landmark and frame conventions | The moments or active strategy that produced or resisted the movement |
| External contact force and moment | `MEAS` or `CALC` at a declared boundary | Individual muscle, ligament, joint-contact, or tissue-field contributions |
| Contact location or area | `OBS`, `MEAS`, `INF`, or `MOD`, method-dependent | Full pressure/traction distribution without additional information |
| Muscle activation proxy | usually `MEAS`, with modality-specific limits | Muscle force without geometry, activation–force assumptions, tissue state, and dynamics |
| Internal force or stress field | usually `INF` or `MOD`; occasionally locally measured | Unique biological response or symptom |
| Pressure state | `MEAS`, `INF`, or `MOD`, system-specific | A universal structural contribution or downstream health effect |
| Material property or symmetry | experiment- and model-dependent `MEAS`/`INF` | Permanent whole-body axes or the project's generalized modes |
| Felt internal connection | `EMB` | A carrier, resultant, stress trajectory, meridian identity, or causal health effect |

The model earns complexity only when an added entry changes a prediction, resolves an ambiguity, or makes a candidate mechanism testable.

## Spatial-frame discipline

### Global, segment, joint, surface, and tissue-local frames

A right-handed global frame may be fixed to the room, gravity, treadmill, object, or task. Local frames may be fixed to a segment, joint, anatomical landmarks, material directions, a surface, or a centerline. The frame's origin, axes, sign convention, construction method, and whether it moves must be stated whenever components matter.

The physical vector does not change when only its components are re-expressed. For a declared passive change of orthonormal basis, one permissible convention is:

```text
v_B = R_BA v_A
sigma_B = R_BA sigma_A R_BA^T
```

`R_BA` is dimensionless and maps components expressed in frame `A` into frame `B` under the stated convention. These relations establish representation, not decompression, efficiency, injury risk, or a preferred orientation. [Modern Robotics](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-2-1-rotation-matrices-part-2-of-2/) explicitly distinguishes a rotation matrix's uses for orientation, changing a vector's reference frame, and rotating a vector; its [homogeneous-transform treatment](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/) adds translation and frame composition.

Biomechanics standards show why this declaration is substantive rather than cosmetic. Grood and Suntay's [joint-coordinate-system formulation](https://pubmed.ncbi.nlm.nih.gov/6865355/) provides a geometric description of three-dimensional relative motion. The International Society of Biomechanics recommendations define local coordinate systems for named segments and joints to improve reporting and reproducibility ([Wu et al., 2005](https://pubmed.ncbi.nlm.nih.gov/15844264/)). Current ISB guidance for intersegmental forces and moments says that no single reporting convention fits every purpose and requires the coordinate system, normalization, and internal/external perspective to be stated ([Derrick et al., 2020](https://pubmed.ncbi.nlm.nih.gov/31791632/)). Different joint-moment representations can answer different questions even when derived from one physical moment vector ([O'Reilly et al., 2013](https://pubmed.ncbi.nlm.nih.gov/24008987/)).

### Curved structures and moving-frame hazard

Along a selected centerline, a local tangent may be called `e_z`. A radial or outward-normal direction `e_r` is meaningful only after declaring a centerline, cross-section, or surface; a circumferential tangent `e_theta` is meaningful only in a geometry that supports that construction. A general vertebral column, rib, vessel, or limb is not automatically a cylinder.

There is more than one mathematically valid way to transport a frame along a curve. The Frenet frame depends on the curve's local derivatives and becomes undefined where curvature vanishes; a relatively parallel or Bishop frame is another construction. Bishop's original paper is aptly titled [*There Is More Than One Way to Frame a Curve*](https://doi.org/10.1080/00029890.1975.11993807). Chapter 4 does not need to teach differential geometry, but it must preserve the practical consequence:

> A local frame following a curved anatomy is a reproducible construction to be specified, not an axis system the image reveals by itself.

This matters for left/right transport, sign continuity, branch points, near-straight regions, changing surface normals, and comparisons among participants. A frame can jump or twist because of its algorithm even when the anatomy changes smoothly.

### Planar reduction

A two-dimensional reduction is acceptable when the omitted components are demonstrably negligible for the selected outcome or are included in an uncertainty bound. “The body is three-dimensional” is not a reason to reject a useful planar free body; it is a requirement to state why the reduction is adequate.

Minimum planar-adequacy check:

1. declare the plane and frame;
2. inspect out-of-plane position, force, moment, and contact terms relevant to the balance;
3. quantify or bound the residual when possible;
4. compare the conclusion with a three-dimensional model or measurement on a representative subset; and
5. withdraw the reduction if the omitted terms change the conclusion.

## Geometry, moment, contact, and inertia

For a force `F` applied at position vector `r` from point `O`, the moment contribution is:

```text
M_O = r × F
```

Changing configuration can change `r`, the line of action, contact points, available constraints, and the active response, even when the object's weight or nominal endpoint is unchanged. It follows that geometry changes the mechanical problem. It does not follow that the larger external moment is harmful or that its internal resolution is unique.

Rotational inertia is likewise geometry-dependent. In general three-dimensional rigid-body mechanics it is a tensor about a stated point and in a stated frame, determined by mass distribution. The scalar relation `M = I alpha` is restricted to defined fixed-axis or principal-axis conditions; the general balance uses angular momentum. MIT's [three-dimensional rigid-body notes](https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/resources/mit16_07f09_lec26/) derive the inertia tensor and its frame dependence. The archive's idea that mass distribution matters is recoverable. Its suggestion that an undefined combination of mass and tissue “tension” constitutes moment of inertia is not.

Contact distribution requires more than a net force. Surface geometry, material properties, active force, congruence, and boundary conditions can change area and traction while leaving a selected resultant similar. Chapter 4 can state this structural underdetermination without making a tissue-health claim.

### Internal-force nonuniqueness

Inverse dynamics can estimate net intersegmental forces and moments from external forces and kinematics, but it does not generally identify individual muscle forces. Erdemir and colleagues' [review of model-based muscle-force estimation](https://pubmed.ncbi.nlm.nih.gov/17070969/) documents the need for musculoskeletal geometry, optimization or recruitment assumptions, and validation. Hicks and colleagues' [verification and validation guidance](https://pubmed.ncbi.nlm.nih.gov/25474098/) requires the model purpose, numerical verification, experimental comparison, sensitivity, uncertainty, and limits to be explicit.

The chapter may therefore use this bounded inference:

> Similar observed postures can conceal different internal organizations, and different visible configurations can satisfy the same external task. Which internal differences matter is an empirical and model-specific question.

It may not turn underdetermination into proof that any favored hidden route exists.

## Load-path record and multicarrier representation

`BGB-M-0004` remains the governing model. Each load-path candidate should be stored as:

```text
LP-n = {
  task, phase, and system boundary,
  external interactions and balance,
  selected carriers and interfaces,
  quantity and unit on every edge or field,
  local/global frame and direction,
  scale and spatial resolution,
  evidence state for every relation,
  uncertainty, alternatives, and validation test
}
```

Candidate carriers include skeletal contact, active muscle, tendon, ligament, fascial or other tensile relations, pressure-bearing assemblies, frictional or sliding interfaces, inertia, and external support. Listing a carrier does not establish that it contributes materially in every task. “Multicarrier” means the representation permits parallel or serial contributions; it is not a claim that all carriers are always active.

When the chapter refers to hard and soft roles within these paths, it inherits Chapter 3's shape-preserving/form-receiving definition and its early signpost that the polarity is motivated by TCM hard/soft and Yin/Yang concepts without being definitionally identical to them. Chapter 4 spatializes that role model; it does not reopen or validate the traditional correspondence.

The path may be drawn as:

- a line only for one defined resultant or a tightly bounded simplification;
- a graph when named structures and interfaces exchange resultants;
- a field when distributed stress, strain, traction, pressure, or velocity is the object; or
- a time-varying network when contacts and shares change by phase.

Every representation needs a conservation or balance check. A visually continuous anatomical route is neither necessary nor sufficient. Principal-stress trajectories, muscle-synergy models, pressure networks, and embodied force lines are possible complementary representations, not synonyms.

### Minimum load-path tests

1. **Boundary test:** Do all drawn external interactions cross the selected boundary, with internal pairs excluded from the external inventory?
2. **Balance test:** Do the stated forces and moments satisfy the declared static, quasi-static, or dynamic balance within uncertainty?
3. **Carrier test:** Does every internal edge name a structure or modeled medium, quantity, unit, direction/frame, and evidence state?
4. **Multiplicity test:** Does an alternative route or distribution also satisfy the available measurements? If so, uniqueness must remain open.
5. **Sensitivity test:** Does changing an uncertain carrier, contact, material parameter, or activation assumption alter the claimed path?
6. **Phase test:** Does the representation update when contact, acceleration, active state, or support changes?
7. **Scale test:** Does a segment-level resultant improperly become a tissue-level stress or a whole-body cable?
8. **Null test:** Can an ordinary conventional model explain the observations without the project-specific path language?

## Four nonidentical three-direction descriptions

This crosswalk is the chapter's central ontology control.

| Description | Mathematical object | Determined by | Units | State dependence | What may align it with another description | Prohibited inference |
|---|---|---|---|---|---|---|
| Global or local spatial frame | Chosen orthonormal or curvilinear basis and origin | Task, room, landmarks, segment, centerline, or surface construction | Basis vectors are dimensionless; coordinates retain their quantity's units | May move with segment or vary with position | A deliberate frame choice, anatomy, or symmetry may produce temporary alignment | Three spatial directions prove three biological modes or a preferred state |
| Generalized modes and conjugate loads | Reduced coordinates `q_i` plus generalized loads `Q_i` satisfying a virtual-work relation | Model selection, retained degrees of freedom, constraints, and measurement definition | `q_i` may be length, angle, area, strain-like, or other; `Q_i` has units of energy per unit `q_i` | Changes with configuration and coordinate definition | A specific kinematic map or Jacobian may relate modes to spatial motion | `q_o` is `e_theta`, or all three modes are Cartesian vector components |
| Material-symmetry frame | Directors or symmetry planes in a selected constitutive law | Tissue structure, experiment, scale, state, and constitutive approximation | Directions dimensionless; constitutive parameters carry model-specific units | May vary spatially, remodel, or change relevance with regime | Material architecture may align with anatomy or stress in a bounded case | Orthotropy is a whole-body fact or proves the generalized modes |
| Principal-stress frame | Eigenvectors and eigenvalues of the current symmetric Cauchy stress tensor at a point | Current stress tensor from measurement or model | Directions dimensionless; eigenvalues in `Pa` | Can change with load, contact, active state, and position | Boundary/material symmetry may align stress and material axes in a special case | Principal directions are permanent anatomical channels or always unique |

For generalized coordinates, the category boundary can be written:

```text
delta W = sum_i Q_i delta q_i
```

MIT's [generalized-force notes](https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/359081aa42b42d21425785fa151c89f6_MIT2_003SCF11_rec9notes1.pdf) show that a coordinate with length units has a force-like conjugate load, while an angle has a moment-like conjugate. This validates the mechanics category, not the project's choice of axial, opening, and expansive variables.

For principal stress:

```text
sigma n_i = sigma_i n_i
```

MIT's [continuum-mechanics treatment](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf) develops the symmetric Cauchy stress tensor, transformation, and principal stresses. The eigenvectors are unique up to sign when the relevant eigenvalues are distinct. A repeated eigenvalue leaves a subspace with no unique axes inside it; hydrostatic stress therefore supplies no privileged principal direction. A principal-stress streamline is also a derived field, not a material fiber or measured anatomical cable.

### Material symmetry and the orthotropy boundary

Orthotropy is an optional local constitutive approximation with three mutually perpendicular material-symmetry planes. NASA's [anisotropic-elasticity tutorial](https://ntrs.nasa.gov/citations/20110023650) demonstrates that these symmetries belong to a constitutive model and its transformation rules.

Tissue studies show both the usefulness and the limit of the approximation:

- Cowin's [cancellous-bone study](https://pubmed.ncbi.nlm.nih.gov/2341418/) relates an orthotropic elastic description to trabecular fabric.
- Human femoral cortical bone exhibits region-dependent elastic anisotropy ([Espinoza Orías et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19627830/)).
- A structurally based passive-myocardium model uses local orthotropy while also requiring nonlinear, nonhomogeneous, and near-incompressible behavior ([Holzapfel and Ogden, 2009](https://pubmed.ncbi.nlm.nih.gov/19657007/)).
- Articular-cartilage work found that a simple linear orthotropic elasticity model was not sufficient for the measured equilibrium response, requiring tension–compression nonlinearity even while direction dependence remained relevant ([Chahine et al., 2003](https://pubmed.ncbi.nlm.nih.gov/12594982/)).

The Book I conclusion is therefore neither “the body is orthotropic” nor “orthotropy is irrelevant.” It is:

> Material symmetry is selected and validated by tissue, region, scale, state, loading regime, and model purpose. It cannot be promoted into a whole-body coordinate ontology by analogy.

## Bounded examples and counterchecks

### Example 1 — recurring object transfer (`BGB-X-0001`)

**Exact job:** Carry one historical event through room-, object-, person-, segment-, joint-, and tissue-local descriptions while changing no facts silently.

**Required variants:** static hold versus acceleration/deceleration; object inside versus outside the system boundary; two viable configurations with the same object and endpoint; external support added or removed.

**Observable/model split:** object position and external contacts may be `OBS`/`MEAS`; external moments may be `CALC`; muscle forces, joint contact, tissue stress, and internal paths remain `INF`/`MOD` unless independently measured.

**Counterexample:** Two configurations may exchange moment demands among joints or supports rather than making one globally lower-load. Similar visible geometry may also hide different activation, fatigue, or pressure states.

**Excluded inference:** No preferred lifting technique, posterior necessity, injury threshold, exercise cue, or unique body-wide path.

### Example 2 — joint moment and contact (`BGB-X-0002`, optional)

**Exact job:** Show that moving a force's line of action changes its moment about a declared point while a net resultant still fails to identify contact pressure or tissue stress.

**Selection rule:** Retain an idealized joint unless one anatomical joint can be sourced, rights-cleared, and reviewed without distracting from the quantity distinction.

**Counterexample:** The configuration with the smaller external moment may have a different contact area, active stabilization requirement, or constraint. Chapter 4 cannot rank it without those data and a stated outcome.

### Geometry check A — ribs: rotation and expansion

**Exact job:** Demonstrate two coupled observables that must not be collapsed. Rib orientation/rotation and thoracic width, area, or volume can change together without becoming one coordinate.

In eight asymptomatic participants, CT-based three-dimensional modeling at three lung volumes estimated costovertebral-joint kinematics and helical axes; the authors treated the result as preliminary ([Beyer et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24529962/)). Dynamic MRI with simultaneous ventilation measurement in nine healthy participants separately tracked chest-wall dimensions, regional motion, and lung volume, finding that rib cage and diaphragm did not behave as single uniform units ([Kondo et al., 2000](https://pubmed.ncbi.nlm.nih.gov/10728727/)).

**Permitted inference:** Rotation and expansion are separately operationalizable and can be coupled.

**Excluded inference:** The studies validate the project's opening/expansive modes, establish a universal coupling, define a preferred direction, or support a breathing protocol.

### Geometry check B — pelvis: relative opening without literal ring separation

**Exact job:** Preserve the author's “scissors” intuition as a relative angular relation among paired structures while preventing an illustration from implying a large opening of an intact pelvic ring.

Sacroiliac-joint motion is small and coordinate-system sensitive. A proposed SIJ coordinate system was developed specifically because a standardized frame was lacking and reproducibility depended on the surface-aligned construction ([Van Hauwermeiren et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30839121/)). In six cadaveric pelvises under physiological loading, the main SIJ motions reported were small and coupled rather than a large scissor-like separation ([Hammer et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30536830/)). A systematic review likewise describes limited adult pubic-symphysis translation and rotation while identifying state-specific variation ([Becker et al., 2010](https://pubmed.ncbi.nlm.nih.gov/20840351/)).

**Permitted inference:** A pelvic opening variable may be defined as a relative angular or composite limb–hemipelvis relation if its landmarks, joints, and scale are explicit.

**Excluded inference:** The intact pelvic ring literally opens by a large amount, the analogy defines one anatomical motion, or it establishes health effects.

### Geometry check C — curved vertebral column

**Exact job:** Demonstrate why one global “axial,” “outward,” or “circumferential” direction cannot be copied unchanged along a curved column.

**Model:** Choose and document a centerline and frame-transport rule. Show the local tangent and two transverse directions at several locations. Repeat with a second legitimate transport rule or altered centerline to show which conclusions are construction-dependent.

**Counterexample:** Near a straight or inflection region, a Frenet normal can become undefined or unstable even though a chosen rotation-minimizing frame remains usable. On a noncircular cross-section, radial and surface-normal directions need not coincide.

**Excluded inference:** A moving spatial frame constitutes the project's generalized modes, follows a meridian, or reveals a preferred force path.

## Model and observability tests required before prose lock

| Test | Procedure | Passing result | Failure exposed |
|---|---|---|---|
| Basis-change invariance | Re-express one measured vector and one stress tensor in two declared frames, then transform back | Physical result and invariants agree within numerical tolerance | Components treated as new physical forces or stresses |
| Boundary-versus-basis test | Redraw `BGB-X-0001` after changing only the frame, then after changing the selected system | Frame change alters components; boundary change alters the interaction inventory | Coordinate transformation confused with free-body selection |
| Frame-construction reproducibility | Two analysts construct a local frame from the same landmarks or surface | Differences and uncertainty are reported; signs remain traceable | “Local axis” inferred from appearance without a method |
| Planar-adequacy test | Compare a planar result with relevant out-of-plane measurements or a 3D subset | Omitted terms are bounded and do not change the conclusion | “3D” used rhetorically or 2D used without checking |
| Similar-posture hidden-state test | Hold visible geometry approximately fixed while changing support, fatigue, active force, or pressure | Model identifies which internal entries can differ | Posture treated as complete configuration |
| Geometry-to-internal inverse test | Estimate internal distribution under at least two plausible recruitment/contact models | Nonuniqueness and sensitivity remain visible | One inverse solution presented as observed truth |
| Load-path multiplicity test | Construct at least two balanced carrier graphs or a field alternative | Data discriminate them or uniqueness stays open | Anatomy-shaped line treated as established route |
| Carrier-removal sensitivity | Remove or perturb a candidate carrier in the model | Claimed role changes predictably or is downgraded | Decorative carrier with no explanatory job |
| Material-model comparison | Compare isotropic, orthotropic, and an appropriate nonlinear/anisotropic alternative where relevant | Choice is justified by the target observable and data | Orthotropy assumed from three-dimensional anatomy |
| Principal-direction degeneracy test | Include a stress state with repeated eigenvalues | Text and figure show nonuniqueness of axes | Principal directions presented as permanent channels |
| Generalized-coordinate dimension test | State each `q_i`, `Q_i`, unit, and virtual-work term | Every product has energy units and a defined observable | Spatial vector, angle, area, force, and moment silently merged |
| Book-seam test | Remove the generalized-mode preview | Chapter's foundational mechanics still stands | Book I made dependent on Book II's hypothesis |

## Source-to-claim matrix

| Source | Exact source job | What it cannot establish here |
|---|---|---|
| [Modern Robotics: rotation matrices](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-2-1-rotation-matrices-part-2-of-2/) and [homogeneous transformations](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/) | Distinguish orientation, vector rotation, frame change, and translation | Body-specific coordinate validity, tissue loading, decompression, or preferred configuration |
| [Grood and Suntay, 1983](https://pubmed.ncbi.nlm.nih.gov/6865355/); [Wu et al., 2005](https://pubmed.ncbi.nlm.nih.gov/15844264/); [Derrick et al., 2020](https://pubmed.ncbi.nlm.nih.gov/31791632/) | Establish why joint/segment frames and reporting conventions are declared and purpose-dependent | One universal body frame or equivalence to generalized modes |
| [O'Reilly et al., 2013](https://pubmed.ncbi.nlm.nih.gov/24008987/) | Show that joint-moment representation requires explicit convention | That one representation is always clinically superior |
| [MIT generalized-force notes](https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/359081aa42b42d21425785fa151c89f6_MIT2_003SCF11_rec9notes1.pdf) | Define generalized coordinates and conjugate loads through virtual work | The project's mode selection, signs, anatomy, or traditional map |
| [MIT inertia-tensor notes](https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/resources/mit16_07f09_lec26/) | Define 3D rotational inertia by mass distribution, point, and frame | Tissue tension as inertia or a health inference |
| [Erdemir et al., 2007](https://pubmed.ncbi.nlm.nih.gov/17070969/) | Establish nonuniqueness and assumptions in muscle-force estimation | That any favored internal route is correct |
| [Hicks et al., 2015](https://pubmed.ncbi.nlm.nih.gov/25474098/) | Control verification, validation, sensitivity, and uncertainty | Publication validation of the present project models |
| [Abeyaratne, *Continuum Mechanics*](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf) | Stress transformation and principal-stress mathematics | Permanent anatomical or preferred axes |
| [NASA anisotropic-elasticity tutorial](https://ntrs.nasa.gov/citations/20110023650) plus tissue studies | Define material symmetry and show tissue/model specificity | Whole-body orthotropy or derivation of generalized modes |
| [Beyer et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24529962/) and [Kondo et al., 2000](https://pubmed.ncbi.nlm.nih.gov/10728727/) | Bound the rib rotation-versus-expansion check | Universal respiratory coupling, health effect, or protocol |
| [Van Hauwermeiren et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30839121/), [Hammer et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30536830/), and [Becker et al., 2010](https://pubmed.ncbi.nlm.nih.gov/20840351/) | Bound pelvic frame choice and small joint motion | Literal large pelvic-ring opening or a preferred mode |
| [Bishop, 1975](https://doi.org/10.1080/00029890.1975.11993807) | Establish nonuniqueness of curve-frame construction | One anatomically correct spine frame |

## Figure and caption obligations

Chapter 4 should extend rather than replace `BGB-FIG-01-001`, `002`, and `005`.

### Proposed `BGB-FIG-01-013` — one event, several moving frames

- **Panels:** room/gravity frame; object frame; selected segment frame; local frame transported along a curved structure.
- **Required labels:** origin, basis, signs, system boundary, phase, measured versus constructed landmarks.
- **Caption:** Components change with basis; the physical object does not. Changing the system boundary changes the force inventory. The local curved frame is one declared construction.
- **Failure to avoid:** Three colored arrows silently reused as generalized modes, material axes, or meridians.

### Proposed `BGB-FIG-01-014` — four descriptions that can each contain three directions

- **Columns:** spatial frame; generalized modes; material-symmetry frame; principal-stress frame.
- **Required object labels:** basis, `q_i/Q_i`, material directors, `sigma_i/n_i`; units and evidence states.
- **Caption:** Numerical dimensionality does not make the objects equivalent. Alignment in a special case requires an explicit mapping and evidence.
- **Failure to avoid:** A central body icon implying that all four overlays have already been measured and unified.

### Proposed `BGB-FIG-01-015` — opening and expansion are coupled but distinct

- **Insets:** ribs; pelvis; generic paired directors.
- **Required labels:** angular relation, width/area/perimeter or outward-normal measure, reference state, landmarks, and evidence state.
- **Caption:** Rotation may contribute to expansion while the observables, units, and conjugate loads remain different.
- **Failure to avoid:** Exaggerated pelvic-ring separation or a respiratory instruction.

All final figures require mechanics/biomechanics review, anatomical review where relevant, accessibility review, and source/license documentation. A text-native schematic can support a first draft but does not satisfy final asset review.

## Deferred-work gates

### Required before the first reader-facing draft is locked

- Select the exact `BGB-X-0001` object-transfer phase and two configurations.
- Decide whether `BGB-X-0002` remains idealized or receives an anatomical joint.
- Add a configuration-and-frame model record to the model registry or explicitly keep it local to this pack.
- Assign figure IDs `013`–`015` only after checking registry numbering and ownership.
- Verify every equation, frame convention, and transform with a mechanics reviewer.
- Confirm that every internal path is labeled `INF`, `MOD`, or `HYP` unless directly supported otherwise.
- Include at least one viable planar reduction and one case where it fails or needs qualification.

### Required before publication

- Formal biomechanics review of frame construction, moments, inertia, inverse-dynamics language, and model-validation claims.
- Anatomy review of rib, pelvic, joint, and spinal illustrations.
- Tissue-specific review of every material-symmetry example and constitutive qualifier.
- Claim-level source and citation review, including retrieval of stable full-text or DOI records where possible.
- Figure rights, accessibility, and caption audit.
- Cross-chapter audit confirming that Chapters 5–6 add anatomy and carriers without silently promoting candidate paths to observed routes.

### Explicitly deferred to Book II or later

- Definitions, signs, conjugate loads, transformations, coupling, and predictions for axial, opening/rotational, and expansive modes.
- Preferred all-Yang organization and any claim that posterior participation is necessary within it.
- Gross limb-role projection, KI1–PC8 coordination, Six-Division mapping, meridians, bandhas, breath-as-driver, torus or paired-loop geometry, and practice.
- Whole-body orthotropy, unless a later formal model defines its domain and compares it with alternatives.

## First-draft authorization

A controlled Chapter 4 first draft is authorized if it:

- teaches declared frames through one recurring event;
- makes configuration richer than posture without pretending every state variable is measurable;
- shows geometry changing a problem rather than dictating a health verdict;
- presents multicarrier, nonunique load paths as inspectable models;
- includes the four-description crosswalk and its counterexamples;
- retains generalized modes and authorial coordinate research as a clearly named Book II seam; and
- contains no preferred-configuration proof, universal anatomical route, TCM derivation, diagnosis, self-test, corrective cue, or protocol.

The first draft is not authorized to reuse any legacy equation merely because it resembles three-dimensional mechanics. Every retained equation must have defined variables, units, frame, derivation or standard source, assumptions, and one necessary explanatory job.

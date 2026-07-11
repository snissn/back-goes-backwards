# Chapter 2 definitions and notation

**Unit:** `BGB-U-0002` — *A Working Language of Load*

**Status:** Technical working pack for formal and reader-level review; not chapter prose and not an evidence-status upgrade

**Controls:** `BGB-C-0001` through `BGB-C-0007`; `BGB-M-0001` through `BGB-M-0004`; `BGB-X-0001` and candidate `BGB-X-0002`; `BGB-FIG-01-001` through `BGB-FIG-01-005`; `BGB-DEC-0007`

## Purpose

This pack fixes the minimum mechanical vocabulary and notation that Chapter 2 introduces and later Book I chapters inherit. Its job is not to turn the opening of the book into a continuum-mechanics survey. Its job is to make every important mechanical sentence answerable:

1. What system and boundary are being analyzed?
2. What quantity is meant, at what scale and location?
3. In what frame, direction, phase, and time window?
4. What is imposed, observed, measured, calculated, inferred, modeled, or hypothesized?
5. Which assumptions connect one level of description to the next?

In Book I, *load* remains a conversational umbrella for mechanical demand. It is not assigned a universal symbol or unit. A technical passage replaces it with the force, moment, pressure, traction, stress, strain, deformation, work, energy, exposure history, or other defined quantity that actually carries the argument.

## Scope boundary

The definitions below are ordinary mechanics, continuum mechanics, and biomechanics controls. They do not establish:

- a unique body-wide load path;
- a preferred posterior or all-Yang configuration;
- the later three-mode, TCM, breath, torus, or practice models;
- a universal constitutive law for living tissue;
- a universal mechanical dose or injury threshold; or
- a medical consequence from a mechanical quantity alone.

Living tissues can be nonlinear, anisotropic, heterogeneous, viscoelastic, poroelastic, actively stressed, remodeling, prestressed, and history-dependent. Those qualifications do not make ordinary balance laws optional. They determine which constitutive relation, reference state, boundary conditions, measurements, and timescale make the balance laws informative.

## Book I notation policy

### General rules

- Use SI units in calculations and figure labels. A unit does not identify a quantity by itself: moment and work can both reduce to `N m`, while stress, pressure, and energy density can all reduce to `Pa`.
- Bold symbols denote vectors or second-order tensors; italic symbols denote scalars. Every tensor is tied to a stated basis or frame when components are shown.
- Use a right-handed coordinate frame unless a figure explicitly declares another convention. State the origin and axes whenever signs or components matter.
- Use compression-positive notation for pressure and contact pressure. If normal stress uses the common tension-positive solid-mechanics convention, say so rather than allowing the sign conventions to drift.
- Angles are dimensionless in SI, but retain `rad` in rotational stiffness, angular velocity, and figure labels when it prevents ambiguity.
- Name the reference point in every moment, the reference configuration in every strain, and the time or phase in every state-dependent quantity.
- Do not let notation imply measurement status. Attach a provenance label to quantities that could otherwise appear directly observed.

### Recommended symbols

| Object | Book I notation | SI unit | Note |
|---|---|---|---|
| Selected system | `S` or `\mathcal{S}` | none | Conceptual body or subsystem; use one form consistently in final typesetting |
| System boundary | `∂S` | none | The surface or interface across which interactions are inventoried |
| Reference and current position | `X`, `x` | `m` | `X` labels the chosen reference configuration; `x = χ(X,t)` is current position |
| Position from a moment point | `r = x - x_O` | `m` | Never use an unlabeled lever arm when a vector relation is intended |
| Displacement | `u = x - X` | `m` | Depends on the chosen reference configuration |
| Force and resultant force | `F`, `F_R` | `N` | Vector; arrow or boldface in final typesetting |
| Moment about point `O` | `M_O` | `N m` | Axial vector; use `M`, not `τ`, as the default torque symbol |
| Surface traction | `t(n)` | `Pa = N/m²` | Vector field on a surface with unit normal `n` |
| Contact pressure | `p_c` | `Pa` | Scalar compressive normal component of contact traction |
| Fluid pressure | `p` | `Pa` | Scalar field; positive in compression |
| Cauchy stress | `σ` | `Pa` | Second-order tensor in the current configuration |
| Small-strain tensor | `ε` | `1` or `%` | Use only when the small-deformation approximation is declared |
| Strain rate | `dε/dt` or `ε̇` | `s⁻¹` | The underlying strain measure must be named |
| Deformation map | `χ(X,t)` | `m` | Vector-valued mapping from reference to current configuration |
| Deformation gradient | `F_def = ∂χ/∂X` | `1` | Second-order tensor; the subscript avoids collision with force |
| Green–Lagrange strain, if needed | `E_GL` | `1` | Finite-deformation measure referred to the reference configuration |
| Translational stiffness/compliance | `k`, `c` | `N/m`, `m/N` | Scalar only for a specified one-dimensional relation |
| Rotational stiffness/compliance | `k_θ`, `c_θ` | `N m/rad`, `rad/(N m)` | State the axis and operating point |
| Work | `W` | `J` | Scalar transfer through mechanical action over displacement |
| Power | `P` | `W = J/s` | Scalar rate of work; context distinguishes symbol from pressure |
| Mechanical energy | `E_mech` | `J` | Use qualified forms such as kinetic `K` or stored `U` where possible |
| Named exposure quantity | `q(x,t)` | quantity-specific | Placeholder only after `q` has been defined, such as force or strain |
| Exposure descriptor | `\mathcal{E}[q; S, t_0:t_1]` | no single unit | An ordered record, not a vector whose entries can be added |
| External line of action | `ℓ(F)` | geometry in `m` | Geometric line associated with one specified nonzero force |
| Load-path model | `LP-1`, `LP-2`, … | no intrinsic unit | Diagram/model identifier; every edge or field carries its own quantity and unit |
| Inferred mechanical force line | `FL_inf` | model-specific | Project term; always labeled inferred or modeled |
| Embodied force line | `FL_emb` | none unless operationalized | First-person observation or hypothesis generator, not a measured force |

Specialist literature usually uses `F` for both force and deformation gradient, relies on typeface and context, and often uses `P` for first Piola–Kirchhoff stress. Book I should favor reader control over compactness: use `F_def` for the deformation gradient and avoid Piola-stress notation unless a later technical note truly needs it.

### Provenance labels

Every quantitative figure should use a redundant text or symbol label, not color alone:

| Label | Meaning | Minimum record |
|---|---|---|
| `OBS` | Directly observed configuration, event, or qualitative state | observer or modality, frame, time |
| `MEAS` | Instrument-derived measurement | instrument, calibration, processing, uncertainty |
| `CALC` | Calculated from stated inputs by an explicit relation | inputs, equation, propagated uncertainty |
| `INF` | Inferred through an inverse or otherwise non-unique model | model, regularization or priors, validation, uncertainty |
| `MOD` | Forward-modeled or simulated quantity | geometry, boundary conditions, constitutive assumptions, validation |
| `HYP` | Proposed relation not yet established for the system | provenance, candidate test, alternatives |
| `EMB` | First-person embodied observation | reporter, task, side, phase, repeatability, proposed correlates |

`MEAS` does not mean assumption-free. For example, a load cell may measure an external resultant relatively directly, while a tissue stress field reconstructed from images and a constitutive model is usually `INF` or `MOD`, even when its inputs are measured.

## Controlled definitions

### 1. System and boundary

**Reader definition.** A system is the body or part of the world selected for analysis. Its boundary separates what is included from what is treated as the environment. A force is external or internal only relative to that selection.

**Mathematical object and unit.** `S` is a selected set, body, or material/spatial region; `∂S` is its boundary. Neither has a mechanical unit. A geometric boundary has position and area, but the boundary itself is not a force.

**Minimum specification.** Name:

- what is inside and outside;
- the spatial scale and time interval;
- contacts and other interactions crossing `∂S`;
- whether the system is treated as a particle, rigid body, multibody assembly, deformable body, or fluid/control volume; and
- whether the balance is static, quasi-static, or dynamic and in which frame.

For a body observed from a fixed inertial point `O`, the general balance statements are:

```text
sum F_ext = d(p_lin)/dt
sum M_O,ext = d(H_O)/dt
```

where `p_lin` is linear momentum and `H_O` is angular momentum about `O`. Static equilibrium is the special case in which both rates vanish; it is not the default meaning of a free-body diagram.

**Common category errors.** Calling a muscle force internal at every scale; drawing a joint force inside a segment boundary where it is actually external; double-counting an action–reaction pair; adding an “inertial force” without declaring a non-inertial or dynamic-equilibrium formulation; or inferring local tissue stress from a whole-person free body.

**Book I use.** `BGB-X-0001` should redraw the same object-transfer event around person-plus-object, person, segment, joint, and tissue-region boundaries. Each redraw changes the inventory, not the historical event.

### 2. Force and internal resultant

**Reader definition.** Force is a directed mechanical interaction. A resultant force replaces a defined distribution of forces for a stated balance calculation; it does not preserve the local distribution by itself.

**Mathematical object and unit.** `F` is a vector measured in newtons (`N = kg m s⁻²`). A point of application or distributed region is part of its specification. An internal resultant is a force obtained by integrating traction across a selected cut or by reducing a more detailed model at a joint or segment.

For a traction field on area `A`:

```text
F_R = integral_A t(n) dA
```

**Minimum specification.** Name the interacting bodies, system boundary, point or region of application, frame, direction, time or phase, and whether the value is measured, calculated, inferred, or modeled. For an internal resultant, identify the cut or joint and the assumptions used to reduce distributed action to one force–moment pair.

**Common category errors.** Treating mass or weight as the same object; saying a tissue “contains force” without a cut or interaction; treating a force magnitude as stress; assuming equal external force produces equal internal force; interpreting a net joint resultant as the force in one muscle, ligament, or contact patch; or drawing a vector without its frame.

**Book I use.** Use `F_ext` for a named external force, `F_R` for a resultant, and a descriptive subscript such as `F_ground` or `F_object` when prose might otherwise hide the interaction pair.

### 3. Moment, torque, and line of action

**Reader definition.** The moment of a force describes its turning effect about a selected point or axis. *Torque* is commonly used for a moment about an axis or for an applied couple; Book I treats it as contextual language, not a second kind of mechanical quantity.

**Mathematical object and unit.** In three dimensions, moment is an axial vector. For force `F` applied at position `r` from point `O`:

```text
M_O = r × F
|M_O| = F d_perp
```

Its SI unit is newton metre (`N m`). Although `N m` is dimensionally equivalent to the joule, a moment is not energy and should not be labeled `J`.

The line of action of a nonzero concentrated force is the geometric line through a point of application and parallel to the force:

```text
ℓ(F) = { x_0 + λ F_hat : λ is a real number }
```

Moving a force along its own line of action leaves its moment about a fixed point unchanged. A general three-dimensional force distribution reduces to a resultant force plus a resultant moment and may not be representable by one force on one line. A pure couple has no line of action.

**Minimum specification.** State the force, point `O` or axis, frame, sign/right-hand convention, and moment arm. If a distributed contact is replaced by one resultant, require equivalence of both total force and total moment.

**Common category errors.** Giving a moment without a point or axis; using a curved arrow as though it identifies a complete torque vector; calling a distance a moment arm without making it perpendicular to the line of action; treating joint angle as moment; calling `N m` of moment a joule; or treating the line of action as a path through anatomy.

**Book I use.** Default to `M_O`. Use the word *torque* parenthetically where familiar to a clinical or movement reader, but do not introduce `τ` as a competing symbol because `τ` is also widely used for shear stress.

### 4. Distributed traction, contact pressure, and fluid pressure

**Reader definition.** Traction is force per area acting across a specified surface and has both normal and tangential components. Contact pressure is the compressive normal part of contact traction. Fluid pressure is a scalar field that contributes an isotropic normal part to fluid stress; pressure can produce a force only after acting over a defined surface.

**Mathematical object and unit.** `t(n)` is a vector field in pascals (`Pa = N/m²`) on a surface with unit normal `n`. In a classical Cauchy continuum:

```text
t(n) = σ n
p_c = -t_contact(n) · n       [p_c positive in compression]
t_tangent = t_contact(n) + p_c n
```

Fluid pressure `p` is a scalar field in pascals. For a Newtonian-fluid illustration, the total fluid stress is separated as:

```text
σ_fluid = -p I + σ_viscous
```

The relation is a constitutive specialization, not the definition of all biological fluids.

**Minimum specification.** State the surface, outward normal, side of the interface, area, spatial distribution, sign convention, and whether tangential traction is retained. For fluid pressure, state whether the value is absolute, gauge, or a difference; identify location, phase, and relevant boundary conditions.

**Common category errors.** Treating pressure as force without area; replacing a nonuniform distribution by `F/A` without calling it an average; using contact pressure and contact stress as though they exhaust shear traction; assuming pressure is inherently supportive or harmful; treating pressure as flow; or inferring a pressure gradient from one pressure value.

**Book I use.** Use `p_c` for solid contact pressure and `p` for fluid or cavity pressure. Never use the bare word *pressure* where the solid-contact and fluid meanings could be confused.

### 5. Stress tensor

**Reader definition.** Stress describes the local intensity and orientation of internal mechanical interaction in a continuum. At a point, it tells us the traction acting on every possible plane through that point.

**Mathematical object and unit.** Cauchy stress `σ(x,t)` is a second-order tensor in pascals. It maps a current-configuration plane normal `n` to traction `t(n) = σn`. In a classical continuum without independent couple stresses, angular-momentum balance makes `σ` symmetric.

The familiar area averages

```text
average Cauchy normal traction = normal resultant force / current area
nominal normal stress = normal resultant force / reference area
```

are different measures. Neither is a general definition of the stress field, and the current and reference areas are not interchangeable under finite deformation.

**Minimum specification.** State location, current or reference configuration, coordinate basis, sign convention, relevant tensor component or invariant, averaging volume, and measurement or inference method. If principal stresses are used, state that they are eigenvalues of the local tensor at a point and identify the configuration.

**Common category errors.** Treating external force as local stress; calling psychological stress mechanical stress; reporting one scalar without saying whether it is a component, principal value, hydrostatic part, deviatoric measure, or average; assuming a visible deformation reveals stress; treating principal-stress trajectories as measured anatomical cables; or describing reconstructed tissue stress as direct observation when it depends on geometry, constitutive assumptions, and an inverse method.

**Book I use.** Use Cauchy stress `σ` for the introductory current-configuration definition. Do not introduce nominal, first Piola–Kirchhoff, or second Piola–Kirchhoff stress until a finite-deformation calculation requires one and its paired strain measure is explicit.

### 6. Deformation, reference configuration, and strain

**Reader definition.** Deformation is the change in the relative positions of material points. Strain is a defined measure of that relative deformation. Neither is force, stress, damage, pain, or failure.

**Mathematical object and unit.** The deformation map `x = χ(X,t)` sends material point `X` in a chosen reference configuration to its current position `x`. Displacement `u = x - X` is a vector in metres. The deformation gradient

```text
F_def = ∂χ/∂X
```

is a dimensionless second-order tensor that maps local material line elements from reference to current configuration. It contains stretch and rotation; it is not itself a strain measure.

For explicitly small displacement gradients and small rotations, the infinitesimal strain tensor is:

```text
ε = 1/2 [grad(u) + grad(u)^T]
```

For finite deformation, one possible reference-configuration measure is:

```text
E_GL = 1/2 [F_def^T F_def - I]
```

Book I need not teach finite-strain theory, but it must not use `ε` as though it were valid under every deformation. Strain and strain rate are dimensionless and `s⁻¹`, respectively; percent strain is a scaled presentation of a dimensionless ratio.

**Minimum specification.** Name the reference configuration, strain measure, direction/component, location, time, rate, and spatial or material frame. In vivo reference geometry may be prestressed and need not be unloaded or stress-free. If the true stress-free state is unknown, call the chosen state an observable baseline or model reference rather than silently equating it with zero stress.

**Common category errors.** Treating displacement as strain; using visible shape as a complete strain field; calling rigid rotation strain; using engineering strain in a large, multiaxial deformation without qualification; comparing strains calculated from different references; treating any strain as damage; or assuming zero measured displacement means zero internal stress.

**Book I use.** Prefer *deformation*, *displacement*, *change in length*, or a named excursion when those are all the evidence supports. Use `ε` only for a declared small-strain example; use `F_def` or a named finite-strain measure in a technical note if large deformation becomes load-bearing.

### 7. Stiffness and compliance

**Reader definition.** Stiffness relates a change in applied mechanical demand to a change in displacement or rotation for a specified structure, direction, state, and operating range. Compliance expresses the corresponding displacement or rotation per unit demand. They describe a relation, not a permanent identity of a tissue or person.

**Mathematical object and unit.** For a one-dimensional local relation:

```text
k_tangent = dF/dx            [N/m]
c_tangent = dx/dF            [m/N]
```

Rotational forms use `N m/rad` and `rad/(N m)`. Multiaxial structural stiffness and compliance are matrices or tangent operators relating generalized force–moment increments to displacement–rotation increments; different blocks can carry different unit forms. A material modulus relates stress to strain and has units of pascals. It is not the same object as structural stiffness, which also depends on geometry and boundary conditions.

**Minimum specification.** Name the input and output variables, direction, boundary conditions, operating point, tangent or secant definition, loading rate, history, activation state, and timescale. Compliance is the inverse of stiffness only for a locally invertible relation expressed in compatible coordinates.

**Common category errors.** Using stiffness, elastic modulus, tone, hardness, and strength as synonyms; reporting a force/displacement slope without the boundary conditions; assigning one scalar stiffness to an anisotropic or multiaxial tissue; assuming a stiffer state is healthier or less deformable in every direction; or interpreting shear-wave speed as direct force, stress, or universal stiffness without the method's model.

**Book I use.** Use `k` and `c` only for simple scalar demonstrations. In biological prose, write out the measured relation—such as force–displacement, pressure–area, or moment–rotation—before naming it stiffness or compliance.

### 8. Strength, tolerance, capacity, and reserve

These terms cross from mechanics into operational and biological description and therefore require more restraint than force or stress.

**Strength.** A failure-associated value for a defined material, structure, loading mode, geometry, rate, and endpoint. It may be expressed as failure stress (`Pa`), failure force (`N`), failure moment (`N m`), or another specified quantity. *Strength* is not stiffness and is not one context-free property.

**Tolerance.** The value or distribution of a named exposure at which a prespecified endpoint occurs, or the maximum exposure compatible with not exceeding that endpoint over a stated time. Its unit follows the exposure and endpoint: `N`, `Pa`, strain, cycles, time, or a validated combination. Human tolerance can be probabilistic and state-dependent; pain, fatigue, physiological disturbance, and material failure are different endpoints.

**Capacity.** The current ability of a tissue, assembly, or person to meet a defined task or exposure criterion. It may be expressed as a measured force, moment, work, duration, task performance, probability, or other operational metric. Capacity can reflect active control, tissue state, fatigue, pain, recovery, prior exposure, skill, and context; it is not a constitutive constant.

**Reserve.** A margin between a defined capacity and a comparable demand. A difference is meaningful only when both use the same quantity and units; a ratio is meaningful only when the denominator is nonzero and the comparison conditions match:

```text
reserve difference = q_capacity - q_exposure
reserve ratio = q_capacity / q_exposure
```

**Minimum specification.** State the endpoint, population or specimen, task, direction, rate, duration, history, state, uncertainty, and whether the value is individual, group-level, deterministic, or probabilistic.

**Common category errors.** Using a cadaveric failure load as a living person's capacity; treating pain tolerance as tissue strength; treating current performance as a permanent material property; comparing demand and capacity measured in different quantities; or implying that remaining below a single threshold guarantees safety over repeated exposure.

**Book I use.** Do not assign universal symbols to strength, tolerance, or capacity. Use a descriptive quantity and subscript—such as `σ_failure`, `F_capacity,task`, or `q_tolerance,endpoint`—only after the operational definition is written in words.

### 9. Work, power, and energy

**Reader definition.** Mechanical work is energy transferred when force acts through displacement or moment acts through rotation. Power is the rate of that transfer. Energy is a scalar state quantity or accounting quantity whose exact form—kinetic, potential, stored elastic, chemical, thermal—must be named.

**Mathematical object and unit.** For an incremental rigid-body motion:

```text
dW = F · dx + M · dθ                                 [J]
P = dW/dt = F · v + M · ω                            [W]
```

For planar or fixed-axis rotation, the rotational work over an interval is `integral M_axis dθ`. General finite three-dimensional rotation requires a declared generalized-coordinate or incremental-rotation convention; `θ` should not be treated as one globally additive vector. Work and energy are measured in joules (`J = N m`); power is measured in watts (`W = J/s`). Local strain-energy density has units `J/m³`, which is dimensionally equivalent to `Pa` but remains an energy density, not automatically a stress component.

**Minimum specification.** State the system, path or interval, point of force application, frame, sign convention, whether work is done on or by the system, and which energy store or transfer is included. For biological systems, distinguish external mechanical work, segment or joint power, muscle–tendon work, stored and returned elastic energy, dissipation, heat, and metabolic energy.

**Common category errors.** Treating moment as energy because both use `N m`; inferring individual muscle work from net joint power; equating mechanical efficiency with health or preferred configuration; calling all negative joint power tissue energy absorption; treating energy as a substance that follows one anatomical line; or combining metabolic and mechanical power without an explicit conversion and system boundary.

**Book I use.** Use work and power only where they clarify transfer, storage, return, or dissipation in the selected system. Do not define a body-wide efficiency objective in Chapter 2.

### 10. Mechanical exposure and dose dimensions

**Reader definition.** Mechanical exposure is the history of a named quantity acting at a named place or scale. What counts as a consequential dose depends on the tissue, task, state, timescale, and outcome. Book I therefore begins with a structured description rather than a universal score.

**Mathematical object and unit.** The proposed exposure record is:

```text
E[q; S, t_0:t_1] = {
  quantity and location;
  magnitude and direction;
  application rate;
  duration;
  repetition or frequency;
  sequence and variability;
  rest intervals;
  tissue or system state and recovery context
}
```

`E` is an ordered descriptor, not a Euclidean vector and not a sum. Its entries may have incompatible units. Derived metrics are permissible only when defined for the problem:

| Metric | Example unit | What it retains and loses |
|---|---|---|
| Peak force, stress, or strain | `N`, `Pa`, `1` | Retains an extreme; loses most history |
| Force or moment impulse | `N s`, `N m s` | Integrates signed quantity over time; does not preserve waveform |
| Strain rate | `s⁻¹` | Retains deformation rate for a stated measure |
| Duration | `s` | Requires a defined exposure criterion or state |
| Cycle count | `1` | Requires a defined cycle and does not encode magnitude by itself |
| Frequency | `Hz = s⁻¹` | Does not encode cycle shape, rest, or amplitude |
| Stress–time integral | `Pa s` | Model-specific summary; can hide direction and recovery |
| Work or energy density | `J`, `J/m³` | Valid only when the work/energy model is appropriate |

Recovery and capacity modify the meaning of an exposure but are not made commensurable with force or strain by placing them in the same record.

**Minimum specification.** Define `q`, location, system, direction/sign, sampling method, observation window, state, response endpoint, and why each retained feature is relevant. Compare any proposed composite metric with simpler alternatives.

**Common category errors.** Saying “too much load” without a quantity or endpoint; adding unlike dimensions into an unvalidated score; treating peak, cumulative work, impulse, repetition, and duration as interchangeable; assuming variability or rest is always protective; transferring a dose metric from one tissue or outcome to another; or treating mechanical exposure as proof of biological response.

**Book I use.** Prefer *mechanical exposure history* in foundational prose. Use *dose* only when the chapter names a tissue-specific metric or explicitly says “dose dimensions” rather than implying one universal dose function.

### 11. Load path

**Reader definition.** A load path is a bounded model of how a defined demand is distributed, transferred, opposed, and ultimately balanced within a selected system. In structural teaching, the phrase commonly links an applied load to equilibrium forces. Book I extends the representation to a living, multicarrier system and must therefore declare that broader use.

**Mathematical object and unit.** A load path is not one standard mechanical primitive. Depending on the question, it may be represented as:

- a force–moment chain among rigid segments;
- a branching graph whose edges carry resultants;
- a contact or pressure network;
- a field such as stress or deformation;
- a time-varying set of active and passive carriers; or
- a combination of these at explicitly separated scales.

The path itself has no intrinsic SI unit. Every node, edge, arrow, or field must identify its mechanical object and units.

**Minimum specification.** A publishable load-path model must name:

1. system and boundary;
2. task, phase, and external demand;
3. balancing reactions, inertia, or other terminal resolution;
4. scale and candidate carriers;
5. quantity represented on each link;
6. construction method and provenance status;
7. balance or compatibility check;
8. uncertainty, non-uniqueness, and alternative paths; and
9. what evidence could discriminate among the alternatives.

**Common category errors.** Drawing a path because anatomy looks continuous; converting one external line of action into a hidden internal cable; confusing a principal-stress trajectory with the whole demand transfer; omitting parallel carriers or active forces; mixing force, pressure, stress, energy, and sensation on unlabeled arrows; or treating a model path as evolutionarily optimal or medically beneficial without the later argument.

**Book I use.** Identify each diagrammatic model as `LP-1`, `LP-2`, and so on rather than giving *load path* a false universal symbol. Use a branching network or field when the model is distributed. Solid vector arrows remain reserved for actual force quantities.

### 12. Force-line senses

*Force line* is project-controlled vocabulary, not one accepted synonym for a standard mechanical object. Chapter 2 introduces three senses adjacently because the contrast matters, while keeping their evidence and notation separate.

| Sense | Reader-facing meaning | Object and units | Required notation and status | What it must not inherit |
|---|---|---|---|---|
| External | The ordinary line of action of a specified force | Geometric line `ℓ(F)`; position in `m` | Prefer the standard phrase *line of action*; solid force vector plus thin geometric extension; `MEAS` or `CALC` as appropriate | No claim about internal distribution |
| Inferred internal | A proposed multicarrier relation among regions during a task | Model, graph, field, or time-varying relation; units belong to each represented quantity | `FL_inf`; dashed or branching representation; `INF`, `MOD`, or `HYP` | No uniqueness, hidden cable, meridian identity, or direct-measurement status |
| Embodied | A felt continuity, internal connection, or coordinative relation that motivates a question | First-person observation; no mechanical unit until operationalized | `FL_emb`; perceptual annotation; `EMB`, with reporter, task, side, and phase | No resultant force, stress trajectory, or anatomical conduit by declaration |

An embodied force line may be precise and repeatable as phenomenology while remaining mechanically underdetermined. Promotion to a mechanical claim requires candidate carriers, quantities, scale, task, measurement design, alternatives, and a result that could weaken the proposed correspondence. The later Yin, Six-Division, and coordinate interpretations remain outside this Chapter 2 definition.

**Common category errors.** Rendering all three senses as identical glowing lines; calling an embodied report “measured” because the experience is vivid; treating a modeled internal relation as the external force's line of action; or erasing the embodied observation because its mechanical interpretation is unsettled.

## Three-example verification set

The final chapter and figures should test the notation against three examples rather than merely listing it.

### A. Rigid-body and boundary example — `BGB-X-0001`

Move, carry, and place one ordinary object. Draw first the person and object as one system, then the person alone, then one selected segment. Label external forces and moments, frame, phase, and dynamic or static assumption. The example passes only if changing the boundary changes the force inventory without implying that the event itself changed.

### B. Deformable-body example

Use an idealized strip or block under a distributed end traction. Show `F_R`, area, traction, deformation map, displacement, and one explicitly small-strain measure. Then change geometry or boundary condition while holding the resultant force fixed. The example should make visible that equal resultant force need not produce equal stress or strain fields.

### C. Living-tissue inference example — candidate `BGB-X-0002`

Use one idealized or reviewed joint example only after anatomy selection. The visible chain should be:

```text
external contact [MEAS]
  -> segment resultant and moment [CALC/INF]
  -> net joint resultant [INF]
  -> contact traction or pressure distribution [INF/MOD]
  -> local tissue stress and strain [MOD, or MEAS where genuinely measured]
  -> biological response [separate evidence layer]
```

At every arrow, state the geometry, active-force, boundary-condition, material, and validation information still required. Do not allow the anatomical inset to make a modeled local exposure look directly observed.

## Cross-cutting stop rules

A Chapter 2 sentence or figure fails this pack if it:

- uses *load*, *stress*, *strain*, or *pressure* as interchangeable intensifiers;
- omits the system boundary or silently changes it mid-argument;
- uses a scalar where direction, plane, axis, or tensor component is load-bearing;
- omits the point or axis for a moment;
- converts a distributed contact into one force without preserving both resultant and moment;
- gives pressure without location, reference, or area where force is inferred;
- gives strain without a reference configuration and strain measure;
- gives stiffness without its input, output, direction, state, and rate;
- treats strength, tolerance, or capacity as one permanent scalar;
- combines incommensurable exposure dimensions into an unvalidated score;
- labels an inferred tissue field as directly measured;
- draws a load path or force line without quantity, carrier, scale, and provenance; or
- allows a mechanical description to inherit biological, clinical, traditional, or preferred-configuration meaning without its own bridge claim.

## Provisional choices requiring formal or authorial review

1. **Vector and tensor typography.** This pack specifies semantic distinctions but not the final font system. Final production must choose bold, arrows, or a hybrid that remains legible in prose, equations, captions, e-readers, and monochrome figures.
2. **Force versus deformation-gradient collision.** The provisional reader-facing choice is `F` for force and `F_def` for deformation gradient. A mechanics reviewer may prefer standard tensor typography, but the two objects must never appear as an unexplained `F` in the same passage.
3. **Moment versus torque.** The provisional choice is `M_O` for the mechanical quantity and *torque* as a parenthetical or domain-specific word. This avoids collision with common uses of `τ` for shear stress.
4. **Finite-deformation depth.** The pack names `F_def` and `E_GL` only to mark the limit of small-strain notation. Chapter 2 should not retain `E_GL` in reader-facing prose unless a later Book I equation actually depends on it.
5. **Force-line visual language.** `FL_inf` and `FL_emb` are editorial control labels, not necessarily final printed symbols. The embodied panel and terminology remain subject to the authorial-intent review required by `BGB-DEC-0007`.

None of these choices blocks source recovery or exploratory figure sketches. All block final technical approval of `BGB-FIG-01-003` and `BGB-FIG-01-005` until resolved.

## Source anchors

These sources control definitions or delimit biological application; they do not support later preferred-configuration or medical claims.

1. Bureau International des Poids et Mesures. [*The International System of Units (SI Brochure)*, 9th ed., current 2026 update](https://doi.org/10.59161/AUEZ1291). Controls SI unit names, symbols, and the warning that identical derived units can describe different quantities.
2. Gurtin ME, Fried E, Anand L. [*The Mechanics and Thermodynamics of Continua*](https://doi.org/10.1017/CBO9780511762956). Cambridge University Press; 2010. Primary continuum reference for bodies, motion, deformation, stress, traction, balance laws, constitutive structure, and energy.
3. Massachusetts Institute of Technology OpenCourseWare. [*Engineering Mechanics I: stress vectors, stress tensors, and continuum scales*](https://ocw.mit.edu/courses/1-050-engineering-mechanics-i-fall-2007/resources/lec5/) and [*Static Equilibrium: Force and Moment*](https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/4a78b7668ad961549681ce0e42f95b66_emech2_04.pdf). Supports the introductory free-body, resultant, force, moment, traction, and stress presentation.
4. Bathe KJ. Massachusetts Institute of Technology OpenCourseWare. [*Lagrangian Continuum Mechanics Variables for Analysis*](https://ocw.mit.edu/courses/res-2-002-finite-element-procedures-for-solids-and-structures-spring-2010/resources/lecture-3-1/). Supports the finite-deformation qualification and separation of deformation gradient, strain measure, and stress measure.
5. Holzapfel GA. [*Nonlinear Solid Mechanics: A Continuum Approach for Engineering*](https://www.wiley-vch.de/en/areas-interest/engineering/nonlinear-solid-mechanics-978-0-471-82319-3). Wiley; 2000. Controls finite-deformation and nonlinear-material qualifications.
6. Winter DA. [*Biomechanics and Motor Control of Human Movement*, 4th ed.](https://doi.org/10.1002/9780470549148). Wiley; 2009. Supports human-movement force, moment, work, energy, power, measurement, and inference conventions.
7. Gómez-González M, Latorre E, Arroyo M, Trepat X. [“Measuring mechanical stress in living tissues.”](https://doi.org/10.1038/s42254-020-0184-6) *Nature Reviews Physics*. 2020;2:300–317. Supports the distinction among force, traction, stress, measurement, and model-dependent inference in living systems.
8. Holzapfel GA, Humphrey JD, Ogden RW. [“Biomechanics of soft biological tissues and organs, mechanobiology, homeostasis and modelling.”](https://doi.org/10.1098/rsif.2024.0361) *Journal of the Royal Society Interface*. 2025;22:20240361. Supports the nonlinear, anisotropic, viscoelastic, active, heterogeneous, and remodeling qualifications.
9. TU Delft OpenCourseWare. [“Main Takeaways on Load Paths.”](https://ocw.tudelft.nl/course-readings/4-2-4-main-takeaways-on-load-paths/) *Introduction to Aerospace Structures and Materials*. Supplies the bounded structural meaning linking an applied load to equilibrium forces; Book I's multicarrier biological extension remains explicitly project-defined.
10. McBride SH, Silva MJ. [“Adaptive and injury response of bone to mechanical loading.”](https://doi.org/10.1038/bonekey.2012.192) *BoneKEy Reports*. 2012;1:192. Provides one tissue-specific example of magnitude, frequency, cycle structure, rest, and state affecting response; it does not establish a universal dose function.
11. National Research Council and Institute of Medicine. [“Biomechanics.”](https://www.ncbi.nlm.nih.gov/books/NBK222434/) In: *Musculoskeletal Disorders and the Workplace*. National Academies Press; 2001. Supports the operational separation of external demand, internal tissue exposure, tolerance, and individual capacity while illustrating why those latter terms require endpoint and context.

## Review gate

This pack is ready to govern drafting only after:

- a mechanics reviewer verifies every object type, equation, unit, sign convention, and finite-deformation qualification;
- a biomechanics reviewer verifies the movement-analysis and living-tissue inference language;
- the author approves the three force-line senses and the boundary around embodied observation;
- the figure program adopts one accessible provenance legend; and
- the final Chapter 2 examples demonstrate, rather than merely repeat, the distinctions above.

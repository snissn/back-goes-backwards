# Chapter 12 evidence packet — geometry, concentration, and localization

**Unit:** `BGB-U-0012` — *Global Geometry, Local Concentration, and Strain Localization*

**Status:** source-grounded development packet as of 2026-07-11; sufficient for controlled salvage and a first draft after Chapters 10–11 are stable; formal mechanics, contact-mechanics, anatomy, tissue-material, medical, and figure review remain publication gates; not reader prose and not an evidence-status upgrade

**Companion controls:** [Chapter 12 brief](../chapter-briefs/BGB-U-0012-geometry-concentration-localization.md), [Book I contract](../book-contract.md), [Chapter 2 evidence packet](chapter-02-definitions-and-notation.md), [Chapter 10 evidence packet](chapter-10-mechanical-homeostasis-capacity.md), [Chapter 11 evidence packet](chapter-11-continuity-handoff-substitution.md), `BGB-C-0004`, `BGB-C-0005`, `BGB-M-0001`, `BGB-M-0002`, and `BGB-X-0002`

## Editorial decision

Chapter 12 can make the archive's geometry-to-local-strain intuition concrete without turning alignment into diagnosis:

> Geometry can materially alter a mechanical problem. A change in line of action, moment arm, curvature, contact, support, or material boundary can redistribute a regional resultant; local surface shape, thickness, congruence, stiffness contrast, and constraint can then produce a nonuniform stress, strain, pressure, traction, or deformation field. Visible geometry is an input to that chain, not a measurement of its local field or its biological consequence.

This chapter owns two related but nonidentical failure families.

1. **Redistribution:** a change in the regional resultants, moments, contacts, or participation among candidate routes.
2. **Concentration or localization:** a spatially nonuniform local field relative to a declared comparison.

A configuration can redistribute demand without producing an important local peak. A local concentration can arise from ordinary contact or a normal material transition without being harmful. The same regional resultant can produce different local distributions, and a local distribution can change while the regional resultant remains similar. Chapter 12 must therefore show both scale transitions explicitly.

The primary teaching example should be a subject-specific human hip contact model because experimental pressure-film validation exists and because the pelvis keeps the example connected to the book's whole-body architecture. The example is not a claim that one hip shape is ideal. A tendon-to-bone enthesis supplies the supporting material-boundary example: stiffness and composition gradients are normal features that can reduce or redistribute concentration rather than pathologies by definition.

## Controlled proposition set

| Proposition | Chapter posture | Support | Limit that remains visible |
|---|---|---|---|
| External task and visible geometry do not uniquely specify local tissue exposure | FND/SYN | Free-body mechanics, contact mechanics, and model-validation studies | Direct measurement can reduce some modeling steps but remains boundary- and method-specific |
| Geometry can redistribute regional force, moment, contact, and modeled spinal or joint demand | FND/SYN | Human lifting experiments and subject-specific musculoskeletal models | Association within a model is not a posture verdict or clinical effect |
| The same applied resultant can produce different local pressure or stress distributions | FND/SYN | Experimentally compared subject-specific hip finite-element models | Distribution depends on geometry, material law, contact, and boundary assumptions |
| A stiffness or material transition can localize stress or strain | FND/SYN | Idealized enthesis models plus anatomical and micromechanical measurements | Normal graded transitions can mitigate rather than create consequential peaks |
| A modest global or geometric change can yield a large normalized local response in a bounded model | SYN/HYP | Sensitivity studies of geometry representation and regional models | Both quantities, normalization, and boundary conditions must be declared; no whole-body amplification law follows |
| Concentration is not damage | FND/SYN | Ordinary contact deformation, asymptomatic morphology, and Chapter 10's exposure/capacity logic | Tissue-specific dose, state, recovery, and response remain Chapter 19's bridge |

## The two-scale grammar

The chapter should use one sequence consistently:

```text
task demand and environment
    -> external contacts, forces, motion, and time history
    -> regional force and moment resultants
    -> modeled sharing and interface contact conditions
    -> local pressure, traction, stress, strain, or deformation field
    -> separately evidenced material, biological, functional, or clinical response
```

Here, “two-scale” names the distinction the chapter must police—regional redistribution versus local concentration—not the total number of levels shown in the chain. The task, interface, and later-response layers remain visible so that neither scale transition is mistaken for a complete causal account.

The first two arrows are not a complete local-tissue account. The last arrow is not mechanics alone. A radiograph can document geometry; force plates and motion capture can support external and segment-level calculations; pressure film, instrumented implants, imaging, ultrasound, or other methods may measure selected interface variables; finite-element or other constitutive models can estimate fields that cannot be measured directly. Each step produces a different object.

The chapter needs four labels in its worked example:

- **observed or measured:** geometry, motion, applied load, contact reading, or deformation obtained through a stated method;
- **calculated:** a quantity following from a declared balance or data reduction;
- **modeled:** an estimate dependent on material, sharing, contact, and boundary assumptions; and
- **unknown:** an unmeasured quantity or consequence that the current model cannot establish.

These labels should remain in the figure rather than being relegated to a disclaimer.

## Source-grounded mechanical kernels

### Geometry first changes the regional problem

A moment is calculated about a selected point or axis. If a force's line of action moves farther from that reference, its moment can increase even if force magnitude does not. In a human lifting experiment involving twenty-one men and eighteen women, object mass, bulk, distance from the feet, out-of-plane position, movement speed, and lifting style were varied. The estimated extensor moment and bending torque changed across those conditions; object position and speed mattered alongside mass.[^dolan1994] The study's EMG and cadaver-normalization methods do not yield a unique local tissue field or a universal injury ranking. It supplies a bounded task example in which geometry and rate change the regional account.

Curvature is also a model input, not a verdict. Müller and colleagues constructed simplified subject-specific lumbar models from CT scans of twenty-eight people whose spines showed no visible degeneration and applied a standardized compression procedure. Across the observed lordosis range, their model predicted different patterns of compression, shear, bending moment, and facet force; the directions differed by spinal level and quantity.[^muller2021] Rieger and colleagues used eighty-five non-pathological standing radiographs to derive modes of normal sagittal alignment variation and then estimated corresponding spinal loads with a musculoskeletal model.[^rieger2024] Together the studies support a precise statement: geometry within an ostensibly healthy sample can alter modeled distribution. They do not define one ideal curve, prove symptoms, or show that a local tissue exceeded capacity.

The draft should use a simple backpack or object-distance free body before invoking spinal curves. The free body establishes what standard mechanics can say securely. A spinal example can then show how additional joints, muscles, passive tissues, and contact assumptions make the internal problem richer. No angular velocities should be multiplied to manufacture extension, and a rotation matrix should appear only if a coordinate transformation is actually required.

### The resultant does not contain its spatial distribution

An integrated contact force can be written as the surface integral of traction over an interface. That identity does not determine how traction varies over the surface. Two fields can integrate to the same resultant while placing their maxima in different locations or spreading the demand over different areas. Average normal force divided by nominal area is therefore not automatically the peak or true pressure field.

Anderson and colleagues developed a subject-specific finite-element model of one cadaveric human hip and compared predicted cartilage contact pressures and areas with pressure-sensitive film during loading intended to simulate walking, stair descent, and stair ascent. The correspondence depended on activity and measure, and sensitivity tests showed that cartilage thickness, material parameters, rigid-bone assumptions, and boundary conditions changed predictions.[^anderson2008] This study is especially useful because it validates part of the chain while leaving model error visible.

The same group then compared the subject-specific model with spherical, conchoid, and smoothed-thickness geometry representations, as well as a separate rigid-bone material simplification, while retaining the underlying loading cases. Some simplified surfaces fit the gross geometry within roughly half a millimeter yet materially changed predicted peak and average pressures and contact area; models with smoothed or idealized surfaces could produce more even distributions than the subject-specific model.[^anderson2010] The result is not evidence that a half-millimeter anatomical change causes a particular biological effect. It is direct evidence that local-field predictions can be highly sensitive to the geometric representation used by the model.

The reader-facing comparison should retain four panels:

1. the same declared external loading case;
2. a subject-specific contact geometry;
3. a deliberately simplified geometry; and
4. two different modeled local fields with the experimental comparison shown separately.

The point is methodological and mechanical: matching a resultant and approximating gross shape do not guarantee a matching local field.

### Contact area can change while several other variables change with it

Contact area is important but cannot serve as a universal safety meter. In fifteen healthy male participants, high-resolution MRI under three static patellofemoral loading conditions showed increasing contact area and load-dependent cartilage-thickness reduction.[^lange2019] The study demonstrates ordinary deformation and changing area under load. It does not measure a complete pressure field, establish that larger area is always preferable, or connect the deformation to injury.

A local field depends on surface shape, cartilage thickness and state, orientation, active forces, constraints, rate, and material behavior. Increasing area may lower an average pressure if resultant force remains fixed and distribution is comparable, but a changed joint state can alter force and field at the same time. A larger nominal area can coexist with a local edge peak or a different peak elsewhere. The draft should therefore avoid the shortcut `pressure = force / visible area` except as an explicitly labeled average over a defined surface.

Congruence is likewise relational. Two surfaces can be more or less conforming at one position and contact differently at another. Cartilage and bone deform; fluid pressurization and time matter; active muscle can change joint reaction; and a labrum, meniscus, capsule, or neighboring contact can change the boundary. “Incongruent” does not mean pathologic without an anatomical and task-specific comparison.

### A material boundary can localize or manage strain

The tendon-to-bone enthesis joins materials with very different mechanical behavior. A sharp idealized junction between compliant tendon and stiff bone would tend to create a nonuniform field. Yet the living attachment is not a sharp two-material seam. Its geometry, fiber orientation, mineralization, composition, and compliance vary across several length scales.

Schwartz and colleagues measured a micrometer-scale mineral gradient during development of the murine supraspinatus enthesis using micro-computed tomography, Raman spectroscopy, histomorphometry, and electron microscopy.[^schwartz2012] Deymier and colleagues later tested eleven micrometer-sized mouse enthesis beams from six mice using tensile micromechanical testing and local image correlation. They identified a high-compliance region near the mineralized gradient. In the small wild-type versus mineral-defect comparison, strength was lower in the defect group, while modulus, toughness, resilience, and failure strain did not differ significantly.[^deymier2017] These are nonhuman, scale-specific measurements. They show that the interface has graded and locally deformable structure; they do not establish a human injury mechanism.

Liu and colleagues used an idealized mathematical insertion model to examine how material grading affected radial stress concentration. Their optimization showed that the best-performing grading was not simply a linear interpolation between tendon and bone properties; anisotropy and spatially varied properties mattered.[^liu2012] This is a valuable counterexample to a simple slogan that “smooth is always better.” A gradient can mitigate a concentration under one set of assumptions, but shape, direction, constitutive behavior, and boundary conditions determine the result.

The enthesis therefore supplies two lessons:

1. stiffness transitions can create local-field questions; and
2. normal anatomy can contain specialized gradients, compliant regions, and nonuniform strain that help transfer demand.

Concentration and deformation are not failures by definition. The relevant comparison is whether the observed field differs materially from the task- and tissue-appropriate range, over what history, and with what response.

### Small global change and large local response need a defined sensitivity

The archive's amplification intuition should be preserved, but the quantities cannot remain rhetorical. A global geometric change and a local stress or strain generally have different units. The chapter should not divide them directly and call the result an amplification factor.

For a declared model, it may instead use a normalized finite sensitivity:

```text
S(q,g) = (Delta q / q_ref) / (Delta g / g_ref)
```

where `g` is one named scalar geometric input, `q` is one selected scalar output derived from the local field, `Delta g = g_1 - g_0`, and `Delta q = q_1 - q_0` over the declared comparison. The reference quantities must share the units of their corresponding variables, making the ratio dimensionless; the draft must state whether the comparison is signed or magnitude-only. Both reference values, ranges, and boundary conditions must be declared. This is a model-specific finite comparison, not a derivative or body-wide constant. It becomes unstable or misleading when a reference approaches zero, the response is nonlinear over the chosen range, the configuration changes contact regime, or omitted active and material terms dominate.

The Anderson geometry study supplies a bounded example of high output sensitivity to how local joint geometry was represented.[^anderson2010] The normal-spine models supply examples in which modes of whole-spine or lumbar geometry changed modeled regional loads by different amounts and directions.[^rieger2024][^muller2021] None of these studies proves a universal global-to-local amplification law. They establish that apparently modest geometric differences can deserve calculation rather than visual dismissal.

The first draft should include all permitted branches:

```text
declared geometric change
    -> negligible regional difference
    -> regional redistribution without a material local peak
    -> localization at the proposed site
    -> localization at a different site
    -> active, pressure-mediated, or environmental redistribution
    -> model result too sensitive or uncertain to interpret
```

The hypothesis earns standing only when it predicts which branch occurs under a bounded condition and measurement can distinguish that prediction from alternatives.

### Visible variation does not determine consequence

Normal or asymptomatic morphology provides an essential null. In a CT analysis of 1,111 hips from asymptomatic subjects, measurements commonly extended beyond some imaging thresholds used for cam- or pincer-type morphology, and distributions varied by sex and age.[^mascarenhas2018] That study does not prove that morphology never affects contact or later risk. It proves that a geometric label alone cannot stand in for symptoms, function, local field, or disease.

The null is even stronger when combined with the mechanics evidence. Geometry can alter a model without producing a clinical problem. A person can have a localized field that remains within present capacity. Active control or external support can redistribute demand. A contact peak can be ordinary and transient. Conversely, symptoms or tissue change can alter movement, activation, geometry, and stiffness, creating the measured field after the relevant biological or clinical process began.

Chapter 12 should keep four possibilities visible:

- geometry differs and local exposure does not differ materially;
- local exposure differs and remains tolerated;
- local exposure contributes to a later response through a defined dose and capacity relation; and
- another state changes both geometry and exposure, making reverse causality plausible.

The third branch is the positive contribution hypothesis carried into Chapter 19, where it requires tissue-specific evidence. Any reader-facing claim that an exposure was tolerated also requires an appropriate capacity and response basis; “tolerated” is not supplied by the mechanical field alone.

### Concentration acquires meaning through history and a receiver

A local peak is not a complete dose. Duration, rate, repetition, direction, sequence, variability, recovery, state, and measurement uncertainty remain part of the exposure record established in Chapter 10. The capacity comparison must refer to the same selected receiver, quantity, outcome, and time window.

A brief contact pressure, a repeated tensile strain, a sustained deformation, and a rapidly applied shear are not interchangeable because they share a high value. Different tissues and interfaces carry different combinations, respond on different timescales, and can adapt, recover, accumulate change, or fail. Chapter 12 should stop before claiming which biological branch follows. Its job is to deliver Chapter 19 a defined local exposure rather than a posture label.

Reverse causality remains especially important. Candidate branches include prior tissue change altering material properties and contact; symptoms altering motor strategy; injury altering support and geometry; developmental morphology preceding the task being studied; and inflammatory swelling changing geometry, pressure, or movement. The mechanics and contact studies in this packet do not establish those biomedical branches; reader-facing use requires appropriate tissue and clinical sources. A present concentration is a state description; chronology requires separate evidence.

## Primary worked comparison

Use a simplified version of the validated human-hip contact model, with no patient diagnosis and no ideal geometry.

### Declared system

- **Task:** one walking, stair-climbing, or stair-descending condition at the study's selected peak joint-reaction force.
- **Regional boundary:** pelvis and proximal femur with the applied joint resultant and constraints shown.
- **Interface boundary:** acetabular and femoral cartilage contact surfaces.
- **Local output:** spatial contact-pressure distribution and contact area.
- **Evidence states:** CT-derived specimen geometry and pressure-film readings measured; an experimental load prescribed from published average in vivo hip-load data; FE material/contact relations and local fields modeled; living muscle sharing and biological consequence unknown.

### Matched comparison

Compare the subject-specific geometry with one idealized or smoothed representation under the same nominal loading case. Show that:

- the applied resultant can match;
- the predicted distribution, area, and peak can differ;
- the experimental film supplies a bounded validation target, with its detection and contact-coverage limits visible; and
- sensitivity to cartilage thickness, bone deformation, material properties, and boundary conditions remains visible.

### Required null

Add an asymptomatic geometry branch and state that neither a visually unusual shape nor a modeled peak is a diagnosis. Add a configuration in which active or environmental support could change the regional resultant before it reaches the interface. The figure must not label one hip “good” and the other “bad.”

## Figure obligations

1. **Four-scale chain.** Task and contacts → regional resultant and moment → interface distribution → local field → separately gated response.
2. **Same resultant, different distribution.** Subject-specific and simplified hip geometry under a matched loading case, with measured and modeled elements labeled.
3. **Geometry changes a regional account.** One object-distance free body plus a bounded lumbar-curvature model; no posture verdict.
4. **A normal graded boundary.** Tendon, compliant transition, mineral gradient, and bone, with anatomical measurements separated from the idealized stress model.
5. **Conditional amplification branches.** Normalized sensitivity plus no-amplification, alternate-site, and redistribution outcomes.

No heat map may imply injury. No figure may label asymmetry, lordosis, contact, stiffness contrast, or a peak as pathological without a separate response layer.

## Model obligations

### Two-scale redistribution-to-localization model

1. **Object represented:** A mapping from task and regional geometry into one local interface or tissue field.
2. **Boundary and scale:** One declared whole-task or segment boundary and one declared joint, attachment, or tissue boundary.
3. **Variables:** External contacts and motion; regional force and moment; local geometry, material, and contact variables; spatial pressure, traction, stress, strain, or deformation.
4. **Assumptions:** Reference frame, dynamics or quasi-statics, active-force sharing, contact law, constitutive law, initial state, and measurement uncertainty.
5. **Explains:** How the same external or regional resultant can yield different local distributions.
6. **Cannot establish:** Damage, symptoms, diagnosis, preferred configuration, or a unique internal route.
7. **Failure condition:** Revise when predicted fields do not agree with suitable measurements, when omitted terms dominate sensitivity, or when the mapping does not distinguish the proposed comparison.
8. **Registry action:** Create after the first-draft audit; do not allocate a stable ID in reader prose.

### Normalized local-sensitivity representation

1. **Object represented:** Relative change in one local output per relative change in one geometric input over a declared finite interval.
2. **Boundary and scale:** The same bounded model used for both comparison states.
3. **Variables:** `g`, `g_ref`, `q`, `q_ref`, boundary conditions, and interval.
4. **Assumptions:** Nonzero reference quantities, comparable states, stable definitions, and adequate resolution.
5. **Explains:** When a selected local output is proportionally sensitive to one selected geometric input.
6. **Cannot establish:** Whole-body amplification, conservation, importance to health, or causal priority among correlated inputs.
7. **Failure condition:** Do not use when contact regime changes make the ratio misleading, references approach zero, uncertainty dominates, or the relation is too nonlinear for the chosen comparison.
8. **Registry action:** Candidate model only after formal review.

## Counterexamples, alternatives, and falsifiers

| Tempting inference | Counterexample or alternative | Drafting consequence |
|---|---|---|
| Visible alignment identifies the local peak | active sharing, pressure, support, contact, and material assumptions intervene | require the scale chain and evidence-state labels |
| Same resultant means same tissue exposure | spatial distributions can integrate to the same resultant | show at least two admissible local fields |
| Larger contact area means lower harmful pressure | force, geometry, thickness, and field can change simultaneously | distinguish average pressure from spatial peak and consequence |
| A stiffness transition is a defect | entheses use normal graded, compliant, and multiscale transitions | include the healthy interface as the positive baseline |
| A model peak is damage | peaks can be transient, normal, tolerated, or method-sensitive | add dose, capacity, uncertainty, and null branches |
| A small visible change cannot matter | normalized sensitivity can be large in a bounded model | calculate or measure rather than dismiss, but state all conditions |
| A different curve is abnormal | healthy samples contain broad geometric and modeled-load variation | no universal curve or alignment verdict |
| Present concentration caused the condition | injury, pain, development, inflammation, or degeneration may have changed geometry and state | preserve chronology and reverse causality |

The model is weakened when measured local distributions do not differ under the proposed geometric comparison; when a simpler contact, active-control, or boundary account explains the field; when the predicted localization moves or disappears under plausible inputs; when geometry does not improve prediction beyond ordinary variation; or when the local field does not correspond to the later bounded outcome.

## Exact source anchors and source jobs

[^dolan1994]: Patricia Dolan, Michael Earley, and Michael A. Adams, “Bending and Compressive Stresses Acting on the Lumbar Spine during Lifting Activities,” *Journal of Biomechanics* 27, no. 10 (1994): 1237–1248, [doi:10.1016/0021-9290(94)90277-1](https://doi.org/10.1016/0021-9290%2894%2990277-1). Use for a bounded human task comparison in which object mass, bulk, distance, asymmetry, speed, and style altered regional estimates; do not use its estimates as local tissue measurements or injury thresholds.

[^muller2021]: Andreas Müller et al., “Load Distribution in the Lumbar Spine during Modeled Compression Depends on Lordosis,” *Frontiers in Bioengineering and Biotechnology* 9 (2021): 661258, [doi:10.3389/fbioe.2021.661258](https://doi.org/10.3389/fbioe.2021.661258). Use for geometry-dependent, level- and quantity-specific modeled load distribution across twenty-eight lumbar geometries derived from CT scans without visible degeneration; not for an ideal curve or clinical outcome.

[^rieger2024]: Florian Rieger, Dominique A. Rothenfluh, Stephen J. Ferguson, and Dominika Ignasiak, “Comprehensive Assessment of Global Spinal Sagittal Alignment and Related Normal Spinal Loads in a Healthy Population,” *Journal of Biomechanics* 170 (2024): 112127, [doi:10.1016/j.jbiomech.2024.112127](https://doi.org/10.1016/j.jbiomech.2024.112127). Use for normal alignment variation and model-estimated spinal-load variation in eighty-five non-pathological subjects; not for symptom or optimal-alignment claims.

[^anderson2008]: Andrew E. Anderson, Benjamin J. Ellis, Steve A. Maas, Christopher L. Peters, and Jeffrey A. Weiss, “Validation of Finite Element Predictions of Cartilage Contact Pressure in the Human Hip Joint,” *Journal of Biomechanical Engineering* 130, no. 5 (2008): 051008, [doi:10.1115/1.2953472](https://doi.org/10.1115/1.2953472). Use for one cadaveric subject-specific hip model compared with pressure-film measurements and for explicit sensitivity to geometry, materials, and boundary assumptions.

[^anderson2010]: Andrew E. Anderson, Benjamin J. Ellis, Steve A. Maas, and Jeffrey A. Weiss, “Effects of Idealized Joint Geometry on Finite Element Predictions of Cartilage Contact Stresses in the Hip,” *Journal of Biomechanics* 43, no. 7 (2010): 1351–1357, [doi:10.1016/j.jbiomech.2010.01.010](https://doi.org/10.1016/j.jbiomech.2010.01.010). Use for matched-load sensitivity of local pressure and contact predictions to idealized versus subject-specific geometry; do not interpret model simplification as an anatomical intervention or biological dose.

[^lange2019]: Thomas Lange et al., “Quantification of Patellofemoral Cartilage Deformation and Contact Area Changes in Response to Static Loading via High-Resolution MRI with Prospective Motion Correction,” *Journal of Magnetic Resonance Imaging* 50, no. 5 (2019): 1561–1570, [doi:10.1002/jmri.26724](https://doi.org/10.1002/jmri.26724). Use for load-dependent contact-area and cartilage-thickness changes in fifteen healthy male participants; not for a pressure field, harmful threshold, or clinical conclusion.

[^schwartz2012]: Andrea G. Schwartz, Jill D. Pasteris, Guy M. Genin, Tyrone L. Daulton, and Stavros Thomopoulos, “Mineral Distributions at the Developing Tendon Enthesis,” *PLOS ONE* 7, no. 11 (2012): e48630, [doi:10.1371/journal.pone.0048630](https://doi.org/10.1371/journal.pone.0048630). Use for the measured developmental mineral gradient at the murine supraspinatus enthesis; not as direct human mechanics or an outcome claim.

[^deymier2017]: Alix C. Deymier et al., “Micro-Mechanical Properties of the Tendon-to-Bone Attachment,” *Acta Biomaterialia* 56 (2017): 25–35, [doi:10.1016/j.actbio.2017.01.037](https://doi.org/10.1016/j.actbio.2017.01.037). Use for mouse enthesis micromechanics, a high-compliance region near the mineralized gradient, and a small mineral-defect comparison in which strength—but not several other reported properties—differed significantly; retain species, specimen, scale, and testing limits.

[^liu2012]: Y. X. Liu, Stavros Thomopoulos, Victor Birman, J.-S. Li, and Guy M. Genin, “Bi-Material Attachment through a Compliant Interfacial System at the Tendon-to-Bone Insertion Site,” *Mechanics of Materials* 44 (2012): 83–92, [doi:10.1016/j.mechmat.2011.08.005](https://doi.org/10.1016/j.mechmat.2011.08.005). Use for an idealized optimization showing that concentration depends on spatially varied anisotropic material properties; not as a measured living field.

[^mascarenhas2018]: Vasco V. Mascarenhas et al., “Hip Shape Is Symmetric, Non-Dependent on Limb Dominance and Gender-Specific: Implications for Femoroacetabular Impingement. A 3D CT Analysis in Asymptomatic Subjects,” *European Radiology* 28, no. 4 (2018): 1609–1624, [doi:10.1007/s00330-017-5072-9](https://doi.org/10.1007/s00330-017-5072-9). Use for broad morphology distributions and frequent threshold-crossing findings in an asymptomatic sample; not to show that morphology never matters.

## First-draft authorization

A controlled Chapter 12 draft is authorized if it:

- separates regional redistribution from local concentration;
- uses the two-scale chain and labels measured, calculated, modeled, and unknown quantities;
- includes one worked free body, one validated hip-contact comparison, and one normal graded material boundary;
- treats contact area, congruence, curvature, and stiffness contrast as task- and model-dependent relations;
- preserves the small-global-change/large-local-response intuition through a normalized, bounded sensitivity rather than a unitless slogan;
- includes no-amplification, alternate-site, active/environmental redistribution, asymptomatic, reverse-causality, and tolerated-exposure branches;
- reconnects every local field to Chapter 10's time-structured exposure and receiver-specific capacity without performing Chapter 19's biology; and
- ends by distinguishing a concentrated field from Chapter 13's deformation maintained by an ongoing constraint.

It is not authorized to diagnose from posture or imaging, declare an ideal curve or joint position, equate an average with a peak field, turn a heat map into damage, use a rotation matrix as evidence of decompression, or introduce preferred signed directions from Book II.

## Remaining publication gates

1. formal mechanics and dimensional review of the free body, surface-distribution account, normalized sensitivity, frames, and transformations;
2. contact-mechanics and finite-element review of the hip comparison, validation limits, material/contact laws, and visual field representation;
3. spine-biomechanics review of the lifting and curvature examples;
4. enthesis anatomy, material, and multiscale-mechanics review;
5. medical and imaging review of asymptomatic morphology and any later wear, degeneration, pain, or diagnosis wording;
6. source refresh for exact methods, uncertainty, page-level support, funding/conflicts, access, and newer contrary evidence;
7. authorial-intent review of the amplification model and strength of the geometry-to-localization claim;
8. accessibility review of body variation, assistance, and figure interpretation;
9. figure review for evidence state, color-independent fields, text alternatives, rights, and final art; and
10. repetition and seam review with Chapters 2, 4–6, 10–13, 16, 19, and 23.

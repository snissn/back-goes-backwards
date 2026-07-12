# Chapter 23 — Geometry and localized strain

## One step, several meanings of load

During the stance phase of walking, the foot presses against the ground and the ground presses back. A force platform can measure that external contact. Motion capture, segment properties, and the measured contact can then support a calculation of the net force and moment required at the knee. Those quantities are already more specific than the conversational word *load*. They are still not the force carried by the medial compartment, the pressure at a cartilage surface, or the strain inside the cartilage.

That distinction became unusually clear in a study of one person with an instrumented total knee replacement. Several gait modifications reduced the first peak of the calculated external knee-adduction moment. They did not all reduce the corresponding first peak of the measured medial contact force. A model that also included the flexion moment tracked the measured compartment force more closely, and even the calculated adduction moment depended on how the reference frame was defined.[^23-01] The result is deliberately narrow: one prosthetic knee under selected walking conditions cannot establish a population relation or a preferred gait. It does establish that an external moment and an internal compartment force are different quantities. Changing the first does not mechanically guarantee a particular change in the second.

This chapter follows that separation inward. It asks how geometry can change moment arms, contact, load sharing, local stress, and local strain without turning any one of them into a diagnosis. The knee provides the lead example because several kinds of evidence can be placed in a disciplined sequence: force-platform measurements and calculated joint moments, measured forces in instrumented implants, reconstructed contact in healthy native knees, measured local deformation, cadaver contact experiments, computational models, controlled tissue experiments, and population observations.

No person—and no single knee—passes through that complete sequence in the evidence assembled here. The chapter is a **multistudy reconstruction**. Its sources involve walking, altered gait, a weight-bearing lunge, controlled magnetic-resonance loading, cadaveric compression, computational simulation, cartilage explants, and longitudinal or cross-sectional cohorts. Their numbers cannot be spliced into one continuous history. Each source answers one adjacent question, and each transition remains open until an appropriate measurement or model connects it.

The strong mechanical claim is nonetheless substantial:

> For a declared task, boundary, frame, and time, geometry can change line of action, moment arm, contact location and area, load sharing, and the spatial distribution of stress and strain. Similar external demands can therefore produce different internal distributions, while similar joint resultants can conceal different local fields.

The consequence is a separate claim. Local exposure matters through its magnitude, direction, rate, repetition, duration, variability, recovery interval, material state, biological context, and the capacity of the receiving tissue. A local strain can occur during ordinary activity and reverse after the demand changes. Under other conditions, repeated or retained exposure can participate in accommodation, remodeling, fatigue, injury, or degeneration. Geometry opens the causal question. It does not settle the biological or clinical answer.

## Define the knee before solving it

The lead system is the knee during the stance phase of walking, with bounded experiments used to resolve links that walking studies cannot measure directly. At the whole-segment scale, the system includes the lower limb segment, its inertia, the ground contact, and the resultant force and moment acting at the knee. At the joint scale, it includes the femur, tibia, medial and lateral contacts, menisci, ligaments, and muscles crossing the joint. At the receiver scale, the principal object is tibiofemoral articular cartilage. The frame, phase, boundary, and receiver change as the question moves inward; they must be declared again rather than silently inherited.

The relevant time also changes. A force-platform sample describes an instant. A stance phase describes part of a step. A walking session is a short exposure sequence. Repeated activity, recovery, tissue response, and structural change unfold on other timescales. A value measured at one of these scales is not a cumulative history at another.

The evidence record inherited from Chapter 22 therefore begins with distinct entries:

- the task and external contacts can be observed and measured;
- segment kinematics and external forces can support a calculated net joint force and moment;
- internal sharing among muscles, ligaments, menisci, and the two compartments is partly measured in selected implants and otherwise modeled or unknown;
- contact area, pressure, deformation, and strain require their own measurement or model; and
- response, finding, symptom, and clinical interpretation remain later, separately evidenced objects.

For a distal-segment free body, force and moment balance can be written schematically as

\[
\sum \mathbf{F}_{\mathrm{ext}} + \mathbf{F}_{J} = m\mathbf{a}_{G},
\qquad
\sum \mathbf{M}_{O,\mathrm{ext}} + \mathbf{r}_{J/O}\times\mathbf{F}_{J}+\mathbf{M}_{J}
=\frac{d\mathbf{H}_{O}}{dt}.
\]

Here, \(\mathbf{F}_{\mathrm{ext}}\) includes the measured external contacts and the segment's weight, \(\mathbf{F}_{J}\) and \(\mathbf{M}_{J}\) are the calculated equivalent force and moment at the knee boundary, \(m\mathbf{a}_{G}\) is the segment's translational inertial term, and \(d\mathbf{H}_{O}/dt\) is its angular-momentum rate about the declared inertially fixed point \(O\). Every vector must use a consistent frame and sign convention. Changing the boundary or coordinate frame changes the bookkeeping and the reported components, even when the physical event is unchanged.

Balance does not provide a unique anatomical solution. At a separately declared cut through the joint, an equivalent resultant can be shared among medial and lateral contact, muscle, ligament, meniscus, and other structures. More unknown carrier forces exist than the free-body equations alone can determine. Additional measurements, physiological constraints, constitutive assumptions, or models are required. A net knee moment is therefore not a muscle force, a compartment force, or a cartilage field in disguise.

The separate cut can be represented as a bookkeeping relation:

\[
\mathbf{R}_{J}
=\mathbf{F}_{\mathrm{medial}}+\mathbf{F}_{\mathrm{lateral}}
+\sum_i\mathbf{F}_{\mathrm{muscle},i}
+\sum_j\mathbf{F}_{\mathrm{ligament},j}+\cdots .
\]

The terms on the right are contributions crossing that boundary, with signs and frames declared consistently. The equation does not determine them. Even \(\mathbf{R}_{J}\) should not be assumed numerically identical to the distal-segment \(\mathbf{F}_{J}\) unless the cuts and conventions coincide. This is more than notational caution. If one analysis includes a structure inside its boundary and another cuts through it, the same physical action appears in a different place in the accounting.

The distinction between a *resultant* and a *distribution* is central. A resultant preserves the net translational and rotational effect of several actions at the selected scale. It deliberately discards information about how those actions were distributed. Two internal arrangements can produce the same resultant while loading the medial and lateral contacts differently. Two contact distributions can produce the same total compartment force while locating their peaks in different regions. Every move toward a local receiver therefore requires information that the coarser quantity was designed to omit.

> **Figure 23.1 — One knee, six different quantities [text-native first-draft figure]**
>
> ```text
> ground contact force ──> net knee force and moment ──> compartment contact force
>       MEASURED                 CALCULATED                 MEASURED IN AN IMPLANT
>                                                                   OR MODELED
>                                                                    │
>                                                                    ▼
> contact location and area ──> contact pressure ──> intratissue stress and strain
> RECONSTRUCTED / MEASURED       MEASURED / MODELED       MEASURED IN PART / MODELED
>
> active muscle and ligament sharing: incompletely known at every internal transition
> biological response, finding, symptom, and diagnosis: not supplied by this chain
> ```
>
> **Caption.** The same knee can be described by external force, calculated joint equivalents, compartment force, interface geometry, pressure, and local tissue fields. The arrows organize separate questions; they do not claim that one study measured the entire sequence or that any quantity establishes injury or a preferred gait.
>
> **Text alternative.** A six-stage chain moves from measured ground contact to calculated net knee force and moment, then to measured-in-an-implant or modeled compartment force, reconstructed or measured contact area, measured or modeled pressure, and partly measured or modeled intratissue stress and strain. Unknown muscle and ligament sharing accompanies the internal transitions. Biological response, findings, symptoms, and diagnosis are explicitly outside the mechanical chain.

The figure is not a ranking in which each inward quantity is automatically more important. It is a warning against substitution. A measured external force is strong evidence for that force. It is weak evidence for a local strain unless the intermediate relations have also been established.

## Geometry changes the internal question

Geometry enters the equations through positions, orientations, lines of action, moment arms, contact, and the available relations among structures. Move an external line of action relative to a joint center and the calculated moment can change. Change flexion, and the surfaces meeting one another can change. Change contact location or meniscal state, and the same nominal joint force can be distributed over a different area. Change muscle recruitment or co-contraction, and two steps with similar visible geometry can have different internal sharing.

The instrumented-knee counterexample shows why no single external surrogate should be asked to carry all of that information. The knee-adduction moment can remain useful for a declared population and question; its failure to uniquely predict one participant's medial contact force does not make it meaningless. It makes the missing flexion moment, muscle forces, reference frame, contact state, and person-specific relations consequential.

Direct implant measurements help at one link. In five people with instrumented total knee replacements, investigators measured forces and moments during walking and other daily activities.[^23-02] These measurements demonstrate that internal joint resultants vary with task in those implants. They do not recover native cartilage stress, the forces of an unselected knee, or a biological response. The prosthesis makes a quantity observable while changing the anatomy through which it is observed.

Healthy native-knee imaging answers a different question. In eleven knees, investigators combined magnetic-resonance geometry with dual fluoroscopy during a weight-bearing single-leg lunge. Reconstructed contact location and estimated cartilage deformation varied with flexion and between compartments.[^23-03] The study did not measure ground reaction, tissue stress, or separate femoral from tibial deformation. A later cadaver study compared a related biplanar-radiography and magnetic-resonance contact method with direct surface measurements under controlled poses and axial loads. The comparison showed useful performance and nonzero error.[^23-04] Contact reconstructed from images is therefore neither imaginary nor direct access to the whole field. It is a method-dependent estimate whose uncertainty travels with the conclusion.

This is also where a model earns—or loses—credibility. A finite-element model can estimate contact pressure or intratissue fields that are inaccessible in a living person. Its answer depends on geometry, contacts, restraints, muscle or applied forces, reference state, constitutive laws, material parameters, mesh, solver, and boundary conditions. One knee model has been compared with cadaveric kinematics, ligament behavior, and contact pressure across several tests, illustrating validation against more than one output.[^23-05] A more recent comparison of five subject-specific knee models with electronic pressure sensors found both agreement and specimen- or metric-specific discrepancy.[^23-06] Validation is graded and output-specific, not a seal that turns every later prediction into measurement.

Regulatory and engineering frameworks make the governing principle explicit: credibility must be judged against a model's stated context of use, the consequence of being wrong, the relevant verification and validation evidence, and the uncertainty in the output being used.[^23-07][^23-08] A model appropriate for comparing contact patterns under one loading apparatus may be inappropriate for estimating a person's walking history. A model that predicts kinematics adequately may still predict peak stress poorly.

A consequential model statement should therefore answer a compact set of questions. What object and output is represented? What task, boundary, reference configuration, and timescale were imposed? Which contacts, restraints, active forces, and material relations were supplied? Against which measurement was the particular output compared? How sensitive is the conclusion to uncertain geometry, material parameters, contact, or muscle force? What observation would make the result inapplicable? Without those answers, a smooth field plot can look more resolved than the underlying inference.

This discipline does not require rejecting models until every input is known. Models are often the only practical way to connect joint-level demand with tissue-level quantities. Their value lies in conditional reasoning: *if* these contacts, forces, geometries, and material properties represent the system well enough for this output, *then* the predicted distribution follows within stated uncertainty. The condition is part of the result, not a footnote to be forgotten when the image reaches clinical prose.

> **Figure 23.2 — An external surrogate can open more than one internal branch [text-native first-draft figure]**
>
> ```text
> walking condition A                         walking condition B
> calculated adduction moment                calculated adduction moment
>             │                                  REDUCED
>             │                                      │
>             ▼                                      ├── measured medial force reduced
> measured medial contact force                      └── measured medial force not reduced
>
> variables at the split:
> flexion moment · active muscle strategy · contact state · reference frame · implant context
> ```
>
> **Caption.** In the cited single-participant instrumented-knee study, reducing the first peak of a calculated adduction moment did not guarantee reducing the corresponding measured medial contact force. The diagram depicts a surrogate failure, not the frequency of either branch, a judgment about gait, or a population treatment result.
>
> **Text alternative.** A calculated adduction moment under one walking condition leads to a measured medial contact force. Under modified conditions, the calculated moment is reduced, but the measured force can branch toward either reduction or no reduction. Flexion moment, muscle strategy, contact state, reference frame, and the implant setting are listed at the branch.

Geometry thus changes an internal question rather than delivering an internal verdict. A posture photograph, joint angle, or rotation matrix can describe orientation. A rotation matrix can transform vector components between frames or represent a relative orientation. It cannot, by itself, establish an external force, solve muscle redundancy, define contact, calculate pressure, or prove that tissue has been decompressed. Those claims require the corresponding forces, contacts, material relations, and validation. Mathematical formality does not substitute for a complete model.

## From joint demand to a local cartilage field

The next transition is from a resultant or compartment force to the spatial field inside a receiver. At an interface, an average normal pressure can be written as a normal force divided by a declared area. That scalar does not recover how pressure varies across the area, whether shear traction is present, how stress varies through cartilage depth, or how the material deforms. Local stress is a tensorial internal quantity; strain is deformation relative to a reference configuration. Neither is interchangeable with contact force.

At a surface with unit normal \(\mathbf n\), the traction vector is \(\mathbf t=\boldsymbol{\sigma}\mathbf n\), where \(\boldsymbol{\sigma}\) is the local stress tensor. Its normal and tangential components depend on the surface orientation and local field. A scalar \(F_n/A\) can summarize an average normal action over a chosen area, but it cannot recover \(\boldsymbol{\sigma}\), through-depth variation, or the strain that follows from a heterogeneous, time-dependent material. Contact area is consequently not a cosmetic denominator. It is one part of the interface problem, alongside location, surface shape, material behavior, and boundary conditions.

Direct in-vivo work makes the heterogeneity visible. In nine healthy volunteers, synchronized magnetic-resonance imaging and cyclic loading equivalent to one-half bodyweight at the foot were used to estimate displacement and intratissue strain in one sagittal plane of medial tibiofemoral cartilage. The resulting fields were spatially complex and included substantial shear.[^23-09] The study supplies unusually direct evidence of local deformation under a controlled task. It does not supply the whole-knee stress field, an injury threshold, or a long-term outcome.

A second healthy study measured cartilage thickness before and after twenty minutes of treadmill walking in eight participants. Compartment-average compressive strains were smaller than localized maxima under the study's convention.[^23-10] Delayed scanning and recovery during transfer constrain the estimates. The central result is not that a particular local maximum was adverse. It is almost the opposite: ordinary tolerated walking produced a heterogeneous local deformation field without an injury conclusion. *Localized* cannot be used as a synonym for *damaged*.

Interface experiments show both redistribution and a true null. In five cadaveric knees, partial and total meniscectomy reduced contact area and increased stress concentration under the tested conditions.[^23-11] The apparatus demand did not have to increase for the interface distribution to change. This is the clean physical point the chapter needs: changing an interface can change the local field under a held external condition.

But a named alteration does not guarantee a detectable redistribution. In eleven fresh-frozen knees loaded to 1000 N at four flexion angles, created radial split tears did not significantly alter the selected contact-pressure or area measures; vertical tears produced directionally different but statistically nonsignificant changes.[^23-12] The tear types, specimen state, apparatus, sample, and measurement method limit the result. It remains a substantive null: some geometric or morphological changes have little detected effect on a selected mechanical output under selected boundary conditions.

Finite-element sensitivity work adds another layer. Varying meniscal size and shape in one model changed predicted contact variables, particularly for the medial meniscus.[^23-13] This supports conditional sensitivity to geometry. It does not establish a living tolerance threshold or show that every naturally occurring geometric difference is consequential. A model peak may also depend on mesh, constitutive assumptions, and boundary conditions. It becomes persuasive only when sensitivity, uncertainty, and comparison with appropriate measurements are reported at the output the prose uses.

In the book's hard/soft language, the femur and tibia can serve relatively shape-preserving roles while cartilage and meniscus receive and conform to contact. That polarity is relational, not a tissue taxonomy. Menisci transmit and redistribute force; cartilage supports pressure and shear; bone deforms. The question is whether the assembly shares a declared demand in a way that changes a receiver's local field, not whether “hard tissue” carries load while “soft tissue” remains unloaded.

> **Figure 23.3 — Same apparatus demand, different interface result [text-native first-draft figure]**
>
> | Comparison | External condition | Interface state | Selected local result | What remains open |
> |---|---|---|---|---|
> | Controlled redistribution | Held within the cadaver protocol | Intact versus partial or total meniscectomy | Contact area decreased and concentration increased | living control, response, symptoms, and disease |
> | Controlled null | 1000 N at declared flexion angles | Intact versus created radial split tear | No significant change in selected pressure or area measures | other tear forms, fields, tasks, power, and living response |
> | Healthy walking | Twenty minutes of treadmill walking | Native interface | Average thickness-derived strain concealed larger localized values | stress, damage, symptoms, and long-term outcome |
>
> ```text
> same resultant / same average
>          ├── broadly distributed local field
>          ├── localized maximum within ordinary activity
>          └── altered field whose consequence depends on receiver and dose
> ```
>
> **Caption.** External demand and scalar averages do not uniquely specify a local field. Interface alteration can redistribute contact, can produce no detected change in the selected output, or can coexist with ordinary heterogeneous deformation. The rows come from different studies and are not one quantitative comparison.
>
> **Text alternative.** A three-row table compares a cadaveric meniscectomy redistribution result, a cadaveric radial-tear null, and healthy walking with localized cartilage strain. Beneath it, one resultant or average branches to a broad field, an ordinary localized maximum, or an altered field whose consequence depends on receiver and dose. The caption states that the studies and values are not pooled.

The same-apparatus comparison is especially important. If an external force is held while contact area and distribution change, then local mechanics cannot be reduced to the size of the external force. If an alteration produces no detected difference under another apparatus condition, then geometry cannot be treated as an always-dominant cause. Both outcomes belong to the framework.

## Exposure becomes consequence through the receiver

A strain field is an exposure description. It becomes an adverse claim only when a receiver-specific bridge connects magnitude, mode, rate, repetition, duration, sequence, recovery, and prior state to a measured response. The field can also fall within ordinary capacity, produce a transient response, support adaptation, or leave no detected change. Chapter 19 established that branching logic; the knee now gives it a concrete receiver.

Controlled cartilage experiments show why dose and biology cannot be omitted. In adult bovine cartilage explants, sub-impact compression produced matrix and cell-injury patterns that varied with peak stress and strain rate and were spatially heterogeneous.[^23-14] In a separate bovine-explant study, repeated cyclic loading produced load- and duration-dependent changes in cellular energetics and oxidative state without extensive cell death or gross macroscopic damage under the reported protocol.[^23-15] Experiments involving bovine and human cartilage explants also found interaction between injurious compression and an exogenous cytokine environment.[^23-16]

These results demonstrate that mechanical exposure, time organization, and biological context can interact in a receiver. They do not establish that the healthy in-vivo strains described above were injurious. They do not provide a human walking threshold, reconstruct an individual's lifetime exposure, or prove the origin of osteoarthritis or pain. The explant boundary makes some variables controllable by removing the whole person, circulation, ordinary behavior, and long-term repair from the experiment. That strength is also the transport limit.

The temporal sequence cannot be recovered by arranging unlike studies in a convenient order. Healthy imaging records deformation over minutes. Explants isolate responses over a controlled protocol. Cohorts observe selected predictors and later structural outcomes in populations. None watches one native human cartilage region move from a measured walking field through cellular response, retained matrix change, imaging finding, pain, and function. The reconstruction is valuable because it identifies that missing chronology. It would become misleading if the adjacency of its evidence were presented as continuity of observation.

Receiver state can also reverse the apparent causal direction. A change in cartilage or meniscal material can redistribute later contact. Pain or apprehension can change gait, muscle recruitment, and exposure. Reduced activity can change both total dose and capacity. An inflammatory state can change the response to a mechanical input without being caused by that input. These reverse and reciprocal paths do not reduce the mechanical question to “everything interacts.” They identify which state must be measured before a particular arrow can carry explanatory weight.

Human population evidence can bridge toward structural findings, but it does not repair the missing local chronology. In a longitudinal cohort, varus and valgus alignment were associated with compartment-specific incident or progressive radiographic knee-osteoarthritis outcomes after adjustment for selected covariates.[^23-17] The result supports a compartment-specific population association. Alignment was not direct local stress or strain, and the study did not observe every intermediate state in an individual.

In 144 people with medial knee osteoarthritis followed for twelve months, knee-adduction-moment impulse was associated with medial tibial cartilage-volume loss, while peak moment was not; the tested moment measures were also not associated with every other magnetic-resonance outcome.[^23-18] This is useful precisely because it contains a positive branch and internal nulls. A geometry-sensitive exposure surrogate can associate with one structural endpoint without becoming a universal measure of medial contact, local strain, pain, or disease origin.

Ordinary variation further constrains interpretation. Among 250 asymptomatic adults aged twenty to twenty-seven, neutral mechanical alignment was not universal; the observed distribution included substantial constitutional varus.[^23-19] That finding does not establish an ideal alignment or lifetime outcome. It does refute the assumption that deviation from neutral is, by itself, an adverse state.

Structural findings and symptoms also fail to correspond one-to-one. In a population-based magnetic-resonance study, knee abnormalities were common in adults both with and without knee pain.[^23-20] The finding does not make every image irrelevant. It shows that an image, symptom, and causal history are distinct. A symptomatic knee may have a meaningful mechanical contribution, a biology-first process, a prior injury, sensitization, several interacting histories, or a finding incidental to the current concern. The selected geometry-to-strain route must earn priority for the particular question rather than inherit it from an image.

The complete knee reconstruction therefore has unequal evidentiary strength:

> measured task and external contact → calculated joint equivalents → partly measured or modeled internal sharing → partly measured local deformation → experimentally supported dose-and-state possibilities → population-level structural associations → separately variable findings, symptoms, and interpretations

The early mechanical links are strongest when the system and measurement are narrow. The human transition from one person's local exposure history to biological response and later clinical meaning remains the weakest part. Adding more adjacent studies does not turn that gap into a directly observed timeline.

## The axial transfer: disc, facets, and endplates

The lumbar spine is the harder transfer test and the series' central axial application. It carries the same general questions—boundary, task, geometry, line of action, sharing, local exposure, material state, response, finding, and symptom—but not the knee's numerical values or anatomical compartments. A motion segment includes two vertebral bodies, the intervertebral disc, facet joints, endplates, ligaments, active muscles, and relations to neighboring segments. Its internal solution is especially sensitive to muscle redundancy, follower-like support, level, curvature, motion, degeneration, and the chosen boundary conditions.

One direct human measurement illustrates both value and limitation. In one 45-year-old man, a pressure transducer in a nondegenerate L4–L5 disc recorded intradiscal pressure during daily activities.[^23-21] The measurement supports task- and muscle-activity-dependent pressure in that disc. It does not specify annular strain, endplate stress, facet force, pain, or a universal posture relation. Pressure is one partial internal quantity.

Cadaver experiments resolve other pieces. Lumbar motion segments loaded after sustained preload in simulated lordotic-standing and slightly flexed-sitting conditions showed different sharing by posterior elements under the apparatus conditions.[^23-22] The result demonstrates disc–facet sharing that depends on configuration and boundary conditions. It does not include living muscle control or establish an optimal posture. In another study of eighty-seven cadaveric lumbar discs, internal compressive-stress profiles differed with age and degeneration.[^23-23] Material state did not merely result from the field; it changed the field produced under demand. Cause can therefore run in both directions across time.

Subject-specific models make the dependence more visible. Models generated from twenty-eight lumbar computed-tomography datasets and subjected to a standardized modeled compression produced outputs that varied with lordosis, spinal level, the chosen force or moment, and multifidus activation rather than moving in one uniform direction.[^23-24] Five detailed radiography-driven models likewise produced substantial intersubject variation in estimated spinal and facet forces.[^23-25] These studies support conditional geometry-sensitive distribution. They do not measure the complete living fields of the people represented, identify an ideal curve, or establish symptoms.

This coupling prevents a one-axis summary. A visible increase in lordosis can change external moment arms, facet relations, disc orientation, muscle requirements, and neighboring-level geometry at once. The resulting compression, shear, bending moment, facet force, pressure, stress, and strain need not all move in the same direction. A segment can show a lower value for one output and a higher value for another. “More load” or “less load” becomes meaningful only after the quantity, level, direction, phase, and receiver are named.

The same point applies to three-dimensional description. Translation, rotation, and curvature are legitimate geometric variables. They are not force components. A coordinate transformation can express an already defined vector or tensor in another frame; it does not generate the boundary conditions needed to solve the disc–facet–muscle system. The lumbar question is not whether the spine has geometry. It is which geometric relation changes which internal output under which active and material state.

The biological bridge must again remain receiver-specific. In a mouse-tail model, static disc compression at selected magnitudes and durations produced increasing cell death with exposure.[^23-26] The result demonstrates a magnitude–duration response in that animal system. It is not a human posture threshold, an account of ordinary movement, or proof of clinical degeneration.

Finally, morphology and symptoms remain separate. Magnetic-resonance imaging of ninety-eight people without back pain found disc bulges, protrusions, and other findings in many participants.[^23-27] As with the knee, noncorrespondence does not erase mechanics. It prevents a visible structure from uniquely revealing local exposure, historical cause, or symptom meaning.

> **Figure 23.4 — What transfers from the knee to the lumbar motion segment? [text-native first-draft figure]**
>
> | Question | Knee reconstruction | Lumbar transfer | What does not transfer |
> |---|---|---|---|
> | Declared task and boundary | Stance-phase walking; distal segment and tibiofemoral joint | One declared activity or compression condition; motion segment and neighbors | task magnitude, phase, and boundary |
> | Calculated equivalent | Net knee force and moment | Segment forces and moments under stated inputs | a unique anatomical carrier solution |
> | Internal measurement | Selected resultant or compartment force in an implant | Pressure in one instrumented disc | native population field or whole internal distribution |
> | Load sharing | Medial/lateral contact, menisci, ligaments, muscles | Disc, facets, endplates, ligaments, muscles, neighboring levels | compartments, constitutive laws, and thresholds |
> | Local exposure | Cartilage pressure, deformation, stress, and strain | Nucleus pressure; annular, endplate, and facet fields | numerical value and clinical meaning |
> | State and response | Cartilage composition, injury, inflammation, and recovery | Disc hydration and degeneration, endplate and annular state, age | receiver-specific biology |
> | Finding and symptom | Knee morphology and pain can diverge | Spinal morphology and back pain can diverge | diagnosis, prognosis, and correction |
>
> **Caption.** The transferable object is a sequence of mechanical questions, not a number, tissue mechanism, or clinical conclusion. Blank or nontransferable relations are results. The lumbar system preserves the book's axial inquiry while exposing greater coupling and model dependence.
>
> **Text alternative.** Seven rows compare the knee and lumbar systems across task, calculated equivalents, internal measurement, load sharing, local exposure, material state and response, and findings and symptoms. A fourth column lists what cannot be transferred, including task magnitude, unique carrier solutions, constitutive laws, thresholds, receiver biology, diagnosis, and correction.

The axial result is affirmative but bounded. Curvature, translation, rotation, active support, level, contact, and material state can change disc–facet–endplate sharing and the internal quantities measured or predicted under a declared task. That makes axial geometry a serious mechanical and mechanobiological research domain. It does not make a visible curve a diagnosis or a map of stress. It does not prove that rotating a coordinate system decompresses a disc. It does not reduce scoliosis, spondylolisthesis, disc degeneration, herniation, or stenotic change to one route. Those conditions remain legitimate, condition-specific tests of the wider mechanical hypothesis.

## Competing histories and an informative null

A geometry-to-strain account is useful only if observations can change how much work it is allowed to do. Alternatives should enter at the arrow they affect.

At the geometry-to-distribution arrow, muscle recruitment, co-contraction, speed, support, neighboring-joint motion, and frame choice can change the answer. A direct internal measurement under the same task, or a validated subject-specific estimate with sensitivity analysis, can discriminate among some of these possibilities. If materially different visible geometries produce no meaningful difference in the selected internal quantity, the geometric account narrows.

At the resultant-to-local-field arrow, contact area, location, meniscal or disc state, thickness, material heterogeneity, and reference configuration matter. Spatial measurement or an output-specific validated model can test that relation. If the predicted field is insensitive within measurement and model uncertainty, a dramatic geometric story has not earned mechanical priority.

At the local-field-to-response arrow, prior injury, development, age, inflammatory or metabolic state, sleep, medication, activity history, recovery, and current capacity can alter the receiver. Some exposures remain within capacity or support adaptation. If a local field occurs during ordinary tolerated activity and no adverse response is established, the correct result is ordinary exposure, not concealed damage.

At the response-to-finding and finding-to-symptom arrows, genetics, morphology, acute events, biology-first change, sensitization, expectation, care, behavior, and incidental coexistence can alter the history. A symptom can change movement after it begins, making current geometry a consequence or modifier rather than an origin. Serial, receiver-specific observation is needed to order those possibilities. A cross-sectional image cannot.

The principal nulls in this chapter are therefore structural, not ceremonial. A lower external adduction moment did not guarantee lower measured medial contact force in the instrumented-knee comparison. A created radial meniscal tear did not significantly change the selected contact measures under its apparatus conditions. Healthy walking produced localized cartilage deformation without an injury conclusion. Asymptomatic adults displayed non-neutral knee alignment and common knee or lumbar imaging findings. A prospective exposure surrogate associated with one structural endpoint but not every tested metric or outcome. Lumbar model outputs varied by level and quantity instead of yielding one global load score.

These findings do not show that geometry is irrelevant. They show what a serious geometry claim must survive. The framework should be capable of four outcomes: the proposed route is supported for a bounded relation; it is narrowed to one task, receiver, or endpoint; it remains unresolved because a consequential quantity is missing; or it adds no value beyond a simpler biological, injury, symptom, developmental, or contextual account.

Those outcomes can be stated without forcing every case into a fixed ranking:

| Result of the inquiry | What has been learned | What does not follow |
|---|---|---|
| Supported relation | A declared geometric comparison changes a named internal or local quantity within the tested conditions | disease origin, symptoms, or correction |
| Narrowed relation | The effect is limited to a task, compartment, level, output, state, or population | global alignment or whole-body consequence |
| Unresolved relation | The proposed route remains compatible with the record, but a consequential measurement or chronology is absent | confirmation by plausibility |
| Low-priority or no-added-value relation | Another account discriminates the question better, or the detailed route changes no interpretation | the claim that bodies cease to be mechanical systems |

The table is not a clinical classifier. It is a discipline for the explanatory claim. Different endpoints in the same history can receive different results: geometry may be well supported as a contributor to local contact while remaining unresolved as an explanation of pain, and low priority for a separate functional question.

That final branch matters. A structure can carry force even when a detailed load-routing reconstruction is unnecessary for the question at hand. A mechanically plausible story can be too nonunique to discriminate histories. A model can be too sensitive to unknown inputs. An imaging finding can be too common to identify the relevant cause. In those situations, assigning low priority to the geometry-to-strain route is a successful use of the method.

## What geometry can establish

Geometry is not merely appearance. For a declared task, it enters line of action, moment arm, contact, boundary conditions, and the available relations among active, passive, shape-preserving, and form-receiving structures. Those relations can alter internal sharing. Internal sharing can alter local stress and strain. Controlled experiments, in-vivo measurements, and bounded models establish those steps in selected systems.

The chain then becomes conditional. A local field is not damage. Damage is not degeneration. Degeneration is not pain. A current finding does not uniquely reveal its initiating history. Consequence depends on exposure through time, receiver state, biology, capacity, and recovery, with adaptation and no detected adverse response remaining real outcomes. The axial system strengthens rather than weakens this conclusion: disc, facets, endplates, ligaments, muscles, and neighboring segments make geometry consequential while preventing any one visible curve from solving the distribution.

The chapter's strongest conclusion is therefore neither “posture does not matter” nor “alignment causes disease.” It is that geometry can materially change the internal mechanical question, and sometimes the local field, while the biological and clinical consequence must be established at its own scale. This preserves a substantial mechanical research program for degeneration without borrowing a universal cause or correction.

Chapter 24 changes the receiver and the failure signature. Instead of asking how demand becomes concentrated within a load-bearing joint or motion segment, it asks how a surrounding relation can maintain deformation or restrict excursion in a form-receiving structure. The same discipline must remain: imposed demand comes before loss of space, wall and lumen are not interchangeable, present geometry does not recover history, and a mechanically coherent reconstruction does not become a diagnosis.

## Notes

[^23-01]: Jonathan P. Walter, Darryl D. D'Lima, Clifford W. Colwell Jr., and Benjamin J. Fregly, “Decreased Knee Adduction Moment Does Not Guarantee Decreased Medial Contact Force during Gait,” *Journal of Orthopaedic Research* 28, no. 10 (2010): 1348–1354, [doi:10.1002/jor.21142](https://doi.org/10.1002/jor.21142). One participant with an instrumented total knee replacement completed selected gait modifications. The study supports the external-moment/internal-contact-force counterexample, the relevance of the flexion moment, and reference-frame sensitivity; it does not establish a population effect or gait recommendation.

[^23-02]: Ines Kutzner et al., “Loading of the Knee Joint during Activities of Daily Living Measured In Vivo in Five Subjects,” *Journal of Biomechanics* 43, no. 11 (2010): 2164–2173, [doi:10.1016/j.jbiomech.2010.03.046](https://doi.org/10.1016/j.jbiomech.2010.03.046). Five people with instrumented total knee replacements performed selected activities. The source supports directly measured prosthetic-joint forces, moments, and task variation; it does not measure native cartilage fields, tissue response, symptoms, or unselected population values.

[^23-03]: Jeffrey T. Bingham et al., “In Vivo Cartilage Contact Deformation in the Healthy Human Tibiofemoral Joint,” *Rheumatology* 47, no. 11 (2008): 1622–1627, [doi:10.1093/rheumatology/ken345](https://doi.org/10.1093/rheumatology/ken345). Eleven healthy knees underwent magnetic-resonance and dual-fluoroscopic imaging during a weight-bearing single-leg lunge. The study supports flexion- and compartment-dependent reconstructed contact deformation; it did not measure ground reaction, tissue-specific stress, or separate femoral and tibial deformation.

[^23-04]: Eric Thorhauer and Scott Tashman, “Validation of a Method for Combining Biplanar Radiography and Magnetic Resonance Imaging to Estimate Knee Cartilage Contact,” *Medical Engineering & Physics* 37, no. 10 (2015): 937–947, [doi:10.1016/j.medengphy.2015.07.002](https://doi.org/10.1016/j.medengphy.2015.07.002). Three cadaver knees were compared with direct surface measurements across static poses and axial loads after removal of the menisci and patellae. The source supports method-validation performance and nonzero error, not native in-vivo contact or clinical interpretation.

[^23-05]: Ali Kiapour et al., “Finite Element Model of the Knee for Investigation of Injury Mechanisms: Development and Validation,” *Journal of Biomechanical Engineering* 136, no. 1 (2014): 011002, [doi:10.1115/1.4025692](https://doi.org/10.1115/1.4025692). The model was compared with selected cadaveric kinematic, ligament, and contact data across declared tests. It supports multi-output validation within those tests, not universal credibility, subject-specific prediction, or clinical inference.

[^23-06]: Brett D. Steineman et al., “In Pursuit of Quantifying Patient Knee Contact Mechanics: Finite Element Model Validation of Cadaveric Knees in Axially Loaded MRI Scans,” *Journal of Orthopaedic Research* 43, no. 6 (2025): 1132–1143, [doi:10.1002/jor.26077](https://doi.org/10.1002/jor.26077). Five cadaver-knee models were compared with electronic pressure-sensor measurements during static axial loading. Agreement and discrepancy were output- and specimen-specific; the study does not establish gait, in-vivo biology, or clinical outcome.

[^23-07]: U.S. Food and Drug Administration, [*Assessing the Credibility of Computational Modeling and Simulation in Medical Device Submissions*](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/assessing-credibility-computational-modeling-and-simulation-medical-device-submissions), final guidance, November 2023. The guidance supports context of use, model risk, and credibility evidence proportional to decision consequence. It does not validate a knee or spine model used in this chapter.

[^23-08]: American Society of Mechanical Engineers, [*V&V 40-2018: Assessing Credibility of Computational Modeling through Verification and Validation—Application to Medical Devices*](https://www.asme.org/codes-standards/find-codes-standards/assessing-credibility-of-computational-modeling-through-verification-and-validation-application-to-medical-devices) (2018). The standard supplies an authoritative verification-and-validation framework. It is not biomechanical evidence for any particular anatomy or clinical claim.

[^23-09]: Deva D. Chan et al., “In Vivo Articular Cartilage Deformation: Noninvasive Quantification of Intratissue Strain during Joint Contact in the Human Knee,” *Scientific Reports* 6 (2016): 19220, [doi:10.1038/srep19220](https://doi.org/10.1038/srep19220). Nine healthy volunteers underwent cyclic magnetic-resonance-compatible loading equivalent to one-half bodyweight at the foot. The study supports regional displacement and complex intratissue strain in one sagittal plane of the medial compartment; it does not establish whole-knee stress, tissue damage, symptoms, or a human threshold.

[^23-10]: Nimit K. Lad et al., “Effect of Normal Gait on In Vivo Tibiofemoral Cartilage Strains,” *Journal of Biomechanics* 49, no. 13 (2016): 2870–2876, [doi:10.1016/j.jbiomech.2016.06.025](https://doi.org/10.1016/j.jbiomech.2016.06.025). Eight healthy participants underwent magnetic-resonance imaging before and after twenty minutes of treadmill walking. The source supports thickness-derived compartment and localized cartilage strain; delayed scanning, recovery, sample size, and the absence of an injury endpoint limit inference.

[^23-11]: J. C. Ihn, S. J. Kim, and I. H. Park, “In Vitro Study of Contact Area and Pressure Distribution in the Human Knee after Partial and Total Meniscectomy,” *International Orthopaedics* 17, no. 4 (1993): 214–218, [doi:10.1007/BF00194181](https://doi.org/10.1007/BF00194181). Five human specimens were tested with pressure-sensitive film. The study supports controlled interface alteration and contact redistribution under the apparatus conditions, not ordinary posture, living adaptation, symptoms, or disease.

[^23-12]: M. G. Muriuki, D. A. Tuason, B. G. Tucker, and C. D. Harner, “Changes in Tibiofemoral Contact Mechanics Following Radial Split and Vertical Tears of the Medial Meniscus: An In Vitro Investigation of the Efficacy of Arthroscopic Repair,” *Journal of Bone and Joint Surgery American Volume* 93, no. 12 (2011): 1089–1095, [doi:10.2106/JBJS.I.01241](https://doi.org/10.2106/JBJS.I.01241). Eleven fresh-frozen knees were loaded to 1000 N at four flexion angles. The study supports alteration-specific results, including the radial-tear null; small subgroups, cadaver state, pressure-film measurement, and nonsignificant vertical-tear differences limit inference.

[^23-13]: Tammy L. Haut Donahue, Maury L. Hull, M. M. Rashid, and Christopher R. Jacobs, “The Sensitivity of Tibiofemoral Contact Pressure to the Size and Shape of the Lateral and Medial Menisci,” *Journal of Orthopaedic Research* 22, no. 4 (2004): 807–814, [doi:10.1016/j.orthres.2003.12.010](https://doi.org/10.1016/j.orthres.2003.12.010). This finite-element geometry-perturbation study supports conditional sensitivity of modeled contact variables to meniscal size and shape. It does not supply a living response or biological tolerance threshold.

[^23-14]: T. M. Quinn, R. G. Allen, B. J. Schalet, P. Perumbuli, and E. B. Hunziker, “Matrix and Cell Injury Due to Sub-Impact Loading of Adult Bovine Articular Cartilage Explants: Effects of Strain Rate and Peak Stress,” *Journal of Orthopaedic Research* 19, no. 2 (2001): 242–249, [doi:10.1016/S0736-0266(00)00025-5](https://doi.org/10.1016/S0736-0266%2800%2900025-5). The study supports rate-, peak-stress-, and region-dependent injury under its bovine-explant protocol, not a human walking threshold, osteoarthritis cause, or symptom relation.

[^23-15]: Mitchell C. Coleman et al., “Injurious Loading of Articular Cartilage Compromises Chondrocyte Respiratory Function,” *Arthritis & Rheumatology* 68, no. 3 (2016): 662–671, [doi:10.1002/art.39460](https://doi.org/10.1002/art.39460). Bovine explants underwent controlled cyclic loading for one or seven days. The source supports load- and duration-dependent cellular energetics and oxidative response with limited gross damage under the protocol, not human disease or a clinical threshold.

[^23-16]: Parth Patwari et al., “Proteoglycan Degradation after Injurious Compression of Bovine and Human Articular Cartilage In Vitro: Interaction with Exogenous Cytokines,” *Arthritis & Rheumatism* 48, no. 5 (2003): 1292–1301, [doi:10.1002/art.10892](https://doi.org/10.1002/art.10892). The study supports interaction between controlled injurious compression and cytokine conditions in explants. It does not reconstruct whole-person inflammation, ordinary loading, or symptom causation.

[^23-17]: Leena Sharma et al., “Varus and Valgus Alignment and Incident and Progressive Knee Osteoarthritis,” *Annals of the Rheumatic Diseases* 69, no. 11 (2010): 1940–1945, [doi:10.1136/ard.2010.129742](https://doi.org/10.1136/ard.2010.129742). This longitudinal cohort analysis supports adjusted compartment-specific associations between alignment and incident or progressive radiographic outcomes. Alignment was not direct local exposure, and the study does not reconstruct individual cause or support treatment.

[^23-18]: Kim L. Bennell et al., “Higher Dynamic Medial Knee Load Predicts Greater Cartilage Loss over 12 Months in Medial Knee Osteoarthritis,” *Annals of the Rheumatic Diseases* 70, no. 10 (2011): 1770–1774, [doi:10.1136/ard.2010.147082](https://doi.org/10.1136/ard.2010.147082). The analysis included 144 participants with medial knee osteoarthritis. It supports the association between adduction-moment impulse and medial tibial cartilage-volume loss and nulls involving peak moment and other magnetic-resonance outcomes; the moment remains a surrogate and does not establish origin or symptoms.

[^23-19]: Johan Bellemans, William Colyn, Hilde Vandenneucker, and Jan Victor, “The Chitranjan Ranawat Award: Is Neutral Mechanical Alignment Normal for All Patients? The Concept of Constitutional Varus,” *Clinical Orthopaedics and Related Research* 470, no. 1 (2012): 45–53, [doi:10.1007/s11999-011-1936-5](https://doi.org/10.1007/s11999-011-1936-5). Cross-sectional radiographs of 250 asymptomatic adults aged twenty to twenty-seven support ordinary alignment variation and the nonuniversality of neutral. They do not establish lifetime outcome, preferred alignment, or treatment.

[^23-20]: Ali Guermazi et al., “Prevalence of Abnormalities in Knees Detected by MRI in Adults without Knee Osteoarthritis: Population Based Observational Study (Framingham Osteoarthritis Study),” *BMJ* 345 (2012): e5339, [doi:10.1136/bmj.e5339](https://doi.org/10.1136/bmj.e5339). The study supports common magnetic-resonance findings among people with and without knee pain and finding–symptom non-equivalence. It does not dismiss all findings or establish mechanical irrelevance.

[^23-21]: Hans-Joachim Wilke, Peter Neef, Marco Caimi, Thomas Hoogland, and Lutz E. Claes, “New In Vivo Measurements of Pressures in the Intervertebral Disc in Daily Life,” *Spine* 24, no. 8 (1999): 755–762, [doi:10.1097/00007632-199904150-00005](https://doi.org/10.1097/00007632-199904150-00005). One 45-year-old man had a pressure transducer placed in a nondegenerate L4–L5 disc. The study supports task- and muscle-activity-dependent intradiscal pressure in that disc, not annular strain, facet force, population norms, pain, or a universal posture rule.

[^23-22]: Michael A. Adams and William C. Hutton, “The Effect of Posture on the Role of the Apophysial Joints in Resisting Intervertebral Compressive Forces,” *Journal of Bone and Joint Surgery British Volume* 62-B, no. 3 (1980): 358–362, [doi:10.1302/0301-620X.62B3.6447702](https://doi.org/10.1302/0301-620X.62B3.6447702). Cadaveric motion segments underwent sustained loading in simulated lordotic-standing and slightly flexed-sitting conditions. The source supports posture-dependent posterior-element sharing under those apparatus conditions, not living muscle control, symptoms, degeneration, or an optimal posture.

[^23-23]: Michael A. Adams, Donald S. McNally, and Patricia Dolan, “‘Stress’ Distributions inside Intervertebral Discs: The Effects of Age and Degeneration,” *Journal of Bone and Joint Surgery British Volume* 78-B, no. 6 (1996): 965–972, [doi:10.1302/0301-620X.78B6.0780965](https://doi.org/10.1302/0301-620X.78B6.0780965). Internal compressive-stress profiles were measured in eighty-seven cadaveric lumbar discs. The source supports state-dependent distributions and reciprocal material-state effects, not direct living exposure, pain generation, or a unique cause of degeneration.

[^23-24]: Andreas Müller et al., “Load Distribution in the Lumbar Spine during Modeled Compression Depends on Lordosis,” *Frontiers in Bioengineering and Biotechnology* 9 (2021): 661258, [doi:10.3389/fbioe.2021.661258](https://doi.org/10.3389/fbioe.2021.661258). Simplified subject-specific models from twenty-eight computed-tomography datasets underwent standardized modeled compression with a multifidus-activation comparison. The study supports lordosis-, level-, output-, and active-control-dependent model results, not measured living forces, symptoms, ideal curvature, or treatment.

[^23-25]: Iraj Dehghan-Hamani, Navid Arjmand, and Aboulfazl Shirazi-Adl, “Subject-Specific Loads on the Lumbar Spine in Detailed Finite Element Models Scaled Geometrically and Kinematic-Driven by Radiography Images,” *International Journal for Numerical Methods in Biomedical Engineering* 35, no. 4 (2019): e3182, [doi:10.1002/cnm.3182](https://doi.org/10.1002/cnm.3182). Five detailed models were driven by subject radiographic displacements. The source supports model-dependent and intersubject variation in estimated spinal and facet loads, not direct whole-field measurement or clinical inference.

[^23-26]: Jeffrey C. Lotz and Jennie R. Chin, “Intervertebral Disc Cell Death Is Dependent on the Magnitude and Duration of Spinal Loading,” *Spine* 25, no. 12 (2000): 1477–1483, [doi:10.1097/00007632-200006150-00005](https://doi.org/10.1097/00007632-200006150-00005). Mouse-tail discs were compressed in vivo at selected magnitudes and durations. The source supports a bounded magnitude–duration-to-cell-death relation in that static animal model, not a human postural threshold, ordinary loading, symptoms, or clinical degeneration.

[^23-27]: Maureen C. Jensen et al., “Magnetic Resonance Imaging of the Lumbar Spine in People without Back Pain,” *New England Journal of Medicine* 331, no. 2 (1994): 69–73, [doi:10.1056/NEJM199407143310201](https://doi.org/10.1056/NEJM199407143310201). Ninety-eight people without back pain underwent lumbar magnetic-resonance imaging. The study supports structural-finding/symptom non-equivalence; its methods and cross-sectional asymptomatic status do not make every finding irrelevant or establish lifetime outcome.

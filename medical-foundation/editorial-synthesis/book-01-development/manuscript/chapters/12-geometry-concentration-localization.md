# Chapter 12 — Global geometry, local concentration, and strain localization

Imagine loading the same hip twice. The applied joint force has the same magnitude and direction in both versions. The pelvis and femur occupy the same gross relationship. In the first version, however, the contacting surfaces retain their measured, subject-specific contours. In the second, those surfaces have been replaced by a smoother mathematical approximation.

The total force can match while the local result does not. The two versions can predict different contact areas, different peak pressures, and peaks in different places. That is not merely a thought experiment. In a finite-element study of one cadaveric human hip, idealized surfaces that approximated the original geometry closely still produced materially different contact predictions from the subject-specific model under nominally matched loading cases.[^12-01]

This comparison does not show that a small anatomical difference injures a joint. It does not compare two living people, and the idealized surface was a model representation rather than an intervention. It establishes a narrower and important mechanical point: a regional resultant does not contain its local distribution. Geometry helps determine how that resultant is received.

The distinction opens the central question of this chapter. How can a change in whole-body or regional geometry alter what reaches a smaller region, and how can local geometry then concentrate stress, strain, pressure, traction, or deformation? The answer requires two related scales. *Redistribution* describes a change in regional forces, moments, contacts, or participation among available routes. *Concentration* or *localization* describes a field that is nonuniform over a declared surface or volume. Redistribution can occur without an important local peak, and a local peak can occur without an adverse consequence.

Geometry therefore matters strongly, but not magically. It enters a chain of mechanical relations. Each relation has its own object, measurement, and uncertainty.

## The scale bridge must remain visible

Chapter 11 followed demand as it changed carriers, contacts, and mechanical roles. A handoff or rerouting claim concerns allocation: which relations are available, which participate, and what defined exposure reaches a named receiver. The next step is spatial. Even when a regional force or moment is known, that quantity must still be distributed across an interface and through a material.

The useful sequence is longer than a single arrow from posture to stress:

```text
task and environment
    -> regional forces and moments
    -> interface contact and sharing
    -> local stress, strain, pressure, traction, or deformation field
    -> material, biological, functional, or clinical response
```

The chapter concentrates on the middle three levels. The task supplies external forces, contacts, motion, and a time history. A regional balance then constrains the net forces and moments at a selected boundary. An interface model describes how participating structures and contacts receive those resultants. A local-field model or measurement describes how the relevant quantity varies across a surface or volume. Only then is there a defined exposure to carry into a separate response argument.

> **Figure 12.1 — From task to local field [text-native first-draft figure]**
>
> ```text
> TASK AND ENVIRONMENT
> object, support, gravity, motion, external contact, time
>          |  observed or measured inputs; some terms may remain unknown
>          v
> REGIONAL ACCOUNT
> net force, net moment, joint reaction, candidate sharing
>          |  calculated balance plus modeled internal allocation
>          v
> INTERFACE
> contact surface, thickness, congruence, active support, boundary conditions
>          |  measured geometry plus modeled or partly measured contact
>          v
> LOCAL FIELD
> pressure(x), traction(x), stress(x), strain(x), deformation(x)
>          |  measured where method permits; otherwise modeled and uncertain
>          v
> RESPONSE
> material, biological, functional, or clinical change — unknown here
> ```
>
> **Caption.** Regional redistribution and local concentration are two distinct transitions inside a longer causal chain. An observation at one level does not automatically measure the next.
>
> **Text alternative.** Five vertically connected levels run from task and environment to a regional account, interface conditions, a spatial local field, and a separately tested response. Notes beside each arrow distinguish observed or measured inputs, calculated balances, modeled sharing and fields, and unknown consequences.

Four evidence states keep the bridge honest. *Observed or measured* refers to geometry, motion, applied force, contact, or deformation obtained by a stated method. *Calculated* refers to a result obtained from declared measurements and a balance or data-reduction rule. *Modeled* refers to an estimate that depends on assumptions about materials, contact, activation, sharing, or boundaries. *Unknown* means the present evidence does not establish the quantity or consequence. These states can coexist in one example. A CT scan may measure surface geometry while a finite-element model estimates pressure, and neither establishes what a living person feels.

The boundary between a resultant and a field can be stated compactly. If a surface carries a traction field \(\mathbf{t}(\mathbf{x})\), its resultant force is the surface integral

```text
R = integral over A of t(x) dA
```

Many different spatial fields can produce the same resultant. They can place maxima in different locations, distribute force over different areas, or include different combinations of normal and tangential traction. Knowing \(\mathbf{R}\) does not allow the field to be reconstructed without additional geometry, material, contact, and boundary information. This is why an external load, a net joint moment, and a local tissue stress cannot be used interchangeably.

A rectangular contact patch makes the nonuniqueness visible. Suppose the patch has width \(b\), length \(L\), and total normal force \(F\). One admissible pressure distribution is uniform: \(p(x)=F/(bL)\). Another rises linearly from zero at one edge according to \(p(x)=2Fx/(bL^2)\). Integrating either field over the full patch gives \(F\). Their average pressures are equal, but the second field has an edge peak twice as large as the uniform value. This is an idealized mathematical construction, not a cartilage model. Its job is to show why an average or resultant cannot answer a question about a maximum or its location.

The construction also exposes what a real model must add. If the surfaces can separate, the contact area is part of the solution rather than a fixed input. If the material is nonlinear, time dependent, anisotropic, or fluid supported, a change in rate or history can change the distribution. If tangential traction matters, normal pressure alone is incomplete. A field is therefore always a field *of a named quantity*, defined over a stated region, at a stated phase, under stated boundary conditions.

The same separation applies in the other direction. A conspicuous local peak need not change the regional resultant appreciably. A small region can carry an unusually high local value while contributing little to the integrated whole. Regional redistribution and local concentration are connected, but neither is a substitute for the other.

## Geometry first changes the regional account

Hold an object close to the body, then imagine the same object held farther away. Its weight is unchanged. About a selected point near the lower trunk, however, the external moment changes because the force's line of action lies at a different perpendicular distance. In a simple quasi-static planar model, the magnitude of that moment is \(W d\), where \(W\) is the object's weight and \(d\) is the perpendicular moment arm.

That relation is secure within its boundary, but its interpretation must stop at the boundary. A larger external flexion moment requires a different balancing account. It does not identify one muscle force, one spinal contact force, or one local tissue stress. Active muscle, passive tension, abdominal pressure, joint contact, external support, segment geometry, acceleration, and co-contraction can all enter the internal allocation. The free body tells us what the person–object system must balance. It does not disclose how every internal structure does so.

Human lifting measurements illustrate the regional effect without completing the local one. In a study of twenty-one men and eighteen women, investigators varied object mass, bulk, distance from the feet, out-of-plane position, movement speed, and lifting style. Estimated lumbar extensor moment and bending torque varied across those conditions; position and speed mattered alongside mass.[^12-02] The estimates depended on the study's electromyographic and normalization methods. They demonstrate that task geometry and rate change a regional mechanical account, not that one condition creates a unique tissue field or injury threshold.

> **Figure 12.2 — One weight, two regional accounts [text-native first-draft figure]**
>
> ```text
> CLOSE HOLD                         FARTHER HOLD
>
>      W                                  W
>      |                                  |
>      v                                  v
>      ●                                  ●
>      |<-- d1 -->|                       |<------ d2 ------>|
>                  O                      O
>
> external moment: W d1              external moment: W d2
> with d2 > d1                       therefore W d2 > W d1
>
> measured or declared: W, geometry, motion, external contacts
> calculated: external moment about O
> modeled or unknown: muscle sharing, pressure support, joint reaction,
>                     contact distribution, local tissue field
> ```
>
> **Caption.** Moving a force's line of action changes its moment about a selected reference even when force magnitude is unchanged. The free body constrains the regional balance but does not select a unique internal allocation.
>
> **Text alternative.** Two schematic holds show the same downward weight at different perpendicular distances from a reference point. The farther hold has a larger external moment. A key labels the weight and geometry as measured or declared, the moment as calculated, and internal sharing and local fields as modeled or unknown.

Curvature introduces another geometric relation. In a bounded member, changing curvature or segment orientation can alter the mixture of compression, tension, bending, shear, and contact needed to support a task. Living spines are not passive columns: they are articulated, actively controlled, prestressed, and supported by discs, facets, ligaments, muscle, pressure, and external contacts. Even so, their geometry remains part of the regional problem.

Researchers constructed simplified lumbar models from CT scans of twenty-eight people whose scans showed no visible degeneration and applied a standardized compression procedure. Across the sampled lordosis range, predicted compression, shear, bending moment, and facet force varied by level and by quantity; the direction of change was not one universal curve-to-load relation.[^12-03] In another study, eighty-five non-pathological standing radiographs were used to derive modes of sagittal-alignment variation and to estimate corresponding spinal loads with a musculoskeletal model.[^12-04] These studies support an affirmative but bounded conclusion: geometric variation can materially alter modeled regional distribution. They do not identify an ideal curve or establish a local biological consequence.

Reference frames matter in these comparisons. A force resolved along one vertebra's local axes may have different compressive and shear components after that segment rotates, even when the force expressed in a fixed laboratory frame is unchanged. A rotation matrix can transform the components between frames. It does not, by itself, show that the force magnitude changed, that contact pressure fell, or that a tissue was “decompressed.” Those conclusions require a balance, contact relation, or measurement beyond the coordinate transformation.

Nor does one global curve determine every local segment. Two spines can have a similar aggregate angle while distributing curvature differently by level. The same person can reach a similar external endpoint through different pelvic, lumbar, thoracic, and lower-limb contributions. A useful model therefore states whether its input is a global angle, a segment orientation, a local curvature, a contact position, or an entire configuration. Treating those as interchangeable would erase the very scale transition the chapter is trying to explain.

This is also where a null branch belongs. A visible geometric change may leave the selected regional quantity nearly unchanged because another joint, active strategy, pressure relation, contact, or external support offsets it. The model may also be too sensitive to unknown inputs to distinguish a meaningful change. Geometry should neither be dismissed nor promoted directly into consequence. It should be placed into the balance that can test its effect.

## A resultant does not contain its local distribution

At an interface, the questions change. Which surfaces touch? Over what area? With what orientation, thickness, material behavior, frictional relation, and constraint? How does that contact change through the task? These terms determine whether the regional resultant is spread broadly, concentrated near an edge, divided among several contacts, or shifted to a different location.

Average pressure is useful only when its averaging operation is explicit. Dividing a normal force by a nominal area produces an average over that chosen area. It does not reveal the peak, the location of the peak, tangential traction, intratissue stress, or strain. Nor is larger contact area automatically safer. Force, position, thickness, material state, and distribution can change at the same time.

Ordinary joint contact makes the point. In fifteen healthy male participants, high-resolution MRI during static patellofemoral loading at zero, 200, and 400 newtons showed increasing contact area and load-dependent cartilage-thickness reduction.[^12-05] Those observations document deformation and changing contact in a living joint under the tested conditions. They do not provide a complete pressure field, a harmful threshold, or a rule that greater area is always beneficial.

Congruence is likewise a relation rather than a permanent label. Two surfaces can conform more closely in one position and less closely in another. Cartilage and bone deform. Muscle activity can change joint reaction. Capsules, labra, menisci, fluid pressurization, and neighboring contacts can change the boundary. Local contact therefore belongs to a declared state and task, not to an isolated photograph of shape.

The hip comparison from the opening makes these distinctions inspectable. In the initial validation study, investigators built a finite-element model from CT-derived geometry of one cadaveric human hip. They applied experimental loads intended to represent walking, stair descent, and stair ascent, prescribed from published average in vivo hip-load data, and compared modeled cartilage contact pressure and area with pressure-sensitive film measurements.[^12-06] The geometry and film readings were measured. The experimental loading was prescribed rather than measured from a living version of that specimen. The finite-element material relations, contact behavior, and local fields were modeled. Living muscle sharing and biological consequence remained unknown.

The validation was real but bounded. Agreement varied by activity and output. Predictions changed with cartilage thickness, material parameters, the treatment of bone as rigid or deformable, and boundary conditions.[^12-06] The film itself had a finite detection range, including saturation at 10 megapascals, and did not cover every possible contact location. A measured comparison can therefore constrain a model without turning every pixel of the predicted field into observation.

The later geometry study retained the loading cases but compared the subject-specific contact surfaces with spherical, conchoid, and smoothed-thickness representations. Some approximations fit the gross surface to within roughly half a millimeter while materially changing predicted peak and average pressure and contact area.[^12-01] A separate rigid-bone case tested a material simplification; it was not another geometry. Keeping those comparisons distinct matters because geometry and material assumptions answer different sensitivity questions.

> **Figure 12.3 — Same nominal resultant, different hip-contact fields [text-native first-draft figure]**
>
> | Panel | Subject-specific representation | Simplified representation | Evidence state |
> |---|---|---|---|
> | Regional loading case | Same prescribed hip resultant and constraints | Same prescribed hip resultant and constraints | Experimental load prescribed from published average in vivo data |
> | Contact geometry | CT-derived pelvis, femur, and cartilage surfaces | Spherical, conchoid, or smoothed mathematical surface | Subject-specific geometry measured; alternative geometry modeled |
> | Local result | Spatial pressure and contact-area prediction | A different spatial pressure, peak, or area can result | Modeled field |
> | Experimental comparison | Pressure-sensitive film at the cadaveric interface | No claim that a living hip was reshaped | Measured pressure over the film's covered and detectable range |
> | Not established | Living muscle sharing, tissue response, symptoms, diagnosis, or preferred geometry | Same | Unknown |
>
> **Caption.** Closely approximating gross contact geometry and matching a nominal resultant do not guarantee the same local field. The comparison tests model representation, not an anatomical intervention or an ideal hip shape.
>
> **Text alternative.** A five-row table compares a subject-specific hip model with simplified contact surfaces under the same prescribed loading case. CT geometry and pressure-film readings are labeled measured, finite-element pressure fields are labeled modeled, and living sharing and consequences are labeled unknown. The caption states that the geometry was changed in the model, not in a person.

The hip example supplies the chapter's main positive result. Geometry can materially redistribute a local contact field, even when the nominal regional resultant is held fixed. It also shows why that result should not be overread. One specimen does not establish a population distribution. A model comparison does not show that a person moved from one surface geometry to another. A pressure peak is a mechanical exposure descriptor, not a diagnosis. What the example earns is the right to take local geometry seriously and to demand the model or measurement that connects it to a field.

Validation does not turn a model into a transparent window. It asks whether selected outputs agree with selected measurements closely enough for a declared use. A model may reproduce contact area better than peak pressure, perform differently across loading cases, or match a film within the film's range while remaining uncertain outside its coverage. The relevant question is not simply whether the model is “validated,” but which output, configuration, loading range, and error structure were tested. That discipline lets a model make a real contribution without giving every unmeasured quantity the status of observation.

The comparison also clarifies why a contact heat map should not be read as a photograph. Its contours result from the geometry and boundary data supplied to the model, the constitutive and contact laws, numerical choices, and the selected display scale. Changing the color range can make the same field look more or less dramatic. A responsible figure names the quantity and units, shows the common scale used for comparison, and labels model output as model output. The spatial pattern is mechanically informative; its visual intensity is not evidence of damage.

## Material boundaries can concentrate and manage strain

Contact is not the only source of localization. A field can become nonuniform near a change in thickness, curvature, mobility, fiber direction, material behavior, attachment, or constraint. In a simple two-material construction, an abrupt transition between a compliant material and a stiff material can produce a local concentration. Living attachments show why this mechanical intuition must include normal gradients rather than treating every transition as a defect.

The tendon-to-bone enthesis joins structures with markedly different mechanical behavior. It is not a sharp seam between two uniform blocks. Across a small region, geometry, fiber organization, composition, mineralization, and compliance change. In the developing murine supraspinatus enthesis, investigators used micro-computed tomography, Raman spectroscopy, histomorphometry, and electron microscopy to measure a micrometer-scale mineral gradient.[^12-07] That observation describes anatomy and composition at a specific nonhuman attachment. It does not, by itself, provide a stress field.

A later study tested eleven micrometer-sized beams from the entheses of six mice and used local image correlation to examine deformation. The investigators found a high-compliance region near the mineralized gradient. In their small comparison, the mineral-defect group had lower strength, while reported differences in modulus, toughness, resilience, and failure strain were not statistically significant.[^12-08] Those results are measured micromechanics at a very small scale. They neither establish human injury nor justify treating every compliant region as weakness.

An idealized insertion model addressed a different question. It calculated how spatially varied, direction-dependent material properties could alter radial and hydrostatic stress concentrations near an attachment. The best-performing grading in that model was not a simple linear interpolation between tendon and bone properties.[^12-09] This result is modeled rather than measured. Its importance is conceptual: a normal transition can be structured to redistribute a field, and “smoother” is not a complete design rule unless the geometry, directions, constitutive relations, and objective are named.

> **Figure 12.4 — A graded boundary is not a defect by definition [text-native first-draft figure]**
>
> ```text
> TENDON             TRANSITION REGION                    BONE
> compliant  ->  changing fibers / composition / mineral  ->  stiffer
>                         ^
>                         |
>             locally high compliance was measured
>
> measured: developmental mineral distribution; micromechanical deformation
> modeled:  effect of graded anisotropic properties on selected stress measures
> unknown:  one universal optimum, human injury, symptoms, or clinical outcome
> ```
>
> **Caption.** Normal attachment architecture combines a material transition with graded composition and local compliance. A boundary can localize deformation and also help manage transfer; its effect depends on scale, direction, geometry, and material law.
>
> **Text alternative.** A left-to-right schematic moves from tendon through a transition region to bone. The middle region is labeled with changing fibers, composition, mineralization, and measured local compliance. A key separates anatomical and micromechanical measurements, modeled stress effects, and unknown human or clinical consequences.

The enthesis is therefore a counterexample to two easy narratives. First, nonuniform strain is not automatically failed strain. Local deformation can be part of how an attachment transfers demand between dissimilar structures. Second, a stiffness gradient is not automatically protective. Under a different direction, shape, material law, or boundary condition, the field may localize elsewhere or become more severe. The useful question is comparative: what field arises in this attachment, under this demand, relative to this declared reference?

Stress and strain may also localize differently. A compliant region can undergo greater deformation while transmitting a force across the attachment; a stiffer neighboring region may deform less while carrying a different stress state. Neither map can be inferred from the other without a constitutive relation, and neither map alone says which region is vulnerable. Direction is equally important. A structure graded for tension along its fibers need not behave the same way under transverse compression, shear, or bending. “The transition bears load” is therefore only the opening of the account.

The scale of observation changes the account as well. A field that looks smooth across a millimeter-scale image may contain steep cell- or fiber-scale gradients. A microscale peak can average away at the attachment scale, while a regional model may represent the entire attachment as one element. No scale is automatically the true one. The right scale is the one that resolves the receiver and quantity required by the question, with the coarser and finer relations made explicit where they bear weight.

This comparison also clarifies the relation between hard and soft roles. A tensile structure can carry substantial force while a neighboring region receives form and deforms locally. Neither role is free of stress. The chapter's concern is whether the assembly distributes the selected demand through suitable geometry and material relations or imposes an unusual concentration on a named receiver. That question remains mechanical until a separate response is measured.

## Large local change requires a bounded sensitivity

The examples support a project-native intuition: a change that looks modest at a larger scale can sometimes produce a substantial change in a selected local output. The hip models are a clear case. Small differences between a measured surface and its smooth approximation were accompanied by materially different predicted pressure fields. The inference must remain tied to the variables that were actually compared.

A geometric input and a local output often have different units. Dividing a displacement by a pressure, or an angle by a strain, does not produce a general amplification factor. A controlled comparison can instead use a normalized finite sensitivity:

```text
S(q,g) = (Delta q / q_ref) / (Delta g / g_ref)
```

Here \(g\) is one scalar geometric input, such as a declared thickness, radius, angle, or surface-error measure. The quantity \(q\) is one scalar output derived from the local field, such as peak pressure, contact area, or a spatially defined strain measure. The changes \(\Delta g = g_1-g_0\) and \(\Delta q = q_1-q_0\) compare two stated configurations. Each reference has the same units as its corresponding variable and must be nonzero, so the ratio is dimensionless.

The convention must also be declared. A signed sensitivity retains whether the output rose or fell relative to the chosen coordinates. A magnitude-only sensitivity describes proportional size while discarding direction. Neither convention is universally better; each answers a different question. The reference state, interval, boundary conditions, contact law, material model, task, and selected output remain part of the reported result.

This is a finite comparison, not a derivative and not a body-wide constant. It becomes misleading when a reference approaches zero, when the response is strongly nonlinear over the interval, when contact opens or closes and changes the problem's regime, or when measurement uncertainty and omitted terms are comparable to the reported change. A large value can also reflect an unstable denominator or a poor input definition rather than an important local effect.

The choice of \(q\) is substantive. Peak pressure, the ninety-fifth percentile of pressure, contact area above a detection limit, maximum principal strain, and strain averaged over a named region are different summaries of a field. One can change while another does not. A peak may be dominated by spatial resolution or a numerical singularity, whereas a regional average can conceal a small focal change. Reporting sensitivity without defining how the field became a scalar hides the main judgment inside the symbol.

The same applies to \(g\). A surface's maximum pointwise error, root-mean-square fitting error, cartilage thickness, joint angle, and curvature are not interchangeable measures of “small geometric change.” A model can fit one measure closely while altering a mechanically decisive contact feature. For that reason, a sensitivity statement should report the chosen geometric descriptor alongside an image or description of what changed. The number cannot carry the geometry by itself.

The sensitivity is most useful when it forces a hypothesis to choose among outcomes. Under a declared geometric change, the selected regional quantity may barely change. Regional forces may redistribute without producing a material local peak. The proposed site may localize the field, or another site may. Active muscle, pressure-mediated support, a handrail, footwear, or another environmental contact may alter the regional account before it reaches the interface. The model may remain too uncertain to distinguish any branch.

> **Figure 12.5 — Geometry can matter through several branches [text-native first-draft figure]**
>
> ```text
> declared change in scalar geometry g
>          |
>          +--> negligible regional change
>          +--> regional redistribution, no material local peak
>          +--> localization at the proposed site
>          +--> localization at another site
>          +--> active, pressure-mediated, or environmental redistribution
>          +--> result dominated by model or measurement uncertainty
>
> if a local output q is compared:
> S(q,g) is scalar, dimensionless, finite-interval, reference-specific,
> boundary-specific, and explicitly signed or magnitude-only
> ```
>
> **Caption.** A geometric hypothesis becomes informative by predicting a bounded branch and surviving comparison with nulls and alternatives. The normalized sensitivity describes one input–output comparison, not a universal amplification law.
>
> **Text alternative.** A declared geometric change branches into six outcomes: negligible regional change, redistribution without a local peak, localization at the proposed site, localization elsewhere, active or environmental redistribution, and an uninterpretable uncertain result. A note lists the required properties of the finite sensitivity.

The model earns explanatory weight only if observation can distinguish its predicted branch from these alternatives. “Small change, large consequence” is not yet a testable statement. “Under this loading case and these boundary assumptions, a specified change in cartilage-thickness representation produces a stated relative change in predicted peak pressure” is testable. Its biological importance remains another question.

## Concentration is not damage

A concentration is a spatial description. It says that a pressure, traction, stress, strain, or deformation field is nonuniform relative to a stated comparison. It does not say that the local value exceeded capacity, persisted long enough to matter, produced a material change, caused symptoms, or began the sequence being observed.

Ordinary morphology supplies an important null. A CT study examined 1,111 hips from 590 asymptomatic people. Several shape measurements extended across thresholds often used to describe cam- or pincer-type morphology, and the distributions varied with sex and age.[^12-10] The finding does not show that morphology never matters. It shows that a geometric label cannot substitute for local exposure, function, symptoms, or disease.

The local field itself is not enough to claim tolerance. A person can show a different geometry while the selected exposure remains materially similar. A local exposure can differ while a properly measured response remains within the receiver's present capacity. An exposure can contribute to a later response through magnitude, direction, rate, repetition, duration, variability, state, and recovery. Or another process can change tissue properties, movement, activation, and geometry, making the measured concentration a consequence or companion rather than the initiating event. These are distinct chronological and causal branches.

Asymptomatic does not mean mechanically identical, permanently protected, or representative of every task. It means the selected symptom criterion was absent in the sampled context. Likewise, a null difference in one measured field does not show that every local quantity is equal. The point of the null is methodological: a geometric difference should be allowed to yield little or no relevant exposure difference, and an exposure difference should be allowed to have no demonstrated adverse response. Without those branches, the geometry hypothesis could explain every observation after the fact and predict none before it.

External assistance provides another clean alternative. A handrail, brace, backpack frame, seat, shoe, or tool can change the system boundary and redistribute regional demand before a joint interface receives it. Active pressure regulation or muscle recruitment can do something similar inside the person. These possibilities do not make geometry unimportant; they enlarge the geometry to include contacts, supports, and active state. The local question must be solved for the configuration that actually exists during the task.

Chapter 10 supplied the necessary history. A brief peak pressure, repeated tensile strain, sustained deformation, and rapidly applied shear are not interchangeable because each has a large numerical value. The receiver, quantity, direction, rate, duration, sequence, recovery interval, and outcome criterion must match. “Tolerated” requires evidence about capacity and response, not simply the absence of a modeled failure flag.

The asymptomatic and reverse-direction branches strengthen rather than weaken the mechanical thesis. They separate the proposition that geometry changes mechanics from the stronger proposition that a particular mechanical state caused a particular outcome. The first can be true when the second is false, irrelevant, compensated, or not yet known. A mature geometry account should be able to represent all of those results.

The chapter can now answer its central question. Whole-body or regional geometry changes line of action, moment arm, curvature, support, contact, and the available relations that balance a task. Those changes can redistribute regional forces and moments. Local surface shape, thickness, congruence, material contrast, and boundary conditions can then produce a different spatial field. A field may become sharply localized even when the regional resultant changes little, and a regional redistribution may occur without an important local concentration.

Return to the hip. CT supplied subject-specific geometry. A prescribed experimental loading case supplied the nominal resultant. Pressure film measured part of the contact distribution within its range and coverage. Finite-element assumptions produced modeled fields. The matched comparison showed that simplified geometry could alter those fields substantially. Living allocation, exposure history, tissue response, symptoms, and preferred configuration remained unknown. The example is powerful because every level stays visible.

Chapter 13 begins with a different question. A concentrated field describes *where* a selected mechanical quantity is locally high or nonuniform. A maintained constraint describes *what relation keeps a form-receiving structure deformed or prevents a needed excursion*. One case may contain both: a constraint can create a concentration, and a concentration can occur without a maintained constraint. Keeping them separate allows the next chapter to ask what sustains a shape through time without treating every local peak as its cause or consequence.

## Notes

[^12-01]: Andrew E. Anderson, Benjamin J. Ellis, Steve A. Maas, and Jeffrey A. Weiss, [“Effects of Idealized Joint Geometry on Finite Element Predictions of Cartilage Contact Stresses in the Hip,”](https://doi.org/10.1016/j.jbiomech.2010.01.010) *Journal of Biomechanics* 43, no. 7 (2010): 1351–1357. The study compared subject-specific, spherical, conchoid, and smoothed geometry representations under matched loading cases and separately evaluated a rigid-bone material simplification. It supports sensitivity of modeled contact predictions to geometric representation, not an anatomical intervention, biological response, or ideal hip shape.

[^12-02]: Patricia Dolan, Michael Earley, and Michael A. Adams, [“Bending and Compressive Stresses Acting on the Lumbar Spine during Lifting Activities,”](https://doi.org/10.1016/0021-9290%2894%2990277-1) *Journal of Biomechanics* 27, no. 10 (1994): 1237–1248. The study supports a bounded human task comparison in which object mass, bulk, distance, asymmetry, speed, and style altered regional estimates. Its estimates are not local tissue measurements or injury thresholds.

[^12-03]: Andreas Müller et al., [“Load Distribution in the Lumbar Spine during Modeled Compression Depends on Lordosis,”](https://doi.org/10.3389/fbioe.2021.661258) *Frontiers in Bioengineering and Biotechnology* 9 (2021): 661258. The study supports geometry-dependent, level- and quantity-specific modeled distribution across twenty-eight lumbar geometries derived from CT scans without visible degeneration. It does not establish an ideal curve or clinical outcome.

[^12-04]: Florian Rieger, Dominique A. Rothenfluh, Stephen J. Ferguson, and Dominika Ignasiak, [“Comprehensive Assessment of Global Spinal Sagittal Alignment and Related Normal Spinal Loads in a Healthy Population,”](https://doi.org/10.1016/j.jbiomech.2024.112127) *Journal of Biomechanics* 170 (2024): 112127. The study supports observed sagittal-alignment variation and model-estimated load variation in eighty-five non-pathological subjects. It does not establish symptom causation or optimal alignment.

[^12-05]: Thomas Lange et al., [“Quantification of Patellofemoral Cartilage Deformation and Contact Area Changes in Response to Static Loading via High-Resolution MRI with Prospective Motion Correction,”](https://doi.org/10.1002/jmri.26724) *Journal of Magnetic Resonance Imaging* 50, no. 5 (2019): 1561–1570. The study supports load-dependent contact-area and cartilage-thickness changes in fifteen healthy male participants. It does not provide a complete pressure field, harmful threshold, or clinical conclusion.

[^12-06]: Andrew E. Anderson, Benjamin J. Ellis, Steve A. Maas, Christopher L. Peters, and Jeffrey A. Weiss, [“Validation of Finite Element Predictions of Cartilage Contact Pressure in the Human Hip Joint,”](https://doi.org/10.1115/1.2953472) *Journal of Biomechanical Engineering* 130, no. 5 (2008): 051008. The one-specimen cadaveric study compared a subject-specific hip model with pressure-film measurements under prescribed experimental loading cases and tested sensitivity to material and boundary assumptions. Film range and coverage limit the experimental comparison; neither the model nor the film establishes living response.

[^12-07]: Andrea G. Schwartz, Jill D. Pasteris, Guy M. Genin, Tyrone L. Daulton, and Stavros Thomopoulos, [“Mineral Distributions at the Developing Tendon Enthesis,”](https://doi.org/10.1371/journal.pone.0048630) *PLOS ONE* 7, no. 11 (2012): e48630. The study supports a measured developmental mineral gradient at the murine supraspinatus enthesis, not direct human mechanics or an outcome claim.

[^12-08]: Alix C. Deymier et al., [“Micro-Mechanical Properties of the Tendon-to-Bone Attachment,”](https://doi.org/10.1016/j.actbio.2017.01.037) *Acta Biomaterialia* 56 (2017): 25–35. Eleven micrometer-sized mouse enthesis beams from six mice were tested. The study supports a local high-compliance region and a small mineral-defect comparison in which strength, but not several other reported properties, differed significantly. Species, specimen, scale, and testing limits remain controlling.

[^12-09]: Y. X. Liu, Stavros Thomopoulos, Victor Birman, J.-S. Li, and Guy M. Genin, [“Bi-Material Attachment through a Compliant Interfacial System at the Tendon-to-Bone Insertion Site,”](https://doi.org/10.1016/j.mechmat.2011.08.005) *Mechanics of Materials* 44 (2012): 83–92. The idealized optimization supports dependence of selected stress concentrations on spatially varied anisotropic material properties. It is not a measured living field.

[^12-10]: Vasco V. Mascarenhas et al., [“Hip Shape Is Symmetric, Non-Dependent on Limb Dominance and Gender-Specific: Implications for Femoroacetabular Impingement. A 3D CT Analysis in Asymptomatic Subjects,”](https://doi.org/10.1007/s00330-017-5072-9) *European Radiology* 28, no. 4 (2018): 1609–1624. The study supports broad morphology distributions and frequent threshold-crossing findings in an asymptomatic sample. It does not show that morphology never matters.

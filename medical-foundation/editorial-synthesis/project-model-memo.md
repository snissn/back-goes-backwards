# Onboarding and Project-Model Memo

**Status:** Draft 0.4

**Date:** 2026-07-10

**Purpose:** Establish the shared project model that governs book, chapter, and manuscript decisions.

## 1. Purpose and status

This document records the project's present intellectual model and provides the basis for evaluating the provisional series architecture, chapter plans, and surviving manuscript material.

It is:

- an onboarding and alignment document;
- a record of the author's intentions;
- a controlled vocabulary for future work;
- a separation between foundational claims and higher-specificity hypotheses.

It is not:

- a chapter outline;
- a scientific validation of the complete model;
- an adoption of the existing book contract without revision;
- a decision about how many books should exist;
- permission to promote generated prose into a manuscript.

The repository should presently be treated as a source archive containing several generations of thought, not as a coherent draft book. Within that archive, the `new` JSON outlines deserve special treatment: they are not reliable manuscript prose, but they preserve the most developed pre-synthesis architecture and should be audited as structural sources rather than flattened into generated Markdown or dismissed because their claims are uneven.

The immediate editorial priority is to shore up the least objectionable and most useful first book. Higher-specificity models should be preserved inclusively as future research directions, but they do not need to be resolved before the first book's argument and source material are assessed.

Rigor should increase with the maturity and intended use of an artifact. Early exploratory work may use compressed engineering language, physical intuition, and metaphor to make the model legible. Alignment notes should make the intended model and assumptions explicit. Manuscript drafts require disciplined claim boundaries and evidence. Scientific, mathematical, historical, and clinical audit gates apply before external publication. Later rigor should refine and test the generative model rather than prematurely narrowing the field of ideas preserved during exploration.

## 2. Provenance hierarchy

Statements in the repository should be interpreted according to their source.

| Source type | Editorial authority | What it establishes |
|---|---:|---|
| Direct formulations from the author | Highest for project intent | What the project is actually trying to articulate |
| Deliberate project-model or scope documents | High but revisable | Guardrails, intended audience, provisional claim boundaries |
| Exploratory research notes | Medium | Models and formulations under consideration |
| External scientific and historical evidence | Independent constraint | What can responsibly be claimed, not what the project intends |
| Visual and engineering analogies | Illustrative | Possible ways to perceive or explain the model |
| Generated outlines and prose | Low as evidence; variable as structural record | Extrapolations that may preserve useful architecture, questions, examples, or language but do not determine intent or establish claims |
| Prompt instructions and pipeline artifacts | None as book content | Evidence about how generated material was produced |

This distinction is necessary because the current Part IV outline contains the intended Six-Division groupings in [the axis-based map](../new/inputs/outlines/14-section-04.json#L111), then later introduces a [gross hand/foot mapping](../new/inputs/outlines/14-section-04.json#L227). Direct authorial clarification now indicates that these are different scales of description rather than competing maps: the first assigns individual channels to modes, while the second assigns dominant body-scale roles to the limbs. They should be preserved separately rather than collapsed into one table or made to disprove one another.

The converter also turns every editorial key and description into manuscript text, which explains much of the contamination in generated material: [json_to_md.py](../new/scripts/json_to_md.py#L12).

Conversation exports require one additional precaution: a passage attributed to the author may quote or paste generated material. Agreement with a useful formulation also does not necessarily settle every equation, citation, or extrapolation surrounding it. Provenance must therefore follow the origin of each idea, not only the visible speaker label.

Internal scratch work should be read according to its maturity. Informal wording, provisional equations, speculative causal links, and possible applications are not automatically claims intended for publication. They should be preserved when they clarify project intent, then translated and audited when the work reaches the relevant editorial gate.

Epistemic authority and editorial conservation are different judgments. A generated outline may have little authority as evidence while retaining high value as a record of previously developed structure. Before material is removed, reduced to a sentence, or deferred, it should be checked for argument sequence, taxonomies, distinctions, candidate examples, audience transitions, and research questions that would otherwise need to be rediscovered. The companion [reconciliation of the `new` JSON archive](new-json-source-reconciliation.md) records the first such audit.

Ambiguous health language in exploratory notes should receive the weakest reasonable reading consistent with its context, not be inflated into the strongest possible medical claim. For example, “a straighter back may be better for health” may provisionally mean greater comfort, easier movement, improved tolerance of a particular task, or another limited benefit. It does not by itself assert that one posture is universally healthy, that posture determines disease, or that spinal organization is the root cause of all illness. When such language enters a manuscript, the intended outcome, population, conditions, causal strength, and evidence should be made explicit.

## 3. Compact statement of the whole-system model

The human body is a materially embodied, actively regulated biomechanical system. It must continuously receive, distribute, transform, transmit, and dissipate external and internally generated forces.

Mechanical viability does not require one static posture. It requires that forces, moments, pressures, and deformations remain within tolerable, tissue- and context-dependent ranges while the body preserves workable routes of transmission across the whole system.

The foundational medical argument is:

> Clinical reasoning improves when load history, load distribution, and body-wide load routing are considered alongside biological, psychological, and social factors.

An early mechanical intuition within that foundation is:

> Load wants to travel through the hard body so that the soft body can remain soft.

Here, “hard” and “soft” name functional mechanical roles rather than fixed tissue classes. The sentence proposes a division of mechanical labor: gross structural demand should be resolved primarily through continuous, shape-preserving and force-transmitting pathways, while soft structures remain free to yield, conform to their surroundings, change shape, glide, contain, and regulate within their functional ranges. It does not imply that soft tissues are unloaded, mechanically unimportant, or always anterior, or that hard roles are performed by bone alone.

“Force line” is useful within this model at more than one level. It may describe an externally measurable line of action, but it may also describe an internal connection through which force, tension, compression, pressure, active organization, or felt continuity is related across regions. The latter use is especially important to the project's Yin vocabulary: an internal connection may receive, conduct, and coordinate force without imposing one rigid external geometry. Until a carrier and quantity are specified, “force line” should be treated as a project-native relational description rather than as proof of one anatomical cable or one resultant vector.

A stronger hypothesis motivates the project but is not required to establish that foundation:

> Human anatomy may possess a preferred global organization in which its three principal mechanical modes are coherently oriented in their Yang directions.

That preferred organization is presently expressed as the all-Yang sign combination `(+,+,+)`. It is a research hypothesis, not yet an established biomechanical result.

## 4. The three generalized mechanical modes

The best current first-order formulation is a reduced generalized-coordinate model, not three interchangeable Cartesian force vectors. It uses three coupled modes:

- `q_a`: longitudinal transmission or axial organization;
- `q_o`: paired opening or closing rotation;
- `q_e`: transverse expansion or contraction.

Generalized coordinates may mix displacement- or strain-like variables with an angular variable. Their conjugate mechanical loads can be introduced through virtual work:

```text
delta W = N_a delta q_a + M_o delta q_o + H_e delta q_e
```

Here, `N_a` is an axial force resultant, `M_o` is an opening or closing moment, and `H_e` is a generalized expansive load. The exact meaning of `q_e` and `H_e` depends on the region: width, area, perimeter, or outward-normal displacement may be paired with pressure, hoop force, surface traction, or another integrated resultant. The standard relationship between generalized displacements and conjugate forces or torques is summarized in [MIT's dynamics notes](https://ocw.mit.edu/courses/16-61-aerospace-dynamics-spring-2003/e16936ad266f184f38159855f69fc227_lecture9.pdf).

This formulation separates three descriptions that can have different signs at the same moment:

- configuration or deformation `q`;
- movement or rate `q-dot`;
- conjugate load `Q`.

A structure can be externally rotated while experiencing an internally directed restoring moment, or expand while active tissues apply a closing load. The eventual definition of a Yang state must therefore say whether it concerns configuration, motion, load, routing, or a persistent relation among them.

### Local spatial frames remain useful but distinct

A local cylindrical or curvilinear frame following a body region remains a useful visual and computational tool:

- `e_z`: tangent to a local longitudinal centerline;
- `e_r`: radial or outward-normal where a centerline and cross-section make that approximation meaningful;
- `e_theta`: circumferential or tangential around the centerline.

Cylindrical basis directions are locally orthogonal, although radial and circumferential directions change with position. [MIT's coordinate-system reference](https://web.mit.edu/6.013_book/www/appendices/app1.html) and the [University of Texas treatment](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node257.html) describe this structure. The spatial basis is not identical to the three generalized modes: `e_theta` is a tangential vector, whereas `q_o` is an angular relation and `M_o` is its conjugate moment.

“Outward normal to a stated local surface” is the precise first approximation for expansion. Radial and surface-normal directions coincide only in sufficiently regular geometries; they need not coincide everywhere in a non-axisymmetric body. “Lateral” can remain a familiar anatomical label, but “expansive” is the more informative project term for the outward/inward generalized mode.

### Proposed signed modes

| Project mode | Yang `+` | Yin `-` | Yin channels/division | Yang channels/division |
|---|---|---|---|---|
| Axial `q_a` | Downward/caudal resolution | Upward/cranial support | Heart and Kidney — Shaoyin | Small Intestine and Bladder — Taiyang |
| Opening `q_o` | External/opening | Internal/closing | Lung and Spleen — Taiyin | Large Intestine and Stomach — Yangming |
| Expansive `q_e` | Outward/external | Inward/internal | Pericardium and Liver — Jueyin | Sanjiao and Gallbladder — Shaoyang |

The repository already states this sequence in older prose: [Yang axial, rotational, and lateral engagement](../14-section-04.md#L200), followed by the [complementary Yin sequence](../14-section-04.md#L206).

The standard channel assignments are Shaoyin Heart/Kidney opposite Taiyang Small Intestine/Bladder; Taiyin Lung/Spleen opposite Yangming Large Intestine/Stomach; and Jueyin Pericardium/Liver opposite Shaoyang Sanjiao/Gallbladder. [This peer-reviewed table lists all twelve assignments](https://pmc.ncbi.nlm.nih.gov/articles/PMC7356495/). Their identification with axial, opening/rotational, and expansive/lateral modes is this project's proposed correspondence and must be presented as such.

### Three mapping scales

The current authorial model contains three compatible levels:

1. **Local channel-mode map.** Every body region can express axial, opening/rotational, and expansive/lateral behavior. Individual channels are assigned to those modes through the Six-Division correspondence above.
2. **Gross limb-role projection.** The legs and feet are weighted toward axial support and resolution into the ground; opening/rotation describes coordination between the lower- and upper-limb systems, including pelvic–shoulder orientation, diagonal relation, and relative phase; and the arms and hands are weighted toward transverse reach, span, and expansion.
3. **Embodied anchor hypothesis.** Coordination between KI1 (Yongquan) at the sole and PC8 (Laogong) at the palm is a candidate felt connection between the gross axial and expansive systems. Opening and closing positions in Yang-style Taijiquan provide a direct experiential example. This is an authorial embodied observation whose mechanical carrier, sidedness, and measurements remain to be developed.

The gross limb projection does not reassign every hand channel to the expansive Six-Division family or every foot channel to the axial family. It describes the dominant role of an entire limb system at another scale. Heart can therefore remain an axial hand channel while the arm as a whole participates in the gross expansive subsystem.

### Interpretation of the anatomical images

The pelvis image makes the intended “scissors” analogy intelligible: the opening coordinate describes a relative angular sense across paired structures.

The pelvic ring should not be described as literally opening through a large scissor-like joint excursion. A safer formulation is:

> The pelvis illustrates a coupled opening mode in which the hemipelvic, hip, and lower-limb structures can be understood as opening externally or closing internally relative to the body's longitudinal organization.

Opening and expansion remain distinguishable observables. A relative angular change among paired structures may produce a change in width, cross-sectional area, or landmark separation, but anatomy and surrounding constraints determine that coupling. The same distinction applies to the rib cage: rib rotation can contribute to thoracic expansion without making rotation and expansion the same variable.

The vertebral image supports a local frame:

- a longitudinal tangent through the local spinal column;
- an outward-normal or radial direction from the local spinal center;
- a circumferential tangent around that center.

This frame can curve with the spine rather than assuming a single perfectly straight global axis.

## 5. Relationship to spatial frames, material symmetry, stress, and strain

Several related but distinct three-direction structures may be useful to the project:

1. Given two independent orthogonal directions in three-dimensional space, the third orthogonal direction is determined up to sign by their cross product.
2. An orthotropic elastic material has three mutually perpendicular planes of material symmetry. An orthonormal basis can be aligned with the normals to those planes, producing three material axes with direction-dependent constitutive properties. In the standard linear treatment, reflection symmetry in two perpendicular planes also entails symmetry in the third.
3. A symmetric Cauchy stress tensor possesses three mutually orthogonal principal directions at a given point, when those directions are uniquely defined.

The second result concerns constitutive material symmetry. The third follows from balance of angular momentum and the spectral theorem for real symmetric tensors. [Harvard's *Mechanics of Solids*](https://esag.harvard.edu/rice/163_Ri_Mech_Solids_EB93.pdf), [MIT structural-mechanics notes](https://ocw.mit.edu/courses/22-314j-structural-mechanics-in-nuclear-power-technology-fall-2006/18f67f439608ed10f14841ad2e034d4e_l4.pdf), and [NASA's elasticity tutorial](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20110023650.pdf) provide the relevant standard frameworks.

These facts do not prove that the proposed generalized modes are orthotropic material axes or principal-stress directions. They give us four useful but distinct descriptions:

- a local anatomical spatial frame such as `(e_z,e_r,e_theta)`;
- the reduced generalized-mode description `(q_a,q_e,q_o)`;
- a possible locally orthotropic material frame;
- the locally measured principal-stress frame derived from the stress tensor.

A promising eventual formal question is whether health, efficiency, or preferred organization corresponds to some coherent relationship among these frames—for example, reduced conflict or shear between anatomical load-bearing directions, material-symmetry axes, and principal-stress trajectories.

That is more precise than claiming that the existence of three orthogonal directions, orthotropic symmetry, or three principal stresses validates the TCM map.

### First-order structural assumptions and optional constitutive models

At the present exploratory level, the mechanical model may begin with two deliberately simplified structural assumptions:

- **Bilateral reference symmetry:** the left and right sides are treated as approximately mirrored in the reference model, while individual asymmetry, handedness, organ placement, injury, development, and task-specific differences are added at later orders.
- **Skeletal-primary load routing:** gross gravitational and external structural demand is treated as being resolved primarily through skeletal architecture. Muscles, tendons, ligaments, fascia, cartilage, pressure systems, and other tissues remain essential for actuating, stabilizing, guiding, coupling, transmitting into, buffering around, and adapting that principal route.

The preferred-configuration hypothesis adds a directional proposition to the skeletal-primary assumption: persistent structural demand should, where anatomy and task allow, be routed through coherent skeletal support rather than requiring chronic compensatory bracing, tethering, or compression in compliant tissues.

These are first-order continuum-scale choices, not atomistic descriptions or declarations that every tissue, region, or person has exact bilateral symmetry.

Orthotropy is retained one level lower: as an optional local constitutive approximation for selected tissues or regions when direction-dependent material behavior and available measurements justify it. It is not required for the three generalized modes and does not establish their existence.

This is a modeling option to refine, not a claim that the whole body is a single homogeneous orthotropic elastic solid. Biological tissues are inhomogeneous, active, nonlinear, time-dependent, and scale-dependent. Different structures may be modeled as orthotropic, transversely isotropic, poroelastic, viscoelastic, or by other constitutive laws. The local material axes may also curve and vary across the body.

Orthotropic approximations already have a legitimate but bounded role in biomechanics. They have been used to describe direction-dependent properties of cancellous and cortical bone, while many skeletal-muscle models use transversely isotropic or more complex active-material descriptions. Experimental examples include studies of [cancellous bone](https://pubmed.ncbi.nlm.nih.gov/2341418/) and [cortical bone](https://pubmed.ncbi.nlm.nih.gov/19627830/).

The eventual question is not merely whether three orthogonal directions can be drawn. It is whether a chosen constitutive model is useful at a stated scale, how its properties are measured, how axial, opening/rotational, and expansive/lateral modes couple through geometry and off-diagonal response, and how any material frame relates to stress, strain, gravity, movement, and the proposed TCM correspondence.

## 6. Preferred global configuration

“Preferred” names a hypothesized whole-system mechanical efficiency, not merely a common posture or the visual appearance of symmetry. In eventual formal terms, the ideal may be represented as a task- and boundary-conditioned state or routing regime `q*` that minimizes a still-unresolved objective functional. Candidate terms or observable consequences include distribution of strain, continuity of skeletal and tensile support, active and metabolic cost, stability, resilience, reserve, recovery after perturbation, and the ability of yielding structures to retain useful excursion. These terms begin to describe departure from the ideal; none yet defines the metric by itself.

The model's preferred sign combination is provisionally:

```text
s = (s_a, s_o, s_e) = (+,+,+)
```

or:

- axial Yang: downward resolution;
- opening Yang: external/opening organization;
- expansive Yang: outward organization.

This is a sign tuple in generalized-mode space, not a vector in physical space. It has no ordinary Euclidean magnitude or global rotation law. Local anatomical frames and bilateral sign conventions are required before the same tuple can be compared across regions.

"Posterior loading," "downward/outward routing," and perhaps some forms of anatomical extension are not additional coordinates. They are possible anatomical manifestations or observable consequences of the all-Yang organization.

This also means that "posterior" should not automatically be used as a synonym for Yang. Posterior describes a region; Yang describes a signed direction or organizational tendency in this model.

It remains unresolved whether `(+,+,+)` qualifies configuration `q`, movement `q-dot`, conjugate load `Q`, load-path organization, or a persistent relation among them, and whether it means:

- every local region has a positive sign simultaneously;
- the dominant body-wide resultant is positive;
- the load-bearing frame has a positive bias even while local movement cycles through both signs;
- or the system returns toward `(+,+,+)` as an attractor after movement.

That distinction will matter greatly. A preferred global organization need not imply that every ordinary Yin-directed movement is mechanically undesirable.

The current authorial expectation is that posterior participation will prove necessary but not sufficient for the preferred organization at the scale and tasks for which the hypothesis ultimately applies. This is retained as a directional expectation, not yet a derived theorem: ordinary posterior loading can occur without all-Yang organization, while the necessary posterior contribution may sometimes be subtle or mechanically internal rather than visually backward.

## 7. Working definition of load

"Load" should remain an umbrella term for now, but it cannot ultimately be reduced to a single scalar.

A future formalization should distinguish at least four levels:

- At a body segment or cross-section: a force and moment pair—a mechanical wrench `(F,M)`.
- At tissue scale: stress, strain, strain rate, and their spatial distributions.
- In pressure-bearing systems: pressure and pressure gradients.
- Over time: accumulated magnitude, direction, rate, repetition, variability, duration, and recovery context.

In a reduced generalized-mode model, each configuration variable also has a conjugate load: axial force for longitudinal deformation, a moment or torque for angular opening, and an expansive resultant or pressure-like quantity for expansion. This supplies a disciplined way to relate the project's three modes without pretending that force, pressure, and torque have identical dimensions.

Torque is essential at the segment level. In classical continuum mechanics, a resultant moment can often be derived from the distribution of stresses across a section, but it remains indispensable for reasoning about joints, limbs, and coupled rotational behavior.

Metabolic cost is not itself mechanical load, although it may be an important consequence, constraint, or measurement of how the body manages load.

A **force line** may therefore refer to one of several related objects: an external line of action; an inferred route of internal force or moment transfer; a continuous relationship among tension, compression, pressure, contact, and active control; or an embodied perception of connection that may motivate a mechanical hypothesis. The intended object must be stated when the term reaches a formal or reader-facing argument. An unloaded hand can participate in a coherent internal hand-to-foot relationship without implying that one externally measurable resultant force literally travels to the palm.

## 8. Hard and soft mechanical roles

“Hard” and “soft” are a project-specific, TCM-derived functional polarity. They should not be reduced to a binary anatomical inventory.

A **hard role** is relatively shape-preserving and structurally resolving at the scale and time under discussion. It may transmit compression, tension, shear, bending, or torque while maintaining a usable geometry. Bone often performs this role in compression and bending; tendon and ligament can perform it in tension; joint geometry, active muscle, fascia, and pressurized compartments can also contribute to it.

A **soft role** is relatively form-receiving and shape-conforming. In the intended Yin sense, it yields rather than imposing geometry: it deforms in response to surrounding constraints and loads, taking the shape available to it. That yielding may enable excursion, containment, buffering, pressure change, flow, sliding, or local shape adaptation, but those are expressions of softness rather than its definition. Muscle, fascia, cartilage, vessels, nerves, viscera, fluid-filled spaces, and other tissues may perform soft roles, but none is mechanically passive. A muscle can shift between yielding, transmitting, and shape-preserving roles; a tendon is anatomically soft tissue but may function as part of the hard body under tension. The polarity therefore depends on scale, direction, time, state, and task.

The central principle is a division of labor, not an instruction to eliminate soft-tissue loading:

> Gross structural demand should be resolved primarily through continuous, shape-preserving and force-transmitting pathways, while soft structures remain free to yield, conform, and change shape within their functional ranges rather than becoming substitute load-bearing boundaries.

The phrase “soft-to-hard” is best understood in this functional sense. It does not require load to pass through a universal sequence of tissue types. It asks whether compliant and active tissues can guide, buffer, and transmit demand into a coherent structural route, and whether that route ultimately resolves the demand without requiring vulnerable or highly deformable structures to maintain an imposed geometry chronically.

Internal force lines provide one possible Yin expression within this division of labor. A yielding or form-receiving system can connect distant regions, distribute tension or pressure, and coordinate how demand reaches the hard body without becoming a rigid strut. This use should remain relational and multicarrier until the relevant tissues, fields, contacts, or control variables are specified.

This framing introduces two important failure concepts:

- **Load-path interruption:** a normally available structural route is geometrically disrupted, bypassed, insufficient for the task, or unavailable at the relevant scale.
- **Load-path substitution:** another tissue or interface assumes a structural role that it can perform only at greater deformation, sustained activation, reduced excursion, or lower tolerance.

In this vocabulary, load mismanagement does not mean that force has violated a moral or universally correct route. It means that demand is being resolved through tissues, interfaces, or modes of deformation poorly matched to its magnitude, direction, duration, repetition, or recovery conditions.

### Constraint-maintained deformation

The hard/soft distinction becomes especially useful when a compliant structure is deformed by surrounding geometry. Consider a deformable tube. Wall elasticity and transmural pressure contribute restoring tendencies, while flow is coupled to the deformation; external contact pressure, traction, bending, or tethering can oppose those tendencies and maintain a changed shape. In an extrinsically maintained case, the primary mechanical story is not simply that “space was lost.” It is that surrounding structure imposed load on the compliant boundary, the wall developed stress and strain, and the resulting equilibrium included a changed lumen or course. In the project's shorthand, load has “gone into” the soft structure; in continuum-mechanics language, tractions from its surroundings have produced stress and strain in its wall.

This can be represented as a provisional causal sequence:

```text
whole-system demand and configuration
    -> availability of shape-preserving load paths
    -> partitioning of demand among hard and soft roles
    -> compression, tension, shear, bending, pressure, or tethering at a compliant structure
    -> localized stress and strain
    -> maintained deformation, restricted excursion, or altered lumen
    -> possible changes in flow, conduction, movement, tissue behavior, or symptoms
```

The sequence is not a universal medical mechanism, and each arrow requires case-specific support. It is a more precise physical narrative for asking how configuration might become a local mechanical exposure.

Two cases should remain distinct:

1. **Intrinsic or independently persistent narrowing:** material within the structure, a wall change, scarring, congenital local geometry, or another persistent property establishes the reduced lumen or space without depending primarily on the current surrounding load. The narrowing itself may then govern flow or contact mechanics.
2. **Extrinsic or configuration-maintained deformation:** surrounding geometry and load maintain compression, bending, tethering, or collapse of a compliant structure. Here, altered space is an outcome of the imposed mechanical state as well as a useful geometric description of it.

The project is presently most interested in the second case without denying the first. This distinction gives Book I a defensible way to examine negative consequences of load distribution—strain localization, restricted glide, constrained expansion, and altered conduit behavior—before making any stronger claim about a particular diagnosis or systemic effect.

The functional hard/soft principle belongs in the first book because it clarifies ordinary load sharing and adverse mechanical exposure. Its TCM interpretation, its possible anterior/posterior and Yin/Yang correspondences, and its place within the preferred-configuration model belong primarily to the later books.

## 9. Configuration and configuration transitions

A configuration is not merely posture. It is the combined state of:

- anatomical geometry;
- joint and tissue relationships;
- active muscular forces;
- internal pressure;
- stress and strain fields;
- and the resulting load-path organization.

Ordinary movement within a configuration can change positions and force magnitudes while preserving the qualitative organization of load routing.

A configuration transition occurs when that qualitative organization changes—for example:

- force paths change sides;
- a previously continuous route becomes interrupted or bypassed;
- a principal direction or handedness reverses;
- different tissues become the dominant carriers of a load;
- or the network of load paths reconnects around a different anatomical route.

The laterally shifted spine and scapular example is a candidate: anatomy nominally assigned to one side may become geometrically positioned over, or mechanically routed through, structures on the other side.

"Topological change" can be retained in a restricted sense:

> A change in the topology of the inferred load-path network, not a change in the anatomical topology of the body.

We should not yet require a literal discontinuity in a physical stress field. A continuous field can undergo a qualitative regime change through a zero crossing, inversion, separatrix, bifurcation, or reconnection. "Load-routing regime transition" is the safest working term until this is formalized.

## 10. Additional future framing: tall torus and paired-loop torque

The tall-torus model is an additional exploratory framing for the higher-specificity research program. It does not replace the axial, opening/rotational, and expansive/lateral generalized-mode model, which is itself distinct from a local spatial coordinate frame; nor is the torus required by the first book's foundational medical argument.

The analogy treats the body as an elongated, curved form with:

- an inner, relatively compliant and pressure-bearing domain, motivated in part by the digestive and visceral interior;
- an outer, relatively shape-preserving and force-transmitting domain, motivated by the musculoskeletal wall;
- anterior and posterior longitudinal tracks;
- left and right lateral tracks;
- circumferential or opening/closing relationships across the pelvis, rib cage, shoulder girdle, jaw, and skull.

Within this framing, paired torque patterns may offer a more detailed account of how the three signed modes are produced. Anterior/posterior torque relationships may contribute to axial resolution and local opening/rotational organization; left/right torque relationships may contribute to expansive/lateral curvature and local opening/rotational moments; and relative convergence or separation across the two halves may be an expression of the same opening/closing mode rather than a separate generalized coordinate. The precise coupling among these candidate mechanisms remains to be derived.

Several additional ideas should remain available for later alignment:

- the body's intrinsic longitudinal path and the external gravitational axis may be distinct, and their relationship may help characterize configurations;
- left and right tracks may act synergistically in the same global direction or reciprocally relative to their respective sides;
- material asymmetry between inner and outer, anterior and posterior, or medial and lateral regions may bias some configurations over others;
- torque may be a useful primary generalized variable within a loop model even though force and moment remain coequal in mechanics;
- a route or locus of breath-related action may progress in one direction while the force, tension, or pressure vector along it points in another;
- persistent configurations may be described through metastability, path dependence, or energy barriers, with topology retained as a possible future mathematical language where its conditions can be defined.

The model is intentionally inclusive at this stage. Its tracks need not yet be declared literal closed curves; its verbal preferred configuration need not yet be forced into a numerical sign vector; and orthotropic, shell, rod, field, network, tensegrity, and toroidal representations may coexist until their explanatory roles are compared.

For the first book, this framing is best preserved as a motivating future direction rather than made load-bearing. Detailed topology, breath geometry, TCM-mechanical correspondence, ground-state energetics, and practice applications can be developed in later work.

## 11. Controlled vocabulary

- **Generalized mechanical mode:** A reduced description of a family of configuration changes and its conjugate mechanical load. It need not be an ordinary spatial vector component.
- **Axial mode:** Longitudinal organization or transmission along a stated local centerline or structural path.
- **Expansive mode:** Outward or inward change relative to a stated centerline, cross-section, surface, or bilateral span. “Lateral” and “radial” remain useful local aliases but are not universally identical to outward-normal expansion.
- **Opening or rotational mode:** A relative angular opening or closing among stated anatomical directors, segments, or limb systems; not simply generic spinal twisting or a circumferential basis vector.
- **Local spatial frame:** An anatomy-fixed or task-fixed set of basis directions used to express position, vectors, and tensors. It remains distinct from the generalized modes and from a material-symmetry frame.
- **Yang:** The positive direction or organizational tendency assigned to each model mode. A statement must eventually specify whether the sign qualifies configuration, motion, load, or routing.
- **Yin:** The complementary negative direction or organizational tendency assigned to each model mode. Yin also carries the project's internal, form-receiving, and connective sense without implying passivity.
- **Preferred configuration:** The hypothesized all-Yang state, bias, phase, regime, or attractor associated with whole-system mechanical efficiency; not necessarily a static pose.
- **Force line:** An external line of action, inferred internal mechanical connection, or embodied continuity proposed to relate force across regions. Its carrier, scale, and measured quantity must be stated before literal use.
- **Load path:** A modeled route by which forces and moments are transmitted and ultimately resolved through contact, support, inertia, or internal opposition.
- **Routing:** The distribution of mechanical demand among available paths and tissues.
- **Load-path continuity:** The availability of a mechanically connected route capable of resolving the demand under consideration. It is scale- and task-dependent, not necessarily a literal continuous anatomical cable.
- **Load-path interruption:** Disruption, bypass, or insufficiency of an otherwise available structural route at the scale being modeled.
- **Load-path substitution:** Recruitment of another tissue or interface to carry a structural role, often with different deformation, activation, excursion, or capacity costs.
- **Load mismanagement:** Resolution of structural demand through tissues, interfaces, or deformation modes poorly matched to its magnitude, direction, rate, duration, repetition, variability, or recovery context.
- **Adverse mechanical exposure:** A local pattern of stress, strain, pressure, contact, traction, shear, bending, or repeated deformation with a plausible capacity to perturb tissue function or state. Whether it produces a clinical consequence remains case-specific.
- **Constraint-maintained deformation:** Deformation that persists because surrounding contact, geometry, pressure, traction, or tethering opposes the structure's restoring tendencies.
- **Strain localization:** Concentration of deformation within a smaller region than the imposed whole-system displacement or demand would suggest.
- **Mechanical bottleneck:** A region or interface at which geometry, compliance, contact, or limited excursion concentrates demand or restricts transmission, movement, or flow.
- **Posterior loading:** Greater load carriage by posterior structures; an anatomical observation, not a primitive coordinate.
- **Extension:** A conventional anatomical movement. It may correlate with Yang organization but is not identical to it.
- **Hard/soft:** A project-specific, TCM-derived functional polarity, not a literal tissue classification. “Hard” describes a relatively shape-preserving, force-transmitting, or structurally resolving role. “Soft” describes a relatively form-receiving and shape-conforming role: it yields rather than imposing geometry, deforming with surrounding constraints and loads. Containment, buffering, sliding, flow, and pressure response are possible expressions of that softness. The role depends on scale, direction, time, state, and task, and a tissue may perform both.
- **Mechanical homeostasis:** The proposed maintenance of mechanical variables within viable dynamic ranges. It does not yet imply one fixed set point.
- **Phase:** Position within a temporal cycle, such as breathing or gait—not a fourth spatial dimension.
- **Load-routing regime transition:** A qualitative reorganization of the body's load-path field or network.
- **Gross limb-role projection:** The coarse model in which legs and feet are weighted toward axial support, opening/rotation toward upper–lower coordination, and arms and hands toward expansion. It does not replace the channel-by-channel Six-Division map.
- **Embodied anchor:** A named anatomical or traditional point relationship used to preserve and investigate a direct experiential observation. It is a hypothesis source, not by itself a validated force path.
- **Orthotropic approximation:** An optional constitutive model in which properties are organized around three mutually perpendicular material-symmetry planes or axes. Its usefulness must be established by tissue, region, scale, and mechanical regime; the generalized-mode model does not depend on it.
- **Tall-torus framing:** An exploratory shell/core and paired-track analogy for future whole-system formalization, not a literal anatomical identity.
- **Loop torque:** A signed torque or distributed couple associated with a candidate track. The word “loop” does not yet require a mathematically closed anatomical curve.
- **Reciprocal coupling:** Paired sides organizing in mirrored directions relative to their own anatomy.
- **Synergistic coupling:** Paired sides or tracks acting in the same global direction.
- **Metastable configuration:** A mechanically self-reinforcing organization that persists until a sufficient perturbation or viable transition path becomes available.
- **First-order approximation:** A deliberately simplified model that retains the dominant organization relevant to the question while deferring smaller-scale, higher-order, or context-specific structure.
- **Progressive rigor:** The working rule that precision, evidence, formalism, and review increase with artifact maturity—from exploratory notes, through aligned models and manuscript drafts, to scientific, clinical, and publication audits.
- **Charitable claim normalization:** Reading informal internal language at the weakest reasonable level consistent with context, then replacing it with an explicit outcome and causal scope when preparing manuscript prose.

## 12. Foundational versus later arguments

The foundational medical argument should be able to stand without requiring the reader to accept:

- a unique preferred configuration;
- the TCM coordinate correspondence;
- a breath-driven geometry;
- the diagnostic interpretation of load-path transitions;
- the tall-torus or paired-loop model;
- a whole-body orthotropic approximation;
- or any corrective practice.

The functional hard/soft distinction is part of that foundation, but only in its general mechanical form. Book I may argue that gross structural demand is usually better resolved through capable shape-preserving and force-transmitting routes than by forcing shape-conforming structures to preserve or enforce geometry chronically. It need not establish that posterior always equals hard, anterior always equals soft, Yang always equals hard, or one preferred configuration governs every task.

The preferred-configuration hypothesis should nevertheless be stated directly, probably as a motivating research program:

> The broader project hypothesizes that human anatomy has a preferred body-wide mechanical organization corresponding to coherent downward axial resolution, external or opening rotation, and outward expansion. The foundational argument developed here does not depend on that hypothesis being correct.

In the revised mode language, this means downward axial resolution, external or opening rotational organization, and outward expansive organization. The compact statement remains provisional until configuration, movement, conjugate load, routing, and efficiency are related explicitly.

This avoids both overclaiming and concealment.

The first book can introduce the existence of the higher-specificity research program without adjudicating among all of its possible mathematical representations. The torus, orthotropic, TCM-coordinate, breath, and practice models should be retained in project notes for later development rather than either forced into the foundation or removed from the project.

The existing [book contract](../book/book_contract/book_contract.md#L80) already provides useful epistemic categories and exclusions, but its stronger claims about "correct routing" should now be reconsidered against this separation.

## 13. Settled intentions

For present planning purposes, these appear settled:

- The project concerns whole-system mechanical organization, not merely posture.
- “Load wants to travel through the hard body so that the soft body can remain soft” is a native statement of the project's intended mechanical division of labor.
- Hard and soft are functional, scale- and task-dependent roles rather than fixed tissue classes. Hardness primarily names relative shape preservation; softness primarily names yielding and conformation to surrounding geometry. Soft tissue is not assumed to be unloaded or passive.
- The recoverable meaning of “soft-to-hard” is successful resolution of gross structural demand through capable shape-preserving and force-transmitting pathways, not a universal tissue sequence.
- Load-path substitution and constraint-maintained deformation provide the main vocabulary for cases in which shape-conforming structures become unintended structural boundaries.
- The project is especially interested in extrinsic or configuration-maintained deformation while preserving the distinction from intrinsic or independently persistent narrowing.
- Axial, opening/rotational, and expansive/lateral are the three intended generalized mechanical modes. They are not three interchangeable Cartesian vector components.
- Each mode has Yin and Yang directions.
- The preferred global sign combination is Yang/Yang/Yang.
- Posterior, downward axial resolution, external or opening rotation, and outward expansion are related expressions, not four independent primitives.
- The Six Divisions/channel mapping is the one recorded above; Heart is correctly placed.
- The Six-Division channel map and the gross hand/foot projection describe different scales. In the gross projection, legs and feet are weighted toward axial organization, opening/rotation toward coordination between the lower- and upper-limb systems, and arms and hands toward expansion.
- KI1 (Yongquan)–PC8 (Laogong) coordination is a direct embodied anchor hypothesis connecting the gross axial and expansive systems. Its sidedness, carrier, and measurable meaning remain unresolved.
- “Force line” may preserve an internal and especially Yin sense of mechanical connection as well as an external line of action; it should not be reduced prematurely to one cable or resultant.
- TCM terminology should be translated carefully without being erased.
- The first medical foundation must not depend logically on the preferred-configuration hypothesis.
- The hypothesis should nevertheless be disclosed explicitly.
- Breath, advanced geometry, and practice applications can remain flexible until the mechanical model is clearer.
- Existing manuscripts and generated runs are research material, not the starting manuscript.
- The `new` JSON outlines are the principal pre-synthesis structural archive. Their generated claims remain subordinate to direct authorial intent and evidence, but their architecture must be conserved and reconciled before it is replaced.
- Structural value and claim maturity must be assessed separately; weak or overconfident wording does not by itself justify discarding the question, taxonomy, or explanatory sequence containing it.
- Book I should retain the archive's full progression from integrated living structure, through hard/soft roles and posterior support, into load-path failure, medical interpretation, worked examples, and research implications.
- The old disease catalogue should survive as a two-dimensional internal inventory—mechanical failure family by anatomical or physiological context—even though Book I will use only a small number of worked narratives.
- Orthotropy is a promising optional local constitutive approximation to refine, not a foundational premise, a settled global description of the body, or a derivation of the three generalized modes.
- The tall-torus and paired-loop model is an additional future framing, not a replacement for the generalized-mode model.
- Route, force direction, pressure, respiratory phase, and attention should remain distinguishable in future breath work.
- Higher-specificity hypotheses should be preserved inclusively while first-book decisions are made on the narrower foundational argument.
- Bilateral reference symmetry and skeletal-primary load routing are acceptable first-order assumptions for exploratory modeling. Orthotropy may be introduced regionally when useful rather than assumed globally.
- Informal engineering language in internal notes should be translated according to intent rather than treated as if it were already final scientific prose.
- Claim discipline applies throughout the project, but its strictness and required evidence increase through explicit maturity and audit gates.
- Informal health language should not be escalated into universal, disease-specific, or monocausal claims unless the author explicitly makes that stronger claim.

## 14. Unresolved formal questions

The primary remaining questions are:

1. How should the expansive coordinate be defined by region: outward-normal displacement, width, area, perimeter, a deformation field, or another quantity?
2. What anatomical directors, relative angles, and paired structures define external/opening rotation at the pelvis, rib cage, shoulders, and limbs?
3. When does expansion follow from opening through anatomical coupling, and when can the two modes vary independently?
4. Does a Yang sign qualify configuration `q`, movement `q-dot`, conjugate load `Q`, load-path organization, or a persistent relationship among them?
5. Is the all-Yang condition instantaneous, averaged over time, dominant under gravitational loading, or an attractor around which movement cycles?
6. What whole-system efficiency functional defines preferred organization, and which proposed qualities are terms, constraints, or observable consequences?
7. What observable distinguishes a configuration transition from a large but ordinary movement?
8. How should local frames and bilateral sign conventions be transported along a curved spine and branching limbs?
9. Which measurable predictions would distinguish this model from conventional movement variability and load-capacity accounts?
10. Is posterior participation necessary at every relevant scale, or only for a defined whole-body regime, task class, or load-bearing phase?
11. Does breath merely modulate the configuration, or is phase-coordinated breath necessary to establish it?
12. At what scales and in which tissues or regions is an orthotropic approximation useful, and how do its material axes relate to spatial frames and generalized modes?
13. How, if at all, do paired-track torque states produce the three macroscopic Yin/Yang signs?
14. In the gross limb projection, is rotation an independent upper–lower relative-angle mode, an emergent coupling, or both at different scales?
15. Is KI1–PC8 coordination ipsilateral, contralateral, bilateral, or phase-dependent, and what does the perceived force line correspond to mechanically?
16. Is reciprocal lateral coupling a preferred default, one phase of ordinary movement, or a task-specific strategy?
17. Which aspects of configuration lock-in are adequately described by energy landscapes and metastability, and which might eventually support a stricter topological formulation?
18. How should the intrinsic axial path be represented separately from the gravitational axis?
19. Are breath route, force direction, pressure propagation, internal force-line experience, and directed attention mechanically distinguishable in measurement or only phenomenologically distinguishable?
20. How should hard and soft roles be operationalized at a stated scale—for example through stiffness, compliance, load fraction, shape retention versus conformation, excursion, strain energy, or another quantity?
21. What measurements would distinguish ordinary compliant load sharing from load-path substitution or an adverse mechanical exposure?
22. When a compliant conduit or sliding structure is deformed, how should external constraint, internal pressure, wall stress, strain, contact geometry, excursion, and downstream function be modeled together?

These questions belong to the longer research program. They should be preserved, but they need not all be answered before the first book is rebuilt.

## 15. Recovered source architecture

The first deep audit of the `new` JSON outlines changes the working assessment of the repository. The outlines do not contain a viable manuscript, but they do contain a substantial architecture that the initial synthesis compressed too far.

The structure to preserve is:

- **Section 1:** the integrated body; skeletal and compliant tissue roles; local, regional, and body-wide scales; and six families of mechanical breakdown—geometric change, instability, concentration, discoordination, constraint, and compensation.
- **Section 2:** the hard/soft division of labor; posterior-chain anatomy and mechanics; upright tasks; changing capacity across the lifespan; failure of load transfer; and explicit limits of the model.
- **Section 3:** the mechanism-first medical sequence—common ground, missing framework, causal boundaries, upstream medical relevance, cumulative demand, clinical integration, and research.
- **Section 4:** three-dimensional reasoning, the proposed signed modes, Six Division mapping, bandha hypotheses, competing internal maps, and the tradition-to-mechanics translation problem.
- **Section 5:** the hyoid and related anatomy, breath phase, pressure and volume, cyclic continuity, axis transition, traditional performance phenomena, and a dynamic research program.
- **Section 6:** individualized practice, staged pedagogy, professional translation, ethics, outcome tracking, and public movement literacy.
- **Appendix:** a region-first clinical index that can be crossed with Section 1's mechanism-first taxonomy to create an internal candidate-example matrix.

For Book I, Sections 1–3 should be treated as the main structural inheritance. Generic three-dimensional mechanics from Section 4 also belongs in the foundation. The signed axes, TCM correspondences, detailed breath geometry, bandhas, and protocols remain later-book material, but their internal structures should be retained rather than summarized away.

This recovered architecture is developed in the [source-reconciliation audit](new-json-source-reconciliation.md) and incorporated into the provisional series outline.

## 16. Next work lines

The project is now sufficiently aligned to develop the five-book synthesis while preserving its dependency structure:

1. Harmonize this memo, the series boundary, and Books I–III around the generalized-mode model, whole-system efficiency, mapping scales, force-line vocabulary, and the revised role of orthotropy.
2. Continue polishing Book I as the independently defensible medical foundation and Book II as the preferred-configuration argument, with an explicit seam and no unnecessary recapitulation.
3. Expand Book III from a terse inventory into a narrative outline that distinguishes Six-Division, subtle/internal, gross limb-role, bandha, and embodied-anchor mappings without forcing premature reconciliation.
4. Expand Books IV and V to comparable editorial depth, retaining breath geometry, torus, hyoid, bandha, movement, teaching, and practice candidates at their appropriate maturity levels.
5. Re-read the existing book contract against the developed architecture and revise its purpose, claim stack, scope, and audience where necessary.
6. Build book-specific claim, evidence, measurement, diagram, and provenance maps, including explicit alternatives and survival work for higher-exposure propositions.
7. Populate the mechanism-by-region example matrix and select a small set of Book I worked narratives while retaining the broader research inventory.
8. Maintain the source-coverage ledger, model inventory, practice inventory, and reversible quarantine so that expansion does not silently lose inherited ideas.
9. Audit generated prose only after the corresponding detailed outline or chapter brief exists, salvaging useful language rather than promoting a generated run wholesale.
10. Increase mathematical, historical, scientific, clinical, and practice rigor as each book reaches the gate that requires it; unresolved questions should remain visible rather than halting confident editorial development around them.

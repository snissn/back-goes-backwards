# Onboarding and Project-Model Memo

**Status:** Draft 0.1

**Date:** 2026-07-09

**Purpose:** Establish a shared model of the project before deciding book, chapter, or manuscript structure.

## 1. Purpose and status

This document records the project's present intellectual model before any decisions are made about books, chapters, or surviving manuscript material.

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

The repository should presently be treated as a source archive containing several generations of thought, not as a coherent draft book.

## 2. Provenance hierarchy

Statements in the repository should be interpreted according to their source.

| Source type | Editorial authority | What it establishes |
|---|---:|---|
| Direct formulations from the author | Highest for project intent | What the project is actually trying to articulate |
| Deliberate project-model or scope documents | High but revisable | Guardrails, intended audience, provisional claim boundaries |
| Exploratory research notes | Medium | Models and formulations under consideration |
| External scientific and historical evidence | Independent constraint | What can responsibly be claimed, not what the project intends |
| Visual and engineering analogies | Illustrative | Possible ways to perceive or explain the model |
| Generated outlines and prose | Low | Extrapolations that may contain useful language but do not determine intent |
| Prompt instructions and pipeline artifacts | None as book content | Evidence about how generated material was produced |

This distinction is necessary because the current Part IV outline contains the intended axis groupings in [the axis-based map](../new/inputs/outlines/14-section-04.json#L111), but later in the same file introduces a [competing hand/foot mapping](../new/inputs/outlines/14-section-04.json#L227). Those should not be reconciled as if both were settled authorial claims.

The converter also turns every editorial key and description into manuscript text, which explains much of the contamination in generated material: [json_to_md.py](../new/scripts/json_to_md.py#L12).

## 3. Compact statement of the whole-system model

The human body is a materially embodied, actively regulated biomechanical system. It must continuously receive, distribute, transform, transmit, and dissipate external and internally generated forces.

Mechanical viability does not require one static posture. It requires that forces, moments, pressures, and deformations remain within tolerable, tissue- and context-dependent ranges while the body preserves workable routes of transmission across the whole system.

The foundational medical argument is:

> Clinical reasoning improves when load history, load distribution, and body-wide load routing are considered alongside biological, psychological, and social factors.

A stronger hypothesis motivates the project but is not required to establish that foundation:

> Human anatomy may possess a preferred global organization in which its three principal mechanical modes are coherently oriented in their Yang directions.

That preferred organization is presently expressed as the all-Yang sign combination `(+,+,+)`. It is a research hypothesis, not yet an established biomechanical result.

## 4. The three-dimensional model

The best provisional mathematical analogy is a local cylindrical or curvilinear frame following the body:

- `z`: axial or longitudinal;
- `r`: radial or lateral;
- `theta`: rotational or angular.

Cylindrical coordinates have mutually orthogonal local axial, radial, and circumferential basis directions, although the radial and circumferential directions change with position. [MIT's coordinate-system reference](https://web.mit.edu/6.013_book/www/appendices/app1.html) and the [University of Texas treatment](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node257.html) describe this structure.

That is closer to the intended model than treating axial, lateral, and rotational as three ordinary Cartesian vectors.

### Proposed signed coordinates

| Project dimension | Yang `+` | Yin `-` | Yin channels/division | Yang channels/division |
|---|---|---|---|---|
| Axial `z` | Downward/caudal | Upward/cranial | Heart and Kidney — Shaoyin | Small Intestine and Bladder — Taiyang |
| Rotational `theta` | External/opening | Internal/closing | Lung and Spleen — Taiyin | Large Intestine and Stomach — Yangming |
| Lateral/radial `r` | Outward/external | Inward/internal | Pericardium and Liver — Jueyin | Sanjiao and Gallbladder — Shaoyang |

The repository already states this sequence in older prose: [Yang axial, rotational, and lateral engagement](../14-section-04.md#L200), followed by the [complementary Yin sequence](../14-section-04.md#L206).

The standard channel assignments are Shaoyin Heart/Kidney opposite Taiyang Small Intestine/Bladder; Taiyin Lung/Spleen opposite Yangming Large Intestine/Stomach; and Jueyin Pericardium/Liver opposite Shaoyang Sanjiao/Gallbladder. [This peer-reviewed table lists all twelve assignments](https://pmc.ncbi.nlm.nih.gov/articles/PMC7356495/). Their identification with axial, rotational, and lateral modes is this project's proposed correspondence and must be presented as such.

### Interpretation of the anatomical images

The pelvis image makes the intended "scissors" analogy intelligible: the rotational coordinate describes an opening/closing sense across paired structures.

The pelvic ring should not be described as literally opening through a large scissor-like joint excursion. A safer formulation is:

> The pelvis illustrates a coupled rotational mode in which the hemipelvic, hip, and lower-limb structures can be understood as opening externally or closing internally relative to the body's longitudinal organization.

The vertebral image supports a local frame:

- axial through the spinal column;
- radial outward from the local spinal center;
- circumferential or rotational around that center.

This frame can curve with the spine rather than assuming a single perfectly straight global axis.

## 5. Relationship to stress and strain theory

The theorem being recalled is likely a combination of two related facts:

1. Given two independent orthogonal directions in three-dimensional space, the third orthogonal direction is determined up to sign by their cross product.
2. In classical continuum mechanics, a symmetric Cauchy stress tensor possesses three mutually orthogonal principal directions.

The second result follows from balance of angular momentum and the spectral theorem for real symmetric tensors. [Harvard's *Mechanics of Solids*](https://esag.harvard.edu/rice/163_Ri_Mech_Solids_EB93.pdf) and [MIT structural-mechanics notes](https://ocw.mit.edu/courses/22-314j-structural-mechanics-in-nuclear-power-technology-fall-2006/18f67f439608ed10f14841ad2e034d4e_l4.pdf) give the standard formulation.

These facts do not prove that the proposed anatomical dimensions are principal-stress directions. They give us two useful but distinct frames:

- the proposed anatomical/material frame `(z,r,theta)`;
- the locally measured principal-stress frame derived from the stress tensor.

A promising eventual formal question is whether health, efficiency, or preferred organization corresponds to some coherent relationship between those frames—for example, reduced conflict or shear between anatomical load-bearing directions and principal-stress trajectories.

That is more precise than claiming that the existence of three principal stresses validates the TCM map.

## 6. Preferred global configuration

The model's preferred configuration is provisionally:

```text
s = (s_z, s_theta, s_r) = (+,+,+)
```

or:

- axial Yang: downward;
- rotational Yang: external/opening;
- lateral Yang: outward.

"Posterior loading," "downward/outward routing," and perhaps some forms of anatomical extension are not additional coordinates. They are possible anatomical manifestations or observable consequences of the all-Yang organization.

This also means that "posterior" should not automatically be used as a synonym for Yang. Posterior describes a region; Yang describes a signed direction or organizational tendency in this model.

It remains unresolved whether `(+,+,+)` means:

- every local region has a positive sign simultaneously;
- the dominant body-wide resultant is positive;
- the load-bearing frame has a positive bias even while local movement cycles through both signs;
- or the system returns toward `(+,+,+)` as an attractor after movement.

That distinction will matter greatly. A preferred global organization need not imply that every ordinary Yin-directed movement is mechanically undesirable.

## 7. Working definition of load

"Load" should remain an umbrella term for now, but it cannot ultimately be reduced to a single scalar.

A future formalization should distinguish at least four levels:

- At a body segment or cross-section: a force and moment pair—a mechanical wrench `(F,M)`.
- At tissue scale: stress, strain, strain rate, and their spatial distributions.
- In pressure-bearing systems: pressure and pressure gradients.
- Over time: accumulated magnitude, direction, rate, repetition, variability, duration, and recovery context.

Torque is essential at the segment level. In classical continuum mechanics, a resultant moment can often be derived from the distribution of stresses across a section, but it remains indispensable for reasoning about joints, limbs, and coupled rotational behavior.

Metabolic cost is not itself mechanical load, although it may be an important consequence, constraint, or measurement of how the body manages load.

## 8. Configuration and configuration transitions

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

## 9. Controlled vocabulary

- **Axial:** Along the local longitudinal organization of the body or structure.
- **Lateral/radial:** Away from or toward the local central axis. This remains provisional pending clarification of "tangent."
- **Rotational/angular:** Opening or closing around a local axis; not simply generic spinal twisting.
- **Yang:** The positive direction assigned to each model coordinate.
- **Yin:** The negative direction assigned to each model coordinate.
- **Preferred configuration:** The hypothesized coherent all-Yang organization, not necessarily a static pose.
- **Load path:** A modeled route by which forces and moments are transmitted.
- **Routing:** The distribution of mechanical demand among available paths and tissues.
- **Posterior loading:** Greater load carriage by posterior structures; an anatomical observation, not a primitive coordinate.
- **Extension:** A conventional anatomical movement. It may correlate with Yang organization but is not identical to it.
- **Hard/soft:** A TCM-derived functional polarity, not a literal tissue classification. "Hard" may describe shape-preserving or force-transmitting roles, including tendons; "soft" may describe compliant, containing, buffering, deformable, or pressure-bearing roles. A tissue may perform both.
- **Mechanical homeostasis:** The proposed maintenance of mechanical variables within viable dynamic ranges. It does not yet imply one fixed set point.
- **Phase:** Position within a temporal cycle, such as breathing or gait—not a fourth spatial dimension.
- **Load-routing regime transition:** A qualitative reorganization of the body's load-path field or network.

## 10. Foundational versus later arguments

The foundational medical argument should be able to stand without requiring the reader to accept:

- a unique preferred configuration;
- the TCM coordinate correspondence;
- a breath-driven geometry;
- the diagnostic interpretation of load-path transitions;
- or any corrective practice.

The preferred-configuration hypothesis should nevertheless be stated directly, probably as a motivating research program:

> The broader project hypothesizes that human anatomy has a preferred body-wide mechanical organization corresponding to coherent downward, outward, and externally rotational routing. The foundational argument developed here does not depend on that hypothesis being correct.

This avoids both overclaiming and concealment.

The existing [book contract](../book/book_contract/book_contract.md#L80) already provides useful epistemic categories and exclusions, but its stronger claims about "correct routing" should now be reconsidered against this separation.

## 11. Settled intentions

For present planning purposes, these appear settled:

- The project concerns whole-system mechanical organization, not merely posture.
- Axial, rotational, and lateral are the three intended dimensions or modes.
- Each dimension has Yin and Yang directions.
- The preferred global sign combination is Yang/Yang/Yang.
- Posterior, downward, outward, and external rotation are related expressions, not four or five independent primitives.
- The Six Divisions/channel mapping is the one recorded above; Heart is correctly placed.
- TCM terminology should be translated carefully without being erased.
- The first medical foundation must not depend logically on the preferred-configuration hypothesis.
- The hypothesis should nevertheless be disclosed explicitly.
- Breath, advanced geometry, and practice applications can remain flexible until the mechanical model is clearer.
- Existing manuscripts and generated runs are research material, not the starting manuscript.

## 12. Unresolved formal questions

The primary remaining questions are:

1. Is "lateral" precisely radial—away from and toward a local central axis—or does "tangent to the bone" indicate a different direction?
2. What anatomical axis and coupled structures define external/opening rotation at the pelvis?
3. Is the all-Yang condition instantaneous, averaged over time, dominant under gravitational loading, or an attractor around which movement cycles?
4. Is the preferred configuration defined by anatomy, displacement, strain, stress, principal-stress alignment, load-path connectivity, or some combination?
5. What observable distinguishes a configuration transition from a large but ordinary movement?
6. How should local frames be transported along a curved spine and branching limbs?
7. Which measurable predictions would distinguish this model from conventional movement variability and load-capacity accounts?
8. Does breath merely modulate the configuration, or is phase-coordinated breath necessary to establish it?

## 13. Next work lines

Before discussing books or chapters:

1. Correct and approve this project-model memo.
2. Build a provenance ledger for the repository's major formulations.
3. Draw one canonical diagram of the local axial-radial-rotational frame using the pelvis and vertebra.
4. Write a short mathematical note separating configuration, load, stress, torque, routing, and transition.
5. Define the minimum observable or falsifiable consequences of the all-Yang hypothesis.
6. Only then decide what portion belongs in the foundational medical book and what belongs to later works.

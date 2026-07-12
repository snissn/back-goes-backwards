# Chapter 4 — Three-dimensional configuration and load paths

The object has left the table and is moving toward a shelf. Its weight acts toward the floor. The hands contact it at separated surfaces. The person changes the object's speed and direction while remaining supported through the feet. This is still the ordinary, non-prescriptive transfer used throughout Part I, but it now exposes a problem that a list of mechanical quantities cannot solve by itself: where, and through what arrangement, is the demand being carried?

From across the room, the event may look like a single object moving upward and forward. At the hands, it is a changing contact problem. At an elbow, it includes forces and moments expressed relative to the forearm or upper arm. Along a curved tendon, the useful directions may follow and cross the tissue rather than the walls of the room. Inside a joint, the relevant description may be a distributed contact stress rather than one visible line. All of these descriptions can concern the same event without being interchangeable.

Chapter 3 gave us two relative mechanical roles. Some relations are comparatively shape-preserving and path-establishing; others are comparatively form-receiving and shape-conforming. Roles alone, however, do not locate anything. To turn them into a mechanical account, we need to state the system boundary, describe its three-dimensional configuration, choose one or more reference frames, identify contacts and constraints, and say what quantity a proposed path carries.

That requirement is more than technical housekeeping. A direction that is obvious in the room may not be the direction that matters at a joint or along a tissue. A posture that looks unchanged may conceal a different distribution of active force or pressure. A line that correctly represents an external resultant may say little about the several internal carriers that balance it. Conversely, a full three-dimensional model can add detail without improving the answer if the omitted dimension was never consequential.

The aim of this chapter is therefore disciplined description, not maximal complexity. We will ask when a plane is enough, when it is not, what belongs in a configuration, how load paths can branch or change, and how four different kinds of three-direction description can be kept separate. The result is a spatial grammar for the rest of the book. It does not yet identify one preferred organization of the body.

## One transfer, several descriptions

Begin with the object alone. Draw a boundary around it during the carrying phase. Gravity acts on its mass, the hands exert contact forces and perhaps contact moments, and its changing motion determines the balance those external interactions must satisfy. This is a free-body description. It can be expressed in a room-fixed frame whose vertical axis follows gravity, in an object-fixed frame that turns with the object, or in another declared basis suited to the task. The physical interactions do not change merely because their components are written in a different basis.[^04-01]

Now move the boundary. Include the hands and forearms with the object. The hand–object forces that were external to the object-only system become internal interactions within the enlarged system. Forces at the elbows and the same gravitational and inertial accounting enter the new boundary problem. Enlarge it again to include the whole person, and the contacts with the floor become especially important. This is not another view of the same free body. It is a different free body, with a different boundary and a different set of external interactions.

The distinction is basic:

- a **change of frame** changes the coordinates used to describe a physical quantity; and
- a **change of boundary** changes which interactions count as external and which remain internal to the selected system.

Confusing them creates false disagreements. Two analysts may report different numerical components because one uses the room and the other the forearm as a basis. Their vectors can still represent the same physical interaction. Or they may draw identical-looking arrows while analyzing different boundaries, in which case the arrows do different mechanical jobs.

Time supplies another difference. During a quiet hold, the object's acceleration may be small even though the hands continue to support it. During departure from the table or arrival at the shelf, acceleration and changing contact alter the balance. A single still image does not identify those phases. The useful description must therefore name not only the boundary and frame but also the time or task phase to which it applies.

> **Figure 4.1 — One event, several frames and boundaries [text-native first-draft figure]**
>
> ```text
> ROOM / TASK FRAME                 OBJECT FRAME
> vertical follows gravity         axes turn with the object
>          ↑ z                              ↑ z_o
>          |                                |____ x_o
>       [object]  → x                    [object]
>        /     \
>     hand     hand
>
> OBJECT-ONLY BOUNDARY              OBJECT + ARMS BOUNDARY
> hand contacts are external        hand contacts are internal
> gravity is external               elbow interactions are external
>
> LOCAL CURVED FRAME ALONG A CARRIER
> tangent follows the selected centerline;
> transverse directions must be constructed and declared
> ```
>
> **Caption.** A change of basis re-expresses the same physical quantity, while a change of system boundary changes the free-body problem. A local moving frame can follow a curved structure, but its transverse directions are modeling choices rather than hidden anatomical facts.
>
> **Text alternative.** The diagram compares a room frame, an object-fixed frame, two different system boundaries, and a local frame along a curved carrier. It emphasizes that coordinates may change without changing the physical vector, whereas enlarging the boundary changes which contacts are external.

The same discipline applies to every later use of *load path*. Before asking where a path goes, we must know which system is under study, which interaction starts the accounting, which support or boundary completes it, which phase is being represented, and which frame makes the stated direction meaningful.

## Frames are chosen, not discovered

A reference frame gives an origin and a set of directions from which positions, orientations, vectors, and tensor components can be reported. Biomechanics commonly uses standardized segment and joint coordinate systems so that measurements can be compared, but even a standard remains a declared convention. Reporting recommendations exist precisely because apparently simple words such as flexion, rotation, force, and moment can become ambiguous when the segment, origin, axes, sign, or expression frame is left unstated.[^04-02]

Different questions favor different frames. A room or task frame is useful for gravity, a shelf, a floor, or the motion of the carried object. A segment frame can follow the forearm or pelvis. A joint or surface frame can describe contact relative to an articular geometry. A tissue frame can follow fibers, a centerline, or a local material direction. None is universally primary. The best choice is the one that makes the relevant boundary conditions and comparison inspectable without hiding important components.

Suppose a force vector is resolved into three room-fixed components. If the analyst rotates the basis, the component values change according to the transformation between frames, while the geometric vector does not. The same is true of a moment, although the point about which the moment is taken must also be stated. Stress and strain require tensor transformations rather than the transformation for a single vector. Carrying a familiar axis label from one kind of object to another does not carry the transformation law with it.

Local frames become more delicate when a structure curves. A centerline supplies a tangent direction at each regular point, but it does not automatically supply two unique transverse directions. The classical tangent–normal–binormal frame can become undefined where curvature vanishes and can rotate abruptly in ways that are unhelpful for some applications. A rotation-minimizing or Bishop frame offers another construction, but it too requires an initial orientation and an explicit transport rule.[^04-03] The lesson is not that one construction is correct for every tissue. It is that a moving frame must be built and documented.

Cylindrical language can be useful around a clear axis. An axial direction can run along that axis, a radial direction can point away from it, and a circumferential direction can be tangent to circles around it. But bodies and tissues are not globally cylindrical. The outward normal of a local surface need not point radially from the spine or from any other chosen axis. A direction tangent to a bone surface need not be circumferential around the body. *Outward*, *radial*, *normal*, *lateral*, and *transverse* therefore cannot be substituted for one another without a defined geometry.

This matters for the series' later coordinate work. Book II will investigate axial, opening or rotational, and expansive organization as a candidate whole-system model. Chapter 4 does not assign signs, preferred directions, or traditional correspondences to those modes. It establishes what that later model will owe the reader: a declared frame, a measurable coordinate for each mode, transformation rules between local and global descriptions, and an explanation of where the chosen coordinates cease to be useful.

## When a planar model is enough

Three-dimensional reality does not require every useful model to be three-dimensional. The familiar sagittal, frontal, and transverse planes provide useful views and starting conventions, provided that the analyst states which physical terms have been projected or omitted. A side-view free-body diagram may answer a sagittal-plane question cleanly. A cross-section may isolate a pressure or contact problem. A planar linkage may reveal how a moment arm changes. Reducing dimension is often good modeling because it removes variables that do not materially affect the conclusion.

The reduction becomes a problem when the omitted direction contains an interaction on which the conclusion depends. An apparently sagittal object transfer may include asymmetric hand contacts, lateral displacement, axial rotation, or a support reaction outside the chosen plane. A transverse section may conceal an important change along the length of a structure. A planar joint model may reproduce the visible motion while missing a substantial out-of-plane moment or contact shift.

A practical planar-reduction test has four steps:

1. **Declare the plane and frame.** State the origin, axes, system boundary, phase, and quantity being modeled.
2. **Inspect the omitted terms.** Ask what out-of-plane forces, moments, contacts, displacements, rotations, or gradients are assumed negligible, constrained, or symmetric.
3. **Bound or compare them.** Use measurement, sensitivity analysis, a three-dimensional subset, or a defensible symmetry argument to estimate whether the omitted terms could change the result.
4. **Withdraw the reduction when necessary.** If a plausible omitted term changes the sign, ranking, route, or interpretation that matters, the planar model is not adequate for that question.

This test does not require every small component to be zero. It requires the simplifying assumption to be visible and proportionate to the claim. A planar description that predicts an external resultant within a declared tolerance may be adequate even if it does not recover every internal stress. The same description would be inadequate if used to assert that no meaningful out-of-plane carrier exists.

Dimensional sufficiency is thus claim-specific. “Two dimensions are enough” and “the body is three-dimensional” are both incomplete sentences. Enough for what quantity, at what scale, during which phase, and within what tolerance? The answer determines whether added dimensions clarify the problem or merely decorate it.

## Configuration is more than posture

Geometry changes mechanics before any tissue property is changed. If a force **F** acts at a position **r** measured from a point *O*, its moment about that point is

\[
\mathbf{M}_O = \mathbf{r} \times \mathbf{F}.
\]

Here **M** is the moment about *O*, **r** runs from *O* to the force's line of application, and **F** is the force, all expressed in a common declared frame. In SI units, force is measured in newtons, position in metres, and moment in newton metres. The relation's job here is narrow: it shows that changing the relative position or direction of the same force can change the moment it produces.[^04-04]

In the object transfer, moving the object farther from an elbow can change the moment about that elbow even if the object's weight is unchanged. Separating or shifting the hand contacts can change the moments applied to the object. Changing a joint angle can alter moment arms, contact geometry, muscle lengths, and the set of structures positioned to contribute. Geometry is not an ornamental description laid over the forces; it helps determine the mechanical problem they form.

Compare two transfers of the same object to the same shelf. In one, the object remains near the body and both hands maintain separated contacts; in another, it travels farther from the body or laterally while the contacts are rearranged. Either configuration may be viable. They need not produce the same moments, contact resultants, or candidate internal distributions, and this chapter does not rank them.

Yet visible geometry is not the whole configuration. For this book, a **configuration** is the minimum declared arrangement and state needed to determine the interactions and available changes relevant to a question. Depending on the question, that record can include:

- the geometry and orientation of selected bodies or regions;
- contacts, supports, attachments, and constraints;
- active forces, preloads, pressures, and external devices;
- material state, including history or rate dependence where relevant;
- stress, strain, deformation, or flow fields when those are the objects of study;
- the motions or deformations currently available; and
- the reference phase, measurement method, and provenance of each entry.

This is an accounting record, not a proposed universal state vector for the human body. A simple rigid-body question may require only geometry, mass properties, contacts, and motion. A tissue question may need direction-dependent constitutive behavior, pressure, activation, or time history. Configuration expands only as the claim requires.

The distinction from posture is especially important. Posture usually names an observed arrangement of body segments at an instant or over an interval. Two people can present a similar observed posture while differing in muscle activation, contact force, pressure, fatigue, tissue properties, or recent loading history. One person can reproduce a similar silhouette through a different combination of internal actions. Conversely, visibly different postures can satisfy the same external task through different configurations. Observation constrains the candidate models; it does not uniquely reveal the internal distribution.[^04-05]

Mass distribution adds another configuration-dependent term. Resistance to angular acceleration is represented by a moment of inertia or, in three dimensions, an inertia tensor defined for a selected body, point, and frame. Moving the object or a body segment changes the mass distribution relative to a joint or other reference point. It is not valid to treat “inertia” as a generic internal tension or to use one scalar rotational equation without checking whether the body, axis, and frame support that simplification.[^04-06]

> **Figure 4.2 — From observed transfer to candidate internal paths [text-native first-draft figure]**
>
> ```text
> OBSERVED AND MEASURED
> object motion + segment geometry + named contacts
>                    |
>                    v
> CONFIGURATION RECORD
> boundary + frames + phase + constraints + active state
> + pressure/material history where the question requires them
>                    |
>                    v
> EXTERNAL BALANCE
> measured and calculated resultants and moments
>                    |
>          does not uniquely determine
>                    v
> CANDIDATE INTERNAL MODELS
> skeletal contact | muscle/tendon | ligament/fascia
> pressure | sliding interfaces | external support
>                    |
>                    v
> DISCRIMINATING OBSERVATIONS
> force, motion, pressure, deformation, activation, or sensitivity
> ```
>
> **Caption.** An observed posture and external balance constrain internal models but do not uniquely select one. A configuration record makes assumptions visible, and additional measurements or model comparisons can discriminate among candidate carriers.
>
> **Text alternative.** A vertical flow starts with observed object motion, segment geometry, and contacts; adds the boundary, frames, phase, constraints, active state, and any needed pressure or material history; computes an external balance; then branches into several candidate internal carrier models. The final step lists observations that could distinguish those models.

A configuration claim becomes useful when it predicts a difference. If changing a contact, orientation, activation state, pressure, or support is proposed to reroute demand, the model should state which measured force, deformation, pressure, movement, or sensitivity is expected to change. Without such a comparison, configuration can become a long description that explains every outcome after it occurs.

## Load paths can branch and change

A line of action is a geometric property of a force: the line through its point of application in the force's direction. It is valuable in a free-body diagram because it helps determine moments. An internal load path is a different construct. It proposes how a declared mechanical demand is carried through named structures, contacts, or fields between selected boundaries. A correct external line of action does not establish a unique internal route.

The object illustrates the difference. Its weight has a line of action through its center of mass in the gravitational direction. While the object is held, two hands may share contact, and each contact may include distributed pressure, friction, and a resultant. Within the person, muscle forces, tendon tensions, joint contacts, ligament or fascial contributions, pressure-supported regions, sliding interfaces, and external supports may participate as carriers or contacts. Segment mass and acceleration remain part of the dynamic balance, but inertia is not an anatomical carrier. External balance constrains the combined effect; it rarely identifies every contribution uniquely.

Calling a proposed route a **multicarrier load path** means that the representation permits parallel and serial contributions from more than one kind of carrier. It does not mean that all possible tissues are substantially active in every event. Each retained carrier should earn its place through anatomy, measurement, calculation, or a clearly labeled hypothesis. A model that names everything explains nothing unless it also states how contributions could be compared or excluded.

Different representations serve different path questions:

- A **line of action** can represent a defined force; a **force-and-moment resultant** can summarize a more general interaction at a boundary.
- A **graph** can name structures or regions as nodes and their interactions as edges.
- A **field** can represent distributed stress, strain, deformation, pressure, or velocity through a region.
- A **time-varying network** can show routes appearing, disappearing, or changing share as contacts, configuration, and activation change.

These representations are not successive levels of truth. A line may be sufficient for an external balance while a field is needed for a local tissue question. A graph can preserve anatomical branching that a single line hides, but it may still omit the distribution within each node. The model should be no richer than the inference it has to support.

A defensible path statement therefore names the system boundary, mechanical quantity and unit, frame, scale, phase, proposed carriers, and status of the supporting evidence. It should satisfy the relevant balance laws, show plausible alternative routes, and state which measurements or sensitivity tests could change the proposed distribution.

Chapter 3's hard/soft polarity enters here as a description of roles within paths. That polarity is **motivated by** traditional Chinese medicine's hard/soft and Yin/Yang concepts, while Book I's mechanical translation remains deliberately non-identical to the traditional categories. A comparatively shape-preserving relation may establish or resolve part of a path; a comparatively form-receiving structure may conform, slide, contain, expand, or otherwise change while carrying substantial demand. Role and path are not synonyms. The same path can include both roles, and the same structure can change roles with direction, phase, or scale.

The project's phrase **force line** can also be retained if its level is stated. In a free-body diagram, it can refer to a force's line of action. In an embodied or anatomical hypothesis, it may refer to a felt or proposed internal connection across several structures. The second sense is potentially useful, especially for later questions about internal coordination, but it is not converted into a measured force vector by being drawn as a line. It must be translated into candidate carriers, boundaries, directions, and observables before it can function as a mechanical explanation.

Load paths can fail to remain simple even in ordinary tasks. When the object leaves the table, a support path through the table disappears and the hands assume the full external interaction. If one hand releases, the remaining contact and the object's configuration change. If the shelf accepts part of the weight, another branch appears. Internal contributions can change without any dramatic visible posture change as activation, pressure, fatigue, or contact distribution evolves. A path is therefore a phase-bound model of transmission and support, not a permanent cable hidden in the body.

This is also where later accounts of load mismanagement will begin. A mechanically intelligible adverse condition need not be described merely as “less space.” The relevant question may be what maintained geometry, contact, or constraint is imposing deformation or pressure on a form-receiving structure, how that changes the structure's internal state or function, and which shape-preserving relation is carrying or redirecting the demand. Book I does not turn that narrative into a diagnosis or universal causal chain. It establishes the vocabulary needed to investigate it without reducing every consequence to visible posture or local narrowing.

## Four descriptions that happen to use three directions

The series contains several three-part descriptions. They can illuminate one another, but the shared number three does not make them the same coordinate system. Four distinctions are especially important: spatial frames, generalized modes, material-symmetry frames, and principal-stress directions.

> **Figure 4.3 — Four different three-direction descriptions [text-native first-draft figure]**
>
> | Description | What its directions describe | How they are determined | State dependence | What cannot be inferred from the number three |
> |---|---|---|---|---|
> | Spatial frame | Components of position, force, moment, motion, or tensors | Declared origin and basis; global, segmental, surface, or local | May be fixed or move by a declared rule | No preferred direction, tissue property, or mode follows automatically |
> | Generalized coordinates and loads | Selected independent or coupled changes, such as axial displacement, opening angle, or expansive measure | Model definition plus units, signs, constraints, and virtual-work pairing | Depends on configuration and chosen model | A circumferential tangent is not itself an opening mode or moment |
> | Material-symmetry frame | Directions used in a constitutive approximation for a specified material or region | Experiment, microstructure, anatomy, or fitted constitutive model | Depends on tissue, region, scale, state, and model purpose | Local orthotropy does not make the whole body one orthotropic solid |
> | Principal-stress frame | Directions in which the current stress tensor has no shear components | Eigenvectors of the stress tensor at a point | Changes with the stress state; may be non-unique | Principal directions are not permanent anatomical channels or force lines |
>
> **Caption.** Each row can contain three directions, but the mathematical object, units, construction, and dependence differ. Any proposed correspondence must supply transformations and predictions rather than rely on a shared count.
>
> **Text alternative.** A five-column table compares spatial frames, generalized modes, material-symmetry frames, and principal-stress frames. It states what each describes, how its directions are chosen, whether they change with state, and why three directions in one row do not prove equivalence with three directions in another.

### Spatial frames

A spatial frame supplies a basis and origin. Force components may be expressed left–right, forward–back, and up–down in the room; relative to a bone; or along and across a local surface. The axes answer *where and in what direction?* They do not by themselves answer what kind of change is permitted, how a material responds, or which direction a current stress state selects.

### Generalized modes

A generalized coordinate is a chosen variable that describes a permitted or modeled change. Its conjugate generalized load is defined through the work associated with an infinitesimal change in that coordinate. Translation pairs with force, angle with moment, and a volume-like measure can pair with pressure, but more complex coordinates require their own dimensional accounting.[^04-07]

This is the most promising home for the series' axial, opening or rotational, and expansive language. An axial coordinate might be a length or displacement along a declared axis. An opening coordinate might be an angle between selected segments or surfaces, with a corresponding moment. An expansive coordinate might be a width, perimeter, cross-sectional area, volume, or surface-normal displacement. These are not interchangeable. Their units differ, and a change in one may contribute to but cannot simply be renamed as a change in another.

The rib cage makes the distinction concrete. Rib rotations at the costovertebral joints can contribute to three-dimensional changes in thoracic dimensions and volume, but a rib angle, a transverse width, an anteroposterior dimension, and a volume are distinct observables.[^04-08] Calling the whole event “expansion” may be adequate in ordinary prose. A model must state which measure is meant and how the other changes are coupled to it.

The pelvis requires even more care. A scissors analogy can represent a relative angular relation or a composite change among pelvic structures. It should not suggest that the intact sacroiliac joints undergo a large literal opening. Coordinate choices alter how their small, coupled translations and rotations are reported, and available cadaveric measurements under physiological loading are on sub-degree and sub-millimetre scales.[^04-09] The analogy can survive as a mode hypothesis if its hinge, segments, coordinate, expected magnitude, and observation are declared.

The distinction between a direction and a mode is crucial. A circumferential tangent around an axis is a spatial direction. Opening is a change in an angle and is paired mechanically with a moment. Expansion is a change in a length, area, perimeter, volume, or other declared measure and has a corresponding generalized load. A rib may move partly along a circumferential direction while contributing to an expansive change, but that does not make circumferential direction, rotation, and expansion three names for one object.

### Material-symmetry frames

A constitutive model describes how a selected material relates quantities such as stress and strain under stated conditions. An isotropic model treats material response as direction-independent. An orthotropic elastic approximation assigns three mutually orthogonal material-symmetry directions and different response parameters along and between them. That structure can be valuable when a tissue or engineered material has an appropriate directional organization.[^04-10]

Orthotropy is therefore available to this project as a local constitutive approximation, not as a premise that the entire body is one orthotropic material. Cortical bone, cartilage, myocardium, and other tissues can show direction-dependent behavior, but their useful material frames, symmetries, nonlinearities, active properties, and scales differ.[^04-11] Bilateral body organization and the practical usefulness of three spatial directions do not by themselves derive three orthogonal material-symmetry planes for a whole-body model.

This demotion is constructive. If a later calculation concerns a region whose response is reasonably approximated as orthotropic, the model can state the region, tissue, scale, state, axes, parameters, and validation range. If the purpose is instead to describe whole-body geometry or a coordinated mode, spatial or generalized coordinates may be the more honest objects. The project does not have to make one mathematical structure perform all three jobs.

### Principal-stress directions

At a point in a continuum, the stress state can be represented by a tensor. Its principal directions are directions in which the traction has no shear component; mathematically, they are eigenvector directions of the current stress tensor. They change when the stress state changes. When principal stresses are repeated, the corresponding directions may not be unique.[^04-12]

Principal directions can reveal locally important patterns. They do not automatically follow a visible anatomical axis, a material-symmetry direction, or a proposed internal force line. Under particular conditions those directions may align, but the alignment is a result to establish, not a definition. A material frame describes a constitutive approximation; a principal frame describes a current state. One may remain anatomically anchored while the other rotates as loading changes.

Keeping the four descriptions separate does not prevent a future synthesis. It makes one possible. Book II can propose generalized coordinates, relate them to local and global spatial frames, select constitutive assumptions where needed, and predict how stress or other observables change. It can also investigate the stronger possibility that some coordination is more mechanically efficient or more reliably organizes demand than alternatives. None of those later steps is required for Book I's argument that configuration and multicarrier load paths improve mechanical reasoning. The foundational claim remains standing even if a proposed correspondence or preference is revised.

## From spatial organization to anatomy

We can now describe the object transfer without pretending that one picture contains the whole event. A declared boundary identifies external interactions. A declared frame locates their components. A configuration record adds the contacts, constraints, active state, pressure, material history, and available changes that the question requires. A planar model is accepted or rejected according to the terms it omits. A load-path model names its quantity and carriers, allows branches and phase changes, and separates an external line of action from internal distribution.

We can also keep several uses of three directions in productive tension. Spatial axes locate components. Generalized coordinates describe selected changes. Material frames organize a constitutive approximation. Principal directions describe a current stress state. Their correspondences remain hypotheses until transformations, units, observations, and discriminating predictions are supplied.

What remains is to place these abstractions into actual anatomy. Which structures and systems establish, guide, tension, cushion, contain, pressurize, and change these paths in an actual living body? Chapter 5 begins with the skeleton and joints, while Chapter 6 adds the active, tensile, compliant, sliding, and pressure-bearing systems that make skeletal possibilities function.

## Notes

[^04-01]: Kevin M. Lynch and Frank C. Park, [*Modern Robotics: Mechanics, Planning, and Control*](https://doi.org/10.1017/9781316661239) (Cambridge: Cambridge University Press, 2017). The frame and rigid-body treatment supports the distinction between a physical geometric quantity and its coordinate representation. It does not prescribe one anatomical frame for the body.

[^04-02]: Ge Wu et al., [“ISB Recommendation on Definitions of Joint Coordinate Systems of Various Joints for the Reporting of Human Joint Motion—Part II: Shoulder, Elbow, Wrist and Hand,”](https://doi.org/10.1016/j.jbiomech.2004.05.042) *Journal of Biomechanics* 38, no. 5 (2005): 981–992; Timothy R. Derrick et al., [“ISB Recommendations on the Reporting of Intersegmental Forces and Moments During Human Motion Analysis,”](https://doi.org/10.1016/j.jbiomech.2019.109533) *Journal of Biomechanics* 99 (2020): 109533. These recommendations support explicit segment, joint, force, moment, frame, point, and reporting conventions. They do not establish the project's later coordinate mapping.

[^04-03]: Richard L. Bishop, [“There Is More Than One Way to Frame a Curve,”](https://doi.org/10.1080/00029890.1975.11993807) *American Mathematical Monthly* 82, no. 3 (1975): 246–251. Bishop shows why a relatively parallel adapted frame can remain useful where the classical Frenet construction is unavailable or undesirable. Application to a biological centerline still requires a declared curve and initial orientation.

[^04-04]: Lynch and Park, [*Modern Robotics*](https://doi.org/10.1017/9781316661239). The cited relation is ordinary rigid-body statics and dynamics. In deformable tissues and distributed contacts, a resultant moment is an aggregate boundary description rather than a complete internal field.

[^04-05]: Ahmet Erdemir, Scott McLean, Walter Herzog, and Antonie J. van den Bogert, [“Model-Based Estimation of Muscle Forces Exerted During Movements,”](https://doi.org/10.1016/j.clinbiomech.2006.09.005) *Clinical Biomechanics* 22, no. 2 (2007): 131–154; Jennifer L. Hicks et al., [“Is My Model Good Enough? Best Practices for Verification and Validation of Musculoskeletal Models and Simulations of Movement,”](https://doi.org/10.1115/1.4029304) *Journal of Biomechanical Engineering* 137, no. 2 (2015): 020905. These reviews support the underdetermination and model dependence of internal musculoskeletal-force estimates and the need for verification, validation, and sensitivity analysis. They do not imply that internal forces are unknowable.

[^04-06]: Massachusetts Institute of Technology OpenCourseWare, [“3D Rigid Body Dynamics: The Inertia Tensor,”](https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/resources/mit16_07f09_lec26/) lecture 26, 16.07 Dynamics, Fall 2009. The lecture supports point-, axis-, frame-, and mass-distribution dependence of rotational inertia. It is an engineering teaching source, not evidence for a biological tissue route.

[^04-07]: Massachusetts Institute of Technology OpenCourseWare, [“Generalized Forces with Double Pendulum Example,”](https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/359081aa42b42d21425785fa151c89f6_MIT2_003SCF11_rec9notes1.pdf) recitation 9 notes, 2.003SC Engineering Dynamics, Fall 2011. The virtual-work formulation supports pairing a generalized coordinate with its conjugate generalized force. The axial, opening, and expansive variables proposed here remain project definitions requiring later formalization.

[^04-08]: Benoît Beyer et al., [“In Vivo Thorax 3D Modelling from Costovertebral Joint Complex Kinematics,”](https://doi.org/10.1016/j.clinbiomech.2014.01.007) *Clinical Biomechanics* 29, no. 4 (2014): 434–438; T. Kondo et al., [“A Dynamic Analysis of Chest Wall Motions with MRI in Healthy Young Subjects,”](https://doi.org/10.1046/j.1440-1843.2000.00221.x) *Respirology* 5, no. 1 (2000): 19–25. These studies support treating rib motion and thoracic dimensional change as coupled three-dimensional observations. They do not validate one universal breathing geometry or preferred direction.

[^04-09]: Liesbeth Van Hauwermeiren et al., [“Joint Coordinate System for Biomechanical Analysis of the Sacroiliac Joint,”](https://doi.org/10.1002/jor.24271) *Journal of Orthopaedic Research* 37, no. 5 (2019): 1101–1109; Niels Hammer et al., [“Physiological In Vitro Sacroiliac Joint Motion: A Study on Three-Dimensional Posterior Pelvic Ring Kinematics,”](https://doi.org/10.1111/joa.12924) *Journal of Anatomy* 234, no. 3 (2019): 346–358. These sources support explicit pelvic coordinate conventions and small, coupled sacroiliac motions under the reported conditions. The cadaveric results do not define movement in every living task or eliminate composite motion elsewhere in the pelvic ring.

[^04-10]: Michael P. Nemeth, [*An In-Depth Tutorial on Constitutive Equations for Elastic Anisotropic Materials*](https://ntrs.nasa.gov/citations/20110023650), NASA/TM-2011-217314 (2011). This engineering tutorial supports the definition and constitutive structure of orthotropic linear elasticity. It does not establish that a biological region, much less the whole body, satisfies those assumptions.

[^04-11]: Alejandro A. Espinoza Orías et al., [“Anatomic Variation in the Elastic Anisotropy of Cortical Bone Tissue in the Human Femur,”](https://doi.org/10.1016/j.jmbbm.2008.08.005) *Journal of the Mechanical Behavior of Biomedical Materials* 2, no. 3 (2009): 255–263; Christopher C.-B. Wang et al., [“Optical Determination of Anisotropic Material Properties of Bovine Articular Cartilage in Compression,”](https://doi.org/10.1016/S0021-9290%2802%2900417-7) *Journal of Biomechanics* 36, no. 3 (2003): 339–353; Gerhard A. Holzapfel and Ray W. Ogden, [“Constitutive Modelling of Passive Myocardium: A Structurally Based Framework for Material Characterization,”](https://doi.org/10.1098/rsta.2009.0091) *Philosophical Transactions of the Royal Society A* 367, no. 1902 (2009): 3445–3475. These examples support local, tissue- and model-specific direction dependence. They do not supply a common whole-body material frame.

[^04-12]: Morton E. Gurtin, Eliot Fried, and Lallit Anand, [*The Mechanics and Thermodynamics of Continua*](https://doi.org/10.1017/CBO9780511762956) (Cambridge: Cambridge University Press, 2010). The continuum treatment supports the definition and state dependence of principal stresses and directions, including non-uniqueness under repeated eigenvalues. It does not identify principal directions with fixed anatomical or traditional pathways.

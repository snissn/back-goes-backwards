# Chapter 2 — A working language of load

Place an ordinary object on a table, lift it, carry it across a room, and set it down somewhere else. Nothing about the task seems mysterious. The object has weight. The hands support it. The feet meet the floor. Muscles work, joints turn, and tissues change shape. We can reasonably say that the body is *under load*.

That sentence is useful, but it is not yet precise. The object's weight is a force. Holding it farther from the trunk changes a moment. Contact between hand and object is distributed over an area. A joint may be represented by a resultant force and moment, while the contact within it has a pressure distribution. A tendon can develop internal stress and change length. Repeating the task creates a history that no single peak value describes. These quantities are related, but they are not interchangeable. They do not even have the same units.[^02-01]

The word *load* will remain useful throughout this book. We will use it as an umbrella for mechanical demand when the exact internal quantity is not yet known or does not yet matter. Whenever an argument bears weight, however, the umbrella must open. We must ask what kind of demand is present, where it acts, how it is distributed, what changes through time, and what has actually been observed rather than calculated, modeled, or inferred.

The first question is simpler still: what system are we talking about?

## Choose the system before describing the force

Imagine the object halfway between the two tables. If the system includes both person and object, the forces exchanged between the hands and the object are internal interactions. They do not cross the chosen boundary. Gravity acts on the combined system, the floor acts through the feet, and the surrounding environment may add other contacts.

Redraw the boundary around the person alone. The object is now part of the environment. Its contact with the hands crosses the boundary and must appear in the external force inventory. Redraw again around one forearm, and interactions at the hand and elbow become external to that segment. Draw the boundary through a tendon, and the traction across the cut becomes part of the local accounting. The event did not change. The mechanical question did.

This is the plain-language use of a free-body diagram: select a body or subsystem, separate it conceptually from its surroundings, and inventory the interactions that cross the boundary. A force is not permanently internal or external. Its status depends on what has been included.[^02-02]

The boundary need not follow the skin or the edge of an anatomical structure. It can be drawn around a person and an assistive device, through a joint, across a patch of tissue, or around a fluid-filled region. The choice follows the question. If we want the force exchanged between hand and object, they must lie on opposite sides of the boundary. If we want the balance of the person–object pair, they can be grouped together. If we want local wall stress in a vessel, the whole-person boundary is too coarse even though it remains mechanically valid for another purpose.

Every boundary also creates a responsibility. We must account for what crosses it. A diagram that shows gravity but omits the supporting contact cannot balance. A segment diagram that includes a joint reaction but silently omits muscle and other soft-tissue actions may be a useful simplification only if those omitted actions are represented in the resultant or explicitly left unknown. Drawing a smaller boundary does not automatically make the description more accurate; it creates a more detailed question with more unknowns.

The time and phase matter as well. During a quiet hold, the object's acceleration may be negligible, so a quasi-static approximation can be useful. During lift-off, carrying, braking, or placement, momentum changes. The general balance is not “all forces cancel,” but that the sum of external forces equals the rate of change of linear momentum. Likewise, when the moment is taken about a fixed point *O* in an inertial frame, the sum of external moments about *O* equals the rate of change of angular momentum about *O*. Static equilibrium is one case of those balances, not the definition of a free-body diagram.[^02-02]

This method immediately exposes a common shortcut. Knowing the object's weight and the ground reaction does not tell us the force in a particular muscle, the contact distribution within a joint, or the stress in a tendon. Whole-body balance constrains the possibilities. Moving inward requires geometry, segment dynamics, active-force estimates, contact assumptions, material behavior, and sometimes an inverse model. In human movement analysis, many useful internal quantities are inferred from measured motion and external forces rather than observed directly.[^02-03]

> **Figure 2.1 — One task, several system boundaries [text-native first-draft figure]**
>
> ```text
> SAME EVENT: object held during transfer
>
> [person + object]       [person]             [forearm]             [tissue region]
> gravity on both         body weight          hand contact          surface traction
> floor contacts          floor contacts       elbow interaction     local deformation
> air/contact if needed   object at hands      gravity               material response
> hand-object exchange    hand-object force    muscle/tendon action  internal field
> is internal             is external          crosses boundary      requires a model
>
> HOLD: acceleration approximately zero     MOVE/BRAKE: acceleration retained
> STATUS: qualitative model inventory (MOD); no force value is presented as measured
> ```
>
> **Caption.** Redrawing the boundary changes which interactions are external and which quantities can be determined. It does not change the event, reveal local tissue stress, or identify a unique internal route.
>
> **Text alternative.** Four views of the same object-transfer phase progress from person plus object to person, forearm, and tissue region. Each smaller boundary adds interactions that were internal at the larger scale. A final contrast separates a quasi-static hold from an accelerating or braking phase.

Once the system is explicit, we can name its mechanical quantities without making them do one another's jobs.

## Force, moment, and pressure answer different questions

A force is a directed interaction. It has magnitude, direction, and a point or region of application. Its SI unit is the newton. When we replace a distributed interaction by a resultant force, we have compressed the description for a particular balance calculation. The resultant does not preserve every local detail of the distribution.

For rigid-body balance, a distributed contact is generally replaced by an equivalent resultant force *and* an equivalent resultant moment about a stated point. Matching the total force alone is not enough. Two contact patterns can push with the same net force while producing different turning effects; two patterns can share both resultant force and moment while still differing locally. This is the first example of a theme that will recur throughout the book: a valid coarse description constrains a finer one without uniquely determining it.

A moment describes the turning tendency of a force about a selected point or axis. If a force **F** acts at position **r** relative to point *O*, its moment about that point is

```text
M_O = r × F
```

The cross product fixes both the magnitude and direction of the moment. In a simple planar case, its magnitude is the force multiplied by the perpendicular distance from *O* to the force's line of action. That distance is the moment arm.

This is why the same backpack can create a different demand when it hangs close to the trunk or is held behind the body. Its weight may be unchanged, but its line of action has moved relative to a selected joint or segment. The corresponding external moment changes. We will use *moment* as the default technical term. *Torque* is common and often useful, especially for an applied couple or rotation about an axis, but it is not a separate substance hiding inside the body.

A couple makes the distinction especially clear. Two equal and opposite forces separated in space can produce no net force but still produce a nonzero moment. That turning action cannot be represented by pretending that one force follows a line through the anatomy. Conversely, a force's line of action tells us its moment arm about a selected point; it does not tell us where internal stress will be largest or which tissues will participate.

Moment is measured in newton metres. Work and energy can also be expressed in newton metres, conventionally called joules. Identical dimensions do not make moment and energy the same mechanical object. A moment is a directed turning effect about a point or axis; energy is a scalar accounting quantity.[^02-01]

Pressure answers another question. Contact between the hand and object, cartilage surfaces, the foot and floor, or a fluid and a wall is distributed. Surface traction is force per area with both normal and tangential components. At a solid interface, *contact pressure* refers to the compressive normal part of that distribution. It is a field over a stated surface, not merely a force divided by any convenient area. Dividing a normal resultant by area gives an average under stated assumptions; it can hide a strongly nonuniform distribution.

Fluid pressure is also measured in pascals, but it describes a scalar field within a fluid. A pressure difference may contribute to flow, and pressure acting on a surface produces a force, but pressure is neither flow nor force by itself. We must name the location, reference, boundary, and area before moving among them. In later chapters this distinction will matter wherever a solid contact, a pressure-bearing space, and a deformable conduit interact.

Consider a flexible tube. Its internal pressure, the pressure outside it, the difference between them, the wall geometry, wall stress, cross-sectional shape, resistance to flow, and volumetric flow rate are related but separate. A smaller lumen can alter flow conditions, while an external constraint can maintain the deformation that created the smaller lumen. Saying only that the tube is “under pressure” hides the direction of the pressure difference, the state of the wall, and the causal order. The tube will return later as an analogy, but the vocabulary already prevents the analogy from doing more than its mechanics allows.

None of these quantities is inherently supportive or harmful. That judgment requires a material, a configuration, a duration, a response, and a criterion. Here they are descriptions.

## Stress, strain, and deformation move the question inside the material

Now replace the body with an idealized strip. Pull its end through a distributed traction. The traction integrates to a resultant force, but the same resultant can produce different local fields if the strip's geometry, constraints, material directions, or contact conditions change. External force does not specify internal stress.

Stress describes the local intensity and orientation of internal mechanical interaction. In a continuum, the stress tensor at a point determines the traction acting across every possible plane through that point. Both stress and pressure have units of pascals, but one is a tensorial description of internal interaction and the other is a scalar field or scalar part of a contact description. The distinction is not pedantry; it determines which directions and surfaces the model can represent.[^02-04]

Deformation describes how material points change their relative positions. Displacement describes how a point moves relative to a chosen reference. Strain is a defined measure of relative deformation. A photograph can show a change in gross shape or position, but it does not by itself reveal the full strain field. Nor does a visible deformation reveal the stress that produced or maintains it.

Return to the idealized strip. If every point translates and rotates together without changing the distances among material points, the strip has moved but has not strained. If one end moves farther than the other, relative geometry changes. Even then, a single change in length captures only one component of a possibly nonuniform, multiaxial field. A narrow region, a change in cross-section, a contact, or a fixed edge can concentrate the deformation. Equal end displacement need not imply equal local strain; equal local strain need not imply equal stress when the material relation differs.

The reference state must be named. A living tissue observed at rest may already carry active tension, residual stress, fluid pressure, or constraint from surrounding structures. Its visible baseline is not necessarily unloaded or stress-free. When that state is unknown, the honest term is an observed baseline or a model reference—not zero stress.

Tension, compression, shear, bending, and torsion are useful components or loading descriptions. Real structures commonly experience several at once. A tendon can carry tensile stress while also bending around a surface. A vessel wall can experience multiaxial stress as pressure, axial tethering, flow, and surrounding contact change. A joint surface can carry compressive contact pressure alongside tangential traction. Assigning one word to the whole state may be useful shorthand, but it is not a complete field description.

Nor is strain a synonym for injury. Deformation is ordinary and necessary in living tissue. Whether a particular strain is accommodated, sensed, remodeled around, associated with fatigue, or linked to damage depends on its magnitude, direction, rate, duration, repetition, spatial distribution, material state, and biological context. Those bridges belong to later chapters and tissue-specific evidence. Here the important rule is narrower: first describe the deformation correctly; then ask what response follows.

Rate also belongs to the description. The same nominal change in length applied slowly or rapidly is not mechanically identical. Living tissues are heterogeneous, anisotropic, nonlinear, often viscoelastic or poroelastic, and actively maintained; their behavior can depend on direction, rate, history, hydration, activation, and timescale.[^02-05] These properties do not erase ordinary balance laws. They tell us that the relation between stress and strain requires a constitutive model and boundary conditions appropriate to the tissue and question.

This is also why local stress in living tissue is often model-dependent. Motion, geometry, external force, pressure, or deformation may be measured with an instrument, while an internal field is reconstructed from those observations through assumptions and inverse calculations. Methods for estimating tissue stress can be powerful, but they are not assumption-free and no method fits every scale or tissue.[^02-06]

The figures will use a compact provenance key. **OBS** marks a direct observation, **MEAS** an instrument-derived measurement, **CALC** a calculation from stated inputs, **INF** a nonunique inference, **MOD** a forward model or constructed schematic, **HYP** a proposed relation, and **EMB** an embodied report. These labels describe how a quantity entered the account; they do not rank its importance or make a measurement assumption-free.

> **Figure 2.2 — From external demand to local exposure [text-native first-draft figure]**
>
> ```text
> TASK AND CONTACT          SEGMENT OR JOINT         LOCAL INTERFACE          TISSUE FIELD
> object, gravity, floor -> resultant force/moment -> traction/pressure     -> stress/strain
>       OBS / MEAS               CALC / INF             INF / MOD              INF / MOD
>           |                         |                      |                       |
>     system boundary          geometry + active      contact + area       material model +
>     and task phase            force assumptions      + boundary state     reference state
>
>                                    biological response = a separate evidence layer
> ```
>
> **Caption.** Each move from external demand toward local exposure adds information and assumptions. A complete-looking sequence does not make an inferred tissue field directly measured, and a mechanical field does not by itself establish biological response.
>
> **Text alternative.** A four-stage chain runs from task and external contact to segment resultants, local interface distribution, and tissue stress and strain. Evidence labels change from observed or measured to calculated, inferred, or modeled. Under each arrow, the additional geometry, active-force, contact, material, and reference-state information is listed. Biological response sits on a separate downstream layer.

> **Figure 2.3 — Force, moment, pressure, stress, and strain [text-native first-draft figure]**
>
> | Quantity | Physical question | Object | Typical SI unit | Essential qualifier |
> |---|---|---|---|---|
> | Force | What directed interaction crosses the boundary? | Vector | N | interacting bodies, point or region, frame, time |
> | Moment | What turning effect does that interaction have about *O*? | Axial vector | N m | point or axis, sign convention, moment arm |
> | Contact pressure | How is compressive normal contact distributed? | Scalar field on a surface | Pa | surface, normal, area, distribution |
> | Stress | What internal interaction acts across material planes? | Tensor field | Pa | location, configuration, basis, component or invariant |
> | Displacement | How did a point move from the reference? | Vector field | m | reference, frame, time |
> | Strain | How did relative material geometry change? | Tensor or declared scalar measure | 1 or % | reference configuration, measure, direction, rate |
>
> ```text
> SAME SPECIFIED FORCE, DIFFERENT MOMENT ARM (planar constructed example)
>
>                 F = 100 N downward             F = 100 N downward
>                         ↓                              ↓
> O ●─────────────┬      r_perp = 0.10 m   O ●─────────────────┬  r_perp = 0.30 m
>
> |M_O| = F r_perp = 100 N × 0.10 m = 10 N m
> |M_O| = F r_perp = 100 N × 0.30 m = 30 N m
>
> STATUS: specified model values with calculated moments (CALC); not a human measurement
> ```
>
> **Caption.** Related quantities remain different objects. The same resultant force can coexist with different moments, contact distributions, stress fields, and strains when geometry, constraints, or material behavior changes.
>
> **Text alternative.** A six-row table contrasts the question, mathematical object, unit, and minimum qualifier for force, moment, contact pressure, stress, displacement, and strain.

## Stiffness is not strength, and neither is capacity

When a structure is pushed, pulled, or rotated, stiffness relates a change in applied demand to a change in displacement or rotation over a stated range. Compliance describes the corresponding tendency to yield. For a simple one-dimensional relation, translational stiffness might be expressed in newtons per metre and compliance in metres per newton. In a joint, sheet, or tissue with several coupled directions, the relation may require a matrix or more complete constitutive model.

Stiffness depends on more than the material. Geometry, boundary conditions, direction, operating point, loading rate, and history all matter. An elastic modulus relates stress to strain for a stated material model; structural stiffness relates generalized demand to displacement for a structure. They are not synonyms.

More importantly for this book, stiff and compliant are not permanent moral or anatomical identities. A structure can be relatively stiff in one direction and compliant in another. Muscle activation can change the effective stiffness of an assembly without changing the passive material into a different tissue. A pressurized space can receive form in one phase and contribute structural support in another. A tendon can transmit substantial tension while bending or sliding relative to its surroundings.

Strength names a failure-associated value only after the material, geometry, loading mode, rate, and endpoint have been defined. Tolerance likewise requires an endpoint: material failure, fatigue, pain, physiological disturbance, loss of task performance, or something else. These outcomes cannot be exchanged silently.

Capacity is broader and more contextual. It is the present ability of a tissue, assembly, or person to meet a defined task or exposure criterion. Active control, fatigue, prior exposure, tissue state, pain, skill, sleep, recovery, assistance, and environment may all change it. Capacity is therefore not one material constant attached permanently to a person.

The object transfer makes this concrete. A person may complete the same external task before and after fatigue while changing speed, grip, stance, assistance, or internal distribution. The endpoint “object moved successfully” does not show that the same structures carried the same demand. Conversely, a different movement solution does not by itself show diminished capacity; it may be a deliberate, efficient, protective, learned, or merely available alternative. Capacity has to be defined against an endpoint, not inferred from visual conformity.

This is also where the mechanical terms *stiff* and *compliant* must remain separate from the later hard/soft vocabulary. Stiffness and compliance are measured relations under specified conditions. Hard and soft will name relative jobs within an organization: preserving or resolving form versus receiving or conforming to it. A structure can be mechanically stiff in a tested direction while performing a form-receiving role at another scale, or compliant in one mode while helping stabilize an assembly in another.

A reserve can be discussed only when demand and capacity are expressed in comparable terms. Subtracting a force from a duration or a modeled strain from a person's confidence does not create a mechanical margin. Those observations may all matter, but they belong in a structured account rather than an invented common unit.

## Mechanical exposure has a history

“Too much load” often compresses several different claims. Was the peak large? Was the direction unusual for the selected tissue? Was the application rapid? Was the deformation sustained? Did the event repeat with little rest? Did the sequence vary, or did the same region receive the same demand every time? What was the system's state before the exposure, and what recovery occurred afterward?

A useful mechanical history can therefore include magnitude, direction, rate, duration, repetition, frequency, sequence, variability, rest intervals, and recovery context. This list is not a formula. The entries have different units and cannot simply be added. Their relevance depends on the tissue, task, state, timescale, and response being studied.[^02-07]

Sometimes one summary measure is enough. Peak force may answer a bounded structural question. Impulse may matter when the time integral of force is relevant. Cycle count may help in a fatigue model. Work or energy may clarify storage and dissipation. But each summary retains some features and discards others. A richer descriptor earns its place only if it improves explanation or prediction over a simpler one.

Biological meaning enters only after the history has been defined. In controlled bone-loading research, for example, local response depends not merely on an externally applied force but on strain magnitude and other loading parameters, with distinct adaptive and injury-associated outcomes in the studied models.[^02-08] That is useful evidence for the importance of exposure structure in one tissue and experimental context. It is not a universal dose equation for cartilage, tendon, nerve, vessel, muscle, or a whole person.

The same restraint applies to variability and rest. Either can be useful, neutral, or adverse depending on the system. We should not turn “variation is good” or “repetition is bad” into a mechanical law. The correct result may be that a peak value dominates, that several history features interact, or that the proposed descriptor adds no explanatory value.

Sequence can matter even when totals match. Ten repetitions followed by rest do not necessarily produce the same state as the same ten repetitions interleaved with another task. A rapid demand applied after fatigue may meet a different active and material state than the same demand applied first. Recovery is therefore not a force to subtract from exposure. It is a change in the system receiving the next event. Later chapters will ask how that state changes; this chapter only requires that the timeline remain visible.

> **Figure 2.4 — Mechanical exposure through time [text-native first-draft figure]**
>
> ```text
> Named quantity q(t), same vertical and horizontal scales
>
> A  /‾\________________      equal peak, short duration
> B  /‾‾‾‾‾‾‾‾‾\________      equal peak, long duration
> C  /\/\/\/\/\/\______      repetition with short intervals
> D  /\___/‾\_____/‾‾\__      variable sequence and rest
> E  ____/‾‾|\________      rapid application, similar nominal peak
>
> Separate context layer: starting state | prior exposure | recovery interval | response window
> Status: constructed comparison (MOD), not measured tissue traces
> ```
>
> **Caption.** Similar peaks can belong to mechanically different histories. The relevant description is specific to the quantity, tissue, task, and outcome; the panels do not define a universal dose or imply that variability or rest always has one effect.
>
> **Text alternative.** Five time series on identical axes contrast short and sustained exposure, repetition, variable sequencing with rest, and rapid application. A separate layer lists starting state, prior exposure, recovery, and the response window rather than combining them into the curves.

## Work, energy, and the paths of transfer

Work and energy add another useful view. Mechanical work is energy transferred when a force acts through displacement or a moment acts through rotation. Power is the rate of that transfer. A muscle–tendon unit may generate, store, return, or dissipate mechanical energy; an external task may involve different energy accounts depending on the system boundary. Net joint power does not, by itself, tell us the work of every individual muscle or tissue.[^02-03]

Energy is not a substance that must travel along one anatomical line. Nor is lower mechanical or metabolic cost automatically healthier. A whole-body claim about efficiency requires an objective, a comparison class, a task, and an account of what costs are being included. Those questions matter to the wider series, but they are not settled by naming work and power.

This brings us to *load path*. In ordinary structural teaching, a load path links an applied load to the forces that bring a structure into equilibrium.[^02-09] That is a useful starting point. Living systems require a broader, explicitly declared representation. A load path may describe how a defined demand is distributed, transferred, opposed, and ultimately balanced through skeletal contact, joint resultants, tensile structures, active muscle, pressure-mediated support, sliding interfaces, or several carriers at once.

A defensible path must therefore begin and end. It begins with a stated demand or interaction crossing a boundary. It ends in balancing reactions, inertia, stored or dissipated energy where those accounts are relevant, or another explicitly bounded transfer. Between them, the path must preserve the mechanical object it claims to trace. A force cannot silently become pressure, then sensation, then health merely because arrows connect the words. Each change of description needs its own relation and evidence.

The path need not be a single line. It may be a branching graph, a contact network, a distributed stress field, or a time-varying relation. It has no unit of its own. Each edge, arrow, or region must say what it represents: force, moment, pressure, traction, stress, deformation, or another defined quantity. It must also say whether that quantity was measured, calculated, inferred, modeled, hypothesized, or reported as an embodied experience.

Several paths can be mechanically compatible with the same external task. Active forces can redistribute resultants. Contact can migrate. Pressure can change which boundaries contribute support. A structure can participate strongly in one phase and little in another. Nonuniqueness is not a failure of the idea; it is a property the model must represent. A single path earns priority only through a declared criterion and discriminating evidence, not through the visual smoothness of a line.

Three related expressions deserve especially careful separation.

First, the **line of action** of a specified force is a geometric line through its point of application and parallel to the force. It lets us calculate a moment arm. It does not show how the demand is distributed inside the body. A pure couple has no line of action, and a general three-dimensional contact may require both a resultant force and a resultant moment.

Second, an **inferred internal force line** is a project term for a proposed relation among regions or carriers during a task. The relation may be mechanically coherent and useful while remaining nonunique. To become a testable mechanical claim, it needs a system boundary, quantity, scale, phase, candidate carriers, balance or compatibility check, and observations capable of distinguishing it from diffuse or alternative paths.

Third, an **embodied force line** describes a felt continuity or internal connection. Such an experience can be specific, repeatable, and important without already being a measured resultant or anatomical cable. Its immediate evidence is phenomenological: who reported it, during which task, on which side, in which phase, and with what repeatability. It can then motivate a mechanical hypothesis and a search for correlates. Mechanical underdetermination does not require erasing the observation; experiential precision does not remove the need for measurement.

The three meanings can refer to aspects of the same event. They cannot inherit one another's evidentiary status. A force's external line of action does not prove an internal route. A modeled route is not directly measured because its diagram looks anatomical. A felt connection is not a force in newtons until an operational relation earns that interpretation.

> **Figure 2.5 — Three meanings of force line [text-native first-draft figure]**
>
> | Sense | Representation | Provenance status | What is known | What remains open |
> |---|---|---|---|---|
> | External line of action | Solid force arrow with a thin geometric extension | `MEAS` when instrumentally measured; `CALC` when derived from stated inputs | Specified force, application point or region, and frame | Internal distribution |
> | Inferred internal relation | Dashed branching network among named carriers | `INF` for an inference from observations; `MOD` for a declared model; `HYP` while proposed for testing | Task, boundary, quantities, assumptions, and evidence used | Uniqueness, exact carriers, validation, alternatives |
> | Embodied continuity | Distinct perceptual annotation tied to reporter and phase | `EMB` for the report; `OBS` only for separately observed task features | Reported experience, context, and repeatability | Mechanical quantity, anatomical correlate, causal role |
>
> **Caption.** Similar language does not make these objects identical. The embodied sense may generate a mechanical question; the inferred sense may organize a model; only the external sense is the ordinary geometric line of a stated force.
>
> **Text alternative.** A three-row comparison contrasts an external force line, a branching inferred internal relation, and an embodied report. Each row separates what is directly specified from the mechanical or anatomical questions that remain open.

## From an object in the hands to mechanical organization

We can now describe the original transfer without asking the word *load* to do everything.

The object and the ground apply external forces to the person. Their effects depend on the task phase, acceleration, points of contact, geometry, and selected frame. At a segment, these interactions contribute to resultants and moments. Within a joint or tissue region, active forces, contact, pressure, material behavior, and boundary conditions shape a distribution that may be measured in part and modeled in part. Stress and strain describe local material states; displacement and visible geometry do not substitute for them. Repetition adds a history whose relevant features depend on the receiver and endpoint. A load path organizes this transfer only when its quantities, carriers, scale, time, and provenance are visible.

This language gives us discipline, not destiny. It does not tell us that one configuration is best, that one route is universal, or that a measured exposure necessarily produces injury, recovery, comfort, or disease. It tells us how to state those stronger questions so they can be investigated rather than implied.

One question now becomes unavoidable. If a living system can distribute demand through structures that preserve geometry, structures that actively generate and transmit force, structures that slide or conform, and spaces that bear pressure, how is the mechanical labor divided among them?

The next chapter introduces a compact answer: relatively shape-preserving and structurally resolving roles work with relatively form-receiving and shape-conforming roles. That distinction is motivated by traditional Chinese medicine's hard/soft and Yin/Yang concepts, while its mechanical use here remains a flexible translation rather than an exact identity. The quantities in this chapter do not decide that division of labor. They make it possible to inspect.

## Notes

[^02-01]: Bureau International des Poids et Mesures, [*The International System of Units (SI)*, 9th ed., version 4.01](https://doi.org/10.59161/AUEZ1291) (Sèvres: BIPM, updated June 2026). The SI Brochure controls unit names and symbols; identical derived dimensions do not establish that two quantities are the same object.

[^02-02]: Morton E. Gurtin, Eliot Fried, and Lallit Anand, [*The Mechanics and Thermodynamics of Continua*](https://doi.org/10.1017/CBO9780511762956) (Cambridge: Cambridge University Press, 2010); Louis L. Bucciarelli, [“Static Equilibrium: Force and Moment,”](https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/4a78b7668ad961549681ce0e42f95b66_emech2_04.pdf) in *Solid Mechanics*, MIT OpenCourseWare, Fall 2004; Franz-Josef Ulm and Markus J. Buehler, [“Stress Vectors, Stress Tensors, and Continuum Scales,”](https://ocw.mit.edu/courses/1-050-engineering-mechanics-i-fall-2007/resources/lec5/) in *Engineering Mechanics I*, MIT OpenCourseWare, Fall 2007. These sources support the system, balance, resultant, traction, and stress distinctions; the recurring object-transfer presentation is original to this book.

[^02-03]: David A. Winter, [*Biomechanics and Motor Control of Human Movement*, 4th ed.](https://doi.org/10.1002/9780470549148) (Hoboken, NJ: Wiley, 2009), especially the chapters on kinetics, work, energy, power, three-dimensional analysis, and forward solutions. The text supports movement-analysis conventions and the distinction between net or inferred quantities and individual tissue action.

[^02-04]: Gurtin, Fried, and Anand, *Mechanics and Thermodynamics of Continua*; Gerhard A. Holzapfel, [*Nonlinear Solid Mechanics: A Continuum Approach for Engineering*](https://www.wiley.com/en-us/Nonlinear+Solid+Mechanics%3A+A+Continuum+Approach+for+Engineering-p-9780471823193) (Chichester: Wiley, 2000); Klaus-Jürgen Bathe, [“Lagrangian Continuum Mechanics Variables for Analysis,”](https://ocw.mit.edu/courses/res-2-002-finite-element-procedures-for-solids-and-structures-spring-2010/resources/lecture-3-1/) MIT OpenCourseWare, 2010. These sources control the distinction among stress, displacement, deformation gradient, and strain measures, including the need for a reference configuration.

[^02-05]: Gerhard A. Holzapfel, Jay D. Humphrey, and Ray W. Ogden, [“Biomechanics of Soft Biological Tissues and Organs, Mechanobiology, Homeostasis and Modelling,”](https://doi.org/10.1098/rsif.2024.0361) *Journal of the Royal Society Interface* 22, no. 222 (2025): 20240361. This review supports the stated nonlinear, anisotropic, heterogeneous, active, and history-dependent qualifications; it does not provide one constitutive law for all living tissue.

[^02-06]: Manuel Gómez-González, Ernest Latorre, Marino Arroyo, and Xavier Trepat, [“Measuring Mechanical Stress in Living Tissues,”](https://doi.org/10.1038/s42254-020-0184-6) *Nature Reviews Physics* 2 (2020): 300–317. The review distinguishes direct probes, deformation-based measurements, and model-dependent force or stress inference across multiple tissue scales.

[^02-07]: National Research Council and Institute of Medicine, [“Biomechanics,”](https://www.ncbi.nlm.nih.gov/books/NBK222434/) chap. 6 in *Musculoskeletal Disorders and the Workplace: Low Back and Upper Extremities* (Washington, DC: National Academies Press, 2001), [https://doi.org/10.17226/10032](https://doi.org/10.17226/10032). The chapter separates external demand, internal exposure, tissue tolerance, capacity, repetition, duration, and contextual factors. Its condition-specific causal conclusions are not being imported into this foundational vocabulary chapter.

[^02-08]: Sarah H. McBride and Matthew J. Silva, [“Adaptive and Injury Response of Bone to Mechanical Loading,”](https://doi.org/10.1038/bonekey.2012.192) *BoneKEy Reports* 1 (2012): 192. This is a bone-specific review of controlled loading models, not evidence for a universal tissue response or whole-body dose function.

[^02-09]: TU Delft OpenCourseWare, [“Main Takeaways on Load Paths,”](https://ocw.tudelft.nl/course-readings/4-2-4-main-takeaways-on-load-paths/) in *Introduction to Aerospace Structures and Materials*, accessed July 11, 2026. The course supplies the bounded structural meaning linking an applied load to equilibrium forces. This book's multicarrier biological extension is explicitly a project-defined model.

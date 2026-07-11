# Source Coverage Ledger

**Status:** complete first-pass placement; proposed for joint review

This ledger makes conservation auditable. It maps the 156 grouped source obligations in the [`new` reconciliation](../new-json-source-reconciliation.md), the complete structure of the [initial provisional series outline](../provisional-multi-book-outline.md), and direct authorial refinements recorded during alignment into the synthesized series.

Coverage means that the intended concept remains discoverable in a named outline unit or internal inventory. It does not mean that the inherited wording, claim strength, evidence, or publication form has been accepted.

## Coverage invariant

Every source obligation must have one of these dispositions:

- **included** — assigned to one or more proposed outline units;
- **inventory** — preserved in a named internal asset pending selection, research, or later-book development;
- **editorial** — preserved in the contract, metadata, provenance, or decision layer rather than reader prose; or
- **quarantined formulation** — the underlying concept is included, but a particular formulation or artifact is held in [quarantine](quarantine.md).

No substantive obligation in this pass is retired. An inventory home counts as active inclusion, not deferral into oblivion.

## ID convention

`BGB-S-1101` means the first grouped obligation recovered from `11-section-01.json`; the shorter alias is `N11-01`. The same pattern applies to Sections 12-16 and 19. `BGB-S-90##` identifies a direct authorial refinement recorded during editorial alignment rather than a JSON obligation. These IDs identify the source obligation or formulation even if its editorial destination later changes.

## Direct authorial alignment refinements

These formulations are project-authoritative records of present intent while retaining the epistemic and readiness levels assigned in the outlines. They refine how inherited source concepts are related; they do not erase the inherited wording or substitute authorial authority for mechanical, historical, or medical evidence.

| Source | Preserved formulation | Proposed home | Disposition |
|---|---|---|---|
| `BGB-S-9001` | Local or global spatial frames, generalized mechanical modes, conjugate loads, material-symmetry frames, and principal-stress descriptions are distinct; the old “three-axis” umbrella must be unpacked by use | [project-model memo](../project-model-memo.md), `BGB-U-0004`, `0102`, `0112-0115`, `0205`, `0305`; [metadata schema](metadata-schema.md); `BGB-Q-0015` for conflated formulations | included as governing model distinction |
| `BGB-S-9002` | Preferred organization names a possibly evolutionarily grounded, still-unformalized whole-system mechanical efficiency relation; posterior participation is expected to be necessary but not sufficient within the eventual domain of the hypothesis | [project-model memo](../project-model-memo.md), `BGB-U-0105`, `0116-0121`; Book II framing | included as direct hypothesis and formalization program |
| `BGB-S-9003` | The local Six-Division channel-to-mode map and the gross limb-role projection describe different scales: legs/feet are weighted toward axial support, rotation toward upper–lower coordination, and arms/hands toward expansion without reassigning every local channel | [project-model memo](../project-model-memo.md), `BGB-U-0206-0214`, `0221-0223`, `0291` | included as direct mapping hierarchy |
| `BGB-S-9004` | KI1 (Yongquan)–PC8 (Laogong) coordination is a direct embodied anchor between the gross axial and expansive systems; sidedness, carrier, and measurement remain unresolved | [project-model memo](../project-model-memo.md), `BGB-U-0211-0213`, `0222-0223`, `0291-0293` | included as author-direct embodied hypothesis |
| `BGB-S-9005` | “Force line” may identify an external line of action, an inferred internal multicarrier relation, or embodied continuity; its scale, carrier, quantity, and provenance must be named when formalized | [project-model memo](../project-model-memo.md), `BGB-U-0002`, `0005-0006`, `0210`, `0213-0214`, `0222-0223`, `0301`, `0305`; `BGB-Q-0016` for literalized formulations | included as controlled relational vocabulary |
| `BGB-S-9006` | Bilateral symmetry and skeletal-primary routing are first-order modeling assumptions; orthotropy is an optional local constitutive approximation rather than a foundation or derivation of the generalized modes | [project-model memo](../project-model-memo.md), `BGB-U-0103`, `0115`, `0120-0121`, `0314`, `0321-0323` | included as modeling boundary |

## [`11-section-01.json`](../../new/inputs/outlines/11-section-01.json) — mechanics, dysfunction, and disease

| Source | Preserved obligation | Proposed home | Disposition |
|---|---|---|---|
| `BGB-S-1101` (`N11-01`) | Mechanics as a health dimension integrated with structure, pressure, breath, and medicine | `BGB-U-0001`, `0018`, `0030`, `0301` | included |
| `BGB-S-1102` (`N11-02`) | One living mechanical system with skeletal, active, compliant, neural, and vascular cooperation | `BGB-U-0001`, `0003`, `0005-0006` | included |
| `BGB-S-1103` (`N11-03`) | Skeletal geometry, joint contact, ligamentous restraint, stability, and transmission | `BGB-U-0005` | included |
| `BGB-S-1104` (`N11-04`) | Alignment changes paths, moments, exposure, and compensation | `BGB-U-0004-0005`, `0012`, `0015`; `0105` | included |
| `BGB-S-1105` (`N11-05`) | Magnitude, direction, repetition, and time create cumulative demand | `BGB-U-0010`, `0012`, `0019` | included |
| `BGB-S-1106` (`N11-06`) | Tension network, baseline tone, prestress, fascia, glide, pressure, and long-range continuity | `BGB-U-0006`, `0016`, `0020`, `0311`; `0391` | included + inventory |
| `BGB-S-1107` (`N11-07`) | Persistent compensation may alter tone, effort, proprioception, interoception, and resilience | `BGB-U-0014-0016`, `0026`; `0392-0393` | included + inventory |
| `BGB-S-1108` (`N11-08`) | Distinguish mechanically led contexts from other causal primaries and anchor them with examples | `BGB-U-0021`, `0023-0026`, `0091` | included + inventory |
| `BGB-S-1109` (`N11-09`) | Low-grade deviation, cumulative compensation, and delayed consequence | `BGB-U-0010`, `0015-0016`, `0026` | included |
| `BGB-S-1110` (`N11-10`) | Localized concentration, repeated strain, fatigue, degeneration, and failure | `BGB-U-0012`, `0019`, `0023` | included |
| `BGB-S-1111` (`N11-11`) | Vascular and lymphatic compression, kinking, tethering, glide, and flow | `BGB-U-0013`, `0020`, `0024`, `0091`; `0318`, `0392-0393` | included + inventory |
| `BGB-S-1112` (`N11-12`) | Neural contact, tethering, excursion, signaling, proprioception, and bracing feedback | `BGB-U-0014`, `0020`, `0024`, `0091`; `0319`, `0392-0393` | included + inventory |
| `BGB-S-1113` (`N11-13`) | Chronic compensatory activity as energetic or regulatory cost | `BGB-U-0015-0016`; `0392-0393` | included + inventory |
| `BGB-S-1114` (`N11-14`) | Gradual reorganization without a discrete injury | `BGB-U-0010`, `0015-0016`, `0019` | included |
| `BGB-S-1115` (`N11-15`) | Axial or global geometry as a failure family | `BGB-U-0012`, `0016`, `0023`, `0091`; `0104-0105` | included + inventory |
| `BGB-S-1116` (`N11-16`) | Segmental instability, repeated correction, bracing, and secondary compensation | `BGB-U-0014-0015`, `0025`, `0091` | included + inventory |
| `BGB-S-1117` (`N11-17`) | Force concentration, material capacity, time, and degenerative progression | `BGB-U-0010`, `0012`, `0019`, `0023`, `0091` | included + inventory |
| `BGB-S-1118` (`N11-18`) | Discoordination, timing, sequencing, and control distinct from strength or material failure | `BGB-U-0014`, `0025`, `0091` | included + inventory |
| `BGB-S-1119` (`N11-19`) | Impingement, tethering, constrained space, lost excursion, and maintained deformation | `BGB-U-0013`, `0020`, `0024`, `0091` | included + inventory |
| `BGB-S-1120` (`N11-20`) | Kinetic-chain rerouting and possibly delayed compensatory cost | `BGB-U-0015-0016`, `0026`, `0091` | included + inventory |
| `BGB-S-1121` (`N11-21`) | Named spinal, craniofacial, conduit, joint, and postural examples | `BGB-U-0091`, selected `0023-0026`; `0392-0393`, `0492` | inventory + selected inclusion |
| `BGB-S-1122` (`N11-22`) | Sedentary behavior, repetition, technology, and environment as modern exposure contexts | `BGB-U-0010`, `0028`, `0093`; `0424` | included + inventory |
| `BGB-S-1123` (`N11-23`) | Inflammatory response and energetic cost as possible downstream links | `BGB-U-0016`, `0019`; `0392-0393` | included + inventory |
| `BGB-S-1124` (`N11-24`) | Movement literacy, prevention, environmental design, and practical action | `BGB-U-0028`, `0093`; `0424-0425` | included + inventory |
| `BGB-S-1125` (`N11-25`) | Larger role for biomechanics complementing diagnosis, medication, surgery, and rehabilitation | `BGB-U-0017-0022`, `0029` | included |
| `BGB-S-1126` (`N11-26`) | Separate research, measurement, education, therapeutic, implementation, and health-system programs | `BGB-U-0028-0029`; `0421-0425`, `0494` | included + inventory |

### Frozen candidate inventory carried by `BGB-U-0091`

Scoliosis; kyphosis, lordosis, and flat-back syndrome; spondylolisthesis; atlantoaxial and facet-joint instability; degenerative disc disease and disc herniation; spinal stenosis; facet degeneration; Schmorl's nodes; sacroiliac and costovertebral/rib dysfunction; myofascial trigger points; thoracic outlet syndrome; Eagle syndrome; tongue-tie; wisdom-tooth impaction; deviated septum; forward-head posture; flat feet/arch collapse; pelvic torsion; and asymmetrical behavior patterns. Pelvic, cranial, respiratory, fluid, pressure, effort, and proposed regional or systemic branches remain attached as research questions.

## [`12-section-02.json`](../../new/inputs/outlines/12-section-02.json) — hard/soft roles and posterior support

| Source | Preserved obligation | Proposed home | Disposition |
|---|---|---|---|
| `BGB-S-1201` (`N12-01`) | Hard body as structural resilience; gross demand resolved through capable support | `BGB-U-0003`, `0111` | included |
| `BGB-S-1202` (`N12-02`) | Whole-system distribution, sequencing, pressure, coordination, breath, and posterior support | `BGB-U-0001`, `0003-0006`; Books II-IV | included |
| `BGB-S-1203` (`N12-03`) | Posterior anatomy as a major support and transfer system | `BGB-U-0007-0009`, `0117` | included |
| `BGB-S-1204` (`N12-04`) | Progress from anatomy and mechanics through failure into application | Book I Parts II-III; Book V | included |
| `BGB-S-1205` (`N12-05`) | Posterior-chain extent and layered anatomy, including foot-to-cranium candidates | `BGB-U-0007`, `0094` | included + inventory |
| `BGB-S-1206` (`N12-06`) | Vertebrate evolution, bipedalism, locomotion, and endurance | `BGB-U-0008-0009`, `0110` | included |
| `BGB-S-1207` (`N12-07`) | Proposed relations among posterior/anterior, exterior/interior, hard/soft, and Yang/Yin | `BGB-U-0009`, `0030`, `0111`, `0204` | included as hypothesis |
| `BGB-S-1208` (`N12-08`) | Levers, moment arms, struts, tension, compression, stabilization, and force paths | `BGB-U-0002`, `0005-0006`, `0008`, `0092` | included + inventory |
| `BGB-S-1209` (`N12-09`) | Absorption, redirection, dissipation, deceleration, and elastic return | `BGB-U-0008` | included |
| `BGB-S-1210` (`N12-10`) | Posterior capacity in performance, fatigue, stability, and injury exposure | `BGB-U-0008-0009`, `0118`, `0192` | included + inventory |
| `BGB-S-1211` (`N12-11`) | Posterior participation in standing, walking, lifting, and sitting | `BGB-U-0008`, `0406` | included |
| `BGB-S-1212` (`N12-12`) | Observable markers of capacity, transitions, balance, fatigue, pain, and compensation | `BGB-U-0027`, `0119`, `0192`, `0405` | included + inventory |
| `BGB-S-1213` (`N12-13`) | Development, training, pregnancy, illness, disability, aging, and reserve | `BGB-U-0009`, `0118`, `0415`, `0419` | included |
| `BGB-S-1214` (`N12-14`) | Fascia/muscle → ligament/tendon → bone/joint handoff | `BGB-U-0003`, `0006`, `0092` | included as first-order candidate model |
| `BGB-S-1215` (`N12-15`) | Engineering analogies for graded compliant-to-structural load sharing | `BGB-U-0092` | inventory |
| `BGB-S-1216` (`N12-16`) | Coordinated transfer, continuity, glide, congruence, timing, and interruption | `BGB-U-0005-0006`, `0011`, `0014` | included |
| `BGB-S-1217` (`N12-17`) | Load “leak” into compliant or ventral structures | `BGB-U-0011`, `0013`, `0115` | included as hypothesis |
| `BGB-S-1218` (`N12-18`) | Acute injury, geometry, habit, repetition, fatigue, timing, and capacity as triggers | `BGB-U-0010-0015` | included |
| `BGB-S-1219` (`N12-19`) | Soft-tissue strain, maintained internal deformation, compression, and possible symptoms | `BGB-U-0011-0013`, `0019-0020`, `0024` | included as staged causal question |
| `BGB-S-1220` (`N12-20`) | Hard/soft routing as a clinical lens | `BGB-U-0022`, `0027`; Book V | included |
| `BGB-S-1221` (`N12-21`) | Posture cues, home tests, functional movements, training, sport, and compensation retraining | `BGB-U-0119`, `0405-0415`, `0491` | included + practice inventory |
| `BGB-S-1222` (`N12-22`) | Workspace, visual field, seating, breaks, and environment as mechanical boundary conditions | `BGB-U-0010`, `0028`, `0093`; `0424` | included + inventory |
| `BGB-S-1223` (`N12-23`) | Geometry, course, lumen, pressure, neural excursion, and signaling | `BGB-U-0020`, `0024`, `0091`; `0392-0393` | included + inventory |
| `BGB-S-1224` (`N12-24`) | TOS, pelvic basin, nerve roots, venous/lymphatic contexts, and chronic-disease applications | `BGB-U-0020`, `0024`, `0091`; `0318-0319`, `0392-0393`, `0420` | included + inventory |
| `BGB-S-1225` (`N12-25`) | Limits, contraindications, referral, and conventional-care integration | `BGB-U-0021-0022`; `0405`, `0415`, `0419`, `0493` | included |
| `BGB-S-1226` (`N12-26`) | Relationship among hard/soft resolution, posterior support, and Yang | `BGB-U-0003`, `0009`, `0030`, `0111`, `0204` | included as hypothesis |
| `BGB-S-1227` (`N12-27`) | Bridge posterior support into dimensions, tensegrity, meridians, and traditional models | `BGB-U-0030`; Books II-IV | included |

### Additional Section 2 candidate inventory

Thoracic-outlet and pelvic-congestion contexts; venous stasis or chronic venous insufficiency; May-Thurner syndrome; lymphedema; nerve-root or other neurovascular impingement; neuropathic pain; migraine or chronic headache; pregnancy, aging, chronic illness, disability, and athletic exposure; Marfan and Ehlers-Danlos syndromes; acute trauma; and inflammatory, metabolic, autoimmune, or multisystem contexts including rheumatoid arthritis, lupus, and advanced diabetes. These remain candidate applications, limits, or counterexamples in `BGB-U-0091`; they are not final causal assignments.

## [`13-section-03.json`](../../new/inputs/outlines/13-section-03.json) — medical implications specification

| Source | Preserved obligation | Proposed home | Disposition |
|---|---|---|---|
| `BGB-S-1301` (`N13-01`) | Medical framing, mechanism-first organization, bounded scope, and tiered claims | Book I Parts III-VI; metadata schema and future contract | included + editorial |
| `BGB-S-1302` (`N13-02`) | No protocols in foundational medical argument | `BGB-U-0022`, `0027`; Book V boundary | included + editorial |
| `BGB-S-1303` (`N13-03`) | Answer “just physical therapy” and “alternative medicine” objections | `BGB-U-0018`, `0022` | included |
| `BGB-S-1304` (`N13-04`) | Begin where mechanics already lives in medicine | `BGB-U-0017` | included |
| `BGB-S-1305` (`N13-05`) | Define routing, cumulative demand, failure signatures, and local/system context | `BGB-U-0010-0018` | included |
| `BGB-S-1306` (`N13-06`) | Constraint, concentration, and instability as minimal taxonomy | `BGB-U-0012-0014`; nested within Book I's wider six-family pattern language | included |
| `BGB-S-1307` (`N13-07`) | Scope, exclusions, and mechanical versus nonmechanical primaries | `BGB-U-0021` | included |
| `BGB-S-1308` (`N13-08`) | Osteoarthritis versus rheumatoid arthritis as boundary exemplar | `BGB-U-0021`, `0091` | included + inventory |
| `BGB-S-1309` (`N13-09`) | Why routing matters upstream of rehabilitation | `BGB-U-0018` | included |
| `BGB-S-1310` (`N13-10`) | Fatigue, low resilience, and diffuse pain as ambiguous contexts | `BGB-U-0026`, `0091` | included + inventory |
| `BGB-S-1311` (`N13-11`) | Silent compensation → cumulative demand → delayed/distal consequence; imaging may lag mechanism | `BGB-U-0010`, `0015-0016`, `0022`, `0026` | included |
| `BGB-S-1312` (`N13-12`) | Chapter 13 micro-vignette | `BGB-U-0026`, `0091`, `0492` | inventory + selected inclusion |
| `BGB-S-1313` (`N13-13`) | Routing as context, not diagnosis; interface with diagnostics, drugs, surgery, rehabilitation | `BGB-U-0022`, `0027` | included |
| `BGB-S-1314` (`N13-14`) | Thoracic-outlet corridor exemplar | `BGB-U-0020`, `0024`, `0091` | included + inventory |
| `BGB-S-1315` (`N13-15`) | Explicit skeptic section or equivalent objection handling | `BGB-U-0018`, `0021-0022` | included |
| `BGB-S-1316` (`N13-16`) | Bounded education, prevention, and testable research implications | `BGB-U-0028-0029` | included |
| `BGB-S-1317` (`N13-17`) | Job/inputs/outputs/core-moves/allowed/forbidden/acceptance metadata | Metadata schema, future contract and briefs; `BGB-Q-0001` as reader prose | editorial + quarantined formulation |

## [`14-section-04.json`](../../new/inputs/outlines/14-section-04.json) — dimensional structure, meridians, and bandhas

| Source | Preserved obligation | Proposed home | Disposition |
|---|---|---|---|
| `BGB-S-1401` (`N14-01`) | Preserve embodied observations while adding measurement and analysis | `BGB-U-0201-0203`, `0221-0223` | included |
| `BGB-S-1402` (`N14-02`) | Yoga, martial arts, TCM, locks, observation, and intergenerational practice | `BGB-U-0201-0202`, `0215`, `0292` | included + inventory |
| `BGB-S-1403` (`N14-03`) | Dimensional-analysis migration provenance | `BGB-U-0004`, `0102`, `0205`; `BGB-Q-0002` as reader prose | included + quarantined formulation |
| `BGB-S-1404` (`N14-04`) | Body as a coupled 3D system beyond isolated planar levers | `BGB-U-0004`, `0102` | included |
| `BGB-S-1405` (`N14-05`) | Accessible basis-function and decomposition pedagogy | `BGB-U-0004`, `0102`, `0092` | included + inventory |
| `BGB-S-1406` (`N14-06`) | Moment of inertia and resistance to angular acceleration | `BGB-U-0004`, `0102`, `0092` | included + inventory |
| `BGB-S-1407` (`N14-07`) | Parallel anatomy/action/mechanical-role/example template for each generalized mode | `BGB-U-0112-0114`, `0205-0209`, `0191` | included + inventory |
| `BGB-S-1408` (`N14-08`) | Opening/rotational inventory: spine, pelvis, shoulders, forearms, torque, pronation, twisting | `BGB-U-0106-0109`, `0113`, `0115`, `0191` | included + inventory |
| `BGB-S-1409` (`N14-09`) | Expansive/lateral inventory: hips, knees, ankles, rib cage, balance, gait, side shifting | `BGB-U-0106-0109`, `0114-0115`, `0191` | included + inventory |
| `BGB-S-1410` (`N14-10`) | Longitudinal inventory: upright support, suspension, compression, shock management | `BGB-U-0107`, `0112`, `0115`, `0191` | included + inventory |
| `BGB-S-1411` (`N14-11`) | Yin/Yang as signed directional and functional pairs | `BGB-U-0204-0209` | included |
| `BGB-S-1412` (`N14-12`) | Proposed Yin=soft/internal/flexion and Yang=hard/external/extension relations | `BGB-U-0003`, `0009`, `0030`, `0204`, `0211`; `BGB-Q-0009` for universal identity | included as hypothesis + quarantined formulation |
| `BGB-S-1413` (`N14-13`) | Clinical relevance and balance-restoration program | `BGB-U-0220`; Book V Parts I-III | included as application program |
| `BGB-S-1414` (`N14-14`) | Six-Division channel-to-generalized-mode map | `BGB-U-0206-0208`, `0211`, `0291` | included + provenance inventory |
| `BGB-S-1415` (`N14-15`) | Meridians as force routes; qi as tension, pressure, perfusion, signaling, or other variable | `BGB-U-0210`, `0214`, `0221-0223`; `0301-0305`, `0392-0393`; `BGB-Q-0016` for literalized formulations | included as translation hypotheses |
| `BGB-S-1416` (`N14-16`) | Diagrams overlaying generalized modes, spatial anatomy, and channel pairs | `BGB-U-0222`, `0292` | included + atlas inventory |
| `BGB-S-1417` (`N14-17`) | Assessment, training, therapy, breath, and cases blueprint | `BGB-U-0023-0026`, `0220`; Book V | included + inventories |
| `BGB-S-1418` (`N14-18`) | Historical definitions and anatomical candidates for Mula, Uddiyana, and Jalandhara | `BGB-U-0215`, `0292` | included + inventory |
| `BGB-S-1419` (`N14-19`) | Exact source bandha-mode assignments: Mula axial, Jalandhara lateral/expansive, Uddiyana rotational/opening | `BGB-U-0216`, `0291` | included as hypothesis + provenance inventory |
| `BGB-S-1420` (`N14-20`) | Strung-bow posterior analogy | `BGB-U-0217`, `0292` | included + inventory |
| `BGB-S-1421` (`N14-21`) | Sternocleidomastoid and quadriceps as rotational-lock candidates | `BGB-U-0217`, `0292` | included as anatomy candidate |
| `BGB-S-1422` (`N14-22`) | Serratus anterior and latissimus dorsi as lateral-lock candidates | `BGB-U-0217`, `0292` | included as anatomy candidate |
| `BGB-S-1423` (`N14-23`) | Breath as necessary driver, organizer, modulator, or companion | `BGB-U-0218`, `0305` | included as competing hypotheses |
| `BGB-S-1424` (`N14-24`) | Local channel-mode, subtle/internal, and gross hand/foot mapping layers | `BGB-U-0211-0214`, `0291`; `BGB-Q-0011` for silent collapse | included + provenance inventory |
| `BGB-S-1425` (`N14-25`) | Mula → Jalandhara → Uddiyana activation sequence | `BGB-U-0216`, `0309`, `0291` | included as exact source hypothesis |
| `BGB-S-1426` (`N14-26`) | Uddiyana as torsional emergence after other locks rather than isolated hollowing | `BGB-U-0216`, `0309`; `BGB-Q-0007` for supremacy rhetoric | included as hypothesis |
| `BGB-S-1427` (`N14-27`) | Du/Ren, sushumna, ida/pingala, and qi/prana correspondences | `BGB-U-0214`, `0291`; `0313-0315` | included + provenance inventory |
| `BGB-S-1428` (`N14-28`) | Maha Bandha as emergent integration | `BGB-U-0219`, `0310`, `0391` | included as hypothesis |
| `BGB-S-1429` (`N14-29`) | “Fourth dimension” as systemic flow or regulation | `BGB-U-0219`, `0310-0315`, `0391`; `BGB-Q-0005` for literal conflation | included as model program + quarantined formulation |
| `BGB-S-1430` (`N14-30`) | Breath-structured body | Book IV, especially `BGB-U-0301-0310` | included |
| `BGB-S-1431` (`N14-31`) | Protocols, diagnosis, treatment, and optimization | `BGB-U-0411-0423`, `0491`; `BGB-Q-0008` at present readiness | practice inventory + quarantined formulation |
| `BGB-S-1432` (`N14-32`) | Teaching dimensional health | `BGB-U-0413`, `0416-0419`, `0494` | included |
| `BGB-S-1433` (`N14-33`) | Unified tensegrity conclusion | `BGB-U-0311`, `0315`, `0321-0323`, `0391` | included as lead candidate model |

### Exact mapping variants preserved under `BGB-U-0291`

| Source formulation | Axial/vertical | Opening/rotational | Expansive/lateral | Additional proposal |
|---|---|---|---|---|
| Current authorial Six-Division generalized-mode map (`BGB-S-9003`) | Shaoyin: Heart, Kidney; Taiyang: Small Intestine, Bladder | Taiyin: Lung, Spleen; Yangming: Large Intestine, Stomach | Jueyin: Pericardium, Liver; Shaoyang: Sanjiao, Gallbladder | Yang directions: downward/caudal, external/opening, outward; Yin directions are the opposites |
| Archive Six-Division axis grouping | Kidney/Bladder and Heart/Small Intestine | Spleen/Stomach and Large Intestine/Lung | Triple Warmer/Pericardium and Gallbladder/Liver | Channel pairs organized by mechanical axis; signs remain a separate provenance question |
| Archive subtle/internal bandha map | Mula → Kidney/Bladder | Uddiyana → Liver/Spleen | Jalandhara → Heart/Lung/Pericardium | Organ-focused energetic or regulatory map |
| Archive gross/structural bandha map | Mula → foot meridians: Bladder, Gallbladder, Stomach, Liver, Spleen, Kidney | Uddiyana → emergent whole-body spiral | Jalandhara → hand meridians: Small Intestine, Large Intestine, Triple Warmer, Heart, Pericardium, Lung | Limb-focused biomechanical map |
| Cross-tradition translation | Du and sushumna → posterior/central organization | not specified | Ren and ida/pingala → anterior/lateral organization | Qi/prana → pressure gradients, tissue perfusion, neuromyofascial signaling, or other variables to define |

These rows are source formulations, not a forced reconciliation. Direct authorial clarification establishes that the local Six-Division map, gross limb-role projection, and KI1–PC8 embodied anchor operate at different scales; it does not force the subtle bandha, structural bandha, or cross-tradition rows into the same claim. Book III must determine which remaining variants describe different functions, can coexist, require revision, or genuinely conflict.

## [`15-section-05.json`](../../new/inputs/outlines/15-section-05.json) — breath and dynamic integration

| Source | Preserved obligation | Proposed home | Disposition |
|---|---|---|---|
| `BGB-S-1501` (`N15-01`) | Breath-centered synthesis across mechanics, tradition, health, research, and practice | Book IV; Book III-IV-V handoffs | included |
| `BGB-S-1502` (`N15-02`) | Breath as bridge between mechanical and energetic language | `BGB-U-0214`, `0218`; `0301-0305` | included as translation hypothesis |
| `BGB-S-1503` (`N15-03`) | Hyoid-centered 4D tensegrity as a unified source model | `BGB-U-0306-0315`, `0321-0323`, `0391` | included + model inventory |
| `BGB-S-1504` (`N15-04`) | Revisit three modes through spiral, gait, stance, upright support, and shock examples | `BGB-U-0112-0115`, `0191`; `0305` | included + inventory |
| `BGB-S-1505` (`N15-05`) | Hyoid as mobile integrator of jaw, tongue, airway, upper/lower tension, swallowing, breathing, and posture | `BGB-U-0306-0307`, `0391` | included as hypothesis |
| `BGB-S-1506` (`N15-06`) | Suspended-anchor anatomy and upper/lower transition | `BGB-U-0306-0307`, `0391` | included as hypothesis |
| `BGB-S-1507` (`N15-07`) | Structural suspension and dynamic continuity through tension/compression, hyoid integration, and cycling breath | `BGB-U-0304-0311`, `0391` | included as integrated model |
| `BGB-S-1508` (`N15-08`) | Tensegrity tissue roles in fascia, muscle, and bone | `BGB-U-0311`, `0391` | included + model inventory |
| `BGB-S-1509` (`N15-09`) | Hyoid-anchored 4D cube as visualization of axes, suspension, movement, and transfer | `BGB-U-0312`, `0391` | included + model inventory |
| `BGB-S-1510` (`N15-10`) | Looping/cycling breath and adaptable motion | `BGB-U-0304`, `0313`, `0391` | included as hypothesis |
| `BGB-S-1511` (`N15-11`) | Inhale as Yang expansion, elongation, multidimensional spreading, and posterior loading | `BGB-U-0302`, `0305`, `0393` | included as phase hypothesis |
| `BGB-S-1512` (`N15-12`) | Inhale-related tone, neural alertness, readiness, and support | `BGB-U-0302`, `0392-0393` | included as physiology inventory |
| `BGB-S-1513` (`N15-13`) | Exhale as Yin containment, recoil, lift, and soft-tissue protection | `BGB-U-0303`, `0305`, `0393` | included as phase hypothesis |
| `BGB-S-1514` (`N15-14`) | Inward consolidation, rebound, stability, resilience, and reduced energy loss | `BGB-U-0303`, `0392-0393` | included as mechanics/outcome inventory |
| `BGB-S-1515` (`N15-15`) | Volume regulation, visceral lift, suspension, and anti-collapse behavior | `BGB-U-0303-0304`, `0319`, `0392-0393` | included as candidate chain |
| `BGB-S-1516` (`N15-16`) | No true reset; one phase prepares the next | `BGB-U-0304` | included |
| `BGB-S-1517` (`N15-17`) | Coordinated axis transition and spiral continuity | `BGB-U-0305`, `0316` | included |
| `BGB-S-1518` (`N15-18`) | Candidate mechanical dead spots | `BGB-U-0316`, `0393` | included as hypothesis |
| `BGB-S-1519` (`N15-19`) | Circulation, lymph, nerves, and organ suspension as distinct test domains | `BGB-U-0318-0319`, `0392-0393` | included + physiology inventory |
| `BGB-S-1520` (`N15-20`) | Thoracic duct, venous return, and nervous regulation under cyclic pressure | `BGB-U-0318`, `0392-0393` | included as candidate chains |
| `BGB-S-1521` (`N15-21`) | Organ mobility, suspension, and prolapse | `BGB-U-0319`, `0392-0393` | included as candidate chains |
| `BGB-S-1522` (`N15-22`) | *Fa-jing*, *peng*, and bandha as comparative traditional phenomena | `BGB-U-0214-0218`, `0320`, `0393` | included as comparative hypotheses |
| `BGB-S-1523` (`N15-23`) | Breath timing, spiral loading, pretension, and elastic-wave transmission | `BGB-U-0320`, `0393`; `0411-0414`, `0491` | included + practice inventory |
| `BGB-S-1524` (`N15-24`) | Rehabilitation, performance, and athlete/pain/mobility cases | `BGB-U-0324`, `0420`, `0492` | included + case inventory |
| `BGB-S-1525` (`N15-25`) | Limits, ethics, conventional care, research design, and interdisciplinary collaboration | `BGB-U-0321-0325`; Book V | included |
| `BGB-S-1526` (`N15-26`) | Dynamic imaging, axis balance, and breath effects on circulation, neural conduction, and performance | `BGB-U-0322-0323`, `0394` | included + measurement inventory |
| `BGB-S-1527` (`N15-27`) | Explicit synthesis and audience-specific handoff | `BGB-U-0325`; Book V framing | included |

## [`16-section-06.json`](../../new/inputs/outlines/16-section-06.json) — embodiment, teaching, and practice

| Source | Preserved obligation | Proposed home | Disposition |
|---|---|---|---|
| `BGB-S-1601` (`N16-01`) | Move from conceptual model to embodied observation and use | Book V | included |
| `BGB-S-1602` (`N16-02`) | Daily practice, self-assessment, and feedback loops | `BGB-U-0402-0404`, `0421`, `0491` | included + inventory |
| `BGB-S-1603` (`N16-03`) | Broadly accessible, stepwise principles adaptable across bodies | `BGB-U-0406-0415`, `0419`, `0491` | included as practice program |
| `BGB-S-1604` (`N16-04`) | Reunite posterior participation, axis awareness, and breathing as a core sequence | `BGB-U-0407-0413` | included |
| `BGB-S-1605` (`N16-05`) | Standing, sitting, walking, and lifting as ordinary task set | `BGB-U-0406` | included |
| `BGB-S-1606` (`N16-06`) | Axis awareness, breathing with structure, and the inherited “4D model in everyday life” application kernel | `BGB-U-0408-0414`, `0491`; Book IV model status and `BGB-Q-0005` limits retained | included + deferred/research inventory |
| `BGB-S-1607` (`N16-07`) | Age, health, injury history, disability, disease, and life stage | `BGB-U-0415`, `0419`, `0493` | included |
| `BGB-S-1608` (`N16-08`) | Progression from sensory awareness to advanced athletic skill | `BGB-U-0410`, `0415`, `0418-0419` | included |
| `BGB-S-1609` (`N16-09`) | Recognize compensation before proposing correction | `BGB-U-0404-0405`, `0414` | included |
| `BGB-S-1610` (`N16-10`) | Forward head, valgus knees, and pelvic tuck as candidate observations | `BGB-U-0405`, `0491` | included + observation inventory |
| `BGB-S-1611` (`N16-11`) | At-home tests and corrective drills | `BGB-U-0414-0415`, `0491`; `BGB-Q-0008` at present readiness | practice inventory + quarantined formulation |
| `BGB-S-1612` (`N16-12`) | Teach hard body, axes, and breath as one learner-adapted package | `BGB-U-0413`, `0416-0417` | included |
| `BGB-S-1613` (`N16-13`) | Awareness → engagement → integration | `BGB-U-0416` | included |
| `BGB-S-1614` (`N16-14`) | Jargon-free, visual, metaphorical, tactile, autonomy-supporting education | `BGB-U-0417`, `0494` | included |
| `BGB-S-1615` (`N16-15`) | Distinct uses in physical therapy, yoga, Pilates, martial arts, athletics, and referral | `BGB-U-0418-0419`, `0494` | included |
| `BGB-S-1616` (`N16-16`) | Observational studies, trials, lab models, case series, and practice research | `BGB-U-0321-0323`, `0421-0423` | included |
| `BGB-S-1617` (`N16-17`) | Ambition with humility, ethics, adverse events, null results, and revision | `BGB-U-0421-0423` | included |
| `BGB-S-1618` (`N16-18`) | Health systems, schools, public movement literacy, communities, and cultural change | `BGB-U-0424-0425`, `0494` | included |
| `BGB-S-1619` (`N16-19`) | Embodiment as lifelong iteration without endpoint or perfection criterion | `BGB-U-0401`, `0423`, `0425` | included |
| `BGB-S-1620` (`N16-20`) | Integrate structure, breath, and traditional observation in the concluding practice framework | `BGB-U-0425` | included |
| `BGB-S-1621` (`N16-21`) | Invitation to practitioners, teachers, and scientists to contribute and share findings | `BGB-U-0421-0425` | included |

## [`19-appendix-biomechanical-diagnoses.json`](../../new/inputs/outlines/19-appendix-biomechanical-diagnoses.json) — region-first clinical taxonomy

| Source | Preserved obligation | Proposed home | Disposition |
|---|---|---|---|
| `BGB-S-1901` (`N19-01`) | Clinician-facing, supplemental, conservative, claim-tierable, region-first reference | `BGB-U-0091`; possible later professional reference | active inventory |
| `BGB-S-1902` (`N19-02`) | Cervical, thoracic, lumbar, craniofacial, upper-extremity, and lower-extremity rows | `BGB-U-0091` | active inventory |
| `BGB-S-1903` (`N19-03`) | Cranial/intracranial pressure, upper airway/respiratory, and rib/thoracic rows | `BGB-U-0091`, `0392-0393` | active inventory |
| `BGB-S-1904` (`N19-04`) | Diaphragmatic/abdominal pressure, pelvic-floor/urogenital, and visceral-suspension/organ-mobility rows | `BGB-U-0091`, `0392-0393` | active inventory |
| `BGB-S-1905` (`N19-05`) | Region, candidate context, conservative signature, claim tier, and supplemental-status schema | `BGB-U-0091` | active editorial infrastructure |

All twelve exact regional nodes remain active: cervical spine; thoracic spine; lumbar spine; craniofacial; upper extremity; lower extremity; cranial and intracranial pressure regulation; upper airway and respiratory structures; rib cage and thoracic mechanics; diaphragmatic and abdominal pressure systems; pelvic floor and urogenital mechanics; and visceral suspension and organ mobility.

## Initial provisional series outline coverage

The provisional outline contains 119 numbered chapters: 29 in Book I, 21 in Book II, 20 in Book III, 26 in Book IV, and 23 in Book V. All 119 have explicit homes below. The synthesis adds chapters and inventories where the `new` source had been over-compressed; it does not use those additions to erase the provisional spine.

### Series-level obligations

| Source obligation | Proposed home | Disposition |
|---|---|---|
| *The Back Goes Backwards* as series title with individual book titles | [series outline](series-outline.md) and all five book files | included |
| Layered sequence: medical foundation → preferred configuration → traditional coordinates → breath geometry → practice | [series outline](series-outline.md) | included |
| Dependency rule: a reader can accept each earlier layer without accepting later hypotheses | [series outline](series-outline.md) and book boundaries | included |
| Five cumulative books as the stable working architecture, with flexibility in later public packaging | [series outline](series-outline.md) | included |
| Conservation of structural value separately from claim maturity | [README](README.md), [schema](metadata-schema.md), and this ledger | included as governing rule |
| Book I thesis, hard/soft intuition, reader promise, and independence from preferred configuration | Book I framing and Parts I-VI | included |
| Book I exclusions and questions it does not need to settle | Book I boundary section | included |
| Book II preferred-configuration thesis and Book III/IV/V handoffs | Book II framing and boundary section | included |
| Book III signed-generalized-mode/Six-Division thesis, exact core mapping, mapping-scale hierarchy, and embodied-anchor distinction | Book III framing, Parts II-III, `BGB-U-0291`; `BGB-S-9003-9004` | included + inventory |
| Book IV competing-model principle and dynamic breath thesis | Book IV framing, Parts I-V, `BGB-U-0391` | included + inventory |
| Book V conditional translation and possible public/professional/research publication split | Book V framing, [series outline](series-outline.md) | included; format open |
| Existing repository treated as source pools rather than manuscripts awaiting reassignment | [README](README.md), this ledger, and [quarantine](quarantine.md) | included as editorial rule |
| Architecture-first development sequence with joint seam review, book-specific claim/evidence and model maps, briefs, then prose salvage | [README](README.md) and book-specific internal assets | included as workflow |
| Open questions about public packaging, audience, historical depth, mathematics, and surviving examples within the stable five-book working structure | [series outline](series-outline.md) | retained open |

### Provisional Book I chapters

Chapters 1-28 are adopted one-for-one into `BGB-U-0001` through `BGB-U-0028`, with their scope expanded where the source reconciliation required it. The former Chapter 29 becomes `BGB-U-0030`; `BGB-U-0029` is the newly restored research/implementation chapter.

| Old chapter | Preserved topic | New unit |
|---:|---|---|
| 1 | Mechanical dimension of life | `BGB-U-0001` |
| 2 | Working language of load | `BGB-U-0002` |
| 3 | Hard and soft mechanical roles | `BGB-U-0003` |
| 4 | Three-dimensional configuration and load paths | `BGB-U-0004` |
| 5 | Skeleton, joints, shape-preserving paths | `BGB-U-0005` |
| 6 | Active, tensile, compliant, pressure-bearing systems | `BGB-U-0006` |
| 7 | Posterior chain as anatomical system | `BGB-U-0007` |
| 8 | Posterior support in upright life | `BGB-U-0008` |
| 9 | Posterior support within whole-body load sharing | `BGB-U-0009` |
| 10 | Mechanical homeostasis, capacity, dose, time | `BGB-U-0010` |
| 11 | Continuity, interruption, substitution | `BGB-U-0011` |
| 12 | Geometry, concentration, strain localization | `BGB-U-0012` |
| 13 | Constraint-maintained deformation and loss of excursion | `BGB-U-0013` |
| 14 | Instability, discoordination, repeated demand | `BGB-U-0014` |
| 15 | Compensation, rerouting, delayed failure | `BGB-U-0015` |
| 16 | Local exposure to regional/body-wide reorganization | `BGB-U-0016` |
| 17 | Where mechanics already lives in medicine | `BGB-U-0017` |
| 18 | Why load routing is a medical question | `BGB-U-0018` |
| 19 | Mechanical exposure to tissue response | `BGB-U-0019` |
| 20 | Conduits, nerves, sliding interfaces, pressure systems | `BGB-U-0020` |
| 21 | Scope, causality, whole person | `BGB-U-0021` |
| 22 | Clinical lens, not diagnostic system | `BGB-U-0022` |
| 23 | Geometry and localized strain narrative | `BGB-U-0023` |
| 24 | Soft structure held under constraint narrative | `BGB-U-0024` |
| 25 | Instability, repeated demand, changing capacity narrative | `BGB-U-0025` |
| 26 | Compensation in a mixed chronic presentation | `BGB-U-0026` |
| 27 | Mechanical questions in clinical reasoning | `BGB-U-0027` |
| 28 | Education, prevention, research program | `BGB-U-0028` plus restored `BGB-U-0029` |
| 29 | Wider series hypothesis | `BGB-U-0030` |

### Provisional Book II chapters

The 21-chapter structure is retained one-for-one. Each old chapter `n` maps to `BGB-U-01nn` in the same order.

| Old chapter | Preserved topic | New unit |
|---:|---|---|
| 1 | General to preferred routing | `BGB-U-0101` |
| 2 | Spatial frames and generalized-mode decomposition | `BGB-U-0102` |
| 3 | Bilateral and skeletal-primary assumptions, hard/soft roles, and optional local orthotropy | `BGB-U-0103` |
| 4 | Configuration and routing-regime transitions | `BGB-U-0104` |
| 5 | Preferred organization versus one correct posture | `BGB-U-0105` |
| 6 | Pelvis opening/closing | `BGB-U-0106` |
| 7 | Spine, rib cage, longitudinal frame | `BGB-U-0107` |
| 8 | Scapulae, shoulders, arms, posterior suspension | `BGB-U-0108` |
| 9 | Hips, legs, feet, ground | `BGB-U-0109` |
| 10 | Locomotion, comparative anatomy, evolution | `BGB-U-0110` |
| 11 | Hard/soft division across regions | `BGB-U-0111` |
| 12 | Axial organization | `BGB-U-0112` |
| 13 | Opening/rotational organization | `BGB-U-0113` |
| 14 | Expansive/lateral organization | `BGB-U-0114` |
| 15 | Force, torque, pressure, gravity, geometry coupling | `BGB-U-0115` |
| 16 | All-Yang state, bias, or attractor | `BGB-U-0116` |
| 17 | Posterior participation as a necessary-but-insufficient working expectation | `BGB-U-0117` |
| 18 | Hypothesis across tasks and lifespan | `BGB-U-0118` |
| 19 | Candidate measures | `BGB-U-0119` |
| 20 | Competing explanations and non-advantages | `BGB-U-0120` |
| 21 | Falsifiable predictions and research | `BGB-U-0121` |

### Provisional Book III chapters

| Old chapter | Preserved topic | New home |
|---:|---|---|
| 1 | What traditional maps claim, record, and leave ambiguous | `BGB-U-0201-0202` |
| 2 | Yin/Yang as signs of generalized modes | `BGB-U-0204-0205` |
| 3 | Hard/soft roles and TCM polarity | `BGB-U-0204` |
| 4 | Observation, analogy, and biological mechanism | `BGB-U-0203` |
| 5 | Axial Shaoyin-Taiyang | `BGB-U-0206` |
| 6 | Opening/rotational Taiyin-Yangming | `BGB-U-0207` |
| 7 | Expansive/lateral Jueyin-Shaoyang | `BGB-U-0208` |
| 8 | Hand/foot, bilateral, local/global direction | `BGB-U-0209` |
| 9 | Mapping-scale hierarchy: local channel-mode and gross limb-role maps | `BGB-U-0211-0213`, `0291` |
| 10 | Compare maps with sources, observation, intent | `BGB-U-0211-0214`, `0221-0222` |
| 11 | Meridians as routes, regions, relations, attention maps | `BGB-U-0210` |
| 12 | Bandhas as locks, control points, coordination | `BGB-U-0215` |
| 13 | Bandha-axis assignments and sequence | `BGB-U-0216` |
| 14 | Strung-bow analogy | `BGB-U-0217` |
| 15 | Yoga, martial arts, comparative traditions | `BGB-U-0201`, `0214`, `0217-0220` |
| 16 | Translation limits for energetic language | `BGB-U-0210`, `0214`, `0221` |
| 17 | Anatomical candidates | `BGB-U-0217`, `0222`, `0292` |
| 18 | Measurements | `BGB-U-0222`, `0293` |
| 19 | Alternative mappings and failure conditions | `BGB-U-0211-0214`, `0222` |
| 20 | Textual, anatomical, biomechanical, embodied research | `BGB-U-0221-0223` |

### Provisional Book IV chapters

| Old chapter | Preserved topic | New home |
|---:|---|---|
| 1 | Pressure, volume, flow, force, deformation | `BGB-U-0301` |
| 2 | Rib cage, diaphragm, abdomen, pelvis, spine, airway, suspension | `BGB-U-0301`, `0306` |
| 3 | Inhalation/exhalation as phases | `BGB-U-0302-0304` |
| 4 | Breath route versus force, pressure, motion, attention | `BGB-U-0301`, `0305` |
| 5 | Generalized-mode change across breath | `BGB-U-0305` |
| 6 | Cyclic continuity | `BGB-U-0304` |
| 7 | Reciprocal/synergistic paired-side coupling | `BGB-U-0305`, `0391` |
| 8 | Breath as necessary driver, organizer, modulator, or companion | `BGB-U-0305`; `BGB-U-0218` |
| 9 | Hyoid, jaw, tongue, airway | `BGB-U-0306-0307` |
| 10 | Bandhas, pressure, phase | `BGB-U-0308-0310` |
| 11 | Tensegrity model | `BGB-U-0311` |
| 12 | Local orthotropic and curved coordinates | `BGB-U-0314` |
| 13 | Torus, shell/core, paired tracks | `BGB-U-0313-0314` |
| 14 | Loop torque and paired tracks | `BGB-U-0313` |
| 15 | Intrinsic longitudinal and gravitational axes | `BGB-U-0314` |
| 16 | Dead spots, axis transitions, spiral continuity | `BGB-U-0316` |
| 17 | Path dependence, hysteresis, metastability, barriers | `BGB-U-0317` |
| 18 | Networks, zero crossings, separatrices, reconnection | `BGB-U-0317` |
| 19 | Literal, restricted, or metaphorical topology | `BGB-U-0315`, `0317` |
| 20 | Configuration transitions across timescales | `BGB-U-0316-0317` |
| 21 | State variables and scales | `BGB-U-0321` |
| 22 | Candidate mathematical models and non-equivalence | `BGB-U-0315`, `0321`, `0391` |
| 23 | Flow, neural excursion, organ support, pressure regulation | `BGB-U-0318-0319`, `0392-0393` |
| 24 | *Peng*, *fa-jing*, bandha comparisons | `BGB-U-0320`, `0393` |
| 25 | Imaging, pressure, motion, force, physiology | `BGB-U-0322`, `0394` |
| 26 | Discriminating predictions | `BGB-U-0323` |

### Provisional Book V chapters

| Old chapter | Preserved topic | New home |
|---:|---|---|
| 1 | Direct observation versus inference | `BGB-U-0402` |
| 2 | Load history, task, capacity, variability, recovery | `BGB-U-0404` |
| 3 | Configuration, substitution, compensation, symptom modulation | `BGB-U-0404-0405` |
| 4 | Screening, measurement, uncertainty, referral | `BGB-U-0405`, `0419`, `0493` |
| 5 | Axial organization in ordinary movement | `BGB-U-0408` |
| 6 | External/opening rotation | `BGB-U-0409` |
| 7 | Outward lateral organization | `BGB-U-0409` |
| 8 | Hard support, posterior participation, compliant function | `BGB-U-0407`, `0410` |
| 9 | Moving through Yin/Yang with viable organization | `BGB-U-0410` |
| 10 | Breath awareness before control | `BGB-U-0411` |
| 11 | Pressure, phase, whole-body coordination | `BGB-U-0411` |
| 12 | Bandhas and traditional methods | `BGB-U-0412` |
| 13 | Progressions, regressions, contraindications, stopping | `BGB-U-0415` |
| 14 | Awareness → engagement → integration | `BGB-U-0416` |
| 15 | Language, metaphor, tactile feedback, visuals | `BGB-U-0417` |
| 16 | Movement systems, athletics, rehabilitation | `BGB-U-0418` |
| 17 | Individual variation and life stage | `BGB-U-0415`, `0419` |
| 18 | Case documentation without diagnosis | `BGB-U-0420`, `0492` |
| 19 | Single-subject observation/self-experimentation | `BGB-U-0421` |
| 20 | Case series and comparative interventions | `BGB-U-0422` |
| 21 | Outcomes, adverse events, null results | `BGB-U-0423` |
| 22 | Update or abandon failed practices | `BGB-U-0423` |
| 23 | Collaboration, public literacy, cultural translation | `BGB-U-0424-0425`, `0494` |

## Coverage result

- `new` reconciliation: **156 of 156** grouped substantive/editorial obligations have active destinations or a protected editorial/quarantine disposition.
- Provisional outline: **119 of 119** numbered chapters have active destinations; all book-level theses, boundaries, handoffs, development rules, and open decisions are retained.
- Direct authorial alignment refinements: **6 of 6** have active destinations and explicit provenance.
- Solely quarantined substantive concepts: **0**.
- Explicitly retired concepts: **0**.

The next review is therefore about the quality of placement and interpretation, not recovering known omissions. If joint review finds that one row has been understood too narrowly, its stable source ID can be remapped without altering or erasing the source.

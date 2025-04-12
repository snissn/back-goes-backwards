import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

// --------------------------------------------------------------
// Create a tensegrity model as a Group.
// The hyoidOffset parameter will be added to the hyoid's X-coordinate.
// --------------------------------------------------------------
function createTensegrityModel(hyoidOffset) {
  const group = new THREE.Group();

  // --- Bone Materials ---
  const boneMaterialSkull    = new THREE.MeshPhongMaterial({ color: 0xddeeff });
  const boneMaterialJaw      = new THREE.MeshPhongMaterial({ color: 0xffeedd });
  const boneMaterialHyoid    = new THREE.MeshPhongMaterial({ color: 0xffcc66 });
  const boneMaterialClavicle = new THREE.MeshPhongMaterial({ color: 0xf0ffcc });
  const boneMaterialScapula  = new THREE.MeshPhongMaterial({ color: 0xf9ccff });
  const boneMaterialMastoid  = new THREE.MeshPhongMaterial({ color: 0xffddaa });

  // --- Procedural Bone Geometries ---
  // Skull: Ellipsoidal sphere
  const skullGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  skullGeometry.scale(1.0, 1.2, 1.0);
  const skull = new THREE.Mesh(skullGeometry, boneMaterialSkull);
  skull.castShadow = true;

  // Jaw: A flattened box geometry (simulating the mandible)
  const jawGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.4);
  const jaw = new THREE.Mesh(jawGeometry, boneMaterialJaw);
  jaw.castShadow = true;

  // Hyoid: A small torus with adjusted orientation so its open side faces up
  const hyoidGeometry = new THREE.TorusGeometry(0.2, 0.05, 8, 16);
  const hyoid = new THREE.Mesh(hyoidGeometry, boneMaterialHyoid);
  hyoid.castShadow = true;
  hyoid.rotation.x = Math.PI / 2;  // open side upward

  // Apply the hyoid offset on X.
  hyoid.position.set(hyoidOffset, 3.0 , 0.0);

  // Clavicles: Cylinders, rotated horizontally
  const clavicleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 12);
  const clavicleL = new THREE.Mesh(clavicleGeometry, boneMaterialClavicle);
  const clavicleR = new THREE.Mesh(clavicleGeometry, boneMaterialClavicle);
  clavicleL.castShadow = true;
  clavicleR.castShadow = true;
  clavicleL.rotation.z = Math.PI / 2;
  clavicleR.rotation.z = Math.PI / 2;

  // Scapulae: Extruded shapes from a custom 2D outline.
  // (0,0) is the medial (inner) border.
  const scapulaShapeR = new THREE.Shape();
  scapulaShapeR.moveTo(0, 0);
  scapulaShapeR.lineTo(1, 0.2);
  scapulaShapeR.lineTo(0.8, 1);
  scapulaShapeR.lineTo(0, 0.8);
  scapulaShapeR.lineTo(0, 0);
  const extrudeSettings = { depth: 0.1, bevelEnabled: true };
  const scapulaGeometryR = new THREE.ExtrudeGeometry(scapulaShapeR, extrudeSettings);
  const scapulaR = new THREE.Mesh(scapulaGeometryR, boneMaterialScapula);


  // Scapulae: Extruded shapes from a custom 2D outline.
  // (0,0) is the medial (inner) border.
  const scapulaShapeL = new THREE.Shape();
  scapulaShapeL.moveTo(0, 0);
  scapulaShapeL.lineTo(-1, 0.2);
  scapulaShapeL.lineTo(-0.8, 1);
  scapulaShapeL.lineTo(0, 0.8);
  scapulaShapeL.lineTo(0, 0);
  const scapulaGeometryL = new THREE.ExtrudeGeometry(scapulaShapeL, extrudeSettings);
  const scapulaL = new THREE.Mesh(scapulaGeometryL, boneMaterialScapula);

  scapulaL.castShadow = true;
  scapulaR.castShadow = true;
  scapulaR.scale.x = -1;  // Mirror the right scapula

  const sternumGeometry = new THREE.BoxGeometry(0.3,0.3,0.3);
  const sternum = new THREE.Mesh(sternumGeometry, boneMaterialClavicle);
  jaw.castShadow = true;


  // --- Group Bones ---
  // Create an object to hold all bones.
  const bones = {
    skull: skull,
    jaw: jaw,
    hyoid: hyoid,
    clavicleL: clavicleL,
    clavicleR: clavicleR,
    scapulaL: scapulaL,
    scapulaR: scapulaR,
    sternum: sternum
  };

  // --- Set Initial Bone Positions ---
  skull.position.set(0, 4, 0);
  jaw.position.set(0, 3.2, 0.5);  // slightly forward relative to skull
  // hyoid position already set above with the offset.
  clavicleL.position.set(-1.2, 2, 0.5);
  clavicleR.position.set(1.2, 2, 0.5);
  sternum.position.set(0,2,0.5);
  scapulaL.position.set(-1.8, 1.2, -0.5);
  scapulaR.position.set(1.8, 1.2, -0.5);
  // Optional: adjust rotations/scales for improved alignment.
  clavicleL.rotation.x = 0.1;
  clavicleR.rotation.x = -0.1;
  scapulaL.scale.set(0.8, 0.8, 0.8);
  scapulaR.scale.set(0.8, 0.8, 0.8);
  scapulaL.rotation.z = Math.PI;
  scapulaR.rotation.z = Math.PI;

  // --- Add Mastoid Processes (fixed to the skull) ---
  const mastoidGeometry = new THREE.SphereGeometry(0.15, 16, 16);
  const mastoidL = new THREE.Mesh(mastoidGeometry, boneMaterialMastoid);
  const mastoidR = new THREE.Mesh(mastoidGeometry, boneMaterialMastoid);
  mastoidL.castShadow = true;
  mastoidR.castShadow = true;
  mastoidL.position.set(-0.6, 4, 0);
  mastoidR.position.set(0.6, 4, 0);
  bones.mastoidL = mastoidL;
  bones.mastoidR = mastoidR;

  // --- Store fixed offsets for mastoids (relative to skull) ---
  const mastoidLOffset = mastoidL.position.clone().sub(skull.position);
  const mastoidROffset = mastoidR.position.clone().sub(skull.position);

  // --- Initialize Physics Properties on each bone ---
  Object.values(bones).forEach(bone => {
    bone.velocity = new THREE.Vector3();
  });

  // --- Add All Bones to a Group ---
  for (let key in bones) {
    bones[key].name = key;
    group.add(bones[key]);
  }

  // --- Muscle/Tension Connections ---
  // Define connection pairs.
  const muscleConnectionsData = [
    [bones.skull, bones.jaw],
    [bones.skull, bones.hyoid],

    [bones.jaw, bones.hyoid],
    [bones.hyoid, bones.clavicleL],
    [bones.hyoid, bones.clavicleR],
    [bones.hyoid, bones.scapulaL],
    [bones.hyoid, bones.scapulaR],
    [bones.clavicleL, bones.clavicleR],
    [bones.clavicleL, bones.scapulaL],
    [bones.clavicleR, bones.scapulaR],
    [bones.scapulaR, bones.scapulaL],
    [bones.mastoidL, bones.hyoid],
    [bones.mastoidR, bones.hyoid],

	  
    [bones.mastoidL, bones.sternum],
    [bones.mastoidR, bones.sternum],
    [bones.mastoidL, bones.clavicleR],
    [bones.mastoidR, bones.clavicleL],
	  
    [bones.sternum, bones.clavicleL],
    [bones.sternum, bones.clavicleR],

  ];
  const muscleMaterial = new THREE.MeshPhongMaterial({ color: 0xff5555, side: THREE.DoubleSide });
  const muscles = [];
  // Function to create a muscle mesh (visual tube) between two bones and record its rest length.
  function createMuscleMesh(b1, b2) {
    const start = b1.position.clone();
    const end = b2.position.clone();
    const mid = start.clone().add(end).multiplyScalar(0.5);
    const dir = new THREE.Vector3().subVectors(end, start).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    let perpendicular = new THREE.Vector3().crossVectors(dir, up);
    if (perpendicular.length() === 0) {
      perpendicular = new THREE.Vector3(1, 0, 0);
    }
    perpendicular.normalize();
    const offsetMagnitude = start.distanceTo(end) * 0.2;
    const control = mid.add(perpendicular.multiplyScalar(offsetMagnitude));
    const curve = new THREE.CatmullRomCurve3([start, control, end]);
    const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.05, 8, false);
    const muscleMesh = new THREE.Mesh(tubeGeometry, muscleMaterial);
    muscleMesh.name = `${b1.name}-${b2.name}-muscle`;
    const restLength = start.distanceTo(end);
    return { mesh: muscleMesh, pair: [b1, b2], restLength: restLength };
  }
  muscleConnectionsData.forEach(pair => {
    const muscleData = createMuscleMesh(pair[0], pair[1]);
    group.add(muscleData.mesh);
    muscles.push(muscleData);
  });

  createSpine(bones, muscles, group, 7);  // 7 vertebrae: C1 → L5


  // Return the complete model, including its fixed mastoid offsets.
  return { group, bones, muscles, mastoidLOffset, mastoidROffset,  hyoidForceBuffer: []  };
}

function createSpine(bones, muscles, parentGroup, numVertebrae = 7) {
  const spineMaterial = new THREE.MeshPhongMaterial({ color: 0xccddff });
  const vertebraRadius = 0.2;
  const vertebraHeight = 0.3;
  const spacing = 0.6; // vertical spacing between vertebrae

  const vertebrae = [];

  // Create vertebrae from C1 (top) to L5 (bottom)
  for (let i = 0; i < numVertebrae; i++) {
    const name = `vertebra${i + 1}`; // e.g. vertebra1, vertebra2, ...
    const geom = new THREE.CylinderGeometry(vertebraRadius, vertebraRadius, vertebraHeight, 16);
    const v = new THREE.Mesh(geom, spineMaterial);
    v.name = name;
    v.castShadow = true;

    // Initial position (descending from below the skull)
    const y = 3.8 - (i + 1) * spacing;
    v.position.set(0, y, 0);
    v.velocity = new THREE.Vector3();
    v.force = new THREE.Vector3();

    bones[name] = v;
    vertebrae.push(v);
    parentGroup.add(v);
  }

  // === Connections (springs) ===

  const spineSpringColor = 0xaaaaee;
  const springMaterial = new THREE.MeshPhongMaterial({ color: spineSpringColor });

  function connectBone(b1, b2) {
    const start = b1.position.clone();
    const end = b2.position.clone();
    const mid = start.clone().add(end).multiplyScalar(0.5);
    const dir = new THREE.Vector3().subVectors(end, start).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    let perpendicular = new THREE.Vector3().crossVectors(dir, up);
    if (perpendicular.length() === 0) {
      perpendicular = new THREE.Vector3(1, 0, 0);
    }
    perpendicular.normalize();
    const control = mid.add(perpendicular.multiplyScalar(start.distanceTo(end) * 0.2));

    const curve = new THREE.CatmullRomCurve3([start, control, end]);
    const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.04, 8, false);
    const tube = new THREE.Mesh(tubeGeometry, springMaterial);

    const restLength = start.distanceTo(end);
    muscles.push({ mesh: tube, pair: [b1, b2], restLength });
    parentGroup.add(tube);
  }

  // Connect skull to vertebra1 (C1)
  connectBone(bones.skull, vertebrae[0]);

  // Connect vertebrae down the spine
  for (let i = 0; i < vertebrae.length - 1; i++) {
    connectBone(vertebrae[i], vertebrae[i + 1]);
  }

  // Optionally connect bottom vertebra (L5) to scapulae or clavicles
  if (bones.scapulaL && bones.scapulaR) {
    connectBone(vertebrae[vertebrae.length - 1], bones.scapulaL);
    connectBone(vertebrae[vertebrae.length - 1], bones.scapulaR);
  } else if (bones.clavicleL && bones.clavicleR) {
    connectBone(vertebrae[vertebrae.length - 1], bones.clavicleL);
    connectBone(vertebrae[vertebrae.length - 1], bones.clavicleR);
  }
}


// --------------------------------------------------------------
// MAIN SETUP
// --------------------------------------------------------------
const scene = new THREE.Scene();  // (already created above)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 12);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// === Hyoid Force Displays for Two Models ===
const forceContainer = document.createElement('div');
forceContainer.style.position = 'absolute';
forceContainer.style.top = '10px';
forceContainer.style.left = '10px';
forceContainer.style.color = 'white';
forceContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
forceContainer.style.padding = '8px 12px';
forceContainer.style.fontFamily = 'monospace';
forceContainer.style.fontSize = '14px';
forceContainer.style.lineHeight = '1.5em';
forceContainer.style.borderRadius = '6px';
forceContainer.style.zIndex = '1000';

const forceDisplayA = document.createElement('div');
const forceDisplayB = document.createElement('div');
forceDisplayA.innerText = 'Model A Hyoid Force: 0.000';
forceDisplayB.innerText = 'Model B Hyoid Force: 0.000';

forceContainer.appendChild(forceDisplayA);
forceContainer.appendChild(forceDisplayB);
document.body.appendChild(forceContainer);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
dirLight.position.set(5, 10, 5);
dirLight.castShadow = true;
scene.add(dirLight);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// GUI
const gui = new dat.GUI();
const params = {
  breathAmplitude: 5,
  breathFrequency: 1.0,
  toggleBreath: true,
  toggleMuscles: true,
  springConstant: 5,
  dampingFactor: 0.9
};
gui.add(params, 'breathAmplitude', 0.1, 25.0).name('Breath Amplitude');
gui.add(params, 'breathFrequency', 0.1, 10.0).name('Breath Speed');
gui.add(params, 'toggleBreath').name('Toggle Breath');
gui.add(params, 'toggleMuscles').name('Show Muscles');
gui.add(params, 'springConstant', 0.1, 5.0).name('Spring Constant');
gui.add(params, 'dampingFactor', 0.0, 1).name('Damping Factor');

// Create two models:
// Model A: hyoid offset = 0
// Model B: hyoid offset = 0.5
const modelA = createTensegrityModel(0);
const modelB = createTensegrityModel(0.5);

// Position the two models side by side.
modelA.group.position.x = -3;
modelB.group.position.x = 3;

scene.add(modelA.group);
scene.add(modelB.group);

// --------------------------------------------------------------
// ANIMATION & PHYSICS SIMULATION
// --------------------------------------------------------------
let time = 0;
const dt = 0.016; // ~16ms per frame

// Function to update the physics simulation for a given model.
function updateModelPhysics(model) {
  const { bones, muscles, mastoidLOffset, mastoidROffset } = model;

  // Reset forces on each bone.
  Object.values(bones).forEach(bone => {
    if (!bone.force) {
      bone.force = new THREE.Vector3();
    } else {
      bone.force.set(0, 0, 0);
    }
  });

  // Calculate spring forces for each muscle (Hooke’s law).
  muscles.forEach(obj => {
    const b1 = obj.pair[0];
    const b2 = obj.pair[1];
    // Skip fixed connections between mastoids and skull.
    if (
      ((b1.name === "mastoidL" || b1.name === "mastoidR") && b2.name === "skull") ||
      ((b2.name === "mastoidL" || b2.name === "mastoidR") && b1.name === "skull")
    ) {
      return;
    }
    const displacement = new THREE.Vector3().subVectors(b2.position, b1.position);
    const currentLength = displacement.length();
    const extension = currentLength - obj.restLength;
    const forceMagnitude = params.springConstant * extension;
    const force = displacement.clone().normalize().multiplyScalar(forceMagnitude);
    b1.force.add(force);
    b2.force.add(force.clone().negate());
  });

  // Apply external "breath" forces if toggled.
  if (params.toggleBreath) {
    const breathForce = params.breathAmplitude * Math.sin(time * params.breathFrequency);
    // Apply upward forces to clavicles, scapulae and a bit to the hyoid.
    //bones.clavicleL.force.add(new THREE.Vector3(0, breathForce, 0));
    //bones.clavicleR.force.add(new THREE.Vector3(0, breathForce, 0));
    bones.scapulaL.force.add(new THREE.Vector3(0, breathForce * 0.6, 0));
    bones.scapulaR.force.add(new THREE.Vector3(0, breathForce * 0.6, 0));
    //bones.hyoid.force.add(new THREE.Vector3(0, breathForce * 0.3, 0));
  }

  // Update bone velocities and positions (skip if being dragged)
  Object.values(bones).forEach(bone => {
    if (bone !== selectedBone) {
      bone.velocity.add(bone.force.clone().multiplyScalar(dt));
      bone.velocity.multiplyScalar(params.dampingFactor);
      bone.position.add(bone.velocity.clone().multiplyScalar(dt));
    }
  });

  // Fix mastoid positions relative to the skull.
  bones.mastoidL.position.copy(bones.skull.position).add(mastoidLOffset);
  bones.mastoidR.position.copy(bones.skull.position).add(mastoidROffset);

  // Update muscle visuals.
  if (params.toggleMuscles) {
	  muscles.forEach(obj => {
  const b1 = obj.pair[0];
  const b2 = obj.pair[1];
  const start = b1.position.clone();
  const end = b2.position.clone();
  const mid = start.clone().add(end).multiplyScalar(0.5);
  const dir = new THREE.Vector3().subVectors(end, start).normalize();
  const up = new THREE.Vector3(0, 1, 0);
  let perpendicular = new THREE.Vector3().crossVectors(dir, up);
  if (perpendicular.length() === 0) {
    perpendicular = new THREE.Vector3(1, 0, 0);
  }
  perpendicular.normalize();
  const offsetMagnitude = start.distanceTo(end) * 0.2;
  const control = mid.add(perpendicular.multiplyScalar(offsetMagnitude));
  const curve = new THREE.CatmullRomCurve3([start, control, end]);

  // Update geometry
  const dynamicTubeGeometry = new THREE.TubeGeometry(curve, 20, 0.05, 8, false);
  obj.mesh.geometry.dispose();
  obj.mesh.geometry = dynamicTubeGeometry;

		  // --- Muscle Tension Visualization with Centered Heatmap ---
const currentLen = start.distanceTo(end);
const restLen = obj.restLength;
const stretchRatio = currentLen / restLen;

// Centered around 1.0 (resting)
const tensionDelta = stretchRatio - 1.0;  // positive = stretch, negative = compress
const maxDelta = 0.015;  // what you consider a full extreme (tweakable)
const normalized = Math.max(Math.min(tensionDelta / maxDelta, 1), -1); // clamp [-1, 1]

// Color logic:
// -1 → green  (compressed)
//  0 → yellow (rest)
// +1 → red    (stretched)
let r, g, b;
if (normalized < 0) {
  // Compression: green → yellow
  r = 1 + normalized; // 1 to 0
  g = 1;
  b = 0;
} else {
  // Stretch: yellow → red
  r = 1;
  g = 1 - normalized; // 1 to 0
  b = 0;
}

obj.mesh.material.color.setRGB(r, g, b);

});


  }
	// --- Track hyoid force magnitude ---
const hyoid = model.bones.hyoid;
const forceMagnitude = hyoid.force.length();
const buffer = model.hyoidForceBuffer;

// Keep last N frames (e.g., 60 frames = ~1 second)
const MAX_FRAMES = 600;
buffer.push(forceMagnitude);
if (buffer.length > MAX_FRAMES) buffer.shift();

// Compute moving average
const average = buffer.reduce((a, b) => a + b, 0) / buffer.length;

if (model === models[0]) {
  forceDisplayA.innerText = `Model A Hyoid Force: ${average.toFixed(3)}`;
}

if (model === models[1]) {
  forceDisplayB.innerText = `Model B Hyoid Force: ${average.toFixed(3)}`;
}

// --- Color-code hyoid based on net force magnitude ---
const hyoidForce = model.bones.hyoid.force.length();
const hyoidMat = model.bones.hyoid.material;
const maxExpectedForce = 2.0;  // tune this upper bound based on your system

// Normalize the force (0 to 1)
const fNorm = Math.min(hyoidForce / maxExpectedForce, 1.0);

// Convert to color gradient from green → yellow → red
const r = fNorm < 0.5 ? fNorm * 2 : 1;
const g = fNorm < 0.5 ? 1 : 1 - (fNorm - 0.5) * 2;
const b = 0;

hyoidMat.color.setRGB(r, g, b);

}

let selectedBone = null; // For drag interaction (shared by both models)

// --- Mouse Interaction (shared for both models) ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let dragOffset = new THREE.Vector3();
const plane = new THREE.Plane();
const planeNormal = new THREE.Vector3();

function onMouseDown(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  // Gather all bones from both models.
  const allBones = [];
  models.forEach(model => {
    allBones.push(...Object.values(model.bones));
  });
  const intersects = raycaster.intersectObjects(allBones);
  if (intersects.length > 0) {
    selectedBone = intersects[0].object;
    planeNormal.copy(camera.position).sub(selectedBone.position).normalize();
    plane.setFromNormalAndCoplanarPoint(planeNormal, selectedBone.position);
    const intersectionPoint = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersectionPoint);
    dragOffset.copy(intersectionPoint).sub(selectedBone.position);
  }
}
function onMouseMove(event) {
  if (!selectedBone) return;
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersectionPoint = new THREE.Vector3();
  if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
    selectedBone.position.copy(intersectionPoint.sub(dragOffset));
  }
}
function onMouseUp() {
  selectedBone = null;
}
window.addEventListener('mousedown', onMouseDown, false);
window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mouseup', onMouseUp, false);

// --------------------------------------------------------------
// Set up models array so we can update both in the animation loop.
const models = [ modelA, modelB ];

// Responsive Resize:
window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --------------------------------------------------------------
// ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);
  time += dt;

  // Update the physics simulation for each model.
  models.forEach(model => {
    updateModelPhysics(model);
  });

  controls.update();
  renderer.render(scene, camera);
}
animate();



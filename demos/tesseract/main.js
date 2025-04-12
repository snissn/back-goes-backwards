import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

// === Scene, Camera, Renderer ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.set(0, 3, 12);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// === Lights ===
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
dirLight.position.set(5, 10, 5);
dirLight.castShadow = true;
scene.add(dirLight);

// === Orbit Controls ===
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// === Bone Materials ===
const boneMaterialSkull    = new THREE.MeshPhongMaterial({ color: 0xddeeff });
const boneMaterialJaw      = new THREE.MeshPhongMaterial({ color: 0xffeedd });
const boneMaterialHyoid    = new THREE.MeshPhongMaterial({ color: 0xffcc66 });
const boneMaterialClavicle = new THREE.MeshPhongMaterial({ color: 0xf0ffcc });
const boneMaterialScapula  = new THREE.MeshPhongMaterial({ color: 0xf9ccff });

// === Procedural Bone Geometries ===

// Skull: Ellipsoidal sphere
const skullGeometry = new THREE.SphereGeometry(0.5, 32, 32);
skullGeometry.scale(1.0, 1.2, 1.0);
const skull = new THREE.Mesh(skullGeometry, boneMaterialSkull);
skull.castShadow = true;

// Jaw: A flattened box geometry (to simulate the mandible)
const jawGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.4);
const jaw = new THREE.Mesh(jawGeometry, boneMaterialJaw);
jaw.castShadow = true;

// Hyoid: A small torus with adjusted orientation so its “open” side faces up
const hyoidGeometry = new THREE.TorusGeometry(0.2, 0.05, 8, 16);
const hyoid = new THREE.Mesh(hyoidGeometry, boneMaterialHyoid);
hyoid.castShadow = true;
hyoid.rotation.x = Math.PI / 2;  // rotate so the open side is upward

// Clavicles: Cylinders, rotated horizontally
const clavicleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 12);
const clavicleL = new THREE.Mesh(clavicleGeometry, boneMaterialClavicle);
const clavicleR = new THREE.Mesh(clavicleGeometry, boneMaterialClavicle);
clavicleL.castShadow = true;
clavicleR.castShadow = true;
clavicleL.rotation.z = Math.PI / 2;
clavicleR.rotation.z = Math.PI / 2;

// Scapulae: Extruded shapes from a custom 2D outline
const scapulaShape = new THREE.Shape();
scapulaShape.moveTo(0, 0);           // medial (inner) border
scapulaShape.lineTo(1, 0.2);         // lateral extension
scapulaShape.lineTo(0.8, 1);
scapulaShape.lineTo(0, 0.8);
scapulaShape.lineTo(0, 0);
const extrudeSettings = { depth: 0.1, bevelEnabled: true };
const scapulaGeometry = new THREE.ExtrudeGeometry(scapulaShape, extrudeSettings);
// For left scapula, we use the geometry as-is. For right, we mirror it.
const scapulaL = new THREE.Mesh(scapulaGeometry, boneMaterialScapula);
const scapulaR = new THREE.Mesh(scapulaGeometry, boneMaterialScapula);
scapulaL.castShadow = true;
scapulaR.castShadow = true;
scapulaR.scale.x = -1;  // mirror the right scapula horizontally

// === Group Bones into an Object ===
const bones = {
  skull:      skull,
  jaw:        jaw,
  hyoid:      hyoid,
  clavicleL:  clavicleL,
  clavicleR:  clavicleR,
  scapulaL:   scapulaL,
  scapulaR:   scapulaR
};

// === Set Initial Bone Positions (with 3D offsets) ===
bones.skull.position.set(0, 4, 0);
bones.jaw.position.set(0, 3.2, 0.5);   // slightly forward relative to skull
bones.hyoid.position.set(0, 3.0, 0.2);  // floating in front of skull/jaw
bones.clavicleL.position.set(-1.2, 2, 0.5);
bones.clavicleR.position.set(1.2, 2, 0.5);
bones.scapulaL.position.set(-1.8, 1.2, -0.5);
bones.scapulaR.position.set(1.8, 1.2, -0.5);

// Optional: Adjust rotations/scales to improve natural alignment
bones.clavicleL.rotation.x = 0.1;
bones.clavicleR.rotation.x = -0.1;
bones.scapulaL.scale.set(0.8, 0.8, 0.8);
bones.scapulaR.scale.set(0.8, 0.8, 0.8);
bones.scapulaL.rotation.z = Math.PI;
bones.scapulaR.rotation.z = Math.PI;

// Add bones to the scene and initialize a velocity property for physics
for (let key in bones) {
  bones[key].name = key;
  bones[key].velocity = new THREE.Vector3(); // initialize physics velocity
  scene.add(bones[key]);
}

// === Muscle/Tension Connections ===
// Define connection pairs. In addition to previous pairs, we include more connections with the hyoid.
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
  [bones.clavicleR, bones.scapulaR]
];

const muscleMaterial = new THREE.MeshPhongMaterial({ color: 0xff5555, side: THREE.DoubleSide });
const muscles = [];

// Function to create a muscle mesh (the visual tube) and record its rest length.
function createMuscleMesh(b1, b2) {
  const start = b1.position.clone();
  const end = b2.position.clone();
  const mid = start.clone().add(end).multiplyScalar(0.5);
  // Compute a perpendicular for a slight arch:
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
  // Store the rest length for the spring simulation:
  const restLength = start.distanceTo(end);
  return { mesh: muscleMesh, pair: [b1, b2], restLength: restLength };
}

// Create muscle meshes for each connection pair and add them to the scene
muscleConnectionsData.forEach(pair => {
  const muscleData = createMuscleMesh(pair[0], pair[1]);
  scene.add(muscleData.mesh);
  muscles.push(muscleData);
});

// === GUI Controls ===
const gui = new dat.GUI();
const params = {
  breathAmplitude: 0.3,
  breathFrequency: 1.0,
  toggleBreath: true,
  toggleMuscles: true,
  springConstant: 2.0,
  dampingFactor: 0.98
};
gui.add(params, 'breathAmplitude', 0.1, 1.0).name('Breath Amplitude');
gui.add(params, 'breathFrequency', 0.1, 3.0).name('Breath Speed');
gui.add(params, 'toggleBreath').name('Toggle Breath');
gui.add(params, 'toggleMuscles').name('Show Muscles');
gui.add(params, 'springConstant', 0.1, 10.0).name('Spring Constant');
gui.add(params, 'dampingFactor', 0.9, 1.0).name('Damping Factor');

// === Mouse Interaction for Dragging Bones ===
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedBone = null;
let dragOffset = new THREE.Vector3();
const plane = new THREE.Plane();
const planeNormal = new THREE.Vector3();

function onMouseDown(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(Object.values(bones));
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

// === Responsive Resize ===
window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// === Animation Loop with Tension Physics ===
let time = 0;
const dt = 0.016; // time step ~16ms

function animate() {
  requestAnimationFrame(animate);
  time += dt;

  // --- PHYSICS SIMULATION ---

  // Initialize force for each bone (using a custom property on each bone)
  Object.values(bones).forEach(bone => {
    if (!bone.force) {
      bone.force = new THREE.Vector3();
    } else {
      bone.force.set(0, 0, 0);
    }
  });

  // Calculate spring forces for each muscle connection based on Hooke's law
  muscles.forEach(obj => {
    const b1 = obj.pair[0];
    const b2 = obj.pair[1];
    const displacement = new THREE.Vector3().subVectors(b2.position, b1.position);
    const currentLength = displacement.length();
    const extension = currentLength - obj.restLength;
    const forceMagnitude = params.springConstant * extension;
    const force = displacement.clone().normalize().multiplyScalar(forceMagnitude);
    // Apply equal and opposite forces:
    b1.force.add(force);
    b2.force.add(force.clone().negate());
  });

  // Add external "breath" forces if toggled
  if (params.toggleBreath) {
    const breathForce = params.breathAmplitude * Math.sin(time * params.breathFrequency);
    // Add a vertical force (Y-axis) to clavicles and scapulae:
    bones.clavicleL.force.add(new THREE.Vector3(0, breathForce, 0));
    bones.clavicleR.force.add(new THREE.Vector3(0, breathForce, 0));
    bones.scapulaL.force.add(new THREE.Vector3(0, breathForce * 0.6, 0));
    bones.scapulaR.force.add(new THREE.Vector3(0, breathForce * 0.6, 0));
  }

  // Update bone velocities and positions (skip if being manually dragged)
  Object.values(bones).forEach(bone => {
    if (bone !== selectedBone) {
      // Update velocity: acceleration = force * dt (mass assumed = 1)
      bone.velocity.add(bone.force.clone().multiplyScalar(dt));
      // Apply damping to simulate energy loss
      bone.velocity.multiplyScalar(params.dampingFactor);
      // Update position based on velocity
      bone.position.add(bone.velocity.clone().multiplyScalar(dt));
    }
  });

  // --- Update Muscle/Tension Visuals ---
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
      const dynamicTubeGeometry = new THREE.TubeGeometry(curve, 20, 0.05, 8, false);
      // Replace old geometry
      obj.mesh.geometry.dispose();
      obj.mesh.geometry = dynamicTubeGeometry;

      // (Optional:) You can also update the color or thickness based on tension.
    });
  }

  // --- End Physics Simulation ---

  controls.update();
  renderer.render(scene, camera);
}

animate();



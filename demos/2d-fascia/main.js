import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 3, 6);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

scene.add(new THREE.AmbientLight(0xaaaaaa));
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(3, 10, 5);
scene.add(light);

const label = document.createElement('div');
label.style.position = 'absolute';
label.style.bottom = '20px';
label.style.right = '20px';
label.style.fontFamily = 'monospace';
label.style.fontSize = '1.5em';
label.style.color = 'white';
label.style.zIndex = '100';
document.body.appendChild(label);

// Parameters
const nodeCount = 24;
const baseRadius = 2.0;
const center = new THREE.Vector3(0, 0, 0);
const springStrength = 0.25;
const damping = 0.85;

const nodes = [];
const velocities = [];
const targets = [];

for (let i = 0; i < nodeCount; i++) {
  const angle = (i / nodeCount) * Math.PI * 2;
  const x = Math.cos(angle) * baseRadius;
  const z = Math.sin(angle) * baseRadius;
  nodes.push(new THREE.Vector3(x, 0, z));
  velocities.push(new THREE.Vector3());
  targets.push(new THREE.Vector3(x, 0, z));
}

// Create visual lines
const radialLines = [];
const ringLines = [];

const material = new THREE.LineBasicMaterial({ color: 0xffffff });

for (let i = 0; i < nodeCount; i++) {
  const geo = new THREE.BufferGeometry().setFromPoints([center, nodes[i]]);
  const line = new THREE.Line(geo, material.clone());
  scene.add(line);
  radialLines.push(line);

  const nextIdx = (i + 1) % nodeCount;
  const geo2 = new THREE.BufferGeometry().setFromPoints([nodes[i], nodes[nextIdx]]);
  const line2 = new THREE.Line(geo2, material.clone());
  scene.add(line2);
  ringLines.push(line2);
}

let phase = 0;
let lastSign = 1;

function animate() {
  requestAnimationFrame(animate);
  phase += 0.02;

  // Smooth inhale curve (S-curve)
  const raw = Math.sin(phase);
  const inhale = 0.5 - 0.5 * Math.cos(raw * Math.PI);
  const isInhale = raw > 0;
  const currSign = Math.sign(Math.cos(phase));

  // Label
  label.textContent = isInhale ? 'INHALE' : 'EXHALE';

  // Brake motion on phase flip
  if (currSign !== lastSign) {
    for (let v of velocities) v.multiplyScalar(0.25);
  }
  lastSign = currSign;

  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2;

    // Gentle deformation
    const spiral = isInhale ? 0 : 1.0 * (1 - inhale);
    const radius = baseRadius * (0.85 + 0.15 * inhale);
    const theta = angle + spiral;

    const tx = Math.cos(theta) * radius;
    const tz = Math.sin(theta) * radius;

    targets[i].set(tx, 0, tz);

    const force = new THREE.Vector3().subVectors(targets[i], nodes[i]).multiplyScalar(springStrength);
    velocities[i].add(force);
    velocities[i].multiplyScalar(damping);

    if (velocities[i].length() > 0.1) velocities[i].setLength(0.1);

    nodes[i].add(velocities[i]);

    const radialGeo = new THREE.BufferGeometry().setFromPoints([center, nodes[i]]);
    radialLines[i].geometry.dispose();
    radialLines[i].geometry = radialGeo;

    const next = nodes[(i + 1) % nodeCount];
    const ringGeo = new THREE.BufferGeometry().setFromPoints([nodes[i], next]);
    ringLines[i].geometry.dispose();
    ringLines[i].geometry = ringGeo;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();



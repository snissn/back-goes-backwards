import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// ----- Scene, Camera, Renderer Setup -----
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 5, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// ----- Backgrounds and Label -----
const backgroundInhale = new THREE.Color(0x0a0f33);
const backgroundExhale  = new THREE.Color(0x331010);

const label = document.createElement('div');
label.style.position = 'absolute';
label.style.bottom = '20px';
label.style.right = '20px';
label.style.fontFamily = 'monospace';
label.style.fontSize = '1.5em';
label.style.color = 'white';
label.style.zIndex = '100';
document.body.appendChild(label);

// ----- Lighting -----
scene.add(new THREE.AmbientLight(0xaaaaaa));
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// ----- Build the Radial Net (Fascia) -----
// Parameters for net
const radialCount = 32;  // number of divisions around each ring
const ringCount = 10;    // number of rings (net will have ringCount+1 rings)
const maxRadius = 2.5;   // radius of the outermost ring

// Build the "base" point data (as objects) for a dome net.
// Each point knows its ring (r) and index (i) and its original polar coordinates.
const basePoints = [];
for (let r = 0; r <= ringCount; r++) {
  const radius = (r / ringCount) * maxRadius;
  for (let i = 0; i < radialCount; i++) {
    const theta = (i / radialCount) * Math.PI * 2;
    basePoints.push({ r: r, i: i, theta: theta, radius: radius });
  }
}

// We will create separate arrays for our links so we can update them by index.
const radialLines = [];    // lines connecting points from one ring to the next (radial direction)
const circularLines = [];  // lines connecting adjacent points in the same ring (circular direction)
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

// Build radial lines: for each ring from 1 to ringCount, for each i.
for (let r = 1; r <= ringCount; r++) {
  for (let i = 0; i < radialCount; i++) {
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    const line = new THREE.Line(geometry, lineMaterial.clone());
    scene.add(line);
    radialLines.push({ line: line, r: r, i: i });
  }
}

// Build circular lines: for each ring from 0 to ringCount, for each i from 1 to radialCount-1.
for (let r = 0; r <= ringCount; r++) {
  for (let i = 1; i < radialCount; i++) {
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    const line = new THREE.Line(geometry, lineMaterial.clone());
    scene.add(line);
    circularLines.push({ line: line, r: r, i: i });
  }
}

// ----- Animation Loop -----
let phase = 0;
function animate() {
  requestAnimationFrame(animate);
  phase += 0.02;

  // Compute inhalation factor (0 to 1) from a sine wave.
  const inhale = Math.sin(phase) * 0.5 + 0.5;
  const isInhale = Math.cos(phase) > 0;
  label.textContent = isInhale ? 'INHALE' : 'EXHALE';
  renderer.setClearColor(isInhale ? backgroundInhale : backgroundExhale);

  // Calculate updated positions for each point of the net.
  // The idea: on inhale, the net is more "open" with a higher dome.
  // On exhale, the net collapses inward with a spiral twist.
  const updatedPoints = [];
  for (let pt of basePoints) {
    const percent = pt.r / ringCount; // 0 at center; 1 at outer rim.

    // Apply a spiral twist on exhale.
    const spiralOffset = 0.8 * (1 - inhale) * percent;
    const newTheta = pt.theta + spiralOffset;

    // Adjust radius slightly with breath.
    const newRadius = pt.radius * (0.8 + 0.2 * inhale);

    // Dome height: high on inhale, lower on exhale.
    // Points further out collapse more.
    const domeHeight = 2.5 * inhale * Math.exp(-newRadius * 1.5);
    // Additional collapse: more pronounced at the outer rim.
    const collapse = (1 - inhale) * 0.5 * percent;
    const newY = domeHeight - collapse;

    // Cartesian coordinates.
    const newX = Math.cos(newTheta) * newRadius;
    const newZ = Math.sin(newTheta) * newRadius;
    updatedPoints.push(new THREE.Vector3(newX, newY, newZ));
  }

  // Update radial lines.
  // For each radial line (which connects a point in ring r-1 to the same index in ring r),
  // find the corresponding points.
  for (let item of radialLines) {
    const r = item.r;
    const i = item.i;
    const idx1 = (r - 1) * radialCount + i;
    const idx2 = r * radialCount + i;
    const pt1 = updatedPoints[idx1];
    const pt2 = updatedPoints[idx2];
    item.line.geometry.setFromPoints([pt1, pt2]);
  }

  // Update circular lines.
  // For each circular line in a given ring, connect point i-1 to point i.
  for (let item of circularLines) {
    const r = item.r;
    const i = item.i;
    const idx1 = r * radialCount + (i - 1);
    const idx2 = r * radialCount + i;
    const pt1 = updatedPoints[idx1];
    const pt2 = updatedPoints[idx2];
    item.line.geometry.setFromPoints([pt1, pt2]);
  }

  controls.update();
  renderer.render(scene, camera);
}
animate();



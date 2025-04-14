import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;

const outerMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff });
const innerMaterial = new THREE.MeshBasicMaterial({ color: 0xff3366 });
const linkMaterial  = new THREE.MeshBasicMaterial({ color: 0xffffff });

const CYLINDER_RADIUS = 0.025;

// Cube geometry function
function createCube(size, offset = [0,0,0]) {
    const hs = size / 2;
    const positions = [
        [-hs, -hs, -hs], [ hs, -hs, -hs],
        [ hs,  hs, -hs], [-hs,  hs, -hs],
        [-hs, -hs,  hs], [ hs, -hs,  hs],
        [ hs,  hs,  hs], [-hs,  hs,  hs],
    ];
    return positions.map(p => new THREE.Vector3(p[0]+offset[0], p[1]+offset[1], p[2]+offset[2]));
}

// Create a cylinder edge between two points
function createCylinder(p1, p2, material) {
    const direction = new THREE.Vector3().subVectors(p2, p1);
    const orientation = new THREE.Quaternion();
    orientation.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
    const midpoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    const geometry = new THREE.CylinderGeometry(CYLINDER_RADIUS, CYLINDER_RADIUS, direction.length(), 8);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(midpoint);
    mesh.setRotationFromQuaternion(orientation);
    return mesh;
}

// Store cube edges for reference
const cubeEdges = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7]
];

// Initialize points and cylinders
let outerSize = 2.0;
let innerSize = 1.0;
let phase = 0;

let outerPts = createCube(outerSize);
let innerPts = createCube(innerSize);

let outerEdges = cubeEdges.map(([a, b]) => createCylinder(outerPts[a], outerPts[b], outerMaterial));
let innerEdges = cubeEdges.map(([a, b]) => createCylinder(innerPts[a], innerPts[b], innerMaterial));
let linkEdges  = innerPts.map((_, i) => createCylinder(innerPts[i], outerPts[i], linkMaterial));

outerEdges.forEach(e => scene.add(e));
innerEdges.forEach(e => scene.add(e));
linkEdges.forEach(e => scene.add(e));

function animate() {
    requestAnimationFrame(animate);
    phase += 0.02;

    const inhale = Math.sin(phase) * 0.5 + 0.5;
    const lift = inhale * 0.3;

    outerPts = createCube(outerSize).map(p => p.add(new THREE.Vector3(0, lift, 0)));
    innerPts = createCube(innerSize).map(p => {
        const rot = inhale * Math.PI;
        const x = p.x;
        const y = p.y * Math.cos(rot) - p.z * Math.sin(rot);
        const z = p.y * Math.sin(rot) + p.z * Math.cos(rot);
        return new THREE.Vector3(x, y - lift, z);
    });

    cubeEdges.forEach(([a, b], i) => {
        scene.remove(outerEdges[i]);
        outerEdges[i] = createCylinder(outerPts[a], outerPts[b], outerMaterial);
        scene.add(outerEdges[i]);

        scene.remove(innerEdges[i]);
        innerEdges[i] = createCylinder(innerPts[a], innerPts[b], innerMaterial);
        scene.add(innerEdges[i]);
    });

    linkEdges.forEach((e, i) => {
        scene.remove(linkEdges[i]);
        linkEdges[i] = createCylinder(innerPts[i], outerPts[i], linkMaterial);
        scene.add(linkEdges[i]);
    });

    controls.update();
    renderer.render(scene, camera);
}

animate();

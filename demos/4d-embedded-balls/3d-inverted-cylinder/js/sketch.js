import { initControls, getDurations, styleControls } from './controls.js';
import { calcSegment } from './cycle.js';
import { drawCylinder } from './cylinder.js';
import { drawParticles } from './particles.js';
import { calcRadii } from './utils.js';

let outerRadius, innerRadius;
const nParticles = 32;
let controlsDiv;
let lastInteractionTime = Date.now();

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  calcRadii((o, i) => { outerRadius = o; innerRadius = i; });
  controlsDiv = initControls();
}

function draw() {
	console.log('draw')
  const { inhale, holdIn, exhale, holdEx } = getDurations();
  const cyclePeriod = inhale + holdIn + exhale + holdEx;
  const cx = width / 2, cy = height / 2;
  const t = millis() % cyclePeriod;

  const { segmentPhase, label } = calcSegment(t, inhale, holdIn, exhale, holdEx);
  const f = (1 - cos(TWO_PI * segmentPhase)) / 2;
  const colorf = cos(TWO_PI * segmentPhase) / 2 + 0.5;
  const colorDiff = 2;
  const light = colorDiff, dark = 255 - colorDiff;
  const bgColor = lerpColor(color(dark), color(light), colorf);
  const shapeColor = lerpColor(color(light), color(dark), colorf);

  styleControls(controlsDiv, bgColor, shapeColor);
  if (millis() - lastInteractionTime > 10000) {
    controlsDiv.classList.add('hidden');
  }

  background(bgColor);
  const cylLight = color(200), shadingDark = color(105), shadingLight = color(150);
  const cylFill = lerpColor(cylLight, shadingDark, f);
  const shadeFill = lerpColor(shadingLight, shadingDark, f);

  drawCylinder(cx, cy, innerRadius, outerRadius, f, cylFill, shadeFill, shapeColor, nParticles);
  drawParticles(cx, cy, innerRadius, outerRadius, f, shapeColor, nParticles);

  noStroke();
  fill(shapeColor);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(label, cx, cy - outerRadius - 30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calcRadii((o, i) => { outerRadius = o; innerRadius = i; });
}
//
// **ADD THESE 3 LINES** so p5 can find your functions:
window.setup         = setup;
window.draw          = draw;
window.windowResized = windowResized;


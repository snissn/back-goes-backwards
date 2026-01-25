import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadJson(relPath) {
  const absPath = path.resolve(__dirname, relPath);
  const raw = fs.readFileSync(absPath, "utf8");
  return JSON.parse(raw);
}

const drillsJson = loadJson("../../data/drills.json");
const testsJson = loadJson("../../data/tests.json");

const segments = new Set(["L", "T", "C"]);
const signs = new Set([-1, 0, 1]);

function fail(message) {
  console.error(`data validation failed: ${message}`);
  process.exit(1);
}

function assertString(value, pathLabel) {
  if (typeof value !== "string" || value.length === 0) fail(`${pathLabel} must be a non-empty string`);
}

function assertNumber(value, pathLabel) {
  if (typeof value !== "number" || Number.isNaN(value)) fail(`${pathLabel} must be a number`);
}

function assertSignature(sig, pathLabel) {
  if (!sig || typeof sig !== "object") fail(`${pathLabel} must be an object`);
  for (const key of ["L", "T", "C"]) {
    if (!signs.has(sig[key])) fail(`${pathLabel}.${key} must be -1, 0, or 1`);
  }
}

function validateDrills() {
  const drills = drillsJson.drills;
  if (!Array.isArray(drills) || drills.length === 0) fail("drills must be a non-empty array");
  const ids = new Set();
  drills.forEach((d, i) => {
    const base = `drills[${i}]`;
    assertString(d.id, `${base}.id`);
    if (ids.has(d.id)) fail(`${base}.id is duplicated: ${d.id}`);
    ids.add(d.id);
    assertString(d.name, `${base}.name`);
    assertNumber(d.tier, `${base}.tier`);
    assertNumber(d.risk, `${base}.risk`);
    assertNumber(d.cost, `${base}.cost`);
    assertString(d.dose, `${base}.dose`);
    assertSignature(d.signature, `${base}.signature`);
    assertString(d.failureMode, `${base}.failureMode`);
    if (d.notes !== undefined) assertString(d.notes, `${base}.notes`);
  });
}

function validateTests() {
  const quick = testsJson.quick;
  if (!quick) fail("tests.quick is required");
  assertString(quick.id, "tests.quick.id");
  assertString(quick.name, "tests.quick.name");
  assertNumber(quick.durationSec, "tests.quick.durationSec");
  if (!Array.isArray(quick.steps) || quick.steps.length === 0) {
    fail("tests.quick.steps must be a non-empty array");
  }
  quick.steps.forEach((s, i) => {
    const base = `tests.quick.steps[${i}]`;
    assertString(s.id, `${base}.id`);
    assertString(s.name, `${base}.name`);
    assertNumber(s.durationSec, `${base}.durationSec`);
    if (!Array.isArray(s.flags) || s.flags.length === 0) fail(`${base}.flags must be a non-empty array`);
    s.flags.forEach((flag) => {
      if (!segments.has(flag)) fail(`${base}.flags has invalid segment: ${flag}`);
    });
    assertString(s.passCriteria, `${base}.passCriteria`);
    assertString(s.failCriteria, `${base}.failCriteria`);
    if (s.sided !== undefined && typeof s.sided !== "boolean") fail(`${base}.sided must be boolean`);
  });
  const scoring = quick.scoring;
  if (!scoring) fail("tests.quick.scoring is required");
  assertNumber(scoring.bDominantMaxFails, "tests.quick.scoring.bDominantMaxFails");
  assertNumber(scoring.mixedMaxFails, "tests.quick.scoring.mixedMaxFails");
  assertNumber(scoring.aDominantMinFails, "tests.quick.scoring.aDominantMinFails");
}

validateDrills();
validateTests();
console.log("data validation ok");

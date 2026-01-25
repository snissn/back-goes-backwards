import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  chooseMinimalDrillSet,
  classifyQuick,
  inferPositiveSegments,
  orderProtocol
} from "../src/engine.js";
import type { Drill, QuickTest, Signature } from "../src/types.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadJson(relPath: string) {
  const absPath = path.resolve(__dirname, relPath);
  const raw = fs.readFileSync(absPath, "utf8");
  return JSON.parse(raw);
}

const drillsData = loadJson("../../data/drills.json") as { drills: Drill[] };
const testsData = loadJson("../../data/tests.json") as { quick: QuickTest };
const drills = drillsData.drills;
const quick = testsData.quick;

function sumSignature(items: Drill[]): Signature {
  return items.reduce(
    (acc, d) => ({
      L: (acc.L + d.signature.L) as Signature["L"],
      T: (acc.T + d.signature.T) as Signature["T"],
      C: (acc.C + d.signature.C) as Signature["C"]
    }),
    { L: 0, T: 0, C: 0 }
  );
}

(function testInferPositiveSegments() {
  const result = {
    steps: [
      { id: "Q1", failed: true },
      { id: "Q2", failed: true },
      { id: "Q3", failed: false },
      { id: "Q4", failed: false }
    ]
  };
  const positives = inferPositiveSegments(result, quick).sort();
  assert.deepEqual(positives, ["C", "L", "T"]);
})();

(function testClassifyQuick() {
  const result = {
    steps: [
      { id: "Q1", failed: true },
      { id: "Q2", failed: false },
      { id: "Q3", failed: false },
      { id: "Q4", failed: false }
    ]
  };
  const classification = classifyQuick(result, quick);
  assert.equal(classification.classification, "B-dominant");
  assert.equal(classification.fails, 1);
})();

(function testChooseMinimalDrillSetSingle() {
  const forL = chooseMinimalDrillSet(["L"], drills, { maxTier: 1 });
  assert.equal(forL.length, 1);
  assert.equal(forL[0].signature.L, -1);
  assert.equal(forL[0].signature.T, 0);
  assert.equal(forL[0].signature.C, 0);

  const forT = chooseMinimalDrillSet(["T"], drills, { maxTier: 1 });
  assert.equal(forT.length, 1);
  assert.equal(forT[0].signature.T, -1);
  assert.equal(forT[0].signature.L, 0);

  const forC = chooseMinimalDrillSet(["C"], drills, { maxTier: 1 });
  assert.equal(forC.length, 1);
  assert.equal(forC[0].id, "SB");
})();

(function testChooseMinimalDrillSetPairs() {
  const forLT = chooseMinimalDrillSet(["L", "T"], drills, { maxTier: 1 });
  assert.equal(forLT.length, 1);
  const sumLT = sumSignature(forLT);
  assert.ok(sumLT.L <= -1 && sumLT.T <= -1 && sumLT.C <= 0);

  const forLC = chooseMinimalDrillSet(["L", "C"], drills, { maxTier: 1 });
  const ids = new Set(forLC.map((d) => d.id));
  assert.equal(forLC.length, 2);
  assert.ok(ids.has("SB"));
  assert.ok(ids.has("ERBL") || ids.has("BSTEP"));
})();

(function testChooseMinimalDrillSetAll() {
  const forLTC = chooseMinimalDrillSet(["L", "T", "C"], drills, { maxTier: 1 });
  assert.ok(forLTC.length >= 1 && forLTC.length <= 3);
  const sum = sumSignature(forLTC);
  assert.ok(sum.L <= -1 && sum.T <= -1 && sum.C <= -1);
})();

(function testOrderProtocol() {
  const ordered = orderProtocol([
    drills.find((d) => d.id === "ERBL")!,
    drills.find((d) => d.id === "SB")!,
    drills.find((d) => d.id === "BW")!
  ]);
  assert.deepEqual(
    ordered.map((d) => d.id),
    ["SB", "ERBL", "BW"]
  );
})();

console.log("core engine tests ok");

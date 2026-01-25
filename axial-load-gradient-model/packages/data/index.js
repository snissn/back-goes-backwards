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

const drillsJson = loadJson("./drills.json");
const testsJson = loadJson("./tests.json");

export const drills = drillsJson.drills;
export const drillsVersion = drillsJson.version;
export const tests = testsJson;
export const testsVersion = testsJson.version;

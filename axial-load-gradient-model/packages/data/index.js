import drillsJson from "./drills.json" assert { type: "json" };
import testsJson from "./tests.json" assert { type: "json" };

export const drills = drillsJson.drills;
export const drillsVersion = drillsJson.version;
export const tests = testsJson;
export const testsVersion = testsJson.version;

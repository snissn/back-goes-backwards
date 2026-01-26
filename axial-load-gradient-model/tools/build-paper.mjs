import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

function formatDate(d) {
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function formatSignature(sig) {
  const parts = ["L", "T", "C"].map((k) => `${k} ${sig[k] ?? 0}`);
  return parts.join(" · ");
}

function buildQuickScreenMarkdown(tests) {
  const quick = tests.quick;
  const steps = quick?.steps ?? [];

  const lines = [];
  lines.push(`*Screen ID:* \`${quick.id}\` · *Total duration:* ~${quick.durationSec}s`);
  lines.push("");
  lines.push("::: {.callout .definition}");
  lines.push("#### Scoring (fails across the 4 steps)");
  lines.push(`- **B-dominant:** 0-${quick.scoring.bDominantMaxFails} fails`);
  lines.push(
    `- **Mixed:** ${quick.scoring.bDominantMaxFails + 1}-${quick.scoring.mixedMaxFails} fails`
  );
  lines.push(`- **A-dominant:** ${quick.scoring.aDominantMinFails}+ fails`);
  lines.push(":::");
  lines.push("");
  lines.push(
    "For sided steps, record **Left / Right / Both**. The program uses sided failures to choose the minimal drill set."
  );
  lines.push("");

  for (const step of steps) {
    const sided = step.sided ? "Yes (Left/Right)" : "No";
    const flags = (step.flags ?? []).join(", ");
    const duration = step.durationSec ? `${step.durationSec}s` : "—";

    lines.push(`### ${step.id} — ${step.name}`);
    lines.push(`**Duration:** ${duration} · **Flags:** ${flags || "—"} · **Sided:** ${sided}`);
    lines.push("");
    lines.push(`- **Pass:** ${step.passCriteria}`);
    lines.push(`- **Fail:** ${step.failCriteria}`);
    lines.push("");
  }

  return lines.join("\n").trimEnd();
}

function buildDrillLibraryMarkdown(drills, { tierMin, tierMax }) {
  const list = drills
    .filter((d) => typeof d.tier === "number" && d.tier >= tierMin && d.tier <= tierMax)
    .sort((a, b) => (a.tier ?? 0) - (b.tier ?? 0) || (a.risk ?? 0) - (b.risk ?? 0));

  const lines = [];

  for (const drill of list) {
    lines.push(`### ${drill.id} — ${drill.name}`);
    lines.push(`**Tier:** ${drill.tier} · **Risk:** ${drill.risk} · **Cost:** ${drill.cost}`);
    lines.push(`**Dose:** ${drill.dose}`);
    lines.push(`**Signature (Δg):** ${formatSignature(drill.signature ?? {})}`);
    lines.push("");
    lines.push(`- **Failure mode:** ${drill.failureMode}`);
    if (drill.notes) lines.push(`- **Notes:** ${drill.notes}`);
    lines.push("");
  }

  return lines.join("\n").trimEnd();
}

async function main() {
  const templatePath = path.join(ROOT_DIR, "manuscript", "paper.template.md");
  const testsPath = path.join(ROOT_DIR, "packages", "data", "tests.json");
  const drillsPath = path.join(ROOT_DIR, "packages", "data", "drills.json");
  const outDir = path.join(ROOT_DIR, "dist");
  const outPath = path.join(outDir, "paper.md");

  const [templateRaw, testsRaw, drillsRaw] = await Promise.all([
    fs.readFile(templatePath, "utf8"),
    fs.readFile(testsPath, "utf8"),
    fs.readFile(drillsPath, "utf8")
  ]);

  const tests = JSON.parse(testsRaw);
  const drillsDoc = JSON.parse(drillsRaw);
  const drills = drillsDoc.drills ?? [];

  const now = new Date();
  const gitSha = execSync("git rev-parse --short HEAD", { cwd: ROOT_DIR })
    .toString()
    .trim();

  const quickScreen = buildQuickScreenMarkdown(tests);
  const drillsT0T1 = buildDrillLibraryMarkdown(drills, { tierMin: 0, tierMax: 1 });
  const drillsT2 = buildDrillLibraryMarkdown(drills, { tierMin: 2, tierMax: 2 });

  const replacements = new Map([
    ["{{DATE}}", formatDate(now)],
    ["{{GIT_SHA}}", gitSha],
    ["{{TESTS_VERSION}}", tests.version ?? "unknown"],
    ["{{DRILLS_VERSION}}", drillsDoc.version ?? "unknown"],
    ["{{QUICK_SCREEN}}", quickScreen],
    ["{{DRILLS_T0_T1}}", drillsT0T1],
    ["{{DRILLS_T2}}", drillsT2]
  ]);

  let out = templateRaw;
  for (const [key, value] of replacements.entries()) {
    if (!out.includes(key)) {
      throw new Error(`Missing placeholder ${key} in ${path.relative(ROOT_DIR, templatePath)}`);
    }
    out = out.replaceAll(key, String(value));
  }

  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(outPath, out);
  process.stdout.write(`Wrote ${path.relative(ROOT_DIR, outPath)}\n`);
}

await main();


#!/usr/bin/env node

import { Command } from "commander";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { drills, tests } from "@algm/data";
import {
  classifyQuick,
  chooseMinimalDrillSet,
  inferPositiveSegments,
  protocolToCard
} from "@algm/core";
import type { QuickResult } from "@algm/core";

const program = new Command();

program
  .name("algm")
  .description("Axial Load Gradient Model CLI")
  .version("0.1.0");

program
  .command("quick")
  .description("Run the Quick screen and generate a protocol")
  .option("--input <path>", "Read Quick screen results from JSON")
  .option("--output <path>", "Write protocol output to JSON")
  .option("--explain", "Include selection details")
  .option("--log", "Append run to a local log file")
  .option("--log-dir <path>", "Directory for logs (default: ./.algm)")
  .action(async (options) => {
    const quick = tests.quick;
    const result = options.input
      ? readQuickResult(options.input)
      : await promptQuickResult(quick);

    const classification = classifyQuick(result, quick);
    const targets = inferPositiveSegments(result, quick);
    const chosen = chooseMinimalDrillSet(targets, drills, { maxTier: 1 });
    const card = protocolToCard(targets, chosen);

    const outputObj = buildOutput(result, classification, card, options.explain === true);

    if (options.output) {
      const outPath = path.resolve(process.cwd(), options.output);
      fs.writeFileSync(outPath, JSON.stringify(outputObj, null, 2));
    } else {
      printOutput(outputObj);
    }

    if (options.log) {
      appendLog(outputObj, options.logDir);
    }
  });

const cleanedArgv = process.argv.filter((arg, index) => {
  if (index < 2) return true;
  return arg !== "--";
});

program.parse(cleanedArgv);

if (cleanedArgv.slice(2).length === 0) {
  program.outputHelp();
}

function readQuickResult(filePath: string): QuickResult {
  const absPath = path.resolve(process.cwd(), filePath);
  const raw = fs.readFileSync(absPath, "utf8");
  const parsed = JSON.parse(raw) as QuickResult;
  if (!parsed || !Array.isArray(parsed.steps)) {
    throw new Error("Invalid input: expected { steps: [...] }");
  }
  return parsed;
}

async function promptQuickResult(quick: typeof tests.quick): Promise<QuickResult> {
  const rl = readline.createInterface({ input, output });
  const steps: QuickResult["steps"] = [];

  for (const step of quick.steps) {
    if (step.sided) {
      const left = await askYesNo(rl, `Step ${step.id} (${step.name}) - left side failed?`);
      const right = await askYesNo(rl, `Step ${step.id} (${step.name}) - right side failed?`);
      const failed = left || right;
      const side = left && right ? "B" : left ? "L" : right ? "R" : undefined;
      steps.push({ id: step.id, failed, side });
    } else {
      const failed = await askYesNo(rl, `Step ${step.id} (${step.name}) failed?`);
      steps.push({ id: step.id, failed });
    }
  }

  await rl.close();
  return { steps };
}

async function askYesNo(rl: readline.Interface, prompt: string): Promise<boolean> {
  const answer = await rl.question(`${prompt} (y/n) `);
  return answer.trim().toLowerCase().startsWith("y");
}

function buildOutput(
  result: QuickResult,
  classification: ReturnType<typeof classifyQuick>,
  card: ReturnType<typeof protocolToCard>,
  explain: boolean
) {
  const failedSteps = result.steps
    .filter((s) => s.failed)
    .map((s) => ({ id: s.id, side: s.side }));

  const drillsOut = card.orderedDrills.map((d) => ({
    id: d.id,
    name: d.name,
    dose: d.dose,
    signature: d.signature,
    failureMode: d.failureMode
  }));

  return {
    quick: {
      fails: classification.fails,
      classification: classification.classification,
      failedSteps
    },
    targets: card.targets,
    drills: drillsOut,
    notes: card.notes,
    explain: explain
      ? {
          chosenIds: card.orderedDrills.map((d) => d.id),
          signatures: card.orderedDrills.map((d) => ({ id: d.id, signature: d.signature }))
        }
      : undefined
  };
}

function printOutput(outputObj: ReturnType<typeof buildOutput>) {
  console.log("\nALGM Quick Screen");
  console.log(`Classification: ${outputObj.quick.classification} (${outputObj.quick.fails} fails)`);
  if (outputObj.quick.failedSteps.length) {
    console.log("Failed steps:");
    for (const step of outputObj.quick.failedSteps) {
      console.log(`- ${step.id}${step.side ? ` (${step.side})` : ""}`);
    }
  } else {
    console.log("Failed steps: none");
  }

  if (!outputObj.targets.length) {
    console.log("\nTargets: none (no drill selection)");
    return;
  }

  console.log(`\nTargets: ${outputObj.targets.join(", ")}`);
  console.log("\nProtocol:");
  for (const drill of outputObj.drills) {
    console.log(`- ${drill.id}: ${drill.name} (${drill.dose})`);
  }

  if (outputObj.notes.length) {
    console.log("\nNotes:");
    for (const note of outputObj.notes) console.log(`- ${note}`);
  }
}

function appendLog(data: ReturnType<typeof buildOutput>, logDir?: string) {
  const baseDir = logDir ? path.resolve(process.cwd(), logDir) : path.resolve(process.cwd(), ".algm");
  fs.mkdirSync(baseDir, { recursive: true });
  const entry = {
    timestamp: new Date().toISOString(),
    ...data
  };
  const logPath = path.join(baseDir, "runs.jsonl");
  fs.appendFileSync(logPath, JSON.stringify(entry) + "\n");
}

#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const sourceBaseDir = path.join(root, "infographics", "base");
const sourceSvgDir = path.join(root, "infographics", "final", "svg");
const printDir = path.join(root, "infographics", "print");
const printBaseDir = path.join(printDir, "base");
const printSvgDir = path.join(printDir, "svg");
const plateDir = path.join(printDir, "plates");
const letterDir = path.join(printDir, "letter");
const a4Dir = path.join(printDir, "a4");
const previewDir = path.join(printDir, "previews");

for (const directory of [printBaseDir, printSvgDir, plateDir, letterDir, a4Dir, previewDir]) {
  fs.mkdirSync(directory, { recursive: true });
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? root,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    process.stderr.write(result.stderr || result.stdout || `Failed: ${command} ${args.join(" ")}\n`);
    process.exit(result.status ?? 1);
  }
}

function orderKey(filename) {
  const match = filename.match(/^(standing|seated)-(\d+)/);
  if (!match) return Number.MAX_SAFE_INTEGER;
  return (match[1] === "standing" ? 0 : 100) + Number(match[2]);
}

const sourceSvgs = fs.readdirSync(sourceSvgDir)
  .filter((filename) => filename.endsWith(".svg"))
  .sort((a, b) => orderKey(a) - orderKey(b));

if (sourceSvgs.length !== 16) {
  throw new Error(`Expected 16 source SVGs, found ${sourceSvgs.length}`);
}

const colorMap = new Map([
  ["#F4EFE3", "#FFFFFF"],
  ["#EEE7D8", "#FFFFFF"],
  ["#FBF8F0", "#FFFFFF"],
  ["#9E8F78", "#000000"],
  ["#7B6D5A", "#000000"],
  ["#202320", "#000000"],
  ["#9A3F2F", "#000000"],
  ["#B8AA94", "#000000"],
  ["#C6B9A4", "#000000"],
  ["#D8CEBA", "#000000"],
  ["#1B6C8E", "#000000"],
  ["#B44731", "#000000"],
  ["#47705E", "#000000"],
  ["#777066", "#000000"],
  ["#8B6B2E", "#000000"],
  ["#6C4C83", "#000000"],
  ["#5E5A53", "#000000"],
  ["#746D62", "#000000"],
]);

for (const sourceSvgName of sourceSvgs) {
  const stem = path.basename(sourceSvgName, ".svg");
  const sourceBase = path.join(sourceBaseDir, `${stem}.png`);
  const printBase = path.join(printBaseDir, `${stem}.png`);
  const printSvg = path.join(printSvgDir, sourceSvgName);
  const platePng = path.join(plateDir, `${stem}.png`);

  if (!fs.existsSync(sourceBase)) {
    throw new Error(`Missing source illustration: ${sourceBase}`);
  }

  // Keep the pose drawings and movement arrows while removing cream paper,
  // soft shading, and every color. The result is true one-bit line art.
  run("magick", [
    sourceBase,
    "-colorspace", "Gray",
    "-threshold", "86%",
    "-type", "bilevel",
    "-strip",
    printBase,
  ]);

  let svg = fs.readFileSync(path.join(sourceSvgDir, sourceSvgName), "utf8");
  svg = svg.replaceAll("../../base/", "../base/");
  for (const [from, to] of colorMap) svg = svg.replaceAll(from, to);
  svg = svg.replace(
    "Blue = inhale · cinnabar = exhale · green = natural · gray = no explicit cue · ochre = phase context only",
    "Every breath phase is written explicitly in black; this edition does not require a color key.",
  );
  svg = svg.replace(
    "Visual study aid · Full bilingual wording: shaolin-exercises-translation.md",
    "MONOCHROME PRINT EDITION · Full bilingual wording: shaolin-exercises-translation.md",
  );
  fs.writeFileSync(printSvg, svg);

  run("magick", [
    path.basename(printSvg),
    "-background", "white",
    "-alpha", "remove",
    "-colorspace", "Gray",
    "-depth", "8",
    "-strip",
    platePng,
  ], { cwd: printSvgDir });

  // librsvg on this host does not reliably apply a CJK fallback font.
  // The SVG retains editable Chinese text; this overlay guarantees it in PNG/PDF.
  const chineseMatch = svg.match(/text-anchor="end"[^>]*font-family="Heiti-SC-Medium"[^>]*>([^<]+)<\/text>/);
  if (!chineseMatch) throw new Error(`Could not find Chinese title in ${sourceSvgName}`);
  const titledPng = `${platePng}.titled.png`;
  run("magick", [
    platePng,
    "-font", "Heiti-SC-Medium",
    "-fill", "black",
    "-pointsize", "40",
    "-gravity", "NorthEast",
    "-annotate", "+53+38",
    chineseMatch[1],
    "-colorspace", "Gray",
    "-depth", "8",
    "-strip",
    titledPng,
  ]);
  fs.renameSync(titledPng, platePng);

  const pageTargets = [
    { directory: letterDir, width: 2550, height: 3300, box: "2250x3120" },
    { directory: a4Dir, width: 2480, height: 3508, box: "2260x3268" },
  ];
  for (const target of pageTargets) {
    run("magick", [
      platePng,
      "-resize", target.box,
      "-gravity", "center",
      "-background", "white",
      "-extent", `${target.width}x${target.height}`,
      "-units", "PixelsPerInch",
      "-density", "300",
      "-colorspace", "Gray",
      "-depth", "8",
      "-strip",
      path.join(target.directory, `${stem}.png`),
    ]);
  }

  process.stdout.write(`${path.relative(root, platePng)}\n`);
}

const orderedStems = sourceSvgs.map((filename) => path.basename(filename, ".svg"));
const letterPages = orderedStems.map((stem) => path.join(letterDir, `${stem}.png`));
const a4Pages = orderedStems.map((stem) => path.join(a4Dir, `${stem}.png`));

run("magick", [
  ...letterPages,
  "-units", "PixelsPerInch",
  "-density", "300",
  "-compress", "Zip",
  path.join(printDir, "shaolin-printer-friendly-letter.pdf"),
]);

run("magick", [
  ...a4Pages,
  "-units", "PixelsPerInch",
  "-density", "300",
  "-compress", "Zip",
  path.join(printDir, "shaolin-printer-friendly-a4.pdf"),
]);

run("magick", [
  "montage",
  ...orderedStems.map((stem) => path.join(plateDir, `${stem}.png`)),
  "-thumbnail", "320x462",
  "-tile", "4x4",
  "-geometry", "+12+18",
  "-background", "white",
  "-quality", "90",
  path.join(previewDir, "printer-friendly-contact-sheet.jpg"),
]);

process.stdout.write("Built Letter and A4 PNG sets, PDFs, SVGs, and contact sheet.\n");

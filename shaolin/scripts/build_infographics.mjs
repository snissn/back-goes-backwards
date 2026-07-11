#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const baseDir = path.join(root, "infographics", "base");
const finalDir = path.join(root, "infographics", "final");
const svgDir = path.join(finalDir, "svg");
fs.mkdirSync(svgDir, { recursive: true });

const colors = {
  inhale: "#1B6C8E",
  exhale: "#B44731",
  natural: "#47705E",
  none: "#777066",
  context: "#8B6B2E",
  mixed: "#6C4C83",
  ink: "#202320",
  sub: "#5E5A53",
  paper: "#F4EFE3",
  card: "#FBF8F0",
  rule: "#D8CEBA",
};

const defs = [
  {
    file: "standing-01-steps-01-06",
    base: "standing-01-steps-01-06.png",
    kicker: "STANDING-METHOD TU-NA · PLATE 1 OF 5",
    chinese: "站法吐纳功",
    title: "Standing Method · Steps 1–6",
    figures: "SOURCE FIGURES 2-1—2-6",
    steps: [
      s("1", "natural", "BREATHE NATURALLY", "Feet together; torso upright; palms at sides; gaze forward."),
      s("2", "mixed", "DEEP INHALE + LONG EXHALE · REPEAT", "Step left slightly wider than shoulders. Hold palms at lower dantian, right palm outside; remain still. Number self-selected."),
      s("3", "mixed", "DEEP NASAL INHALE → LONG NASAL EXHALE", "Raise palms to ear level, palms down; then slowly spread arms and place palms outside hips, palms out."),
      s("4", "inhale", "INHALE BEGINS", "Raise arms outward and upward to shoulder height; palms up, fingertips outward."),
      s("5", "inhale", "CONTINUE INHALING UNTIL FULL", "Bend elbows; bring palms before forehead, fingertips facing, palms down."),
      s("6", "exhale", "LONG NASAL EXHALE", "Press palms down past face and chest to the lower abdomen."),
    ],
    timeline: "1 natural · 2 several deep-inhale/long-exhale cycles · 3 inhale then exhale · 4→5 one inhale to full · 6 exhale",
  },
  {
    file: "standing-02-steps-07-12",
    base: "standing-02-steps-07-12.png",
    kicker: "STANDING-METHOD TU-NA · PLATE 2 OF 5",
    chinese: "站法吐纳功",
    title: "Standing Method · Steps 7–12",
    figures: "SOURCE FIGURES 2-7—2-12",
    steps: [
      s("7", "inhale", "DEEP NASAL INHALE", "Externally rotate palms up; raise them before the armpits, fingertips forward; gaze ahead."),
      s("8", "exhale", "LONG NASAL EXHALE", "Turn palms and push forward until wrists are shoulder-high; palms forward, fingertips up."),
      s("9", "inhale", "INHALE BEGINS", "Spread arms left/right at shoulder height; tiger’s mouths down, palms backward."),
      s("10", "inhale", "CONTINUE INHALING · NO INTERRUPTION", "Curl hands into fists and draw them down to the waist; fist interiors up."),
      s("11", "exhale", "EXHALE BEGINS", "Open fists; arc palms up before forehead, palms down, fingers spread and facing."),
      s("12", "exhale", "CONTINUE EXHALING · NO INTERRUPTION", "Press both palms down past the chest to the lower abdomen."),
    ],
    timeline: "7 inhale · 8 exhale · 9→10 one uninterrupted inhale · 11→12 one uninterrupted exhale",
  },
  {
    file: "standing-03-steps-13-18",
    base: "standing-03-steps-13-18.png",
    kicker: "STANDING-METHOD TU-NA · PLATE 3 OF 5",
    chinese: "站法吐纳功",
    title: "Standing Method · Steps 13–18",
    figures: "SOURCE FIGURES 2-13—2-18",
    steps: [
      s("13", "inhale", "INHALE BEGINS", "Open arms left/right at shoulder height; palms up, fingertips outward."),
      s("14", "inhale", "CONTINUE INHALING · NO INTERRUPTION", "Arc both palms overhead and join them in prayer; fingertips up; gaze ahead."),
      s("15", "exhale", "LONG NASAL EXHALE", "Sink joined palms to nose height; elbows remain shoulder-high and arms form a half-arc."),
      s("16", "inhale", "DEEP NASAL INHALE", "Slowly rotate joined palms inward; fingertips align toward the nose, tiger’s mouths down."),
      s("17", "exhale", "EXHALE BEGINS", "Separate palm heels; thumb tips face, index tips meet; push forward to straight arms."),
      s("18", "exhale", "CONTINUE EXHALING · NO INTERRUPTION", "Separate hands sideways; wrists shoulder-high, vertical palms outward, fingertips up."),
    ],
    timeline: "13→14 one uninterrupted inhale · 15 exhale · 16 inhale · 17→18 one uninterrupted exhale",
  },
  {
    file: "standing-04-steps-19-23",
    base: "standing-04-steps-19-23.png",
    kicker: "STANDING-METHOD TU-NA · PLATE 4 OF 5",
    chinese: "站法吐纳功",
    title: "Standing Method · Steps 19–23",
    figures: "SOURCE FIGURES 2-19—2-23",
    steps: [
      s("19", "inhale", "DEEP NASAL INHALE BEGINS", "Sink hands; extend palms/fingers flat so shoulders, arms, and palms form one line."),
      s("20", "inhale", "CONTINUE INHALING · NO INTERRUPTION", "Turn both palms upward; fingertips point outward; gaze ahead."),
      s("21", "inhale", "CONTINUE INHALING · NO INTERRUPTION", "Raise and draw palms inward above forehead; fingertips face, palms down."),
      s("22", "inhale", "CONTINUE INHALING · NO INTERRUPTION", "Press palms down past chest to the waist sides; fingertips face."),
      s("23", "exhale", "LONG NASAL EXHALE", "Form fists and raise them forward on straight, shoulder-high arms; fist interiors up."),
    ],
    timeline: "19→20→21→22 = ONE UNINTERRUPTED INHALATION · 23 = long exhalation · the source does not instruct a hold",
    alert: true,
  },
  {
    file: "standing-05-steps-24-29",
    base: "standing-05-steps-24-29.png",
    kicker: "STANDING-METHOD TU-NA · PLATE 5 OF 5",
    chinese: "站法吐纳功",
    title: "Standing Method · Steps 24–29",
    figures: "SOURCE FIGURES 2-24—2-29",
    steps: [
      s("24", "inhale", "DEEP NASAL INHALE BEGINS", "Turn fists inward and withdraw to waist sides; fist interiors down."),
      s("25", "inhale", "CONTINUE INHALING · NO INTERRUPTION", "Lift fists before chest; fist faces oppose each other, interiors down."),
      s("26", "inhale", "CONTINUE INHALING · NO INTERRUPTION", "Pull fists before shoulders while lifting both heels; support on balls of feet."),
      s("27", "exhale", "LONG NASAL EXHALE", "Slowly return fists to waist, interiors down; lower both heels."),
      s("28", "inhale", "DEEP NASAL INHALE", "Push fists forward at shoulder height; upper body leans slightly back, fist interiors up."),
      s("29", "exhale", "LONG NASAL EXHALE → EVEN BREATH", "Open fists, lower palms to sides; relax whole body, regulate breath until even, and close."),
    ],
    timeline: "24→25→26 one uninterrupted inhale · 27 exhale · 28 inhale · 29 exhale, then regulate breathing until even",
  },
  {
    file: "seated-01-four-cong",
    base: "seated-01-four-cong.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 1",
    chinese: "四聪运转",
    title: "Circulating the Four Cong Points",
    figures: "SOURCE FIGURES 2-30—2-31",
    steps: [
      s("1", "none", "NO EXPLICIT BREATH CUE", "Settle in half-lotus/single-cross-legged seat; palms on knees; upper body upright."),
      s("2A", "mixed", "COORDINATE WITH TU-NA", "Align palm Laogong (PC8) to crown Baihui (GV20); whole palm covers Sishencong (EX-HN1)."),
      s("2B", "mixed", "ONE DEEP, LONG BREATH PER FULL CIRCLE", "Overlap palms: men left underneath; women right underneath. Rotate left several circles, then right several."),
      s("AFTER", "mixed", "SLOW MOTION · DEEP, LONG BREATHING", "After several rotations, press firmly on the crown several times."),
    ],
    timeline: "Every complete circle receives one deep, long breath. The source does NOT divide inhale/exhale between halves of a circle.",
    alert: true,
  },
  {
    file: "seated-02-sun-moon",
    base: "seated-02-sun-moon.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 2",
    chinese: "日月通明",
    title: "Sun and Moon Shining Bright",
    figures: "SOURCE FIGURES 2-32—2-35",
    steps: [
      s("1", "inhale", "DEEP NASAL INHALE BEGINS", "Palms lightly cover face; palm heels below cheekbones, palm centers over cheekbones."),
      s("2", "inhale", "CONTINUE INHALING UNTIL FULL", "Push palms upward like washing the face until middle fingers reach Qianding (GV21)."),
      s("3", "exhale", "LONG NASAL EXHALE BEGINS", "Press and rub both palms downward over the face."),
      s("4", "context", "NO NEW CUE · FOLLOWS DOWNWARD EXHALE PHASE", "At Ruzhong (ST17), turn fingertips down; descend to Qichong (ST30), then rub abdomen horizontally."),
    ],
    timeline: "1→2 one inhale to full · 3 starts the exhale · 4 continues the downward movement with no new breath wording · source: one EXHALE then one INHALE per repetition",
  },
  {
    file: "seated-03-two-yang",
    base: "seated-03-two-yang.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 3",
    chinese: "双阳下降",
    title: "Descent of the Two Yang Channels",
    figures: "SOURCE FIGURES 2-36—2-40",
    steps: [
      s("1", "inhale", "DEEP NASAL INHALE BEGINS", "Raise hands; press little-finger pads to Jingming (BL1) at inner eye corners."),
      s("2", "inhale", "CONTINUE DEEP INHALE · NO INTERRUPTION", "Move both palms upward over the crown."),
      s("3", "inhale", "CONTINUE INHALING UNTIL FULL", "Trace down/back to Fengchi (GB20) at the base of the skull."),
      s("4", "exhale", "LONG NASAL EXHALE BEGINS", "Turn palms inward and descend past the collarbones."),
      s("5", "context", "NO NEW CUE · PHYSICAL DESCENT CONTINUES", "Pass GB22, GB24, GB25, GB30 and continue to Zuqiaoyin (GB44). Do not strain."),
    ],
    timeline: "1→2→3 one continuous deep inhale to full · 4 begins a long exhale · 5 continues the route but supplies no new breath phrase",
  },
  {
    file: "seated-04-tinggong",
    base: "seated-04-tinggong.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 4",
    chinese: "翻转听宫",
    title: "Turning at Tinggong · Hearing Palace",
    figures: "SOURCE FIGURES 2-41—2-43",
    steps: [
      s("1", "inhale", "NASAL INHALE BEGINS", "Use sword fingers at Tinggong (SI19) and Tinghui (GB2) in front of the ears."),
      s("2", "inhale", "CONTINUE INHALING UNTIL FULL", "Push upward past Ermen (TE21) to Touwei (ST8) and Toulinqi (GB15)."),
      s("3", "exhale", "LONG NASAL EXHALE", "Move sword fingers downward, point-pressing or rubbing the points beside the ears."),
    ],
    timeline: "1→2 one inhale to full · 3 one long nasal exhale · repeat",
  },
  {
    file: "seated-05-five-wheels",
    base: "seated-05-five-wheels.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 5",
    chinese: "五轮运转",
    title: "Circulation of the Five Wheels",
    figures: "SOURCE FIGURES 2-44—2-46",
    steps: [
      s("1", "inhale", "DEEP NASAL INHALE BEGINS", "Press sword fingers at Chengqi (ST1), directly below the eye sockets."),
      s("2", "inhale", "CONTINUE INHALING UNTIL FULL", "Circle outward/up through GB1, Yuwei, TE23, EX-HN4, GB14 to Toulinqi (GB15)."),
      s("3", "exhale", "NASAL EXHALE", "Move inward/down through BL3, BL4, BL2; rub inner eye corners, then descend nose bridge."),
    ],
    timeline: "1→2 one inhale to full · 3 one nasal exhale · one inhale + one exhale = one repetition",
  },
  {
    file: "seated-06-tap-teeth",
    base: "seated-06-tap-teeth.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 6",
    chinese: "叩齿有声",
    title: "Tap the Teeth Audibly",
    figures: "SOURCE FIGURE 2-47 + SUPPLEMENTARY VIEW",
    steps: [
      s("SET", "none", "NO EXPLICIT BREATH CUE", "Place both palms on the knees."),
      s("TAP", "none", "NO EXPLICIT BREATH CUE", "Tap upper and lower teeth together slowly, producing an audible clicking sound; do not grind."),
      s("REPEAT", "none", "NO EXPLICIT BREATH CUE", "The source says warmth and saliva should develop; if no warmth is felt, the taps may be doubled."),
    ],
    timeline: "The source assigns NO inhale/exhale timing to the tooth taps. Do not add one.",
    alert: true,
  },
  {
    file: "seated-07-golden-elixir",
    base: "seated-07-golden-elixir.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 7",
    chinese: "火炼金丹",
    title: "Fire Refines the Golden Elixir",
    figures: "SOURCE FIGURES 2-48—2-52",
    steps: [
      s("1", "none", "NO EXPLICIT BREATH CUE", "Outer foot edges meet, soles up, knees curved like a full moon; fingertips rub sole centers."),
      s("2A", "inhale", "DEEP NASAL INHALE", "Lift toes and gradually straighten legs; hands begin at Yongquan (KI1)."),
      s("2B", "inhale", "SAME INHALE PHASE", "Rub up inner-leg Kidney routes, past groin creases, to Mingmen (GV4) at the waist."),
      s("3A", "exhale", "NASAL EXHALE", "Rub along the Foot-Taiyang Bladder routes on the return."),
      s("3B", "exhale", "SAME EXHALE PHASE", "Continue to Zhiyin (BL67) at the lateral tips of the fifth toes."),
    ],
    timeline: "Step 1 uncued · Step 2 = inhale, Yongquan→inner legs→Mingmen · Step 3 = exhale, Bladder route→Zhiyin",
  },
  {
    file: "seated-08-heding",
    base: "seated-08-heding.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 8",
    chinese: "热消鹤顶",
    title: "Heat Dispersal at Heding · Crane’s Crown",
    figures: "SOURCE FIGURES 2-53—2-54",
    steps: [
      s("1", "inhale", "DEEP NASAL INHALE · INSIDE → OUTSIDE", "Palm Laogong (PC8) rests over Heding (EX-LE2); index/ring fingers hook Dubi (ST35). Rub outward."),
      s("2", "exhale", "LONG NASAL EXHALE · OUTSIDE → INSIDE", "Reverse the massage direction and rub inward."),
    ],
    timeline: "Inside→outside on the inhale · outside→inside on the exhale · together they complete exactly ONE full massage circle",
    alert: true,
  },
  {
    file: "seated-09-qian-kun",
    base: "seated-09-qian-kun.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 9",
    chinese: "旋转乾坤",
    title: "Revolving Qian and Kun · Heaven and Earth",
    figures: "SOURCE FIGURES 2-55—2-61",
    steps: [
      s("1", "inhale", "NASAL INHALE BEGINS", "Raise palms forward/up, palms facing up."),
      s("2", "inhale", "CONTINUE INHALING · NO INTERRUPTION", "Rotate while raising; form claws and press down at Jianjing (GB21)."),
      s("3", "exhale", "NASAL EXHALE BEGINS", "Open claws to palms; rub from armpits backward/down along Qihu (ST13)."),
      s("4", "exhale", "CONTINUE LONG EXHALE UNTIL FINISHED", "Hegu (LI4) to Shenshu (BL23); spread fingers, bow forward, extend arms back."),
      s("5", "inhale", "NASAL INHALE BEGINS", "Arc palms from sides forward/up to chest; externally rotate palms up."),
      s("6", "inhale", "CONTINUE DEEP INHALE UNTIL FULL", "Bend elbows; palms inward, fingertips down; align PC8 toward Quze (PC3)."),
      s("7", "exhale", "NASAL EXHALE", "Turn palms outward, spread fingers, push forward in a half-arc at Renzhong height."),
    ],
    timeline: "1→2 one uninterrupted inhale · 3→4 exhale to completion · 5→6 inhale to full · 7 exhale",
  },
  {
    file: "seated-10-azure-dragon",
    base: "seated-10-azure-dragon.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 10",
    chinese: "青龙探首",
    title: "Azure Dragon Probes Its Head",
    figures: "SOURCE FIGURES 2-62—2-66",
    steps: [
      s("1", "none", "NO EXPLICIT BREATH CUE", "Press palms behind waist at Shenshu (BL23) and Zhishi (BL52)."),
      s("2", "natural", "BREATHE NATURALLY", "Trace and press downward along the Foot-Taiyang Bladder route."),
      s("3", "context", "NO NEW CUE · NATURAL IS THE ONLY STATED PATTERN", "Bend waist/knees; follow outer-leg Gallbladder routes to feet; thumbs press Gongsun (SP4)."),
      s("4", "context", "NO NEW BREATH CUE", "Reach head/torso forward; grip toes inward, then rub Yongquan (KI1) on soles."),
      s("5", "context", "NO NEW BREATH CUE", "Extend legs forward; draw hands back along inner legs."),
      s("6", "context", "NO NEW BREATH CUE", "Return hands past lower abdomen to waist; restore head/waist to the opening posture."),
    ],
    timeline: "Only one breath instruction appears: NATURAL TU-NA/BREATHING in Step 2. No later movement is assigned to a specific inhale or exhale.",
    alert: true,
  },
  {
    file: "seated-11-crane",
    base: "seated-11-crane.png",
    kicker: "SEATED-METHOD TU-NA · EXERCISE 11",
    chinese: "仙鹤腾空",
    title: "Immortal Crane Soars into the Air",
    figures: "SOURCE FIGURES 2-67—2-71",
    steps: [
      s("1", "none", "NO EXPLICIT BREATH CUE", "Sit on a stool, feet flat; relax palms and let arms hang at sides."),
      s("2", "inhale", "DEEP NASAL INHALE AS ARMS RISE", "Sink shoulders, drop elbows, contain chest, lengthen back; lift arms sideways, fingertips down."),
      s("3", "inhale", "CONTINUE INHALING UNTIL FULL", "At shoulder height, extend fingers and flatten palms."),
      s("4A", "exhale", "EXHALE AS ARMS FALL", "Let both arms descend naturally and very slowly."),
      s("4B", "exhale", "SAME FALLING / EXHALE PHASE", "Return arms to relaxed sides; repeat one rise and one fall with each breath cycle."),
    ],
    timeline: "2→3 one inhale to full while arms rise · 4 one exhale while arms slowly fall · movement remains light, gentle, and natural",
  },
];

function s(label, kind, breath, action) {
  return { label, kind, breath, action };
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrap(text, max) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textLines(lines, x, y, size, lineHeight, attrs = "") {
  return `<text x="${x}" y="${y}" font-size="${size}" ${attrs}>${lines
    .map((line, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : lineHeight}">${esc(line)}</tspan>`)
    .join("")}</text>`;
}

function render(def) {
  const W = 1800;
  const H = 2600;
  const contentTop = 230;
  const footerY = 2295;
  const baseX = 52;
  const baseY = contentTop;
  const baseW = 1100;
  const baseH = 2025;
  const sideX = 1190;
  const sideW = 558;
  const sideH = 2025;
  const gap = 13;
  const cardH = Math.floor((sideH - gap * (def.steps.length - 1)) / def.steps.length);
  const relImage = path.relative(svgDir, path.join(baseDir, def.base));

  const cards = def.steps.map((step, index) => {
    const y = baseY + index * (cardH + gap);
    const color = colors[step.kind] ?? colors.none;
    const breathLines = wrap(step.breath, 36);
    const actionMax = def.steps.length >= 7 ? 41 : def.steps.length >= 6 ? 39 : 43;
    const actionLines = wrap(step.action, actionMax);
    const actionSize = def.steps.length >= 7 ? 20 : def.steps.length >= 6 ? 21 : 23;
    const breathSize = def.steps.length >= 7 ? 18 : 19;
    const actionY = y + 80 + breathLines.length * 22;
    return `
      <g>
        <rect x="${sideX}" y="${y}" width="${sideW}" height="${cardH}" rx="20" fill="${colors.card}" stroke="${colors.rule}" stroke-width="2"/>
        <rect x="${sideX}" y="${y}" width="9" height="${cardH}" rx="5" fill="${color}"/>
        <circle cx="${sideX + 43}" cy="${y + 43}" r="25" fill="${color}"/>
        <text x="${sideX + 43}" y="${y + 51}" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">${esc(step.label)}</text>
        ${textLines(breathLines, sideX + 82, y + 39, breathSize, 22, `font-weight="800" fill="${color}" letter-spacing="0.2"`)}
        ${textLines(actionLines, sideX + 30, actionY, actionSize, 28, `font-weight="450" fill="${colors.ink}"`)}
      </g>`;
  }).join("");

  const timelineLines = wrap(def.timeline, 105);
  const alertColor = def.alert ? "#B44731" : "#1B6C8E";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${colors.paper}"/>
  <rect x="24" y="24" width="1752" height="2552" rx="28" fill="none" stroke="#9E8F78" stroke-width="2"/>
  <style>
    text { font-family: "SF Pro Display", "Helvetica Neue", "PingFang SC", Arial, sans-serif; }
  </style>

  <text x="54" y="68" font-size="22" font-weight="800" letter-spacing="2.6" fill="#7B6D5A">${esc(def.kicker)}</text>
  <text x="54" y="146" font-size="58" font-weight="780" fill="${colors.ink}">${esc(def.title)}</text>
  <text x="1747" y="86" text-anchor="end" font-family="Heiti-SC-Medium" font-size="40" font-weight="650" fill="#9A3F2F">${esc(def.chinese)}</text>
  <text x="1747" y="137" text-anchor="end" font-size="20" font-weight="750" letter-spacing="1.3" fill="#7B6D5A">${esc(def.figures)}</text>
  <line x1="52" y1="182" x2="1748" y2="182" stroke="#B8AA94" stroke-width="2"/>

  <rect x="${baseX}" y="${baseY}" width="${baseW}" height="${baseH}" rx="24" fill="#EEE7D8" stroke="#C6B9A4" stroke-width="3"/>
  <image href="${esc(relImage)}" x="${baseX + 12}" y="${baseY + 12}" width="${baseW - 24}" height="${baseH - 24}" preserveAspectRatio="xMidYMid meet"/>
  ${cards}

  <rect x="52" y="${footerY}" width="1696" height="210" rx="22" fill="#FBF8F0" stroke="#C6B9A4" stroke-width="2"/>
  <rect x="52" y="${footerY}" width="12" height="210" rx="6" fill="${alertColor}"/>
  <text x="91" y="${footerY + 48}" font-size="20" font-weight="850" letter-spacing="2" fill="${alertColor}">EXACT BREATH TIMELINE</text>
  ${textLines(timelineLines, 91, footerY + 91, 26, 35, `font-weight="620" fill="${colors.ink}"`)}
  <text x="91" y="${footerY + 183}" font-size="17" fill="${colors.sub}">Blue = inhale · cinnabar = exhale · green = natural · gray = no explicit cue · ochre = phase context only</text>
  <text x="1740" y="2549" text-anchor="end" font-size="16" fill="#746D62">Visual study aid · Full bilingual wording: shaolin-exercises-translation.md</text>
</svg>`;
}

for (const def of defs) {
  const svgPath = path.join(svgDir, `${def.file}.svg`);
  const pngPath = path.join(finalDir, `${def.file}.png`);
  fs.writeFileSync(svgPath, render(def));
  const result = spawnSync("magick", [path.basename(svgPath), "-depth", "8", "-strip", pngPath], {
    cwd: svgDir,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    process.stderr.write(result.stderr || `Failed to render ${def.file}\n`);
    process.exit(result.status ?? 1);
  }
  // librsvg on this host does not reliably apply CJK fallback fonts inside SVG.
  // Add the verified Chinese exercise title with ImageMagick's explicit CJK font.
  const titledPath = `${pngPath}.titled.png`;
  const titleResult = spawnSync("magick", [
    pngPath,
    "-font", "Heiti-SC-Medium",
    "-fill", "#9A3F2F",
    "-pointsize", "40",
    "-gravity", "NorthEast",
    "-annotate", "+53+38",
    def.chinese,
    "-depth", "8",
    "-strip",
    titledPath,
  ], { encoding: "utf8" });
  if (titleResult.status !== 0) {
    process.stderr.write(titleResult.stderr || `Failed to add Chinese title to ${def.file}\n`);
    process.exit(titleResult.status ?? 1);
  }
  fs.renameSync(titledPath, pngPath);
  process.stdout.write(`${path.relative(root, pngPath)}\n`);
}

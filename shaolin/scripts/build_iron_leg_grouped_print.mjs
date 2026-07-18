import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const skillDir = path.join(root, 'iron-leg-skill');
const packetDir = path.join(skillDir, 'print');
const outputDir = path.join(skillDir, 'grouped-print');
const sectionDir = path.join(outputDir, 'sections');
const sourceDir = path.join(outputDir, 'source');
const previewDir = path.join(outputDir, 'preview');

for (const dir of [outputDir, sectionDir, sourceDir, previewDir]) {
  fs.mkdirSync(dir, { recursive: true });
}

const groups = [
  {
    id: '01-flexibility-and-leg-control',
    title: 'Flexibility & Leg Control',
    chinese: '柔功与控腿',
    range: [1, 10],
    figures: 'Chapter 1 · figures 1-1–1-17',
    description: 'Presses, held-leg lifts, splits, and controlled leg extension.',
    exercises: [
      'Front Leg Press', 'Side Leg Press', 'Rear Leg Press',
      'Crouching-Step Leg Press', 'Front Held-Leg Lift',
      'Side Held-Leg Lift', 'Rear Held-Leg Lift',
      'Front Split', 'Side Split', 'Controlled Leg Hold'
    ]
  },
  {
    id: '02-kicks-and-aerial-kicks',
    title: 'Kicks & Aerial Kicks',
    chinese: '踢腿与腾空腿法',
    range: [11, 19],
    figures: 'Chapter 1 · figures 1-18–1-55',
    description: 'Straight, crescent, thrust, jumping, and turning kick sequences.',
    exercises: [
      'Front Kick', 'Side Kick', 'Outward Crescent Kick',
      'Inward Crescent Kick', 'Snap Kick', 'Side Thrust Kick',
      'Flying Kick', 'Tornado Kick', 'Aerial Outward Lotus Kick'
    ]
  },
  {
    id: '03-strength-and-conditioning',
    title: 'Strength & Conditioning',
    chinese: '功力训练',
    range: [20, 28],
    figures: 'Chapter 1 · figures 1-56–1-74',
    description: 'Loaded leg strength, locomotion, progressive contact, and bag work.',
    exercises: [
      'Squat Holding a Stone Lock', 'Hooked Stone-Lock Leg Extensions',
      'Weighted Side Horse-Step Squat', 'Weighted Squat',
      'Weighted Heel Raise', 'Sandbag Leg Training',
      'Leg Conditioning Strikes', 'Post Kicking', 'Sandbag Kicking'
    ]
  },
  {
    id: '04-fundamental-footwork',
    title: 'Fundamental Footwork',
    chinese: '基本步法',
    range: [29, 43],
    figures: 'Chapter 2 · figures 2-1–2-53',
    description: 'Advancing, retreating, crossing, jumping, kneeling, and turning steps.',
    exercises: [
      'Advance Step', 'Entering Step', 'Following Step',
      'Follow-and-Advance Step', 'Retreat Step', 'Inserting Step',
      'Straddling Cross Step', 'Withdrawal Step', 'Beating Step',
      'Switch Jump Step', 'Vertical Jump Step', 'Kneeling Step',
      'Hooking Pivot Step', 'Cross-Follow Step', 'Leaping Step'
    ]
  },
  {
    id: '05-fundamental-body-methods',
    title: 'Fundamental Body Methods',
    chinese: '基本身法',
    range: [44, 59],
    figures: 'Chapter 2 · figures 2-54–2-100',
    description: 'Turning, leaning, level changes, evasions, falls, and aerial body turns.',
    exercises: [
      'Side Turn', 'Forward Bend', 'Backward Lean', 'Side Lean',
      'Rear Turn', 'Crouching Body Shift', 'Evasive Body Shift',
      'Aerial Rear Turn', 'Body Flip / Overturn', 'Side Fall to Ground',
      'Twisting Level Turn', 'Probing Body Extension', 'Swaying Body',
      'Aerial Flying Body', 'Forward Turn', 'Aerial Forward Turn'
    ]
  }
];

function packetPdf(number) {
  const prefix = `${String(number).padStart(2, '0')}-`;
  const matches = fs.readdirSync(packetDir)
    .filter(file => file.startsWith(prefix) && file.endsWith('.pdf'));
  if (matches.length !== 1) {
    throw new Error(`Expected one packet PDF for ${prefix}; found ${matches.length}`);
  }
  return path.join(packetDir, matches[0]);
}

function pageCount(pdf) {
  const info = execFileSync('pdfinfo', [pdf], { encoding: 'utf8' });
  const match = info.match(/^Pages:\s+(\d+)$/m);
  if (!match) throw new Error(`Could not read page count for ${pdf}`);
  return Number(match[1]);
}

function htmlDocument(body, title) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    @page { size: Letter portrait; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; color: #151515; font-family: "Helvetica Neue", Arial, sans-serif; }
    .page {
      width: 8.5in;
      height: 11in;
      padding: .62in .68in .58in;
      display: flex;
      flex-direction: column;
      background: #fff;
    }
    .kicker {
      color: #a87408;
      font-size: 10pt;
      font-weight: 900;
      letter-spacing: .13em;
      text-transform: uppercase;
    }
    h1 {
      max-width: 7in;
      margin: .18in 0 .08in;
      font-size: 34pt;
      line-height: .98;
      letter-spacing: -.025em;
    }
    .chinese {
      color: #666;
      font-size: 14pt;
      font-weight: 700;
      letter-spacing: .09em;
    }
    .rule { height: 3px; margin: .25in 0 .28in; background: #151515; }
    .lede {
      max-width: 6.8in;
      margin: 0;
      color: #444;
      font: 14pt/1.42 Georgia, "Times New Roman", serif;
    }
    .meta {
      margin-top: .24in;
      color: #7a6c4c;
      font-size: 9.5pt;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .contents {
      margin-top: .34in;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .13in .28in;
    }
    .item {
      min-height: .52in;
      padding: .1in .12in;
      border-top: 1.2pt solid #d8d3c6;
    }
    .item-num {
      color: #a87408;
      font-size: 8.5pt;
      font-weight: 900;
      letter-spacing: .08em;
    }
    .item-title {
      margin-top: .025in;
      font-size: 11pt;
      font-weight: 700;
      line-height: 1.12;
    }
    .group-list { margin-top: .34in; display: grid; gap: .12in; }
    .group {
      display: grid;
      grid-template-columns: .48in 1fr 1.35in;
      align-items: center;
      gap: .12in;
      padding: .12in .14in;
      border-top: 1.2pt solid #d8d3c6;
    }
    .group-num { color: #a87408; font-size: 18pt; font-weight: 900; }
    .group-title { font-size: 12.5pt; font-weight: 800; }
    .group-range { color: #666; text-align: right; font-size: 9pt; font-weight: 800; }
    footer {
      margin-top: auto;
      padding-top: .14in;
      border-top: 1pt solid #d8d3c6;
      color: #777;
      font: 9pt/1.3 Georgia, "Times New Roman", serif;
      text-align: center;
    }
  </style>
</head>
<body>${body}</body>
</html>`;
}

function writePdf(html, basename) {
  const htmlPath = path.join(sourceDir, `${basename}.html`);
  const pdfPath = path.join(sourceDir, `${basename}.pdf`);
  fs.writeFileSync(htmlPath, html);
  execFileSync('weasyprint', [htmlPath, pdfPath], { stdio: 'inherit' });
  if (pageCount(pdfPath) !== 1) throw new Error(`${basename} cover overflowed one page`);
  return pdfPath;
}

const workbookCover = writePdf(htmlDocument(`
  <section class="page">
    <div class="kicker">Shaolin Iron-Leg Skill · Grouped Print Edition</div>
    <h1>Exercises Organized for Practice</h1>
    <div class="chinese">少林铁腿绝技 · 分类打印版</div>
    <div class="rule"></div>
    <p class="lede">Fifty-nine standalone information sheets arranged by training family. Each instructional page retains the original two-row layout and source-figure numbering.</p>
    <div class="group-list">
      ${groups.map((group, index) => `
        <div class="group">
          <div class="group-num">${String(index + 1).padStart(2, '0')}</div>
          <div class="group-title">${group.title}<br><span class="chinese" style="font-size:9pt">${group.chinese}</span></div>
          <div class="group-range">Packets ${group.range[0]}–${group.range[1]}<br>${group.figures}</div>
        </div>`).join('').trim()}
    </div>
    <footer>Print on US Letter paper. For duplex printing, flip on the long edge. Section divider pages are intentionally included.</footer>
  </section>
`, 'Shaolin Iron-Leg Skill — Grouped Print Edition'), '00-workbook-cover');

const sectionPdfs = [];
for (const [index, group] of groups.entries()) {
  const packetPdfs = [];
  for (let number = group.range[0]; number <= group.range[1]; number += 1) {
    packetPdfs.push(packetPdf(number));
  }
  const exercisePages = packetPdfs.reduce((sum, pdf) => sum + pageCount(pdf), 0);
  const cover = writePdf(htmlDocument(`
    <section class="page">
      <div class="kicker">Section ${String(index + 1).padStart(2, '0')} · Packets ${group.range[0]}–${group.range[1]}</div>
      <h1>${group.title}</h1>
      <div class="chinese">${group.chinese}</div>
      <div class="rule"></div>
      <p class="lede">${group.description}</p>
      <div class="meta">${group.figures} · ${group.exercises.length} exercises · ${exercisePages} instructional pages</div>
      <div class="contents">
        ${group.exercises.map((exercise, exerciseIndex) => `
          <div class="item">
            <div class="item-num">${String(group.range[0] + exerciseIndex).padStart(2, '0')}</div>
            <div class="item-title">${exercise}</div>
          </div>`).join('').trim()}
      </div>
      <footer>Follow each instructional row left to right. The source gives no fixed breath timing.</footer>
    </section>
  `, group.title), `${group.id}-cover`);

  const sectionPdf = path.join(sectionDir, `${group.id}.pdf`);
  execFileSync('pdfunite', [cover, ...packetPdfs, sectionPdf]);
  const expectedPages = exercisePages + 1;
  if (pageCount(sectionPdf) !== expectedPages) {
    throw new Error(`${group.id} expected ${expectedPages} pages`);
  }
  sectionPdfs.push(sectionPdf);
  console.log(`${group.id}: ${group.exercises.length} exercises, ${expectedPages} pages including divider`);
}

const workbookPdf = path.join(outputDir, 'shaolin-iron-leg-grouped-workbook.pdf');
execFileSync('pdfunite', [workbookCover, ...sectionPdfs, workbookPdf]);
const expectedWorkbookPages = 1 + sectionPdfs.reduce((sum, pdf) => sum + pageCount(pdf), 0);
if (pageCount(workbookPdf) !== expectedWorkbookPages) {
  throw new Error(`Workbook expected ${expectedWorkbookPages} pages`);
}

const coverPdfs = [
  workbookCover,
  ...groups.map(group => path.join(sourceDir, `${group.id}-cover.pdf`))
];
const coverPngs = coverPdfs.map((pdf, index) => {
  const base = path.join(previewDir, `${String(index).padStart(2, '0')}-cover`);
  execFileSync('pdftoppm', ['-png', '-r', '120', '-singlefile', pdf, base], { stdio: 'ignore' });
  return `${base}.png`;
});
execFileSync('magick', [
  'montage', ...coverPngs,
  '-thumbnail', '408x528',
  '-tile', '3x',
  '-geometry', '+12+12',
  '-background', 'white',
  path.join(previewDir, 'grouped-covers-contact-sheet.jpg')
]);

console.log(`workbook: ${expectedWorkbookPages} pages`);

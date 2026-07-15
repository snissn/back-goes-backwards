import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'standing-sequence-dense-grid-ai');
const md = fs.readFileSync(path.join(root, 'standing-sequence-source-faithful/standing-sequence-bilingual.md'), 'utf8');

const breaths = {
  1:'Breathe naturally', 2:'Deep inhalations · prolonged exhalations',
  3:'Deep inhale through the nose · then prolonged exhale through the nose',
  4:'Inhale deeply through the nose', 5:'Continue inhaling until full',
  6:'Prolonged exhalation through the nose', 7:'Inhale deeply through the nose',
  8:'Prolonged exhalation through the nose', 9:'Inhale deeply through the nose',
  10:'Continue the same inhalation without interruption',
  11:'Prolonged exhalation through the nose',
  12:'Continue the same exhalation without interruption',
  13:'Inhale deeply through the nose', 14:'Continue the same inhalation without interruption',
  15:'Prolonged exhalation through the nose', 16:'Inhale deeply through the nose',
  17:'Prolonged exhalation through the nose', 18:'Continue the same exhalation without interruption',
  19:'Inhale deeply through the nose', 20:'Continue the same inhalation without interruption',
  21:'Continue the same inhalation without interruption', 22:'Continue the same inhalation without interruption',
  23:'Prolonged exhalation through the nose', 24:'Inhale deeply through the nose',
  25:'Continue the same inhalation without interruption', 26:'Continue the same inhalation without interruption',
  27:'Prolonged exhalation through the nose', 28:'Inhale deeply through the nose',
  29:'Prolonged exhalation through the nose'
};

const steps = [];
const re = /^### (\d+)\n[\s\S]*?\*\*English\*\*\n\n([\s\S]*?)(?=\n\n(?:### \d+|\*\*Visible figure labels|---))/gm;
for (const match of md.matchAll(re)) {
  const number = Number(match[1]);
  const english = match[2].replace(/\n+/g, ' ').replace(/\*([^*]+)\*/g, '<i>$1</i>').trim();
  steps.push({ number, english, breath: breaths[number] });
}
if (steps.length !== 29) throw new Error(`Expected 29 steps, found ${steps.length}`);

const cards = steps.map(s => `<article class="card">
  <div class="figure"><img src="figures/figure-2-${s.number}.png" alt="Redrawn Figure 2-${s.number}"></div>
  <div class="note"><div class="heading"><span class="number">${s.number}</span><span class="breath">${s.breath}</span></div><p>${s.english}</p></div>
</article>`);

const pages = [];
for (let i = 0; i < cards.length; i += 6) {
  pages.push(`<section class="page"><header><span>Standing-Method Tu-Na Practice</span><span>Steps ${i + 1}–${Math.min(i + 6, 29)}</span></header><div class="grid">${cards.slice(i, i + 6).join('\n')}</div><footer>Figures AI-redrawn from the original book diagrams · source-faithful English · “continue” never indicates a breath hold</footer></section>`);
}

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Standing-Method Tu-Na Practice</title><link rel="stylesheet" href="styles.css"></head><body>${pages.join('\n')}</body></html>`;
fs.writeFileSync(path.join(out, 'standing-sequence-dense-grid.html'), html);

const pdf = path.join(out, 'print/standing-sequence-dense-grid-ai-letter.pdf');
execFileSync('weasyprint', [path.join(out, 'standing-sequence-dense-grid.html'), pdf], {stdio:'inherit'});
execFileSync('pdftoppm', ['-png','-r','160',pdf,path.join(out,'print/pages/page')], {stdio:'ignore'});

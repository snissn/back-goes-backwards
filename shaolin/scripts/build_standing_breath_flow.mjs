import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
// cleaned book scans: original figures (with the book's own motion arrows) trimmed,
// with the stray half-figure on 2-7 removed and the Chinese captions chopped.
const figDir = path.join(root, 'standing-sequence-dense-grid/figures-clean');
const figRel = '../standing-sequence-dense-grid/figures-clean';
const out = path.join(root, 'standing-sequence-breath-flow');
fs.mkdirSync(path.join(out, 'preview'), { recursive: true });

function pngRatio(n) {
  const buf = fs.readFileSync(path.join(figDir, `figure-2-${n}.png`));
  return buf.readUInt32BE(16) / buf.readUInt32BE(20);
}

const GREEN = '#1f6f3a', RED = '#a4341f', GOLD = '#b8860b';

// ---- the breath score -------------------------------------------------------
// One row = one breath, shown as a transition through the poses it moves across;
// the first pose is faded (where you already are). Long breaths are split into two
// 1/3-page panels so every figure stays large. Captions carry palm/hand orientation
// verbatim from the source (原文).
const rows = [
  { kind:'settle', name:'Set&nbsp;up', dur:'breathe naturally', figs:[1,2],
    caption:'Step the <b>left</b> foot out shoulder-width. Draw both hands to the lower belly, right palm outside.' },
  { kind:'both', name:'In &amp; Out', dur:'one full breath, through the nose', figs:[2,3],
    caption:'<b class="in">Inhale</b> — hands up to ear height, <b>palms down</b>. <b class="ex">Exhale</b> — arms open and down to the hips, <b>palms out</b>.' },
  { kind:'inhale', name:'Inhale', dur:'deep &mdash; until the lungs are full', figs:[3,4,5],
    caption:'Raise the hands out and up to the shoulders, <b>palms up</b>; then fold them in to the forehead, <b>palms down</b>.' },
  { kind:'exhale', name:'Exhale', dur:'long &mdash; through the nose', figs:[5,6],
    caption:'Press both hands down the front &mdash; face, chest, to the lower belly.' },
  { kind:'inhale', name:'Inhale', dur:'deep &mdash; through the nose', figs:[6,7],
    caption:'Turn the palms <b>up</b>; lift the hands to the front of the armpits, fingertips forward.' },
  { kind:'exhale', name:'Exhale', dur:'long &mdash; through the nose', figs:[7,8],
    caption:'Turn the hands and push both palms forward at shoulder height &mdash; <b>palms out, fingertips up</b>.' },
  { kind:'inhale', name:'Inhale', dur:'deep &mdash; one unbroken breath', figs:[8,9,10],
    caption:'Open the arms wide, <b>palms back</b>; make fists and pull them to the waist, <b>palm-up</b>.' },
  { kind:'exhale', name:'Exhale', dur:'long &mdash; one unbroken breath', figs:[10,11,12],
    caption:'Open the fists; arc the hands up the sides to the forehead, <b>palms down</b>; press down to the belly.' },
  { kind:'inhale', name:'Inhale', dur:'deep &mdash; one unbroken breath', figs:[12,13,14],
    caption:'Spread the hands to the sides, <b>palms up</b>; raise them until the palms join overhead (<i>heshi</i>).' },
  { kind:'exhale', name:'Exhale', dur:'long &mdash; through the nose', figs:[14,15],
    caption:'Palms joined, sink the elbows to shoulder level &mdash; fingertips at nose height, arms a half-arc.' },
  { kind:'inhale', name:'Inhale', dur:'deep &mdash; through the nose', figs:[15,16],
    caption:'Slowly turn the joined palms inward, fingertips pointing back toward the nose.' },
  { kind:'exhale', name:'Exhale', dur:'long &mdash; one unbroken breath', figs:[16,17,18],
    caption:'Push the joined hands forward to straight; then open them out &mdash; <b>palms upright, facing out</b>.' },
  { kind:'inhale', name:'Inhale', dur:'deep &mdash; one long breath', figs:[18,19,20],
    caption:'Sink the hands to one straight line &mdash; shoulders, arms, hands level; turn the <b>palms up</b>.' },
  { kind:'inhale', name:'Inhale', dur:'&hellip; the same breath, continued', contd:true, figs:[20,21,22],
    caption:'Still inhaling &mdash; gather the hands above the forehead, <b>palms down</b>; press down to the waist.' },
  { kind:'exhale', name:'Exhale', dur:'long &mdash; through the nose', figs:[22,23],
    caption:'Make fists and raise them forward to shoulder height &mdash; arms straight, <b>palm-up</b>.' },
  { kind:'inhale', name:'Inhale', dur:'deep &mdash; one long breath', figs:[23,24,25],
    caption:'Turn the fists in, draw them to the waist, <b>palm-down</b>; lift them before the chest, knuckles facing.' },
  { kind:'inhale', name:'Inhale', dur:'&hellip; the same breath, continued', contd:true, figs:[25,26],
    caption:'Still inhaling &mdash; pull the fists apart to the shoulders as the heels rise onto the balls of the feet.' },
  { kind:'exhale', name:'Exhale', dur:'long &mdash; through the nose', figs:[26,27],
    caption:'Draw both fists back to the waist, <b>palm-down</b>; set the heels down.' },
  { kind:'inhale', name:'Inhale', dur:'deep &mdash; through the nose', figs:[27,28],
    caption:'Push both fists forward at shoulder height, <b>palm-up</b>, leaning the body slightly back.' },
  { kind:'exhale', name:'Close', dur:'long &mdash; then even out', figs:[28,29],
    caption:'Open the fists, let the hands fall to the sides. Relax, even the breath, and close.' },
];
rows.forEach(r => { r.wide = r.figs.length >= 3; });

const flowColor = k => (k === 'inhale' ? GREEN : k === 'exhale' ? RED : GOLD);
const flowGlyph = k => (k === 'inhale' ? '&#9650;' : k === 'exhale' ? '&#9660;' : '&#9656;');

// ---- figure sizing: fill the row's vertical share ---------------------------
const STRIP_W = 4.5, NUM_H = 0.32;   // image column width (page − left text column)
// all the text lives in the left column, so the filmstrip fills the right side:
// grow figures to the panel height, capped only by the image-column width.
function figH(r, share) {
  const sum = r.figs.reduce((a, n) => a + pngRatio(n), 0);
  if (r.figs.length >= 3) {
    // text-on-top, full-width filmstrip below
    const widthCap = (6.85 - (r.figs.length - 1) * 0.34) / sum;
    return Math.min(widthCap, share - 1.35, 3.6);
  }
  // text-left, images fill the right column
  const widthCap = (STRIP_W - (r.figs.length - 1) * 0.34) / sum;
  return Math.min(widthCap, share - NUM_H - 0.3, 3.9);
}

function figHtml(n, H, faded) {
  const w = (pngRatio(n) * H).toFixed(3);
  return `<div class="pose${faded ? ' from' : ''}">
      <div class="num">${n}</div>
      <div class="frame" style="width:${w}in;height:${H}in"><img src="${figRel}/figure-2-${n}.png" alt="Figure 2-${n}"></div>
    </div>`;
}

function rowHtml(r, share) {
  const H = figH(r, share);
  const arrow = `<div class="flow" style="color:${flowColor(r.kind)}">${flowGlyph(r.kind)}<span>&rarr;</span></div>`;
  const strip = `<div class="strip">${r.figs.map((n, i) => figHtml(n, H, false)).join(arrow)}</div>`;
  return `<div class="row ${r.kind}${r.contd ? ' contd' : ''}${r.figs.length >= 3 ? ' tri' : ''}">
    <div class="text">
      <div class="label"><div class="breath-kind">${r.name}</div><div class="breath-dur">${r.dur}</div></div>
      <div class="caption">${r.caption}</div>
    </div>
    ${strip}
  </div>`;
}

// ---- paginate: 3 rows per page, each flex-grown to fill the height ----------
const PER_PAGE = 2;
const CONTENT_H = 9.0, LEGEND_H = 0.55;
const nPages = Math.ceil(rows.length / PER_PAGE);
const perPage = Math.ceil(rows.length / nPages);
const pages = [];
for (let i = 0; i < rows.length; i += perPage) pages.push(rows.slice(i, i + perPage));
const shareFor = (pi, n) => (CONTENT_H - (pi === 0 ? LEGEND_H : 0)) / n;

const pagesHtml = pages.map((pr, i) => {
  const first = pr[0].figs[0], last = pr[pr.length - 1].figs.at(-1);
  const legend = i === 0 ? `<div class="legend">
    Each panel is <b>one breath</b>. Follow the poses left to right; the coloured arrow is the breath that moves you:
    <b style="color:${GREEN}">&#9650; inhale</b>, <b style="color:${RED}">&#9660; exhale</b>.
  </div>` : '';
  return `<section class="page">
  <header>
    <span class="title">Standing-Method Tu&#8209;Na Practice</span>
    <span class="sub">Read by the breath &middot; ${i + 1} / ${pages.length} &middot; Steps ${first}&ndash;${last}</span>
  </header>
  ${legend}
  <div class="rows">
    ${pr.map(r => rowHtml(r, shareFor(i, pr.length))).join('\n')}
  </div>
  <footer>&ldquo;Continue&rdquo; is never a held breath &mdash; it is one unbroken inhale or exhale carried across the poses.</footer>
</section>`;
}).join('\n');

const css = `
  @page { size: Letter portrait; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; color: #141414; font-family: "Helvetica Neue", Arial, sans-serif; }
  .page { width: 8.5in; height: 11in; padding: .5in .55in .42in; background: #fff; display: flex; flex-direction: column; break-after: page; }
  .page:last-child { break-after: auto; }
  header { display: flex; justify-content: space-between; align-items: baseline; padding-bottom: .1in; border-bottom: 2.5pt solid #141414; }
  header .title { font-size: 17pt; font-weight: 800; letter-spacing: .01em; }
  header .sub { font-size: 10pt; font-weight: 700; color: #777; letter-spacing: .04em; text-transform: uppercase; }
  .legend { margin: .12in 0 0; font-size: 12pt; color: #333; font-weight: 600; line-height: 1.3; }
  .rows { flex: 1; display: flex; flex-direction: column; }
  .row { flex: 1 1 0; display: flex; align-items: center; gap: .3in; border-top: 1.5pt solid #dcdcdc; padding: .12in 0; overflow: hidden; }
  .row:first-child { border-top: none; }

  /* 2-pose panels: text stacked in a left column, images fill the right */
  .text { flex: 0 0 2.55in; }
  .caption { margin-top: .16in; }

  /* 3-pose panels: text as a band on top, full-width filmstrip below */
  .row.tri { flex-direction: column; align-items: stretch; gap: .04in; }
  .row.tri .text { flex: 0 0 auto; display: flex; align-items: baseline; gap: .4in; }
  .row.tri .label { flex: 0 0 2.0in; }
  .row.tri .caption { flex: 1 1 auto; margin-top: 0; }
  .row.tri .strip { width: 100%; align-self: stretch; }
  .breath-kind { font-size: 34pt; font-weight: 800; line-height: .95; letter-spacing: .005em; }
  .breath-dur { font-size: 12pt; font-weight: 700; color: #555; line-height: 1.2; margin-top: .07in; }
  .inhale .breath-kind { color: ${GREEN}; }
  .exhale .breath-kind { color: ${RED}; }
  .both .breath-kind, .settle .breath-kind { color: #333; }
  .contd .breath-kind { font-size: 25pt; opacity: .82; }
  .caption { font: 15.5pt/1.36 Georgia, "Times New Roman", serif; color: #161616; margin-top: .16in; }
  .caption b { font-weight: 700; }
  .caption b.in { color: ${GREEN}; } .caption b.ex { color: ${RED}; }

  /* right side: the filmstrip fills the remaining width */
  .strip { flex: 1 1 auto; min-width: 0; display: flex; align-items: flex-end; justify-content: center; }
  .pose { display: flex; flex-direction: column; align-items: center; }
  .pose .num { font: 800 14pt/1 "Helvetica Neue", Arial, sans-serif; color: #141414; background: #fff; border: 1.7pt solid #141414; border-radius: 50%; width: .32in; height: .32in; display: flex; align-items: center; justify-content: center; margin-bottom: .05in; }
  .frame img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .flow { align-self: center; display: flex; flex-direction: column; align-items: center; font-weight: 900; padding: 0 .05in; line-height: .8; }
  .flow { font-size: 15pt; }
  .flow span { font-size: 28pt; }

  footer { margin-top: .12in; padding-top: .1in; border-top: 1pt solid #d6d6d6; font-size: 9.5pt; color: #888; text-align: center; }
`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Standing-Method Tu-Na Practice &mdash; Breath-Flow</title><style>${css}</style></head><body>
${pagesHtml}
</body></html>`;

const htmlPath = path.join(out, 'standing-sequence-breath-flow.html');
fs.writeFileSync(htmlPath, html);
console.log(`wrote ${htmlPath} — ${rows.length} breath panels over ${pages.length} pages`);

const pdf = path.join(out, 'preview/standing-sequence-breath-flow.pdf');
execFileSync('weasyprint', [htmlPath, pdf], { stdio: 'inherit' });
for (const f of fs.readdirSync(path.join(out, 'preview'))) if (f.startsWith('page-')) fs.rmSync(path.join(out, 'preview', f));
execFileSync('pdftoppm', ['-png', '-r', '150', pdf, path.join(out, 'preview/page')], { stdio: 'ignore' });
console.log('rendered PDF + page PNGs');

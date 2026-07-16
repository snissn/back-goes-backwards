import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'basic-tuna-practice');
const figDir = path.join(base, 'figures');
const htmlDir = path.join(base, 'html');
const printDir = path.join(base, 'print');
const previewDir = path.join(base, 'preview');
for (const dir of [htmlDir, printDir, previewDir]) fs.mkdirSync(dir, { recursive: true });

const GREEN = '#1f6f3a';
const RED = '#a4341f';
const GOLD = '#a87408';
const PURPLE = '#6b3f86';
const INK = '#151515';

const packets = [
  {
    id: '01-seated-breath-counting',
    title: 'Seated Static Breath Counting',
    chinese: '坐势静功数息法',
    note: 'Choose one seat. These are alternatives, not consecutive movements.',
    footer: 'Breathe through the nose without forcing. Keep the attention gently at the lower dantian.',
    rows: [
      {
        kind: 'settle', name: 'Option A', dur: 'Auspicious Seat · 吉祥坐', figs: [1],
        caption: 'Full lotus: place the <b>left foot on the right thigh</b>, then the <b>right foot on the left thigh</b>. Sit upright without strain.'
      },
      {
        kind: 'settle', name: 'Option B', dur: 'Vajra Seat · 金刚坐', figs: [2],
        caption: 'Full lotus in the opposite order: place the <b>right foot on the left thigh</b>, then the <b>left foot on the right thigh</b>. Easier natural sitting postures are acceptable.'
      },
      {
        kind: 'both', name: 'Count', dur: 'one to five—or one to ten', figs: [1],
        caption: 'Settle the mind and attend to the lower dantian. Gradually make the breath <b>slower, longer, deeper, even, and comfortable</b>. Silently count each breath; do not chase a high number.'
      },
      {
        kind: 'settle', name: 'Build slowly', dur: 'about 15 minutes at first', figs: [2],
        caption: 'Begin with roughly a quarter-hour. Increase gradually to 30 or 45 minutes; the source advises stopping at about one hour. Never force the posture or the breath.'
      }
    ]
  },
  {
    id: '02-standing-palm-press',
    title: 'Standing Palm-Press Tu-Na',
    chinese: '站势按掌吐纳法',
    note: 'The source gives two breath patterns. Beginners are directed to practise Pattern A first.',
    footer: 'Pattern A emphasizes taking in qi; Pattern B emphasizes expelling qi. Move slowly and continuously.',
    rows: [
      {
        kind: 'settle', name: 'Set up', dur: 'breathe naturally', figs: [3],
        caption: 'Stand with the feet about shoulder-width. Shift the upper body slightly forward, relax completely, let the hands hang at the sides, and lower the gaze.'
      },
      {
        kind: 'exhale', name: 'Pattern A · Exhale', dur: 'long · through the nose', figs: [3, 4],
        caption: 'Raise both hands from the sides to overhead. Keep the arms in a half-arc, <b>palms down</b>, and open the eyes.'
      },
      {
        kind: 'inhale', name: 'Pattern A · Inhale', dur: 'deep · one continuous intake', figs: [4, 5, 6],
        caption: 'Lower the palms slowly past the face, fingertips toward each other, then press down the chest to navel height. Finish with the fingers softly curved and the palms slightly cupped inward.'
      },
      {
        kind: 'inhale', name: 'Pattern B · Inhale', dur: 'deep · through the nose', figs: [3, 4],
        caption: 'Use the same raising movement: hands travel from the sides to overhead, arms rounded, <b>palms down</b>.'
      },
      {
        kind: 'exhale', name: 'Pattern B · Exhale', dur: 'long · one continuous release', figs: [4, 5, 6],
        caption: 'Lower and press the hands past the face and chest to the lower abdomen, ending at navel height with softly curved fingers.'
      }
    ]
  },
  {
    id: '03-seated-torso-turn',
    title: 'Seated Torso-Turn Tu-Na',
    chinese: '坐势扭身吐纳法',
    note: 'One slow left-and-right cycle. Repeat evenly to both sides.',
    footer: 'Use the crown-to-perineum line as the turning axis. Do not jerk the neck or force the range.',
    rows: [
      {
        kind: 'settle', name: 'Set up', dur: 'legs straight and together', figs: [7],
        caption: 'Sit upright. Place the <b>left palm behind the waist</b>, palm inward; rest the <b>right hand on the left shoulder</b>. Look forward.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'deep · through the nose', figs: [7, 8],
        caption: 'Turn the head and neck as far left as is comfortable around the body’s vertical axis. Look behind to the left.'
      },
      {
        kind: 'exhale', name: 'Exhale', dur: 'long · through the nose', figs: [8, 9],
        caption: 'Rotate the upper body back toward the right until the face returns to the front.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'deep · through the nose', figs: [9, 10],
        caption: 'Switch the hands: right palm behind the waist, left hand on the right shoulder. Turn the head and neck right and look behind.'
      },
      {
        kind: 'exhale', name: 'Return', dur: 'long · then repeat', figs: [10, 7],
        caption: 'Come back to the front slowly. Continue with balanced left and right repetitions.'
      }
    ]
  },
  {
    id: '04-standing-torso-turn',
    title: 'Standing Torso-Turn Tu-Na',
    chinese: '站势扭身吐纳法',
    note: 'A slow alternating turn. Practise an equal number to each side.',
    footer: 'Keep the torso tall and the feet rooted. Let the breath set the speed of the turn.',
    rows: [
      {
        kind: 'inhale', name: 'Inhale left', dur: 'deep · through the nose', figs: [12, 11],
        caption: 'Stand a little wider than shoulder-width. Put the <b>left palm at the low back</b> and the <b>right hand on the left shoulder</b>; turn left and look behind.'
      },
      {
        kind: 'exhale', name: 'Exhale', dur: 'long · empty fully', figs: [11, 12],
        caption: 'Rotate the torso slowly back to face forward, completing the exhale as you arrive.'
      },
      {
        kind: 'inhale', name: 'Inhale right', dur: 'deep · through the nose', figs: [12, 13],
        caption: 'Switch the hands and turn to the right. Look behind without collapsing the posture.'
      },
      {
        kind: 'exhale', name: 'Return', dur: 'long · then repeat', figs: [13, 12],
        caption: 'Come back to the front slowly. Continue for several balanced turns to both sides.'
      }
    ]
  },
  {
    id: '05-shoulder-release',
    title: 'Shoulder-Release & Joint-Opening Tu-Na',
    chinese: '伸筋活络吐纳法',
    note: 'One continuous inhale builds through figures 1-14 to 1-17; the release is figure 1-18.',
    footer: 'The final breath may leave through the nose or mouth and may be voiced. Keep the knee sink controlled.',
    rows: [
      {
        kind: 'settle', name: 'Set up', dur: 'breathe naturally', figs: [14],
        caption: 'Stand upright with the feet about shoulder-width, arms at the sides, and the whole body relaxed.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'begin a smooth, unbroken intake', figs: [14, 15],
        caption: 'Lift both hands forward to shoulder height, arms extended, <b>palms down and fingertips forward</b>.'
      },
      {
        kind: 'inhale', name: 'Continue', dur: 'the same inhale', figs: [15, 16],
        caption: 'Make fists and bend the elbows, drawing the fists before the shoulders—<b>fist hearts forward, knuckles up</b>.'
      },
      {
        kind: 'inhale', name: 'Fill', dur: 'complete the inhale', figs: [16, 17],
        caption: 'Incline the head and upper body forward and lift both heels.'
      },
      {
        kind: 'exhale', name: 'Release', dur: 'brisk · nose or mouth', figs: [17, 18],
        caption: 'Open the fists and press the palms down beside the hips. Straighten the upper body while bending the knees and sinking. A voiced exhale is allowed.'
      }
    ]
  },
  {
    id: '06-power-and-sound',
    title: 'Power-and-Sound Tu-Na',
    chinese: '发力发声吐纳法',
    note: 'A compact two-position exercise. Repeat only while the breath and posture remain comfortable.',
    footer: 'The source calls for a forceful mouth exhale with sound; stop if you feel light-headed or strained.',
    rows: [
      {
        kind: 'inhale', name: 'Inhale', dur: 'deep · fill completely', figs: [19],
        caption: 'Stand with both hands embracing the lower abdomen. Inhale fully through the nose.'
      },
      {
        kind: 'sound', name: 'Sound & exhale', dur: 'forceful · through the mouth', figs: [19, 20],
        caption: 'Drive both palms straight forward at shoulder height while intentionally rounding the upper back. <b>Voice the release and empty the breath.</b>'
      }
    ]
  },
  {
    id: '07-breath-exchange-strengthening',
    title: 'Breath-Exchange Strengthening',
    chinese: '吐纳换气强身法',
    note: 'One continuous practice: Opening → Push Qi → Divide Qi → Scoop Qi → Closing.',
    footer: 'Practise gradually in clean air. Do not train when very hungry, overly full, after alcohol, or exhausted.',
    rows: [
      {
        section: 'Opening · 起势', kind: 'both', name: 'Exchange', dur: 'three long exhale–inhale cycles', figs: [21],
        caption: 'Stand with feet together and arms relaxed at the sides. <b class="ex">Exhale slowly through the mouth</b> as if emptying stale air; then <b class="in">inhale slowly through the nose</b> as if filling with fresh air.'
      },
      {
        kind: 'both', name: 'Set the stance', dur: 'three inhale–exhale cycles', figs: [21, 22],
        caption: 'Step the left foot out slightly wider than shoulder-width, toes forward. Hold fists at the waist, <b>fist hearts up</b>. Once set, inhale first and then exhale.'
      },
      {
        section: 'Push Qi · 推气', kind: 'exhale', name: 'Exhale', dur: 'long · through the nose', figs: [22, 23],
        caption: 'Open the fists, rotate the palms inward, and reach toward the feet as the torso folds. Finish when the fingertips touch the ground; pause briefly.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'slow and deep', figs: [23, 24],
        caption: 'Extend the wrists, form claws, and press downward.'
      },
      {
        kind: 'inhale', name: 'Fill', dur: 'complete the same inhale', figs: [24, 25],
        caption: 'Curl the fingers into fists with the two fist hearts facing each other.'
      },
      {
        kind: 'exhale', name: 'Exhale', dur: 'long · rise with the breath', figs: [25, 26],
        caption: 'Lift the fists straight forward and upward as if raising a heavy object. Rise through the waist to shoulder height and draw the left foot in slightly.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'deep · through the nose', figs: [26, 27],
        caption: 'Draw both fists to the waist, <b>fist hearts up</b>.'
      },
      {
        kind: 'sound', name: 'Ha—', dur: 'forceful voiced exhale', figs: [27, 28],
        caption: 'Open the fists and thrust both palms straight forward at shoulder height—<b>palms forward, fingertips up</b>.'
      },
      {
        kind: 'inhale', name: 'Recover', dur: 'pause, then inhale deeply', figs: [28, 29],
        caption: 'Make fists and bend the elbows, returning the fists to the waist.'
      },
      {
        section: 'Divide Qi · 分气', kind: 'exhale', name: 'Exhale', dur: 'long · through the nose', figs: [29, 30],
        caption: 'Open the fists, rotate the palms inward, reach down until the fingertips touch the ground, and fold the torso.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'deep · through the nose', figs: [30, 31],
        caption: 'Extend the wrists, form claws, and press downward.'
      },
      {
        kind: 'inhale', name: 'Continue', dur: 'the same inhale', figs: [31, 32],
        caption: 'Curl the fingers into fists with the two fist hearts facing each other.'
      },
      {
        kind: 'exhale', name: 'Exhale', dur: 'long · rise with the breath', figs: [32, 33],
        caption: 'Lift the fists like a heavy object to shoulder height. Straighten the upper body and draw the left foot in slightly.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'deep · through the nose', figs: [33, 34],
        caption: 'Bend the elbows and draw the fists back before the shoulders—<b>knuckles facing, fist hearts inward</b>.'
      },
      {
        kind: 'sound', name: 'Ha—', dur: 'forceful voiced exhale', figs: [34, 35],
        caption: 'Open both fists and drive the palms outward to the left and right at shoulder height, <b>palms facing out</b>.'
      },
      {
        kind: 'both', name: 'Gather', dur: 'inhale, then exhale once set', figs: [35, 36],
        caption: 'Rotate the hands outward, make fists, and draw them to the waist, <b>fist hearts up</b>. Once the posture is set, exhale through the nose.'
      },
      {
        section: 'Scoop Qi · 捞气', kind: 'inhale', name: 'Inhale', dur: 'deep · through the nose', figs: [36, 37],
        caption: 'Step the left foot half a step outward and sink into horse stance. As you descend, bend the elbows and raise the fists near forehead height in a “mountain” shape, fist hearts facing.'
      },
      {
        kind: 'exhale', name: 'Exhale', dur: 'long · through the nose', figs: [37, 38],
        caption: 'Open the fists and extend both arms to the sides at shoulder height, <b>palms down</b>.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'deep · begin the scoop', figs: [38, 39],
        caption: 'Lower the hands as the torso folds and the legs gradually straighten. Near knee height, turn the palms inward and scoop them together, <b>palms up</b>.'
      },
      {
        kind: 'inhale', name: 'Continue', dur: 'the same inhale', figs: [39, 40],
        caption: 'When the hands are about shoulder-width apart, carry them forward and upward. Rise through the torso while the hips sink back into horse stance.'
      },
      {
        kind: 'exhale', name: 'Exhale', dur: 'long · through the nose', figs: [40, 41],
        caption: 'Rotate the palms outward and lift them over the crown—<b>fingertips back, palms up</b>.'
      },
      {
        kind: 'inhale', name: 'Inhale', dur: 'deep · through the nose', figs: [41, 42],
        caption: 'Make fists and lower them to the waist.'
      },
      {
        kind: 'sound', name: 'Ha—', dur: 'forceful voiced exhale', figs: [42, 43],
        caption: 'Open the fists and drive both palms upward—<b>palms up, fingertips pointing back</b>.'
      },
      {
        kind: 'inhale', name: 'Recover', dur: 'deep · through the nose', figs: [43, 44],
        caption: 'Make fists, bend the elbows, and lower the hands to the waist. Once set, breathe in this stance for several cycles; weaker practitioners may close directly.'
      },
      {
        section: 'Closing · 收势', kind: 'inhale', name: 'Inhale', dur: 'deep · through the nose', figs: [44, 45],
        caption: 'Draw the left foot inward to meet the right and stand upright with the fists still held at the waist.'
      },
      {
        kind: 'exhale', name: 'Close', dur: 'long · then regulate the breath', figs: [45, 46],
        caption: 'Open the fists, let the hands fall to the sides, relax the whole body, and allow the breathing to become even.'
      }
    ]
  }
];

function pngRatio(n) {
  const buf = fs.readFileSync(path.join(figDir, `figure-1-${n}.png`));
  return buf.readUInt32BE(16) / buf.readUInt32BE(20);
}

function colorFor(kind) {
  if (kind === 'inhale') return GREEN;
  if (kind === 'exhale') return RED;
  if (kind === 'sound') return PURPLE;
  return GOLD;
}

function glyphFor(kind) {
  if (kind === 'inhale') return '&#9650;';
  if (kind === 'exhale') return '&#9660;';
  if (kind === 'sound') return '&#9670;';
  return '&#9656;';
}

function figHeight(row, share) {
  if (row.figs.length === 1) return Math.min(share - 0.45, 3.9);
  const sum = row.figs.reduce((acc, n) => acc + pngRatio(n), 0);
  if (row.figs.length >= 3) {
    const widthCap = (6.95 - (row.figs.length - 1) * 0.35) / sum;
    // Three-pose panels place their instructions above the figures. Reserve
    // enough vertical room for a wrapped caption so labels and artwork never
    // collide on the denser Palm-Press pages.
    return Math.min(widthCap, share - 1.85, 3.65);
  }
  const widthCap = (4.55 - 0.35) / sum;
  return Math.min(widthCap, share - 0.45, 3.85);
}

function figureHtml(n, height) {
  const width = (pngRatio(n) * height).toFixed(3);
  return `<div class="pose">
    <div class="num">${n}</div>
    <div class="frame" style="width:${width}in;height:${height}in">
      <img src="../figures/figure-1-${n}.png" alt="Source figure 1-${n}">
    </div>
  </div>`;
}

function rowHtml(row, share) {
  const h = figHeight(row, share);
  const arrow = `<div class="flow" style="color:${colorFor(row.kind)}">${glyphFor(row.kind)}<span>&rarr;</span></div>`;
  const strip = row.figs.length === 1
    ? `<div class="strip single">${figureHtml(row.figs[0], h)}</div>`
    : `<div class="strip">${row.figs.map(n => figureHtml(n, h)).join(arrow)}</div>`;
  return `${row.section ? `<div class="section-label">${row.section}</div>` : ''}
  <div class="row ${row.kind} ${row.figs.length >= 3 ? 'tri' : ''} ${row.figs.length === 1 ? 'solo' : ''}">
    <div class="text">
      <div class="label">
        <div class="breath-kind">${row.name}</div>
        <div class="breath-dur">${row.dur}</div>
      </div>
      <div class="caption">${row.caption}</div>
    </div>
    ${strip}
  </div>`;
}

function buildPacket(packet) {
  const perPage = 2;
  const pages = [];
  for (let i = 0; i < packet.rows.length; i += perPage) pages.push(packet.rows.slice(i, i + perPage));

  const pagesHtml = pages.map((rows, pageIndex) => {
    const share = (8.82 - (pageIndex === 0 ? 0.48 : 0)) / rows.length;
    const first = rows[0].figs[0];
    const last = rows.at(-1).figs.at(-1);
    const legend = pageIndex === 0 ? `<div class="legend">
      Follow each panel left to right. <b style="color:${GREEN}">&#9650; inhale</b>
      <b style="color:${RED}">&#9660; exhale</b>
      <b style="color:${PURPLE}">&#9670; voiced release</b>
      <span>${packet.note}</span>
    </div>` : '';
    return `<section class="page">
      <header>
        <div><div class="title">${packet.title}</div><div class="chinese">${packet.chinese}</div></div>
        <div class="page-meta">${pageIndex + 1} / ${pages.length}<br><span>Figures ${first}–${last}</span></div>
      </header>
      ${legend}
      <main>${rows.map(row => rowHtml(row, share)).join('\n')}</main>
      <footer>${packet.footer}</footer>
    </section>`;
  }).join('\n');

  const css = `
    @page { size: Letter portrait; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; color: ${INK}; font-family: "Helvetica Neue", Arial, sans-serif; }
    .page { width: 8.5in; height: 11in; padding: .45in .55in .38in; background: white; display: flex; flex-direction: column; break-after: page; }
    .page:last-child { break-after: auto; }
    header { min-height: .62in; display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2.5pt solid ${INK}; padding-bottom: .09in; }
    .title { font-size: 20pt; font-weight: 800; letter-spacing: .005em; line-height: 1.02; }
    .chinese { margin-top: .03in; color: #666; font-size: 11pt; font-weight: 700; letter-spacing: .12em; }
    .page-meta { text-align: right; color: #777; font-size: 10pt; font-weight: 800; line-height: 1.2; letter-spacing: .07em; text-transform: uppercase; }
    .page-meta span { font-size: 8.5pt; }
    .legend { min-height: .48in; padding: .09in .12in; background: #f2f0e9; font-size: 10.5pt; line-height: 1.32; font-weight: 700; display: flex; align-items: center; gap: .16in; }
    .legend span { margin-left: auto; max-width: 3.45in; color: #555; font: 10pt/1.25 Georgia, serif; }
    main { flex: 1; display: flex; flex-direction: column; min-height: 0; }
    .section-label { margin-top: .05in; padding: .055in .1in; border-left: 5pt solid ${GOLD}; color: #5e4a1f; background: #f6f2e7; font-size: 11pt; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
    .row { flex: 1 1 0; min-height: 0; display: flex; align-items: center; gap: .28in; padding: .11in 0; border-top: 1.4pt solid #ddd; overflow: hidden; }
    main > .row:first-child, .section-label + .row { border-top: 0; }
    .text { flex: 0 0 2.5in; }
    .breath-kind { font-size: 31pt; font-weight: 800; line-height: .95; letter-spacing: -.015em; }
    .breath-dur { margin-top: .065in; color: #555; font-size: 11.5pt; font-weight: 700; line-height: 1.2; }
    .caption { margin-top: .15in; font: 15pt/1.34 Georgia, "Times New Roman", serif; }
    .caption b { font-weight: 700; }
    .caption .in { color: ${GREEN}; } .caption .ex { color: ${RED}; }
    .inhale .breath-kind { color: ${GREEN}; }
    .exhale .breath-kind { color: ${RED}; }
    .sound .breath-kind { color: ${PURPLE}; }
    .both .breath-kind, .settle .breath-kind { color: ${GOLD}; }
    .strip { flex: 1 1 auto; min-width: 0; display: flex; justify-content: center; align-items: flex-end; }
    .strip.single { align-items: center; }
    .pose { display: flex; flex-direction: column; align-items: center; }
    .num { width: .32in; height: .32in; margin-bottom: .045in; border: 1.7pt solid ${INK}; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; font-size: 13pt; font-weight: 800; line-height: 1; }
    .frame img { width: 100%; height: 100%; object-fit: contain; display: block; }
    .flow { align-self: center; padding: 0 .045in; display: flex; flex-direction: column; align-items: center; font-size: 14pt; font-weight: 900; line-height: .75; }
    .flow span { font-size: 27pt; }
    .row.tri { flex-direction: column; align-items: stretch; gap: .03in; }
    .row.tri .text { flex: 0 0 auto; display: flex; align-items: baseline; gap: .35in; }
    .row.tri .label { flex: 0 0 2.15in; }
    .row.tri .caption { flex: 1; margin-top: 0; font-size: 14.5pt; }
    .row.tri .strip { width: 100%; }
    .row.solo .text { flex-basis: 3.25in; }
    footer { min-height: .3in; padding-top: .08in; border-top: 1pt solid #d5d5d5; color: #777; text-align: center; font: 9.5pt/1.25 Georgia, serif; }
  `;

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
  <title>${packet.title}</title><style>${css}</style></head><body>${pagesHtml}</body></html>`
    .replace(/[ \t]+$/gm, '');
  const htmlPath = path.join(htmlDir, `${packet.id}.html`);
  const pdfPath = path.join(printDir, `${packet.id}.pdf`);
  const packetPreview = path.join(previewDir, packet.id);
  fs.mkdirSync(packetPreview, { recursive: true });
  for (const file of fs.readdirSync(packetPreview)) {
    if (file.startsWith('page-') && file.endsWith('.png')) fs.rmSync(path.join(packetPreview, file));
  }
  fs.writeFileSync(htmlPath, html);
  execFileSync('weasyprint', [htmlPath, pdfPath], { stdio: 'inherit' });
  execFileSync('pdftoppm', ['-png', '-r', '150', pdfPath, path.join(packetPreview, 'page')], { stdio: 'ignore' });
  console.log(`${packet.id}: ${packet.rows.length} panels, ${pages.length} pages`);
}

for (const packet of packets) buildPacket(packet);

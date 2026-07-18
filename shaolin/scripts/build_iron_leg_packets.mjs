import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'iron-leg-skill');
const figDir = path.join(base, 'figures');
const htmlDir = path.join(base, 'html');
const printDir = path.join(base, 'print');
const previewDir = path.join(base, 'preview');
for (const dir of [htmlDir, printDir, previewDir]) fs.mkdirSync(dir, { recursive: true });

const GOLD = '#a87408';
const INK = '#151515';
const row = (name, figs, action, key) => ({ name, figs: figs.map(String), action, key });

const packets = [
  {
    id: '01-front-leg-press-figures-1-1-to-1-2',
    title: 'Front Leg Press',
    chinese: '正压腿 · 图 1-1–1-2',
    section: 'Flexibility training · 柔功',
    note: 'Two standalone versions of the same front-leg flexibility drill.',
    rows: [
      row('Floor version', [1], 'Bend the right knee and extend the left leg forward. Hook the left toes upward and press both hands gently onto the left knee.', 'Keep the pressed leg straight. Increase the range gradually, then change sides.'),
      row('Supported version', [2], 'Place the left foot on a stable support near hip height. Hook the toes and fold the torso forward over the straight leg.', 'Keep both knees extended and the support secure. Use a lower support whenever alignment changes.')
    ]
  },
  {
    id: '02-side-leg-press-figures-1-3-to-1-4',
    title: 'Side Leg Press',
    chinese: '侧压腿 · 图 1-3–1-4',
    section: 'Flexibility training · 柔功',
    note: 'Two standalone versions of the lateral leg press.',
    rows: [
      row('Floor version', [3], 'Sink over the right leg and extend the left leg to the side with the toes hooked. Reach the left arm overhead and incline toward the straight leg.', 'Keep the straight leg long and the chest open. Press down without collapsing the supporting knee inward.'),
      row('Supported version', [4], 'Place the left leg sideways on a secure support. Reach the left arm overhead and incline the torso toward the raised leg.', 'Keep the support foot and standing foot stable. Progress by height only after the torso stays aligned.')
    ]
  },
  {
    id: '03-rear-leg-press-figures-1-5-to-1-6',
    title: 'Rear Leg Press',
    chinese: '后压腿 · 图 1-5–1-6',
    section: 'Flexibility training · 柔功',
    note: 'Two standalone versions of the rear-leg and front-hip stretch.',
    rows: [
      row('Floor version', [5], 'Sink over the left leg and extend the right leg behind with the instep down. Let the upper body press gently back.', 'Open the chest and hips while keeping the shoulders level. Avoid forcing the lower back.'),
      row('Supported version', [6], 'Place the right leg behind on a secure support near hip height. Keep the hands at the waist and extend gently backward.', 'Keep both legs straight and the pelvis controlled. Use a lower support if the back arches sharply.')
    ]
  },
  {
    id: '04-crouching-step-leg-press-figure-1-7',
    title: 'Crouching-Step Leg Press',
    chinese: '仆步压腿 · 图 1-7',
    section: 'Flexibility training · 柔功',
    note: 'One posture, divided into setup and working position.',
    rows: [
      row('Set the stance', [7], 'Squat fully over the right leg. Extend the left leg sideways with the toes turned slightly inward.', 'Keep the extended knee straight and the whole foot controlled. Use the hands for balance as needed.'),
      row('Press and alternate', [7], 'Hold the feet or ankles and settle the hips downward into the crouching-step shape.', 'Work gradually and change sides. Keep the heel of the squatting leg grounded when possible.')
    ]
  },
  {
    id: '05-front-held-leg-lift-figures-1-8-to-1-10',
    title: 'Front Held-Leg Lift',
    chinese: '正扳腿 · 图 1-8–1-10',
    section: 'Flexibility training · 柔功',
    note: 'The wall-supported pose is an alternative, not a continuation.',
    rows: [
      row('Lift and secure', [8], 'Stand on the right leg, lift the bent left knee, and secure the left foot and knee with the hands.', 'Stand tall before increasing the lift. Keep the supporting knee steady and the gaze level.'),
      row('Straighten or support', [9, 10], 'Straighten the left leg forward and upward. The source also shows a wall-supported high hold.', 'Do not pull the knee past a controlled range. Use a stable support and train both sides evenly.')
    ]
  },
  {
    id: '06-side-held-leg-lift-figures-1-11-to-1-12',
    title: 'Side Held-Leg Lift',
    chinese: '侧扳腿 · 图 1-11–1-12',
    section: 'Flexibility training · 柔功',
    note: 'Two standalone versions of the lateral held-leg position.',
    rows: [
      row('Free-standing version', [11], 'Stand on the right leg, lift the left leg sideways, and support the ankle from the inside as the knee straightens.', 'Keep the torso upright and the standing foot rooted. Raise only as high as alignment permits.'),
      row('Wall-supported version', [12], 'Use a stable wall or post while holding the raised leg to the side.', 'Use the support to refine posture, not to force height. Keep both knees straight and alternate sides.')
    ]
  },
  {
    id: '07-rear-held-leg-lift-figures-1-13-to-1-14',
    title: 'Rear Held-Leg Lift',
    chinese: '后扳腿 · 图 1-13–1-14',
    section: 'Flexibility training · 柔功',
    note: 'Both source versions require a partner and secure support.',
    rows: [
      row('Partner lift', [13], 'Hold a stable support while a partner raises the straight right leg behind and upward.', 'The partner should lift slowly and stop immediately if the standing leg, hip, or back loses alignment.'),
      row('Shoulder-supported version', [14], 'The source also shows a partner supporting the lifted leg across the shoulder while the standing practitioner holds a rail.', 'Coordinate before moving. Keep the raised knee straight and avoid twisting the pelvis.')
    ]
  },
  {
    id: '08-front-split-figure-1-15',
    title: 'Front Split',
    chinese: '竖叉 · 图 1-15',
    section: 'Flexibility training · 柔功',
    note: 'One posture, divided into entry and alignment checks.',
    rows: [
      row('Enter with support', [15], 'Slide the legs forward and back while keeping both knees straight. Use the hands on the floor to control the descent.', 'Stop above the floor whenever the pelvis twists or either knee bends.'),
      row('Settle and align', [15], 'Lengthen the legs into one front-to-back line. Keep the rear instep and the front foot aligned as shown.', 'Lower gradually; never bounce. Practice both lead-leg versions.')
    ]
  },
  {
    id: '09-side-split-figure-1-16',
    title: 'Side Split',
    chinese: '横叉 · 图 1-16',
    section: 'Flexibility training · 柔功',
    note: 'One posture, divided into entry and alignment checks.',
    rows: [
      row('Enter with support', [16], 'Slide both legs sideways while keeping the knees straight. Use the hands to regulate the descent.', 'Keep the inner edges of the feet controlled and stop before the knees roll forward.'),
      row('Settle and align', [16], 'Extend the legs into one side-to-side line with the toes facing upward.', 'Lower gradually without bouncing. Keep the torso lifted and the hips centered.')
    ]
  },
  {
    id: '10-controlled-leg-hold-figure-1-17',
    title: 'Controlled Leg Hold',
    chinese: '控腿 · 图 1-17',
    section: 'Flexibility training · 柔功',
    note: 'A balance-and-control drill rather than a swinging kick.',
    rows: [
      row('Lift the knee', [17], 'Stand on the right leg and raise the bent left knee toward the left side.', 'Set the standing leg and torso before straightening. Use a support while learning the balance.'),
      row('Extend and hold', [17], 'Straighten the left leg high to the side and hold it under muscular control.', 'Keep the foot level and the supporting leg upright. Lower smoothly and train both sides.')
    ]
  },
  {
    id: '11-front-kick-figures-1-18-to-1-21',
    title: 'Front Kick',
    chinese: '正踢腿 · 图 1-18–1-21',
    section: 'Speed training · 快功',
    note: 'Follow the linked movement left to right; boundary poses repeat.',
    rows: [
      row('Set and step', [18, 19], 'Begin upright with the arms extended sideways. Step the left foot a half-step forward and let the right heel release.', 'Keep the waist upright, chest open, and gaze forward.'),
      row('Drive upward', [19, 20], 'Keep the right leg straight, hook the toes, and kick upward toward the front of the body.', 'Begin slowly and use a lower height until the knee stays straight.'),
      row('Lower with control', [20, 21], 'Reverse the path and lower the right leg with controlled tension until the foot touches lightly.', 'Do not drop the leg or lean backward to chase height.'),
      row('Reset and alternate', [21, 18], 'Return to the starting stance and repeat with the other leg.', 'Pressing and split work should precede high repetitions. Alternate sides evenly.')
    ]
  },
  {
    id: '12-side-kick-figures-1-22-to-1-25',
    title: 'Side Kick',
    chinese: '侧踢腿 · 图 1-22–1-25',
    section: 'Speed training · 快功',
    note: 'Follow the linked movement left to right; boundary poses repeat.',
    rows: [
      row('Set and cover-step', [22, 23], 'Begin upright with the arms extended. Step the right foot across and forward to prepare the turn.', 'Stay tall and place the stepping foot securely before kicking.'),
      row('Turn and kick', [23, 24], 'Turn right and kick the straight left leg upward to the left side with the toes hooked.', 'Keep the standing leg stable and the torso from collapsing toward the kick.'),
      row('Lower with control', [24, 25], 'Reverse the path and lower the left leg until the foot lands lightly and flat.', 'Maintain the same upright alignment during the descent.'),
      row('Reset and alternate', [25, 22], 'Return to the starting stance and repeat to the other side.', 'Build speed only after the turn and landing stay controlled.')
    ]
  },
  {
    id: '13-outward-crescent-kick-figures-1-26-to-1-29',
    title: 'Outward Crescent Kick',
    chinese: '外摆腿 · 图 1-26–1-29',
    section: 'Speed training · 快功',
    note: 'Follow the linked movement left to right; boundary poses repeat.',
    rows: [
      row('Set and step', [26, 27], 'Begin upright with the arms extended. Step the left foot forward and prepare the right leg.', 'Keep the waist tall and the support foot stable.'),
      row('Lift across center', [27, 28], 'With the right knee straight and toes hooked, lift the leg upward toward the left side of the body.', 'The arc begins across the centerline; do not twist the standing knee.'),
      row('Sweep outward', [28, 29], 'Continue the straight-leg arc outward to the right, then begin the controlled descent.', 'Open the hip smoothly without throwing the torso backward.'),
      row('Reset and alternate', [29, 26], 'Lower the right foot and return to the starting stance before changing legs.', 'Train the complete arc slowly before adding speed.')
    ]
  },
  {
    id: '14-inward-crescent-kick-figures-1-30-to-1-33',
    title: 'Inward Crescent Kick',
    chinese: '里合腿 · 图 1-30–1-33',
    section: 'Speed training · 快功',
    note: 'Follow the linked movement left to right; boundary poses repeat.',
    rows: [
      row('Set and step', [30, 31], 'Begin upright with the arms extended. Step the left foot forward and prepare the right leg.', 'Keep the support side tall and stable.'),
      row('Lift outward', [31, 32], 'Raise the straight right leg toward the right side with the toes hooked.', 'Let the hip create the arc while the torso remains controlled.'),
      row('Sweep inward', [32, 33], 'Carry the leg inward across the front of the body, then lower it under control.', 'Keep the knee straight and avoid wrenching the standing foot.'),
      row('Reset and alternate', [33, 30], 'Return to the starting stance and repeat with the other leg.', 'Practice the full path slowly before increasing speed.')
    ]
  },
  {
    id: '15-snap-kick-figures-1-34-to-1-36',
    title: 'Snap Kick',
    chinese: '弹腿 · 图 1-34–1-36',
    section: 'Speed training · 快功',
    note: 'Follow the linked movement left to right; the middle pose repeats.',
    rows: [
      row('Step and chamber', [34, 35], 'Begin with the fists at the waist. Step the left foot forward and lift the right knee to about waist height.', 'Keep the thigh level and the standing leg firm.'),
      row('Snap forward', [35, 36], 'Extend the right knee quickly and send the foot forward, then retract with control.', 'Power comes from fast knee extension, not from leaning the torso backward.')
    ]
  },
  {
    id: '16-side-thrust-kick-figures-1-37-to-1-39',
    title: 'Side Thrust Kick',
    chinese: '侧踹腿 · 图 1-37–1-39',
    section: 'Speed training · 快功',
    note: 'Follow the linked movement left to right; the middle pose repeats.',
    rows: [
      row('Cover-step and turn', [37, 38], 'Begin with the fists at the waist. Cross the right foot toward the left and turn the head and torso left.', 'Set the supporting foot and keep the knees softly controlled.'),
      row('Drive the heel', [38, 39], 'Lift the left leg, turn the toes inward, and thrust the heel and sole upward toward the left side.', 'Keep the kicking path direct. Lean only enough to balance, then retract under control.')
    ]
  },
  {
    id: '17-flying-kick-figures-1-40-to-1-44',
    title: 'Flying Kick',
    chinese: '腾空飞脚 · 图 1-40–1-44',
    section: 'Speed training · 快功',
    note: 'A linked jumping sequence. Learn the path at ground level first.',
    rows: [
      row('Step and load', [40, 41], 'Step forward on the right foot, soften the knee, incline the upper body slightly back, and swing both arms behind.', 'Use a clear, stable takeoff stance before adding height.'),
      row('Jump and swing', [41, 42], 'Push from the right foot, swing the left knee upward, and carry both arms overhead as the body rises.', 'Coordinate the arm swing and knee lift; do not force the jump.'),
      row('Kick in the air', [42, 43], 'Extend the right leg forward and upward while the left knee stays lifted. Meet the right foot with the right hand.', 'Use a comfortable kick height and keep the landing in view.'),
      row('Land in sequence', [43, 44], 'Lower the legs and land left then right, absorbing the impact through bent knees.', 'Practice on a clear, non-slip surface and stop if the landing becomes heavy.')
    ]
  },
  {
    id: '18-tornado-kick-figures-1-45-to-1-50',
    title: 'Tornado Kick',
    chinese: '旋风脚 · 图 1-45–1-50',
    section: 'Speed training · 快功',
    note: 'A linked turning jump. Learn the turn, jump, and landing separately first.',
    rows: [
      row('Step into the turn', [45, 46], 'Step the left foot forward and turn the body right as the arms open into the illustrated preparation.', 'Keep the head level and the floor clear before rotating.'),
      row('Plant and coil', [46, 47], 'Continue turning left-front, step the right foot, bend the knee, and coil the arms for takeoff.', 'Place the right foot securely; avoid twisting on a fixed knee.'),
      row('Jump and rotate', [47, 48], 'Push from the right foot, swing the left knee back and upward, and rotate the torso left as the arms circle.', 'Build the rotation from the step and arm path rather than forcing the neck.'),
      row('Sweep and strike', [48, 49], 'In the air, sweep the right leg inward and upward while the left palm meets the sole.', 'Use a lower target until the body can remain organized in the air.'),
      row('Land under control', [49, 50], 'Complete the turn and land on the forefeet in sequence or together, as the source permits.', 'Absorb the landing through bent knees and regain balance before moving on.'),
      row('Reset before repeating', [50, 45], 'Return to the upright starting stance and set the feet before another repetition.', 'Do not chain repetitions after a loose or noisy landing.')
    ]
  },
  {
    id: '19-aerial-outward-lotus-kick-figures-1-51-to-1-55',
    title: 'Aerial Outward Lotus Kick',
    chinese: '腾空外摆莲 · 图 1-51–1-55',
    section: 'Speed training · 快功',
    note: 'A linked turning jump. Learn the stepping arc and landing before adding the aerial strike.',
    rows: [
      row('Arc-step and load', [51, 52], 'From the upright stance, arc-step the right foot forward with the toe turned outward. Turn right and swing both arms behind.', 'Keep the stepping heel grounded and the route clear.'),
      row('Jump and turn', [52, 53], 'Push from the right foot, sweep the left leg upward to the right, and clap the palms overhead while continuing the right turn.', 'Use the arms and lead leg to organize the rotation.'),
      row('Sweep and strike', [53, 54], 'In the air, bend the left knee and sweep the right leg upward and outward. Strike the right sole with the hands in sequence.', 'Keep the upper body slightly forward and use a comfortable target height.'),
      row('Land and absorb', [54, 55], 'Lower the feet in sequence or together and settle into a stable upright landing.', 'Let the forefeet touch first, bend the knees to absorb impact, and regain balance.')
    ]
  }
];

function fileFor(n) {
  return path.join(figDir, `figure-1-${n}.png`);
}

function pngRatio(n) {
  const b = fs.readFileSync(fileFor(n));
  return b.readUInt32BE(16) / b.readUInt32BE(20);
}

function figureHtml(n, height) {
  const width = Math.min(pngRatio(n) * height, 3.35).toFixed(3);
  return `<div class="pose"><div class="num">1-${n}</div><div class="frame" style="width:${width}in;height:${height.toFixed(3)}in"><img src="../figures/figure-1-${n}.png" alt="Source figure 1-${n}"></div></div>`;
}

function rowHtml(item, index) {
  const count = item.figs.length;
  const ratios = item.figs.map(pngRatio);
  const widthFit = (4.45 - Math.max(0, count - 1) * .22) / ratios.reduce((a, b) => a + b, 0);
  const height = Math.max(1.65, Math.min(3.18, widthFit));
  const arrow = `<div class="flow"><span>&rarr;</span></div>`;
  return `<div class="row">
    <div class="text">
      <div class="step">Step ${index + 1}</div>
      <div class="move-name">${item.name}</div>
      <div class="label">Action</div><div class="caption">${item.action}</div>
      <div class="label key-label">Key point</div><div class="key">${item.key}</div>
    </div>
    <div class="strip">${item.figs.map(n => figureHtml(n, height)).join(arrow)}</div>
  </div>`;
}

function buildPacket(packet) {
  if (packet.rows.length % 2 !== 0) throw new Error(`${packet.id} does not have an even row count`);
  const pages = [];
  for (let i = 0; i < packet.rows.length; i += 2) pages.push(packet.rows.slice(i, i + 2));
  const allFigures = packet.rows.flatMap(row => row.figs).map(Number);
  const firstFigure = Math.min(...allFigures);
  const lastFigure = Math.max(...allFigures);
  let rowIndex = 0;
  const pagesHtml = pages.map((rows, pageIndex) => {
    const legend = pageIndex === 0
      ? `<div class="legend"><b>Follow each row left to right.</b><span>${packet.note}</span></div>`
      : '';
    const body = rows.map(item => rowHtml(item, rowIndex++)).join('');
    return `<section class="page">
      <header>
        <div><div class="kicker">${packet.section}</div><div class="title">${packet.title}</div><div class="chinese">${packet.chinese}</div></div>
        <div class="page-meta">${pageIndex + 1} / ${pages.length}<br><span>Figures 1-${firstFigure}–1-${lastFigure}</span></div>
      </header>${legend}<main class="${legend ? 'with-legend' : ''}">${body}</main>
      <footer>The source gives no fixed breath timing. Move within a comfortable range and use stable supports where shown.</footer>
    </section>`;
  }).join('');

  const css = `
    @page { size: Letter portrait; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin:0; color:${INK}; font-family:"Helvetica Neue",Arial,sans-serif; }
    .page { width:8.5in; height:11in; padding:.42in .5in .34in; display:flex; flex-direction:column; break-after:page; background:#fff; }
    .page:last-child { break-after:auto; }
    header { min-height:.78in; display:flex; justify-content:space-between; align-items:flex-end; border-bottom:2.5pt solid ${INK}; padding-bottom:.09in; }
    .kicker { margin-bottom:.035in; color:${GOLD}; font-size:8.5pt; font-weight:900; letter-spacing:.09em; text-transform:uppercase; }
    .title { font-size:22pt; font-weight:800; line-height:1; }
    .chinese { margin-top:.04in; color:#666; font-size:10.5pt; font-weight:700; letter-spacing:.08em; }
    .page-meta { text-align:right; color:#777; font-size:9.5pt; font-weight:800; line-height:1.2; letter-spacing:.06em; text-transform:uppercase; }
    .page-meta span { font-size:8pt; }
    .legend { min-height:.52in; padding:.08in .12in; background:#f2f0e9; display:flex; align-items:center; gap:.16in; font-size:9.3pt; line-height:1.24; }
    .legend b { color:${GOLD}; white-space:nowrap; }
    .legend span { margin-left:auto; max-width:4.8in; color:#555; font:9.4pt/1.24 Georgia,serif; text-align:right; }
    main { flex:1; min-height:0; display:grid; grid-template-rows:repeat(2,minmax(0,1fr)); }
    .row { min-height:0; display:flex; align-items:center; gap:.18in; padding:.12in 0; border-top:1.2pt solid #ddd; overflow:hidden; }
    main>.row:first-child { border-top:0; }
    .text { flex:0 0 2.5in; }
    .step { color:#81775f; font-size:8.5pt; font-weight:900; letter-spacing:.1em; text-transform:uppercase; }
    .move-name { margin-top:.025in; color:${GOLD}; font-size:24pt; font-weight:800; line-height:.97; letter-spacing:-.015em; }
    .label { margin-top:.095in; color:#5f5747; font-size:8.2pt; font-weight:900; letter-spacing:.09em; text-transform:uppercase; }
    .caption { margin-top:.025in; font:12.1pt/1.25 Georgia,"Times New Roman",serif; }
    .key-label { margin-top:.09in; }
    .key { margin-top:.02in; color:#555; font:10.4pt/1.24 Georgia,"Times New Roman",serif; }
    .strip { flex:1 1 auto; min-width:0; display:flex; justify-content:center; align-items:flex-end; }
    .pose { min-width:0; display:flex; flex-direction:column; align-items:center; }
    .num { height:.25in; padding:0 .07in; margin-bottom:.035in; border:1.3pt solid ${INK}; border-radius:.15in; background:#fff; display:flex; align-items:center; justify-content:center; font-size:9pt; font-weight:800; }
    .frame img { width:100%; height:100%; object-fit:contain; display:block; }
    .flow { align-self:center; padding:0 .02in; color:${GOLD}; font-size:22pt; font-weight:900; }
    footer { min-height:.28in; padding-top:.07in; border-top:1pt solid #d5d5d5; color:#777; text-align:center; font:8.7pt/1.2 Georgia,serif; }
  `;

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${packet.title}</title><style>${css}</style></head><body>${pagesHtml}</body></html>`;
  const htmlPath = path.join(htmlDir, `${packet.id}.html`);
  const pdfPath = path.join(printDir, `${packet.id}.pdf`);
  const packetPreview = path.join(previewDir, packet.id);
  fs.mkdirSync(packetPreview, { recursive: true });
  for (const f of fs.readdirSync(packetPreview)) {
    if (f.endsWith('.png')) fs.rmSync(path.join(packetPreview, f));
  }

  fs.writeFileSync(htmlPath, html);
  execFileSync('weasyprint', [htmlPath, pdfPath], { stdio: 'inherit' });
  execFileSync('pdftoppm', ['-png', '-r', '120', pdfPath, path.join(packetPreview, 'page')], { stdio: 'ignore' });
  const pagePngs = fs.readdirSync(packetPreview).filter(f => f.endsWith('.png')).sort().map(f => path.join(packetPreview, f));
  execFileSync('magick', ['montage', ...pagePngs, '-thumbnail', '306x396', '-tile', '4x', '-geometry', '+8+8', '-background', 'white', path.join(previewDir, `${packet.id}-contact.jpg`)]);
  console.log(`${packet.id}: ${packet.rows.length} rows, ${pages.length} pages`);
}

for (const packet of packets) buildPacket(packet);

const allPreviewPages = packets.flatMap(packet => {
  const packetPreview = path.join(previewDir, packet.id);
  return fs.readdirSync(packetPreview)
    .filter(file => file.endsWith('.png'))
    .sort()
    .map(file => path.join(packetPreview, file));
});
execFileSync('magick', ['montage', ...allPreviewPages, '-thumbnail', '255x330', '-tile', '5x', '-geometry', '+10+10', '-background', 'white', path.join(base, 'all-packets-contact-sheet.jpg')]);

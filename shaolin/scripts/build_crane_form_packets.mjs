import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'crane-form-tuna');
const figDir = path.join(base, 'figures');
const htmlDir = path.join(base, 'html');
const printDir = path.join(base, 'print');
const previewDir = path.join(base, 'preview');
for (const dir of [htmlDir, printDir, previewDir]) fs.mkdirSync(dir, { recursive: true });

const GOLD = '#a87408';
const INK = '#151515';
const r = (section, name, figs, caption, cue = 'Breathe naturally') => ({ section, name, figs, caption, cue });

const packets = [
  {
    id: '01-crane-form-part-1-figures-3-1-to-3-30',
    title: 'Crane-Form Tu-Na · Part 1',
    chinese: '鹤形吐纳养生功 · 图 3-1–3-30',
    note: 'This is one linked form. Follow the panels in order; every boundary posture is repeated.',
    footer: 'The source uses 吐纳随动法: let breathing follow the movement naturally—do not impose a fixed inhale/exhale count.',
    rows: [
      r('Opening · 起势', 'Settle', ['1'], 'Stand with the feet together and palms at the sides. Keep the head upright, lips lightly closed, and breathe through the nose. Settle attention at the lower dantian for about one minute.'),
      r('', 'Step out', ['1','2'], 'Step the left foot sideways to a stance slightly wider than the shoulders.'),
      r('', 'Open the palms', ['2','3'], 'Open both palms beside the body, fingers down and palms inward. Raise them toward chest height while softly bending the knees.'),
      r('', 'Lower', ['3','4'], 'Relax the limbs and keep the head and neck upright. Let both palms descend naturally.'),
      r('', 'Bow stance', ['4','5'], 'Step the right foot back and bend the left knee into a left bow stance. Turn the left palm forward at the waist while the right arm reaches to the right at shoulder height.'),
      r('', 'Left palm forward', ['5','6'], 'Drive the left palm forward to shoulder height while drawing the right palm across toward the left side of the chest.'),
      r('', 'Crane wings', ['6','7'], 'Separate both hands to the sides. Bend the elbows, let the fingertips point down, and turn the palms upward slightly above shoulder height.'),
      r('', 'Rise and extend', ['7','8'], 'Push through the right leg to rise. Rotate both palms down and extend the arms sideways at shoulder height.'),
      r('', 'Cross-step press', ['8','9'], 'Cross the right foot behind the left into a T-step. Press the palms down with elbows lifted and fingers turned inward; turn the head left and look down-left.'),

      r('Crane Explores the Road · 仙鹤探路', 'Lift left knee', ['9','10'], 'Shift weight to the right and lift the left knee outward, toes down. Retract the neck and open the arms like crane wings; look forward and slightly down.'),
      r('', 'Land left bow', ['10','11'], 'Turn left and land the left foot into a left bow stance. Extend the palms outside the thighs, seat the wrists, and lift the chest and head.'),
      r('', 'Lift right knee', ['11','12'], 'Shift onto the left leg and lift the right knee, toes back and down. Hold the right hand by the chest, palm down; place the left hand near the inside of the right upper arm.'),
      r('', 'Balance forward', ['12','13'], 'Extend the right leg back as the torso inclines forward. Reach the right palm toward forehead height, palm down, while the left arm reaches back, palm up.'),

      r('Crane Extends the Leg · 仙鹤伸腿', 'Kick right', ['13','14'], 'Kick the right foot forward to about left-knee height, foot level. Extend both arms sideways near waist height, palms down, and look toward the right foot.'),
      r('', 'Land and press', ['14','15'], 'Retract, then place the right foot to form a left bow stance. Press the right palm forward at shoulder height; hold the left palm at the waist.'),
      r('', 'Kick and switch', ['15','16'], 'Draw the right palm to the right waist, palm up. Kick the right foot forward while the left palm presses forward at shoulder height, palm down.'),
      r('', 'Alternate kick', ['16','17'], 'Land the right foot in front of the left, then kick the left foot forward. Return the left palm to the waist and press the right palm forward.'),

      r('Spirit Crane Descends · 灵鹤降凡', 'High right kick', ['17','18'], 'Land the left foot forward and kick the right foot upward toward head height—or a comfortable lower height. Meet the right foot with the right palm.'),
      r('', 'Turn and sweep', ['18','19'], 'Land the right foot beside the left and turn left. Sweep the bent left leg behind, sole up; extend the arms left-high and right-low, then turn the head right to look toward the left foot.'),

      r('White Crane Seeks Food · 白鹤寻食', 'Set the empty stance', ['19','20'], 'Turn left and land the left foot. Sink slightly and touch the right toe into a right T-step. Open the arms with softened elbows and wrists; lengthen the crane neck and let the gaze follow the right hand.'),

      r('Spirit Crane Bathes · 灵鹤沐浴', 'Scoop diagonally', ['20','21'], 'Lower the right heel, turn the feet left, and settle into a left empty stance. Scoop the left palm low behind the left waist and the right palm high to the right; incline front-left while looking right.'),
      r('', 'Turn and reach back', ['21','22'], 'Turn the legs farther left and sink. Incline front-left while extending both palms behind you, palms up and fingers back; turn the head left and look down-left.'),
      r('', 'Lift the shoulders', ['22','23'], 'Turn both palms down beside the body, fingers down and palms outward. Lift the shoulders, retract the neck, and look back-left.'),
      r('', 'Look to the sky', ['23','24'], 'Turn the head right, tilt the face upward, and look to the upper-right without forcing the neck.'),

      r('Crane Soars to Heaven · 一鹤冲天', 'Rise and kick', ['24','25'], 'Rise onto the left leg and kick the right foot forward and upward. Meet the right foot with both palms; use a comfortable kick height.'),
      r('', 'Land and insert palms', ['25','26'], 'Land the right foot forward into a right bow stance. Thread both palms forward, right near the forehead and left near the chest, with softened elbows and wrists.'),

      r('Spirit Crane Walks the Trigrams · 灵鹤踏卦', 'Lift and open', ['26','27'], 'Shift onto the left leg and lift the right knee, toe down. Swing the right arm behind the hip and curve the left arm beside the head; look lower-right.'),
      r('', 'Enter the circle', ['27','28','28a'], 'Place the right foot forward with toes turned inward and open the arms, right high and left low. The inset preserves the source’s eight-step circular route.'),
      r('', 'Walk eight steps', ['28','29'], 'Walk eight alternating inward-clasping steps counterclockwise around the circle. Keep the upper body controlled and let the arms follow the illustrated crane-wing shape.'),
      r('', 'Finish with a swing kick', ['29','30'], 'On the final step, swing the right leg outward. Strike the right foot with the palms in sequence, exactly as shown.'),
    ]
  },
  {
    id: '02-crane-form-part-2-figures-3-34-to-3-91',
    title: 'Crane-Form Tu-Na · Part 2',
    chinese: '鹤形吐纳养生功 · 图 3-34–3-91',
    note: 'The supplied scan resumes here after missing book pages 84–85 and figures 3-31–3-33. Begin only from a safely reconstructed starting posture.',
    footer: 'Move within a comfortable range. The source assigns no fixed inhale/exhale pattern; breathing follows the movement naturally.',
    rows: [
      r('Geese Settle, Crane Rises · 雁落鹤起', 'Low left stance', ['34'], 'Extend the left leg and sink deeply over the right leg into a low left stance. Turn and incline left; reach the right palm diagonally back, palm up, while the left elbow settles inside the left thigh.'),
      r('', 'Shift into left bow', ['34','35'], 'Push through the right leg and carry the weight left-front into a left bow stance. Thread the left palm forward and up to shoulder height, palm up; keep the right hand at the waist.'),
      r('', 'Advance and press', ['35','36'], 'Advance the right foot and follow with the left while maintaining the left bow shape. Rotate the left palm and press forward at shoulder height, palm down.'),

      r('Hungry Crane Seizes Food · 饥鹤夺食', 'Right empty stance', ['36','37'], 'Touch the right toe forward while the left leg half-squats. Curve the right palm forward near eye height; sweep the left palm up and back below the head, palm down.'),
      r('', 'Left palm press', ['37','38'], 'Advance the right foot half a step and push through the left leg into a right bow stance. Draw the right palm to the waist and press the left palm forward at shoulder height.'),
      r('', 'Right palm press', ['38','39'], 'Shift weight left and settle into a right half-horse stance. Close the left hand at the waist and press the right palm forward with a softly curved arm.'),
      r('', 'Switch to left', ['39','40'], 'Step the left toe forward, weight on the half-squatting right leg. Arc the right palm to the side and open the left fist into a forward shoulder-height press.'),
      r('', 'Turn and lift', ['40','41'], 'Set the left heel, turn right, and settle into a left half-horse stance. Raise the left elbow and wrist toward head height while the right palm returns to the waist.'),

      r('White Crane Coils the Nest · 白鹤盘窝', 'Reach to ankle', ['41','42'], 'Shift into a right bow stance and incline right-front. Thread the right palm down toward the right ankle, fingers down and palm forward; hold the left palm at the waist.'),
      r('', 'Coil and sink', ['42','43'], 'Turn left, bend and twist the legs, and sink. Arc the left palm down-left while the right hand circles around the front-right of the head; fingertips point down.'),

      r('Immortal Crane Plays with Cicada · 仙鹤戏蝉', 'Cross by the thigh', ['43','44'], 'Rise onto the right leg and lift the left foot behind the right knee. Incline slightly right and cross the palms outside the right thigh, left over right, palms up.'),
      r('', 'Step and cover', ['44','45'], 'Place the left foot forward and lift the right foot. Carry the left palm upward toward the right shoulder.'),
      r('', 'Horse stance strike', ['45','46'], 'Land the right foot into horse stance. Close the left hand at the waist and swing the right palm toward the right shoulder, palm down; look right.'),
      r('', 'Lift and frame', ['46','47'], 'Shift to the left leg and lift the right leg. Hold the right palm near the front-right abdomen, palm up, while the left palm opens overhead; look lower-right.'),
      r('', 'Gather at shoulder', ['47','48'], 'Draw the right foot slightly inward. Press the left palm onto the outside of the right shoulder and gather the right palm beneath the left armpit.'),
      r('', 'Step and press', ['48','49'], 'Step right into a right half-horse stance. Press the right palm forward at shoulder height, palm down; keep the left hand at the waist.'),

      r('White Crane Looks Back · 白鹤回顾', 'Cross-step', ['49','50'], 'Cross-step the left foot and turn the torso slightly right. Lower and turn the right palm up near waist height.'),
      r('', 'Look behind', ['50','51'], 'Draw the right palm across the chest, fingers left and palm up. Push the left palm toward the right side at shoulder height, palm down, and look back-right.'),
      r('', 'Sink and thread', ['51','52'], 'Twist and sink. Hold the left palm horizontally near the left forehead while the right palm threads back-right, palm up, toward the left heel.'),
      r('', 'Rise to empty stance', ['52','53'], 'Rise and turn left. Step into a left empty stance and present the right palm forward at shoulder height, palm up.'),
      r('', 'Turn and coil', ['53','54'], 'Turn left and sink. Arc the left palm low behind the left knee, palm back and fingers down; curve the right arm beside the shoulder, palm down.'),

      r('Immortal Crane Chases Waves · 仙鹤逐浪', 'Press by the hips', ['54','55'], 'Turn the upper body right. Press both palms beside the hips, palms down and fingers forward; look forward and down.'),
      r('', 'Alternating lift', ['55','56'], 'Lift and place the left foot, then lift the right knee. Gather both hands by the waist.'),
      r('', 'Long step forward', ['56','57'], 'Take a large right step forward. Thread both palms ahead with softened elbows and wrists, right near eyebrow height and left below the right elbow.'),
      r('', 'Gather the stance', ['57','58'], 'Carry the weight right-front and draw the left foot inward to a right half-horse stance. Keep the right forearm vertical near the forehead and slightly lift the left arm.'),
      r('', 'Arc and push', ['58','59'], 'Circle the palms up, over, back, and down toward the shoulders. Push through the left leg into a right bow stance and press both palms forward at shoulder height.'),

      r('Blue Crane Parts the Waves · 青鹤排浪', 'Balance and offer palms', ['59','60'], 'Lift the bent left knee, toe down and sole back near the right calf. Incline forward; offer the left palm forward and up at chest height while the right palm faces down inside the left upper arm.'),
      r('', 'Step and push', ['60','61'], 'Place the left foot into a left bow stance and push both palms forward at shoulder height, wrists seated, fingertips up.'),

      r('Immortal Crane Treads Green · 仙鹤踏青', 'Crane balance', ['61','62','62a'], 'Lift the right knee, sole back near the left knee. Extend both arms in soft arcs slightly below shoulder height. The inset preserves the source’s front view.'),
      r('', 'Press and kick', ['62','63'], 'Press both palms down and back beside the hips while kicking the right leg forward to about left-knee height.'),
      r('', 'Fold and suspend', ['63','64'], 'Incline forward and bend the right knee so the foot suspends beside the left calf. Lift both elbows in front, left over right, fingers forward.'),
      r('', 'Extend the kick', ['64','65'], 'Kick the right leg forward toward waist height with a soft knee and level foot. Lower the right palm beside the hip, palm up, and press the left palm forward.'),

      r('Immortal Crane Pushes the Waves · 仙鹤推波', 'Gather', ['65','66'], 'Place the right foot beside the left and half-squat. Hold both palms at the waist and look forward.'),
      r('', 'Lift the palms', ['66','67'], 'Raise both palms forward to about mouth height, palms down and fingers forward.'),
      r('', 'Draw inward', ['67','68'], 'Bend the elbows and draw the palms inward toward the lower jaw.'),
      r('', 'Push the wave', ['68','69'], 'Rub and push the palms forward until the arms extend at shoulder height, fingers up. Repeat the source movement several times without forcing the wrists.'),

      r('Spirit Crane Kicks the Lantern · 灵鹤踢灯', 'Step and open', ['69','70'], 'Step the right foot a half-step forward and shift weight ahead. Extend the right palm down behind the hip and the left palm forward near rib height.'),
      r('', 'Turn left', ['70','71'], 'Turn left with both legs straight. Arc the left palm overhead, fingers up, while the right arm extends diagonally near right-rib height, fingers down.'),
      r('', 'Kick and meet', ['71','72'], 'Kick the right foot forward and upward, meeting it with both palms at a comfortable height.'),

      r('Immortal Crane Beats Its Wings · 仙鹤拍翅', 'Strike left arm points', ['72','73','73a','73b'], 'Land the right foot forward and extend the left arm at shoulder height, palm right. Use the right palm to pat the left Quchi and Chize areas; the insets locate the source points.'),
      r('', 'Strike right arm points', ['73','74'], 'Step left, extend the right arm, and use the left palm to pat the matching Quchi and Chize areas on the right arm.'),
      r('', 'Pat left Shenshu', ['74','75','75a'], 'Step right and use the right palm to pat the left Shenshu area on the lower back. The inset preserves the source location diagram.'),
      r('', 'Pat right Shenshu', ['75','76'], 'Step left and use the left palm to pat the right Shenshu area.'),
      r('', 'Pat right Sanyinjiao', ['76','77','77a'], 'Lift the right leg and use the left palm to pat the inner right calf at the source’s Sanyinjiao location.'),
      r('', 'Pat left Sanyinjiao', ['77','78'], 'Set the right foot, lift the left leg, and use the right palm to pat the inner left calf at the matching location.'),
      r('', 'Pat left Zusanli', ['78','79','79a'], 'Set the left foot, bend, and use the right palm to pat the left leg at the source’s Zusanli location.'),
      r('', 'Pat right Zusanli', ['79','80'], 'Advance the right foot, bend, and use the left palm to pat the right leg at the matching location.'),

      r('Cold Crane Stands by the River · 寒鹤立江', 'Fold over the left leg', ['80','81'], 'Extend the left leg forward while half-squatting on the right. Fold the head toward the left knee; protect the back of the head with both hands and press gently forward and down.'),

      r('Male Crane Pursues Spring · 雄鹤追春', 'One-leg squat', ['81','82'], 'Lift the left foot and balance on the bent right leg. Extend both palms forward at shoulder height, palms down.'),
      r('', 'Right kick', ['82','83'], 'Step the left foot forward and kick the right foot ahead with the foot level. Strike the right foot with the right palm.'),
      r('', 'Retract and frame', ['83','84'], 'Straighten the left leg and retract the bent right knee. Press the right palm forward at shoulder height while the left forearm frames the forehead.'),
      r('', 'Land in right bow', ['84','85'], 'Land the right foot forward and push through the left leg into a right bow stance. Circle the right palm down, back, and forward to shoulder height; hold the left hand at the waist.'),

      r('Closing · 收势', 'Turn and release', ['85','86'], 'Turn left to face front and settle into a half-horse stance. Extend the palms sideways at shoulder height, palms down, and gently shake out tension.'),
      r('', 'Rise and regulate', ['86','87'], 'Rise and lower the palms to the sides. Guard the lower dantian and let the breathing regulate for about one minute.'),
      r('', 'Cross hands', ['87','88'], 'Cross the hands before the chest in a ten-shape, right hand outside and left hand inside.'),
      r('', 'Open elbows', ['88','89'], 'Open the elbows toward shoulder level. Face the fingertips toward each other and turn the palms down.'),
      r('', 'Lower to dantian', ['89','90'], 'Lower the palms toward the dantian in a rounded holding shape, palms up.'),
      r('', 'Close the feet', ['90','91'], 'Draw the left foot to the inside of the right and stand with the feet together. Lower the palms to the sides, regulate the breath, and finish.'),
    ]
  }
];

function fileFor(n) { return path.join(figDir, `figure-3-${n}.png`); }
function pngRatio(n) { const b = fs.readFileSync(fileFor(n)); return b.readUInt32BE(16) / b.readUInt32BE(20); }
function figureHtml(n, height) {
  const width = Math.min(pngRatio(n) * height, 2.55).toFixed(3);
  return `<div class="pose"><div class="num">3-${n}</div><div class="frame" style="width:${width}in;height:${height}in"><img src="../figures/figure-3-${n}.png" alt="Source figure 3-${n}"></div></div>`;
}
function rowHtml(row, share) {
  const count = row.figs.length;
  const h = count >= 4 ? Math.min(share - .85, 1.7) : count === 3 ? Math.min(share - .78, 1.9) : Math.min(share - .55, 2.25);
  const arrow = `<div class="flow">&#9656;<span>&rarr;</span></div>`;
  return `${row.section ? `<div class="section-label">${row.section}</div>` : ''}<div class="row ${count >= 3 ? 'dense' : ''}"><div class="text"><div class="move-name">${row.name}</div><div class="cue">${row.cue}</div><div class="caption">${row.caption}</div></div><div class="strip">${row.figs.map(n => figureHtml(n, h)).join(arrow)}</div></div>`;
}

function buildPacket(packet) {
  const perPage = 3;
  const pages = [];
  // Avoid an isolated final panel: when the remainder would be one, balance
  // the last four panels as two plus two while retaining the same page count.
  let i = 0;
  while (packet.rows.length - i > 4) {
    pages.push(packet.rows.slice(i, i + perPage));
    i += perPage;
  }
  const remaining = packet.rows.length - i;
  if (remaining === 4) {
    pages.push(packet.rows.slice(i, i + 2), packet.rows.slice(i + 2));
  } else if (remaining > 0) {
    pages.push(packet.rows.slice(i));
  }
  const pagesHtml = pages.map((rows, pageIndex) => {
    const share = (9.0 - (pageIndex === 0 ? .5 : 0) - rows.filter(x => x.section).length * .26) / rows.length;
    const first = rows[0].figs[0]; const last = rows.at(-1).figs.at(-1);
    const legend = pageIndex === 0 ? `<div class="legend"><b>Follow each panel left to right.</b><b class="natural">&#9656; natural breath / movement flow</b><span>${packet.note}</span></div>` : '';
    return `<section class="page"><header><div><div class="title">${packet.title}</div><div class="chinese">${packet.chinese}</div></div><div class="page-meta">${pageIndex + 1} / ${pages.length}<br><span>Figures 3-${first}–3-${last}</span></div></header>${legend}<main>${rows.map(row => rowHtml(row, share)).join('')}</main><footer>${packet.footer}</footer></section>`;
  }).join('');
  const css = `
    @page { size: Letter portrait; margin: 0; } * { box-sizing: border-box; }
    html, body { margin:0; color:${INK}; font-family:"Helvetica Neue",Arial,sans-serif; }
    .page { width:8.5in; height:11in; padding:.42in .5in .35in; display:flex; flex-direction:column; break-after:page; background:#fff; }
    .page:last-child { break-after:auto; } header { min-height:.62in; display:flex; justify-content:space-between; align-items:flex-end; border-bottom:2.5pt solid ${INK}; padding-bottom:.08in; }
    .title { font-size:19pt; font-weight:800; line-height:1.02; } .chinese { margin-top:.035in; color:#666; font-size:10.5pt; font-weight:700; letter-spacing:.09em; }
    .page-meta { text-align:right; color:#777; font-size:9.5pt; font-weight:800; line-height:1.2; letter-spacing:.06em; text-transform:uppercase; } .page-meta span { font-size:8pt; }
    .legend { min-height:.5in; padding:.08in .11in; background:#f2f0e9; display:flex; align-items:center; gap:.13in; font-size:9.3pt; line-height:1.25; }
    .legend .natural { color:${GOLD}; } .legend span { margin-left:auto; max-width:3.25in; color:#555; font:9.3pt/1.25 Georgia,serif; }
    main { flex:1; min-height:0; display:flex; flex-direction:column; } .section-label { flex:0 0 auto; margin-top:.025in; padding:.04in .09in; border-left:5pt solid ${GOLD}; color:#5e4a1f; background:#f6f2e7; font-size:9.5pt; font-weight:800; letter-spacing:.045em; text-transform:uppercase; }
    .row { flex:1 1 0; min-height:0; display:flex; align-items:center; gap:.18in; padding:.075in 0; border-top:1.2pt solid #ddd; overflow:hidden; } main>.row:first-child,.section-label+.row { border-top:0; }
    .text { flex:0 0 2.7in; } .move-name { color:${GOLD}; font-size:21pt; font-weight:800; line-height:.95; letter-spacing:-.01em; } .cue { margin-top:.045in; color:#68604e; font-size:9.5pt; font-weight:800; text-transform:uppercase; letter-spacing:.055em; }
    .caption { margin-top:.085in; font:11.4pt/1.27 Georgia,"Times New Roman",serif; } .strip { flex:1 1 auto; min-width:0; display:flex; justify-content:center; align-items:flex-end; }
    .pose { min-width:0; display:flex; flex-direction:column; align-items:center; } .num { height:.25in; padding:0 .07in; margin-bottom:.025in; border:1.3pt solid ${INK}; border-radius:.15in; background:#fff; display:flex; align-items:center; justify-content:center; font-size:9pt; font-weight:800; }
    .frame img { width:100%; height:100%; object-fit:contain; display:block; } .flow { align-self:center; padding:0 .02in; color:${GOLD}; display:flex; flex-direction:column; align-items:center; font-size:10pt; font-weight:900; line-height:.65; } .flow span { font-size:19pt; }
    .dense .text { flex-basis:2.45in; } .dense .caption { font-size:10.7pt; } footer { min-height:.28in; padding-top:.07in; border-top:1pt solid #d5d5d5; color:#777; text-align:center; font:8.8pt/1.2 Georgia,serif; }
  `;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${packet.title}</title><style>${css}</style></head><body>${pagesHtml}</body></html>`;
  const htmlPath = path.join(htmlDir, `${packet.id}.html`); const pdfPath = path.join(printDir, `${packet.id}.pdf`); const packetPreview = path.join(previewDir, packet.id);
  fs.mkdirSync(packetPreview, { recursive:true }); for (const f of fs.readdirSync(packetPreview)) if (f.endsWith('.png')) fs.rmSync(path.join(packetPreview,f));
  fs.writeFileSync(htmlPath, html); execFileSync('weasyprint',[htmlPath,pdfPath],{stdio:'inherit'}); execFileSync('pdftoppm',['-png','-r','120',pdfPath,path.join(packetPreview,'page')],{stdio:'ignore'});
  execFileSync('magick',['montage',...fs.readdirSync(packetPreview).filter(f=>f.endsWith('.png')).sort().map(f=>path.join(packetPreview,f)),'-thumbnail','255x330','-tile','5x','-geometry','+8+8','-background','white',path.join(previewDir,`${packet.id}-contact.jpg`)]);
  console.log(`${packet.id}: ${packet.rows.length} panels, ${pages.length} pages`);
}
for (const packet of packets) buildPacket(packet);

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
const figureId = value => {
  const id = String(value);
  return id.includes('-') ? id : `1-${id}`;
};
const row = (name, figs, action, key) => ({ name, figs: figs.map(figureId), action, key });

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
  },
  {
    id: '20-squat-holding-stone-lock-figure-1-56',
    title: 'Squat Holding a Stone Lock',
    chinese: '提石锁下蹲 · 图 1-56',
    section: 'Strength and conditioning · 功力训练',
    note: 'A loaded squat shown in one source figure; setup and repetition are separated for clarity.',
    rows: [
      row('Secure the load', ['1-56'], 'Stand upright with the stone lock centered between the legs and held firmly in both hands.', 'Use a manageable load, clear floor space, and an even stance.'),
      row('Squat and rise', ['1-56'], 'Bend the knees and hips to lower under control, then stand without swinging the weight.', 'Keep the trunk braced and the knees tracking with the feet.')
    ]
  },
  {
    id: '21-hooked-stone-lock-leg-extensions-figure-1-57',
    title: 'Hooked Stone-Lock Leg Extensions',
    chinese: '脚勾石锁腿屈伸 · 图 1-57',
    section: 'Strength and conditioning · 功力训练',
    note: 'A seated loaded knee-extension drill shown in one source figure.',
    rows: [
      row('Set the position', ['1-57'], 'Sit securely on the raised support and hook one foot through the handle of the stone lock.', 'Stabilize the seat and begin with the knee bent and the load clear of the floor.'),
      row('Extend and return', ['1-57'], 'Straighten the loaded leg forward, then bend the knee slowly to return.', 'Use a light load first; do not swing or snap the knee.')
    ]
  },
  {
    id: '22-weighted-side-horse-step-squat-figures-1-58-to-1-59',
    title: 'Weighted Side Horse-Step Squat',
    chinese: '负重侧马步蹲立 · 图 1-58–1-59',
    section: 'Strength and conditioning · 功力训练',
    note: 'A linked lateral squat performed with a balanced shoulder load.',
    rows: [
      row('Set the shoulder load', ['1-58'], 'Stand in a wide stance with the bar balanced across the shoulders and both hands controlling it.', 'Center the load before moving and keep the spine upright.'),
      row('Sink to one side', ['1-58', '1-59'], 'Shift over one leg and bend it deeply while the other leg lengthens to the side; rise and change sides.', 'Keep both feet planted and use only a range that preserves knee alignment.')
    ]
  },
  {
    id: '23-weighted-squat-figure-1-60',
    title: 'Weighted Squat',
    chinese: '负重蹲起 · 图 1-60',
    section: 'Strength and conditioning · 功力训练',
    note: 'A shoulder-loaded squat shown in one source figure.',
    rows: [
      row('Set the stance', ['1-60'], 'Balance the bar across the shoulders, take an even stance, and brace before descending.', 'Use collars, a clear area, and a load that can be controlled without assistance.'),
      row('Lower and stand', ['1-60'], 'Bend the hips and knees into the squat, then drive evenly through both feet to stand.', 'Keep the load centered and avoid letting either knee collapse inward.')
    ]
  },
  {
    id: '24-weighted-heel-raise-figure-1-61',
    title: 'Weighted Heel Raise',
    chinese: '负重提踵 · 图 1-61',
    section: 'Strength and conditioning · 功力训练',
    note: 'A shoulder-loaded calf raise shown in one source figure.',
    rows: [
      row('Stand tall', ['1-61'], 'Set the shoulder load and stand with the feet parallel and the body vertical.', 'Use a stable handhold or spotter if balance is uncertain.'),
      row('Raise the heels', ['1-61'], 'Press through the forefeet to lift both heels, pause briefly, and lower with control.', 'Keep the ankles aligned and avoid bouncing at the bottom.')
    ]
  },
  {
    id: '25-sandbag-leg-training-figures-1-62-to-1-65',
    title: 'Sandbag Leg Training',
    chinese: '沙绑腿训练法 · 图 1-62–1-65',
    section: 'Strength and conditioning · 功力训练',
    note: 'Four separate weighted locomotion and jumping drills; they are not one continuous sequence.',
    rows: [
      row('Secure the leg weights', ['1-62'], 'Fasten the sand weights evenly around the lower legs before walking or running on level ground.', 'Check circulation and fastening; begin with short, controlled intervals.'),
      row('Jump onto steps', ['1-63'], 'Use a compact two-foot jump to move onto a low, stable step.', 'Start low, land softly, and stop if the weights shift.'),
      row('Hop up stairs', ['1-64'], 'Progress upward over regular steps while keeping the knees flexed and the landings quiet.', 'Use a rail or spotter and never train on loose or uneven stairs.'),
      row('Climb with control', ['1-65'], 'Step upward under the added leg load while maintaining an upright trunk.', 'Favor steady placement over speed and train both lead legs evenly.')
    ]
  },
  {
    id: '26-leg-conditioning-strikes-figures-1-66-to-1-67',
    title: 'Leg Conditioning Strikes',
    chinese: '排打 · 图 1-66–1-67',
    section: 'Strength and conditioning · 功力训练',
    note: 'Two sides of a progressive self-tapping drill, not a movement chain.',
    rows: [
      row('Condition one side', ['1-66'], 'Use the training implement to tap along the fleshy surfaces of one leg as illustrated.', 'Avoid joints, the shin edge, and injured tissue; begin very lightly.'),
      row('Change sides', ['1-67'], 'Repeat the controlled tapping pattern on the opposite leg.', 'Match the intensity on both sides and stop for sharp pain, numbness, or swelling.')
    ]
  },
  {
    id: '27-post-kicking-figures-1-68-to-1-71',
    title: 'Post Kicking',
    chinese: '踢桩 · 图 1-68–1-71',
    section: 'Strength and conditioning · 功力训练',
    note: 'Four separate post-contact variations; condition progressively rather than chaining them.',
    rows: [
      row('Front contact', ['1-68'], 'Place a controlled front kick against the post at a comfortable height.', 'Begin with touch contact and a padded target; never strike an immovable post at full force.'),
      row('Side contact', ['1-69'], 'Turn the hip and place the side of the foot or heel against the post.', 'Align the ankle before adding pressure.'),
      row('Angled contact', ['1-70'], 'Use the illustrated outward angle to place the lower leg or foot against the post.', 'Keep the standing knee free to turn and avoid twisting it.'),
      row('Low straight contact', ['1-71'], 'Extend the leg into the lower post and withdraw along the same path.', 'Use controlled range and alternate legs; power is not the first progression.')
    ]
  },
  {
    id: '28-sandbag-kicking-figures-1-72-to-1-74',
    title: 'Sandbag Kicking',
    chinese: '踢沙袋 · 图 1-72–1-74',
    section: 'Strength and conditioning · 功力训练',
    note: 'Three independent bag-contact variations; each should be practiced separately.',
    rows: [
      row('Side kick contact', ['1-72'], 'Place a controlled side kick into the hanging bag and retract without losing posture.', 'Let the bag hang freely and keep the support foot able to pivot.'),
      row('Front kick contact', ['1-73'], 'Drive the foot forward into the center of the bag, then return to balance.', 'Keep the toes and ankle organized for the chosen contact surface.'),
      row('Low-line contact', ['1-74'], 'Use the illustrated lower-line kick against the bag from a stable stance.', 'Do not chase a swinging bag with a locked knee.'),
      row('Reset between kicks', ['1-74'], 'Allow the bag to settle enough to re-establish distance before the next repetition.', 'Increase force only after placement, retraction, and balance are consistent.')
    ]
  },
  {
    id: '29-advance-step-figures-2-1-to-2-3',
    title: 'Advance Step',
    chinese: '上步 · 图 2-1–2-3',
    section: 'Fundamental footwork · 基本步法',
    note: 'Follow the linked stepping sequence left to right.',
    rows: [
      row('Move the lead foot', ['2-1', '2-2'], 'From the guarded stance, step the lead foot forward along the intended line.', 'Keep the head level and do not let the stance narrow excessively.'),
      row('Recover the stance', ['2-2', '2-3'], 'Bring the rear foot forward enough to restore the original stance width.', 'Move the feet in sequence without crossing them.')
    ]
  },
  {
    id: '30-entering-step-figures-2-4-to-2-5',
    title: 'Entering Step',
    chinese: '进步 · 图 2-4–2-5',
    section: 'Fundamental footwork · 基本步法',
    note: 'A short entering action followed by a controlled reset.',
    rows: [
      row('Enter', ['2-4', '2-5'], 'Drive the body forward from the stance as the stepping foot closes distance.', 'Keep the guard present and place the foot before transferring full weight.'),
      row('Re-form the stance', ['2-5', '2-2'], 'Set the following foot so the body returns to a balanced fighting stance.', 'Finish able to move again in any direction.')
    ]
  },
  {
    id: '31-following-step-figures-2-6-to-2-8',
    title: 'Following Step',
    chinese: '跟步 · 图 2-6–2-8',
    section: 'Fundamental footwork · 基本步法',
    note: 'Follow the linked movement; the middle posture repeats across rows.',
    rows: [
      row('Initiate', ['2-6', '2-7'], 'Shift forward and let the lead foot begin the step without rising in the stance.', 'Keep the feet close to the floor.'),
      row('Follow', ['2-7', '2-8'], 'Bring the rear foot after the lead foot to recover the working distance between them.', 'Do not let the following foot collide with or pass the lead foot.')
    ]
  },
  {
    id: '32-follow-and-advance-step-figures-2-9-to-2-11',
    title: 'Follow-and-Advance Step',
    chinese: '跟进步 · 图 2-9–2-11',
    section: 'Fundamental footwork · 基本步法',
    note: 'A linked two-part advance; the middle posture repeats.',
    rows: [
      row('Follow in', ['2-9', '2-10'], 'Draw the rear foot inward to load the forward movement.', 'Keep the torso quiet and the guard stable.'),
      row('Advance out', ['2-10', '2-11'], 'Send the lead foot forward and settle into the renewed stance.', 'Land softly and preserve enough width for balance.')
    ]
  },
  {
    id: '33-retreat-step-figures-2-12-to-2-14',
    title: 'Retreat Step',
    chinese: '退步 · 图 2-12–2-14',
    section: 'Fundamental footwork · 基本步法',
    note: 'Follow the linked retreat; the middle posture repeats.',
    rows: [
      row('Move the rear foot', ['2-12', '2-13'], 'Step the rear foot backward while maintaining the guarded upper-body position.', 'Keep the front knee aligned and the head level.'),
      row('Recover the stance', ['2-13', '2-14'], 'Draw the lead foot back enough to restore the original stance width.', 'Do not cross the feet or let the weight fall onto the heels.')
    ]
  },
  {
    id: '34-inserting-step-figures-2-15-to-2-16',
    title: 'Inserting Step',
    chinese: '插步 · 图 2-15–2-16',
    section: 'Fundamental footwork · 基本步法',
    note: 'A crossing insertion shown in two linked figures.',
    rows: [
      row('Insert the foot', ['2-15', '2-16'], 'Thread the stepping foot behind or across the standing leg as illustrated.', 'Place the ball of the foot lightly and keep the knees free to turn.'),
      row('Stabilize before exit', ['2-16', '2-15'], 'Control the crossed position, then unwind to a balanced stance before repeating.', 'Avoid loading a twisted knee or remaining crossed longer than needed.')
    ]
  },
  {
    id: '35-straddling-cross-step-figures-2-17-to-2-20',
    title: 'Straddling Cross Step',
    chinese: '跨步 · 图 2-17–2-20',
    section: 'Fundamental footwork · 基本步法',
    note: 'Follow the linked lateral crossing sequence left to right.',
    rows: [
      row('Cross the line', ['2-17', '2-18'], 'Step across the body line while turning the hips toward the new direction.', 'Keep the stepping foot low and place it before shifting fully.'),
      row('Open to stance', ['2-19', '2-20'], 'Continue the turn and open the feet into a stable guarded stance.', 'Let the feet pivot with the body so the knees do not bind.')
    ]
  },
  {
    id: '36-withdrawal-step-figures-2-21-to-2-24',
    title: 'Withdrawal Step',
    chinese: '撤步 · 图 2-21–2-24',
    section: 'Fundamental footwork · 基本步法',
    note: 'Follow the linked withdrawal sequence left to right.',
    rows: [
      row('Release the front', ['2-21', '2-22'], 'Lighten and withdraw the lead side while keeping the guard directed forward.', 'Avoid lifting the body as the foot moves.'),
      row('Turn and settle', ['2-23', '2-24'], 'Complete the withdrawing turn and place the feet into the new stance.', 'Finish balanced rather than leaning away from the movement.')
    ]
  },
  {
    id: '37-beating-step-figures-2-25-to-2-30',
    title: 'Beating Step',
    chinese: '击步 · 图 2-25–2-30',
    section: 'Fundamental footwork · 基本步法',
    note: 'A linked quick foot-change sequence; learn it slowly before adding speed.',
    rows: [
      row('Load the change', ['2-25', '2-26'], 'Shift the weight and prepare the feet for the quick exchange.', 'Stay compact and keep the upper body guarded.'),
      row('Beat the feet', ['2-26', '2-27', '2-28'], 'Use the illustrated foot action to displace one foot as the other takes its place.', 'Keep the contact light and close to the floor.'),
      row('Redirect', ['2-28', '2-29'], 'Carry the new lead foot toward the intended direction.', 'Do not let momentum pull the torso past the base.'),
      row('Set the stance', ['2-29', '2-30'], 'Place the feet and finish in a stable guard.', 'Pause until balance is clear before repeating.')
    ]
  },
  {
    id: '38-switch-jump-step-figures-2-31-to-2-34',
    title: 'Switch Jump Step',
    chinese: '换跳步 · 图 2-31–2-34',
    section: 'Fundamental footwork · 基本步法',
    note: 'A linked jumping switch; practice the landing before adding height.',
    rows: [
      row('Load and lift', ['2-31', '2-32'], 'Bend the knees and spring upward as the feet begin to exchange positions.', 'Use only enough height to clear the floor.'),
      row('Switch and land', ['2-33', '2-34'], 'Complete the foot switch in the air and land in the opposite stance.', 'Land softly on both forefeet with the knees bent.')
    ]
  },
  {
    id: '39-vertical-jump-step-figures-2-35-to-2-37',
    title: 'Vertical Jump Step',
    chinese: '纵跳步 · 图 2-35–2-37',
    section: 'Fundamental footwork · 基本步法',
    note: 'A linked vertical jump from and back to the guarded stance.',
    rows: [
      row('Load and jump', ['2-35', '2-36'], 'Bend the knees and drive vertically while maintaining the guarded torso.', 'Jump straight up rather than drifting.'),
      row('Return to stance', ['2-36', '2-37'], 'Descend and recover the stance under the body.', 'Land quietly and absorb the impact before moving again.')
    ]
  },
  {
    id: '40-kneeling-step-figures-2-38-to-2-44',
    title: 'Kneeling Step',
    chinese: '跪步 · 图 2-38–2-44',
    section: 'Fundamental footwork · 基本步法',
    note: 'A linked level-changing sequence; use padding while learning.',
    rows: [
      row('Lower the level', ['2-38', '2-39'], 'Shift to one side and bend deeply as the rear knee approaches the floor.', 'Keep control through the standing foot.'),
      row('Place the knee', ['2-39', '2-40'], 'Set the kneeling position without dropping body weight onto the knee.', 'Use a mat and keep the toes positioned to support the exit.'),
      row('Turn through', ['2-41', '2-42'], 'Continue the illustrated turn from the low base.', 'Move the hips and feet together rather than twisting a planted knee.'),
      row('Rise to guard', ['2-43', '2-44'], 'Drive through the feet to leave the kneel and regain the standing stance.', 'Stand under control and re-establish balance before repeating.')
    ]
  },
  {
    id: '41-hooking-pivot-step-figures-2-45-to-2-47',
    title: 'Hooking Pivot Step',
    chinese: '扣步 · 图 2-45–2-47',
    section: 'Fundamental footwork · 基本步法',
    note: 'A linked inward foot placement and pivot.',
    rows: [
      row('Hook the step', ['2-45', '2-46'], 'Place the stepping foot inward across the line to begin the pivot.', 'Keep the heel light enough for the turn.'),
      row('Complete the pivot', ['2-46', '2-47'], 'Turn the body around the placed foot and recover the guarded stance.', 'Let both feet adjust so the knees finish aligned.')
    ]
  },
  {
    id: '42-cross-follow-step-figures-2-48-to-2-50',
    title: 'Cross-Follow Step',
    chinese: '跨跟步 · 图 2-48–2-50',
    section: 'Fundamental footwork · 基本步法',
    note: 'A linked crossing step followed by stance recovery.',
    rows: [
      row('Cross forward', ['2-48', '2-49'], 'Carry one foot across and forward while turning toward the new line.', 'Place the foot securely before the body follows.'),
      row('Follow and settle', ['2-49', '2-50'], 'Bring the trailing foot through to rebuild the stance.', 'Finish with usable width and the guard facing the direction of travel.')
    ]
  },
  {
    id: '43-leaping-step-figures-2-51-to-2-53',
    title: 'Leaping Step',
    chinese: '跃步 · 图 2-51–2-53',
    section: 'Fundamental footwork · 基本步法',
    note: 'A linked forward leap; boundary posture repeats.',
    rows: [
      row('Load and take off', ['2-51', '2-52'], 'Push from the supporting leg and lift the opposite knee to carry the body forward.', 'Use a small distance first and keep the landing area clear.'),
      row('Travel and land', ['2-52', '2-53'], 'Extend through the leap and place the landing foot before recovering the stance.', 'Absorb impact with bent knees and do not overreach.')
    ]
  },
  {
    id: '44-side-turn-figures-2-54-to-2-55',
    title: 'Side Turn',
    chinese: '侧身 · 图 2-54–2-55',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked turn from front-facing guard to a narrower side profile.',
    rows: [
      row('Begin the turn', ['2-54', '2-55'], 'Rotate the shoulders and hips so the body presents a narrower side.', 'Let the feet and knees turn with the torso.'),
      row('Return to guard', ['2-55', '2-54'], 'Unwind under control and recover the original guarded alignment.', 'Keep the head oriented toward the working direction.')
    ]
  },
  {
    id: '45-forward-bend-figures-2-56-to-2-57',
    title: 'Forward Bend',
    chinese: '前俯身 · 图 2-56–2-57',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked forward body evasion from the guarded stance.',
    rows: [
      row('Fold forward', ['2-56', '2-57'], 'Incline the torso forward from the hips while the stance remains rooted.', 'Keep the neck long and avoid rounding sharply through the lower back.'),
      row('Recover upright', ['2-57', '2-56'], 'Drive through the legs and hips to return to the guarded posture.', 'Rise without throwing the head backward.')
    ]
  },
  {
    id: '46-backward-lean-figures-2-58-to-2-59',
    title: 'Backward Lean',
    chinese: '后仰身 · 图 2-58–2-59',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked backward body evasion with the base maintained.',
    rows: [
      row('Lean away', ['2-58', '2-59'], 'Shift the hips and incline the upper body backward while keeping the feet planted.', 'Use a small range and support the movement through the legs.'),
      row('Return to center', ['2-59', '2-58'], 'Bring the torso back over the stance and recover the guard.', 'Do not snap the spine or lose sight of the front.')
    ]
  },
  {
    id: '47-side-lean-fall-figures-2-60-to-2-61',
    title: 'Side Lean',
    chinese: '侧倒身 · 图 2-60–2-61',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked lateral body evasion; it is not a drop to the floor.',
    rows: [
      row('Shift sideways', ['2-60', '2-61'], 'Move the hips and incline the torso to one side while maintaining the stance.', 'Keep weight supported through the legs rather than hanging on the lower back.'),
      row('Recover the line', ['2-61', '2-60'], 'Return the torso to center and re-form the guard.', 'Use equal control on both sides.')
    ]
  },
  {
    id: '48-rear-turn-figures-2-62-to-2-64',
    title: 'Rear Turn',
    chinese: '后转身 · 图 2-62–2-64',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked turn to face behind; the middle posture repeats.',
    rows: [
      row('Initiate behind', ['2-62', '2-63'], 'Turn the head and shoulders, then let the hips and feet follow toward the rear.', 'Spot the new direction before transferring weight.'),
      row('Complete the turn', ['2-63', '2-64'], 'Finish the rotation in a balanced guard facing the opposite direction.', 'Allow both feet to pivot so neither knee remains twisted.')
    ]
  },
  {
    id: '49-crouching-body-shift-figures-2-65-to-2-66',
    title: 'Crouching Body Shift',
    chinese: '下蹲身 · 图 2-65–2-66',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked level change from the guarded stance.',
    rows: [
      row('Sink the body', ['2-65', '2-66'], 'Bend the hips and knees to lower the torso while retaining the guard.', 'Keep the heels controlled and the knees aligned.'),
      row('Rise to stance', ['2-66', '2-65'], 'Press through the feet to return to the original height.', 'Rise vertically rather than pitching forward.')
    ]
  },
  {
    id: '50-evasive-body-shift-figures-2-67-to-2-68',
    title: 'Evasive Body Shift',
    chinese: '闪身 · 图 2-67–2-68',
    section: 'Fundamental body methods · 基本身法',
    note: 'A quick linked displacement of the body off the original line.',
    rows: [
      row('Slip off line', ['2-67', '2-68'], 'Shift the feet and torso together to move the body away from the centerline.', 'Keep the movement compact and the guard between the head and front.'),
      row('Recover position', ['2-68', '2-67'], 'Re-center into a stable stance after the evasive shift.', 'Do not overstep or cross the feet.')
    ]
  },
  {
    id: '51-aerial-rear-turn-figures-2-69-to-2-72',
    title: 'Aerial Rear Turn',
    chinese: '腾空后转身 · 图 2-69–2-72',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked jumping turn; learn the pivot and landing on the ground first.',
    rows: [
      row('Load the jump', ['2-69', '2-70'], 'Turn toward the rear and bend the knees to prepare the takeoff.', 'Keep the floor clear and use minimal height while learning.'),
      row('Jump and rotate', ['2-71', '2-72'], 'Leave the floor, continue the rearward rotation, and prepare the feet to land.', 'Land with bent knees and regain the guard before repeating.')
    ]
  },
  {
    id: '52-body-flip-overturn-figures-2-73-to-2-78',
    title: 'Body Flip / Overturn',
    chinese: '翻身 · 图 2-73–2-78',
    section: 'Fundamental body methods · 基本身法',
    note: 'The source presents two distinct linked variants: cross-step and open-step overturns.',
    rows: [
      row('Cross-step setup', ['2-73', '2-74'], 'Use the crossing step and upper-body arc to begin the first overturning variant.', 'Let the support foot turn with the body.'),
      row('Cross-step finish', ['2-74', '2-75'], 'Continue the arc and settle into the new facing direction.', 'Keep the motion controlled through the finish.'),
      row('Open-step setup', ['2-76', '2-77'], 'From the open stance, circle the upper body and arm to begin the second variant.', 'Maintain stance width and avoid locking either knee.'),
      row('Open-step finish', ['2-77', '2-78'], 'Complete the overturn and recover the guarded posture.', 'Finish balanced before reversing or repeating.')
    ]
  },
  {
    id: '53-side-fall-to-ground-figures-2-79-to-2-83',
    title: 'Side Fall to Ground',
    chinese: '侧身倒地 · 图 2-79–2-83',
    section: 'Fundamental body methods · 基本身法',
    note: 'The source presents two side-fall variants. Learn both on mats under qualified supervision.',
    rows: [
      row('First variant: lower', ['2-79', '2-80'], 'Shift sideways, bend deeply, and bring the body toward the floor under control.', 'Use a padded surface and never collapse onto a locked arm.'),
      row('First variant: settle', ['2-80', '2-81'], 'Continue onto the side of the body while guiding the descent with the limbs.', 'Protect the head and spread contact across a broad surface.'),
      row('Second variant: set', ['2-82'], 'Begin the second source variation from its illustrated guarded stance.', 'Confirm clear mat space on the falling side before moving.'),
      row('Second variant: fall', ['2-82', '2-83'], 'Lower into the alternate side-fall shape and guide the body to the floor.', 'Keep the head lifted and avoid catching the descent on a locked hand.')
    ]
  },
  {
    id: '54-twisting-level-turn-figures-2-84-to-2-87',
    title: 'Twisting Level Turn',
    chinese: '拧身平转 · 图 2-84–2-87',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked level turn driven by coordinated foot and torso rotation.',
    rows: [
      row('Wind the turn', ['2-84', '2-85'], 'Twist from the stance and carry the torso around a level path.', 'Keep the feet able to pivot and the head aware of the new line.'),
      row('Complete and settle', ['2-86', '2-87'], 'Continue the rotation and finish in a balanced guarded stance.', 'Do not let the shoulders outrun the hips and feet.')
    ]
  },
  {
    id: '55-probing-extending-body-figures-2-88-to-2-89',
    title: 'Probing Body Extension',
    chinese: '探身 · 图 2-88–2-89',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked extension and return from the stance.',
    rows: [
      row('Extend to probe', ['2-88', '2-89'], 'Lengthen the torso and reach the body line outward while the base remains anchored.', 'Reach from the hips without locking the supporting knee.'),
      row('Withdraw safely', ['2-89', '2-88'], 'Draw the torso back over the stance and recover the guard.', 'Keep the return as controlled as the extension.')
    ]
  },
  {
    id: '56-swaying-body-figures-2-90-to-2-92',
    title: 'Swaying Body',
    chinese: '摇身 · 图 2-90–2-92',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked body sway; the middle posture repeats.',
    rows: [
      row('Sway off center', ['2-90', '2-91'], 'Shift the torso and hips along the illustrated curved path.', 'Keep the feet grounded and the movement within a comfortable spinal range.'),
      row('Return through guard', ['2-91', '2-92'], 'Carry the body back through center into the balanced stance.', 'Avoid whipping the head or holding the breath.')
    ]
  },
  {
    id: '57-aerial-flying-body-figures-2-93-to-2-95',
    title: 'Aerial Flying Body',
    chinese: '腾空飞身 · 图 2-93–2-95',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked jumping body displacement; practice the landing first.',
    rows: [
      row('Load and take off', ['2-93', '2-94'], 'Drive from the stance and lift the body into the illustrated traveling jump.', 'Use a short distance and a clear, non-slip landing area.'),
      row('Shape and land', ['2-94', '2-95'], 'Organize the limbs in the air and place the landing foot under the body.', 'Absorb the landing and recover balance before continuing.')
    ]
  },
  {
    id: '58-forward-turn-figures-2-96-to-2-97',
    title: 'Forward Turn',
    chinese: '前转身 · 图 2-96–2-97',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked forward-direction body turn shown in two figures.',
    rows: [
      row('Turn forward', ['2-96', '2-97'], 'Step and rotate the body toward the forward line shown in the sequence.', 'Turn the feet with the hips and keep the guard organized.'),
      row('Recover the stance', ['2-97', '2-96'], 'Settle the turn, then return under control before another repetition.', 'Finish with both knees aligned and the weight centered.')
    ]
  },
  {
    id: '59-aerial-forward-turn-figures-2-98-to-2-100',
    title: 'Aerial Forward Turn',
    chinese: '腾空前转身 · 图 2-98–2-100',
    section: 'Fundamental body methods · 基本身法',
    note: 'A linked jumping forward turn; learn the grounded turn and landing first.',
    rows: [
      row('Load and rotate', ['2-98', '2-99'], 'Turn forward from the stance and use the legs to initiate the jump.', 'Keep the rotation compact and the landing area visible.'),
      row('Land the turn', ['2-99', '2-100'], 'Complete the rotation in the air and place the feet into a controlled landing stance.', 'Bend the knees on contact and regain the guard before repeating.')
    ]
  }
];

function fileFor(id) {
  return path.join(figDir, `figure-${id}.png`);
}

function pngRatio(id) {
  const b = fs.readFileSync(fileFor(id));
  return b.readUInt32BE(16) / b.readUInt32BE(20);
}

function figureHtml(id, height) {
  const width = Math.min(pngRatio(id) * height, 3.35).toFixed(3);
  return `<div class="pose"><div class="num">${id}</div><div class="frame" style="width:${width}in;height:${height.toFixed(3)}in"><img src="../figures/figure-${id}.png" alt="Source figure ${id}"></div></div>`;
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
  const allFigures = packet.rows.flatMap(row => row.figs).map(id => {
    const [chapter, figure] = id.split('-').map(Number);
    return { chapter, figure };
  });
  const chapters = new Set(allFigures.map(({ chapter }) => chapter));
  if (chapters.size !== 1) throw new Error(`${packet.id} crosses figure chapters`);
  const chapter = allFigures[0].chapter;
  const firstFigure = Math.min(...allFigures.map(({ figure }) => figure));
  const lastFigure = Math.max(...allFigures.map(({ figure }) => figure));
  let rowIndex = 0;
  const pagesHtml = pages.map((rows, pageIndex) => {
    const legend = pageIndex === 0
      ? `<div class="legend"><b>Follow each row left to right.</b><span>${packet.note}</span></div>`
      : '';
    const body = rows.map(item => rowHtml(item, rowIndex++)).join('');
    return `<section class="page">
      <header>
        <div><div class="kicker">${packet.section}</div><div class="title">${packet.title}</div><div class="chinese">${packet.chinese}</div></div>
        <div class="page-meta">${pageIndex + 1} / ${pages.length}<br><span>Figures ${chapter}-${firstFigure}–${chapter}-${lastFigure}</span></div>
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

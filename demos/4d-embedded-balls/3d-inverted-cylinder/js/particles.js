export function drawParticles(cx, cy, innerR, outerR, f, shapeColor, n) {
  const theta = PI / 2, spread = PI, center = (n - 1) / 2;
  let points = [], outerPts = [];
  for (let i = 0; i < n; i++) {
    const off = i - center;
    const ang = theta + spread * (off / center);
    const lift = 1 - abs(off / center);
    const strength = constrain(f + lift * (1 - f), 0, 1);
    const pr = innerR + (outerR - innerR) * strength;
    const x = cx + pr * cos(ang), y = cy + pr * sin(ang);
    points.push({ x, y, rel: lift });
    const xo = cx + (pr + 25) * cos(ang), yo = cy + (pr + 25) * sin(ang);
    outerPts.push({ x: xo, y: yo });
  }

  stroke(shapeColor, 80);
  strokeWeight(1);
  beginShape();
  curveVertex(outerPts[outerPts.length - 2].x, outerPts[outerPts.length - 2].y);
  outerPts.forEach(pt => curveVertex(pt.x, pt.y));
  curveVertex(outerPts[0].x, outerPts[0].y);
  curveVertex(outerPts[1].x, outerPts[1].y);
  endShape();

  points.forEach(pt => {
    noStroke();
    let fillColor = color(shapeColor);
    fillColor.setAlpha(255);
    fill(fillColor);
    ellipse(pt.x, pt.y, 10, 10);

    let botThread = color(shapeColor);
    botThread.setAlpha(20 + 100 * pt.rel);
    stroke(botThread);
    line(cx, cy + map(f, 0, 1, innerR * 1.25 + map(f, 0, 1, 10, 50), 0), pt.x, pt.y);

    let topThread = color(shapeColor);
    topThread.setAlpha(20 + 200 * pt.rel);
    stroke(topThread);
    line(cx, cy - map(f, 0, 1, innerR * 1.25 + map(f, 0, 1, 10, 50), 0), pt.x, pt.y);
  });
}

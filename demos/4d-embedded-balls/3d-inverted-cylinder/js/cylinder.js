export function drawCylinder(cx, cy, innerR, outerR, f, cylFill, shadeFill, shapeColor, n) {
  const cylH = map(f, 0, 1, 10, 50);
  const topY = cy - cylH + innerR * 1.25;
  const botY = cy + cylH + innerR * 1.25;
  const yScaleTop = map(f, 0, 1, 0.9, 1);
  const yScaleBottom = map(f, 1, 0, 1, 0.9);
  const topRad = map(f, 0, 1, innerR, innerR * 1.25);
  const botRad = map(f, 0, 1, innerR, innerR * 0.9375);

  stroke(shapeColor);
  strokeWeight(2);
  fill(cylFill);
  ellipse(cx, botY, botRad * 2, botRad * 2 * yScaleBottom);

  noStroke();
  fill(shadeFill);
  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i <= 60; i++) {
    const a = map(i, 0, 60, 0, TWO_PI);
    const xt = cx + topRad * cos(a);
    const yt = topY + topRad * sin(a) * yScaleTop;
    const xb = cx + botRad * cos(a);
    const yb = botY + botRad * sin(a) * yScaleBottom;
    vertex(xt, yt);
    vertex(xb, yb);
  }
  endShape();
}

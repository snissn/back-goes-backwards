export function calcRadii(callback) {
  const outerRadius = min(windowWidth, windowHeight) * 0.4;
  const innerRadius = outerRadius * 0.25;
  if (callback) callback(outerRadius, innerRadius);
  return { outerRadius, innerRadius };
}

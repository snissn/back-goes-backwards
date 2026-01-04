export function calcSegment(t, inhale, holdIn, exhale, holdEx) {
  let segmentPhase, label;
  if (t < inhale) {
    segmentPhase = map(t, 0, inhale, 0, 0.5);
    label = "INHALE";
  } else if (t < inhale + holdIn) {
    segmentPhase = 0.5;
    label = "HOLD";
  } else if (t < inhale + holdIn + exhale) {
    const te = t - inhale - holdIn;
    segmentPhase = map(te, 0, exhale, 0.5, 1);
    label = "EXHALE";
  } else {
    segmentPhase = 1;
    label = "HOLD";
  }
  return { segmentPhase, label };
}

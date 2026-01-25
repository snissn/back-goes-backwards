import type { Drill, QuickTest, Segment, Signature } from "./types.js";
import { SEGMENTS } from "./segments.js";

export type QuickStepResult = {
  id: string;
  failed: boolean;
  side?: "L" | "R" | "B";
};

export type QuickResult = {
  steps: QuickStepResult[];
};

export type QuickClassification = {
  fails: number;
  classification: "B-dominant" | "Mixed" | "A-dominant";
};

export type ProtocolCard = {
  targets: Segment[];
  drills: Drill[];
  orderedDrills: Drill[];
  notes: string[];
};

export type ChooseOptions = {
  maxTier?: number;
};

export function inferPositiveSegments(result: QuickResult, quickTest: QuickTest): Segment[] {
  const failedIds = new Set(result.steps.filter((s) => s.failed).map((s) => s.id));
  const positives = new Set<Segment>();
  for (const step of quickTest.steps) {
    if (failedIds.has(step.id)) {
      for (const seg of step.flags) positives.add(seg);
    }
  }
  return Array.from(positives);
}

export function classifyQuick(result: QuickResult, quickTest: QuickTest): QuickClassification {
  const fails = result.steps.filter((s) => s.failed).length;
  if (fails <= quickTest.scoring.bDominantMaxFails) {
    return { fails, classification: "B-dominant" };
  }
  if (fails <= quickTest.scoring.mixedMaxFails) {
    return { fails, classification: "Mixed" };
  }
  return { fails, classification: "A-dominant" };
}

function signatureSum(a: Signature, b: Signature): Signature {
  return {
    L: (a.L + b.L) as Signature["L"],
    T: (a.T + b.T) as Signature["T"],
    C: (a.C + b.C) as Signature["C"]
  };
}

function emptySignature(): Signature {
  return { L: 0, T: 0, C: 0 };
}

function subsetScore(subset: Drill[], targets: Set<Segment>): number {
  const maxTier = Math.max(...subset.map((d) => d.tier));
  const cost = subset.reduce((sum, d) => sum + d.cost, 0);
  const risk = subset.reduce((sum, d) => sum + d.risk, 0);
  const sideEffects = subset.reduce((sum, d) => {
    return sum + SEGMENTS.filter((s) => !targets.has(s) && d.signature[s] !== 0).length;
  }, 0);
  return cost + 0.1 * maxTier + 0.2 * risk + 0.05 * sideEffects;
}

function subsetKey(subset: Drill[]): string {
  return subset
    .map((d) => d.id)
    .slice()
    .sort()
    .join(",");
}

export function chooseMinimalDrillSet(targetSegments: Segment[], drills: Drill[], options: ChooseOptions = {}): Drill[] {
  const targets = new Set(targetSegments);
  const maxTier = options.maxTier ?? 1;
  const candidates = drills.filter((d) => d.tier <= maxTier);

  let best: Drill[] | null = null;
  let bestScore = Infinity;
  let bestKey = "";

  for (let size = 1; size <= 3; size += 1) {
    const subsets = kSubsets(candidates, size);
    for (const subset of subsets) {
      let delta = emptySignature();
      for (const drill of subset) delta = signatureSum(delta, drill.signature);

      const okTargets = SEGMENTS.filter((s) => targets.has(s)).every((s) => delta[s] <= -1);
      const okNonTargets = SEGMENTS.filter((s) => !targets.has(s)).every((s) => delta[s] <= 0);
      if (!okTargets || !okNonTargets) continue;

      const score = subsetScore(subset, targets);
      const key = subsetKey(subset);
      if (score < bestScore || (score === bestScore && key < bestKey)) {
        best = subset;
        bestScore = score;
        bestKey = key;
      }
    }
    if (best) break;
  }

  return best ? best.slice() : [];
}

export function orderProtocol(drills: Drill[]): Drill[] {
  return drills
    .slice()
    .sort((a, b) => {
      const pa = drillPriority(a.signature);
      const pb = drillPriority(b.signature);
      if (pa !== pb) return pa - pb;
      return a.id.localeCompare(b.id);
    });
}

function drillPriority(sig: Signature): number {
  if (sig.C < 0 && sig.T === 0 && sig.L === 0) return 1;
  if (sig.T < 0 && sig.C < 0 && sig.L === 0) return 2;
  if (sig.L < 0 && sig.T === 0 && sig.C === 0) return 3;
  return 4;
}

export function protocolToCard(targetSegments: Segment[], drills: Drill[]): ProtocolCard {
  const ordered = orderProtocol(drills);
  const notes = [
    "Execute drills one-by-one and retest the segments each drill targets.",
    "Stop as soon as the target segments flip to negative (do not over-apply)."
  ];
  return {
    targets: targetSegments,
    drills,
    orderedDrills: ordered,
    notes
  };
}

function kSubsets<T>(arr: T[], k: number): T[][] {
  const results: T[][] = [];
  function helper(start: number, combo: T[]) {
    if (combo.length === k) {
      results.push(combo.slice());
      return;
    }
    for (let i = start; i < arr.length; i += 1) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  }
  helper(0, []);
  return results;
}

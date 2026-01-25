export type Segment = "L" | "T" | "C";
export type Sign = -1 | 0 | 1;

export type Signature = Record<Segment, Sign>;

export type Drill = {
  id: string;
  name: string;
  tier: number;
  risk: number;
  cost: number;
  dose: string;
  signature: Signature;
  failureMode: string;
  notes?: string;
};

export type TestStep = {
  id: string;
  name: string;
  durationSec: number;
  flags: Segment[];
  passCriteria: string;
  failCriteria: string;
};

export type QuickTest = {
  id: string;
  name: string;
  durationSec: number;
  steps: TestStep[];
  scoring: {
    bDominantMaxFails: number;
    mixedMaxFails: number;
    aDominantMinFails: number;
  };
};

export type Tests = {
  version: string;
  quick: QuickTest;
  adaptive?: {
    id: string;
    name: string;
    notes?: string;
  };
  advanced?: {
    id: string;
    name: string;
    notes?: string;
  };
};

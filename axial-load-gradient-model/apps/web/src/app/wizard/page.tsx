"use client";

import { useMemo, useState } from "react";
import type { Drill, QuickResult, QuickTest } from "@algm/core";
import {
  classifyQuick,
  chooseMinimalDrillSet,
  inferPositiveSegments,
  protocolToCard
} from "@algm/core";
import { drills as drillsData, tests } from "@algm/data";

type StepState = {
  failed?: boolean;
  left?: boolean;
  right?: boolean;
};

type StepStateMap = Record<string, StepState>;

type Side = "L" | "R" | "B" | undefined;

const drills = drillsData as Drill[];
const quick = tests.quick as QuickTest;

export default function WizardPage() {
  const [state, setState] = useState<StepStateMap>(() => ({}));

  const quickResult: QuickResult = useMemo(() => {
    return {
      steps: quick.steps.map((step) => {
        const current = state[step.id] || {};
        if (step.sided) {
          const failed = Boolean(current.left || current.right);
          const side: Side =
            current.left && current.right ? "B" : current.left ? "L" : current.right ? "R" : undefined;
          return { id: step.id, failed, side };
        }
        return { id: step.id, failed: Boolean(current.failed) };
      })
    };
  }, [state]);

  const classification = useMemo(() => classifyQuick(quickResult, quick), [quickResult]);
  const targets = useMemo(() => inferPositiveSegments(quickResult, quick), [quickResult]);
  const chosen = useMemo(() => chooseMinimalDrillSet(targets, drills, { maxTier: 1 }), [targets]);
  const card = useMemo(() => protocolToCard(targets, chosen), [targets, chosen]);

  return (
    <div className="space-y-8">
      <section>
        <h1>Quick Screen Wizard</h1>
        <p>
          Answer each step. The wizard will infer likely positive segments and return a minimal drill set.
        </p>
      </section>

      <section className="space-y-4">
        {quick.steps.map((step) => (
          <div key={step.id} className="rounded border border-stone-200 bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">{step.id}</div>
                <div className="text-base">{step.name}</div>
                <div className="text-sm text-stone-500">{step.durationSec}s</div>
              </div>
              <div className="text-right text-xs text-stone-500">Flags: {step.flags.join(", ")}</div>
            </div>

            {step.sided ? (
              <div className="mt-3 flex gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={Boolean(state[step.id]?.left)}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        [step.id]: { ...prev[step.id], left: event.target.checked }
                      }))
                    }
                  />
                  Left failed
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={Boolean(state[step.id]?.right)}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        [step.id]: { ...prev[step.id], right: event.target.checked }
                      }))
                    }
                  />
                  Right failed
                </label>
              </div>
            ) : (
              <div className="mt-3 flex items-center gap-3">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={Boolean(state[step.id]?.failed)}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        [step.id]: { ...prev[step.id], failed: event.target.checked }
                      }))
                    }
                  />
                  Failed
                </label>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="rounded border border-stone-200 bg-white p-4">
        <h2 className="text-lg font-semibold">Result</h2>
        <p className="text-sm text-stone-600">
          Classification: {classification.classification} ({classification.fails} fails)
        </p>
        {targets.length === 0 ? (
          <p className="mt-2 text-sm text-stone-600">No targets detected.</p>
        ) : (
          <div className="mt-2 space-y-3">
            <div className="text-sm">Targets: {targets.join(", ")}</div>
            <div>
              <div className="text-sm font-semibold">Protocol</div>
              <ul className="list-disc pl-5 text-sm">
                {card.orderedDrills.map((drill) => (
                  <li key={drill.id}>
                    {drill.id} - {drill.name} ({drill.dose})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Notes</div>
              <ul className="list-disc pl-5 text-sm">
                {card.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      <button
        className="rounded border border-stone-300 px-4 py-2 text-sm"
        onClick={() => setState({})}
      >
        Reset
      </button>
    </div>
  );
}

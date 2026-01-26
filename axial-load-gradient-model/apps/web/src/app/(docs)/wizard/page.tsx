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

type Side = "L" | "R" | "B";

type StepValue = "pass" | "fail" | Side;

type StepStateMap = Record<string, StepValue | undefined>;

const drills = drillsData as Drill[];
const quick = tests.quick as QuickTest;

export default function WizardPage() {
  const [answers, setAnswers] = useState<StepStateMap>({});
  const [copied, setCopied] = useState(false);

  const quickResult: QuickResult = useMemo(() => {
    return {
      steps: quick.steps.map((step) => {
        const v = answers[step.id];
        if (step.sided) {
          const side = v === "L" || v === "R" || v === "B" ? v : undefined;
          const failed = v === "L" || v === "R" || v === "B";
          return { id: step.id, failed, side };
        }
        return { id: step.id, failed: v === "fail" };
      })
    };
  }, [answers]);

  const failedSteps = useMemo(
    () => quickResult.steps.filter((s) => s.failed),
    [quickResult]
  );

  const classification = useMemo(() => classifyQuick(quickResult, quick), [quickResult]);
  const targets = useMemo(() => inferPositiveSegments(quickResult, quick), [quickResult]);
  const chosen = useMemo(() => chooseMinimalDrillSet(targets, drills, { maxTier: 1 }), [targets]);
  const card = useMemo(() => protocolToCard(targets, chosen), [targets, chosen]);

  const exportJson = useMemo(() => {
    return {
      quick: {
        fails: classification.fails,
        classification: classification.classification,
        failedSteps: failedSteps.map((s) => ({ id: s.id, side: (s as any).side }))
      },
      targets,
      drills: card.orderedDrills.map((d) => ({
        id: d.id,
        name: d.name,
        dose: d.dose,
        signature: d.signature,
        failureMode: d.failureMode
      })),
      notes: card.notes
    };
  }, [classification, failedSteps, targets, card]);

  return (
    <div className="space-y-10">
      <header>
        <h1>Quick Screen Wizard</h1>
        <p className="text-[var(--muted)]">
          Mark each step as pass/fail. The engine infers likely positive segments, selects a minimal Tier 0/1
          drill set, and gives you a retest-ready protocol card.
        </p>
      </header>

      <section className="space-y-4">
        {quick.steps.map((step) => {
          const current = answers[step.id];

          return (
            <div key={step.id} className="rounded-2xl border border-[var(--border)] bg-white/80 p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    {step.id}
                  </div>
                  <div className="mt-1 font-sans text-lg font-semibold">{step.name}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">
                    {step.durationSec}s • Flags: {step.flags.join(", ")}
                    {step.sided ? " • sided" : ""}
                  </div>
                </div>

                <div className="shrink-0">
                  {step.sided ? (
                    <Segmented
                      value={current}
                      options={[
                        { value: "pass", label: "Pass" },
                        { value: "L", label: "Left fail" },
                        { value: "R", label: "Right fail" },
                        { value: "B", label: "Both fail" }
                      ]}
                      onChange={(v) => setAnswers((prev) => ({ ...prev, [step.id]: v }))}
                    />
                  ) : (
                    <Segmented
                      value={current}
                      options={[
                        { value: "pass", label: "Pass" },
                        { value: "fail", label: "Fail" }
                      ]}
                      onChange={(v) => setAnswers((prev) => ({ ...prev, [step.id]: v }))}
                    />
                  )}
                </div>
              </div>

              <details className="mt-5 rounded-xl border border-[rgba(31,27,22,0.10)] bg-white/60 p-4">
                <summary className="cursor-pointer select-none font-sans text-sm font-semibold">
                  Pass / fail criteria
                </summary>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-[rgba(15,118,110,0.22)] bg-[rgba(15,118,110,0.06)] p-4">
                    <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                      Pass
                    </div>
                    <div className="mt-1 text-sm">{step.passCriteria}</div>
                  </div>
                  <div className="rounded-xl border border-[rgba(180,83,9,0.22)] bg-[rgba(180,83,9,0.06)] p-4">
                    <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--warn-ink)]">
                      Fail
                    </div>
                    <div className="mt-1 text-sm">{step.failCriteria}</div>
                  </div>
                </div>
              </details>
            </div>
          );
        })}
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-white/80 p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="m-0 font-sans text-xl font-semibold">Result</h2>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge kind={classification.classification}>{classification.classification}</Badge>
              <span className="text-sm text-[var(--muted)]">{classification.fails} fails</span>
            </div>
            {failedSteps.length ? (
              <div className="mt-3 text-sm text-[var(--muted)]">
                Failed: {failedSteps.map((s) => s.id + ((s as any).side ? `(${(s as any).side})` : "")).join(", ")}
              </div>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 font-sans text-sm font-semibold hover:bg-white"
              onClick={() => {
                setAnswers({});
                setCopied(false);
              }}
            >
              Reset
            </button>
            <button
              type="button"
              className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 font-sans text-sm font-semibold hover:bg-white"
              onClick={async () => {
                await navigator.clipboard.writeText(JSON.stringify(exportJson, null, 2));
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1200);
              }}
            >
              {copied ? "Copied" : "Copy JSON"}
            </button>
            <button
              type="button"
              className="rounded-full bg-[var(--ink)] px-4 py-2 font-sans text-sm font-semibold text-[var(--paper)] hover:bg-black"
              onClick={() => downloadJson("algm-protocol.json", exportJson)}
            >
              Download
            </button>
          </div>
        </div>

        {targets.length === 0 ? (
          <div className="mt-6 text-sm text-[var(--muted)]">No targets detected yet.</div>
        ) : (
          <div className="mt-6 space-y-6">
            <div className="text-sm">
              <span className="font-sans font-semibold">Targets:</span> {targets.join(", ")}
            </div>

            <div>
              <div className="font-sans text-sm font-semibold">Protocol</div>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {card.orderedDrills.map((d) => (
                  <div key={d.id} className="rounded-2xl border border-[var(--border)] bg-white/70 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                          {d.id}
                        </div>
                        <div className="mt-1 font-sans text-base font-semibold">{d.name}</div>
                        <div className="mt-1 text-sm text-[var(--muted)]">Dose: {d.dose}</div>
                      </div>
                      <div className="text-right font-sans text-xs text-[var(--muted)]">
                        Δg: L{sig(d.signature.L)} T{sig(d.signature.T)} C{sig(d.signature.C)}
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-[var(--muted)]">
                      <span className="font-sans font-semibold text-[var(--ink)]">Watch for:</span> {d.failureMode}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-sans text-sm font-semibold">Retest</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-[var(--muted)]">
                {card.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      <div className="text-sm text-[var(--muted)]">
        Tip: Use this as a before/after. The model is most useful when it changes quickly under a small dose.
      </div>
    </div>
  );
}

function downloadJson(name: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

type SegmentedOption = { value: StepValue; label: string };

function Segmented({
  value,
  options,
  onChange
}: {
  value: StepValue | undefined;
  options: SegmentedOption[];
  onChange: (v: StepValue) => void;
}) {
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-[var(--border)] bg-white/70">
      {options.map((opt) => {
        const active = value ? value === opt.value : opt.value === "pass";
        return (
          <button
            key={opt.value}
            type="button"
            className={
              "px-3 py-2 font-sans text-sm font-semibold transition " +
              (active ? "bg-[var(--ink)] text-[var(--paper)]" : "text-[var(--muted)] hover:bg-black/5")
            }
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function Badge({
  kind,
  children
}: {
  kind: "B-dominant" | "Mixed" | "A-dominant";
  children: React.ReactNode;
}) {
  const className =
    kind === "B-dominant"
      ? "border-[rgba(15,118,110,0.30)] bg-[rgba(15,118,110,0.10)] text-[var(--accent-ink)]"
      : kind === "Mixed"
        ? "border-[rgba(180,83,9,0.30)] bg-[rgba(180,83,9,0.10)] text-[var(--warn-ink)]"
        : "border-[rgba(185,28,28,0.30)] bg-[rgba(185,28,28,0.08)] text-[var(--danger)]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider ${className}`}
    >
      {children}
    </span>
  );
}

function sig(x: number) {
  if (x < 0) return "-";
  if (x > 0) return "+";
  return "0";
}

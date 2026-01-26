import { tests } from "@algm/data";

export function QuickScreen({
  showCriteria = true
}: {
  showCriteria?: boolean;
}) {
  return (
    <div className="my-6 space-y-4">
      {tests.quick.steps.map((step) => (
        <div
          key={step.id}
          className="rounded-2xl border border-[var(--border)] bg-white/70 p-5 shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {step.id}
              </div>
              <div className="mt-1 font-sans text-base font-semibold">{step.name}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">{step.durationSec}s</div>
            </div>
            <div className="text-right text-xs text-[var(--muted)]">
              Flags: {step.flags.join(", ")}
              {step.sided ? " • sided" : ""}
            </div>
          </div>

          {showCriteria ? (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-[rgba(15,118,110,0.22)] bg-[rgba(15,118,110,0.06)] p-4">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                  Pass
                </div>
                <div className="mt-1 text-sm text-[var(--ink)]">{step.passCriteria}</div>
              </div>
              <div className="rounded-xl border border-[rgba(180,83,9,0.22)] bg-[rgba(180,83,9,0.06)] p-4">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--warn-ink)]">
                  Fail
                </div>
                <div className="mt-1 text-sm text-[var(--ink)]">{step.failCriteria}</div>
              </div>
            </div>
          ) : null}
        </div>
      ))}

      <div className="rounded-2xl border border-[var(--border)] bg-white/70 p-5 shadow-sm">
        <div className="font-sans text-sm font-semibold">Scoring</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-[var(--muted)]">
          <li>
            B-dominant: at most {tests.quick.scoring.bDominantMaxFails} fails
          </li>
          <li>Mixed: at most {tests.quick.scoring.mixedMaxFails} fails</li>
          <li>
            A-dominant: at least {tests.quick.scoring.aDominantMinFails} fails
          </li>
        </ul>
      </div>
    </div>
  );
}

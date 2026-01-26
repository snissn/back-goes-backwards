import { drills } from "@algm/data";

function signLabel(x: number) {
  if (x < 0) return "-";
  if (x > 0) return "+";
  return "0";
}

export function DrillGrid({
  tierMin = 0,
  tierMax = 1
}: {
  tierMin?: number;
  tierMax?: number;
}) {
  const subset = drills
    .filter((d) => d.tier >= tierMin && d.tier <= tierMax)
    .slice()
    .sort((a, b) => a.tier - b.tier || a.id.localeCompare(b.id));

  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      {subset.map((d) => (
        <div
          key={d.id}
          className="rounded-2xl border border-[var(--border)] bg-white/70 p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {d.id} • Tier {d.tier}
              </div>
              <div className="mt-1 font-sans text-base font-semibold">{d.name}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Dose: {d.dose}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Δ(g)
              </div>
              <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-[rgba(31,27,22,0.10)] bg-white/70 px-3 py-1 font-sans text-xs">
                <span>L {signLabel(d.signature.L)}</span>
                <span>T {signLabel(d.signature.T)}</span>
                <span>C {signLabel(d.signature.C)}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-[var(--muted)]">
            <span className="font-sans font-semibold text-[var(--ink)]">Common failure:</span>{" "}
            {d.failureMode}
          </div>
        </div>
      ))}
    </div>
  );
}

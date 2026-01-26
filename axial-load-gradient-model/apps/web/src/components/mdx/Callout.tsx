import type { ReactNode } from "react";

type Kind = "note" | "definition" | "heuristic" | "hypothesis" | "warn" | "danger";

const STYLES: Record<Kind, { label: string; className: string }> = {
  note: {
    label: "Note",
    className: "border-[rgba(15,118,110,0.25)] bg-[rgba(15,118,110,0.06)]"
  },
  definition: {
    label: "Definition",
    className: "border-[rgba(31,27,22,0.18)] bg-[rgba(31,27,22,0.03)]"
  },
  heuristic: {
    label: "Heuristic",
    className: "border-[rgba(180,83,9,0.22)] bg-[rgba(180,83,9,0.06)]"
  },
  hypothesis: {
    label: "Hypothesis",
    className: "border-[rgba(15,118,110,0.22)] bg-[rgba(15,118,110,0.04)]"
  },
  warn: {
    label: "Caution",
    className: "border-[rgba(180,83,9,0.30)] bg-[rgba(180,83,9,0.08)]"
  },
  danger: {
    label: "Safety",
    className: "border-[rgba(185,28,28,0.28)] bg-[rgba(185,28,28,0.06)]"
  }
};

export function Callout({
  kind = "note",
  title,
  children
}: {
  kind?: Kind;
  title?: string;
  children: ReactNode;
}) {
  const style = STYLES[kind];

  return (
    <aside
      className={`my-6 rounded-2xl border p-5 shadow-sm ${style.className}`}
      aria-label={style.label}
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <div className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          {style.label}
        </div>
        {title ? (
          <div className="font-sans text-sm font-semibold text-[var(--ink)]">{title}</div>
        ) : null}
      </div>
      <div className="mt-2 text-[15px] leading-relaxed text-[var(--ink)]">{children}</div>
    </aside>
  );
}

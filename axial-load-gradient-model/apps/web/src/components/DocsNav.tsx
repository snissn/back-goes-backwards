"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    title: "Docs",
    items: [
      { href: "/model", label: "Model" },
      { href: "/tests", label: "Tests" },
      { href: "/training", label: "Training" },
      { href: "/wizard", label: "Wizard" },
      { href: "/limitations", label: "Limitations" },
      { href: "/pdf", label: "PDF" }
    ]
  }
];

export function DocsNav({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  const content = (
    <nav className="space-y-6">
      {NAV.map((section) => (
        <div key={section.title}>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            {section.title}
          </div>
          <div className="space-y-1">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "block rounded-xl px-3 py-2 text-sm transition " +
                    (active
                      ? "bg-[rgba(15,118,110,0.10)] text-[var(--accent-ink)]"
                      : "text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );

  if (!mobile) return content;

  return (
    <details className="rounded-2xl border border-[var(--border)] bg-white/70 p-4 shadow-sm">
      <summary className="cursor-pointer select-none font-sans text-sm font-semibold">
        Sections
      </summary>
      <div className="mt-4">{content}</div>
    </details>
  );
}

import type { ReactNode } from "react";
import { DocsNav } from "../../components/DocsNav";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-[var(--border)] bg-white/70 p-4 shadow-sm">
            <DocsNav />
          </div>
        </aside>

        <div className="min-w-0">
          <div className="mb-6 lg:hidden">
            <DocsNav mobile />
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-white/75 px-6 py-8 shadow-[0_20px_80px_var(--shadow)] backdrop-blur">
            <article className="doc">{children}</article>
          </div>
        </div>
      </div>
    </div>
  );
}

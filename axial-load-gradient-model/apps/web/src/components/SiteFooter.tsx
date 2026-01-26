export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-white/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-sans font-semibold text-[var(--ink)]">ALGM</span> — Axial Load Gradient Model
        </div>
        <div>Notebook repo. Content evolves.</div>
      </div>
    </footer>
  );
}

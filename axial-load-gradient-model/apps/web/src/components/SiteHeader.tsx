import Link from "next/link";

const NAV = [
  { href: "/model", label: "Model" },
  { href: "/tests", label: "Tests" },
  { href: "/training", label: "Training" },
  { href: "/wizard", label: "Wizard" },
  { href: "/limitations", label: "Limitations" },
  { href: "/pdf", label: "PDF" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--paper)_85%,white)]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-sans text-lg font-semibold tracking-tight">ALGM</span>
          <span className="hidden text-xs text-[var(--muted)] sm:inline">
            Axial Load Gradient Model
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--muted)] hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <details className="relative md:hidden">
            <summary className="cursor-pointer select-none rounded-full border border-[var(--border)] bg-white/70 px-3 py-2 font-sans text-sm font-semibold hover:bg-white">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-[var(--border)] bg-white/95 p-2 shadow-lg backdrop-blur">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link
            href="/wizard"
            className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--paper)] shadow-sm hover:bg-black"
          >
            Run Wizard
          </Link>
        </div>
      </div>
    </header>
  );
}

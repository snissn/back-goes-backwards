import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/75 px-8 py-12 shadow-[0_20px_80px_var(--shadow)] backdrop-blur">
        <div className="absolute inset-0 -z-10 opacity-70">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[rgba(15,118,110,0.20)] blur-3xl" />
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[rgba(180,83,9,0.18)] blur-3xl" />
          <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-[rgba(15,118,110,0.12)] blur-3xl" />
        </div>

        <div className="max-w-3xl">
          <p className="rise font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Notebook / Model + Protocol + Tools
          </p>
          <h1 className="rise mt-4 font-sans text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            Axial Load Gradient Model
          </h1>
          <p className="rise mt-5 text-lg text-[var(--muted)]">
            A mechanics-first way to describe <span className="text-[var(--ink)]">how load routes through the body</span>.
            Test the sign of the gradient, pick the minimal drill set, retest.
          </p>

          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/wizard"
              className="rounded-full bg-[var(--ink)] px-5 py-3 text-center font-sans text-sm font-semibold text-[var(--paper)] shadow-sm hover:bg-black"
            >
              Run the Quick Screen Wizard
            </Link>
            <Link
              href="/model"
              className="rounded-full border border-[var(--border)] bg-white/70 px-5 py-3 text-center font-sans text-sm font-semibold hover:bg-white"
            >
              Read the model
            </Link>
          </div>

          <div className="mt-7 text-sm text-[var(--muted)]">
            Not medical advice. Do not use this for diagnosis or treatment.
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <FeatureCard
          title="Definitions-first"
          body="Clear objects: L(z), G(z), piecewise gradients (g_L/g_T/g_C), sign vector, inversion loci."
          href="/model"
          link="Model"
        />
        <FeatureCard
          title="Fast screen"
          body="A <=2 minute sequence to flag which segments are likely accumulating load."
          href="/tests"
          link="Tests"
        />
        <FeatureCard
          title="Minimal intervention"
          body="Drills classified by expected gradient sign with an execute -> retest loop."
          href="/training"
          link="Training"
        />
      </section>

      <section className="mt-12 rounded-3xl border border-[var(--border)] bg-white/70 p-8 shadow-sm">
        <h2 className="font-sans text-xl font-semibold">How to use this</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          <Step n="1" title="Run the screen" body="Use the Wizard or the CLI to record pass/fail results." />
          <Step n="2" title="Get a protocol" body="The engine picks a small Tier 0/1 drill set targeting flagged segments." />
          <Step n="3" title="Retest" body="Stop when the failure flips. If it doesn't, branch or increase tier." />
        </ol>

        <div className="mt-6 flex flex-col gap-2 text-sm text-[var(--muted)]">
          <p>
            CLI: <code>pnpm -C apps/cli start -- quick</code>
          </p>
          <p>
            PDF: <code>pnpm pdf</code>
          </p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  body,
  href,
  link
}: {
  title: string;
  body: string;
  href: string;
  link: string;
}) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 shadow-sm">
      <div className="font-sans text-lg font-semibold">{title}</div>
      <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{body}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-ink)]"
      >
        {link}
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="rounded-2xl border border-[var(--border)] bg-white/70 p-5">
      <div className="flex items-baseline gap-3">
        <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Step {n}
        </div>
        <div className="font-sans text-sm font-semibold">{title}</div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{body}</p>
    </li>
  );
}

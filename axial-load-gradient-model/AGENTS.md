# Axial Load Gradient Model (ALGM) - Agent Guide

This repo currently contains a single source artifact: `note.md` (a long-form ChatGPT transcript + working notes). The goal of the "publishable" version is to turn that raw material into a clean, self-contained manuscript with original figures, clear definitions, explicit hypotheses, and safety/medical disclaimers.

## Bold plan (many iterations; monorepo inside this folder)

This folder (`axial-load-gradient-model/`) should evolve into a small monorepo that produces three consumables from one shared source of truth:

- A publishable docs website (Next.js + MDX) with an interactive "wizard" that runs the model.
- A generated PDF (same content as docs; for sharing/printing).
- A working CLI (the "program"): test input -> segment classification -> minimal drill set -> dosing -> retest checkpoints.

This is a notebook repo: incremental commits to `master` are expected. Prefer many small iterations over a single "big bang".

### Canonical constraint

All logic/data must be shared. Do not maintain separate drill lists or decision rules for docs vs CLI vs web.

## What "publishable" means here

- A reader can understand the model without reading `note.md`.
- Claims are separated into: definitions, hypotheses, and evidence-backed statements.
- No copyrighted images or hotlinked media from `note.md` are reused; all figures are original or properly licensed.
- Medical scope is explicit: this is an engineering-style movement model, not diagnosis or treatment advice.

## Source-of-truth inputs

- `note.md` is the raw idea log. Do not "polish in place"; treat it as immutable source material.
- Prefer the later, consolidated sections in `note.md` (e.g., the "finished system" and the piecewise gradient + test ladder + drill library) when there are duplicates.

## Monorepo layout (target)

Implement this monorepo *inside* `axial-load-gradient-model/` (this folder is a subfolder of a larger notebook repo).

- `package.json` (workspace root)
- `pnpm-workspace.yaml` (preferred) or npm workspaces if pnpm is unavailable
- `apps/`
  - `web/` (Next.js App Router + MDX docs + wizard)
  - `cli/` (Node/TS CLI)
- `packages/`
  - `core/` (TypeScript library: types + inference + minimal-drill selection engine)
  - `data/` (versioned JSON/YAML: drills, tests, scoring thresholds, copy strings)
  - `content/` (MDX content + manuscript source; imports from `packages/data`)
- `sources/`
  - `note.md` (copied from root `note.md`; keep original untouched)
- `figures/` (SVGs)

### Tech choices (locked unless user changes later)

- Language: TypeScript (Node + web)
- Web: Next.js (App Router), MDX-based docs, minimal custom styling
- CLI: Node + `commander` (or similar) + JSON output option
- Package manager: `pnpm`
- Data: JSON (human-editable, diffable). YAML allowed only if it reduces verbosity.

## Target repo shape (for a full publishable release)

Create new files/folders; do not delete `note.md`.

- `README.md`
  - one-paragraph pitch, intended audience, safety disclaimer, how to navigate the docs
- `manuscript/`
  - `manuscript.md` (main publishable text)
  - `abstract.md` (standalone)
  - `glossary.md` (terms + notation)
  - `limitations.md` (what the model does *not* claim)
- `figures/`
  - `fig-*.svg` (vector, original diagrams)
  - optional `figures.md` (captions + usage)
- `protocols/`
  - `tests.md` (Quick/Adaptive/Advanced tests, pass/fail criteria, timing)
  - `drills.md` (drill definitions, dosing, common failure modes)
  - `decision-tree.md` (minimal drill selection logic as prose + flowchart)
- `references/`
  - `references.bib` (or `references.json`)
  - `sources.md` (what each citation supports)
- `tools/` (optional)
  - scripts to generate PDFs or validate tables (keep them small and documented)

## Recommended manuscript outline (publishable v1)

- Title + one-paragraph abstract (model claim + what it is not).
- Motivation: why "load routing" beats posture cues; why backward-biased locomotion is a high-signal probe.
- The model:
  - definitions (`L(z)`, `G(z)`, `g_L/g_T/g_C`, sign state vector, inversion loci)
  - the two regimes (A vs B) explained only in gradient language
- Mechanistic examples (kept clearly as examples, not the whole thesis):
  - psoas as a motivating hinge
  - lats/TLF, scapular/trap system, SCM as common compensation pathways
- Test battery:
  - Quick screen (<=2 minutes) + scoring
  - Adaptive branches (localize which segment is positive)
  - Advanced validation (stability under load)
- Training system:
  - exercise taxonomy by gradient sign (B-bias builders vs A-bias excursions vs conditional)
  - drill library (Tier 0/1 first) + dosing
  - retest loop + recovery-from-excursion rule
- Predictions + falsification:
  - what should change immediately when the gradient flips (breath/neck tone/step acceptance)
  - what measurements could operationalize `L(z)` proxies (force plate, motion capture, etc.)
- Limitations, contraindications, and scope boundaries.
- Appendices:
  - decision tree + optional algorithm/pseudocode
  - tables (drills and expected signatures)

## Iterations / versions (bold roadmap)

The agent should treat these as sequential milestones. Each milestone ends with:
1) runnable commands, 2) minimal tests, 3) a short commit message, 4) updated docs where relevant.

### v0 - Repo bootstrap (scaffold + hygiene)

Outcome:
- Monorepo scaffolding exists; nothing "smart" yet.
- `note.md` remains intact; a copy lives at `sources/note.md`.

Work:
- Add workspace root `package.json` + `pnpm-workspace.yaml`.
- Create `apps/web`, `apps/cli`, `packages/core`, `packages/data`, `packages/content`.
- Add root `README.md` explaining the three consumables.
- Add `LICENSE` if desired (default: proprietary/not for reuse unless user specifies).

Acceptance:
- `pnpm -r lint` and `pnpm -r test` exist (even if tests are placeholder).
- `pnpm -C apps/web dev` starts.
- `pnpm -C apps/cli start -- --help` works.

### v1 - Data model (single source of truth)

Outcome:
- A stable schema for tests and drills exists in `packages/data`.
- The content references these definitions (no duplicated tables in MDX).

Work:
- Create `packages/core/src/types.ts` (segments, sign vectors, drill signatures, tests, results).
- Create `packages/data/drills.json` and `packages/data/tests.json`.
- Include dosing and failure modes explicitly in the data.
- Add a small validator in `packages/core` (schema checks; fail fast in CI).

Acceptance:
- `pnpm -C packages/core test` validates `packages/data` successfully.

### v2 - Minimal engine (inference + drill selection)

Outcome:
- Core logic exists as a library: given test results -> inferred positive segments `P` -> minimal drill set (tier-gated) -> ordered protocol -> retest plan.

Work:
- Implement:
  - `inferPositiveSegments(results)` (maps test failures to `{L,T,C}`)
  - `chooseMinimalDrillSet(P, drills, opts)` (enumeration for 3 segments; tier/risk weights)
  - `orderProtocol(drills)` (cervical -> thoracic -> lumbar -> global)
  - `protocolToCard(...)` (human-readable + machine JSON)
- Keep algorithm behavior deterministic.
- Document assumptions and limitations in code docs and `packages/content`.

Acceptance:
- Unit tests cover all 8 sign patterns and a few tie-break cases.

### v3 - CLI v1 (usable program)

Outcome:
- A working CLI that can be used as a daily tool.

Work:
- Interactive prompt mode:
  - Quick screen input (pass/fail per step + left/right notes)
  - Outputs: classification, suggested drills, dosing, retest step(s)
- Non-interactive mode:
  - `--input results.json` and `--output protocol.json`
- Add `--version`, `--help`, and `--explain` (prints why a drill was chosen).

Acceptance:
- `pnpm -C apps/cli start -- quick` works end-to-end.

### v4 - Web docs v1 (publishable reading experience)

Outcome:
- MDX docs site that reads linearly and stands alone.

Work:
- Build a minimal docs IA:
  - `/` overview + disclaimers
  - `/model` definitions + states
  - `/tests` quick/adaptive/advanced
  - `/training` drill taxonomy + menus
  - `/limitations`
- Every strong statement tagged (Definition/Hypothesis/Supported/Heuristic).

Acceptance:
- `pnpm -C apps/web build` succeeds.

### v5 - Wizard v1 (web "program" UI)

Outcome:
- The site includes an interactive wizard that uses the same `packages/core` engine and `packages/data`.

Work:
- Wizard flow:
  - run Quick screen -> show inferred segments -> show protocol card
  - "Retest" checkpoint UI
  - Export: copy/share link (encoded state) and download JSON
- Make wizard copy conservative; always show disclaimers and contraindications.

Acceptance:
- Wizard matches CLI output for the same inputs (golden test fixtures shared across CLI/web).

### v6 - Figures v1 (original diagrams)

Outcome:
- Replace any conceptual dependence on transcript images with original SVG figures.

Work:
- Create:
  - `fig-load-gradient-a-vs-b.svg` (L(z) and sign of G)
  - `fig-piecewise-segments.svg` (g_L/g_T/g_C and inversion loci)
  - `fig-decision-flow.svg` (test -> branch -> drills -> retest)
- Include captions in docs.

Acceptance:
- Figures are referenced in MDX and render crisply at mobile widths.

### v7 - Evidence pass (citations + claim tightening)

Outcome:
- Publishable-level references: anatomy/biomechanics claims are cited; speculative claims are labeled hypotheses.

Work:
- Add `references/references.bib` and `references/sources.md`.
- Replace any "link dump" citations with clean bib entries.
- Ensure no `utm_source`/tracking in citations.

Acceptance:
- `pnpm -C apps/web build` passes with no broken references; claims tagging is consistent.

### v8 - PDF export (paper-like artifact)

Outcome:
- A single PDF can be generated from the manuscript/protocols (print-friendly).

Work:
- Add `tools/build-pdf` (Pandoc or MDX->PDF pipeline).
- Ensure figures embed and page breaks are sane.

Acceptance:
- `pnpm pdf` generates `dist/axial-load-gradient-model.pdf` (or similar).

### v9 - Instrumentation mode (optional, but bold)

Outcome:
- A mode that supports logging retest outcomes over time and exporting anonymized datasets for model refinement.

Work:
- CLI: `log` command writes runs to `~/.algm/` (or repo-local if preferred).
- Web: optional localStorage log + export.
- Data model versioning and migration.

Acceptance:
- Backward compatible schema changes; documented.

## Canonical model content (must appear in the manuscript)

### 1) Definitions and notation (front-loaded)

- Axial coordinate: ground -> head (normalized `z in [0,1]` or a discrete node index).
- "Load" as a transmitted mechanical quantity (not EMG, not "effort").
- Axial load gradient `G(z) = dL/dz`.
- Piecewise gradients: `g_L`, `g_T`, `g_C` (lumbar/thoracic/cervical averages).
- State vector: `S = (sign(g_L), sign(g_T), sign(g_C))` and the 8 canonical sign patterns.
- Inversion locus: where `G` changes sign (or discrete `g_k` flips sign).

### 2) Two-state intuition as an entry point (keep, but tighten)

From `note.md`:
- "State A" (upward-accumulating / compression-dominant default) vs
- "State B" (downward-shedding / tension-routed default).

Publishable version requirement:
- Treat these as *control states* / *load-routing regimes*, not as moralized "good/bad posture".
- Avoid using "topology" unless you explicitly mean topology; prefer "load-path geometry" / "curvature" / "routing".

### 3) Diagnostics as operationalization

Include:
- A <=2 minute screen (e.g. the WLG-2 / SGS-120-style sequence):
  - arm elevation load-routing
  - backward step acceptance (L/R)
  - single-leg quiet spine (L/R)
  - breath probe under stack
- Explicit scoring and classification thresholds.
- Clear "exceptions" and red-flag safety gates.

### 4) Training taxonomy by gradient sign

Include:
- Negative-gradient builders (B-bias): backward locomotion, supported hangs, ER-before-extension drills, contralateral crawling patterns, etc.
- Positive-gradient excursions (A-bias): sprint starts/jumps/overhead work as *task-specific excursions* with recovery rules.
- Conditional drills: lifts that can be B-bias or A-bias depending on execution.

### 5) Drill library + minimal intervention logic

Include:
- A small, stable Tier 0/1 drill set with:
  - what it is
  - dose (time/reps/breaths)
  - intended segment effect (e.g. `(Delta g_L, Delta g_T, Delta g_C)` signature)
  - common failure mode that flips sign
- A retest loop (execute -> retest -> stop when flipped).
- If including algorithms/pseudocode: keep it as an appendix and mirror it with a prose decision tree.

## Evidence and claims policy (required for public release)

- Tag every strong statement as one of:
  - `Definition` (chosen by the author; not "true/false")
  - `Hypothesis` (model prediction; testable)
  - `Supported` (backed by cited literature)
  - `Anecdote/Heuristic` (useful but not generalizable)
- Any anatomy/biomechanics factual claims require citations from primary or standard references.
- Remove any `utm_source=...` citation URLs; use clean bibliographic entries.
- Avoid implying diagnosis or that symptom clusters have a single mechanical cause.

## Safety / medical framing (must be prominent)

Add and repeat (short form) disclaimers:
- Not medical advice; does not diagnose, treat, or prevent disease.
- Stop and seek medical evaluation for red flags (progressive neuro deficits, bowel/bladder changes, severe unremitting pain, fever, trauma, etc.).
- Provide "do not test" gates (acute injury, severe OA limitation, vestibular/neurologic instability, etc.).

## Figure requirements (what to draw)

At minimum:
- A 1D plot-style diagram showing `L(z)` and the sign of `G(z)` for A vs B.
- A 3-segment schematic showing `(g_L, g_T, g_C)` as a sign vector and where inversion loci occur.
- A flowchart of the Quick test -> Adaptive branches -> drill menu -> retest loop.
- A psoas-centric schematic only if it materially supports the general model (keep psoas as a motivating example, not the whole thesis).

## Writing style constraints

- Mechanics-first, definitions before metaphors; no mysticism.
- Prefer short sections with explicit "Interpretation" and "Predictions" blocks.
- Be conservative in tone: "suggests", "is consistent with", "hypothesizes" over "proves".
- Keep "State A/B" language, but always map it back to gradient signs and test criteria.

## Release checklist

- Manuscript reads linearly and is self-contained.
- All claims with biomedical facts have citations; all other claims are labeled.
- All diagrams are original/licensed; no copied images from `note.md`.
- Protocols are reproducible (timings, pass/fail, dosing, retest rules).
- A reader can run the Quick test safely and understand when *not* to.

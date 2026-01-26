# Axial Load Gradient Model (ALGM)

This is a notebook repo evolving into three consumables from a shared source of truth:

- Docs website (Next.js + MDX) with an interactive wizard
- A printable PDF (same content)
- A working CLI (the model as a program)

## Status

Early scaffold. See `AGENTS.md` for the full plan and iteration milestones.

## Quick start

- Web: `pnpm -C apps/web dev`
- CLI: `pnpm -C apps/cli start -- --help`
- PDF: `pnpm pdf` (output: `dist/axial-load-gradient-model.pdf`)

## PDF in CI

The GitHub Actions workflow builds the PDF and uploads it as the `algm-pdf` artifact:

`https://github.com/snissn/back-goes-backwards/actions/workflows/algm-ci.yml`

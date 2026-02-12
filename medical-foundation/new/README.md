# Medical Foundation New Pipeline

This folder is a clean, isolated pipeline for the book outline flow:

`json -> md -> combined -> html -> pdf`

`make pdf` now runs a local Markdown/HTML/PDF path inside this folder, while keeping the existing GitHub/manual pipeline untouched.

## Folder layout

- `new/inputs/outlines/`  
  Canonical JSON outline inputs only.
- `new/inputs/static/`  
  Non-outline markdown sections that are part of the final book assembly.
- `new/generated/sections/`  
  JSON → Markdown outputs (`.json.md` files).
- `new/generated/combined.md`  
  Deterministic concatenation of section markdown files.
- `new/generated/combined.html`  
  Local HTML rendering of `combined.md` for paged output.
- `new/generated/combined.pdf`  
  Local PDF rendering of `combined.html`.
- `new/generated/manifest.json`  
  Machine-generated build metadata (input list, section order, timestamp).
- `new/schema/outline.schema.json`  
  Validation schema for outline JSON files.
- `new/_layouts/default.html`  
  Local copy of the Jekyll-style layout used by the `make html` flow.
- `new/templates/combined.html.template`  
  Lightweight pandoc template used to generate `combined.html`.
- `new/scripts/`  
  Pipeline script modules (`list_inputs.py`, `json_to_md.py`, `combine_md.py`, `validate.py`, `render_html.py`, `build_pdf.py`).

## Make targets

- `make list-json`  
  Discover `inputs/outlines/*.json`, print filenames, inferred section IDs, ordering keys.
- `make validate`  
  Validate all discovered JSON files against `schema/outline.schema.json`.
- `make json-md`  
  Convert discovered JSON files to `generated/sections/<name>.json.md`.
- `make combined`  
  Build `generated/combined.md` from static markdown + generated section markdown in deterministic order.
- `make html`  
  Convert `combined.md` to `combined.html` by injecting rendered content into `./_layouts/default.html`.
- `make pdf`  
  Convert `combined.html` to `combined.pdf` using local `pagedjs-cli`.
- `make all`  
  Run `list-json`, `validate`, `json-md`, `combined`.
- `make clean`  
  Remove generated section markdown, combined markdown/html/pdf, and manifest.

## Partial builds

Use `SECTION=<pattern>` to process a subset of outlines.

- `SECTION=11 make html`
- `SECTION=11 make pdf`

`SECTION` matches on outline filename stem.

## Behavior and assumptions

- Inputs are discovered from `inputs/outlines/*.json` only.
  `*.json.md` files are intentionally treated as generated outputs, never as source.
- Deterministic order is filename order for both static and generated sections.
- No frontmatter is added to generated markdown.
- PDF generation in this folder is local and independent from the GitHub-based/manual process.

## Notes on local PDF parity

This local pipeline is designed to reduce GitHub/upload/wget fragility.
`make html` + `make pdf` is the best-effort local substitute for the previous GitHub+pagedjs flow:
- HTML render is local and deterministic.
- `toc.js` is still included during PDF render for layout-compatible page numbering behavior.
- `make pdf` strips stylesheet links from the generated HTML before rendering so local file-mode pagedjs can run, while still applying the configured style files.
- For full parity checks against the current production output, compare `generated/combined.pdf` with your existing flow and tune styles/scripts in the local run command as needed.

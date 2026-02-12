# Medical Foundation New Pipeline

This folder is a clean, isolated pipeline for the book outline flow:

`json -> md -> combined -> pdf`

It does not replace the existing GitHub/template/manual PDF process.
`make pdf` delegates to the existing `medical-foundation/book/run.bash`.

## Folder layout

- `new/inputs/outlines/`  
  Canonical JSON outline inputs only.
- `new/inputs/static/`  
  Non-outline markdown sections that are part of the final book assembly.
- `new/generated/sections/`  
  JSON → Markdown outputs (`.json.md` files).
- `new/generated/combined.md`  
  Deterministic concatenation of section markdown files.
- `new/generated/manifest.json`  
  Machine-generated build metadata (input list, section order, timestamp).
- `new/schema/outline.schema.json`  
  Validation schema for outline JSON files.
- `new/scripts/`  
  Pipeline script modules (`list_inputs.py`, `json_to_md.py`, `combine_md.py`, `validate.py`).

## Make targets

- `make list-json`  
  Discover `inputs/outlines/*.json`, print filenames, inferred section IDs, ordering keys.
- `make validate`  
  Validate all discovered JSON files against `schema/outline.schema.json`.
- `make json-md`  
  Convert discovered JSON files to `generated/sections/<name>.json.md`.
- `make combined`  
  Build `generated/combined.md` from:
  - static markdown files in `inputs/static/`
  - generated section markdown files from `generated/sections/`
  in deterministic numeric/lexicographic order.
- `make all`  
  Run `list-json`, `validate`, `json-md`, `combined` in sequence.
- `make pdf`  
  Run `combined`, then call `medical-foundation/book/run.bash`.
- `make clean`  
  Remove generated section markdown, combined markdown, and manifest.

## Partial builds

Use `SECTION=<pattern>` to process a subset of outlines.

- `SECTION=11 make json-md`
- `SECTION=11 make combined`

`SECTION` matches on outline filename stem and is intentionally permissive for easy targeting.

## Behavior and assumptions

- Inputs are discovered from `inputs/outlines/*.json` only.
  `*.json.md` files are intentionally treated as generated outputs, never as source.
- Deterministic order is file-order over sorted filenames.
- No frontmatter is added to generated Markdown.
- PDF production still relies on the historical external flow in `book/run.bash`.

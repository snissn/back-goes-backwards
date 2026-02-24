SHELL := /bin/bash
DEFAULT_GOAL := help

PYTHON ?= python3
ROOT_DIR := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
INPUT_DIR := $(ROOT_DIR)/inputs/outlines
STATIC_DIR := $(ROOT_DIR)/inputs/static
OUTPUT_DIR := $(ROOT_DIR)/generated
SECTIONS_DIR := $(OUTPUT_DIR)/sections
COMBINED_FILE := $(OUTPUT_DIR)/combined.md
COMBINED_HTML_FILE := $(OUTPUT_DIR)/combined.html
COMBINED_PDF_FILE := $(OUTPUT_DIR)/combined.pdf
FRONT_COVER_PDF_FILE := $(OUTPUT_DIR)/front-cover.pdf
COMBINED_WITH_COVER_PDF_FILE := $(OUTPUT_DIR)/combined-with-cover.pdf
MANIFEST_FILE := $(OUTPUT_DIR)/manifest.json
SCHEMA_FILE := $(ROOT_DIR)/schema/outline.schema.json
TEMPLATE_FILE := $(ROOT_DIR)/templates/combined.html.template
LAYOUT_FILE := $(ROOT_DIR)/_layouts/default.html
PDF_STYLE_1 := $(ROOT_DIR)/../book/layout.css
PDF_STYLE_2 := $(ROOT_DIR)/../book/toc.css
PDF_STYLE_3 := $(ROOT_DIR)/../book/page-override.css
PDF_SCRIPT := $(ROOT_DIR)/../book/toc.js
COVER_IMAGE ?= $(ROOT_DIR)/../book/cover/final_cover_typography_smooth.png
# Screen-first cover PDF settings (smaller + JPEG-compressed).
# Override these for print workflows.
COVER_MAX ?= 1080x1620
COVER_DENSITY ?= 144
COVER_QUALITY ?= 82

SECTION ?=

.PHONY: all list-json validate json-md combined html cover-pdf pdf pdf-with-cover clean help

help:
	@echo "Available targets:"
	@echo "  all         - Run list-json, validate, json-md, combined"
	@echo "  list-json   - Discover and print input outline JSON files and ordering keys"
	@echo "  validate    - Validate outline JSON files against schema/outline.schema.json"
	@echo "  json-md     - Convert JSON outlines to generated/*.json.md files"
	@echo "  combined    - Build generated/combined.md from static markdown and generated sections"
	@echo "  html        - Build generated/combined.html using local layout"
	@echo "  pdf         - Build generated/combined.pdf from combined.html"
	@echo "  cover-pdf   - Build generated/front-cover.pdf from COVER_IMAGE"
	@echo "  pdf-with-cover - Build generated/combined-with-cover.pdf by prepending front-cover.pdf to combined.pdf"
	@echo "  clean       - Remove generated markdown, html, pdf, and manifest artifacts"
	@echo "  help        - Show this help menu"

all: list-json validate json-md combined

list-json:
	@$(PYTHON) $(ROOT_DIR)/scripts/list_inputs.py \
		--input-dir $(INPUT_DIR) \
		--section "$(SECTION)"

validate:
	@$(PYTHON) $(ROOT_DIR)/scripts/validate.py \
		--input-dir $(INPUT_DIR) \
		--schema $(SCHEMA_FILE) \
		--section "$(SECTION)"

json-md:
	@mkdir -p $(SECTIONS_DIR)
	@$(PYTHON) $(ROOT_DIR)/scripts/json_to_md.py \
		--input-dir $(INPUT_DIR) \
		--output-dir $(SECTIONS_DIR) \
		--section "$(SECTION)"

combined: json-md
	@mkdir -p $(OUTPUT_DIR)
	@$(PYTHON) $(ROOT_DIR)/scripts/combine_md.py \
		--input-dir $(INPUT_DIR) \
		--sections-dir $(SECTIONS_DIR) \
		--static-dir $(STATIC_DIR) \
		--combined-file $(COMBINED_FILE) \
		--manifest-file $(MANIFEST_FILE) \
		--section "$(SECTION)"

html: combined
	@mkdir -p $(OUTPUT_DIR)
	@$(PYTHON) $(ROOT_DIR)/scripts/render_html.py \
		--combined-file $(COMBINED_FILE) \
		--output-file $(COMBINED_HTML_FILE) \
		--template $(TEMPLATE_FILE) \
		--layout $(LAYOUT_FILE) \
		--title "The Back Goes Backwards: Integrating Biomechanics into Modern Medicine" \
		--description "A five-part journey into biomechanical medicine"

pdf: html
	@$(PYTHON) $(ROOT_DIR)/scripts/build_pdf.py \
		--input-html $(COMBINED_HTML_FILE) \
		--output-pdf $(COMBINED_PDF_FILE) \
		--outline-tags "h1,h2,h3" \
		--style $(PDF_STYLE_1) \
		--style $(PDF_STYLE_2) \
		--style $(PDF_STYLE_3) \
		--script $(PDF_SCRIPT)
	@mkdir -p $(OUTPUT_DIR)
	@magick "$(COVER_IMAGE)" -resize "$(COVER_MAX)>" -strip -alpha off -colorspace sRGB \
		-units PixelsPerInch -density "$(COVER_DENSITY)" -compress jpeg -quality "$(COVER_QUALITY)" \
		"$(FRONT_COVER_PDF_FILE)"
	@echo "Wrote cover PDF: $(FRONT_COVER_PDF_FILE)"
	@qpdf --empty --pages "$(FRONT_COVER_PDF_FILE)" "$(COMBINED_PDF_FILE)" -- "$(COMBINED_WITH_COVER_PDF_FILE)"
	@echo "Wrote combined-with-cover PDF: $(COMBINED_WITH_COVER_PDF_FILE)"

cover-pdf:
	@mkdir -p $(OUTPUT_DIR)
	@magick "$(COVER_IMAGE)" -resize "$(COVER_MAX)>" -strip -alpha off -colorspace sRGB \
		-units PixelsPerInch -density "$(COVER_DENSITY)" -compress jpeg -quality "$(COVER_QUALITY)" \
		"$(FRONT_COVER_PDF_FILE)"
	@echo "Wrote cover PDF: $(FRONT_COVER_PDF_FILE)"

pdf-with-cover: pdf cover-pdf
	@qpdf --empty --pages "$(FRONT_COVER_PDF_FILE)" "$(COMBINED_PDF_FILE)" -- "$(COMBINED_WITH_COVER_PDF_FILE)"
	@echo "Wrote combined-with-cover PDF: $(COMBINED_WITH_COVER_PDF_FILE)"

clean:
	@rm -rf $(SECTIONS_DIR) $(COMBINED_FILE) $(COMBINED_HTML_FILE) $(COMBINED_PDF_FILE) $(FRONT_COVER_PDF_FILE) $(COMBINED_WITH_COVER_PDF_FILE) $(MANIFEST_FILE)

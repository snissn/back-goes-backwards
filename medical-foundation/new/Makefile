SHELL := /bin/bash
DEFAULT_GOAL := help

PYTHON ?= python3
ROOT_DIR := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
INPUT_DIR := $(ROOT_DIR)/inputs/outlines
STATIC_DIR := $(ROOT_DIR)/inputs/static
OUTPUT_DIR := $(ROOT_DIR)/generated
SECTIONS_DIR := $(OUTPUT_DIR)/sections
COMBINED_FILE := $(OUTPUT_DIR)/combined.md
MANIFEST_FILE := $(OUTPUT_DIR)/manifest.json
SCHEMA_FILE := $(ROOT_DIR)/schema/outline.schema.json

SECTION ?=

.PHONY: all list-json validate json-md combined pdf clean help

help:
	@echo "Available targets:"
	@echo "  all         - Run list-json, validate, json-md, combined"
	@echo "  list-json   - Discover and print input outline JSON files and ordering keys"
	@echo "  validate    - Validate outline JSON files against schema/outline.schema.json"
	@echo "  json-md     - Convert JSON outlines to generated/*.json.md files"
	@echo "  combined    - Build generated/combined.md from static markdown and generated sections"
	@echo "  pdf         - Run existing book/run.bash after combined"
	@echo "  clean       - Remove generated markdown and manifest artifacts"
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

pdf:
	@echo "Running existing medical-foundation/book/run.bash (JSON→MD→combined output must already be prepared)."
	@cd $(ROOT_DIR)/../book && ./run.bash

clean:
	@rm -rf $(SECTIONS_DIR) $(COMBINED_FILE) $(MANIFEST_FILE)

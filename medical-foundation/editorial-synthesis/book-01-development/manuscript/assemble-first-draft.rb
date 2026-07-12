#!/usr/bin/env ruby
# frozen_string_literal: true

require "pathname"

ROOT = Pathname.new(__dir__)
OUTPUT = ROOT.join("book-i-first-draft.md")

INPUTS = [
  "front-matter/title-page.md",
  "front-matter/introduction.md",
  "parts/part-01-opening.md",
  "chapters/01-the-mechanical-dimension-of-life.md",
  "chapters/02-a-working-language-of-load.md",
  "chapters/03-hard-soft-mechanical-roles.md",
  "chapters/04-three-dimensional-configuration-and-load-paths.md",
  "parts/part-01-closing.md",
  "parts/part-02-opening.md",
  "chapters/05-skeleton-joints-shape-preserving-paths.md",
  "chapters/06-active-tensile-compliant-pressure-systems.md",
  "chapters/07-posterior-chain-anatomical-system.md",
  "chapters/08-physics-ordinary-function-posterior-support.md",
  "chapters/09-posterior-support-whole-body-lifespan.md",
  "parts/part-02-closing.md",
  "parts/part-03-opening.md",
  "chapters/10-mechanical-homeostasis-capacity.md",
  "chapters/11-continuity-handoff-substitution.md",
  "chapters/12-geometry-concentration-localization.md",
  "chapters/13-constraint-maintained-deformation.md",
  "chapters/14-instability-discoordination.md",
  "chapters/15-compensation-rerouting.md",
  "chapters/16-scale-transition.md",
  "parts/part-03-closing.md",
  "parts/part-04-opening.md",
  "chapters/17-established-mechanical-reasoning-in-medicine.md",
  "chapters/18-longitudinal-load-routing.md",
  "chapters/19-mechanical-exposure-tissue-response.md",
  "chapters/20-comparing-compliant-systems.md",
  "chapters/21-causal-scope-whole-person.md",
  "chapters/22-integrating-lens-clinical-workflow.md",
  "parts/part-04-closing.md",
  "parts/part-05-opening.md",
  "chapters/23-geometry-localized-strain.md",
  "chapters/24-thoracic-outlet.md",
  "chapters/25-instability-repeated-demand.md",
  "chapters/26-silent-compensation-mixed-chronic.md",
  "parts/part-05-closing.md",
  "parts/part-06-opening.md",
  "chapters/27-mechanical-questions-clinical-reasoning.md",
  "chapters/28-education-prevention-movement-literacy.md",
  "chapters/29-research-development-program.md",
  "chapters/30-wider-series-hypothesis.md",
  "back-matter/bibliography.md"
].freeze

paths = INPUTS.map { |relative| ROOT.join(relative) }
missing = paths.reject(&:file?)
unless missing.empty?
  warn "Cannot assemble Book I; missing #{missing.length} input(s):"
  missing.each { |path| warn "- #{path.relative_path_from(ROOT)}" }
  exit 1
end

parts = paths.map do |path|
  content = path.read(encoding: "UTF-8")
  abort "Input lacks a final newline: #{path.relative_path_from(ROOT)}" unless content.end_with?("\n")

  content.rstrip
end

OUTPUT.write(parts.join("\n\n") + "\n", encoding: "UTF-8")
puts "Assembled #{INPUTS.length} inputs into #{OUTPUT.relative_path_from(ROOT)}"

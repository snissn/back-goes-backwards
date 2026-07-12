#!/usr/bin/env ruby
# frozen_string_literal: true

require "pathname"

ROOT = Pathname.new(__dir__)
CHAPTERS = ROOT.join("chapters")
OUTPUT = ROOT.join("back-matter/bibliography.md")

chapter_paths = (1..30).map do |number|
  matches = CHAPTERS.glob(format("%02d-*.md", number))
  abort "Expected one Chapter #{number} file, found #{matches.length}" unless matches.length == 1

  matches.first
end

def source_key(entry)
  doi = entry[/https:\/\/doi\.org\/[^)\s]+/i]
  return "doi:#{doi.downcase}" if doi

  urls = entry.scan(/\]\((https?:\/\/[^)]+)\)/i).flatten
  return "url:#{urls.join('|').downcase}" unless urls.empty?

  "text:#{entry.downcase.gsub(/[*_`]/, '').gsub(/\s+/, ' ').strip}"
end

entries = {}
chapter_paths.each do |path|
  lines = path.readlines(encoding: "UTF-8")
  lines.each do |line|
    match = line.match(/^\[\^([^\]]+)\]:\s+(.+)$/)
    next unless match

    note_id = match[1]
    entry = match[2].strip
    key = source_key(entry)
    entries[key] ||= { entry: entry, chapter: path.basename.to_s, note_id: note_id }
  end
end

sorted = entries.values.sort_by do |record|
  record[:entry].downcase.gsub(/\[[^\]]+\]\([^)]+\)/, " ").gsub(/[*_`“”‘’]/, "").gsub(/\s+/, " ")
end

OUTPUT.dirname.mkpath
body = +"# Bibliography\n\n"
body << "This first-draft bibliography consolidates the sources documented in the chapter endnotes. " \
        "Where a source appears in more than one chapter, one complete annotated entry is retained here; " \
        "the chapter notes preserve the proposition-specific use and limit. Publication editing will normalize " \
        "house style and recheck metadata without changing the evidentiary job of a source.\n\n"
sorted.each { |record| body << "- #{record[:entry]}\n" }

OUTPUT.write(body, encoding: "UTF-8")
puts "Wrote #{sorted.length} unique source records to #{OUTPUT.relative_path_from(ROOT)}"

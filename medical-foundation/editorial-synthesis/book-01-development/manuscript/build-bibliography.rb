#!/usr/bin/env ruby
# frozen_string_literal: true

require "pathname"
require "uri"

ROOT = Pathname.new(__dir__)
CHAPTERS = ROOT.join("chapters")
OUTPUT = ROOT.join("back-matter/bibliography.md")

chapter_paths = (1..30).map do |number|
  matches = CHAPTERS.glob(format("%02d-*.md", number))
  abort "Expected one Chapter #{number} file, found #{matches.length}" unless matches.length == 1

  matches.first
end

def link_urls(entry)
  urls = []
  cursor = 0

  while (start = entry.index("](", cursor))
    position = start + 2
    depth = 1
    destination = +""

    while position < entry.length && depth.positive?
      character = entry[position]
      if character == "("
        depth += 1
        destination << character
      elsif character == ")"
        depth -= 1
        destination << character if depth.positive?
      else
        destination << character
      end
      position += 1
    end

    urls << destination if depth.zero? && destination.match?(/\Ahttps?:\/\//i)
    cursor = [position, start + 2].max
  end

  urls
end

def canonical_url(url)
  URI::DEFAULT_PARSER.unescape(url).downcase
end

def source_key(entry)
  urls = link_urls(entry)
  dois = urls.filter_map do |url|
    match = url.match(/\Ahttps?:\/\/(?:dx\.)?doi\.org\/(.+)\z/i)
    "https://doi.org/#{URI::DEFAULT_PARSER.unescape(match[1]).downcase}" if match
  end.uniq.sort
  return "doi:#{dois.join('|')}" unless dois.empty?

  canonical_urls = urls.map { |url| canonical_url(url) }.uniq.sort
  return "url:#{canonical_urls.join('|')}" unless canonical_urls.empty?

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
body << "This first-draft bibliography consolidates the annotated source records documented in the chapter endnotes. " \
        "Where the same record appears in more than one chapter, one complete entry is retained here. Composite " \
        "records remain intact, so an individual source may appear again when its annotation or source grouping differs. " \
        "The chapter notes preserve each proposition-specific use and limit. Publication editing will normalize house " \
        "style and recheck metadata without changing the evidentiary job of a source.\n\n"
sorted.each { |record| body << "- #{record[:entry]}\n" }

OUTPUT.write(body, encoding: "UTF-8")
puts "Wrote #{sorted.length} unique annotated source records to #{OUTPUT.relative_path_from(ROOT)}"

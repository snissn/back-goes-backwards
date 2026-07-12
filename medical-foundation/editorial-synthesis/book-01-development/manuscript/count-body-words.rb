#!/usr/bin/env ruby
# frozen_string_literal: true

# Canonical Book I body-word counter.
#
# Counts reader-facing chapter material after the H1 title and before `## Notes`.
# Subsection headings, lists, equations, and nonfigure displays remain in the
# count. Complete blockquoted figure placeholders—from a `> **Figure ...` line
# through the end of that block—are excluded, including captions and text
# alternatives. Markdown syntax, link destinations, and footnote markers do not
# count as words.

abort "usage: ruby #{File.basename($PROGRAM_NAME)} CHAPTER.md [...]" if ARGV.empty?

def body_source(path)
  lines = File.readlines(path, chomp: true)
  title_removed = false
  in_figure = false
  kept = []

  lines.each do |line|
    break if line.match?(/^## Notes\s*$/)

    unless title_removed
      if line.match?(/^#\s+/)
        title_removed = true
        next
      end
    end

    if in_figure
      if line.start_with?(">") || line.strip.empty?
        next
      end
      in_figure = false
    end

    if line.match?(/^>\s*\*\*Figure\s+/)
      in_figure = true
      next
    end

    kept << line
  end

  kept.join("\n")
end

def word_count(source)
  text = source.dup
  text.gsub!(/^\s*```.*$/, "")
  text.gsub!(/!\[([^\]]*)\]\([^)]+\)/, '\\1')
  text.gsub!(/\[([^\]]+)\]\([^)]+\)/, '\\1')
  text.gsub!(/\[\^[^\]]+\]/, "")
  text.gsub!(/<[^>]+>/, " ")
  text.gsub!(/[`*_~]/, "")
  text.scan(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/u).length
end

ARGV.each do |path|
  abort "missing file: #{path}" unless File.file?(path)

  puts "#{word_count(body_source(path))}\t#{path}"
end

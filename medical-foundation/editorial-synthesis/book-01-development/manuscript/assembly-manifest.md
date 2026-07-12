# Book I first-draft assembly manifest

The canonical reader draft is assembled from the clean manuscript files, not from JSON outlines, generated development prose, evidence packets, salvage records, or audit files.

The order is:

1. title page and introduction;
2. Part I opening, Chapters 1–4, and Part I synthesis;
3. Part II opening, Chapters 5–9, and Part II synthesis;
4. Part III opening, Chapters 10–16, and Part III synthesis;
5. Part IV opening, Chapters 17–22, and Part IV synthesis;
6. Part V opening, Chapters 23–26, and Part V synthesis;
7. Part VI opening and Chapters 27–30; and
8. the consolidated bibliography.

Chapter 30 closes Part VI and the book, so there is no additional Part VI synthesis after it. [`assemble-first-draft.rb`](assemble-first-draft.rb) records every exact input path and writes `book-i-first-draft.md`. [`build-bibliography.rb`](build-bibliography.rb) collects the chapter source notes and deduplicates annotated source records by their complete canonicalized DOI set, complete link set, or normalized text before writing `back-matter/bibliography.md` and assembling the book.

Run from the repository root:

```shell
ruby medical-foundation/editorial-synthesis/book-01-development/manuscript/build-bibliography.rb
ruby medical-foundation/editorial-synthesis/book-01-development/manuscript/assemble-first-draft.rb
```

Both programs fail if a required chapter or assembly input is absent. The resulting files remain first-draft assets; the manuscript audit and publication gates govern their status.

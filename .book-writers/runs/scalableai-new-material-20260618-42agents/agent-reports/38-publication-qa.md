## Publication QA Report

Agent: 38-publication-qa
Mode: suggest
Scope: new material visible in current git diff plus reports from this run
Book HTML edited: no

### Summary

- Files inspected: 40 changed HTML files plus 36 run reports.
- Issues found: 10. Critical: 2. High: 5. Medium: 2. Low: 1.
- Publication readiness: NEEDS FIXES.
- Browser evidence: rendered all 40 changed HTML files at 1200, 1024, 820, 768, and 375 px.
- Screenshots saved: 80 PNG files in `output/playwright/publication-qa-38`.
- Browser result JSON: `output/playwright/publication-qa-38/results.json`.

### Critical Issues

1. All 34 changed section files lack section-level bibliography blocks for the new current-tool, benchmark, protocol, or research-frontier material.
   - Location: every changed `section-*.html` file in this diff. Highest risk files are `section-5.3.html`, `section-7.8.html`, `section-8.7.html`, `section-16.5.html`, `section-22.5.html`, `section-24.5.html`, `section-25.1.html`, `section-32.6.html`, `section-38.3.html`, `section-40.6.html`, and `section-40.9.html`.
   - Evidence: Agent 35 reports no `class="bibliography"` block in changed section files; my structural scan confirmed 34 of 34 changed section files have no section bibliography.
   - Old text: `<nav class="chapter-nav">`
   - New text: insert a focused `<section class="bibliography">` immediately before `<nav class="chapter-nav">`. Use the ready-to-paste bibliography blocks already drafted in `agent-reports/35-bibliography.md` for Sections 5.3, 40.6, and 40.9, then add equivalent 5 to 10 card blocks for the remaining changed sections that introduce external claims.
   - Why it matters: the current diff adds named standards, current tools, current benchmark releases, and current papers without a publication-grade end-of-section source path.
   - Tier: TIER 1 (BLOCKING).

2. Two added output blocks create visible horizontal overflow in browser rendering.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html:120`.
   - Screenshot: `output/playwright/publication-qa-38/part-2-distributed-data_module-08-distributed-storage-data-loading_section-8.9.html-1200.png` and the 375 px companion.
   - Old text: `lineage record          : {"output_snapshot": "3dd4f59af2233d0a45a0b32bc487a1b7badc99f74221c1ecda853e0cb6b1712e", "inputs": ["s3://corpus/reviews-2026-06.jsonl", "s3://corpus/labels-v4.csv"], "transform_code": "git:9f3a1c2", "row_count": 3}`
   - New text:
```html
lineage record          : {
  "output_snapshot": "3dd4f59af2233d0a45a0b32bc487a1b7badc99f74221c1ecda853e0cb6b1712e",
  "inputs": [
    "s3://corpus/reviews-2026-06.jsonl",
    "s3://corpus/labels-v4.csv"
  ],
  "transform_code": "git:9f3a1c2",
  "row_count": 3
}
```
   - Location: `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html:192`.
   - Old text: `lineage of v2        : {"version": 2, "data_hash": "d44dc25ac185", "code_commit": "git:c7d201", "metrics": {"auc": 0.917}}`
   - New text:
```html
lineage of v2        : {
  "version": 2,
  "data_hash": "d44dc25ac185",
  "code_commit": "git:c7d201",
  "metrics": {"auc": 0.917}
}
```
   - Why it matters: the text is readable only through horizontal scrolling on desktop and mobile, which fails the publication QA visual rendering checklist.
   - Tier: TIER 1 (BLOCKING).

### High Priority Issues

1. The new preface illustration asset exists locally but is untracked.
   - Location: `front-matter/preface.html:159` references `images/application-reference-paths.png`.
   - Evidence: file exists at `front-matter/images/application-reference-paths.png`, but `git status` shows it under untracked files.
   - Old text: `<img alt="A hub-and-spoke map showing Part I as the shared foundation, with ten application paths branching out to RAG, LLM serving, foundation training, recommenders, federated medical AI, agent systems, robotics and edge fleets, streaming AI, AI data engineering, and AI cluster platforms." src="images/application-reference-paths.png"/>`
   - New text: keep the HTML unchanged and add `front-matter/images/application-reference-paths.png` to the commit with the preface change.
   - Why it matters: the page renders locally now, but a clone or publication build from tracked files would ship a broken first-impression image.
   - Tier: TIER 2 (HIGH).

2. New practical-example blocks do not consistently satisfy the required practitioner-story structure.
   - Location: Sections 9.9, 16.5, 26.7, 36.6, 37.8, and 38.3.
   - Evidence: Agent 33 identifies six replacement blocks with Who, Situation, Problem, Dilemma, Decision, How, Result, and Lesson fields.
   - Old text: replace the affected `<div class="callout practical-example">` blocks named in `agent-reports/33-application-example.md`.
   - New text: apply the six complete replacement blocks already drafted in `agent-reports/33-application-example.md`.
   - Why it matters: the styling class promises a concrete application story. Conceptual mini-explanations in that class create inconsistent reader expectations.
   - Tier: TIER 2 (HIGH).

3. New bibliography metadata includes an invalid `bib-meta` value.
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/index.html`, new generative-recommender bibliography entry.
   - Old text: `<span class="bib-meta">📄 Article</span>`
   - New text: `<span class="bib-meta">📝 Blog Post</span>`
   - Why it matters: the bibliography metadata set is controlled, and this value falls outside the allowed card taxonomy.
   - Tier: TIER 2 (HIGH).

4. New Module 11 and Module 38 bibliography annotations are too short for the card format.
   - Location: `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html` and `part-8-case-studies/module-38-case-distributed-recommendation/index.html`.
   - Old text: the three short annotation paragraphs identified in Agent 35.
   - New text: apply Agent 35's expanded 2 to 3 sentence annotation replacements for PyTorch 2D sparse parallelism, HSTU generative recommenders, Meta generative recommender artifacts, and Spotify semantic IDs.
   - Why it matters: short annotations do not explain content, section relevance, and audience, which is the book's bibliography card standard.
   - Tier: TIER 2 (HIGH).

5. The strongest new conceptual material remains visually sparse.
   - Location: Section 7.8 Spark Connect, Section 8.7 AI-native data engines, Section 8.9 corpus governance, Section 11.7 2D sparse parallelism, Section 38.3 semantic-ID generative recommendation, and Section 40.6 protocol trust boundaries.
   - Old text: no figure exists after the relevant new explanatory paragraphs.
   - New text: use Agent 31's exact illustration briefs and captions for the six strongest opportunities, prioritizing Spark Connect, AI-native data engines, corpus governance, semantic IDs, and 2D sparse parallelism.
   - Why it matters: the diff adds frontier concepts that are structurally visual, but only the preface receives a new image.
   - Tier: TIER 2 (HIGH).

### Medium Issues

1. Four changed sections have no `fun-note` callout.
   - Location: `section-36.6.html`, `section-37.4.html`, `section-37.8.html`, and `section-38.3.html`.
   - Old text: no `class="callout fun-note"` appears in those files.
   - New text: use Agent 34's drafted fun-note insertions where appropriate, with clinical and governance sections kept serious if the chapter lead chooses to defer humor.
   - Why it matters: most changed sections retain the book's engagement rhythm; these four stand out after the run.
   - Tier: TIER 3 (MEDIUM).

2. Browser rendering reports many math and SVG overflows, most appear preexisting but still affect changed pages.
   - Location: 31 of 40 rendered pages show at least one overflow at a tested width, usually KaTeX internals or SVG path bounding boxes.
   - Old text: long display equations and SVG paths render outside the viewport in the browser metrics.
   - New text: after integration, run a focused math and SVG pass that wraps wide display math in scrollable containers and verifies SVG viewBox geometry. Treat the two changed code-output lines above as the immediate diff-owned fixes.
   - Why it matters: publication QA cannot certify responsive layout while changed pages show widespread overflow signals.
   - Tier: TIER 3 (MEDIUM).

### Low Issue

1. Browser console shows repeated 404 resource messages.
   - Location: several rendered pages at 1200 px.
   - Old text: not visible in page HTML from the scoped diff.
   - New text: inspect network logs after final integration and confirm these are only favicon or unrelated resource requests. If any are scoped assets, add or correct them before publication.
   - Why it matters: visible rendering was not blocked, but clean publication builds should avoid noisy missing-resource errors.
   - Tier: TIER 3 (MEDIUM).

### Consistency Issues

- Bibliography: expected card-based section bibliographies for new research and tool claims. Changed section files have none. Fix by applying Agent 35 bibliographies before `chapter-nav`.
- Practical examples: expected practitioner-story structure. Six changed examples need replacement or reclassification using Agent 33.
- Illustrations: expected new high-value conceptual additions to receive visuals when they introduce spatial systems. Only the preface has a new figure. Fix by applying selected Agent 31 briefs.
- Metadata tags: expected controlled `bib-meta` values. Module 38 uses `📄 Article`; replace with `📝 Blog Post`.

### Missing Content

- Section bibliographies: missing in 34 changed section files.
- Section-level visuals: missing for the highest-value new concepts listed in Agent 31.
- Fun-note callouts: missing in four changed section files.
- Canonical practical-example story fields: missing or inconsistent in six changed practical examples.

### Visual Rendering Issues

- All scoped pages rendered at 1200, 1024, 820, 768, and 375 px.
- Desktop and mobile screenshots were captured for every changed file.
- New preface illustration loads successfully at desktop and mobile widths.
- The most directly diff-owned visual failures are the long output lines in Sections 8.9 and 26.3.
- Many KaTeX formulas and some SVG internals report overflow. These need a separate shared-style or math-rendering pass because they are broader than the current new-material diff.

### Accessibility Issues

- The new preface image has meaningful alt text.
- No missing image alt text was found in scoped changed HTML.
- Header book-title links are under 44 px tall in mobile browser metrics, but this appears to be an existing global header pattern rather than a new-material regression.
- Link text in the new material is generally descriptive. No `href="#"` or `javascript:void` placeholders were found in added lines.

### Checklist Status

- Structural integrity: 36 of 40 passed. Failures are missing section bibliographies and the untracked preface asset packaging risk.
- Visual rendering: 38 of 40 passed for directly diff-owned material. Sections 8.9 and 26.3 need output wrapping.
- Content completeness: 4 of 40 passed. Section bibliographies and selected visuals remain missing.
- Cross-book consistency: 34 of 40 passed. Practical-example structure and bibliography metadata need normalization.
- Hyperlink correctness: 40 of 40 passed for local link and local image targets currently on disk.
- Accessibility: 39 of 40 passed. Mobile header touch target remains a global concern.
- Content quality: 40 of 40 passed for forbidden dash characters, placeholder text, and banned phrases in added lines.

### Verification Run

- Read the assigned prompt and the `book-writers` skill.
- Read the Playwright skill and used browser automation through Chrome.
- Inspected `git diff` scope: 40 modified HTML files, 489 insertions, 88 deletions.
- Read relevant run reports: Agent 31 Illustrator, Agent 33 Application Example, and Agent 35 Bibliography, plus report-level issue scans across all 36 reports.
- Ran Python structural checks for duplicate IDs, local image targets, local internal links, stylesheet links, placeholder text, forbidden dash characters, and callout counts.
- Started local static server on `127.0.0.1:8765`.
- Rendered every changed page at 1200, 1024, 820, 768, and 375 px.
- Saved 80 screenshots and merged browser metrics into `output/playwright/publication-qa-38/results.json`.

### Files Changed

- Created report: `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-reports/38-publication-qa.md`.
- Created QA artifacts: `output/playwright/publication-qa-38/results.json` plus 80 desktop and mobile screenshots.
- Did not edit book HTML.

### Blockers

No tool blocker prevented this QA report. The publication blockers are the missing section bibliographies and the two changed output blocks that visibly overflow.

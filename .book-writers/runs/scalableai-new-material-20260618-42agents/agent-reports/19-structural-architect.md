## Structural Architecture Report

Agent: 19, Structural Refactoring Architect

Mode: suggest

Scope: only new material visible in the current git diff.

### Files Inspected

- `front-matter/preface.html`
- `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`
- `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`
- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`
- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
- `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`
- `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`
- `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`
- `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`
- `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`
- `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`
- `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`
- `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`
- `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`
- `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html`
- `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html`
- `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`
- `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`
- `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html`
- `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`
- `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html`
- `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`
- `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`
- `part-7-infrastructure/module-34-edge-fog-on-device/index.html`
- `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`
- `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html`
- `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`
- `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`
- `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`
- `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`
- `part-8-case-studies/module-38-case-distributed-recommendation/index.html`
- `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`
- `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`
- `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`

Files changed by this agent: none. This is a reviewer report only.

### Proposed Reorganization

No book level table of contents reorganization is recommended from this diff alone. The additions are mostly localized currency updates, research frontiers, and short new subsections. The architecture problem is local element ordering: several new blocks now appear after an end stage research frontier, which makes the section read as if it has already closed and then restarts.

### Section Move, Merge, Split Recommendations

1. MOVE: `Dataset Governance for Foundation-Model Corpora`
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, lines 237 to 258
   - Rationale: The new governance subsection appears after the research frontier at line 232. Per the Agent 19 ordering rule, a research frontier belongs after section content. This makes the new substantive subsection look like an appendix after the ending.
   - From: after `<div class="callout research-frontier">` at line 232
   - To: immediately before that research frontier block, after the line ending `from Data Lineage to Experiment Tracking`
   - Old text: `<h2>6. Dataset Governance for Foundation-Model Corpora <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - New text: keep the same heading and complete subsection text, but move the complete block from `<h2>6. Dataset Governance for Foundation-Model Corpora` through the closing `</table>` before the research frontier that starts with `<div class="callout research-frontier">`
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Content Update Scout may prefer the frontier language to remain near the new governance discussion. That is fine if the frontier moves after the governance subsection.

2. MOVE: `Generative Recommenders and Semantic IDs`
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, lines 212 to 239
   - Rationale: The new subsection is a major conceptual expansion, but it currently appears after a research frontier callout that already summarizes generative retrieval. This creates a loop: frontier first, full explanation second, thesis thread third. The full explanation should precede the frontier, or the frontier should be reframed as the ending after the new explanation.
   - From: after `<div class="callout research-frontier">` at line 207
   - To: immediately before that research frontier block, after the subsection `4. Freshness: Getting New Items Into the Index Fast`
   - Old text: `<h2>5. Generative Recommenders and Semantic IDs <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - New text: keep the same heading and complete subsection text, but move the complete block from `<h2>5. Generative Recommenders and Semantic IDs` through the closing `</div>` of the practical example before the research frontier that starts with `<div class="callout research-frontier">`
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Bibliography Agent additions in `module-38/index.html` refer to Section 38.3 and remain valid after the move.

3. MOVE: `Chapter 9 in One View`, `Project Ideas`, and `Exercises`
   - Location: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`, lines 231 to 270
   - Rationale: The closing summary, project ideas, and exercises follow the research frontier at line 226. The result is an end stage callout in the middle of the final section close. The canonical order puts research frontier after the instructional body and before the final navigation block.
   - From: after `<div class="callout research-frontier">` at line 226
   - To: either move the research frontier down so it appears after the exercises, or move the closing summary, project ideas, and exercises before the frontier. The cleaner pattern for this chapter is to move the research frontier down, because the summary and exercises are part of the close.
   - Old text: `<h2>6. Chapter 9 in One View, and the End of Part II <span class="level-badge basic" title="Beginner">Beginner</span></h2>`
   - New text: keep the same closing heading and content in place, but move the complete research frontier block beginning with `<div class="callout research-frontier">` and ending with its matching `</div>` to immediately before `<nav class="chapter-nav">`
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Exercise Designer may expect exercises to remain close to the chapter navigation. Moving only the frontier preserves that.

4. MOVE: `MLPerf Inference v5.1 and Interactive LLM SLOs`
   - Location: `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`, lines 160 to 178
   - Rationale: A new research frontier now appears inside the middle of the section, before `5. Running an Honest Load Test` and `6. Goodput as a Sizing and Scheduling Target`. The section now has two research-frontier callouts, one at line 160 and another at line 198. The first should not be an end stage element if the section continues with core instructional content.
   - From: after heading `4. LLM Serving Splits the SLO in Two: TTFT and Inter-Token Latency`
   - To: convert the first frontier to a normal warning or key insight, or merge it into the final frontier at line 198. Structurally, the best fix is to keep the construct matched warning near the SLO discussion and move the MLPerf frontier paragraph into the final research frontier.
   - Old text: `<div class="callout research-frontier">`
   - New text: `<div class="callout key-insight">`
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Research Scientist may want to retain the research-frontier label. If so, move the entire block to the end instead of changing the callout type.

5. MOVE: `Streaming Feature Stores as a Named Architecture`
   - Location: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`, lines 100 to 104
   - Rationale: The new frontier callout appears after the second subsection, before train and serve consistency, point in time joins, scratch implementation, and personalization. This is too early for an end stage research frontier.
   - From: after `2. The Feature Store and Its Two Halves`
   - To: after `6. From One Feature to a Real-Time Personalization Engine`, immediately before `<nav class="chapter-nav">`
   - Old text: `<div class="callout research-frontier">`
   - New text: keep the same callout markup and full text, but move the full block to immediately before `<nav class="chapter-nav">`
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: none identified.

### Structural Consistency Issues

1. Several updated sections use a research frontier as a midstream topic box rather than as an end stage structural element.
   - Affected files: `section-5.3.html`, `section-8.9.html`, `section-9.7.html`, `section-9.9.html`, `section-38.3.html`
   - Expected pattern: body content first, then key takeaways if present, then research frontier, then final navigation material.
   - Suggested fix: keep research-frontier callouts as the last conceptual callout in the section. If a frontier is needed inside a local subsection, use `key-insight`, `note`, or `practical-example` instead.
   - Priority: HIGH for files where new `h2` content follows the frontier, MEDIUM for files where a frontier appears early but no new heading follows immediately.
   - Tier: TIER 2 (HIGH)

2. Some newly visible closing headings are too generic when read in isolation.
   - Affected file: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
   - Old text: `<h2>7. Project Ideas <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - New text: `<h2>7. Chapter 9 Project Ideas for Streaming AI Systems <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Old text: `<h2>8. Exercises <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - New text: `<h2>8. Concept Drift and Distributed Monitoring Exercises <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Rationale: Agent 19 bans headings that are not self sufficient. These headings are conventional, but they are less useful in navigation, search, and screen reader outlines than subject bearing headings.
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY

### Element Ordering Issues

1. `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`: subsection content appears after research frontier.
   - Expected order: body content, research frontier, final close.
   - Fix: move the new governance subsection before the research frontier.
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)

2. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`: chapter close, projects, and exercises appear after research frontier.
   - Expected order: body content and exercises, research frontier, final navigation.
   - Fix: move the research frontier to immediately before the navigation.
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)

3. `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`: new generative recommender subsection appears after research frontier.
   - Expected order: body content, research frontier, thesis thread or final close if retained by local pattern.
   - Fix: move the new generative subsection before the frontier.
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)

### Prerequisite and Sequencing Issues

1. `section-38.3.html` currently explains generative recommenders after presenting the frontier summary of generative retrieval.
   - Fix: reorder so the conceptual explanation comes before the frontier.
   - Old text: `<div class="callout-title">Research Frontier: Generative and Learned Retrieval (2024 to 2026)</div>`
   - New text: keep this title, but place the complete callout after the new `Generative Recommenders and Semantic IDs` subsection so it acts as the synthesis, not the preview.
   - Tier: TIER 2 (HIGH)

2. `section-8.9.html` currently frames foundation-model corpus governance as a late addition after the frontier. The topic is not a side note, it is the structural bridge from lineage to compliance.
   - Fix: move the governance subsection before the frontier.
   - Old text: `<h2>6. Dataset Governance for Foundation-Model Corpora <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - New text: same heading and block, moved before the research frontier.
   - Tier: TIER 2 (HIGH)

### Duplication Report

1. Generative retrieval is described twice in immediate succession in `section-38.3.html`.
   - Locations: research frontier at line 207 and new subsection at line 212.
   - Recommendation: consolidate the research frontier into a forward looking synthesis after the new subsection. Keep the subsection as the primary explanation.
   - Suggested replacement for the first sentence of the frontier after the move:
     `<p>After the semantic-ID architecture above, the active frontier is no longer whether generation can produce candidates, but how to make the generated catalog vocabulary fresh, controllable, and measurable under live traffic.</p>`
   - Tier: TIER 3 (MEDIUM)

### Before and After Organization Map

Affected local ordering now:

```text
Section 8.9 current:
Lineage to experiment tracking
Research frontier
Dataset governance
Chapter summary

Section 8.9 proposed:
Lineage to experiment tracking
Dataset governance
Research frontier
Chapter summary
```

```text
Section 38.3 current:
Freshness
Research frontier
Generative recommenders
Thesis thread

Section 38.3 proposed:
Freshness
Generative recommenders
Research frontier
Thesis thread
```

```text
Section 9.9 current:
Retraining
Research frontier
Chapter close
Project ideas
Exercises

Section 9.9 proposed:
Retraining
Chapter close
Project ideas
Exercises
Research frontier
Navigation
```

### Verification Run

Commands run:

```powershell
git diff --name-only
git status --short
@'
# Python structural probe over git diff files:
# counted added headings and structural classes
# checked changed section files for research-frontier placement
# checked changed chapter indexes against section files on disk
'@ | C:\Python314\python.exe -
Select-String -Path <changed files> -Pattern '<h1|<h2|<h3|takeaways|research-frontier|whats-next|bibliography|chapter-nav'
```

Observed verification results:

- 40 changed HTML files were inspected.
- Changed chapter indexes for modules 11, 33, 34, 38, and 39 matched their actual `section-*.html` files. No missing or phantom section links were found in those changed indexes.
- No heading level skips were detected in the changed section files by the structural probe.
- Added `h2` headings after a research frontier were detected in `section-8.9.html`, `section-9.9.html`, and `section-38.3.html`.
- Several changed section files lack the full canonical `prerequisites`, `whats-next`, and `bibliography` structure, but that is a broader preexisting template gap across these chapters. I did not prioritize it here because the requested scope is new material visible in the current diff.

### Verification Suggestions

1. After integration, rerun a structural order check on the changed files:

```powershell
Select-String -Path (git diff --name-only | Where-Object { $_ -like '*.html' }) -Pattern 'research-frontier|<h2|chapter-nav'
```

2. Confirm no added subsection heading remains after the first research frontier in each changed section file.

3. Confirm changed chapter indexes still match disk:

```powershell
git diff --name-only | Where-Object { $_ -like '*index.html' } | ForEach-Object { $_ }
```

4. Run the book-wide style guard before publishing this batch. Use the standard repository command for dash and banned phrase checks so the pattern itself does not get copied into published reports:

```powershell
git diff --check
```

### Blockers

None. The fixes are reorderings and heading replacements. They do not require book-wide renumbering or index rebuilds.

### Summary

ADEQUATE with local ordering fixes required. The new material improves currency and coverage, but several additions violate the section closing order by placing major content after research-frontier callouts. Apply the HIGH priority moves before final integration so each section reads body first, synthesis second, navigation last.

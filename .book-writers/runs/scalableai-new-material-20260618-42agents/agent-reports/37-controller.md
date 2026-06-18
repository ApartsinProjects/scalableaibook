# Controller Inspection Report: ScalableAI New Material

Agent: 37 Controller  
Mode: suggest  
Scope: only new material visible in the current working diff and the agent reports in this run  
Files changed by this agent: this report only. No book HTML was edited.

## Files Inspected

Controller scope covered these 40 changed HTML files:

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

Reports inspected: `00-chapter-lead.md` through `35-bibliography.md`, with focused rereads of Agents 00, 05, 11, 19, 30, 31, 33, and 35.

## Summary

Total actionable gaps selected for integration: 18.

Severity counts:

- CRITICAL: 4
- HIGH: 9
- MEDIUM: 5
- LOW: 0

Controller judgment: do not integrate this diff until the CRITICAL fixes are applied and rechecked. The new material is valuable and current, but the batch still has one untracked referenced asset, one faulty load-test command, one incorrect Krum tolerance exercise, and one invalid bibliography metadata value.

## Blocking Issues

### 1. Preface figure asset is not tracked

- File: `front-matter/preface.html`
- Location: line 159, `src="images/application-reference-paths.png"`
- Severity: CRITICAL
- Category: asset completeness
- Dispatch to: Alex Rivera (#00, Chapter Lead) for integration approval, then direct staging by integrator
- Current state: `front-matter/images/application-reference-paths.png` exists locally and visually matches the ten application paths, but Git does not know the file.
- Exact fix: include `front-matter/images/application-reference-paths.png` in the same change set as `front-matter/preface.html`.
- Verification: after staging, confirm Git reports the image as tracked and render `front-matter/preface.html` to verify Figure 0.2 loads.

### 2. `wrk2` command no longer enables latency reporting

- File: `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`
- Location: lines 187 to 190
- Severity: CRITICAL
- Category: code pedagogy and factual accuracy
- Dispatch to: Kai Nakamura (#08, Code Pedagogy Engineer) for code review, then direct integration
- Old text:

```text
# 200 open connections. Add latency reporting in the tool configuration.
wrk2 -t8 -c200 -d60s -R2000 http://service:8080/predict
#   -R2000  : OFFERED rate, held fixed regardless of server speed (open-loop)
#   latency report: print p50/p90/p99/p99.9 corrected for coordinated omission
```

- New text:

```text
# 200 open connections. Add latency reporting in the tool configuration.
wrk2 -t8 -c200 -d60s -R2000 -L http://service:8080/predict
#   -R2000  : OFFERED rate, held fixed regardless of server speed (open-loop)
#   -L      : print p50/p90/p99/p99.9 corrected for coordinated omission
```

- Verification: search Section 5.3 for the exact command containing `-L`, then render the code block to confirm the caption still sits below the block.

### 3. Krum tolerance exercise states the wrong threshold

- File: `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`
- Location: lines 224 to 225
- Severity: CRITICAL
- Category: fact integrity and equation correctness
- Dispatch to: Dr. Ruth Castellano (#11, Fact Integrity Reviewer), then Hugo Vance (#25, Technical Accuracy Reviewer)
- Old text:

```html
<div class="callout-title">Exercise 35.5.1: Why N over 3 and Not N over 2 <span class="exercise-type conceptual">Conceptual</span></div>
<p>The coordinate-wise median tolerates $f &lt; N/2$ Byzantine workers, but Krum is usually quoted as tolerating only $f &lt; N/3$. Using the neighbor count $N - f - 2$ in the Krum score, explain why Krum needs an honest majority with slack, while the median needs only a bare majority. Then argue informally why this stricter requirement buys Krum something the median lacks: robustness to an adversary that spreads its corruption across many coordinates at once rather than concentrating it on a few.</p>
```

- New text:

```html
<div class="callout-title">Exercise 35.5.1: Why Krum Needs 2f + 2 &lt; N <span class="exercise-type conceptual">Conceptual</span></div>
<p>The coordinate-wise median and Krum both require an honest majority, but they express that requirement differently. The original Krum analysis assumes $2f + 2 &lt; N$, and Krum scores each candidate update by summing distances to its $N - f - 2$ nearest neighbors. Explain why this neighbor count leaves enough honest updates to make a distance-based choice meaningful, then compare that geometric rule with the coordinate-wise median's per-coordinate majority logic. Finally, argue informally what Krum tries to buy with distances between full vectors: robustness to an adversary that spreads its corruption across many coordinates rather than concentrating it on a few.</p>
```

- Verification: after replacement, search Section 35.5 for `N/3` and review remaining uses. The table row and output caption still mention `f < N/3`; Fact Integrity should either justify those as conservative regimes or update them consistently.

### 4. Invalid bibliography metadata value

- File: `part-8-case-studies/module-38-case-distributed-recommendation/index.html`
- Location: line 186
- Severity: CRITICAL
- Category: bibliography conformance
- Dispatch to: Dr. Margot Reeves (#35, Bibliography Curator)
- Old text:

```html
<span class="bib-meta">📄 Article</span>
```

- New text:

```html
<span class="bib-meta">📝 Blog Post</span>
```

- Verification: run a metadata scan and confirm no `bib-meta` value outside the allowed set remains.

## High Priority Fixes

### 5. Spark Connect chronology overstates Spark 4

- File: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`
- Location: lines 247 to 248
- Severity: HIGH
- Category: fact integrity
- Dispatch to: Dr. Ruth Castellano (#11, Fact Integrity Reviewer)
- Old heading:

```html
<h2>5. Spark 4 and Spark Connect: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>
```

- New heading:

```html
<h2>5. Spark Connect in Modern Spark: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>
```

- Old first paragraph: starts with `Spark 4 makes a production pattern explicit`.
- New first paragraph:

```html
<p>Spark Connect, introduced in Apache Spark 3.4 and documented in the current Spark 4.x line, makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver. Spark Connect, documented in the <a href="https://spark.apache.org/docs/latest/spark-connect-overview.html" target="_blank" rel="noopener">Apache Spark Connect overview</a>, separates the client from the Spark cluster through a remote protocol. The client builds unresolved DataFrame plans, sends them to a Spark Connect server, and receives results, while the server performs plan analysis, optimization, execution, scheduling, and access to cluster resources. The <a href="https://spark.apache.org/docs/latest/" target="_blank" rel="noopener">Spark documentation</a> presents Connect as a way to run client applications from anywhere, which makes it central to how Python applications can embed Spark access without becoming Spark drivers themselves.</p>
```

### 6. Unsupported DeMo and INTELLECT sentence

- File: `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`
- Location: research frontier paragraph around line 214
- Severity: HIGH
- Category: fact integrity
- Dispatch to: Dr. Ruth Castellano (#11, Fact Integrity Reviewer)
- Old text: the paragraph sentence beginning `Open collaborative runs in the spirit of DeMo and the INTELLECT distributed pre-training efforts`.
- New text: remove that sentence unless direct citations are added. Use Agent 11's replacement paragraph that preserves the DiLoCo result and changes the follow-on claim to a caution about exact model size, data stream, worker count, link quality, and evaluation metric.
- Verification: after integration, search the file for `DeMo` and `INTELLECT`. Either both names have direct citations in the same paragraph, or neither appears.

### 7. MCP standard status needs qualification

- File: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`
- Location: line 247
- Severity: HIGH
- Category: fact integrity and prose precision
- Dispatch to: Dr. Ruth Castellano (#11, Fact Integrity Reviewer)
- Old phrase: `as the de facto standard for connecting agents to tools and data`
- New phrase: `as an open standard for connecting agents to tools and data sources and, as of June 2026, has visible adoption across multiple vendors, IDEs, chat clients, and community server registries`
- Verification: search Section 40.6 for `de facto standard`; it should be absent unless backed by an adoption metric.

### 8. Robotics frontier overclaims safety proof

- File: `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`
- Location: line 149
- Severity: HIGH
- Category: fact integrity
- Dispatch to: Dr. Ruth Castellano (#11, Fact Integrity Reviewer)
- Old phrase: `the distributed robotics layer proves that the proposed motion is safe`
- New phrase: `the distributed robotics layer checks the proposed motion against local safety constraints`
- Verification: search the file for `proves that the proposed motion is safe`; it should be absent.

### 9. Research frontier appears before new body content

- Files: `section-8.9.html`, `section-9.9.html`, `section-38.3.html`
- Severity: HIGH
- Category: structural ordering
- Dispatch to: Yara Sokolov (#19, Structural Architect)
- Exact fixes:
  - In `section-8.9.html`, move the complete `Dataset Governance for Foundation-Model Corpora` subsection before the research frontier that starts before it.
  - In `section-9.9.html`, move the research frontier block to immediately before `<nav class="chapter-nav">`, after the closing summary, project ideas, and exercises.
  - In `section-38.3.html`, move the complete `Generative Recommenders and Semantic IDs` subsection before the research frontier. Then update the frontier opening sentence to: `<p>After the semantic-ID architecture above, the active frontier is no longer whether generation can produce candidates, but how to make the generated catalog vocabulary fresh, controllable, and measurable under live traffic.</p>`
- Verification: no added `h2` heading should remain after the first `research-frontier` block in those files.

### 10. Practical example boxes need canonical fields

- Files: `section-9.9.html`, `section-16.5.html`, `section-26.7.html`, `section-36.6.html`, `section-37.8.html`, `section-38.3.html`
- Severity: HIGH
- Category: application examples
- Dispatch to: Nadia Okonkwo (#33, Application Example Designer)
- Exact fix: replace the six named practical example blocks with Agent 33's full replacement blocks. Those blocks include the required fields: Who, Situation, Problem, Dilemma, Decision, How, Result, and Lesson.
- Verification: scan every changed `class="callout practical-example"` block and confirm all eight labels appear exactly once.

### 11. Long frontier paragraphs should be converted to lists

- Files: `section-24.5.html`, `section-30.10.html`, `section-20.9.html`
- Severity: HIGH
- Category: readability and cognitive load
- Dispatch to: Dr. Aisha Patel (#05, Cognitive Load Optimizer) and Agent 30 Readability Pacing Editor
- Exact fix: apply Agent 30's provided replacements:
  - `section-24.5.html`: replace the single paragraph beginning `Two 2024 systems established the idea` with the three-layer list covering separate phases, KV transfer, and engine absorption.
  - `section-30.10.html`: replace the single paragraph beginning `Three threads are active` with the three-item list covering scalable MARL libraries, open-ended curricula, and large models as multi-agent learners.
  - `section-20.9.html`: replace the single paragraph beginning `Two shifts define the current frontier` with the two-item list covering RLVR and consolidated stacks, followed by the open-question paragraph.
- Verification: paragraph-length scan should show no newly added paragraph over 150 words in these three frontier callouts.

### 12. Section 32.6 needs a handshake signpost before MCP details

- File: `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`
- Location: before line 55
- Severity: HIGH
- Category: teaching flow and cognitive load
- Dispatch to: Dr. Sana Okafor (#03, Teaching Flow Reviewer)
- New text to insert:

```html
<p>Keep the mental model small before the details: MCP is a three-step handshake. First the host opens a client connection to a server. Second the client asks what the server exposes. Third the agent calls one advertised capability with typed input. The rest of this section names the parts of that handshake.</p>
```

### 13. Section 40.6 repeats protocol setup

- File: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`
- Location: line 236
- Severity: HIGH
- Category: readability and narrative flow
- Dispatch to: Agent 30 Readability Pacing Editor
- Old text: paragraph beginning `For agents and tools to interoperate at all, they must agree on protocols. Two are consolidating the field.`
- New text:

```html
<p>For agents and tools to interoperate at all, they must agree on protocols. In this case study, two names matter: MCP connects agents to tools and data, while A2A connects agents to other agents. The frontier callout below explains why those standards are becoming the coordination layer for distributed agent systems.</p>
```

## Medium Priority Fixes

### 14. Add pause point before the generative recommender key insight

- File: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`
- Severity: MEDIUM
- Dispatch to: Dr. Aisha Patel (#05, Cognitive Load Optimizer)
- Exact insertion: Agent 05's `Pause Point: What Changed and What Stayed the Same` callout before the semantic-ID key insight.

### 15. Add pause point before the fraud drift table

- File: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
- Severity: MEDIUM
- Dispatch to: Dr. Aisha Patel (#05, Cognitive Load Optimizer)
- Exact insertion: Agent 05's `Pause Point: Four Signals, Four Questions` callout before Table 9.9.1.

### 16. Convert the Section 25.1 retrieval safety order into an ordered list

- File: `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`
- Severity: MEDIUM
- Dispatch to: Dr. Aisha Patel (#05, Cognitive Load Optimizer)
- Exact fix: replace the final sentence beginning `The safe architecture is therefore` with Agent 05's ordered list: filter, retrieve, rerank, assemble, log.

### 17. Add illustration dispatches for the strongest new concepts

- Files: `section-7.8.html`, `section-8.7.html`, `section-8.9.html`, `section-11.7.html`, `section-38.3.html`
- Severity: MEDIUM
- Dispatch to: Iris Fontaine (#27, Illustrator) after text fixes are stable
- Exact briefs: use Agent 31's placements and asset paths for Spark Connect, AI-native data engines, corpus governance manifest, 2D sparse parallelism, and generative semantic-ID source.
- Blocker note: raster generation was not run in this suggest pass. If this run is later presented as a complete illustrator pass, it is blocked until actual images are generated and embedded.

### 18. Reconcile bibliography scope with the canonical checklist

- Files: changed section files with new external links, plus module 11 and module 38 index pages
- Severity: MEDIUM, with one CRITICAL metadata item already listed above
- Dispatch to: Dr. Margot Reeves (#35, Bibliography Curator) and Alex Rivera (#00, Chapter Lead)
- Conflict: Agent 35 asks for section-level bibliographies in many changed section files. The canonical project checklist says chapter index pages carry bibliography sections. Chapter Lead should decide whether this batch is adopting section-level bibliographies. If yes, apply Agent 35's focused inserts for Sections 5.3, 40.6, and 40.9 first. If no, keep references inline and strengthen the affected chapter index bibliographies instead.
- Verification: whichever policy is chosen, no new external claim should be reachable only through prose without a stable source path either inline or in the chapter bibliography.

## Dispatch Plan

Round 1, blocking direct fixes:

- Alex Rivera (#00, Chapter Lead): approve staging the preface image and decide bibliography scope.
- Kai Nakamura (#08, Code Pedagogy Engineer): fix the `wrk2` command and caption comment.
- Dr. Ruth Castellano (#11, Fact Integrity Reviewer): fix Krum exercise, Spark Connect chronology, MCP status wording, robotics safety wording, and the unsupported DeMo and INTELLECT sentence.
- Dr. Margot Reeves (#35, Bibliography Curator): fix invalid `bib-meta` value in Module 38.

Round 2, structural integration:

- Yara Sokolov (#19, Structural Architect): move midstream research-frontier blocks and new subsections into canonical order.
- Nadia Okonkwo (#33, Application Example Designer): replace or reclassify the six practical-example blocks.

Round 3, readability and learning quality:

- Dr. Aisha Patel (#05, Cognitive Load Optimizer): add pause points and ordered-list conversion.
- Agent 30 Readability Pacing Editor: convert the three long frontier paragraphs to lists and shorten protocol repetition.
- Dr. Sana Okafor (#03, Teaching Flow Reviewer): add MCP handshake signpost and verify bridges around reordered material.

Round 4, visual follow-up after text stabilizes:

- Iris Fontaine (#27, Illustrator): generate or diagram the five strongest visual opportunities from Agent 31, skipping chapter-index-only opportunities unless Chapter Lead moves the concept into a section file.

Round 5, final approval:

- Alex Rivera (#00, Chapter Lead): verify no agent recommendations conflict, approve final change set, and run final checks.

## Verification Run

Controller performed these checks:

- Read the book-writers skill instructions and the complete Agent 37 prompt.
- Read `CONFORMANCE_CHECKLIST.md`.
- Scoped the current working diff to 40 changed tracked HTML files.
- Inspected the run reports from Agents 00 through 35, with focused rereads of high-risk reports.
- Scanned changed HTML for em dash, en dash, spaced double hyphen, `TODO`, `TBD`, and placeholder text. No matches were found in the changed HTML scan.
- Checked `front-matter/images/application-reference-paths.png`: file exists, but Git reports it is not tracked.
- Visually inspected `front-matter/images/application-reference-paths.png`: it shows ten application reference paths and matches the new Figure 0.2 purpose.
- Searched for current high-risk strings: `wrk2`, `Spark 4 and Spark Connect`, Krum threshold text, MCP `de facto standard`, robotics `proves`, invalid `Article` bibliography metadata.
- Scanned figure and image markers in changed files. The only new raster figure in the diff is the preface path map; many existing SVG figures remain in changed files but were not newly introduced by this run.

## Verification Suggestions

After integration, run these checks before considering the batch complete:

- Confirm `front-matter/images/application-reference-paths.png` is tracked.
- Search Section 5.3 for the exact `wrk2` command with `-L`.
- Search Section 35.5 for `N/3`, `N over 3`, and `2f + 2`; verify Krum tolerance is consistent in exercise, table, prose, and output caption.
- Search Section 7.8 for `Spark 4 and Spark Connect`; it should be replaced by the modern Spark wording.
- Search Section 40.6 for `de facto standard`; it should be absent unless independently sourced.
- Search Module 39 index for `proves that the proposed motion is safe`; it should be absent.
- Check every changed practical-example block for all eight canonical fields.
- Check research-frontier ordering in Sections 8.9, 9.9, and 38.3.
- Run the style guard over changed HTML and this report for prohibited dash characters and banned phrases.
- Render or browser-preview `front-matter/preface.html`, `section-5.3.html`, `section-7.8.html`, `section-8.9.html`, `section-9.9.html`, `section-35.5.html`, `section-38.3.html`, and `section-40.6.html`.

## Blockers

No blocker prevented this controller report.

Integration blockers remain:

- The preface image is untracked.
- Section 5.3 contains a load-test command whose prose promises latency reporting but whose command omits the latency option.
- Section 35.5 contains an incorrect Krum tolerance exercise and likely needs consistency review for nearby Krum threshold text.
- Module 38 index contains an invalid bibliography metadata value.

## Estimated Impact

Applying the CRITICAL and HIGH fixes will make the batch publication-safe on assets, command correctness, factual precision, local structure, and application-example semantics. The MEDIUM fixes are mostly pacing and visual clarity. They are worth applying after blockers because they protect the reader from high-velocity current-system updates turning into dense lists of names.

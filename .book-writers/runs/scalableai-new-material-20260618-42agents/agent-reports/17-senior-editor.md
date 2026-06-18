## Senior Editorial Review

Scope: only new material visible in the current `git diff`. Mode: suggest. I did not edit book HTML.

### Top 10 Improvements (impact-ranked)
1. Preface section heading no longer matches the expanded use case.
   - Category: structure
   - Priority: HIGH
   - Location: `front-matter/preface.html:156`
   - Old text: `<h2>0.5 How to Use This Book in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - New text: `<h2>0.5 How to Use This Book as a Reference or in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Why it matters: the new application-path table is useful, but the current heading tells readers the section is only for instructors. The heading should advertise both reader journeys.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY

2. Figure 0.2 is not explicitly named in the surrounding prose.
   - Category: figures
   - Priority: HIGH
   - Location: `front-matter/preface.html:157`, before the figure at lines 158 to 161
   - Old text: `The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Table 0.2 names the ten common paths and points to the chapters that carry the design load. The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text.`
   - New text: `The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Figure 0.2 shows the path map at the level of parts and application families; Table 0.2 then names the exact chapters that carry the design load. The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text.`
   - Why it matters: every visual element should be introduced by nearby prose, not only by its caption.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY

3. Figure 0.2 and Table 0.2 are stacked with no prose between them.
   - Category: page composition
   - Priority: MEDIUM
   - Location: `front-matter/preface.html:161`, insert after `</figure>` and before the Table 0.2 caption
   - Old text: `</figure>`
   - New text: `</figure>
<p>Use the map first to choose a path at the level of parts, then use Table 0.2 to choose the exact chapters. The picture gives the route; the table gives the reading list.</p>`
   - Why it matters: two large non-prose elements back to back create a dense first impression in the preface. One short bridge restores visual breathing room and tells readers how to use both elements.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY

4. The new fraud section opens with an overbroad superlative.
   - Category: wording
   - Priority: MEDIUM
   - Location: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html:198`
   - Old text: `Fraud detection is the cleanest real-time example because every hard problem in this chapter appears at once: the stream is high volume, labels are delayed by chargeback investigations, the base rate is tiny, adversaries adapt, and false positives carry a visible customer cost.`
   - New text: `Fraud detection is a compact real-time example because many hard problems in this chapter appear at once: the stream is high volume, labels are delayed by chargeback investigations, the base rate is tiny, adversaries adapt, and false positives carry a visible customer cost.`
   - Why it matters: "the cleanest" invites unnecessary challenge. The replacement keeps the pedagogical force without overclaiming.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY

5. The new fraud table is followed immediately by a boxed example.
   - Category: page composition
   - Priority: MEDIUM
   - Location: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html:213`, insert after the table and before the practical example at line 214
   - Old text: `</table>`
   - New text: `</table>
<p>Read the panel from left to right: early unlabeled signals narrow the suspect segment, then delayed labels decide whether the response should be a pipeline fix, a threshold review, or a retrain.</p>`
   - Why it matters: the table is clear, but the immediate callout makes the page feel like artifacts rather than guided instruction.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY

6. Section 16.5 adds three boxes in a row at the end of the production FSDP section.
   - Category: page composition
   - Priority: HIGH
   - Location: `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html:220` and `:227`
   - Old text: `</div>
<div class="callout practical-example">`
   - New text: `</div>
<p>That makes the production question concrete: if the sharding dimensions can be composed instead of hand-wired, the next design task is choosing a repeatable recipe for the actual training run.</p>
<div class="callout practical-example">`
   - Additional old text: `</div>
<div class="callout warning">`
   - Additional new text: `</div>
<p>The same composability that makes the recipe attractive also raises the reliability bar, because more sharded state means more places where a silent error can hide before it becomes visible.</p>
<div class="callout warning">`
   - Why it matters: the added material is strong, but three consecutive boxes reduce flow and bury the main lesson. Two short prose bridges convert the sequence into a guided progression.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY

7. Section 22.5 stacks a research-frontier box, table, and key-insight box with no connective prose.
   - Category: page composition
   - Priority: HIGH
   - Location: `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html:309` and `:323`
   - Old text: `</div>
<div class="table-caption"><strong>Table 22.5.2:</strong> Modern KV-cache control is a policy stack, not one trick. Each row changes a different term in the serving budget and carries a different failure mode.</div>`
   - New text: `</div>
<p>The table below turns that research landscape into an engineering checklist. Each method changes a different budget term, so the serving team should choose a policy stack rather than search for one universal cache trick.</p>
<div class="table-caption"><strong>Table 22.5.2:</strong> Modern KV-cache control is a policy stack, not one trick. Each row changes a different term in the serving budget and carries a different failure mode.</div>`
   - Additional old text: `</table>
<div class="callout key-insight">`
   - Additional new text: `</table>
<p>The common thread across the table is that KV is now managed memory. The key question is no longer whether to cache, but which tokens deserve which memory tier under the service's own prompt mix.</p>
<div class="callout key-insight">`
   - Why it matters: this is high-value frontier material, but it currently reads as a stack of components rather than a taught sequence.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY

8. Section 38.3 now explains generative retrieval twice at similar depth.
   - Category: cross-section content overlap
   - Priority: MEDIUM
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html:209`, the research-frontier paragraph before the new dedicated subsection
   - Old text: `The dot-product two-tower retriever has dominated for a decade, but a fast-moving line is replacing the ANN index itself. Generative retrieval methods such as the TIGER line (Rajput et al., 2023) and its 2024 to 2025 descendants assign each item a short semantic ID and train a sequence model to <em>generate</em> the IDs of the items to retrieve, turning candidate generation into autoregressive decoding rather than nearest-neighbor lookup, which sidesteps the freshness and index-maintenance costs of a frozen ANN structure. In parallel, work on scaling laws for recommendation retrieval (Meta's generative-recommender and HSTU-style architectures, 2024) shows two-tower-style retrieval benefiting from transformer-scale item encoders, pushing the embedding-computation cost back onto the kind of distributed training Part IV covers. Both threads keep the distributed-read structure of this section, scatter the query, gather candidates, while changing what each shard computes; they are an active reframing of the funnel's widest stage.`
   - New text: `The dot-product two-tower retriever has dominated for a decade, but the frontier is widening beyond ANN lookup. Generative retrieval and HSTU-style recommenders now treat candidate generation as a learned sequence-modeling problem, and Section 5 below gives the full mechanism. For this section's retrieval funnel, the key point is narrower: the distributed-read shape remains, but the work each shard performs may change from nearest-neighbor search to decoding, code resolution, or transformer-scale item encoding.`
   - Why it matters: the new dedicated subsection is the right canonical home. The earlier frontier box should point forward instead of teaching the same concept twice.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY

9. Several newly added frontier callouts use date-range titles that will age quickly.
   - Category: market quality
   - Priority: LOW
   - Locations: examples include `section-16.5.html:218`, `section-22.5.html:307`, `module-39-case-multi-agent-robotics/index.html:149`
   - Old text: `Research Frontier: Per-Parameter Sharding and Composable Parallelism (2024 to 2026)`
   - New text: `Research Frontier: Per-Parameter Sharding and Composable Parallelism`
   - Why it matters: the prose can carry dates where needed. Repeated year ranges in titles make the book feel edition-stamped and brittle.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW

10. The preface's new application table uses bare chapter numbers in the second column.
   - Category: clarity
   - Priority: LOW
   - Location: `front-matter/preface.html:165` through `:178`
   - Old text: `<td><a href="../part-5-distributed-inference/module-25-distributed-retrieval-vector-search/index.html">25</a>, <a href="../part-8-case-studies/module-36-case-web-scale-text-rag/index.html">36</a>, <a href="../part-8-case-studies/module-40-case-distributed-llm-agentic/index.html">40</a></td>`
   - New text: `<td><a href="../part-5-distributed-inference/module-25-distributed-retrieval-vector-search/index.html">Chapter 25</a>, <a href="../part-8-case-studies/module-36-case-web-scale-text-rag/index.html">Chapter 36</a>, <a href="../part-8-case-studies/module-40-case-distributed-llm-agentic/index.html">Chapter 40</a></td>`
   - Why it matters: bare numbers scan compactly, but explicit chapter labels are clearer for assistive technology and for readers who skim the table out of context. Apply the same pattern across all rows if accepted.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW

### Duplicate Content Found
1. Generative retrieval and semantic IDs: appears in Section 38.3 as a research-frontier callout and again as a new dedicated subsection.
   - Type: concept re-explanation
   - Action: keep the dedicated subsection at `section-38.3.html:212` as canonical; shorten the earlier research-frontier paragraph to a forward pointer using the replacement text in issue 8.
   - Severity: MEDIUM, about 200 to 500 words of overlapping explanation.

### Orphaned Visual Elements (not referenced in text)
1. `front-matter/preface.html:158` to `:161`: Figure 0.2 is introduced only by its caption.
   - Draft reference sentence: `Figure 0.2 shows the path map at the level of parts and application families; Table 0.2 then names the exact chapters that carry the design load.`
   - Insert at: replace the paragraph at `front-matter/preface.html:157` using issue 2.

### Chapter Scorecard
- Wording: 4. Mostly strong and current, with a few overbroad claims and date-heavy titles.
- Structure: 4. New material is logically placed overall, but the preface heading and Section 38.3 overlap need cleanup.
- Page Composition: 3. The main weakness is stacked visual and boxed elements in the preface, Section 16.5, Section 22.5, and Section 9.9.
- Taste & Tone: 4. Tone is professional and not forced. No new humor overload found in the diff.
- Figures: 4. The new image asset exists and has alt text and caption, but needs prose reference.
- Exercises: 4. The new fraud project in Section 9.9 is meaningful and applied. No broad exercise redesign needed in this scoped pass.
- Pedagogy: 4. Additions generally improve reader capability by turning frontier topics into system decisions.
- Clarity: 4. Most additions are clear. The preface table would benefit from more explicit chapter labels.
- Market Quality: 4. The material is modern and competitive, but repeated date ranges in titles should be toned down.
- Overall: 4. Needs revision, but the new material is directionally strong and publication-worthy after page-flow fixes.

### Files Inspected
- `front-matter/preface.html`
- `front-matter/images/application-reference-paths.png`
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

### Files Changed
- This report only: `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-reports/17-senior-editor.md`
- No book HTML edited.

### Verification Run
- Read prompt file: `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-prompts/17-senior-editor.prompt.md`
- Read book-writers skill contract: `E:\Projects\claude-skills\book-skills\SKILL.md`
- Ran `git diff` with the name-only and stat options to determine scoped files.
- Ran added-line scans for literal em dash, en dash, double dash, and banned phrases. No new literal matches found.
- Ran added-link and source resolution over 185 newly added `href` and `src` attributes. No missing local targets found.
- Verified `front-matter/images/application-reference-paths.png` exists.
- Counted new visual and boxed elements per diff file to identify stacked page-composition risks.

### Verification Suggestions
- After applying accepted fixes, rerun an added-line style scan for em dash, en dash, spaced double hyphen, and banned phrases.
- Render `front-matter/preface.html`, `section-9.9.html`, `section-16.5.html`, `section-22.5.html`, and `section-38.3.html` in a browser to inspect vertical spacing and table readability.
- Run the project link checker or equivalent HTML validation over changed files, with special attention to the new external frontier citations.
- Ask Fact Integrity Reviewer 11 to verify time-sensitive claims in MLPerf Inference v5.1, Spark 4, PyTorch FSDP2, KV-cache methods, MCP/A2A adoption, MAST, GraphRAG, federated foundation models, and recommendation frontier material.

### Blockers
- None. The review was scoped to the current diff and did not require editing book HTML.

### Publication Readiness
NEEDS REVISION

### Summary
The new material is substantially valuable: it updates the book with current systems topics, gives application-oriented reading paths, and adds practical frontier context. The main editorial problem is composition, not substance: several additions stack figures, tables, and callouts without enough prose, and Section 38.3 repeats a concept now covered by a dedicated subsection. Apply the high-priority flow and reference fixes before considering this batch publication-ready.

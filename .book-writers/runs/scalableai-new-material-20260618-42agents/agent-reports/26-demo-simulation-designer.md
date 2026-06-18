## Demo and Simulation Report

Agent: 26-demo-simulation-designer
Mode: suggest
Scope: only new material visible in the current git diff

### Files Inspected

Inspected the 40 HTML files currently visible in the working diff:

1. `front-matter/preface.html`
2. `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`
3. `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`
4. `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`
5. `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`
6. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`
7. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
8. `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`
9. `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`
10. `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`
11. `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`
12. `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`
13. `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`
14. `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`
15. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`
16. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`
17. `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`
18. `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`
19. `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html`
20. `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html`
21. `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`
22. `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`
23. `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html`
24. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`
25. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html`
26. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`
27. `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`
28. `part-7-infrastructure/module-34-edge-fog-on-device/index.html`
29. `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`
30. `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html`
31. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`
32. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`
33. `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`
34. `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`
35. `part-8-case-studies/module-38-case-distributed-recommendation/index.html`
36. `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`
37. `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`
38. `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`
39. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`
40. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`

### Idempotency Scan

No explicit interactive markers were found in the changed HTML: `class="demo"`, `class="interactive"`, `class="experiment"`, `class="slider"`, "Try it yourself", "Try It Yourself", "Run This Now", or "Experiment:".

The changed material is strong but mostly static. Recommend adding 6 focused demos, staying within the 4 to 8 target. Do not add broad demo coverage to every touched file.

### High-Impact Demo Opportunities

1. LLM serving SLO load lab in `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`
   - Demo type: SLIDER
   - Location: insert after the warning titled `Construct-Matched Evaluation: Co-Compute the Compared Numbers`, currently around line 165.
   - Anchor old text: `<div class="callout-title">Construct-Matched Evaluation: Co-Compute the Compared Numbers</div>`
   - What it shows: the reader adjusts offered load, output length, and SLO bounds, then watches throughput, goodput, TTFT, and TPOT diverge.
   - Why impactful: the new MLPerf and construct-matched evaluation material is about co-computed numbers. A slider makes invalid cross-config comparison feel wrong because the same run visibly produces all metrics together.
   - Complexity to implement: LOW
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)
   - Ready-to-apply draft:

```html
<div class="callout lab">
<div class="callout-title">Run This Now: LLM Serving SLO Load Lab</div>
<p>Turn the offered-load slider from 100 to 560 requests per second while keeping the same prompt trace, output-length trace, model, scheduler, and hardware pool. Record TTFT, TPOT, throughput, goodput, and SLO pass rate in one table. The useful observation is not the peak throughput number; it is the point where throughput still rises while goodput and tail latency fail the interactive-service contract.</p>
<p><strong>Controls:</strong> offered load from 100 to 560 requests per second, mean output length from 32 to 512 tokens, TTFT SLO from 100 to 1000 milliseconds, and TPOT SLO from 20 to 150 milliseconds.</p>
<p><strong>Display:</strong> a two-line chart for throughput and goodput, plus a compact table with p50, p95, p99, TTFT pass rate, and TPOT pass rate for the same simulated request trace.</p>
</div>
```

2. Spark Connect boundary explorer in `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`
   - Demo type: VISUAL
   - Location: insert after `Code 7.8.4`.
   - Anchor old text: `<div class="code-caption"><strong>Code 7.8.4:</strong> A Spark Connect client that builds a feature table remotely.`
   - What it shows: toggling "client process", "Connect server", "catalog", "optimizer", and "executors" highlights which component owns each responsibility.
   - Why impactful: the new section stresses that Spark Connect moves the driver boundary but not the cost model. An interactive boundary map prevents readers from treating Connect as a performance shortcut.
   - Complexity to implement: MEDIUM
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)
   - Ready-to-apply draft:

```html
<div class="callout lab">
<div class="callout-title">Simulation: Where Does This Spark Connect Operation Run?</div>
<p>Use a five-step boundary explorer for the feature-table example: client builds an unresolved plan, Connect server analyzes the plan, catalog resolves tables and permissions, optimizer rewrites the plan, and executors perform the shuffle and write. Each click should move one highlighted operation across the diagram. The learning goal is to separate deployment isolation from data movement cost: the Python client moved out of the driver process, but the shuffle, scan, and write still happen on the cluster.</p>
</div>
```

3. AI data engine routing lab in `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`
   - Demo type: A-B COMPARE
   - Location: insert after the library shortcut titled `Pick the Engine That Matches the Expensive Operation`.
   - Anchor old text: `<div class="callout-title">Library Shortcut: Pick the Engine That Matches the Expensive Operation</div>`
   - What it shows: the same workload is classified as SQL-heavy, Python-heavy, media-heavy, or vector-heavy, then routed to Spark, Ray Data, Daft, or Lance with a visible cost explanation.
   - Why impactful: the added material names several engines. A compare lab teaches that engine choice follows the bottleneck, not tool popularity.
   - Complexity to implement: LOW
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)
   - Ready-to-apply draft:

```html
<div class="callout lab">
<div class="callout-title">Experiment: Route the Pipeline to the Right Data Engine</div>
<p>Choose the dominant expensive operation for a pipeline: SQL join, Python media decode, GPU batch inference, vector search, or metadata filtering. The demo should show the recommended engine, the reason, and the expected bottleneck. Use the same sample pipeline description for every choice so the reader isolates one variable: which operation dominates wall-clock time.</p>
<p><strong>Expected outcomes:</strong> Spark wins for SQL joins and lakehouse scans; Ray Data or Daft wins when Python functions, media decode, or batch inference dominate; Lance becomes attractive when vector storage and multimodal retrieval are first-class requirements.</p>
</div>
```

4. Streaming fraud drift panel in `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
   - Demo type: SLIDER
   - Location: insert after `Table 9.9.1`.
   - Anchor old text: `<div class="table-caption"><strong>Table 9.9.1:</strong> Signals for a drift-aware online fraud detector.`
   - What it shows: the reader changes fraud base rate, label delay, threshold, and adversary shift, then watches feature PSI, score drift, block rate, delayed fraud rate, and reviewer disagreement move at different times.
   - Why impactful: static prose can say that labels arrive late, but a time slider shows why unlabeled drift signals are early warnings while delayed labels are confirmation.
   - Complexity to implement: MEDIUM
   - Priority: HIGH
   - Tier: TIER 1 (BLOCKING)
   - Ready-to-apply draft:

```html
<div class="callout lab">
<div class="callout-title">Run This Now: Fraud Drift Arrives Before Labels</div>
<p>Simulate 20 streaming windows with four controls: fraud base rate, label delay in windows, decision threshold, and adversary shift size. Plot feature PSI, score distribution drift, block rate, and delayed confirmed fraud rate on the same timeline. The target insight is that unlabeled drift signals should trigger investigation, while delayed labels decide retraining and release.</p>
<p><strong>Setup needed:</strong> a lightweight browser simulation or a notebook using only Python standard library, NumPy, and Matplotlib. No external dataset is required because the point is timing, not fraud-domain realism.</p>
</div>
```

5. Semantic-ID candidate-source sandbox in `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`
   - Demo type: PROGRESSIVE
   - Location: insert after the callout titled `Key Insight: Semantic IDs Move Catalog Structure Into the Vocabulary`.
   - Anchor old text: `<div class="callout-title">Key Insight: Semantic IDs Move Catalog Structure Into the Vocabulary</div>`
   - What it shows: a toy catalog of item embeddings is clustered into short semantic codes, a recent user sequence predicts code beams, and the candidate mixer unions generated candidates with ANN and recency candidates.
   - Why impactful: the new section introduces a conceptual jump from vector retrieval to sequence generation. A toy progressive build makes the serving contract concrete without requiring a large model.
   - Complexity to implement: MEDIUM
   - Priority: HIGH
   - Tier: TIER 1 (BLOCKING)
   - Ready-to-apply draft:

```html
<div class="callout lab">
<div class="callout-title">Progressive Demo: From Item Embeddings to Semantic-ID Candidates</div>
<p>Build the generative-recommendation path in three visible steps. First, cluster 20 toy item embeddings into two-level semantic IDs. Second, convert a user's recent item history into a short code sequence. Third, let a tiny transition table predict the next two code beams and resolve them back to item IDs. Compare the generated candidates with ANN and recency candidates before the shared ranker scores the union.</p>
<p><strong>Learning goal:</strong> show that semantic IDs do not replace the production funnel. They add a sequence-aware candidate source whose contribution can be isolated in the same online experiment contract.</p>
</div>
```

6. GraphRAG versus vector retrieval route selector in `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`
   - Demo type: A-B COMPARE
   - Location: insert after the callout titled `Production Pattern: GraphRAG for Global and Relational Questions`.
   - Anchor old text: `<div class="callout-title">Production Pattern: GraphRAG for Global and Relational Questions</div>`
   - What it shows: sample queries are routed to vector retrieval, graph retrieval, or fused retrieval. The display shows evidence shape, number of hops, permission checks, and context budget consumed.
   - Why impactful: the new GraphRAG material contrasts local passage questions with global or relational questions. A route selector lets the reader feel which query shapes justify another distributed retrieval surface.
   - Complexity to implement: LOW
   - Priority: MEDIUM
   - Tier: TIER 2 (HIGH)
   - Ready-to-apply draft:

```html
<div class="callout lab">
<div class="callout-title">Experiment: Route the Query to Vector, Graph, or Both</div>
<p>Present five fixed enterprise questions and ask the reader to choose vector retrieval, graph retrieval, or fused retrieval. After each choice, reveal the expected evidence shape: passage-level fact, relationship path, community summary, or mixed evidence pack. Include the cost side by side: index touched, graph hops, reranker inputs, permission checks, and context tokens consumed.</p>
<p><strong>Learning goal:</strong> make GraphRAG a routing decision rather than a fashionable replacement for vector search.</p>
</div>
```

### "Run This Now" Moments

1. `section-5.3.html`: LLM SLO load simulator
   - Reveals: throughput can keep rising after the user-visible service has already failed goodput, TTFT, or TPOT.
   - Setup needed: browser JavaScript or a notebook with Python standard library plus NumPy.

2. `section-9.9.html`: fraud drift timeline
   - Reveals: feature PSI and score drift move before delayed labels, while label-confirmed fraud decides retraining.
   - Setup needed: no external data; synthetic stream is enough.

3. `section-38.3.html`: semantic-ID toy catalog
   - Reveals: semantic IDs move catalog structure into the token space, then the production ranker still scores the mixed candidate pool.
   - Setup needed: NumPy only, or browser JavaScript with fixed toy vectors.

### Existing Demos to Enhance

No existing explicit demos were found in the changed material. The current diff adds valuable research frontier, practical example, warning, table, and code material, but it does not add interactive or runnable exploration markers.

### Simulation Specs

1. LLM serving SLO lab
   - Controls: offered load, mean output tokens, TTFT SLO, TPOT SLO, server capacity, batching efficiency.
   - Display: throughput versus goodput line chart, latency percentile table, pass or fail badges for TTFT and TPOT.
   - Learning goal: construct-matched evaluation means all compared metrics come from one run.

2. Spark Connect boundary map
   - Controls: click each operation in the example code, such as `read.table`, `where`, `groupBy`, `agg`, and `write`.
   - Display: operation ownership moves among client, Connect server, catalog, optimizer, executors, and storage.
   - Learning goal: Spark Connect changes the control-plane boundary, not the shuffle cost.

3. Streaming fraud drift panel
   - Controls: adversary shift size, label delay, threshold, review capacity.
   - Display: timeline with early unlabeled drift metrics and late confirmed label metrics.
   - Learning goal: online AI systems need investigation signals before they have final labels.

4. Semantic-ID candidate-source sandbox
   - Controls: catalog cluster count, beam width, source mix weights.
   - Display: item embeddings, generated semantic code beams, resolved candidate IDs, mixed candidate pool.
   - Learning goal: a generative recommender can be introduced as one candidate source under the existing ranker.

5. GraphRAG route selector
   - Controls: query type and permission strictness.
   - Display: vector-only, graph-only, and fused retrieval paths with evidence shape and cost counters.
   - Learning goal: query shape should drive retrieval architecture.

6. Protocol trust-boundary trace in `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`
   - Controls: tool schema validity, tenant authorization, peer-agent card, timeout, and expected artifact contract.
   - Display: a trace that either proceeds through MCP or A2A delegation or fails at the relevant trust boundary.
   - Learning goal: interoperability boundaries are enforcement points for identity, budget, logging, and rollback.

### Prioritized Fixes

1. Add the streaming fraud drift panel.
   - Priority: HIGH
   - Tier: TIER 1 (BLOCKING)
   - Reason: the new fraud section is the clearest case where time dynamics teach more than a table.
   - Action: apply the draft under opportunity 4.
   - Potential conflicts: coordinate with code pedagogy so the final version is either in-browser or notebook-based, not both.

2. Add the semantic-ID candidate-source sandbox.
   - Priority: HIGH
   - Tier: TIER 1 (BLOCKING)
   - Reason: semantic IDs are a new concept in the diff and need a tangible build-up demo.
   - Action: apply the draft under opportunity 5.
   - Potential conflicts: coordinate with visual learning if an embedding plot is also proposed.

3. Add the LLM serving SLO load lab.
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)
   - Reason: it reinforces the global construct-matched evaluation rule with a live metric panel.
   - Action: apply the draft under opportunity 1.
   - Potential conflicts: coordinate with Chapter 24 if it already owns a fuller serving simulator.

4. Add the Spark Connect boundary explorer.
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)
   - Reason: it prevents a common misconception that a new client protocol changes data-movement cost.
   - Action: apply the draft under opportunity 2.
   - Potential conflicts: none expected.

5. Add the GraphRAG route selector.
   - Priority: MEDIUM
   - Tier: TIER 2 (HIGH)
   - Reason: it helps readers distinguish local retrieval questions from global and relational questions.
   - Action: apply the draft under opportunity 6.
   - Potential conflicts: coordinate with Chapter 40 because GraphRAG also appears in the agentic RAG case study.

6. Add the AI data engine routing lab.
   - Priority: MEDIUM
   - Tier: TIER 2 (HIGH)
   - Reason: the new Ray Data, Daft, and Lance material is a tool-choice lesson, and an A-B compare makes the choice operational.
   - Action: apply the draft under opportunity 3.
   - Potential conflicts: none expected.

### Verification Suggestions

After integration, verify:

1. Search changed HTML for explicit demo markers and confirm the count is between 4 and 8.
2. Confirm every inserted demo has a visible learning goal, controls, display behavior, and feasibility note.
3. Run an HTML parser over edited files to catch unclosed tags in inserted callouts.
4. Run the book style scan for em dashes, double hyphens, and banned phrases.
5. Open the edited pages in a browser and test mobile width. Slider labels, tables, and controls must not overflow.
6. For notebook-style demos, run each snippet with local Python and no network access.
7. Confirm no demo requires proprietary software, paid APIs, GPUs, or external datasets.

### Files Changed

Only this report was created:

`E:\Projects\Books\ScalableAI\.book-writers\runs\scalableai-new-material-20260618-42agents\agent-reports\26-demo-simulation-designer.md`

No book HTML was edited.

### Verification Run

Ran:

1. Working diff file list inspection.
2. Diff stat inspection.
3. Changed-file marker scan for demo, interactive, experiment, slider, Try it yourself, Try It Yourself, Run This Now, and Experiment.
4. Anchor scan for the main new material headings and callout titles.

### Blockers

No blockers. The only limitation is intentional: this agent is in suggest mode, and the user explicitly instructed not to edit book HTML.

### Summary

NEEDS MORE INTERACTIVITY. The new material adds valuable frontier updates and production rules, but the changed sections are mostly static. The highest-value improvements are six lightweight demos that make timing, routing, boundary placement, and evaluation contracts visible without requiring paid APIs, GPUs, or external datasets.

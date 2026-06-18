## Visual Learning Report

Agent: 09 Visual Learning Designer
Mode: suggest
Scope: new material visible in current `git diff`

### Files Inspected

Tracked HTML files with visible diff:

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

New raster asset inspected:

1. `front-matter/images/application-reference-paths.png`

### Top Issues

1. The new preface figure is not introduced by prose before it appears.
   - Location: `front-matter/preface.html`, line 157, immediately before `<figure class="illustration">`
   - Old text: "The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Table 0.2 names the ten common paths and points to the chapters that carry the design load. The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text."
   - New text: "The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Figure 0.2 gives the map at a glance, and Table 0.2 names the ten common paths and points to the chapters that carry the design load. The pairing is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text."
   - Why it matters: The image is good, but readers should be told what to look for before they encounter it.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Low. This only updates figure integration prose.

2. The streaming fraud detector addition describes a feedback loop but gives only a table.
   - Location: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`, after line 199 and before Table 9.9.1
   - Old text: "The drift-aware architecture is a loop. A Kafka-style log carries transaction events. A streaming engine computes windowed features such as spend in five minutes, number of merchants in one hour, device changes in a day, and graph-neighborhood risk. An online feature store serves those values to the scoring service. The drift monitor compares the current score and feature distributions against a seasonally matched reference, then reconciles its early alarms with delayed labels once chargebacks or manual-review outcomes land. This is why fraud papers keep returning to drift: the classic credit-card fraud study on delayed labels by Dal Pozzolo et al. frames concept drift and label delay as central to realistic fraud detection, and newer surveys such as <a href=\"https://www.mdpi.com/1999-4893/19/5/354\" target=\"_blank\" rel=\"noopener\">Algorithms 2026, A Survey of Machine Learning and Deep Learning for Financial Fraud Detection</a> still identify adaptive, drift-aware learning as a core challenge.</p>"
   - New text: "The drift-aware architecture is a loop, as Figure 9.9.2 should make visible before Table 9.9.1 lists the monitoring signals. A Kafka-style log carries transaction events. A streaming engine computes windowed features such as spend in five minutes, number of merchants in one hour, device changes in a day, and graph-neighborhood risk. An online feature store serves those values to the scoring service. The drift monitor compares the current score and feature distributions against a seasonally matched reference, then reconciles its early alarms with delayed labels once chargebacks or manual-review outcomes land. This is why fraud papers keep returning to drift: the classic credit-card fraud study on delayed labels by Dal Pozzolo et al. frames concept drift and label delay as central to realistic fraud detection, and newer surveys such as <a href=\"https://www.mdpi.com/1999-4893/19/5/354\" target=\"_blank\" rel=\"noopener\">Algorithms 2026, A Survey of Machine Learning and Deep Learning for Financial Fraud Detection</a> still identify adaptive, drift-aware learning as a core challenge.</p>"
   - Full draft visual: Add a polished SVG process loop with six nodes: transaction log, stream feature computation, online feature store, scoring service, drift monitor, delayed-label reconciliation. Use blue for online path, orange for delayed labels, purple for alert and retrain trigger. Caption: "Figure 9.9.2: Drift-aware fraud detection is a closed loop, not a single classifier call. Fast stream features feed the online scorer, while delayed chargeback labels return later to confirm drift alarms and trigger retraining."
   - Why it matters: The table is useful for signal definitions, but the causal loop is the core visual concept.
   - Tier: TIER 1 (BLOCKING)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Coordinate with Agent 08 if a runnable demo is added later.

3. The GraphRAG addition needs a two-lane offline and online pipeline visual.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`, after line 221
   - Old text: "In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards. The offline pipeline now has an entity extraction job, a graph build job, a community summarization job, and a synchronization job that keeps graph nodes linked to chunk identifiers and access-control metadata. The online path becomes route, graph or vector or both, merge evidence, rerank, assemble context. Use graph retrieval when the query asks about relationships, themes, neighborhoods, or multi-hop joins; use vector retrieval when the query asks for a specific passage-level fact; fuse them when the query needs both."
   - New text: "In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards. Figure 36.6.2 should show why this is two systems coupled by identifiers: an offline graph-build lane and an online query-routing lane. The offline pipeline now has an entity extraction job, a graph build job, a community summarization job, and a synchronization job that keeps graph nodes linked to chunk identifiers and access-control metadata. The online path becomes route, graph or vector or both, merge evidence, rerank, assemble context. Use graph retrieval when the query asks about relationships, themes, neighborhoods, or multi-hop joins; use vector retrieval when the query asks for a specific passage-level fact; fuse them when the query needs both."
   - Full draft visual: Add a two-lane SVG. Top lane: documents to chunks to entity extraction to relation graph to community summaries. Bottom lane: query router to vector shards, graph neighborhoods, evidence merge, reranker, final context. Draw a dashed synchronization line from graph nodes to chunk identifiers and ACL metadata. Caption: "Figure 36.6.2: GraphRAG adds a graph surface beside vector shards. Offline extraction builds entities, relations, and community summaries, while online routing decides whether the query needs vectors, graph neighborhoods, or both."
   - Why it matters: The prose describes two coupled distributed surfaces, which is hard to hold in working memory without a diagram.
   - Tier: TIER 1 (BLOCKING)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Agent 36 Illustrator may prefer a raster concept image, but SVG is the right method for this architecture.

4. The semantic-ID recommender addition needs a before and after transformation diagram.
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, after line 215 and before the key-insight callout
   - Old text: "HSTU, the Hierarchical Sequential Transduction Unit in Meta's <a href=\"https://arxiv.org/abs/2402.17152\" target=\"_blank\" rel=\"noopener\">Actions Speak Louder than Words</a>, pushes this idea into industrial scale. The paper reports HSTU-based generative recommenders with trillion-parameter-scale sequential models, online A/B lift, and an explicit scaling-law result for recommendation. Its open <a href=\"https://github.com/meta-recsys/generative-recommenders\" target=\"_blank\" rel=\"noopener\">generative-recommenders repository</a> exposes the model family and configurations. The systems lesson for this chapter is not that the retrieve-then-rank funnel disappears overnight. It is that the widest stage can become a generation stage whose output is a structured item code rather than a vector-nearest-neighbor list, and that the model itself starts to inherit the training, serving, and scaling-law concerns of large sequence models from <a href=\"../../part-4-parallel-deep-learning/module-19-training-foundation-models/index.html\">Chapter 19</a> and <a href=\"../../part-5-distributed-inference/module-24-distributed-llm-serving/index.html\">Chapter 24</a>.</p>"
   - New text: "HSTU, the Hierarchical Sequential Transduction Unit in Meta's <a href=\"https://arxiv.org/abs/2402.17152\" target=\"_blank\" rel=\"noopener\">Actions Speak Louder than Words</a>, pushes this idea into industrial scale. The paper reports HSTU-based generative recommenders with trillion-parameter-scale sequential models, online A/B lift, and an explicit scaling-law result for recommendation. Its open <a href=\"https://github.com/meta-recsys/generative-recommenders\" target=\"_blank\" rel=\"noopener\">generative-recommenders repository</a> exposes the model family and configurations. Figure 38.3.2 should make the serving change explicit: the widest candidate-generation stage becomes sequence generation over semantic-ID tokens. The systems lesson for this chapter is not that the retrieve-then-rank funnel disappears overnight. It is that the widest stage can become a generation stage whose output is a structured item code rather than a vector-nearest-neighbor list, and that the model itself starts to inherit the training, serving, and scaling-law concerns of large sequence models from <a href=\"../../part-4-parallel-deep-learning/module-19-training-foundation-models/index.html\">Chapter 19</a> and <a href=\"../../part-5-distributed-inference/module-24-distributed-llm-serving/index.html\">Chapter 24</a>.</p>"
   - Full draft visual: Add a before and after SVG. Left side: user history to ANN retrieval to candidate list to ranker. Right side: user history to sequence model to semantic-ID token path to catalog lookup to ranker. Show the semantic ID as four nested tokens: genre, creator, style, item. Caption: "Figure 38.3.2: Generative recommendation changes the widest retrieval stage from nearest-neighbor lookup to token generation. The generated semantic ID points back into the catalog, then the existing ranking and experiment layers can stay in place."
   - Why it matters: Semantic IDs are spatial and hierarchical. A diagram can prevent readers from thinking this is just another arbitrary item ID.
   - Tier: TIER 1 (BLOCKING)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Low. This complements the existing key-insight and practical-example callouts.

5. The AI-native data engine addition needs a decision map rather than only prose and code.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, after line 189 and before the code block
   - Old text: "Ray Data is built for scalable AI data processing on Ray, with streaming execution for preprocessing, batch inference, and ML training input pipelines. Daft targets multimodal DataFrames directly, reading images, audio, video, PDFs, JSON, and structured data while scheduling heavy Python transformations across local threads or a Ray cluster. Lance pushes the storage format in the same direction: a columnar layout designed for vectors, images, videos, audio, text, fast random access, versioning, and vector search. The choice is not \"Spark or these tools\"; the production pattern is to use Spark for wide relational joins and governed tables, then reach for Ray Data, Daft, or Lance when the bottleneck is multimodal object processing, GPU batch inference, or random access to vector-rich examples."
   - New text: "Ray Data is built for scalable AI data processing on Ray, with streaming execution for preprocessing, batch inference, and ML training input pipelines. Daft targets multimodal DataFrames directly, reading images, audio, video, PDFs, JSON, and structured data while scheduling heavy Python transformations across local threads or a Ray cluster. Lance pushes the storage format in the same direction: a columnar layout designed for vectors, images, videos, audio, text, fast random access, versioning, and vector search. Figure 8.7.2 should summarize the decision rule: use Spark for governed relational reshaping, Ray Data or Daft for Python-heavy multimodal processing, and Lance when vector-rich examples need fast random access. The choice is not \"Spark or these tools\"; the production pattern is to use Spark for wide relational joins and governed tables, then reach for Ray Data, Daft, or Lance when the bottleneck is multimodal object processing, GPU batch inference, or random access to vector-rich examples."
   - Full draft visual: Add an SVG decision map with three columns: relational lakehouse work, multimodal Python or GPU work, vector-rich random-access storage. Place Spark under the first column, Ray Data and Daft under the second, Lance under the third. Add arrows showing common composition: Spark creates governed metadata and joins, Ray Data or Daft computes embeddings, Lance stores vectors and media records. Caption: "Figure 8.7.2: AI-native data pipelines compose engines instead of replacing one with another. Spark owns governed relational reshaping, Ray Data and Daft own Python-heavy multimodal processing, and Lance owns vector-rich random-access storage."
   - Why it matters: The reader needs a tool-selection visual to convert a list of product names into an engineering decision.
   - Tier: TIER 2 (HIGH)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Low.

6. The MAST evaluation callout should get a failure triage flow if the surrounding section receives another visual pass.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`, after line 214
   - Old text: "For this case study, the regression gate should not only score task success; it should label why failed traces failed. The MAST failure taxonomy gives the label set: specification and system-design failures, inter-agent misalignment, and verification or termination failures. Add a failure-labeling pass to the CI report so a drop in quality becomes a work queue. \"Specification\" failures go to prompt, role, and tool-schema owners. \"Misalignment\" failures go to orchestration and shared-memory owners. \"Verification\" failures go to evidence checking, termination predicates, and judge calibration. This is the same production discipline as error budgets in Chapter 35: aggregate failure rates matter, but the repair path starts only after failures are typed."
   - New text: "For this case study, the regression gate should not only score task success; it should label why failed traces failed. The MAST failure taxonomy gives the label set: specification and system-design failures, inter-agent misalignment, and verification or termination failures. Add a failure-labeling pass to the CI report so a drop in quality becomes a work queue, as a compact triage diagram should show. \"Specification\" failures go to prompt, role, and tool-schema owners. \"Misalignment\" failures go to orchestration and shared-memory owners. \"Verification\" failures go to evidence checking, termination predicates, and judge calibration. This is the same production discipline as error budgets in Chapter 35: aggregate failure rates matter, but the repair path starts only after failures are typed."
   - Full draft visual: Add a small SVG funnel: failed trace to MAST labeler to three routed work queues, specification and design, inter-agent misalignment, verification or termination. Caption: "Figure 40.9.2: MAST turns a failed agent trace into a routed defect. Each failure label maps to a different owner, which keeps evaluation from becoming one undifferentiated quality score."
   - Why it matters: The callout is actionable, and a triage flow would make the action path immediately scannable.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Low.

### Missing Visuals

1. Section 9.9: Drift-aware fraud detection feedback loop.
   - Type: process flowchart
   - Generation method: SVG
   - Description: Show transaction events, streaming features, online feature store, scorer, drift monitor, delayed labels, and retraining trigger as one loop.
   - Priority: TIER 1

2. Section 36.6: GraphRAG offline and online split.
   - Type: architecture diagram
   - Generation method: SVG
   - Description: Show document chunking, entity extraction, graph build, community summaries, query routing, vector retrieval, graph retrieval, evidence merge, rerank, and context assembly.
   - Priority: TIER 1

3. Section 38.3: Semantic-ID generative recommendation.
   - Type: before and after transformation diagram
   - Generation method: SVG
   - Description: Compare retrieve-then-rank with generate semantic ID, catalog lookup, then rank.
   - Priority: TIER 1

4. Section 8.7: Spark, Ray Data, Daft, and Lance decision map.
   - Type: decision infographic
   - Generation method: SVG
   - Description: Map each tool to the bottleneck it handles and show how the engines compose in one pipeline.
   - Priority: TIER 2

5. Section 24.5: Prefill and decode pool sizing from token mix.
   - Type: quantitative allocation graphic
   - Generation method: Python or SVG
   - Description: Show two request mixes, short prompt with long answer and long prompt with short answer, mapped to decode-heavy and prefill-heavy GPU pools.
   - Priority: TIER 2

6. Section 40.9: MAST failure taxonomy to owner routing.
   - Type: triage flowchart
   - Generation method: SVG
   - Description: Show failed traces labeled into specification, misalignment, and verification classes, then routed to owners.
   - Priority: TIER 3

### Python Figure Opportunities

1. `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`: token mix drives prefill and decode pool size.
   - Plot type: stacked bar or paired bar chart
   - Data source: simulated request mixes
   - Libraries: matplotlib
   - Key insight the plot reveals: identical request rate can require very different GPU pool allocation when prompt tokens and generated tokens change.

2. `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`: TTFT and TPOT are separate SLOs.
   - Plot type: two-panel latency distribution plot
   - Data source: simulated prefill and decode latency samples
   - Libraries: matplotlib or seaborn
   - Key insight the plot reveals: one request can pass total latency while failing the perceived interactive SLO, so TTFT and inter-token latency need separate reporting.

3. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`: delayed-label drift monitoring.
   - Plot type: line chart with early drift alarm and delayed label confirmation
   - Data source: simulated score distribution shift plus delayed chargeback labels
   - Libraries: matplotlib
   - Key insight the plot reveals: operational drift detection must act before labels arrive, then reconcile when labels catch up.

### Figures Missing Captions or Text References

1. `front-matter/preface.html`, Figure 0.2.
   - Missing: text reference before the figure
   - Draft caption: Existing caption is substantive and can stay.
   - Draft reference sentence: "Figure 0.2 gives the map at a glance, and Table 0.2 names the ten common paths and points to the chapters that carry the design load."
   - Priority: TIER 2

No new `<img>` element in the tracked HTML diff is missing alt text. No new `<figure>` element in the tracked HTML diff is missing a `<figcaption>`.

### Existing Visuals: Assessment and Improvements

1. `front-matter/images/application-reference-paths.png`: application-path hub diagram.
   - Clarity: CLEAR
   - Accuracy: CORRECT, assuming the chapter lists match the table
   - Pedagogy: EFFECTIVE
   - Style consistency: CONSISTENT
   - Caption quality: GOOD
   - Action: ADD CONTEXT
   - Specific fix: Add the Figure 0.2 prose reference listed above.

2. Existing chapter index illustrations in `module-11`, `module-33`, `module-34`, `module-38`, and `module-39` appear to lack `<figcaption>` in whole-file scans, but these are not newly added by the current diff.
   - Clarity: NOT ASSESSED IN SCOPE
   - Accuracy: NOT ASSESSED IN SCOPE
   - Pedagogy: NOT ASSESSED IN SCOPE
   - Style consistency: NOT ASSESSED IN SCOPE
   - Caption quality: MISSING IN WHOLE-FILE SCAN
   - Action: DEFER TO NON-DIFF VISUAL QA
   - Specific fix: Run a separate whole-book figure-caption pass if this run expands beyond new material.

### Visual Inventory

- Changed tracked HTML files inspected: 40
- Added visual elements in tracked HTML diff: 1 figure, 1 image, 0 inline SVG diagrams, 0 Python-generated figures, 0 Mermaid diagrams
- Added tables in tracked HTML diff: 11
- Added callout div lines in tracked HTML diff: 76
- New raster image inspected: `front-matter/images/application-reference-paths.png`
- Sections where added material is already supported by an existing nearby visual or table: Section 7.8, Section 24.5, Section 32.6, Section 32.9, Section 37.4, Section 37.8
- Recommended additions: 3 blocking SVGs, 2 high-priority visuals, 1 medium-priority triage visual

### Verification Run

1. Ran a short git status listing to confirm changed and untracked files.
2. Ran git diff file-name and summary listings to establish the scope of tracked new material.
3. Parsed a zero-context HTML diff to count added figures, images, SVGs, tables, Mermaid references, and callout lines.
4. Scanned changed files for whole-file figure, image, SVG, table, callout, missing-alt, and missing-figcaption counts.
5. Visually inspected `front-matter/images/application-reference-paths.png`.

### Files Changed

Only this report was created:

- `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-reports/09-visual-learning.md`

No book HTML files were edited.

### Blockers

No execution blocker. The main limitation is scope: this report intentionally excludes older visuals outside the current tracked diff, even when a whole-file scan revealed pre-existing caption gaps.

### Summary

Overall visual quality for the new material is ADEQUATE, with one strong new preface image and several useful new tables. The biggest gap is that the additions introduce many architecture and workflow concepts but add almost no new diagrams. The highest-value fixes are the fraud loop, GraphRAG two-lane pipeline, and semantic-ID recommender transformation diagrams.

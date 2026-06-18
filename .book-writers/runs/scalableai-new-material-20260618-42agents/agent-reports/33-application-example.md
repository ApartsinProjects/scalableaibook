## Application Example Report

Agent: 33-application-example
Mode: suggest
Scope: new material visible in current git diff only
Book HTML edited: no

### Files Inspected

Changed section files inspected:

- `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`
- `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`
- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`
- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
- `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`
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
- `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`
- `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html`
- `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`
- `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`
- `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`
- `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`
- `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`
- `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`

Changed non-section files noted but not targeted for practical-example insertion:

- `front-matter/preface.html`
- `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`
- `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`
- `part-7-infrastructure/module-34-edge-fog-on-device/index.html`
- `part-8-case-studies/module-38-case-distributed-recommendation/index.html`
- `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`

### Top Issues

1. New practical-example boxes sometimes use the right class but not the required Agent 33 structure.
   - Location: multiple new or newly adjacent examples, highest priority at sections 9.9, 16.5, 26.7, 36.6, 37.8, and 38.3.
   - Old text: replace the specific `<div class="callout practical-example">` blocks named below.
   - New text: use the complete replacement blocks in "Proposed Practical Example Boxes."
   - Why it matters: the sidebar class is present, but missing fields such as Dilemma and How reduce the practitioner value of the examples and fail the pass/fail checklist.
   - Tier: TIER 1 (BLOCKING)
   - Action: APPLY DIRECTLY during integration.
   - Potential conflicts: visual identity may prefer the existing `callout-title` style. Agent 33 requires the canonical title plus an `<h4>`.

2. Several "Production Pattern" or "Regulatory Deployment Map" blocks are styled as practical examples but are conceptual mini-explanations, not practitioner stories.
   - Location: `section-26.7.html` lines 54 to 58, `section-36.6.html` lines 218 to 222, `section-37.8.html` lines 94 to 110.
   - Old text: the entire practical-example blocks starting with "Production Pattern: Drift-Aware Online Fraud Monitoring", "Production Pattern: GraphRAG for Global and Relational Questions", and "Regulatory Deployment Map: What the Federation Must Prove".
   - New text: use the replacement blocks below, or change the old blocks to `key-insight` or `note` if the chapter lead wants to keep them as conceptual guidance.
   - Why it matters: class names are semantic in this book. A reader expects a concrete operational story in a practical-example callout.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY if practical-example count is the goal, otherwise reclassify the existing blocks.
   - Potential conflicts: Agent 18 or Agent 35 may want to preserve the original conceptual wording.

3. New frontier material in sections 7.8, 8.7, 8.9, 11.7, 14.9, 20.9, 22.5, 22.7, 24.5, 25.4, 25.7, 32.6, 32.7, and 32.9 would benefit from later chapter-level example balancing, but these are lower priority because each affected section already has at least one practical example nearby.
   - Location: listed sections.
   - Old text: no direct replacement recommended in this pass.
   - New text: defer until full chapter integration checks per-chapter example counts.
   - Why it matters: adding every possible application story would bloat the diff. The higher-value fix is to repair malformed or mislabeled examples first.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW.
   - Potential conflicts: none.

### Proposed Practical Example Boxes

1. Section 9.9, drift-aware fraud detection with delayed labels.
   - File: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
   - Insert after: the drift-aware fraud signal table, replacing the block at lines 213 to 221 that starts with `<div class="callout-title">Practical Example: Online Fraud With Delayed Labels</div>`.
   - Old text: the entire lines 213 to 221 practical-example block.
   - Tier: TIER 1
   - Full HTML:

```html
<div class="callout practical-example">
  <div class="callout-title">🏗️ Application Example</div>
  <h4>Online Fraud Monitoring With Delayed Labels</h4>
  <p><strong>Who:</strong> A risk platform lead and an MLOps engineer at a card issuer scoring transactions in under 80 milliseconds.</p>
  <p><strong>Situation:</strong> Their fraud model used live features from <a href="section-9.7.html">Section 9.7</a>, including five-minute spend, device velocity, and merchant-category counts.</p>
  <p><strong>Problem:</strong> A fraud ring shifted to low-value repeated transactions that stayed under old velocity thresholds, while confirmed chargeback labels arrived 18 to 28 days later.</p>
  <p><strong>Dilemma:</strong> Waiting for labels would protect against false alarms but allow weeks of losses. Triggering a retrain from drift alone might overfit to noisy traffic. Blocking the segment immediately would reduce exposure but risk declining legitimate purchases.</p>
  <p><strong>Decision:</strong> They used drift as an incident trigger, not as an automatic model-promotion trigger.</p>
  <p><strong>How:</strong> A Kafka stream fed Flink jobs that computed feature PSI by region and merchant category every five minutes. Evidently dashboards tracked score drift, while delayed labels reconciled in the feature store before the next retrain.</p>
  <p><strong>Result:</strong> The monitor flagged the repeated-merchant segment within two windows, analysts confirmed it, and the next retrain weighted fresh labels without raising false-positive rates in other regions.</p>
  <p><strong>Lesson:</strong> <strong>Drift alarms should open a controlled response loop; model promotion still needs labels and guardrail metrics.</strong></p>
</div>
```

2. Section 16.5, FSDP2 and composable parallelism.
   - File: `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`
   - Insert after: the paragraph on FSDP2 per-parameter DTensor sharding, replacing the block at lines 221 to 227 that starts with `<div class="callout-title">Practical Example: A TorchTitan-Style Recipe for a 3D Training Run</div>`.
   - Old text: the entire lines 221 to 227 practical-example block.
   - Tier: TIER 1
   - Full HTML:

```html
<div class="callout practical-example">
  <div class="callout-title">🏗️ Application Example</div>
  <h4>A TorchTitan-Style Recipe for 3D Training</h4>
  <p><strong>Who:</strong> A foundation-model training lead and a distributed-systems engineer running a 48-GPU internal cluster.</p>
  <p><strong>Situation:</strong> They needed to train a transformer that fit only when data-parallel sharding, tensor parallel matrix splits, activation checkpointing, and mixed precision were enabled together.</p>
  <p><strong>Problem:</strong> Their first prototype hand-built process groups and collective calls, and one bad rank mapping produced intermittent hangs after 6 to 8 hours of training.</p>
  <p><strong>Dilemma:</strong> They could keep the hand-rolled stack for maximum control, move to a fully managed training service with less debugging access, or adopt a recipe-driven PyTorch stack that made the parallel dimensions explicit.</p>
  <p><strong>Decision:</strong> They adopted a TorchTitan-style PyTorch recipe because it exposed the data, tensor, and pipeline dimensions while removing bespoke process-group wiring.</p>
  <p><strong>How:</strong> A `DeviceMesh` named the parallel dimensions; FSDP2 owned parameter all-gather and reduce-scatter, tensor parallelism owned intra-layer collectives, and activation checkpointing bounded memory. Roughly 250 lines of setup collapsed into a recipe file plus the FSDP2 and DTensor APIs.</p>
  <p><strong>Result:</strong> The run reached stable throughput on 48 GPUs, checkpoint restore worked after preemption, and failed-rank diagnosis moved from log archaeology to inspecting the mesh and recipe configuration.</p>
  <p><strong>Lesson:</strong> <strong>Composable parallelism is practical when each communication pattern has one owner and the mesh makes that ownership visible.</strong></p>
</div>
```

3. Section 26.7, drift-aware online fraud monitoring mislabeled as a practical example.
   - File: `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`
   - Insert after: the opening discussion of distributed drift detection, replacing the block at lines 54 to 58 that starts with `<div class="callout-title">Production Pattern: Drift-Aware Online Fraud Monitoring</div>`.
   - Old text: the entire lines 54 to 58 practical-example block.
   - Tier: TIER 2
   - Full HTML:

```html
<div class="callout practical-example">
  <div class="callout-title">🏗️ Application Example</div>
  <h4>Fraud Drift Triage Across Regional Model Replicas</h4>
  <p><strong>Who:</strong> An MLOps incident commander and a fraud analytics manager responsible for 22 regional inference replicas.</p>
  <p><strong>Situation:</strong> Their card-risk model served low-latency decisions from a Kubernetes fleet while labels arrived later through chargeback investigations.</p>
  <p><strong>Problem:</strong> One region's score distribution shifted sharply after a merchant-acquirer outage, but global dashboards averaged the shift away.</p>
  <p><strong>Dilemma:</strong> A global retrain would spend compute and risk changing unaffected regions. Ignoring the alert would leave the affected market exposed. A manual rule could reduce loss quickly but might become stale.</p>
  <p><strong>Decision:</strong> They segmented the incident: route the affected region through a temporary guardrail while collecting labels for a regional retrain candidate.</p>
  <p><strong>How:</strong> Evidently tracked per-segment drift, Prometheus alerted on score and feature PSI, and Feast recorded the model version, feature view, and delayed-label join. The response playbook required the drift panel, label sample, and guardrail false-positive estimate in one artifact before promotion.</p>
  <p><strong>Result:</strong> The incident stayed regional, the guardrail reduced suspicious approvals within 40 minutes, and the later retrain shipped only after confirmed labels showed a precision gain.</p>
  <p><strong>Lesson:</strong> <strong>Distributed drift monitoring is useful when it preserves the segment identity needed to choose the smallest effective response.</strong></p>
</div>
```

4. Section 36.6, GraphRAG as a production pattern.
   - File: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`
   - Insert after: the GraphRAG paragraph, replacing the block at lines 218 to 222 that starts with `<div class="callout-title">Production Pattern: GraphRAG for Global and Relational Questions</div>`.
   - Old text: the entire lines 218 to 222 practical-example block.
   - Tier: TIER 2
   - Full HTML:

```html
<div class="callout practical-example">
  <div class="callout-title">🏗️ Application Example</div>
  <h4>GraphRAG for Portfolio-Wide Compliance Questions</h4>
  <p><strong>Who:</strong> A search relevance lead and a compliance product manager at a financial-services firm with 14 million internal documents.</p>
  <p><strong>Situation:</strong> Their RAG assistant answered local evidence questions well, but executives asked global questions such as which business units shared the same third-party risk theme.</p>
  <p><strong>Problem:</strong> Dense vector search returned isolated passages, and the cross-encoder reranker could not infer relationships scattered across hundreds of documents.</p>
  <p><strong>Dilemma:</strong> They could increase the vector top-k and pay higher reranking cost, build manual compliance taxonomies, or add a graph layer that summarized entity communities offline.</p>
  <p><strong>Decision:</strong> They added a GraphRAG path beside the existing vector shards, using it only when the query classifier detected global or relational intent.</p>
  <p><strong>How:</strong> A nightly Ray job extracted entities, built community summaries, and wrote graph neighborhoods to the retrieval store. The online planner chose vector search for passage questions and graph traversal plus summary retrieval for relationship questions, reusing the reranker from Chapter 25.</p>
  <p><strong>Result:</strong> Global compliance answers stopped depending on one lucky passage, and the system kept the cheaper vector path for local factual questions.</p>
  <p><strong>Lesson:</strong> <strong>Graph retrieval earns its cost when the user's question is about relationships across the corpus, not just the nearest passage.</strong></p>
</div>
```

5. Section 37.8, regulatory deployment evidence.
   - File: `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`
   - Insert after: the safety stack and regulatory deployment discussion, replacing the block at lines 94 to 110 that starts with `<div class="callout-title">Regulatory Deployment Map: What the Federation Must Prove</div>`.
   - Old text: the entire lines 94 to 110 practical-example block.
   - Tier: TIER 2
   - Full HTML:

```html
<div class="callout practical-example">
  <div class="callout-title">🏗️ Application Example</div>
  <h4>Turning a Federated Release Into Audit Evidence</h4>
  <p><strong>Who:</strong> A clinical AI safety lead, a hospital privacy officer, and an ML platform engineer preparing a federated sepsis model for deployment across five hospitals.</p>
  <p><strong>Situation:</strong> The federation improved pooled AUROC, but each site needed evidence that the local model behavior, privacy controls, and rollback plan were acceptable.</p>
  <p><strong>Problem:</strong> A single global metric hid site-level calibration drift, and the privacy officer would not approve a release without a traceable update and consent record.</p>
  <p><strong>Dilemma:</strong> They could ship the global model quickly, delay deployment for a full manual review at every hospital, or automate an evidence package that each site could inspect before activation.</p>
  <p><strong>Decision:</strong> They required every release to be a triple: the versioned backbone, the federated update policy, and a per-site evidence bundle.</p>
  <p><strong>How:</strong> Flower coordinated the federated rounds, MLflow registered model and adapter versions, and Great Expectations checked site-level feature ranges. The bundle included calibration plots, subgroup metrics, privacy-budget accounting, secure-aggregation logs, and a rollback target.</p>
  <p><strong>Result:</strong> Four sites approved the release in the first review window, while one held back because its calibration slope missed the agreed threshold. The rollback plan let the federation proceed without forcing that site forward.</p>
  <p><strong>Lesson:</strong> <strong>Regulated federated learning ships when every site can audit the exact model, update path, and safety evidence it is being asked to trust.</strong></p>
</div>
```

6. Section 38.3, generative recommender source.
   - File: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`
   - Insert after: the semantic-ID key insight, replacing the block at lines 220 to 228 that starts with `<div class="callout-title">Practical Example: Adding a Generative Source Without Replacing the Funnel</div>`.
   - Old text: the entire lines 220 to 228 practical-example block.
   - Tier: TIER 1
   - Full HTML:

```html
<div class="callout practical-example">
  <div class="callout-title">🏗️ Application Example</div>
  <h4>Adding a Generative Candidate Source Without Replacing the Funnel</h4>
  <p><strong>Who:</strong> A feed-ranking tech lead and an experimentation PM at a media platform serving 300 million daily recommendations.</p>
  <p><strong>Situation:</strong> The existing system used a two-tower ANN retriever, popularity and recency sources, and a deep ranker with mature guardrails.</p>
  <p><strong>Problem:</strong> Discovery sessions needed longer-range sequence understanding, such as viewers alternating tutorials, reviews, and creator updates in a pattern a dot product flattened.</p>
  <p><strong>Dilemma:</strong> Replacing the funnel with a generative recommender would risk latency and guardrail regressions. Keeping only ANN retrieval would miss sequence structure. Adding another source would complicate attribution but preserve the production contract.</p>
  <p><strong>Decision:</strong> They shipped the generative model as one candidate source beside ANN, graph, popularity, and recency sources.</p>
  <p><strong>How:</strong> A nightly Spark job assigned semantic IDs from item embeddings, and an HSTU-style sequence model generated 20 candidate code beams from each user's recent actions. The candidate mixer resolved beams to item IDs, deduplicated them with ANN results, and sent the same pool to the existing ranker.</p>
  <p><strong>Result:</strong> The A/B test measured the new source's marginal contribution under the same latency and guardrail budget. The platform learned whether semantic-ID generation added recall without rewriting ranking.</p>
  <p><strong>Lesson:</strong> <strong>Generative recommendation is easiest to de-risk when it enters production as a measured candidate source, not as a replacement for the whole funnel.</strong></p>
</div>
```

### Placement Map

- Section 5.3: no new box proposed. The new MLPerf and construct-matched evaluation material is already application-oriented, and the section has an existing practical example.
- Section 7.8: no immediate box proposed. Spark Connect could use a later example, but the section already has one practical example and the new material is short.
- Section 8.7: no immediate box proposed. Ray Data, Daft, and Lance are good future example targets, but the section already has one example.
- Section 8.9: no immediate box proposed. Dataset governance could support a future story, but the new material is a compact conceptual addition.
- Section 9.7: no immediate box proposed. The streaming feature store packet is operational enough and the section already has one example.
- Section 9.9: replace the new delayed-label fraud box with the complete version above.
- Section 10.10: no new box proposed. DiLoCo is frontier material and may belong to a research-frontier pass.
- Section 11.7: no new box proposed. 2D sparse embedding placement could use a later recommender-platform story.
- Section 14.9: no new box proposed. FedLoRA would benefit from a future healthcare or keyboard story if the chapter-level count is low.
- Section 15.8: no new box proposed. FP8 updates are already adjacent to a practical example.
- Section 16.5: replace the new TorchTitan-style box with the complete version above.
- Section 20.9: no new box proposed. TRL, VERL, and veRL can be handled in a framework comparison pass.
- Section 22.5: no new box proposed. Managed KV cache could use a future serving incident story.
- Section 22.7: no new box proposed. EAGLE-style draft models could use a later latency story.
- Section 24.5: no new box proposed. Prefill and decode sizing already has a key insight and one existing example.
- Section 25.1: no new box proposed. Governance gate could use a future regulated-RAG story if chapter count is low.
- Section 25.4: no new box proposed. Compression and recall co-measurement is a good future box target.
- Section 25.7: no new box proposed. Late interaction is a good future box target.
- Section 26.3: no new box proposed. Registry governance has enough application framing for the current diff.
- Section 26.7: replace the new "Production Pattern" practical-example block with the complete regional fraud drift story above.
- Section 30.10: no new box proposed. MARL to LLM-agent bridge is conceptual and already supported by existing examples.
- Section 32.6: no new box proposed. MCP and A2A protocol consolidation is a future candidate for a migration story.
- Section 32.7: no new box proposed. Context engineering could use a later incident story.
- Section 32.9: no new box proposed. MAST failure labeling is likely better as an evaluation example in Chapter 40.
- Section 35.5: no new box proposed. Secure aggregation versus Byzantine robustness is already concrete as a warning.
- Section 35.6: no new box proposed. Gradient inversion is a threat-model warning, not a practical-example gap.
- Section 36.6: replace the GraphRAG "Production Pattern" practical-example block with the complete GraphRAG story above.
- Section 36.8: no new box proposed. Governed RAG scorecard is a warning block and does not need a practical-example duplicate in this pass.
- Section 37.4: no new box proposed. Federated foundation model material can be covered by the Section 37.8 evidence story.
- Section 37.8: replace the regulatory deployment map block with the complete audit-evidence story above.
- Section 38.3: replace the new generative source box with the complete version above.
- Section 38.7: no new box proposed. Co-computed online evaluation is already concrete and adjacent to existing examples.
- Section 40.6: no new box proposed. Protocol trust boundaries could use a future MCP vendor-neutral integration story.
- Section 40.9: no new box proposed. MAST labeling already appears as a key insight and the section has one existing example.

### Coverage Check

- Concepts with practical examples in the changed material: distributed drift detection, FSDP2 and composable parallelism, regional MLOps drift response, GraphRAG for relational corpus questions, federated clinical release evidence, and generative recommender candidate sources.
- Concepts that could use a later practical example but are lower priority: Spark Connect deployment boundaries, AI-native data engines, dataset governance manifests, 2D sparse embedding placement, FedLoRA, EAGLE-style speculative decoding, vector compression co-measurement, late-interaction retrieval, MCP and A2A protocol migration, context engineering, and MAST-based failure triage.
- Total replacement boxes proposed: 6.
- Total new additive boxes proposed: 0, because the safer integration move is to repair malformed or mislabeled examples without expanding the diff.

### Verification Run

Checks performed:

- Reviewed git status, changed HTML file names, and diff statistics.
- Parsed changed section files with `C:\Python314\python.exe` to summarize added headings, added callout types, practical-example counts, and affected line ranges.
- Checked practical-example blocks in changed section files for the required labels and for likely reclassification needs.

Verification suggestions for the integration pass:

- Re-scan changed section HTML for every `class="callout practical-example"` block.
- For each block, verify all labels appear exactly once: Who, Situation, Problem, Dilemma, Decision, How, Result, and Lesson.
- Verify each Lesson field bolds the lesson text, not only the label.
- Verify each replacement includes at least one concrete number and at least two options in Dilemma.
- Run the normal style scan for forbidden dash characters and banned phrases across changed HTML and this report.

### Blockers

- None. This agent was asked to produce a report only, and no book HTML edits were required.
- The current book style often uses `<div class="callout-title">Practical Example: ...</div>` instead of the Agent 33 canonical title plus `<h4>`. Integration should decide whether to normalize all new boxes now or only enforce the required fields.

### Summary

The new material is strongly application-oriented, but the highest-value fixes are structural rather than conceptual. Six changed practical-example blocks should be replaced or reclassified so that the sidebar class consistently means a realistic practitioner story with Who, Situation, Problem, Dilemma, Decision, How, Result, and Lesson.

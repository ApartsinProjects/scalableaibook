## Curriculum Alignment Report

Agent: 01 Curriculum Alignment Reviewer

Mode: suggest

Scope: only new material currently visible in `git diff`

Files changed: none. This reviewer did not edit book HTML.

### Files Inspected

- `BOOK_CONFIG.md`
- `plan.md`
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

### Coverage Gaps

1. Application paths in the preface do not visibly preserve the Part I prerequisite contract.
   - Location: `front-matter/preface.html`, Section 0.5, paragraph before Table 0.2 and the Table 0.2 header, lines 155 to 166.
   - What is wrong: The new application-path table lists only later chapters in the `Main reference chapters` column, while the book configuration says Part I underpins every path. The following paragraph says "These paths are not shortcuts around the foundations", but a reader scanning the table can still treat the listed chapters as a complete path.
   - Old text: `Table 0.2 names the ten common paths and points to the chapters that carry the design load.`
   - New text: `Table 0.2 names ten common paths. Every row assumes Part I first, especially Chapters 2, 4, and 5 for failure vocabulary, communication primitives, and evaluation. The listed chapters are the application-specific spine after those foundations.`
   - Old text: `<tr><th scope="col">Application</th><th scope="col">Main reference chapters</th><th scope="col">What the path teaches</th></tr>`
   - New text: `<tr><th scope="col">Application</th><th scope="col">After Part I, main reference chapters</th><th scope="col">What the path teaches</th></tr>`
   - Why it matters: The new table is useful, but the curriculum depends on readers not skipping the foundation chapters that later sections assume.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

2. The Spark Connect addition needs a tighter bridge back to the stated Section 7.8 objective.
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, Section 5, lines 247 to 268.
   - What is wrong: `plan.md` defines Section 7.8 as "PySpark for AI Workloads." The new Spark Connect material is relevant, but its heading and opening paragraph read like a Spark platform feature update before explicitly tying the feature to PySpark AI workload execution.
   - Old text: `<h2>5. Spark 4 and Spark Connect: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - New text: `<h2>5. Spark Connect for PySpark AI Workloads <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - Old text: `Spark 4 makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver.`
   - New text: `For PySpark AI workloads, Spark Connect makes a production pattern explicit: the notebook, application server, or feature service can build DataFrame plans without living inside the same process as the Spark driver.`
   - Why it matters: The content then earns its place in the section because it is framed as a PySpark workload boundary, not as a detached Spark release note.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Style editor may also prefer this shorter heading.

### Scope Creep

1. The FedLoRA callout in Section 14.9 drifts from edge and on-device learning into the Chapter 37 clinical deployment case study.
   - Location: `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`, new callout at lines 225 to 229.
   - What is wrong: Section 14.9 is "Edge and On-Device Learning." The new callout begins with clinical and regulated settings, then points to the medical case study. That duplicates the same topic in `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`, where the clinical FedLoRA treatment properly belongs.
   - Old text: `Federation is also moving upward from small classifiers to foundation models. In a clinical or regulated setting, the frozen backbone is the shared medical language model, vision model, or multimodal encoder, and each hospital trains only a parameter-efficient adapter.`
   - Fix: Replace the full new callout with this edge-calibrated version:

```html
<div class="callout research-frontier">
<div class="callout-title">Research Frontier: On-Device Foundation-Model Adapters</div>
<p>Federation is also moving upward from small classifiers to foundation-model adapters, but this section needs the edge version of that idea. The shared backbone is a compact language, vision, or speech model already approved for the device, and the device trains only a parameter-efficient adapter on local examples. A FedLoRA-style round then uploads low-rank factors rather than full model weights:</p>
$$W_{\text{device}} = W_0 + A_k B_k,\qquad A_k \in \mathbb{R}^{d \times r_k},\;B_k \in \mathbb{R}^{r_k \times m}.$$
<p>The communication drops from $dm$ numbers for a full layer to $r_k(d + m)$ numbers, and the rank $r_k$ becomes an edge budget knob: a laptop can train a larger adapter, while a phone or sensor trains a smaller one and still participates in the same federation. The clinical and regulatory version of this pattern belongs in <a href="../../part-8-case-studies/module-37-case-federated-medical-ai/index.html">Chapter 37</a>; here the point is narrower. Parameter-efficient adapters are how on-device learning keeps the trainable state small enough for memory, energy, and intermittent connectivity.</p>
</div>
```

   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Content Update Scout may want to preserve the two external citations. If so, attach them to "FedLoRA-style" in the first paragraph without expanding the clinical discussion.

2. The feature-store material in Section 8.7 should be framed as a bridge, not as a full new destination inside distributed preprocessing.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, Section 6, lines 212 to 216.
   - What is wrong: `plan.md` defines Section 8.7 as distributed preprocessing. Feature stores and serving consistency are important, but their full treatment belongs in the streaming feature material of Chapter 9, the MLOps material of Chapter 26, and the recommendation case study in Chapter 38.
   - Old text: `<h2>6. Beyond Training: Feature Stores and Serving Consistency <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - New text: `<h2>6. Bridge to Serving: The Same Transform Must Survive Deployment <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Old text: `The system that enforces this is a feature store: a service that holds feature definitions and their learned constants, computes features offline in batch for training, and serves the identical computation online at low latency for inference, so the offline and online paths cannot drift apart.`
   - New text: `The production system that often enforces this is a feature store, but this section only needs the preprocessing principle: the constants learned by a distributed fit must be versioned as artifacts and reused by both the training loader and the serving path.`
   - Why it matters: The bridge remains useful while keeping Section 8.7 centered on fit, transform, materialization, and distributed preprocessing.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Chapter 38 already owns the richer feature-store story.

3. The GraphRAG case-study insertion in Section 36.6 re-teaches material that Chapter 25 and Chapter 40 already introduce.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`, new practical-example callout at lines 219 to 221.
   - What is wrong: Section 36.6 is "Sharded Retrieval and Ranking." The new material is relevant to the web-scale RAG case, but it begins as a fresh GraphRAG explanation rather than as a case-study application of Chapter 25 retrieval design and Chapter 13 graph partitioning.
   - Old text: `GraphRAG makes the structure explicit: extract entities and relations, build a graph, summarize communities, and retrieve both graph neighborhoods and text chunks.`
   - New text: `Building on the GraphRAG overview in <a href="../../part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html">Section 25.1</a> and the partitioned graph machinery of <a href="../../part-3-distributed-ml/module-13-distributed-graph-ml/index.html">Chapter 13</a>, this case study treats GraphRAG as a second distributed retrieval surface: extract entities and relations, build a graph, summarize communities, and retrieve both graph neighborhoods and text chunks.`
   - Old text: `In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards.`
   - New text: `The new case-study question is operational, not definitional: how does that second retrieval surface stay sharded, fresh, permission-aware, and mergeable beside the vector shards?`
   - Why it matters: The replacement preserves the new content while making its curriculum role clear: application, not first introduction.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Cross-reference Architect should verify the `section-25.1.html` target exists and is preferable to the chapter index.

### Depth Mismatches

1. Section 38.3 adds an advanced generative recommender topic but does not explicitly constrain the expected depth for a case-study chapter.
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, Section 5, lines 212 to 239.
   - What is wrong: Generative recommenders and semantic IDs are appropriate to sharded candidate generation, but the current text can be read as a new model-family lesson. In the case-study arc, it should be framed as one candidate source inside the existing retrieval and ranking architecture.
   - Old text: `Generative recommenders change the question to sequence generation.`
   - New text: `For this case study, generative recommenders are best read as a new candidate source inside the existing funnel: they change one candidate-generation path into sequence generation while leaving the downstream mixer, ranker, guardrails, and online experiment design intact.`
   - Old text: `The systems lesson for this chapter is not that the retrieve-then-rank funnel disappears overnight.`
   - New text: `The systems lesson for this case study is not that the retrieve-then-rank funnel disappears overnight.`
   - Why it matters: The change calibrates the material to the case-study objective and prevents a late Part VIII section from expanding into a standalone survey of generative recommendation.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Prerequisite Issues

1. The preface application-path figure references a local image that should be checked as part of path verification.
   - Location: `front-matter/preface.html`, Figure 0.2, line 159.
   - What is wrong: The new path map uses `src="images/application-reference-paths.png"`. If the file is not present under `front-matter/images/`, the curriculum map becomes a broken first-impression asset. This is a verification issue rather than a conceptual flaw.
   - Old text: `<img alt="A hub-and-spoke map showing Part I as the shared foundation, with ten application paths branching out to RAG, LLM serving, foundation training, recommenders, federated medical AI, agent systems, robotics and edge fleets, streaming AI, AI data engineering, and AI cluster platforms." src="images/application-reference-paths.png"/>`
   - New text if the image exists: keep as is.
   - New text if the image does not exist: `<p>Figure 0.2 will appear here after the application reference path image is generated and committed. Until then, Table 0.2 is the authoritative path map.</p>`
   - Why it matters: The figure is the visual entry point for the new reference-path curriculum.
   - Tier: TIER 2 (HIGH)
   - Action: SEND FOR REVIEW if the image is absent, otherwise no content change.
   - Potential conflicts: Illustrator Agent may already be generating this asset.

2. The MAST callout in the Chapter 40 case study should name the earlier Chapter 32 introduction before using the taxonomy as an evaluation label set.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`, new key-insight callout at lines 213 to 214.
   - What is wrong: Chapter 32.9 already introduces MAST in the agent-orchestration chapter. The case-study callout uses the taxonomy well, but it should make clear that this is a reuse of an earlier concept.
   - Old text: `The MAST failure taxonomy gives the label set: specification and system-design failures, inter-agent misalignment, and verification or termination failures.`
   - New text: `The MAST failure taxonomy introduced in <a href="../../part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html">Section 32.9</a> gives the label set: specification and system-design failures, inter-agent misalignment, and verification or termination failures.`
   - Why it matters: The case study then reinforces the prior chapter instead of appearing to introduce the same taxonomy a second time.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Cross-reference Architect should verify the relative path.

### Sequencing Issues

1. Regulatory medical deployment material is well placed in Chapter 37, but its prerequisite link to Chapter 35 should be made explicit in the new map.
   - Location: `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`, new regulatory map at lines 95 to 112.
   - What is wrong: The map is appropriate for "Safety and Responsibility", but it relies on the privacy, security, and reliability framing of Chapter 35. The path table in the preface includes Chapter 35, but the section itself should state the dependency.
   - Old text: `A regulated federated deployment turns the safety stack in Figure 37.8.1 into evidence artifacts.`
   - New text: `Building on the privacy, robustness, and monitoring stack from <a href="../../part-7-infrastructure/module-35-reliable-secure-distributed-ai/index.html">Chapter 35</a>, a regulated federated deployment turns Figure 37.8.1 into evidence artifacts.`
   - Why it matters: The case-study section should be readable as an application of earlier infrastructure and safety concepts, not as a late standalone compliance detour.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Illustration Opportunities

1. Preface Section 0.5 application paths.
   - Type: curriculum map.
   - Scene idea: A hub-and-spoke map with Part I as the common center and ten colored spokes, each ending at a concrete application label. Keep chapter numbers readable and avoid dense prose in the image.
   - Placement: Existing Figure 0.2.

2. Section 36.6 GraphRAG as second retrieval surface.
   - Type: architecture-as-system diagram.
   - Scene idea: Two parallel retrieval planes, vector shards and graph partitions, both feeding a merger and reranker. Show chunk ids and permission metadata crossing both planes.
   - Placement: After the GraphRAG callout if retained.

3. Section 38.3 generative recommender source.
   - Type: pipeline diagram.
   - Scene idea: User history becomes semantic-ID beams, a resolver maps beams to candidate item ids, and the candidate mixer unions them with ANN and graph sources before ranking.
   - Placement: After the new Section 5 heading.

### Verification Run

- Ran a git diff file-list query to identify the current working diff.
- Ran a git diff numstat query to quantify changed files and added lines.
- Parsed a zero-context git diff for added headings, callout titles, URLs, table rows, and style-rule dash violations.
- Read `BOOK_CONFIG.md` and matched changed chapters against `plan.md`.
- Spot-read local context around the highest-risk additions in Sections 7.8, 8.7, 8.9, 14.9, 36.6, 37.8, 38.3, and 40.9.

### Verification Suggestions

- Run a path check for all new internal links in changed lines, especially the proposed links to Sections 25.1, 32.9, and Chapter 35.
- Confirm `front-matter/images/application-reference-paths.png` exists and renders, or route Figure 0.2 to Illustrator Agent.
- Run the book style scan over changed files for forbidden dash characters, forbidden double hyphens, and stale table numbering.
- Run a focused duplicate-topic scan for GraphRAG, FedLoRA, MAST, and feature stores to confirm each chapter now introduces, applies, or references the concept at the intended depth.

### Summary

Overall alignment score: ADEQUATE.

The new material mostly strengthens currency and application relevance, especially around data governance, AI-native data engines, modern retrieval, regulated medical federation, and agent protocols. The main curriculum risk is not missing coverage. It is duplication and sequencing drift: several additions reintroduce topics already assigned to other chapters. The fixes above keep the wins while making the curriculum role of each insertion explicit.

### Blockers

No blocker prevented this report. The only unresolved check is whether the new preface image file exists and renders, because this reviewer did not inspect binary assets.

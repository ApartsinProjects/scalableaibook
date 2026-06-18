## Project Catalyst Report

Agent: 23-project-catalyst
Mode: suggest
Scope: new material visible in the current git diff only

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

### Files Changed

- Report only: `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-reports/23-project-catalyst.md`
- No book HTML was edited.

### Existing Projects Assessment

- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`: Strongest project coverage in the diff. The new "Project Ideas" section gives three concrete builds, connects them to Chapter 9 concepts, and has natural progression from a streaming drift detector to fleet-merged monitoring to automated retraining. Gap: the project cards do not label difficulty or time, so they are harder to scan against the agent checklist.
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`: The changed heading "Chapter Summary and Project Ideas" signals project coverage, but the diff excerpt does not expose enough detail to verify difficulty range. Integration should confirm this section has at least one beginner-friendly build and one advanced build.
- `front-matter/preface.html`: The new application reference paths and Chapter 41 capstone paragraph strengthen the book-level project spine. No local fix required, because the preface should orient rather than add project cards.
- `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`: Good exercise coverage exists through Exercise 24.5.3, but the new current-practice material would benefit from a portfolio-style "you could build this" moment that turns DistServe, Mooncake, vLLM, and capacity planning into a concrete mini-system.

### Top Issues

1. Spark Connect update teaches a buildable production pattern without naming a reader-facing build.
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, after the code caption for Code 7.8.4, currently around line 265.
   - Old text: `<div class="code-caption"><strong>Code 7.8.4:</strong> A Spark Connect client that builds a feature table remotely. The Python process constructs the DataFrame plan; the Connect server analyzes, optimizes, schedules, and executes it on the Spark cluster, then writes sharded output for training.</div>`
   - New text: `<div class="code-caption"><strong>Code 7.8.4:</strong> A Spark Connect client that builds a feature table remotely. The Python process constructs the DataFrame plan; the Connect server analyzes, optimizes, schedules, and executes it on the Spark cluster, then writes sharded output for training.</div><div class="callout exercise"><div class="callout-title">You Could Build This: Remote Feature Builder <span class="exercise-type coding">Beginner, 45 minutes</span></div><p>Turn Code 7.8.4 into a small portfolio service: expose one Python function that accepts a date range and feature specification, submits the Spark Connect DataFrame plan to a remote cluster, writes partitioned training shards, and records the Spark application ID plus output path in a manifest. This uses the section's core concepts, remote DataFrame plans, governed cluster execution, feature-table materialization, and the Spark-to-training handoff. The industry analogue is an internal feature-building API that lets model teams launch governed Spark jobs without owning Spark driver processes.</p></div>`
   - Why it matters: The section explains a modern control-plane pattern but misses the moment where the reader sees a concrete thing they can build in under an hour.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Lab Designer may prefer this as a lab instead of an exercise callout.

2. AI-native data engines section has a strong tool comparison but no portfolio task that asks the reader to choose and justify an engine.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, after the library shortcut ending at current line 210.
   - Old text: `<p>If the expensive operation is a SQL join, aggregation, or lakehouse scan, Spark is still the right default. If the expensive operation is a Python function, media decode, model embedding pass, or batch inference stage, Ray Data or Daft often expresses it more directly. If the expensive operation is random access to multimodal examples plus vectors, Lance is a storage-level fit. The reduction is conceptual: instead of forcing every AI preprocessing job into a Spark UDF, choose the tool whose native execution model matches the part of the pipeline that burns the time.</p>`
   - New text: `<p>If the expensive operation is a SQL join, aggregation, or lakehouse scan, Spark is still the right default. If the expensive operation is a Python function, media decode, model embedding pass, or batch inference stage, Ray Data or Daft often expresses it more directly. If the expensive operation is random access to multimodal examples plus vectors, Lance is a storage-level fit. The reduction is conceptual: instead of forcing every AI preprocessing job into a Spark UDF, choose the tool whose native execution model matches the part of the pipeline that burns the time.</p><div class="callout exercise"><div class="callout-title">You Could Build This: Engine Selection Bakeoff <span class="exercise-type analysis">Intermediate, 60 minutes</span></div><p>Create a three-column design memo for one multimodal training pipeline: Spark for governed joins, Ray Data or Daft for image or PDF embedding, and Lance for vector-rich random access. For each stage, list the expensive operation, the engine you would use, the metric you would measure, and the handoff artifact. The portfolio value is the systems judgment: you show that you can match a workload shape to an execution engine instead of treating every distributed data job as a Spark job.</p></div>`
   - Why it matters: This turns a comparison table style lesson into an industry-facing design artifact.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Example Agent may want a runnable benchmark instead of a design memo.

3. FP8 and microscaling update is current and impressive, but it lacks a build or measurement path.
   - Location: `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`, after the FP8 Deployment Checklist table, currently around line 213 onward.
   - Old text: `<div class="comparison-table-title">FP8 Deployment Checklist</div>`
   - New text: `<div class="comparison-table-title">FP8 Deployment Checklist</div>`
   - Full draft to insert after the comparison table: `<div class="callout exercise"><div class="callout-title">You Could Build This: Precision Budget Report <span class="exercise-type analysis">Intermediate, 45 minutes</span></div><p>Take a small transformer block or MLP and estimate the memory and all-reduce volume under FP32, FP16, BF16, and FP8-style activation or gradient formats. The deliverable is a one-page precision budget that names which tensors stay high precision, which tensors can be narrowed, what scale metadata is required, and how many bytes move per training step. This uses the section's core concepts, dynamic range, loss scaling, collective communication volume, and microscaling, and mirrors the production review a training team performs before turning on low-precision training.</p></div>`
   - Why it matters: Without a concrete measurement task, FP8 risks reading as a news update rather than an actionable systems design skill.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Code Pedagogy may add a runnable numeric demo later.

4. GraphRAG addition names a production pattern but leaves the reader without a small build target.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`, after the GraphRAG practical-example block ending around line 222.
   - Old text: `<p>In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards. The offline pipeline now has an entity extraction job, a graph build job, a community summarization job, and a synchronization job that keeps graph nodes linked to chunk identifiers and access-control metadata. The online path becomes route, graph or vector or both, merge evidence, rerank, assemble context. Use graph retrieval when the query asks about relationships, themes, neighborhoods, or multi-hop joins; use vector retrieval when the query asks for a specific passage-level fact; fuse them when the query needs both.</p>`
   - New text: `<p>In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards. The offline pipeline now has an entity extraction job, a graph build job, a community summarization job, and a synchronization job that keeps graph nodes linked to chunk identifiers and access-control metadata. The online path becomes route, graph or vector or both, merge evidence, rerank, assemble context. Use graph retrieval when the query asks about relationships, themes, neighborhoods, or multi-hop joins; use vector retrieval when the query asks for a specific passage-level fact; fuse them when the query needs both.</p><div class="callout exercise"><div class="callout-title">You Could Build This: Mini GraphRAG Router <span class="exercise-type coding">Advanced, 2 to 4 hours</span></div><p>Build a small GraphRAG prototype over twenty to fifty internal-style documents. Extract entities and relations into a graph, create one community summary per connected component, keep ordinary vector chunks beside the graph, and route each query to graph retrieval, vector retrieval, or both. Evaluate the router on two query types: local fact questions and global relationship questions. The portfolio artifact is a retrieval report that shows when graph structure improves evidence coverage and when flat vector search is still the simpler choice.</p></div>`
   - Why it matters: The case study becomes more actionable when the reader sees a tractable version of the full architecture.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Demo Simulation Designer may prefer this as an interactive comparison.

5. Semantic IDs section has high portfolio potential but no project moment where the reader creates or evaluates semantic IDs.
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, after the practical example that ends around line 227.
   - Old text: `<p><strong>Lesson:</strong> Generative recommendation is easiest to ship first as another candidate source. That keeps the production contract stable: retrieval still returns candidates, ranking still scores them, and the A/B test can isolate whether the generated semantic-ID source adds value under the same latency and guardrail budget.</p>`
   - New text: `<p><strong>Lesson:</strong> Generative recommendation is easiest to ship first as another candidate source. That keeps the production contract stable: retrieval still returns candidates, ranking still scores them, and the A/B test can isolate whether the generated semantic-ID source adds value under the same latency and guardrail budget.</p><div class="callout exercise"><div class="callout-title">You Could Build This: Semantic-ID Candidate Source <span class="exercise-type coding">Advanced, 2 to 4 hours</span></div><p>Take a small item catalog with embeddings, cluster or quantize the embeddings into short semantic ID codes, train a lightweight next-code predictor from user sequences, and resolve generated codes back to candidate items. Compare the candidate set against ANN retrieval on recall, novelty, duplicate rate, and latency. The real-world analogue is a recommender team adding a generative candidate source beside popularity, recency, graph, and ANN sources while keeping the existing ranker unchanged.</p></div>`
   - Why it matters: This is an interview-ready project because it combines representation learning, retrieval, serving contracts, and evaluation.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Exercise Designer may want to split this into scaffolding steps.

6. Multi-agent failure taxonomy would be stronger with a failure-labeling project tied to CI.
   - Location: `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`, after the paragraph ending around line 239.
   - Old text: `<p>Each failure mode has a tracing signature. Error propagation shows as a step that succeeds locally but hands down a subtly wrong artifact, visible only when you inspect what the next step received. Miscoordination shows as redundant or conflicting tool calls across spans. Context inconsistency shows as two agents reading different values for the same memory key within one trajectory. The per-step credit in the demo is the coarse version of this analysis: it told us the executor was the weakest link. A full trace would let you replay the executor's exact input and see whether it failed on its own or because the retriever handed it the wrong context. This is why tracing every agent step, not just logging the final answer, is the price of admission for debugging anything beyond a toy.</p>`
   - New text: `<p>Each failure mode has a tracing signature. Error propagation shows as a step that succeeds locally but hands down a subtly wrong artifact, visible only when you inspect what the next step received. Miscoordination shows as redundant or conflicting tool calls across spans. Context inconsistency shows as two agents reading different values for the same memory key within one trajectory. The per-step credit in the demo is the coarse version of this analysis: it told us the executor was the weakest link. A full trace would let you replay the executor's exact input and see whether it failed on its own or because the retriever handed it the wrong context. This is why tracing every agent step, not just logging the final answer, is the price of admission for debugging anything beyond a toy.</p><div class="callout exercise"><div class="callout-title">You Could Build This: Agent Failure Triage Board <span class="exercise-type coding">Intermediate, 60 minutes</span></div><p>Instrument a two-agent or three-agent toy workflow so every run writes spans with task ID, agent role, tool call, latency, token count, input hash, output hash, and final verdict. Add a small labeling pass that maps failed traces into specification failure, inter-agent misalignment, or verification failure, then summarize the counts in a CI-style report. The portfolio value is operational: the system does not merely say that the agent failed, it creates a repair queue with owners.</p></div>`
   - Why it matters: The taxonomy becomes actionable when the reader can build the report that turns failure labels into engineering work.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: MLOps or Demo agents may want this connected to existing tracing tooling.

7. Chapter 9 project ideas need explicit difficulty and time labels.
   - Location: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`, project callout titles around lines 245, 249, and 253.
   - Old text: `<div class="callout-title">Project Idea A: A Streaming Drift Detector With a Real Engine <span class="exercise-type coding">Coding</span></div>`
   - New text: `<div class="callout-title">Project Idea A: A Streaming Drift Detector With a Real Engine <span class="exercise-type coding">Beginner-friendly coding, 60 minutes</span></div>`
   - Old text: `<div class="callout-title">Project Idea B: Fleet-Merged Monitoring From Per-Replica Sketches <span class="exercise-type coding">Coding</span></div>`
   - New text: `<div class="callout-title">Project Idea B: Fleet-Merged Monitoring From Per-Replica Sketches <span class="exercise-type coding">Intermediate coding, 2 hours</span></div>`
   - Old text: `<div class="callout-title">Project Idea C: Close the Loop With Automated Retraining <span class="exercise-type analysis">Analysis</span></div>`
   - New text: `<div class="callout-title">Project Idea C: Close the Loop With Automated Retraining <span class="exercise-type analysis">Advanced analysis and coding, 2 to 4 hours</span></div>`
   - Why it matters: The projects are substantive, but the agent checklist requires difficulty labels and range. This fix preserves the existing projects and improves scanability.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Suggested Mini-Builds

1. Remote Feature Builder
   - Section: 7.8, Spark Connect
   - Skills demonstrated: remote DataFrame plans, governed cluster execution, training-shard materialization, manifest logging
   - Portfolio value: HIGH
   - Difficulty: Beginner, 45 minutes

2. Engine Selection Bakeoff
   - Section: 8.7, AI-native data engines
   - Skills demonstrated: workload classification, Spark versus Ray Data or Daft versus Lance, metric selection, handoff artifact design
   - Portfolio value: MEDIUM
   - Difficulty: Intermediate, 60 minutes

3. Precision Budget Report
   - Section: 15.8, FP8 and microscaling
   - Skills demonstrated: numeric-format choice, communication volume accounting, scale metadata reasoning, low-precision deployment review
   - Portfolio value: HIGH
   - Difficulty: Intermediate, 45 minutes

4. Mini GraphRAG Router
   - Section: 36.6, GraphRAG case study
   - Skills demonstrated: entity extraction, graph construction, vector retrieval, graph retrieval, query routing, retrieval evaluation
   - Portfolio value: HIGH
   - Difficulty: Advanced, 2 to 4 hours

5. Semantic-ID Candidate Source
   - Section: 38.3, generative recommenders
   - Skills demonstrated: embedding quantization, sequence prediction, candidate generation, retrieval comparison, serving-contract preservation
   - Portfolio value: HIGH
   - Difficulty: Advanced, 2 to 4 hours

6. Agent Failure Triage Board
   - Section: 32.9, multi-agent failure debugging
   - Skills demonstrated: tracing, failure taxonomy, CI reporting, repair queue design
   - Portfolio value: HIGH
   - Difficulty: Intermediate, 60 minutes

### Chapter Project Suggestion

- Project description: A cross-part "Production AI Systems Portfolio" where the reader builds four small system artifacts: a remote feature builder, a drift detector, a retrieval router, and an agent failure triage board. Each artifact is a concrete, bounded version of a production control loop.
- Connects: Chapter 7 Spark Connect, Chapter 8 AI data pipelines, Chapter 9 streaming drift, Chapter 15 precision budgeting, Chapter 24 serving disaggregation, Chapter 36 GraphRAG, Chapter 38 semantic IDs, Chapter 40 agentic systems.
- Real-world analogue: An applied ML platform engineer's interview portfolio, showing data-plane, serving-plane, retrieval-plane, and agent-ops judgment rather than isolated notebook exercises.

### Verification Run

- Ran a git diff name-only check to identify the changed HTML files in scope.
- Ran a git diff stat check to measure the changed surface, 40 HTML files with 489 insertions and 88 deletions.
- Parsed a no-color, zero-context git diff for HTML files to inspect newly added headings, callouts, and project-related keywords.
- Used `Select-String` on high-opportunity files to inspect exact local context and line numbers for proposed insertions.

### Verification Suggestions

- After integration, search the changed HTML files for `You Could Build This`, `Project Idea`, `Beginner`, `Intermediate`, `Advanced`, and time labels. Confirm each modified chapter has 2 to 8 project suggestions, counting existing exercises and newly added build moments.
- Confirm that every added project explicitly names at least one section concept, such as Spark Connect, Ray Data, FP8, GraphRAG, semantic IDs, or MAST.
- Confirm no em dash, en dash, or double hyphen appears in the added project text.
- Confirm project count remains below 8 per chapter. This report intentionally adds at most one build moment per target section.

### Blockers

- None for report generation.
- I did not edit book HTML because the user explicitly constrained this pass to a report.

### Summary

NEEDS MORE BUILDS in the newly added advanced current-practice material. The diff substantially improves currency and real-world framing, and Chapter 9 already has strong project coverage. The highest-value next move is to add short, labeled "You Could Build This" moments at cognitive peaks so the reader leaves the new material with concrete portfolio artifacts, not only updated facts.

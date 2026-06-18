## Engagement Report

Agent: 16 Engagement Designer  
Mode: suggest  
Scope: new material visible in current git diff only  
Files changed: none in book HTML; this report only

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

### Existing Engagement Inventory

The new diff already adds strong engagement variety: one new illustration and application path table in the preface, multiple research-frontier callouts, warning boxes, key-insight boxes, practical examples, a fun note in recommender evaluation, and concrete system scenarios in fraud detection, edge AI, robotics, GraphRAG, and generative recommendation. The additions are generally lively and current.

No TIER 1 blocking engagement defects were found. The best improvements are TIER 2 and TIER 3 hook upgrades for dense advanced material that currently opens with taxonomy or policy prose before giving the reader a concrete situation.

### Top Issues

1. Spark Connect section opens with architecture prose before giving the reader a reason to care.
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, line 248, first paragraph after `<h2>5. Spark 4 and Spark Connect: The Remote DataFrame Client`
   - Old text: "Spark 4 makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver. Spark Connect, documented in the <a href="https://spark.apache.org/docs/latest/spark-connect-overview.html" target="_blank" rel="noopener">Apache Spark Connect overview</a>, separates the client from the Spark cluster through a remote protocol. The client builds unresolved DataFrame plans, sends them to a Spark Connect server, and receives results, while the server owns analysis, optimization, execution, scheduling, and access to cluster resources. The <a href="https://spark.apache.org/docs/latest/" target="_blank" rel="noopener">Spark documentation</a> presents Connect as a way to run client applications from anywhere, and the Spark 4 line is the moment this becomes central to how Python applications embed Spark without becoming Spark drivers themselves."
   - New text: "Imagine your feature service needs Spark-scale joins, but you do not want every notebook, API process, or scheduled job to become a fragile Spark driver. Spark 4 makes that production pattern explicit. Spark Connect, documented in the <a href="https://spark.apache.org/docs/latest/spark-connect-overview.html" target="_blank" rel="noopener">Apache Spark Connect overview</a>, separates the client from the Spark cluster through a remote protocol. The client builds unresolved DataFrame plans, sends them to a Spark Connect server, and receives results, while the server owns analysis, optimization, execution, scheduling, and access to cluster resources. The <a href="https://spark.apache.org/docs/latest/" target="_blank" rel="noopener">Spark documentation</a> presents Connect as a way to run client applications from anywhere, and the Spark 4 line is the moment this becomes central to how Python applications embed Spark without becoming Spark drivers themselves."
   - Why it matters: The replacement turns an abstract architecture update into a concrete pain point before naming the protocol.
   - Tier: TIER 2 (HIGH)
   - Action: SEND FOR REVIEW
   - Potential conflicts: none

2. Dataset governance section has good substance but could open with a memorable deletion scenario.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, line 238, first paragraph after `<h2>6. Dataset Governance for Foundation-Model Corpora`
   - Old text: "Versioning tells you which bytes a model saw; governance tells you whether those bytes were allowed to be there, whether they should be removed later, and whether another team can understand the corpus without interviewing the people who built it. Foundation-model corpora need this because their failure modes are not only technical. A deduplicated web crawl can still contain licensed material with incompatible terms, personal data that should have been filtered, benchmark examples that contaminate evaluation, or source domains that make the model brittle in one language and overconfident in another. The dataset snapshot is therefore not complete until it carries a governance manifest beside its content hash."
   - New text: "Suppose a data owner asks you to remove one licensed source from a trillion-token corpus after three models have already trained on it. A content hash can tell you which bytes were present, but it cannot tell you whether those bytes were allowed, who approved them, which filters touched them, or which future snapshots must exclude them. Versioning tells you which bytes a model saw; governance tells you whether those bytes were allowed to be there, whether they should be removed later, and whether another team can understand the corpus without interviewing the people who built it. Foundation-model corpora need this because their failure modes are not only technical. A deduplicated web crawl can still contain licensed material with incompatible terms, personal data that should have been filtered, benchmark examples that contaminate evaluation, or source domains that make the model brittle in one language and overconfident in another. The dataset snapshot is therefore not complete until it carries a governance manifest beside its content hash."
   - Why it matters: The scenario creates a practical stakes question and gives the reader a reason to care about manifests before the table appears.
   - Tier: TIER 2 (HIGH)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Fact Integrity may want to verify the phrase "trillion-token corpus" against the book's scale language.

3. 2D sparse parallelism callout is accurate but dense, with three consecutive explanatory paragraphs inside one callout.
   - Location: `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`, after line 110, inside `<div class="callout research-frontier">`
   - Old text: "The simple "one row lives on one shard" story is the right mental model, but the largest recommender jobs now use a richer two-dimensional layout. Within one replica group, embedding tables are split by table, by row, by column, or by a grid that shards both rows and columns. Across replica groups, the same sharded layout is data-parallel, so each group processes a different slice of the batch and later synchronizes updates. Meta and PyTorch describe this as <a href="https://pytorch.org/blog/scaling-recommendation-2d-sparse-parallelism/" target="_blank" rel="noopener">2D sparse parallelism</a>: model parallelism inside a group for capacity and bandwidth, data parallelism across groups for throughput."
   - New text: "Here is the puzzle: one embedding table is too large for one GPU, one hot feature can overload one shard, and one training job still needs every replica group to make progress together. The simple "one row lives on one shard" story remains the right starting mental model, but the largest recommender jobs now use a richer two-dimensional layout. Within one replica group, embedding tables are split by table, by row, by column, or by a grid that shards both rows and columns. Across replica groups, the same sharded layout is data-parallel, so each group processes a different slice of the batch and later synchronizes updates. Meta and PyTorch describe this as <a href="https://pytorch.org/blog/scaling-recommendation-2d-sparse-parallelism/" target="_blank" rel="noopener">2D sparse parallelism</a>: model parallelism inside a group for capacity and bandwidth, data parallelism across groups for throughput."
   - Why it matters: The added puzzle gives readers a compact reason for the otherwise technical taxonomy.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: none

4. Regulatory deployment map is useful, but the opening can feel like a compliance checklist rather than an engineering scene.
   - Location: `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`, line 96, first paragraph in the `Regulatory Deployment Map` callout
   - Old text: "A regulated federated deployment turns the safety stack in Figure 37.8.1 into evidence artifacts. The map below is not legal advice; it is the engineering checklist that lets counsel, clinical safety, and the model team ask the same concrete questions."
   - New text: "Picture the release meeting: counsel asks where protected health information moved, clinical safety asks who can roll back a bad adapter, and the platform team asks which logs prove that every site used the approved aggregation rule. A regulated federated deployment turns the safety stack in Figure 37.8.1 into evidence artifacts. The map below is not legal advice; it is the engineering checklist that lets counsel, clinical safety, and the model team ask the same concrete questions."
   - Why it matters: The replacement keeps the legal caution but makes the checklist feel like an operational story.
   - Tier: TIER 2 (HIGH)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Legal and compliance wording should remain advisory rather than prescriptive.

5. Recommender evaluation warning is strong, but it could ask the reader to perform a concrete audit before the warning ends.
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`, after the second paragraph of the `Evaluation Feedback Loop` warning callout
   - Old text: "This is the online version of the evaluation discipline from <a href="../../part-1-foundations/module-05-evaluating-distributed-ai/index.html">Chapter 5</a> and the experiment lineage of <a href="https://www.kdd.org/kdd2013/" target="_blank" rel="noopener">large-scale online controlled experiments</a>. It also connects directly to counterfactual logging: without propensities, the IPS and doubly robust estimators of Section 4 cannot correct for which items the old policy chose to expose. The feedback loop is therefore a data contract. If the serving fleet does not log the decision ingredients, the training and evaluation fleets cannot later explain whether a measured lift came from the model, the candidate source, the traffic mix, a freshness bug, or a logging artifact."
   - New text: "This is the online version of the evaluation discipline from <a href="../../part-1-foundations/module-05-evaluating-distributed-ai/index.html">Chapter 5</a> and the experiment lineage of <a href="https://www.kdd.org/kdd2013/" target="_blank" rel="noopener">large-scale online controlled experiments</a>. It also connects directly to counterfactual logging: without propensities, the IPS and doubly robust estimators of Section 4 cannot correct for which items the old policy chose to expose. The feedback loop is therefore a data contract. If the serving fleet does not log the decision ingredients, the training and evaluation fleets cannot later explain whether a measured lift came from the model, the candidate source, the traffic mix, a freshness bug, or a logging artifact. As a quick audit, pick any claimed recommender lift and ask whether one artifact contains the user panel, item catalog, source mix, propensities, model versions, feature snapshot, latency, and guardrails. If not, the number is a clue, not a conclusion."
   - Why it matters: The final two sentences convert a warning into a reader-facing diagnostic challenge.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: none

6. The preface application-paths table is valuable, but the entry point could be more playful and reader-directed.
   - Location: `front-matter/preface.html`, line 157, first paragraph before Figure 0.2
   - Old text: "The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Table 0.2 names the ten common paths and points to the chapters that carry the design load. The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text."
   - New text: "If you arrive with a system already in mind, treat the book like a control panel rather than a straight hallway. Start with Part I, then follow the application path whose system you are building. Table 0.2 names the ten common paths and points to the chapters that carry the design load. The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text."
   - Why it matters: The new image and table are navigational tools; this wording primes the reader to use them actively.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Style editor may prefer the current more formal opening.

### Content Additions

1. Optional mini-challenge for AI-native data engines.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, insert after the first paragraph of section 4 and before "Ray Data is built..."
   - Full draft:

```html
<div class="callout self-check">
<div class="callout-title">Self-Check: Name the Expensive Operation</div>
<p>Before choosing Spark, Ray Data, Daft, or Lance, ask one question: what operation is actually expensive? If the answer is a join or aggregation, Spark is still the natural default. If the answer is decoding media, running a Python model, embedding examples, or fetching random multimodal records, the engine choice should follow that operation rather than the habit of using the same DataFrame tool for every job.</p>
</div>
```

   - Tier: TIER 3 (MEDIUM)
   - Rationale: The section already has a library shortcut, but this self-check makes the decision rule more interactive.

2. Optional visual prompt for the preface application paths.
   - Location: `front-matter/preface.html`, after Figure 0.2 and before Table 0.2
   - Full draft:

```html
<div class="callout tip">
<div class="callout-title">Tip: Pick a Path Before You Pick a Chapter</div>
<p>If your goal is a production system, scan the application column first, then read across to the chapters. The path is not a shortcut around fundamentals; it is a way to decide which fundamentals will matter most for the system you are building.</p>
</div>
```

   - Tier: TIER 3 (MEDIUM)
   - Rationale: The table is long; a small tip would make it feel navigable rather than encyclopedic.

### Illustration Opportunities

1. Application paths as a subway map
   - Type: architecture-as-map
   - Scene description: Part I as a central station, with ten colored lines branching toward RAG, LLM serving, recommender systems, federated medical AI, robotics, edge fleets, streaming AI, data engineering, and cluster platforms.
   - Humor angle: Small route signs show common reader personas rushing to different platforms with laptops, badges, or robots.
   - Placement: already present as `front-matter/images/application-reference-paths.png`; verify it visually after image generation.

2. Spark Connect as a remote-control booth
   - Type: system-as-control-room
   - Scene description: A lightweight Python client in a small booth sends a plan to a Spark cluster control room where scheduling, optimization, and execution happen.
   - Humor angle: The client has a tiny steering wheel labeled "plan", while the cluster owns the actual machinery.
   - Placement: after the Spark Connect code block in `section-7.8.html`, if the chapter needs another visual later.

3. Federated release evidence packet
   - Type: compliance-as-checkpoint
   - Scene description: Hospitals pass sealed adapter packages through a checkpoint where logs, aggregation policy, validation results, and rollback plan are stamped before release.
   - Humor angle: The weight file tries to sneak through alone and is sent back for its paperwork.
   - Placement: before Table 37.8.1 in `section-37.8.html`, if Agent 36 adds case-study illustrations.

### Monotonous Stretches

- `section-11.7.html`: The new 2D sparse parallelism research-frontier callout has three information-heavy paragraphs. It is still useful, but it would benefit from the proposed "Here is the puzzle" opening.
- `section-37.8.html`: The new regulatory table is strong but checklist-like. The proposed release-meeting sentence would add a concrete scene.
- `section-8.9.html`: The governance manifest material is clear, but the first paragraph can be made more memorable with the proposed deletion scenario.

### Humor Opportunities

- `section-38.7.html` already adds a strong Twyman corollary fun note. Keep it; it is conceptually aligned and not decorative.
- `front-matter/preface.html` could tolerate the light "control panel rather than a straight hallway" phrase because the paragraph is reader guidance rather than technical proof.
- `section-7.8.html` should stay serious; the useful engagement move is scenario framing, not humor.

### Curiosity Hooks to Add

- Spark Connect: "Imagine your feature service needs Spark-scale joins, but you do not want every notebook, API process, or scheduled job to become a fragile Spark driver."
- Dataset governance: "Suppose a data owner asks you to remove one licensed source from a trillion-token corpus after three models have already trained on it."
- Federated regulation: "Picture the release meeting: counsel asks where protected health information moved, clinical safety asks who can roll back a bad adapter, and the platform team asks which logs prove that every site used the approved aggregation rule."

### Verification Run

- Read complete Agent 16 prompt: `16-engagement-designer.prompt.md`.
- Read `book-writers` skill instructions before acting.
- Ran git status in short format to identify changed tracked HTML files.
- Ran git diff name, stat, and numeric-stat summaries to bound the review scope.
- Ran unified HTML diff inspection and a Python extraction over zero-context HTML diff output to inspect added headings, paragraphs, table captions, and callout titles.
- Spot-read exact surrounding HTML for the highest-priority proposed fixes.

### Verification Suggestions

- After integration, run a diff-scoped scan for section openings that begin with pure taxonomy rather than a question, scenario, or direct reader address.
- Run an HTML scan that counts runs of four or more consecutive `<p>` tags inside each changed hunk, treating callouts, figures, tables, code blocks, and self-checks as breaks.
- Render the preface and visually verify Figure 0.2 plus Table 0.2 on desktop and mobile, since the new table is the longest engagement object in this diff.
- Re-run the global style scan for em dashes, en dashes, double hyphens, and banned phrases after any proposed text is applied.

### Blockers

None.

### Summary

Status: ENGAGING with targeted hook upgrades recommended. The diff adds timely, useful, and varied engagement elements, especially frontier callouts, practical examples, warning boxes, and one fun note. The main improvement is not adding many more boxes; it is sharpening the opening sentence of several dense advanced additions so the reader enters through a concrete situation before the abstraction.

## Student Advocate Report

Agent: 04-student-advocate
Mode: suggest
Scope: new material visible in current git diff only

### Files Inspected

I inspected the current git diff for these changed HTML files:

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

Files changed by this agent: this report only. No book HTML was edited.

### Part A: Clarity Issues

#### Confusion Points, priority ordered

1. Front matter heading now says "Course", but the added material starts with reference paths for builders.
   - Location: `front-matter/preface.html`, line 156.
   - Old text: `<h2>0.5 How to Use This Book in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Student would think: "Am I reading advice for a class, or advice for choosing an application path?"
   - New text: `<h2>0.5 How to Use This Book as a Reference or in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Why it matters: The new section now serves two learning contexts. The title should set that expectation before the large path table appears.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Structural Architect may need to confirm section title numbering in any front matter index.

2. The application path table introduces several specialist terms before a first-time reader has any foothold.
   - Location: `front-matter/preface.html`, lines 157 to 179, immediately before Table 0.2.
   - Old text: `<p>The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Table 0.2 names the ten common paths and points to the chapters that carry the design load. The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text.</p>`
   - Student would think: "I can see the paths, but terms like GraphRAG, DRA-style allocation, KV-cache economics, and agentic retrieval loops arrive before I know which ones matter to me."
   - New text: `<p>The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Table 0.2 names the ten common paths and points to the chapters that carry the design load. Do not worry if some terms in the table are new: each row is a routing aid, not a prerequisite checklist. Read the application name first, then use the chapter links to learn the vocabulary in context. For example, a RAG path will teach retrieval and GraphRAG later, while an internal AI cloud path will teach GPU scheduling and accelerator allocation later.</p>`
   - Why it matters: The table is useful, but it currently behaves like a glossary test. This replacement lowers the entry cost without removing any technical content.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

3. The 2D sparse parallelism addition introduces too many sharding terms in one learning unit.
   - Location: `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`, lines 110 to 111.
   - Old text: `<p>The simple "one row lives on one shard" story is the right mental model, but the largest recommender jobs now use a richer two-dimensional layout. Within one replica group, embedding tables are split by table, by row, by column, or by a grid that shards both rows and columns. Across replica groups, the same sharded layout is data-parallel, so each group processes a different slice of the batch and later synchronizes updates. Meta and PyTorch describe this as <a href="https://pytorch.org/blog/scaling-recommendation-2d-sparse-parallelism/" target="_blank" rel="noopener">2D sparse parallelism</a>: model parallelism inside a group for capacity and bandwidth, data parallelism across groups for throughput.</p>`
   - Student would think: "I just learned row sharding, and now I need table-wise, row-wise, column-wise, grid sharding, replica groups, model parallelism, and data parallelism all at once."
   - New text: `<p>The simple "one row lives on one shard" story remains the right starting point. The largest recommender jobs add one more idea: split the embedding work in two directions. Inside one replica group, the model is split for capacity and bandwidth: a table can stay whole, its rows can be divided, its vector columns can be divided, or both rows and columns can be divided as a grid. Across replica groups, the data is split for throughput: each group processes a different slice of the batch and later synchronizes updates. Meta and PyTorch describe this combination as <a href="https://pytorch.org/blog/scaling-recommendation-2d-sparse-parallelism/" target="_blank" rel="noopener">2D sparse parallelism</a>: model parallelism inside a group, data parallelism across groups.</p>`
   - Why it matters: This keeps the same content but gives students a two-step mental model before naming the individual strategies.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Deep Explanation Designer may prefer an even fuller worked example.

4. The sharding strategy paragraph needs a compact example before the strategy list.
   - Location: `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`, line 111.
   - Old text: `<p>The planner's job is now a placement problem, not a yes-or-no sharding choice. Table-wise sharding keeps a small table whole on one device and avoids intra-table communication, but it fails when one table is too large or too hot. Row-wise sharding spreads a huge table's rows across devices and balances memory, but hot rows can still concentrate lookup traffic. Column-wise sharding splits each vector's dimensions across devices, useful when a table has few rows but wide embeddings. Grid sharding combines row and column splits so a single dominant table can consume the whole cluster without putting all lookup or gradient traffic through one link. TorchRec's <a href="https://meta-pytorch.org/torchrec/concepts.html" target="_blank" rel="noopener">planner and sharder concepts</a> expose these strategies, and the tutorial on <a href="https://docs.pytorch.org/tutorials/intermediate/torchrec_intro_tutorial.html" target="_blank" rel="noopener">large-scale distributed embeddings</a> explains why massive tables require sharding across GPUs.</p>`
   - Student would think: "I know the names now, but I cannot predict which one I would choose for a concrete table."
   - New text: `<p>The planner's job is now a placement problem, not a yes-or-no sharding choice. Use this miniature decision rule. If a table is small, keep it table-wise on one device. If a table has many rows, shard it row-wise so memory spreads across devices. If a table has few rows but very wide vectors, shard it column-wise so no device owns the full vector width. If one table is both huge and wide, use grid sharding so rows and columns are both divided. TorchRec's <a href="https://meta-pytorch.org/torchrec/concepts.html" target="_blank" rel="noopener">planner and sharder concepts</a> expose these strategies, and the tutorial on <a href="https://docs.pytorch.org/tutorials/intermediate/torchrec_intro_tutorial.html" target="_blank" rel="noopener">large-scale distributed embeddings</a> explains why massive tables require sharding across GPUs.</p>`
   - Why it matters: The replacement turns a taxonomy into a usable decision rule, which is the microlearning outcome students need.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Code Pedagogy may want a small TorchRec planner snippet later in the section.

5. The vector compression callout is overloaded with three systems, two metric families, and multiple reranker terms.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`, lines 226 to 227.
   - Old text: `<p>At web scale, vector compression is not a storage-only decision. DiskANN moves much of the index to SSD while preserving high-recall graph search at billion-point scale (<a href="https://papers.nips.cc/paper/9527-rand-nsg-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node" target="_blank" rel="noopener">DiskANN, NeurIPS 2019</a>); RaBitQ-style binary quantization compresses normalized embeddings to about one bit per dimension plus corrective scalars (<a href="https://docs.lancedb.com/indexing/quantization" target="_blank" rel="noopener">LanceDB RaBitQ docs</a>); GPU-native cuVS accelerates graph and IVF-family build and search paths (<a href="https://developer.nvidia.com/blog/optimizing-vector-search-for-indexing-and-real-time-retrieval-with-nvidia-cuvs/" target="_blank" rel="noopener">NVIDIA cuVS vector search</a>). Each choice changes the candidate set that the cross-encoder or late-interaction reranker receives.</p>`
   - Student would think: "I do not know whether DiskANN, RaBitQ, and cuVS are alternatives, layers, or products in different categories."
   - New text: `<p>At web scale, vector compression is not a storage-only decision. Three families solve different parts of the problem. Disk-backed graph indexes such as <a href="https://papers.nips.cc/paper/9527-rand-nsg-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node" target="_blank" rel="noopener">DiskANN</a> keep much of the index on SSD so RAM is no longer the only capacity limit. Binary quantization methods such as RaBitQ shrink each normalized embedding to about one bit per dimension plus correction terms, reducing memory and transfer bytes (<a href="https://docs.lancedb.com/indexing/quantization" target="_blank" rel="noopener">LanceDB RaBitQ docs</a>). GPU-native libraries such as cuVS accelerate graph and IVF-family build and search paths when the bottleneck is compute or indexing throughput (<a href="https://developer.nvidia.com/blog/optimizing-vector-search-for-indexing-and-real-time-retrieval-with-nvidia-cuvs/" target="_blank" rel="noopener">NVIDIA cuVS vector search</a>). The student rule is simple: compression changes which candidates reach the reranker, so storage savings and final answer quality must be measured together.</p>`
   - Why it matters: The revised paragraph groups tools by purpose and ends with the learner's actionable rule.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Fact Checker should verify the wording for RaBitQ if this text is applied.

6. The GraphRAG addition needs a tiny query example before the pipeline list.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`, line 221.
   - Old text: `<p>In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards. The offline pipeline now has an entity extraction job, a graph build job, a community summarization job, and a synchronization job that keeps graph nodes linked to chunk identifiers and access-control metadata. The online path becomes route, graph or vector or both, merge evidence, rerank, assemble context. Use graph retrieval when the query asks about relationships, themes, neighborhoods, or multi-hop joins; use vector retrieval when the query asks for a specific passage-level fact; fuse them when the query needs both.</p>`
   - Student would think: "I understand there is a graph, but I cannot yet picture when the router would choose it."
   - New text: `<p>In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards. A query like "which services depend on the payment API?" should follow graph edges; a query like "what did the incident report say about timeout retries?" should retrieve passage chunks; a query like "which payment-dependent services had timeout incidents?" needs both. The offline pipeline therefore has an entity extraction job, a graph build job, a community summarization job, and a synchronization job that keeps graph nodes linked to chunk identifiers and access-control metadata. The online path becomes route, graph or vector or both, merge evidence, rerank, assemble context.</p>`
   - Why it matters: The example gives students an immediate classification test before they meet the distributed pipeline.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

7. MAST appears as an acronym in the title and body without expansion or a one-sentence purpose statement.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`, lines 213 to 214.
   - Old text: `<div class="callout-title">MAST Turns Evaluation Failures Into Actionable Defects</div>`
   - Student would think: "What is MAST, and why is this taxonomy different from a normal error label?"
   - New text: `<div class="callout-title">MAST: A Taxonomy for Multi-Agent System Failures</div>`
   - Why it matters: The expanded title makes the callout scannable and prevents an avoidable acronym stumble.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

8. The MAST body would benefit from one definition before the label set.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`, line 214.
   - Old text: `<p>For this case study, the regression gate should not only score task success; it should label why failed traces failed. The <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">MAST failure taxonomy</a> gives the label set: specification and system-design failures, inter-agent misalignment, and verification or termination failures. Add a failure-labeling pass to the CI report so a drop in quality becomes a work queue. "Specification" failures go to prompt, role, and tool-schema owners. "Misalignment" failures go to orchestration and shared-memory owners. "Verification" failures go to evidence checking, termination predicates, and judge calibration. This is the same production discipline as error budgets in <a href="../../part-7-infrastructure/module-35-reliable-secure-distributed-ai/index.html">Chapter 35</a>: aggregate failure rates matter, but the repair path starts only after failures are typed.</p>`
   - Student would think: "I can follow the labels, but I do not know whether MAST is a benchmark, a paper, or a diagnostic method."
   - New text: `<p>For this case study, the regression gate should not only score task success; it should label why failed traces failed. The <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">MAST failure taxonomy</a> is a diagnostic label set for multi-agent system traces: instead of saying only "the task failed," it asks which part of the system caused the failure. The labels are specification and system-design failures, inter-agent misalignment, and verification or termination failures. Add a failure-labeling pass to the CI report so a drop in quality becomes a work queue. "Specification" failures go to prompt, role, and tool-schema owners. "Misalignment" failures go to orchestration and shared-memory owners. "Verification" failures go to evidence checking, termination predicates, and judge calibration. This is the same production discipline as error budgets in <a href="../../part-7-infrastructure/module-35-reliable-secure-distributed-ai/index.html">Chapter 35</a>: aggregate failure rates matter, but the repair path starts only after failures are typed.</p>`
   - Why it matters: The learner gets the what and why before the taxonomy is used operationally.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Fact Checker should verify that "multi-agent system traces" matches the paper's exact scope.

#### Hidden Assumptions

- `front-matter/preface.html`: Assumes the reader already understands RAG, GraphRAG, KV cache, MLOps, MoE, non-IID, MARL, DRA, and confidential computing. The table is useful for builders, but novices need the reassurance that these are destinations, not prerequisites.
- `section-11.7.html`: Assumes familiarity with replica groups and the distinction between model parallelism and data parallelism before applying those terms to sparse embeddings.
- `section-36.6.html`: Assumes students can classify DiskANN, RaBitQ, cuVS, cross-encoder reranking, and late-interaction reranking without a grouping sentence.
- `section-40.9.html`: Assumes MAST is recognizable from the acronym alone.

#### Motivation Gaps

- The new application reference table in the preface motivates expert readers well, but students need one sentence explaining that it is a routing guide, not a required vocabulary checklist.
- The 2D sparse parallelism frontier has strong engineering motivation, but the new text would be clearer if it first says what practical pain each sharding strategy solves: too many rows, too-wide vectors, or one dominant table.
- The GraphRAG addition explains the pipeline, but its "why" becomes more concrete after adding a two or three query contrast.

#### Predicted Questions Not Answered

- "If I do not know what GraphRAG or DRA means yet, should I pause the preface and look it up?" Answer after fix: no, the table routes the reader to chapters that teach those terms.
- "When would I choose row-wise versus column-wise sharding?" Answer after fix: rows solve row count and memory spread; columns solve vector width; grid solves a table that is both huge and wide.
- "Are DiskANN, RaBitQ, and cuVS competing choices?" Answer after fix: they are different families, disk-backed indexing, quantization, and GPU acceleration.
- "What does MAST stand for in practice?" Answer after fix: a diagnostic taxonomy for labeling multi-agent trace failures.

#### Engagement Risks

- The front matter Table 0.2 is dense. It is valuable, but without a short "how to read this table" bridge it can feel like a wall of unfamiliar systems terms.
- Section 11.7's frontier paragraph is current and relevant, but it compresses a full systems design space into two paragraphs.
- Section 36.6's compression and reranking callout risks feeling like a shopping list of systems rather than a learning unit.

### Part B: Microlearning Structure

#### Overloaded Units

1. `section-11.7.html`, Research Frontier: 2D Sparse Parallelism for Embedding Tables.
   - New concepts in the added unit: replica group, table-wise sharding, row-wise sharding, column-wise sharding, grid sharding, model parallelism, data parallelism, placement planner.
   - Split into: first paragraph for the two-axis mental model, second paragraph for the four sharding choices as a decision rule.

2. `section-36.6.html`, Compression and Reranking Must Be Tuned Together.
   - New concepts in the added unit: DiskANN, RaBitQ, cuVS, graph index, IVF-family index, cross-encoder reranker, late-interaction reranker, recall@100, nDCG@10.
   - Split into: first paragraph groups the system families by purpose, second paragraph explains the one-pass metric rule.

#### Missing Structure Elements

1. `front-matter/preface.html`, application reference paths.
   - Missing: prerequisite boundary.
   - Fix: Add the "Do not worry if some terms in the table are new" sentence in issue 2.

2. `section-40.9.html`, MAST callout.
   - Missing: definition before use.
   - Fix: Apply the expanded callout title and the definition sentence in issues 7 and 8.

#### Delayed Examples

1. `section-36.6.html`, GraphRAG production pattern.
   - First concrete routing example appears only after the pipeline is described.
   - Fix: Move the query examples to the start of the second paragraph as drafted in issue 6.

2. `section-11.7.html`, 2D sparse parallelism.
   - The concrete choice pattern appears only implicitly inside the taxonomy.
   - Fix: Replace the second paragraph with the miniature decision rule in issue 4.

#### Prerequisite Violations

1. `front-matter/preface.html`: Uses advanced application terms in a front matter routing table before the chapters that define them.
   - Fix: Add the routing-guide caveat in issue 2.

2. `section-40.9.html`: Uses "MAST" before expansion or definition.
   - Fix: Apply issues 7 and 8.

#### Sections Without Closure

No new diff hunk clearly ends a section without closure. The main closure need is local: the overloaded new callouts should end with a student-facing rule, which issues 4 and 5 provide.

### Tri-Audience Balance Check

- Students: Mostly served, but the added current-system material needs more definition-before-use in the preface, Section 11.7, Section 36.6, and Section 40.9.
- Engineers: Strongly served. The new material is practical, current, and operationally grounded.
- Researchers: Strongly served through recent systems, frontier callouts, and linked papers or documentation.

### Verification Suggestions

- Run the git whitespace check to catch whitespace issues after integration.
- Run a targeted banned punctuation scan on any applied fixes: search for em dashes, en dashes, and double hyphens in the edited HTML and this report.
- Re-open `front-matter/preface.html` after applying the heading change and verify table numbering still reads Table 0.2, Table 0.3, and Table 0.4 in order.
- For Section 11.7, ask one reader to answer: "Which sharding strategy would you use for a table with many rows and narrow vectors?" The expected answer is row-wise.
- For Section 36.6, ask one reader to classify DiskANN, RaBitQ, and cuVS by purpose. The expected categories are disk-backed index, quantization, and GPU acceleration.
- For Section 40.9, verify that the MAST link target supports the proposed "diagnostic label set for multi-agent system traces" phrasing.

### Summary

- Clarity: MOSTLY CLEAR, with several high-impact definition and cognitive-load fixes needed.
- Microlearning structure: ADEQUATE, but the new current-system callouts need smaller entry steps.
- Estimated fixes needed: 8 concrete fixes, 6 high priority and 2 medium priority.
- Blockers: None. This agent did not edit book HTML by instruction.

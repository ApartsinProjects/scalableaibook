## Self-Containment Verifier Report

Agent: 21-self-containment-verifier

Mode: suggest

Scope: new material in the tracked HTML working diff at review time. I did not edit book HTML.

Overall verdict: MOSTLY SELF-CONTAINED

### Files Inspected

Inspected the added or changed material visible in `git diff` for these 40 tracked HTML files:

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

### Missing Background Checklist

1. Application-path acronyms and frontier terms in the preface: `front-matter/preface.html`, line 157 and Table 0.2
   - Currently available: PARTIAL. The target chapters define the terms later, but the preface now uses `RAG`, `LLM`, `MARL`, `MoE`, `SLO`, `GraphRAG-style`, and `DRA-style` before the reader has reached those chapters.
   - Severity: IMPORTANT
   - Recommendation: local addition
   - Suggested content: add one short glossary bridge before Figure 0.2 so the preface remains self-contained as an entry point.

2. Spark Connect unresolved plan terminology: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, line 248
   - Currently available: PARTIAL. Earlier Spark sections explain DataFrames and query planning, but the new remote-client material uses "unresolved DataFrame plans" before giving a local gloss.
   - Severity: OPTIONAL
   - Recommendation: local replacement
   - Suggested content: define an unresolved plan as a recipe that names operations before the server binds them to tables, columns, statistics, and physical operators.

3. Runnable Ray Data example missing `embed_images`: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, lines 196 to 202
   - Currently available: NO for the code symbol. The concept of GPU batch inference is explained, but `embed_images` appears as an undefined function in the example.
   - Severity: IMPORTANT
   - Recommendation: local addition
   - Suggested content: add a small placeholder function that makes the example structurally runnable, or state explicitly that production code would replace it with a model call.

4. GRPO and group advantage in RLVR pipeline anatomy: `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`, lines 161 and 172
   - Currently available: PARTIAL. The section has RLHF and policy-gradient context, but the new table assumes the reader understands why group-relative advantage removes the value model.
   - Severity: OPTIONAL
   - Recommendation: refresher insert
   - Suggested content: add one sentence before the table that defines GRPO in systems terms.

### Chapter Prerequisite Map

#### From Earlier Chapters

- Part I foundations: scale-out loop, failure vocabulary, communication primitives, scalability and cost models.
- Chapter 5: construct-matched evaluation, SLOs, TTFT, TPOT, goodput, cost, and latency reporting.
- Chapter 7: Spark DataFrames, query planning, shuffles, UDF cost, and Spark-to-training handoff.
- Chapter 8: distributed storage, data loading, versioned datasets, feature engineering, and materialization.
- Chapter 9: event time, online features, delayed labels, drift, and train-serve consistency.
- Chapter 10: distributed optimization, local updates, gradient compression, and all-reduce tradeoffs.
- Chapter 11: embedding tables, sharding, hot rows, caches, and training-serving consistency.
- Chapter 14: FedAvg, non-IID federation, secure aggregation, and adapter-style federation.
- Chapter 15: low-precision training, FP16 and BF16, all-reduce volume, and mixed precision.
- Chapter 16: FSDP, tensor parallelism, pipeline parallelism, DeviceMesh, and distributed checkpointing.
- Chapter 20: rollout infrastructure, RLHF, policy lag, off-policy correction, and weight broadcast.
- Chapter 22: KV cache, PagedAttention, continuous batching, and speculative decoding.
- Chapter 24: prefill, decode, disaggregated serving, KV transfer, and LLM-serving SLOs.
- Chapter 25: RAG, ANN, vector compression, reranking, GraphRAG, and governance-aware retrieval.
- Chapter 26: model registry, lineage, drift monitoring, promotion gates, and production MLOps.
- Chapters 27 to 32: multi-agent systems, MARL, orchestration, MCP, A2A, shared state, and evaluation.
- Chapters 33 to 35: cluster scheduling, edge deployment, reliability, privacy, and secure distributed AI.

#### From Appendices

- Appendix B: runnable cluster lab and reproducibility checks.
- Appendix C: notation and distributed-systems glossary.

#### Missing Entirely

- None detected as blocking. All new advanced concepts are either locally defined, linked to an external primary source, or connected to an earlier chapter. The four items above need local support to make the new material smoother for readers who enter at the preface or at a later section.

### Recommendations by Type

#### Local Additions

1. Add a preface glossary bridge before Figure 0.2.
   - Location: `front-matter/preface.html`, after the paragraph beginning "The book can also be read as a reference for application builders." and before `<figure class="illustration">`.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Old text: `The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text.</p>`
   - New text: `The table is deliberately application-oriented: it tells a retrieval-augmented generation (RAG) engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text.</p><p>Read the application labels as a lightweight glossary. RAG means a system that retrieves external evidence before asking a language model to answer. LLM serving means running large language models under latency and cost constraints. MARL means multi-agent reinforcement learning, where several policies learn from shared interaction. MoE means mixture of experts, a model that routes each token to a subset of expert networks. SLO means service-level objective, the latency, reliability, or quality target a production system promises to meet.</p>`
   - Why it matters: The preface is a first-contact entry point. A reader should not need Chapter 25 or Chapter 30 to decode the route table.
   - Potential conflicts: None, but the added paragraph should preserve the current Table 0.2 numbering.

2. Make the Ray Data example self-contained by defining `embed_images`.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, inside Code 8.7.3, after `def clean_caption(batch): ... return batch` and before the pipeline call.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Old text: `def clean_caption(batch):\n    batch["caption"] = batch["caption"].str.strip().str.lower()\n    return batch\n\n(\n    ds.map_batches(clean_caption, batch_format="pandas")\n      .map_batches(embed_images, num_gpus=1, batch_size=128)`
   - New text: `def clean_caption(batch):\n    batch["caption"] = batch["caption"].str.strip().str.lower()\n    return batch\n\ndef embed_images(batch):\n    # Production code would call a GPU model here and return one vector per row.\n    batch["image_embedding"] = [[0.0] * 4 for _ in range(len(batch))]\n    return batch\n\n(\n    ds.map_batches(clean_caption, batch_format="pandas")\n      .map_batches(embed_images, num_gpus=1, batch_size=128)`
   - Why it matters: The section teaches engine choice with a code example. An undefined function turns a self-contained teaching example into pseudocode without saying so.
   - Potential conflicts: The placeholder vector is intentionally tiny. If the Code Pedagogy agent prefers realistic embeddings, replace the body with a real model call, but keep the local function definition.

#### Local Replacements

1. Gloss Spark Connect's unresolved plan.
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, line 248.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Old text: `The client builds unresolved DataFrame plans, sends them to a Spark Connect server, and receives results, while the server owns analysis, optimization, execution, scheduling, and access to cluster resources.`
   - New text: `The client builds unresolved DataFrame plans, meaning recipes that name transformations before the server binds them to concrete tables, columns, statistics, and physical operators. It sends those plans to a Spark Connect server and receives results, while the server owns analysis, optimization, execution, scheduling, and access to cluster resources.`
   - Why it matters: This keeps the remote-client concept understandable without forcing a reread of earlier query-planning material.
   - Potential conflicts: None.

#### Refresher Inserts

1. Define GRPO before the RLVR pipeline table.
   - Location: `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`, after the paragraph beginning "Two shifts define the current frontier." and before `<div class="comparison-table">`.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Old text: `</div>\n<div class="comparison-table">\n<div class="comparison-table-title">RLVR and GRPO Pipeline Anatomy</div>`
   - New text: `</div>\n<p>Quick refresher: GRPO, group relative policy optimization, scores several completions for the same prompt and turns their relative reward differences into the advantage signal for the policy update. The systems payoff is that the trainer can compute the advantage by grouping rollouts by prompt id, without serving and synchronizing a separate value model.</p>\n<div class="comparison-table">\n<div class="comparison-table-title">RLVR and GRPO Pipeline Anatomy</div>`
   - Why it matters: The table names "group advantage" as the reason GRPO avoids a value model, but a reader who has not followed current reasoning-model training literature needs the one-sentence mechanism.
   - Potential conflicts: None.

### Appendix Additions

No appendix additions are required for the inspected diff. Appendix C already carries the right role for full notation and glossary support.

### New Cross-References Needed

No new local cross-reference is required for self-containment. A lightweight optional improvement would be to link the new preface glossary sentence for RAG to Chapter 25, LLM serving to Chapter 24, MARL to Chapter 30, and SLO to Chapter 5, but the self-containment need is the local gloss itself, not the link.

### Duplicate Content Check

No problematic duplicate explanation was found in the added material. The repeated themes, such as construct-matched evaluation, GraphRAG, governed RAG, dataset governance, MAST, MCP, and A2A, appear as short recaps or application-specific translations rather than parallel full-depth treatments.

### Verification Run

- Ran git diff summary, numeric summary, and name-only views to confirm the tracked HTML scope: 40 files, 489 insertions and 88 deletions.
- Read zero-context git diff hunks for all modified tracked HTML files, grouped by book part.
- Ran a Python check over added HTML lines only:
  - Added HTML lines scanned: 489
  - Local `href` targets missing: 0
  - Added-line style flags for em dash, en dash, or double hyphen: 0
- Files changed by this agent: only this report file.
- Book HTML changed by this agent: none.

### Blockers

No blockers. The review was limited to tracked HTML visible in `git diff`; untracked generated assets and untracked report files were not treated as book material except where tracked HTML referenced them.

### Summary

The new material is mostly self-contained. It does a good job of pairing frontier references with local explanations, especially for 2D sparse parallelism, feature stores, KV-cache policies, GraphRAG, governed RAG, FedLoRA, MAST, MCP, A2A, and semantic IDs. The remaining gaps are local entry-point support issues: define preface acronyms before the reader reaches the chapters, make the Ray Data example runnable, gloss Spark Connect's unresolved plans, and add a one-sentence GRPO refresher before the RLVR table.

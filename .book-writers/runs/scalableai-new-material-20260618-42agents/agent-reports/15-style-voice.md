## Style and Voice Report

Agent: 15-style-voice
Mode: suggest
Scope: new material visible in current `git diff`
Files changed: none in book HTML. This report file only.

### Files Inspected

Inspected 40 changed HTML files from the working diff:

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

### Tone Issues

1. `front-matter/preface.html:181`: added paragraph shifts from book voice into curriculum administration, with repeated course and semester terminology.
   - Old text: `<p>The book is larger than any single semester, by design: it supports five distinct graduate courses that share Part I and then diverge. Each course path maps to a thirteen-to-fifteen week semester and ends in the <a href="../part-8-case-studies/module-41-capstone-project-design/index.html">Chapter 41</a> capstone, where students design, build, and evaluate a distributed AI system of their own and defend its distribution axis, speedup, scaling efficiency, and cost. The five paths are Big Data Algorithms for AI, Distributed Machine Learning, Parallel Deep Learning Systems, Distributed AI and Multi-Agent Systems, and Distributed AI Infrastructure. Table 0.3 gives one path in full as a worked example; the complete week-by-week maps for all five live in the plan that accompanies this book and in the instructor materials of Section 0.8.</p>`
   - New text: `<p>The book is larger than any single reading path, by design: it supports five structured paths that share Part I and then diverge. Each path spans thirteen to fifteen weeks of graduate study and ends in the <a href="../part-8-case-studies/module-41-capstone-project-design/index.html">Chapter 41</a> capstone, where students design, build, and evaluate a distributed AI system of their own and defend its distribution axis, speedup, scaling efficiency, and cost. The five paths are Big Data Algorithms for AI, Distributed Machine Learning, Parallel Deep Learning Systems, Distributed AI and Multi-Agent Systems, and Distributed AI Infrastructure. Table 0.3 gives one path in full as a worked example; the complete week-by-week maps for all five live in the plan that accompanies this book and in the instructor materials of Section 0.8.</p>`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Curriculum or instructor-material agents may prefer to retain explicit "course path" wording. If so, keep "course" only in captions and instructor-facing labels, not in the reader-facing explanatory paragraph.

2. `front-matter/preface.html:182`: caption repeats semester and course wording.
   - Old text: `<div class="table-caption"><strong>Table 0.3:</strong> One example semester map, Course Path 1 (Big Data Algorithms for AI). Every path begins in Part I and ends in the Chapter 41 capstone.</div>`
   - New text: `<div class="table-caption"><strong>Table 0.3:</strong> One example thirteen-week reading map, Path 1 (Big Data Algorithms for AI). Every path begins in Part I and ends in the Chapter 41 capstone.</div>`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Same as above.

### Readability Issues

1. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html:325`: 73-word sentence overloads the KV-cache policy point.
   - Old text: `The practical 2026 rule is no longer "turn on a KV cache." It is "decide what gets full-precision GPU residency, what is quantized, what can be evicted, and what must be routed back to the machine that already owns the prefix." Attention sinks and recent tokens are usually protected because many eviction papers find them disproportionately important, low-attention middle tokens are candidates for compression, and shared prefixes should be reference-counted rather than copied.`
   - New text: `The practical 2026 rule is no longer "turn on a KV cache." It is a residency policy: decide what stays in full precision on the GPU, what gets quantized, what can be evicted, and what must route back to the machine that already owns the prefix. Most systems protect attention sinks and recent tokens because eviction studies find them disproportionately important. Low-attention middle tokens are better candidates for compression, and shared prefixes should be reference-counted rather than copied.`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

2. `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html:145`: 60-word opening sentence plus a dense vendor list makes the paragraph heavy.
   - Old text: `The 2026 cluster-platform frontier is moving from "request N GPUs" to "request an accelerator topology with named properties." Kubernetes <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/" target="_blank" rel="noopener">Dynamic Resource Allocation</a> gives devices the same declarative flavor that persistent volumes gave storage: a job can ask for a class of accelerators, topology constraints, MIG slices, or a multi-device allocation rather than a bare integer such as <code>nvidia.com/gpu: 8</code>. On top of that substrate, <a href="https://kueue.sigs.k8s.io/" target="_blank" rel="noopener">Kueue</a> manages admission, cohorts, and quota borrowing, while <a href="https://github.com/NVIDIA/KAI-Scheduler" target="_blank" rel="noopener">NVIDIA KAI Scheduler</a> focuses on topology-aware gang placement and fractional GPU sharing.`
   - New text: `The 2026 cluster-platform frontier is moving from "request N GPUs" to "request an accelerator topology with named properties." Kubernetes <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/" target="_blank" rel="noopener">Dynamic Resource Allocation</a> gives devices the same declarative flavor that persistent volumes gave storage. A job can ask for a class of accelerators, topology constraints, MIG slices, or a multi-device allocation instead of a bare integer such as <code>nvidia.com/gpu: 8</code>. On top of that substrate, <a href="https://kueue.sigs.k8s.io/" target="_blank" rel="noopener">Kueue</a> manages admission, cohorts, and quota borrowing. <a href="https://github.com/NVIDIA/KAI-Scheduler" target="_blank" rel="noopener">NVIDIA KAI Scheduler</a> focuses on topology-aware gang placement and fractional GPU sharing.`
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

3. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html:149`: 84-word sentence reads like a pasted metric inventory.
   - Old text: `Add these columns to Table 36.8.1 for any regulated or multi-tenant deployment: authorization pass rate, percentage of retrieved chunks permitted for the caller; citation traceability, percentage of answer claims linked to chunk identifiers and source documents; deletion SLA, time from source deletion or permission revocation to disappearance from retrieval; prompt-injection detection rate on adversarial documents; poisoning detection rate on suspicious new corpus entries; and audit completeness, percentage of answers with retriever version, index version, prompt template version, and source chunk IDs logged.`
   - New text: `For regulated or multi-tenant deployments, Table 36.8.1 should track five policy metrics. Authorization pass rate measures the percentage of retrieved chunks permitted for the caller. Citation traceability measures the percentage of answer claims linked to chunk identifiers and source documents. Deletion SLA measures the time from source deletion or permission revocation to disappearance from retrieval. Prompt-injection and poisoning detection rates measure adversarial retrieved text and suspicious new corpus entries. Audit completeness measures the percentage of answers with retriever version, index version, prompt template version, and source chunk IDs logged.`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Table editor may need to mirror the same wording in the actual table.

4. `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html:224`: the decision sentence packs six design choices into one sentence.
   - Old text: `<p><strong>Decision:</strong> They start from a TorchTitan-style layout rather than wiring every process group by hand: one <code>DeviceMesh</code> names the data, tensor, and pipeline dimensions; FSDP2 shards parameters across the data dimension; tensor parallelism splits the large matrix multiplies within each block; pipeline parallelism splits layers across stages; and activation checkpointing trades recompute for memory.</p>`
   - New text: `<p><strong>Decision:</strong> They start from a TorchTitan-style layout rather than wiring every process group by hand. One <code>DeviceMesh</code> names the data, tensor, and pipeline dimensions. FSDP2 shards parameters across the data dimension, tensor parallelism splits the large matrix multiplies within each block, pipeline parallelism splits layers across stages, and activation checkpointing trades recompute for memory.</p>`
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Style Violations

1. `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html:162`: explanatory "just" weakens the otherwise precise benchmark point.
   - Old text: `That matters because a modern serving benchmark is no longer just "tokens per second on a model." It is a workload definition plus an arrival pattern plus latency constraints, and for generated text those constraints must separate TTFT from TPOT or inter-token latency.`
   - New text: `That matters because a modern serving benchmark is no longer "tokens per second on a model." It is a workload definition plus an arrival pattern plus latency constraints, and for generated text those constraints must separate TTFT from TPOT or inter-token latency.`
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

2. `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html:108`: "just another" is casual and slightly dismissive.
   - Old text: `For a production cascade, late interaction is not "just another reranker." It changes the candidate budget.`
   - New text: `For a production cascade, late interaction is not another reranker in the same slot. It changes the candidate budget.`
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

3. `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html:228`: "not just compression" is a repeated generic contrast pattern. The rewrite is more direct and slightly warmer.
   - Old text: `This is not just compression. It changes the privacy and governance surface, because the adapter is the thing that can leak site data, the thing that robust aggregation must inspect, and the thing a regulator can version as a controlled model modification.`
   - New text: `Compression is only the first effect. The adapter also changes the privacy and governance surface, because it can leak site data, robust aggregation must inspect it, and a regulator can version it as a controlled model modification.`
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Illustration Opportunities

1. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`: the KV-cache residency policy paragraph is conceptually strong but dense.
   - Type: concept-as-control-room
   - Scene idea: A cache control room with labeled lanes for full-precision GPU residency, quantized storage, eviction candidates, and prefix routes back to owner machines. The operator protects "attention sinks" and recent tokens behind a guarded velvet rope while low-attention middle tokens wait in a compression queue.
   - Placement: after the revised KV-cache policy paragraph.

2. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`: the governance metrics list would benefit from a small policy dashboard visual.
   - Type: architecture-as-dashboard
   - Scene idea: An enterprise RAG dashboard with five gauges: authorization pass rate, citation traceability, deletion SLA, injection or poisoning detection, and audit completeness. Each gauge feeds a release gate marked "ship" or "hold."
   - Placement: after the paragraph that introduces policy metrics.

### Verification Run

- Ran a Git diff file-list command for HTML files to define the scoped file set.
- Ran a Git diff stat command to confirm 40 changed HTML files and 489 insertions.
- Ran a diff-only parser over added lines for punctuation, condescending terms, hedging markers, course terminology, passive-voice patterns, and long sentences.
- Diff-only results: zero prohibited dash characters, zero repeated hyphen sequences, four "just" hits, three course or semester terminology hits, nine added sentences over 50 words.
- Reviewed the strongest style risks manually and provided exact replacement text above.

### Verification Suggestions

- After integration, rerun a diff-only scan for prohibited dash characters and repeated hyphen sequences; expected count is zero.
- Rerun a diff-only scan for `simply`, `obviously`, `trivially`, `of course`, and `just`; expected count is zero or only quoted source text.
- Rerun a diff-only scan for `syllabus`, `course`, `lecture`, `class session`, `semester`, `assignment`, `homework`, and `grading`; expected result is no reader-facing use of these terms for the book itself.
- Recheck added prose for sentences over 50 words; the four readability fixes above should remove the most visible pacing problems.

### Summary

MOSTLY CONSISTENT. The new material generally matches the book voice: confident, technical, and reader-oriented. The main fixes are local: remove reader-facing course terminology from the preface addition, split a few overloaded sentences, and replace a handful of "just" contrasts with more precise phrasing.

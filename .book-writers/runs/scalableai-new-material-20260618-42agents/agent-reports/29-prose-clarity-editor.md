## 29 Prose Clarity Editor Report

Mode: suggest only. Scope was limited to new material visible in the current HTML git diff. I did not edit book HTML.

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

### Top Issues

1. Regulatory RAG metric list is overloaded.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html:149`
   - Old text: `<p>A production enterprise RAG evaluation needs a fourth question beside relevance, faithfulness, and efficiency: did the system obey policy on the exact evidence it used? Add these columns to Table 36.8.1 for any regulated or multi-tenant deployment: authorization pass rate, percentage of retrieved chunks permitted for the caller; citation traceability, percentage of answer claims linked to chunk identifiers and source documents; deletion SLA, time from source deletion or permission revocation to disappearance from retrieval; prompt-injection detection rate on adversarial documents; poisoning detection rate on suspicious new corpus entries; and audit completeness, percentage of answers with retriever version, index version, prompt template version, and source chunk IDs logged.</p>`
   - New text: `<p>A production enterprise RAG evaluation needs a fourth question beside relevance, faithfulness, and efficiency: did the system obey policy on the exact evidence it used? For regulated or multi-tenant deployments, add six columns to Table 36.8.1. Track authorization pass rate, which is the percentage of retrieved chunks the caller may read. Track citation traceability, which is the percentage of answer claims linked to chunk identifiers and source documents. Track deletion SLA, prompt-injection detection rate, poisoning detection rate, and audit completeness. Audit completeness should record the percentage of answers with retriever version, index version, prompt template version, and source chunk IDs logged.</p>`
   - Why it matters: The current version asks the reader to parse an 84-word list with semicolon definitions. Splitting it preserves every metric and makes the table instruction usable.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Data governance agent may prefer table edits instead of prose only.

2. KV-cache policy paragraph stacks too many decisions in one sentence.
   - Location: `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html:325`
   - Old text: `<p>The practical 2026 rule is no longer "turn on a KV cache." It is "decide what gets full-precision GPU residency, what is quantized, what can be evicted, and what must be routed back to the machine that already owns the prefix." Attention sinks and recent tokens are usually protected because many eviction papers find them disproportionately important, low-attention middle tokens are candidates for compression, and shared prefixes should be reference-counted rather than copied. That policy must be evaluated with the same prompts, model, context lengths, and latency target as the service, because an eviction rule that looks harmless on short QA can fail on code editing or legal retrieval where a low-attention token later becomes decisive.</p>`
   - New text: `<p>The practical 2026 rule is no longer "turn on a KV cache." It is to choose a residency policy: which tokens stay in full precision on GPU, which tokens are quantized, which tokens can be evicted, and which prefixes should route back to the machine that already owns them. Most policies protect attention sinks and recent tokens, since eviction studies find them unusually important. Low-attention middle tokens are better candidates for compression, and shared prefixes should be reference-counted rather than copied. Evaluate the policy with the same prompts, model, context lengths, and latency target as the service. A rule that looks harmless on short QA can fail on code editing or legal retrieval, where a low-attention token later becomes decisive.</p>`
   - Why it matters: The rewrite keeps the technical content but changes the passage from one dense rule into a checklist readers can apply.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

3. Kubernetes scheduling update has an acronym stack and a 60-word sentence.
   - Location: `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html:145`
   - Old text: `<p>The 2026 cluster-platform frontier is moving from "request N GPUs" to "request an accelerator topology with named properties." Kubernetes <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/" target="_blank" rel="noopener">Dynamic Resource Allocation</a> gives devices the same declarative flavor that persistent volumes gave storage: a job can ask for a class of accelerators, topology constraints, MIG slices, or a multi-device allocation rather than a bare integer such as <code>nvidia.com/gpu: 8</code>. On top of that substrate, <a href="https://kueue.sigs.k8s.io/" target="_blank" rel="noopener">Kueue</a> manages admission, cohorts, and quota borrowing, while <a href="https://github.com/NVIDIA/KAI-Scheduler" target="_blank" rel="noopener">NVIDIA KAI Scheduler</a> focuses on topology-aware gang placement and fractional GPU sharing. For a distributed training job, these are not administrative details. They decide whether the all-reduce graph of <a href="../../part-1-foundations/module-04-communication-primitives/index.html">Chapter 4</a> lands inside a fast NVLink island, across a rack fabric, or through a slow path that turns the scheduler into the bottleneck.</p>`
   - New text: `<p>The 2026 cluster-platform frontier is moving from "request N GPUs" to "request an accelerator topology with named properties." Kubernetes <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/" target="_blank" rel="noopener">Dynamic Resource Allocation</a> gives devices the same declarative flavor that persistent volumes gave storage. A job can ask for a class of accelerators, topology constraints, MIG slices, or a multi-device allocation instead of a bare integer such as <code>nvidia.com/gpu: 8</code>. On top of that substrate, <a href="https://kueue.sigs.k8s.io/" target="_blank" rel="noopener">Kueue</a> manages admission, cohorts, and quota borrowing. <a href="https://github.com/NVIDIA/KAI-Scheduler" target="_blank" rel="noopener">NVIDIA KAI Scheduler</a> focuses on topology-aware gang placement and fractional GPU sharing. For a distributed training job, these are not administrative details. They decide whether the all-reduce graph of <a href="../../part-1-foundations/module-04-communication-primitives/index.html">Chapter 4</a> lands inside a fast NVLink island, across a rack fabric, or through a slow path that turns the scheduler into the bottleneck.</p>`
   - Why it matters: The current paragraph introduces DRA, Kueue, KAI Scheduler, MIG, NVLink, and gang placement in one breath. The rewrite gives each concept room.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

4. Agent protocol paragraph is accurate but too dense for first exposure.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html:236`
   - Old text: `<p>For agents and tools to interoperate at all, they must agree on protocols. Two are consolidating the field. The <a href="https://modelcontextprotocol.io/specification/2025-06-18" target="_blank" rel="noopener">Model Context Protocol (MCP)</a> standardizes how an agent connects to tools and data sources: a tool server advertises its functions and resources over a uniform interface, and any MCP-speaking agent can call them without bespoke glue, turning the tool layer of Section 2 into a pluggable, discoverable ecosystem. The <a href="https://a2a-protocol.org/latest/specification/" target="_blank" rel="noopener">Agent2Agent (A2A) protocol</a> standardizes the complementary direction: how one agent delegates a task to another, exchanges intermediate state, and reports results, so that a supervisor can fan work out to workers that may run in different processes, on different machines, or even at different organizations. Together MCP and A2A do for agentic systems what the communication primitives of <a href="../../part-1-foundations/module-04-communication-primitives/index.html">Chapter 4</a> did for parallel training: they define the interfaces over which distributed intelligence is exchanged, so that the orchestration engine can treat agents and tools as interchangeable, network-addressable participants.</p>`
   - New text: `<p>Agents and tools need shared protocols before they can interoperate. Two protocols are consolidating the field. The <a href="https://modelcontextprotocol.io/specification/2025-06-18" target="_blank" rel="noopener">Model Context Protocol (MCP)</a> standardizes the tool side. A tool server advertises its functions and resources through one interface, and any MCP-speaking agent can call them without custom glue. The <a href="https://a2a-protocol.org/latest/specification/" target="_blank" rel="noopener">Agent2Agent (A2A) protocol</a> standardizes the agent side. It describes how one agent delegates a task to another, exchanges intermediate state, and reports results, even when the agents run in different processes, machines, or organizations. Together MCP and A2A play the same role for agentic systems that the communication primitives of <a href="../../part-1-foundations/module-04-communication-primitives/index.html">Chapter 4</a> play for parallel training: they define the interfaces over which distributed intelligence moves.</p>`
   - Why it matters: This is a first-definition paragraph for MCP and A2A in the new material. Shorter definition sentences reduce acronym overload.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Terminology Keeper should confirm whether the book standardizes on "Agent2Agent" or "agent-to-agent" after the linked formal name is introduced.

5. Context engineering paragraph buries the main action in a 50-word list.
   - Location: `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html:193`
   - Old text: `<p>Context engineering is the discipline of curating, compressing, routing, and validating the information that enters an LLM's inference window. The <a href="https://arxiv.org/abs/2507.13334" target="_blank" rel="noopener">2025 survey of context engineering</a> treats retrieval, context processing, context management, RAG, memory systems, tool-integrated reasoning, and multi-agent systems as one field; Anthropic's engineering guide similarly defines it as maintaining the optimal set of tokens around the prompt, tool results, and other state that can land in context. For a single agent this is prompt design plus memory selection. For a team it is a distributed-systems problem: decide which facts enter the shared blackboard, which remain private scratchpad, which tool outputs are trusted as data rather than instructions, which old turns are compacted, and which provenance tags survive so a later agent can verify where a claim came from. A context policy is therefore as operational as a cache policy or a consistency policy. It defines what every agent is allowed to know, forget, cite, and act on.</p>`
   - New text: `<p>Context engineering is the discipline of curating, compressing, routing, and validating the information that enters an LLM's inference window. The <a href="https://arxiv.org/abs/2507.13334" target="_blank" rel="noopener">2025 survey of context engineering</a> treats retrieval, context processing, context management, RAG, memory systems, tool-integrated reasoning, and multi-agent systems as one field. Anthropic's engineering guide makes the same point: the system must maintain the right set of tokens around the prompt, tool results, and other state. For a single agent, this is prompt design plus memory selection. For a team, it becomes a distributed-systems problem. The system must decide which facts enter the shared blackboard, which remain private scratchpad, which tool outputs count as data rather than instructions, which old turns are compacted, and which provenance tags survive for later verification. A context policy is therefore as operational as a cache policy or a consistency policy. It defines what every agent may know, forget, cite, and act on.</p>`
   - Why it matters: The rewrite keeps the list but splits the survey citation, the single-agent contrast, and the team policy into separate steps.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

6. The preface reintroduces course framing in a new paragraph and uses one long sentence.
   - Location: `front-matter/preface.html:181`
   - Old text: `<p>The book is larger than any single semester, by design: it supports five distinct graduate courses that share Part I and then diverge. Each course path maps to a thirteen-to-fifteen week semester and ends in the <a href="../part-8-case-studies/module-41-capstone-project-design/index.html">Chapter 41</a> capstone, where students design, build, and evaluate a distributed AI system of their own and defend its distribution axis, speedup, scaling efficiency, and cost. The five paths are Big Data Algorithms for AI, Distributed Machine Learning, Parallel Deep Learning Systems, Distributed AI and Multi-Agent Systems, and Distributed AI Infrastructure. Table 0.3 gives one path in full as a worked example; the complete week-by-week maps for all five live in the plan that accompanies this book and in the instructor materials of Section 0.8.</p>`
   - New text: `<p>The book is larger than any single semester, by design: it supports five distinct graduate reading paths that share Part I and then diverge. Each path maps to a thirteen-to-fifteen week sequence and ends in the <a href="../part-8-case-studies/module-41-capstone-project-design/index.html">Chapter 41</a> capstone. There, readers design, build, and evaluate a distributed AI system of their own, then defend its distribution axis, speedup, scaling efficiency, and cost. The five paths are Big Data Algorithms for AI, Distributed Machine Learning, Parallel Deep Learning Systems, Distributed AI and Multi-Agent Systems, and Distributed AI Infrastructure. Table 0.3 gives one path in full as a worked example; the complete week-by-week maps for all five live in the plan that accompanies this book and in the instructor materials of Section 0.8.</p>`
   - Why it matters: The rewrite reduces course terminology while preserving the instructor-facing use case.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: If Section 0.5 is intentionally instructor-facing, keep "course" in the heading but avoid using it as the general reader frame.

7. FSDP2 and TorchTitan paragraph ends with a long, abstract sentence.
   - Location: `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html:219`
   - Old text: `The research direction is to make data, tensor, pipeline, and expert sharding orthogonal layers you can stack with a few lines rather than a bespoke framework, which is exactly the 3D-parallelism trade-off space that <a href="../../part-1-foundations/module-03-scalability-performance-models/index.html">Chapter 3</a> taught you to cost out and that <a href="section-16.6.html">Section 16.6</a> reaches through DeepSpeed and Megatron-LM.`
   - New text: `The research direction is to make data, tensor, pipeline, and expert sharding into orthogonal layers. Instead of building a bespoke framework, you should be able to stack those layers with a few lines. That is the same 3D-parallelism trade-off space that <a href="../../part-1-foundations/module-03-scalability-performance-models/index.html">Chapter 3</a> taught you to cost out, and that <a href="section-16.6.html">Section 16.6</a> reaches through DeepSpeed and Megatron-LM.`
   - Why it matters: The sentence carries the chapter bridge, but the original makes the reader hold four sharding types and two cross-references at once.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

8. RLHF infrastructure paragraph uses a single sentence for cause, stale policy, and concept transfer.
   - Location: `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html:158`
   - Old text: `In all four, the off-policy correction of <a href="section-20.5.html">Section 20.5</a> reappears: because generation and training run asynchronously, the samples the learner consumes were produced by a slightly older policy, and the importance-weighting that pays for that lag is the same idea you met for IMPALA, now applied to token sequences.`
   - New text: `In all four stacks, the off-policy correction of <a href="section-20.5.html">Section 20.5</a> reappears. Generation and training run asynchronously, so the learner consumes samples produced by a slightly older policy. The importance weighting that pays for that lag is the same idea you met for IMPALA, now applied to token sequences.`
   - Why it matters: The rewrite preserves the bridge to IMPALA while making the causal chain easier to follow.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Jargon Issues

1. "DRA" and "MIG" in `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html:145`
   - First used: New paragraph on cluster-platform frontier.
   - Defined: DRA is expanded as Dynamic Resource Allocation through link text; MIG is not expanded in the visible sentence.
   - Action: DEFINE HERE for MIG as "MIG slices, NVIDIA Multi-Instance GPU partitions" or add a short parenthetical after first use.
   - Priority: MEDIUM

2. "KV cache", "attention sinks", and "reference-counted" in `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html:325`
   - First used: Likely defined earlier in Chapter 22, but the new callout stacks all three.
   - Defined: Needs cross-chapter or same-section confirmation.
   - Action: ADD CROSS-REF if KV cache and attention sinks are defined earlier. If not, add one parenthetical definition for attention sinks.
   - Priority: MEDIUM

3. "MAST" in `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html:212`
   - First used: New callout title and linked phrase.
   - Defined: The taxonomy is named but the acronym is not expanded in the visible added text.
   - Action: DEFINE HERE by changing the title to `MAST, a Multi-Agent Failure Taxonomy, Turns Evaluation Failures Into Actionable Defects` if that expansion matches the cited source.
   - Priority: MEDIUM

4. "A2A" terminology in `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html:236`
   - First used: Linked as `Agent2Agent (A2A) protocol`.
   - Defined: YES, but nearby text later says `A2A specification`.
   - Action: Standardize on `Agent2Agent (A2A) protocol` for first use, then `A2A protocol`.
   - Priority: LOW

### Jargon Stacks

1. `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html:145`: "Dynamic Resource Allocation, topology constraints, MIG slices, multi-device allocation, Kueue, KAI Scheduler, topology-aware gang placement, fractional GPU sharing"
   - Unpacked version: See Top Issue 3.

2. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html:236`: "MCP, A2A, tool server, resources, uniform interface, bespoke glue, orchestration engine"
   - Unpacked version: See Top Issue 4.

3. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html:193`: "retrieval, context processing, context management, RAG, memory systems, tool-integrated reasoning, multi-agent systems"
   - Unpacked version: See Top Issue 5.

### Acronym Audit

- Acronyms seen in added prose: A2A, ANN, API, CI, DPO, DRA, FP8, GPU, GRPO, HSTU, ITL, JSON, KV, LLM, MARL, MCP, MIG, MLOps, MLPerf, MAST, NCCL, NPU, PPO, QA, RAG, RLHF, RLVR, SDC, SLA, SLO, SSD, TTFT, TPOT.
- Expanded on first visible use within the added material: A2A, MCP, RLVR.
- Missing or uncertain expansion in the added material: ANN, DRA acronym form, FP8, HSTU, ITL, KV, MARL, MAST, MIG, NPU, SDC, SLA, SLO, TTFT, TPOT.
- Recommended action: Do not expand every acronym in every inserted callout. Instead, run a per-chapter first-use check and expand only the first local use when the term is not already defined earlier in that chapter.

### Patterns Found

- Long sentences: Automated scan found 98 added prose sentences at 35 words or more. The highest-impact cases are listed above. Most other long sentences are acceptable research-frontier summaries but should be spot-checked during integration.
- Acronym clustering: New 2024 to 2026 updates often name several tools or protocols in one sentence. This is useful for currency but should be followed by short explanatory sentences.
- Strong passages to preserve: The new preface application-path table is clear and helpful. The sentence "These paths are not shortcuts around the foundations" is a strong transition. The construct-matched evaluation warning in `section-5.3.html` is also conceptually strong, though it should be checked by the evaluation agent for metric precision.

### Verification Run

- Ran `git diff stat` to identify changed HTML files.
- Ran `git diff` on HTML files and inspected added prose in the current working diff.
- Ran an automated added-sentence scan with `C:\Python314\python.exe`; it found 170 added prose records and 98 sentences of 35 or more words.
- Ran `git diff check`; no whitespace errors were reported. Git printed line-ending warnings only.

### Verification Suggestions

- Re-run the added-sentence scan after integration and review any added sentence over 50 words.
- Run a chapter-local acronym first-use audit for the files listed under Jargon Issues.
- Run the global style scan for em dash, en dash, and doubled hyphen characters after all reports are integrated.
- Re-run link validation for the new external links in the MLPerf, Kubernetes, A2A, MCP, Ray Data, Daft, Lance, vLLM, OpenRLHF, and MAST additions.

### Files Changed

- Created this report only: `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-reports/29-prose-clarity-editor.md`
- No book HTML files were changed.

### Blockers

- None for the prose clarity report. Some acronym judgments are marked uncertain because a full per-chapter first-use audit was outside this agent's sentence-level scope.

### Summary

MOSTLY CLEAR. The new material is valuable and current, but several added research-frontier and production-rule paragraphs need sentence splitting before publication. Apply the TIER 2 fixes first because they affect first exposure to new concepts, then handle the TIER 3 rhythm fixes during integration.

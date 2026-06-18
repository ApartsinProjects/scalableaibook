## Readability and Pacing Report

Agent: 30-readability-pacing-editor
Mode: suggest
Scope: new material currently visible in git diff

### Files Inspected

Inspected the full current HTML diff:

front-matter/preface.html; part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html; part-2-distributed-data/module-07-spark-dataframes/section-7.8.html; part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html; part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html; part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html; part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html; part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html; part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html; part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html; part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html; part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html; part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html; part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html; part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html; part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html; part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html; part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html; part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html; part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html; part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html; part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html; part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html; part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html; part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html; part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html; part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html; part-7-infrastructure/module-34-edge-fog-on-device/index.html; part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html; part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html; part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html; part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html; part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html; part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html; part-8-case-studies/module-38-case-distributed-recommendation/index.html; part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html; part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html; part-8-case-studies/module-39-case-multi-agent-robotics/index.html; part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html; part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html.

### Walls of Text

1. part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html:301, "Research Frontier: Prefill/Decode Disaggregation (2024 to 2026)", 193 words in one dense paragraph
   - Suggested breaks: split the paragraph into a signpost paragraph plus a three-item list. This is an enumeration of systems, not a single argument.
   - Add mini-heading: no extra h4 needed inside the callout; use list labels instead.
   - Old text: the single paragraph beginning "Two 2024 systems established the idea."
   - New text:
```html
<p>Two 2024 systems established the core pattern: prefill and decode are different workloads, so the serving fleet should sometimes give them different GPU pools. Read the frontier in three layers:</p>
<ul>
<li><strong>Separate the phases.</strong> <a href="https://arxiv.org/abs/2401.09670" target="_blank" rel="noopener"><strong>DistServe</strong></a> (Zhong et al., 2024) showed that disaggregating prefill and decode onto separate GPU pools lets a serving system meet TTFT and TPOT SLOs that a co-located engine cannot, and it formalized how to assign GPUs to each pool. <a href="https://arxiv.org/abs/2311.18677" target="_blank" rel="noopener"><strong>Splitwise</strong></a> (Patel et al., 2024) reached the same conclusion from a cost-and-power angle, including heterogeneous GPU pools.</li>
<li><strong>Make KV transfer the center of the design.</strong> <a href="https://arxiv.org/abs/2407.00079" target="_blank" rel="noopener"><strong>Mooncake</strong></a> (Qin et al., 2024), the serving architecture behind the Kimi assistant, made the KV cache the center of gravity: a disaggregated, KV-cache-centric design with a large pooled cache store that turns the transfer of <a href="section-24.4.html">Section 24.4</a> into a first-class, prefix-shareable resource. <a href="https://arxiv.org/abs/2406.17565" target="_blank" rel="noopener"><strong>MemServe</strong></a> (Hu et al., 2024) generalized this with an elastic memory pool that unifies disaggregated serving with prefix caching across instances.</li>
<li><strong>Absorb the pattern into engines.</strong> <a href="https://docs.vllm.ai/en/latest/features/disagg_prefill/" target="_blank" rel="noopener">vLLM</a>, SGLang, and TensorRT-LLM (<a href="section-24.9.html">Section 24.9</a>) now ship or document disaggregated-serving modes. The active questions are smarter KV routing, cache-aware pool balancing, and when adaptive engines should collapse back to co-location under light load.</li>
</ul>
```
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)

2. part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html:255, "Research Frontier: Scaling and Stabilizing Distributed MARL (2024 to 2026)", 206 words in one paragraph
   - Suggested breaks: split into a short setup plus bullets for the three named threads. The paragraph already says "Three threads are active," so the prose should honor that signpost visually.
   - Add mini-heading: no h4 needed inside the callout; list labels are enough.
   - Old text: the single paragraph beginning "Three threads are active."
   - New text:
```html
<p>Three threads are active, and each one attacks the same bottleneck from a different angle: multi-agent experience is expensive.</p>
<ul>
<li><strong>Scalable MARL libraries.</strong> JAX-based, end-to-end-on-accelerator frameworks such as JaxMARL and Mava (2024) run thousands of vectorized multi-agent environments directly on GPUs and TPUs, collapsing the CPU-actor bottleneck of the classic architecture and reporting order-of-magnitude wall-clock speedups for MARL training.</li>
<li><strong>Open-endedness and automatic curricula.</strong> Work descending from AlphaStar's league and from population-based training is formalizing how a population and its matchmaker should grow so that the pool keeps producing novel, harder opponents rather than collapsing to a single style.</li>
<li><strong>Large models as multi-agent learners.</strong> 2024 to 2026 has seen rapid interest in training and coordinating teams of LLM-based agents with reinforcement learning, where the policy is a language model and distributed-rollout cost is dominated by inference, pulling distributed MARL toward the LLM-serving systems of <a href="../../part-5-distributed-inference/module-24-distributed-llm-serving/index.html">Chapter 24</a>. Recent work such as <a href="https://arxiv.org/html/2605.02801v1" target="_blank" rel="noopener">Reinforcement Learning for LLM-based Multi-Agent Systems</a> frames this as the same problem this chapter has studied, but with language trajectories, tool calls, and verifiable rewards replacing simulator states and scalar game rewards.</li>
</ul>
<p>The common pressure across all three is the one this section opened with: generate more multi-agent experience, learn from it faster, and keep the population from becoming stale.</p>
```
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)

3. part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html:161, "Research Frontier: RL for Reasoning and the Rollout-Bound Era (2024 to 2026)", 184 words in one paragraph
   - Suggested breaks: split into "two shifts" list items. The paragraph contains two major shifts plus one open question, which is too much for one reading unit.
   - Add mini-heading: no h4 needed inside the callout; list labels are enough.
   - Old text: the single paragraph beginning "Two shifts define the current frontier."
   - New text:
```html
<p>Two shifts define the current frontier.</p>
<ul>
<li><strong>RLVR makes rollout the bottleneck.</strong> Reinforcement learning with verifiable rewards, including methods in the lineage of GRPO and the open reasoning-model efforts of 2025, uses rule-based or verifiable rewards instead of a learned reward model. Reward evaluation becomes cheaper, and nearly all cost moves onto generation. These runs are <em>rollout-bound</em>: the sampling stage of Figure 20.9.1 dominates so completely that the central optimization is co-locating and overlapping a vLLM-class inference engine with the trainer. The <a href="https://vllm.ai/blog/2025-04-23-openrlhf-vllm" target="_blank" rel="noopener">vLLM and OpenRLHF RLHF integration note</a> states the systems reason directly: long reasoning rollouts can dominate total training time, so the inference engine is part of the training system.</li>
<li><strong>The stacks have consolidated.</strong> <a href="https://github.com/verl-project/verl" target="_blank" rel="noopener">verl</a> introduced a hybrid-controller design that flexibly maps rollout and training workloads onto devices, while <a href="https://arxiv.org/html/2405.11143v6" target="_blank" rel="noopener">OpenRLHF</a> emphasizes scalable RLHF training on flexible GPU clusters.</li>
</ul>
<p>The open question is the weight-broadcast path: as models grow, getting fresh parameters from trainer to inference engine without stalling either side is the bottleneck that the next generation of frameworks is built to attack, the multi-hundred-GPU descendant of the simple broadcast you measure below.</p>
```
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)

4. part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html:210, "Research Frontier: FP8 Training and Microscaling Formats (2024 to 2026)", 186 words in one paragraph
   - Suggested breaks: split the hardware, format, systems study, and open questions into separate units.
   - Add mini-heading: list labels inside the callout.
   - Old text: the single paragraph beginning "NVIDIA's Hopper and Blackwell Tensor Cores..."
   - New text:
```html
<p>The FP8 frontier has moved from hardware feature to training stack. Four pieces now matter:</p>
<ul>
<li><strong>Hardware support.</strong> NVIDIA's Hopper and Blackwell Tensor Cores and the Transformer Engine library brought FP8 (E4M3 and E5M2) into mainstream training. Large public runs now use it: the <a href="https://arxiv.org/abs/2412.19437" target="_blank" rel="noopener">DeepSeek-V3 technical report</a> describes a 671-billion-parameter mixture-of-experts model trained substantially in FP8, with communication and memory savings central to its cost.</li>
<li><strong>Finer scaling.</strong> The key enabler is fine-grained, per-block scaling rather than one scale per tensor. The <a href="https://www.opencompute.org/documents/ocp-microscaling-formats-mx-v1-0-spec-final-pdf" target="_blank" rel="noopener">Open Compute Project Microscaling (MX) specification</a> attaches a shared scale to small blocks of 32 elements (MXFP8, MXFP6, MXFP4), so each block lands in range independently; Blackwell hardware decodes these natively.</li>
<li><strong>End-to-end training evidence.</strong> A 2026 <a href="https://pytorch.org/blog/enabling-up-to-41-faster-pre-training-mxfp8-and-deepep-for-deepseek-v3-on-b200-with-torchtitan/" target="_blank" rel="noopener">PyTorch and Nebius TorchTitan study</a> reports MXFP8 plus DeepEP for DeepSeek-V3 style MoE training on B200 GPUs, making MXFP8 a practical training format rather than only a paper format.</li>
<li><strong>Open questions.</strong> Active questions for 2025 to 2026 are how low the gradient all-reduce itself can go, how to keep optimizer state stable at these widths, and whether MXFP4 can train, not merely serve, without accuracy loss.</li>
</ul>
<p>The trajectory is clear: each halving of element width is a halving of the bytes this chapter's collectives must move.</p>
```
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)

### Prose That Should Be Lists

1. front-matter/preface.html:181, "The book is larger than any single semester..."
   - Suggested format: BULLETS
   - Issue: the paragraph enumerates five paths in the middle of a long sentence, then sends the reader to Table 0.3. It will scan better as a short setup plus a list.
   - Old text: the paragraph beginning "The book is larger than any single semester, by design:"
   - New text:
```html
<p>The book is larger than any single reading track, by design: it supports five distinct advanced paths that share Part I and then diverge. Each path ends in the <a href="../part-8-case-studies/module-41-capstone-project-design/index.html">Chapter 41</a> capstone, where readers design, build, and evaluate a distributed AI system of their own and defend its distribution axis, speedup, scaling efficiency, and cost.</p>
<p>The five paths are:</p>
<ul>
<li>Big Data Algorithms for AI</li>
<li>Distributed Machine Learning</li>
<li>Parallel Deep Learning Systems</li>
<li>Distributed AI and Multi-Agent Systems</li>
<li>Distributed AI Infrastructure</li>
</ul>
<p>Table 0.3 gives one path in full as a worked example; the complete week-by-week maps for all five live in the plan that accompanies this book and in the supporting materials of Section 0.8.</p>
```
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)

2. part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html:308, "Research Frontier: Squeezing the KV Cache (2024 to 2026)"
   - Suggested format: BULLETS
   - Issue: the paragraph says the field has pushed in three directions, then keeps all three in one paragraph. Convert the three directions to bullets.
   - Old text: the single paragraph beginning "The KV cache is one of the most active targets..."
   - New text:
```html
<p>The KV cache is one of the most active targets in efficient LLM serving. PagedAttention and vLLM (Kwon et al., 2023) set the baseline of treating the cache as virtual memory, and the line has since pushed in three directions:</p>
<ul>
<li><strong>Compression and eviction.</strong> <a href="https://arxiv.org/abs/2306.14048" target="_blank" rel="noopener">H2O</a> and <a href="https://arxiv.org/abs/2404.14469" target="_blank" rel="noopener">SnapKV</a> discard or merge low-importance entries, while quantization work such as <a href="https://proceedings.mlr.press/v235/liu24bz.html" target="_blank" rel="noopener">KIVI</a> drives KV down to 2 bits per element with reported minimal degradation.</li>
<li><strong>Architectural reductions.</strong> DeepSeek's multi-head latent attention (2024) compresses keys and values into a small shared latent, shrinking the cache by an order of magnitude.</li>
<li><strong>Cross-request reuse.</strong> Prefix caching and disaggregated prefill/decode designs reuse cache blocks across many requests, with <a href="https://arxiv.org/abs/2312.07104" target="_blank" rel="noopener">SGLang's RadixAttention</a> indexing shared prefixes in a radix tree.</li>
</ul>
<p>The through-line is that per-node KV economics, the subject of this section, are now a first-class research problem because they set the unit cost that <a href="../module-24-distributed-llm-serving/index.html">Chapter 24</a> multiplies across an entire serving fleet.</p>
```
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)

3. part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html:230, "Research Frontier: Self-Drafting and Chunked Prefill (2024 to 2026)"
   - Suggested format: BULLETS
   - Issue: the paragraph combines three mechanisms, self-drafting, chunked prefill, and disaggregation, into one dense unit.
   - Old text: the single paragraph beginning "The active frontier is making the draft nearly free..."
   - New text:
```html
<p>The active frontier is making the draft nearly free and the schedule smoother. Three mechanisms carry most of the progress:</p>
<ul>
<li><strong>Better self-drafting.</strong> The EAGLE line, including EAGLE-2 and <a href="https://arxiv.org/abs/2503.01840" target="_blank" rel="noopener">EAGLE-3</a>, drafts at the feature level with a dynamic draft tree and reports higher acceptance than the original separate-model scheme. <a href="https://arxiv.org/abs/2401.10774" target="_blank" rel="noopener">Medusa-style</a> multi-head drafting has also been folded into production engines.</li>
<li><strong>Engine-level support.</strong> NVIDIA's TensorRT-LLM documentation lists draft-model, Medusa, recurrent drafter, and EAGLE-style paths as supported speculative families, a useful signal that the field has moved from a paper trick to an engine feature (<a href="https://nvidia.github.io/TensorRT-LLM/advanced/speculative-decoding.html" target="_blank" rel="noopener">TensorRT-LLM speculative decoding docs</a>).</li>
<li><strong>Smoother scheduling.</strong> Chunked prefill, popularized through <a href="https://arxiv.org/abs/2403.02310" target="_blank" rel="noopener">Sarathi-Serve</a> and now standard in vLLM and TensorRT-LLM, slices a long prompt's compute-bound prefill into smaller pieces and interleaves them with ongoing decode, which stabilizes inter-token latency under mixed traffic and pairs naturally with continuous batching.</li>
</ul>
<p>A parallel thread, prefill/decode disaggregation, runs the two phases on separate hardware pools so each is provisioned for its own bottleneck; <a href="../module-24-distributed-llm-serving/index.html">Chapter 24</a> develops that fleet-level idea. The common theme is treating the idle compute of memory-bound decode as a resource to be spent, by drafting, by chunking, or by disaggregating.</p>
```
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)

### High-Fatigue Zones

1. part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html:55 to 56
   - Fatigue type: OVERLOAD
   - Length of zone: 2 paragraphs, about 250 words, dense with protocol roles, capability types, transport, JSON-RPC, discovery, and invocation.
   - Likely reader behavior: re-reading role names and losing the discovery flow.
   - Recovery suggestion:
```html
<p>Keep the mental model small before the details: MCP is a three-step handshake. First the host opens a client connection to a server. Second the client asks what the server exposes. Third the agent calls one advertised capability with typed input. The rest of this section names the parts of that handshake.</p>
```
   - Placement: insert before line 55, immediately after the h2 for "The Model Context Protocol."
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)

2. part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html:235 to 247
   - Fatigue type: REPETITIVE and OVERLOAD
   - Length of zone: shared memory paragraph, protocol paragraph, trust callout, thesis callout, frontier callout.
   - Likely reader behavior: skimming because MCP, A2A, trust boundaries, and protocol standardization are introduced twice in close succession.
   - Recovery suggestion: merge the protocol paragraph at line 236 and the frontier callout at line 247 more tightly by making the first paragraph a signpost only.
   - Old text: the paragraph beginning "For agents and tools to interoperate at all, they must agree on protocols."
   - New text:
```html
<p>For agents and tools to interoperate at all, they must agree on protocols. In this case study, two names matter: MCP connects agents to tools and data, while A2A connects agents to other agents. The frontier callout below explains why those standards are becoming the coordination layer for distributed agent systems.</p>
```
   - Priority: HIGH
   - Tier: TIER 2 (HIGH)

3. part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html:280 to 284
   - Fatigue type: ABSTRACT
   - Length of zone: 2 abstract protocol payoff paragraphs plus a 162-word frontier callout.
   - Likely reader behavior: accepting the claim but not seeing the operational behavior.
   - Recovery suggestion: insert a concrete micro-example before the research-frontier callout.
```html
<div class="callout practical-example">
<div class="callout-title">Practical Example: One New Tool, Many Agents</div>
<p>A data-platform team publishes one MCP server for its feature store. The fraud agent uses it to fetch account features, the recommender agent uses it to fetch user-history aggregates, and the monitoring agent uses it to inspect drift summaries. Without the protocol, each agent would need a custom connector. With the protocol, the platform team owns one server contract and every compliant agent can discover the same tool schema.</p>
</div>
```
   - Placement: insert after line 281 and before the "Research Frontier: Agent Interoperability Standards" callout.
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)

4. part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html:214
   - Fatigue type: ABSTRACT
   - Length of zone: 199-word research-frontier paragraph with four named strands.
   - Likely reader behavior: skimming paper names without retaining the triangle mapping.
   - Recovery suggestion:
```html
<p>The low-communication frontier is easier to read as a map of what each method removes from the training bill:</p>
<ul>
<li><strong>DiLoCo-style local steps remove rounds.</strong> Workers run many local optimizer steps and synchronize only occasionally, reporting C4 language-model training on 8 workers with 500 times less communication than fully synchronous optimization.</li>
<li><strong>Open collaborative runs remove datacenter assumptions.</strong> DeMo and INTELLECT-style efforts train billion-parameter models over commodity internet links, reporting one to two orders of magnitude less communication against synchronous all-reduce with small accuracy gaps.</li>
<li><strong>Structured compression removes bytes per round.</strong> PowerSGD and its low-rank and error-feedback descendants keep tightening how close real schemes sit to the Section 10.9 lower bound.</li>
</ul>
<p>The throughline is that the trade-off triangle is not static: each result moves a method closer to a corner that was thought to require sacrificing another, which is precisely why a framework, rather than a fixed ranking, is the durable way to reason about these methods.</p>
```
   - Placement: replace the paragraph at line 214.
   - Priority: MEDIUM
   - Tier: TIER 3 (MEDIUM)

### Redundant Content

1. part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html:236 and 247
   - Idea: MCP and A2A as the protocol layer for agent interoperation.
   - Action: DIFFERENTIATE
   - Fix: use the replacement in High-Fatigue Zone 2 so line 236 becomes a short setup and line 247 carries the frontier detail.
   - Tier: TIER 2 (HIGH)

2. part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html:210 and 230
   - Idea: Medusa, EAGLE, self-speculation, and prompt lookup as speculative decoding variants.
   - Action: DIFFERENTIATE
   - Fix: keep line 210 as the conceptual inventory of variants; revise line 230 with the bullet replacement above so it focuses on production movement and scheduling, not another full inventory.
   - Tier: TIER 3 (MEDIUM)

### Energy Map

- front-matter/preface.html: MEDIUM. Strong table and figure relief, but the reading-track paragraph at line 181 needs list conversion.
- part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html: HIGH. Callouts are compact and the warning is concrete.
- part-2-distributed-data/module-07-spark-dataframes/section-7.8.html: HIGH. New Spark Connect content alternates prose, code, and callout well.
- part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html: HIGH. AI-native engines are explained with a table and decision rule.
- part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html: HIGH. Governance material is concrete and checklist-shaped.
- part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html: HIGH. Feature-store checklist is direct and scannable.
- part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html: HIGH. Fraud example carries the concept with good pacing.
- part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html: MEDIUM. The frontier callout is valuable but too compressed.
- part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html: HIGH. Small addition, no pacing risk.
- part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html: MEDIUM. Embedding placement paragraph is dense but coherent.
- part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html: HIGH. Adapter math and example are compact.
- part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html: MEDIUM. FP8 frontier needs chunking.
- part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html: MEDIUM. FSDP2 and SDC additions are dense but short enough.
- part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html: MEDIUM. Strong topic, but the RLVR frontier paragraph should be split.
- part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html: MEDIUM. KV-cache frontier should become a three-direction list.
- part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html: MEDIUM. Speculative decoding variants need less repeated inventory.
- part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html: MEDIUM. Practical example is excellent; frontier paragraph needs list structure.
- part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html: HIGH. Access-control and GraphRAG additions are concrete.
- part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html: HIGH. Compression ladder is readable and decision-oriented.
- part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html: HIGH. Late interaction is concise and well anchored.
- part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html: HIGH. Registry governance is actionable.
- part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html: HIGH. Fraud monitoring has a clear two-clock structure.
- part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html: MEDIUM. Landmark systems are paced well; frontier and bridge callouts are too long.
- part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html: MEDIUM. Protocol explanation is important but benefits from a small handshake signpost and example.
- part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html: HIGH. Context engineering paragraph is dense but well scoped.
- part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html: HIGH. MAST material has concrete failure categories.
- part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html: HIGH. DRA and topology material is concrete.
- part-7-infrastructure/module-34-edge-fog-on-device/index.html: HIGH. Edge frontier is concise and example-friendly.
- part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html: MEDIUM. Secure aggregation versus Byzantine robustness is dense but compact.
- part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html: HIGH. Gradient inversion explanation is clear and concrete.
- part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html: HIGH. GraphRAG addition is well anchored to the case study.
- part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html: HIGH. Governance metrics are concise and table-oriented.
- part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html: HIGH. Federated foundation-model tuning has a clear worked example.
- part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html: HIGH. Updates remain concrete.
- part-8-case-studies/module-38-case-distributed-recommendation/index.html: HIGH. Small addition, no pacing issue.
- part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html: MEDIUM. Generative recommender material is interesting but dense across consecutive paragraphs.
- part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html: HIGH. Evaluation logging is concrete.
- part-8-case-studies/module-39-case-multi-agent-robotics/index.html: HIGH. Foundation-model robotics addition is concrete and safety-anchored.
- part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html: MEDIUM. Shared-memory and protocol material repeats unless the setup paragraph is shortened.
- part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html: HIGH. MAST failure taxonomy is actionable and compact.

### Missing Signposts

1. part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html:55
   - Add: "Keep the mental model small before the details: MCP is a three-step handshake. First the host opens a client connection to a server. Second the client asks what the server exposes. Third the agent calls one advertised capability with typed input."

2. part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html:301
   - Add: "Read the frontier in three layers: separate the phases, make KV transfer the center of the design, and absorb the pattern into engines."

3. part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html:161
   - Add: "Two shifts define the current frontier: reward verification makes rollout the bottleneck, and the training stacks have consolidated around fused rollout-plus-trainer deployments."

### Illustration Opportunities

1. part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html:301
   - Type: mental-model
   - Scene idea: two airport terminals labeled Prefill and Decode, connected by a fast shuttle carrying KV-cache suitcases. Long prompt passengers go to Prefill; streaming conversations keep moving through Decode.
   - Placement: after the "Research Frontier: Prefill/Decode Disaggregation" callout if the paragraph remains long, or before it if the list conversion is not applied.

2. part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html:55
   - Type: protocol-as-handshake
   - Scene idea: an agent knocks on a tool server's door, receives a menu of typed capabilities, then orders one capability with a schema form.
   - Placement: after the introductory MCP signpost paragraph.

3. part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html:255
   - Type: what-could-go-wrong
   - Scene idea: a matchmaker trying to pair a crowd of self-play agents while one dominant style keeps trying to play itself. The visual should show why automatic curricula must keep producing diverse, harder opponents.
   - Placement: after the MARL frontier callout if the list conversion is not applied.

### Well-Structured Sections (Preserve These)

1. part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html:281 to 290
   - The practical example uses Who, Situation, Problem, Dilemma, Decision, How, Result, and Lesson. This is the strongest pacing pattern in the diff and should be preserved.

2. part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html:102 to 103
   - The streaming feature-store material is already checklist-shaped and concrete.

3. front-matter/preface.html:157 to 180
   - Figure 0.2 plus Table 0.2 creates a good visual reset and scannable reference path. Preserve the figure-table sequence.

4. part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html:214
   - The MAST callout turns evaluation failure into an actionable work queue, which keeps the pacing practical.

### Prioritized Fixes

1. TIER 2 (HIGH): Convert long frontier paragraphs in section-24.5.html:301, section-30.10.html:255, and section-20.9.html:161 into bullets using the exact replacements above.
2. TIER 2 (HIGH): Add the MCP handshake signpost before section-32.6.html:55.
3. TIER 2 (HIGH): Shorten the repeated protocol setup in section-40.6.html:236 so the frontier callout owns the detailed MCP and A2A discussion.
4. TIER 3 (MEDIUM): Convert the FP8, KV-cache, speculative decoding, and DiLoCo frontier paragraphs into list-shaped reading units.
5. TIER 3 (MEDIUM): Convert the preface path paragraph at front-matter/preface.html:181 into a short setup plus list.

### Verification Suggestions

- Run a paragraph-length scan on changed HTML and flag new paragraphs over 150 words, especially inside callouts.
- Check that every "Three directions," "Two shifts," or "Four pieces" sentence is followed by a list or separate paragraphs.
- Reopen changed sections in a browser or rendered preview and verify that callout interiors do not become wall-of-bullets. If a callout contains more than four bullets, split it into a table or a shorter paragraph plus table.
- Run the global style scan after integration for em dashes, en dashes, double hyphens, and banned phrases.

### Files Changed

Only this report was created:

.book-writers/runs/scalableai-new-material-20260618-42agents/agent-reports/30-readability-pacing-editor.md

No book HTML was edited.

### Verification Run

- Read agent prompt: .book-writers/runs/scalableai-new-material-20260618-42agents/agent-prompts/30-readability-pacing-editor.prompt.md
- Read book-writers skill: E:/Projects/claude-skills/book-skills/SKILL.md
- Ran the git diff name-only check.
- Ran the git diff stat check.
- Parsed the zero-context HTML diff to identify added long paragraphs and dense callouts.
- Spot-checked highest-risk files with line-numbered `Get-Content`.

### Blockers

None. The report is complete for suggest mode. No edits were made to book HTML.

### Summary

MOSTLY READABLE. The new material has strong concrete examples, tables, and callouts, but several frontier updates compress three or four research directions into one paragraph. The highest-value integration pass is to convert the named multi-part frontier paragraphs into list-shaped reading units and add one MCP handshake signpost before the protocol details.

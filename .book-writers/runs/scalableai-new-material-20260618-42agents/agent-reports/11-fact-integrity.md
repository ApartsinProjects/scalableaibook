## Fact Integrity Report

Agent: 11 Fact Integrity Reviewer
Mode: suggest
Scope: new material currently visible in `git diff`
Date: 2026-06-18

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

### Errors (CERTAIN)

1. `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`, added Exercise 35.5.1: "Krum is usually quoted as tolerating only $f < N/3$."
   - Problem: The stated Krum tolerance is wrong. The original Krum paper states the condition as `2f + 2 < n`, which is approximately `f < (N - 2) / 2`, not `f < N / 3`. The `N / 3` threshold is a classical Byzantine consensus threshold, not the usual Krum condition in the cited aggregation setting.
   - Old text: `<div class="callout-title">Exercise 35.5.1: Why N over 3 and Not N over 2 <span class="exercise-type conceptual">Conceptual</span></div>`
   - New text: `<div class="callout-title">Exercise 35.5.1: Why Krum Needs 2f + 2 &lt; N <span class="exercise-type conceptual">Conceptual</span></div>`
   - Old text: `<p>The coordinate-wise median tolerates $f &lt; N/2$ Byzantine workers, but Krum is usually quoted as tolerating only $f &lt; N/3$. Using the neighbor count $N - f - 2$ in the Krum score, explain why Krum needs an honest majority with slack, while the median needs only a bare majority. Then argue informally why this stricter requirement buys Krum something the median lacks: robustness to an adversary that spreads its corruption across many coordinates at once rather than concentrating it on a few.</p>`
   - New text: `<p>The coordinate-wise median and Krum both require an honest majority, but they express that requirement differently. The original Krum analysis assumes $2f + 2 &lt; N$, and Krum scores each candidate update by summing distances to its $N - f - 2$ nearest neighbors. Explain why this neighbor count leaves enough honest updates to make a distance-based choice meaningful, then compare that geometric rule with the coordinate-wise median's per-coordinate majority logic. Finally, argue informally what Krum tries to buy with distances between full vectors: robustness to an adversary that spreads its corruption across many coordinates rather than concentrating it on a few.</p>`
   - Source: Blanchard et al., "Machine Learning with Adversaries: Byzantine Tolerant Gradient Descent," NeurIPS 2017, states the Krum condition as `2f + 2 < n`: https://papers.neurips.cc/paper/6617-machine-learning-with-adversaries-byzantine-tolerant-gradient-descent.pdf
   - Tier: TIER 1

### Likely Errors

1. `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, heading and first paragraph: "Spark 4 and Spark Connect" plus "the Spark 4 line is the moment this becomes central..."
   - Problem: Spark Connect was introduced in Apache Spark 3.4, not Spark 4. The paragraph can still discuss Spark 4.x documentation and current usage, but it should not imply that Spark 4 is the origin point.
   - Old text: `<h2>5. Spark 4 and Spark Connect: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - New text: `<h2>5. Spark Connect in Modern Spark: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - Old text: `<p>Spark 4 makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver. Spark Connect, documented in the <a href="https://spark.apache.org/docs/latest/spark-connect-overview.html" target="_blank" rel="noopener">Apache Spark Connect overview</a>, separates the client from the Spark cluster through a remote protocol. The client builds unresolved DataFrame plans, sends them to a Spark Connect server, and receives results, while the server owns analysis, optimization, execution, scheduling, and access to cluster resources. The <a href="https://spark.apache.org/docs/latest/" target="_blank" rel="noopener">Spark documentation</a> presents Connect as a way to run client applications from anywhere, and the Spark 4 line is the moment this becomes central to how Python applications embed Spark without becoming Spark drivers themselves.</p>`
   - New text: `<p>Spark Connect, introduced in Apache Spark 3.4 and documented in the current Spark 4.x line, makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver. Spark Connect, documented in the <a href="https://spark.apache.org/docs/latest/spark-connect-overview.html" target="_blank" rel="noopener">Apache Spark Connect overview</a>, separates the client from the Spark cluster through a remote protocol. The client builds unresolved DataFrame plans, sends them to a Spark Connect server, and receives results, while the server performs plan analysis, optimization, execution, scheduling, and access to cluster resources. The <a href="https://spark.apache.org/docs/latest/" target="_blank" rel="noopener">Spark documentation</a> presents Connect as a way to run client applications from anywhere, which makes it central to how Python applications can embed Spark access without becoming Spark drivers themselves.</p>`
   - Source: Apache Spark Connect overview says Spark Connect was introduced in Apache Spark 3.4 and uses unresolved logical plans as the protocol: https://spark.apache.org/docs/latest/spark-connect-overview.html
   - Tier: TIER 2

### Needs Qualification

1. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, research frontier paragraph: "de facto standard"
   - Problem: The source record supports "open standard" and broad adoption, but "de facto standard" is a stronger market-status claim. This should be date-stamped and softened unless backed by an adoption metric or independent standards source.
   - Old text: `<p>The protocols that let agents and tools interoperate are crystallizing in real time. The Model Context Protocol, introduced by Anthropic in late 2024, has been adopted across multiple vendors as the de facto standard for connecting agents to tools and data, and a growing registry of MCP servers turns external services into plug-in tools. In parallel, the A2A specification targets cross-agent delegation and is converging on shared notions of agent cards, task lifecycles, streaming results, authentication, and asynchronous work. On the orchestration side, durable-execution engines (Temporal-style workflows, and agent frameworks such as LangGraph that compile an agent graph onto a checkpointed runtime) are bringing decades of workflow-reliability engineering to multi-agent systems. The open research questions are sharp: how to bound the cost of ever-larger shared context, how to verify that a fanned-out plan's sub-results compose correctly, and how to secure a fleet in which agents call tools and other agents they did not write. We meet the orchestration internals in full in <a href="../../part-6-multi-agent-systems/module-32-distributed-agent-orchestration/index.html">Chapter 32</a>.</p>`
   - New text: `<p>The protocols that let agents and tools interoperate are crystallizing in real time. The Model Context Protocol, introduced by Anthropic in late 2024, is an open standard for connecting agents to tools and data sources and, as of June 2026, has visible adoption across multiple vendors, IDEs, chat clients, and community server registries. In parallel, the A2A specification targets cross-agent delegation and is converging on shared notions of agent cards, task lifecycles, streaming results, authentication, and asynchronous work. On the orchestration side, durable-execution engines (Temporal-style workflows, and agent frameworks such as LangGraph that compile an agent graph onto a checkpointed runtime) are bringing decades of workflow-reliability engineering to multi-agent systems. The open research questions are sharp: how to bound the cost of ever-larger shared context, how to verify that a fanned-out plan's sub-results compose correctly, and how to secure a fleet in which agents call tools and other agents they did not write. We meet the orchestration internals in full in <a href="../../part-6-multi-agent-systems/module-32-distributed-agent-orchestration/index.html">Chapter 32</a>.</p>`
   - Source: Anthropic introduced MCP on 2024-11-25 as an open standard and named early adopters; A2A specification documents agent cards, tasks, task streams, and authentication concepts: https://www.anthropic.com/news/model-context-protocol and https://a2a-protocol.org/latest/specification/
   - Tier: TIER 2

2. `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, semantic ID paragraph: "A model cannot softmax directly over billions of item IDs..."
   - Problem: The claim is directionally right for practical serving, but the absolute "cannot" is technically too strong. A model can define a huge softmax mathematically; the issue is serving cost, memory, and latency.
   - Old text: `<p>Semantic IDs matter because they make generation feasible over huge catalogs. A model cannot softmax directly over billions of item IDs on every decoding step, but it can generate a short sequence of code tokens from a much smaller vocabulary. The code is usually built from item embeddings, for example with residual vector quantization or clustered embeddings, so it carries collaborative and content structure rather than arbitrary database identity. Spotify's 2025 work on <a href="https://research.atspotify.com/2025/9/semantic-ids-for-generative-search-and-recommendation" target="_blank" rel="noopener">semantic IDs for joint search and recommendation</a> shows this directly: item embeddings are converted into semantic IDs and used as tokens in a unified generative model for search and recommendation. The earlier <a href="https://proceedings.neurips.cc/paper_files/paper/2023/file/20dcab0f14046a5c6b02b61da9f13229-Paper-Conference.pdf" target="_blank" rel="noopener">TIGER generative retrieval paper</a> made the same architectural turn for recommendation: generate semantic IDs, then retrieve the items behind them.</p>`
   - New text: `<p>Semantic IDs matter because they make generation feasible over huge catalogs. A full softmax over billions of item IDs is mathematically possible but usually impractical at serving time because the vocabulary, memory traffic, and latency scale with the catalog. A model can instead generate a short sequence of code tokens from a much smaller vocabulary. The code is usually built from item embeddings, for example with residual vector quantization or clustered embeddings, so it carries collaborative and content structure rather than arbitrary database identity. Spotify's 2025 work on <a href="https://research.atspotify.com/2025/9/semantic-ids-for-generative-search-and-recommendation" target="_blank" rel="noopener">semantic IDs for joint search and recommendation</a> shows this directly: item embeddings are converted into semantic IDs and used as tokens in a unified generative model for search and recommendation. The earlier <a href="https://proceedings.neurips.cc/paper_files/paper/2023/file/20dcab0f14046a5c6b02b61da9f13229-Paper-Conference.pdf" target="_blank" rel="noopener">TIGER generative retrieval paper</a> made the same architectural turn for recommendation: generate semantic IDs, then retrieve the items behind them.</p>`
   - Source: Spotify Research describes converting item embeddings into semantic IDs for generative search and recommendation; TIGER uses generated semantic IDs for recommendation retrieval: https://research.atspotify.com/2025/9/semantic-ids-for-generative-search-and-recommendation and https://proceedings.neurips.cc/paper_files/paper/2023/file/20dcab0f14046a5c6b02b61da9f13229-Paper-Conference.pdf
   - Tier: TIER 3

3. `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`, research frontier paragraph: "the distributed robotics layer proves that the proposed motion is safe"
   - Problem: "Proves" overstates what most deployed robotics stacks do. Planners and controllers can reject unsafe commands, enforce constraints, run collision checks, or verify specific safety properties under a model, but broad proof of safety is not guaranteed.
   - Old text: `<p>Classical swarm control treats each robot as a small local controller plus a communication rule. The 2024 to 2026 robotics frontier adds a second layer: foundation models that interpret language goals, images, maps, tool affordances, and failure reports, then hand bounded subgoals to the local controllers. Vision-language-action policies and robot foundation models are not a replacement for the collision-avoidance, consensus, and task-allocation machinery of this chapter. They sit above it. The foundation model proposes "inspect aisle 7, then reroute around the spill"; the distributed robotics layer proves that the proposed motion is safe, assigns robots through the auction or consensus protocol of <a href="section-39.3.html">Section 39.3</a>, and keeps the fleet inside the latency and bandwidth budget of <a href="../../part-7-infrastructure/module-34-edge-fog-on-device/index.html">Chapter 34</a>.</p>`
   - New text: `<p>Classical swarm control treats each robot as a small local controller plus a communication rule. The 2024 to 2026 robotics frontier adds a second layer: foundation models that interpret language goals, images, maps, tool affordances, and failure reports, then hand bounded subgoals to the local controllers. Vision-language-action policies and robot foundation models are not a replacement for the collision-avoidance, consensus, and task-allocation machinery of this chapter. They sit above it. The foundation model proposes "inspect aisle 7, then reroute around the spill"; the distributed robotics layer checks the proposed motion against local safety constraints, assigns robots through the auction or consensus protocol of <a href="section-39.3.html">Section 39.3</a>, and keeps the fleet inside the latency and bandwidth budget of <a href="../../part-7-infrastructure/module-34-edge-fog-on-device/index.html">Chapter 34</a>.</p>`
   - Source: General robotics safety practice supports a weaker "checks constraints" claim. No direct source in the added text establishes a formal proof guarantee.
   - Tier: TIER 2

### Potentially Outdated

1. `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`, DRA frontier paragraph: "2026 cluster-platform frontier"
   - Problem: The claim is broadly plausible and linked, but Kubernetes DRA is version-sensitive. The current Kubernetes documentation viewed on 2026-06-18 marks DRA as `Kubernetes v1.35 [stable]`. The book should include that date and version so future readers can tell whether the statement is historical or current.
   - Old text: `<p>The 2026 cluster-platform frontier is moving from "request N GPUs" to "request an accelerator topology with named properties." Kubernetes <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/" target="_blank" rel="noopener">Dynamic Resource Allocation</a> gives devices the same declarative flavor that persistent volumes gave storage: a job can ask for a class of accelerators, topology constraints, MIG slices, or a multi-device allocation rather than a bare GPU count. For distributed AI, this matters because the scheduler's unit is no longer just "one worker pod." It is a gang of pods whose devices, network links, storage paths, and failure domains must fit together.</p>`
   - New text: `<p>The 2026 cluster-platform frontier is moving from "request N GPUs" to "request an accelerator topology with named properties." Kubernetes <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/" target="_blank" rel="noopener">Dynamic Resource Allocation</a>, documented as stable in Kubernetes v1.35 as of June 2026, gives devices the same declarative flavor that persistent volumes gave storage: a job can ask for a class of accelerators, topology constraints, MIG slices exposed by compatible device drivers, or a multi-device allocation rather than a bare GPU count. For distributed AI, this matters because the scheduler's unit is no longer just "one worker pod." It is a gang of pods whose devices, network links, storage paths, and failure domains must fit together.</p>`
   - Source: Kubernetes DRA documentation, feature state `Kubernetes v1.35 [stable]`: https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/
   - Tier: TIER 3

### Unsupported Claims

1. `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`, research frontier paragraph: "Open collaborative runs in the spirit of DeMo and the INTELLECT distributed pre-training efforts..."
   - Problem: The cited DiLoCo sentence is source-backed, but the follow-on sentence names DeMo and INTELLECT and asserts billion-parameter commodity-internet training, communication reductions, and small accuracy gaps without direct citations in the added paragraph. This is too specific to leave uncited.
   - Old text: `<p>The most active frontier in this triangle is the low-communication corner, where researchers are trying to reach in-datacenter convergence while synchronizing as rarely as a slow link allows. <a href="https://arxiv.org/abs/2311.08105" target="_blank" rel="noopener">DiLoCo</a> trains language models with an inner optimizer that runs many local steps and an outer optimizer that synchronizes only occasionally, reporting C4 language-model training on 8 workers with 500 times less communication than fully synchronous optimization. Follow-on work has pushed the same idea toward streaming and over-the-internet settings where workers join and leave. Open collaborative runs in the spirit of DeMo and the INTELLECT distributed pre-training efforts (2024 to 2025) have trained billion-parameter models over commodity internet links, reporting communication reductions of one to two orders of magnitude against synchronous all-reduce with small accuracy gaps. In parallel, structured gradient compression in the lineage of PowerSGD and its low-rank and error-feedback descendants keeps tightening how close real schemes sit to the Section 10.9 lower bound. The throughline is that the trade-off triangle is not static: each result moves a method closer to a corner that was thought to require sacrificing another, which is precisely why a framework, rather than a fixed ranking, is the durable way to reason about these methods.</p>`
   - New text: `<p>The most active frontier in this triangle is the low-communication corner, where researchers are trying to reach in-datacenter convergence while synchronizing as rarely as a slow link allows. <a href="https://arxiv.org/abs/2311.08105" target="_blank" rel="noopener">DiLoCo</a> trains language models with an inner optimizer that runs many local steps and an outer optimizer that synchronizes only occasionally, reporting C4 language-model training on 8 workers with 500 times less communication than fully synchronous optimization. Follow-on work has pushed the same idea toward streaming and over-the-internet settings where workers join and leave, but each communication-saving claim needs to be read against the exact model size, data stream, worker count, link quality, and evaluation metric. In parallel, structured gradient compression in the lineage of PowerSGD and its low-rank and error-feedback descendants keeps tightening how close real schemes sit to the Section 10.9 lower bound. The throughline is that the trade-off triangle is not static: each result moves a method closer to a corner that was thought to require sacrificing another, which is precisely why a framework, rather than a fixed ranking, is the durable way to reason about these methods.</p>`
   - Source: DiLoCo abstract supports the 8-worker C4 and 500-times-less-communication claim: https://arxiv.org/abs/2311.08105. The DeMo and INTELLECT details need direct run citations before restoration.
   - Tier: TIER 2

2. `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, library shortcut paragraph: "Spark is still the right default"
   - Problem: "Default" is a broad industry-position claim. It is plausible for SQL-shaped feature engineering, but the phrasing should make the criterion explicit and avoid treating tool choice as universal.
   - Old text: `<p>If the expensive operation is a SQL join, aggregation, or lakehouse scan, Spark is still the right default. If the expensive operation is a Python function, media decode, model embedding pass, or batch inference stage, Ray Data or Daft often expresses it more directly. If the expensive operation is random access to multimodal examples plus vectors, Lance is a storage-level fit. The reduction is conceptual: instead of forcing every AI preprocessing job into a Spark UDF, choose the tool whose native execution model matches the part of the pipeline that burns the time.</p>`
   - New text: `<p>If the expensive operation is a SQL join, aggregation, or governed lakehouse scan, Spark is often the conservative default because its optimizer, catalog integrations, and operational footprint are mature. If the expensive operation is a Python function, media decode, model embedding pass, or batch inference stage, Ray Data or Daft often expresses it more directly. If the expensive operation is random access to multimodal examples plus vectors, Lance is a storage-level fit. The reduction is conceptual: instead of forcing every AI preprocessing job into a Spark UDF, choose the tool whose native execution model matches the part of the pipeline that burns the time.</p>`
   - Source: Existing links to Ray Data, Daft, and Lance support their stated target domains; the Spark default claim is best expressed as a conservative operational heuristic, not a universal fact.
   - Tier: TIER 3

### Verified High-Risk Claims

- MLPerf Inference v5.1 claim in `section-5.3.html` is source-backed. MLCommons says v5.1 introduced DeepSeek-R1, Llama 3.1 8B, and Whisper Large V3, and expanded the interactive scenario for lower-latency agentic and LLM applications: https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/
- HSTU claim in `section-38.3.html` is source-backed. The arXiv abstract reports HSTU-based generative recommenders with 1.5 trillion parameters, online A/B improvements, and speedups over FlashAttention2-based Transformers under the paper's conditions: https://arxiv.org/abs/2402.17152
- A2A Linux Foundation provenance is source-backed in the broader diff. Google announced A2A in 2025 and later donated it to the Linux Foundation project: https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/ and https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/
- Spark Connect architecture is source-backed once the Spark 3.4 introduction is corrected. The official overview describes unresolved logical plans, gRPC transport, server-side translation, Spark optimization, and Arrow-encoded results: https://spark.apache.org/docs/latest/spark-connect-overview.html

### Verification Suggestions

- Run a targeted link and date audit over added lines with `2024`, `2025`, `2026`, version strings, and named systems. Date-sensitive sources should include "as of June 2026" where the claim is presented as current.
- Ask Equation Verification to review the Krum and coordinate-wise median exercise after the TIER 1 fix, because the issue is a mathematical claim rather than prose.
- Require direct citations before restoring the DeMo and INTELLECT sentence in Chapter 10. The current replacement preserves the DiLoCo result that is backed by a primary source.
- Re-run a search for absolute terms in added material: `cannot`, `only`, `must`, `proves`, `default`, `best`, and `de facto`. Several are normative design rules, but the factual ones should be qualified.

### Verification Run

- Read complete local prompt: `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-prompts/11-fact-integrity.prompt.md`
- Read book-writers skill instructions: `E:\Projects\claude-skills\book-skills\SKILL.md`
- Scoped file set with Git diff name and numeric summaries
- Inspected added lines with zero-context Git diff over HTML files
- Searched added lines for factual risk patterns: years, version strings, percentages, absolute terms, benchmarks, named systems, and protocol claims
- Verified selected high-risk claims against primary or official sources using web lookup

### Files Changed

- Added this report only: `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-reports/11-fact-integrity.md`
- Did not edit book HTML.

### Blockers

- None for report generation.
- Some source verification remains for any integrator who wants to keep the DeMo and INTELLECT sentence as written.

### Summary

Overall factual reliability: MODERATE.

The new material is generally well linked and technically plausible, with several verified high-risk claims. The main blocking issue is the Krum Byzantine tolerance statement, which should be fixed before publication. The remaining issues are mostly overclaiming, missing date stamps, or unsupported named-run claims in fast-moving areas.

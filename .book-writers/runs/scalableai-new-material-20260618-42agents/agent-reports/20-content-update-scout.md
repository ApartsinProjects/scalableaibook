## Content Update Scout Report

Scope: only new material visible in the current working diff. I did not edit book HTML.

### Files Inspected

Inspected the 40 modified HTML files in the working diff:

front-matter/preface.html; part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html; part-2-distributed-data/module-07-spark-dataframes/section-7.8.html; part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html; part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html; part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html; part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html; part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html; part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html; part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html; part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html; part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html; part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html; part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html; part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html; part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html; part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html; part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html; part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html; part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html; part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html; part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html; part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html; part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html; part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html; part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html; part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html; part-7-infrastructure/module-34-edge-fog-on-device/index.html; part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html; part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html; part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html; part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html; part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html; part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html; part-8-case-studies/module-38-case-distributed-recommendation/index.html; part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html; part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html; part-8-case-studies/module-39-case-multi-agent-robotics/index.html; part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html; part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html.

### Missing Topics (Essential Now)

1. MLPerf Inference v6.0 should replace the v5.1 framing in the new serving evaluation callout.
   - Why essential: The new text calls v5.1 the frontier pattern, but MLCommons released MLPerf Inference v6.0 on April 1, 2026. The v6.0 release adds GPT-OSS 120B, expanded DeepSeek-R1 reasoning, DLRMv3 for sequential recommendation, text-to-video, VLM structured product metadata, YOLOv11 edge object detection, LoadGen++, and larger multi-node submissions. Keeping v5.1 as the headline makes the new content stale on publication day.
   - Where to add: part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html, lines 161 to 162.
   - Scope: paragraph replacement inside the existing callout.
   - Evidence: MLCommons v6.0 release, https://mlcommons.org/2026/04/mlperf-inference-v6-0-results/; MLCommons MLPerf Inference archive, https://mlcommons.org/category/mlperf-inference/
   - Priority: ESSENTIAL.
   - Tier: TIER 1 (BLOCKING).
   - Old text: `<div class="callout-title">Research Frontier: MLPerf Inference v5.1 and Interactive LLM SLOs</div>`
   - New text: `<div class="callout-title">Research Frontier: MLPerf Inference v6.0 and Interactive LLM SLOs</div>`
   - Old text: `<p>MLPerf Inference has moved in the same direction as this section. The <a href="https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/" target="_blank" rel="noopener">MLCommons Inference v5.1 release</a> introduced DeepSeek-R1, Llama 3.1 8B, and Whisper Large V3 benchmarks, and expanded the interactive scenario for lower-latency agentic and LLM applications. That matters because a modern serving benchmark is no longer just "tokens per second on a model." It is a workload definition plus an arrival pattern plus latency constraints, and for generated text those constraints must separate TTFT from TPOT or inter-token latency. Use the v5.1 pattern as a reporting template even when you are not submitting to MLPerf: name the exact model, the scenario, the load generator, the latency bounds, the precision, the hardware, and the fraction of requests meeting each SLO.</p>`
   - New text: `<p>MLPerf Inference has moved in the same direction as this section. The <a href="https://mlcommons.org/2026/04/mlperf-inference-v6-0-results/" target="_blank" rel="noopener">MLCommons Inference v6.0 release</a> updates the serving benchmark suite around current deployment pressure: GPT-OSS 120B reasoning, expanded DeepSeek-R1 latency-optimized reasoning, DLRMv3 sequential recommendation, text-to-video generation, vision-language product metadata extraction, YOLOv11 edge detection, LoadGen++, and larger multi-node inference submissions. That matters because a modern serving benchmark is no longer just "tokens per second on a model." It is a workload definition plus an arrival pattern plus latency constraints, and for generated text those constraints must separate TTFT from TPOT or inter-token latency. Use the v6.0 pattern as a reporting template even when you are not submitting to MLPerf: name the exact model, the scenario, the load generator, the latency bounds, the precision, the hardware, the node count, and the fraction of requests meeting each SLO.</p>`

2. MCP coverage should point at the latest stable spec and include the November 2025 security and durable task changes.
   - Why essential: The new agentic case study links the June 18, 2025 MCP specification. The current stable MCP specification is November 25, 2025, and its changelog adds authorization discovery, incremental scope consent, server metadata icons, tool naming guidance, tool calling in sampling, experimental durable tasks, and updated security guidance. Those details are central to the book's trust-boundary framing.
   - Where to add: part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html, line 236 and line 247.
   - Scope: update link and replace the current protocols paragraph.
   - Evidence: MCP latest changelog, https://modelcontextprotocol.io/specification/2025-11-25/changelog; MCP latest specification, https://modelcontextprotocol.io/specification/2025-11-25; Linux Foundation A2A adoption, https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
   - Priority: ESSENTIAL.
   - Tier: TIER 1 (BLOCKING).
   - Old text: `href="https://modelcontextprotocol.io/specification/2025-06-18"`
   - New text: `href="https://modelcontextprotocol.io/specification/2025-11-25"`
   - Old text: `<p>The protocols that let agents and tools interoperate are crystallizing in real time. The Model Context Protocol, introduced by Anthropic in late 2024, has been adopted across multiple vendors as the de facto standard for connecting agents to tools and data, and a growing registry of MCP servers turns external services into plug-in tools. In parallel, the A2A specification targets cross-agent delegation and is converging on shared notions of agent cards, task lifecycles, streaming results, authentication, and asynchronous work. On the orchestration side, durable-execution engines (Temporal-style workflows, and agent frameworks such as LangGraph that compile an agent graph onto a checkpointed runtime) are bringing decades of workflow-reliability engineering to multi-agent systems. The open research questions are sharp: how to bound the cost of ever-larger shared context, how to verify that a fanned-out plan's sub-results compose correctly, and how to secure a fleet in which agents call tools and other agents they did not write. We meet the orchestration internals in full in <a href="../../part-6-multi-agent-systems/module-32-distributed-agent-orchestration/index.html">Chapter 32</a>.</p>`
   - New text: `<p>The protocols that let agents and tools interoperate are crystallizing into production standards. The Model Context Protocol, introduced by Anthropic in late 2024, now has a November 2025 stable specification that adds stronger authorization discovery, incremental scope consent, tool metadata conventions, tool calling during sampling, and experimental durable tasks for polling and deferred results. In parallel, the Linux Foundation hosted Agent2Agent protocol targets cross-agent delegation and has moved from a Google-originated proposal into a broader vendor ecosystem around agent cards, task lifecycles, streaming results, authentication, and asynchronous work. On the orchestration side, durable-execution engines (Temporal-style workflows, and agent frameworks such as LangGraph that compile an agent graph onto a checkpointed runtime) are bringing decades of workflow-reliability engineering to multi-agent systems. The open research questions are sharp: how to bound the cost of ever-larger shared context, how to verify that a fanned-out plan's sub-results compose correctly, and how to secure a fleet in which agents call tools and other agents they did not write. We meet the orchestration internals in full in <a href="../../part-6-multi-agent-systems/module-32-distributed-agent-orchestration/index.html">Chapter 32</a>.</p>`

### Missing Topics (Useful Soon)

1. Spark 4 coverage should use Spark 4.x language and name the current line.
   - Why useful: The new section is current in spirit, but Apache's latest public documentation is Spark 4.1.2. Saying "Spark 4" is not wrong, but "Spark 4.x" is more durable and avoids looking pinned to the first 4.0 release.
   - Where to add: part-2-distributed-data/module-07-spark-dataframes/section-7.8.html, lines 247 to 248.
   - Scope: heading and first sentence edit.
   - Evidence: Apache Spark latest docs, https://spark.apache.org/docs/latest/
   - Expected timeline: This becomes essential when the surrounding text starts naming exact runtime requirements, since Spark 4.1.2 currently documents Java 17 or 21, Python 3.10 or later, Scala 2.13, and R as deprecated.
   - Priority: USEFUL.
   - Tier: TIER 2 (HIGH).
   - Old text: `<h2>5. Spark 4 and Spark Connect: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - New text: `<h2>5. Spark 4.x and Spark Connect: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - Old text: `<p>Spark 4 makes a production pattern explicit that AI platform teams were already converging on:`
   - New text: `<p>The Spark 4.x line makes a production pattern explicit that AI platform teams were already converging on:`

### Trend Watch (Monitor)

1. Agentic coding evaluation is covered indirectly, but the new agentic material could mention SWE-bench Verified or related benchmark suites in a future revision.
   - Current status: Recent agent courses and public benchmarks increasingly treat code agents, web agents, program verification, and task-level agent evaluation as core material. Berkeley's LLM agents materials emphasize agent infrastructure, code generation, robotics, web automation, and program verification. SWE-bench Verified remains a widely cited software-agent benchmark.
   - Recommendation: Add a short footnote or callout in module 40 only if the existing agent evaluation section does not already contain it outside the current diff.
   - Evidence: Berkeley LLM Agents, https://rdi.berkeley.edu/llm-agents/f24; Berkeley Advanced LLM Agents, https://rdi.berkeley.edu/adv-llm-agents/sp25; SWE-bench, https://www.swebench.com/index.html
   - Priority: NICE-TO-HAVE.
   - Tier: TIER 3 (MEDIUM).

### Outdated Content

1. part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html: v5.1 MLPerf reference is superseded.
   - Current state: MLPerf Inference v6.0 is the current public MLCommons inference release as of June 18, 2026.
   - Fix: Replace with the v6.0 callout text above.

2. part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html: MCP June 2025 link is no longer the latest stable specification.
   - Current state: MCP version 2025-11-25 is marked latest and contains material protocol changes relevant to authorization, sampling, tool metadata, tasks, and security guidance.
   - Fix: Replace with the v2025-11-25 link and the protocols paragraph above.

3. No deprecated API was found in the added Spark Connect code snippet.
   - Current state: The snippet uses `SparkSession.builder.remote(...)`, which remains aligned with Spark Connect documentation.
   - Fix: No code fix required. Consider adding "Spark 4.x" wording as above.

### Competitive Comparison

Topic: Agent protocols and multi-agent systems
This book: Newly adds MCP, A2A, protocol boundaries, failure labeling, and orchestration concerns in module 40.
Berkeley LLM Agents: Covers LLM agent foundations, agent infrastructure, code generation, robotics, web automation, medical applications, and scientific discovery.
Berkeley Advanced LLM Agents: Adds reasoning, mathematics, code generation, and program verification.
Action: Keep the new MCP and A2A material, but update to the latest MCP spec and consider a future SWE-bench or program-verification bridge if module 40 lacks one elsewhere.

Topic: Serving evaluation
This book: Newly adds MLPerf Inference v5.1, TTFT, TPOT, goodput, and construct-matched evaluation.
MLCommons current benchmark suite: v6.0 adds GPT-OSS 120B, expanded DeepSeek-R1, DLRMv3, text-to-video, VLM metadata extraction, YOLOv11 edge, LoadGen++, and stronger multi-node reporting.
Action: Replace v5.1 with v6.0 so the book keeps its benchmark guidance current.

Topic: Distributed data systems
This book: Newly adds Spark Connect as a remote DataFrame client pattern.
Apache Spark latest docs: Current docs are Spark 4.1.2 and still present Spark Connect and the broader Spark 4.x runtime line.
Action: Use Spark 4.x wording and avoid implying 4.0 is the current exact release.

### Removal Candidates

1. No removal candidate from the added technical material.
   - Alternative: Keep the new Spark Connect, MLPerf, MCP, A2A, DRA, RAG, federated AI, and agent evaluation additions. They are current enough to integrate after the targeted fixes above.

2. Routing note, outside Agent 20 currency scope: front-matter/preface.html newly repeats course, semester, instructor, and students language in Section 0.5 and 0.8. The book-writers global rule says to avoid syllabus or course terminology when referring to the book itself. If the integrator treats this as in scope for style cleanup, replace course framing with reading-path or teaching-material framing.
   - Example old text: `<h2>0.5 How to Use This Book in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Example new text: `<h2>0.5 How to Use This Book as a Reading Path <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Priority: Not a currency issue. Route to Style and Voice or Structural Conformance.

### Verification Suggestions

1. Re-run a diff-only scan for added date and version claims after integration, especially `2025`, `2026`, `v5.1`, `v6.0`, `Spark 4`, `MCP`, and `A2A`.
2. Verify all external links resolve: MLCommons v6.0, MCP 2025-11-25, A2A latest specification, Apache Spark latest docs.
3. Run the book style scan for em dash, en dash, double hyphen, and banned phrases on the report and any accepted HTML edits.
4. For the MLPerf replacement, verify the surrounding text still distinguishes TTFT, TPOT, throughput, goodput, cost, energy, and matched experimental configuration in one pass.
5. For MCP and A2A, verify the chapter does not duplicate the same protocol explanation in section 40.6 and section 40.9 after integration.

### Execution Record

Files changed: this report only.

Verification run: inspected git status, current diff file list, diff stats, added lines in HTML, added-line scans for current technology and date claims, added-line scan for style rule violations, line-specific searches for MLPerf, MCP, Spark, and front-matter terminology.

External sources checked: MLCommons MLPerf Inference v5.1 and v6.0 pages, MCP 2025-11-25 changelog and specification, Kubernetes DRA GA note, Apache Spark latest docs, Linux Foundation A2A materials, Berkeley LLM agent course pages, SWE-bench.

Blockers: none. The audit was limited to new material in the working diff, so I did not evaluate unchanged book coverage for gaps that may already be handled elsewhere.

### Summary

NEEDS UPDATES. The new material is broadly current and well targeted, but two items should be fixed before integration: update MLPerf Inference v5.1 to v6.0, and update MCP from the June 2025 spec to the November 2025 latest stable spec with its security and durable task changes. Spark Connect coverage is current, with a useful wording adjustment to Spark 4.x.

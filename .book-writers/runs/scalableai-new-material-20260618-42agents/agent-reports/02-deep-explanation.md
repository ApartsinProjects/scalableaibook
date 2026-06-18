# Deep Explanation Designer Report

Agent: 02-deep-explanation  
Mode: suggest  
Scope: new material visible in current `git diff` only  
Files changed: none in book HTML. This report file only.

## Files Inspected

Inspected the current HTML diff for:

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

## Per-Section Verdicts

Most new material is explanation-positive: it adds problem statements, cross-links, current systems context, practical examples, and right-tool payoffs. The following leaf sections still have Agent 02 depth gaps in the new hunks:

- `front-matter/preface.html`: DEPTH-GAP for application path terminology in Table 0.2.
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`: DEPTH-GAP for speculative decoding scope and failure modes.
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`: DEPTH-GAP for protocol trust-boundary mechanism.
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`: DEPTH-GAP for MAST taxonomy mechanism and application.
- `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`: COURSE-READY on explanation depth, but has a verification concern in the added output block.

## Top Issues

1. MAST taxonomy is named before the reader sees why a taxonomy changes the repair loop.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html:214`, new callout `MAST Turns Evaluation Failures Into Actionable Defects`
   - Fails: why it matters, how it works, when it applies
   - Old text: `<p>For this case study, the regression gate should not only score task success; it should label why failed traces failed. The <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">MAST failure taxonomy</a> gives the label set: specification and system-design failures, inter-agent misalignment, and verification or termination failures. Add a failure-labeling pass to the CI report so a drop in quality becomes a work queue. "Specification" failures go to prompt, role, and tool-schema owners. "Misalignment" failures go to orchestration and shared-memory owners. "Verification" failures go to evidence checking, termination predicates, and judge calibration. This is the same production discipline as error budgets in <a href="../../part-7-infrastructure/module-35-reliable-secure-distributed-ai/index.html">Chapter 35</a>: aggregate failure rates matter, but the repair path starts only after failures are typed.</p>`
   - New text: `<p>For this case study, the regression gate should not only score task success; it should label why failed traces failed. A raw score drop tells the team that the agent is worse, but not whether the fix belongs in the prompt, the tool schema, the orchestration graph, or the verifier. The <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">MAST failure taxonomy</a> gives that routing layer. Read each failed trace from goal to final state, assign the first load-bearing failure to one of three buckets, then route the repair: specification and system-design failures go to prompt, role, and tool-schema owners; inter-agent misalignment failures go to orchestration and shared-memory owners; verification or termination failures go to evidence checking, stop conditions, and judge calibration. For example, if a researcher agent finds the right document but the writer agent ignores it, the defect is misalignment; if both agents follow a vague instruction that never required citations, the defect is specification; if the final answer cites unsupported evidence and the judge accepts it, the defect is verification. This is the same production discipline as error budgets in <a href="../../part-7-infrastructure/module-35-reliable-secure-distributed-ai/index.html">Chapter 35</a>: aggregate failure rates matter, but the repair path starts only after failures are typed.</p>`
   - Why it matters: The current text names the taxonomy and gives owner routing, but the reader cannot reproduce the labeling decision on a trace.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Agent 18 should verify the taxonomy categories against the cited paper before integration.

2. Protocol boundaries are called trust boundaries, but the concrete attack path is missing.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html:239`, new callout `Production Rule: Protocol Boundaries Are Trust Boundaries`
   - Fails: problem first, how it works, when it applies
   - Old text: `<p>In this case study, every MCP tool and every A2A peer is a network participant with its own credentials, schema, latency, and failure behavior. The supervisor should therefore treat protocol boundaries as trust boundaries. Before calling a tool, validate the schema and tenant authorization. After receiving a tool result, store it as evidence with provenance rather than as an instruction. Before delegating to a peer agent, read its agent card, check the advertised skill against the task, and attach a timeout, budget, and expected artifact contract. This converts interoperability from a convenience into an operational control: the same interface that makes a worker pluggable also gives the platform a place to enforce identity, budget, audit logging, and rollback.</p>`
   - New text: `<p>In this case study, every MCP tool and every A2A peer is a network participant with its own credentials, schema, latency, and failure behavior. The problem is that interoperability removes friction for both useful work and unsafe work: a malicious tool result can smuggle an instruction, a stale agent card can advertise a skill the peer no longer performs, and a slow peer can hold the supervisor open until the budget is gone. The supervisor should therefore treat protocol boundaries as trust boundaries. Before calling a tool, validate the schema and tenant authorization; after receiving a tool result, store it as evidence with provenance rather than as an instruction; before delegating to a peer agent, read its agent card, check the advertised skill against the task, and attach a timeout, budget, and expected artifact contract. This rule applies whenever the tool or peer is outside the supervisor's code and identity boundary, especially across teams, tenants, vendors, or network hosts. The same interface that makes a worker pluggable also gives the platform a place to enforce identity, budget, audit logging, and rollback.</p>`
   - Why it matters: The added callout already has the right rule, but the reader needs a concrete failure that makes the rule necessary.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Agent 20 or fact-checking should confirm current MCP and A2A security language if the surrounding paragraph keeps direct protocol links.

3. Application path table name-drops current terms without enough local meaning.
   - Location: `front-matter/preface.html:168`, `front-matter/preface.html:170`, and `front-matter/preface.html:177`, new Table 0.2 rows
   - Fails: what it is, when it applies
   - Old text: `<tr><td>Enterprise RAG and knowledge assistants</td><td><a href="../part-5-distributed-inference/module-25-distributed-retrieval-vector-search/index.html">25</a>, <a href="../part-8-case-studies/module-36-case-web-scale-text-rag/index.html">36</a>, <a href="../part-8-case-studies/module-40-case-distributed-llm-agentic/index.html">40</a></td><td>Distributed retrieval, reranking, GraphRAG-style structure, freshness, governance, and agentic retrieval loops.</td></tr>`
   - New text: `<tr><td>Enterprise RAG and knowledge assistants</td><td><a href="../part-5-distributed-inference/module-25-distributed-retrieval-vector-search/index.html">25</a>, <a href="../part-8-case-studies/module-36-case-web-scale-text-rag/index.html">36</a>, <a href="../part-8-case-studies/module-40-case-distributed-llm-agentic/index.html">40</a></td><td>Distributed retrieval, reranking, graph-structured retrieval for entities and relationships, freshness, governance, and agentic retrieval loops.</td></tr>`
   - Old text: `<tr><td>Foundation-model training infrastructure</td><td><a href="../part-3-distributed-ml/module-10-distributed-optimization/index.html">10</a>, <a href="../part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/index.html">15</a>, <a href="../part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/index.html">16</a>, <a href="../part-4-parallel-deep-learning/module-17-expert-parallelism-moe/index.html">17</a>, <a href="../part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/index.html">20</a></td><td>All-reduce, sharding, FP8-era precision, MoE routing, fault tolerance, and rollout-heavy post-training.</td></tr>`
   - New text: `<tr><td>Foundation-model training infrastructure</td><td><a href="../part-3-distributed-ml/module-10-distributed-optimization/index.html">10</a>, <a href="../part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/index.html">15</a>, <a href="../part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/index.html">16</a>, <a href="../part-4-parallel-deep-learning/module-17-expert-parallelism-moe/index.html">17</a>, <a href="../part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/index.html">20</a></td><td>All-reduce, sharding, low-precision formats such as FP8, MoE routing, fault tolerance, and rollout-heavy post-training.</td></tr>`
   - Old text: `<tr><td>AI cluster platforms and internal AI clouds</td><td><a href="../part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html">33</a>, <a href="../part-7-infrastructure/module-35-reliable-secure-distributed-ai/index.html">35</a>, <a href="../part-4-parallel-deep-learning/module-18-elastic-fault-tolerant-training/index.html">18</a>, <a href="../part-5-distributed-inference/module-24-distributed-llm-serving/index.html">24</a></td><td>GPU scheduling, gang placement, DRA-style accelerator allocation, confidential computing, and production reliability.</td></tr>`
   - New text: `<tr><td>AI cluster platforms and internal AI clouds</td><td><a href="../part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html">33</a>, <a href="../part-7-infrastructure/module-35-reliable-secure-distributed-ai/index.html">35</a>, <a href="../part-4-parallel-deep-learning/module-18-elastic-fault-tolerant-training/index.html">18</a>, <a href="../part-5-distributed-inference/module-24-distributed-llm-serving/index.html">24</a></td><td>GPU scheduling, gang placement, dynamic accelerator allocation, confidential computing, and production reliability.</td></tr>`
   - Why it matters: The preface is a map for readers. Terms like `GraphRAG-style`, `FP8-era`, and `DRA-style` work for insiders but are not locally defined for a first pass through the book.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Agent 13 may want to preserve brand-specific names as cross-reference anchors. If so, add parenthetical definitions instead of replacing the terms.

4. Speculative decoding needs an explicit acceptance condition and limit case.
   - Location: `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`, new speculative decoding prose and Figure 22.7.1 caption
   - Fails: how it works, when not to use it
   - Old text: `Speculative decoding exists because a single decode pass is so memory-bound that verifying several proposed tokens costs almost the same as generating one, so you should make each expensive pass do more work.`
   - New text: `Speculative decoding exists because a single target-model decode pass is so memory-bound that verifying several proposed tokens can cost almost the same as generating one. A small draft model proposes $k$ tokens, the target model scores those positions in one pass, and the server accepts the longest prefix whose draft tokens match the target distribution before falling back to the target token at the first mismatch. The method helps when the draft model is cheap and usually agrees with the target; it loses value when draft quality is poor, prompts are too short for the setup cost to amortize, or memory pressure from the extra draft path outweighs the saved target passes.`
   - Why it matters: The current version gives the intuition but not the acceptance mechanism or the boundary conditions that tell a reader when the optimization stops paying.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Agent 08 should verify the exact acceptance rule matches any code in the same section.

5. Goodput section has strong explanation depth, but one added output change undermines the numeric trace.
   - Location: `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`, Output 5.3.1 separator after the header
   - Fails: numeric grounding verification, not conceptual depth
   - Old text: the dash separator line directly under the output table header
   - New text: `========================================================`
   - Why it matters: The code now prints `print("=" * 56)`, but the output block appears to show both the old dash separator and the new equals separator. A reader following the numeric trace may think the output was hand-edited rather than run.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY after Agent 08 or a local run verifies the output.
   - Potential conflicts: Agent 08 owns code correctness.

## Content Additions

1. Add a tiny worked trace for MAST if the paragraph replacement above feels too long for a callout.
   - Location: after the MAST callout paragraph in `section-40.9.html`
   - Full draft: `<p>Mini-trace: a supervisor asks two workers for evidence, Worker A returns a relevant source, Worker B writes an answer without reading it, and the final verifier approves the unsupported answer. That is not a generic "low score"; it is a misalignment failure followed by a verification failure. The fix is therefore not a bigger model, but a stricter shared-memory contract and a verifier that checks cited evidence before success is recorded.</p>`
   - Tier: TIER 2 (HIGH)

2. Add a scope sentence to the protocol trust-boundary callout if the full replacement is not used.
   - Location: before the final sentence of the `Protocol Boundaries Are Trust Boundaries` callout in `section-40.6.html`
   - Full draft: `This rule applies whenever the tool or peer is outside the supervisor's code and identity boundary, especially across teams, tenants, vendors, or network hosts. Inside a single trusted process, the same checks may be lighter, but the moment a call crosses a protocol boundary it needs identity, authorization, timeout, and provenance.`
   - Tier: TIER 2 (HIGH)

## Illustration Opportunities

1. MAST failure routing map
   - Type: process diagnostic diagram
   - Scene description: A failed agent trace enters a triage station, then splits into three labeled repair lanes: specification, misalignment, verification.
   - Humor angle: The raw score is a blinking alarm that refuses to say which team to page until the trace is labeled.
   - Placement: after the MAST callout in `section-40.9.html`

2. Protocol boundary checkpoint
   - Type: architecture-as-checkpoint
   - Scene description: A supervisor sends requests through a gate labeled schema, identity, budget, provenance before reaching external MCP tools and A2A peers.
   - Humor angle: External workers line up with badges, schemas, and timeouts before entering the system.
   - Placement: near the `Protocol Boundaries Are Trust Boundaries` callout in `section-40.6.html`

## Verification Run

Commands run:

- Git status summary
- Git diff statistics
- HTML diff file list
- HTML diff with context
- Added-line extraction from the HTML diff
- Targeted `Select-String` passes for `MAST`, `MCP`, `A2A`, `GraphRAG`, `FP8`, `DRA`, `speculative`, `continuous batching`, `vLLM`, and `goodput`

Suggested follow-up verification:

- Run the code blocks touched in `section-5.3.html` and confirm Output 5.3.1 exactly matches the printed separator and numbers.
- Ask Agent 08 to verify the speculative decoding acceptance wording against the local code and figure.
- Ask Agent 18 or a fact checker to verify the MAST taxonomy category names against the cited paper.
- Run a style scan over this report and the eventual HTML integration for em dashes, en dashes, and double hyphens.

## Blockers

No blocker for this Agent 02 report. I did not edit book HTML by instruction.

## Summary

The new material is generally strong on motivation and cross-chapter connective tissue. The highest-value improvements are small, local depth fixes: show a failed trace before invoking MAST, show a concrete unsafe protocol crossing before prescribing trust-boundary controls, and define current table terms in the preface so the path map remains useful to first-time readers.

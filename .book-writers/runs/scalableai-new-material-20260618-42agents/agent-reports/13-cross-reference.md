## Cross-Reference Architect Report

Mode: suggest.
Scope: only new material visible in the current working diff.
Book HTML changed: none.

### Files Inspected

Configuration and prompt files:

- `BOOK_CONFIG.md`
- `CROSS_REFERENCE_MAP.md`
- `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-prompts/13-cross-reference.prompt.md`
- `E:\Projects\claude-skills\book-skills\SKILL.md`
- `E:\Projects\claude-skills\book-skills\agents\13-cross-reference.md`

Diff-scoped HTML files:

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

### Verification Performed

- Inspected `git status` and the diff-scoped HTML file list.
- Parsed added HTML lines from the working diff and counted added internal and external links.
- Resolved every newly added internal `href` against the source file directory.
- Scanned added lines for bare `Chapter N`, `Section X.Y`, `Section N`, and `Appendix X` references not already inside anchors.

Result: all newly added internal links resolve on disk. No broken internal hrefs were found in the new material. The remaining issues are link coverage, ambiguous bare section references, and missing progressive-depth links.

### Top Issues

1. New AI-native data engine section lacks internal bridges to the Spark, vector search, and RAG arcs.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html:188`
   - Old text:
```html
<p>Spark remains the default distributed DataFrame engine for SQL-shaped feature engineering, but modern AI data pipelines increasingly contain work that is not SQL-shaped: decoding images, reading PDFs, embedding audio, running batch inference, filtering captions with a model, or sampling random records for multimodal training. These workloads stress row-and-column abstractions because the expensive operation is often a Python or GPU function over an object, not a relational expression over scalar columns. That is why AI-native data systems have become part of the data-engineering toolkit rather than a replacement for Spark.</p>
```
   - New text:
```html
<p><a class="cross-ref" href="../module-07-spark-dataframes/index.html">Chapter 7</a> established Spark as the default distributed DataFrame engine for SQL-shaped feature engineering, but modern AI data pipelines increasingly contain work that is not SQL-shaped: decoding images, reading PDFs, embedding audio, running batch inference, filtering captions with a model, or sampling random records for multimodal training. These workloads stress row-and-column abstractions because the expensive operation is often a Python or GPU function over an object, not a relational expression over scalar columns. That is why AI-native data systems have become part of the data-engineering toolkit rather than a replacement for Spark, especially when the same corpus later feeds the vector indexes of <a class="cross-ref" href="../../part-5-distributed-inference/module-25-distributed-retrieval-vector-search/index.html">Chapter 25</a> and the web-scale RAG pipeline of <a class="cross-ref" href="../../part-8-case-studies/module-36-case-web-scale-text-rag/index.html">Chapter 36</a>.</p>
```
   - Why it matters: This is a new conceptual section with three progressive-depth hooks, Spark dataframes, vector-rich storage, and RAG corpus processing.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Agent 11 may also review the external tool claims, but the internal links are orthogonal.

2. Foundation-model corpus governance names Chapter 26 without a link.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html:256`
   - Old text:
```html
<p>A content hash proves which records were present; it does not prove they were licensed, decontaminated, documented, or removable. Foundation-model data governance binds the content-addressed snapshot to a machine-readable manifest and a human-readable dataset card. That binding is what lets Chapter 26's model registry answer the production question that matters: not only "which data trained this model?", but "what were we allowed to do with that data, and how can we prove it?"</p>
```
   - New text:
```html
<p>A content hash proves which records were present; it does not prove they were licensed, decontaminated, documented, or removable. Foundation-model data governance binds the content-addressed snapshot to a machine-readable manifest and a human-readable dataset card. That binding is what lets the model registry in <a class="cross-ref" href="../../part-5-distributed-inference/module-26-mlops-distributed-ai/index.html">Chapter 26</a> answer the production question that matters: not only "which data trained this model?", but "what were we allowed to do with that data, and how can we prove it?"</p>
```
   - Why it matters: This is a direct progressive-depth link from data lineage to fleet MLOps.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

3. The RAG frontier callout points to Chapter 40 as bare text.
   - Location: `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html:265`
   - Old text:
```html
<p>Agentic RAG combines these ideas into a control loop. A planner decomposes the user's task, chooses whether to call dense search, lexical search, graph traversal, or a web tool, checks whether the retrieved evidence is sufficient, and issues another retrieval if not. The 2025 Agentic RAG survey names planning, reflection, tool use, and multiagent collaboration as the design patterns that lift RAG from a static pipeline into an adaptive workflow (<a href="https://arxiv.org/abs/2501.09136" target="_blank" rel="noopener">Singh et al., 2025</a>). For distributed retrieval, that means the unit of capacity planning is no longer one user query but a trajectory: $H$ hops, each with its own fan-out, rerank, cache lookup, and governance check. Chapter 40 shows that loop inside an agent; this chapter supplies the retrieval substrate that makes every hop fast and auditable.</p>
```
   - New text:
```html
<p>Agentic RAG combines these ideas into a control loop. A planner decomposes the user's task, chooses whether to call dense search, lexical search, graph traversal, or a web tool, checks whether the retrieved evidence is sufficient, and issues another retrieval if not. The 2025 Agentic RAG survey names planning, reflection, tool use, and multiagent collaboration as the design patterns that lift RAG from a static pipeline into an adaptive workflow (<a href="https://arxiv.org/abs/2501.09136" target="_blank" rel="noopener">Singh et al., 2025</a>). For distributed retrieval, that means the unit of capacity planning is no longer one user query but a trajectory: $H$ hops, each with its own fan-out, rerank, cache lookup, and governance check. <a class="cross-ref" href="../../part-8-case-studies/module-40-case-distributed-llm-agentic/index.html">Chapter 40</a> shows that loop inside an agent; this chapter supplies the retrieval substrate that makes every hop fast and auditable.</p>
```
   - Why it matters: Retrieval and RAG are named in the progressive-depth map, with Chapter 25 feeding Chapters 36 and 40.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

4. Federated medical adapter discussion names Chapter 14 without a link.
   - Location: `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html:283`
   - Old text:
```html
<p>For a radiology foundation model this means hospital A may train rank 16 adapters on local GPUs, hospital B may train rank 8 adapters overnight, and a small clinic may train rank 4 adapters on a single server. The coordinator can aggregate compatible adapter slots, weight by site sample size, and keep site-specific adapters when heterogeneity is clinically meaningful. This is where the foundation-model literature in medicine, surveyed in <a href="https://arxiv.org/abs/2406.10729" target="_blank" rel="noopener">recent medical foundation model reviews</a>, meets the systems discipline of Chapter 14: the model family is large, but the federated object must stay small enough to communicate, audit, privatize, and roll back.</p>
```
   - New text:
```html
<p>For a radiology foundation model this means hospital A may train rank 16 adapters on local GPUs, hospital B may train rank 8 adapters overnight, and a small clinic may train rank 4 adapters on a single server. The coordinator can aggregate compatible adapter slots, weight by site sample size, and keep site-specific adapters when heterogeneity is clinically meaningful. This is where the foundation-model literature in medicine, surveyed in <a href="https://arxiv.org/abs/2406.10729" target="_blank" rel="noopener">recent medical foundation model reviews</a>, meets the systems discipline of <a class="cross-ref" href="../../part-3-distributed-ml/module-14-federated-decentralized-learning/index.html">Chapter 14</a>: the model family is large, but the federated object must stay small enough to communicate, audit, privatize, and roll back.</p>
```
   - Why it matters: Federated and decentralized learning is a signature progressive-depth arc, introduced in Chapter 14 and transformed in Chapter 37.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

5. Recommendation evaluation uses an ambiguous local section reference.
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html:233`
   - Old text:
```html
<p>This is the online version of the evaluation discipline from <a href="../../part-1-foundations/module-05-evaluating-distributed-ai/index.html">Chapter 5</a> and the experiment lineage of <a href="https://www.kdd.org/kdd2013/" target="_blank" rel="noopener">large-scale online controlled experiments</a>. It also connects directly to counterfactual logging: without propensities, the IPS and doubly robust estimators of Section 4 cannot correct for which items the old policy chose to expose. The feedback loop is therefore a data contract. If the serving fleet does not log the decision ingredients, the training and evaluation fleets cannot later explain whether a measured lift came from the model, the candidate source, the traffic mix, a freshness bug, or a logging artifact.</p>
```
   - New text:
```html
<p>This is the online version of the evaluation discipline from <a href="../../part-1-foundations/module-05-evaluating-distributed-ai/index.html">Chapter 5</a> and the experiment lineage of <a href="https://www.kdd.org/kdd2013/" target="_blank" rel="noopener">large-scale online controlled experiments</a>. It also connects directly to counterfactual logging: without propensities, the IPS and doubly robust estimators of <a class="cross-ref" href="section-38.4.html">Section 38.4</a> cannot correct for which items the old policy chose to expose. The feedback loop is therefore a data contract. If the serving fleet does not log the decision ingredients, the training and evaluation fleets cannot later explain whether a measured lift came from the model, the candidate source, the traffic mix, a freshness bug, or a logging artifact.</p>
```
   - Why it matters: The current text says `Section 4`, which is ambiguous in an HTML book that uses global section numbers.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

6. FP8 frontier has strong external citations but misses the Chapter 22 per-node efficiency bridge.
   - Location: `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`, new research-frontier paragraph
   - Old text:
```html
Active questions for 2025 to 2026 are how low the gradient all-reduce itself can go (FP8 and even FP6 gradient compression), how to keep the optimizer state stable at these widths, and whether MXFP4 can train, not merely serve, without accuracy loss. The trajectory is clear: each halving of element width is a halving of the bytes this chapter's collectives must move.
```
   - New text:
```html
Active questions for 2025 to 2026 are how low the gradient all-reduce itself can go (FP8 and even FP6 gradient compression), how to keep the optimizer state stable at these widths, and whether MXFP4 can train, not merely serve, without accuracy loss. This is the training-side counterpart of the per-node efficiency constraints in <a class="cross-ref" href="../../part-5-distributed-inference/module-22-per-node-inference-efficiency/index.html">Chapter 22</a>: each halving of element width is a halving of the bytes this chapter's collectives must move.
```
   - Why it matters: The book configuration explicitly treats scale-up as a labeled per-node prerequisite, and Chapter 22 is the canonical place to connect precision and serving efficiency.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

7. MAST table in Chapter 32 should link forward to the Chapter 40 case-study use of MAST.
   - Location: `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`, new MAST paragraph
   - Old text:
```html
<p>The modern failure vocabulary for this diagnosis is MAST, the Multi-Agent Systems Failure Taxonomy from <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">Why Do Multi-Agent LLM Systems Fail?</a> and the <a href="https://sky.cs.berkeley.edu/project/mast/" target="_blank" rel="noopener">Berkeley MAST project page</a>. MAST analyzed more than 150 tasks across five multi-agent frameworks and grouped failures into three families that map cleanly onto the traces above: specification and system-design failures before execution, inter-agent misalignment during execution, and verification or termination failures after execution. The taxonomy matters because "the agent failed" is not actionable; "the planner underspecified the worker role", "the agents reset the conversation history", or "the verifier accepted an ungrounded final answer" points to a specific repair.</p>
```
   - New text:
```html
<p>The modern failure vocabulary for this diagnosis is MAST, the Multi-Agent Systems Failure Taxonomy from <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">Why Do Multi-Agent LLM Systems Fail?</a> and the <a href="https://sky.cs.berkeley.edu/project/mast/" target="_blank" rel="noopener">Berkeley MAST project page</a>. MAST analyzed more than 150 tasks across five multi-agent frameworks and grouped failures into three families that map cleanly onto the traces above: specification and system-design failures before execution, inter-agent misalignment during execution, and verification or termination failures after execution. The taxonomy matters because "the agent failed" is not actionable; "the planner underspecified the worker role", "the agents reset the conversation history", or "the verifier accepted an ungrounded final answer" points to a specific repair. <a class="cross-ref" href="../../part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html">Section 40.9</a> applies the same taxonomy as a regression-gate label set for a distributed agentic application.</p>
```
   - Why it matters: The new Chapter 40 material explicitly reuses MAST, so the earlier concept should point forward to its case-study application.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

8. Fraud drift monitoring example should link back to the streaming AI and construct-matched evaluation foundations.
   - Location: `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`, new practical-example callout
   - Old text:
```html
<p>Online fraud detection makes the label-delay problem operational rather than theoretical. A transaction is scored in milliseconds, but the most reliable labels often arrive through chargebacks, investigations, or manual review days or weeks later. The monitor therefore runs two clocks at once: a fast unlabeled clock for input, score, approval-rate, and block-rate drift; and a slow labeled clock that reconciles those alarms against realized fraud. The older credit-card fraud literature already framed delayed labels and concept drift as central to realistic fraud detection, and newer surveys such as <a href="https://www.mdpi.com/1999-4893/19/5/354" target="_blank" rel="noopener">Algorithms 2026, financial fraud detection survey</a> still identify adaptive, drift-aware learning systems as a core requirement.</p>
```
   - New text:
```html
<p>Online fraud detection makes the label-delay problem operational rather than theoretical. A transaction is scored in milliseconds, but the most reliable labels often arrive through chargebacks, investigations, or manual review days or weeks later. The monitor therefore runs two clocks at once: a fast unlabeled clock for input, score, approval-rate, and block-rate drift; and a slow labeled clock that reconciles those alarms against realized fraud. This is the serving-fleet version of the event-time and delayed-label discipline from <a class="cross-ref" href="../../part-2-distributed-data/module-09-stream-processing-online-ai/index.html">Chapter 9</a> and the construct-matched evaluation discipline from <a class="cross-ref" href="../../part-1-foundations/module-05-evaluating-distributed-ai/index.html">Chapter 5</a>. The older credit-card fraud literature already framed delayed labels and concept drift as central to realistic fraud detection, and newer surveys such as <a href="https://www.mdpi.com/1999-4893/19/5/354" target="_blank" rel="noopener">Algorithms 2026, financial fraud detection survey</a> still identify adaptive, drift-aware learning systems as a core requirement.</p>
```
   - Why it matters: The new example connects online drift, delayed labels, and evaluation, but currently leaves those prerequisite chapters implicit.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

9. Agent protocol paragraph uses an unlinked intra-page shorthand.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html:236`
   - Old text:
```html
turning the tool layer of Section 2 into a pluggable, discoverable ecosystem.
```
   - New text:
```html
turning the tool layer introduced earlier under Tools as Distributed Services into a pluggable, discoverable ecosystem.
```
   - Why it matters: The current shorthand is not a cross-chapter failure, but `Section 2` is ambiguous because the book uses global section numbers such as Section 40.2.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Links Not Added

- `front-matter/preface.html`: The new application reference table is already densely linked. I do not recommend adding more links inside the table, because it already carries 40 plus internal anchors and all resolve.
- `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`: The new MLPerf v5.1 callout could link forward to Chapters 22 and 24, but the file is a foundations section and already discusses LLM serving metrics directly. Treat as optional after the higher-value bare-reference fixes above.
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`: The thesis-thread callout already links back to Chapters 1, 2, 3, and 4. No additional backward links are needed there.

### Verification Suggestions

- Re-run the added-link resolver after integration and require zero broken internal hrefs.
- Re-scan added prose for bare `Chapter N`, `Section X.Y`, `Section N`, and `Appendix X` references.
- Count `class="cross-ref"` anchors in each modified section file, excluding footer navigation. Newly added conceptual blocks should have at least one internal bridge unless the block is purely local code cleanup.
- Spot-check that each recommended relative path resolves from its source file directory.

### Summary

- Total links added by this agent: 0, suggest mode only.
- Newly added internal hrefs found in diff: 82.
- Broken newly added internal hrefs: 0.
- High-priority fixes recommended: 5.
- Medium-priority fixes recommended: 4.
- Assessment: ADEQUATE after path validation, NEEDS MORE for progressive-depth linking in several new topical callouts.

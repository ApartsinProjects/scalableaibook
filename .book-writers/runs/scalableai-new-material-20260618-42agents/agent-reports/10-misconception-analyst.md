## Misconception Analysis Report

Agent: 10 Misconception Analyst
Mode: suggest
Scope: new material visible in current `git diff`

### Files Inspected

1. `front-matter/preface.html`
2. `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`
3. `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`
4. `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`
5. `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`
6. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`
7. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
8. `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`
9. `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`
10. `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`
11. `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`
12. `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`
13. `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`
14. `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`
15. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`
16. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`
17. `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`
18. `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`
19. `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html`
20. `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html`
21. `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`
22. `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`
23. `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html`
24. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`
25. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html`
26. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`
27. `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`
28. `part-7-infrastructure/module-34-edge-fog-on-device/index.html`
29. `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`
30. `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html`
31. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`
32. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`
33. `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`
34. `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`
35. `part-8-case-studies/module-38-case-distributed-recommendation/index.html`
36. `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`
37. `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`
38. `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`
39. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`
40. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`

### Files Changed

Only this report was created. No book HTML was edited.

### High-Risk Misconceptions

1. Section 22.5: Students may think KV-cache eviction and 2-bit quantization are generally safe optimizations.
   Location: `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`, line 308, research-frontier paragraph.
   Old text: "Compression methods discard or merge low-importance entries: <a href=\"https://arxiv.org/abs/2306.14048\" target=\"_blank\" rel=\"noopener\">H2O</a> and <a href=\"https://arxiv.org/abs/2404.14469\" target=\"_blank\" rel=\"noopener\">SnapKV</a> evict tokens the model rarely attends to, while quantization work such as <a href=\"https://proceedings.mlr.press/v235/liu24bz.html\" target=\"_blank\" rel=\"noopener\">KIVI</a> drives KV down to 2 bits per element with reported minimal degradation."
   New text: "Compression methods discard or merge entries that appear low utility under a specific model, prompt distribution, and evaluation suite: <a href=\"https://arxiv.org/abs/2306.14048\" target=\"_blank\" rel=\"noopener\">H2O</a> and <a href=\"https://arxiv.org/abs/2404.14469\" target=\"_blank\" rel=\"noopener\">SnapKV</a> evict tokens the model rarely attends to in their measured workloads, while quantization work such as <a href=\"https://proceedings.mlr.press/v235/liu24bz.html\" target=\"_blank\" rel=\"noopener\">KIVI</a> drives KV down to 2 bits per element with small reported degradation on its benchmarks. The common mistake is to treat those policies as universally safe. They must be remeasured on the service's own long-context, code, legal, retrieval, and multi-turn prompts, because a token that looks unimportant early can become decisive later."
   Why they would think this: The current sentence compresses the result into "rarely attends" and "minimal degradation" without naming workload dependence.
   Why it is wrong: KV eviction and quantization are distribution-sensitive. Attention sinks, rare tokens, code identifiers, citations, and early constraints can be fragile.
   Prevention: Replace the sentence with the new text and keep the existing table row that says recall loss must be tested.
   Diagnostic question: "If a token receives low attention during early decoding, is it always safe to evict it for a legal or code-editing conversation?"
   Tier: TIER 2 (HIGH)
   Action: APPLY DIRECTLY
   Potential conflicts: None.

2. Section 15.8: Students may think FP8 halves every distributed-training communication cost by definition.
   Location: `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`, line 210, final sentence of FP8 frontier paragraph.
   Old text: "The trajectory is clear: each halving of element width is a halving of the bytes this chapter's collectives must move."
   New text: "The trajectory is clear but conditional: each halving of element width halves the bytes only for the tensors actually stored, gathered, or reduced at that width. Scaling metadata, wider accumulators, optimizer state, unsupported kernels, and BF16 fallback paths can leave the end-to-end step far from a clean 2x savings, so FP8 should be treated as a measured systems configuration rather than a universal communication multiplier."
   Why they would think this: The current sentence states a general proportional law immediately after discussing FP8, MXFP8, and gradient all-reduce compression.
   Why it is wrong: FP8 training commonly keeps accumulators and optimizer state wider, and not every collective or tensor path uses FP8.
   Prevention: Replace the sentence with the new text.
   Diagnostic question: "Which tensors in this training step are actually FP8 on the wire, and which remain BF16 or FP32?"
   Tier: TIER 2 (HIGH)
   Action: APPLY DIRECTLY
   Potential conflicts: Coordinate with code-pedagogy reviewers if they add FP8 profiling exercises.

3. Section 20.9: Students may think GRPO or RLVR eliminates value estimation cost and makes reward evaluation cheap.
   Location: `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`, lines 161 and 172.
   Old text: "methods in the lineage of GRPO and the open reasoning-model efforts of 2025 use rule-based or verifiable rewards instead of a learned reward model, which makes reward evaluation cheaper and pushes nearly all the cost onto generation."
   New text: "methods in the lineage of GRPO and the open reasoning-model efforts of 2025 use rule-based or verifiable rewards instead of a learned reward model, which often removes a learned reward-model service but does not make reward evaluation free. Unit tests, symbolic checkers, constrained judges, sandbox execution, and malformed-output handling can still dominate CPU time or queueing. The systems shift is that generation is usually the largest GPU term, while verification remains a separate service that must be budgeted, isolated, and measured."
   Why they would think this: "Cheaper" plus "nearly all the cost onto generation" can become "verification cost is negligible."
   Why it is wrong: Verifiers can be CPU-heavy, brittle, or model-backed, and they can create queueing and security costs.
   Prevention: Replace the sentence with the new text.
   Diagnostic question: "In a math-code RLVR run, what happens to throughput if test execution or symbolic checking becomes the bottleneck?"
   Tier: TIER 2 (HIGH)
   Action: APPLY DIRECTLY
   Potential conflicts: None.

4. Section 11.7: Students may think 2D sparse parallelism automatically solves hot-row and link-hotspot problems.
   Location: `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`, after line 111, following the planner paragraph.
   Old text: "Grid sharding combines row and column splits so a single dominant table can consume the whole cluster without putting all lookup or gradient traffic through one link."
   New text: "Grid sharding combines row and column splits so a single dominant table can use the whole cluster without forcing all lookup or gradient traffic through one owner link. It reduces the structural bottleneck, but it does not remove skew by itself: hot rows, hot features, and bursty campaigns still need cache placement, frequency-aware routing, admission control, and per-shard traffic monitoring."
   Why they would think this: The current phrasing makes the placement strategy sound sufficient once grid sharding is chosen.
   Why it is wrong: Sharding changes ownership and memory layout, but access skew and hot embeddings remain workload problems.
   Prevention: Replace the sentence with the new text.
   Diagnostic question: "If one item id appears in 20 percent of requests, does row-wise or grid sharding alone make its traffic uniform?"
   Tier: TIER 3 (MEDIUM)
   Action: APPLY DIRECTLY
   Potential conflicts: None.

5. Section 37.4: Students may think heterogeneous LoRA ranks can be averaged without a compatibility rule.
   Location: `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`, line 283.
   Old text: "The coordinator can aggregate compatible adapter slots, weight by site sample size, and keep site-specific adapters when heterogeneity is clinically meaningful."
   New text: "The coordinator can aggregate adapters only after it has made their parameterization compatible: use a common target rank, pad or project lower-rank adapters into that target space, or keep separate site-specific adapters when rank, modality, or clinical population differs too much. It may then weight compatible updates by site sample size, but it must validate the merged adapter per site before release."
   Why they would think this: The phrase "aggregate compatible adapter slots" hides the compatibility requirement just after giving examples with ranks 16, 8, and 4.
   Why it is wrong: LoRA factors with different ranks and bases are not automatically aligned objects. Naive averaging can change the update subspace.
   Prevention: Replace the sentence with the new text.
   Diagnostic question: "What exactly is being averaged when one hospital trains rank 16 and another trains rank 4?"
   Tier: TIER 2 (HIGH)
   Action: APPLY DIRECTLY
   Potential conflicts: Coordinate with fact-checker if a more formal FedLoRA aggregation description is added.

6. Section 25.1: Students may think GraphRAG is the strictly better replacement for vector retrieval.
   Location: `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`, line 264, after the GraphRAG paragraph.
   Old text: "The systems point is that flat vector search is excellent for local questions whose answer sits in one passage, while graph retrieval is better for global questions, multi-hop joins, and relational private corpora."
   New text: "The systems point is that flat vector search is excellent for local questions whose answer sits in one passage, while graph retrieval is often better for global questions, multi-hop joins, and relational private corpora when the extracted graph is accurate and fresh. GraphRAG is not a replacement for dense search. It is another index with its own extraction errors, summary drift, permission propagation requirements, and refresh cost."
   Why they would think this: "Graph retrieval is better" reads as an unconditional hierarchy.
   Why it is wrong: Graph quality depends on extraction, entity resolution, summarization, update cadence, and policy synchronization.
   Prevention: Replace the sentence with the new text.
   Diagnostic question: "If the entity graph is stale or has merged two people with the same name, should GraphRAG outrank vector evidence?"
   Tier: TIER 3 (MEDIUM)
   Action: APPLY DIRECTLY
   Potential conflicts: Cross-reference with Chapter 36 GraphRAG additions.

7. Chapter 34 index: Students may over-map datacenter LLM serving phases onto every on-device generative AI workload.
   Location: `part-7-infrastructure/module-34-edge-fog-on-device/index.html`, line 145.
   Old text: "The split-compute models of this chapter should therefore be read as the edge counterpart of <a href=\"../../part-5-distributed-inference/module-24-distributed-llm-serving/index.html\">Chapter 24</a>: the same prefill, decode, memory, and routing economics appear, but battery, radio bandwidth, and physical safety join the cost function."
   New text: "The split-compute models of this chapter should therefore be read as the edge counterpart of <a href=\"../../part-5-distributed-inference/module-24-distributed-llm-serving/index.html\">Chapter 24</a> when the workload is autoregressive generation: prefill, decode, memory, and routing economics reappear, but battery, radio bandwidth, and physical safety join the cost function. For perception, control, and short-horizon planning models, the analogous split is not prefill versus decode; it is sensor preprocessing, local inference, uncertainty gating, and escalation."
   Why they would think this: The current sentence uses "same prefill, decode" across phones, robots, vehicles, and gateways.
   Why it is wrong: Many edge AI workloads are not token generators. Their cost phases differ.
   Prevention: Replace the sentence with the new text.
   Diagnostic question: "Does a local object detector have a decode phase in the LLM-serving sense?"
   Tier: TIER 3 (MEDIUM)
   Action: APPLY DIRECTLY
   Potential conflicts: None.

### Confusable Concept Pairs

1. KV-cache paging versus KV-cache compression. Section 22.5 correctly separates them, but the frontier paragraph should emphasize that paging removes allocation waste while compression changes model-visible state.
2. FP8 storage, FP8 communication, FP8 accumulation, and FP8 optimizer state. Section 15.8 should not let readers collapse these into one "the model trains in FP8" idea.
3. RLVR verifier versus learned reward model. Section 20.9 should prevent the belief that removing a learned reward model removes reward infrastructure.
4. GraphRAG versus vector RAG. Section 25.1 should present graph retrieval as complementary and quality-dependent.
5. FedLoRA adapter rank versus adapter compatibility. Section 37.4 should explicitly say heterogeneous ranks need a normalization or separation rule.
6. Datacenter prefill and decode versus edge perception and control phases. Chapter 34 should qualify the analogy.

### Oversimplifications to Qualify

1. "Each halving of element width is a halving of the bytes this chapter's collectives must move." Qualify because not every tensor path uses the lower precision.
2. "DeepSeek's multi-head latent attention compresses keys and values into a small shared latent, shrinking the cache by an order of magnitude." Consider adding "for architectures designed around MLA" if fact-checkers want tighter wording, because this is not a plug-in conversion for arbitrary models.
3. "Graph retrieval is better for global questions." Qualify with graph quality, freshness, extraction correctness, and permission propagation.
4. "The coordinator can aggregate compatible adapter slots." Expand compatibility conditions for heterogeneous LoRA ranks.
5. "The same prefill, decode, memory, and routing economics appear." Limit to autoregressive edge-generation workloads.

### Positive Findings

1. The new RAG governance gate in Section 25.1 is strong misconception prevention. It correctly states that permission precedes relevance.
2. The robotics index already includes the right warning: a foundation model is a proposal generator, not the safety authority.
3. The agentic Section 40.6 addition correctly frames MCP and A2A boundaries as trust boundaries, preventing a common "protocol equals trust" misconception.
4. The Section 35.5 and 35.6 additions correctly distinguish secure aggregation, Byzantine robustness, gradient inversion, and differential privacy.
5. The Spark Connect addition in Section 7.8 already prevents the likely misconception by saying Connect moves the driver boundary, not the cost model.

### Verification Suggestions

1. Search the changed HTML for newly added phrases that imply universal safety: `minimal degradation`, `always`, `replacement`, `not a replacement`, `better for`, `same prefill`.
2. For each high-risk item above, verify the final HTML contains either a `warning`, `key-insight`, or explicit contrast sentence within the same subsection.
3. Re-run a diff-scoped misconception scan after integration: inspect only added lines in `git diff` and confirm each major new frontier topic has one diagnostic caveat.
4. Have the fact-checker verify the FedLoRA heterogeneous-rank wording before integration, since adapter aggregation details are easy to overstate.
5. Have the code-caption and figure agents verify that no suggested wording creates numbering or caption changes.

### Verification Run

Commands run:

1. Git diff file-name listing.
2. Git diff summary statistics.
3. Git short status.
4. Diff inspection commands over the modified HTML files with four context lines and color disabled.
5. `Select-String` line-location checks for the specific high-risk passages

### Blockers

None. The report is complete for the new material visible in the current working diff. The only limitation is that this reviewer did not edit book HTML by instruction.

### Summary

Overall misconception risk: MODERATE. The new material is generally accurate and often already includes good warning language, but several frontier inserts can make readers overgeneralize advanced techniques into universal upgrades. The highest-value fixes are short qualifier replacements that preserve the new content while preventing false mental models about KV-cache compression, FP8 training, RLVR verification, 2D sparse sharding, FedLoRA aggregation, GraphRAG, and edge generative AI.

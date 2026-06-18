## Example and Analogy Report

### Scope

Mode: suggest.

Target: new material visible in the current working diff only.

Files changed: this report only. No book HTML was edited.

Verification run: inspected the git diff name-status view, the git diff stat view, the zero-context HTML diff view, and line-numbered added hunks generated from the current diff.

Blockers: none.

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

### Missing Examples

1. P1, `front-matter/preface.html:158`: the new application-path figure is useful, but the surrounding prose introduces Table 0.2 and not Figure 0.2.
   Suggested example reference: insert before the figure: "Figure 0.2 previews the same idea visually: Part I acts as the hub, and each application path branches toward the chapters whose systems pressure dominates."

2. P1, `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html:250`: the Spark Connect code block appears after conceptual prose but needs a prose lead-in that tells the reader what to inspect.
   Suggested example reference: insert before the code block: "The following micro-example shows the boundary shift in code: the Python process builds a feature plan, while the remote Spark Connect server owns analysis, scheduling, and execution."

3. P1, `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html:190`: the Ray Data example has no visible output or trace, so the reader cannot picture what the pipeline produced.
   Suggested example: after the caption, add: "A concrete run might read 12 million image-caption rows, clean captions on CPU workers, embed batches of 128 images on GPU workers, and write 384 Parquet shards. The important trace is not one row; it is the handoff from tabular scan to Python cleanup to GPU inference to sharded output."

4. P1, `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html:227`: the FedLoRA formula needs an immediate numeric trace.
   Suggested example: "For a layer with `d=4096`, `m=4096`, and rank `r=16`, a full update sends 16,777,216 numbers. A LoRA update sends `16 * (4096 + 4096) = 131,072` numbers, a 128x reduction before quantization or sparsity."

5. P1, `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html:283`: the federated adapter table is strong, but the follow-up example needs the same numeric grounding as Section 14.9.
   Suggested example: "For one 4096 by 4096 projection, rank 16, rank 8, and rank 4 adapters upload about 131k, 65k, and 33k numbers respectively. The coordinator can normalize these adapter shapes before aggregation while preserving the fixed backbone hash."

6. P2, `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html:370`: the vector-compression callout names the compression ladder but lacks a small byte example.
   Suggested example: "A 768-dimensional fp16 embedding is 1,536 bytes. A 64-byte compressed code cuts storage by 24x, but if recall requires reranking 5,000 candidates instead of 500, the saved memory may reappear as reranker cost."

7. P2, `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html:105`: late interaction and MaxSim are abstract without a concrete scoring trace.
   Suggested example: "If query tokens are `[refund, policy]`, ColBERT keeps a vector for each token. A passage scores well when some passage token is close to `refund` and some passage token is close to `policy`; MaxSim sums those best matches instead of compressing the passage into one vector."

8. P2, `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html:213`: semantic IDs are explained clearly, but a tiny token example would make the mechanism visible.
   Suggested example: "A shoe item might map to semantic ID `[12, 4, 91]`, where the first code roughly groups footwear, the second narrows style, and the third separates a local cluster. The generator predicts code paths, then the resolver maps valid paths back to item IDs."

### Weak Examples

1. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html:100`: the streaming feature-store callout has a good operational checklist, but it would be stronger with a point-in-time join trace.
   Replacement: "At `10:05:00`, user 17 has three card swipes in the last five minutes totaling `$84`. The online store serves `spend_5m=84` for the live decision. The offline store must reproduce exactly `84` for the training row at `10:05:00`, not a later value after the `10:07` swipe arrives."

2. `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html:216`: the DiLoCo distinction is correct but abstract.
   Replacement: "If a run normally synchronizes 10 GB every 100 steps, compression asks whether that 10 GB can become 1 GB. DiLoCo asks whether the job can synchronize the same 10 GB every 1,000 local steps instead. One shrinks the message; the other changes the rhythm."

3. `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html:161`: the RLVR and GRPO table is useful, but group advantage remains hard to picture.
   Replacement: "For one math prompt, suppose four completions receive verifier scores `[1, 1, 0, 0]`. GRPO can reward the two correct completions relative to the group average `0.5` without training a separate value model for that prompt."

4. `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html:126`: the governance gate is important but would benefit from one permission-filter trace.
   Replacement: "Example: a user with `tenant=A`, `region=EU`, and `role=analyst` issues a query. The gateway adds filters for tenant, region, document lifecycle, and clearance before vector search. Shards containing only tenant B can be skipped; mixed shards must evaluate the predicate locally before returning candidate passages."

5. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html:191`: context engineering is introduced as a systems layer, but no context-budget example is given.
   Replacement: "For a 32k-token window, reserve 4k for instructions and tool schemas, 6k for retrieved evidence, 2k for recent trace state, and 20k for working memory and answer generation. A context router that admits a 15k retrieved document must evict, summarize, or reject something else."

6. `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html:214`: the secure-aggregation warning is strong, but a numeric poison trace would make the conflict concrete.
   Replacement: "With 20 clients, secure aggregation may reveal only the summed update. If one client contributes a clipped but malicious update that moves one embedding direction by `+4.0`, the server may see only an aggregate shift of `+0.2` per client and lose the evidence needed to identify the source."

### Analogy Opportunities

1. `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html:108`: 2D sparse parallelism needs a more explicit mental model.
   Suggested analogy: "Think of the embedding system as a warehouse whose products are too large and too unevenly popular for one shelving rule. Small product families stay on one shelf, very wide products are split across shelves, hot products get a front-counter cache, and replica groups create multiple warehouse copies for different checkout lines."
   Where it breaks down: "Unlike a warehouse, the sharding plan also controls collective communication and optimizer-state placement, not just physical storage."

2. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html:323`: the managed-memory-tier model for KV cache is good but should be made visual.
   Suggested analogy: "Think of KV cache as a train station locker system: active sessions keep full bags in the closest lockers, repeated prefixes share a labeled locker, older bags move to cheaper storage, and evicted bags require a costly trip back."
   Where it breaks down: "Unlike physical lockers, attention can make an early token suddenly important again, so eviction must be validated against quality, not only recency."

3. `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html:148`: scheduling as part of the algorithm can be made memorable.
   Suggested analogy: "A distributed training job is like assigning musicians to rooms before a performance. The score is the same, but if musicians who must coordinate every bar are placed in distant rooms, the music slows down."
   Where it breaks down: "Unlike musicians, GPUs exchange tensors over measured links, so the final placement decision must be verified with topology and communication traces."

4. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html:218`: GraphRAG would benefit from a local versus global query analogy.
   Suggested analogy: "Dense chunk retrieval is like asking for the best paragraph in a library; GraphRAG is like asking the librarian for themes across many shelves and the relationships between authors, incidents, teams, and dates."
   Where it breaks down: "Unlike a human librarian, the graph must be built from extracted entities and summaries, so extraction errors become retrieval errors."

5. `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html:258`: the MARL to LLM-agent bridge is a productive analogy but needs a limitation note.
   Suggested analogy: "A MARL agent team and an LLM-agent team both resemble a shift of workers coordinating under partial information: each worker sees part of the state, chooses an action, and affects the team's outcome."
   Where it breaks down: "LLM agents often act through language, tools, and memory rather than a fixed simulator action space, so reward, termination, and state observability are much less clean."

### Existing Analogies to Fix

1. `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html:110`: "one row lives on one shard" is labeled as the right mental model, but the new paragraph immediately says large systems use a richer two-dimensional layout. Without an explicit limitation note, the mental model may stick too strongly.
   Fix: add after the first paragraph: "Where this model breaks down: at the largest scale, a hot or wide table may need row, column, grid, cache, and replica placement at the same time, so a row is no longer the only unit of reasoning."

2. `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html:221`: the TorchTitan practical example is concrete, but it compresses four parallelism modes into one recipe without a simple mental picture.
   Fix: add one sentence before the callout: "Picture the training mesh as graph paper: one axis splits examples, one axis splits matrix multiplications, and one axis moves activations between model stages."

3. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html:237`: "protocol boundaries are trust boundaries" is a strong rule, but it would be more memorable with a concrete artifact trace.
   Fix: add: "For example, a code-search MCP server should return `{query, repo, commit, file, line_range, snippet}` as evidence. The supervisor may cite that evidence, but it should not treat the returned text as a new instruction."

### Unreferenced Examples and Figures

1. `front-matter/preface.html:158`: Figure 0.2 is not referenced by number before it appears.
   Draft reference sentence: "Place immediately before line 158: `Figure 0.2 previews the same idea visually: Part I acts as the shared hub, and each application path branches toward the chapters whose system pressure dominates.`"

2. `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html:250`: Code 7.8.4 is not introduced by a direct prose reference.
   Draft reference sentence: "Place immediately before line 250: `Code 7.8.4 makes the client boundary concrete: the local Python process creates a DataFrame plan, but the Spark Connect server analyzes and runs it on the governed cluster.`"

3. `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html:190`: Code 8.7.3 is not introduced by a direct prose reference.
   Draft reference sentence: "Place immediately before line 190: `Code 8.7.3 shows the same fit-transform idea in an AI-native data engine, where table reads, Python cleanup, GPU embedding, and sharded output are one streaming pipeline.`"

4. `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html:264`: Table 24.5.2 is useful, but the added prose would benefit from a direct table lead-in.
   Draft reference sentence: "Place before line 264: `Table 24.5.2 turns the prefill and decode split into a capacity-planning checklist, with one demand driver and one SLO for each pool.`"

5. `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html:271`: Table 37.4.2 is captioned but not explicitly introduced in the preceding sentence.
   Draft reference sentence: "Place before line 271: `Table 37.4.2 makes the adapter design choice concrete by comparing full-model federation with FedLoRA or PEFT federation across communication, site capability, privacy, and regulatory control.`"

### Prioritized Fixes

1. P1: add prose references for new Figure 0.2, Code 7.8.4, and Code 8.7.3. These are direct conformance issues because every figure and code block should be referenced in surrounding prose.

2. P1: add numeric traces after the FedLoRA formulas in Sections 14.9 and 37.4. These are formula-adjacent additions and the current material asks readers to infer the scale reduction from symbols alone.

3. P2: add small mechanism traces for Spark Connect, Ray Data, DiLoCo, vector compression, late interaction, semantic IDs, and GRPO. These changes will make the new research-frontier material feel like teachable book content rather than news annotations.

4. P2: add limitation notes where a new mental model or analogy is introduced, especially 2D sparse parallelism, KV-cache memory tiers, scheduling as algorithm, GraphRAG, and MARL to LLM-agent teams.

5. P3: add one concrete policy or artifact trace to governance-heavy callouts, especially RAG permission filtering, model-registry corpus policy, MAST labeling, and protocol-boundary trust.

### Verification Suggestions

1. Run a diff-scoped orphan scan: for each added `<figure>`, `<table>`, and `<pre><code>`, check the previous paragraph for `Figure`, `Table`, `Code`, `following`, `below`, or the exact caption number.

2. Run a diff-scoped analogy scan for phrases such as `think of`, `picture`, `like`, `as a`, `mental model`, and `is the systems layer`; require `breaks down`, `limitation`, `unlike`, or `simplifies` within the same callout or the next paragraph.

3. Run a formula-adjacent numeric trace scan: for each added display formula or architecture equation, require a nearby concrete example with actual dimensions, rates, bytes, tokens, scores, or counts.

4. Run a code example scan: each added code block should have a direct preceding reference sentence, a unique caption, and either shown output or a sentence that describes the observable result.

5. Manually check the new application path figure file `front-matter/images/application-reference-paths.png` in a rendered preface page, since the image is untracked and the HTML now depends on it.

### Summary

Overall concreteness: ADEQUATE.

The new material is strongest when it uses operational tables and practical-example callouts, especially fraud monitoring, regulatory deployment, robotics edge escalation, recommender feedback logging, and MAST debugging. The main weakness is that several frontier additions introduce modern mechanisms without the book's usual immediate numeric trace, prose reference, or limitation note. The fixes above are small and local: add one lead-in sentence for orphaned artifacts, one concrete trace after symbolic or architectural claims, and one limitation sentence for analogy-like mental models.

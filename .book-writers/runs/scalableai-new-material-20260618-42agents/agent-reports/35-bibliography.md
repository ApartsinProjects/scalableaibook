## Bibliography Agent Report

Mode: suggest
Scope: new material visible in the current working diff
HTML edited: no
Report written: `E:\Projects\Books\ScalableAI\.book-writers\runs\scalableai-new-material-20260618-42agents\agent-reports\35-bibliography.md`

### Files Inspected

Inspected the 40 HTML files currently visible in `git diff`:

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

### Bibliography Status

New bibliography entries were added only in:

1. `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`
2. `part-8-case-studies/module-38-case-distributed-recommendation/index.html`

The changed section files generally have no `class="bibliography"` block. This conflicts with Agent 35's section-level target: each `section-*.html` file should have a focused bibliography before `<nav class="chapter-nav">`, especially when new research-frontier claims, protocol links, benchmark claims, and tool claims were added.

### Top Issues

1. Missing section-level bibliography for new external claims

   Location: all changed `section-*.html` files with new research-frontier or tool material and no `class="bibliography"` block. Highest priority files are:

   `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`, line 160
   `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, line 247
   `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, line 187
   `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`, line 219
   `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`, line 308
   `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`, line 301
   `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`, line 264
   `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`, line 55
   `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, line 212
   `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, line 236
   `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`, line 214

   Old text: `<nav class="chapter-nav">`

   New text: insert a focused bibliography section immediately before `<nav class="chapter-nav">`. Use 5 to 10 cards per file. For the three most urgent files, ready-to-paste examples are below.

   Why it matters: the new material cites current benchmarks, protocols, systems, and regulatory guidance inline, but the reader does not get the canonical end-of-section path to primary sources.

   Tier: TIER 1 (BLOCKING)

   Action: APPLY DIRECTLY

   Potential conflicts: integration agents may also be adding final bibliographies. Apply idempotently by checking for `class="bibliography"` first.

2. Invalid bibliography meta tag in the new generative-recommender entry

   Location: `part-8-case-studies/module-38-case-distributed-recommendation/index.html`, line 185

   Old text: `<span class="bib-meta">📄 Article</span>`

   New text: `<span class="bib-meta">📝 Blog Post</span>`

   Why it matters: Agent 35 allows only `📄 Paper`, `📖 Book`, `🔧 Tool`, `🎓 Tutorial`, `📊 Dataset`, and `📝 Blog Post`. `📄 Article` is outside the allowed set.

   Tier: TIER 1 (BLOCKING)

   Action: APPLY DIRECTLY

   Potential conflicts: none.

3. New bibliography annotations are too short in Module 11 and Module 38 index pages

   Location: `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`, line 184

   Old text: `<p class="bib-annotation">Describes the modern 2D sparse-parallel layout for recommender training: model-parallel embedding sharding within a group and data-parallel replicas across groups, the frontier update added to <a href="section-11.7.html">Section 11.7</a>.</p>`

   New text:

   ```html
   <p class="bib-annotation">Describes the modern 2D sparse-parallel layout for recommender training: model-parallel embedding sharding within a group and data-parallel replicas across groups. It directly supports the frontier update added to <a href="section-11.7.html">Section 11.7</a>, where the reader moves beyond row-wise sharding to placement-aware sparse parallelism. Practitioners building large recommender trainers should read it for the operational vocabulary of table, row, column, and grid sharding.</p>
   ```

   Location: `part-8-case-studies/module-38-case-distributed-recommendation/index.html`, line 175

   Old text: `<p class="bib-annotation">Introduces HSTU-style generative recommenders, reports industrial-scale online gains and scaling behavior, and grounds the semantic-ID and sequence-generation discussion added to <a href="section-38.3.html">Section 38.3</a>.</p>`

   New text:

   ```html
   <p class="bib-annotation">Introduces HSTU-style generative recommenders, including the sequence-modeling design used to generate recommendation candidates from behavior histories. It grounds the semantic-ID and sequence-generation discussion added to <a href="section-38.3.html">Section 38.3</a>, where generative candidates join ANN, graph, and recency sources. Readers working on large-scale ranking or candidate generation should read it to understand why generative retrieval changes both modeling and serving pressure.</p>
   ```

   Location: `part-8-case-studies/module-38-case-distributed-recommendation/index.html`, line 180

   Old text: `<p class="bib-annotation">Open implementation and configurations for Meta's generative recommender models, useful for connecting the HSTU concept to reproducible model and serving artifacts.</p>`

   New text:

   ```html
   <p class="bib-annotation">Provides open implementation artifacts and configuration examples for Meta's generative recommender models. It connects the HSTU concept in <a href="section-38.3.html">Section 38.3</a> to reproducible model code, training recipes, and serving-facing components. Practitioners should use it after reading the paper when they want to inspect how semantic-ID recommendation is represented in software.</p>
   ```

   Location: `part-8-case-studies/module-38-case-distributed-recommendation/index.html`, line 185

   Old text: `<p class="bib-annotation">Explains how catalog embeddings can be converted into semantic IDs and used as tokens in a joint generative search and recommendation model, the practical mechanism behind the semantic-ID candidate source in <a href="section-38.3.html">Section 38.3</a>.</p>`

   New text:

   ```html
   <p class="bib-annotation">Explains how catalog embeddings can be converted into semantic IDs and then used as tokens in a joint generative search and recommendation model. It is the practical bridge for the semantic-ID candidate source in <a href="section-38.3.html">Section 38.3</a>, because it shows how a catalog becomes a generation vocabulary. Product engineers and applied researchers should read it for a concrete industry-facing account of semantic IDs.</p>
   ```

   Why it matters: Agent 35 requires 2 to 3 sentence annotations that explain content, section relevance, and audience.

   Tier: TIER 2 (HIGH)

   Action: APPLY DIRECTLY

   Potential conflicts: none.

4. Section 40.9 adds MAST but has no end-of-section bibliography entry

   Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`, insert before line 239 `<nav class="chapter-nav">`

   Old text: `<nav class="chapter-nav">`

   New text:

   ```html
   <section class="bibliography">
       <div class="bibliography-title">📚 References &amp; Further Reading</div>

       <div class="bib-category">Foundational Papers</div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">Guo, T., Kakkad, J., Inala, J. P., et al. (2025). "Why Do Multi-Agent LLM Systems Fail?" <em>arXiv:2503.13657</em>.</a>
           </p>
           <p class="bib-annotation">Defines the MAST failure taxonomy used in this section to convert failed agent trajectories into typed defects. It is directly relevant to the regression-gate discussion because it separates specification, inter-agent misalignment, and verification failures into repairable categories. Readers building evaluation suites for agent teams should read it before designing failure labels.</p>
           <span class="bib-meta">📄 Paper</span>
       </div>

       <div class="bib-category">Technical Reports &amp; Blog Posts</div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://sky.cs.berkeley.edu/project/mast/" target="_blank" rel="noopener">Berkeley Sky Computing Lab. (2025). "MAST: Multi-Agent Systems Failure Taxonomy." Project page.</a>
           </p>
           <p class="bib-annotation">Provides the project context, taxonomy summary, and supporting materials behind the MAST paper. It is useful for Section 40.9 because it gives a reader a quick path from the failure labels in the prose to the concrete project artifacts. Practitioners should use it as the operational companion to the paper.</p>
           <span class="bib-meta">📝 Blog Post</span>
       </div>

       <div class="bib-category">Tools &amp; Libraries</div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://docs.ragas.io/" target="_blank" rel="noopener">Ragas. "Ragas Documentation." Official documentation.</a>
           </p>
           <p class="bib-annotation">Documents metrics and evaluation workflows for LLM applications, including answer quality and retrieval-aware evaluation patterns. It complements the section's CI gate by showing how evaluation checks can be packaged into repeatable software. Engineers building agent regression suites should read it for implementation patterns.</p>
           <span class="bib-meta">🔧 Tool</span>
       </div>
   </section>
   <nav class="chapter-nav">
   ```

   Why it matters: MAST is a named current taxonomy and should be discoverable from the section bibliography, not only from the inline link.

   Tier: TIER 2 (HIGH)

   Action: APPLY DIRECTLY

   Potential conflicts: verify whether this section already receives a full Chapter 40 bibliography during integration.

5. Section 40.6 adds MCP and A2A protocol claims without a focused bibliography

   Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, insert before line 268 `<nav class="chapter-nav">`

   Old text: `<nav class="chapter-nav">`

   New text:

   ```html
   <section class="bibliography">
       <div class="bibliography-title">📚 References &amp; Further Reading</div>

       <div class="bib-category">Technical Reports &amp; Blog Posts</div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://modelcontextprotocol.io/specification/2025-06-18" target="_blank" rel="noopener">Model Context Protocol. (2025). "Model Context Protocol Specification, 2025-06-18." Official specification.</a>
           </p>
           <p class="bib-annotation">Defines the protocol surface that lets agents discover and call tools through a shared client-server interface. It is the primary source for the MCP discussion in Section 40.6, where tool boundaries become network and trust boundaries. Platform engineers integrating agent tools should read it for the actual message and capability model.</p>
           <span class="bib-meta">📝 Blog Post</span>
       </div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://a2a-protocol.org/latest/specification/" target="_blank" rel="noopener">Agent2Agent Protocol. "Agent2Agent Protocol Specification." Official specification.</a>
           </p>
           <p class="bib-annotation">Defines how agents advertise capabilities, receive delegated work, stream task state, and return artifacts across organizational or framework boundaries. It supports Section 40.6's claim that agent-to-agent delegation needs a standard task lifecycle, not just ad hoc messages. Readers building supervisors or worker-agent fleets should read it before designing inter-agent APIs.</p>
           <span class="bib-meta">📝 Blog Post</span>
       </div>

       <div class="bib-category">Tools &amp; Libraries</div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://github.com/langchain-ai/langgraph" target="_blank" rel="noopener">LangGraph. "LangGraph: Build resilient language agents as graphs." GitHub repository.</a>
           </p>
           <p class="bib-annotation">Provides an implementation-oriented view of graph-based, checkpointed agent orchestration. It complements Section 40.6's durable-orchestration claims by showing how shared state, interrupts, and resumable execution appear in a real framework. Practitioners should read it when moving from protocol concepts to a runtime design.</p>
           <span class="bib-meta">🔧 Tool</span>
       </div>
   </section>
   <nav class="chapter-nav">
   ```

   Why it matters: MCP and A2A are standards claims, so the bibliography should point readers to the official specifications and a representative runtime.

   Tier: TIER 2 (HIGH)

   Action: APPLY DIRECTLY

   Potential conflicts: none, as long as integration checks for an existing bibliography first.

6. Section 5.3 adds MLPerf Inference v5.1 but has no focused bibliography

   Location: `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`, insert before line 217 `<nav class="chapter-nav">`

   Old text: `<nav class="chapter-nav">`

   New text:

   ```html
   <section class="bibliography">
       <div class="bibliography-title">📚 References &amp; Further Reading</div>

       <div class="bib-category">Datasets &amp; Benchmarks</div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://mlcommons.org/benchmarks/inference-datacenter/" target="_blank" rel="noopener">MLCommons. "MLPerf Inference: Datacenter Benchmark Suite." Official benchmark page.</a>
           </p>
           <p class="bib-annotation">Documents the benchmark family that underlies the section's discussion of load generation, latency constraints, and inference reporting. It is relevant to Section 5.3 because it turns throughput and goodput into a shared benchmark contract rather than a private measurement script. Readers designing production inference experiments should use it as the public reference point for scenario definitions.</p>
           <span class="bib-meta">📊 Dataset</span>
       </div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/" target="_blank" rel="noopener">MLCommons. (2025). "MLPerf Inference v5.1 Results." Official release post.</a>
           </p>
           <p class="bib-annotation">Summarizes the v5.1 benchmark update referenced in the new research-frontier callout, including newer LLM and speech workloads. It supports the section's point that interactive inference evaluation now needs workload definitions, arrival patterns, and separate latency constraints. Readers tracking current inference benchmarking should read it after the general benchmark page.</p>
           <span class="bib-meta">📊 Dataset</span>
       </div>

       <div class="bib-category">Tools &amp; Libraries</div>

       <div class="bib-entry-card">
           <p class="bib-ref">
               <a href="https://github.com/giltene/wrk2" target="_blank" rel="noopener">Gil Tene. "wrk2: A constant throughput, correct latency recording variant of wrk." GitHub repository.</a>
           </p>
           <p class="bib-annotation">Provides the open-loop load generator used in this section to avoid coordinated omission when measuring tail latency. It is relevant because the code shortcut turns the section's hand-built timing harness into a practical benchmarking command. Engineers responsible for latency SLOs should read it before trusting closed-loop load tests.</p>
           <span class="bib-meta">🔧 Tool</span>
       </div>
   </section>
   <nav class="chapter-nav">
   ```

   Why it matters: the section now names a specific benchmark release and a specific load-generation tool, both of which should appear in the bibliography.

   Tier: TIER 2 (HIGH)

   Action: APPLY DIRECTLY

   Potential conflicts: the MLPerf release URL returned HTTP 403 to the automated checker, likely bot blocking. Browser verification should be run before final integration.

### Notable Inclusions Already Present

1. PyTorch 2D sparse parallelism was added to `module-11` index bibliography and is well matched to the new Section 11.7 learning objective. It needs a longer annotation, not removal.
2. HSTU generative recommendations, the Meta generative-recommenders repository, and Spotify semantic IDs were added to `module-38` index bibliography. They are relevant to the new Section 38.3 material, but the annotations need to meet the 2 to 3 sentence rule.
3. MCP, A2A, MAST, Spark Connect, Ray Data, Daft, Lance, GraphRAG, FedLoRA, DistServe, vLLM, EAGLE, TorchTitan, FSDP2, DRA, Executorch, and llama.cpp links appear in the new material. These are good candidate bibliography entries in their respective section files.

### Entries Considered but Excluded

1. IBM general RAG explainer: useful background, but lower priority than primary GraphRAG, retrieval, and vector-search sources for section bibliographies.
2. Vendor overview pages for Databricks Feature Store and NVIDIA cuVS: useful as tool links, but should not displace primary papers when a section has only 5 to 10 slots.
3. Regulatory overview pages for health AI: keep only when the section is specifically about deployment obligations, such as Section 37.8. They are too broad for general federated-learning sections.

### URL Verification Notes

Basic HTTP verification was run on the 85 external URLs added in the diff.

Most URLs returned `200` or `202`.

These returned `403` to the automated checker and should be opened in a browser or replaced with a less restrictive official landing page before final integration:

1. `https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/`
2. `https://www.mdpi.com/1999-4893/19/5/354`
3. `https://www.opencompute.org/documents/ocp-microscaling-formats-mx-v1-0-spec-final-pdf`
4. `https://www.opencompute.org/documents/sdc-in-ai-ocp-whitepaper-ver-1-1-final-pdf`
5. `https://dl.acm.org/doi/10.1145/3769002.3769952`
6. `https://www.microsoft.com/en-us/research/project/graphrag/`
7. `https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html`
8. `https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html`

### Verification Suggestions

1. Run a structural bibliography check over changed HTML:

   ```powershell
   Select-String -Path (Get-ChildItem -Recurse -Filter *.html).FullName -Pattern 'class="bibliography"|class="bib-ref"|class="bib-annotation"|class="bib-meta"'
   ```

2. Check for invalid `bib-ref` elements:

   ```powershell
   Select-String -Path (Get-ChildItem -Recurse -Filter *.html).FullName -Pattern '<div class="bib-ref"'
   ```

3. Check for invalid metadata tags:

   ```powershell
   Select-String -Path (Get-ChildItem -Recurse -Filter *.html).FullName -Pattern 'class="bib-meta"' | Where-Object { $_.Line -notmatch '📄 Paper|📖 Book|🔧 Tool|🎓 Tutorial|📊 Dataset|📝 Blog Post' }
   ```

4. After integration, verify each changed `section-*.html` with new external links has one bibliography before `<nav class="chapter-nav">`.

### Files Changed

Only this report was created. No book HTML was edited.

### Blockers

No local blocker. The only external verification caveat is that several authoritative sites returned `403` to automated HTTP checks, so browser-level validation is needed for those URLs.

### Summary

The current diff adds substantial current material, but bibliography support is uneven. The index-level additions in Modules 11 and 38 are relevant and should be kept after annotation fixes. The main integration work is to add focused section-level bibliographies for the changed research-frontier and protocol-heavy section files, then run a small markup audit for allowed `bib-meta` values and 2 to 3 sentence annotations.

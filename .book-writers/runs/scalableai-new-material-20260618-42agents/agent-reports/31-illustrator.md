## Illustrator Report

Mode: Suggest Mode only. No raster generation was run and no book HTML was edited, per the run scope. Actual Gemini raster generation, if approved, must happen in the main context.

Scope inspected: only new material currently visible in `git diff`.

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

### Illustrations Generated

None. This run was explicitly constrained to reporting and suggestions. No Gemini API calls were made.

### Existing Illustration Check

1. `front-matter/preface.html`, around line 158, adds `<figure class="illustration">` with `images/application-reference-paths.png`.
   - File existence: verified present at `front-matter/images/application-reference-paths.png`.
   - Markup: has `class="illustration"`, an `<img>`, alt text, and a figcaption.
   - Gap: the alt text is specific and long enough. The figure is a map, not a humorous raster illustration, but it is pedagogically useful for the new application-reference-paths table.
   - Suggested verification: visually open the image and confirm it truly shows ten application paths, not a stale earlier version with five course paths.

### Illustration Opportunities Identified but Not Generated

1. Spark Connect as a remote DataFrame client
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, after the first paragraph under line 247, before the code block.
   - Type: architecture-as-building, Mermaid preferred.
   - Tier: TIER 2 (HIGH)
   - Reason: The new section explains a boundary shift, client builds unresolved plans while the server owns analysis, optimization, scheduling, execution, and governed cluster access. This is a structural concept that will click faster as a labeled architecture diagram than as prose alone.
   - Suggested asset: `part-2-distributed-data/module-07-spark-dataframes/images/spark-connect-remote-client.png`
   - Prompt or diagram brief: Create a Mermaid flowchart with four blocks: Python notebook or feature service client, Spark Connect protocol, Spark Connect server, governed Spark cluster. Show the client sending unresolved DataFrame plans and the server returning results. Add side annotations for catalogs, credentials, adaptive execution, and resource limits on the server side.
   - Suggested alt text: "Diagram showing a lightweight Python client sending unresolved Spark DataFrame plans through Spark Connect to a server that analyzes, optimizes, schedules, and executes work on a governed cluster."
   - Suggested caption: "Spark Connect moves the client boundary without changing the shuffle, UDF, or storage-layout economics that dominate the real cost model."
   - Verification suggestion: Confirm the diagram is placed inside section 5, after an introductory paragraph, and not before the heading.

2. AI-native data engines for multimodal preprocessing
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, after the first paragraph under line 187.
   - Type: mental-model cartoon, Gemini.
   - Tier: TIER 2 (HIGH)
   - Reason: The new material contrasts SQL-shaped Spark workloads with object-heavy AI pipelines that decode images, read PDFs, embed audio, and run model filters. A scene helps readers remember why Ray Data, Daft, and Lance are complements rather than replacements.
   - Suggested asset: `part-2-distributed-data/module-08-distributed-storage-data-loading/images/ai-native-data-engines-workshop.png`
   - Gemini prompt: "A witty, cartoon-like educational illustration with clean lines and a warm color palette: a tidy relational assembly line handles neat rows and columns on one side, while a neighboring AI data workshop calmly processes photos, audio waves, document pages, and embedding cubes through modular machines. The two work areas share a conveyor belt, showing that SQL-shaped data engineering and object-heavy AI preprocessing cooperate rather than compete. Style: friendly and approachable like a clever XKCD or Kurzgesagt panel, expressive faces and body language, one clear visual gag, minimal clutter, generous negative space. Suitable for a technical textbook. The humor is dry, knowing, and immediately readable: a reader who just learned this concept should smile in recognition. No text, letters, numbers, or labels anywhere in the image."
   - Suggested alt text: "Cartoon workshop where a neat row-and-column assembly line connects to an AI preprocessing area that handles images, audio, documents, and embedding cubes as different workload shapes."
   - Suggested caption: "AI-native data engines earn their keep when the expensive step is no longer a relational expression, but a model or media operation over objects."
   - Verification suggestion: Inspect generated image for accidental labels on crates, screens, or documents. Regenerate if any text appears.

3. Governance manifest beside a foundation-model corpus snapshot
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, after the first paragraph under line 237.
   - Type: mental-model cartoon, Gemini.
   - Tier: TIER 2 (HIGH)
   - Reason: The new section lists several manifest fields. A visual metaphor can make the difference between byte-level versioning and governance obligations memorable.
   - Suggested asset: `part-2-distributed-data/module-08-distributed-storage-data-loading/images/corpus-governance-manifest.png`
   - Gemini prompt: "A witty, cartoon-like educational illustration with clean lines and a warm color palette: a large friendly library archive of unlabeled data boxes is checked by a careful curator holding a clipboard with blank checkmarks, while small visual icons for license, consent, filtering, deduplication, contamination checks, and removal policy orbit the archive like inspection stamps. The archive has a glowing fingerprint seal beside it, showing that a content hash is necessary but not sufficient. Style: friendly and approachable like a clever XKCD or Kurzgesagt panel, expressive faces and body language, one clear visual gag, minimal clutter, generous negative space. Suitable for a technical textbook. The humor is dry, knowing, and immediately readable: a reader who just learned this concept should smile in recognition. No text, letters, numbers, or labels anywhere in the image."
   - Suggested alt text: "Cartoon archive of foundation-model corpus boxes with a curator checking governance icons for licensing, consent, filtering, deduplication, contamination checks, and removal policy beside a fingerprint seal."
   - Suggested caption: "A corpus snapshot tells you which bytes existed; the governance manifest tells you whether those bytes belong in the training run."
   - Verification suggestion: Confirm the generated clipboard has no legible or fake lettering.

4. Drift-aware fraud detection loop
   - Location: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`, after the second paragraph under line 197, before the practical-example callout if the local flow allows it.
   - Type: what-could-go-wrong cartoon, Gemini.
   - Tier: TIER 2 (HIGH)
   - Reason: The new fraud section is a strong visual target because it combines delayed labels, adapting adversaries, changing features, false positives, and retraining triggers.
   - Suggested asset: `part-2-distributed-data/module-09-stream-processing-online-ai/images/drift-aware-fraud-loop.png`
   - Gemini prompt: "A witty, cartoon-like educational illustration with clean lines and a warm color palette: a fraud model guard watches a fast conveyor of payment cards while shape-shifting suspicious patterns sneak through in new disguises, delayed evidence arrives slowly on a separate conveyor, and a retraining station waits behind the guard. The scene shows the guard looking at input patterns, scores, decisions, and late outcomes as separate signal streams. Style: friendly and approachable like a clever XKCD or Kurzgesagt panel, expressive faces and body language, one clear visual gag, minimal clutter, generous negative space. Suitable for a technical textbook. The humor is dry, knowing, and immediately readable: a reader who just learned this concept should smile in recognition. No text, letters, numbers, or labels anywhere in the image."
   - Suggested alt text: "Cartoon fraud-detection guard watching payment events while adaptive suspicious patterns change shape, delayed labels arrive separately, and a retraining station waits behind the monitor."
   - Suggested caption: "In online fraud detection, drift is not one alarm; it is a loop of changing inputs, changing adversaries, delayed labels, and costly decisions."
   - Verification suggestion: Make sure the scene does not imply fraud is solved by one global accuracy number.

5. Two-dimensional sparse parallelism for embedding tables
   - Location: `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`, after the first paragraph of the new research-frontier callout around line 109, or as a diagram immediately before that callout if the section already has room.
   - Type: informative diagram, Mermaid preferred.
   - Tier: TIER 2 (HIGH)
   - Reason: The new material introduces table-wise, row-wise, column-wise, and grid sharding inside replica groups, then data parallelism across groups. This is inherently spatial and would benefit from a small matrix-style diagram.
   - Suggested asset: `part-3-distributed-ml/module-11-parameter-servers-embeddings/images/embedding-2d-sparse-parallelism.png`
   - Prompt or diagram brief: Create a Mermaid or custom vector diagram with two replica groups. Inside each group, show embedding tables split by table, row, column, and grid. Between groups, show data-parallel replicas processing different batch slices and synchronizing updates. Keep labels in HTML or diagram text only if rendered cleanly.
   - Suggested alt text: "Diagram showing embedding tables sharded inside each replica group by table, row, column, or grid, while multiple replica groups process different batch slices in data parallel."
   - Suggested caption: "Modern recommender training separates capacity from throughput: model-parallel embedding shards fit the tables, while data-parallel replica groups carry the batch."
   - Verification suggestion: Check that the diagram does not duplicate an existing row-sharding figure in the same chapter. It should add the replica-group dimension.

6. FedLoRA adapters as site-local low-rank patches
   - Location: `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`, after the paragraph containing the adapter equation around line 225.
   - Type: analogy cartoon, Gemini.
   - Tier: TIER 3 (MEDIUM)
   - Reason: The low-rank adapter equation is compact but abstract. A visual metaphor can show the frozen shared backbone plus small site-specific patches without adding another formula.
   - Suggested asset: `part-3-distributed-ml/module-14-federated-decentralized-learning/images/fedlora-site-adapters.png`
   - Gemini prompt: "A witty, cartoon-like educational illustration with clean lines and a warm color palette: several hospital buildings each keep a small custom adapter panel that plugs into the same large shared medical model statue in the center, while the statue itself stays sealed and unchanged. Tiny secure couriers carry only the small adapter panels, not the whole statue. Style: friendly and approachable like a clever XKCD or Kurzgesagt panel, expressive faces and body language, one clear visual gag, minimal clutter, generous negative space. Suitable for a technical textbook. The humor is dry, knowing, and immediately readable: a reader who just learned this concept should smile in recognition. No text, letters, numbers, or labels anywhere in the image."
   - Suggested alt text: "Cartoon hospitals connecting small local adapter panels to one sealed shared foundation-model statue, with couriers moving adapters instead of the full model."
   - Suggested caption: "FedLoRA keeps the shared backbone stable while each site contributes a compact, auditable adapter instead of moving its data or the full model."
   - Verification suggestion: Confirm no hospital names or fake signs appear in the generated image.

7. KV-cache evolution from virtual memory to compression and prefix reuse
   - Location: `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`, near the new paragraph beginning with the KV-cache frontier discussion.
   - Type: infographic or Mermaid concept map.
   - Tier: TIER 3 (MEDIUM)
   - Reason: The new material names three directions, compression, architectural reductions, and cross-request reuse. A compact concept map would help readers organize the frontier.
   - Suggested asset: `part-5-distributed-inference/module-22-per-node-inference-efficiency/images/kv-cache-frontier-map.png`
   - Prompt or diagram brief: Create a three-branch concept map from "KV-cache economics" to "paged allocation", "compression and quantization", "architectural reduction", and "prefix reuse or disaggregated serving". Include examples only if text remains legible at book scale.
   - Suggested alt text: "Concept map of KV-cache efficiency paths, branching from paged allocation to compression, quantization, architectural reductions, prefix reuse, and disaggregated prefill or decode serving."
   - Suggested caption: "KV-cache optimization is a memory-system problem first: allocate less, store less, reuse more, and separate work when the serving path demands it."
   - Verification suggestion: Prefer Mermaid or another editable diagram over a cartoon because the reader needs taxonomy, not visual humor.

8. Generative recommenders and semantic IDs as another candidate source
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, after the second paragraph under line 212, before the key-insight callout.
   - Type: mental-model cartoon, Gemini.
   - Tier: TIER 2 (HIGH)
   - Reason: The new section reframes recommendation from vector retrieval to sequence generation over semantic IDs, then explains how the generated source is mixed with ANN candidates. This is a high-value concept with a strong visual metaphor.
   - Suggested asset: `part-8-case-studies/module-38-case-distributed-recommendation/images/generative-semantic-id-source.png`
   - Gemini prompt: "A witty, cartoon-like educational illustration with clean lines and a warm color palette: a recommender model assembles a short chain of colorful abstract tokens like puzzle beads, then a catalog clerk maps the chain to a small set of item cards that join other candidates arriving from a vector-search conveyor before a final ranker gate. The visual should make generation look like producing a compact route through the catalog, not scoring every item one by one. Style: friendly and approachable like a clever XKCD or Kurzgesagt panel, expressive faces and body language, one clear visual gag, minimal clutter, generous negative space. Suitable for a technical textbook. The humor is dry, knowing, and immediately readable: a reader who just learned this concept should smile in recognition. No text, letters, numbers, or labels anywhere in the image."
   - Suggested alt text: "Cartoon recommender model building a short chain of abstract semantic tokens, mapping it to item cards, and mixing those cards with vector-search candidates before ranking."
   - Suggested caption: "Generative recommendation is easiest to ship when the generated semantic-ID path becomes one more candidate source for the same ranker."
   - Verification suggestion: Check that the generated beads or cards have no letters or numbers, since semantic IDs should be explained in the caption, not baked into the image.

9. Protocol boundaries as trust boundaries for MCP and A2A
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, after the new key-insight callout around line 236 if adding a figure does not crowd the section.
   - Type: architecture-as-building, Mermaid preferred or Gemini if a humorous gatehouse metaphor is desired.
   - Tier: TIER 3 (MEDIUM)
   - Reason: The new content turns interoperability into an operational control. A figure can show schemas, identity, budgets, evidence logging, and rollback attached to protocol edges.
   - Suggested asset: `part-8-case-studies/module-40-case-distributed-llm-agentic/images/protocol-trust-boundaries.png`
   - Prompt or diagram brief: Create a flow diagram with a supervisor agent, an MCP tool server, an A2A peer agent, and an evidence store. Put validation gates on each network edge: schema, tenant authorization, timeout, budget, provenance, rollback. Keep it sparse.
   - Suggested alt text: "Diagram showing a supervisor agent calling MCP tools and A2A peer agents through validation gates for schema, authorization, timeout, budget, provenance, and rollback."
   - Suggested caption: "The same protocol edge that makes a tool pluggable is also where production systems enforce identity, budget, evidence, and rollback."
   - Verification suggestion: Ensure it complements, rather than duplicates, the existing orchestration diagrams in this file.

10. Foundation model as proposal generator for robot fleets
   - Location: `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`, after the research-frontier callout around line 149, only if index-page illustration restrictions are relaxed by the chapter lead.
   - Type: what-could-go-wrong cartoon, Gemini.
   - Tier: TIER 3 (MEDIUM)
   - Reason: The new callouts are conceptually visual, but the Illustrator spec says not to place illustrations in chapter index pages. This should be deferred unless moved into a section file.
   - Suggested asset: `part-8-case-studies/module-39-case-multi-agent-robotics/images/robot-foundation-model-safety-layer.png`
   - Gemini prompt: "A witty, cartoon-like educational illustration with clean lines and a warm color palette: a large thoughtful foundation-model control tower suggests a route to a small robot fleet, while a calm safety marshal at ground level checks local sensors, collision zones, and coordination messages before any robot moves. The tower looks helpful but not in charge; the safety layer clearly has veto power. Style: friendly and approachable like a clever XKCD or Kurzgesagt panel, expressive faces and body language, one clear visual gag, minimal clutter, generous negative space. Suitable for a technical textbook. The humor is dry, knowing, and immediately readable: a reader who just learned this concept should smile in recognition. No text, letters, numbers, or labels anywhere in the image."
   - Suggested alt text: "Cartoon robot fleet receiving a high-level proposal from a foundation-model tower while a local safety marshal checks sensors, collision zones, and coordination before movement."
   - Suggested caption: "A smarter planner can propose better goals, but the fleet still moves only through the safety layer that can reject unsafe commands."
   - Verification suggestion: Do not embed this in `index.html` under the current Illustrator rule. Move the concept into a section file first, or leave this as a future chapter-opener replacement.

### Lower-Priority New Material That Does Not Need a New Illustration Now

1. `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`: The MLPerf v5.1 and construct-matched evaluation additions are strong prose callouts, but the section already has a latency diagram. A new raster would likely be redundant unless the whole chapter is being rebalanced.
2. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`: The streaming feature-store frontier callout is already architectural and could use a diagram later, but section 9.9 has the stronger visual opportunity because it turns the same pattern into a concrete fraud loop.
3. `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`: DiLoCo, DeMo, INTELLECT, and compression frontier content extends an existing trade-off triangle. The existing diagram likely covers the core mental model.
4. `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`: FP8 and microscaling content is important, but the best visual would be a precise data-format diagram. This belongs more naturally to Visual Learning than to humorous illustration.
5. `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`: TorchTitan and FSDP2 content can be handled by the existing parallelism diagrams unless this chapter is under its target illustration count.
6. `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`: RLVR and rollout-training fusion are important, but the section already has a figure and the new prose is frontier context rather than a standalone mental model.
7. `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`, `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`, `section-25.4.html`, and `section-25.7.html`: The new references appear to update frontier context around serving and vector search, but the visible changes are too small to justify fresh raster generation.
8. `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html` and `section-26.7.html`: The additions are short callout or wording updates. No new illustration gap found.
9. `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html`, `module-32/section-32.6.html`, `section-32.7.html`, and `section-32.9.html`: The MCP, A2A, and MAST additions are mostly protocol and evaluation updates. The strongest version of that visual belongs in Chapter 40, where the case-study context ties it to production trust boundaries.
10. `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html` and `section-37.8.html`: FedLoRA and accountability are already covered by the broader FedLoRA opportunity listed for Chapter 14. Avoid duplicate concepts unless Chapter 37 lacks its target illustration count.
11. `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`: The co-computed evaluation warning is important, but it is a logging and evaluation contract. A diagram would likely duplicate the existing online evaluation flow.
12. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`: MAST failure labeling is useful, but a compact taxonomy table or callout is likely enough unless the chapter needs another visual.

### Required Image Edits

1. `front-matter/images/application-reference-paths.png`
   - Required edit: none found from file existence and markup checks.
   - Manual visual check still recommended: verify the image content includes all ten paths named in the new Table 0.2 and uses the same application names or close visual equivalents.

### Verification Run

Commands run:

```powershell
git diff name list for changed HTML files
git diff statistics for the working tree
git diff with zero context for changed HTML files
Select-String scan for illustration, heading, figure, and local image markers
```

Additional scripted checks:

```powershell
& 'C:\Python314\python.exe' -  # parsed diff-added HTML, counted figures, and resolved local image paths
```

Results:

1. Diff scope: 40 HTML files, 489 insertions and 88 deletions.
2. Existing `images/...` references in inspected files resolved successfully for the files checked by the script.
3. The new preface illustration file exists.
4. Most new material is callout or frontier prose, not currently backed by new raster illustrations.

### Blockers and Cautions

1. Raster generation was intentionally not performed in this run.
2. Chapter index pages should not receive new illustrations under the Illustrator spec. This affects the robotics foundation-model opportunity in `module-39/index.html`.
3. Several opportunities are better served by Mermaid or structured diagrams than Gemini cartoons. In particular: Spark Connect, 2D sparse parallelism, KV-cache frontier taxonomy, and protocol trust boundaries.
4. Before any approved image generation, run a chapter-level deduplication pass against existing `class="illustration"` figures and `images/` assets in the affected module directory.

### Summary

Total illustrations generated: 0

Total embedded in HTML: 0

Deferred opportunities: 10

Coverage: SPARSE for the newly added conceptual material. The preface path map is covered, but the strongest new section-level additions would benefit from 4 to 6 targeted visuals, led by Spark Connect, AI-native data engines, corpus governance, semantic IDs, and 2D sparse parallelism.

## Research Scientist and Frontier Report

Mode: suggest

Scope: only new material visible in the current git diff.

Files changed: this report only. No book HTML was edited.

### Files Inspected

- `BOOK_CONFIG.md`
- `CROSS_REFERENCE_MAP.md`
- `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-prompts/18-research-scientist.prompt.md`
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

1. Missing author and year precision in the new context-engineering sidebar
   - Location: `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html:193`
   - Old text: `The <a href="https://arxiv.org/abs/2507.13334" target="_blank" rel="noopener">2025 survey of context engineering</a> treats retrieval, context processing, context management, RAG, memory systems, tool-integrated reasoning, and multi-agent systems as one field; Anthropic's engineering guide similarly defines it as maintaining the optimal set of tokens around the prompt, tool results, and other state that can land in context.`
   - New text: `The <a href="https://arxiv.org/abs/2507.13334" target="_blank" rel="noopener">context-engineering survey by Mei et al. (2025)</a> treats retrieval, context processing, context management, RAG, memory systems, tool-integrated reasoning, and multi-agent systems as one field. Anthropic's engineering guidance uses the same operational frame: maintain the right tokens around the prompt, tool results, memory, and task state, then keep provenance so later agents can audit what entered context.`
   - Why it matters: The sidebar cites a frontier survey, but the current prose gives no author-year anchor and cites an unspecified Anthropic guide. The suggested wording preserves the point and satisfies the agent requirement that paper citations include author and year.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: #11 Fact Integrity should verify the Anthropic guidance URL if the second sentence keeps a link.

2. Active robotics frontier needs concrete landmark references
   - Location: `part-8-case-studies/module-39-case-multi-agent-robotics/index.html:150`
   - Old text: `The 2024 to 2026 robotics frontier adds a second layer: foundation models that interpret language goals, images, maps, tool affordances, and failure reports, then hand bounded subgoals to the local controllers.`
   - New text: `The 2024 to 2026 robotics frontier adds a second layer: foundation models that interpret language goals, images, maps, tool affordances, and failure reports, then hand bounded subgoals to the local controllers. Examples include vision-language-action policy work such as RT-2 (Brohan et al., 2023), OpenVLA (Kim et al., 2024), and newer robot-foundation-model systems that keep language planning above deterministic motion and safety controllers.`
   - Why it matters: The new Research Frontier box is directionally good, but it currently names no papers. Without anchors, the frontier can read like trend prose rather than a mapped research thread.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY after citation URL verification
   - Potential conflicts: #11 Fact Integrity should validate exact paper titles and preferred URLs.

3. LLM-based MARL reference needs author, year, and a clearer open problem
   - Location: `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html:255`
   - Old text: `Recent work such as <a href="https://arxiv.org/html/2605.02801v1" target="_blank" rel="noopener">Reinforcement Learning for LLM-based Multi-Agent Systems</a> frames this as the same problem this chapter has studied, but with language trajectories, tool calls, and verifiable rewards replacing simulator states and scalar game rewards.`
   - New text: `Recent work such as Zhang (2026), <a href="https://arxiv.org/abs/2605.02801" target="_blank" rel="noopener">Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces</a>, frames this as the same problem this chapter has studied, but with language trajectories, tool calls, and verifiable rewards replacing simulator states and scalar game rewards. The open research problem is credit assignment over orchestration traces: which agent, message, tool call, split decision, or stopping decision should receive the learning signal when a team succeeds or fails?`
   - Why it matters: This is a current 2026 frontier citation and should be cited precisely. The added open problem turns the bridge from a literature pointer into an actionable research question.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

4. KV-cache policy sidebar needs named evidence for the attention-sink claim
   - Location: `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html:325`
   - Old text: `Attention sinks and recent tokens are usually protected because many eviction papers find them disproportionately important, low-attention middle tokens are candidates for compression, and shared prefixes should be reference-counted rather than copied.`
   - New text: `Attention sinks and recent tokens are usually protected because H2O (Zhang et al., 2023), SnapKV (Li et al., 2024), and related KV-compression papers find that a small subset of early or high-impact tokens can carry disproportionate future attention. Low-attention middle tokens are candidates for compression, and shared prefixes should be reference-counted rather than copied.`
   - Why it matters: The new material correctly describes the policy stack, but "many papers" is too vague for a graduate-facing research sidebar. Named anchors make the claim auditable.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY after author list verification
   - Potential conflicts: #11 Fact Integrity should confirm author surnames for H2O and SnapKV.

5. Generative recommender section should foreground the evaluation uncertainty
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html:215`, after the paragraph ending `Chapter 24</a>.</p>`
   - Old text: `The systems lesson for this chapter is not that the retrieve-then-rank funnel disappears overnight. It is that the widest stage can become a generation stage whose output is a structured item code rather than a vector-nearest-neighbor list, and that the model itself starts to inherit the training, serving, and scaling-law concerns of large sequence models from <a href="../../part-4-parallel-deep-learning/module-19-training-foundation-models/index.html">Chapter 19</a> and <a href="../../part-5-distributed-inference/module-24-distributed-llm-serving/index.html">Chapter 24</a>.`
   - New text: `The systems lesson for this chapter is not that the retrieve-then-rank funnel disappears overnight. It is that the widest stage can become a generation stage whose output is a structured item code rather than a vector-nearest-neighbor list, and that the model itself starts to inherit the training, serving, and scaling-law concerns of large sequence models from <a href="../../part-4-parallel-deep-learning/module-19-training-foundation-models/index.html">Chapter 19</a> and <a href="../../part-5-distributed-inference/module-24-distributed-llm-serving/index.html">Chapter 24</a>. The unsettled research question is how much of the reported lift comes from sequence-model capacity, semantic-ID construction, better candidate diversity, or tighter integration with the ranker. The only valid answer is a construct-matched online experiment that logs source contribution, candidate overlap, latency, guardrails, and delayed outcomes in one artifact.`
   - Why it matters: The new HSTU and semantic-ID material is strong, but it risks making generative recommendation feel settled. The suggested sentence names the research uncertainty and connects to the book's co-computed evaluation rule.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: #05 Cognitive Load may prefer this as a callout if the section grows too dense.

6. Vector compression sidebar would benefit from explicit paper years
   - Location: `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html:372`
   - Old text: `Product quantization remains the workhorse because it replaces a float vector with short subspace codes, the idea introduced by Jégou et al. (<a href="https://pubmed.ncbi.nlm.nih.gov/21088323/" target="_blank" rel="noopener">Product Quantization for Nearest Neighbor Search</a>). DiskANN pushes the memory boundary by keeping compressed guidance in RAM while full vectors and graph data live on SSD, with the original result showing billion-point search on one workstation with 64 GB RAM and SSD storage (<a href="https://papers.nips.cc/paper/9527-rand-nsg-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node" target="_blank" rel="noopener">DiskANN paper</a>).`
   - New text: `Product quantization remains the workhorse because it replaces a float vector with short subspace codes, the idea introduced by Jégou, Douze, and Schmid (2011) in <a href="https://pubmed.ncbi.nlm.nih.gov/21088323/" target="_blank" rel="noopener">Product Quantization for Nearest Neighbor Search</a>. DiskANN pushes the memory boundary by keeping compressed guidance in RAM while full vectors and graph data live on SSD; Subramanya et al. (2019) showed billion-point search on one workstation with 64 GB RAM and SSD storage in <a href="https://papers.nips.cc/paper/9527-rand-nsg-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node" target="_blank" rel="noopener">DiskANN: Fast Accurate Billion-point Nearest Neighbor Search on a Single Node</a>.`
   - Why it matters: The sources are appropriate, but the sidebar should carry author-year context because it is functioning as a research-history bridge.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Depth Opportunities

1. `section-32.7.html`: Context engineering as a distributed memory-consistency problem
   - Current treatment: The new sidebar correctly defines context engineering as curation, compression, routing, and validation.
   - Deeper insight: The research hook is not only token cost. It is consistency under partial, role-specific views: agents may act on different memories, different retrieved evidence, or different compacted histories.
   - Suggested format: Open Question callout
   - Priority: HIGH
   - Draft addition: `<div class="callout open-question"><div class="callout-title">Open Question: What Is Consistency for Agent Context?</div><p>A database can define serializability or snapshot isolation. A multi-agent system has a softer problem: each agent may see a different subset of memory, retrieved evidence, tool outputs, and prior messages. The research question is how to define a useful consistency contract for context. Should agents share one canonical blackboard, role-specific views with provenance, or a merge protocol that detects contradictions before final output? The answer affects cost, reliability, privacy, and whether a verifier can reproduce the team's reasoning trace.</p></div>`

2. `section-25.1.html` and `section-36.6.html`: GraphRAG as graph construction plus retrieval uncertainty
   - Current treatment: The new material explains GraphRAG's value for global and relational questions.
   - Deeper insight: The uncertain science is graph extraction quality. Entity and relation errors can amplify during community summarization and retrieval.
   - Suggested format: Open Question callout
   - Priority: MEDIUM
   - Draft addition: `<div class="callout open-question"><div class="callout-title">Open Question: How Reliable Is the Graph Behind GraphRAG?</div><p>GraphRAG improves global and relational questions only if the extracted entities, edges, communities, and summaries preserve the facts the user needs. The open problem is measuring graph construction error as part of retrieval quality: missed entities lower recall, spurious edges create false joins, and stale summaries can survive after source documents change. A serious evaluation should score graph extraction accuracy, answer faithfulness, permission filtering, and refresh lag together, not only final answer quality.</p></div>`

3. `section-37.4.html`: FedLoRA theory and privacy surface
   - Current treatment: The new table makes adapter federation operationally concrete.
   - Deeper insight: Low-rank adapters reduce communication but do not automatically solve privacy. The adapter can still memorize site-specific patterns, and heterogeneous ranks complicate aggregation.
   - Suggested format: Deeper Dive
   - Priority: MEDIUM
   - Draft addition: `<div class="callout deeper-dive"><div class="callout-title">Deeper Dive: Low Rank Does Not Mean Low Leakage</div><p>A LoRA adapter has far fewer parameters than the frozen backbone, but it is still the learned response of one site to local data. Privacy analysis should treat adapter factors as sensitive updates, not harmless metadata. The open research question is how rank, clipping, secure aggregation, and differential privacy interact: a higher rank may improve local fit and communication cost per quality point, while also giving the update more capacity to encode site-specific information.</p></div>`

### Unsettled Science

1. `section-38.3.html`: Generative recommenders
   - Claim needing qualification: `The widest stage can become a generation stage whose output is a structured item code rather than a vector-nearest-neighbor list`
   - The debate: It is plausible and supported by Meta's HSTU results, but the field has not settled whether generative candidate sources dominate ANN, graph, recency, and retrieval-fusion sources across domains. Source contribution and feedback-loop effects need online, construct-matched tests.
   - Key references: Zhai et al. (2024), TIGER (2023), Spotify Research semantic IDs (2025)
   - Suggested revision: Use Top Issue 5.

2. `section-39 index`: Foundation models in robot fleets
   - Claim needing qualification: `Vision-language-action policies and robot foundation models are not a replacement for the collision-avoidance, consensus, and task-allocation machinery of this chapter. They sit above it.`
   - The debate: This safety hierarchy is the right engineering stance, but the research frontier is still unsettled on how much low-level control can be learned safely and how to verify learned planners under distribution shift.
   - Key references: RT-2 (Brohan et al., 2023), OpenVLA (Kim et al., 2024), recent robot foundation model work
   - Suggested revision: Use Top Issue 2 and keep the safety-layer warning.

### Landmark Paper Connections Missing

1. `section-32.7.html`: Mei et al. (2025), context engineering survey
   - Why: The new sidebar cites the survey but not the authors. Naming it gives students a paper trail for the emerging field.

2. `section-30.10.html`: Zhang (2026), reinforcement learning for LLM-based multi-agent systems through orchestration traces
   - Why: This is a current bridge between MARL and LLM-agent orchestration, and it identifies the trace as a research object.

3. `section-39 index`: RT-2 and OpenVLA
   - Why: The robotics frontier claim currently has no landmark anchors.

### Research Frontier Boxes to Add or Strengthen

1. Context consistency for agent teams
   - Current state: Context engineering is emerging as the systems layer for LLM agents.
   - Why students should know: It turns prompt design into distributed state management, with costs, provenance, and consistency guarantees.
   - Placement: After the new context-engineering sidebar in `section-32.7.html`.

2. GraphRAG evaluation beyond answer quality
   - Current state: GraphRAG and agentic RAG are now named architectures, but graph construction errors and permission propagation are under-tested in ordinary RAG evaluations.
   - Why students should know: A graph retrieval pipeline can fail before the LLM sees context.
   - Placement: After the GraphRAG material in `section-25.1.html` or `section-36.6.html`, but not both.

3. Robot foundation models as proposal generators
   - Current state: Foundation models are entering robot fleets, but verified local control remains the safety layer.
   - Why students should know: It prevents the misconception that a stronger planner removes distributed control and safety machinery.
   - Placement: Strengthen the existing Research Frontier box in the Chapter 39 index.

### Missing Frontier Content

1. New application reference paths in the Preface
   - Open question: Which paths are research paths rather than only application paths?
   - Active directions: RAG governance, agent protocols, generative recommendation, federated foundation models, robot foundation models.
   - Suggested placement: No additional prose required now. The preface table is an orientation layer, and research-frontier depth belongs in the target chapters.

2. Streaming and fraud monitoring
   - Open question: How should delayed labels, adversarial adaptation, and customer-cost guardrails be co-optimized?
   - Active directions: drift-aware online learning, delayed-label evaluation, counterfactual logging for interventions.
   - Suggested placement: Existing additions in `section-9.9.html` and `section-26.7.html` are adequate. Add named author-year citations only if #11 Fact Integrity requests them.

### Recent Breakthroughs Checked

- MLPerf Inference v5.1, 2025: Verified that the release added DeepSeek-R1, Llama 3.1 8B, and Whisper Large V3, and expanded the interactive scenario for lower-latency LLM and agentic workloads.
- MCP specification, 2025-06-18: Verified that the linked specification is the authoritative protocol page for MCP requirements.
- A2A protocol, 2025: Verified Linux Foundation project status and agent-card framing through current A2A materials.
- Context engineering survey, 2025: Verified arXiv:2507.13334 and its taxonomy over retrieval, context processing, context management, RAG, memory, tool-integrated reasoning, and multi-agent systems.
- HSTU generative recommenders, 2024: Verified arXiv:2402.17152, including the HSTU framing, 1.5 trillion parameter scale, online A/B lift, and scaling-law claim.
- RaBitQ and DiskANN: Verified LanceDB's RaBitQ description and DiskANN's NeurIPS 2019 billion-point, 64 GB RAM plus SSD result.
- MAST, 2025: Verified arXiv:2503.13657 as a multi-agent systems failure taxonomy with three broad failure families.
- LLM-based multi-agent RL, 2026: Verified arXiv:2605.02801 and its orchestration-trace framing.

### Student Exploration Opportunities

1. Context consistency microbenchmark
   - Build a small multi-agent task where agents receive different retrieved facts, then test whether a shared blackboard, role-specific memory, or verifier-only memory gives the best cost-quality trade-off.

2. GraphRAG refresh and permission test
   - Create a tiny corpus with changing permissions and entity links. Measure whether chunk indexes, graph edges, community summaries, and citations all update after deletion or revocation.

3. Generative candidate-source ablation
   - Add a semantic-ID candidate source beside ANN and recency candidates, then log source contribution, candidate overlap, latency, and delayed outcomes in one experiment artifact.

4. FedLoRA rank and leakage study
   - Simulate hospitals with different adapter ranks. Compare quality, communication, and privacy-risk proxies under one aggregation policy.

### Verification Run

- Ran a git changed-file listing to identify the exact changed-file scope.
- Ran a git numeric diff summary to confirm the size and distribution of additions.
- Ran targeted zero-context git diff inspections for every changed HTML file.
- Counted existing callout classes in changed files, including `research-frontier`, `key-insight`, `practical-example`, `warning`, `note`, and `library-shortcut`.
- Used web verification for current and recent claims around MLPerf Inference v5.1, MCP, A2A, context engineering, HSTU, RaBitQ, DiskANN, MAST, and LLM-based multi-agent RL.

### Verification Suggestions

- Run a focused citation audit on the exact author names for H2O, SnapKV, RT-2, OpenVLA, and the Algorithms 2026 fraud survey before integration.
- Run a style scan for em dash, en dash, double dash, and banned phrases on this report and on any integrated HTML edits.
- After integration, run a sidebar count by chapter rather than by file, because several chapters now have multiple enriched section files and the Research Scientist cap is chapter-level.
- Ask #11 Fact Integrity to verify each new paper URL and year, especially URLs dated 2025 or 2026.

### Blockers

No blockers. The only limitation is that this pass did not edit book HTML by instruction.

### Summary

Overall research depth: RICH

Frontier coverage: FRONTIERS WELL-MAPPED, with a few high-value citation and open-question refinements needed.

The new diff substantially improves frontier awareness across evaluation, data systems, federated foundation models, LLM serving, RAG, agent protocols, recommendation, and robotics. The main improvement is not to add many more sidebars, but to sharpen the strongest new frontier claims with author-year anchors and explicit open research questions so students can see what is known, what is still unsettled, and how to investigate it.

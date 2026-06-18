## Opening and Hook Report

Agent: 22-opening-hook-designer
Mode: suggest
Scope: only new material visible in the current working diff

### Files Inspected

- front-matter/preface.html
- part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html
- part-2-distributed-data/module-07-spark-dataframes/section-7.8.html
- part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html
- part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html
- part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html
- part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html
- part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html
- part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html
- part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html
- part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html
- part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html
- part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html
- part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html
- part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html
- part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html
- part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html
- part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html
- part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html
- part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html
- part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html
- part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html
- part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html
- part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html
- part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html
- part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html
- part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html
- part-7-infrastructure/module-34-edge-fog-on-device/index.html
- part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html
- part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html
- part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html
- part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html
- part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html
- part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html
- part-8-case-studies/module-38-case-distributed-recommendation/index.html
- part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html
- part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html
- part-8-case-studies/module-39-case-multi-agent-robotics/index.html
- part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html
- part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html

### Overall Assessment

Most new titles and callout openings are concrete and modern. Strong additions include the MLPerf interactive serving callout, AI-native data engines, drift-aware fraud detection, KV-cache policy stack, governed enterprise RAG, federated foundation models, HSTU-style recommenders, and robot foundation-model safety. The main weakness is not content quality. It is that several new openings begin with taxonomy, definition, or book-navigation language when they could start with a concrete system moment.

Summary: MOSTLY STRONG, NEEDS HOOK WORK in selected openings.

### Top Issues

1. Preface application path opening starts as navigation instead of a reader scenario.
   - Location: front-matter/preface.html:157
   - Current rating: ADEQUATE
   - First sentence: "The book can also be read as a reference for application builders."
   - Hook type: NONE, functional framing
   - Promise present: VAGUE
   - Throat-clearing lines: 1 paragraph
   - Energy level: MEDIUM
   - Overall: NEEDS WORK
   - Old text: "The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building."
   - New text: "If you are building a RAG service, a robot fleet, a recommender, or an internal AI cloud, you should not have to read forty chapters in sequence before the book becomes useful. Start with Part I, then follow the application path whose system matches the one you need to design, debug, or defend."
   - Why it matters: The replacement gives the reader a job to be done before naming the table.
   - Tier: TIER 2 (HIGH)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Style and Voice Guardian should verify terminology around "application path."

2. Preface course-path paragraph violates book-facing terminology and loses hook energy.
   - Location: front-matter/preface.html:181
   - Current rating: FLAT
   - First sentence: "The book is larger than any single semester, by design: it supports five distinct graduate courses that share Part I and then diverge."
   - Hook type: claim, but framed institutionally
   - Promise present: YES, but aimed at instructors more than readers
   - Throat-clearing lines: 1 paragraph
   - Energy level: LOW
   - Overall: NEEDS REWRITE
   - Old text: "The book is larger than any single semester, by design: it supports five distinct graduate courses that share Part I and then diverge. Each course path maps to a thirteen-to-fifteen week semester and ends in the Chapter 41 capstone, where students design, build, and evaluate a distributed AI system of their own and defend its distribution axis, speedup, scaling efficiency, and cost."
   - New text: "The book is larger than any one reading path by design: it supports several focused routes through the same foundation. Each route ends in the Chapter 41 capstone, where readers design, build, and evaluate a distributed AI system of their own and defend its distribution axis, speedup, scaling efficiency, and cost."
   - Why it matters: The replacement keeps the promise while aligning with book terminology and avoiding institutional throat-clearing.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Curriculum Alignment may want a separate instructor-facing version elsewhere.

3. The Spark Connect opening explains before it dramatizes the deployment pain.
   - Location: part-2-distributed-data/module-07-spark-dataframes/section-7.8.html:248
   - Current title: "5. Spark 4 and Spark Connect: The Remote DataFrame Client"
   - Title rating: COMPELLING
   - First sentence: "Spark 4 makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver."
   - Hook type: claim
   - Promise present: VAGUE
   - Throat-clearing lines: 0
   - Energy level: MEDIUM
   - Overall: NEEDS WORK
   - Old text: "Spark 4 makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver."
   - New text: "A feature service should be able to ask Spark for a governed training table without becoming a Spark driver, inheriting cluster credentials, or sharing a failure domain with the job it launches. Spark 4 makes that production boundary explicit through Spark Connect."
   - Why it matters: The rewrite starts with a recognizable production problem, then names Spark Connect as the answer.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

4. Section 8.9 summary title is generic and undersells the governance payoff.
   - Location: part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html:259
   - Current title: "7. Chapter Summary and Project Ideas"
   - Title rating: FLAT
   - Old text: "7. Chapter Summary and Project Ideas"
   - New text option 1: "7. From Dataset Bytes to Reproducible AI Projects"
   - New text option 2: "7. What a Production Dataset Must Prove"
   - Why it matters: The surrounding new material is about corpus governance, manifests, and policy metadata. The current title sounds like a default template.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Structural Architect may prefer preserving standardized final-section naming.

5. A2A opening in the protocol section starts with a definition instead of the cross-agent failure mode.
   - Location: part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html:117
   - Current rating: ADEQUATE
   - First sentence: "MCP connects an agent to its tools."
   - Hook type: NONE, explanatory transition
   - Promise present: VAGUE
   - Throat-clearing lines: 1
   - Energy level: MEDIUM
   - Overall: NEEDS WORK
   - Old text: "MCP connects an agent to its tools. The complementary problem is connecting agents to each other across vendor and framework boundaries: an agent built on one stack needs to discover, authenticate, and delegate to an agent built on another."
   - New text: "The next integration failure appears when an agent needs help from another agent it did not ship with. A planner built on one stack must discover, authenticate, and delegate to a specialist built on another, without hard-coding the specialist's address or private API."
   - Why it matters: The replacement makes the problem concrete before introducing A2A.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Cross-Reference Architect should preserve nearby MCP and A2A links.

6. Context engineering callout begins with a dictionary-style definition.
   - Location: part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html:193
   - Current title: "Context Engineering Is the Systems Layer of Agents"
   - Title rating: COMPELLING
   - First sentence: "Context engineering is the discipline of curating, compressing, routing, and validating the information that enters an LLM's inference window."
   - Hook type: definition
   - Promise present: VAGUE
   - Throat-clearing lines: 1
   - Energy level: MEDIUM
   - Overall: NEEDS WORK
   - Old text: "Context engineering is the discipline of curating, compressing, routing, and validating the information that enters an LLM's inference window."
   - New text: "A multi-agent run can fail even when every tool call is correct, because the wrong fact entered the shared context, the right citation was compacted away, or a tool result was treated as an instruction."
   - Suggested follow-up sentence: "Context engineering is the discipline that prevents those failures by curating, compressing, routing, and validating the information that enters an LLM's inference window."
   - Why it matters: The callout title is strong, but the first sentence should show the failure mode before naming the discipline.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

7. Late-interaction retriever callout opens as taxonomy.
   - Location: part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html:107
   - Current title: "Late Interaction: The Middle Rung Between Search and Rerank"
   - Title rating: COMPELLING
   - First sentence: "Late-interaction retrievers sit between the bi-encoder and the cross-encoder."
   - Hook type: taxonomy
   - Promise present: VAGUE
   - Throat-clearing lines: 1
   - Energy level: MEDIUM
   - Overall: NEEDS WORK
   - Old text: "Late-interaction retrievers sit between the bi-encoder and the cross-encoder."
   - New text: "When dense search returns thousands of plausible passages and a cross-encoder is too expensive to run on all of them, late interaction gives the cascade a middle gear."
   - Why it matters: The replacement starts from the production bottleneck that makes late interaction worth learning.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

8. Regulatory deployment map opens with a disclaimer before the stakes.
   - Location: part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html:96
   - Current title: "Regulatory Deployment Map: What the Federation Must Prove"
   - Title rating: COMPELLING
   - First sentence: "A regulated federated deployment turns the safety stack in Figure 37.8.1 into evidence artifacts."
   - Hook type: claim
   - Promise present: YES
   - Throat-clearing lines: 1
   - Energy level: MEDIUM
   - Overall: CONVERTS WITH SMALL FIX
   - Old text: "A regulated federated deployment turns the safety stack in Figure 37.8.1 into evidence artifacts. The map below is not legal advice; it is the engineering checklist that lets counsel, clinical safety, and the model team ask the same concrete questions."
   - New text: "A hospital federation cannot ship a model by saying the weights look good. It has to prove who trained, what data stayed local, which update rule ran, which safety gate passed, and which release artifact is allowed to reach patients. The map below turns the safety stack in Figure 37.8.1 into the engineering evidence that counsel, clinical safety, and the model team can inspect together."
   - Why it matters: The revised opening places the reader in the release-review moment and removes the defensive disclaimer from the hook.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: Fact Integrity should confirm the wording does not imply legal sufficiency.

### Section Title Review

1. front-matter/preface.html added application reference paths: ADEQUATE. No title change needed, but the lead paragraph should be sharper.
2. section-7.8.html, "Spark 4 and Spark Connect: The Remote DataFrame Client": COMPELLING.
3. section-7.8.html, "Why Arrow Is the Enabling Layer": COMPELLING.
4. section-8.7.html, "AI-Native Data Engines: Ray Data, Daft, and Lance": COMPELLING.
5. section-8.7.html, "Materialize Once or Recompute Every Epoch": COMPELLING.
6. section-8.7.html, "Beyond Training: Feature Stores and Serving Consistency": COMPELLING.
7. section-8.9.html, "Dataset Governance for Foundation-Model Corpora": COMPELLING.
8. section-8.9.html, "Chapter Summary and Project Ideas": FLAT. Replace as suggested above.
9. section-9.9.html, "Drift-Aware Fraud Detection as Online AI": COMPELLING.
10. section-9.9.html, "From Alert to Action: Triggering Retraining": COMPELLING.
11. section-9.9.html, "Chapter 9 in One View, and the End of Part II": ADEQUATE.
12. section-38.3.html, "Generative Recommenders and Semantic IDs": COMPELLING.

### Framing Device

- Current device: Mostly production-system scenarios by domain, such as RAG governance, fraud drift, cluster topology, federated clinical release evidence, and agent protocol boundaries.
- Suggestion: Keep the "system under production pressure" device consistent. The strongest new additions start with a job that breaks without the concept. The weakest additions start with "X is" or "This book can."

### Section Openings Needing Work

1. front-matter/preface.html: opens with navigation instead of reader need. Use the RAG, robot fleet, recommender, internal AI cloud scenario text above.
2. section-7.8.html: opens with a platform claim. Use the feature-service scenario text above.
3. section-32.6.html: opens an A2A paragraph with a transition definition. Use the cross-stack delegation failure text above.
4. section-32.7.html: opens with a dictionary definition. Use the multi-agent context failure text above.
5. section-25.7.html: opens with taxonomy. Use the cascade bottleneck text above.
6. section-37.8.html: opens with evidence language but quickly becomes a disclaimer. Use the hospital release-review text above.

### Strong Openings To Preserve

- section-5.3.html: MLPerf interactive SLO callout opens with a current benchmark shift and quickly states why TTFT and TPOT matter.
- section-8.7.html: AI-native data engines opens by contrasting SQL-shaped Spark work with AI preprocessing work.
- section-9.9.html: fraud detection opening is concrete, high-stakes, and immediately connected to delayed labels and drift.
- section-22.5.html: KV-cache frontier frames a real serving-budget problem.
- section-25.1.html: enterprise RAG governance opens with "Permission is," which is sharp and memorable.
- section-35.5.html: secure aggregation warning opens with a concrete conflict between privacy and robustness.
- module-39 index.html: foundation-model robotics warning preserves the safety-layer framing.
- section-40.9.html: MAST callout turns evaluation failure into an action queue, which is a strong production hook.

### Suggested First-Page Rewrite Pattern For Future Added Material

Use this pattern when adding new current-frontier paragraphs:

1. Start with the failure or production moment.
2. State the concept as the answer.
3. Name the reader payoff in one sentence.
4. Then cite papers, standards, libraries, or benchmarks.

Example ready-to-use template:

"The system fails at the boundary: the model is accurate, but the handoff, policy check, cache, shard, or protocol breaks under production load. [Concept] is the pattern that makes that boundary explicit. After this section, the reader should be able to identify the boundary, name the artifact that controls it, and decide which metric proves it is working."

### Verification Run

- Read the assigned prompt file.
- Read the book-writers skill contract.
- Inspected the current modified-file list from git.
- Inspected the current diff summary and added text by file.
- Queried exact line locations for the prioritized issues with Select-String.
- Wrote this report only.

### Files Changed

- E:\Projects\Books\ScalableAI\.book-writers\runs\scalableai-new-material-20260618-42agents\agent-reports\22-opening-hook-designer.md

### Blockers

None. I did not edit book HTML, by instruction.

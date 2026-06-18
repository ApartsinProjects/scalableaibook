## Memorability Report

Agent: 27-memorability-designer
Mode: suggest
Scope: new material currently visible in `git diff`

### Files Inspected

Inspected added or modified HTML hunks in: `front-matter/preface.html`, `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`, `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`, `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`, `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`, `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`, `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`, `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`, `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`, `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`, `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`, `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`, `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`, `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`, `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`, `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html`, `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html`, `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`, `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`, `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html`, `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`, `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html`, `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`, `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`, `part-7-infrastructure/module-34-edge-fog-on-device/index.html`, `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`, `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html`, `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`, `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`, `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`, `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`, `part-8-case-studies/module-38-case-distributed-recommendation/index.html`, `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`, `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`, `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`.

Files changed: none. This reviewer report only was created.

### Existing Strong Anchors (preserve these)

1. `front-matter/preface.html`: "Part I supplies the common scale-out loop" and "main technical spine" make the new application reference paths memorable. Preserve the hub-and-spoke figure, but add one short rule below it so the table is not just a lookup device.
2. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`: "Modern KV-cache control is a policy stack, not one trick" and "Treat KV as a Managed Memory Tier" are strong signature phrases. Preserve both.
3. `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`: "Scheduling Is Part of the Algorithm" is the strongest new one-line anchor in the diff. Preserve it.
4. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`: "the repair path starts only after failures are typed" is a strong closing phrase for the MAST addition. Preserve it.

### Top Issues (priority-ordered)

1. Application paths need a recall rule, not only a table.
   - Location: `front-matter/preface.html`, after the new paragraph ending "The path tells you where to spend most of your time after Part I."
   - Current memorability: MEDIUM
   - Suggested anchor: signature phrase plus contrast pair
   - Old text: "<p>These paths are not shortcuts around the foundations. They are ways to aim the same foundations at a concrete system. A production RAG system still needs the latency and cost vocabulary of <a href=\"../part-1-foundations/module-05-evaluating-distributed-ai/index.html\">Chapter 5</a>; a robotics fleet still needs the failure vocabulary of <a href=\"../part-1-foundations/module-02-distributed-systems-concepts/index.html\">Chapter 2</a>; and an internal AI cloud still needs the communication models of <a href=\"../part-1-foundations/module-04-communication-primitives/index.html\">Chapter 4</a>. The path tells you where to spend most of your time after Part I.</p>"
   - New text: "<p>These paths are not shortcuts around the foundations. They are ways to aim the same foundations at a concrete system. A production RAG system still needs the latency and cost vocabulary of <a href=\"../part-1-foundations/module-05-evaluating-distributed-ai/index.html\">Chapter 5</a>; a robotics fleet still needs the failure vocabulary of <a href=\"../part-1-foundations/module-02-distributed-systems-concepts/index.html\">Chapter 2</a>; and an internal AI cloud still needs the communication models of <a href=\"../part-1-foundations/module-04-communication-primitives/index.html\">Chapter 4</a>. Remember the rule: foundation first, pressure second. First learn the shared scale-out loop, then follow the pressure that dominates your system: retrieval, serving, training, recommendation, federation, agents, robotics, streaming, data engineering, or infrastructure.</p>"
   - Why it matters: The new table has ten rows, which is useful but not sticky. The phrase "foundation first, pressure second" gives readers a reusable way to recall how to navigate the book.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

2. Streaming feature stores need a compact schema.
   - Location: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`, new "Frontier Packet: Streaming Feature Stores as a Named Architecture" material.
   - Current memorability: MEDIUM
   - Suggested anchor: four-part mental model
   - Old text: "<p>A modern streaming feature store has four moving parts: an offline store for historical point-in-time joins, an online store for low-latency key lookups, a streaming materialization job that writes fresh values continuously, and a registry that binds all of those to one feature definition."
   - New text: "<p>Remember the feature-store square: history, serving, streaming, registry. A modern streaming feature store has four moving parts: an offline store for historical point-in-time joins, an online store for low-latency key lookups, a streaming materialization job that writes fresh values continuously, and a registry that binds all of those to one feature definition."
   - Why it matters: The added paragraph already has exactly four elements. Naming the "feature-store square" turns a list into a mental model readers can recall later in the MLOps chapter.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

3. Speculative decoding variants need one governing sentence.
   - Location: `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`, before Table 22.7.1.
   - Current memorability: LOW
   - Suggested anchor: signature phrase
   - Old text: "<div class=\"table-caption\"><strong>Table 22.7.1:</strong> Speculative decoding choices all trade proposer cost against acceptance rate. The right choice depends on batch size, cache pressure, and how much extra state the serving stack can carry.</div>"
   - New text: "<div class=\"table-caption\"><strong>Table 22.7.1:</strong> Speculative decoding choices all trade proposer cost against acceptance rate. Remember the rule: speculation pays when guesses are cheap and accepted often. The right choice depends on batch size, cache pressure, and how much extra state the serving stack can carry.</div>"
   - Why it matters: The table compares variants, but a week later the reader should remember the invariant. Cheap guesses plus high acceptance is the durable decision rule.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

4. GraphRAG needs a memorable contrast with vector retrieval.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`, new GraphRAG production pattern.
   - Current memorability: MEDIUM
   - Suggested anchor: contrast pair
   - Old text: "<p>In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards. The offline pipeline now has an entity extraction job, a graph build job, a community summarization job, and a synchronization job that keeps graph nodes linked to chunk identifiers and access-control metadata. The online path becomes route, graph or vector or both, merge evidence, rerank, assemble context. Use graph retrieval when the query asks about relationships, themes, neighborhoods, or multi-hop joins; use vector retrieval when the query asks for a specific passage-level fact; fuse them when the query needs both.</p>"
   - New text: "<p>In this case study, GraphRAG adds a second distributed retrieval surface beside the vector shards. The memory hook is simple: vectors find passages; graphs find relationships. The offline pipeline now has an entity extraction job, a graph build job, a community summarization job, and a synchronization job that keeps graph nodes linked to chunk identifiers and access-control metadata. The online path becomes route, graph or vector or both, merge evidence, rerank, assemble context. Use graph retrieval when the query asks about relationships, themes, neighborhoods, or multi-hop joins; use vector retrieval when the query asks for a specific passage-level fact; fuse them when the query needs both.</p>"
   - Why it matters: The new material is clear, but the contrast is the idea readers will need when designing a RAG system.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

5. Federated foundation models need a retention phrase for backbone versus adapter.
   - Location: `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`, new FedLoRA and federated foundation model paragraph.
   - Current memorability: LOW
   - Suggested anchor: signature phrase
   - Old text: "<p>Federation is also moving upward from small classifiers to foundation models. In a clinical or regulated setting, the frozen backbone is the shared medical language model, vision model, or multimodal encoder, and each hospital trains only a parameter-efficient adapter."
   - New text: "<p>Federation is also moving upward from small classifiers to foundation models. The memory hook is: the backbone stays governed; the adapter travels. In a clinical or regulated setting, the frozen backbone is the shared medical language model, vision model, or multimodal encoder, and each hospital trains only a parameter-efficient adapter."
   - Why it matters: The new paragraph introduces a modern pattern that will recur in regulated deployment. The phrase compresses the pattern without adding a forced acronym.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

6. MAST failure families need a before, during, after schema.
   - Location: `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`, paragraph introducing MAST.
   - Current memorability: MEDIUM
   - Suggested anchor: compact schema
   - Old text: "<p>The modern failure vocabulary for this diagnosis is MAST, the Multi-Agent Systems Failure Taxonomy from <a href=\"https://arxiv.org/abs/2503.13657\" target=\"_blank\" rel=\"noopener\">Why Do Multi-Agent LLM Systems Fail?</a> and the <a href=\"https://sky.cs.berkeley.edu/project/mast/\" target=\"_blank\" rel=\"noopener\">Berkeley MAST project page</a>. MAST analyzed more than 150 tasks across five multi-agent frameworks and grouped failures into three families that map cleanly onto the traces above: specification and system-design failures before execution, inter-agent misalignment during execution, and verification or termination failures after execution. The taxonomy matters because \"the agent failed\" is not actionable; \"the planner underspecified the worker role\", \"the agents reset the conversation history\", or \"the verifier accepted an ungrounded final answer\" points to a specific repair.</p>"
   - New text: "<p>The modern failure vocabulary for this diagnosis is MAST, the Multi-Agent Systems Failure Taxonomy from <a href=\"https://arxiv.org/abs/2503.13657\" target=\"_blank\" rel=\"noopener\">Why Do Multi-Agent LLM Systems Fail?</a> and the <a href=\"https://sky.cs.berkeley.edu/project/mast/\" target=\"_blank\" rel=\"noopener\">Berkeley MAST project page</a>. MAST analyzed more than 150 tasks across five multi-agent frameworks and grouped failures into three families that map cleanly onto the traces above: before execution, specification and system-design failures; during execution, inter-agent misalignment; after execution, verification or termination failures. Remember MAST as before, during, after. The taxonomy matters because \"the agent failed\" is not actionable; \"the planner underspecified the worker role\", \"the agents reset the conversation history\", or \"the verifier accepted an ungrounded final answer\" points to a specific repair.</p>"
   - Why it matters: The taxonomy is important but easy to blur. "Before, during, after" makes it easier to recall and apply.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

7. Protocol boundaries need a compact trust checklist.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, new "Production Rule: Protocol Boundaries Are Trust Boundaries" callout.
   - Current memorability: MEDIUM
   - Suggested anchor: numbered checklist
   - Old text: "<p>In this case study, every MCP tool and every A2A peer is a network participant with its own credentials, schema, latency, and failure behavior. The supervisor should therefore treat protocol boundaries as trust boundaries. Before calling a tool, validate the schema and tenant authorization. After receiving a tool result, store it as evidence with provenance rather than as an instruction. Before delegating to a peer agent, read its agent card, check the advertised skill against the task, and attach a timeout, budget, and expected artifact contract. This converts interoperability from a convenience into an operational control: the same interface that makes a worker pluggable also gives the platform a place to enforce identity, budget, audit logging, and rollback.</p>"
   - New text: "<p>In this case study, every MCP tool and every A2A peer is a network participant with its own credentials, schema, latency, and failure behavior. The supervisor should therefore treat protocol boundaries as trust boundaries. Use the three checks before crossing one: identity, contract, evidence. Before calling a tool, validate identity through schema and tenant authorization. After receiving a tool result, store it as evidence with provenance rather than as an instruction. Before delegating to a peer agent, read its agent card, check the advertised skill against the task contract, and attach a timeout, budget, and expected artifact contract. This converts interoperability from a convenience into an operational control: the same interface that makes a worker pluggable also gives the platform a place to enforce identity, budget, audit logging, and rollback.</p>"
   - Why it matters: The original is accurate but dense. The three-check schema makes the operational rule portable.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Security reviewer should confirm that "identity" includes authorization and not only authentication.

### Content Additions

1. Add a compact corpus-governance schema.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, immediately after the new "Key Insight: A Corpus Version Is Bytes Plus Policy Metadata" callout.
   - Full draft: "<p>For memory, reduce the manifest to four questions: what bytes, from which sources, under which rights, with what removal path? If any one answer is missing, the corpus version is not reproducible enough for foundation-model training.</p>"
   - Tier: TIER 3 (MEDIUM)

2. Add a retrieval scorecard phrase.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`, after the new governed enterprise RAG scorecard paragraph.
   - Full draft: "<p>The memory hook is evidence before eloquence. A governed RAG answer is not ready because it sounds right; it is ready when the evidence is permitted, traceable, fresh, injection-checked, poisoning-checked, and logged.</p>"
   - Tier: TIER 3 (MEDIUM)

3. Add an agent-evaluation layer phrase.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`, after the paragraph ending "both its task quality and its system efficiency are co-measured in that one job."
   - Full draft: "<p>Remember the four layers as components, task, judge, systems: first locate the broken part, then grade the whole task, then validate the grader, then price the run.</p>"
   - Tier: TIER 2 (HIGH)

### Recurring Patterns to Establish

1. "Foundation first, pressure second": Introduced in `front-matter/preface.html`, could recur in chapter indexes when a case study tells readers which earlier chapters to revisit.
2. "Policy stack, not one trick": Already strong in `section-22.5.html`; extend this pattern to `section-24.5.html` with "two pools, one trace" for prefill and decode capacity planning.
3. "Before, during, after": Use for MAST in `section-32.9.html` and callback in `section-40.9.html` when failed traces are labeled.

### Compact Schemas to Add

1. Streaming feature store: "history, serving, streaming, registry."
2. MAST failures: "before execution, during execution, after execution."
3. Agent evaluation: "components, task, judge, systems."
4. Corpus governance: "bytes, sources, rights, removal."

### Signature Phrases

1. "Foundation first, pressure second" captures the application-path navigation rule in the preface.
2. "Speculation pays when guesses are cheap and accepted often" captures the speculative decoding decision rule in Section 22.7.
3. "Vectors find passages; graphs find relationships" captures the GraphRAG contrast in Section 36.6.
4. "The backbone stays governed; the adapter travels" captures federated foundation-model tuning in Section 14.9.
5. "Evidence before eloquence" captures governed enterprise RAG evaluation in Section 36.8.

### Spaced Repetition Opportunities

1. `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html` introduces MAST. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html` should explicitly callback: "This is the same before, during, after MAST schema from Chapter 32, now wired into CI."
2. `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html` introduces KV as a managed memory tier. `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html` should callback when discussing prefill and decode pools: "KV is the memory tier; prefill and decode are the two phases that consume it differently."
3. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html` introduces the vector versus graph contrast. `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html` should callback when agentic retrieval chooses tools: "The supervisor decides whether this request needs passages, relationships, or both."

### Illustration Opportunities (for Agent 36)

1. Feature-store square
   - Type: architecture-as-map
   - Scene description: Four labeled corners, history, serving, streaming, registry, with a feature definition in the center and arrows to training, online scoring, and monitoring.
   - Humor angle: A model tries to grab a stale feature, while the registry stamps it with version and freshness.
   - Placement: After the "Frontier Packet: Streaming Feature Stores as a Named Architecture" callout in Section 9.7.

2. MAST before, during, after
   - Type: workflow schematic
   - Scene description: Three checkpoints on an agent trace: before execution for specification, during execution for alignment, after execution for verification.
   - Humor angle: Each checkpoint catches a different broken handoff before it becomes a vague "agent failed" ticket.
   - Placement: Before Table 32.9.1.

3. Vector versus graph retrieval
   - Type: contrast diagram
   - Scene description: One panel shows vectors pulling a single relevant passage; the other shows a graph connecting entities, teams, incidents, and dependencies.
   - Humor angle: The vector search finds the right page, while the graph reveals the hidden family tree of causes.
   - Placement: In Section 36.6 after the GraphRAG production pattern paragraph.

### Verification Run

Commands run: git status in short form, git diff numstat, git diff name list, a no-color zero-context diff scan for newly added headings, paragraphs, captions, callout titles, and memory-anchor terms.

Suggested post-integration verification:

Run a text scan for the added phrases: "foundation first", "feature-store square", "guesses are cheap", "vectors find passages", "backbone stays governed", "before, during, after", and "evidence before eloquence". Then run the repository style scanner for banned punctuation and banned phrases, followed by the repository whitespace check.

### Blockers

No blockers. I did not edit book HTML by instruction. The only created artifact is this report.

### Summary

ADEQUATE with several high-value upgrades available. The new material is current, concrete, and often well cross-linked, but many additions read as expert update notes rather than durable memory anchors. Applying the seven priority fixes above would add enough signature phrases and compact schemas to make the new content easier to retain without overloading chapters with forced mnemonics.

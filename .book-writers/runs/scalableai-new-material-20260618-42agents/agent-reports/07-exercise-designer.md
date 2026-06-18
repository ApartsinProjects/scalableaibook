## Exercise Design Report

Agent: 07 Exercise Designer
Mode: suggest
Scope: new material currently visible in `git diff`

### Files Inspected

Diff scope inspected from the current HTML diff: `front-matter/preface.html`; `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`; `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`; `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`; `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`; `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`; `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`; `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`; `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`; `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`; `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`; `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`; `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`; `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`; `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`; `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`; `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html`; `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`; `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`; `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`; `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`; `part-7-infrastructure/module-34-edge-fog-on-device/index.html`; `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`; `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html`; `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`; `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`; `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`; `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`; `part-8-case-studies/module-38-case-distributed-recommendation/index.html`; `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`; `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`; `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`; `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`; `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`.

Exercise idempotency check: each affected module already has a mature exercise base, usually 21 to 30 `class="callout exercise"` blocks. The issue is not total count. The issue is that several newly added advanced or frontier concepts are not yet represented in their section-level practice set.

Files changed by this agent: this report only.

### Top Issues

1. New semantic-ID and HSTU recommender material has no corresponding practice task.
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, after line 227, immediately after the practical example ending with `<p><strong>Lesson:</strong> Generative recommendation is easiest to ship first as another candidate source. That keeps the production contract stable: retrieval still returns candidates, ranking still scores them, and the A/B test can isolate whether the generated semantic-ID source adds value under the same latency and guardrail budget.</p>`
   - Old text: no exercise currently asks the reader to design, evaluate, or audit the new semantic-ID candidate source. Existing exercises 38.3.1 through 38.3.3 cover exact top-k merge, per-shard recall, and gather cost.
   - New text:
```html
<div class="callout exercise">
<div class="callout-title">Exercise 38.3.4: Add a Semantic-ID Source Without Breaking the Funnel <span class="exercise-type synthesis">Synthesis</span></div>
<p>You are adding the generative candidate source described above to an existing two-tower ANN recommender. Design the minimal production contract for the new source: the semantic-ID build job, the HSTU-style sequence model input, the beam count returned per request, the resolver that maps generated codes to item ids, and the mixer fields that let the ranker compare generated, ANN, graph, recency, and popularity candidates in one pass. Then specify one online experiment artifact that co-computes source contribution, latency, freshness, guardrail violations, and downstream engagement for all sources under the same user panel and ranker version. Expected answer sketch: the generative source should enter as another candidate source, not as a replacement ranker; the artifact must log source labels, generated code beams, resolved item ids, candidate-set membership, ranker version, latency, and outcomes for the same impressions. Estimated time: 15 minutes. Level: 4.</p>
</div>
```
   - Why it matters: this turns the new conceptual addition into an operational design skill and reinforces the construct-matched evaluation rule added in Section 38.7.
   - Tier: TIER 1 (BLOCKING)
   - Action: APPLY DIRECTLY
   - Potential conflicts: #08 Code Pedagogy may want a notebook version later, but this exercise is intentionally design-first.

2. New foundation-model corpus governance subsection lacks a manifest-audit exercise.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, after line 256, immediately after `<p>A content hash proves which records were present; it does not prove they were licensed, decontaminated, documented, or removable. Foundation-model data governance binds the content-addressed snapshot to a machine-readable manifest and a human-readable dataset card. That binding is what lets Chapter 26's model registry answer the production question that matters: not only "which data trained this model?", but "what were we allowed to do with that data, and how can we prove it?"</p>`
   - Old text: existing exercises 8.9.1 through 8.9.3 practice snapshot reproducibility, fingerprinting, and lineage, but not the new governance manifest fields.
   - New text:
```html
<div class="callout exercise">
<div class="callout-title">Exercise 8.9.4: Audit a Corpus Manifest <span class="exercise-type analysis">Analysis</span></div>
<p>A team gives you a foundation-model corpus snapshot with a content hash, a collection date, and a storage path, but no license field, no opt-out status, no contamination check, and no removal policy. Write the release-gate decision you would send back to the team. Name the missing manifest fields, state which production question each field answers, and explain why a content hash alone cannot satisfy the model-registry requirements of <a href="../../part-5-distributed-inference/module-26-mlops-distributed-ai/index.html">Chapter 26</a>. Expected answer sketch: block promotion until the manifest records source or collection, license or terms, consent or opt-out status, filtering and deduplication recipes, contamination checks, removal policy, and a human-readable dataset card; the hash identifies bytes but not permission, policy, evaluation contamination, or future removability. Estimated time: 12 minutes. Level: 3.</p>
</div>
```
   - Why it matters: the new subsection shifts from reproducibility to accountable use. Readers need to practice that distinction explicitly.
   - Tier: TIER 1 (BLOCKING)
   - Action: APPLY DIRECTLY
   - Potential conflicts: #18 Research Scientist may refine governance references, but the exercise target is stable.

3. New Spark Connect subsection is not tested by the existing PySpark exercises.
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, after line 269, immediately after the key insight callout ending with `<p>Spark Connect is an architectural boundary change, not a performance magic trick. It keeps application code, notebooks, and services outside the Spark driver process, which improves isolation, deployment, and governance. The tuning rules of <a href="section-7.9.html">Section 7.9</a> still apply: built-in expressions beat Python UDFs, shuffles dominate wide dependencies, partitioning controls parallelism, and the storage layout from <a href="../module-08-distributed-storage-data-loading/index.html">Chapter 8</a> still sets the read-path ceiling.</p>`
   - Old text: existing exercises 7.8.1 through 7.8.3 cover native expressions, vectorized UDFs, Arrow batch size, and Spark-to-training handoff, but not the remote client boundary introduced by Spark Connect.
   - New text:
```html
<div class="callout exercise">
<div class="callout-title">Exercise 7.8.4: Move the Client Boundary, Keep the Cost Model <span class="exercise-type analysis">Analysis</span></div>
<p>A feature service currently runs inside the same process as a Spark driver, calls a Python UDF over text rows, and writes sharded Parquet for training. The platform team proposes Spark Connect so the service can submit unresolved DataFrame plans remotely to a governed cluster. Identify which parts of the system improve because the client boundary moved, and which bottlenecks do not improve at all. Expected answer sketch: isolation, deployment, credentials, catalog governance, and cluster ownership improve; row-at-a-time Python UDF cost, shuffle cost, partitioning mistakes, storage layout, and downstream read bandwidth remain governed by the same rules as the rest of Section 7.8 and Section 7.9. Estimated time: 10 minutes. Level: 3.</p>
</div>
```
   - Why it matters: without this exercise, readers may misread Spark Connect as a performance shortcut rather than a control-plane boundary.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: none.

4. The new construct-matched evaluation warning in Section 5.3 deserves a direct audit exercise.
   - Location: `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`, after line 166, immediately after `<p>Do not compare a TTFT number from one prompt distribution with a TPOT number from a different generation-length distribution, or an MLPerf-style result from one model with an internal benchmark from another. For LLM serving, a valid comparison must co-compute TTFT, TPOT, throughput, goodput, cost, and energy in one pass on one model, one hardware pool, one scheduler, one prompt trace, one output-length trace, and one seed. If those conditions differ, the numbers may each be backed by logs and still form an invalid comparison.</p>`
   - Old text: existing exercises 5.3.1 through 5.3.3 cover goodput collapse, separate TTFT and inter-token SLOs, and coordinated omission. They do not ask the reader to reject an invalid cross-config comparison.
   - New text:
```html
<div class="callout exercise">
<div class="callout-title">Exercise 5.3.4: Reject the Invalid Comparison <span class="exercise-type analysis">Analysis</span></div>
<p>A report claims Scheduler B is better than Scheduler A because it shows TTFT from an internal trace on Llama 3.1 8B, TPOT from an MLPerf-style run on DeepSeek-R1, and energy from a separate hardware pool measured the prior week. Audit the comparison. List every construct mismatch, then rewrite the experiment contract so TTFT, TPOT, throughput, goodput, cost, and energy are co-computed in one pass. Expected answer sketch: reject the comparison because model, prompt trace, output-length trace, scheduler, hardware pool, load generator, time window, and metric pass differ; the corrected artifact uses one model, one hardware pool, one scheduler configuration, one prompt and output-length trace, one seed, and one result file containing every compared metric. Estimated time: 10 minutes. Level: 3.</p>
</div>
```
   - Why it matters: this is a book-level methodological rule. It should become something readers can execute, not only a warning they read.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: none.

5. New MCP and A2A protocol material lacks a trust-boundary exercise.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, after line 239, immediately after `<p>In this case study, every MCP tool and every A2A peer is a network participant with its own credentials, schema, latency, and failure behavior. The supervisor should therefore treat protocol boundaries as trust boundaries. Before calling a tool, validate the schema and tenant authorization. After receiving a tool result, store it as evidence with provenance rather than as an instruction. Before delegating to a peer agent, read its agent card, check the advertised skill against the task, and attach a timeout, budget, and expected artifact contract. This converts interoperability from a convenience into an operational control: the same interface that makes a worker pluggable also gives the platform a place to enforce identity, budget, audit logging, and rollback.</p>`
   - Old text: existing exercises 40.6.1 through 40.6.3 cover sequential versus parallel planning, stragglers, retries, and fan-out cost. They do not test protocol trust boundaries.
   - New text:
```html
<div class="callout exercise">
<div class="callout-title">Exercise 40.6.4: Treat Protocols as Trust Boundaries <span class="exercise-type analysis">Analysis</span></div>
<p>A supervisor agent can call three MCP tools and delegate one task to an A2A peer. For each boundary, write the pre-call check, the runtime budget, and the evidence record the system must store after the call. Include schema validation, tenant authorization, timeout, cost budget, advertised skill or tool capability, result provenance, and rollback or retry behavior. Expected answer sketch: every MCP call validates schema and authorization before execution, attaches timeout and budget limits, stores tool name, version, inputs, outputs, and provenance as evidence, and treats results as data rather than instructions; every A2A delegation checks the peer agent card, skill fit, artifact contract, timeout, budget, and completion status before accepting the result. Estimated time: 12 minutes. Level: 3.</p>
</div>
```
   - Why it matters: the new protocol content changes the operating model from local orchestration to distributed trust. Readers should practice the boundary checklist.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: #35 reliability and security review may ask for stronger wording around authorization and provenance.

### Existing Exercises to Improve

1. Section 38.3 exercise set should be extended, not replaced.
   - Location: `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, after Exercise 38.3.3.
   - Fix: add Exercise 38.3.4 above. The existing three exercises remain valid for sharded ANN retrieval, but the new semantic-ID section introduces a separate production design skill.

2. Section 8.9 exercise set should be extended, not replaced.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, after Exercise 8.9.3 or immediately after the governance subsection.
   - Fix: add Exercise 8.9.4 above. Existing exercises remain good for reproducibility and lineage, but governance requires a release-gate audit.

3. Section 7.8, Section 5.3, and Section 40.6 should add one targeted exercise each.
   - Location: the anchors named in Top Issues 3 through 5.
   - Fix: add the drafted exercise blocks above. These are coverage patches for new material rather than replacements for weak existing exercises.

### Chapter Exercise Set Assessment

- Total exercise blocks in affected modules: existing module-level counts range from 21 to 30 `class="callout exercise"` blocks, because this book uses roughly three exercises per section.
- Level distribution in the proposed additions: one Level 4 synthesis exercise, four Level 3 analysis exercises.
- Coverage gaps: semantic-ID generative recommendation, corpus governance manifests, Spark Connect client boundary, construct-matched LLM-serving evaluation, MCP and A2A protocol trust boundaries.
- Answer support: every proposed exercise includes an expected answer sketch and an estimated time.
- Idempotency note: because the chapters already exceed the nominal 8 to 15 exercise target, these recommendations are justified only by clear new-material coverage gaps. Do not add broad extra practice beyond these targeted blocks.

### Verification Suggestions

1. After integration, run `Select-String -Path <changed section> -Pattern 'Exercise 38.3.4|Exercise 8.9.4|Exercise 7.8.4|Exercise 5.3.4|Exercise 40.6.4'` to confirm the targeted blocks exist exactly once.
2. Run a no-em-dash and no-double-hyphen scan over the five edited sections and this report.
3. Re-run the exercise marker count with `Select-String -Pattern 'class="callout exercise"'` for each affected module and confirm only the five targeted additions changed the counts.
4. Ask #08 Code Pedagogy to review whether Exercise 38.3.4 should later gain a notebook variant, but keep the present exercise as a design task.

### Blockers

No blockers. I did not edit book HTML, per instruction.

### Summary

Overall practice quality for the existing chapters is STRONG, but the new diff introduces five major concepts without matching practice opportunities. Add the five targeted exercises above to keep the new material learnable without disturbing the existing exercise architecture.

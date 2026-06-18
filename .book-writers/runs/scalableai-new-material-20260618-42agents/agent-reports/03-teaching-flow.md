## Teaching Flow Report

Agent: 03 Teaching Flow Reviewer  
Mode: suggest  
Scope: new material visible in current `git diff` only  
Files changed: this report only  
Book HTML edits: none

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

### Ordering Issues

1. `front-matter/preface.html:156`: The new application-builder material now opens inside a heading that promises only course use. This creates a local expectation mismatch before the reader sees the table.
   - Old text: `<h2>0.5 How to Use This Book in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - New text: `<h2>0.5 How to Use This Book as a Reference or in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Why it matters: The added Table 0.2 is strong, but the section title tells the reader to expect semester planning rather than application paths.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Structural or front-matter index agents may also touch section titles.

2. `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html:109-115`: The new 2D sparse-parallelism frontier block appears before the section has traced the all-to-all lookup step in detail. The block is useful, but it pushes a modern placement discussion ahead of the concrete mechanism that makes the placement problem visible.
   - Old text: `<h2>2. The All-to-All Between Sparse and Dense <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - New text: `<p>With the modern placement vocabulary in place, we can now return to the simpler step-by-step mechanism that creates the placement problem. Every sharding strategy must still answer the same operational question: when a batch names sparse ids spread across many shards, how do the dense workers fetch exactly the rows they need and send gradients back to the owning shards?</p>
<h2>2. The All-to-All Between Sparse and Dense <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Why it matters: The bridge lets a lecturer say, "Here is the frontier vocabulary; now here is the primitive underneath it," instead of jumping from advanced placement directly into an all-to-all derivation.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Deep Explanation Designer may prefer moving the full frontier block after Section 2 instead of adding a bridge.

### Pacing Issues

1. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html:197-223`: The new fraud section is timely and teachable, but it moves quickly from drift types to architecture, delayed labels, a four-column table, and a case example. The table needs a short synthesis before the example starts.
   - Old text: `</table>
<div class="callout practical-example">`
   - New text: `</table>
<p>Read the table from top to bottom as a response ladder. The unlabeled signals fire first and cheaply; operational rates show whether customers are feeling the model's decisions; delayed labels decide whether the drift was merely a traffic shift or a real loss of fraud-catching power. That ordering is the teaching point: a mature online AI monitor does not wait for labels, but it also does not promote a new model until labels and guardrails confirm the response.</p>
<div class="callout practical-example">`
   - Why it matters: The synthesis turns the table from a static list into a decision sequence and gives the practical example a clear role.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Cognitive Load Optimizer may also split or compress this new section.

2. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html:146-152`: The new governance callout lands between the paragraph that introduces Code 36.8.1 and the code block itself. This weakens prose flow around a non-prose element because the reader is primed for code, then diverted into policy metrics.
   - Old text: `</div>
<pre><code class="language-python">import numpy as np`
   - New text: `</div>
<p>With the governance layer named, the code below returns to the measured core of the scorecard. It computes the retrieval and systems metrics in one pass; the same harness should be extended with the policy columns from the warning when the deployment is regulated or multi-tenant.</p>
<pre><code class="language-python">import numpy as np`
   - Why it matters: The added sentence repairs the setup-code connection and clarifies that governance belongs in the same construct-matched evaluation artifact.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Code Caption Agent may revise code references nearby.

### Missing Transitions

1. `front-matter/preface.html:180-181`: The new application paths paragraph flows into semester-course planning, but the pivot is abrupt because it moves from "reference path" to "larger than any single semester" without naming the mode switch.
   - Old text: `<p>The book is larger than any single semester, by design: it supports five distinct graduate courses that share Part I and then diverge.`
   - New text: `<p>If you are using the book as a reference, the application paths above are the fastest way to aim your reading. If you are teaching from it, the book is larger than any single semester by design: it supports five distinct graduate paths that share Part I and then diverge.`
   - Why it matters: The bridge makes the reference mode and teaching mode feel intentionally paired rather than competing.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Style and Voice Editor may want to reduce repetition with the heading fix.

2. `part-8-case-studies/module-39-case-multi-agent-robotics/index.html:145-161`: The new foundation-model frontier and safety warning arrive after the chapter already closes and points to Chapter 40. The teaching flow is backwards: the reader is told to leave, then receives new frontier material.
   - Old text: `<section class="bibliography" id="bibliography">`
   - New text: `<p>The frontier material above is the final caution before leaving robotics: foundation models can enrich the planner, but the distributed safety layer still owns motion, coordination, and rejection. With that boundary clear, the next case study moves from embodied teams to software agent teams.</p>
<section class="bibliography" id="bibliography">`
   - Why it matters: This adds a closing synthesis after the new material so the chapter does not feel like it reopens after the "What's Next" paragraph.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Narrative Continuity Editor may instead move the two new callouts before the existing "What's Next" block.

### Lecture Opportunities

1. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html:200`: Use the new fraud table for a quick poll before showing the practical example.
   - Draft: `<div class="callout self-check">
<div class="callout-title">Quick Poll: Which Signal Fires First?</div>
<p>Before reading the example, choose the signal you expect to move first when a fraud ring changes tactics: feature drift, score drift, approval rate, delayed fraud rate, or reviewer disagreement. Then compare your answer with the response ladder in Table 9.9.1.</p>
</div>`
   - Tier: TIER 3 (MEDIUM)

2. `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html:109`: Turn the new sharding taxonomy into a whiteboard placement exercise.
   - Draft: `<div class="callout self-check">
<div class="callout-title">Whiteboard Check: Pick the Shard</div>
<p>Suppose one embedding table is small, one table has billions of rows, and one table has wide 1024-dimensional vectors. Which table would you place table-wise, row-wise, column-wise, or grid-sharded, and what communication path does each choice create?</p>
</div>`
   - Tier: TIER 3 (MEDIUM)

### Opening and Closing Assessment

- Opening assessment: The front-matter addition is useful and motivating for application builders, but the current Section 0.5 heading hides that purpose. Apply the heading fix under Ordering Issues.
- Closing assessment: The strongest closing issue is in `module-39-case-multi-agent-robotics/index.html`, where new frontier material appears after the existing next-chapter handoff. Apply the closing synthesis under Missing Transitions, or move the new callouts before the existing "What's Next" block.

### Illustration Opportunities

1. `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`: Drift-aware fraud detector.
   - Type: architecture-as-loop
   - Scene idea: A transaction stream flows through feature windows, a fraud scorer, a fast unlabeled drift panel, a delayed-label reconciliation lane, and a retraining gate. Use two clocks to show fast unlabeled signals and slow labels.
   - Placement: After Table 9.9.1, before the practical example.

2. `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`: 2D sparse parallelism.
   - Type: algorithm-as-map
   - Scene idea: A grid of embedding shards inside one replica group with arrows showing all-to-all row fetches, then multiple replica groups side by side for data parallel throughput.
   - Placement: Inside or immediately after the new research-frontier callout.

### Recommended Reordering

1. `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`: Move the new foundation-model frontier and safety warning before the existing final "What's Next" paragraph, then let the existing paragraph remain the last prose before bibliography.
   - Bridge if moved: `With foundation models placed above the safety layer, the chapter's final handoff can stay focused: the next case study keeps the multi-agent shape but moves it from embodied robots to software agents, tools, and shared context.`
   - Tier: TIER 2 (HIGH)

2. `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`: Prefer moving the new governance warning after Code 36.8.1 and its caption. If it stays before the code, insert the pre-code bridge listed under Pacing Issues.
   - Bridge if moved: `The code computes the core scorecard. The warning below adds the governance columns that a regulated deployment should co-compute in the same run.`
   - Tier: TIER 2 (HIGH)

### Verification Suggestions

1. Run a focused diff review after integration:
   - Review the focused diff for `front-matter/preface.html`, `section-9.9.html`, `section-11.7.html`, `section-36.8.html`, and `module-39-case-multi-agent-robotics/index.html`.
2. Check that every inserted table or code block still has narrative setup and follow-up:
   - Inspect Tables 0.2, 9.9.1, 36.8 governance warning, and the Code 36.8.1 lead-in.
3. Scan the report and any applied fixes for banned punctuation:
   - Run the project style scan for em dash, en dash, and double hyphen patterns before integration.
4. If HTML fixes are applied later, render the affected pages or run the existing publication QA for those five files to confirm that moved callouts did not break layout.

### Summary

Overall flow assessment: ADEQUATE. The new material is mostly well-placed and often improves currency, cross-referencing, and application relevance. The priority fixes are local rather than structural: align the preface heading with the new reference-path table, add synthesis after the fraud monitoring table, repair the governance-callout interruption before Code 36.8.1, and make the robotics frontier material close cleanly before the bibliography.

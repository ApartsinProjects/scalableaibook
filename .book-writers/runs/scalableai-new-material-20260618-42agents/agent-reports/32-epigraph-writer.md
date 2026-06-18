## Epigraph Writer Report

Mode: suggest

Scope: tracked HTML files currently visible in `git diff`.

Files changed: this report only. No book HTML edited.

### Files Inspected

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

### Verification Run

- Confirmed 40 tracked modified HTML files in the visible diff.
- Confirmed each inspected HTML file has exactly one `class="epigraph"` block.
- Checked selected epigraph blocks around the highest risk files for quote, attribution, and placement.
- Did not edit book HTML.

### Top Issues

1. Section 37.4 epigraph is descriptive rather than voiced, and it lacks a real comic turn.
   - Location: `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`, epigraph after `<main class="content" id="main-content">`
   - Old text: `<blockquote class="epigraph">
<p>"A global model, visiting each hospital in turn, learning what it could without ever taking a single chart home."</p>
<cite>A Coordinator That Never Saw a Patient</cite>
</blockquote>`
   - New text: `<blockquote class="epigraph">
<p>"I coordinate five hospitals, see zero charts, and average every update like trust is a protocol field. The miracle is not that I learn from patients I never meet; it is that the firewalls let me leave with only the weights."</p>
<cite>A Diplomatic Federated Coordinator Behind Five Firewalls</cite>
</blockquote>`
   - Why it matters: The replacement gives the federated coordinator a first person voice, makes the privacy constraint concrete, and lands on the weight movement tension that defines the section.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

2. Section 36.8 uses a solid idea, but the attribution is under-specified and the quote can land the co-measured evaluation tension more sharply.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`, epigraph after `<main class="content" id="main-content">`
   - Old text: `<blockquote class="epigraph">
<p>"They asked me to grade a system spread across a thousand machines, and gave me a single number to do it with. I have since learned to ask for several numbers, and to ask which machine produced each one."</p>
<cite>A Metric, Trying to Judge a System Too Big to See at Once</cite>
</blockquote>`
   - New text: `<blockquote class="epigraph">
<p>"They gave me one leaderboard score for a thousand-machine RAG system. I returned retrieval recall, groundedness, p95 latency, and cost per answer, because one number kept passing audits for the wrong machine."</p>
<cite>A Suspicious Evaluation Metric Counting Three Failures</cite>
</blockquote>`
   - Why it matters: The replacement points at the section's central audit discipline: retrieval quality, answer quality, and system efficiency must be measured together.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Aligns with the global construct-matched metrics rule.

3. Section 36.6 quote is good, but the attribution lacks the required adjective and the ending can better expose the tail-latency constraint.
   - Location: `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`, epigraph after `<main class="content" id="main-content">`
   - Old text: `<blockquote class="epigraph">
<p>"I was a single query vector, scattered to every shard at once. Each one handed me back its ten proudest documents, and somewhere in the merge I learned which boasts were true."</p>
<cite>A Query Vector, Gathering the Best of Each Shard</cite>
</blockquote>`
   - New text: `<blockquote class="epigraph">
<p>"I sent one query to 128 shards and received 1,280 confident little winners. My job is to merge their pride before the slowest shard makes truth miss its latency budget."</p>
<cite>A Harried Query Vector Gathering Top Tens</cite>
</blockquote>`
   - Why it matters: The replacement preserves the scatter-gather image while adding concrete shard counts and the slow-shard deadline pressure.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

4. Section 40.6 epigraph is vivid but overlong, and the payoff is softer than the orchestration section deserves.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, epigraph after `<main class="content" id="main-content">`
   - Old text: `<blockquote class="epigraph">
<p>"I am an Orchestrator, holding the plan while five workers run ahead. Two have already finished, one is retrying a flaky tool, one is blocked on a lock, and one has wandered off to call an API I never approved. This is, somehow, the calm part of my job."</p>
<cite>An Orchestrator, Holding the Plan While Five Workers Run Ahead</cite>
</blockquote>`
   - New text: `<blockquote class="epigraph">
<p>"I gave five agents the same plan and got back two answers, one retry, one lock wait, and one unauthorized API bill. Durable execution is what we call cleanup when it works."</p>
<cite>A Tired Orchestrator Holding the Retry Log</cite>
</blockquote>`
   - Why it matters: The replacement is shorter, keeps the five-worker detail, and turns the joke into the section thesis: orchestration is durable coordination under partial failure.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

5. Preface attribution violates the preferred adjective-plus-object shape and the quote can make the book-level scale-out tension more explicit.
   - Location: `front-matter/preface.html`, epigraph after `<main class="content" id="main-content">`
   - Old text: `<blockquote class="epigraph">
<p>"I spent years learning to be a fast model on a fast machine. Then I met the dataset, the deadline, and nine thousand of my closest colleagues, and discovered that the real skill was learning to agree with all of them at once."</p>
<cite>A Worker Reading Its Own Onboarding Documents</cite>
</blockquote>`
   - New text: `<blockquote class="epigraph">
<p>"I spent years becoming a fast model on one fast machine. Then the dataset brought a deadline and nine thousand colleagues, and I learned the real benchmark was agreeing before the clock ran out."</p>
<cite>A Newly Distributed Worker Reading Its Onboarding Notes</cite>
</blockquote>`
   - Why it matters: The replacement keeps the original joke but tightens the line around scale-out coordination, which is the preface's organizing promise.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

6. Section 35.5 has a strong concept, but the attribution is not adjective-led and the quote can mention the mean's failure directly.
   - Location: `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`, epigraph after `<main class="content" id="main-content">`
   - Old text: `<blockquote class="epigraph">
<p>"They sent me twenty numbers and swore that all twenty were honest. I sorted them, looked at the one in the middle, and politely ignored the rest of the argument."</p>
<cite>A Median, Refusing to Be Dragged Around by Outliers</cite>
</blockquote>`
   - New text: `<blockquote class="epigraph">
<p>"One malicious worker can drag a mean across the map. I sort twenty updates, keep the middle, and call it consensus with better boundaries."</p>
<cite>A Stubborn Coordinate Median Counting Byzantine Neighbors</cite>
</blockquote>`
   - Why it matters: The replacement directly encodes the breakdown-point lesson while keeping the median as the personified speaker.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Additional Keep Notes

- Strong keep candidates include sections 5.3, 7.8, 8.7, 8.9, 9.7, 9.9, 10.10, 11.7, 14.9, 15.8, 16.5, 20.9, 22.5, 22.7, 24.5, 25.1, 25.4, 25.7, 26.3, 26.7, 30.10, 32.6, 32.7, 32.9, 33 index, 34 index, 35.6, 37.8, 38 index, 38.3, 38.7, 39 index, and 40.9.
- Those epigraphs already have a concrete technical detail, a clear topic fit, and at least one workable turn. Some attributions could still be made more adjective-rich, but that is lower value than the six replacements above.

### Verification Suggestions

1. After integration, rerun an epigraph count over the 40 scoped HTML files and require exactly one `class="epigraph"` per file.
2. Search the scoped files for duplicate epigraph quote strings.
3. Scan epigraph quotes and citations for banned punctuation and real-person attributions.
4. Spot-check the six updated files in browser view to confirm the epigraph remains after the chapter header and before the first callout or overview content.

### Blockers

None.

### Summary

The new material is broadly covered: every scoped HTML file has one epigraph. The highest value fixes are not missing blocks, but sharper replacements for six lines where the current epigraph is too descriptive, too wordy, or weak on the required attribution shape.

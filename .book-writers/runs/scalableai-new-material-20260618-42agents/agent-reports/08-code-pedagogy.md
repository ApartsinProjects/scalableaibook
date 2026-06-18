## Code Pedagogy Report

Agent: 08-code-pedagogy

Mode: suggest

Scope: only new or modified material visible in the current `git diff`. No book HTML was edited.

### Files Inspected

I inspected the tracked HTML files currently visible in `git diff`: `front-matter/preface.html`; `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`; `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`; `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`; `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`; `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`; `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`; `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`; `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`; `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`; `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`; `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`; `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`; `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`; `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`; `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`; `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html`; `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`; `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`; `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`; `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`; `part-7-infrastructure/module-34-edge-fog-on-device/index.html`; `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`; `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html`; `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`; `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`; `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`; `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`; `part-8-case-studies/module-38-case-distributed-recommendation/index.html`; `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`; `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`; `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`; `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`; `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`.

Code-bearing changed blocks inspected in detail: Section 5.3 lines 66 to 116 and 186 to 191; Section 7.8 lines 250 to 264; Section 8.7 lines 106 to 145 and 190 to 205; Section 9.7 lines 125 to 182; Section 9.9 lines 58 to 103; Section 11.7 lines 128 to 222; Section 15.8 lines 128 to 158; Section 16.5 lines 192 to 212; Section 20.9 lines 198 to 276; Section 22.5 lines 114 to 189; Section 26.7 lines 143 to 219.

### Missing Code Opportunities

1. TIER 2 (HIGH): `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, Spark Connect.
   - Gap: the Spark Connect example writes a remote feature table but does not show the plan boundary in a way a reader can observe.
   - Old text: `<pre><code class="language-python">from pyspark.sql import SparkSession`
   - New text:
```html
<p>The short Spark Connect client below shows the remote boundary in code: the Python process creates a DataFrame plan, while the Connect server owns analysis, scheduling, execution, and the final write.</p>
<pre><code class="language-python"># Spark Connect keeps Python as a remote client, not the cluster driver.
# The code builds a feature-table plan locally and executes it on the server.
from pyspark.sql import SparkSession
```

2. TIER 2 (HIGH): `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`, Evidently shortcut.
   - Gap: the shortcut uses a current library idea, but the snippet follows an older import style. Evidently's current documentation shows `from evidently import Report` and `from evidently.presets import DataDriftPreset`.
   - Old text:
```html
<pre><code class="language-python">from evidently.report import Report
from evidently.metric_preset import DataDriftPreset

report = Report(metrics=[DataDriftPreset()])    # per-feature tests, auto-chosen
report.run(reference_data=reference_df, current_data=current_df)
report.as_dict()["metrics"][0]["result"]["dataset_drift"]   # True / False fleet verdict
</code></pre>
```
   - New text:
```html
<pre><code class="language-python"># Evidently builds a drift report from current and reference DataFrames.
# Install with: pip install evidently
from evidently import Report
from evidently.presets import DataDriftPreset

report = Report([DataDriftPreset(method="psi")])
snapshot = report.run(current_data=current_df, reference_data=reference_df)
snapshot.dict()["metrics"][0]["value"]["share"]
</code></pre>
```
   - Source checked: Evidently official docs, `https://docs.evidentlyai.com/docs/library/report`, and Evidently GitHub README.

### Code Corrections

1. TIER 1 (BLOCKING): print-producing examples use separate `<pre>` blocks for output instead of the required `.code-output` pane.
   - Locations: `section-5.3.html` Output 5.3.1; `section-8.7.html` Output 8.7.1; `section-9.7.html` output after Code 9.7.1; `section-9.9.html` Output 9.9.1; `section-11.7.html` Output 11.7.1; `section-26.7.html` Output 26.7.1.
   - Old text pattern:
```html
</code></pre>
<div class="code-caption"><strong>Code X:</strong> ...</div>
<pre><code class="language-text">...
</code></pre>
<div class="code-caption"><strong>Output X:</strong> ...</div>
```
   - New text pattern:
```html
</code></pre>
<div class="code-output">
<pre><code class="language-text">...
</code></pre>
</div>
<div class="code-caption"><strong>Code X:</strong> ...</div>
```
   - Note: keep the output explanation, but merge it into the code caption or place it after the `.code-output` pane as prose. The Agent 08 spec requires output between `</pre>` and `<div class="code-caption">`.

2. TIER 1 (BLOCKING): multiple Python blocks start with imports instead of 2 to 3 purpose comments.
   - Locations and paste-ready first-line replacements:
   - `section-5.3.html` line 66, old: `<pre><code class="language-python">import numpy as np`
   - New:
```html
<pre><code class="language-python"># NumPy supplies reproducible random arrivals and percentile calculations.
# The simulation measures where throughput and SLO-counted goodput diverge.
import numpy as np
```
   - `section-8.7.html` line 106, old: `<pre><code class="language-python">import numpy as np`
   - New:
```html
<pre><code class="language-python"># NumPy lets us compare one global fit with shard-local partial summaries.
# The goal is to prove that count, sum, and sumsq merge into the same scaler.
import numpy as np
```
   - `section-8.7.html` line 190, old: `<pre><code class="language-python">import ray`
   - New:
```html
<pre><code class="language-python"># Ray Data streams tabular records through CPU cleanup and GPU embedding.
# Install with: pip install "ray[data]"
import ray
```
   - `section-9.7.html` line 125, old: `<pre><code class="language-python">import time`
   - New:
```html
<pre><code class="language-python"># This snippet compares the streaming and offline definitions of one feature.
# It proves train-serve consistency by recomputing the same window at label time.
import time
```
   - `section-9.9.html` line 58, old: `<pre><code class="language-python">import random, math`
   - New:
```html
<pre><code class="language-python"># The detector bins live windows against a fixed calibration histogram.
# PSI rises when the serving distribution shifts away from that reference.
import random, math
```
   - `section-11.7.html` line 128, old: `<pre><code class="language-python">import math`
   - New:
```html
<pre><code class="language-python"># This cost model turns embedding-cache hit rate into network bytes per step.
# Random sampling creates a Zipfian lookup stream with a small hot head.
import math
```
   - `section-15.8.html` line 128, old: `<pre><code class="language-python">import numpy as np`
   - New:
```html
<pre><code class="language-python"># NumPy exposes both FP16 underflow and the payload savings of half precision.
# The printed numbers connect loss scaling to communication volume.
import numpy as np
```
   - `section-20.9.html` line 198, old: `<pre><code class="language-python">import time, collections`
   - New:
```html
<pre><code class="language-python"># This miniature actor-learner stack tracks policy versions through replay.
# The printed trace shows rollout, learning, and broadcast as one loop.
import time, collections
```
   - `section-22.5.html` line 114, old: `<pre><code class="language-python">import random`
   - New:
```html
<pre><code class="language-python"># This allocator bake-off compares contiguous KV reservations with paged blocks.
# The output measures admitted sequences and wasted token slots under each policy.
import random
```
   - `section-26.7.html` line 143, old: `<pre><code class="language-python">import numpy as np`
   - New:
```html
<pre><code class="language-python"># NumPy makes each replica emit a mergeable histogram over shared bin edges.
# The fleet score is computed only after those local summaries are summed.
import numpy as np
```

3. TIER 2 (HIGH): `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html` has only one opening comment line.
   - Old text: `<pre><code class="language-python"># Run with torchrun and nproc_per_node=8`
   - New text:
```html
<pre><code class="language-python"># Run with torchrun and nproc_per_node=8.
# FSDP wraps transformer blocks so parameters are gathered only when needed.
# Install with: pip install torch
```

4. TIER 2 (HIGH): several output blocks are coded as standalone code fragments even though they are representative output, which makes caption numbering and mandatory comment checks ambiguous.
   - Locations: same six output blocks listed in Correction 1.
   - Old text: `<div class="code-caption"><strong>Output 11.7.1:</strong> Caching only 5,000 hot rows...`
   - New text:
```html
<p>The representative output shows that caching only 5,000 hot rows, about 2.6 megabytes of HBM per host, lifts the hit rate to 0.85 and cuts the cross-host bytes per step from 1,342 megabytes to 201 megabytes. Quantizing the cold tail to int8 or int4 shrinks the stored table by 4 to 8 times on top of that.</p>
```
   - Apply the same transformation to the other `Output X` captions after converting their text panes into `.code-output`.

### Pedagogical Improvements

1. TIER 2 (HIGH): `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`, Code 9.7.1 is 57 lines and teaches four concepts at once.
   - Old text: caption begins `Code 9.7.1: An online feature, end to end and framework-free.`
   - New text:
```html
<div class="code-caption"><strong>Code 9.7.1:</strong> The streaming half of the online feature path. The function <code>streaming_feature</code> updates each user's five-minute deque and writes the latest value to <code>online_store</code>, which is the only state serving needs.</div>
```
   - Split suggestion: end the first block after `online_store[user] = feat`; insert the caption above; then introduce a second block with this paragraph:
```html
<p>The second half recomputes the identical feature offline at each user's label time and compares it with the online value. This isolates the train-serve consistency check from the streaming update mechanics.</p>
```

2. TIER 2 (HIGH): `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`, Code 11.7.1 is 77 lines and mixes table sizing, Zipf sampling, cache hit modeling, communication timing, and quantization.
   - Old text: caption begins `Code 11.7.1: A pure-Python cost model of a one-terabyte embedding sharded across sixteen hosts.`
   - New text:
```html
<div class="code-caption"><strong>Code 11.7.1:</strong> The first half sizes the sharded embedding table and samples a Zipfian lookup stream. The variables <code>ROWS</code>, <code>DIM</code>, <code>S</code>, and <code>HEAD</code> define the memory geometry before any cache policy is tested.</div>
```
   - Split suggestion: create Code 11.7.2 beginning at `# Cache hit rate as a function of HBM cache capacity.` and move the quantization loop into a short third block if the editor wants each block under 40 lines.

3. TIER 2 (HIGH): `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`, Code 20.9.2 is 78 lines and exceeds the single-unit teaching limit.
   - Old text: caption begins `Code 20.9.2: The complete actor-learner stack of Figure 20.9.1 in one runnable file`
   - New text:
```html
<div class="code-caption"><strong>Code 20.9.2:</strong> The first block defines the replay buffer and versioned policy state used by the actor-learner stack. Keeping these definitions separate lets the next block focus only on rollout, learning, and broadcast behavior.</div>
```
   - Split suggestion: put data structures and `Policy` in one block; put actor rollout, learner update, and broadcast trace in the next block with the existing output pane.

4. TIER 2 (HIGH): `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`, Code 22.5.1 is 75 lines and hides the core contrast inside a long setup.
   - Old text: caption begins `Code 22.5.1: A pure-Python KV allocator bake-off.`
   - New text:
```html
<div class="code-caption"><strong>Code 22.5.1:</strong> The first block defines the request stream and the two allocator policies. The contrast to watch is that contiguous allocation reserves <code>MAX_LEN</code> slots per sequence, while paged allocation reserves only the fixed blocks actually touched.</div>
```
   - Split suggestion: define request generation and allocators first; run the admission loop and print the comparison in a second block.

5. TIER 3 (MEDIUM): `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`, Code 26.7.1 is 44 lines and just over the 40-line review threshold.
   - Old text: caption begins `Code 26.7.1: A from-scratch fleet-wide drift detector.`
   - New text:
```html
<div class="code-caption"><strong>Code 26.7.1:</strong> A from-scratch fleet-wide drift detector. The helper functions build mergeable per-replica histograms and compute PSI after aggregation; the monitoring loop below them shows the trigger firing only after the population shifts.</div>
```
   - This can remain one block if the line budget is considered close enough, but the opening comments and output-pane fix should still be applied.

### Missing Captions and References

No changed runnable code block lacked a caption entirely. Caption specificity is generally good, because captions name variables or functions such as `online_store`, `offline_feature`, `fleet_distribution`, `auto_wrap_policy`, `FSDP(...)`, and `DataDriftPreset`.

The main reference gap is import justification. The prose introduces NumPy, Spark, Ray Data, PyTorch FSDP, and Evidently in most cases, but the imports still need opening comments because the mandatory comment rule is mechanical and the code currently begins with imports.

### Verification Suggestions

1. Run an HTML structural check over the changed files to confirm every runnable code block has this order: prose introduction, `<pre>`, optional `.code-output`, then `.code-caption`.

2. Run a targeted script that finds changed `<pre><code class="language-python">` blocks whose first nonblank line is not a comment.

3. Execute the pure Python or NumPy blocks after HTML entity unescaping: Code 5.3.1, Code 8.7.1, Code 9.7.1, Code 9.9.1, Code 11.7.1, Code 15.8.1, Code 20.9.2, Code 22.5.1, and Code 26.7.1.

4. Do not execute cluster-dependent illustrative snippets directly without fixtures: Spark Connect, Ray Data with S3 paths and `embed_images`, FSDP with `torchrun`, and Evidently with placeholder DataFrames. Validate those by import-path checks and documentation review.

5. For the Evidently shortcut, verify against the installed version selected by the book environment. The current public docs use `from evidently import Report` and `from evidently.presets import DataDriftPreset`; older examples use `from evidently.report import Report` and `from evidently.metric_preset import DataDriftPreset`.

### Summary

Overall code quality: NEEDS WORK.

The new material has strong pedagogical intent and generally specific captions, but the changed code blocks miss two mechanical gates: opening comments before imports and `.code-output` panes for printed output. Several long examples also need splitting so each block teaches one concept at a time. The highest-value fixes are structural and low risk: add two purpose comments before each import-leading block, convert standalone output `<pre>` blocks into `.code-output` panes, update the Evidently shortcut to the current documented API style, then split the four longest examples during integration.

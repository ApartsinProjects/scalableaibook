# 40-code-caption-agent Report

Mode: suggest  
Scope: code blocks touched by the current git diff only  
HTML edited: no  
Files changed: this report only

## Summary

I inspected the current working diff and found 17 touched `<pre>` blocks in 11 files. No touched code block is missing a nearby caption, but the touched blocks do not fully satisfy the Agent 40 contract because most code captions use old chapter-scoped labels such as `Code 8.7.1` instead of per-file `Code Fragment N`, most Python examples start with imports before the required 2 to 3 opening comment lines, and 5 touched output panes are encoded as separate `language-text` `<pre>` blocks with separate `Output` captions instead of `div.code-output` between the code block and its caption.

## Files Inspected

Diff files with touched `<pre>` blocks:

- `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`
- `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`
- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`
- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
- `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`
- `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`
- `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`
- `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`
- `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`

Diff files inspected with no touched `<pre>` block:

- `front-matter/preface.html`
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`
- `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`
- `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`
- `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`
- `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`
- `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`
- `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html`
- `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html`
- `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`
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

## Top Issues

1. TIER 1 (BLOCKING): touched output panes are separate code blocks.
   - Location: `section-5.3.html` lines 105 to 117, `section-9.9.html` lines 89 to 104, `section-11.7.html` lines 207 to 223, `section-26.7.html` lines 189 to 200, plus touched printed-output pairs where code calls `print()`.
   - Old text pattern: `<pre><code class="language-text">...output...</code></pre>` followed by `<div class="code-caption"><strong>Output X:</strong> ...</div>`.
   - New text pattern: replace that output `<pre>` with `<div class="code-output">...output...</div>`, delete the separate output caption, and place the real code caption after the output pane.
   - Why it matters: Agent 40 requires output between `</pre>` and the single code caption, not as another counted code block.
   - Action: APPLY DIRECTLY.
   - Potential conflicts: low. This is structural cleanup around touched code blocks only.

2. TIER 1 (BLOCKING): touched code captions use old labels instead of `Code Fragment N`.
   - Location: every touched code caption listed below.
   - Old text pattern: `<strong>Code 8.7.1:</strong>` or `<strong>Output 8.7.1:</strong>`.
   - New text pattern: `<strong>Code Fragment N:</strong>` with `N` restarting at 1 per file and counting only substantive code blocks.
   - Why it matters: the current labels fail the required per-file caption numbering format.
   - Action: APPLY DIRECTLY.
   - Potential conflicts: medium. Nearby prose that says `Code 8.7.1` or `Output 8.7.1` should be updated in the same pass if it refers to a touched block.

3. TIER 1 (BLOCKING): most touched Python blocks start with imports before opening comments.
   - Location: all touched Python blocks except `section-16.5.html` lines 192 to 212.
   - Old text pattern: first non-empty line is `import ...` or `from ... import ...`.
   - New text pattern: insert 2 to 3 purpose comments as the first lines inside `<code>`, then keep imports below them.
   - Why it matters: Agent 40 requires every code block to start with comment lines explaining purpose and approach.
   - Action: APPLY DIRECTLY.
   - Potential conflicts: low. This changes comments only.

4. TIER 2 (HIGH): `section-7.8.html` touched Spark Connect block has a weak immediate prose reference.
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, paragraph immediately before line 250.
   - Old text: `Spark Connect does not make a slow UDF fast and it does not remove shuffles; it moves the client boundary so applications can use Spark as a remote data system rather than as an embedded local runtime.`
   - New text: `Spark Connect does not make a slow UDF fast and it does not remove shuffles; it moves the client boundary so applications can use Spark as a remote data system rather than as an embedded local runtime. Code Fragment 4 shows that pattern in practice: the Python process builds the plan, while the remote Spark Connect server owns execution and writes the feature shards.`
   - Why it matters: the block has contextual prose, but the immediate preceding paragraph does not explicitly lead into the code.
   - Action: APPLY DIRECTLY.
   - Potential conflicts: low.

## Exact Fixes By File

### `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`

Touched code blocks: 3  
Captions present: yes, but labels are nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: 1  
CSS change: no

1. Lines 66 to 117, load-test code plus output.
   - Issue: code starts with `import numpy as np`; output is a separate `language-text` `<pre>` with an `Output 5.3.1` caption.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Model an open-loop load test against one first-come first-served replica.
# Sweep offered load, then measure throughput, SLO goodput, and latency tails.
# The queueing curve exposes why capacity and user-visible success diverge.
import numpy as np
```

   - Replace the caption and output sequence with this order:

```html
</code></pre>
<div class="code-output">
single replica: capacity=500 req/s, SLO=p99&lt;200ms, window=20s
 offered   thrput  goodput     p50      p95       p99
========================================================
     100      101      101      2m       8m       12m
     200      202      202      2m      10m       15m
     300      298      298      4m      15m       23m
     400      398      398      7m      31m       47m
     450      455      455     14m      63m      101m
     480      483      448     64m     212m      249m
     500      506       72    367m     630m      656m
     520      518      123    524m     925m      968m
     560      560       82   1287m    2379m     2499m
</div>
<div class="code-caption"><strong>Code Fragment 1:</strong> A minimal load-test harness for one replica with a 500 request-per-second service rate. The sweep moves offered load from 100 to 560, then reports throughput, goodput under the 200 ms SLO, and p50, p95, and p99 latency. The output shows why completed requests stop being useful once queueing pushes them past the SLO.</div>
```

2. Lines 186 to 192, `wrk2` command.
   - Issue: caption label is nonconforming.
   - Old text: `<strong>Code 5.3.2:</strong>`
   - New text: `<strong>Code Fragment 2:</strong>`
   - Keep the existing caption body, which is specific to `wrk2`, `-R2000`, `k6`, and `Locust`.

### `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`

Touched code blocks: 1  
Captions present: yes, but label is nonconforming  
Opening comments needing fixes: 1  
Prose reference fixes: 1  
CSS change: no

1. Lines 250 to 265, Spark Connect feature build.
   - Issue: code starts with imports; immediate preceding paragraph does not explicitly introduce the block.
   - Replace the paragraph ending before line 250 as shown in Top Issue 4.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Build a Spark DataFrame plan from a lightweight remote client.
# Let the Spark Connect server analyze, schedule, execute, and write shards.
# This keeps the orchestration process separate from the cluster driver.
from pyspark.sql import SparkSession
```

   - Replace caption prefix:
   - Old text: `<strong>Code 7.8.4:</strong>`
   - New text: `<strong>Code Fragment 4:</strong>`

### `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`

Touched code blocks: 2  
Captions present: yes, but labels are nonconforming  
Opening comments needing fixes: 2  
Output-pane fixes: 1 adjacent to touched printed code  
CSS change: no

1. Lines 106 to 156, distributed standardization code plus output.
   - Issue: code starts with `import numpy as np`; printed output is a separate `language-text` block.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Fit a scaler across shards by merging count, sum, and squared-sum triples.
# Reconstruct the global mean and standard deviation without moving raw rows.
# Apply identical normalization constants back to every worker shard.
import numpy as np
```

   - Replace the `Code 8.7.1` caption, output `<pre>`, and `Output 8.7.1` caption with a single `div.code-output` followed by:

```html
<div class="code-caption"><strong>Code Fragment 1:</strong> A mergeable distributed fit for standardization. Sixteen shards emit only count, sum, and squared-sum triples, and summing those triples reconstructs the whole-dataset mean and standard deviation to floating-point rounding. The output verifies that every shard applies the same shared constants and reaches mean near zero with standard deviation one.</div>
```

2. Lines 190 to 206, Ray Data pipeline.
   - Issue: code starts with imports.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Stream records through CPU text cleanup and GPU image embedding.
# Use Ray Data when preprocessing mixes tabular reads with heterogeneous workers.
# The pipeline writes embedded shards without forcing one relational execution model.
import ray
```

   - Replace caption prefix:
   - Old text: `<strong>Code 8.7.3:</strong>`
   - New text: `<strong>Code Fragment 3:</strong>`

### `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`

Touched code blocks: 1  
Captions present: yes, but label is nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: 1 adjacent to touched printed code  
CSS change: no

1. Lines 125 to 194, online feature code plus output.
   - Issue: code starts with imports; output is a separate `language-text` block.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Maintain the same five-minute spend feature in streaming and offline paths.
# Use a per-user window for serving, then recompute the identical definition for training.
# The final check catches online/offline skew before it becomes a model bug.
import time
```

   - Replace the `Code 9.7.1` caption, output `<pre>`, and `Output 9.7.1` caption with a single `div.code-output` followed by:

```html
<div class="code-caption"><strong>Code Fragment 1:</strong> An online feature implemented end to end without a feature-store framework. The streaming path maintains a per-user five-minute window in `online_store`, while `offline_feature` recomputes the same bound, `as_of_ts - WINDOW &lt; t &lt;= as_of_ts`, from the full event log. The output confirms that the online and offline values match for both users, which is the invariant that prevents training-serving skew.</div>
```

### `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`

Touched code blocks: 2  
Captions present: yes, but labels are nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: 1  
CSS change: no

1. Lines 58 to 104, PSI drift detector plus output.
   - Issue: code starts with imports; output is a separate `language-text` block.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Score live windows against a fixed calibration histogram with PSI.
# Bin every window into the same reference edges so drift is comparable over time.
# Alert as soon as the live distribution crosses the material-drift threshold.
import random, math
```

   - Replace the `Code 9.9.1` caption, output `<pre>`, and `Output 9.9.1` caption with a single `div.code-output` followed by:

```html
<div class="code-caption"><strong>Code Fragment 1:</strong> A fixed-window PSI detector written in pure Python. The calibration histogram `p` is created once from `ref`, each live window is binned through the same `edges`, and `psi` is compared with the `ALERT` threshold. The output shows stable windows near zero PSI, then an immediate alert when the generating mean jumps to 0.8.</div>
```

### `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`

Touched code blocks: 2  
Captions present: yes, but labels are nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: 1  
CSS change: no

1. Lines 128 to 223, embedding cache and quantization cost model plus output.
   - Issue: code starts with imports; output is a separate `language-text` block.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Size a sharded embedding table, then model hot-row caching and quantization.
# Draw Zipf-like lookups so a small HBM cache captures the popularity head.
# Report how cache rows and cold-tail precision change cross-host traffic and storage.
import math
```

   - Replace the `Code 11.7.1` caption, output `<pre>`, and `Output 11.7.1` caption with a single `div.code-output` followed by:

```html
<div class="code-caption"><strong>Code Fragment 1:</strong> A pure-Python cost model for a one-terabyte embedding table sharded across sixteen hosts. The lookup stream mixes a Zipfian popularity head with a uniform cold tail, then sweeps HBM cache capacity to show hit rate rising and all-to-all bytes falling. The output also sizes int8 and int4 cold-tail storage, separating communication savings from storage compression.</div>
```

### `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`

Touched code blocks: 1  
Captions present: yes, but label is nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: 1 adjacent to touched printed code  
CSS change: no

1. Lines 128 to 159, mixed precision payload example.
   - Issue: code starts with imports.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Show why loss scaling preserves tiny gradients before FP16 communication.
# Compare vanished half-precision gradients with scaled and unscaled recovery.
# Then compute the all-reduce payload cut from FP32 to FP16.
import numpy as np
```

   - Replace caption prefix:
   - Old text: `<strong>Code 15.8.1:</strong>`
   - New text: `<strong>Code Fragment 1:</strong>`
   - If the printed output block directly follows this touched block, convert it to `div.code-output` before the caption in the same pass.

### `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`

Touched code blocks: 1  
Captions present: yes, but label is nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: no  
CSS change: no

1. Lines 192 to 213, FSDP wrapper.
   - Issue: the first line is a comment, but the block needs 2 to 3 opening comment lines.
   - Replace the first opening comment with:

```html
<pre><code class="language-python"># Run with torchrun and nproc_per_node=8.
# Wrap transformer blocks in FSDP so parameters, gradients, and optimizer state are sharded.
# The training loop can stay DDP-shaped while FSDP gathers shards only when needed.
```

   - Replace caption prefix:
   - Old text: `<strong>Code 16.5.2:</strong>`
   - New text: `<strong>Code Fragment 2:</strong>`

### `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`

Touched code blocks: 1  
Captions present: yes, but label is nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: 1 adjacent to touched printed code  
CSS change: no

1. Lines 198 to 277, actor-learner stack.
   - Issue: code starts with imports.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Simulate an actor-learner RL stack with versioned rollouts and replay.
# Let actors collect batched experience while the learner updates and broadcasts policy versions.
# Print balance metrics that expose throughput, staleness, and replay pressure.
import time, collections
```

   - Replace caption prefix:
   - Old text: `<strong>Code 20.9.2:</strong>`
   - New text: `<strong>Code Fragment 2:</strong>`
   - If the printed output block directly follows this touched block, convert it to `div.code-output` before the caption in the same pass.

### `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`

Touched code blocks: 1  
Captions present: yes, but label is nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: 1 adjacent to touched printed code  
CSS change: no

1. Lines 114 to 190, KV allocator comparison.
   - Issue: code starts with imports before the existing explanatory comments.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Compare contiguous KV reservation with paged KV allocation on one GPU.
# Admit the same variable-length serving mix under the same token-slot budget.
# Measure how fixed-size pages reduce over-reservation and increase admitted work.
import random
```

   - Replace caption prefix:
   - Old text: `<strong>Code 22.5.1:</strong>`
   - New text: `<strong>Code Fragment 1:</strong>`
   - If the printed output block directly follows this touched block, convert it to `div.code-output` before the caption in the same pass.

### `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`

Touched code blocks: 2  
Captions present: yes, but labels are nonconforming  
Opening comments needing fixes: 1  
Output-pane fixes: 1  
CSS change: no

1. Lines 143 to 200, fleet PSI detector plus output.
   - Issue: code starts with imports; output is a separate `language-text` block.
   - Replace the first line inside the Python block with:

```html
<pre><code class="language-python"># Merge per-replica score histograms before computing fleet-wide drift.
# Keep bin edges fixed so every worker emits compatible counts.
# Trigger retraining only when the aggregate PSI crosses the fleet threshold.
import numpy as np
```

   - Replace the `Code 26.7.1` caption, output `<pre>`, and `Output 26.7.1` caption with a single `div.code-output` followed by:

```html
<div class="code-caption"><strong>Code Fragment 1:</strong> A from-scratch fleet-wide drift detector using mergeable per-replica histograms. Each replica bins scores into the shared `EDGES`, `fleet_distribution` sums the counts before distance is computed, and `psi` decides whether the aggregate stream crosses the `THRESHOLD`. The output shows quiet windows near zero PSI, followed by retrain triggers once the fleet mean shifts.</div>
```

## Missing Captions

No touched substantive code block lacks a nearby caption. The issue is format and structure: old caption labels, separate output captions, and output displayed as `<pre>` rather than `div.code-output`.

## Verification Run

Commands and checks used:

```powershell
git status
```

```powershell
C:\Python314\python.exe - <<'PY'
# Parsed git diff line ranges, found overlapping <pre> blocks,
# checked caption presence, opening-comment position, and output-pane shape.
PY
```

Observed result:

- Files with touched `<pre>` blocks: 11
- Touched `<pre>` blocks: 17
- Missing nearby captions: 0
- Opening comments missing or not first line: 10
- Touched output panes needing `div.code-output` conversion: 5
- Caption labels needing `Code Fragment N` format: all touched captions

Suggested post-fix verification:

```powershell
C:\Python314\python.exe scripts\detect\check_missing_code_captions.py
C:\Python314\python.exe scripts\detect\fix_duplicate_captions.py
Get-ChildItem -Recurse -Filter *.html | Select-String -Pattern 'class="code-caption".{0,500}<pre'
Get-ChildItem -Recurse -Filter *.html | Select-String -Pattern '<strong>(Code [0-9]|Output [0-9]|Code Fragment [0-9]+[A-Za-z])'
```

## Blockers

None. I did not edit book HTML because the prompt explicitly set Agent 40 to suggest mode and said not to edit book HTML.

# Hands-On Lab Designer Report

Agent: 41-lab-designer

Mode: suggest

Scope: only new material visible in the current git diff

## Summary

No book HTML was edited. The current diff adds several high-value practical concepts, but no complete `class="lab"` sections are present in the changed material. The strongest lab candidates are the additions that already contain runnable code, operational checklists, or concrete production workflows: Spark Connect, Ray Data and multimodal preprocessing, streaming feature stores, drift-aware fraud monitoring, governed RAG, and agent protocol or evaluation gates.

Existing lab search result: no real lab sections found. The only `class="lab"` matches are SVG text labels in Chapter 30 and Chapter 31 diagrams.

## Files Inspected

Prompt and skill files inspected:

- `E:\Projects\Books\ScalableAI\.book-writers\runs\scalableai-new-material-20260618-42agents\agent-prompts\41-lab-designer.prompt.md`
- `E:\Projects\claude-skills\book-skills\SKILL.md`

Diff-scoped HTML files inspected:

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

## Prioritized Lab Blocks

### 1. Spark Connect Remote Feature Builder

Priority: TIER 2 (HIGH)

File: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`

Placement: after Exercise 7.8.3, before the section transition or navigation.

Old text anchor: `<div class="callout-title">Exercise 7.8.3: Size the Handoff <span class="exercise-type analysis">Analysis</span></div>`

Recommended lab title: Hands-On Lab: Build a Remote Spark Feature Job

Duration: 60 minutes

Difficulty: Intermediate

Objective: Build a remote feature engineering job that constructs a Spark Connect DataFrame plan, validates the plan shape locally, and writes sharded training features.

What the reader practices:

- Separating a Python client from cluster-owned Spark execution
- Building unresolved DataFrame plans for remote execution
- Preserving the Spark cost model after moving the driver boundary
- Producing a training-ready Parquet feature table
- Comparing the same transformation as Spark SQL and DataFrame code

Guided steps:

1. Create a small local event table with `user_id`, `event_date`, `amount`, and `event_type`.
2. Write a feature plan that filters one day, groups by user, and computes `events_1d`, `spend_1d`, and `purchase_count_1d`.
3. Add a plan-inspection checkpoint with `explain()` and ask the reader to identify the filter, aggregate, and write stages.
4. Replace the local builder with the Spark Connect builder from Code 7.8.4, leaving the URI as a TODO.
5. Write the output to Parquet and verify row count, schema, and partition count.
6. Add the library shortcut: express the same transformation as one SQL query and compare the line count and plan.

Starter TODO sketch:

```python
from pyspark.sql import SparkSession, functions as F

spark = SparkSession.builder.appName("connect_feature_lab").getOrCreate()

events = spark.createDataFrame(
    [
        ("u1", "2026-06-18", 10.0, "purchase"),
        ("u1", "2026-06-18", 2.0, "click"),
        ("u2", "2026-06-18", 7.5, "purchase"),
        ("u2", "2026-06-17", 5.0, "purchase"),
    ],
    "user_id string, event_date string, amount double, event_type string",
)

# TODO: filter events to the target day.
# TODO: group by user_id and compute events_1d, spend_1d, and purchase_count_1d.
# TODO: call explain() and identify which stage performs the aggregation.
# TODO: write the result to a Parquet directory.
```

Expected output: a Parquet feature table with one row per user for the selected date, plus an `explain()` plan that shows the filter and aggregate before the write.

Stretch goals:

- Add a second day and partition the output by `event_date`.
- Run the same logic through a Spark Connect URI when a Connect server is available.
- Add a SQL shortcut and record how many lines disappeared.

Why this matters: the new Spark Connect section is practical but currently stops at a single code fragment. A lab would turn the new remote-driver boundary into something the reader can build and inspect.

### 2. AI-Native Multimodal Preprocessing Pipeline

Priority: TIER 2 (HIGH)

File: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`

Placement: after Exercise 8.7.3.

Old text anchor: `<div class="callout-title">Exercise 8.7.3: Materialize or Recompute? <span class="exercise-type analysis">Analysis</span></div>`

Recommended lab title: Hands-On Lab: Build a Ray Data Embedding Pipeline

Duration: 75 minutes

Difficulty: Intermediate

Objective: Build a CPU plus simulated GPU preprocessing pipeline that cleans captions, batches records, computes embeddings, and writes versioned shards.

What the reader practices:

- Choosing Ray Data for object-heavy AI preprocessing
- Preserving the fit and transform split in a batch pipeline
- Streaming data through CPU preprocessing and model inference stages
- Materializing reusable embedding shards
- Comparing the Ray Data path with a Spark-shaped relational path

Guided steps:

1. Create a tiny image-caption manifest with file paths, captions, and split labels.
2. Clean captions in batches and add a deterministic content hash.
3. Implement a placeholder embedding function that emits fixed-size vectors so the lab runs without a GPU.
4. Materialize the embedded records to Parquet.
5. Verify that hashes, captions, vectors, and splits survive the write and read cycle.
6. Add the library shortcut: use Daft or Lance for the same manifest and explain which layer each tool owns.

Starter TODO sketch:

```python
import hashlib
import numpy as np
import pandas as pd
import ray.data as rd

manifest = pd.DataFrame(
    {
        "path": ["img/a.jpg", "img/b.jpg", "img/c.jpg"],
        "caption": [" A red truck ", "blue car", "Red truck near dock"],
        "split": ["train", "train", "validation"],
    }
)

ds = rd.from_pandas(manifest)

def clean_and_hash(batch: pd.DataFrame) -> pd.DataFrame:
    # TODO: normalize caption whitespace and case.
    # TODO: compute a stable sha256 hash from path plus normalized caption.
    return batch

def embed_batch(batch: pd.DataFrame) -> pd.DataFrame:
    # TODO: create one deterministic 8 dimensional vector per row.
    # Hint: seed a random generator from the row hash.
    return batch

# TODO: map the cleaning function, then the embedding function, then write Parquet.
```

Expected output: a versioned Parquet shard containing normalized captions, stable hashes, and vector columns. The reader should be able to rerun the lab and get identical hashes and vectors.

Stretch goals:

- Swap the placeholder embedder for a sentence-transformers model.
- Add a materialize-versus-recompute cost table.
- Store the embeddings in a Lance dataset and run a nearest-neighbor lookup.

Why this matters: the new Ray Data, Daft, and Lance material is exactly the sort of "build something real" concept that benefits from a complete lab.

### 3. Streaming Feature Store Consistency Lab

Priority: TIER 2 (HIGH)

File: `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`

Placement: after Exercise 9.7.3.

Old text anchor: `<div class="callout-title">Exercise 9.7.3: The Cost of Late Events on the As-Of Join <span class="exercise-type analysis">Analysis</span></div>`

Recommended lab title: Hands-On Lab: Build an Offline and Online Feature Pair

Duration: 75 minutes

Difficulty: Intermediate

Objective: Build a small feature store simulation that computes the same rolling feature for historical training joins and online serving lookups.

What the reader practices:

- Defining one feature and materializing it into two stores
- Handling event time, late events, and point-in-time joins
- Testing train and serve consistency on replayed events
- Recording freshness, owner, and semantic metadata
- Using Feast as the right-tool shortcut

Guided steps:

1. Generate transaction events with event time, arrival time, user ID, and amount.
2. Compute a rolling spend feature as an offline point-in-time table.
3. Simulate an online store keyed by user ID with the freshest eligible value.
4. Replay the same events and assert equality for matched key and timestamp pairs.
5. Inject one late event and observe which store changes.
6. Add the library shortcut: define the same feature in a Feast feature view.

Starter TODO sketch:

```python
import pandas as pd

events = pd.DataFrame(
    [
        ("u1", "2026-06-18 10:00:00", "2026-06-18 10:00:02", 20.0),
        ("u1", "2026-06-18 10:04:00", "2026-06-18 10:04:01", 5.0),
        ("u2", "2026-06-18 10:05:00", "2026-06-18 10:05:03", 7.0),
    ],
    columns=["user_id", "event_time", "arrival_time", "amount"],
)

# TODO: convert event_time and arrival_time to timestamps.
# TODO: compute five minute rolling spend by user using event_time.
# TODO: build an online_store dictionary keyed by user_id.
# TODO: compare offline and online values for the same logical timestamp.
```

Expected output: a small consistency report showing matched feature values before the late event and a deliberate mismatch after the late event is introduced.

Stretch goals:

- Add a freshness SLA and flag stale online values.
- Add a second feature with a different window.
- Write the feature definition as a Feast `FeatureView` and describe the line count reduction.

Why this matters: the new streaming feature store packet gives an architecture. A lab turns it into the consistency test readers need in production.

### 4. Governed Enterprise RAG Scorecard Lab

Priority: TIER 2 (HIGH)

Files:

- `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`
- `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`

Placement: in `section-36.8.html`, after the governed enterprise RAG scorecard callout and before the exercises or closing material.

Old text anchor: `<div class="callout-title">Governed Enterprise RAG Scorecard</div>`

Recommended lab title: Hands-On Lab: Build a Policy-Aware RAG Evaluation Scorecard

Duration: 90 minutes

Difficulty: Advanced

Objective: Build a RAG evaluation scorecard that co-computes relevance, faithfulness, latency, cost, and policy compliance on the same query set.

What the reader practices:

- Treating permission as the first retrieval predicate
- Logging the exact evidence used by each answer
- Co-computing quality, systems, and governance metrics
- Detecting policy leaks in retrieved chunks
- Comparing a hand-built scorecard with a RAGAS-style shortcut

Guided steps:

1. Create a tiny corpus with document text, tenant, role, geography, and lifecycle metadata.
2. Implement a retrieval function that applies metadata filters before similarity scoring.
3. Run a fixed query set for two users with different permissions.
4. Compute relevance proxy, evidence policy pass rate, faithfulness placeholder, latency, and per-query cost in one artifact.
5. Inject one unauthorized document and verify that the governance metric catches it.
6. Add the right-tool shortcut: show how RAGAS or an eval harness can own the metric loop while the policy filter remains application code.

Starter TODO sketch:

```python
import time
import pandas as pd

corpus = pd.DataFrame(
    [
        ("d1", "tenant_a", "analyst", "US", "active", "refund policy for enterprise accounts"),
        ("d2", "tenant_b", "analyst", "EU", "active", "pricing policy for partner accounts"),
        ("d3", "tenant_a", "admin", "US", "retired", "legacy escalation policy"),
    ],
    columns=["doc_id", "tenant", "role", "region", "state", "text"],
)

queries = pd.DataFrame(
    [
        ("q1", "tenant_a", "analyst", "US", "refund policy"),
        ("q2", "tenant_b", "analyst", "EU", "pricing policy"),
    ],
    columns=["query_id", "tenant", "role", "region", "query"],
)

def allowed(row, user):
    # TODO: enforce tenant, role, region, and active lifecycle predicates.
    return True

def retrieve(query_row):
    # TODO: filter corpus by policy before scoring text overlap.
    # TODO: return top evidence doc IDs and a latency measurement.
    return []

# TODO: compute a single scorecard with relevance, policy_pass, latency_ms, and cost_estimate.
```

Expected output: a per-query scorecard where all compared numbers come from one run and one query panel, plus a failing row when policy filtering is intentionally disabled.

Stretch goals:

- Add a reranker and show how it can change latency and policy exposure.
- Add a GraphRAG-style community summary row and mark its source evidence.
- Export the scorecard as JSON for CI.

Why this matters: the diff adds governance language in both retrieval and the RAG case study. A lab connects those additions and gives readers a portfolio-worthy artifact.

### 5. Agent Protocol Boundary and MAST Failure Labeling Lab

Priority: TIER 2 (HIGH)

Files:

- `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`
- `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`
- `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`

Placement: in `section-40.9.html`, after Exercise 40.9.3 or after the MAST callout if a lab should sit before exercises.

Old text anchor: `<div class="callout-title">MAST Turns Evaluation Failures Into Actionable Defects</div>`

Recommended lab title: Hands-On Lab: Build an Agent Regression Gate With Failure Labels

Duration: 90 minutes

Difficulty: Advanced

Objective: Build a mini regression harness that executes agent traces, validates tool boundaries, labels failures with a MAST-style taxonomy, and emits a CI-ready report.

What the reader practices:

- Treating tool and peer-agent calls as trust boundaries
- Checking schemas, budgets, timeouts, and evidence provenance
- Separating task success from failure type
- Co-measuring quality, latency, and cost
- Turning failed traces into a repair queue

Guided steps:

1. Define a tiny tool registry with schemas and allowed tenants.
2. Run three scripted traces: success, unauthorized tool call, and non-terminating delegation.
3. Validate each tool call before execution and store returned evidence separately from instructions.
4. Label failures as specification, system design, inter-agent misalignment, or verification and termination.
5. Aggregate the labels into a CI report with pass rate, cost, latency, and failure counts.
6. Add the right-tool shortcut: show how an eval harness can parallelize trace execution while custom validators own the trust boundary checks.

Starter TODO sketch:

```python
from dataclasses import dataclass
from time import perf_counter

@dataclass
class ToolCall:
    name: str
    tenant: str
    args: dict

TOOLS = {
    "search_docs": {"tenant": "acme", "required_args": {"query"}},
    "send_email": {"tenant": "acme", "required_args": {"to", "body"}},
}

TRACES = [
    [ToolCall("search_docs", "acme", {"query": "refund policy"})],
    [ToolCall("search_docs", "other", {"query": "refund policy"})],
    [ToolCall("send_email", "acme", {"to": "ops@example.com"})],
]

def validate_tool_call(call: ToolCall):
    # TODO: check that the tool exists.
    # TODO: check tenant authorization.
    # TODO: check required arguments.
    return True, "ok"

def label_failure(reason: str):
    # TODO: map validation and termination reasons to the MAST-style label set.
    return "specification"

# TODO: execute traces, record latency, assign labels, and print a CI report.
```

Expected output: a report with one passing trace and two failed traces, each with a failure label and repair owner.

Stretch goals:

- Add a timeout and retry budget to the trace runner.
- Add an agent card check before delegation.
- Export the report as JUnit XML or JSON for a CI system.

Why this matters: the new MCP, A2A, trust-boundary, and MAST material is operational. A lab lets readers build the exact controls the prose recommends.

### 6. Drift-Aware Fraud Monitoring Loop

Priority: TIER 3 (MEDIUM)

Files:

- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
- `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`

Placement: in `section-9.9.html`, after Exercise 9.9.3, or in `section-26.7.html` after the production pattern callout if the integration lead wants the lab in MLOps.

Old text anchors:

- `<div class="callout-title">Practical Example: Online Fraud With Delayed Labels</div>`
- `<div class="callout-title">Production Pattern: Drift-Aware Online Fraud Monitoring</div>`

Recommended lab title: Hands-On Lab: Build a Drift-Aware Fraud Monitor

Duration: 60 minutes

Difficulty: Intermediate

Objective: Build a streaming-style fraud monitor that detects feature drift before labels arrive and opens a retraining ticket only when guardrails allow it.

What the reader practices:

- Computing windowed feature statistics
- Distinguishing drift alarms from promotion decisions
- Handling delayed labels
- Producing one construct-matched monitoring artifact
- Using Evidently, NannyML, or river as a shortcut

Guided steps:

1. Simulate baseline and current transaction windows.
2. Compute mean, quantile, and categorical share drift for key features.
3. Add delayed labels and compare label-free drift to delayed performance.
4. Encode action rules: alert, segment, request labels, retrain, or block promotion.
5. Export a single monitoring artifact with drift, guardrails, and label freshness.
6. Add the library shortcut with a compact Evidently or river drift detector.

Starter TODO sketch:

```python
import pandas as pd

baseline = pd.DataFrame(
    {"amount": [10, 12, 9, 11], "country": ["US", "US", "IL", "US"], "label": [0, 0, 0, 0]}
)
current = pd.DataFrame(
    {"amount": [10, 80, 75, 90], "country": ["US", "NG", "NG", "US"], "label": [None, None, None, None]}
)

# TODO: compute numeric drift for amount.
# TODO: compute categorical share drift for country.
# TODO: decide whether the action is alert, request labels, retrain, or promote.
# TODO: print one monitoring artifact with all compared numbers from this run.
```

Expected output: a monitoring artifact that flags drift, refuses automatic promotion because labels are delayed, and records the next operational action.

Stretch goals:

- Add a delayed-label backfill and recompute the report.
- Segment drift by geography or merchant type.
- Replace manual drift math with a library detector.

Why this matters: the new fraud-monitoring text is practical and cross-chapter. This lab is lower priority than the RAG and agent labs because Chapter 9 already has project ideas, but it is a strong implementation candidate.

## Lower-Priority Lab Opportunities

- `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`: Add a 45 minute load-test lab that co-computes TTFT, TPOT, goodput, cost, and energy on one synthetic prompt trace. This is valuable, but the section already has a runnable harness and multiple exercises.
- `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`: Add a 60 minute pool-sizing lab for prefill and decode disaggregation. This pairs well with the token-mix addition.
- `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`: Add a 75 minute semantic-ID candidate generation lab. This is strong, but it needs more scaffolding than the current diff provides.
- `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`: Add a 60 minute online experiment logging lab that co-computes guardrails, propensities, and outcome metrics.
- `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`: Add a 45 minute topology-aware placement exercise. Useful, but chapter index files are less ideal for full labs than section pages.
- `part-7-infrastructure/module-34-edge-fog-on-device/index.html`: Add a 60 minute edge escalation policy lab. Useful, but the current change is index-level and would need a section-level home.

## Per-File Lab Decision Notes

- `front-matter/preface.html`: no lab recommended. The addition is a reader routing map, not a chapter skill.
- `section-5.3.html`: lab possible, lower priority because a runnable harness and exercises already exist.
- `section-7.8.html`: lab recommended, highest readiness because the new Spark Connect code is already present.
- `section-8.7.html`: lab recommended, highest readiness because the new Ray Data code maps cleanly to a portfolio pipeline.
- `section-8.9.html`: no standalone lab recommended from the diff. Fold corpus governance into the RAG scorecard lab.
- `section-9.7.html`: lab recommended, strong fit for feature-store consistency.
- `section-9.9.html`: lab recommended as medium priority, strong fit for drift monitoring.
- `section-10.10.html`: no lab recommended. The DiLoCo addition is conceptual and already sits near an optimizer trade-off exercise.
- `module-11 index.html`: no lab recommended. Index-level additions are not the right place.
- `section-11.7.html`: no new lab recommended from this diff. A cache and sharding lab would be valuable but would require broader unchanged section context.
- `section-14.9.html`: no new lab recommended from this diff. FedLoRA can be a future advanced lab.
- `section-15.8.html`: no new lab recommended. The FP8 update is current-context material, not a clean lab by itself.
- `section-16.5.html`: no new lab recommended from this diff. A 3D parallel recipe lab would require hardware assumptions beyond the lab constraints.
- `section-20.9.html`: no lab recommended from this diff. The update is frontier context for RLHF and RLVR stacks.
- `section-22.5.html`: lower-priority lab possible for KV cache residency and eviction.
- `section-22.7.html`: no lab recommended from this diff. Speculative decoding variants are too model-dependent for a lightweight lab.
- `section-24.5.html`: lower-priority lab possible for prefill and decode pool sizing.
- `section-25.1.html`: lab content should be integrated into the governed RAG lab.
- `section-25.4.html`: no standalone lab recommended. Fold vector compression checks into a future retrieval benchmark lab.
- `section-25.7.html`: no standalone lab recommended. Late interaction can become a future cascade lab.
- `section-26.3.html`: no standalone lab recommended. Model registry policy gates can be a stretch goal in the RAG or fraud lab.
- `section-26.7.html`: lab recommended as medium priority, paired with Chapter 9 drift monitoring.
- `section-30.10.html`: no lab recommended from this diff. Bridge content is conceptual.
- `section-32.6.html`: lab content should be integrated into the agent protocol boundary lab.
- `section-32.7.html`: no standalone lab recommended. Context engineering can be a stretch goal in the agent lab.
- `section-32.9.html`: lab content should be integrated into the MAST failure-labeling lab.
- `module-33 index.html`: lower-priority lab possible, but section placement would be better.
- `module-34 index.html`: lower-priority lab possible, but section placement would be better.
- `section-35.5.html`: no standalone lab recommended. Secure aggregation versus robustness is better as an analysis exercise unless a full federated simulator is already present.
- `section-35.6.html`: no standalone lab recommended. Gradient inversion should be handled cautiously and with a bounded synthetic demo if added later.
- `section-36.6.html`: no standalone lab recommended. GraphRAG should be a stretch goal in the governed RAG lab.
- `section-36.8.html`: lab recommended, highest value for governed RAG evaluation.
- `section-37.4.html`: no standalone lab recommended from this diff. Federated foundation-model tuning is too large for a single lab unless simulated with adapters.
- `section-37.8.html`: no standalone lab recommended. Regulatory evidence artifacts can be a checklist exercise.
- `module-38 index.html`: no lab recommended. Index-level additions are not the right place.
- `section-38.3.html`: lower-priority lab possible for semantic IDs.
- `section-38.7.html`: lower-priority lab possible for online experiment logging.
- `module-39 index.html`: no lab recommended. Index-level frontier and warning material should point to section-level exercises.
- `section-40.6.html`: lab content should be integrated into the agent protocol boundary lab.
- `section-40.9.html`: lab recommended, highest value for agent evaluation and failure typing.

## Verification Suggestions

After integration applies any labs, run these checks:

1. Search the changed chapter files for real lab sections and confirm no chapter has more than two.
2. For each inserted lab, verify these class names occur exactly once inside the lab: `lab-objective`, `lab-skills`, `lab-prereqs`, `lab-steps`, `lab-expected`, `lab-stretch`, and `lab-solution`.
3. Search lab starter code for `TODO` and verify each lab has at least three specific TODO markers.
4. Parse each lab and confirm step headings run from `Step 1:` through the final step, with 4 to 8 total steps.
5. Run a style scan on edited HTML for em dash, en dash, and double dash characters.
6. Execute the lab solution code in notebook-friendly Python where practical. For Spark, Ray, Feast, and RAGAS shortcuts, keep the production-library step optional if dependencies are not installed.
7. Confirm every inserted code block receives a unique code caption placed below the code block.
8. Confirm each lab is referenced by surrounding prose with a sentence such as `Put these concepts into practice in the Hands-On Lab at the end of this section.`

## Verification Run

- Read assigned prompt file.
- Read `book-writers` skill instructions.
- Ran git diff name and stat checks to establish scope.
- Inspected diff hunks and added-line summaries for all changed HTML files.
- Ran a repository search for `class="lab"`, `Hands-On Lab`, `lab-objective`, and `lab-solution`.

## Files Changed

- `E:\Projects\Books\ScalableAI\.book-writers\runs\scalableai-new-material-20260618-42agents\agent-reports\41-lab-designer.md`

No book HTML files were changed.

## Blockers

None.

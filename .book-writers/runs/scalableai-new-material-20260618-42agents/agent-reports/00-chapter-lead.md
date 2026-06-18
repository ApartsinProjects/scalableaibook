# Chapter Lead Agent 00 Report

Mode: suggest  
Scope: new material visible in the current tracked HTML diff  
Files changed by this agent: this report only

## Files Inspected

Inspected the 40 tracked HTML files currently shown by `git diff name only`: `front-matter/preface.html`; `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`; `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`; `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`; `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`; `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`; `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`; `part-3-distributed-ml/module-10-distributed-optimization/section-10.10.html`; `part-3-distributed-ml/module-11-parameter-servers-embeddings/index.html`; `part-3-distributed-ml/module-11-parameter-servers-embeddings/section-11.7.html`; `part-3-distributed-ml/module-14-federated-decentralized-learning/section-14.9.html`; `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`; `part-4-parallel-deep-learning/module-16-model-pipeline-sharded-parallelism/section-16.5.html`; `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`; `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`; `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`; `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.1.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.4.html`; `part-5-distributed-inference/module-25-distributed-retrieval-vector-search/section-25.7.html`; `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`; `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.7.html`; `part-6-multi-agent-systems/module-30-multi-agent-reinforcement-learning/section-30.10.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.6.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.7.html`; `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`; `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`; `part-7-infrastructure/module-34-edge-fog-on-device/index.html`; `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.5.html`; `part-7-infrastructure/module-35-reliable-secure-distributed-ai/section-35.6.html`; `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.6.html`; `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`; `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`; `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`; `part-8-case-studies/module-38-case-distributed-recommendation/index.html`; `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`; `part-8-case-studies/module-38-case-distributed-recommendation/section-38.7.html`; `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`; `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`; `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`.

Also inspected prompt file `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-prompts/00-chapter-lead.prompt.md` and the book-writers skill instructions.

## Top Issues

1. Preface figure depends on an untracked raster asset.
   - Location: `front-matter/preface.html`, line 159; asset path `front-matter/images/application-reference-paths.png`.
   - Old text: `<img alt="A hub-and-spoke map showing Part I as the shared foundation, with ten application paths branching out to RAG, LLM serving, foundation training, recommenders, federated medical AI, agent systems, robotics and edge fleets, streaming AI, AI data engineering, and AI cluster platforms." src="images/application-reference-paths.png"/>`
   - New text: keep the same HTML, but add `front-matter/images/application-reference-paths.png` to version control with the HTML change.
   - Why it matters: the local path resolves, but a commit that includes only tracked HTML will ship a broken Figure 0.2.
   - Tier: TIER 1 (BLOCKING).
   - Action: APPLY DIRECTLY by staging the image asset with the preface update.
   - Potential conflicts: none.

2. The `wrk2` example no longer enables latency reporting.
   - Location: `part-1-foundations/module-05-evaluating-distributed-ai/section-5.3.html`, lines 187 to 190.
   - Old text: `wrk2 -t8 -c200 -d60s -R2000 http://service:8080/predict`
   - New text: `wrk2 -t8 -c200 -d60s -R2000 -L http://service:8080/predict`
   - Old text: `#   latency report: print p50/p90/p99/p99.9 corrected for coordinated omission`
   - New text: `#   -L: print p50/p90/p99/p99.9 corrected for coordinated omission`
   - Why it matters: the surrounding section teaches latency percentiles and coordinated-omission correction, but the current command omits the latency option. The short option keeps the book style rule while preserving the runnable behavior.
   - Tier: TIER 1 (BLOCKING).
   - Action: APPLY DIRECTLY.
   - Potential conflicts: style rule against long command flags. The short option is the clean resolution.

3. Spark Connect is framed as a Spark 4 introduction, but the official Spark docs say it was introduced in Apache Spark 3.4.
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, line 248.
   - Old text: `<p>Spark 4 makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver. Spark Connect, documented in the <a href="https://spark.apache.org/docs/latest/spark-connect-overview.html" target="_blank" rel="noopener">Apache Spark Connect overview</a>, separates the client from the Spark cluster through a remote protocol. The client builds unresolved DataFrame plans, sends them to a Spark Connect server, and receives results, while the server owns analysis, optimization, execution, scheduling, and access to cluster resources. The <a href="https://spark.apache.org/docs/latest/" target="_blank" rel="noopener">Spark documentation</a> presents Connect as a way to run client applications from anywhere, and the Spark 4 line is the moment this becomes central to how Python applications embed Spark without becoming Spark drivers themselves.</p>`
   - New text: `<p>Spark Connect makes a production pattern explicit that AI platform teams were already converging on: the notebook, application server, or feature service should not have to live inside the same process as the Spark driver. The <a href="https://spark.apache.org/docs/latest/spark-connect-overview.html" target="_blank" rel="noopener">Apache Spark Connect overview</a> says Spark Connect was introduced in Apache Spark 3.4 as a decoupled client-server architecture for remote DataFrame applications. The client builds unresolved DataFrame plans, sends them to a Spark Connect server, and receives results, while the server owns analysis, optimization, execution, scheduling, and access to cluster resources. In the current Spark 4 documentation, this pattern is now part of the standard way Python applications can use Spark from notebooks, services, and application processes without becoming Spark drivers themselves.</p>`
   - Why it matters: the section is current and useful, but the first sentence overstates Spark 4 as the origin point. The replacement keeps the currency signal while matching the official chronology.
   - Tier: TIER 2 (HIGH).
   - Action: APPLY DIRECTLY.
   - Potential conflicts: Content Update Scout may prefer emphasizing Spark 4. The replacement preserves that emphasis without making Spark 4 the introduction date.

4. Preface course-path wording reintroduces course terminology in a paragraph that mostly describes the book as a reference.
   - Location: `front-matter/preface.html`, lines 181 to 182.
   - Old text: `<p>The book is larger than any single semester, by design: it supports five distinct graduate courses that share Part I and then diverge. Each course path maps to a thirteen-to-fifteen week semester and ends in the <a href="../part-8-case-studies/module-41-capstone-project-design/index.html">Chapter 41</a> capstone, where students design, build, and evaluate a distributed AI system of their own and defend its distribution axis, speedup, scaling efficiency, and cost. The five paths are Big Data Algorithms for AI, Distributed Machine Learning, Parallel Deep Learning Systems, Distributed AI and Multi-Agent Systems, and Distributed AI Infrastructure. Table 0.3 gives one path in full as a worked example; the complete week-by-week maps for all five live in the plan that accompanies this book and in the instructor materials of Section 0.8.</p>`
   - New text: `<p>The book is larger than any single semester, by design: it supports five distinct graduate teaching paths that share Part I and then diverge. Each path maps to a thirteen-to-fifteen week semester and ends in the <a href="../part-8-case-studies/module-41-capstone-project-design/index.html">Chapter 41</a> capstone, where students design, build, and evaluate a distributed AI system of their own and defend its distribution axis, speedup, scaling efficiency, and cost. The five paths are Big Data Algorithms for AI, Distributed Machine Learning, Parallel Deep Learning Systems, Distributed AI and Multi-Agent Systems, and Distributed AI Infrastructure. Table 0.3 gives one path in full as a worked example; the complete week-by-week maps for all five live in the plan that accompanies this book and in the instructor materials of Section 0.8.</p>`
   - Old text: `<div class="table-caption"><strong>Table 0.3:</strong> One example semester map, Course Path 1 (Big Data Algorithms for AI). Every path begins in Part I and ends in the Chapter 41 capstone.</div>`
   - New text: `<div class="table-caption"><strong>Table 0.3:</strong> One example semester map, Path 1 (Big Data Algorithms for AI). Every path begins in Part I and ends in the Chapter 41 capstone.</div>`
   - Why it matters: the global book style prefers part, chapter, section, reader, and book language. This paragraph can still serve instructors without making the book refer to itself through course framing.
   - Tier: TIER 3 (MEDIUM).
   - Action: APPLY DIRECTLY if the instructor-facing phrasing is not intentionally preserved.
   - Potential conflicts: front matter may deliberately retain instructor vocabulary in Section 0.5. If so, document that exception.

## Content Additions

No additional chapter content is required before integration. The new material mostly strengthens current-system coverage: MLPerf Inference v5.1, Spark Connect, AI-native data engines, dataset governance, streaming feature stores, DiLoCo-style low-communication optimization, 2D sparse parallelism, FP8 and scaling updates, GraphRAG and late interaction retrieval, generative recommendation, foundation-model robotics, MCP and A2A protocol boundaries, and MAST-style agent failure typing.

The only required non-text addition is the tracked raster asset for Figure 0.2:

Location: add `front-matter/images/application-reference-paths.png` to the same change set as `front-matter/preface.html`.

## Illustration Opportunities

1. Application reference map in the preface.
   - Type: chapter navigation map.
   - Scene description: Part I as a central foundation feeding ten named application paths, each path ending at its main case-study or deployment chapter.
   - Humor angle: none needed. This is a navigational figure.
   - Placement: already placed before Table 0.2 in `front-matter/preface.html`.
   - Integration note: make sure the PNG is tracked.

2. Spark Connect boundary in Section 7.8.
   - Type: architecture-as-boundary diagram.
   - Scene description: a Python notebook, service, and IDE on the left sending unresolved DataFrame plans to a Spark Connect server, with the Spark cluster and catalog behind it.
   - Humor angle: a tiny driver process wearing too many hats before Connect, contrasted with clear client and cluster roles after Connect.
   - Placement: after the revised Spark Connect paragraph and before Code 7.8.4.
   - Tier: TIER 3 (MEDIUM).

## Verification Run

- Ran `git status short`: confirmed 40 tracked HTML files are modified, plus untracked `.book-update/`, `.book-writers/`, and `front-matter/images/application-reference-paths.png`.
- Ran `git diff stat`: confirmed 489 insertions and 88 deletions across tracked HTML files.
- Ran a whitespace diff check: no whitespace errors reported, only CRLF normalization warnings.
- Ran a local relative-link and image-path check across changed files: no missing local targets on disk.
- Checked whether `front-matter/images/application-reference-paths.png` is tracked: file exists locally but is not tracked.
- Scanned added lines for em dashes, en dashes, and spaced double hyphens: no matches found.
- Scanned added lines for banned phrases: no matches found.
- Checked fast-moving primary references:
  - MLCommons MLPerf Inference v5.1 release, September 9, 2025: https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/
  - Apache Spark Connect overview: https://spark.apache.org/docs/latest/spark-connect-overview.html
  - Model Context Protocol specification dated 2025-06-18: https://modelcontextprotocol.io/specification/2025-06-18
  - A2A latest specification: https://a2a-protocol.org/latest/specification/
  - PyTorch 2D sparse parallelism blog: https://pytorch.org/blog/scaling-recommendation-2d-sparse-parallelism/

## Verification Suggestions

1. Stage or otherwise include `front-matter/images/application-reference-paths.png`, then rerun the local relative-link and image-path check.
2. After applying the `wrk2` fix, run a focused text check for `wrk2 -t8 -c200 -d60s -R2000 -L` in Section 5.3.
3. After applying the Spark Connect wording fix, confirm Section 7.8 still cites the official Spark Connect page and no longer implies Spark 4 introduced Connect.
4. Run the book style scan over changed lines again for em dashes, en dashes, spaced double hyphens, and banned phrases.
5. Render `front-matter/preface.html`, `section-5.3.html`, and `section-7.8.html` in a browser to verify Figure 0.2, the `wrk2` code block, and the Spark Connect insertion fit the page layout.

## Blockers

No blocker prevented this report. The only blocking integration issue is the untracked image asset referenced by Figure 0.2.

## Summary

The new material is directionally coherent and improves the book's currency without broad scope drift. The high-priority integration fixes are concrete: include the referenced preface image, restore latency reporting in the `wrk2` example using the short option, and correct the Spark Connect chronology.

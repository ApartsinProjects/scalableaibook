# Application Reference Audit, Scaling Out AI, full book, 2026-06-18

Scope: audit whether the book can serve as a main reference for researchers and developers building ten high-value distributed AI application categories.

Method: I mapped the book section inventory from local HTML, searched local coverage for frontier terms, and scouted recent public sources from 2024 to 2026. This report is read-only. No book content was changed.

Overall verdict: the book is already strong as a graduate systems reference. Its first-principles coverage of distribution axes, communication, data systems, distributed optimization, parallel training, serving, retrieval, federated learning, multi-agent systems, edge, reliability, and case studies is enough for serious developers. To become a main reference for leading researchers in the ten application areas, it needs targeted frontier packets: short but deep additions that name the newest architectural patterns, provide one quantitative model or worked example, add current systems or papers to the bibliography, and connect the topic back to the book spine.

Priority legend:

P0 means credibility or frontier relevance gap for 2026 readers.

P1 means important application depth gap.

P2 means useful bibliography, figure, or exercise enrichment.

## 1. Enterprise RAG and Knowledge Assistants

Specific applications: legal research copilots, internal engineering documentation search, policy Q&A, enterprise support assistants, graph-grounded analyst assistants.

Current coverage: strong. Chapters 25, 36, and 40 cover distributed retrieval, vector search, RAG pipelines, latency budgets, and agentic applications. The book already teaches the distributed anatomy of RAG better than most generic RAG materials.

Main gaps:

1. P0, add GraphRAG and agentic RAG as first-class production patterns.
   Placement: Section 25.7 or 36.6, with a short forward link to Chapter 40.
   Need: explain when flat dense retrieval fails, especially global questions, multi-hop reasoning, and relational private corpora. Add a small pipeline diagram: extraction, graph construction, community summaries, hybrid graph plus vector retrieval, LLM answer.
   Sources: [Microsoft GraphRAG project](https://www.microsoft.com/en-us/research/project/graphrag/), [GraphRAG docs](https://microsoft.github.io/graphrag/), [Agentic RAG survey](https://arxiv.org/html/2501.09136v4).

2. P1, add governed enterprise RAG.
   Placement: Section 25.1 and Chapter 36 evaluation section.
   Need: access-control filtering before retrieval, metadata governance, freshness SLAs, citation traceability, prompt-injection and data-poisoning threat model.
   Sources: [IBM RAG overview](https://www.ibm.com/think/topics/retrieval-augmented-generation), [Atlan RAG 2026 overview](https://atlan.com/know/what-is-rag/).

3. P1, add late-interaction and reranking as the bridge between vector retrieval and generation.
   Placement: Section 25.4 or 36.6.
   Need: compare BM25, dense retrieval, ColBERT-style late interaction, cross-encoder reranking, and graph retrieval under the same latency budget.

Reference readiness after additions: high. The book would be suitable as a main RAG systems reference, not merely an introduction.

## 2. Distributed LLM Serving Platforms

Specific applications: chat model APIs, coding assistants, private model gateways, multi-tenant inference platforms, agentic model serving with long sessions.

Current coverage: strong. Chapters 22 to 26 cover per-node inference efficiency, distributed inference systems, LLM serving, retrieval, and MLOps.

Main gaps:

1. P0, deepen prefill and decode disaggregation.
   Placement: Sections 24.5 and 24.6.
   Need: separate TTFT and TPOT as first-class SLOs, show why prefill is compute-bound and decode is memory-bound, model two-pool capacity planning, add a simple scheduler exercise.
   Sources: [vLLM disaggregated prefilling docs](https://docs.vllm.ai/en/latest/features/disagg_prefill/), [BentoML prefill-decode disaggregation](https://bentoml.com/llm/inference-optimization/prefill-decode-disaggregation), [DistServe retrospective](https://haoailab.com/blogs/distserve-retro/), [multi-round disaggregated serving paper](https://arxiv.org/html/2602.14516v1).

2. P0, update serving evaluation with MLPerf Inference v5.1.
   Placement: Chapter 5 and Chapter 24 evaluation sections.
   Need: include interactive LLM serving benchmarks, DeepSeek-R1, Llama 3.1 8B, Whisper Large V3, and lower-latency agentic scenarios.
   Source: [MLCommons Inference v5.1](https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/).

3. P1, add modern KV-cache management beyond paging.
   Placement: Sections 22.5 and 24.4.
   Need: compression, eviction, attention sinks, prefix sharing, cache migration cost, session-aware routing.

4. P1, refresh speculative decoding.
   Placement: Section 22.7.
   Need: EAGLE-style draft features, Medusa-style heads, acceptance-rate model, interaction with batching and cache residency.

Reference readiness after additions: very high. The book is already close; the missing frontier is mainly modern serving architecture detail.

## 3. Foundation Model Training Infrastructure

Specific applications: LLM pretraining, MoE training, multimodal foundation model training, RLHF and RLVR post-training, large-scale fine-tuning.

Current coverage: strong. Parts III and IV give the training spine: distributed optimization, parameter servers, data parallelism, tensor and pipeline parallelism, sharding, MoE, fault tolerance, foundation models, RL infrastructure, and HPO.

Main gaps:

1. P0, add FP8 and MXFP8 training.
   Placement: Section 15.8 or Chapter 16.
   Need: explain FP8 formats, block scaling, accumulation precision, Hopper and Blackwell hardware dependency, and what changes in communication and memory budgets.
   Sources: [DeepSeek-V3 technical report](https://arxiv.org/pdf/2412.19437), [PyTorch MXFP8 and TorchTitan post](https://pytorch.org/blog/enabling-up-to-41-faster-pre-training-mxfp8-and-deepep-for-deepseek-v3-on-b200-with-torchtitan/).

2. P0, add FSDP2, DTensor, and TorchTitan.
   Placement: Section 16.5.
   Need: contrast FSDP1 and FSDP2, per-parameter sharding, composition with tensor parallelism, activation checkpointing, and reproducible training recipes.
   Source: [TorchTitan paper](https://arxiv.org/abs/2410.06511).

3. P0, add RLVR and GRPO-style distributed post-training.
   Placement: Chapter 20.
   Need: separate rollout generation, reward verification, policy update, weight resharding, and inference-engine-in-the-loop with vLLM or SGLang.
   Sources: [verl project](https://github.com/verl-project/verl), [vLLM and OpenRLHF](https://vllm.ai/blog/2025-04-23-openrlhf-vllm), [Anyscale RL libraries overview](https://www.anyscale.com/blog/open-source-rl-libraries-for-llms).

4. P1, add low-communication and geo-distributed training as a mature research branch.
   Placement: Sections 10.7, 10.10, 18.8, and 19.8.
   Need: DiLoCo lineage, Streaming DiLoCo, over-the-internet training, when local steps beat exact all-reduce.

Reference readiness after additions: high for training systems researchers. Without them, it remains a strong 2023 to 2024 baseline but not fully frontier-current.

## 4. Large-Scale Recommendation Systems

Specific applications: social feeds, video recommendations, ads ranking, e-commerce retrieval and ranking, generative recommenders.

Current coverage: strong but conventional. Chapters 8, 9, 11, 23, 26, and 38 cover data loading, streaming, embeddings, feature stores, retrieval, ranking, serving, and distributed recommendation case design.

Main gaps:

1. P0, add generative recommendation with semantic IDs.
   Placement: Chapter 38, preferably after candidate retrieval and before final architecture.
   Need: explain how semantic item IDs convert recommendation into sequence generation, how this changes retrieval and ranking, and why scaling laws now matter for recommender systems.
   Sources: [Meta HSTU paper](https://arxiv.org/pdf/2402.17152), [Meta generative recommenders repo](https://github.com/meta-recsys/generative-recommenders), [Spotify semantic IDs article](https://research.atspotify.com/2025/9/semantic-ids-for-generative-search-and-recommendation), [Generative recommendation survey](https://arxiv.org/html/2510.27157v1).

2. P1, add modern embedding-table training and serving systems.
   Placement: Chapter 11 and Section 38.2.
   Need: 2D sparse parallelism, table-wise and row-wise sharding, hot-key handling, sparse all-to-all, training-serving consistency.

3. P1, add online recommender evaluation under freshness and feedback loops.
   Placement: Sections 9.7, 26.5, and 38.8.
   Need: delayed labels, counterfactual logging, exploration, drift, guardrail metrics, real-time feature correctness.

Reference readiness after additions: high. The current chapter is excellent for classic distributed recommenders but underrepresents the 2024 to 2026 generative recommender turn.

## 5. Federated Medical and Regulated AI

Specific applications: cross-hospital sepsis prediction, radiology model tuning, federated clinical LLMs, pharma collaboration, privacy-preserving medical imaging.

Current coverage: strong. Chapter 14 gives the federated-learning theory and Chapter 37 gives a medical case study. Chapter 35 covers reliability, security, and governance.

Main gaps:

1. P0, add federated foundation models and FedLoRA.
   Placement: Sections 14.8 and Chapter 37.
   Need: PEFT under federation, heterogeneous LoRA ranks, client capability variation, clinical foundation models, communication and privacy trade-offs.
   Sources: [federated foundation models in biomedical healthcare survey](https://pmc.ncbi.nlm.nih.gov/articles/PMC11700470/), [FedLoRA survey](https://arxiv.org/abs/2505.13502), [foundation models in medicine survey](https://arxiv.org/html/2406.10729v3).

2. P0, add attack and defense framing beyond secure aggregation.
   Placement: Section 14.6 and Chapter 35.
   Need: gradient inversion, membership inference, poisoning, Byzantine clients, secure aggregation limitations, audit logs, privacy budgets, differential privacy under repeated training.

3. P1, add concrete regulatory map.
   Placement: Chapter 37 introduction or deployment section.
   Need: HIPAA, GDPR, EU AI Act high-risk obligations, FDA clinical AI device pathway, model update control, site-level auditability.

Reference readiness after additions: high for regulated AI developers and applied clinical researchers. The book already has the right skeleton, but the foundation-model and regulatory layers need to be explicit.

## 6. Autonomous Multi-Agent Systems

Specific applications: agentic software teams, supply-chain agent systems, trading-agent simulations, distributed LLM agents, tool-using agent services.

Current coverage: strong classical base. Chapters 27 to 32 cover DAI, game theory, MAS, MARL, swarms, and LLM agent orchestration. Chapter 40 gives an agentic LLM case.

Main gaps:

1. P0, add MAST and modern failure taxonomy for multi-agent LLM systems.
   Placement: Sections 32.9 and 32.10.
   Need: taxonomy of failures, context collapse, task misinterpretation, inter-agent misalignment, verification failure, single-agent and best-of-N baselines.
   Sources: [MAST paper](https://arxiv.org/pdf/2503.13657), [Berkeley MAST page](https://sky.cs.berkeley.edu/project/mast/), [MAST GitHub repository](https://github.com/multi-agent-systems-failure-taxonomy/MAST).

2. P0, add context engineering as the systems layer for agents.
   Placement: Section 32.7.
   Need: what goes into context, memory compaction, scratchpad isolation, shared state, provenance, tool results, bounded context as a distributed systems resource.

3. P1, add agent protocols and interoperability.
   Placement: Section 32.8 and Chapter 40.
   Need: MCP, agent-to-agent protocols, tool contracts, schema validation, human-in-the-loop checkpoints.

4. P1, connect MARL and LLM agents.
   Placement: bridge paragraph between Chapters 30 and 32.
   Need: when agent behavior is prompted, optimized, simulated, or trained with verifiable rewards.

Reference readiness after additions: high. The book is rare in connecting classical MAS to LLM agents; adding failure taxonomy and context engineering makes it current for 2026 researchers.

## 7. Robotics, Swarms, and Edge AI Fleets

Specific applications: warehouse robots, drone swarms, industrial inspection robots, agricultural robotics, on-device VLM or LLM robots, edge sensor fleets.

Current coverage: strong. Chapters 30, 31, 34, 35, and 39 cover MARL, swarms, edge and fog, reliability, security, and multi-agent robotics.

Main gaps:

1. P0, add robot foundation models and VLA policies.
   Placement: Sections 34.3, 39.5, and 39.8.
   Need: foundation-model role split, high-level planning versus low-level control, VLA policy serving, latency and safety budgets, simulation-to-real data loops.
   Sources: [foundation model robotics review](https://arxiv.org/html/2507.10087v1), [LLMs for multi-robot systems survey](https://link.springer.com/article/10.1007/s10514-026-10257-4), [robotic foundation model overview](https://www.emergentmind.com/topics/robot-foundation-models-rfms).

2. P1, add edge generative AI hardware.
   Placement: Chapter 34.
   Need: mobile NPUs, Jetson-class deployment, on-device LLM/VLM inference, split compute, energy budget, offline autonomy.

3. P1, add swarm evaluation and safety.
   Placement: Chapters 31 and 39.
   Need: collision risk, emergent instability, coverage guarantees, bandwidth-constrained coordination, human override, degraded-mode operation.

Reference readiness after additions: high for distributed robotics systems. The current book is strong on multi-agent coordination but should name the foundation-model robotics shift directly.

## 8. Real-Time Streaming AI Systems

Specific applications: fraud detection, cyber anomaly detection, online personalization, industrial monitoring, observability intelligence, real-time risk scoring.

Current coverage: strong. Chapters 8, 9, 23, 26, 35, and 38 cover storage, streaming, online serving, MLOps, reliability, and recommender feature paths.

Main gaps:

1. P1, add modern streaming feature stores as a named architecture.
   Placement: Sections 9.7, 26.3, and 38.5.
   Need: offline plus online store, point-in-time correctness, streaming writes, backfills, feature freshness, exact train-serve parity.
   Sources: [Databricks feature store guide](https://www.databricks.com/blog/what-feature-store-complete-guide-ml-feature-engineering), [Hopsworks feature store dictionary](https://www.hopsworks.ai/dictionary/feature-store).

2. P1, add drift-aware real-time fraud detection.
   Placement: Sections 9.6, 26.6, and 35.7.
   Need: concept drift, graph features, temporal sequence models, false-positive cost, delayed labels, alert fatigue.
   Sources: [real-time fraud streaming paper](https://jrtcse.com/index.php/home/article/view/JRTCSE.2025.13.1.9), [financial fraud ML survey](https://www.mdpi.com/1999-4893/19/5/354), [Coursera fraud detection overview](https://www.coursera.org/articles/ai-in-fraud-detection).

3. P2, add one end-to-end streaming AI lab.
   Placement: Appendix B or Chapter 9 exercises.
   Need: Kafka or file-stream simulator, windowed feature generation, online model call, drift monitor, replay.

Reference readiness after additions: medium-high. The streaming foundations are good, but application-specific feature store and fraud patterns need more explicit treatment.

## 9. AI Data Engineering and Multimodal Data Pipelines

Specific applications: web-scale data cleaning, image and video preprocessing, embedding generation, dataset deduplication, synthetic-data filtering, LLM corpus curation.

Current coverage: strong for classic data systems. Chapters 6 to 9 and 36 cover MapReduce, Spark, storage, data loading, streaming, crawling, cleaning, indexing, and embedding pipelines.

Main gaps:

1. P0, add Ray Data, Daft, and Lance as AI-native data systems.
   Placement: Chapters 7 and 8.
   Need: explain why multimodal workloads stress Spark-style row and SQL abstractions, how Ray Data handles CPU/GPU pipelines, how Daft targets multimodal dataframes, how Lance provides random access and vector-native layout.
   Sources: [Ray Data docs](https://docs.ray.io/en/latest/data/data.html), [Ray Data and Daft benchmark](https://www.anyscale.com/blog/ray-data-daft-benchmarking-multimodal-ai-workloads), [Eventual AI multimodal benchmark](https://www.eventual.ai/blog/benchmarks-for-multimodal-ai-workloads), [LanceDB vector search docs](https://docs.lancedb.com/search/vector-search).

2. P1, add modern vector-index compression and billion-scale search.
   Placement: Section 25.4 and Chapter 36.
   Need: DiskANN, GPU-accelerated Vamana, RaBitQ, recall monitoring, update cost, memory versus latency trade-off.
   Sources: [Microsoft DiskANN project](https://www.microsoft.com/en-us/research/project/project-akupara-approximate-nearest-neighbor-search-for-large-scale-semantic-search/), [LanceDB RaBitQ post](https://www.lancedb.com/blog/feature-rabitq-quantization), [NVIDIA cuVS vector search post](https://developer.nvidia.com/blog/optimizing-vector-search-for-indexing-and-real-time-retrieval-with-nvidia-cuvs/).

3. P1, add dataset governance for foundation-model corpora.
   Placement: Chapter 8 and Chapter 36.
   Need: lineage, licensing metadata, contamination checks, deduplication across modalities, data removal, reproducible corpus manifests.

Reference readiness after additions: high. The book teaches the durable data primitives, but leading AI data engineers will expect these newer systems by name.

## 10. AI Cluster Platforms and Internal AI Clouds

Specific applications: GPU cluster schedulers, Kubernetes AI platforms, Slurm and Kubernetes hybrids, Ray clusters, managed training and inference platforms, internal model clouds.

Current coverage: strong. Chapters 33 to 35 are directly targeted at infrastructure, scheduling, edge, reliability, and security. Parts IV and V supply the workloads these platforms run.

Main gaps:

1. P0, add Kubernetes Dynamic Resource Allocation.
   Placement: Sections 33.3 and 33.6.
   Need: contrast old integer GPU device plugins with DRA device classes and resource claims, topology-aware allocation, MIG, multi-node NVLink, and accelerator sharing.
   Sources: [Kubernetes DRA docs](https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/), [Google Cloud DRA post](https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-device-management-with-dra-dynamic-resource-allocation).

2. P0, add Kueue and KAI Scheduler.
   Placement: Sections 33.4 and 33.5.
   Need: queue admission, quota borrowing, gang scheduling, topology-aware placement, fractional GPU scheduling, hierarchical queues.
   Sources: [KAI Scheduler GitHub](https://github.com/kai-scheduler/KAI-Scheduler), [CoreWeave Kueue post](https://www.coreweave.com/blog/kueue-a-kubernetes-native-system-for-ai-training-workloads), [CIO GPU scheduling overview](https://www.cio.com/article/4152554/how-kubernetes-is-finally-solving-the-gpu-utilization-crisis-to-save-your-ai-budget.html).

3. P0, add GPU confidential computing.
   Placement: Sections 35.3 and 35.7.
   Need: remote attestation, encrypted VRAM, protected inference, protected training, limitations and performance cost, relevance to healthcare and finance.
   Sources: [NVIDIA confidential computing](https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/), [GPU confidential computing paper](https://arxiv.org/html/2507.02770v1), [Red Hat confidential containers with NVIDIA GPUs](https://www.redhat.com/en/blog/ai-meets-security-poc-run-workloads-confidential-containers-using-nvidia-accelerated-computing).

4. P1, add Blackwell and rack-scale NVLink domains.
   Placement: Sections 1.3, 3.8, 33.1, and 33.2.
   Need: show how rack-scale scale-up domains blur the boundary between node and cluster, then preserve the book thesis by explaining where scale-out begins again.

Reference readiness after additions: very high. The book already has one of the strongest infrastructure arcs; the update needed is currency around Kubernetes and hardware generations.

## Cross-Application Additions

These changes support several application categories at once.

1. Add an application-to-chapter matrix in the Preface.
   Placement: front-matter preface or a new "How to Use This Book by Application" page.
   Content: rows for the ten application areas, columns for required chapters, optional chapters, and capstone path.
   Benefit: makes the book visibly usable as a reference, not only a course text.

2. Add one "Frontier packet" per high-velocity chapter.
   Placement: Chapters 7, 8, 10, 14, 16, 20, 22, 24, 25, 32, 33, 35, 36, 37, 38, 39, 40.
   Structure: one paragraph of why it matters, one diagram or table, one code or cost model when useful, three references, one exercise.
   Benefit: avoids bloating every section while keeping researchers current.

3. Add a "Researcher checklist" to each case-study chapter.
   Placement: Chapters 36 to 41.
   Content: unresolved research questions, benchmark gaps, threat model, reproducibility artifacts, common invalid comparisons.
   Benefit: raises the book from developer reference to research reference.

4. Add a "Construct-matched evaluation" callout in application chapters.
   Placement: Chapters 5, 24, 25, 26, 36, 37, 38, 40, 41.
   Content: compared numbers must be co-computed on the same model, panel, split, seed, load profile, and budget whenever a performance claim is made.
   Benefit: prevents invalid cross-config comparisons in system evaluation.

5. Add a bibliography refresh pass after content updates.
   Placement: per-chapter "Where to Read More."
   Content: prioritize primary sources, official docs, and well-cited surveys. Avoid vendor-only claims unless paired with paper or official docs.

## Proposed Work Plan

Phase 1, application-frontier outline pass:

1. Create the application-to-chapter matrix in front matter.
2. Add a one-page "Reference Paths by Application" page.
3. Add per-application coverage notes to Chapter 41 capstone.

Phase 2, high-priority frontier packets:

1. RAG: GraphRAG, agentic RAG, governed enterprise retrieval.
2. LLM serving: prefill-decode disaggregation, modern KV cache management, MLPerf Inference v5.1.
3. Training: FP8 and MXFP8, FSDP2 and TorchTitan, RLVR and GRPO infrastructure.
4. Recommenders: HSTU-style generative recommendation and semantic IDs.
5. Federated medical AI: FedLoRA, federated foundation models, gradient inversion and regulated deployment.
6. Agents: MAST, context engineering, agent protocol interoperability.
7. Infrastructure: DRA, Kueue, KAI Scheduler, confidential GPU computing.

Phase 3, medium-priority application depth:

1. Robotics: VLA policies, robot foundation models, edge generative AI.
2. Streaming AI: streaming feature stores, drift-aware fraud detection, replay lab.
3. AI data engineering: Ray Data, Daft, Lance, RaBitQ, DiskANN and GPU vector indexing.

Phase 4, verification pass:

1. Re-run keyword coverage for the frontier topics.
2. Check all added URLs with a link checker.
3. Run consistency check for terminology and cross-references.
4. Run build validation for HTML and APK wrappers.

Agent execution estimate:

1. Plan refinement only: about 10 to 20 minutes.
2. Applying Phase 1 and Phase 2 edits: about 2 to 4 hours of agent execution, plus local HTML build checks.
3. Full Phase 1 to Phase 4: about 5 to 8 hours of agent execution, depending on citation verification and build times.
4. Local compute cost: near zero. External cost: none unless image generation, cloud tests, or Batch API rewriting is requested.

## Final Assessment

The book can already support researchers and developers across the ten application categories as a systems foundation. The limiting factor is not depth of fundamentals. The limiting factor is frontier coverage in fast-moving application layers. With the packets above, the book would be credibly positioned as a main reference for distributed AI application builders, especially those working on RAG, LLM serving, large-model training, federated medical AI, recommender systems, agentic systems, robotics fleets, streaming AI, multimodal data pipelines, and AI cluster platforms.

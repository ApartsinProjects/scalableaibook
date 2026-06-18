## Terminology Report

Agent: 12, Terminology and Notation Keeper
Mode: suggest
Scope: new material currently visible in the working git diff

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
- `BOOK_CONFIG.md`

### Files Changed

None. This agent is running in suggest mode and did not edit book HTML.

### Inconsistencies Found

1. RAG is used as a reader-facing acronym in new Preface material before the new application-path paragraph expands it.
   - Standardize to: retrieval-augmented generation (RAG) on first use in the new application-path paragraph, then RAG afterward.
   - Occurrences to fix:
     * `front-matter/preface.html`, line 157: old: `it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher` new: `it tells a retrieval-augmented generation (RAG) engineer, a cluster-platform engineer, or a multi-agent researcher`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

2. DRA appears in the Preface application-path table without expansion.
   - Standardize to: Kubernetes Dynamic Resource Allocation (DRA) on first use.
   - Occurrences to fix:
     * `front-matter/preface.html`, line 177: old: `GPU scheduling, gang placement, DRA-style accelerator allocation, confidential computing, and production reliability.` new: `GPU scheduling, gang placement, Kubernetes Dynamic Resource Allocation (DRA) style accelerator allocation, confidential computing, and production reliability.`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

3. SLA appears in the streaming feature store addition without expansion.
   - Standardize to: service-level agreement (SLA) on first use in the section.
   - Occurrences to fix:
     * `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.7.html`, line 102: old: `freshness SLA, entity key, event timestamp, backfill plan, and online materialization path are one registered object.` new: `freshness service-level agreement (SLA), entity key, event timestamp, backfill plan, and online materialization path are one registered object.`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

4. GRPO appears in new RLVR material and table title without expansion in the new added block.
   - Standardize to: Group Relative Policy Optimization (GRPO) on first use in the added block, then GRPO afterward.
   - Occurrences to fix:
     * `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`, line 161: old: `methods in the lineage of GRPO and the open reasoning-model efforts of 2025` new: `methods in the lineage of Group Relative Policy Optimization (GRPO) and the open reasoning-model efforts of 2025`
     * `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`, line 164: old: `RLVR and GRPO Pipeline Anatomy` new: `RLVR and Group Relative Policy Optimization Pipeline Anatomy`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

5. Dataset card terminology drifts between `Data Cards`, `dataset-card`, and `dataset card`.
   - Standardize to: `Data Cards` only for the named paper or structure, and `dataset card` for the generic artifact.
   - Occurrences to fix:
     * `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, line 239: old: `Hugging Face dataset-card convention` new: `Hugging Face dataset card convention`
     * `part-5-distributed-inference/module-26-mlops-distributed-ai/section-26.3.html`, line 245: old: `dataset-card documentation` new: `dataset card documentation`
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

6. PEFT and DP are introduced in the federated medical case study table as acronyms without expansion in that table.
   - Standardize to: parameter-efficient fine-tuning (PEFT), differential privacy (DP).
   - Occurrences to fix:
     * `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`, line 274: old: `FedLoRA / PEFT federation` new: `FedLoRA / parameter-efficient fine-tuning (PEFT) federation`
     * `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`, line 279: old: `Adapters expose narrower task-specific deltas, but still need secure aggregation and DP` new: `Adapters expose narrower task-specific deltas, but still need secure aggregation and differential privacy (DP)`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

7. PCCP appears in the regulatory table label before the table text expands the phrase.
   - Standardize to: predetermined change-control plan (PCCP) at first use.
   - Occurrences to fix:
     * `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`, line 106: old: `FDA AI-enabled device PCCP guidance` new: `FDA AI-enabled device predetermined change-control plan (PCCP) guidance`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Fact Integrity may want the exact capitalization checked against the FDA title.

8. PHI is used after `Protected health information` without explicitly binding the acronym in the same cell.
   - Standardize to: protected health information (PHI) on first use.
   - Occurrences to fix:
     * `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`, line 103: old: `Protected health information stays inside covered entities and electronic PHI is protected by administrative, physical, and technical safeguards.` new: `Protected health information (PHI) stays inside covered entities and electronic PHI is protected by administrative, physical, and technical safeguards.`
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

9. HSTU appears in the recommendation chapter index before the section body expands it.
   - Standardize to: Hierarchical Sequential Transduction Unit (HSTU) on first use.
   - Occurrences to fix:
     * `part-8-case-studies/module-38-case-distributed-recommendation/index.html`, line 76: old: `Explain how generative recommenders use semantic IDs and HSTU-style sequence models as candidate sources, and evaluate them against ANN, graph, and recency sources under one online experiment contract.` new: `Explain how generative recommenders use semantic IDs and Hierarchical Sequential Transduction Unit (HSTU) style sequence models as candidate sources, and evaluate them against ANN, graph, and recency sources under one online experiment contract.`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

10. Semantic ID appears both as the noun `semantic ID` and as the hyphenated modifier `semantic-ID source`. The hyphenated modifier is defensible, but the chapter reads more consistently if the canonical term remains `semantic ID` throughout reader-facing prose.
   - Standardize to: semantic ID.
   - Occurrences to fix:
     * `part-8-case-studies/module-38-case-distributed-recommendation/index.html`, line 103: old: `generative semantic-ID candidates` new: `generative semantic ID candidates`
     * `part-8-case-studies/module-38-case-distributed-recommendation/section-38.3.html`, line 227: old: `the generated semantic-ID source adds value` new: `the generated semantic ID source adds value`
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

11. MAST is introduced in the Chapter 40 case study without expansion in that section, even though Chapter 32 expands it.
   - Standardize to: Multi-Agent Systems Failure Taxonomy (MAST) on first use in Chapter 40.
   - Occurrences to fix:
     * `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.9.html`, line 214: old: `The MAST failure taxonomy gives the label set:` new: `The Multi-Agent Systems Failure Taxonomy (MAST) gives the label set:`
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: None.

### Notation Issues

No blocking notation conflicts found in the added material. The main symbols introduced in new text, including $W_0$, $A_k$, $B_k$, $r_k$, $d$, $m$, $\lambda$, $S$, $G$, $H$, $N$, and top-$k$, are locally interpretable and do not reuse a symbol for a conflicting concept inside the same added block.

### Glossary Entries Needed

1. Corpus governance manifest.
   - Insert at: Appendix C glossary, if this new material is promoted into a glossary update pass.
   - Draft definition: `Corpus governance manifest: A machine-readable record attached to a dataset or corpus snapshot that captures source, license or terms, collection date, filtering recipe, deduplication recipe, contamination checks, opt-out or removal process, and related policy facts. It complements a content hash by recording what the organization is allowed to do with the data.`
   - Tier: TIER 3 (MEDIUM)

2. Context engineering.
   - Insert at: Appendix C glossary, if this new material is promoted into a glossary update pass.
   - Draft definition: `Context engineering: The systems discipline of selecting, compressing, routing, validating, and preserving provenance for the information that enters an LLM or multi-agent system's inference context.`
   - Tier: TIER 3 (MEDIUM)

3. Semantic ID.
   - Insert at: Appendix C glossary, if this new material is promoted into a glossary update pass.
   - Draft definition: `Semantic ID: A compact learned identifier for an item, usually derived from item embeddings, whose token sequence carries catalog structure and can be generated by a recommender or retrieval model.`
   - Tier: TIER 3 (MEDIUM)

### Verification Run

- Read the complete `book-writers` skill instructions.
- Read the full Agent 12 prompt file.
- Listed changed files from the working diff.
- Inspected added diff hunks across all changed HTML files.
- Searched changed files for acronym and terminology patterns, including RAG, GraphRAG, DRA, MCP, A2A, RLVR, GRPO, MAST, HSTU, semantic ID, SLA, PEFT, DP, PHI, PCCP, dataset card, and corpus manifest.
- Cross-checked chapter structure and terminology conventions against `BOOK_CONFIG.md`.

### Verification Suggestions

1. After integration applies the suggested fixes, rerun an acronym first-use scan on changed files for capitalized sequences of two or more letters.
2. Rerun a targeted terminology scan for `dataset-card`, `semantic-ID`, `DRA-style`, `PCCP`, `PEFT`, `DP`, `SLA`, `GRPO`, and `MAST`.
3. In the next glossary pass, add the three glossary drafts above only if Appendix C is being updated in the same integration batch.

### Blockers

None.

### Summary

NEEDS STANDARDIZATION. The added material is technically coherent and uses book-wide terminology well overall, but several new acronym-heavy frontier updates need first-use expansion or minor casing cleanup before integration. No book HTML was edited.

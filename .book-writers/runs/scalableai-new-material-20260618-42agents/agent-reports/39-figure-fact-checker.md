## 39-Figure-Fact-Checker Report

Mode: suggest

Scope: figures, diagrams, tables, captions, and visuals touched by the current working diff only.

### Files Inspected

- `front-matter/preface.html`
- `front-matter/images/application-reference-paths.png`
- `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, diff had only prose mentions of table control planes, no changed visual block.
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`
- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`
- `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`
- `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`
- `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`
- `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`
- `part-8-case-studies/module-36-case-web-scale-text-rag/section-36.8.html`, diff had only a prose recommendation to add columns to an existing table, no changed visual block.
- `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`
- `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`

### Top Issues

1. Figure 0.2 is not referenced in surrounding prose
   - Location: `front-matter/preface.html`, paragraph before the new Figure 0.2, line 157.
   - Old text: `The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Table 0.2 names the ten common paths and points to the chapters that carry the design load. The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text.`
   - New text: `The book can also be read as a reference for application builders. In that mode, start with Part I, then follow the application path whose system you are building. Figure 0.2 shows the same idea as a hub-and-spoke map, with Part I as the shared foundation and ten application spines branching out from it. Table 0.2 then names the ten common paths and points to the chapters that carry the design load. The table is deliberately application-oriented: it tells a RAG engineer, a cluster-platform engineer, or a multi-agent researcher where the book becomes their main reference rather than a general background text.`
   - Why it matters: The figure has alt text and a caption, but the figure-fact-check contract requires every visual element to be referenced from prose.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: none.

2. FP8 comparison table is unnumbered and lacks the normal table-caption pattern
   - Location: `part-4-parallel-deep-learning/module-15-data-parallel-deep-learning/section-15.8.html`, immediately after the FP8 research-frontier callout, lines 212 to 224.
   - Old text: `<div class="comparison-table-title">FP8 Deployment Checklist</div>`
   - New text: `<div class="comparison-table-title">Table 15.8.2: FP8 Deployment Checklist</div>`
   - Additional prose insertion before the comparison table: `Table 15.8.2 turns the FP8 discussion into a deployment checklist: use FP8 or MXFP8 only when the hardware, scaling granularity, accumulator path, and distributed bottleneck all make the lower precision pay off.`
   - Why it matters: The table content is technically sound, but the visual is not numbered as a table and is not referenced in prose. This weakens integration with the rest of the section.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: coordinate with any table-numbering pass in Chapter 15.

3. RLVR and GRPO comparison table is unnumbered and lacks an explicit prose reference
   - Location: `part-4-parallel-deep-learning/module-20-distributed-rl-infrastructure/section-20.9.html`, immediately after the RL for reasoning research-frontier callout, lines 163 to 177.
   - Old text: `<div class="comparison-table-title">RLVR and GRPO Pipeline Anatomy</div>`
   - New text: `<div class="comparison-table-title">Table 20.9.2: RLVR and GRPO Pipeline Anatomy</div>`
   - Additional prose insertion before the comparison table: `Table 20.9.2 makes the rollout-bound pipeline concrete: prompt fanout and reward verification feed grouped advantages, a sharded policy update, and a weight-resharding path back into the rollout engines.`
   - Why it matters: The table accurately reflects the systems stages described by the preceding paragraph, but it is not numbered or named from prose. It should be integrated like the other visual tables in the chapter.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: coordinate with any table-numbering pass in Chapter 20.

4. Figure 0.2 raster title is slightly inconsistent with the caption and book title
   - Location: `front-matter/images/application-reference-paths.png`, visible title text.
   - Old visible text: `Application Reference Paths Through Scaling Out AI`
   - New visible text: `Application Reference Paths Through Building Scalable AI`
   - Why it matters: The caption says the figure shows paths "through the book", while the visible title uses "Scaling Out AI". That phrase is a valid thesis phrase in the preface, so this is not a factual error, but the title would be clearer if it matched the book name.
   - Tier: TIER 3 (MEDIUM)
   - Action: SEND FOR REVIEW
   - Potential conflicts: requires regenerating or editing the raster image.

### Verified Visuals and Tables

- `front-matter/preface.html`, Figure 0.2: The PNG exists at `front-matter/images/application-reference-paths.png`, has a non-empty `alt` attribute, has a descriptive caption, and visually shows the ten application paths listed in Table 0.2. The path chapter sets match the table rows, allowing order differences.
- `front-matter/preface.html`, Tables 0.2, 0.3, and 0.4: Renumbering is sequential after inserting the new application-path table. The prose references Table 0.2, Table 0.3, and Table 0.4 correctly.
- `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.9.html`, Table 8.9.2: Captioned and placed after the governance-manifest discussion. The entries are conceptually accurate for corpus governance and attach policy facts to snapshot identity.
- `part-2-distributed-data/module-09-stream-processing-online-ai/section-9.9.html`, Table 9.9.1: Captioned and referenced. The drift-signal taxonomy separates population shift, score drift, operational changes, delayed fraud labels, and reviewer disagreement in a factually coherent way.
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.5.html`, Table 22.5.2: Captioned. KV-cache policy rows are factually aligned with paged KV, quantization, eviction or compression, prefix sharing, and migration or offload behavior.
- `part-5-distributed-inference/module-22-per-node-inference-efficiency/section-22.7.html`, Table 22.7.1: Captioned. Speculative decoding variants and risks are technically consistent.
- `part-5-distributed-inference/module-24-distributed-llm-serving/section-24.5.html`, Table 24.5.2: Captioned and aligned with the prefill/decode capacity-planning contrast.
- `part-6-multi-agent-systems/module-32-distributed-agent-orchestration/section-32.9.html`, Table 32.9.1: Captioned. MAST failure families map plausibly to debugging signals and fixes.
- `part-8-case-studies/module-37-case-federated-medical-ai/section-37.4.html`, Table 37.4.2: Captioned. The table accurately distinguishes full-model federation from PEFT or FedLoRA-style adapter federation.
- `part-8-case-studies/module-37-case-federated-medical-ai/section-37.8.html`, Table 37.8.1: Captioned and introduced by prose. HIPAA, GDPR, EU AI Act, and FDA PCCP rows are directionally accurate against official sources checked during this pass.

### Source Checks Used

- HHS HIPAA Security Rule summary: confirms electronic PHI safeguards are administrative, physical, and technical.
- EUR-Lex GDPR Regulation 2016/679, Article 9: confirms health data is a special category of personal data and requires an Article 9 exception plus lawful processing basis.
- European Commission AI Act materials: confirm high-risk AI obligations around risk management, data governance, user information, human oversight, robustness, and monitoring.
- FDA AI-enabled device PCCP guidance: confirms a PCCP is intended to describe planned AI software modifications while maintaining reasonable assurance of safety and effectiveness.

### Exact Fixes Applied

- None. This agent was run in suggest mode and was instructed not to edit book HTML.
- Created this report only: `.book-writers/runs/scalableai-new-material-20260618-42agents/agent-reports/39-figure-fact-checker.md`.

### Verification Run

- Ran git status and git diff name-only checks to identify current-diff scope.
- Extracted changed visual lines from a zero-context HTML diff using patterns for figures, images, SVG, tables, captions, and numbered figure or table references.
- Inspected line-numbered visual blocks in the affected files with `Select-String`.
- Visually inspected `front-matter/images/application-reference-paths.png`.
- Checked official sources for the changed regulatory table in Section 37.8.

### Blockers

- No blockers. The remaining work is integration: apply the three direct text fixes above and decide whether to regenerate the Figure 0.2 PNG title.

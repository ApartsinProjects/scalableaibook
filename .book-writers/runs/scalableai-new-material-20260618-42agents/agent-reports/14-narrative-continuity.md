## Narrative Continuity Report

Agent: 14 narrative continuity
Mode: suggest
Scope: new material visible in current git diff only

### Files Inspected

Inspected the current diff and targeted context in these changed files:

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

### Top Issues

1. Closing arc is interrupted by new frontier callouts after the `What's Next` section.
   - Location: `part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html`, lines 138 to 153; `part-7-infrastructure/module-34-edge-fog-on-device/index.html`, lines 138 to 155; `part-8-case-studies/module-39-case-multi-agent-robotics/index.html`, lines 143 to 158.
   - Old text: the newly added frontier and practical callouts appear after the closing `<div class="whats-next">` block and before `<section class="bibliography" id="bibliography">`.
   - New text: move each newly added callout block so it appears immediately before the existing `<div class="whats-next">` block. Keep the existing `What's Next` text as the last reader-facing chapter movement before the bibliography.
   - Why it matters: the current order gives the reader a forward bridge, then pulls them back into new content. That makes the chapter ending feel like an appendix rather than a narrative close.
   - Tier: TIER 1 (BLOCKING)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Agent 40 may expect bibliography adjacency; this fix preserves it by making `What's Next` directly precede bibliography.

2. The preface heading now promises course guidance but the new material first addresses application reference paths.
   - Location: `front-matter/preface.html`, line 156.
   - Old text: `<h2>0.5 How to Use This Book in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - New text: `<h2>0.5 How to Use This Book as a Reference or in a Course <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Why it matters: the new Figure 0.2 and Table 0.2 are strong, but they arrive under a heading that frames the section only as course planning. The revised heading lets the new application-path narrative and the existing semester-map narrative coexist.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: Table numbering was already updated from 0.2 to 0.4 downstream, so the heading change should not affect numbering.

3. The preface needs a bridge between application-reference reading and semester-course reading.
   - Location: `front-matter/preface.html`, line 181, before the paragraph beginning `The book is larger than any single semester`.
   - Old text: `<p>The book is larger than any single semester, by design: it supports five distinct graduate courses that share Part I and then diverge.`
   - New text: `<p>The same path idea also works when the book is taught rather than used as a reference. The application paths above answer "where should I read for this system?" The course paths below answer "how should an instructor pace the book over a term?"</p>
<p>The book is larger than any single semester, by design: it supports five distinct graduate courses that share Part I and then diverge.`
   - Why it matters: without the bridge, the section jumps from builders and application spines to instructors and semester maps. The new paragraph makes the shift feel intentional.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: none.

4. The new Spark Connect section needs a transition from the Spark to GPU handoff thread.
   - Location: `part-2-distributed-data/module-07-spark-dataframes/section-7.8.html`, line 247.
   - Old text: `<h2>5. Spark 4 and Spark Connect: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - New text: `<p>The handoff in Figure 7.8.2 explains where Spark stops and training begins. Spark Connect answers a nearby production question: where should the Python application that asks Spark to do the preparation live?</p>
<h2>5. Spark 4 and Spark Connect: The Remote DataFrame Client <span class="level-badge advanced" title="Advanced">Advanced</span></h2>`
   - Why it matters: the new section is relevant, but it currently arrives as a fresh topic after a thesis-thread callout. The bridge ties it to the existing handoff argument.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: none.

5. The AI-native data engine insertion needs a return bridge to the section's original fit and transform spine.
   - Location: `part-2-distributed-data/module-08-distributed-storage-data-loading/section-8.7.html`, line 212, before `Materialize Once or Recompute Every Epoch`.
   - Old text: `<h2>5. Materialize Once or Recompute Every Epoch <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - New text: `<p>Whichever engine runs the preprocessing, the narrative returns to the same contract: fit shared state once, then decide where and how often to apply the transform. That decision is the materialization question.</p>
<h2>5. Materialize Once or Recompute Every Epoch <span class="level-badge intermediate" title="Intermediate">Intermediate</span></h2>`
   - Why it matters: Ray Data, Daft, and Lance broaden the tool landscape. The bridge keeps them from feeling like a detached survey by reconnecting them to the original fit and transform arc.
   - Tier: TIER 2 (HIGH)
   - Action: APPLY DIRECTLY
   - Potential conflicts: none.

6. The protocol paragraph in the agentic case study uses an ambiguous local section reference.
   - Location: `part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html`, line 236.
   - Old text: `turning the tool layer of Section 2 into a pluggable, discoverable ecosystem.`
   - New text: `turning the tool layer from <a href="section-40.2.html">Section 40.2</a> into a pluggable, discoverable ecosystem.`
   - Why it matters: in a long case-study chapter, "Section 2" can be read as a generic book section rather than Section 40.2. The hyperlink makes the backward reference part of the chapter's narrative thread.
   - Tier: TIER 3 (MEDIUM)
   - Action: APPLY DIRECTLY
   - Potential conflicts: none.

### Missing Transitions

The primary missing transitions are listed above. The new material in Sections 22.5, 22.7, 24.5, 32.9, and 38.3 is mostly well integrated: tables are introduced by captions, code blocks have captions, and new callouts connect back to the chapter's existing thesis thread. No additional blocking transition gaps were found in those files.

### Tone Inconsistencies

The new material generally matches the existing explanatory tone. The only notable density shift is in the preface, where application reference paths are practical and builder-facing while the existing heading frames the section for course use. The heading and bridge fixes above should resolve that shift.

### Opening Assessment

This pass did not review full chapter openings outside the changed hunks. Within the diff, index-file additions generally preserve the existing opening arcs. The preface addition creates a useful new reader path, but its section heading should be broadened so the opening promise matches the new material.

### Closing Assessment

Three index files have weakened closings because new callouts appear after `What's Next`. The existing `What's Next` text is strong in all three cases and links to the next chapter, but it must be restored as the final prose movement before the bibliography.

### What's Next Section

- Present: YES in the changed index files inspected.
- Quality: COMPELLING where present.
- Links to next chapter: YES in the changed index files inspected.
- Draft if weak: not needed. Placement is the issue, not the `What's Next` prose.

### Non-Prose Element Flow

- Figure 0.2 in the preface is introduced before the image and interpreted by its caption and following paragraph. Pass.
- New code blocks in Sections 7.8 and 8.7 have prose setup and captions. Pass.
- New tables in Sections 22.5, 22.7, 24.5, and 32.9 have captions and nearby interpretation. Pass.
- Newly added callouts after `What's Next` in Chapters 33, 34, and 39 are the exception. They have good internal prose but sit in the wrong narrative position.

### Verification Run

Commands run:

- Git diff file list.
- Git diff summary statistics.
- Git diff with six lines of context and color disabled.
- `Select-String` scans for changed headings, `whats-next`, bibliography boundaries, new callout titles, and new large-section insertions.

Suggested verification after integration:

- Confirm every changed index file has `What's Next` directly before bibliography:
  `Select-String -Path part-7-infrastructure/module-33-cluster-infrastructure-scheduling/index.html,part-7-infrastructure/module-34-edge-fog-on-device/index.html,part-8-case-studies/module-39-case-multi-agent-robotics/index.html -Pattern 'whats-next|<section class="bibliography"' -Context 1,1`
- Confirm the preface heading includes both reading modes:
  `Select-String -Path front-matter/preface.html -Pattern 'How to Use This Book as a Reference or in a Course'`
- Confirm the Section 40.2 backward reference is linked:
  `Select-String -Path part-8-case-studies/module-40-case-distributed-llm-agentic/section-40.6.html -Pattern 'section-40.2.html'`

### Files Changed

None. This agent ran in suggest mode and did not edit book HTML.

### Blockers

None.

### Summary

MOSTLY CONNECTED. The new material is useful and generally tied to the book's existing themes, especially construct-matched evaluation, tool choice, KV economics, and agent protocol boundaries. The main narrative defect is placement: several frontier additions appear after chapter-closing `What's Next` blocks, which should be fixed before integration closes the pass.

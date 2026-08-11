# P9 — Editorial Voice and Full Blog Quality

Status: **COMPLETE / OWNER APPROVED / DEPLOYED**  
Opened: 2026-08-10  
Closed: 2026-08-10  
Owner: Mike Gilmore  
Implementation branch: `portfolio-p9-editorial-voice`  
Implementation PR: `#29`

## Thesis

The portfolio Writing section should read like a professional technical blog written by an experienced practitioner, not like product documentation generated from a source pack. P9 preserved the factual rigor introduced in P7/P8 while restoring conversational voice, cohesive paragraph rhythm, practical judgment, personality, and useful first-person perspective.

## Trigger

Owner review identified a visible discontinuity between the established human-written / AI-assisted corpus and the August 8 AI-created batch. The newer articles were technically strong but overused isolated one-sentence paragraphs, dense concept-by-concept sectioning, repeated explanatory templates, and source-pack completeness that made parts of the blog read like condensed documentation.

Writing is a professional proof surface. Voice, judgment, and readability therefore became acceptance concerns rather than cosmetic preferences.

## Research and complete corpus audit

All 12 current Astro articles were read rather than sampled. Research covered current people-first/helpful-content guidance, technical-writing and web-readability guidance, developer tutorial/blog guidance, and current research on stylistic differences in AI-assisted writing.

Durable conclusions:

- helpful technical writing should add explanation, judgment, expertise, or insight beyond source synthesis;
- scannability is not fragmentation: headings, lists, code, and emphasis support prose rather than replace it;
- one-sentence paragraphs remain useful for deliberate emphasis, but a page dominated by them is an editorial warning sign;
- the portfolio's best fit is a **technical essay/tutorial hybrid**, not an upstream reference manual rewritten as a post;
- source packs are evidence, not automatic outlines;
- AI-assisted factual review does not restore voice automatically, so voice review is a separate required editorial step.

## Internal voice baseline

The earlier corpus was retained as the voice source rather than normalized for consistency:

```text
SRE Tools overview     KEEP
Rundeck                KEEP — practitioner-story benchmark
New Relic              KEEP — problem/evidence/judgment benchmark
PagerDuty              KEEP — personality + operational-context benchmark
Git                    KEEP — strongest raw personality; do not over-polish
Terraform              KEEP — first-person judgment + technical-depth benchmark
GitHub Actions         KEEP — workflow evolution + practical judgment benchmark
Cursor                 KEEP — clear authorial perspective
```

No earlier article was changed merely to make the archive look structurally uniform.

## August 8 repairs

Materially revised with `updated: 2026-08-10` while preserving original publication dates, routes, slugs, thumbnails, series metadata, and historical ordering metadata:

```text
OpenTelemetry                 structural rewrite
Argo CD / GitOps              structural rewrite
Kubernetes                    moderate rewrite
Prompt. Prove. Ship. intro    prose-rhythm rewrite
```

### OpenTelemetry

Refocused around one operating story: how a distributed request becomes evidence that stays connected across metrics, traces, and logs. Necessary architecture remains, but vocabulary no longer dictates the article structure.

### Argo CD / GitOps

Refocused around reconciliation: Git records desired intent, Argo CD compares it with the live cluster, and automation is useful only when ownership, drift, security, and recovery are understandable.

### Kubernetes

Preserved the desired-state thesis while compressing reference-shaped detail. The article now teaches the core object/control model, one meaningful manifest, operations, troubleshooting, security/upgrade discipline, when Kubernetes earns its complexity, and a safe learning path.

### Prompt. Prove. Ship.

Preserved the existing thesis and portfolio connection while recombining machine-like one-line cadence into conversational paragraphs. Intentional branded/emphasis lines remain.

No fabricated technology use, employer/customer story, incident, metric, screenshot, or first-person event was added.

## Durable authority changes

No parallel style-guide file was created.

Existing authority was strengthened in:

```text
docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md
docs/product/contactgilmore-portfolio/02_CONTENT_AND_INFORMATION_ARCHITECTURE.md
```

The house standard now explicitly requires:

- technical essay/tutorial framing;
- cohesive short paragraphs as the normal rhythm;
- one-sentence paragraphs only when they earn emphasis;
- headings only for meaningful shifts in the reader's question/task;
- lists only for genuinely list-shaped material;
- publication breadth narrower than research breadth when appropriate;
- meaningful authorial value beyond source synthesis;
- comparison with the established human-written corpus during voice review;
- a separate voice/read-aloud review before factual/technical sign-off is treated as sufficient;
- no AI detector as an authorship or quality gate.

## Verification and owner gate

Exact implementation/browser-certified head:

`266eb4079bc3e30e9ecd74ff5e52a0f382616d29`

Candidate evidence:

```text
Validate Astro migration #264 / run 31452230462 — SUCCESS
Playwright portfolio smoke #233 / run 31452230492 — SUCCESS
Playwright result — 125 passed / 4 intentional skips
Playwright artifact — 9086752892
artifact digest — sha256:9a6b78871db1f3915d4e09be5e465a66830da696a20e743ab7b84190de1c266b
```

Owner local review on PR head `bee3d4cd7bb6da395fbcfa5e3d23209c3fa655df` also passed:

```text
Astro local build — 21 pages / PASS
full local Playwright — 125 passed / 4 intentional skips / 0 failures
clean preview on 127.0.0.1:4322
initial visual smoke — PASS
final editorial voice/tone review — APPROVED
```

## Production release

PR #29 was owner-approved and squash-merged to `main` as:

`80614d4d24c6f7fbf6087ed2325f27a63786d3d2`

Production checks on that exact merge:

```text
Deploy Portfolio to GitHub Pages run 31454588266 — SUCCESS
Validate Astro migration run 31454588241 — SUCCESS
Playwright portfolio smoke run 31454588274 — SUCCESS
```

P9 is therefore accepted and deployed.

## Final disposition

**ACCEPTED.**

The portfolio now has one durable editorial system that protects technical accuracy and public safety without allowing AI-assisted drafting to flatten the author's voice. The earlier corpus remains the primary internal voice reference. Future long-form work must treat source research, voice review, factual verification, browser/accessibility proof, and owner publication authority as distinct responsibilities.

P9 is a corrective quality sprint. It does not count as the future numbered **Prompt. Prove. Ship.** content arc.

## Next posture

There is no active sprint after P9.

The next meaningful writing sprint may develop a focused Prompt. Prove. Ship. arc, but it must be opened deliberately and must follow the P9 editorial standard from the first outline rather than repairing voice afterward.

After that focused content arc, perform one final employer-readiness/web-administration-quality pass and then prefer stability over cosmetic churn.

## Sprint-record retention

P9 closed on 2026-08-10. Under the 30-day sprint-record lifecycle, this record remains under `docs/sprints/` through the recent-history window and becomes archive-eligible after 2026-09-09, subject to then-current living-state references and sprint-system hygiene rules.

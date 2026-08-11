# P9 — Editorial Voice and Full Blog Quality

Status: **ACTIVE — REWRITES COMPLETE / VERIFICATION IN PROGRESS**  
Opened: 2026-08-10  
Owner: Mike Gilmore  
Repository: `contactgilmore/contactgilmore.github.io`  
Branch: `portfolio-p9-editorial-voice`  
Draft PR: `#29`

## Thesis

The portfolio Writing section should read like a professional technical blog written by an experienced practitioner, not like product documentation generated from a source pack. Preserve the factual rigor and scannability introduced in P7/P8 while restoring Mike's established conversational voice, paragraph rhythm, judgment, personality, and useful first-person perspective.

## Trigger

Owner review after the August 8 publishing batch identified a visible editorial discontinuity: the newly AI-created posts stood out from the earlier human-written / AI-assisted articles because they relied more heavily on isolated one-sentence paragraphs, repeated explanatory templates, dense heading structures, and documentation-style concept coverage.

This is a quality problem even where the technical content is correct. Writing is part of the portfolio's professional proof surface, so voice and authorship quality are acceptance concerns rather than cosmetic preferences.

## Current authority

```text
production branch: main
production authority at sprint open: ed22dbc186429e6f8f1fe098fd4e26a3c670bf27
production tree at sprint open: 89cb31cf7b823bedd826c1ba16001c42d36bb37e
P9 branch: portfolio-p9-editorial-voice
draft PR: #29
last article-rewrite head: 0691ee8d9eba3a1c9d49869ea54181fdeb6a7a5b
current verification/docs head will advance as evidence is recorded
```

A repository-mechanics error occurred while opening P9: the initial sprint-record create call defaulted to `main`. It was immediately removed by a compensating commit before any other P9 mutation. Corrected `main` retained the exact pre-error content tree. Git history intentionally preserves the error/correction; all actual P9 work proceeds on the bounded branch.

An additional unnecessary branch ref, `portfolio-p9-editorial-voice-pr-placeholder`, was accidentally created while attempting to open the draft PR. It contains no unique work and is not authority. The available connected GitHub controls in this session do not expose branch deletion; do not use or advance that ref.

## Work-package state

```text
P9-WP1 external editorial research + all-12-article corpus audit     COMPLETE
P9-WP2 durable house voice / AI editorial authority                 COMPLETE
P9-WP3 priority August 8 article repair                             COMPLETE
P9-WP4 earlier-corpus targeted disposition                          COMPLETE — KEEP
P9-WP5 verification / owner editorial gate                          IN PROGRESS
```

## P9-WP1 — Research and complete corpus audit

The full 12-article Astro corpus was read rather than sampled. Current research covered:

- Google people-first/helpful-content and generative-AI guidance;
- Google Technical Writing and developer-style paragraph guidance;
- Microsoft human/conversational web-writing guidance;
- GitHub Docs content-design and tutorial guidance;
- Nielsen Norman Group web-reading/scannability research;
- Write the Docs discussion of developer-blog voice versus documentation;
- recent ACL/EMNLP research on stylistic differences between unassisted human and LLM-generated/post-edited writing.

### Durable research conclusions

- Helpful technical content should add original explanation, judgment, expertise, or insight rather than merely summarize sources.
- Scannability is not the same thing as fragmented prose. Headings, lists, code, and emphasis help readers navigate; they do not replace narrative paragraphs.
- Many one-sentence paragraphs are a useful editorial warning sign even though an occasional one-sentence paragraph can be excellent emphasis.
- A developer tutorial/blog can be conversational and opinionated while remaining technically precise.
- AI-assisted text can retain recognizable machine-shaped stylistic patterns after ordinary post-editing, so voice must be reviewed explicitly rather than assumed to return during fact-checking.

## Full-corpus disposition

### Internal voice benchmarks — retained unchanged

```text
SRE Tools overview     KEEP
Rundeck                KEEP — primary practitioner-story benchmark
New Relic              KEEP — problem/evidence/judgment benchmark
PagerDuty              KEEP — personality + operational-context benchmark
Git                    KEEP — strongest raw personality; do not over-polish
Terraform              KEEP — first-person judgment + technical-depth benchmark
GitHub Actions         KEEP — workflow evolution + practical judgment benchmark
Cursor                 KEEP — current technical topic with clear authorial perspective
```

The earlier corpus is the voice source, not collateral damage. No older post was edited merely to create visual or structural uniformity.

### August 8 repairs — complete

```text
OpenTelemetry                 STRUCTURAL REWRITE COMPLETE
Argo CD / GitOps              STRUCTURAL REWRITE COMPLETE
Kubernetes                    MODERATE REWRITE COMPLETE
Prompt. Prove. Ship. intro    PROSE-RHYTHM REWRITE COMPLETE
```

All four preserve original `date`, slug/route, thumbnail, series metadata, and historical publication identity. Prompt also preserves its immutable `publishedAt`. Each materially revised article now has:

```yaml
updated: 2026-08-10
```

No fabricated tool use, incident, employer/customer story, metric, screenshot, or first-person event was added. First-person language is used for grounded professional judgment where appropriate.

## P9-WP2 — Durable editorial standard

No parallel style-guide file was created.

Existing authority was strengthened in:

```text
docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md
docs/product/contactgilmore-portfolio/02_CONTENT_AND_INFORMATION_ARCHITECTURE.md
```

The preferred portfolio article is now explicitly a **technical essay/tutorial hybrid**:

```text
human reason to care
-> one primary mental model
-> cohesive short paragraphs
-> real experience when verified OR explicit grounded author judgment
-> practical example/workflow
-> tradeoffs/failure modes
-> safe way to start
-> conclusion that returns to the operating idea
```

It is not an upstream reference manual recreated as a blog post.

### House-voice rules promoted

- Source packs are evidence, not automatic outlines.
- Research breadth may be much larger than publication breadth.
- Cohesive short paragraphs, commonly around two to four sentences on this site, are the default rhythm; natural variation remains important.
- One-sentence paragraphs are retained for real emphasis, transition, humor, or deliberately isolated conclusions rather than as the dominant cadence.
- Headings mark meaningful changes in the reader's question/task, not every new noun in the source pack.
- Lists are for genuinely list-shaped material.
- A substantial article should contain authorial value beyond source synthesis through verified experience, professional judgment, analogy, recommendation, tradeoff analysis, or a useful mental model.
- Draft review explicitly tests opening, top-to-bottom flow, paragraph rhythm, authorial signal, unnecessary completeness, similarity to the established corpus, and read-aloud cadence.
- Do not use an AI detector as an authorship or quality gate.

## P9-WP3 — Rewrite outcomes

### OpenTelemetry

Refocused from a broad vocabulary/reference tour into one operating story: how a distributed request becomes evidence that can stay connected across metrics, traces, and logs. Retained the necessary architecture around context propagation, instrumentation, resource identity/semantic conventions, OTLP, the Collector, sampling/cardinality/privacy, Kubernetes fit, and a safe learning path.

### Argo CD / GitOps

Refocused around the reconciliation loop: Git records desired intent, Argo CD compares it with the live cluster, and automation is useful only when ownership, drift, security, and recovery are understandable. Preserved the practical `Application` example, sync versus health, manual-to-automatic progression, prune/self-heal caution, controller ownership, Projects/RBAC framing, live-cluster troubleshooting, and a safe learning loop.

### Kubernetes

Kept the strong original desired-state thesis but compressed the reference-shaped middle. The article now teaches control plane/workers, Pod/Deployment/Service, one meaningful manifest, probes/resources, troubleshooting, security/upgrade discipline, when Kubernetes earns its complexity, and a safe local learning path without trying to inventory the whole platform.

### Prompt. Prove. Ship.

Preserved the original thesis and portfolio connection. Recombined stacks of rhetorical one-line paragraphs into conversational prose while retaining intentional emphasis, the repository-context discussion, claim-matching proof, human judgment boundaries, and the branded Prompt/Prove/Ship close.

## Source verification checkpoint

All current first-party external links retained by the rewritten articles were re-opened during P9 against current official sources:

```text
Kubernetes project documentation
OpenTelemetry project documentation / OTLP specification
Argo CD documentation + OpenGitOps principles
OpenAI Codex / harness-engineering guidance
GitHub Copilot repository-instructions / coding-agent guidance
```

No broken target was found in this source pass. Time-sensitive wording was reduced where evergreen phrasing served the reader better, including avoiding an unnecessary hard-coded Kubernetes release number.

## P9-WP5 — Remaining verification

Before owner review:

```text
exact changed-file/material-diff review
Astro/content/build integrity
asset/internal-link integrity
Playwright desktop/tablet/phone smoke
representative axe accessibility coverage
rendered long-form visual/readability review
public-disclosure/professional-read review
```

After those pass, Mike receives one concise editorial review packet covering the four rewritten article routes. This is the required professional-representation gate before merge.

## Protected boundaries

- Never invent Mike's use of a technology, employer/customer story, metric, result, screenshot, incident, or first-person event.
- Preserve historically accurate publication dates, URLs, series identity, and publication ordering metadata.
- Do not add filler anecdotes merely to make AI-assisted material sound human.
- Do not sacrifice factual precision, security caveats, accessibility, or beginner clarity to create personality.
- Do not write to an SEO word count. Length follows the reader outcome.
- Do not create a new editorial/style doctrine file when existing authority can own the rule.
- No unrelated Home, Work, About, Resume, case-study, runtime, or visual-system changes.

## Owner gate

Mike must review the materially rewritten public articles before merge. This is an editorial/professional-representation gate, not a request for Mike to perform repository mechanics.

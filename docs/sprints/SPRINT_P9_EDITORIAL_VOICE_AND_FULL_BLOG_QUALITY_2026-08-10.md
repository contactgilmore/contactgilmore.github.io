# P9 — Editorial Voice and Full Blog Quality

Status: **ACTIVE — RESEARCH / CORPUS AUDIT COMPLETE; REWRITE IN PROGRESS**  
Opened: 2026-08-10  
Owner: Mike Gilmore  
Repository: `contactgilmore/contactgilmore.github.io`

## Thesis

The portfolio Writing section should read like a professional technical blog written by an experienced practitioner, not like product documentation generated from a source pack. Preserve the factual rigor and scannability introduced in P7/P8 while restoring Mike's established conversational voice, paragraph rhythm, judgment, personality, and useful first-person perspective.

## Trigger

Owner review after the August 8 publishing batch identified a visible editorial discontinuity: the newly AI-created posts stand out from the earlier human-written / AI-assisted articles because they rely more heavily on isolated one-sentence paragraphs, repeated explanatory templates, dense heading structures, and documentation-style concept coverage.

This is a quality problem even where the technical content is correct. Writing is part of the portfolio's professional proof surface, so voice and authorship quality are acceptance concerns rather than cosmetic preferences.

## Current authority

```text
production branch: main
production authority at sprint open: ed22dbc186429e6f8f1fe098fd4e26a3c670bf27
production tree at sprint open: unchanged from pre-P9 source tree 89cb31cf7b823bedd826c1ba16001c42d36bb37e
P9 branch: portfolio-p9-editorial-voice
open portfolio PRs at sprint open: none
current blog corpus: 12 Astro Markdown articles
existing editorial authority: docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md
product content authority: docs/product/contactgilmore-portfolio/02_CONTENT_AND_INFORMATION_ARCHITECTURE.md
```

A repository-mechanics error occurred while opening P9: the initial sprint-record create call defaulted to `main`. It was immediately removed by a compensating commit before any other P9 mutation. Corrected `main` retained the exact pre-error tree. Git history intentionally preserves the error/correction; P9 tracked work proceeds only on the bounded branch.

## Scope

### P9-WP1 — External editorial research + complete corpus audit

- research current first-party/authoritative guidance for people-first technical writing, web readability, developer tutorials/blog voice, and AI-assisted authorship;
- read all 12 current blog articles rather than sampling;
- identify the internal voice baseline from the strongest established articles;
- distinguish deliberate rhetorical emphasis from machine-like fragmentation;
- classify each current article as keep, light polish, moderate rewrite, or structural rewrite.

### P9-WP2 — Durable editorial standard

Update existing authority only. Do not create a parallel style-guide tree.

- strengthen `docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md` with a concrete portfolio house voice;
- define paragraph cadence, heading/list discipline, narrative continuity, authorial signal, source usage, and anti-template checks;
- update product Content & Information Architecture only where the durable role of Writing needs clarification;
- preserve factual/public-safety/owner-publication gates.

### P9-WP3 — Priority August 8 article repair

Rewrite in this order:

```text
1. OpenTelemetry                 structural rewrite
2. Argo CD / GitOps              structural rewrite
3. Kubernetes                    moderate rewrite
4. Prompt. Prove. Ship. intro    moderate prose-rhythm rewrite
```

Preserve publication dates, slugs, series identity/order, factual claims that survive verification, external-source integrity, and route compatibility. Add `updated: 2026-08-10` for materially revised articles.

### P9-WP4 — Earlier-corpus disposition

The earlier corpus is the primary internal voice reference. Do not normalize it into the newer AI style.

Default disposition after audit:

```text
SRE Tools overview     KEEP
Rundeck                KEEP — voice benchmark
New Relic              KEEP — voice benchmark
PagerDuty              KEEP — voice benchmark
Git                    KEEP — strongest personality; rough edges are preferable to sanding away voice
Terraform              KEEP — voice benchmark
GitHub Actions         KEEP — voice benchmark
Cursor                 KEEP / only light polish if a clear fragmentation defect remains after priority rewrites
```

Any earlier-post edit must solve a specific reader/editorial problem, not pursue uniformity for its own sake.

### P9-WP5 — Verification / owner editorial gate

- review complete article diffs for technical meaning and public safety;
- verify external links/current time-sensitive claims where retained;
- run Astro/build/content integrity checks;
- run existing Playwright desktop/tablet/phone and accessibility coverage;
- visually inspect representative long-form pages for readable paragraph rhythm and hierarchy;
- owner editorial review is required before merge because this changes public professional representation;
- merge to `main` remains production authorization; Pages deployment remains automatic afterward.

## Research findings

### People-first and professional-proof principle

Current Google Search guidance prioritizes original, helpful, reliable content that provides first-hand expertise, insightful analysis, a clear audience/purpose, and substantial value beyond simply summarizing other sources. Its current generative-AI guidance explicitly permits AI-assisted research/structure but warns against producing commodity content without added user value.

Portfolio implication: technical correctness and source coverage are necessary but insufficient. Each article should contribute Mike's explanation, judgment, framing, experience when real, or a useful point of view that would not be obtained by simply reading the linked product documentation.

### Paragraph principle

Google's Technical Writing course says readers generally welcome paragraphs of roughly three to five sentences and explicitly warns that a document containing many one-sentence paragraphs is probably organized poorly. Google's developer style guide separately allows occasional one-sentence paragraphs when they genuinely contain one idea.

Portfolio implication: one-sentence paragraphs remain valid rhetorical tools, but they must be exceptional emphasis rather than the default cadence. The house preference is cohesive short paragraphs, commonly two to four sentences for this web/blog format, with intentional variation.

### Scannability is not fragmentation

Microsoft's style guidance recommends human/conversational language and writing for scanning first, reading second. GitHub's docs guidance similarly recommends meaningful structure, active voice, concise prose, and selective use of headings/lists/visuals. Nielsen Norman Group's web-reading research shows that people scan headings and opening words, but good formatting is intended to guide readers through meaningful content rather than replace prose with fragments.

Portfolio implication: headings, lists, code, bolding, and callouts support a reader; they do not substitute for narrative paragraphs. A blog article should still read naturally when consumed top to bottom.

### Technical blog versus documentation

GitHub describes tutorials as more conversational than other documentation and as a developer-to-developer conversation that includes expert advice, real examples, troubleshooting, and best practices. Write the Docs explicitly distinguishes developer-blog voice and point of view from technical documentation.

Portfolio implication: the Git to Know You series is best treated as a **technical essay/tutorial hybrid**. It teaches a mental model and gives a safe starting path, but it should not attempt to reproduce an upstream reference manual.

### AI-style risk

Recent ACL/EMNLP research finds systematic stylistic differences between human and LLM-generated writing, including lower stylistic/syntactic diversity in model output and persistent LLM stylistic traces even after human post-editing.

Portfolio implication: fact-checking plus an ordinary human read is not a sufficient voice-preservation process. Drafting must be conditioned on the site's real human-written corpus, and editorial review must explicitly test voice, paragraph structure, narrative variation, and authorial point of view.

## Full-corpus editorial audit

### Internal voice benchmark

The strongest recurring qualities in the earlier articles are:

- a human opening that sounds spoken rather than generated;
- short multi-sentence paragraphs with natural transitions;
- a clear opinion about why the tool matters;
- real professional stories where evidence exists;
- dry humor and analogy used sparingly;
- practical tradeoffs instead of feature worship;
- beginner-friendly explanation without flattening every concept into a definition;
- lists used for genuinely list-shaped material;
- conclusions that return to the operating idea rather than summarize every section.

### Article disposition

| Article | Current editorial verdict | Action |
|---|---|---|
| SRE Tools overview | Strong framing and progression; good concise authorial voice | Keep |
| Rundeck | Excellent practitioner story, analogy, operational lesson | Keep; primary benchmark |
| New Relic | Strong problem/story/evidence/judgment progression | Keep; primary benchmark |
| PagerDuty | Strong personality and lived operational context | Keep; primary benchmark |
| Git | Most overt personality; some older roughness/list density but authentically human | Keep; do not over-polish |
| Terraform | Strong first-person operating lesson + useful technical depth | Keep; primary benchmark |
| GitHub Actions | Strong story, current portfolio tie-in, clear judgment | Keep; primary benchmark |
| Cursor | Strong personal use perspective; some fragment cadence but still recognizably authorial | Keep unless final light polish is clearly beneficial |
| Kubernetes | Technically strong and reasonably focused, but much more reference-shaped than earlier series entries | Moderate rewrite |
| OpenTelemetry | Accurate and useful but over-comprehensive; many concepts/sections read like condensed upstream docs | Structural rewrite / highest priority |
| Argo CD / GitOps | Accurate and practical but over-sectioned and too complete for the series' beginner-blog job | Structural rewrite / high priority |
| Prompt. Prove. Ship. | Strong thesis and authentic portfolio connection; too many isolated lines/rhetorical fragments | Moderate prose-rhythm rewrite |

## Durable house-style direction

The preferred portfolio article is:

```text
human reason to care
-> one primary mental model
-> explanation in cohesive short paragraphs
-> real experience when verified OR explicit grounded author judgment
-> practical example/workflow
-> tradeoffs/failure modes
-> safe way to start
-> conclusion that returns to the operating idea
```

It is **not**:

```text
definition
-> every component
-> every component caveat
-> every security feature
-> every operational feature
-> every upstream-doc link
-> generic summary
```

## Protected boundaries

- Never invent Mike's use of a technology, employer/customer story, metric, result, screenshot, incident, or first-person event.
- First person is encouraged for truthful experience and for clearly framed judgment/opinion; it is not restricted to autobiographical claims.
- Preserve historically accurate publication dates and URLs.
- Material rewrites receive an `updated` date rather than a new publication date.
- Do not add filler anecdotes merely to make AI-written material sound human.
- Do not sacrifice factual precision, security caveats, accessibility, or beginner clarity to create personality.
- Do not write to an SEO word count. Length follows the reader outcome.
- Do not create a new editorial/style doctrine file when existing authority can own the rule.

## Owner gate

Mike must review the materially rewritten public articles before merge. This is an editorial/professional-representation gate, not a request for Mike to perform repository mechanics.

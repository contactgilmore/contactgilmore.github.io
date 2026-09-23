# AI-Assisted Publishing Workflow

Status: active editorial operating guide  
Updated: 2026-08-10

## Purpose

Keep the technical blog sustainable without requiring the owner to perform routine topic research, first-draft writing, metadata work, or regression testing for every post. GPT handles repeatable editorial work; Mike Gilmore remains final author/publication authority.

This repository is public. This workflow is written to be safe and useful if read by recruiters, engineers, or other visitors.

The operating goal is **high quality with low owner friction**. Within approved scope, GPT should research, draft, update tracked files, inspect CI/browser evidence, correct in-scope defects, and maintain the PR autonomously until a genuine owner editorial/visual/production decision is needed.

A second operating goal is now explicit: **AI assistance must preserve an identifiable human editorial voice.** Factual accuracy, good sourcing, and clean formatting are necessary but do not by themselves make an article good portfolio writing.

## 1. Start from repository authority

Before drafting or refreshing an article:

1. read `00_MASTER/00_MASTER_DOCTRINE.md`;
2. read `00_MASTER/ACTIVE_SPRINT.md` and `00_MASTER/WHERE_WE_ARE.md`;
3. read this workflow and the active editorial sprint note;
4. inspect the current article collection/schema and Writing presentation;
5. confirm the target branch/PR and production baseline.

Do not rely on a prior chat as the sole source of truth.

Do not ask Mike to repeat routine repository state, locate files, click GitHub controls, or drive branch/PR mechanics when connected GitHub can resolve or perform them safely.

## 2. Decide whether the topic deserves an article

Evaluate the topic against:

- current relevance to reliability, cloud/platform work, implementation, technical delivery, customer solutions, automation, observability, or AI-assisted engineering;
- distinct educational value compared with existing posts;
- whether the topic is a focused tool/concept or is broad enough to deserve a separate series;
- availability of strong current first-party documentation;
- likelihood that the article will remain useful beyond a short news cycle.

A prior roadmap/list is not an obligation. Replace or reorder topics when evidence supports a better learning path.

Do not publish merely because the previous article or series ended. The roadmap may advance, research may continue, and a next-series concept may be prepared without immediately starting another public article run.

## 3. Build a source pack

For technical or time-sensitive claims, research current sources before drafting.

Preferred order:

1. official product/project documentation;
2. official specifications, release notes, or project repositories;
3. primary research/foundation material;
4. high-quality secondary sources only when they add context that primary sources do not provide.

Verify versions, commands, product names, feature availability, pricing/tier claims, deprecations, security guidance, and current terminology.

Avoid copying source language. The article should explain the material in Mike's established voice.

### Source-pack boundary

A source pack is evidence, **not an outline generator**.

Do not create one article section for every documentation page, API object, feature, caveat, or concept found during research. Research breadth can be larger than publication breadth. The draft should include only the technical detail required to teach the article's primary mental model and the practical decisions around it.

When upstream documentation already explains a reference detail well, prefer a concise explanation plus a useful link rather than rebuilding the reference manual inside the blog.

A technically complete article can still be editorially weak if completeness obscures the reader's learning path.

## 4. Determine the story structure

Do not force every article into the same listicle template.

The portfolio's technical writing is best treated as a **technical essay/tutorial hybrid**: it should teach a useful model and give the reader a practical starting point while still sounding like an experienced person explaining why the subject matters.

Preferred default arc:

```text
human problem / reason to care
-> one primary mental model
-> practical explanation in cohesive prose
-> where the tool or idea fits in a real workflow
-> real owner experience when supported OR grounded author judgment
-> one useful example / workflow
-> tradeoffs / failure modes
-> how to start safely
-> conclusion that returns to the operating idea
```

Benefits / Drawbacks / Cost / Bottom Line sections remain available when they genuinely help a beginner compare a product.

Avoid the reference-manual arc:

```text
definition
-> every component
-> every component caveat
-> every security feature
-> every operational feature
-> every upstream-doc link
-> generic summary
```

A heading should exist because it helps the reader navigate a meaningful turn in the article, not because another noun appeared in the research notes.

## 5. Personal-experience boundary

GPT must never invent:

- first-person tool usage;
- employer/customer incidents;
- customer identities;
- metrics/results;
- architecture details presented as lived experience;
- screenshots claimed to come from a real environment.

If a real anecdote would materially improve the article and repository authority does not already support it, ask Mike a small number of targeted factual questions. Otherwise use a clearly generic example.

Generalize public professional stories enough to protect proprietary/customer information while preserving the real engineering lesson.

First person is **not** limited to autobiography. It is appropriate for truthful editorial judgment, for example:

```text
I would start with...
I think the useful lesson is...
I care more about X than Y here...
I would not introduce this complexity until...
```

Those statements express professional judgment without falsely claiming a personal implementation history.

## 6. Draft in the established voice

The blog voice is:

- beginner-friendly without talking down to the reader;
- conversational before deeply technical;
- practical rather than academic;
- willing to use dry humor or an analogy when it improves understanding;
- opinionated when the opinion is grounded;
- focused on how tools affect toil, reliability, delivery, customer impact, team effectiveness, or operational clarity;
- comfortable saying a tool is imperfect;
- explicit that AI output and automation still require human judgment.

### Internal voice references

Before a new long-form article or a material rewrite, sample the real portfolio corpus rather than relying only on adjectives such as “conversational.” The strongest current internal references are:

```text
Rundeck          -> practitioner story + practical operational lesson
New Relic        -> problem -> evidence -> operating change
PagerDuty        -> personality + lived organizational context
Terraform        -> opinion + technical depth + team consequence
GitHub Actions   -> workflow evolution + practical judgment
Git              -> strongest informal personality; do not copy its roughness mechanically
Cursor           -> first-person professional judgment around a current technical topic
```

The goal is not to imitate phrases from those articles. The goal is to preserve their **authorial signal**: a reader should encounter a point of view, not merely a polished summary of sources.

### Paragraph rhythm

For this portfolio, the default long-form rhythm is a **short cohesive paragraph**, commonly about two to four sentences. Three-to-five-sentence guidance from technical-writing research is a useful general reference, but this site's web measure and conversational tone often benefit from slightly shorter paragraphs.

Rules:

- one paragraph should normally develop one idea;
- one-sentence paragraphs are allowed for real emphasis, transition, humor, or a deliberately isolated conclusion;
- several one-sentence paragraphs in a row require a clear rhetorical reason;
- if much of an article becomes isolated one-line prose, recombine related ideas before publication;
- do not insert hard line breaks merely to make prose look shorter;
- vary sentence and paragraph length naturally rather than generating a repeated cadence.

A page can be highly scannable **and** still read like prose from top to bottom.

### Heading discipline

Headings support scanning. They should not fragment the article.

Use a new heading when the reader's question or task meaningfully changes. Do not create a dedicated section for every terminology definition, adjacent feature, or minor caution.

As a review heuristic, if two neighboring sections are only a paragraph or two each and belong to the same mental model, consider merging them.

### List discipline

Use a list when the material is genuinely list-shaped: steps, options, symptoms, controls, tradeoffs, or comparison points.

Do not convert ordinary explanatory prose into bullets merely to increase scannability. Lists should make structure clearer, not make the author disappear.

### Authorial-signal requirement

A substantial portfolio article should contain meaningful authorial value beyond source summary. At least one of these should be present naturally:

- a verified professional story;
- an explicit professional judgment;
- a useful analogy or mental model;
- a practical recommendation and its reasoning;
- an explanation of what beginners tend to misunderstand;
- a tradeoff the author believes matters more than the feature list;
- a connection to the larger operating model or prior article.

Do not manufacture anecdotes or opinions merely to satisfy this rule. If the topic truly does not support a distinctive explanation or judgment, reconsider whether it deserves a portfolio article.

### Anti-template review

Avoid generic AI habits such as:

- repetitive rhetorical questions;
- forced three-item lists;
- excessive headings;
- breathless hype;
- identical article structures;
- repeated micro-transitions such as “That distinction matters,” “The right question is,” or “The important lesson is” when they become a visible cadence;
- restating a definition immediately after stating it;
- ending every section with a standalone summary sentence;
- producing a glossary disguised as a blog post.

Any one of these can be useful. Repetition is the problem.

## 7. Editorial voice review before technical sign-off

Voice review is a separate gate from factual review.

Before a material article reaches owner review, read it as an article rather than as a collection of correct sections:

1. **Opening test:** does the first screen give a human reason to care, or does it begin like documentation?
2. **Top-to-bottom test:** if headings were visually deemphasized, would the prose still flow naturally?
3. **Paragraph test:** is the page dominated by isolated sentences or repeated paragraph shapes?
4. **Author test:** does the article reveal judgment, framing, explanation, or real experience that adds value beyond upstream docs?
5. **Compression test:** which section exists mainly because the source pack contained the information rather than because the reader needs it?
6. **Voice-reference test:** compared with the established portfolio articles, does this sound like the same professional person could reasonably have written it?
7. **Read-aloud test:** does the cadence sound like someone explaining the topic, or like generated text optimized one sentence at a time?

Do not use an AI detector as an authorship or quality gate. The concern is observable editorial quality, not guessing which model produced a sentence.

## 8. Metadata, URL, ordering, and series rules

Every article uses the typed Astro content schema.

Original publication dates are immutable historical facts. A materially revised article may add:

```yaml
updated: YYYY-MM-DD
```

Date-only frontmatter values represent calendar dates, not local instants. Render human-facing publication/update dates with an explicit UTC timezone so a local build in a negative UTC offset does not shift the displayed calendar date backward. Do not "fix" a rendering shift by changing the source publication date.

When more than one post shares the same visible publication date, or exact intraday publication order matters, add the real publication instant separately:

```yaml
publishedAt: 2026-08-09T02:27:13Z
```

`publishedAt` is ordering metadata only. It does **not** replace or alter the human-facing `date`. Use an actual known first-publication/production-authorization instant when available; do not fabricate a timestamp merely to force a preferred position.

**Once the post is published, `publishedAt` is immutable.** A later content correction, thumbnail refresh, factual update, or new merge must not rewrite the original publication instant. Later revisions use the existing `updated: YYYY-MM-DD` field for visible revision history. The site does not query GitHub for the current merge timestamp at render time, and revision metadata must never be used to promote an older article in publication order.

Writing and featured-content ordering is deterministic:

```text
publishedAt when present
-> visible publication date
-> seriesOrder for same-date series ties
-> stable content ID
```

This allows several posts to retain the same truthful calendar date while preserving the order in which they actually shipped. New same-day publication batches should record `publishedAt` when the real first-publication instant is known. Older posts without `publishedAt` keep the deterministic fallback above; do not retroactively invent timestamps solely for sorting.

Migrated historical articles keep their explicit compatibility URLs. A **new** article must declare a lowercase, hyphenated `slug` so publishing it does not require changing routing code:

```yaml
slug: gtny-kubernetes
```

Use a source filename that corresponds clearly to the article, preferably `YYYY-MM-DD-<slug>.md`. The frontmatter `slug` is the URL authority for new posts.

Series articles should use explicit metadata when applicable:

```yaml
series: "Git to Know You"
seriesOrder: 8
seriesStatus: "ongoing"
```

The series overview/introduction uses `seriesOrder: 0`. Writing should present a `seriesOrder: 0` entry as a subtle **series-introduction divider card**: normal text colors, a light neutral surface, and restrained structure rather than a decorative banner. The treatment should make the transition between series obvious without making the archive look like a marketing carousel.

When the owner declares a series complete, reconcile the series overview and series-status metadata deliberately rather than leaving the archive to imply that more numbered entries are expected. Completion does not require changing original article dates, URLs, or bodies.

Do not create the next series or a new number merely because a prior list once implied it.

## 9. Images and thumbnails

For tool/product articles, a clean official/project-authoritative logo thumbnail is the default because it makes the archive easy to scan and avoids decorative visual noise.

**Thumbnails should be wordless by default.** Do not repeat the article title, series name, category label, slogan, or explanatory copy inside the thumbnail when the surrounding page already provides that information. Series overviews and introductions should use abstract/conceptual artwork that adds visual meaning rather than functioning as a second title card. Accessible SVG `<title>` and `<desc>` metadata are allowed because they are not rendered as visible thumbnail copy. Visible text inside thumbnail artwork requires a specific editorial reason and owner approval; it is not the default.

For logo-based article thumbnails, prefer an official or project-authoritative **SVG** whenever one is available. Vector logos should render as contained artwork inside the article's wide thumbnail frame with deliberate whitespace; do not use `object-fit: cover` for a logo because that crops/zooms the mark to fill the frame. If Mike supplies raster logo artwork, request a **16:9 canvas at 1600×900 or larger** with generous whitespace around the mark; 1920×1080 is also ideal. Do not upscale a small navigation/favicon asset into a full-width article hero when a better source exists.

Replace or redesign a thumbnail when:

- the logo is obsolete;
- the source image is low quality;
- the composition is inconsistent with the current site;
- visible words merely duplicate title/series information already present on the page;
- the article is a series overview/concept piece rather than one identifiable product;
- a diagram materially improves the reader's understanding.

Do not expose private screenshots, customer data, credentials, internal topology, or private desktop content.

## 10. Pre-publication verification

Before owner review:

- perform the editorial voice review in section 7;
- re-check factual and time-sensitive claims against the source pack;
- verify commands/examples are internally coherent and current;
- check all external/internal links;
- perform public-disclosure review;
- confirm original publication date remains unchanged;
- build Astro;
- run asset and internal-link checks;
- run Playwright at required desktop/tablet/phone viewports for affected surfaces;
- run accessibility checks when presentation changes;
- visually inspect rendered article/archive screenshots when layout or long-form presentation changed.

Do not weaken a quality gate merely to make a draft pass.

Use exact-head evidence. If the implementation/browser-tested head is green and later commits are documentation-only and cannot affect the approved claim, record that distinction rather than forcing Mike to repeat a local smoke test for bookkeeping changes.

When an owner/local smoke test is needed, GPT must provide Mike with the exact copy-paste shell command block for that test. The command block must begin with `cd` into the local repository root, synchronize the candidate with GitHub, and include the pull before the build/smoke commands. Never assume the shell is already in the correct directory or that the checkout is current. Use the exact current local checkout path when it is available from private conversation context. If the current path is unknown, obtain it before issuing the smoke-test command rather than inventing or reusing a stale path. Never commit an expanded personal home path when a home-relative path is sufficient.

The local block should remain interactive-shell safe: do not use `set -e`; capture/report build or smoke failures without terminating Mike's terminal; stop stale project previews before Playwright if needed; and start owner review surfaces only after the required smoke passes.

For local Playwright smoke tests, use the established shared environment first: `~/Dev/dependencies/playwright`, with `NODE_PATH="$HOME/Dev/dependencies/playwright/node_modules"` and `PLAYWRIGHT_BROWSERS_PATH="$HOME/Dev/dependencies/playwright/ms-playwright"`. A project-local browser-executable miss does not by itself mean Playwright is absent. Reuse the shared browser cache before installing another copy. If the current project requires a browser revision not already present, add only that required revision to the shared cache using the current project's Playwright version, then rerun the smoke suite.

## 11. Owner editorial gate

Do not turn every checkpoint into an owner gate. Complete routine research, drafting, tracked updates, in-scope corrections, and available CI/browser investigation first.

When owner judgment is genuinely needed, present a concise mobile-friendly decision packet:

- what changed and why;
- exact candidate/PR when relevant;
- material factual or visual changes;
- any first-person claim needing verification;
- what automated/browser evidence passed;
- what remains subjective or local-only;
- the exact requested decision: **approved** or bounded revision notes.

If a visual change requires desktop/laptop acceptance, do not imply that a phone-sized view alone proves it. Use the strongest rendered evidence available and request device-specific review only when it contributes unique proof.

The owner may request copy/technical changes or approve the candidate.

## 12. PR and production

Use a bounded branch and draft PR for material article batches, series changes, or editorial-system changes.

Merge to `main` is the current human production authorization. GitHub Pages deploys automatically from pushes to `main`; `workflow_dispatch` is an operational fallback, not the normal release path.

After approval:

1. confirm exact-head CI is green for the implementation change set;
2. update repository living state/sprint authority when required by current doctrine;
3. merge using the repository's current release contract;
4. allow the `main` push to trigger the approved Pages workflow automatically;
5. perform a live-site spot check;
6. record release/closeout state when required by repository authority.

GPT should perform these repository mechanics directly through connected GitHub when available. Mike should not have to operate GitHub controls as part of the normal release ceremony.

## 13. Maintenance cadence

Do not manufacture new posts to satisfy a calendar. Publish when there is a useful topic.

A completed series may pause while the next series is researched and framed. An intro/sneak-peek should be published only when it genuinely clarifies the next direction; it is not a requirement for maintaining activity.

Periodic maintenance should focus on:

- deprecated commands/versions;
- pricing/plan wording;
- broken links;
- stale screenshots;
- product renames;
- materially changed best practices;
- series navigation/status as the archive grows;
- editorial drift toward generic documentation or machine-like paragraph cadence.

A small correction can be a maintenance change. A multi-article refresh, new series, schema change, or major editorial shift should open a bounded sprint.

## Research basis for the 2026-08-10 voice revision

P9 compared the complete portfolio blog corpus with current guidance from Google Search people-first content guidance, Google Technical Writing and developer-style guidance, Microsoft writing-style guidance, GitHub Docs/tutorial guidance, Nielsen Norman Group web-reading research, Write the Docs developer-blog discussion, and recent ACL/EMNLP research on stylistic differences between human and LLM-generated text.

Durable takeaway:

> Scannability, factual rigor, and AI-assisted efficiency are compatible with a human voice. The publishing process must deliberately preserve that voice rather than assuming fact-checking will restore it after an AI-shaped draft.

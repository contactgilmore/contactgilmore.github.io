# AI-Assisted Publishing Workflow

Status: active editorial operating guide  
Updated: 2026-08-08

## Purpose

Keep the technical blog sustainable without requiring the owner to perform routine topic research, first-draft writing, metadata work, or regression testing for every post. GPT handles repeatable editorial work; Mike Gilmore remains final author/publication authority.

This repository is public. This workflow is written to be safe and useful if read by recruiters, engineers, or other visitors.

## 1. Start from repository authority

Before drafting or refreshing an article:

1. read `00_MASTER/00_MASTER_DOCTRINE.md`;
2. read `00_MASTER/ACTIVE_SPRINT.md` and `00_MASTER/WHERE_WE_ARE.md`;
3. read this workflow and the active editorial sprint note;
4. inspect the current article collection/schema and Writing presentation;
5. confirm the target branch/PR and production baseline.

Do not rely on a prior chat as the sole source of truth.

## 2. Decide whether the topic deserves an article

Evaluate the topic against:

- current relevance to reliability, cloud/platform work, implementation, technical delivery, customer solutions, automation, observability, or AI-assisted engineering;
- distinct educational value compared with existing posts;
- whether the topic is a focused tool/concept or is broad enough to deserve a separate series;
- availability of strong current first-party documentation;
- likelihood that the article will remain useful beyond a short news cycle.

A prior roadmap/list is not an obligation. Replace or reorder topics when evidence supports a better learning path.

## 3. Build a source pack

For technical or time-sensitive claims, research current sources before drafting.

Preferred order:

1. official product/project documentation;
2. official specifications, release notes, or project repositories;
3. primary research/foundation material;
4. high-quality secondary sources only when they add context that primary sources do not provide.

Verify versions, commands, product names, feature availability, pricing/tier claims, deprecations, security guidance, and current terminology.

Avoid copying source language. The article should explain the material in Mike's established voice.

## 4. Determine the story structure

Do not force every article into the same listicle template.

Preferred default arc:

```text
problem / reason to care
-> practical explanation
-> where the tool fits in a real workflow
-> real owner experience when supported and useful
-> tradeoffs / failure modes
-> how to start safely
-> connection to the broader series
```

Benefits / Drawbacks / Cost / Bottom Line sections remain available when they genuinely help a beginner compare a product.

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

Avoid generic AI habits such as repetitive rhetorical questions, forced three-item lists, excessive headings, breathless hype, and identical article structures.

## 7. Metadata, URL, and series rules

Every article uses the typed Astro content schema.

Original publication dates are immutable historical facts. A materially revised article may add:

```yaml
updated: YYYY-MM-DD
```

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

The series overview uses `seriesOrder: 0`. Do not change the original publication date to make an article look newer.

## 8. Images and thumbnails

For Git to Know You tool articles, a clean official/product-logo thumbnail is the default because it makes the archive easy to scan and avoids decorative visual noise.

Replace or redesign a thumbnail when:

- the logo is obsolete;
- the source image is low quality;
- the composition is inconsistent with the current site;
- the article is a series overview/concept piece rather than one identifiable product;
- a diagram materially improves the reader's understanding.

Do not expose private screenshots, customer data, credentials, internal topology, or private desktop content.

## 9. Pre-publication verification

Before owner review:

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

When an owner/local smoke test is needed, GPT must provide Mike with the exact copy-paste shell command block for that test. The command block must begin with `cd` into the local repository root; never assume the shell is already in the correct directory. Use the exact current local checkout path when it is available from private conversation context. If the current path is unknown, obtain it before issuing the smoke-test command rather than inventing or reusing a stale path. Never commit that personal filesystem path into the public repository.

## 10. Owner editorial gate

Present the owner with:

- what changed and why;
- material factual updates;
- any new first-person claims requiring verification;
- important topic/series decisions;
- any visual change that affects the brand system.

The owner may request copy/technical changes or approve the candidate.

## 11. PR and production

Use a bounded branch and draft PR for material article batches, series changes, or editorial-system changes.

Merge to `main` is the current human production authorization. GitHub Pages deploys automatically from pushes to `main`; `workflow_dispatch` is an operational fallback, not the normal release path.

After approval:

1. confirm exact-head CI is green for the implementation change set;
2. update repository living state/sprint authority when required by current doctrine;
3. merge using the repository's current release contract;
4. allow the `main` push to trigger the approved Pages workflow automatically;
5. perform a live-site spot check;
6. record release/closeout state when required by repository authority.

## 12. Maintenance cadence

Do not manufacture new posts to satisfy a calendar. Publish when there is a useful topic.

Periodic maintenance should focus on:

- deprecated commands/versions;
- pricing/plan wording;
- broken links;
- stale screenshots;
- product renames;
- materially changed best practices;
- series navigation as the archive grows.

A small correction can be a maintenance change. A multi-article refresh, new series, schema change, or major editorial shift should open a bounded sprint.

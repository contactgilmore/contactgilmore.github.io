# P14 — Portfolio Public Identity Alignment

Status: **ACTIVE / WHOLE-SITE VISUAL REVIEW**  
Opened: 2026-09-29  
Owner: Mike Gilmore  
Repository: `contactgilmore/contactgilmore.github.io`  
Roadmap Horizon: **H2 — Sustained professional signal and editorial proof**  
Product Goal: **PG-2**  
Working branch: `p14-public-identity-alignment`

## Rollback checkpoint

Exact accepted pre-P14 recovery branch:

```text
checkpoint/pre-p14-public-identity-alignment-20260929
source main = 9c9812482d38e8c102846a737f23db0407c4dfec
```

This branch is recovery evidence and must remain untouched through P14 acceptance.

## Why this package exists

The portfolio and Augusta Method now express the same professional operating philosophy but no longer present with the same maturity.

The portfolio must remain Mike Gilmore's personal professional product. It must not become a company-site clone or consume Augusta Method Company Brand authority. The frozen Augusta Method public site is an owner-approved presentation calibration reference for:

- typographic confidence;
- low copy density;
- restrained purple signal;
- white/light breathing room;
- editorial rails instead of card walls;
- plainspoken outcome-first messaging;
- visible ownership, proof and handoff;
- quiet technical credibility instead of decorative technology styling.

Career remains authority for Mike's public employment positioning and factual professional evidence.

## Authority boundaries

Personal identity retained:

- Mike Gilmore / MG identity;
- recruiter + hiring-manager audience;
- Implementation / Professional Services / Technical Success / customer-facing technical delivery positioning;
- personal employment history;
- case-study metrics and factual evidence;
- Resume;
- LinkedIn;
- technical writing;
- first-person professional voice.

Company-only identity not adopted:

- Augusta Method wordmark or AM mark;
- Augusta Method company naming;
- company service/pricing/contact conversion structure;
- company legal/commercial claims;
- company customer proof;
- company launch state.

`CENTRAL_AUGUSTA_METHOD_BRAND = NOT_APPLICABLE` remains unchanged.

## Calibration references

Frozen Augusta Method public reference:

```text
contactgilmore/augusta-method-site
main = 71d774461e6676300474857f461ebfb774270cc5
Identity = frozen
public style = AM-PUBLIC-WEB-REFERENCE-2.0
display = Onest
body/UI = Inter
purple = #7142BB
```

Career reference:

```text
contactgilmore/career
main = 3642dd1c3ad8c4141884ac1729fad0b628898037
LinkedIn public-positioning draft = Operations Transformation & Implementation | Technology-Enabled Change
target role families = Implementation Consultant / Implementation Manager / Professional Services Consultant / Onboarding Manager
hard exclusion = Site Reliability Engineer
```

## P13 relationship

P13 / PR #67 remains **PAUSED / DRAFT-ONLY / NOT PUBLIC**.

Do not publish P13 against the superseded portfolio presentation. Resume P13 only after the P14 visual system reaches owner acceptance.

## Work packages

### WP1 — Authority + visual foundation — COMPLETE FOR REVIEW

- update durable portfolio brand/product authority;
- adopt Augusta Method public site as calibration reference, not brand authority;
- Onest display + Inter body/UI;
- align primary purple to #7142BB;
- consolidate retired blue defaults;
- reduce radius/shadow/pill dependence;
- establish larger editorial typography, rails and breathing room;
- preserve accessibility and responsive law.

### WP2 — Home — COMPLETE FOR REVIEW

- sharpen first-viewport professional truth;
- preserve Implementation / Professional Services / Technical Success positioning;
- move case-study proof closer to the top;
- replace capability card wall with quieter editorial structure;
- reduce duplicate capability explanation;
- keep technical depth as supporting proof.

### WP3 — Work — COMPLETE FOR REVIEW

- preserve all accepted case-study facts and metrics;
- convert card-heavy listing to editorial evidence rows/chapters;
- make customer/operational result lead before capability tags.

### WP4 — About + Resume — COMPLETE FOR REVIEW

- preserve truthful context;
- reduce boxed-essay presentation;
- use larger typographic chapters, rails and whitespace;
- keep Resume dense enough for recruiter utility.

### WP5 — Writing — COMPLETE FOR REVIEW

- align archive/article presentation to the final personal visual system;
- preserve historical article bodies, dates, routes and accepted art;
- do not publish P13 as part of alignment.

### WP6 — whole-site proof — ACTIVE

- automated governance/Astro/Playwright CI remains mandatory but is not visual acceptance;
- deterministic M1 visual captures use `npm run review:visual`;
- capture matrix includes 1600x900, 1440x900, 1280x800, 1024x768 and 390x844;
- capture Home, Work, implementation case study, About, Resume, Writing archive and one representative article;
- capture both first viewport and full-page images;
- package the ignored `p14-visual-review/` output into a ZIP and provide it to GPT for manual visual inspection;
- review the ZIP for clipping, hierarchy, density, whitespace, typography, section rhythm, responsive transitions and cross-page family coherence;
- repeat the capture/ZIP review loop after material visual changes until accepted;
- Playwright accessibility/navigation/focus/overflow proof remains mandatory;
- owner review of the rendered whole-site result remains mandatory before merge.

## Stop conditions

Stop and reconcile if:

- factual Career evidence would need to be rewritten rather than re-presented;
- a case-study metric or employment claim becomes ambiguous;
- the portfolio begins to read like Augusta Method customer marketing;
- company-only logo/copy/commercial authority leaks into the personal site;
- a historical article body/date/slug would need to change;
- accessibility or responsive proof weakens;
- a material visual change is accepted without a fresh deterministic local screenshot ZIP review;
- the branch expands into unrelated hosting, analytics, custom-domain or Career master-document work.

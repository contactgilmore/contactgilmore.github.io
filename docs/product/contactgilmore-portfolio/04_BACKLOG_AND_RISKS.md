# Product Backlog and Risks

Status: active maintenance record  
Updated: 2026-08-27

## Completed foundation

The following are no longer open product questions:

- role/value proposition language is established around `Technical Delivery & Customer Solutions`;
- three primary professional case studies are selected and published;
- Resume presentation is live and P10 employer-readiness work is COMPLETE;
- Writing/archive structure is live on typed Astro content collections;
- Git to Know You #1–#10 is the first completed writing series;
- Prompt. Prove. Ship. is the active next-series direction; its introduction and #1 installment are published;
- P9 full-corpus editorial audit is the durable long-form voice/quality authority;
- the accepted Portfolio 2.0 core does not need another redesign;
- canonical sprint records use `docs/sprints/` with the central 30-day recent-history window;
- repository merge settings match the intended squash-only/delete-merged-branch posture;
- P11 — **Prompt. Prove. Ship. Editorial Continuation** — is COMPLETE / OWNER APPROVED / MERGED / DEPLOYED / PRODUCTION VERIFIED.

P11 production anchor:

```text
PR #43 = MERGED
production merge = 736d0171b9905efcc442e5d0dc69eb90a0602fd6
Pages deployment = 33108684844 — SUCCESS
post-merge governance = 33108684787 — SUCCESS
post-merge Astro = 33108684801 — SUCCESS
post-merge Playwright = 33108684776 — SUCCESS
```

## Current bounded work

There is **NO ACTIVE IMPLEMENTATION SPRINT** immediately after P11 closeout.

Roadmap Horizon H2 / Product Goal PG-2 remain active. The strongest current next candidate is **Plan Before Edit**, but it must be opened as a new bounded sprint only after fresh startup/live-truth reconciliation confirms it still earns priority.

## Future backlog

- **Plan Before Edit** — allowed/no-touch scope, acceptance criteria, stop conditions, and why boundary writing matters before an agent edits;
- continue Prompt. Prove. Ship. one useful installment at a time after each accepted article; do not commit a calendar or publish to satisfy momentum;
- later durable themes include claim-matching proof, safe tool/permission boundaries, and review/release control;
- AI-assisted troubleshooting and multi-agent/background work remain later candidates after fundamentals;
- Cloud Foundations remains a later candidate only if it adds distinct portfolio value;
- review category/topic discovery only when archive volume makes the current Writing list meaningfully harder to scan;
- periodically revisit featured writing and professional positioning after meaningful career changes;
- deepen or add professional proof only when new public-safe evidence exists;
- maintain dependencies, links, browser/accessibility coverage, and time-sensitive technical claims when evidence requires it.

## Risks

### Publishing momentum over reader value

**Impact:** Writing becomes filler and weakens the portfolio signal.  
**Mitigation:** Every article must earn publication through the roadmap goal, source quality, a clear mental model, and authorial value beyond source summary. No forced cadence.

### GPT voice flattening

**Impact:** technically correct articles read like generic AI documentation rather than the established author.  
**Mitigation:** sample the real corpus before substantial drafting and perform a separate P9 voice/read-aloud review. Preserve direct beginner framing, practical judgment, occasional earned humor, and concrete operational consequence without imitating phrases mechanically.

### Invented personal authority

**Impact:** false professional representation and credibility risk.  
**Mitigation:** never invent first-person tool use, incidents, customer/employer stories, screenshots, or metrics. Use truthful professional judgment or clearly generic examples when repository authority does not support an anecdote.

### Stale authority causing repeated work

**Impact:** a fresh GPT reopens completed sprints or follows superseded process.  
**Mitigation:** one canonical roadmap, concise living state, truthful no-active-sprint posture after closeout, current central snapshot, and governance checks that assert current hierarchy rather than obsolete campaign tokens.

### Draft leakage

**Impact:** an unapproved article can become directly reachable even if hidden from navigation.  
**Mitigation:** `draft: true` must exclude generated routes as well as archive/home/series discovery. Local owner review uses `npm run review:drafts`; normal builds remain fail-closed.

### Test-proof erosion during repair

**Impact:** CI turns green because unrelated regression coverage was accidentally removed rather than because the product is correct.  
**Mitigation:** exact material-diff review is mandatory after test repairs. Preserve unrelated coverage unless changed product behavior makes an assertion genuinely obsolete.

### Writing outranking professional proof

**Impact:** the portfolio over-positions as a content/tool site rather than employer-facing technical delivery/customer solutions evidence.  
**Mitigation:** keep Home/Work/case-study/Resume hierarchy stable and publish Writing only as supporting proof.

### Public disclosure

**Impact:** private, proprietary, security-sensitive, or unsupported material becomes durable public Git history.  
**Mitigation:** apply Master Doctrine safety/professional-read gates to every tracked draft, source note, image, PR, log, and artifact.

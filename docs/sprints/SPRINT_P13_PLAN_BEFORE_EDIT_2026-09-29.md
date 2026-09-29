# P13 — Plan Before Edit

Status: **ACTIVE / DRAFT PREPARATION**  
Opened: 2026-09-29  
Owner: Mike Gilmore  
Repository: `contactgilmore/contactgilmore.github.io`  
Roadmap Horizon: **H2 — Sustained professional signal and editorial proof**  
Product Goal: **PG-2**  
Working branch: `p13-plan-before-edit`  
Draft PR: **#67**

## Sprint Goal

Publish the second numbered **Prompt. Prove. Ship.** installment only if it demonstrates a useful, durable operating idea: define the agent's working boundary before implementation begins.

Target article:

```text
#2. Prompt. Prove. Ship.: Plan Before Edit
slug = /prompt-prove-ship-plan-before-edit/
seriesOrder = 2
draft = true until owner approval
```

## Scope

Allowed:

- one new draft article under `src/content/blog/`;
- one wordless article thumbnail under the existing 2026 blog asset tree;
- current-series metadata/routing state needed to identify P13 as active;
- smallest claim-matching regression coverage required by the article lifecycle.

Protected:

- historical article bodies, dates, slugs and artwork;
- Home / Work / About / Resume positioning and P12-approved visual system;
- GitHub Pages architecture and deployment semantics;
- public/private runner trust boundaries;
- Issue #64 custom-domain backlog;
- production publication until owner editorial/visual approval.

## Source pack

Current first-party sources checked before drafting:

- OpenAI Developers — Run long horizon tasks with Codex: goals/non-goals, hard constraints, deliverables, done-when checks, milestone validation.
- GitHub Docs — repository custom instructions: durable repository guidance, build/test/validation context, repository-wide/path-specific/agent instructions.
- Cursor Docs — Rules: persistent version-controlled project instructions and scoped rule application.

The article may use product behavior as evidence, but the primary mental model must remain vendor-neutral.

## Acceptance criteria

Before owner review:

1. article remains `draft: true` and is excluded from normal public routes;
2. one primary mental model is clear: authority + allowed scope + protected boundaries + done-when proof + stop conditions;
3. scope boundaries are distinguished from technical permissions;
4. planning is presented proportionally, not as mandatory bureaucracy for trivial work;
5. no invented personal incident, customer story, metric, or tool use is introduced;
6. current first-party source links support time-sensitive product references;
7. voice/read-aloud and public-disclosure reviews are complete;
8. exact-head CI is green for the draft branch;
9. Mike reviews the real rendered draft page before publication.

## Stop conditions

Stop before publication if:

- the article requires a first-person factual claim that repository authority does not support;
- current first-party sources contradict a material product claim;
- normal builds expose the draft;
- review requires weakening existing tests or public-safety controls;
- the work expands into a redesign, hosting change, schema change, custom-domain work, or unrelated portfolio maintenance.

## Current checkpoint

Draft preparation is active on PR #67. The next owner gate is editorial/visual review of the real draft page after tracked source, automated proof, and exact-diff review are complete.

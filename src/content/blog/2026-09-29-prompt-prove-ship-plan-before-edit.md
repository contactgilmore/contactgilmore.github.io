---
layout: post
title: "#2. Prompt. Prove. Ship.: Plan Before Edit"
date: 2026-09-29
thumbnail: /assets/images/blog2026/092026/prompt-prove-ship-plan-before-edit.svg
slug: prompt-prove-ship-plan-before-edit
categories: [ai, engineering, delivery]
tags: [ai, agents, planning, scope, verification, software-delivery]
series: "Prompt. Prove. Ship."
seriesOrder: 2
seriesStatus: "ongoing"
draft: true
---

**The first useful line in an AI plan is often what the agent should not change.**

A capable coding agent can inspect a repository, edit several files, run commands, respond to failures, and keep going without waiting for a person after every step. That is exactly why “make this better” becomes a dangerous task description faster than it used to.

The problem is not that the agent needs a longer prompt. The problem is that nobody defined the operating envelope.

In [Context Is Part of the System](/prompt-prove-ship-context/), I argued that useful project context should be recoverable from the project instead of rebuilt inside every conversation. The next step is deciding what the agent is actually allowed to accomplish with that context.

---

## A plan is a boundary, not a screenplay

When people hear “plan first,” it can sound like a demand for a miniature project-management ceremony before every edit. I do not think that is useful.

A good plan does not need to predict every file the agent will touch or every error it will encounter. If the plan becomes a screenplay, the agent has no room to respond intelligently to what it discovers.

What I want instead is a boundary around the work:

```text
goal
allowed scope
protected boundaries
done-when evidence
stop conditions
```

That is enough structure to answer the questions that matter before execution starts.

What outcome are we trying to produce? Which parts of the system may change? Which parts must not change as a side effect? What evidence would make the result acceptable? What discovery should cause the agent to stop and ask for a decision instead of improvising?

The plan is not there to remove autonomy. It is there to make autonomy safe enough to be useful.

---

## Goal and scope are different things

“Fix the login problem” is a goal. It is not a scope boundary.

The same symptom might be caused by application code, an identity-provider setting, a database record, a reverse proxy, a DNS change, or an expired secret. An agent that is technically capable of touching all of those surfaces still should not assume they are all fair game.

That is where allowed scope helps.

For a small repository task, scope might be as simple as:

```text
Allowed:
- src/auth/
- tests/auth/

Do not change:
- database schema
- deployment workflows
- identity-provider configuration
```

Now the agent has room to investigate and repair the intended code path without silently turning a code fix into an infrastructure migration.

The exact syntax does not matter. The distinction does.

---

## Protected boundaries deserve their own line

Allowed scope says where the work may happen. Protected boundaries say what must survive the work.

Those are related, but they are not identical.

A CSS change may be allowed across several presentation files while public URLs remain protected. A dependency update may touch the lockfile while deployment behavior must remain unchanged. A refactor may legitimately change dozens of source files while the database schema is a hard no-touch boundary.

I like writing these constraints explicitly because side effects are where otherwise reasonable automation gets expensive.

The protected list can include things such as:

- public URLs or compatibility routes;
- production data;
- deployment configuration;
- authentication behavior;
- historical content;
- security controls;
- external-provider settings;
- unrelated tests that prove accepted behavior.

The point is not to freeze the repository. It is to make accidental scope expansion visible.

---

## Scope is not the same as permission

This distinction matters more as agents gain broader tool access.

A tool permission answers **what the agent can technically do**. A task boundary answers **what this piece of work is supposed to do**.

Those are not the same control.

An agent may have permission to push a branch, query an API, edit a database migration, or call an external service because those capabilities are useful across many tasks. That does not mean every task should exercise every capability.

I would rather use both layers:

```text
technical permission
    limits the maximum possible action

task boundary
    limits the intended action for this change
```

Least privilege is still important. So is least surprise.

A good automation system should not depend on every tool being physically incapable of doing anything outside the current task. It should also carry clear task-level boundaries that make unexpected expansion a reason to stop.

---

## “Done” should be observable

A plan becomes much more useful when completion is something the real system can demonstrate.

OpenAI's current [long-horizon Codex guidance](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex) separates goals and non-goals from hard constraints, deliverables, “done when” checks, milestones, and validation. GitHub's [repository custom-instructions guidance](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) similarly recommends documenting how a project builds, tests, and validates changes so the agent can reproduce the expected checks. Those details are not paperwork around the engineering work. They define how the work proves itself.

Compare these two completion criteria:

```text
Done when:
- the refactor is complete
```

and:

```text
Done when:
- existing routes still build
- the targeted behavior has a regression test
- browser smoke passes
- no protected file changed
```

The second version gives the agent something observable to work toward. It also gives the reviewer a much better basis for deciding whether the result is actually finished.

This is where planning starts connecting directly to proof.

---

## Stop conditions keep discovery from becoming ownership

Agents are useful partly because they can discover things the original request did not mention.

That is also where a bounded task can quietly become a different project.

Suppose an agent is asked to update a form and discovers that the cleanest implementation would require a database migration. Maybe that migration is the right long-term answer. It is still a different decision if the original task explicitly protected the schema.

A stop condition handles that cleanly:

```text
Stop if:
- the fix requires a schema change
- a credential boundary must change
- a public API contract must break
- production data must be modified
- the requested proof cannot be produced
```

The agent can still explain what it found and propose the next step. It just does not get to convert discovery into authorization.

That is an important distinction. Useful autonomy means choosing the next safe action inside the task. It does not mean inheriting every decision that appears along the way.

---

## Plans should shrink with the task

None of this means a typo needs a five-section implementation contract.

The amount of planning should track the blast radius and uncertainty.

For a small, reversible change, the entire plan might be one sentence:

> Change this label only; do not alter behavior; done when the existing test still passes.

For a multi-file refactor, migration, release change, or externally connected workflow, it is worth being much more explicit about scope, protected boundaries, rollback, proof, and owner decisions.

I use the same basic questions at both scales. The answer just gets shorter when the risk is smaller.

That is the part I think many planning systems miss. Good boundaries reduce bureaucracy because they let routine work proceed without asking for approval at every harmless step.

---

## Persistent instructions help, but the task still needs a shape

Repository-level instructions are useful because they keep durable rules close to the code.

GitHub supports repository-wide, path-specific, and agent instructions for Copilot. [Cursor Rules](https://cursor.com/docs/rules) can store persistent project guidance in version control. OpenAI's Codex guidance similarly treats repository instructions and planning artifacts as ways to make long-running work more recoverable and verifiable.

Those mechanisms can tell an agent how the project normally works:

- how to build;
- how to test;
- where architecture authority lives;
- which conventions are stable;
- what security rules always apply.

The individual task still needs its own outcome and boundary.

A repository rule might say, “production configuration requires explicit approval.” A task plan says, “this change is limited to the documentation generator and must not touch production configuration.”

One is durable operating context. The other is the contract for this change.

---

## A small template is usually enough

If I were handing a non-trivial task to an agent today, I would rather give it this:

```text
Goal:
What should be true when this is finished?

Allowed:
What may change?

Protected:
What must remain unchanged?

Done when:
What evidence proves the result?

Stop if:
What discovery requires a human decision or a new scope?
```

That is intentionally boring.

Boring is good here. I do not want the control surface for a powerful automation tool to depend on clever wording. I want the important decisions to be visible before the edits begin.

The agent can still choose implementation details, recover from ordinary failures, and make local corrections inside the boundary. The plan simply tells it where that autonomy ends.

---

## Planning is how you buy useful autonomy

The interesting thing about better agents is not that they let us stop thinking about scope.

They make scope more valuable.

When a tool can only suggest the next line, a vague request has a small blast radius. When the same request can cause repository edits, shell commands, API calls, test repairs, and a pull request, ambiguity can travel much farther before a person sees it.

So I do not think “plan before edit” is really advice about slowing an agent down.

It is advice about being clear enough that you can safely let it move faster.

The next question is what happens after the agent says the work is complete.

That is where the next installment goes: **The Agent Finished Is Not Evidence**.

---

## Bottom Line

Before a capable agent edits a real system, define the boundary around the work.

Give it a goal.  
Give it room to operate.  
Protect the things that must not move.  
Define proof that the result is complete.  
Tell it what discoveries require a stop.

Then let the agent work inside that envelope.

The plan is not the implementation.

It is the contract that keeps implementation from quietly becoming something else.

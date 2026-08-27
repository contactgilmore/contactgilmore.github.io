---
layout: post
title: "#1. Prompt. Prove. Ship.: Context Is Part of the System"
date: 2026-08-27
thumbnail: /assets/images/blog2026/082026/prompt-prove-ship-context.svg
slug: prompt-prove-ship-context
categories: [ai, engineering, delivery]
tags: [ai, agents, context, documentation, software-delivery]
series: "Prompt. Prove. Ship."
seriesOrder: 1
seriesStatus: "ongoing"
featured: true
---

**The giant prompt is a smell.**

If every new AI session starts with you pasting the architecture, deployment rules, current project state, test commands, naming conventions, and a page of things the agent must never touch, the problem probably is not that your prompt needs another paragraph. The project has a context problem.

I understand how it happens. A good session teaches you what the agent was missing, so you add another instruction. Then another. Eventually the prompt becomes a homemade project wiki that only exists in one conversation, and starting fresh feels like onboarding a new engineer by reading last month's Slack history aloud.

That is not a prompting strategy I want to depend on.

In the [Prompt. Prove. Ship. introduction](/prompt-prove-ship/), I argued that increasingly capable agents need a system around them: context, boundaries, evidence, review, and controlled release. Context comes first for a reason. Before an agent can make a good change, it needs a reliable way to learn **what system it is actually changing**.

---

## Context should be recoverable, not remembered

Software projects already have several kinds of truth. There is durable truth such as architecture and coding standards. There is current truth such as the active roadmap goal, an open migration, or a known production constraint. Then there is live truth: the branch that exists right now, the dependency version actually installed, the failing test, the deployment that really happened.

A chat can contain all three, but it is a poor place to make them authoritative. Conversations get long. Sessions restart. People switch tools. A statement that was correct on Monday can be dangerously wrong by Friday.

That is why I care more about **recoverable context** than conversational memory. A new agent session should be able to enter the repository, discover the right sources, and rebuild a useful picture of the work without needing the previous conversation to survive.

The repository does not need to explain every historical decision before the agent can touch a typo. It does need to make the important truth findable.

---

## An instruction file should be a router, not an encyclopedia

Repository instruction files are becoming common across coding-agent tools, and that is useful. The trap is treating them as a new place to copy every piece of project documentation.

OpenAI's current [Codex `AGENTS.md` documentation](https://learn.chatgpt.com/docs/agent-configuration/agents-md) describes a layered instruction chain: Codex reads project guidance from the repository root toward the working directory, with more specific guidance able to override broader guidance. GitHub Copilot supports [repository-wide, path-specific, and agent instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide). Cursor's current [Rules documentation](https://prod.cursor.com/docs/rules) similarly supports version-controlled project rules and `AGENTS.md`, including more specific instructions for parts of a codebase.

The filenames and precedence rules differ. They will probably keep changing. The durable idea is much simpler:

> **Give the agent a reliable entry point, then route it to the authority that already owns the answer.**

If `AGENTS.md`, a Copilot instruction file, a Cursor rule, and a project README all contain separate copies of the same deployment policy, you have not created more context. You have created four opportunities for context to drift.

I would rather have a short instruction that says, in effect, “Start here. This file owns architecture. This file owns current work. These commands prove the change.” The instruction layer gets the agent oriented; the real project documents remain the source of truth.

---

## Different context changes at different speeds

One reason giant prompts become stale is that they mix information with very different half-lives.

A project's purpose might stay stable for a year. An architecture decision might last for months. The active sprint can change next week. A pull request head can change five minutes from now. Those facts should not all live in the same copied block of text.

The model I find useful is layered:

```text
entry instructions
        ↓
durable project authority
        ↓
roadmap + current state
        ↓
current sprint / task evidence
        ↓
live repository or system truth
```

The first layer answers **where do I start?** Durable authority answers **what is this system and what rules survive this task?** Roadmap and current state answer **what matters now?** The sprint or issue answers **what outcome are we trying to produce?** Live Git, tests, APIs, deployments, and other real-system evidence answer **what is actually true at this moment?**

That separation matters because the repair for stale context becomes obvious. If a roadmap goal changes, update the roadmap. If the branch moved, re-read Git. If a coding convention changes, update the durable rule once. Do not hunt through five agent-specific prompt files hoping you found every copy.

---

## More context is not automatically better context

There is an understandable instinct to solve agent mistakes by loading more material. Sometimes that is exactly right. Sometimes it is the equivalent of handing a new engineer the entire company wiki and calling onboarding complete.

Useful context has a job. It helps the agent make a decision, avoid a known failure mode, find the correct source, or verify an outcome. Material that does none of those things is competing with the information that does.

Cursor's own guidance recommends keeping project rules focused and starting small, then adding rules when repeated mistakes show a real need. I think that is a good general principle even outside Cursor: **promote recurring lessons into durable context; do not pre-document every hypothetical mistake an agent could someday make.**

This is also why I am wary of dumping old implementation history into current instructions. History can be valuable evidence when a regression or decision needs it. It does not need to sit in the front row for every future task.

---

## Duplicate context is a reliability problem

Documentation drift sounds boring right up until an agent confidently follows the wrong copy.

Imagine one file says production deploys automatically after merge, another still says a manual deploy is required, and an old chat says the candidate branch is the release source. A person who has lived through the project may recognize which statement is stale. A fresh agent sees three plausible instructions.

The failure is not really “AI hallucinated.” The system supplied conflicting authority.

For agent-assisted work, I think **one source of truth per concern** becomes more important as autonomy increases. The agent can move faster through a repository than a person manually editing one file at a time, which also means a bad assumption can travel farther before somebody notices it. Clear authority limits how far ambiguity can propagate.

This is the same reason we care about configuration drift in infrastructure. Two supposedly authoritative copies of a rule are not redundancy if nobody can tell which one wins.

---

## This portfolio is a deliberately visible example

The repository behind this site uses more structure than a tiny weekend project needs, but it makes the idea easy to inspect. A new project session starts from one master document, routes through shared governance where it applies, then into one product roadmap, the product brief, current state, the active sprint, and finally the smallest set of source files needed for the task.

In simplified form:

```text
master entry point
→ shared rules when applicable
→ product roadmap
→ product brief
→ current state + active sprint
→ task-specific source and evidence
→ live GitHub truth
```

The important part is not that every repository should copy those filenames. Please do not create seven governance documents for a three-file shell script because a blog post told you to.

The useful part is that each layer has a different responsibility. The entry point does not try to become the roadmap. The roadmap does not contain every CI log. The sprint does not redefine architecture. GitHub remains authoritative for the branch and pull request that actually exist.

That structure also gives the documentation a maintenance test: if two current files are trying to own the same decision, one of them probably needs to become a pointer or disappear.

---

## Start much smaller than this

You can get most of the benefit without building a miniature constitution for every repository.

For a small project, I would start with a concise repository instruction file or README that tells an agent what the project does, where the important source lives, which build/test commands matter, and where to look for any non-obvious constraints. If active work genuinely needs durable state across sessions, add one current-work pointer instead of turning the instruction file into a diary.

Then watch what fails. If every agent misses the same test command, document it. If architecture keeps getting re-explained, give architecture one stable home. If current work is repeatedly reconstructed from old chats, create a small current-state source and keep it current. If a rule has never mattered and may never matter, it probably does not need three paragraphs yet.

The goal is not maximum documentation. The goal is **minimum ambiguity at the decisions that matter**.

---

## Context is part of the engineering system

It is tempting to think of context as something we give an AI before the real engineering begins. I think that separation is becoming less useful.

When an agent can inspect files, run commands, edit several parts of a repository, and prepare a change for review, the mechanism that tells it what is authoritative is part of the delivery system. Good context does not make the model infallible. It makes mistakes easier to classify, current truth easier to recover, and useful autonomy less dependent on one perfect conversation.

That is the standard I care about: **could a fresh session recover enough truth to continue responsibly without me reconstructing the project by hand?**

Once the answer is yes, the next question becomes more interesting: now that the agent understands the system, **what is it actually allowed to change?**

That is where the next installment goes: **Plan Before Edit.**

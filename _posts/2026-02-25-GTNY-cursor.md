---
layout: post
title: "#7. Git to Know You: Cursor"
date: 2026-02-25
thumbnail: /assets/images/blog2026/022026/cursorlogo2.png
categories: [sre, devops, ai]
tags: [cursor, ai, productivity, infrastructure-as-code]
---

**AI in your editor is not a gimmick. It’s a force multiplier.**

But only if you use it correctly.

Cursor isn’t magic, and it certainly isn’t a replacement for understanding how your systems work. It won’t eliminate the need to know Terraform, networking, IAM, CI/CD, or why your pipeline just failed at 2:00 AM. What it *does* do, when used responsibly, is compress feedback loops in a way that feels almost unfair.

If Terraform brought discipline and structure to infrastructure, AI-assisted editors like Cursor bring acceleration to the way we think about and iterate on that infrastructure.

And acceleration matters, especially when you care about reliability.

---

>
> **Disclaimer:**  
> Everything in this blog is written with beginners in mind. If you're curious about Site Reliability Engineering and don’t know where to start, you're exactly who this is for. AI tools are powerful, but they are not a substitute for understanding the fundamentals. You still need to know what you’re building and why.
>

---

## What is Cursor?

Cursor is an AI-powered code editor built on top of VS Code. On the surface, that sounds like just another “AI in your IDE” feature. The difference is context. Cursor understands the files you have open and can reason about the code in front of you.

That changes the workflow entirely.

Instead of copying a Terraform snippet into a browser-based AI chat and trying to explain your setup in text, you can highlight the actual configuration and ask direct questions about it. Cursor responds based on what it sees in your project, not just a generic example from the internet.

That tighter loop between question and answer makes it feel less like autocomplete and more like a live technical discussion.

![Cursor Editor Screenshot](/assets/images/blog2026/022026/cursorEditorScreenshot.png)

---

## How I Actually Use It

I don’t use Cursor to generate entire applications from scratch. That’s not how I work. Most of the time, I’m dealing with infrastructure definitions, production troubleshooting, or reviewing configuration decisions. Cursor fits into that workflow as a thinking partner, not a replacement for engineering judgment.

When I’m working in Terraform, for example, I’ll use Cursor to sanity-check patterns or explore alternatives. If I’m refactoring a module and something feels repetitive, I’ll ask whether the duplication can be abstracted cleanly. If I’m configuring remote state, I might ask whether the backend setup is secure for team collaboration or if I’m missing a locking mechanism.

The key difference is that I’m not asking it to “build my infrastructure.” I’m asking it to pressure-test my thinking before I run `terraform plan`.

That saves time. Not because it eliminates validation, but because it shortens the cycle between “I think this works” and “I’m confident this is safe to test.”

![Terraform + Cursor](/assets/images/blog2026/022026/terraformPlusCursor.png)

---

## Using It as an Advisory Tool

One of the more underrated uses of Cursor is as a sounding board. Sometimes I don’t want code. I want reasoning.

For example, if I’m reviewing a CI workflow, I might ask whether a particular step introduces a race condition or whether a caching strategy could lead to inconsistent builds. When designing infrastructure changes, I might ask about edge cases I haven’t considered or risks associated with a specific approach.

Cursor won’t always give the perfect answer. In fact, sometimes it confidently suggests something that doesn’t apply to your environment at all. But the act of asking the question forces clarity. It turns vague concerns into explicit tradeoffs.

That alone makes it useful.

It feels less like autocomplete and more like having a junior engineer next to you who’s well-read, fast, and occasionally wrong.

---

## Production Debugging and Reality Checks

Where Cursor becomes genuinely interesting is during debugging. When you’re staring at logs, stack traces, or configuration files that “should work” but clearly don’t, having something that can quickly summarize or highlight suspicious patterns is valuable.

It can explain error messages, walk through potential misconfigurations, and suggest areas to inspect. That can shave meaningful time off troubleshooting sessions.

But this is also where discipline matters most.

AI tools hallucinate. They invent flags that don’t exist. They sometimes recommend insecure defaults or misunderstand provider-specific nuances. If you treat Cursor like a senior engineer whose answer is authoritative, you will eventually get burned.

If you treat it like a very fast intern who still needs supervision, it becomes powerful.

I still validate everything. I still run `terraform validate`. I still review Git diffs carefully. I still test changes outside production. AI output is a draft, not a decision.

---

## Where It Really Makes an Impact

The biggest benefit of Cursor isn’t raw code generation. It’s friction reduction.

Less context switching between documentation tabs.  
Less time spent scanning registry pages for argument syntax.  
Less mental overhead when refactoring repetitive infrastructure blocks.

When you’re balancing reliability work, feature delivery, incident response, and documentation, shaving even a few minutes off each iteration compounds over time. It keeps momentum high without cutting corners.

In that sense, Cursor doesn’t make you smarter. It makes your existing knowledge move faster.

---

## Where It Falls Short

Cursor doesn’t understand your organization’s constraints. It doesn’t know your compliance requirements, your budget limitations, or the strange legacy system that breaks if you change one environment variable. It sees patterns in code, not the human context around it.

That means responsibility still sits squarely with you.

Infrastructure as Code especially demands caution. A small mistake in a generated block can have real consequences. That’s why the fundamentals still matter. You need to know what good looks like before you can judge whether AI output is safe.

Used blindly, AI makes you dangerous.  
Used deliberately, it makes you faster.

---

## The Bigger Picture

Tools like Cursor are changing how engineers work. Not by replacing expertise, but by accelerating the feedback loop between idea and validation.

For SRE and DevOps engineers, that can mean faster iteration on infrastructure, quicker debugging cycles, and more thoughtful architectural exploration. It can also mean better documentation and clearer reasoning, simply because it’s easier to explore “what if” scenarios without breaking flow.

The engineer still owns the outcome.  
The engineer still carries the pager.  
The engineer still makes the final call.

AI just reduces some of the friction along the way.

---

## Final Thoughts

Cursor is not a shortcut to competence. If you don’t understand the systems you’re working with, AI will amplify confusion rather than clarity.

But if you do understand those systems, tools like Cursor become a force multiplier. They help you iterate faster, reason more clearly, and explore ideas without constant context switching.

That’s not hype. That’s workflow evolution.

Just remember: trust, but verify.

You’re still the engineer.
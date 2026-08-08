---
layout: post
title: "#3. Git to Know You: PagerDuty"
date: 2025-07-01
updated: 2026-08-08
thumbnail: /assets/images/blog2025/0623/pagerdutyThumb.png
categories: [sre, incident-response, on-call]
tags: [pagerduty, on-call, incident-management, reliability]
series: "Git to Know You"
seriesOrder: 3
seriesStatus: "ongoing"
---

**No way this is #3.** We have reduced some TOIL. We have better visibility. Now something is broken and somebody actually has to respond.

This is where PagerDuty fits.

At its core, PagerDuty gives incident response structure. Monitoring tools can tell you that something is wrong. PagerDuty helps decide **who needs to know, what happens next, and how the response stays organized**.

That means on-call schedules, escalation policies, alert routing, incident workflows, integrations, and increasingly more automation around triage and response.

The product has grown since I first wrote this article, but the beginner lesson has not changed: a healthy incident process should not depend on remembering who happens to be awake.

---

## What PagerDuty actually solves

Imagine New Relic, Datadog, Prometheus, CloudWatch, or another monitoring system detects a serious problem.

Without an incident-management layer, the next steps can become surprisingly manual:

Who owns this service?  
Who is on call?  
What if they do not respond?  
Who is backup?  
Does the incident need a larger response?  
Where do we track what happened?

PagerDuty lets teams encode those decisions before the outage.

A service can have an escalation policy. That policy can point to schedules and responders. Notifications can move through push, phone, SMS, email, and chat-based workflows. If the first responder does not acknowledge the incident, the escalation continues according to the policy instead of relying on somebody to start calling people manually.

---

## A Real Story: Escaping Permanent On-Call

Right after college, I joined a small company with fewer than 100 employees. There were four of us in IT, and only two of us had much hands-on experience with cloud systems and production outages.

Because I had the most experience in that area, I effectively became on call all the time.

If something failed, I got the call. Sometimes executives contacted me directly. In a few cases, we did not know there was a problem until customers told us.

That is not a sustainable incident-management strategy.

The company was later acquired and I moved into a much larger engineering environment. That was where I really experienced PagerDuty. I set it up for our smaller division and we started building actual schedules, escalation paths, monitoring integrations, backups, and overrides.

![PagerDuty Incident Dashboard](/assets/images/blog2025/0623/pagerdutyDash.png)

Suddenly “on call” was a defined responsibility rather than an unofficial permanent condition attached to one person.

![PagerDuty On-Call Schedule](/assets/images/blog2025/0623/pagerdutySchedule.png)

If someone was on PTO, coverage could be changed. If the primary responder missed an alert, the escalation policy knew what to do next. More people gained operational experience because responsibility was deliberately shared.

The technology helped, but the bigger improvement was organizational: **we turned tribal knowledge into a system.**

---

## What I would learn first

### On-call schedules

A schedule establishes who is responsible at a given time. Rotations make that responsibility predictable and shareable.

### Escalation policies

An escalation policy defines what happens when the initial responder does not acknowledge or resolve the incident. It removes improvisation from one of the most stressful moments in production operations.

### Services and integrations

Monitoring and observability tools send events into PagerDuty. Mapping those events to the right service helps route problems to the right ownership group.

### Alert quality

PagerDuty cannot rescue a bad monitoring strategy. If every minor warning pages someone, you have automated burnout.

### Incident workflows and automation

Modern PagerDuty goes beyond basic paging. Current Incident Management plans include workflow capabilities, while PagerDuty's broader Operations Cloud includes event orchestration, AIOps, automation, and other response tooling depending on plan and product.

The lesson is not to turn every incident into a robot project. Automate the predictable parts so responders can spend their attention on the uncertain parts.

---

## Where PagerDuty helps

- **Clear ownership** — responders know who is responsible for a service and who is covering now.
- **Predictable escalation** — backup paths are defined before the incident.
- **Multiple notification channels** — critical alerts do not depend on one app notification being noticed.
- **Integration with monitoring/chat/ticketing tools** — incident response can connect to the systems teams already use.
- **Response history** — acknowledgements, escalations, and incident activity create a useful record for later review.
- **Automation opportunities** — known diagnostic or remediation actions can be connected to the incident workflow rather than rediscovered manually every time.

---

## Where teams still get into trouble

### Alert fatigue

The easiest way to make an on-call system useless is to page people for things that do not require action.

### Bad ownership data

An escalation policy cannot help much if nobody knows which team actually owns the failing service.

### Process without practice

Schedules and workflows look great on paper. Teams still need to rehearse response, write useful runbooks, and learn from incidents.

### Cost and packaging

PagerDuty has several product areas and paid tiers. Features that sound adjacent may live in different plans or add-ons, so check current packaging instead of assuming every capability is included everywhere.

---

## Current entry point

As of this 2026 refresh, PagerDuty's official Incident Management pricing includes a **Free plan for up to five users** with one on-call schedule and one escalation policy. Paid tiers expand schedules, workflows, integrations, status communication, post-incident capabilities, and other operational features.

That makes the free tier useful for learning the basic mechanics of on-call and escalation without pretending it represents a full enterprise implementation.

Pricing and packaging change, so use PagerDuty's current pricing documentation before making purchasing decisions.

---

## Bottom Line

PagerDuty itself is not mandatory. **A disciplined incident-management process is.**

You need clear ownership. You need actionable alerts. You need a predictable escalation path. You need coverage that does not depend on one person's memory or availability. And after the incident, you need enough history to learn from what happened.

PagerDuty is one well-established way to put that structure into practice.

If you are learning SRE, start by building one service, one schedule, one escalation policy, and one alert that genuinely deserves a response.

Then ask the most important question: would you trust that system at 2 AM?

---
layout: post
title: "#3. Git to Know You: PagerDuty"
date: 2025-06-23
thumbnail: /assets/images/blog2025/0623/pagerdutyThumb.png
categories: [sre, incident-response, on-call]
tags: [pagerduty, on-call, incident-management, reliability]
---

**No way this is #3!** Imagine this, an incident occurs, automatically your workflow goes New Relic > Pagerduty > Slack > Rundeck > New Relic > Pagerduty > SRE On-Call > New Relic Dashboard > resolved with an RCA trail.

**If you’ve been around** production systems long enough, you know this moment: it's 2 AM, your phone buzzes, and something’s on fire. What happens next depends a lot on your tooling—and that’s where **PagerDuty** shines.

As you dig deeper into Site Reliability Engineering, incident response will become second nature. PagerDuty helps bridge the chaos gap by giving you structure when things go sideways. It routes alerts, wakes the right people, and lets you kick off automated responses—all while keeping everyone informed. If Rundeck was about reducing toil and New Relic about seeing the problem, PagerDuty is what helps you respond.

---

> **Disclaimer:**  
> Everything in this blog is written with beginners in mind. If you're curious about Site Reliability Engineering and don't know where to start—you're exactly who this is for. I’m not here to throw jargon at you or assume you know it all. The goal is to keep it practical, simple, and clear. Whether you're switching roles, starting your tech journey, or just SRE-curious—welcome. This is the stuff I wish someone explained to me.

---

## Why PagerDuty?

PagerDuty is an incident response platform that helps teams react quickly when things go wrong. At its core, it makes sure the right person knows about a problem as soon as it starts—and provides tools to track, manage, and resolve it.

Think of it as your on-call assistant. It integrates with your monitoring tools (like New Relic, Datadog, Prometheus) and turns alerts into actionable incidents. Instead of every team member getting pinged, PagerDuty follows schedules, escalations, and rules to make sure the right engineer is contacted, in the right order, at the right time.

It also helps centralize communication, coordinate responses, and log events for detailed postmortems. Whether you're managing a team of 3 or 30, PagerDuty scales to your needs and makes incident response repeatable and predictable.

---

## A Real Story: How PagerDuty Helped My Team

Right after college, I landed a job at a small company with fewer than 100 people. There were only four of us in IT—and just two of us really knew anything about cloud stuff or handling outages.

Since I had the most hands-on experience, guess who ended up being on call 24/7? Yep, me. Anytime something broke—even small stuff—I’d get a call or a ping, sometimes straight from execs. We didn’t even know when things were down until clients called to complain. It was exhausting, and honestly, I started to dread every notification on my phone.

Eventually, that company got acquired, and I moved into a larger environment with hundreds of engineers. That’s when I discovered PagerDuty—and everything changed. I set it up myself for our smaller division. It was way easier than I expected.

We created real on-call schedules, set up escalation paths, and tied it all into our monitoring tools. Suddenly I wasn’t the only one getting calls in the middle of the night. We had a rotation, and backup responders. If someone was out on PTO, PagerDuty handled overrides automatically. And with our rotation, everyone naturally started gaining much needed experience.

The best part? My work-life balance improved almost overnight. I could sleep through the night without stressing about surprise outages. We finally had a plan, not just hope. PagerDuty took a chaotic, all-hours alert mess and turned it into a process that respected our time and sanity.

---

## Screenshots

![PagerDuty Incident Dashboard](/assets/images/blog2025/0623/pagerdutyDash.png)
![SPagerDuty On-Call Schedule](/assets/images/blog2025/0623/pagerdutySchedule.png)

---

## Benefits

- **Structured On-Call Management**  
  Schedules, escalations, overrides—it all just works. No more spreadsheets or “Did you get that alert?” confusion.

- **Smart Alert Routing**  
  PagerDuty filters out the noise and only alerts you when it matters—based on severity, time of day, or service.

- **Automation Hooks**  
  Trigger Rundeck jobs, Slack notifications, or ticket creation automatically based on alert conditions.

- **Status Pages and Communication**  
  Keep your stakeholders and internal teams in the loop with built-in status updates and incident timelines.

- **Postmortem Tools**  
  Track what happened, how you responded, and how to improve it next time with rich data and audit trails.

- **Mobile-Friendly**  
  The PagerDuty app makes it easy to acknowledge, escalate, or run actions from anywhere, even in the middle of the night.

- **Tons of Integrations**  
  Works seamlessly with New Relic, Datadog, Slack, GitHub, AWS CloudWatch, ServiceNow, and many more.

- **Reliable Notifications**  
  Multiple delivery methods—push, SMS, phone call, email—ensure you don’t miss the alert that matters.

---

## Drawbacks

- **Can Be Overwhelming at First**  
  Setting up schedules, escalation policies, and services takes time to learn, especially for new teams. The configuration options are powerful, but there’s a learning curve.

- **Costs Add Up**  
  The free tier is limited. If you want full automation, team features, and analytics, you’ll need a paid plan. For larger orgs, the costs can escalate quickly.

- **Alert Fatigue is Real**  
  If not tuned properly, too many alerts can lead to burnout. You’ll want to be intentional about thresholds, deduplication, and suppressions.

- **UI Can Feel Busy**  
  The interface is powerful but dense. New users might struggle with all the options and configuration panels.

- **Hard to Justify for Hobby Projects**  
  If you’re running a personal site or a small internal app, PagerDuty can feel like overkill.

---

## Cost

PagerDuty offers a free plan for small teams or testing, which includes basic alerting and one on-call schedule.

From there, the pricing tiers expand with features like automation, service tiers, postmortem reports, and advanced integrations. Most SRE teams find value in the Professional or Business plan, especially if you’re managing real on-call rotations and incident workflows.

Check out [PagerDuty's pricing](https://www.pagerduty.com/pricing) for the latest breakdown.

---

## Bottom Line

PagerDuty takes the panic out of incident response. Whether you're on your first on-call shift or leading an SRE team, it gives you a plan, a structure, and a way to improve over time.

If you’re building reliable systems, PagerDuty isn’t optional—it’s essential.

Stay tuned for the next tool in the **Git to Know You** series!

---
layout: post
title: "#2. Git to Know You: New Relic"
date: 2025-06-24
thumbnail: /assets/images/blog2025/0622/newRelicThumb.png
categories: [sre, observability, monitoring]
tags: [new relic, monitoring, apm, logs]
---

**Alright, so if you're following in order...** we have completely gone out of order now. There is a good reason for that. The original list focused more on what shows up in job postings or what tools people tend to mention first.

Here is the real progression for most SREs:

1. We do everything we can to eliminate [TOIL](https://sre.google/sre-book/eliminating-toil/).
2. We hate incidents.
3. We cannot focus on reducing incidents if we are buried in [TOIL](https://sre.google/sre-book/eliminating-toil/).

First, admit the problem. Then focus on what matters. Then engineer and automate everything once you have the time to do it. We work across multiple teams and often sit in the middle of them. We just enabled our support team with Rundeck. Now it is time to get visibility into what is happening in our own systems.

**I am biased here. This is my favorite tool out of the entire incident response toolbox.**

This is where **New Relic** comes in. Observability is the difference between guessing and knowing. When systems start acting strange, you want data, not assumptions. New Relic gives you visibility into your apps, infrastructure, users, and overall stack. Even if you are just getting started in SRE or trying to understand why your app behaves unpredictably, New Relic provides the clarity you did not know you were missing. From performance metrics to traces and logs, it helps you understand what is actually happening.

Think of it like a mission control panel. One screen with full context. It does not need to be complicated. A ping failure lasting more than two minutes can trigger an alert, which we will cover later. SREs respond to that alert and immediately review their incident dashboard to identify what is causing the issue.

You do not have to be a senior engineer to get value from it. Beginners can learn a lot just by observing live data, performance graphs, and real traffic patterns. It closes the gap between gut instinct and measurable facts.

---

>
> **Disclaimer:  
> Everything in this blog is written with beginners in mind. If you're curious about Site Reliability Engineering and do not know where to start, you are exactly who this is for. I am not here to throw a bunch of jargon at you or assume you already know everything. The goal is to keep it clear, practical, and beginner friendly. Whether you are switching roles, just getting started in tech, or exploring SRE for the first time, welcome. This is the material I wish I had been introduced to earlier.**
>

---

## Why New Relic?

New Relic allows you to monitor application performance, system health, and user behavior in one place. It combines logs, metrics, and traces to provide a complete view of your environment.

When something breaks, you are not guessing. You are identifying the root cause quickly. Whether it is a slow database, a memory leak, or a traffic spike, New Relic directs you to the source.

You can think of it as a GPS for your infrastructure. It tracks where requests travel, how long they take, and where delays occur. The visualizations make it easier to interpret what is happening. You do not need to wait for a crisis to use it either. New Relic supports continuous improvement by helping you set baselines, measure deployment impact, and observe how performance evolves over time.

---

## A Real Story: How New Relic Helped My Team

We used to receive constant customer reports claiming their applications were slow or unavailable. It was difficult to determine what was actually happening. After implementing monitors in New Relic, we identified a pattern. Multiple applications were using a single **FSx drive** for storage. That drive ran **Windows Updates and scheduled maintenance** regularly. During those windows, it would disconnect briefly, which triggered widespread issues.

![New Relic APM Example](/assets/images/blog2025/0622/newRelicAPM.png)

New Relic helped us connect the evidence. We adjusted maintenance schedules, refined alerts, and built custom dashboards so the support team could monitor issues in real time. The outcome was fewer tickets, faster resolution, and a more confident team. We even configured alerts on FSx performance directly. That allowed us to notify teams before customers experienced noticeable problems. That level of visibility builds trust with customers and internally across teams.

---

## Benefits

- **One View for Everything**  
  Logs, metrics, traces, and dashboards in a single place.

![New Relic Dashboard Example](/assets/images/blog2025/0622/newRelicDash.png)

- **Faster Troubleshooting**  
  Move from identifying a symptom to pinpointing the cause within minutes.

- **Custom Dashboards**  
  Build views tailored to your team. Monitor APIs, track KPIs, or observe deployments live.

- **Plays Well With Other Tools**  
  Integrates with AWS, Kubernetes, Jenkins, GitHub, and more.

- **Smart Alerts**  
  Configure thresholds, detect anomalies, and respond before minor issues escalate.

- **Great for Cross-Team Visibility**  
  Developers, support teams, and SREs can all rely on the same shared insights.

- **Baseline Monitoring**  
  Define what normal looks like and detect drift early.

- **Filter and Tag Data**  
  Organize information by team, environment, application, or customer group.

- **Understand the User Experience**  
  RUM, or Real User Monitoring, shows what users actually experience.

- **Synthetic Checks**  
  Simulate user interactions from multiple locations to detect regional problems.

---

## Drawbacks

- **It Can Feel Overwhelming Initially**  
  The volume of dashboards and metrics may be intimidating for new users.

- **Costs Can Increase Quickly**  
  The free tier is strong, but heavy log usage in particular can become expensive.

- **Requires Proper Setup**  
  Default configurations are useful, but meaningful value comes from customization.

- **Alert Noise Is Possible**  
  Without tuning, alerts may be too frequent or not actionable.

- **Limited Retention on Free Plans**  
  Monitor how long your data remains accessible.

- **Enterprise Features Increase Cost**  
  Longer retention, SSO, and advanced analytics come at a higher price.

---

## Cost

New Relic offers a generous free tier that works well for individuals and small teams testing the platform.

Beyond that, pricing depends on how much data you send, including logs, metrics, and traces, and how many users require access. With careful alerting and retention strategies, costs can remain manageable. If you scale aggressively, you will need to actively monitor usage and spending.

For growing teams, business and enterprise plans provide extended data retention, enhanced integrations, and priority support.

---

## Bottom Line

If you have ever said, “I have no idea why this app is slow,” New Relic can help you move from uncertainty to clarity. It provides visibility, accelerates troubleshooting, and supports prevention before issues turn into outages. For new SREs, developers, or anyone supporting production systems, it is one of the most practical tools you can learn.

Give it a try. Connect your systems. Then watch how much more confident you feel when the data is right in front of you.

---

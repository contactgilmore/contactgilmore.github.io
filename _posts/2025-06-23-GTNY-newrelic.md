---
layout: post
title: "#2. Git to Know You: New Relic"
date: 2025-06-23
thumbnail: /assets/images/blog2025/0622/newRelicThumb.png
categories: [sre, observability, monitoring]
tags: [new relic, monitoring, apm, logs]
---

**Alright, so if you're following in order...** we’ve completely gone out of order now. And there’s a good reason for that. The original list was more about what shows up on job postings or what tools people tend to name-drop first.

But here’s the real progression for most SREs:

1. We do everything we can to eliminate <a href="https://sre.google/sre-book/eliminating-toil/">TOIL</a>.
2. We hate incidents.
3. We can’t focus on reducing incidents if we’re buried in <a href="https://sre.google/sre-book/eliminating-toil/">TOIL</a>.

First, admit the problem. Then focus on what matters. Then engineer and automate the heck out of everything with the time you’ve freed up. We work across multiple teams and often sit at the center of them. We just enabled our support team with Rundeck. Now it’s time to get visibility into what’s happening in our own systems.

**I am biased here, this is my favorite tool out of all the arsenal of incident response options.**

This is where **New Relic** comes in. Observability is the difference between guessing and knowing. When systems start acting weird, you'd rather know. New Relic is like X-ray vision for your apps, infrastructure, users, and overall stack. Even if you're just getting started in SRE or wondering why your app is acting up, New Relic gives you the visibility you didn’t know you needed. From performance metrics to traces and logs—it helps make sense of what’s really going on.

It’s like having a mission control panel. One screen, full context. It doesn't even have to be complex. A ping failure for more than a specified time, lets say 2 minutes, will trigger an alert (which we will get into later). SRE's respond to the alert and first take a look at their incident dashboard to identify exactly what is causing the issue.

And no, you don’t have to be a senior engineer to get value from it. Even beginners can learn so much from seeing live data, performance graphs, and real-world traffic in action. It bridges that gap between gut feeling and actual facts.

---

> **Disclaimer:  
> Everything in this blog is written with beginners in mind. If you're curious about Site Reliability Engineering and don't know where to start—you're exactly who this is for. I’m not here to throw jargon at you or assume you know it all. The goal is to keep it practical, simple, and clear. Whether you're switching roles, starting your tech journey, or just SRE-curious—welcome. This is the stuff I wish someone explained to me.**
>

---

## Why New Relic?

New Relic lets you monitor app performance, system health, and user behavior—all in one place. It pulls together logs, metrics, and traces, giving you a complete picture of your stack.

When things go wrong, you’re not guessing. You’re tracking down the root cause—fast. Whether it’s a slow database, a memory leak, or a surge in traffic, New Relic points you to the right spot.

You can think of it as a GPS for your infrastructure. It tracks where requests go, how long they take, and what’s slowing them down. And it does it all with clean visuals that make it easier to understand what’s happening. Best part? You don’t need to be in crisis mode to use it. New Relic also helps you continuously improve performance over time—set baselines, measure impact, and watch how things evolve with every deployment.

---

## A Real Story: How New Relic Helped My Team

We used to get flooded with customer reports saying their apps were down or slow. It was a nightmare trying to figure out what was actually happening. Once we set up monitors in New Relic, we noticed a pattern. Multiple applications were sharing a single **FSx drive** for storage. That drive was running **Windows Updates and scheduled maintenance** on a regular basis—and during those times, it would disconnect just long enough to cause chaos.

![New Relic APM Example](/assets/images/blog2025/0622/newRelicAPM.png)

New Relic helped us connect the dots. We rescheduled maintenance, fine-tuned alerts, and built custom dashboards so the support team could see issues in real time. The result? Way fewer tickets, faster answers, and a much happier team. It even let us set alerts on FSx performance itself. That way, we were able to notify teams before customers ever noticed a problem. That kind of visibility builds trust—not just with customers, but inside your org too.

---

## Benefits

- **One View for Everything**  
  Logs, metrics, traces, dashboards—no more bouncing between tools.

![New Relic Dashboard Example](/assets/images/blog2025/0622/newRelicDash.png)

- **Faster Troubleshooting**  
  You can go from “something’s wrong” to “here’s the issue” in a few clicks.

- **Custom Dashboards**  
  Tailor views to your team’s needs—monitor APIs, track KPIs, or watch deployments live.

- **Plays Nice With Others**  
  It integrates with AWS, Kubernetes, Jenkins, GitHub, and more.

- **Smart Alerts**  
  Set thresholds, detect anomalies, and stay ahead of real issues.

- **Great for Cross-Team Use**  
  Developers, support, and SREs all benefit from the same insights.

- **Baseline Monitoring**  
  Define what “normal” looks like and catch drift early.

- **Filter and Tag Your Data**  
  Organize by team, environment, app, or customer group.

- **Understand the User Experience**  
  RUM (Real User Monitoring) shows you what users are really seeing.

- **Synthetic Checks**  
  Simulate user actions from different locations to catch regional issues.

---

## Drawbacks

- **It’s a Lot at First**  
  Tons of dashboards and metrics can feel overwhelming to new users.

- **Pricing Adds Up**  
  The free tier is solid, but heavy usage (especially logs) can get expensive fast.

- **Needs Setup to Shine**  
  Default settings are decent, but real power comes from custom tuning.

- **Potential Alert Noise**  
  Without tuning, alerts can be too frequent or not helpful.

- **Shorter Retention on Free Plans**  
  Keep an eye on how long your data sticks around.

- **Enterprise Perks Cost More**  
  Want longer retention, SSO, or advanced analytics? It’ll cost you.

---

## Cost

New Relic has a generous free tier, especially for individual users or small teams trying it out.

After that, pricing is based on how much data you send (logs, metrics, traces) and how many users you’ve got. If you're smart with your data retention and alerts, you can keep it affordable. If you go all-in, just be ready to monitor your usage and spend.

For growing teams, the business and enterprise plans unlock more data history, better integrations, and priority support.

---

## Bottom Line

If you’ve ever said, “I have no idea why this app is slow,” New Relic can help you stop guessing. It gives you a full picture, helps you fix things fast, and makes it easier to prevent issues before they turn into outages. For new SREs, devs, or anyone supporting production apps—it’s one of the most useful tools to have in your corner.

Give it a shot. Wire it up. And prepare to feel way more in control.

---

---
layout: post
title: "#3. Git to Know You: PagerDuty"
date: 2025-06-23
thumbnail: /assets/images/blog2025/0623/pagerdutyThumb.png
categories: [sre, incident-response, on-call]
tags: [pagerduty, on-call, incident-management, reliability]
---

**If you’ve been in the trenches** with production systems, you probably know this moment: it's 2 AM, your phone buzzes, and something's broken. What happens next depends a lot on your tooling—and that’s where **PagerDuty** makes a difference.

As you get deeper into Site Reliability Engineering, dealing with incidents becomes part of the job. PagerDuty gives you the structure to handle those fire drills without panic. It alerts the right people, escalates if needed, and can even kick off automated fixes. If Rundeck helps reduce the hands-on toil and New Relic shows you what’s wrong, PagerDuty helps you act on it.

---

> **Disclaimer:**  
> Everything in this blog is meant for folks just getting started. If you're curious about SRE or trying to understand how it all fits together—this is for you. No jargon, no assumptions. Just practical stuff I’ve learned the hard way and wish someone had walked me through early on.

---

## Why PagerDuty?

PagerDuty is a tool that helps teams react quickly when things go wrong. At its core, it makes sure the right person finds out fast—and gives you ways to track and resolve issues.

Think of it like your on-call assistant. It ties into your monitoring tools (like New Relic or Prometheus), catches alerts, and figures out who should be pinged. Instead of everyone getting bombarded, it uses schedules and rules to notify just the right people.

Beyond alerts, PagerDuty is helpful for organizing how your team handles incidents. It keeps a record of what happened, lets others jump in, and helps everyone learn from what went wrong.

---

## A Real Story: How PagerDuty Helped My Team

Before we started using PagerDuty properly, our alerting setup was a mess. Alerts would show up in random places—Slack, email, or sometimes not at all. We'd waste time figuring out who was supposed to jump in, and sometimes nobody did because everyone assumed someone else was handling it.

Once we got PagerDuty set up, things changed. We created clean on-call schedules, added backup responders, and built escalation paths. No more “who’s on call right now?” moments. The team knew exactly what to expect.

There was one case where a payment service for a big client went down. PagerDuty immediately alerted the right SRE. It also pinged our product team and kicked off a Rundeck job to restart the service while we investigated. We fixed it in minutes, and the client never even knew there was a problem. What could’ve been a chaotic incident became a smooth recovery.

---

## Screenshots

![PagerDuty Incident Dashboard](/assets/images/blog2025/0623/pagerdutyDash.png)
![PagerDuty On-Call Schedule](/assets/images/blog2025/0623/pagerdutySchedule.png)

---

## Benefits

- **Simple On-Call Setup**  
  You can build rotating schedules, handle vacations, and automate escalations without spreadsheets.

- **Smart Alerting**  
  Not every alert needs to wake someone up. PagerDuty can help filter the noise.

- **Automation-Friendly**  
  Want to kick off a script, send a Slack update, or open a Jira ticket when an alert hits? Totally doable.

- **Easy Communication**  
  PagerDuty lets you loop in teammates and stakeholders with status updates and incident logs.

- **Built-In Learning Tools**  
  After the smoke clears, you’ve got logs and reports to figure out what happened and how to prevent it.

- **Great Mobile App**  
  Acknowledge or escalate alerts right from your phone if you're out and about.

- **Plays Well With Others**  
  Integrates with a ton of tools—New Relic, Datadog, AWS, Slack, GitHub, and more.

- **You’ll Get Notified**  
  PagerDuty makes sure alerts find you with push, text, phone, or email.

---

## Drawbacks

- **A Bit Much at First**  
  There's a learning curve when setting up your schedules, services, and rules.

- **Costs Can Sneak Up**  
  You’ll get the basics for free, but full features mean jumping into a paid plan—especially for teams.

- **Too Many Alerts?**  
  If you're not careful, you'll burn out. You’ll want to fine-tune your alerts and thresholds.

- **Interface Overload**  
  There's a lot going on in the UI, which can feel overwhelming until you get the hang of it.

- **Not Ideal for Solo Projects**  
  If you’re running a personal blog or tiny side project, it might be more tool than you need.

---

## Cost

PagerDuty has a free tier for basic alerting and one on-call schedule—great for small teams or testing the waters.

Once you move into automation, analytics, or team workflows, you’ll want the Professional or Business plans. They add the features that make incident response smooth and scalable.

See [PagerDuty's pricing](https://www.pagerduty.com/pricing) for all the details.

---

## Bottom Line

PagerDuty takes the stress out of “what do we do when something breaks?” It gives you structure when you need it most and scales with your team.

If you’re serious about uptime and fast incident resolution, PagerDuty is absolutely worth learning.

More Git to Know You posts coming soon!

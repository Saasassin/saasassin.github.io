---
sidebar_position: 2
keywords: [jira, backlog maintenance, agile]
description: NitroIQ can help you identify issues that are causing backlog maintenance issues and take action to address them. This can help improve team performance, reduce churn, and help you focus on the right things at the right time.
tags: [jira, backlog maintenance, how-to]
---

import BlogScoreCard from './assets/backlog_scorecard.png';
import BlogDScoreCard from './assets/backlog_doom_scorecard.png';
import BlogDScoreTable from './assets/backlog_doom_score_table.png';
import BlogAgeTable from './assets/backlog_age_table.png';
import BlogAgeChart from './assets/backlog_age_chart.png';

# Backlog Maintenance

A backlog is a list of tasks that need to be completed. It is a common practice in software development to maintain a backlog of work that needs to be done. The backlog is often used as a tool for planning and prioritizing work, as well as tracking progress.

The backlog should be maintained/updated regularly to ensure that it is up-to-date and relevant. This can be done by adding new tasks, removing completed tasks, and re-prioritizing tasks based on their importance and urgency. NitroIQ can help you identify issues that are causing backlog maintenance issues and take action to address them. This can help improve team performance, reduce churn, and help you focus on the right things at the right time.

## Why Backlog Maintenance Matters

Backlog maintenance is the process of keeping the backlog up-to-date and relevant. It is important to maintain a backlog because it helps ensure that the team is working on the right things at the right time. It also helps prevent issues from falling through the cracks and ensures that the team is not wasting time on tasks that are no longer relevant.

If a backlog is not regularly maintained, it can become outdated and irrelevant. This can lead to issues falling through the cracks and the team wasting time on tasks that are no longer relevant. It can also lead to issues being added to the backlog that are not relevant or important, which can lead to the team wasting time on scoping these tasks.

:::tip

**Follow the sections below to learn how to use NitroIQ to identify issues that are causing backlog maintenance issues and take action to address them.**

:::

## Identifying Poor-Quality Issues

<div align="center">
<img src={BlogDScoreCard} className="doc_image" alt="Backlog Doom Score ScoreCard"/>
</div>

NitroIQ will help you identify ageing and ill-defined issues in your backlog and provide you with a **Doom Score** for each issue. This score can be used to identify issues that are causing backlog maintenance issues and take action to address them. This can help improve team performance, reduce churn, and help you focus on the right things at the right time.

- **Issue Age**: The age of the issue in days. Older issues are more likely to be outdated and irrelevant.
- **Missing Fields**: Issues that are missing important fields, such as a description or assignee.
- **Short Fields**: Issues that have short descriptions or short summaries.
- **Issues missing estimates**: Issues that are missing story points.

<div align="center">
<img src={BlogDScoreTable} className="doc_image" alt="Backlog Doom Score ScoreTable"/>
</div>

Using the helpful advice shown in the table above, you can now click into individual issues to view more details about the issue and take action to address it.

For instance, some of the issues with a high Doom Score in this case are missing descriptions, label, and epic links. These are all important fields that should be filled out to ensure that the issue is well defined and relevant. In this case, the issue is missing a description, which is a critical field that should be filled out to ensure that the issue is well defined and relevant. Using the above data during backlog grooming session with the product team is a great opportunity to identify issues that are badly formed and take action to address them.

## Identifying Outdated Issues

At NitroIQ we've seen many teams install our application and almost immediately be faced with the realization that their backlog is not seeing active maintenance, grooming, or pruning of old issues. This is a common problem that can lead to a number of issues, such as high amounts of tech debt, high amounts of issue churn, and ultaimtely low team morale.

<div align="center">
<img src={BlogScoreCard} className="doc_image" alt="Backlog ScoreCard"/>
</div>

NitroIQ will also help you identify ageing issues in your backlog and provide you with a Backlog Average Age Score for each issue. This score can be used to identify issues that are causing backlog maintenance issues and take action to address them.

In general, NitroIQ sees that issues that are older than 90 days are more likely to be outdated and irrelevant. **An average backlog age of 120 days or more is a good indicator that your backlog is not being maintained properly.**

<div align="center">
<img src={BlogAgeChart} className="doc_image" alt="Backlog Age Chart"/>
</div>

The chart above shows the average age of issues in your backlog bucketed by age. A chart that skews heavily to the left is a good indicator that your backlog is not being maintained properly and that you may have issues that are outdated and irrelevant. The KPIs below the chart will help you identify where the highest concentration of issues are in your backlog. In this case, ~67% of issues in the backlog are older than 120 days!

<div align="center">
<img src={BlogAgeTable} className="doc_image" alt="Backlog Age Table"/>
</div>

Using the table above during backlog grooming sessions with the product team is a great opportunity to identify issues that are outdated and irrelevant and take action to address or remove them.

## Conclusion

Backlog maintenance is an important part of any software development process. It helps ensure that the team is working on the right things at the right time and prevents issues from falling through the cracks. NitroIQ can help you identify issues that are causing backlog maintenance issues and take action to address them. This can help improve team performance, reduce churn, and help you focus on the right things at the right time.

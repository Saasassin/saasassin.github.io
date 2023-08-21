---
sidebar_position: 1
---

import SampleScoreCard from './assets/sample_scorecard.png';

# Understanding Scorecards

NitroIQ applies scores to your Sprints, Assignees, Creators, and also scores your organization on high-level concepts like Innovation Rate.

<div align="center">
<img src={SampleScoreCard} className="doc_image"/>
</div>

## Why ScoreCards Matter

Scorecards are a convenient way to see, at-a-glance, how your team or individuals are performing against a given metrics. Scorecards also provide helpful text, describing the issues found and reasons for the score so you can better react to any of the issues presented.

:::info

Note that when you filter a specific page by Assignee, NitroIQ recalculates the score and assigns it to the selected Assignee, giving you an easy way to *grade* individual members on a metric. 

:::

## How ScoreCards are Computed

Below we describe a few of our methods for computing scorecards. Note that since we are constantly adding new metrics, this is only a sample. Look for the in-app help for more thorough descriptions of scorecards.

### Innovation Rate

Innovation Rate is a measure of new features vs. maintenance tasks over time. It is calculated by dividing the number of resolved Stories by the total number of Stories and Bugs.

For example, if a team has 10 Stories and 10 Bugs, their Innovation Rate would be 50%.

Teams with high Innovation Rates are spending the majority of their time on new features, while teams with low Innovation Rates are spending the majority of their time on maintenance tasks.

NitroIQ recommends that teams strive for an Innovation Rate of 75% or higher. This is an indication that the team is spending the majority of their time on new features rather than maintenance tasks.

### Churn Rate

Churn is a measure of lost productivity and highly distruptive to teams. It is the number of times an issue has rolled over from one sprint to the next. 

Churn Rate is the percentage of issues that have churned in the selected Sprints. A high churn rate indicates that a significant amount of work is not being completed as scheduled.

NitroIQ recommends a Churn Rate of less than 25% for teams to be considered productive. A Churn Rate of 50% or higher indicates that over half of committed work is not being completed as scheduled and is a sign of poor team performance.

### Completion Rate

Completion rate is a measure of how well a team is able to complete the work they commit to in a sprint.

A high completion rate is a good sign, but it is important to note that this may be a symptom of under-committing. Likewise, a low completion rate may be a sign of over-committing, high churn, and other disruptions.

NitroIQ recommends a completion rate of 75% or higher. Completion Rate is calculated as follows: `Completion Rate = (Completed Points / Committed Points) * 100`
---
title: Live on the Atlassian Marketplace
description: Launching NitroIQ on the Atlassian Marketplace
slug: nitroiq-atlassian-marketplace
authors: royrusso
tags: [nitroiq, jira]
image: https://nitroiq.io/img/nitroiq_logo_w_bg.png
hide_table_of_contents: false
---

import IntroVideo from './intro.gif';
import Sankey from './jira_board_column_flow.png';
import MarketPlace from './atlassian_marketplace.png';

## Live on the Atlassian Marketplace

<p align="center">
<a href="https://marketplace.atlassian.com/apps/1232080?tab=overview&hosting=cloud" target="_blank"><img src={MarketPlace} className="doc_image"/></a>
</p>

<p align="center">
<a href="https://marketplace.atlassian.com/apps/1232080?tab=overview&hosting=cloud">NitroIQ Marketplace Page ></a>
</p>

After several months of work, NitroIQ is generally available to the public on the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1232080?tab=overview&hosting=cloud). _(Visit the page for a gallery of images and a short video)_

NitroIQ is the JIRA plugin I always wanted and never had the time to build. After leaving my last job, I finally had the opportunity to work on a tool that would unlock the data hidden behind the JIRA scrum boards. Managing teams at scale and trying to find out where the bottlenecks are, which sprints perform better than others (and why), and which team members perform better than others (and why) is a difficult prospect in JIRA, and the included reporting doesn't help at all in this regard.

## Why NitroIQ?

JIRA data is locked behind a lot of API calls and individual issue changelogs. I needed a way to parse all of this data and distill it down in simple to use charts and tables that answered those pressing questions that allowed me to unblock and tune my teams and processes for maximum efficiency.

So what questions is NitroIQ seeking to answer?

<p align="center">
<img src={Sankey} className="doc_image"/>
</p>

- Where are my bottlenecks in process, statuses, teams, etc...?
- Are issue bouncing back-and-forth between statuses and teams?
- Are we spending most of our time as a company working on bugs and not innovating?
- What percentage of issues is rolling over sprint-over-sprint?
- What is the state of the backlog? Issue age and readiness to work on.
- Which team members are performing the most consistently sprint-over-sprint?

<!--truncate-->

## Reception so Far

More important than what they're saying, is what they're **doing** with the app!

Our team has witnessed teams change their behavior in several ways, from heavily pruning/adressing backlog items that are > 120 days old or issues that score badly with our algorithms, to engineering leads using the data we expose to have honest conversations on performance with team members and conversations with the business on engineering throughput and technical debt.

When I sit by CTOs and Product Managers using the application, I hear two things:

1. "This explains what I've been seeing", and
2. "Wait. This is interesting"

On the former, NitroIQ is proving/confirming what a lead always thought was occurring and couldn't explain why. On the latter, NitroIQ is exposing some hidden insights previously locked behind JIRAs data access.

Both of these reactions are exactly what anyone looking for product-market-fit is wanting to hear.

<p align="center">
<img src={IntroVideo} className="doc_image"/>
</p>

## Next Steps

NitroIQ is publicly available on the marketplace, free for the first 30 days.

New features are headed out every week as the team works on them, with Kanban board support coming in the next few months.

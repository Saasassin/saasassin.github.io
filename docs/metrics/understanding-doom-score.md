---
sidebar_position: 2
description: NitroIQ auto-scores issues in your backlog with a proprietary algorithm we call doom score. This score is a measure of impending concerns for Backlog issues that aren't believed to be ready for Sprint-assignment.
keywords: [backlog maintenance, doom score]
tags: [backlog maintenance, doom score]
---

import DoomScore from './assets/ss_doomscore.png';

# Understanding Doom Score

NitroIQ auto-scores issues in your backlog with a proprietary algorithm.

## Why Doom Score Matters

Doom Score is a measure of impending concerns for Backlog issues that aren't believed to be ready for Sprint-assignment.

Auto-assigning a score to every issue, allows you to more easily identify backlog issues that may need some editing before being assigned to a sprint, or even pointed.

<div align="center">
<img src={DoomScore} className="doc_image"/>
</div>

## How Doom Score is Computed

Doom Score is computed using a proprietary algorithm that scores each backlog issue independently on over 50 different dimensions (issue age, last updated, key fields missing, etc...), applying different weights to each factor.

:::warning

Issues with a Doom Score of 2 or higher are considered to be in a critical state and should be reviewed and addressed as soon as possible.

:::

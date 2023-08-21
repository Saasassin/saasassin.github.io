---
sidebar_position: 3
---

import Outliers from './assets/ss_outliers.png';
import OutliersEx from './assets/ss_outliers_ex.png';

# Understanding Outliers

NitroIQ naturally draws your attention to outliers in your data. Normally we will highlight Sprints or Issues that are considered to be statistical outliers.


## Why Outliers Matter

Outliers can be an indicator of a problem with the issue or the team's process.

For example, if an issue has a large number of status change events, it may be indicative of a problem with the issue itself, ie. the issue may be too large or too complex, the team member may not be breaking down work into small enough chunks, etc...

<div align="center">
<img src={Outliers} className="doc_image"/>
<br/>
<i>Highlighted outliers will appear with a light blue background in data tables.</i> 
</div>


## How Outliers are Computed

NitroIQ uses the Z-Score method to compute outliers. Any data point that is 1 std. deviation away from the mean, is considered an outlier. 

The z-score (`z = (x - mean) / standard deviation`) measures how many standard deviations a data point is away from the mean. Data points with a z-score beyond a certain threshold (e.g., 1) are considered outliers.

For example, the table below highlights two sprints that are outliers with both a high and low mean status change count compared to other sprints. 

<div align="center">
<img src={OutliersEx} className="doc_image"/>
</div>

In the example above, two sprints have had an unusual number of status change events for the issues assigned to them. 


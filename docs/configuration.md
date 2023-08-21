---
sidebar_position: 3
---

import ConfigureAssignees from './assets/configuration_assignees.png';


# Configuration

:::warning Configuration is Optional

**NitroIQ should work with your JIRA instance perfectly fine out-of-the-box**

:::

This section is documented for those with more customized JIRA instances that want a little more flexibility in how NitroIQ interprets their data.

The Configuration Screen is located under `Configuration` on the left navigation panel.

## Selecting Assignees

There are times when you don't want executive leadership or product managers showing up as *Assignees* in some of the filtering dropdowns. 

To remove individuals from appearing in the *Assignee* dropdown filter, simply assign them to be *Manager*:

<div align="center">
<img src={ConfigureAssignees} className="doc_image"/>
</div>

Once an individual is marked as a *Member*, they will no longer appear in the *Assignee* dropdown, for reporting.
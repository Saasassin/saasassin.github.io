---
sidebar_position: 4
---

import AppsMenu from './assets/apps_menu.png';
import SideNav from './assets/left_nav.png';
import TopFilter from './assets/top_filter.png';
import AssigneeFilter from './assets/assignee_select.png';

# Getting Around

This page covers navigating and filtering views within the NitroIQ appplication.

## Navigation

The application is accessible from within the top menu **Apps** dropdown in JIRA.

<p align="center">
<img src={AppsMenu} className="doc_image"/>
</p>

The left navigation sidebar contains all of the pages available to your instance of the application.

<p align="center">
<img src={SideNav} className="doc_image"/>
</p>

Use this navigation bar to navigate between pages.

## Filtering

### Filtering Board and Sprints

Most pages will contain a Board and Sprint filter at the very top that allows you to load data for Sprint belonging to a particular board.

<p align="center">
<img src={TopFilter} className="doc_image"/>
</p>

When loading the *Last N Sprints*, the page may refresh, as we analyze all of the newly-loaded data for the sprint.

:::caution

NitroIQ will only load boards that contain Scrum-style boards. Board that are of a different type, such as Kanban, will not be displayed!

:::


### Filtering Users

Some pages allow you to further filter down the tables and charts that comprise the page by an individual JIRA Member. Look for this selector on the top-right of the pages.

<p align="center">
<img src={AssigneeFilter} className="doc_image"/>
</p>

Once the page is filtered, all items on it will be scoped to that individual. Even scorecards will be assigned to this single member, as well as all other computations on the page.

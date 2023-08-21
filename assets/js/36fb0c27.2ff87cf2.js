"use strict";(self.webpackChunksaasassin_github_io=self.webpackChunksaasassin_github_io||[]).push([[812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,h=u["".concat(c,".").concat(p)]||u[p]||m[p]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a=r.p+"assets/images/sample_scorecard-a85407ca4fe7a55fb2fe09e352c1ee2e.png",i={sidebar_position:1},s="Understanding Scorecards",c={unversionedId:"metrics/understanding-scorecards",id:"metrics/understanding-scorecards",title:"Understanding Scorecards",description:"NitroIQ applies scores to your Sprints, Assignees, Creators, and also scores your organization on high-level concepts like Innovation Rate.",source:"@site/docs/metrics/understanding-scorecards.md",sourceDirName:"metrics",slug:"/metrics/understanding-scorecards",permalink:"/docs/metrics/understanding-scorecards",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/docs/category/metrics"},next:{title:"Understanding Doom Score",permalink:"/docs/metrics/understanding-doom-score"}},l={},d=[{value:"Why ScoreCards Matter",id:"why-scorecards-matter",level:2},{value:"How ScoreCards are Computed",id:"how-scorecards-are-computed",level:2},{value:"Innovation Rate",id:"innovation-rate",level:3},{value:"Churn Rate",id:"churn-rate",level:3},{value:"Completion Rate",id:"completion-rate",level:3}],u={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understanding-scorecards"},"Understanding Scorecards"),(0,o.kt)("p",null,"NitroIQ applies scores to your Sprints, Assignees, Creators, and also scores your organization on high-level concepts like Innovation Rate."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:a,className:"doc_image"})),(0,o.kt)("h2",{id:"why-scorecards-matter"},"Why ScoreCards Matter"),(0,o.kt)("p",null,"Scorecards are a convenient way to see, at-a-glance, how your team or individuals are performing against a given metrics. Scorecards also provide helpful text, describing the issues found and reasons for the score so you can better react to any of the issues presented."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that when you filter a specific page by Assignee, NitroIQ recalculates the score and assigns it to the selected Assignee, giving you an easy way to ",(0,o.kt)("em",{parentName:"p"},"grade")," individual members on a metric. ")),(0,o.kt)("h2",{id:"how-scorecards-are-computed"},"How ScoreCards are Computed"),(0,o.kt)("p",null,"Below we describe a few of our methods for computing scorecards. Note that since we are constantly adding new metrics, this is only a sample. Look for the in-app help for more thorough descriptions of scorecards."),(0,o.kt)("h3",{id:"innovation-rate"},"Innovation Rate"),(0,o.kt)("p",null,"Innovation Rate is a measure of new features vs. maintenance tasks over time. It is calculated by dividing the number of resolved Stories by the total number of Stories and Bugs."),(0,o.kt)("p",null,"For example, if a team has 10 Stories and 10 Bugs, their Innovation Rate would be 50%."),(0,o.kt)("p",null,"Teams with high Innovation Rates are spending the majority of their time on new features, while teams with low Innovation Rates are spending the majority of their time on maintenance tasks."),(0,o.kt)("p",null,"NitroIQ recommends that teams strive for an Innovation Rate of 75% or higher. This is an indication that the team is spending the majority of their time on new features rather than maintenance tasks."),(0,o.kt)("h3",{id:"churn-rate"},"Churn Rate"),(0,o.kt)("p",null,"Churn is a measure of lost productivity and highly distruptive to teams. It is the number of times an issue has rolled over from one sprint to the next. "),(0,o.kt)("p",null,"Churn Rate is the percentage of issues that have churned in the selected Sprints. A high churn rate indicates that a significant amount of work is not being completed as scheduled."),(0,o.kt)("p",null,"NitroIQ recommends a Churn Rate of less than 25% for teams to be considered productive. A Churn Rate of 50% or higher indicates that over half of committed work is not being completed as scheduled and is a sign of poor team performance."),(0,o.kt)("h3",{id:"completion-rate"},"Completion Rate"),(0,o.kt)("p",null,"Completion rate is a measure of how well a team is able to complete the work they commit to in a sprint."),(0,o.kt)("p",null,"A high completion rate is a good sign, but it is important to note that this may be a symptom of under-committing. Likewise, a low completion rate may be a sign of over-committing, high churn, and other disruptions."),(0,o.kt)("p",null,"NitroIQ recommends a completion rate of 75% or higher. Completion Rate is calculated as follows: ",(0,o.kt)("inlineCode",{parentName:"p"},"Completion Rate = (Completed Points / Committed Points) * 100")))}p.isMDXComponent=!0}}]);
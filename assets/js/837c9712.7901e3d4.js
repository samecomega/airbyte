"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3009],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(a),u=n,f=c["".concat(o,".").concat(u)]||c[u]||s[u]||l;return a?r.createElement(f,i(i({ref:e},d),{},{components:a})):r.createElement(f,i({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74082:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={},i="Mixpanel",p={unversionedId:"integrations/sources/mixpanel",id:"integrations/sources/mixpanel",title:"Mixpanel",description:"This page contains the setup guide and reference information for the Mixpanel source connector.",source:"@site/../docs/integrations/sources/mixpanel.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/mixpanel",permalink:"/integrations/sources/mixpanel",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/mixpanel.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Microsoft Teams",permalink:"/integrations/sources/microsoft-teams"},next:{title:"Monday",permalink:"/integrations/sources/monday"}},o={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up",id:"step-1-set-up",level:3},{value:"Step 2: Set up the Mixpanel connector in Airbyte",id:"step-2-set-up-the-mixpanel-connector-in-airbyte",level:3},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"CHANGELOG",id:"changelog",level:2}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mixpanel"},"Mixpanel"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Mixpanel source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mixpanel ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/service-accounts"},"Service Account")),(0,n.kt)("li",{parentName:"ul"},"Mixpanel ",(0,n.kt)("a",{parentName:"li",href:"https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings#project-id"},"Project ID")),(0,n.kt)("li",{parentName:"ul"},"Mixpanel ",(0,n.kt)("a",{parentName:"li",href:"https://help.mixpanel.com/hc/en-us/articles/115004547203-Manage-Timezones-for-Projects-in-Mixpanel"},"Project Timezone")),(0,n.kt)("li",{parentName:"ul"},"Project region ",(0,n.kt)("inlineCode",{parentName:"li"},"US")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"EU"))),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up"},"Step 1: Set up"),(0,n.kt)("p",null,"Please read ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mixpanel.com/reference/service-accounts"},"Find Service Account"),", and create your Service Account."),(0,n.kt)("p",null,"Select the correct region ","(","EU or US",")"," for your Mixpanel project. See detail ",(0,n.kt)("a",{parentName:"p",href:"https://help.mixpanel.com/hc/en-us/articles/360039135652-Data-Residency-in-EU"},"here")),(0,n.kt)("h3",{id:"step-2-set-up-the-mixpanel-connector-in-airbyte"},"Step 2: Set up the Mixpanel connector in Airbyte"),(0,n.kt)("p",null,"Choose start date, from which data will be synced"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note:")," If ",(0,n.kt)("inlineCode",{parentName:"p"},"start_date")," is not set, the connector will replicate data from up to one year ago by default."),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Mixpanel connector and select ",(0,n.kt)("strong",{parentName:"li"},"Mixpanel")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"start_date"),", from which your data will need to be synced")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Mixpanel source connector supports the following",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/integrations/sources/mongodb#full-refresh-sync"},"Full Refresh")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/integrations/sources/mongodb#incremental-sync"},"Incremental"))),(0,n.kt)("p",null,"Please note, that incremental sync could return duplicated ","(","old records",")"," for the state date due to API filter limitation, which is granular to the whole day only."),(0,n.kt)("h3",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/raw-event-export"},"Export")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/engage-query"},"Engage")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/funnels-query"},"Funnels")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/engage-query"},"Revenue")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/overview-1"},"Annotations")," ","(","Full table",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/cohorts-list"},"Cohorts")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/reference/engage-query"},"Cohort Members")," ","(","Incremental",")")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Due to quite low API rate-limits ","(",(0,n.kt)("strong",{parentName:"li"},"60 reqs per hour"),")",", syncing of huge date windows may be quite long"),(0,n.kt)("li",{parentName:"ul"},"If you're struggling with high RAM usage, try to decrease ",(0,n.kt)("inlineCode",{parentName:"li"},"date_window_size")," parameter in config")),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.28"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17699"},"17699")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix discover step issue cursor field None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.27"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17415"},"17415")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Disable stream "cohort_members" on discover if not access')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17145"},"17145")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Disable streams "export", "engage" on discover if not access')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16915"},"16915")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added Service Accounts support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16843"},"16843")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add stream=True for ",(0,n.kt)("inlineCode",{parentName:"td"},"export")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16770"},"16770")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Use "Retry-After" header for backoff')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16191"},"16191")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improved connector's input configuration validation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15091"},"15091")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve ",(0,n.kt)("inlineCode",{parentName:"td"},"export")," stream cursor support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15739"},"15739")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update ",(0,n.kt)("inlineCode",{parentName:"td"},"titile")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"description")," for ",(0,n.kt)("inlineCode",{parentName:"td"},"Project Secret")," field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14924"},"14924")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,n.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field from schemas and specs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13372"},"12801")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Acceptance tests fix, fixing some bugs for beta release")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12801"},"12801")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add end_date parameter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12482"},"12482")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11501"},"11501")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve incremental sync method to streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12335"},"12335")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adding fixtures to mock time.sleep for connectors that explicitly sleep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11633"},"11633")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increase unit test coverage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11318"},"11318")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change Response Reading")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11227"},"11227")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix cohort id always null in the cohort_members stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8578"},"8429")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated titles and descriptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8381"},"8381")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increased performance for ",(0,n.kt)("inlineCode",{parentName:"td"},"discovery")," stage during connector setup")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/8256"},"8256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deleted ",(0,n.kt)("inlineCode",{parentName:"td"},"date_window_size")," and fix schemas date type issue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7451"},"7451")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date")," older than 1 year")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7505"},"7505")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Guarantee that standard and custom mixpanel properties in the ",(0,n.kt)("inlineCode",{parentName:"td"},"Engage")," stream are written as strings")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7439"},"7439")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added delay for all streams to match API limitation of requests rate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/6075"},"6075")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added option to select project region")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/3698"},"3698")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Created CDK native mixpanel connector")))))}s.isMDXComponent=!0}}]);
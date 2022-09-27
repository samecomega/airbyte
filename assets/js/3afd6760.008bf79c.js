"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Config-based connectors overview",s={unversionedId:"connector-development/config-based/overview",id:"connector-development/config-based/overview",title:"Config-based connectors overview",description:"This framework is in alpha. It is still in active development and may include backward-incompatible changes. Please share feedback and requests directly with us at feedback@airbyte.io",source:"@site/../docs/connector-development/config-based/overview.md",sourceDirName:"connector-development/config-based",slug:"/connector-development/config-based/overview",permalink:"/connector-development/config-based/overview",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/overview.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Does this framework support the connector I want to build?",id:"does-this-framework-support-the-connector-i-want-to-build",level:2},{value:"Is this a HTTP REST API returning data as JSON?",id:"is-this-a-http-rest-api-returning-data-as-json",level:3},{value:"Do queries return the data synchronously or do they trigger a bulk workflow?",id:"do-queries-return-the-data-synchronously-or-do-they-trigger-a-bulk-workflow",level:3},{value:"What is the pagination mechanism?",id:"what-is-the-pagination-mechanism",level:3},{value:"What is the authorization mechanism?",id:"what-is-the-authorization-mechanism",level:3},{value:"Is the schema static or dynamic?",id:"is-the-schema-static-or-dynamic",level:3},{value:"Does the endpoint have a strict rate limit",id:"does-the-endpoint-have-a-strict-rate-limit",level:3},{value:"Supported features",id:"supported-features",level:2},{value:"Source",id:"source",level:2},{value:"Stream",id:"stream",level:2},{value:"Data retriever",id:"data-retriever",level:2},{value:"Data flow",id:"data-flow",level:3},{value:"Requester",id:"requester",level:2},{value:"Connection Checker",id:"connection-checker",level:2},{value:"Custom components",id:"custom-components",level:2},{value:"Sample connectors",id:"sample-connectors",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config-based-connectors-overview"},"Config-based connectors overview"),(0,r.kt)("p",null,"\u26a0\ufe0f This framework is in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/project-overview/product-release-stages/#alpha"},"alpha"),". It is still in active development and may include backward-incompatible changes. Please share feedback and requests directly with us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:feedback@airbyte.io"},"feedback@airbyte.io")," \u26a0\ufe0f"),(0,r.kt)("p",null,"The goal of this document is to give enough technical specifics to understand how config-based connectors work.\nWhen you're ready to start building a connector, you can start with ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/tutorial/getting-started"},"the tutorial"),", or dive into ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/"},"more detailed documentation"),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The CDK's config-based interface uses a declarative approach to building source connectors for REST APIs."),(0,r.kt)("p",null,"Config-based connectors work by parsing a YAML configuration describing the Source, then running the configured connector using a Python backend."),(0,r.kt)("p",null,"The process then submits HTTP requests to the API endpoint, and extracts records out of the response."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/yaml-structure"},"connector definition section")," for more information on the YAML file describing the connector."),(0,r.kt)("h2",{id:"does-this-framework-support-the-connector-i-want-to-build"},"Does this framework support the connector I want to build?"),(0,r.kt)("p",null,"Not all APIs are can be built using this framework because its featureset is still limited.\nThis section describes guidelines for determining whether a connector for a given API can be built using the config-based framework. Please let us know through the #lowcode-earlyaccess Slack channel if you'd like to build something that falls outside what we currently support and we'd be happy to discuss and prioritize in the coming months!"),(0,r.kt)("p",null,"Refer to the API's documentation to answer the following questions:"),(0,r.kt)("h3",{id:"is-this-a-http-rest-api-returning-data-as-json"},"Is this a HTTP REST API returning data as JSON?"),(0,r.kt)("p",null,"The API documentation should show which HTTP method must be used to retrieve data from the API.\nFor example, the ",(0,r.kt)("a",{parentName:"p",href:"https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab"},"documentation for the Exchange Rates Data API")," says the GET method should be used, and that the response is a JSON object."),(0,r.kt)("p",null,"Other API types such as SOAP or GraphQL are not supported."),(0,r.kt)("p",null,"Other encoding schemes such as CSV or Protobuf are not supported."),(0,r.kt)("p",null,"Integrations that require the use of an SDK are not supported."),(0,r.kt)("h3",{id:"do-queries-return-the-data-synchronously-or-do-they-trigger-a-bulk-workflow"},"Do queries return the data synchronously or do they trigger a bulk workflow?"),(0,r.kt)("p",null,"Some APIs return the data of interest as part of the response. This is the case for the ",(0,r.kt)("a",{parentName:"p",href:"https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab"},"Exchange Rates Data API")," - each request results in a response containing the data we're interested in."),(0,r.kt)("p",null,"Other APIs use bulk workflows, which means a query will trigger an asynchronous process on the integration's side. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#bulk-mark-tickets-as-spam"},"Zendesk bulk queries")," are an example of such integrations."),(0,r.kt)("p",null,"An initial request will trigger the workflow and return an ID and a job status. The actual data then needs to be fetched when the asynchronous job is completed."),(0,r.kt)("p",null,"Asynchronous bulk workflows are not supported."),(0,r.kt)("h3",{id:"what-is-the-pagination-mechanism"},"What is the pagination mechanism?"),(0,r.kt)("p",null,"The only pagination mechanisms supported are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Offset count passed either by query params or request header such as ",(0,r.kt)("a",{parentName:"li",href:"https://docs.sendgrid.com/api-reference/bounces-api/retrieve-all-bounces"},"Sendgrid")),(0,r.kt)("li",{parentName:"ul"},"Page count passed either by query params or request header such as ",(0,r.kt)("a",{parentName:"li",href:"https://developers.greenhouse.io/harvest.html#get-list-applications"},"Greenhouse")),(0,r.kt)("li",{parentName:"ul"},"Cursor field pointing to the URL of the next page of records such as ",(0,r.kt)("a",{parentName:"li",href:"https://docs.sentry.io/api/pagination/"},"Sentry"))),(0,r.kt)("h3",{id:"what-is-the-authorization-mechanism"},"What is the authorization mechanism?"),(0,r.kt)("p",null,"Endpoints that require ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/authentication#apikeyauthenticator"},"authenticating using a query param or a HTTP header"),", as is the case for the ",(0,r.kt)("a",{parentName:"p",href:"https://apilayer.com/marketplace/exchangerates_data-api#authentication"},"Exchange Rates Data API"),", are supported."),(0,r.kt)("p",null,"Endpoints that require ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/authentication#basichttpauthenticator"},"authenticating using Basic Auth over HTTPS"),", as is the case for ",(0,r.kt)("a",{parentName:"p",href:"https://developers.greenhouse.io/harvest.html#authentication"},"Greenhouse"),", are supported."),(0,r.kt)("p",null,"Endpoints that require ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/authentication#oauth"},"authenticating using OAuth 2.0"),", as is the case for ",(0,r.kt)("a",{parentName:"p",href:"https://developers.strava.com/docs/authentication/#introduction"},"Strava"),", are supported."),(0,r.kt)("p",null,"Other authentication schemes such as GWT are not supported."),(0,r.kt)("h3",{id:"is-the-schema-static-or-dynamic"},"Is the schema static or dynamic?"),(0,r.kt)("p",null,"Only static schemas are supported."),(0,r.kt)("p",null,"Dynamically deriving the schema from querying an endpoint is not supported."),(0,r.kt)("h3",{id:"does-the-endpoint-have-a-strict-rate-limit"},"Does the endpoint have a strict rate limit"),(0,r.kt)("p",null,"Throttling is not supported, but the connector can use exponential backoff to avoid API bans in case it gets rate limited. This can work for APIs with high rate limits, but not for those that have strict limits on a small time-window, such as the ",(0,r.kt)("a",{parentName:"p",href:"https://ads-api.reddit.com/docs/#section/Rate-Limits"},"Reddit Ads API"),", which limits to 1 request per second."),(0,r.kt)("h2",{id:"supported-features"},"Supported features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Support"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transport protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP methods"),(0,r.kt)("td",{parentName:"tr",align:null},"GET, POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data format"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource type"),(0,r.kt)("td",{parentName:"tr",align:null},"Collections",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/substreams"},"Sub-collection"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/pagination"},"Pagination")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/pagination#page-increment"},"Page limit"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/pagination#offset-increment"},"Offset"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/pagination#cursor"},"Cursor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/authentication"},"Authentication")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/authentication#ApiKeyAuthenticator"},"Header based"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/authentication#BearerAuthenticator"},"Bearer"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/authentication#BasicHttpAuthenticator"},"Basic"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/authentication#OAuth"},"OAuth"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Full refresh",(0,r.kt)("br",null),"Incremental")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schema discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"Static schemas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/stream-slicers"},"Stream slicing")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/stream-slicers#Datetime"},"Datetime"),", ",(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/stream-slicers#list-stream-slicer"},"lists"),", ",(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/stream-slicers#Substream-slicer"},"parent-resource id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/record-selector"},"Record transformation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/record-selector#selecting-a-field"},"Field selection"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/record-selector#adding-fields"},"Adding fields"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/record-selector#removing-fields"},"Removing fields"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/record-selector#filtering-records"},"Filtering records"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/error-handling"},"Error detection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/error-handling#from-status-code"},"From HTTP status  code"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/error-handling#from-error-message"},"From error message"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/error-handling#Backoff-Strategies"},"Backoff strategies")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/error-handling#Exponential-backoff"},"Exponential"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/error-handling#Constant-Backoff"},"Constant"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/error-handling#Wait-time-defined-in-header"},"Derived from headers"))))),(0,r.kt)("p",null,"If a feature you require is not supported, you can ",(0,r.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/#requesting-new-features"},"request the feature")," and use the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/"},"Python CDK"),"."),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,"Config-based connectors are a declarative way to define HTTP API sources."),(0,r.kt)("p",null,"A source is defined by 2 components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The source's ",(0,r.kt)("inlineCode",{parentName:"li"},"Stream"),"s, which define the data to read"),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectionChecker"),", which describes how to run the ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," operation to test the connection to the API source")),(0,r.kt)("h2",{id:"stream"},"Stream"),(0,r.kt)("p",null,"Streams define the schema of the data to sync, as well as how to read it from the underlying API source.\nA stream generally corresponds to a resource within the API. They are analogous to tables for a relational database source."),(0,r.kt)("p",null,"A stream is defined by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A name"),(0,r.kt)("li",{parentName:"ol"},"Primary key (Optional): Used to uniquely identify records, enabling deduplication. Can be a string for single primary keys, a list of strings for composite primary keys, or a list of list of strings for composite primary keys consisting of nested fields"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/schemas"},"Schema"),": Describes the data to sync"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/overview#data-retriever"},"Data retriever"),": Describes how to retrieve the data from the API"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/incremental-stream"},"Cursor field")," (Optional): Field to use as stream cursor. Can either be a string, or a list of strings if the cursor is a nested field."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/record-selector#transformations"},"Transformations")," (Optional): A set of transformations to be applied on the records read from the source before emitting them to the destination"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/airbyte-protocol/#state--checkpointing"},"Checkpoint interval")," (Optional): Defines the interval, in number of records, at which incremental syncs should be checkpointed")),(0,r.kt)("p",null,"More details on streams and sources can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/basic-concepts"},"basic concepts section"),"."),(0,r.kt)("h2",{id:"data-retriever"},"Data retriever"),(0,r.kt)("p",null,"The data retriever defines how to read the data for a Stream, and acts as an orchestrator for the data retrieval flow.\nThere is currently only one implementation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleRetriever"),", which is defined by"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Requester: Describes how to submit requests to the API source"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/pagination"},"Paginator"),": Describes how to navigate through the API's pages"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/record-selector"},"Record selector"),": Describes how to extract records from a HTTP response"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/stream-slicers"},"Stream Slicer"),": Describes how to partition the stream, enabling incremental syncs and checkpointing")),(0,r.kt)("p",null,"Each of those components (and their subcomponents) are defined by an explicit interface and one or many implementations.\nThe developer can choose and configure the implementation they need depending on specifications of the integration they are building against."),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"Retriever")," is defined as part of the Stream configuration, different Streams for a given Source can use different ",(0,r.kt)("inlineCode",{parentName:"p"},"Retriever")," definitions if needed."),(0,r.kt)("h3",{id:"data-flow"},"Data flow"),(0,r.kt)("p",null,"The retriever acts as a coordinator, moving the data between its components before emitting ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteMessage"),"s that can be read by the platform.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleRetriever"),"'s data flow can be described as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Given the connection config and the current stream state, the ",(0,r.kt)("inlineCode",{parentName:"li"},"StreamSlicer")," computes the stream slices to read."),(0,r.kt)("li",{parentName:"ol"},"Iterate over all the stream slices defined by the stream slicer."),(0,r.kt)("li",{parentName:"ol"},"For each stream slice,",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Submit a request as defined by the requester"),(0,r.kt)("li",{parentName:"ol"},"Select the records from the response"),(0,r.kt)("li",{parentName:"ol"},"Repeat for as long as the paginator points to a next page")))),(0,r.kt)("p",null,"More details on the record selector can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/record-selector"},"record selector section"),"."),(0,r.kt)("p",null,"More details on the stream slicers can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/stream-slicers"},"stream slicers section"),"."),(0,r.kt)("p",null,"More details on the paginator can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/pagination"},"pagination section"),"."),(0,r.kt)("h2",{id:"requester"},"Requester"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Requester")," defines how to prepare HTTP requests to send to the source API.\nThere is currently only one implementation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpRequester"),", which is defined by"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A base url: The root of the API source"),(0,r.kt)("li",{parentName:"ol"},"A path: The specific endpoint to fetch data from for a resource"),(0,r.kt)("li",{parentName:"ol"},"The HTTP method: the HTTP method to use (GET or POST)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/request-options"},"A request options provider"),": Defines the request parameters (query parameters), headers, and request body to set on outgoing HTTP requests"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/authentication"},"An authenticator"),": Defines how to authenticate to the source"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/error-handling"},"An error handler"),": Defines how to handle errors")),(0,r.kt)("h2",{id:"connection-checker"},"Connection Checker"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionChecker")," defines how to test the connection to the integration."),(0,r.kt)("p",null,"The only implementation as of now is ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckStream"),", which tries to read a record from a specified list of streams and fails if no records could be read."),(0,r.kt)("h2",{id:"custom-components"},"Custom components"),(0,r.kt)("p",null,"Any builtin components can be overloaded by a custom Python class.\nTo create a custom component, define a new class in a new file in the connector's module.\nThe class must implement the interface of the component it is replacing. For instance, a pagination strategy must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_cdk.sources.declarative.requesters.paginators.strategies.pagination_strategy.PaginationStrategy"),".\nThe class must also be a dataclass where each field represents an argument to configure from the yaml file, and an ",(0,r.kt)("inlineCode",{parentName:"p"},"InitVar")," named options."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@dataclass\nclass MyPaginationStrategy(PaginationStrategy):\n  my_field: Union[InterpolatedString, str]\n  options: InitVar[Mapping[str, Any]]\n\n  def __post_init__(self, options: Mapping[str, Any]):\n    pass\n\n  def next_page_token(self, response: requests.Response, last_records: List[Mapping[str, Any]]) -> Optional[Any]:\n    pass\n\n  def reset(self):\n    pass\n")),(0,r.kt)("p",null,"This class can then be referred from the yaml file using its fully qualified class name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination_strategy:\n  class_name: "my_connector_module.MyPaginationStrategy"\n  my_field: "hello world"\n')),(0,r.kt)("h2",{id:"sample-connectors"},"Sample connectors"),(0,r.kt)("p",null,"The following connectors can serve as example of what production-ready config-based connectors look like"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-greenhouse"},"Greenhouse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-sendgrid/source_sendgrid/sendgrid.yaml"},"Sendgrid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-sentry/source_sentry/sentry.yaml"},"Sentry"))))}p.isMDXComponent=!0}}]);
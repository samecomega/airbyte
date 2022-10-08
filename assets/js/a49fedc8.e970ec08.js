"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},s="Stream Slicers",o={unversionedId:"connector-development/config-based/understanding-the-yaml-file/stream-slicers",id:"connector-development/config-based/understanding-the-yaml-file/stream-slicers",title:"Stream Slicers",description:"StreamSlicers define how to partition a stream into a subset of records.",source:"@site/../docs/connector-development/config-based/understanding-the-yaml-file/stream-slicers.md",sourceDirName:"connector-development/config-based/understanding-the-yaml-file",slug:"/connector-development/config-based/understanding-the-yaml-file/stream-slicers",permalink:"/connector-development/config-based/understanding-the-yaml-file/stream-slicers",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/understanding-the-yaml-file/stream-slicers.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Record selector",permalink:"/connector-development/config-based/understanding-the-yaml-file/record-selector"},next:{title:"Advanced Topics",permalink:"/connector-development/config-based/advanced-topics"}},l={},p=[{value:"Single slice",id:"single-slice",level:3},{value:"DatetimeStreamSlicer",id:"datetimestreamslicer",level:3},{value:"Cursor update",id:"cursor-update",level:4},{value:"Stream slicer on dates",id:"stream-slicer-on-dates",level:4},{value:"List stream slicer",id:"list-stream-slicer",level:3},{value:"Cartesian Product stream slicer",id:"cartesian-product-stream-slicer",level:3},{value:"SubstreamSlicer",id:"substreamslicer",level:2},{value:"Nested streams",id:"nested-streams",level:2},{value:"More readings",id:"more-readings",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stream-slicers"},"Stream Slicers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StreamSlicer"),"s define how to partition a stream into a subset of records."),(0,a.kt)("p",null,"It can be thought of as an iterator over the stream's data, where a ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamSlice")," is the retriever's unit of work."),(0,a.kt)("p",null,"When a stream is read incrementally, a state message will be output by the connector after reading every slice, which allows for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/understanding-airbyte/airbyte-protocol/#state--checkpointing"},"checkpointing"),"."),(0,a.kt)("p",null,"At the beginning of a ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," operation, the ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamSlicer")," will compute the slices to sync given the connection config and the stream's current state,\nAs the ",(0,a.kt)("inlineCode",{parentName:"p"},"Retriever")," reads data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Source"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamSlicer")," keeps track of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream"),"'s state, which will be emitted after reading each stream slice."),(0,a.kt)("p",null,"More information about stream slicing can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/stream-slices"},"stream-slices section"),"."),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  StreamSlicer:\n    type: object\n    anyOf:\n      - "$ref": "#/definitions/DatetimeStreamSlicer"\n      - "$ref": "#/definitions/ListStreamSlicer"\n      - "$ref": "#/definitions/CartesianProductStreamSlicer"\n      - "$ref": "#/definitions/SubstreamSlicer"\n      - "$ref": "#/definitions/SingleSlice"\n')),(0,a.kt)("h3",{id:"single-slice"},"Single slice"),(0,a.kt)("p",null,"The single slice only produces one slice for the whole stream."),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  SingleSlice:\n    type: object\n    additionalProperties: true\n")),(0,a.kt)("h3",{id:"datetimestreamslicer"},"DatetimeStreamSlicer"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DatetimeStreamSlicer")," iterates over a datetime range by partitioning it into time windows.\nThis is done by slicing the stream on the records' cursor value, defined by the Stream's ",(0,a.kt)("inlineCode",{parentName:"p"},"cursor_field"),"."),(0,a.kt)("p",null,"Given a start time, an end time, and a step function, it will partition the interval ","[start, end]"," into small windows of the size described by the step.\nFor instance,"),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  DatetimeStreamSlicer:\n    type: object\n    required:\n      - start_datetime\n      - end_datetime\n      - step\n      - cursor_field\n      - datetime_format\n    additional_properties: false\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      start_datetime:\n        "$ref": "#/definitions/MinMaxDatetime"\n      end_datetime:\n        "$ref": "#/definitions/MinMaxDatetime"\n      step:\n        type: string\n      cursor_field:\n        type: string\n      datetime_format:\n        type: string\n      start_time_option:\n        "$ref": "#/definitions/RequestOption"\n      end_time_option:\n        "$ref": "#/definitions/RequestOption"\n      stream_state_field_start:\n        type: string\n      stream_state_field_end:\n        type: string\n      lookback_window:\n        type: string\n  MinMaxDatetime:\n    type: object\n    required:\n      - datetime\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      datetime:\n        type: string\n      datetime_format:\n        type: string\n      min_datetime:\n        type: string\n      max_datetime:\n        type: string\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_slicer:\n  start_datetime: "2021-02-01T00:00:00.000000+0000",\n  end_datetime: "2021-03-01T00:00:00.000000+0000",\n  step: "1d"\n')),(0,a.kt)("p",null,"will create one slice per day for the interval ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-02-01")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-03-01"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DatetimeStreamSlicer")," also supports an optional lookback window, specifying how many days before the start_datetime to read data for."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_slicer:\n  start_datetime: "2021-02-01T00:00:00.000000+0000",\n  end_datetime: "2021-03-01T00:00:00.000000+0000",\n  lookback_window: "31d"\n  step: "1d"\n')),(0,a.kt)("p",null,"will read data from ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-01-01")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-03-01"),"."),(0,a.kt)("p",null,"The stream slices will be of the form ",(0,a.kt)("inlineCode",{parentName:"p"},'{"start_date": "2021-02-01T00:00:00.000000+0000", "end_date": "2021-02-01T00:00:00.000000+0000"}'),"\nThe stream slices' field names can be customized through the ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_state_field_start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_state_field_end")," parameters."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"datetime_format")," can be used to specify the format of the start and end time. It is ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3339#section-5.6"},"RFC3339")," by default."),(0,a.kt)("p",null,"The Stream's state will be derived by reading the record's ",(0,a.kt)("inlineCode",{parentName:"p"},"cursor_field"),".\nIf the ",(0,a.kt)("inlineCode",{parentName:"p"},"cursor_field")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"created"),", and the record is ",(0,a.kt)("inlineCode",{parentName:"p"},'{"id": 1234, "created": "2021-02-02T00:00:00.000000+0000"}'),", then the state after reading that record is ",(0,a.kt)("inlineCode",{parentName:"p"},'"created": "2021-02-02T00:00:00.000000+0000"'),". ",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("h4",{id:"cursor-update"},"Cursor update"),(0,a.kt)("p",null,"When reading data from the source, the cursor value will be updated to the max datetime between"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The last record's cursor field"),(0,a.kt)("li",{parentName:"ul"},"The start of the stream slice"),(0,a.kt)("li",{parentName:"ul"},"The current cursor value. This ensures that the cursor will be updated even if a stream slice does not contain any data")),(0,a.kt)("h4",{id:"stream-slicer-on-dates"},"Stream slicer on dates"),(0,a.kt)("p",null,"If an API supports filtering data based on the cursor field, the ",(0,a.kt)("inlineCode",{parentName:"p"},"start_time_option")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"end_time_option")," parameters can be used to configure this filtering.\nFor instance, if the API supports filtering using the request parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"created[gte]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"created[lte]"),", then the stream slicer can specify the request parameters as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_slicer:\n  type: "DatetimeStreamSlicer"\n  <...>\n  start_time_option:\n    field_name: "created[gte]"\n    inject_into: "request_parameter"\n  end_time_option:\n    field_name: "created[lte]"\n    inject_into: "request_parameter"\n')),(0,a.kt)("h3",{id:"list-stream-slicer"},"List stream slicer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ListStreamSlicer")," iterates over values from a given list.\nIt is defined by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The slice values, which are the valid values for the cursor field"),(0,a.kt)("li",{parentName:"ul"},"The cursor field on a record"),(0,a.kt)("li",{parentName:"ul"},"request_option: optional request option to set on outgoing request parameters")),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  ListStreamSlicer:\n    type: object\n    required:\n      - slice_values\n      - cursor_field\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      slice_values:\n        type: array\n        items:\n          type: string\n      cursor_field:\n        type: string\n      request_option:\n        "$ref": "#/definitions/RequestOption"\n')),(0,a.kt)("p",null,'As an example, this stream slicer will iterate over the 2 repositories ("airbyte" and "airbyte-secret") and will set a request_parameter on outgoing HTTP requests.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_slicer:\n  type: "ListStreamSlicer"\n  slice_values:\n    - "airbyte"\n    - "airbyte-secret"\n  cursor_field: "repository"\n  request_option:\n    field_name: "repository"\n    inject_into: "request_parameter"\n')),(0,a.kt)("h3",{id:"cartesian-product-stream-slicer"},"Cartesian Product stream slicer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CartesianProductStreamSlicer")," iterates over the cartesian product of its underlying stream slicers."),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  CartesianProductStreamSlicer:\n    type: object\n    required:\n      - stream_slicers\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      stream_slicers:\n        type: array\n        items:\n          "$ref": "#/definitions/StreamSlicer"\n')),(0,a.kt)("p",null,"Given 2 stream slicers with the following slices:\nA: ",(0,a.kt)("inlineCode",{parentName:"p"},'[{"start_date": "2021-01-01", "end_date": "2021-01-01"}, {"start_date": "2021-01-02", "end_date": "2021-01-02"}]'),"\nB: ",(0,a.kt)("inlineCode",{parentName:"p"},'[{"s": "hello"}, {"s": "world"}]'),"\nthe resulting stream slices are"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n    {"start_date": "2021-01-01", "end_date": "2021-01-01", "s": "hello"},\n    {"start_date": "2021-01-01", "end_date": "2021-01-01", "s": "world"},\n    {"start_date": "2021-01-02", "end_date": "2021-01-02", "s": "hello"},\n    {"start_date": "2021-02-01", "end_date": "2021-02-01", "s": "world"},\n]\n')),(0,a.kt)("h2",{id:"substreamslicer"},"SubstreamSlicer"),(0,a.kt)("p",null,"Substreams are streams that depend on the records on another stream"),(0,a.kt)("p",null,"We might for instance want to read all the commits for a given repository (parent stream)."),(0,a.kt)("p",null,"Substreams are implemented by defining their stream slicer as a",(0,a.kt)("inlineCode",{parentName:"p"},"SubstreamSlicer"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SubstreamSlicer")," iterates over the parent's stream slices.\nWe might for instance want to read all the commits for a given repository (parent resource)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"what the parent stream is"),(0,a.kt)("li",{parentName:"ul"},"what is the key of the records in the parent stream"),(0,a.kt)("li",{parentName:"ul"},"what is the field defining the stream slice representing the parent record"),(0,a.kt)("li",{parentName:"ul"},"how to specify that information on an outgoing HTTP request")),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  SubstreamSlicer:\n    type: object\n    required:\n      - parent_stream_configs\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      parent_stream_configs:\n        type: array\n        items:\n          "$ref": "#/definitions/ParentStreamConfig"\n  ParentStreamConfig:\n    type: object\n    required:\n      - stream\n      - parent_key\n      - stream_slice_field\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      stream:\n        "$ref": "#/definitions/Stream"\n      parent_key:\n        type: string\n      stream_slice_field:\n        type: string\n      request_option:\n        "$ref": "#/definitions/RequestOption"\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_slicer:\n  type: "SubstreamSlicer"\n  parent_streams_configs:\n    - stream: "*ref(repositories_stream)"\n      parent_key: "id"\n      stream_slice_field: "repository"\n      request_option:\n        field_name: "repository"\n        inject_into: "request_parameter"\n')),(0,a.kt)("p",null,'REST APIs often nest sub-resources in the URL path.\nIf the URL to fetch commits was "/repositories/:id/commits", then the ',(0,a.kt)("inlineCode",{parentName:"p"},"Requester"),"'s path would need to refer to the stream slice's value and no ",(0,a.kt)("inlineCode",{parentName:"p"},"request_option")," would be set:"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'retriever:\n  <...>\n  requester:\n    <...>\n    path: "/respositories/{{ stream_slice.repository }}/commits"\n  stream_slicer:\n    type: "SubstreamSlicer"\nparent_streams_configs:\n  - stream: "*ref(repositories_stream)"\n    parent_key: "id"\n    stream_slice_field: "repository"\n')),(0,a.kt)("h2",{id:"nested-streams"},"Nested streams"),(0,a.kt)("p",null,"Nested streams, subresources, or streams that depend on other streams can be implemented using a ",(0,a.kt)("a",{parentName:"p",href:"#SubstreamSlicer"},(0,a.kt)("inlineCode",{parentName:"a"},"SubstreamSlicer"))),(0,a.kt)("h2",{id:"more-readings"},"More readings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/incremental-stream"},"Incremental streams")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/stream-slices"},"Stream slices"))),(0,a.kt)("p",null,(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," This is a slight oversimplification. See ",(0,a.kt)("a",{parentName:"p",href:"#cursor-update"},"update cursor section")," for more details on how the cursor is updated."))}m.isMDXComponent=!0}}]);
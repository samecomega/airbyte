"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Request Options",s={unversionedId:"connector-development/config-based/request-options",id:"connector-development/config-based/request-options",title:"Request Options",description:"There are a few ways to set request parameters, headers, and body on ongoing HTTP requests.",source:"@site/../docs/connector-development/config-based/request-options.md",sourceDirName:"connector-development/config-based",slug:"/connector-development/config-based/request-options",permalink:"/connector-development/config-based/request-options",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/request-options.md",tags:[],version:"current",frontMatter:{}},p={},l=[{value:"Request Options Provider",id:"request-options-provider",level:2},{value:"Authenticators",id:"authenticators",level:2},{value:"Paginators",id:"paginators",level:2},{value:"Stream slicers",id:"stream-slicers",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"request-options"},"Request Options"),(0,o.kt)("p",null,"There are a few ways to set request parameters, headers, and body on ongoing HTTP requests."),(0,o.kt)("h2",{id:"request-options-provider"},"Request Options Provider"),(0,o.kt)("p",null,"The primary way to set request options is through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Requester"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestOptionsProvider"),".\nThe options can be configured as key value pairs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'requester:\n  type: HttpRequester\n  name: "{{ options[\'name\'] }}"\n  url_base: "https://api.exchangeratesapi.io/v1/"\n  http_method: "GET"\n  request_options_provider:\n    request_parameters:\n      k1: v1\n      k2: v2\n    request_headers:\n      header_key1: header_value1\n      header_key2: header_value2\n')),(0,o.kt)("p",null,"It is also possible to configure add a json-encoded body to outgoing requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'requester:\n  type: HttpRequester\n  name: "{{ options[\'name\'] }}"\n  url_base: "https://api.exchangeratesapi.io/v1/"\n  http_method: "GET"\n  request_options_provider:\n    request_body_json:\n      key: value\n')),(0,o.kt)("h2",{id:"authenticators"},"Authenticators"),(0,o.kt)("p",null,"It is also possible for authenticators to set request parameters or headers as needed.\nFor instance, the ",(0,o.kt)("inlineCode",{parentName:"p"},"BearerAuthenticator")," will always set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header."),(0,o.kt)("p",null,"More details on the various authenticators can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/connector-development/config-based/authentication"},"authentication section")),(0,o.kt)("h2",{id:"paginators"},"Paginators"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LimitPaginator")," can optionally set request options through the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit_option")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"page_token_option"),".\nThe respective values can be set on the outgoing HTTP requests by specifying where it should be injected."),(0,o.kt)("p",null,'The following example will set the "page" request parameter value to the page to fetch, and the "page_size" request parameter to 5:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'paginator:\n  type: "LimitPaginator"\n  page_size: 5\n  limit_option:\n    option_type: request_parameter\n    field_name: page_size\n  pagination_strategy:\n    type: "PageIncrement"\n  page_token:\n    option_type: "request_parameter"\n    field_name: "page"\n')),(0,o.kt)("p",null,"More details on paginators can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/connector-development/config-based/pagination"},"pagination section")),(0,o.kt)("h2",{id:"stream-slicers"},"Stream slicers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DatetimeStreamSlicer")," can optionally set request options through the ",(0,o.kt)("inlineCode",{parentName:"p"},"start_time_option")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"end_time_option")," fields.\nThe respective values can be set on the outgoing HTTP requests by specifying where it should be injected."),(0,o.kt)("p",null,'The following example will set the "created',"[gte]",'" request parameter value to the start of the time window, and "created',"[lte]",'" to the end of the time window.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_slicer:\n  start_datetime: "2021-02-01T00:00:00.000000+0000",\n  end_datetime: "2021-03-01T00:00:00.000000+0000",\n  step: "1d"\n  start_time_option:\n    field_name: "created[gte]"\n    inject_into: "request_parameter"\n  end_time_option:\n    field_name: "created[lte]"\n    inject_into: "request_parameter"\n')),(0,o.kt)("p",null,"More details on the stream slicers can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/connector-development/config-based/stream-slicers"},"stream-slicers section")))}u.isMDXComponent=!0}}]);
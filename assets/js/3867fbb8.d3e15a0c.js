"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43089],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},57454:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={},u="FilterRowKind",s={unversionedId:"transform-v2/filter-rowkind",id:"version-2.3.2/transform-v2/filter-rowkind",title:"FilterRowKind",description:"FilterRowKind transform plugin",source:"@site/versioned_docs/version-2.3.2/transform-v2/filter-rowkind.md",sourceDirName:"transform-v2",slug:"/transform-v2/filter-rowkind",permalink:"/docs/2.3.2/transform-v2/filter-rowkind",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/transform-v2/filter-rowkind.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"FieldMapper",permalink:"/docs/2.3.2/transform-v2/field-mapper"},next:{title:"Filter",permalink:"/docs/2.3.2/transform-v2/filter"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"include_kinds array",id:"include_kinds-array",level:3},{value:"exclude_kinds array",id:"exclude_kinds-array",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"filterrowkind"},"FilterRowKind"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"FilterRowKind transform plugin")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Filter the data by RowKind"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"include_kinds"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"exclude_kinds"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"include_kinds-array"},"include_kinds ","[array]"),(0,i.kt)("p",null,"The row kinds to include"),(0,i.kt)("h3",{id:"exclude_kinds-array"},"exclude_kinds ","[array]"),(0,i.kt)("p",null,"The row kinds to exclude."),(0,i.kt)("p",null,"You can only config one of ",(0,i.kt)("inlineCode",{parentName:"p"},"include_kinds")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude_kinds"),"."),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.3.2/transform-v2/common-options"},"Transform Plugin")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The RowKink of the data generate by FakeSource is ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),", If we use ",(0,i.kt)("inlineCode",{parentName:"p"},"FilterRowKink")," transform and exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," data, we will write zero rows into sink."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\nenv {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  FilterRowKind {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    exclude_kinds = ["INSERT"]\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n}\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[16302],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),h=o,m=f["".concat(l,".").concat(h)]||f[h]||d[h]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6849:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return h}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],s={sidebar_position:2},l=void 0,c={unversionedId:"concept/config",id:"version-2.3.2/concept/config",title:"config",description:"----------------",source:"@site/versioned_docs/version-2.3.2/concept/config.md",sourceDirName:"concept",slug:"/concept/config",permalink:"/zh-CN/docs/2.3.2/concept/config",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/concept/config.md",tags:[],version:"2.3.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Set Up with Kubernetes",permalink:"/zh-CN/docs/2.3.2/start-v2/kubernetes/"},next:{title:"Intro To Connector V2 Features",permalink:"/zh-CN/docs/2.3.2/concept/connector-v2-features"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Config file structure",id:"config-file-structure",level:2},{value:"hocon",id:"hocon",level:3},{value:"json",id:"json",level:3},{value:"env",id:"env",level:3},{value:"source",id:"source",level:3},{value:"transform",id:"transform",level:3},{value:"sink",id:"sink",level:3},{value:"Other",id:"other",level:3},{value:"What&#39;s More",id:"whats-more",level:2}],f={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"intro-to-config-file"},"Intro to config file"),(0,r.kt)("p",null,"In SeaTunnel, the most important thing is the Config file, through which users can customize their own data\nsynchronization requirements to maximize the potential of SeaTunnel. So next, I will introduce you how to\nconfigure the Config file."),(0,r.kt)("p",null,"The main format of the Config file is ",(0,r.kt)("inlineCode",{parentName:"p"},"hocon"),", for more details of this format type you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON-GUIDE"),",\nBTW, we also support the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," format, but you should know that the name of the config file should end with ",(0,r.kt)("inlineCode",{parentName:"p"},".json")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Before you read on, you can find config file\nexamples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/tree/dev/config"},"here")," and in distribute package's\nconfig directory."),(0,r.kt)("h2",{id:"config-file-structure"},"Config file structure"),(0,r.kt)("p",null,"The Config file will be similar to the one below."),(0,r.kt)("h3",{id:"hocon"},"hocon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n        card = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  Filter {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    fields = [name, card]\n  }\n}\n\nsink {\n  Clickhouse {\n    host = "clickhouse:8123"\n    database = "default"\n    table = "seatunnel_console"\n    fields = ["name", "card"]\n    username = "default"\n    password = ""\n    source_table_name = "fake1"\n  }\n}\n')),(0,r.kt)("h3",{id:"json"},"json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "env": {\n    "job.mode": "batch"\n  },\n  "source": [\n    {\n      "plugin_name": "FakeSource",\n      "result_table_name": "fake",\n      "row.num": 100,\n      "schema": {\n        "fields": {\n          "name": "string",\n          "age": "int",\n          "card": "int"\n        }\n      }\n    }\n  ],\n  "transform": [\n    {\n      "plugin_name": "Filter",\n      "source_table_name": "fake",\n      "result_table_name": "fake1",\n      "fields": ["name", "card"]\n    }\n  ],\n  "sink": [\n    {\n      "plugin_name": "Clickhouse",\n      "host": "clickhouse:8123",\n      "database": "default",\n      "table": "seatunnel_console",\n      "fields": ["name", "card"],\n      "username": "default",\n      "password": "",\n      "source_table_name": "fake1"\n    }\n  ]\n}\n\n')),(0,r.kt)("p",null,"As you can see, the Config file contains several sections: env, source, transform, sink. Different modules\nhave different functions. After you understand these modules, you will understand how SeaTunnel works."),(0,r.kt)("h3",{id:"env"},"env"),(0,r.kt)("p",null,"Used to add some engine optional parameters, no matter which engine (Spark or Flink), the corresponding\noptional parameters should be filled in here."),(0,r.kt)("h3",{id:"source"},"source"),(0,r.kt)("p",null,"source is used to define where SeaTunnel needs to fetch data, and use the fetched data for the next step.\nMultiple sources can be defined at the same time. The supported source at now\ncheck ",(0,r.kt)("a",{parentName:"p",href:"../connector-v2/source"},"Source of SeaTunnel"),". Each source has its own specific parameters to define how to\nfetch data, and SeaTunnel also extracts the parameters that each source will use, such as\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"result_table_name")," parameter, which is used to specify the name of the data generated by the current\nsource, which is convenient for follow-up used by other modules."),(0,r.kt)("h3",{id:"transform"},"transform"),(0,r.kt)("p",null,"When we have the data source, we may need to further process the data, so we have the transform module. Of\ncourse, this uses the word 'may', which means that we can also directly treat the transform as non-existent,\ndirectly from source to sink. Like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n        card = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Clickhouse {\n    host = "clickhouse:8123"\n    database = "default"\n    table = "seatunnel_console"\n    fields = ["name", "age", "card"]\n    username = "default"\n    password = ""\n    source_table_name = "fake1"\n  }\n}\n')),(0,r.kt)("p",null,"Like source, transform has specific parameters that belong to each module. The supported source at now check.\nThe supported transform at now check ",(0,r.kt)("a",{parentName:"p",href:"../transform-v2"},"Transform V2 of SeaTunnel")),(0,r.kt)("h3",{id:"sink"},"sink"),(0,r.kt)("p",null,"Our purpose with SeaTunnel is to synchronize data from one place to another, so it is critical to define how\nand where data is written. With the sink module provided by SeaTunnel, you can complete this operation quickly\nand efficiently. Sink and source are very similar, but the difference is reading and writing. So go check out\nour ",(0,r.kt)("a",{parentName:"p",href:"../connector-v2/sink"},"supported sinks"),"."),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("p",null,"You will find that when multiple sources and multiple sinks are defined, which data is read by each sink, and\nwhich is the data read by each transform? We use ",(0,r.kt)("inlineCode",{parentName:"p"},"result_table_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"source_table_name")," two key\nconfigurations. Each source module will be configured with a ",(0,r.kt)("inlineCode",{parentName:"p"},"result_table_name")," to indicate the name of the\ndata source generated by the data source, and other transform and sink modules can use ",(0,r.kt)("inlineCode",{parentName:"p"},"source_table_name")," to\nrefer to the corresponding data source name, indicating that I want to read the data for processing. Then\ntransform, as an intermediate processing module, can use both ",(0,r.kt)("inlineCode",{parentName:"p"},"result_table_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"source_table_name"),"\nconfigurations at the same time. But you will find that in the above example Config, not every module is\nconfigured with these two parameters, because in SeaTunnel, there is a default convention, if these two\nparameters are not configured, then the generated data from the last module of the previous node will be used.\nThis is much more convenient when there is only one source."),(0,r.kt)("h2",{id:"whats-more"},"What's More"),(0,r.kt)("p",null,"If you want to know the details of this format configuration, Please\nsee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),"."))}h.isMDXComponent=!0}}]);
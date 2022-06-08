"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8471],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41494:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p="File",s={unversionedId:"flink/configuration/source-plugins/File",id:"version-2.1.0/flink/configuration/source-plugins/File",title:"File",description:"Source plugin : File [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/source-plugins/File.md",sourceDirName:"flink/configuration/source-plugins",slug:"/flink/configuration/source-plugins/File",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/source-plugins/File.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fake",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/Fake"},next:{title:"InfluxDb",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/InfluxDb"}},u={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"format.type string",id:"formattype-string",level:3},{value:"path string",id:"path-string",level:3},{value:"schema string",id:"schema-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file"},"File"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source plugin : File ","[Flink]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Read data from the file system"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"format.type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"schema"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"formattype-string"},"format.type ","[string]"),(0,i.kt)("p",null,"The format for reading files from the file system, currently supports ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"parquet")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"orc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," ."),(0,i.kt)("h3",{id:"path-string"},"path ","[string]"),(0,i.kt)("p",null,"The file path is required. The ",(0,i.kt)("inlineCode",{parentName:"p"},"hdfs file")," starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"hdfs://")," , and the ",(0,i.kt)("inlineCode",{parentName:"p"},"local file")," starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"file://")," ."),(0,i.kt)("h3",{id:"schema-string"},"schema ","[string]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"csv"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"csv")," is a string of ",(0,i.kt)("inlineCode",{parentName:"li"},"jsonArray")," , such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"[{\\"type\\":\\"long\\"},{\\"type\\":\\"string\\"}]"')," , this can only specify the type of the field , The field name cannot be specified, and the common configuration parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"field_name")," is generally required."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"json"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," parameter of ",(0,i.kt)("inlineCode",{parentName:"li"},"json")," is to provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"json string")," of the original data, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," can be automatically generated, but the original data with the most complete content needs to be provided, otherwise the fields will be lost."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"parquet"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"parquet")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"Avro schema string")," , such as ",(0,i.kt)("inlineCode",{parentName:"li"},'{\\"type\\":\\"record\\",\\"name\\":\\"test\\",\\"fields\\":[{\\"name\\" :\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"string\\"}]}')," ."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"orc"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"orc")," is the string of ",(0,i.kt)("inlineCode",{parentName:"li"},"orc schema")," , such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"struct<name:string,addresses:array<struct<street:string,zip:smallint>>>"')," ."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"text"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," can be filled with ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," .")))),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Source plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,i.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,i.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,i.kt)("p",null,"The parallelism of an individual operator, for FileSource"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  FileSource{\n    path = "hdfs://localhost:9000/input/"\n    format.type = "json"\n    schema = "{\\"data\\":[{\\"a\\":1,\\"b\\":2},{\\"a\\":3,\\"b\\":4}],\\"db\\":\\"string\\",\\"q\\":{\\"s\\":\\"string\\"}}"\n    result_table_name = "test"\n  }\n')))}d.isMDXComponent=!0}}]);
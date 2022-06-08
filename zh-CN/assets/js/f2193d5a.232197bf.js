"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7408],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),o=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),k=o(n),g=a,m=k["".concat(p,".").concat(g)]||k[g]||u[g]||i;return n?r.createElement(m,l(l({ref:e},d),{},{components:n})):r.createElement(m,l({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83426:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return d},toc:function(){return u},default:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={},p="TiDb",o={unversionedId:"spark/configuration/sink-plugins/Tidb",id:"version-2.1.0/spark/configuration/sink-plugins/Tidb",title:"TiDb",description:"Sink plugin: TiDb [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Tidb.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Tidb",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/Tidb",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Tidb.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/Redis"},next:{title:"Common Options",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/sink-plugin"}},d={},u=[{value:"Description",id:"description",level:3},{value:"Env Options",id:"env-options",level:3},{value:"spark.tispark.pd.addresses string",id:"sparktisparkpdaddresses-string",level:5},{value:"spark.sql.extensions string",id:"sparksqlextensions-string",level:5},{value:"Options",id:"options",level:3},{value:"addr string",id:"addr-string",level:5},{value:"port string",id:"port-string",level:5},{value:"user string",id:"user-string",level:5},{value:"password string",id:"password-string",level:5},{value:"table string",id:"table-string",level:5},{value:"database string",id:"database-string",level:5},{value:"options",id:"options-1",level:5},{value:"Examples",id:"examples",level:3}],k={toc:u};function g(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tidb"},"TiDb"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sink plugin: TiDb ","[Spark]")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Write data to TiDB."),(0,i.kt)("h3",{id:"env-options"},"Env Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#spark.tispark.pd.addresses-string"},"spark.tispark.pd.addresses")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#spark.sql.extensions-string"},"spark.sql.extensions")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.TiExtensions")))),(0,i.kt)("h5",{id:"sparktisparkpdaddresses-string"},"spark.tispark.pd.addresses ","[string]"),(0,i.kt)("p",null,"TiDB Pd Address"),(0,i.kt)("h5",{id:"sparksqlextensions-string"},"spark.sql.extensions ","[string]"),(0,i.kt)("p",null,"Spark Sql Extensions"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#addr-string"},"addr")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#port-string"},"port")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#user-string"},"user")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#password-string"},"password")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#table-string"},"table")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h5",{id:"addr-string"},"addr ","[string]"),(0,i.kt)("p",null,"TiDB address, which currently only supports one instance"),(0,i.kt)("h5",{id:"port-string"},"port ","[string]"),(0,i.kt)("p",null,"TiDB port"),(0,i.kt)("h5",{id:"user-string"},"user ","[string]"),(0,i.kt)("p",null,"TiDB user"),(0,i.kt)("h5",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,"TiDB password"),(0,i.kt)("h5",{id:"table-string"},"table ","[string]"),(0,i.kt)("p",null,"TiDB table name"),(0,i.kt)("h5",{id:"database-string"},"database ","[string]"),(0,i.kt)("p",null,"TiDB database name"),(0,i.kt)("h5",{id:"options-1"},"options"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tispark/blob/v2.4.1/docs/datasource_api_userguide.md"},"TiSpark Configurations")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'env {\n    spark.tispark.pd.addresses = "127.0.0.1:2379"\n    spark.sql.extensions = "org.apache.spark.sql.TiExtensions"\n}\n\ntidb {\n    addr = "127.0.0.1",\n    port = "4000"\n    database = "database",\n    table = "tableName",\n    user = "userName",\n    password = "***********"\n}\n')))}g.isMDXComponent=!0}}]);
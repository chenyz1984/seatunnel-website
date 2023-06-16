"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[93333],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="Coding guide",u={unversionedId:"contribution/coding-guide",id:"version-2.3.2/contribution/coding-guide",title:"Coding guide",description:"This guide documents an overview of the current Apache SeaTunnel modules and best practices on how to submit a high quality pull request to Apache SeaTunnel.",source:"@site/versioned_docs/version-2.3.2/contribution/coding-guide.md",sourceDirName:"contribution",slug:"/contribution/coding-guide",permalink:"/zh-CN/docs/2.3.2/contribution/coding-guide",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/contribution/coding-guide.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"How To Add New License",permalink:"/zh-CN/docs/2.3.2/contribution/new-license"},next:{title:"Contribute Transform Guide",permalink:"/zh-CN/docs/2.3.2/contribution/contribute-transform-v2-guide"}},p={},c=[{value:"Modules Overview",id:"modules-overview",level:2},{value:"How to submit a high quality pull request",id:"how-to-submit-a-high-quality-pull-request",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coding-guide"},"Coding guide"),(0,o.kt)("p",null,"This guide documents an overview of the current Apache SeaTunnel modules and best practices on how to submit a high quality pull request to Apache SeaTunnel."),(0,o.kt)("h2",{id:"modules-overview"},"Modules Overview"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Module Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Introduction"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-api"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel connector V2 API module")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-apis"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel connector V1 API module")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-common"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel common module")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-connectors"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel connector V1 module, currently connector V1 is in a stable state, the community will continue to maintain it, but there will be no major feature updates")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-connectors-v2"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel connector V2 module, currently connector V2 is under development and the community will focus on it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-core/seatunnel-spark"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel core starter module of connector V1 on spark engine")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-core/seatunnel-flink"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel core starter module of connector V1 on flink engine")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-core/seatunnel-flink-sql"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel core starter module of connector V1 on flink-sql engine")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-core/seatunnel-spark-starter"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel core starter module of connector V2 on Spark engine")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-core/seatunnel-flink-starter"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel core starter module of connector V2 on Flink engine")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-core/seatunnel-starter"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel core starter module of connector V2 on SeaTunnel engine")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-e2e"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel end-to-end test module")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-examples"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel local examples module, developer can use it to do unit test and integration test")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-engine"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel engine module, seatunnel-engine is a new computational engine developed by the SeaTunnel Community that focuses on data synchronization.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-formats"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel formats module, used to offer the ability of formatting data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-plugin-discovery"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel plugin discovery module, used to offer the ability of loading SPI plugins from classpath")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-transforms-v2"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel transform V2 module, currently transform V2 is under development and the community will focus on it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seatunnel-translation"),(0,o.kt)("td",{parentName:"tr",align:null},"SeaTunnel translation module, used to adapt Connector V2 and other computing engines such as Spark Flink etc...")))),(0,o.kt)("h2",{id:"how-to-submit-a-high-quality-pull-request"},"How to submit a high quality pull request"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create entity classes using annotations in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lombok")," plugin (",(0,o.kt)("inlineCode",{parentName:"p"},"@Data")," ",(0,o.kt)("inlineCode",{parentName:"p"},"@Getter")," ",(0,o.kt)("inlineCode",{parentName:"p"},"@Setter")," ",(0,o.kt)("inlineCode",{parentName:"p"},"@NonNull")," etc...) to reduce the amount of code. It's a good practice to prioritize the use of lombok plugins in your coding process.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you need to use log4j to print logs in a class, preferably use the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"@Slf4j")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lombok")," plugin.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SeaTunnel uses issue to track logical issues, including bugs and improvements, and uses Github's pull requests to manage the review and merge of specific code changes. So making a clear issue or pull request helps the community better understand the developer's intent, the best practice of creating issue or pull request as the following shown:"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"[purpose][module name]"," ","[sub-module name]"," Description")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Pull request purpose includes: ",(0,o.kt)("inlineCode",{parentName:"li"},"Hotfix"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Feature"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Improve"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Docs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"WIP"),".Note that if your pull request's purpose is ",(0,o.kt)("inlineCode",{parentName:"li"},"WIP"),", then you need to use github's draft pull request"),(0,o.kt)("li",{parentName:"ol"},"Issue purpose includes: ",(0,o.kt)("inlineCode",{parentName:"li"},"Feature"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Bug"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Docs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Discuss")),(0,o.kt)("li",{parentName:"ol"},"Module name: the current pull request or issue involves the name of the module, for example: ",(0,o.kt)("inlineCode",{parentName:"li"},"Core"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Connector-V2"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Connector-V1"),", etc."),(0,o.kt)("li",{parentName:"ol"},"Sub-module name: the current pull request or issue involves the name of the sub-module, for example:",(0,o.kt)("inlineCode",{parentName:"li"},"File")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Redis")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Hbase")," etc."),(0,o.kt)("li",{parentName:"ol"},"Description: highly summarize what the current pull request and issue to do, as far as possible to do the name to know the meaning")),(0,o.kt)("p",{parentName:"li"},"Tips:",(0,o.kt)("strong",{parentName:"p"},"For more details, you can refer to ",(0,o.kt)("a",{parentName:"strong",href:"https://seatunnel.apache.org/community/contribution_guide/contribute#issue"},"issue guide")," and ",(0,o.kt)("a",{parentName:"strong",href:"https://seatunnel.apache.org/community/contribution_guide/contribute#pull-request"},"pull request guide")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Code segments are never repeated. If a code segment is used multiple times, define it multiple times is not a good option, make it a public segment for other modules to use is a best practice.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When throwing an exception, throw the exception along with a hint message and the exception should be smaller in scope.Throwing overly broad exceptions promotes complex error handling code that is more likely to contain security vulnerabilities.For example, if your connector encounters an ",(0,o.kt)("inlineCode",{parentName:"p"},"IOException")," while reading data, a reasonable approach would be to the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'try {\n    // read logic\n} catch (IOException e) {\n    throw SeaTunnelORCFormatException("This orc file is corrupted, please check it", e);\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Apache project has very strict licensing requirements, so every file in an Apache project should contain a license statement. Check that each new file you add contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache License Header")," before submitting pull request:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/*\n * Licensed to the Apache Software Foundation (ASF) under one or more\n * contributor license agreements.  See the NOTICE file distributed with\n * this work for additional information regarding copyright ownership.\n * The ASF licenses this file to You under the Apache License, Version 2.0\n * (the "License"); you may not use this file except in compliance with\n * the License.  You may obtain a copy of the License at\n *\n *    http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apache SeaTunnel uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Spotless")," for code style and formatting checks. You could run the following command and ",(0,o.kt)("inlineCode",{parentName:"p"},"Spotless")," will automatically fix the code style and formatting errors for you:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw spotless:apply\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before you submit your pull request, make sure the project will compile properly after adding your code, you can use the following commands to package the whole project:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# multi threads compile\n./mvnw -T 1C clean package\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# single thread compile\n./mvnw clean package\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before submitting pull request, do a full unit test and integration test locally can better verify the functionality of your code, best practice is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel-examples")," module's ability to self-test to ensure that the multi-engine is running properly and the results are correct.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you submit a pull request with a feature that requires updated documentation, always remember to update the documentation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit the pull request of connector type can write e2e test to ensure the robustness and robustness of the code, e2e test should include the full data type, and e2e test as little as possible to initialize the docker image, write the test cases of sink and source together to reduce the loss of resources, while using asynchronous features to ensure the stability of the test. A good example can be found at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/seatunnel-e2e/seatunnel-connector-v2-e2e/connector-mongodb-e2e/src/test/java/org/apache/seatunnel/e2e/connector/v2/mongodb/MongodbIT.java"},"MongodbIT.java"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The priority of property permission in the class is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"private"),", and mutability is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"final"),", which can be changed reasonably if special circumstances are encountered.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The properties in the class and method parameters prefer to use the base type(int boolean double float...), not recommended to use the wrapper type(Integer Boolean Double Float...), if encounter special circumstances reasonable change.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When developing a sink connector you need to be aware that the sink will be serialized, and if some properties cannot be serialized, encapsulate the properties into classes and use the singleton pattern.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there are multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," process judgments in the code flow, try to simplify the flow to multiple ifs instead of if-else-if.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pull request has the characteristic of single responsibility, not allowed to include irrelevant code of the feature in pull request, once this situation deal with their own branch before submitting pull request, otherwise the Apache SeaTunnel community will actively close pull request")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Contributors should be responsible for their own pull request. If your pull request contains new features or modifies old features, add test cases or e2e tests to prove the reasonableness and functional integrity of your pull request is a good practice.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you think which part of the community's current code is unreasonable (especially the core ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," module and the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," module), the function needs to be updated or modified, the first thing to do is to propose a ",(0,o.kt)("inlineCode",{parentName:"p"},"discuss issue")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," with the community to discuss the need to modify this part of the function, if the community agrees to submit pull request again, do not submit the issue and pull request directly without discussion, so the community will directly consider this pull request is useless, and will be closed down."))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20474],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16773:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],u={sidebar_position:3},a=void 0,c={unversionedId:"seatunnel-engine/cluster-mode",id:"version-2.3.2/seatunnel-engine/cluster-mode",title:"cluster-mode",description:"----------------",source:"@site/versioned_docs/version-2.3.2/seatunnel-engine/cluster-mode.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/cluster-mode",permalink:"/docs/2.3.2/seatunnel-engine/cluster-mode",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/seatunnel-engine/cluster-mode.md",tags:[],version:"2.3.2",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"local-mode",permalink:"/docs/2.3.2/seatunnel-engine/local-mode"},next:{title:"checkpoint-storage",permalink:"/docs/2.3.2/seatunnel-engine/checkpoint-storage"}},s={},p=[{value:"Deploy SeaTunnel Engine Cluster",id:"deploy-seatunnel-engine-cluster",level:2},{value:"Submit Job",id:"submit-job",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"run-job-with-cluster-mode"},"Run Job With Cluster Mode"),(0,i.kt)("p",null,"This is the most recommended way to use SeaTunnel Engine in the production environment. Full functionality of SeaTunnel Engine is supported in this mode and the cluster mode will have better performance and stability."),(0,i.kt)("p",null,"In the cluster mode, the SeaTunnel Engine cluster needs to be deployed first, and the client will submit the job to the SeaTunnel Engine cluster for running."),(0,i.kt)("h2",{id:"deploy-seatunnel-engine-cluster"},"Deploy SeaTunnel Engine Cluster"),(0,i.kt)("p",null,"Deploy a SeaTunnel Engine Cluster reference ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.3.2/seatunnel-engine/deployment"},"SeaTunnel Engine Cluster Deploy")),(0,i.kt)("h2",{id:"submit-job"},"Submit Job"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template\n")))}m.isMDXComponent=!0}}]);
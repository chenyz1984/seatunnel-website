"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[57778],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49322:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={sidebar_position:6},l=void 0,u={unversionedId:"seatunnel-engine/tcp",id:"version-2.3.2/seatunnel-engine/tcp",title:"tcp",description:"----------------",source:"@site/versioned_docs/version-2.3.2/seatunnel-engine/tcp.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/tcp",permalink:"/docs/2.3.2/seatunnel-engine/tcp",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/seatunnel-engine/tcp.md",tags:[],version:"2.3.2",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"rest-api",permalink:"/docs/2.3.2/seatunnel-engine/rest-api"},next:{title:"flink",permalink:"/docs/2.3.2/other-engine/flink"}},c={},p=[],m={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"tcp-network"},"TCP NetWork"),(0,a.kt)("p",null,"If multicast is not the preferred way of discovery for your environment, then you can configure SeaTunnel Engine to be a full TCP/IP cluster. When you configure SeaTunnel Engine to discover members by TCP/IP, you must list all or a subset of the members' host names and/or IP addresses as cluster members. You do not have to list all of these cluster members, but at least one of the listed members has to be active in the cluster when a new member joins."),(0,a.kt)("p",null,"To configure your Hazelcast to be a full TCP/IP cluster, set the following configuration elements. See the tcp-ip element section for the full descriptions of the TCP/IP discovery configuration elements."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the enabled attribute of the tcp-ip element to true."),(0,a.kt)("li",{parentName:"ul"},"Provide your member elements within the tcp-ip element.")),(0,a.kt)("p",null,"The following is an example declarative configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  network:\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - machine1\n          - machine2\n          - machine3:5799\n          - 192.168.1.0-7\n          - 192.168.1.21\n")),(0,a.kt)("p",null,"As shown above, you can provide IP addresses or host names for member elements. You can also give a range of IP addresses, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.0-7"),"."),(0,a.kt)("p",null,"Instead of providing members line-by-line as shown above, you also have the option to use the members element and write comma-separated IP addresses, as shown below."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<members>192.168.1.0-7,192.168.1.21</members>")),(0,a.kt)("p",null,"If you do not provide ports for the members, Hazelcast automatically tries the ports ",(0,a.kt)("inlineCode",{parentName:"p"},"5701"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"5702")," and so on."))}f.isMDXComponent=!0}}]);
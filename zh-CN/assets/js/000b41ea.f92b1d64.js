"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8213],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2224:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={},c="Flink SQL JDBC Connector",s={unversionedId:"connector/flink-sql/Jdbc",id:"connector/flink-sql/Jdbc",title:"Flink SQL JDBC Connector",description:"Description",source:"@site/docs/connector/flink-sql/Jdbc.md",sourceDirName:"connector/flink-sql",slug:"/connector/flink-sql/Jdbc",permalink:"/zh-CN/docs/connector/flink-sql/Jdbc",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/flink-sql/Jdbc.md",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"1. download driver",id:"1-download-driver",level:3},{value:"2. prepare data",id:"2-prepare-data",level:3},{value:"3. seatunnel config",id:"3-seatunnel-config",level:3},{value:"4. run job",id:"4-run-job",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flink-sql-jdbc-connector"},"Flink SQL JDBC Connector"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"We can use the Flink SQL JDBC Connector to connect to a JDBC database. Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/jdbc/index.html"},"Flink SQL JDBC Connector")," for more information."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"1-download-driver"},"1. download driver"),(0,l.kt)("p",null,"A driver dependency is also required to connect to a specified database. Here are drivers currently supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Group Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Artifact Id"),(0,l.kt)("th",{parentName:"tr",align:null},"JAR"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql-connector-java"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://repo.maven.apache.org/maven2/mysql/mysql-connector-java/"},"Download"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql"),(0,l.kt)("td",{parentName:"tr",align:null},"postgresql"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://jdbc.postgresql.org/download.html"},"Download"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Derby"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.derby"),(0,l.kt)("td",{parentName:"tr",align:null},"derby"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://db.apache.org/derby/derby_downloads.html"},"Download"))))),(0,l.kt)("p",null,"After downloading the driver jars, you need to place the jars into $FLINK_HOME/lib/."),(0,l.kt)("h3",{id:"2-prepare-data"},"2. prepare data"),(0,l.kt)("p",null,'Start mysql server locally, and create a database named "test" and a table named "test_table" in the database.'),(0,l.kt)("p",null,'The table "test_table" could be created by the following SQL:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `test_table`(\n   `id` INT UNSIGNED AUTO_INCREMENT,\n   `name` VARCHAR(100) NOT NULL,\n   PRIMARY KEY ( `id` )\n)ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,l.kt)("p",null,'Insert some data into the table "test_table".'),(0,l.kt)("h3",{id:"3-seatunnel-config"},"3. seatunnel config"),(0,l.kt)("p",null,"Prepare a seatunnel config file with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET table.dml-sync = true;\n\nCREATE TABLE test (\n  id BIGINT,\n  name STRING\n) WITH (\n'connector'='jdbc',\n  'url' = 'jdbc:mysql://localhost:3306/test',\n  'table-name' = 'test_table',\n  'username' = '<replace with your username>',\n  'password' = '<replace with your password>'\n);\n\nCREATE TABLE print_table (\n  id BIGINT,\n  name STRING\n) WITH (\n  'connector' = 'print',\n  'sink.parallelism' = '1'\n);\n\nINSERT INTO print_table SELECT * FROM test;\n")),(0,l.kt)("h3",{id:"4-run-job"},"4. run job"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/start-seatunnel-sql.sh --config <path/to/your/config>\n")))}m.isMDXComponent=!0}}]);
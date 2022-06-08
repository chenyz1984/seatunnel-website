"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3064],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={slug:"hdfs-to-clickhouse",title:"How to quickly import data from HDFS into ClickHouse",tags:["HDFS","ClickHouse"]},l="How to quickly import data from HDFS into ClickHouse",u={permalink:"/blog/hdfs-to-clickhouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2021-12-30-hdfs-to-clickhouse.md",source:"@site/blog/2021-12-30-hdfs-to-clickhouse.md",title:"How to quickly import data from HDFS into ClickHouse",description:"ClickHouse is a distributed columnar DBMS for OLAP. Our department has now stored all log data related to data analysis in ClickHouse, an excellent data warehouse, and the current daily data volume has reached 30 billion.",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[{label:"HDFS",permalink:"/blog/tags/hdfs"},{label:"ClickHouse",permalink:"/blog/tags/click-house"}],readingTime:5.455,truncated:!1,authors:[],frontMatter:{slug:"hdfs-to-clickhouse",title:"How to quickly import data from HDFS into ClickHouse",tags:["HDFS","ClickHouse"]},prevItem:{title:"The practice of SeaTunnel in Vip",permalink:"/blog/The-practice-of-SeaTunnel-in-Vip"},nextItem:{title:"How to quickly import data from Hive into ClickHouse",permalink:"/blog/hive-to-clickhouse"}},c={authorsImageUrls:[]},p=[{value:"HDFS To ClickHouse",id:"hdfs-to-clickhouse",level:2},{value:"Log Sample",id:"log-sample",level:3},{value:"ClickHouse Schema",id:"clickhouse-schema",level:3},{value:"Seatunnel with ClickHouse",id:"seatunnel-with-clickhouse",level:2},{value:"Seatunnel",id:"seatunnel",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"seatunnel Pipeline",id:"seatunnel-pipeline",level:3},{value:"Spark",id:"spark",level:4},{value:"Input",id:"input",level:4},{value:"Filter",id:"filter",level:4},{value:"Output",id:"output",level:4},{value:"Running seatunnel",id:"running-seatunnel",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ClickHouse is a distributed columnar DBMS for OLAP. Our department has now stored all log data related to data analysis in ClickHouse, an excellent data warehouse, and the current daily data volume has reached 30 billion."),(0,r.kt)("p",null,"The experience of data processing and storage introduced earlier is based on real-time data streams. The data is stored in Kafka. We use Java or Golang to read, parse, and clean the data from Kafka and write it into ClickHouse, so that the data can be stored in ClickHouse. Quick access. However, in the usage scenarios of many students, the data is not real-time, and it may be necessary to import the data in HDFS or Hive into ClickHouse. Some students implement data import by writing Spark programs, so is there a simpler and more efficient way?"),(0,r.kt)("p",null,"At present, there is a tool ",(0,r.kt)("strong",{parentName:"p"},"Seatunnel")," in the open source community, the project address ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel"),", can quickly Data in HDFS is imported into ClickHouse."),(0,r.kt)("h2",{id:"hdfs-to-clickhouse"},"HDFS To ClickHouse"),(0,r.kt)("p",null,"Assuming that our logs are stored in HDFS, we need to parse the logs and filter out the fields we care about, and write the corresponding fields into the ClickHouse table."),(0,r.kt)("h3",{id:"log-sample"},"Log Sample"),(0,r.kt)("p",null,"The log format we store in HDFS is as follows, which is a very common Nginx log"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'10.41.1.28 github.com 114.250.140.241 0.001s "127.0.0.1:80" [26/Oct/2018:03:09:32 +0800] "GET /Apache/Seatunnel HTTP/1.1" 200 0 "-" - "Dalvik/2.1.0 (Linux; U; Android 7.1.1; OPPO R11 Build/NMF26X)" "196" "-" "mainpage" "443" "-" "172.16.181.129"\n')),(0,r.kt)("h3",{id:"clickhouse-schema"},"ClickHouse Schema"),(0,r.kt)("p",null,"Our ClickHouse table creation statement is as follows, our table is partitioned by day"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE TABLE cms.cms_msg\n(\n    date Date, \n    datetime DateTime, \n    url String, \n    request_time Float32, \n    status String, \n    hostname String, \n    domain String, \n    remote_addr String, \n    data_size Int32, \n    pool String\n) ENGINE = MergeTree PARTITION BY date ORDER BY date SETTINGS index_granularity = 16384\n")),(0,r.kt)("h2",{id:"seatunnel-with-clickhouse"},"Seatunnel with ClickHouse"),(0,r.kt)("p",null,"Next, I will introduce to you in detail how we can meet the above requirements through Seatunnel and write the data in HDFS into ClickHouse."),(0,r.kt)("h3",{id:"seatunnel"},"Seatunnel"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"Seatunnel")," is a very easy-to-use, high-performance, real-time data processing product that can deal with massive data. It is built on Spark. Seatunnel has a very rich set of plugins that support reading data from Kafka, HDFS, Kudu, performing various data processing, and writing the results to ClickHouse, Elasticsearch or Kafka."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"First we need to install Seatunnel, the installation is very simple, no need to configure system environment variables"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare the Spark environment"),(0,r.kt)("li",{parentName:"ol"},"Install Seatunnel"),(0,r.kt)("li",{parentName:"ol"},"Configure Seatunnel")),(0,r.kt)("p",null,"The following are simple steps, the specific installation can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /usr/local\n\nwget https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\ntar -xvf https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\n\nwget https://github.com/InterestingLab/seatunnel/releases/download/v1.1.1/seatunnel-1.1.1.zip\n\nunzip seatunnel-1.1.1.zip\n\ncd seatunnel-1.1.1\nvim config/seatunnel-env.sh\n\n# Specify the Spark installation path\nSPARK_HOME=${SPARK_HOME:-/usr/local/spark-2.2.0-bin-hadoop2.7}\n")),(0,r.kt)("h3",{id:"seatunnel-pipeline"},"seatunnel Pipeline"),(0,r.kt)("p",null,"We only need to write a configuration file of seatunnel Pipeline to complete the data import."),(0,r.kt)("p",null,"The configuration file consists of four parts, Spark, Input, filter and Output."),(0,r.kt)("h4",{id:"spark"},"Spark"),(0,r.kt)("p",null,"This part is the related configuration of Spark, which mainly configures the size of the resources required for Spark to execute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n')),(0,r.kt)("h4",{id:"input"},"Input"),(0,r.kt)("p",null,"This part defines the data source. The following is a configuration example for reading data in text format from HDFS files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'input {\n    hdfs {\n        path = "hdfs://nomanode:8020/rowlog/accesslog"\n        table_name = "access_log"\n        format = "text"\n    }\n}\n')),(0,r.kt)("h4",{id:"filter"},"Filter"),(0,r.kt)("p",null,"In the Filter section, here we configure a series of transformations, including regular parsing to split the log, time transformation to convert HTTPDATE to the date format supported by ClickHouse, type conversion to Number type fields, and field filtering through SQL, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'filter {\n    # Parse raw logs using regular expressions\n    grok {\n        source_field = "raw_message"\n        pattern = \'%{IP:ha_ip}\\\\s%{NOTSPACE:domain}\\\\s%{IP:remote_addr}\\\\s%{NUMBER:request_time}s\\\\s\\"%{DATA:upstream_ip}\\"\\\\s\\\\[%{HTTPDATE:timestamp}\\\\]\\\\s\\"%{NOTSPACE:method}\\\\s%{DATA:url}\\\\s%{NOTSPACE:http_ver}\\"\\\\s%{NUMBER:status}\\\\s%{NUMBER:body_bytes_send}\\\\s%{DATA:referer}\\\\s%{NOTSPACE:cookie_info}\\\\s\\"%{DATA:user_agent}\\"\\\\s%{DATA:uid}\\\\s%{DATA:session_id}\\\\s\\"%{DATA:pool}\\"\\\\s\\"%{DATA:tag2}\\"\\\\s%{DATA:tag3}\\\\s%{DATA:tag4}\'\n    }\n\n    # Convert data in "dd/MMM/yyyy:HH:mm:ss Z" format to\n    # Data in "yyyy/MM/dd HH:mm:ss" format\n    date {\n        source_field = "timestamp"\n        target_field = "datetime"\n        source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n        target_time_format = "yyyy/MM/dd HH:mm:ss"\n    }\n\n    # Use SQL to filter the fields of interest and process the fields\n    # You can even filter out data you don\'t care about by filter conditions\n    sql {\n        table_name = "access"\n        sql = "select substring(date, 1, 10) as date, datetime, hostname, url, http_code, float(request_time), int(data_size), domain from access"\n    }\n}\n')),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("p",null,"Finally, we write the processed structured data to ClickHouse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'output {\n    clickhouse {\n        host = "your.clickhouse.host:8123"\n        database = "seatunnel"\n        table = "access_log"\n        fields = ["date", "datetime", "hostname", "uri", "http_code", "request_time", "data_size", "domain"]\n        username = "username"\n        password = "password"\n    }\n}\n')),(0,r.kt)("h3",{id:"running-seatunnel"},"Running seatunnel"),(0,r.kt)("p",null,"We combine the above four-part configuration into our configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"config/batch.conf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim config/batch.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n\ninput {\n    hdfs {\n        path = "hdfs://nomanode:8020/rowlog/accesslog"\n        table_name = "access_log"\n        format = "text"\n    }\n}\n\nfilter {\n    # Parse raw logs using regular expressions\n    grok {\n        source_field = "raw_message"\n        pattern = \'%{IP:ha_ip}\\\\s%{NOTSPACE:domain}\\\\s%{IP:remote_addr}\\\\s%{NUMBER:request_time}s\\\\s\\"%{DATA:upstream_ip}\\"\\\\s\\\\[%{HTTPDATE:timestamp}\\\\]\\\\s\\"%{NOTSPACE:method}\\\\s%{DATA:url}\\\\s%{NOTSPACE:http_ver}\\"\\\\s%{NUMBER:status}\\\\s%{NUMBER:body_bytes_send}\\\\s%{DATA:referer}\\\\s%{NOTSPACE:cookie_info}\\\\s\\"%{DATA:user_agent}\\"\\\\s%{DATA:uid}\\\\s%{DATA:session_id}\\\\s\\"%{DATA:pool}\\"\\\\s\\"%{DATA:tag2}\\"\\\\s%{DATA:tag3}\\\\s%{DATA:tag4}\'\n    }\n\n    # Convert data in "dd/MMM/yyyy:HH:mm:ss Z" format to\n    # Data in "yyyy/MM/dd HH:mm:ss" format\n    date {\n        source_field = "timestamp"\n        target_field = "datetime"\n        source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n        target_time_format = "yyyy/MM/dd HH:mm:ss"\n    }\n\n    # Use SQL to filter the fields of interest and process the fields\n    # You can even filter out data you don\'t care about by filter conditions\n    sql {\n        table_name = "access"\n        sql = "select substring(date, 1, 10) as date, datetime, hostname, url, http_code, float(request_time), int(data_size), domain from access"\n    }\n}\n\noutput {\n    clickhouse {\n        host = "your.clickhouse.host:8123"\n        database = "seatunnel"\n        table = "access_log"\n        fields = ["date", "datetime", "hostname", "uri", "http_code", "request_time", "data_size", "domain"]\n        username = "username"\n        password = "password"\n    }\n}\n')),(0,r.kt)("p",null,"Execute the command, specify the configuration file, and run Seatunnel to write data to ClickHouse. Here we take the local mode as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/start-seatunnel.sh --config config/batch.conf -e client -m 'local[2]'\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this post, we covered how to import Nginx log files from HDFS into ClickHouse using Seatunnel. Data can be imported quickly with only one configuration file without writing any code. In addition to supporting HDFS data sources, Seatunnel also supports real-time reading and processing of data from Kafka to ClickHouse. Our next article will describe how to quickly import data from Hive into ClickHouse."),(0,r.kt)("p",null,"Of course, Seatunnel is not only a tool for ClickHouse data writing, but also plays a very important role in the writing of data sources such as Elasticsearch and Kafka."),(0,r.kt)("p",null,"If you want to know more functions and cases of Seatunnel combined with ClickHouse, Elasticsearch and Kafka, you can go directly to the official website ",(0,r.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,r.kt)("p",null,"-- Power by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab"},"InterestingLab")))}m.isMDXComponent=!0}}]);
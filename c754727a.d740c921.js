/*! For license information please see c754727a.d740c921.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{180:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(1),s=a(9),r=(a(0),a(193)),c=a(199),l=a(200),o={id:"3_multi_casskop",title:"Multi-CassKop",sidebar_label:"Multi-CassKop"},i={id:"2_setup/3_multi_casskop",title:"Multi-CassKop",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/2_setup/2_multi_casskop.md",permalink:"/casskop/docs/2_setup/3_multi_casskop",editUrl:"https://github.com/Orange-OpenSource//casskop/edit/master/website/docs/2_setup/2_multi_casskop.md",sidebar_label:"Multi-CassKop",sidebar:"docs",previous:{title:"Install Plugin",permalink:"/casskop/docs/2_setup/2_install_plugin"},next:{title:"Google Kubernetes Engine",permalink:"/casskop/docs/2_setup/2_platform_setup/1_gke"}},u=[{value:"MultiCasskop",id:"multicasskop",children:[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Install External-DNS",id:"install-external-dns",children:[]},{value:"Install Multi-CassKop",id:"install-multi-casskop",children:[]},{value:"Create the MultiCassKop CRD",id:"create-the-multicasskop-crd",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"multicasskop"},"MultiCasskop"),Object(r.b)("h3",{id:"pre-requisite"},"Pre-requisite"),Object(r.b)("p",null,"In order to have a working Multi-CassKop operator we need to have at least 2 k8s clusters: k8s-cluster-1 and k8s-cluster-2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"k8s >=v1.15 installed on each site, with kubectl configure to access both of thems"),Object(r.b)("li",{parentName:"ul"},"The pods of each site must be able to reach pods on other sites, this is outside of the scope of Multi-Casskop and can\nbe achieve by different solutions such as:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"in our on-premise cluster, we leverage ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.projectcalico.org/why-bgp/"}),"Calico")," routable IP pool in order to make this possible"),Object(r.b)("li",{parentName:"ul"},"this can also be done using mesh service such as istio"),Object(r.b)("li",{parentName:"ul"},"there may be other solutions as well"))),Object(r.b)("li",{parentName:"ul"},"having CassKop installed (with its ConfigMap) in each namespace see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#casskop"}),"CassKop installation")),Object(r.b)("li",{parentName:"ul"},"having ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubernetes-sigs/external-dns"}),"External-DNS")," with RFC2136 installed in each namespace to\nmanage your DNS sub zone. see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#install-external-dns"}),"Install external dns")),Object(r.b)("li",{parentName:"ul"},"You need to create secrets from targeted k8s clusters in current k8S cluster (see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#bootstrap-api-access-to-k8s-cluster-2-from-k8s-cluster-1"}),"Bootstrap"),")"),Object(r.b)("li",{parentName:"ul"},"You may need to create network policies for Multi-Casskop inter-site communications to k8s apis, if using so.")),Object(r.b)("div",{className:"admonition admonition-warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We have only tested the configuration with Calico routable IP pool & external DNS with RFC2136 configuration."))),Object(r.b)("h4",{id:"bootstrap-api-access-to-k8s-cluster-2-from-k8s-cluster-1"},"Bootstrap API access to k8s-cluster-2 from k8s-cluster-1"),Object(r.b)("p",null,"Multi-Casskop will be deployed in k8s-cluster-1, change your kubectl context to point to this cluster."),Object(r.b)("p",null,"In order to allow our Multi-CassKop controller to have access to k8s-cluster-2 from k8s-cluster-1, we are going to use\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/admiraltyio/multicluster-service-account/releases/tag/v0.6.1"}),"kubemcsa")," from\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://admiralty.io/"}),"Admiralty")," to be able to export secret from k8s-cluster-2 to k8s-cluster1"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubemcsa export --context=cluster2 --namespace cassandra-e2e cassandra-operator --as k8s-cluster2 | kubectl apply -f -\n")),Object(r.b)("div",{className:"admonition admonition-tip"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"s")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This will create in current k8s (k8s-cluster-1) the k8s secret associated to the\n",Object(r.b)("strong",{parentName:"p"},"cassandra-operator")," service account of namespace ",Object(r.b)("strong",{parentName:"p"},"cassandra-e2e")," in k8s-cluster2.\n/!\\ The Secret will be created with the name ",Object(r.b)("strong",{parentName:"p"},"k8s-cluster2")," and this name must be used when starting Multi-CassKop and\nin the MultiCassKop CRD definition see below"))),Object(r.b)("h4",{id:"install-casskop"},"Install CassKop"),Object(r.b)("p",null,"CassKop must be deployed on each targeted Kubernetes clusters."),Object(r.b)("h3",{id:"install-external-dns"},"Install External-DNS"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/external-dns"}),"External-DNS")," must be installed in each Kubernetes clusters.\nConfigure your external DNS with a custom values pointing to your zone and deploy it in your namespace "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"helm install -f /private/externaldns-values.yaml --name casskop-dns external-dns \n")),Object(r.b)("h3",{id:"install-multi-casskop"},"Install Multi-CassKop"),Object(r.b)("p",null,"Proceed with Multi-CassKop installation only when ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#pre-requisites"}),"Pre-requisites")," are fulfilled."),Object(r.b)("p",null,"Deployment with Helm. Multi-CassKop and CassKop shared the same github/helm repo and semantic version."),Object(r.b)(c.a,{defaultValue:"helm3",values:[{label:"helm 3",value:"helm3"},{label:"helm previous",value:"helm"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"helm3",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# You have to create the namespace before executing following command\nkubectl apply -f https://github.com/Orange-OpenSource/casskop/blob/master/multi-casskop/deploy/crds/multicluster_v1alpha1_cassandramulticluster_crd.yaml\nhelm install  multi-casskop --namespace=cassandra orange-incubator/multi-casskop --set k8s.local=k8s-cluster1 --set k8s.remote={k8s-cluster2}\n"))),Object(r.b)(l.a,{value:"helm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install helm \nhelm init --history-max 200\nkubectl create serviceaccount tiller --namespace kube-system\nkubectl create -f tiller-clusterrolebinding.yaml\nhelm init --service-account tiller --upgrade\n\n# Deploy operator\nhelm install --name=multi-casskop --namespace=cassandra orange-incubator/multi-casskop --set k8s.local=k8s-cluster1 --set k8s.remote={k8s-cluster2}\n")))),Object(r.b)("p",null,"When starting Multi-CassKop, we need to give some parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"k8s.local is the name of the k8s-cluster we want to refere to when talking to this cluster."),Object(r.b)("li",{parentName:"ul"},"k8s.remote is a list of other kubernetes we want to connect to.")),Object(r.b)("div",{className:"admonition admonition-info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Names used there should map with the name used in the MultiCassKop CRD definition)\nthe Names in ",Object(r.b)("inlineCode",{parentName:"p"},"k8s.remote")," must match the names of the secret exported with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#bootstrap-api-access-to-k8s-cluster-2-from-k8s-cluster-1"}),"kubemcsa")," command"))),Object(r.b)("h3",{id:"create-the-multicasskop-crd"},"Create the MultiCassKop CRD"),Object(r.b)("p",null,"You can deploy a MultiCassKop CRD instance."),Object(r.b)("p",null,"You can create the Cluster with the following example ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/tree/master/multi-casskop/samples/multi-casskop.yaml"}),"multi-casskop/samples/multi-casskop.yaml")," file :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl apply -f multi-casskop/samples/multi-casskop.yaml\n")),Object(r.b)("p",null,"This is the sequence of operations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"MultiCassKop first creates the CassandraCluster in k8s-cluster1. "),Object(r.b)("li",{parentName:"ul"},"Then local CassKop starts to creates the associated Cassandra Cluster.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"When CassKop has created its Cassandra cluster, it updates CassandraCluster object's status with the phase=Running meaning that\nall is ok"))),Object(r.b)("li",{parentName:"ul"},"Then MultiCassKop start creating the other CassandraCluster in k8s-cluster2"),Object(r.b)("li",{parentName:"ul"},"Then local CassKop started to creates the associated Cassandra Cluster.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Thanks to the routable seed-list configured with external dns names, Cassandra pods are started by connecting to\nalready existings Cassandra nodes from k8s-cluster1 with the goal to form a uniq Cassandra Ring.")))),Object(r.b)("p",null,"In resulting, We can see that each clusters have the required pods."),Object(r.b)("p",null,"If we go in one of the created pods, we can see that nodetool see pods of both clusters:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cassandra@cassandra-e2e-dc1-rack2-0:/$ nodetool status\nDatacenter: dc1\n===============\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address         Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  10.100.146.150  93.95 KiB  256          49.8%             cfabcef2-3f1b-492d-b028-0621eb672ec7  rack2\nUN  10.100.146.108  108.65 KiB  256          48.3%             d1185b37-af0a-42f9-ac3f-234e541f14f0  rack1\nDatacenter: dc2\n===============\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address         Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  10.100.151.38   69.89 KiB  256          51.4%             ec9003e0-aa53-4150-b4bb-85193d9fa180  rack5\nUN  10.100.150.34   107.89 KiB  256          50.5%             a28c3c59-786f-41b6-8eca-ca7d7d14b6df  rack4\n")))}p.isMDXComponent=!0},193:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=s.a.createContext({}),u=function(e){var t=s.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=u(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||r;return a?s.a.createElement(d,l({ref:t},i,{components:a})):s.a.createElement(d,l({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},194:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var c=s.apply(null,n);c&&e.push(c)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},199:function(e,t,a){"use strict";a(23),a(18),a(19);var n=a(0),s=a.n(n),r=a(194),c=a.n(r),l=a(119),o=a.n(l),i=37,u=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,l=e.values,b=Object(n.useState)(r),p=b[0],m=b[1],d=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:c()("tab-item",o.a.tabItem,{"tab-item--active":p===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return m(t)},onClick:function(){return m(t)}},a)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===p}))[0]))}},200:function(e,t,a){"use strict";var n=a(0),s=a.n(n);t.a=function(e){return s.a.createElement("div",null,e.children)}}}]);
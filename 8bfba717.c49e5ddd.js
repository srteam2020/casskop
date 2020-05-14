(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(193)),i={id:"5_kubernets_objects",title:"Kubernetes Objects",sidebar_label:"Kubernetes Objects"},s={id:"3_configuration_deployment/5_kubernets_objects",title:"Kubernetes Objects",description:"## Services",source:"@site/docs/3_configuration_deployment/5_kubernets_objects.md",permalink:"/casskop/docs/3_configuration_deployment/5_kubernets_objects",editUrl:"https://github.com/Orange-OpenSource//casskop/edit/master/website/docs/3_configuration_deployment/5_kubernets_objects.md",sidebar_label:"Kubernetes Objects",sidebar:"docs",previous:{title:"Sidecars",permalink:"/casskop/docs/3_configuration_deployment/4_sidecars"},next:{title:"CPU and Memory Usage",permalink:"/casskop/docs/3_configuration_deployment/6_cpu_memory_usage"}},c=[{value:"Services",id:"services",children:[]},{value:"Statefulset",id:"statefulset",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"services"},"Services"),Object(o.b)("p",null,"Cassandra Pods will be accessible via Kubernetes headless services. CassKop will create a service for each\nCassandra DC define in the Topology section."),Object(o.b)("p",null,"Service will be used by application to connect to the Cassandra Cluster.\nService will also be used for Cassandra to find others SEEDS nodes in the cluster."),Object(o.b)("h2",{id:"statefulset"},"Statefulset"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Statefulsets")," is a powerful entity in Kubernetes to manage Pods, associated with some essential conventions :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Pod name: pods are created sequentially, starting with the name of the statefulset and ending with zero :\n",Object(o.b)("inlineCode",{parentName:"li"},"<statefulset-name>-<ordinal-index>"),". "),Object(o.b)("li",{parentName:"ul"},"Network address: the statefulset uses a headless service to control the domain name of its pods. As each pod is\ncreated, it gets a matching DNS subdomain\n",Object(o.b)("inlineCode",{parentName:"li"},"<pod-name>.<service-name>.<namespace>"),".")))))}u.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,s({ref:t},l,{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
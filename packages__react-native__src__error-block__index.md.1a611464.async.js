(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[127],{Pg6R:function(e,t,n){},WtSh:function(e,t,n){"use strict";var a=n("kM82"),r=n.n(a),l=n("hKI/"),c=n.n(l);n("Pg6R");function o(e,t){return s(e)||u(e,t)||m(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=o(l,2),m=i[0],d=i[1],u=Object(a["useState"])(!1),s=o(u,2),E=s[0],h=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":E||void 0},r.a.createElement("table",null,t)))};t["a"]=E},eKpu:function(e,t,n){"use strict";n.r(t);var a=n("kM82"),r=n.n(a),l=n("dEAq"),c=n("6T1g"),o=n("WtSh"),i=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"errorblock-\u5f02\u5e38\u6355\u83b7\u7ec4\u4ef6"},r.a.createElement(l["AnchorLink"],{to:"#errorblock-\u5f02\u5e38\u6355\u83b7\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ErrorBlock \u5f02\u5e38\u6355\u83b7\u7ec4\u4ef6"),r.a.createElement("p",null,"\u5185\u7f6e\u4e86\u4e24\u79cd\u573a\u666f\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4ee3\u7801\u51fa\u9519\uff0c\u5305\u62ec hooks \u5185\u51fa\u9519\u3001render \u5185\u51fa\u9519\uff0c\u8fd9\u65f6\u5019\u4f1a\u663e\u793a\u9ed8\u8ba4\u7684\u5e94\u7528\u51fa\u9519\u7684\u754c\u9762"),r.a.createElement("li",null,"\u7f51\u7edc\u8bf7\u6c42\u51fa\u9519\uff0c\u5373\u4ee3\u7801\u5c42\u9762\u901a\u8fc7",r.a.createElement("code",null,"throw new Error(JSON.stringify(","{","type: 'network'","}","))"),"\uff0c\u8fd9\u65f6\u5019\u4f1a\u663e\u793a\u5185\u7f6e\u7684\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\u7684\u51fa\u9519\u754c\u9762")),r.a.createElement("p",null,"\u5177\u4f53\u6d4b\u8bd5\u4ee3\u7801\u53ef\u4ee5\u53c2\u89c1 ",r.a.createElement("code",null,"exmaple")," \u91cc\u9762\u7684 ",r.a.createElement("code",null,"ErrorBlockDemo.tsx")," \u6587\u4ef6"),r.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u6548\u679c\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),r.a.createElement("h3",{id:"1-\u9ed8\u8ba4\u5f02\u5e38"},r.a.createElement(l["AnchorLink"],{to:"#1-\u9ed8\u8ba4\u5f02\u5e38","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"1. \u9ed8\u8ba4\u5f02\u5e38"),r.a.createElement(c["a"],{code:"<Box flex={1}>\n  <ErrorBlock onError={onError} onRefresh={onRefresh}>\n    <Demo1 />\n  </ErrorBlock>\n</Box>",lang:"tsx"}),r.a.createElement("center",null,r.a.createElement("figure",null,r.a.createElement("img",{alt:"empty-ios1.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643165357318249571.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),r.a.createElement("h3",{id:"2-\u7f51\u7edc\u8fde\u63a5\u5f02\u5e38"},r.a.createElement(l["AnchorLink"],{to:"#2-\u7f51\u7edc\u8fde\u63a5\u5f02\u5e38","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"2. \u7f51\u7edc\u8fde\u63a5\u5f02\u5e38"),r.a.createElement(c["a"],{code:"<Empty customImg={<Image source={require('../../assets/img/pic_empty.png')} />} />",lang:"tsx"}),r.a.createElement("center",null,r.a.createElement("figure",null,r.a.createElement("img",{alt:"empty-ios2.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643165225985160065.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),r.a.createElement("h3",{id:"3-\u81ea\u5b9a\u4e49\u5f02\u5e38\u5c55\u793a"},r.a.createElement(l["AnchorLink"],{to:"#3-\u81ea\u5b9a\u4e49\u5f02\u5e38\u5c55\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"3. \u81ea\u5b9a\u4e49\u5f02\u5e38\u5c55\u793a"),r.a.createElement(c["a"],{code:'<Box height={300}>\n  <ErrorBlock\n    onError={onError}\n    customNode={\n      <Box\n        height={200}\n        padding="x4"\n        justifyContent={\'center\'}\n        alignItems="center"\n        borderWidth={1}\n        borderColor="func600"\n      >\n        <Text>\u6211\u662f\u81ea\u5b9a\u4e49\u9519\u8bef\u5c55\u793a</Text>\n      </Box>\n    }\n  >\n    <Demo1 />\n  </ErrorBlock>\n</Box>',lang:"tsx"}),r.a.createElement("center",null,r.a.createElement("figure",null,r.a.createElement("img",{alt:"empty-ios2.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643165587210140943.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u5c5e\u6027"),r.a.createElement("th",null,"\u5fc5\u586b"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"customNode"),r.a.createElement("td",null,r.a.createElement("code",null,"false")),r.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u51fa\u9519\u65f6\u6e32\u67d3\u7ec4\u4ef6"),r.a.createElement("td",null,r.a.createElement("code",null,"ReactNode")),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"onError"),r.a.createElement("td",null,r.a.createElement("code",null,"false")),r.a.createElement("td",null,"\u5f02\u5e38\u6355\u83b7\u7684\u5904\u7406\u903b\u8f91"),r.a.createElement("td",null,r.a.createElement("code",null,"(error: Error, errorInfo: ErrorInfo) => void")),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"onRefresh"),r.a.createElement("td",null,r.a.createElement("code",null,"false")),r.a.createElement("td",null,"\u91cd\u65b0\u5237\u65b0\u903b\u8f91"),r.a.createElement("td",null,r.a.createElement("code",null,"() => void")),r.a.createElement("td",null))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:n})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[166],{Pg6R:function(e,t,a){},WtSh:function(e,t,a){"use strict";var l=a("kM82"),n=a.n(l),r=a("hKI/"),c=a.n(r);a("Pg6R");function d(e,t){return E(e)||i(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function i(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,r=[],c=!0,d=!1;try{for(a=a.call(e);!(c=(l=a.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(o){d=!0,n=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(d)throw n}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,a=Object(l["useRef"])(),r=Object(l["useState"])(!1),o=d(r,2),m=o[0],u=o[1],i=Object(l["useState"])(!1),E=d(i,2),s=E[0],h=E[1];return Object(l["useEffect"])((function(){var e=a.current,t=c()((function(){u(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},"o+VR":function(e,t,a){"use strict";a.r(t);var l=a("kM82"),n=a.n(l),r=a("dEAq"),c=a("6T1g"),d=a("WtSh"),o=n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"tree-\u6811\u5f62\u5c55\u793a"},n.a.createElement(r["AnchorLink"],{to:"#tree-\u6811\u5f62\u5c55\u793a","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tree \u6811\u5f62\u5c55\u793a"),n.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},n.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),n.a.createElement("h3",{id:"1-\u6811\u89c6\u56fe\u53d7\u63a7"},n.a.createElement(r["AnchorLink"],{to:"#1-\u6811\u89c6\u56fe\u53d7\u63a7","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"1. \u6811\u89c6\u56fe\u53d7\u63a7"),n.a.createElement(c["a"],{code:"<Tree\n  treeData={treeData}\n  checkedKeys={checked}\n  onCheck={e => {\n    console.log(e);\n    setChecked(e);\n  }}\n/>",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644809702151430047.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"2-\u9ed8\u8ba4\u5c55\u5f00\u5168\u90e8"},n.a.createElement(r["AnchorLink"],{to:"#2-\u9ed8\u8ba4\u5c55\u5f00\u5168\u90e8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"2. \u9ed8\u8ba4\u5c55\u5f00\u5168\u90e8"),n.a.createElement(c["a"],{code:"<Tree\n  treeData={treeData}\n  defaultExpandAll\n  onCheck={e => {\n    console.log(e);\n  }}\n/>",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644809826635078171.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"3\u9ed8\u8ba4\u9009\u4e2d"},n.a.createElement(r["AnchorLink"],{to:"#3\u9ed8\u8ba4\u9009\u4e2d","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"3.\u9ed8\u8ba4\u9009\u4e2d"),n.a.createElement(c["a"],{code:"<Tree\n  treeData={treeData}\n  defaultCheckedKeys={['0-0', '3-2-1']}\n  onCheck={e => {\n    console.log(e);\n  }}\n/>",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644809930211023700.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"4\u7981\u7528"},n.a.createElement(r["AnchorLink"],{to:"#4\u7981\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"4.\u7981\u7528"),n.a.createElement(c["a"],{code:"<Tree treeData={treeData} disabled />",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644810023065044099.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"5\u4e25\u683c\u9009\u4e2d"},n.a.createElement(r["AnchorLink"],{to:"#5\u4e25\u683c\u9009\u4e2d","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"5.\u4e25\u683c\u9009\u4e2d"),n.a.createElement(c["a"],{code:"<Tree treeData={treeData} checkStrictly />",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644810114904027973.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"6\u9ed8\u8ba4\u5c55\u5f00\u8282\u70b9"},n.a.createElement(r["AnchorLink"],{to:"#6\u9ed8\u8ba4\u5c55\u5f00\u8282\u70b9","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"6.\u9ed8\u8ba4\u5c55\u5f00\u8282\u70b9"),n.a.createElement(c["a"],{code:"<Tree treeData={treeData} defaultExpandedKeys={['0-0', '3-2-1']} />",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644810215528809116.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"7\u9690\u85cf\u5c3e\u90e8\u7684\u56fe\u6807"},n.a.createElement(r["AnchorLink"],{to:"#7\u9690\u85cf\u5c3e\u90e8\u7684\u56fe\u6807","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"7.\u9690\u85cf\u5c3e\u90e8\u7684\u56fe\u6807"),n.a.createElement(c["a"],{code:"<Tree treeData={treeData} showIcon={false} />",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644810305989495158.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"8\u81ea\u5b9a\u4e49-icon"},n.a.createElement(r["AnchorLink"],{to:"#8\u81ea\u5b9a\u4e49-icon","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"8.\u81ea\u5b9a\u4e49 icon"),n.a.createElement(c["a"],{code:"<Tree\n  treeData={treeData}\n  icon={action => {\n    return action ? <Text>\u9009\u4e2d</Text> : <Text>\u672a\u9009\u4e2d</Text>;\n  }}\n/>",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644810389439922952.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"9\u6811\u5f39\u7a97"},n.a.createElement(r["AnchorLink"],{to:"#9\u6811\u5f39\u7a97","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"9.\u6811\u5f39\u7a97"),n.a.createElement(c["a"],{code:'<Button\n  title="modal"\n  onPress={() =>\n    modal({\n      treeData: treeData,\n      height: 300,\n      defaultExpandAll: true,\n    })\n  }\n/>',lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1644810651867205056.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),n.a.createElement("h2",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement(d["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u5fc5\u586b"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"height"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u7ec4\u4ef6\u7684\u9ad8\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"treeData"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u6811\u7684\u8282\u70b9\u6570\u636e"),n.a.createElement("td",null,n.a.createElement("code",null,"TreeItemProps[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u7981\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"checkable"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u662f\u5426\u53ef\u4ee5\u9009\u62e9\u7684"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"checkStrictly"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"checkedKeys"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u9009\u4e2d\u7684\u8282\u70b9\u53d7\u63a7\u7684"),n.a.createElement("td",null,n.a.createElement("code",null,"string[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultCheckedKeys"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u9ed8\u8ba4\u9009\u4e2d\u7684 key \u7b2c\u4e00\u6b21\u52a0\u8f7d\u6709\u6548"),n.a.createElement("td",null,n.a.createElement("code",null,"string[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultExpandAll"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u9ed8\u8ba4\u5168\u90e8\u5c55\u5f00"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultExpandedKeys"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u9ed8\u8ba4\u5c55\u5f00\u8282\u70b9"),n.a.createElement("td",null,n.a.createElement("code",null,"string[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"expandedKeys"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5c55\u5f00\u7684\u8282\u70b9"),n.a.createElement("td",null,n.a.createElement("code",null,"string[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"showIcon"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u5c3e\u90e8\u7684\u56fe\u6807"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onCheck"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u9009\u4e2d\u4e8b\u4ef6\u56de\u8c03"),n.a.createElement("td",null,n.a.createElement("code",null,"(keys: string[]) => void")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onExpand"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5c55\u5f00\u4e8b\u4ef6\u56de\u8c03"),n.a.createElement("td",null,n.a.createElement("code",null,"(treeNode: EventDataNode) => void")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"icon"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49 icon"),n.a.createElement("td",null,n.a.createElement("code",null,"(checked: boolean) => ReactNode")),n.a.createElement("td",null)))),n.a.createElement(c["a"],{code:"interface TreeItemProps {\n  key: string;\n  title: string;\n  children?: Array<TreeItemProps | ReactNode>;\n  disabled?: boolean;\n  icon?: (checked: boolean) => ReactNode;\n}",lang:"ts"})))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:a})}}}]);
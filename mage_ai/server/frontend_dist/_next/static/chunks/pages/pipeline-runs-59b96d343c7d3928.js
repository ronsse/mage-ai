(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1009],{66757:function(e,n,t){"use strict";var r=t(19319),i=t(94178),o=t(67240),c="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function l(e,n){return 1===arguments.length?u(e):a(e,n)}function u(e){const n=c.getItem(e);return i(n)}function a(e,n){try{return c.setItem(e,JSON.stringify(n)),!0}catch(t){return!1}}l.set=a,l.get=u,l.remove=function(e){return c.removeItem(e)},l.clear=function(){return c.clear()},l.backend=function(e){return e&&(c=e),c},l.on=o.on,l.off=o.off,e.exports=l},94178:function(e){"use strict";e.exports=function(e){const n=function(e){try{return JSON.parse(e)}catch(n){return e}}(e);return void 0===n?null:n}},19319:function(e){"use strict";var n={};e.exports={getItem:function(e){return e in n?n[e]:null},setItem:function(e,t){return n[e]=t,!0},removeItem:function(e){return!!(e in n)&&delete n[e]},clear:function(){return n={},!0}}},67240:function(e,n,t){"use strict";var r=t(94178),i={};function o(e){e||(e=t.g.event);var n=i[e.key];n&&n.forEach((function(n){n(r(e.newValue),r(e.oldValue),e.url||e.uri)}))}e.exports={on:function(e,n){i[e]?i[e].push(n):i[e]=[n],t.g.addEventListener?t.g.addEventListener("storage",o,!1):t.g.attachEvent?t.g.attachEvent("onstorage",o):t.g.onstorage=o},off:function(e,n){var t=i[e];t.length>1?t.splice(t.indexOf(n),1):i[e]=[]}}},72454:function(e,n,t){"use strict";t.d(n,{E7:function(){return h},HS:function(){return p},Nk:function(){return d},k1:function(){return s},lm:function(){return f}});var r=t(46313),i=t(23831),o=t(73942),c=t(3055),l=t(49125),u=t(37391),a=t(90880),s=l.cd*l.iI+5*l.iI+l.cd*l.iI,d=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-ecogjt-0"})(["display:flex;flex-direction:row;height:calc(100vh - ","px);position:fixed;top:","px;width:100%;",""],c.Mz,c.Mz,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).page,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__VerticalNavigationStyle",componentId:"sc-ecogjt-1"})(["padding:","px;",""],l.cd*l.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).panel,";\n    border-right: 1px solid ").concat((e.theme.borders||i.Z.borders).medium,";\n  ")})),p=r.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-ecogjt-2"})(["width:fit-content;padding:","px;position:relative;z-index:2;",""],l.cd*l.iI,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")})),h=(r.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-ecogjt-3"})([""," overflow:auto;",""],u.w5,(function(e){return"\n    height: calc(100vh - ".concat(c.Mz+(e.heightOffset||0),"px);\n  ")})),r.default.div.withConfig({displayName:"indexstyle__NavigationItemStyle",componentId:"sc-ecogjt-4"})(["display:flex;align-items:center;justify-content:center;padding:","px;border-radius:","px;",""],l.iI,o.n_,(function(e){return e.primary&&"\n    ".concat((0,a.eR)(),"\n    background: ").concat((e.theme||i.Z).chart.backgroundPrimary,";\n    border: 1px solid ").concat((e.theme||i.Z).feature.active,";\n\n    &:hover {\n      background-color: ").concat((e.theme||i.Z).interactive.linkSecondary,";\n    }\n  ")})))},51404:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(77555),i=t(82684),o=t(93461),c=t(57384),l=t(80845),u=t(72454),a=t(28598);function s(e,n){var t=e.children;return(0,a.jsx)(u.HS,{ref:n,children:t})}var d=i.forwardRef(s),f=t(32063),p=t(34376),h=t(61519),g=t(57639),v=t(882),m=t(31866);var b=function(e){var n=e.size;return(0,a.jsxs)("svg",{width:n,height:n,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.86364 2.5H4.13636C3.68449 2.5 3.31818 2.94772 3.31818 3.5V7.5C3.31818 8.05228 3.68449 8.5 4.13636 8.5H9.86364C10.3155 8.5 10.6818 8.05228 10.6818 7.5V3.5C10.6818 2.94772 10.3155 2.5 9.86364 2.5ZM4.13636 1.5C3.23263 1.5 2.5 2.39543 2.5 3.5V7.5C2.5 8.60457 3.23263 9.5 4.13636 9.5H5.5V16.1667V16.5H4.13636C3.23263 16.5 2.5 17.3954 2.5 18.5V22.5C2.5 23.6046 3.23263 24.5 4.13636 24.5H9.86364C10.7674 24.5 11.5 23.6046 11.5 22.5V18.5C11.5 17.3954 10.7674 16.5 9.86364 16.5H6.5V16.1667C6.5 14.9394 7.61929 13.9444 9 13.9444H16C17.933 13.9444 19.5 12.5516 19.5 10.8333V9.5H21.8636C22.7674 9.5 23.5 8.60457 23.5 7.5V3.5C23.5 2.39543 22.7674 1.5 21.8636 1.5H16.1364C15.2326 1.5 14.5 2.39543 14.5 3.5V7.5C14.5 8.60457 15.2326 9.5 16.1364 9.5H18.5V10.8333C18.5 12.0606 17.3807 13.0556 16 13.0556H9C8.02066 13.0556 7.13526 13.4131 6.5 13.9893V9.5H9.86364C10.7674 9.5 11.5 8.60457 11.5 7.5V3.5C11.5 2.39543 10.7674 1.5 9.86364 1.5H4.13636ZM9.86364 17.5H6.5H5.5H4.13636C3.68449 17.5 3.31818 17.9477 3.31818 18.5V22.5C3.31818 23.0523 3.68449 23.5 4.13636 23.5H9.86364C10.3155 23.5 10.6818 23.0523 10.6818 22.5V18.5C10.6818 17.9477 10.3155 17.5 9.86364 17.5ZM16.1364 2.5H21.8636C22.3155 2.5 22.6818 2.94772 22.6818 3.5V7.5C22.6818 8.05228 22.3155 8.5 21.8636 8.5H16.1364C15.6845 8.5 15.3182 8.05228 15.3182 7.5V3.5C15.3182 2.94772 15.6845 2.5 16.1364 2.5Z",fill:"url(#paint0_linear_2738_141228)"}),(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"paint0_linear_2738_141228",x1:"2.5",y1:"13",x2:"23.5",y2:"13",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},x=t(86673),j=t(19711),y=t(46261),w=t(10503),C=t(99994),Z=t(49125),H=3*Z.iI;var _=function(e){var n=e.navigationItems,t=(0,p.useRouter)().pathname,r=(0,i.useMemo)((function(){return(n||[{Icon:w.rV,IconSelected:b,id:"pipelines",label:function(){return"Pipelines"},linkProps:{href:"pipelines"}},{Icon:w.pd,IconSelected:h.Z,id:"pipeline-runs",label:function(){return"Pipelines runs"},linkProps:{href:"pipeline-runs"}}]).map((function(e,n){var r=e.Icon,i=e.IconSelected,o=e.id,c=e.isSelected,l=e.label,s=e.linkProps,d=c?c(t):!!t.match(new RegExp("^/".concat(o,"[/]*"))),f=d&&i?i:r;return(0,a.jsx)(x.Z,{mt:n>=1?Z.cd:0,children:(0,a.jsxs)(y.Z,{height:5*Z.iI,label:l(),size:null,widthFitContent:!0,children:[d&&i&&(0,a.jsx)(v.Z,{backgroundGradient:C.yr,backgroundPanel:!0,basic:!0,borderWidth:2,linkProps:s,paddingUnits:1,children:(0,a.jsx)("div",{style:{height:H,width:H},children:(0,a.jsx)(f,{muted:!0,size:H})})}),!d&&(0,a.jsx)(m.ZP,{block:!0,noHoverUnderline:!0,noPadding:!0,linkProps:s,sameColorAsText:!0,uuid:"VerticalNavigation/".concat(o),children:(0,a.jsx)(u.E7,{primary:!f,children:f?(0,a.jsx)(f,{muted:!0,size:H}):(0,a.jsx)(j.ZP,{children:"Edit"})})})]})},"button-".concat(o))}))}),[n,t]);return(0,a.jsx)(g.Z,{children:r})},k=t(41374),O=t(3055),I=t(91427),V=t(24141);var P=function(e){var n,t=e.after,s=e.afterHidden,p=e.afterWidth,h=e.before,g=e.beforeWidth,v=e.breadcrumbs,m=e.children,b=e.headerMenuItems,x=e.navigationItems,j=e.subheaderChildren,y=e.title,w=e.uuid,C=(0,V.i)().width,Z="dashboard_after_width_".concat(w),H="dashboard_before_width_".concat(w),P=(0,i.useRef)(null),M=(0,i.useState)((0,I.U2)(Z,p)),S=M[0],E=M[1],N=(0,i.useState)(!1),B=N[0],z=N[1],A=(0,i.useState)((0,I.U2)(H,g)),D=A[0],R=A[1],T=(0,i.useState)(!1),W=T[0],F=T[1],U=(0,i.useState)(null),L=(U[0],U[1]),G=k.ZP.projects.list().data,J=null===G||void 0===G?void 0:G.projects,X=[];return v?X.push.apply(X,(0,r.Z)(v)):(null===J||void 0===J?void 0:J.length)>=1&&X.push.apply(X,[{label:function(){var e;return null===(e=J[0])||void 0===e?void 0:e.name}},{bold:!0,label:function(){return y}}]),(0,i.useEffect)((function(){null===P||void 0===P||!P.current||B||W||null===L||void 0===L||L(P.current.getBoundingClientRect().width)}),[B,S,W,D,null===P||void 0===P?void 0:P.current,L,C]),(0,i.useEffect)((function(){B||(0,I.t8)(Z,S)}),[s,B,S]),(0,i.useEffect)((function(){W||(0,I.t8)(H,D)}),[W,D]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{title:y}),(0,a.jsx)(l.Z,{breadcrumbs:X,menuItems:b,project:null===J||void 0===J?void 0:J[0],version:null===J||void 0===J||null===(n=J[0])||void 0===n?void 0:n.version}),(0,a.jsxs)(u.Nk,{children:[0!==(null===x||void 0===x?void 0:x.length)&&(0,a.jsx)(u.lm,{children:(0,a.jsx)(_,{navigationItems:x})}),(0,a.jsx)(o.Z,{flex:1,flexDirection:"column",children:(0,a.jsxs)(f.Z,{after:t,afterHeightOffset:O.Mz,afterHidden:s,afterMousedownActive:B,afterWidth:S,before:h,beforeHeightOffset:O.Mz,beforeMousedownActive:W,beforeWidth:u.k1+(h?D:0),hideAfterCompletely:!0,leftOffset:h?u.k1:null,mainContainerRef:P,setAfterMousedownActive:z,setAfterWidth:E,setBeforeMousedownActive:F,setBeforeWidth:R,children:[j&&(0,a.jsx)(d,{children:j}),m]})})]})]})}},17903:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(82394),i=t(12691),o=t.n(i),c=t(82684),l=t(67971),u=t(10919),a=t(86673),s=t(19711),d=t(46261),f=t(46313),p=t(23831),h=t(49125),g=f.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(e){return e.columnBorders&&"\n    border-collapse: separate;\n  "})),v=f.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||p.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),m=(0,f.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(h.iI/2,"px ").concat(h.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(h.iI,"px ").concat(2*h.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),b=f.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],m,(function(e){return e.columnBorders&&"\n    border: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n    border-right: none;\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.sticky&&"\n    background-color: ".concat((e.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),x=f.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],m,(function(e){return e.columnBorders&&"\n    border-left: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.stickyFirstColumn&&"\n    background-color: ".concat((e.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||p.Z.interactive).activeBorder,";\n  ")}),(function(e){return e.wrapColumns&&"\n    white-space: break-spaces;\n  "})),j=t(28598);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=function(e){var n=e.alignTop,t=e.buildLinkProps,r=e.columnBorders,i=e.columnFlex,f=e.columnMaxWidth,p=e.columns,h=void 0===p?[]:p,m=e.compact,y=e.isSelectedRow,C=e.noBorder,Z=e.noHeader,H=e.onClickRow,_=e.rows,k=e.stickyFirstColumn,O=e.stickyHeader,I=e.uuid,V=e.wrapColumns,P=(0,c.useMemo)((function(){return i.reduce((function(e,n){return e+(n||0)}),0)}),i),M=(0,c.useCallback)((function(e){if(i[e]){var n=Math.round(i[e]/P*100);return"".concat(n,"%")}return null}),[]),S=(0,c.useMemo)((function(){return null===_||void 0===_?void 0:_.map((function(e,i){var c=null===t||void 0===t?void 0:t(i),l=e.map((function(t,o){return(0,j.jsx)(x,{alignTop:n,columnBorders:r,compact:m,last:o===e.length-1,maxWidth:null===f||void 0===f?void 0:f(o),noBorder:C,selected:null===y||void 0===y?void 0:y(i),stickyFirstColumn:k&&0===o,width:M(o),wrapColumns:V,children:t},"".concat(I,"-row-").concat(i,"-cell-").concat(o))})),a=(0,j.jsx)(v,{noHover:!(c||H),onClick:H?function(){return H(i)}:null,children:l},"".concat(I,"-row-").concat(i));return c?(0,j.jsx)(o(),w(w({},c),{},{passHref:!0,children:(0,j.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:a})})):a}))}),[n,t,M,f,h,m,y,C,H,_]);return(0,j.jsxs)(g,{columnBorders:r,children:[(null===h||void 0===h?void 0:h.length)>=1&&!Z&&(0,j.jsx)(v,{noHover:!0,children:h.map((function(e,n){return(0,j.jsx)(b,{columnBorders:r,compact:m,last:n===h.length-1,noBorder:C,sticky:O,children:(0,j.jsxs)(l.Z,{alignItems:"center",children:[(0,j.jsx)(s.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid}),e.tooltipMessage&&(0,j.jsx)(a.Z,{ml:"4px",children:(0,j.jsx)(d.Z,{appearBefore:!0,label:(0,j.jsx)(s.ZP,{leftAligned:!0,children:e.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(I,"-col-").concat(e.uuid,"-").concat(n))}))}),S]})}},66050:function(e,n,t){"use strict";var r;t.d(n,{V:function(){return r}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running"}(r||(r={}))},61519:function(e,n,t){"use strict";var r=t(28598);n.Z=function(e){var n=e.size;return(0,r.jsxs)("svg",{width:n,height:n,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3H9V9H3V3ZM10 2V9H17V16H24V24H17H16H10H9H2V17V16V10V9V2H10ZM16 23V17H10V23H16ZM17 23H23V17H17V23ZM16 16V10H10V16H16ZM9 10V16H3V10H9ZM9 17V23H3V17H9Z",fill:"url(#paint0_linear_2738_140355)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_2738_140355",x1:"2",y1:"13",x2:"24",y2:"13",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})}},92597:function(e,n,t){"use strict";t.r(n);var r=t(82394),i=t(82684),o=t(34376),c=t(51404),l=t(67971),u=t(51099),a=t(97496),s=t(55378),d=t(86673),f=t(19711),p=t(41374),h=t(47409),g=t(66050),v=t(49125),m=t(33766),b=t(24224),x=t(59e3),j=t(28598);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(){var e=(0,o.useRouter)(),n=(0,x.iV)(),t=null!==n&&void 0!==n&&n.page?n.page:0,r=p.ZP.pipelines.list().data,y={_limit:25,_offset:25*t};null!==n&&void 0!==n&&n.status&&(y.status=n.status);var C=p.ZP.pipeline_runs.list(y,{refreshInterval:3e3,revalidateOnFocus:!0}),Z=C.data,H=C.mutate,_=(0,i.useMemo)((function(){return(null===r||void 0===r?void 0:r.pipelines)||[]}),[r]),k=((0,i.useMemo)((function(){return(0,b.HK)(_,(function(e){return e.uuid}))}),[_]),(0,i.useMemo)((function(){return(null===Z||void 0===Z?void 0:Z.pipeline_runs)||[]}),[Z])),O=(0,i.useMemo)((function(){return(null===Z||void 0===Z?void 0:Z.total_count)||[]}),[Z]);return(0,j.jsxs)(c.Z,{title:"Pipeline runs",uuid:"pipeline_runs/index",children:[(0,j.jsx)(d.Z,{mx:2,my:1,children:(0,j.jsxs)(l.Z,{alignItems:"center",children:[(0,j.jsx)(f.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}),(0,j.jsx)(d.Z,{mr:1}),(0,j.jsxs)(s.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(n){n.preventDefault(),"all"===n.target.value?e.push("/pipeline-runs"):(0,m.u)({page:0,status:n.target.value})},paddingRight:4*v.iI,placeholder:"Select run status",value:(null===n||void 0===n?void 0:n.status)||"all",children:[(0,j.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),Object.values(g.V).map((function(e){return(0,j.jsx)("option",{value:e,children:h.D[e]},e)}))]})]})}),(0,j.jsx)(a.Z,{fetchPipelineRuns:H,pipelineRuns:k}),(0,j.jsx)(d.Z,{p:2,children:(0,j.jsx)(u.Z,{maxPages:9,onUpdate:function(t){var r=Number(t),i=w(w({},n),{},{page:r>=0?r:0});e.push("/pipeline-runs","/pipeline-runs?".concat((0,x.uM)(i)))},page:Number(t),totalPages:Math.ceil(O/25)})})]})}},60710:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipeline-runs",function(){return t(92597)}])}},function(e){e.O(0,[4259,2212,7689,1374,5763,6792,9898,4846,9774,2888,179],(function(){return n=60710,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
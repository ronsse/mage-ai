(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1933],{17717:function(e,t,n){var i=n(554);!function(){"use strict";var t={977:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,i="",r=0,o=-1,l=0,u=0;u<=e.length;++u){if(u<e.length)n=e.charCodeAt(u);else{if(47===n)break;n=47}if(47===n){if(o===u-1||1===l);else if(o!==u-1&&2===l){if(i.length<2||2!==r||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2))if(i.length>2){var a=i.lastIndexOf("/");if(a!==i.length-1){-1===a?(i="",r=0):r=(i=i.slice(0,a)).length-1-i.lastIndexOf("/"),o=u,l=0;continue}}else if(2===i.length||1===i.length){i="",r=0,o=u,l=0;continue}t&&(i.length>0?i+="/..":i="..",r=2)}else i.length>0?i+="/"+e.slice(o+1,u):i=e.slice(o+1,u),r=u-o-1;o=u,l=0}else 46===n&&-1!==l?++l:l=-1}return i}var r={resolve:function(){for(var e,r="",o=!1,l=arguments.length-1;l>=-1&&!o;l--){var u;l>=0?u=arguments[l]:(void 0===e&&(e=i.cwd()),u=e),t(u),0!==u.length&&(r=u+"/"+r,o=47===u.charCodeAt(0))}return r=n(r,!o),o?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var i=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!i)).length||i||(e="."),e.length>0&&r&&(e+="/"),i?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,l=o-i,u=1;u<n.length&&47===n.charCodeAt(u);++u);for(var a=n.length-u,c=l<a?l:a,d=-1,s=0;s<=c;++s){if(s===c){if(a>c){if(47===n.charCodeAt(u+s))return n.slice(u+s+1);if(0===s)return n.slice(u+s)}else l>c&&(47===e.charCodeAt(i+s)?d=s:0===s&&(d=0));break}var f=e.charCodeAt(i+s);if(f!==n.charCodeAt(u+s))break;47===f&&(d=s)}var p="";for(s=i+d+1;s<=o;++s)s!==o&&47!==e.charCodeAt(s)||(0===p.length?p+="..":p+="/..");return p.length>0?p+n.slice(u+d):(u+=d,47===n.charCodeAt(u)&&++u,n.slice(u))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),i=47===n,r=-1,o=!0,l=e.length-1;l>=1;--l)if(47===(n=e.charCodeAt(l))){if(!o){r=l;break}}else o=!1;return-1===r?i?"/":".":i&&1===r?"//":e.slice(0,r)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');t(e);var i,r=0,o=-1,l=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var u=n.length-1,a=-1;for(i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47===c){if(!l){r=i+1;break}}else-1===a&&(l=!1,a=i+1),u>=0&&(c===n.charCodeAt(u)?-1===--u&&(o=i):(u=-1,o=a))}return r===o?o=a:-1===o&&(o=e.length),e.slice(r,o)}for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!l){r=i+1;break}}else-1===o&&(l=!1,o=i+1);return-1===o?"":e.slice(r,o)},extname:function(e){t(e);for(var n=-1,i=0,r=-1,o=!0,l=0,u=e.length-1;u>=0;--u){var a=e.charCodeAt(u);if(47!==a)-1===r&&(o=!1,r=u+1),46===a?-1===n?n=u:1!==l&&(l=1):-1!==n&&(l=-1);else if(!o){i=u+1;break}}return-1===n||-1===r||0===l||1===l&&n===r-1&&n===i+1?"":e.slice(n,r)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,i=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+i:n+e+i:i}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var i,r=e.charCodeAt(0),o=47===r;o?(n.root="/",i=1):i=0;for(var l=-1,u=0,a=-1,c=!0,d=e.length-1,s=0;d>=i;--d)if(47!==(r=e.charCodeAt(d)))-1===a&&(c=!1,a=d+1),46===r?-1===l?l=d:1!==s&&(s=1):-1!==l&&(s=-1);else if(!c){u=d+1;break}return-1===l||-1===a||0===s||1===s&&l===a-1&&l===u+1?-1!==a&&(n.base=n.name=0===u&&o?e.slice(1,a):e.slice(u,a)):(0===u&&o?(n.name=e.slice(1,l),n.base=e.slice(1,a)):(n.name=e.slice(u,l),n.base=e.slice(u,a)),n.ext=e.slice(l,a)),u>0?n.dir=e.slice(0,u-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},l=!0;try{t[e](o,o.exports,r),l=!1}finally{l&&delete n[e]}return o.exports}r.ab="//";var o=r(977);e.exports=o}()},38639:function(e,t,n){"use strict";n.d(t,{EN:function(){return k},FX:function(){return I},HS:function(){return j},Nk:function(){return h},Rd:function(){return p},SL:function(){return Z},Tj:function(){return _},UE:function(){return O},Yf:function(){return m},ZG:function(){return d},bC:function(){return g},n5:function(){return f},n8:function(){return w},w5:function(){return x},wj:function(){return v},wl:function(){return b},ze:function(){return y}});var i=n(38626),r=n(23831),o=n(73942),l=n(3055),u=n(49125),a=n(90880),c=n(37391),d=2.5*u.iI,s=40*u.iI,f=10*u.iI,p=i.default.div.withConfig({displayName:"indexstyle__ContainedStyle",componentId:"sc-8sk2qr-0"})([""," overflow:auto;"," "," ",""],c.w5,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).page,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height-f,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width-f,"px;\n  ")})),h=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-8sk2qr-1"})(["height:100%;position:relative;"]),g=i.default.div.withConfig({displayName:"indexstyle__NavigationStyle",componentId:"sc-8sk2qr-2"})(["position:fixed;width:","px;z-index:1;"," "," ",""],s,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).panel,";\n    border-right: 1px solid ").concat((e.theme.borders||r.Z.borders).light,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height-f,"px;\n  ")}),(function(e){return!e.height&&"\n    height: 100%;\n  "})),m=i.default.div.withConfig({displayName:"indexstyle__TabsStyle",componentId:"sc-8sk2qr-3"})(["padding-bottom:","px;padding-left:","px;padding-right:","px;padding-top:","px;",""],1*u.iI,u.cd*u.iI,u.cd*u.iI,1*u.iI,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||r.Z.borders).light,";\n  ")})),b=i.default.div.withConfig({displayName:"indexstyle__LinksContainerStyle",componentId:"sc-8sk2qr-4"})([""," overflow:auto;position:fixed;width:","px;",""],c.w5,s,(function(e){return"\n    height: calc(100% - ".concat(55+(null!==e&&void 0!==e&&e.contained?f:l.Mz)+((null===e||void 0===e?void 0:e.heightOffset)||0),"px);\n  ")})),v=i.default.div.withConfig({displayName:"indexstyle__NavLinkStyle",componentId:"sc-8sk2qr-5"})([""," padding-bottom:","px;padding-left:","px;padding-right:","px;padding-top:","px;&:hover{cursor:pointer;}",""],(0,a.eR)(),1*u.iI,u.cd*u.iI,u.cd*u.iI,1*u.iI,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||r.Z.background).codeTextarea,";\n  ")})),y=i.default.div.withConfig({displayName:"indexstyle__IconStyle",componentId:"sc-8sk2qr-6"})([""," border-radius:","px;height:","px;margin-right:","px;padding:","px;width:","px;"," ",""],(0,a.eR)(),o.n_,5*u.iI,1.25*u.iI,1.25*u.iI,5*u.iI,(function(e){return!e.backgroundColor&&"\n    background-color: ".concat((e.theme.background||r.Z.background).chartBlock,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")})),x=i.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-8sk2qr-7"})(["margin-left:","px;"],s),j=i.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-8sk2qr-8"})(["padding:","px;",""],u.cd*u.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||r.Z.borders).light,";\n  ")})),w=i.default.div.withConfig({displayName:"indexstyle__CardsStyle",componentId:"sc-8sk2qr-9"})(["display:flex;flex-wrap:wrap;padding:","px;"],.75*u.iI),O=i.default.div.withConfig({displayName:"indexstyle__CardStyle",componentId:"sc-8sk2qr-10"})(["border-radius:","px;margin:","px;padding:","px;width:","px;&:hover{cursor:pointer;}",""],o.n_,.75*u.iI,2.5*u.iI,50*u.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).panel,";\n    border: 1px solid ").concat((e.theme.background||r.Z.background).chartBlock,";\n    box-shadow: ").concat((e.theme.shadow||r.Z.shadow).frame,";\n  ")})),_=i.default.div.withConfig({displayName:"indexstyle__CardTitleStyle",componentId:"sc-8sk2qr-11"})(["height:","px;"],2.5*u.iI),Z=i.default.div.withConfig({displayName:"indexstyle__CardDescriptionStyle",componentId:"sc-8sk2qr-12"})(["height:","px;margin-top:","px;"],2.5*u.iI*2,1*u.iI),k=i.default.div.withConfig({displayName:"indexstyle__TagsStyle",componentId:"sc-8sk2qr-13"})(["height:","px;margin-top:","px;overflow:hidden;"],3.5*u.iI,.5*u.iI),I=i.default.div.withConfig({displayName:"indexstyle__BreadcrumbsStyle",componentId:"sc-8sk2qr-14"})(["padding-bottom:","px;padding-top:","px;",""],1*u.iI,1*u.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||r.Z.borders).light,";\n  ")}))},41422:function(e,t,n){"use strict";n.d(t,{Nk:function(){return a},Yf:function(){return d},bC:function(){return c},ig:function(){return s},w5:function(){return f}});var i=n(38626),r=n(23831),o=n(49125),l=n(38639),u=(o.iI,40*o.iI),a=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-axgvn9-0"})(["height:100%;position:relative;"]),c=i.default.div.withConfig({displayName:"indexstyle__NavigationStyle",componentId:"sc-axgvn9-1"})(["overflow:auto;position:fixed;width:","px;z-index:1;"," "," ",""],u,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).panel,";\n    border-right: 1px solid ").concat((e.theme.borders||r.Z.borders).light,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height-l.n5,"px;\n  ")}),(function(e){return!e.height&&"\n    height: 100%;\n  "})),d=i.default.div.withConfig({displayName:"indexstyle__TabsStyle",componentId:"sc-axgvn9-2"})(["padding-bottom:","px;padding-left:","px;padding-right:","px;padding-top:","px;width:100%;",""],1*o.iI,o.cd*o.iI,o.cd*o.iI,1*o.iI,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||r.Z.borders).light,";\n  ")})),s=i.default.div.withConfig({displayName:"indexstyle__ButtonsStyle",componentId:"sc-axgvn9-3"})(["margin-top:","px;width:100%;",""],o.cd*o.iI,(function(e){return"\n    border-top: 1px solid ".concat((e.theme.borders||r.Z.borders).light,";\n  ")})),f=i.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-axgvn9-4"})(["margin-left:","px;"],u)},1210:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var i=n(82394),r=n(21831),o=n(82684),l=n(47999),u=n(49894),a=n(93461),c=n(57384),d=n(41424),s=n(72454),f=n(28598);function p(e,t){var n=e.children;return(0,f.jsx)(s.HS,{ref:t,children:n})}var h=o.forwardRef(p),g=n(32063),m=n(85019),b=n(82531),v=n(66166),y=n(3055),x=n(49125),j=n(91427),w=n(24141);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t,n=e.addProjectBreadcrumbToCustomBreadcrumbs,i=e.after,p=e.afterHidden,O=e.afterWidth,Z=e.afterWidthOverride,k=e.before,I=e.beforeWidth,C=e.breadcrumbs,P=e.children,S=e.errors,N=e.headerMenuItems,A=e.headerOffset,E=e.mainContainerHeader,D=e.navigationItems,M=e.setErrors,H=e.subheaderChildren,T=e.title,z=e.uuid,q=(0,w.i)().width,F="dashboard_after_width_".concat(z),L="dashboard_before_width_".concat(z),B=(0,o.useRef)(null),U=(0,o.useState)(Z?O:(0,j.U2)(F,O)),W=U[0],R=U[1],J=(0,o.useState)(!1),G=J[0],V=J[1],Y=(0,o.useState)(k?Math.max((0,j.U2)(L,I),13*x.iI):null),Q=Y[0],X=Y[1],K=(0,o.useState)(!1),$=K[0],ee=K[1],te=(0,o.useState)(null)[1],ne=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,ie=null===ne||void 0===ne?void 0:ne.projects,re={label:function(){var e;return null===ie||void 0===ie||null===(e=ie[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];C?(n&&oe.push(re),oe.push.apply(oe,(0,r.Z)(C))):(null===ie||void 0===ie?void 0:ie.length)>=1&&oe.push.apply(oe,[re,{bold:!0,label:function(){return T}}]),(0,o.useEffect)((function(){null===B||void 0===B||!B.current||G||$||null===te||void 0===te||te(B.current.getBoundingClientRect().width)}),[G,W,$,Q,B,te,q]),(0,o.useEffect)((function(){G||(0,j.t8)(F,W)}),[p,G,W,F]),(0,o.useEffect)((function(){$||(0,j.t8)(L,Q)}),[$,Q,L]);var le=(0,v.Z)(O);return(0,o.useEffect)((function(){Z&&le!==O&&R(O)}),[Z,O,le]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{title:T}),(0,f.jsx)(d.Z,{breadcrumbs:oe,menuItems:N,project:null===ie||void 0===ie?void 0:ie[0],version:null===ie||void 0===ie||null===(t=ie[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(s.Nk,{children:[0!==(null===D||void 0===D?void 0:D.length)&&(0,f.jsx)(s.lm,{showMore:!0,children:(0,f.jsx)(m.Z,{navigationItems:D,showMore:!0})}),(0,f.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(g.Z,{after:i,afterHeightOffset:y.Mz,afterHidden:p,afterMousedownActive:G,afterWidth:W,before:k,beforeHeightOffset:y.Mz,beforeMousedownActive:$,beforeWidth:s.k1+(k?Q:0),headerOffset:A,hideAfterCompletely:!0,leftOffset:k?s.k1:null,mainContainerHeader:E,mainContainerRef:B,setAfterMousedownActive:V,setAfterWidth:R,setBeforeMousedownActive:ee,setBeforeWidth:X,children:[H&&(0,f.jsx)(h,{children:H}),P]})})]}),S&&(0,f.jsx)(l.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===M||void 0===M?void 0:M(null)},children:(0,f.jsx)(u.Z,_(_({},S),{},{onClose:function(){return null===M||void 0===M?void 0:M(null)}}))})]})}},83766:function(e,t,n){"use strict";var i=n(82394),r=n(86673),o=n(87815),l=n(19711),u=n(82944),a=n(49125),c=n(28598);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.objectAttributes,n=e.originalAttributes,d=e.setObjectAttributes;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.Z,{mb:1,px:a.cd,children:[(0,c.jsx)(l.ZP,{bold:!0,children:"Outdated after"}),(0,c.jsx)(l.ZP,{muted:!0,small:!0,children:"After the global data product successfully completes running, how long after that will the global data product be outdated?"})]}),(0,c.jsx)(o.Z,{columnFlex:[null,1],columns:[{uuid:"Unit"},{uuid:"Value"}],rows:[{uuid:"seconds"},{uuid:"weeks"},{uuid:"months"},{uuid:"years"}].map((function(e){var r,o,a=e.uuid,f=null===t||void 0===t||null===(r=t.outdated_after)||void 0===r?void 0:r[a],p=null===n||void 0===n||null===(o=n.outdated_after)||void 0===o?void 0:o[a];return[(0,c.jsxs)(l.ZP,{default:!0,monospace:!0,children:[a," ",p&&(0,c.jsxs)(l.ZP,{inline:!0,monospace:!0,muted:!0,children:["(default: ",p,")"]})]},"label-".concat(a)),(0,c.jsx)(u.Z,{compact:!0,monospace:!0,onChange:function(e){return d((function(t){var n;return s(s({},t),{},{outdated_after:s(s({},null===t||void 0===t?void 0:t.outdated_after),{},(0,i.Z)({},a,0===(null===(n=e.target.value)||void 0===n?void 0:n.length)?null:Number(e.target.value)))})}))},placeholder:"Enter a number",primary:!0,setContentOnMount:!0,small:!0,type:"number",value:"undefined"===typeof f||null===f?"":f},"input-".concat(a))]}))})]})}},31682:function(e,t,n){"use strict";var i=n(82394),r=n(55378),o=n(86673),l=n(87815),u=n(19711),a=n(82944),c=n(49125),d=n(90211),s=n(24224),f=n(28598);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.objectAttributes,n=e.originalAttributes,p=e.setObjectAttributes;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o.Z,{mb:1,px:c.cd,children:[(0,f.jsxs)(u.ZP,{bold:!0,children:["Outdated starting at ",(0,f.jsx)(u.ZP,{inline:!0,muted:!0,children:"(optional)"})]}),(0,f.jsx)(u.ZP,{muted:!0,small:!0,children:"If enough time has passed since the last global data product has ran successfully and the global data product is determined to be outdated, then you can configure it to be outdated at a specific date or time."}),(0,f.jsx)("div",{style:{marginTop:4},children:(0,f.jsxs)(u.ZP,{muted:!0,small:!0,children:["For example, let\u2019s say the global data product is outdated after 12 hours. The last successful run was yesterday at 18:00. The global data product will be outdated today at 06:00. However, if the ",(0,f.jsx)(u.ZP,{bold:!0,inline:!0,muted:!0,small:!0,children:"Outdated starting at"})," has a value of 17 for ",(0,f.jsx)(u.ZP,{bold:!0,inline:!0,muted:!0,small:!0,children:"Hour of day"}),", then the global data product won\u2019t run again until today at 17:00."]})})]}),(0,f.jsx)(l.Z,{columnFlex:[null,1],columns:[{uuid:"Unit"},{uuid:"Value"}],rows:[{uuid:"second_of_minute",values:(0,s.w6)(60).map((function(e,t){return{uuid:t,value:t}}))},{uuid:"minute_of_hour",values:(0,s.w6)(60).map((function(e,t){return{uuid:t,value:t}}))},{uuid:"hour_of_day",values:(0,s.w6)(24).map((function(e,t){return{uuid:t,value:t}}))},{uuid:"day_of_week",values:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(e,t){return{uuid:e,value:t}}))},{uuid:"day_of_month",values:(0,s.w6)(31).map((function(e,t){return{uuid:t+1,value:t+1}}))},{uuid:"day_of_year",values:(0,s.w6)(365).map((function(e,t){return{uuid:t+1,value:t+1}}))},{uuid:"week_of_month",values:(0,s.w6)(5).map((function(e,t){return{uuid:t+1,value:t+1}}))},{uuid:"week_of_year",values:(0,s.w6)(52).map((function(e,t){return{uuid:t+1,value:t+1}}))},{uuid:"month_of_year",values:["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e,t){return{uuid:e,value:t+1}}))}].map((function(e){var o,l,c,s=e.uuid,g=e.values,m=null===t||void 0===t||null===(o=t.outdated_starting_at)||void 0===o?void 0:o[s],b=null===n||void 0===n||null===(l=n.outdated_starting_at)||void 0===l?void 0:l[s],v={compact:!0,key:"outdated-starting-at-input-".concat(s),monospace:!0,onChange:function(e){return p((function(t){var n;return h(h({},t),{},{outdated_starting_at:h(h({},null===t||void 0===t?void 0:t.outdated_starting_at),{},(0,i.Z)({},s,0===(null===(n=e.target.value)||void 0===n?void 0:n.length)?null:Number(e.target.value)))})}))},primary:!0,small:!0,value:"undefined"===typeof m||null===m?"":m};return c=g?(0,f.jsx)(r.Z,h(h({},v),{},{placeholder:"Select a value",children:g.map((function(e){var t=e.uuid,n=e.value;return(0,f.jsx)("option",{value:n,children:t},n)}))})):(0,f.jsx)(a.Z,h(h({},v),{},{placeholder:"Enter a number",setContentOnMount:!0,type:"number"})),[(0,f.jsxs)(u.ZP,{default:!0,monospace:!0,children:[(0,d.vg)(s)," ",b&&(0,f.jsxs)(u.ZP,{inline:!0,monospace:!0,muted:!0,children:["(default: ",b,")"]})]},"outdated-starting-at-label-".concat(s)),c]}))})]})}},21978:function(e,t,n){"use strict";var i=n(82394),r=n(12691),o=n.n(r),l=n(38341),u=n(10919),a=n(86673),c=n(87815),d=n(19711),s=n(82944),f=n(49125),p=n(28598);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.blocks,n=e.objectAttributes,r=e.originalAttributes,h=e.setObjectAttributes;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(a.Z,{mb:1,px:f.cd,children:[(0,p.jsx)(d.ZP,{bold:!0,children:"Block data to output"}),(0,p.jsx)(d.ZP,{muted:!0,small:!0,children:"The data output from the block(s) you select below will be the data product that is returned when a downstream entity is requesting data from this global data product."}),(0,p.jsx)("div",{style:{marginTop:4},children:(0,p.jsx)(d.ZP,{muted:!0,small:!0,children:"When requesting data from this global data product, the selected block(s) will return data from its most recent partition. You can override this by adding a value in the partitions setting. For example, if you set the partitions value to 5, then the selected block will return data from its 5 most recent partitions. If you set the partitions value to 0, then all the partitions will be returned."})})]}),(0,p.jsx)(c.Z,{columnFlex:[null,1,null],columns:[{label:function(){return""},uuid:"selected"},{uuid:"Block UUID"},{uuid:"Partitions"}],rows:null===t||void 0===t?void 0:t.map((function(e){var t,a=e.uuid,c=null===n||void 0===n?void 0:n.settings,f=null===c||void 0===c?void 0:c[a],m=null===f||void 0===f?void 0:f.partitions,b=null===r||void 0===r||null===(t=r.settings)||void 0===t?void 0:t[a],v=null===b||void 0===b?void 0:b.partitions,y=!!f||!!b;return[(0,p.jsx)(l.Z,{checked:y,onClick:function(){return function(e){h((function(t){var n=(null===t||void 0===t?void 0:t.settings)||{};return e?n[a]={}:null===n||void 0===n||delete n[a],g(g({},t),{},{settings:n})}))}(!y)}},"selected--".concat(a)),(0,p.jsxs)("div",{children:[(0,p.jsx)(o(),{as:"/pipelines/".concat(null===n||void 0===n?void 0:n.object_uuid,"/edit?block_uuid=").concat(a),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,p.jsx)(u.Z,{monospace:!0,openNewWindow:!0,sameColorAsText:!0,children:a})})," ",v&&(0,p.jsxs)(d.ZP,{inline:!0,monospace:!0,muted:!0,children:["(default: ",v,")"]})]},"block-uuid-".concat(a)),(0,p.jsx)(s.Z,{compact:!0,monospace:!0,onChange:function(e){return h((function(t){var n,r;return g(g({},t),{},{settings:g(g({},null===t||void 0===t?void 0:t.settings),{},(0,i.Z)({},a,g(g({},null===t||void 0===t||null===(n=t.settings)||void 0===n?void 0:n[a]),{},{partitions:0===(null===(r=e.target.value)||void 0===r?void 0:r.length)?null:Number(e.target.value)})))})}))},placeholder:"1",primary:!0,setContentOnMount:!0,small:!0,type:"number",value:"undefined"===typeof m||null===m?"":m},"input-".concat(a))]}))})]})}},7952:function(e,t,n){"use strict";var i=n(82394),r=n(75582),o=n(12691),l=n.n(o),u=n(21764),a=n(82684),c=n(83455),d=n(34376),s=n(60328),f=n(34744),p=n(93461),h=n(67971),g=n(30119),m=n(87372),b=n(10919),v=n(83766),y=n(31682),x=n(97496),j=n(55378),w=n(21978),O=n(86673),_=n(19711),Z=n(82944),k=n(97225),I=n(32063),C=n(82531),P=n(66166),S=n(41422),N=n(49125),A=n(72454),E=n(90211),D=n(96510),M=n(9728),H=n(28598);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.globalDataProduct,n=e.isNew,i=(0,d.useRouter)(),o=(0,M.VI)(null,{},[],{uuid:"GlobalDataProductDetail"}),T=(0,r.Z)(o,1)[0],q=(0,a.useState)(!1),F=q[0],L=q[1],B=(0,a.useState)(600),U=B[0],W=B[1],R=(0,a.useState)(!1),J=(R[0],R[1]),G=(0,a.useState)(null),V=G[0],Y=G[1],Q=(0,a.useCallback)((function(e){J(!0),Y(e)}),[]),X=(0,P.Z)(t);(0,a.useEffect)((function(){null!==t&&void 0!==t&&t.uuid&&(null===X||void 0===X?void 0:X.uuid)===(null===t||void 0===t?void 0:t.uuid)||Y(t)}),[t,X]);var K=(0,a.useMemo)((function(){return!(null!==V&&void 0!==V&&V.uuid)}),[V]),$=(0,c.Db)(C.ZP.global_data_products.useUpdate(n?null===V||void 0===V?void 0:V.uuid:null===t||void 0===t?void 0:t.uuid),{onSuccess:function(e){return(0,D.wD)(e,{callback:function(e){var r=e.global_data_product;n||null!==t&&void 0!==t&&t.uuid&&(null===r||void 0===r?void 0:r.uuid)!==(null===t||void 0===t?void 0:t.uuid)?i.replace("/global-data-products/[...slug]","/global-data-products/".concat(null===r||void 0===r?void 0:r.uuid)):(Y(r),J(!1),u.Am.success("Global data product successfully saved.",{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:"custom_pipeline_template"}))},onErrorCallback:function(e,t){return T({errors:t,response:e})}})}}),ee=(0,r.Z)($,2),te=ee[0],ne=ee[1].isLoading,ie=C.ZP.pipelines.detail(g.b.PIPELINE===(null===t||void 0===t?void 0:t.object_type)?null===t||void 0===t?void 0:t.object_uuid:null).data,re=(0,a.useMemo)((function(){return null===ie||void 0===ie?void 0:ie.pipeline}),[ie]),oe=(0,a.useMemo)((function(){return(null===re||void 0===re?void 0:re.blocks)||[]}),[re]),le=C.ZP.pipelines.list().data,ue=(0,a.useMemo)((function(){return(null===le||void 0===le?void 0:le.pipelines)||[]}),[le]),ae=(0,a.useMemo)((function(){return(0,H.jsxs)(h.ZP,{flexDirection:"column",fullHeight:!0,children:[(0,H.jsxs)(p.Z,{flexDirection:"column",children:[(0,H.jsxs)(O.Z,{mt:N.Mq,px:N.cd,children:[(0,H.jsxs)(O.Z,{mb:1,children:[(0,H.jsx)(_.ZP,{bold:!0,children:"UUID"}),(0,H.jsx)(_.ZP,{muted:!0,small:!0,children:"Unique identifier for this global data product. This value must be unique across all global data products."})]}),(0,H.jsx)(Z.Z,{monospace:!0,onChange:function(e){return Q((function(t){return z(z({},t),{},{uuid:e.target.value})}))},placeholder:"e.g. a unique identifier",primary:!0,setContentOnMount:!0,value:(null===V||void 0===V?void 0:V.uuid)||""})]}),(0,H.jsxs)(O.Z,{mt:N.Mq,px:N.cd,children:[(0,H.jsxs)(O.Z,{mb:1,children:[(0,H.jsx)(_.ZP,{bold:!0,children:"Object type"}),(0,H.jsx)(_.ZP,{muted:!0,small:!0,children:"Pipeline, block, etc. Currently, only pipeline is supported."})]}),(0,H.jsx)(j.Z,{onChange:function(e){return Q((function(t){return z(z({},t),{},{object_type:e.target.value})}))},placeholder:"Only pipeline is currently supported",primary:!0,value:(null===V||void 0===V?void 0:V.object_type)||"",children:[g.b.PIPELINE].map((function(e){return(0,H.jsx)("option",{value:e,children:(0,E.kC)(e)},e)}))})]}),(0,H.jsxs)(O.Z,{mt:N.Mq,px:N.cd,children:[(0,H.jsxs)(O.Z,{mb:1,children:[(0,H.jsx)(_.ZP,{bold:!0,children:"Object UUID"}),(0,H.jsxs)(_.ZP,{muted:!0,small:!0,children:["The UUID of the ",(null===V||void 0===V?void 0:V.object_type)||"object type"," that this global data product represents."]})]}),(0,H.jsx)(j.Z,{monospace:!0,onChange:function(e){return Q((function(t){return z(z({},t),{},{object_uuid:e.target.value})}))},placeholder:"Select object UUID",primary:!0,value:(null===V||void 0===V?void 0:V.object_uuid)||"",children:null===ue||void 0===ue?void 0:ue.map((function(e){var t=e.uuid;return(0,H.jsx)("option",{value:t,children:t},t)}))}),g.b.PIPELINE===(null===V||void 0===V?void 0:V.object_type)&&(null===V||void 0===V?void 0:V.object_uuid)&&(0,H.jsx)(O.Z,{mt:1,children:(0,H.jsxs)(_.ZP,{muted:!0,small:!0,children:["View pipeline ",(0,H.jsx)(l(),{as:"/pipelines/".concat(null===V||void 0===V?void 0:V.object_uuid,"/edit"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,H.jsx)(b.Z,{bold:!0,inline:!0,monospace:!0,openNewWindow:!0,small:!0,children:null===V||void 0===V?void 0:V.object_uuid})}),"."]})})]}),!n&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(O.Z,{mt:N.Mq,children:(0,H.jsx)(v.Z,{objectAttributes:V,setObjectAttributes:Q})}),(0,H.jsx)(O.Z,{mt:N.Mq,children:(0,H.jsx)(y.Z,{objectAttributes:V,setObjectAttributes:Q})}),(null===oe||void 0===oe?void 0:oe.length)>=1&&(0,H.jsx)(O.Z,{mt:N.Mq,children:(0,H.jsx)(w.Z,{blocks:oe,objectAttributes:V,setObjectAttributes:Q})})]})]}),(0,H.jsx)(S.ig,{children:(0,H.jsx)(O.Z,{p:N.cd,children:(0,H.jsx)(h.ZP,{children:(0,H.jsxs)(s.Z,{disabled:K,fullWidth:!0,loading:ne,onClick:function(){return te({global_data_product:V})},primary:!0,children:[n&&"Create global data product",!n&&"Save global data product"]})})})})]})}),[oe,K,ne,n,V,ue,Q,te]),ce=C.ZP.pipeline_schedules.list({global_data_product_uuid:null===t||void 0===t?void 0:t.uuid},{},{pauseFetch:!(null!==t&&void 0!==t&&t.uuid)}).data,de=(0,a.useMemo)((function(){return(null===ce||void 0===ce?void 0:ce.pipeline_schedules)||[]}),[ce]),se=C.ZP.pipeline_runs.list({global_data_product_uuid:null===t||void 0===t?void 0:t.uuid},{},{pauseFetch:!(null!==t&&void 0!==t&&t.uuid)}).data,fe=(0,a.useMemo)((function(){return(null===se||void 0===se?void 0:se.pipeline_runs)||[]}),[se]);return(0,H.jsx)(I.Z,{before:ae,beforeHeader:(0,H.jsx)(O.Z,{px:N.cd,children:(0,H.jsx)(_.ZP,{children:"Global data product attributes"})}),beforeHidden:F,beforeWidth:U,leftOffset:A.k1,setBeforeHidden:L,setBeforeWidth:W,children:!n&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(O.Z,{p:N.cd,children:(0,H.jsx)(m.Z,{children:"Triggers"})}),(0,H.jsx)(f.Z,{light:!0}),(0,H.jsx)(k.Z,{disableActions:!0,pipeline:re,pipelineSchedules:de}),(0,H.jsx)(O.Z,{p:N.cd,children:(0,H.jsx)(m.Z,{children:"Runs"})}),(0,H.jsx)(f.Z,{light:!0}),(0,H.jsx)(x.Z,{hideTriggerColumn:!0,pipelineRuns:fe})]})})}},66050:function(e,t,n){"use strict";var i;n.d(t,{V:function(){return i}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running",e.UPSTREAM_FAILED="upstream_failed",e.CONDITION_FAILED="condition_failed"}(i||(i={}))},30119:function(e,t,n){"use strict";var i;n.d(t,{b:function(){return i}}),function(e){e.BLOCK="block",e.PIPELINE="pipeline"}(i||(i={}))},87372:function(e,t,n){"use strict";var i,r,o,l,u,a,c,d,s=n(82394),f=n(26304),p=n(26653),h=n(38626),g=n(33591),m=n(23831),b=n(2005),v=n(31012),y=n(19711),x=n(49125),j=n(86673),w=n(28598),O=["children","condensed","inline","level","marketing","spacingBelow"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],y.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||m.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(b.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(b.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(b.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),I=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||m.Z.content).active,";\n  ")})),C=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],k,g.media.md(i||(i=(0,p.Z)(["\n    ","\n  "])),v.aQ),g.media.lg(r||(r=(0,p.Z)(["\n    ","\n  "])),v.aQ),g.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),v.aQ)),P=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],k,v.MJ),S=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],k,g.media.xs(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),g.media.sm(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),g.media.md(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),g.media.lg(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),g.media.xl(d||(d=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI)),N=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],k,v.BL),A=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],k),E=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],k),D=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],k),M=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],k,(function(e){return 1===e.level&&"\n    ".concat(v.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(v.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),H=function(e){var t,n=e.children,i=e.condensed,r=e.inline,o=e.level,l=e.marketing,u=e.spacingBelow,a=(0,f.Z)(e,O);r?t=M:0===Number(o)?t=C:1===Number(o)?t=l?S:P:2===Number(o)?t=N:3===Number(o)?t=A:4===Number(o)?t=E:5===Number(o)&&(t=D);var c=(0,w.jsxs)(t,Z(Z({},a),{},{level:o,children:[u&&(0,w.jsx)(j.Z,{mb:i?2:3,children:n}),!u&&n]}));return r?c:(0,w.jsx)(I,{children:c})};H.defaultProps={level:3,weightStyle:6},t.Z=H},90211:function(e,t,n){"use strict";n.d(t,{RA:function(){return d},kC:function(){return s},vg:function(){return v},kE:function(){return O},Mp:function(){return f},Pb:function(){return a},HW:function(){return x},wX:function(){return p},x6:function(){return h},_6:function(){return g},zf:function(){return y},Y6:function(){return w},wE:function(){return _},J3:function(){return m},We:function(){return c},QV:function(){return j},C5:function(){return b}});var i=n(75582),r=n(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],l=(n(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),u=n(24224);function a(e){if(!e)return!1;try{JSON.parse(e)}catch(t){return!1}return!0}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return e.split(" ").join(t)}function d(e){return e.split(" ").join("_")}function s(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*e)}function p(e){return e.charAt(0).toLowerCase()+e.slice(1)}function h(e){if(null===e||"undefined"===typeof e)return"";var t=e.toString().split("."),n=(0,i.Z)(t,2),r=n[0],o=n[1],l=r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(l,".").concat(o):l}function g(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t,o=void 0!==r&&null!==r;if(o||(r=2),1===r)n=e;else{var l=e.length,u=e[l-1];n="y"===u&&"day"!==e?"".concat(e.slice(0,l-1),"ies"):"".concat(e,"s"===u?"es":"s")}if(o){var a=i?h(r):r;return"".concat(a," ").concat(n)}return n}function m(e){return null===e||void 0===e?void 0:e.replace(/_/g," ")}function b(e){var t=e.length;return"ies"===e.slice(t-3,t)?"".concat(e.slice(0,t-3),"y"):"es"===e.slice(t-2,t)&&"ces"!==e.slice(t-3,t)?e.slice(0,t-2):e.slice(0,t-1)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s(m(e.toLowerCase()))}function y(e){var t,n=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return n.forEach((function(r,o){if(!t){var l=(0,i.Z)(r,2),u=l[0],a=l[1],c=n.slice(0,o).reduce((function(e,t){return e*Number(t[1])}),1);e<Number(a)*c&&(t=g(u,Math.round(e/c)))}})),t}function x(e){return"undefined"!==typeof e&&null!==e&&!isNaN(e)}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=Math.pow(10,t);return Math.round((e||0)*n)/n}function w(){return"".concat((0,u.mp)(o)," ").concat((0,u.mp)(l))}function O(e){return null===e||void 0===e?void 0:e.toLowerCase().replace(/\W+/g,"_")}function _(e){var t,n=e.split(r.sep),i=n[n.length-1].split(".");return t=1===i.length?i[0]:i.slice(0,-1).join("."),n.slice(0,n.length-1).concat(t).join(r.sep)}}}]);
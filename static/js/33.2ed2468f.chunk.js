(this["webpackJsonpipo-front"]=this["webpackJsonpipo-front"]||[]).push([[33],{636:function(e,t,n){"use strict";var a=n(590),i=n(1);function o(e){var t=e.key,n=e.text;return Object(i.jsx)(a.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:n},t)}t.a=function(e){var t=e.list;return t&&0!==t.length?1===t.length?Object(i.jsx)(o,{text:t[0]}):Object(i.jsx)("ul",{children:t.map((function(e,t){return Object(i.jsx)("li",{children:Object(i.jsx)(o,{text:e},t)})}))}):null}},679:function(e,t,n){"use strict";var a=n(5),i=n(2),o=n(0),c=n(10),r=n(163),s=n(13),d=n(7),m=n(111),u=n(121);function j(e){return Object(m.a)("MuiCardMedia",e)}Object(u.a)("MuiCardMedia",["root","media","img"]);var b=n(1),l=["children","className","component","image","src","style"],O=Object(d.a)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,a=n.isMediaComponent,i=n.isImageComponent;return[t.root,a&&t.media,i&&t.img]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),p=["video","audio","picture","iframe","img"],g=["picture","img"],f=o.forwardRef((function(e,t){var n=Object(s.a)({props:e,name:"MuiCardMedia"}),o=n.children,d=n.className,m=n.component,u=void 0===m?"div":m,f=n.image,v=n.src,x=n.style,h=Object(a.a)(n,l),C=-1!==p.indexOf(u),M=!C&&f?Object(i.a)({backgroundImage:'url("'.concat(f,'")')},x):x,w=Object(i.a)({},n,{component:u,isMediaComponent:C,isImageComponent:-1!==g.indexOf(u)}),y=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(r.a)(n,j,t)}(w);return Object(b.jsx)(O,Object(i.a)({className:Object(c.a)(y.root,d),as:u,role:!C&&f?"img":void 0,ref:t,style:M,ownerState:w,src:C?f||v:void 0},h,{children:o}))}));t.a=f},742:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n(586),o=n(584),c=n(597),r=n(679),s=n(590),d=n(0),m=n(24),u=n(123),j=n(166),b=n(636),l=n(1),O=new j.a;t.default=function(){var e=Object(m.g)().id,t=Object(d.useState)(!1),n=Object(a.a)(t,2),j=n[0],p=n[1],g=Object(d.useState)({}),f=Object(a.a)(g,2),v=f[0],x=f[1];return Object(d.useEffect)((function(){p(!0),O.getNews(e).then((function(e){var t=e.data,n=e.error;t?x(t):console.log(n),p(!1)}))}),[e]),j?Object(l.jsx)(u.a,{}):Object(l.jsxs)(i.a,{component:"main",maxWidth:"md",sx:{my:3},children:[Object(l.jsx)(o.a,{container:!0,spacing:3,children:Object(l.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(l.jsx)(c.a,{children:Object(l.jsx)(r.a,{component:"img",image:v.url,sx:{maxHeight:400}})})})}),Object(l.jsx)(s.a,{variant:"h4",component:"div",my:3,children:v.title}),Object(l.jsx)(b.a,{list:v.description})]})}}}]);
//# sourceMappingURL=33.2ed2468f.chunk.js.map
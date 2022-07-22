(this["webpackJsonpipo-front"]=this["webpackJsonpipo-front"]||[]).push([[41],{617:function(t,e,n){"use strict";var a=n(6),i=n(21),c=n(23),r=n.n(c),o=n(0),s=n(25),b=n(69),d=n(241),f=n(1),j=["bsPrefix","className","variant","as"],l=o.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,o=t.variant,b=t.as,d=void 0===b?"img":b,l=Object(i.a)(t,j),x=Object(s.a)(n,"card-img");return Object(f.jsx)(d,Object(a.a)({ref:e,className:r()(o?"".concat(x,"-").concat(o):x,c)},l))}));l.displayName="CardImg";var x=l,p=n(242),u=["bsPrefix","className","as"],m=o.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,b=t.as,d=void 0===b?"div":b,j=Object(i.a)(t,u),l=Object(s.a)(n,"card-header"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:l}}),[l]);return Object(f.jsx)(p.a.Provider,{value:x,children:Object(f.jsx)(d,Object(a.a)(Object(a.a)({ref:e},j),{},{className:r()(c,l)}))})}));m.displayName="CardHeader";var O=m,g=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(d.a)("h5"),w=Object(d.a)("h6"),v=Object(b.a)("card-body"),y=Object(b.a)("card-title",{Component:h}),H=Object(b.a)("card-subtitle",{Component:w}),M=Object(b.a)("card-link",{Component:"a"}),k=Object(b.a)("card-text",{Component:"p"}),B=Object(b.a)("card-footer"),N=Object(b.a)("card-img-overlay"),C=o.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,o=t.bg,b=t.text,d=t.border,j=t.body,l=t.children,x=t.as,p=void 0===x?"div":x,u=Object(i.a)(t,g),m=Object(s.a)(n,"card");return Object(f.jsx)(p,Object(a.a)(Object(a.a)({ref:e},u),{},{className:r()(c,m,o&&"bg-".concat(o),b&&"text-".concat(b),d&&"border-".concat(d)),children:j?Object(f.jsx)(v,{children:l}):l}))}));C.displayName="Card",C.defaultProps={body:!1};e.a=Object.assign(C,{Img:x,Title:y,Subtitle:H,Body:v,Link:M,Text:k,Header:O,Footer:B,ImgOverlay:N})},773:function(t,e,n){"use strict";n.r(e);var a,i,c,r,o,s,b,d,f=n(0),j=n(26),l=n(15),x=n(617),p=n(17),u=n(59),m=n(24),O=n(1),g=Object(p.b)(j.a)(a||(a=Object(l.a)(["\n  &: hover {\n    transform: scale(1.05);\n    transition-delay: 100ms;\n  };\n  padding-top : 10px;\n  display : flex;\n"]))),h=p.b.div(i||(i=Object(l.a)(["\n  height: 40px;\n  width: 40px;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 25px;\n"])),(function(t){return t.image})),w=Object(p.b)(x.a)(c||(c=Object(l.a)(["\n  width: 18rem;\n  font-family: ",";\n  border-radius: 15px;\n  background: #E0EAFC;\n"])),(function(t){return t.font.general})),v=p.b.div(r||(r=Object(l.a)(["\n  height: 150px;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"])),(function(t){return t.image})),y=Object(p.b)(x.a.Title)(o||(o=Object(l.a)(["\n  font-family: ",";\n  font-size: 16px;\n  padding-top: 5px;\n  margin-bottom: 0px;\n  min-height : 60px;\n"])),(function(t){return t.font})),H=Object(p.b)(x.a.Subtitle)(s||(s=Object(l.a)(["\n  font-family: ",";\n  font-size: 14px;\n  min-height : 60px;\n  margin-bottom: -50px;\n  margin-top: -15px;\n"])),(function(t){return t.font})),M=Object(p.b)(j.c)(b||(b=Object(l.a)(["\n  margin: 0px 0px 10px 0px;\n  font-size: 12px;\n"]))),k=p.b.span(d||(d=Object(l.a)(["\n  font-size: 10px;\n  position: absolute;\n  bottom: 6px;\n  left: 18px;\n"])));var B=function(t){var e=t.news,n=Object(f.useContext)(u.a).fonts,a=Object(m.f)();return Object(O.jsx)(g,{md:4,sm:4,lg:3,xl:3,xxl:2,xs:10,children:Object(O.jsxs)(w,{font:n,children:[Object(O.jsx)(x.a.Body,{children:Object(O.jsxs)(j.i,{children:[Object(O.jsx)(j.a,{md:4,sm:4,lg:3,children:Object(O.jsx)(h,{image:e.logo})}),Object(O.jsx)(j.a,{md:8,sm:8,lg:9,children:Object(O.jsx)(y,{font:n.title,children:e.title})}),Object(O.jsx)(H,{font:n.title,children:e.position})]})}),Object(O.jsx)(v,{image:e.url}),Object(O.jsxs)(x.a.Body,{children:[Object(O.jsx)(M,{apply:!0,onClick:function(){a("/job/1")},children:" Read "}),Object(O.jsxs)(k,{children:[" Last updated ",e.time," ago "]})]})]})})};e.default=function(){return Object(O.jsx)(j.b,{fluid:!0,children:Object(O.jsxs)(j.i,{children:[Object(O.jsx)(B,{news:{logo:"https://images.unsplash.com/photo-1572094382897-21abe88fb269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",title:"Browns PLT",position:"Assistant Manager",time:"4 min",url:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"}}),Object(O.jsx)(B,{news:{logo:"https://images.unsplash.com/photo-1601158935942-52255782d322?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=436&q=80",title:"Mas Holding",position:"Accountant",time:"4 min",url:"https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"}})]})})}}}]);
//# sourceMappingURL=41.0b22ed5a.chunk.js.map
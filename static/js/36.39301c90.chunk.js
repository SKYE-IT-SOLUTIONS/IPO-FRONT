(this["webpackJsonpipo-front"]=this["webpackJsonpipo-front"]||[]).push([[36],{607:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(6),a=n(0),s=n.n(a),c=n(761),o=n(757),i=n(1),b=s.a.forwardRef((function(e,t){return Object(i.jsx)(o.a,Object(r.a)({elevation:6,ref:t,variant:"filled"},e))}));function l(e){var t=e.isOpen,n=e.handleClose,r=e.severity,a=e.message;return Object(i.jsx)(c.a,{open:t,autoHideDuration:6e3,onClose:n,children:Object(i.jsxs)(b,{onClose:n,severity:r,sx:{width:"100%"},children:[a,"!"]})})}},771:function(e,t,n){"use strict";n.r(t);var r,a,s,c,o,i,b,l,u=n(3),d=n.n(u),j=n(11),O=n(8),p=n(15),x=n(0),f=n(26),g=n(17),h=n.p+"static/media/loginImage.283034d7.svg",v=n(59),m=n(24),w=n(169),y=n(124),k=n(33),C=n(84),S=n(607),E=n(1),L=Object(g.b)(f.b)(r||(r=Object(p.a)(["\n  font-family: ",";\n"])),(function(e){return e.font.general})),X=g.b.img(a||(a=Object(p.a)(["\n  width: 100%;\n"]))),N=g.b.p(s||(s=Object(p.a)(["\n  color: red;\n  font-size: 13px;\n  margin: 0px;\n  padding: 5px 0px;\n"]))),R=g.b.h1(c||(c=Object(p.a)(["\n  font-size: 23px;\n  text-align: left;\n  padding: 10px 0px;\n  font-weight: bolder;\n"]))),A=Object(g.b)(f.a)(o||(o=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),I=Object(g.b)(f.c)(i||(i=Object(p.a)(["\n  background: ",";\n  border-radius: 5px;\n  margin-top: 15px;\n"])),(function(e){return e.bgColor})),P=g.b.div(b||(b=Object(p.a)(["\n  border: 4px solid;\n  border-radius: 10px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 15px;\n  text-align: left;\n"]))),z=Object(g.b)(f.f)(l||(l=Object(p.a)(["\n  cursor: pointer;\n  font-size: 13px;\n  text-align: right;\n"])));t.default=function(e){var t=Object(x.useContext)(v.a),n=t.theme,r=t.light,a=t.dark,s=t.fonts,c=n?r.button:a.button,o=Object(k.b)(),i=new w.a,b=Object(m.f)(),l=Object(x.useState)(!1),u=Object(O.a)(l,2),p=u[0],g=u[1],D=Object(x.useState)(""),T=Object(O.a)(D,2),_=T[0],J=T[1],M=Object(x.useState)({error:null,status:!1}),U=Object(O.a)(M,2),B=U[0],F=U[1],G=Object(x.useState)(""),H=Object(O.a)(G,2),Y=H[0],q=H[1],K=Object(x.useState)({error:null,status:!1}),Q=Object(O.a)(K,2),V=Q[0],W=Q[1],Z=Object(x.useState)(!1),$=Object(O.a)(Z,2),ee=$[0],te=$[1],ne=Object(x.useState)(null),re=Object(O.a)(ne,2),ae=re[0],se=re[1],ce=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,i.handleLogin({username:_,password:Y});case 3:if(t=e.sent,n=t.status,r=t.data,a=t.error,console.log(n),g(!1),!n){e.next=27;break}o(Object(C.b)(null===r||void 0===r?void 0:r.id)),o(Object(C.c)("NBSS")),o(Object(C.d)(null===r||void 0===r?void 0:r.roles[0])),console.log("Role",null===r||void 0===r?void 0:r.roles[0]),e.t0=null===r||void 0===r?void 0:r.roles[0],e.next="ROLE_ADMIN"===e.t0?17:"ROLE_STUDENT"===e.t0?19:"ROLE_COMPANY"===e.t0?21:23;break;case 17:return b("/admin/dashboard"),e.abrupt("break",25);case 19:return b("/student/dashboard"),e.abrupt("break",25);case 21:return b("/company/dashboard"),e.abrupt("break",25);case 23:return b("/"),e.abrupt("break",25);case 25:e.next=28;break;case 27:423===a?b("/423"):(te(!0),se(a));case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(L,{font:s,children:[Object(E.jsxs)(f.i,{style:{paddingTop:"10px"},children:[Object(E.jsx)(A,{md:6,sm:12,xs:12,children:Object(E.jsx)(X,{src:h})}),Object(E.jsx)(A,{md:6,sm:12,xs:12,children:Object(E.jsxs)(P,{children:[Object(E.jsx)(R,{children:"Log in to an existing profile"}),Object(E.jsx)(f.f,{children:"Email Address/Index Number(AG/XX/2018/XXXX)*"}),Object(E.jsx)(f.e,{type:"text",placeholder:"Enter your email",onChange:function(e){J(e.target.value),F(Object(y.a)(e.target.value,"Username"))}}),null!=B.error&&Object(E.jsx)(N,{children:B.error}),Object(E.jsx)(f.f,{children:"Password"}),Object(E.jsx)(f.e,{type:"password",placeholder:"Enter your password",onChange:function(e){q(e.target.value),W(Object(y.a)(e.target.value,"Password"))}}),null!=V.error&&Object(E.jsx)(N,{children:V.error}),Object(E.jsx)(I,{disabled:p||!B.status||!V.status,bgColor:p?c.disable:c.login,onClick:Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B.status&&V.status&&ce();case 1:case"end":return e.stop()}}),e)}))),children:"Log In"}),Object(E.jsx)(z,{children:"Forgot Password"})]})})]}),Object(E.jsx)(S.a,{isOpen:ee,severity:"error",handleClose:function(e,t){"clickaway"!==t&&te(!1)},message:ae})]})}}}]);
//# sourceMappingURL=36.39301c90.chunk.js.map
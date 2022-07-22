(this["webpackJsonpipo-front"]=this["webpackJsonpipo-front"]||[]).push([[24],{605:function(e,t,n){"use strict";var a=n(57);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(58)),i=n(1),l=(0,r.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=l},606:function(e,t,n){"use strict";var a=n(57);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(58)),i=n(1),l=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=l},662:function(e,t,n){"use strict";var a=n(57);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(58)),i=n(1),l=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=l},734:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n(3),i=n.n(r),l=n(11),c=n(8),d=n(0),o=n(609),s=n(606),u=n.n(s),f=n(605),v=n.n(f),b=n(662),p=n.n(b),h=n(166),g=n(123),j=n(24),w=n(1),O=["id"],m=["id"],x=["id"];t.default=function(){var e=Object(d.useState)(0),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(d.useState)(8),f=Object(c.a)(s,2),b=f[0],y=f[1],C=Object(d.useState)(!1),A=Object(c.a)(C,2),N=A[0],k=A[1],z=new h.a,S=Object(j.f)(),P=Object(d.useState)([]),B=Object(c.a)(P,2),M=B[0],_=B[1],D=Object(d.useState)(""),E=Object(c.a)(D,2),V=(E[0],E[1]);Object(d.useEffect)((function(){k(!0);var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getAllNonApprovalNews();case 2:t=e.sent,n=t.status,a=t.data,r=t.error,n?(console.log("In Admin : ",a),_(a)):(V(r),console.log(r)),k(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var L=[{field:"id",type:"number",headerName:"ID",headerAlign:"center",align:"center",width:70},{field:"title",headerName:"Title",headerAlign:"center",align:"left",width:400},{field:"visibility",headerName:"Visibility",headerAlign:"center",align:"center",width:100},{field:"status",headerName:"Status",headerAlign:"center",align:"center",width:100},{field:"createdBy",headerName:"Created By",headerAlign:"center",align:"center",width:300},{field:"updatedDate",headerName:"Updated",headerAlign:"center",align:"center",width:150},{field:"view",headerName:"View",headerAlign:"center",align:"center",sortable:!1,width:80,disableClickEventBubbling:!0,renderCell:function(e){var t=e.id;Object(a.a)(e,O);return Object(w.jsx)(v.a,{style:{cursor:"pointer"},sx:{fontSize:30},onClick:function(){S("/admin/news/".concat(t))}})}},{field:"delete",headerName:"Delete",headerAlign:"center",align:"center",sortable:!1,width:90,disableClickEventBubbling:!0,renderCell:function(e){var t=e.id;Object(a.a)(e,m);return Object(w.jsx)(u.a,{style:{cursor:"pointer"},sx:{fontSize:30},onClick:Object(l.a)(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.deleteNews(t);case 2:n=e.sent,a=n.status,r=n.error,a?(_(M.filter((function(e){return e.id!==t}))),S("/admin/news/non-approved-list")):console.log(r);case 6:case"end":return e.stop()}}),e)})))})}},{field:"Approve",headerName:"Edit",headerAlign:"center",align:"center",sortable:!1,width:80,disableClickEventBubbling:!0,renderCell:function(e){var t=e.id;Object(a.a)(e,x);return Object(w.jsx)(p.a,{style:{cursor:"pointer"},sx:{fontSize:30},onClick:Object(l.a)(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.approveNewsByAdmin(t);case 2:n=e.sent,a=n.status,r=n.error,a?(_(M.filter((function(e){return e.id!==t}))),S("/admin/news/non-approved-list")):console.log(r);case 6:case"end":return e.stop()}}),e)})))})}}],H=M.map((function(e){return{id:null===e||void 0===e?void 0:e.id,title:null===e||void 0===e?void 0:e.title,status:(null===e||void 0===e?void 0:e.approval)?"Approved":"Pending",visibility:(null===e||void 0===e?void 0:e.global)?"Public":"Private",createdBy:null===e||void 0===e?void 0:e.addedBy,updatedDate:(null===e||void 0===e?void 0:e.howLong)+"  ago"}}));return Object(w.jsx)(w.Fragment,{children:N?Object(w.jsx)(g.a,{}):Object(w.jsx)("div",{style:{width:"100%"},children:Object(w.jsx)(o.a,{columns:L,rows:H,components:{Toolbar:o.b},page:n,onPageChange:function(e){return r(e)},pageSize:b,onPageSizeChange:function(e){return y(e)},rowsPerPageOptions:[8,10,12],pagination:!0})})})}}}]);
//# sourceMappingURL=24.70f2b5a8.chunk.js.map
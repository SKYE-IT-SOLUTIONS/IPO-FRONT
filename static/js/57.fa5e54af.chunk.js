(this["webpackJsonpipo-front"]=this["webpackJsonpipo-front"]||[]).push([[57],{787:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var i=n(6),a=n(21),c=n(8),r=n(586),o=n(584),s=n(571),l=n(590),d=n(585),j=n(565),u=n(27),x=n(0),h=n(609),b=n(1),m=["fields","headerNames","rows","onRowClick"],O=function e(t,n,i,a,c,r){Object(u.a)(this,e),"normal"===t&&(this.field=a,this.headerName=c,this.headerAlign="center",this.align="left",this.minWidth=i||150,this.flex=r,this.renderCell=function(e){return e.value}),"icon"===t&&(this.field=a,this.headerName=c,this.headerAlign="center",this.align="center",this.minWidth=100,this.flex=r,this.renderCell=function(e){return n.onclick?Object(b.jsx)(d.a,{onClick:function(){return n.onclick(e.row)},children:Object(b.jsx)(n.Icon,{sx:n.sx})}):Object(b.jsx)(n.Icon,{sx:n.sx})})};var f=function(e){var t=e.fields,n=e.headerNames,o=e.rows,s=e.onRowClick,l=Object(a.a)(e,m),d=Object(x.useState)(9),j=Object(c.a)(d,2),u=j[0],f=j[1],v=Object(x.useState)(window.screen.availWidth),p=Object(c.a)(v,2),g=p[0],w=p[1],C=[];return window.onresize=function(){w(window.screen.availWidth)},t.map((function(e,t){var i=e.type,a=e.icon,c=e.width,r=e.value;return C.push(function(e,t,n,i,a,c){return new O(e,t,n,i,a,c)}(i,a,c,r,n[t],g<376?0:1))})),Object(b.jsx)(r.a,{maxWidth:"xl",children:Object(b.jsx)(h.a,Object(i.a)(Object(i.a)({autoHeight:!0,rows:o,columns:C,pageSize:u,onPageSizeChange:function(e){return f(e)},rowsPerPageOptions:[9,15,20],disableSelectionOnClick:!0,onRowClick:function(e){return s&&s(e.row)}},l),{},{sx:Object(i.a)({"&.MuiDataGrid-root .MuiDataGrid-cell:focus":{outline:0},".MuiDataGrid-columnHeader":{backgroundColor:"#000428",color:"white"}},l.sx)}))})},v=n(668),p=n(670),g=n.n(p),w=["onClick"];function C(){var e=Object(v.b)().CSVReader,t=Object(x.useState)(!1),n=Object(c.a)(t,2),u=(n[0],n[1]),h=Object(x.useState)([]),m=Object(c.a)(h,2),O=m[0],p=m[1],C=[{type:"normal",width:150,value:"name"},{type:"normal",value:"index"},{type:"normal",value:"email"},{type:"icon",value:"remove",icon:{Icon:g.a,sx:{width:"30px",height:"30px",color:"red",cursor:"pointer"},onclick:function(e){var t=e.id;p(O.filter((function(e){return e.id!==t})))}}}],k=["Name","Index","Email","Remove"];return Object(b.jsx)(e,{onUploadAccepted:function(e){u(!1),p(null===e||void 0===e?void 0:e.data.slice(1).map((function(t,n){return{id:n,name:t[e.data[0].indexOf(e.data[0].filter((function(e){return e.includes("Name")}))[0])],index:t[e.data[0].indexOf(e.data[0].filter((function(e){return e.includes("Permanent")}))[0])],email:t[e.data[0].indexOf(e.data[0].filter((function(e){return e.includes("Email")}))[0])]}})))},onDragOver:function(e){e.preventDefault(),u(!0)},onDragLeave:function(e){e.preventDefault(),u(!1)},children:function(e){var t=e.getRootProps,n=e.acceptedFile,c=e.ProgressBar,u=e.getRemoveFileProps,x=e.Remove,h=u(),m=h.onClick,g=Object(a.a)(h,w);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.a,{component:"main",maxWidth:"md",children:[Object(b.jsxs)(o.a,{container:!0,sx:{mt:1},spacing:3,children:[Object(b.jsx)(o.a,{item:!0,xs:12,sm:12,sx:{mt:1},children:Object(b.jsx)(s.a,{textAlign:"left",children:Object(b.jsx)(l.a,{variant:"h5",color:"text.secondary",children:"Export User Data To Database"})})}),Object(b.jsxs)(o.a,{container:!0,sx:{mt:2,justifyContent:"center",alignItems:"center"},sm:8,xs:12,children:[Object(b.jsx)(l.a,{variant:"h6",sx:{mr:1},children:"Upload CSV:"}),n?null:Object(b.jsx)(d.a,Object(i.a)(Object(i.a)({},t()),{},{children:"Drop CSV file here or click to upload"})),n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{item:!0,textAlign:"right",children:Object(b.jsx)(l.a,{variant:"h6",children:null===n||void 0===n?void 0:n.name})}),Object(b.jsx)(o.a,{item:!0,sx:{ml:1},children:Object(b.jsxs)(l.a,{variant:"body2",color:"text.secondary",children:["(",Object(v.a)(null===n||void 0===n?void 0:n.size),")"]})}),Object(b.jsx)(o.a,{item:!0,sx:{ml:1},children:Object(b.jsx)(j.a,Object(i.a)(Object(i.a)({},g),{},{onClick:function(e){p([]),m(e)},children:Object(b.jsx)(x,{color:"red"})}))})]}):""]}),n?Object(b.jsx)(o.a,{item:!0,xs:12,sm:4,textAlign:"center",children:Object(b.jsx)(d.a,{variant:"contained",children:"Upload Data to Server"})}):null]}),Object(b.jsx)(o.a,{item:!0,xs:12,textAlign:"center",sx:{my:2},children:Object(b.jsx)(c,{})}),Object(b.jsx)(o.a,{item:!0,xs:12,sx:{mt:2},children:Object(b.jsx)(f,{fields:C,headerNames:k,rows:O})})]})})}})}}}]);
//# sourceMappingURL=57.fa5e54af.chunk.js.map
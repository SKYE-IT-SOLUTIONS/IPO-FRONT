(this["webpackJsonpipo-front"]=this["webpackJsonpipo-front"]||[]).push([[59],{743:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(597),i=n(598),r=n(590),s=n(584),o=n(585),j=n(586),l=n(0),b=n(24),d=n(123),x=n(166),h=n(1);function O(e){var t=e.job,n=Object(b.f)();return Object(h.jsx)(a.a,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(r.a,{variant:"h5",component:"div",children:t.title}),Object(h.jsx)(r.a,{sx:{mb:1.5},color:"text.secondary",children:t.position}),Object(h.jsxs)(r.a,{sx:{fontSize:20},color:"text.secondary",gutterBottom:!0,children:["Salary - Rs.",t.salary]}),Object(h.jsxs)(s.a,{container:!0,spacing:3,children:[Object(h.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(h.jsxs)(r.a,{variant:"h6",color:"error",children:["Deadline - ",t.deadline]})}),Object(h.jsx)(s.a,{item:!0,xs:12,md:6,textAlign:"right",children:Object(h.jsx)(o.a,{size:"small",onClick:function(){return n(String(t.id))},children:"View more"})})]})]})})}var u=new x.a;t.default=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(l.useState)([]),o=Object(c.a)(i,2),b=o[0],x=o[1];return Object(l.useEffect)((function(){a(!0),u.getAllJobs().then((function(e){var t=e.data,n=e.error;t?x(t):console.log(n),a(!1)}))}),[]),n?Object(h.jsx)(d.a,{}):Object(h.jsx)(j.a,{component:"main",maxWidth:"md",sx:{my:3},children:Object(h.jsx)(s.a,{container:!0,spacing:3,children:b.map((function(e){return Object(h.jsx)(s.a,{item:!0,xs:12,children:Object(h.jsx)(O,{job:e})},e.id)}))||Object(h.jsx)(r.a,{children:"No jobs available"})})})}}}]);
//# sourceMappingURL=59.58194a3e.chunk.js.map
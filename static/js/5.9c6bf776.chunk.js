(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{62:function(e,t,c){e.exports={form:"MoviesPage_form__3pf7M"}},65:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return f}));var a=c(61),n=c(56),r=c(0),s=c(3),i=c(9),o=c(19),u=c(57),j=c(63),b=c(17),h=c(62),l=c.n(h),m=c(1);function f(){var e,t=Object(r.useState)(""),c=Object(n.a)(t,2),h=c[0],f=c[1],O=Object(r.useState)(null),p=Object(n.a)(O,2),d=p[0],v=p[1],x=Object(s.j)(),g=x.path,S=x.url,w=Object(s.h)(),y=Object(s.g)(),N=null!==(e=new URLSearchParams(w.search).get("searchQuery"))&&void 0!==e?e:"";Object(r.useEffect)((function(){N&&u.a(N).then((function(e){var t=e.results;return v(t)}))}),[N]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{className:l.a.form,action:"",onSubmit:function(e){if(e.preventDefault(),""===h.trim())return o.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430");y.push(Object(a.a)(Object(a.a)({},w),{},{search:"searchQuery=".concat(h)})),f("")},children:[Object(m.jsx)("input",{className:l.a.input,type:"text",value:h,onChange:function(e){var t=e.target;f(t.value)},placeholder:"Search movies..."}),Object(m.jsx)("button",{type:"submit",children:"Search"})]}),N&&!d&&Object(m.jsx)(b.a,{}),d&&Object(m.jsx)("ul",{className:"moviesList",children:d.map((function(e){return Object(m.jsx)(i.b,{to:{pathname:"".concat(S,"/").concat(e.id),state:{from:w}},children:Object(m.jsx)("li",{className:l.a.moviesListItem,children:e.title})},e.id)}))}),Object(m.jsx)(s.b,{path:"".concat(g,":movieId"),children:Object(m.jsx)(j.default,{})})]})}}}]);
//# sourceMappingURL=5.9c6bf776.chunk.js.map
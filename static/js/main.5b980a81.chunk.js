(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),a=n(6),i=n(8),r=n(1),u=(n(13),n(14),n(3)),l=n.n(u),b=n(0);!function(t){t.Name="name",t.Length="length",t.Default=""}(c||(c={}));var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(){var t=Object(r.useState)(c.Default),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(r.useState)(!1),u=Object(a.a)(o,2),j=u[0],d=u[1],f=function(t,e,n){var s=Object(i.a)(t).sort((function(t,n){switch(e){case c.Name:return t.localeCompare(n);case c.Length:return t.length-n.length;default:return 0}}));return n?s.reverse():s}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==c.Name}),onClick:function(){return s(c.Name)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":n!==c.Length}),onClick:function(){return s(c.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!0!==j}),onClick:function(){return d((function(t){return!t}))},children:"Reverse"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-danger","is-light",{hidden:n===c.Default&&!1===j}),onClick:function(){s(c.Default),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:f.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5b980a81.chunk.js.map
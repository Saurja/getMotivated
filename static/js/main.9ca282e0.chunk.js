(this.webpackJsonpdailyquote=this.webpackJsonpdailyquote||[]).push([[0],{27:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(16),a=n.n(r),s=n(17),o=n(18),i=n(21),j=n(20),u=n(14),h=n(1);var l=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),o=s[0],i=s[1];function j(){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(t){console.log("".concat(t.content," \u2014").concat(t.author)),r(t.content),i(t.author)}))}return Object(c.useEffect)((function(){j();var t=setInterval((function(){j()}),864e5);return function(){clearInterval(t)}}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"QuoteText",children:Object(h.jsxs)("h4",{children:['"',n,'"']})}),Object(h.jsx)("div",{className:"Author",children:Object(h.jsxs)("h5",{children:["- ",o]})})]})},b=function(t){Object(i.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"QuoteBox paper container-xs",children:[Object(h.jsx)(l,{}),Object(h.jsxs)("div",{className:"Buttons",children:[Object(h.jsx)("a",{href:"https://www.linkedin.com/in/saurjaghosh/",children:Object(h.jsx)("button",{className:"ButtonLeft paper-btn btn-primary btn-small",children:"@saurja"})}),Object(h.jsx)("a",{href:"/GetMotivated",refresh:"true",children:Object(h.jsx)("button",{className:"ButtonRight btn-small",refresh:"true",children:"New Quote"})})]})]})})}}]),n}(c.Component),d=n(2);n(27);var O=function(){return Object(h.jsx)("main",{children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/GetMotivated",component:b,exact:!0}),Object(h.jsx)(d.a,{component:Error})]})})},x=n(11);a.a.render(Object(h.jsx)(x.a,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9ca282e0.chunk.js.map
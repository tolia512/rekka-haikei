_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"+WyY":function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return f}));var r=n("cpVT"),c=n("vJKn"),i=n.n(c),o=n("rg98"),a=n("xvhg"),u=n("MhBB"),s=n("WTtB");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(){var t=Object(s.a)("synced-favorite-0",!1),e=Object(a.a)(t,2),n=e[0],r=e[1];return[n,function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return");case 2:return r(!0),t.next=5,Object(u.g)(Object.keys(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()]}var f=function(){var t=Object(s.a)("favorite-songs",{}),e=Object(a.a)(t,2),n=e[0],c=e[1];return{favorites:n,setFavortes:c,toggleFavorites:function(t){c((function(e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e);return n[t]?delete n[t]:n[t]=!0,n}))}}}},WTtB:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI");function c(t,e){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(r){return console.log(r),e}})),c=n[0],i=n[1];return[c,function(e){try{0;var n=e instanceof Function?e(c):e;i(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(r){console.log(r)}}]}},aIzN:function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),c=n("soUV"),i=n("xvhg"),o=n("q1tI"),a=n("vOnD"),u=n("psZa"),s=n("MhBB");var b=n("+WyY");function j(){return Object(r.jsx)(O,{children:Object(r.jsx)(f,{})})}function f(){var t=function(t){var e=Object(o.useState)([]),n=e[0],r=e[1],c=Object(o.useState)(-1),i=c[0],a=c[1];return Object(o.useEffect)((function(){Object(s.b)(t).then((function(t){var e=t.docs.map((function(t){return t.data()}));r(e)})),Object(s.c)(t).then((function(t){a(t.data().postCount)}))}),[t]),[n,i]}(u.a.eventId),e=Object(i.a)(t,2),n=e[0],c=e[1],a=Object(b.a)().favorites,j=Object(b.b)(),f=Object(i.a)(j,2),O=f[0],d=f[1];return a?Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"\u4eba\u6c17\u30d6\u30c3\u30af\u30de\u30fc\u30af"}),!O&&Object(r.jsxs)("p",{children:["\u81ea\u5206\u306e\u30d6\u30c3\u30af\u30de\u30fc\u30af(",Object.keys(a).length,") \u4ef6\u3092\u6295\u7968\u3057\u307e\u3059\u304b\uff1f",Object(r.jsx)("button",{onClick:function(){d(a).then((function(){alert("\u6295\u7968\u3057\u307e\u3057\u305f")}))},children:"\u9001\u4fe1\u3059\u308b(1\u56de\u306e\u307f)"})]}),Object(r.jsxs)("p",{children:["\u6295\u7968\u6570: ",c]}),Object(r.jsxs)("table",{className:"count",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"\u30bf\u30a4\u30c8\u30eb"}),Object(r.jsx)("th",{children:"\u4eba\u6570"})]})}),Object(r.jsx)("tbody",{children:n.slice(0,u.a.visibleRecordLimit).map((function(t,e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.icy}),Object(r.jsx)("td",{children:t.count})]},e)}))})]}),n.length>=100&&Object(r.jsx)("p",{children:"100\u4ef6\u307e\u3067\u306e\u307f\u8868\u793a\u3057\u3066\u3044\u307e\u3059"})]}):Object(r.jsx)("p",{children:"loading"})}var O=a.b.div.withConfig({displayName:"PopularPage__Wrap",componentId:"sc-11zo2nt-0"})(["width:100vw;display:grid;padding:16px;table{width:100%;}table td{border-top:solid 1px;}"]);var d=function(){return Object(r.jsx)(j,{})};e.default=function(){return Object(r.jsx)(c.a,{title:"\u30d6\u30af\u30de\u6570\u7d71\u8a08 - vipstream",children:Object(r.jsx)(d,{})})}},cpVT:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},rg98:function(t,e,n){"use strict";function r(t,e,n,r,c,i,o){try{var a=t[i](o),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,i){var o=t.apply(e,n);function a(t){r(o,c,i,a,u,"next",t)}function u(t){r(o,c,i,a,u,"throw",t)}a(void 0)}))}}n.d(e,"a",(function(){return c}))},wHOC:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/popular",function(){return n("aIzN")}])}},[["wHOC",1,0,4,5,3,2,6]]]);
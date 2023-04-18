"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[307],{307:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,c,i=r(439),o=r(791),u=r(87),s=r(689),p=r(390),d=r(168),l=r(444),f=l.ZP.div(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n"]))),h=r(256),x=r(184),v=function(n){var e=n.movieInfo,r=e.title,t=e.release_date,a=e.overview,c=e.genres,i=e.poster_path,o=e.vote_average,u=Math.round(10*o);return(0,x.jsxs)(f,{children:[(0,x.jsx)("img",{src:(0,h.E)(i),width:300,height:400,loading:"lazy",alt:"poster"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h1",{children:[" ",r," (",new Date(t).getFullYear(),")"," "]}),(0,x.jsxs)("p",{children:["User score: ",u,"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:a}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:c.map((function(n){return n.name})).join(", ")})]})]})},g=l.ZP.div(a||(a=(0,d.Z)(["\n  padding: 0px 24px;\n"]))),m=(0,l.ZP)(u.rU)(c||(c=(0,d.Z)(["\n  display: inline-block;\n  margin: 20px 0px;\n  color: #000;\n  text-decoration: none;\n  font-size: 24px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 1px;\n  border: 1px solid #fff;\n  padding: 5px 20px;\n  text-transform: uppercase;\n  transition: background-color 250ms linear, border 250ms linear;\n  &:hover,\n  &:focus {\n    background-color: #ffe5cc;\n    border: 1px solid #ff7b00;\n  }\n"]))),j=function(){var n,e,r=(0,s.TH)(),t=(0,o.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/Home"),a=(0,o.useState)(null),c=(0,i.Z)(a,2),d=c[0],l=c[1],f=(0,s.UO)().movieId,h=(0,o.useState)(!1),j=(0,i.Z)(h,2),w=j[0],b=j[1];return(0,o.useEffect)((function(){b(!0),(0,p.TP)(f).then((function(n){l(n)})).catch((function(n){console.log(n)})).finally(b(!1))}),[f]),(0,x.jsxs)(g,{children:[(0,x.jsx)(m,{to:t.current,children:" Back "}),w&&(0,x.jsx)("div",{children:"LOADING ..."}),d&&(0,x.jsx)(v,{movieInfo:d}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"LOADING..."}),children:(0,x.jsx)(s.j3,{})})]})}},390:function(n,e,r){r.d(e,{Hg:function(){return u},Jh:function(){return l},TP:function(){return p},z1:function(){return s},zv:function(){return d}});var t=r(861),a=r(757),c=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="0133cbd46d7aed15aba1a7c05914842d",u=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat("trending/movie/day","?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},256:function(n,e,r){r.d(e,{E:function(){return t}});var t=function(n){return n?"https://image.tmdb.org/t/p/w300".concat(n):"https://img.freepik.com/free-vector/images-concept-illustration_114360-218.jpg"}}}]);
//# sourceMappingURL=307.be7f1bae.chunk.js.map
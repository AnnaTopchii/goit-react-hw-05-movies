"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[150],{150:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c,u=e(439),i=e(689),o=e(791),s=e(390),p=e(168),f=e(444),d=f.ZP.div(r||(r=(0,p.Z)(["\n  padding: 0px 24px;\n"]))),l=f.ZP.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 0;\n"]))),h=f.ZP.li(c||(c=(0,p.Z)(["\n  width: 300px;\n"]))),v=e(184),g=function(){var n=(0,o.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,i.UO)().movieId;return(0,o.useEffect)((function(){(0,s.zv)(a).then((function(n){r(n.cast)})).catch((function(n){console.log(n)}))}),[a]),(0,v.jsx)(d,{children:e.length>0&&(0,v.jsx)(l,{children:e.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,v.jsxs)(h,{children:[(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w300".concat(r):"https://img.freepik.com/free-vector/images-concept-illustration_114360-218.jpg",width:200,height:300,loading:"lazy",alt:"poster"}),(0,v.jsxs)("b",{children:[" ",e," "]}),(0,v.jsxs)("p",{children:["Character : ",a]})]},t)}))})})}},390:function(n,t,e){e.d(t,{Hg:function(){return o},Jh:function(){return d},TP:function(){return p},z1:function(){return s},zv:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="0133cbd46d7aed15aba1a7c05914842d",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat("trending/movie/day","?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=150.487332ad.chunk.js.map
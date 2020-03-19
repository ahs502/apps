(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{72:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),i=n(127),u=n(128),s=n(61),l=n(60),d=n(39),p=n(37),f="app-data/".concat(config.app),m=localStorage.getItem(f),h=m&&JSON.parse(m);function b(e){localStorage.setItem(f,JSON.stringify(e)),h=e}h||b({});var v=new Proxy(h,{get:function(e,t,n){return h[t]},set:function(e,t,n,r){return b(Object(p.a)({},h,Object(d.a)({},t,n))),!0},deleteProperty:function(e,t){var n=h;n[t];return b(Object(s.a)(n,[t].map(l.a))),!0}});function g(){delete v["auth-code"],window.location.reload()}var E=n(58),w=Object(E.a)({palette:{primary:{main:"#A049E7"},secondary:{main:"#E96BED"}}}),x=n(6),k=n.n(x),y=n(8),O=n(18);function j(e,t,n,r){return T.apply(this,arguments)}function T(){return(T=Object(y.a)(k.a.mark((function e(t,n,r,a){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n),{method:t,headers:{"auth-code":v["auth-code"],"Content-Type":"application/json"},body:r?JSON.stringify(r):void 0});case 2:if(401!==(c=e.sent).status){e.next=6;break}return g(),e.abrupt("return",null);case 6:if(c.ok){e.next=14;break}return e.t0=Error,e.t1="".concat(c.statusText," (").concat(c.status,"): "),e.next=11,c.text();case 11:throw e.t2=e.sent,e.t3=e.t1.concat.call(e.t1,e.t2),new e.t0(e.t3);case 14:return e.next=16,a?c.text():c.json();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=n(135),S=n(132);var R=n(115),P=n(116),D=n(114),A=n(131),F=n(118),B=n(119),I=n(62),L=n(117),W=n(120);function J(e){var t=e.book,n=e.disabled,r=e.onRefresh;Object(I.a)();return a.a.createElement(R.a,{position:"absolute"},a.a.createElement(P.a,null,a.a.createElement(D.a,{color:"inherit",disabled:n,onClick:function(){return g()}},a.a.createElement(L.a,null)),a.a.createElement(A.a,{marginLeft:1,marginRight:2},a.a.createElement(F.a,{variant:"h6",noWrap:!0},"Todo List")),t&&a.a.createElement(F.a,{variant:"subtitle2",noWrap:!0},t.name),a.a.createElement(A.a,{flexGrow:1}),a.a.createElement(A.a,{flexGrow:0,flexShrink:0,marginLeft:2},a.a.createElement(B.a,{variant:"outlined",color:"inherit",endIcon:a.a.createElement(W.a,null),disabled:n,onClick:r},"Refresh\xa0\xa0"))))}var N=n(59),G=n(44),z=n(126),H=n(111),U=n(84),K=n(133),q=n(129),M=n(121),Q=n(122);function V(e){return/[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(e)}function X(e){var t=e.item,n=(e.index,e.dragging,e.disabled),c=e.onCheck,o=e.onEdit,i=e.onRemove,u=Object(r.useState)(!1),s=Object(O.a)(u,2),l=s[0],d=s[1],p=Object(r.useState)(""),f=Object(O.a)(p,2),m=f[0],h=f[1],b=Object(I.a)();function v(){return g.apply(this,arguments)}function g(){return(g=Object(y.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===o||void 0===o?void 0:o(m);case 2:t=e.sent,d(!t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=V(m);return l?a.a.createElement(H.a,{onClickAway:function(e){return d(!1)}},a.a.createElement(U.a,{elevation:6},a.a.createElement(A.a,{padding:2,display:"flex",alignItems:"center"},a.a.createElement(A.a,{marginRight:2},a.a.createElement(K.a,{color:"secondary",checked:!!t.checked,disabled:!0})),a.a.createElement(q.a,{fullWidth:!0,variant:"outlined",inputProps:{style:{fontSize:b.spacing(3),height:b.spacing(2),textAlign:E?"right":"left",direction:E?"rtl":"ltr"}},disabled:n,label:"Todo Text",placeholder:"Write the todo text here...",value:m,onChange:function(e){var t=e.target.value;return h(t)},onKeyDown:function(e){return 13===e.keyCode&&v()}}),a.a.createElement(A.a,{marginRight:1,marginLeft:2},a.a.createElement(D.a,{disabled:n,title:"Apply",onClick:function(){return v()}},a.a.createElement(M.a,null))),a.a.createElement(D.a,{disabled:n,title:"Cancel",onClick:function(){return d(!1)}},a.a.createElement(L.a,null))))):a.a.createElement(U.a,{elevation:2},a.a.createElement(A.a,{padding:2,display:"flex",alignItems:"center"},a.a.createElement(A.a,{marginRight:2},a.a.createElement(K.a,{color:"secondary",checked:!!t.checked,disabled:n,onChange:function(e,t){return null===c||void 0===c?void 0:c(t)}})),a.a.createElement(F.a,{variant:"subtitle1",align:"center",style:{flexGrow:1,fontSize:b.spacing(3),lineHeight:"calc(".concat(b.spacing(6),"px + 5px)")}},t.title),a.a.createElement(A.a,{marginRight:1,marginLeft:2},a.a.createElement(D.a,{disabled:n,title:"Edit",onClick:function(){h(t.title),d(!0)}},a.a.createElement(Q.a,null))),a.a.createElement(D.a,{disabled:n,title:"Remove",onClick:function(){return null===i||void 0===i?void 0:i()}},a.a.createElement(L.a,null))))}var Y=n(123),Z=n(124),$=n(125);function _(e){var t=e.disabled,n=e.onAdd,c=Object(r.useRef)(null),o=Object(r.useState)(""),i=Object(O.a)(o,2),u=i[0],s=i[1],l=Object(I.a)();function d(){return p.apply(this,arguments)}function p(){return(p=Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n(u);case 4:e.sent&&(s(""),setTimeout((function(){var e,t;return null===(e=c.current)||void 0===e||null===(t=e.focus)||void 0===t?void 0:t.call(e)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=V(u);return a.a.createElement(U.a,{variant:"outlined",square:!0},a.a.createElement(A.a,{padding:2,display:"flex",alignItems:"center",style:{backgroundColor:l.palette.background.default}},a.a.createElement(A.a,{marginRight:2},a.a.createElement(D.a,{disabled:t||!0,title:"Select",onClick:function(){}},a.a.createElement(Y.a,null))),a.a.createElement(q.a,{innerRef:c,fullWidth:!0,variant:"outlined",inputProps:{style:{fontSize:l.spacing(3),height:l.spacing(2),textAlign:f?"right":"left",direction:f?"rtl":"ltr"}},disabled:t,label:"New Todo",placeholder:"Write the todo text here...",value:u,onChange:function(e){var t=e.target.value;return s(t)},onKeyDown:function(e){return 13===e.keyCode&&d()}}),a.a.createElement(A.a,{marginRight:1,marginLeft:2},a.a.createElement(D.a,{disabled:t||!u,title:"Add",onClick:function(){return d()}},a.a.createElement(Z.a,null))),a.a.createElement(D.a,{disabled:t||!u,title:"Clear",onClick:function(){return function(){var e,t;s(""),null===(e=c.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e)}()}},a.a.createElement($.a,null))))}function ee(e){var t=e.book,n=e.disabled,c=e.onAdd,o=e.onCheck,i=e.onEdit,u=e.onRemove,s=e.onReorder,l=Object(r.useState)(t),d=Object(O.a)(l,2),f=d[0],m=d[1];Object(r.useEffect)((function(){m(t)}),[t]);var h=Object(I.a)();function b(){return(b=Object(y.a)(k.a.mark((function e(r){var a,c,o,i,u,l,d;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.destination&&t&&s&&!n){e.next=2;break}return e.abrupt("return");case 2:if(o=r.source.index,i=r.destination.index,o!==i){e.next=6;break}return e.abrupt("return");case 6:return u=null===f||void 0===f||null===(a=f.list)||void 0===a||null===(c=a[o])||void 0===c?void 0:c.id,l=Object(N.a)(t.list),d=l.splice(o,1)[0],l.splice(i,0,d),m(Object(p.a)({},t,{list:l})),e.next=13,s(u,i);case 13:e.sent||m(t);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return f?a.a.createElement(A.a,{marginTop:10,marginBottom:4},a.a.createElement(z.a,{maxWidth:"md"},0===f.list.length?a.a.createElement(A.a,{paddingTop:2,paddingBottom:4},a.a.createElement(F.a,{variant:"body1"},"There is no items in the list!"),a.a.createElement(F.a,{variant:"subtitle1",color:"secondary"},"Start by adding a ",a.a.createElement("strong",null,"new todo"),".")):a.a.createElement(a.a.Fragment,null,a.a.createElement(A.a,{marginBottom:2},a.a.createElement(_,{disabled:n,onAdd:c&&function(){var e=Object(y.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c(t,!1));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),a.a.createElement(G.a,{onDragEnd:function(e){return b.apply(this,arguments)}},a.a.createElement(G.c,{droppableId:"list",isDropDisabled:n},(function(e,t){return a.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),f.list.map((function(e,t){return a.a.createElement(G.b,{key:e.id,draggableId:String(e.id),index:t,isDragDisabled:n},(function(r,c){return a.a.createElement("div",Object.assign({ref:r.innerRef},r.draggableProps,r.dragHandleProps,{style:Object(p.a)({marginBottom:h.spacing(2)},r.draggableProps.style)}),a.a.createElement(X,{item:e,index:t,dragging:c.isDragging,disabled:n,onCheck:o&&function(t){return o(e.id,t)},onEdit:i&&function(){var t=Object(y.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i(e.id,n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onRemove:u&&function(){return u(e.id)}}))}))})),e.placeholder)})))),a.a.createElement(_,{disabled:n,onAdd:c&&function(){var e=Object(y.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,!0);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))):null}var te=function(){var e=Object(r.useState)(null),t=Object(O.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(r.useState)(null),t=Object(O.a)(e,2),n=t[0],a=t[1];return{status:n,readBook:function(){return c.apply(this,arguments)},addTodo:function(e,t,n){return o.apply(this,arguments)},removeTodo:function(e,t){return i.apply(this,arguments)},editTodoTitle:function(e,t,n){return l.apply(this,arguments)},editTodoChecked:function(e,t,n){return d.apply(this,arguments)},editTodoPosition:function(e,t,n){return p.apply(this,arguments)}};function c(){return(c=Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("reading book",j("GET","todo-list/book"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(y.a)(k.a.mark((function e(t,n,r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("adding todo",j("POST","todo-list/book/todo",{bookTimestamp:t,title:n,position:r}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(y.a)(k.a.mark((function e(t,n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("removing todo",j("DELETE","todo-list/book/todo",{bookTimestamp:t,id:n}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,n,r,a){return s.apply(this,arguments)}function s(){return(s=Object(y.a)(k.a.mark((function e(t,n,r,a,c){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("editing todo",j("PUT","todo-list/book/todo",{bookTimestamp:t,id:n,title:r,checked:a,position:c}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(y.a)(k.a.mark((function e(t,n,r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,n,r,void 0,void 0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(y.a)(k.a.mark((function e(t,n,r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,n,void 0,r,void 0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(y.a)(k.a.mark((function e(t,n,r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,n,void 0,void 0,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return m.apply(this,arguments)}function m(){return(m=Object(y.a)(k.a.mark((function e(t,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("Not possible while ".concat(t,"."));case 2:return a(t),e.prev=3,e.next=6,n;case 6:return r=e.sent,a(null),e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(3),a(null),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}}(),i=o.status,u=o.readBook,s=o.addTodo,l=o.removeTodo,d=o.editTodoTitle,p=o.editTodoChecked,f=o.editTodoPosition,m=function(){var e=Object(r.useState)(null),t=Object(O.a)(e,2),n=t[0],c=t[1];function o(){return(o=Object(y.a)(k.a.mark((function e(t,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return r=e.sent,c(null),e.abrupt("return",{success:!0,result:r});case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),c(n?n(e.t0):String(e.t0)),e.abrupt("return",{success:!1});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return{handlePromise:function(e,t){return o.apply(this,arguments)},errorSnackbar:a.a.createElement(C.a,{open:!!n,autoHideDuration:5e3,onClose:function(){return c(null)}},a.a.createElement(S.a,{severity:"error",onClose:function(){return c(null)}},n))}}(),h=m.handlePromise,b=m.errorSnackbar,v=!!i,g=n?n.timestamp:0;function E(){return w.apply(this,arguments)}function w(){return(w=Object(y.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(u);case 2:(t=e.sent).success&&c(t.result);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(y.a)(k.a.mark((function e(t,n){var r,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n?void 0:0,e.next=3,h((function(){return s(g,t,r)}));case 3:return(a=e.sent).success&&c(a.result),e.abrupt("return",a.success);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(y.a)(k.a.mark((function e(t,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h((function(){return p(g,t,n)}));case 2:(r=e.sent).success&&c(r.result);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(y.a)(k.a.mark((function e(t,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h((function(){return d(g,t,n)}));case 2:return(r=e.sent).success&&c(r.result),e.abrupt("return",r.success);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(y.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h((function(){return l(g,t)}));case 2:(n=e.sent).success&&c(n.result);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(y.a)(k.a.mark((function e(t,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h((function(){return f(g,t,n)}));case 2:return(r=e.sent).success&&c(r.result),e.abrupt("return",r.success);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){E()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(J,{book:n,disabled:v,onRefresh:E}),a.a.createElement(ee,{book:n,disabled:v,onAdd:function(e,t){return x.apply(this,arguments)},onCheck:function(e,t){return T.apply(this,arguments)},onEdit:function(e,t){return R.apply(this,arguments)},onRemove:function(e){return P.apply(this,arguments)},onReorder:function(e,t){return D.apply(this,arguments)}}),b)};(function(){var e=new URLSearchParams(window.location.search).get("auth-code"),t=v["auth-code"];if(e)v["auth-code"]=e,window.history.replaceState(null,"",window.location.pathname);else if(!t)return window.location.href="".concat(config.loginUrl,"?app=").concat(config.app,"&url=").concat(window.location.origin).concat(window.location.pathname),!1;return!0})()&&o.a.render(a.a.createElement(i.a,{theme:w},a.a.createElement(u.a,null),a.a.createElement(te,null)),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.3ecd43bd.chunk.js.map
(this.webpackJsonpvalidation=this.webpackJsonpvalidation||[]).push([[0],{64:function(n,e,t){n.exports=t(81)},73:function(n,e,t){"use strict";t.r(e),e.default="## Title\n\n- First item\n- Second item\n\n**Bold** _italic_\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},74:function(n,e,t){"use strict";t.r(e),e.default="**TT**\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},75:function(n,e,t){"use strict";t.r(e),e.default="**TT** Basics\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},76:function(n,e,t){"use strict";t.r(e),e.default="**TT** Basics _aaa_\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},77:function(n,e,t){"use strict";t.r(e),e.default="**TT** Basics _bbb_\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},78:function(n,e,t){"use strict";t.r(e),e.default="**TT** Advances\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},81:function(n,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),o=t(9),r=t.n(o),i=t(113),l=t(114),d=t(29),u=t.n(d),s=t(37),m=t(58),b=t(57),f=t(38),p=t(51),v="app-data/".concat(config.app),g=localStorage.getItem(v),h=g&&JSON.parse(g);function E(n){localStorage.setItem(v,JSON.stringify(n)),h=n}h||E({});var k=new Proxy(h,{get:function(n,e,t){return h[e]},set:function(n,e,t,a){return E(Object(p.a)({},h,Object(f.a)({},e,t))),!0},deleteProperty:function(n,e){var t=h;t[e];return E(Object(m.a)(t,[e].map(b.a))),!0}});function w(){delete k["auth-code"],window.location.reload()}function y(n,e,t,a){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(u.a.mark((function n(e,t,a,c){var o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/".concat(t),{method:e,headers:{"auth-code":k["auth-code"],"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:if(401!==(o=n.sent).status){n.next=6;break}return w(),n.abrupt("return",null);case 6:if(o.ok){n.next=14;break}return n.t0=Error,n.t1="".concat(o.statusText," (").concat(o.status,"): "),n.next=11,o.text();case 11:throw n.t2=n.sent,n.t3=n.t1.concat.call(n.t1,n.t2),new n.t0(n.t3);case 14:return n.next=16,c?o.text():o.json();case 16:return n.abrupt("return",n.sent);case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(){return(j=Object(s.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y("POST","validation/visit-up");case 3:e=n.sent,console.log(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Unable to visit up:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var O=t(56),T=Object(O.a)({palette:{primary:{main:"#5e35b1"},secondary:{main:"#aa00ff"}}}),S=t(42),C=t(115),B=t(118),D=t(117),N=t(112),I=t(59),M=t(36),_=t(101),L=t(103),P=t(104),W=t(106),A=t(107),J=t(116),U=t(105);function V(n){var e="/".concat(config.app);return"development"!==config.env?"".concat(e,"/").concat(n.startsWith("/")?n.slice(1):n):n}var R=Object(J.a)((function(n){return{icon:{width:n.spacing(4),height:n.spacing(4),marginRight:n.spacing(3),flexShrink:0}}}));function F(){var n=R();return c.a.createElement("img",{className:n.icon,src:V("/favicon.png"),alt:"Validation"})}var G=Object(J.a)((function(n){return{menu:{marginRight:n.spacing(2)},npmLink:{textTransform:"none",flexShrink:0},npmLogo:{height:n.spacing(2)}}}));function q(n){var e=n.onSideMenuClick,t=G();return c.a.createElement(_.a,{position:"fixed"},c.a.createElement(L.a,null,c.a.createElement(B.a,{lgUp:!0,implementation:"css"},c.a.createElement(P.a,{className:t.menu,color:"inherit",onClick:e},c.a.createElement(U.a,null))),c.a.createElement(F,null),c.a.createElement(W.a,{variant:"h6",noWrap:!0},"Validation\xa0",c.a.createElement(B.a,{xsDown:!0},"Documentation"),c.a.createElement(B.a,{smUp:!0},"Docs")),c.a.createElement(C.a,{flexGrow:1,marginRight:2}),c.a.createElement(A.a,{className:t.npmLink,variant:"contained",color:"secondary",size:"small",href:"https://www.npmjs.com/package/@ahs502/validation",target:"_blank",title:"Visit the package in the NPM website"},"\xa0",c.a.createElement("img",{className:t.npmLogo,src:V("/npm-logo.png"),alt:"NPM"}),"\xa0",c.a.createElement(B.a,{smDown:!0,implementation:"css"},"\xa0\xa0@ahs502/validation"))))}var z=t(35),Y=t(82),H=t(108),K=t(119),Q=t(109),X=t(110),Z=t(25),$=[nn("introduction","Introduction",t(73).default),nn("tutorial","Tutorial",t(74).default,nn("basics","Basics",t(75).default,nn("aaa","A a a",t(76).default),nn("bbb","B b b",t(77).default)),nn("advances","Advances",t(78).default))];function nn(n,e,t){if(!n||!e)throw new Error("Invalid side menu item data.");for(var a={code:n,label:e,markdown:t},c=arguments.length,o=new Array(c>3?c-3:0),r=3;r<c;r++)o[r-3]=arguments[r];return o.length&&(a.content=o),a}function en(){var n=Object(Z.e)(),e=Object(Z.d)(),t=function(n){var e="/".concat(config.app);return"development"!==config.env&&n.startsWith(e)?n.replace(e,""):n}(n.pathname).split("/").slice(1).filter(Boolean);if(0===t.length){var a=$[0];return e.push(V("/".concat(a.code))),[a]}for(var c=[],o=$,r="",i=function(){var n=t.shift(),a=o.find((function(e){return e.code===n}));if(!a)return e.push(V(r)),{v:c};r="".concat(r,"/").concat(a.code),o=a.content||[],c.push(a)};t.length;){var l=i();if("object"===typeof l)return l.v}return c}function tn(n){var e=n.onClick,t=Object(I.a)(),a=(Object(Z.e)(),Object(Z.d)()),o=en(),r=Object(S.a)(o,3),i=r[0],l=r[1],d=r[2];return c.a.createElement(C.a,{minWidth:t.spacing(30)},c.a.createElement(Y.a,{square:!0,variant:"outlined"},c.a.createElement(C.a,{paddingY:2},c.a.createElement(H.a,null,$.flatMap((function(n){var t,o;return[c.a.createElement(K.a,{key:n.code,button:!0,selected:n.code===(null===i||void 0===i?void 0:i.code)&&!(null===(t=n.content)||void 0===t?void 0:t.some((function(n){return n.code===(null===l||void 0===l?void 0:l.code)}))),onClick:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){a.push(V("/".concat(n.code))),null===e||void 0===e||e()}))},c.a.createElement(W.a,{variant:"h5",color:n.code!==(null===i||void 0===i?void 0:i.code)?"initial":(null===(o=n.content)||void 0===o?void 0:o.some((function(n){return n.code===(null===l||void 0===l?void 0:l.code)})))?"primary":"secondary"},n.label),n.content&&c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{flexGrow:1}),n.code===(null===i||void 0===i?void 0:i.code)?c.a.createElement(Q.a,null):c.a.createElement(P.a,{onClick:function(e){a.push(V("/".concat(n.code))),e.stopPropagation()}},c.a.createElement(X.a,null))))].concat(Object(z.a)(n.code===(null===i||void 0===i?void 0:i.code)?(n.content||[]).flatMap((function(t){var o,r;return[c.a.createElement(K.a,{key:"".concat(n.code,"/").concat(t.code),button:!0,dense:!0,selected:n.code===(null===i||void 0===i?void 0:i.code)&&t.code===(null===l||void 0===l?void 0:l.code)&&!(null===(o=t.content)||void 0===o?void 0:o.some((function(n){return n.code===(null===d||void 0===d?void 0:d.code)}))),onClick:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){a.push(V("/".concat(n.code,"/").concat(t.code))),null===e||void 0===e||e()}))},c.a.createElement(C.a,{paddingLeft:4},c.a.createElement(W.a,{variant:"h6",color:n.code!==(null===i||void 0===i?void 0:i.code)||t.code!==(null===l||void 0===l?void 0:l.code)?"initial":(null===(r=t.content)||void 0===r?void 0:r.some((function(n){return n.code===(null===d||void 0===d?void 0:d.code)})))?"primary":"secondary"},t.label)))].concat(Object(z.a)((t.content||[]).map((function(o){return c.a.createElement(K.a,{key:"".concat(n.code,"/").concat(t.code,"/").concat(o.code),button:!0,dense:!0,selected:n.code===(null===i||void 0===i?void 0:i.code)&&t.code===(null===l||void 0===l?void 0:l.code)&&o.code===(null===d||void 0===d?void 0:d.code),onClick:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){a.push(V("/".concat(n.code,"/").concat(t.code,"/").concat(o.code))),null===e||void 0===e||e()}))},c.a.createElement(C.a,{paddingLeft:8},c.a.createElement(W.a,{variant:"subtitle1",color:n.code!==(null===i||void 0===i?void 0:i.code)||t.code!==(null===l||void 0===l?void 0:l.code)||o.code!==(null===d||void 0===d?void 0:d.code)?"initial":"secondary"},o.label)))}))),[n.content&&t!==n.content[n.content.length-1]&&c.a.createElement(C.a,{key:"".concat(n.code,"/").concat(t.code," separator"),marginBottom:1})])})):[]),[n!==$[$.length-1]&&c.a.createElement(C.a,{key:"".concat(n.code," separator"),marginBottom:2})])}))))))}function an(){Object(I.a)();var n=en();var e=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return[{key:"".concat(t,"/").concat(e.code),markdown:e.markdown}].concat(Object(z.a)((e.content||[]).flatMap((function(a){return n(a,"".concat(t,"/").concat(e.code))}))))}(n[0]),t="/"+n.map((function(n){return n.code})).join("/");return Object(a.useEffect)((function(){if(t===e[0].key)window.scrollTo({top:0,behavior:"smooth"});else{var n=window.document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth"})}}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{textAlign:"center",paddingTop:20},c.a.createElement("img",{src:V("/under-construction.png"),alt:"This page is under construction."})),c.a.createElement(C.a,{key:"margin buttom",marginBottom:16}))}var cn=t(111);function on(n){var e=n.onClose;return c.a.createElement(L.a,null,c.a.createElement(C.a,{marginRight:2},c.a.createElement(P.a,{onClick:e},c.a.createElement(cn.a,null))),c.a.createElement(F,null),c.a.createElement(W.a,{variant:"h6",noWrap:!0},"Validation\xa0",c.a.createElement(B.a,{xsDown:!0},"Documentation"),c.a.createElement(B.a,{smUp:!0},"Docs")))}!function(){j.apply(this,arguments)}(),r.a.render(c.a.createElement(i.a,{theme:T},c.a.createElement(l.a,null),c.a.createElement((function(){var n=Object(a.useState)(!1),e=Object(S.a)(n,2),t=e[0],o=e[1],r=Object(I.a)();return c.a.createElement(M.a,null,c.a.createElement(C.a,null,c.a.createElement(q,{onSideMenuClick:function(){return o(!0)}}),c.a.createElement(B.a,{mdDown:!0},c.a.createElement(C.a,{position:"fixed",top:r.spacing(8),bottom:0,left:0,overflow:"auto"},c.a.createElement(tn,null))),c.a.createElement(B.a,{lgUp:!0},c.a.createElement(D.a,{anchor:"left",open:t,onClose:function(){return o(!1)}},c.a.createElement(on,{onClose:function(){return o(!1)}}),c.a.createElement(tn,{onClick:function(){return o(!1)}}))),c.a.createElement(C.a,{display:"flex"},c.a.createElement(B.a,{mdDown:!0},c.a.createElement(C.a,{flex:"0 0 ".concat(r.spacing(30),"px")})),c.a.createElement(N.a,{maxWidth:"lg"},c.a.createElement(an,null)))))}),null)),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.099b4208.chunk.js.map
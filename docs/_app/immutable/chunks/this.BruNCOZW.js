import{h as c,a as S,b as _,a9 as R,aa as b,s as g,o as T,ab as o,c as u,ac as h,d as k,ad as y,ae as N,af as q,k as x,ag as F,S as L}from"./runtime.Dtv5Q2M4.js";function Y(s,i,r,t=null,f=!1){c&&S();var a=s,e=null,n=null,l=null,A=f?y:0;_(()=>{if(l===(l=!!i()))return;let d=!1;if(c){const v=a.data===R;l===v&&(a=b(),g(a),T(!1),d=!0)}l?(e?o(e):e=u(()=>r(a)),n&&h(n,()=>{n=null})):(n?o(n):t&&(n=u(()=>t(a))),e&&h(e,()=>{e=null})),d&&T(!0)},A),c&&(a=k)}function p(s,i,r){c&&S();var t=s,f,a;_(()=>{f!==(f=i())&&(a&&(h(a),a=null),f&&(a=u(()=>r(t,f))))},y),c&&(t=k)}function E(s,i){return s===i||(s==null?void 0:s[L])===i}function B(s={},i,r,t){return N(()=>{var f,a;return q(()=>{f=a,a=[],x(()=>{s!==r(...a)&&(i(s,...a),f&&E(r(...f),s)&&i(null,...f))})}),()=>{F(()=>{a&&E(r(...a),s)&&i(null,...a)})}}),s}export{B as b,p as c,Y as i};
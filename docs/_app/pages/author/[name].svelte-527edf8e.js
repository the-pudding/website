import{S as t,i as s,s as r,e,t as a,c as o,a as n,g as u,d as i,f,H as c,h,k as l,l as m,n as $,I as g,J as p,j as d,m as j,o as w,x as k,u as v,v as x}from"../../chunks/vendor-e8f25f25.js";import{M as E}from"../../chunks/Meta-176a5b72.js";function H(t,s,r){const e=t.slice();return e[2]=s[r].hed,e}function M(t){let s,r,l=t[2]+"";return{c(){s=e("p"),r=a(l)},l(t){s=o(t,"P",{});var e=n(s);r=u(e,l),e.forEach(i)},m(t,e){f(t,s,e),c(s,r)},p(t,s){1&s&&l!==(l=t[2]+"")&&h(r,l)},d(t){t&&i(s)}}}function b(t){let s,r,d,j,w=t[1].name+"",k=t[0],v=[];for(let e=0;e<k.length;e+=1)v[e]=M(H(t,k,e));return{c(){s=e("h1"),r=a(w),d=l();for(let t=0;t<v.length;t+=1)v[t].c();j=m()},l(t){s=o(t,"H1",{});var e=n(s);r=u(e,w),e.forEach(i),d=$(t);for(let s=0;s<v.length;s+=1)v[s].l(t);j=m()},m(t,e){f(t,s,e),c(s,r),f(t,d,e);for(let s=0;s<v.length;s+=1)v[s].m(t,e);f(t,j,e)},p(t,[s]){if(2&s&&w!==(w=t[1].name+"")&&h(r,w),1&s){let r;for(k=t[0],r=0;r<k.length;r+=1){const e=H(t,k,r);v[r]?v[r].p(e,s):(v[r]=M(e),v[r].c(),v[r].m(j.parentNode,j))}for(;r<v.length;r+=1)v[r].d(1);v.length=k.length}},i:g,o:g,d(t){t&&i(s),t&&i(d),p(v,t),t&&i(j)}}}function y(t,s,r){let{stories:e}=s,{author:a}=s;return t.$$set=t=>{"stories"in t&&r(0,e=t.stories),"author"in t&&r(1,a=t.author)},[e,a]}class C extends t{constructor(t){super(),s(this,t,y,b,r,{stories:0,author:1})}}function I(t){let s,r,e,a;return s=new E({}),e=new C({props:{stories:t[0],author:t[1]}}),{c(){d(s.$$.fragment),r=l(),d(e.$$.fragment)},l(t){j(s.$$.fragment,t),r=$(t),j(e.$$.fragment,t)},m(t,o){w(s,t,o),f(t,r,o),w(e,t,o),a=!0},p(t,[s]){const r={};1&s&&(r.stories=t[0]),2&s&&(r.author=t[1]),e.$set(r)},i(t){a||(k(s.$$.fragment,t),k(e.$$.fragment,t),a=!0)},o(t){v(s.$$.fragment,t),v(e.$$.fragment,t),a=!1},d(t){x(s,t),t&&i(r),x(e,t)}}}async function J({page:t,fetch:s}){const r=`${t.params.name}.json`,e=await s(r);if(e.ok){const{stories:t,author:s}=await e.json();return{props:{stories:t,author:s}}}return{status:e.status,error:new Error("Could not load data")}}function N(t,s,r){let{stories:e}=s,{author:a}=s;return t.$$set=t=>{"stories"in t&&r(0,e=t.stories),"author"in t&&r(1,a=t.author)},[e,a]}class P extends t{constructor(t){super(),s(this,t,N,I,r,{stories:0,author:1})}}export{P as default,J as load};
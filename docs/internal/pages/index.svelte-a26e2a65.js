import{S as t,i as s,s as e,e as r,t as o,k as a,c as n,a as i,g as f,d as c,n as h,f as u,H as l,h as g,b as d,I as $,J as m,K as p,j as v,m as k,o as E,x as b,u as w,v as x}from"../chunks/vendor-e8f25f25.js";import{M as j}from"../chunks/Meta-176a5b72.js";function P(t,s,e){const r=t.slice();return r[1]=s[e].hed,r[2]=s[e].dek,r[3]=s[e].slug,r}function A(t){let s,e,d,$,m,p,v,k,E=t[1]+"",b=t[2]+"",w=t[3]+"";return{c(){s=r("h1"),e=o(E),d=a(),$=r("p"),m=o(b),p=a(),v=r("p"),k=o(w)},l(t){s=n(t,"H1",{});var r=i(s);e=f(r,E),r.forEach(c),d=h(t),$=n(t,"P",{});var o=i($);m=f(o,b),o.forEach(c),p=h(t),v=n(t,"P",{});var a=i(v);k=f(a,w),a.forEach(c)},m(t,r){u(t,s,r),l(s,e),u(t,d,r),u(t,$,r),l($,m),u(t,p,r),u(t,v,r),l(v,k)},p(t,s){1&s&&E!==(E=t[1]+"")&&g(e,E),1&s&&b!==(b=t[2]+"")&&g(m,b),1&s&&w!==(w=t[3]+"")&&g(k,w)},d(t){t&&c(s),t&&c(d),t&&c($),t&&c(p),t&&c(v)}}}function H(t){let s,e,g,p,v,k,E=t[0],b=[];for(let r=0;r<E.length;r+=1)b[r]=A(P(t,E,r));return{c(){s=r("h1"),e=o("The Pudding"),g=a();for(let t=0;t<b.length;t+=1)b[t].c();p=a(),v=r("a"),k=o("About"),this.h()},l(t){s=n(t,"H1",{});var r=i(s);e=f(r,"The Pudding"),r.forEach(c),g=h(t);for(let s=0;s<b.length;s+=1)b[s].l(t);p=h(t),v=n(t,"A",{href:!0});var o=i(v);k=f(o,"About"),o.forEach(c),this.h()},h(){d(v,"href","/about")},m(t,r){u(t,s,r),l(s,e),u(t,g,r);for(let s=0;s<b.length;s+=1)b[s].m(t,r);u(t,p,r),u(t,v,r),l(v,k)},p(t,[s]){if(1&s){let e;for(E=t[0],e=0;e<E.length;e+=1){const r=P(t,E,e);b[e]?b[e].p(r,s):(b[e]=A(r),b[e].c(),b[e].m(p.parentNode,p))}for(;e<b.length;e+=1)b[e].d(1);b.length=E.length}},i:$,o:$,d(t){t&&c(s),t&&c(g),m(b,t),t&&c(p),t&&c(v)}}}function y(t,s,e){let{stories:r}=s;return r.sort(((t,s)=>p(t.hed,s.hed))),console.log(r),t.$$set=t=>{"stories"in t&&e(0,r=t.stories)},[r]}class M extends t{constructor(t){super(),s(this,t,y,H,e,{stories:0})}}function T(t){let s,e,r,o;return s=new j({}),r=new M({props:{stories:t[0]}}),{c(){v(s.$$.fragment),e=a(),v(r.$$.fragment)},l(t){k(s.$$.fragment,t),e=h(t),k(r.$$.fragment,t)},m(t,a){E(s,t,a),u(t,e,a),E(r,t,a),o=!0},p(t,[s]){const e={};1&s&&(e.stories=t[0]),r.$set(e)},i(t){o||(b(s.$$.fragment,t),b(r.$$.fragment,t),o=!0)},o(t){w(s.$$.fragment,t),w(r.$$.fragment,t),o=!1},d(t){x(s,t),t&&c(e),x(r,t)}}}const C=!0;async function I({page:t,fetch:s,session:e,context:r}){const o=await s("/api/stories?keys=test");if(o.ok){return{props:{stories:await o.json()}}}return{status:o.status,error:new Error("Could not load data")}}function J(t,s,e){let{stories:r}=s;return t.$$set=t=>{"stories"in t&&e(0,r=t.stories)},[r]}class K extends t{constructor(t){super(),s(this,t,J,T,e,{stories:0})}}export{K as default,I as load,C as prerender};

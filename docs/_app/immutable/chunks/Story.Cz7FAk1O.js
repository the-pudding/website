import{b as D,h as M,a as E,ae as P,p as T,c as U,d as V,af as F,m as G,g as a,j as o,s as v,t as S,o as H}from"./index-client.C6T7o1Pl.js";import{a as b,t as k}from"./disclose-version.CREomnJd.js";import{i as Z,b as j}from"./props.Mmf_V8nX.js";import{s as y,h as x,b as J}from"./attributes.BlsqhsvY.js";import{b as K}from"./entry.C31iWQWu.js";function ae(c,e,t){M&&E();var s=c,i=F,r;D(()=>{P(i,i=e())&&(r&&T(r),r=U(()=>t(s)))}),M&&(s=V)}function w(c,e,t){if(t){if(c.classList.contains(e))return;c.classList.add(e)}else{if(!c.classList.contains(e))return;c.classList.remove(e)}}const oe=O(Math.random);function O(c){return function(t,s=0,i=t.length){let r=i-(s=+s);for(;r;){const l=c()*r--|0,h=t[r+s];t[r+s]=t[l+s],t[l+s]=h}return t}}const Q=`<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.75 0.855957C15.086 0.855957 0.75 15.192 0.75 32.856C0.75 50.52 15.086 64.856 32.75 64.856C50.414 64.856 64.75 50.52 64.75 32.856C64.75 15.192 50.414 0.855957 32.75 0.855957ZM26.35 47.256V18.456L45.55 32.856L26.35 47.256Z" fill="white" fill-opacity="0.9"/>
</svg>
`;var R=k('<div class="info svelte-1c7ocfg"><p class="id svelte-1c7ocfg"> </p> <p class="month svelte-1c7ocfg"> </p></div>'),W=k('<span class="icon--play svelte-1c7ocfg"><!></span>'),X=k('<div class="story svelte-1c7ocfg"><!> <a rel="external" target="_blank" class="inner svelte-1c7ocfg"><div class="screenshot svelte-1c7ocfg"><img loading="lazy" alt="thumbnail for story" class="svelte-1c7ocfg"> <!></div> <div class="text svelte-1c7ocfg"><h3 class="short svelte-1c7ocfg"><strong><!></strong></h3> <p class="tease svelte-1c7ocfg"><!></p></div></a></div>');function ce(c,e){G(e,!0);const t=e.href.includes("youtube")||e.href.includes("youtu.be"),s=e.resource?"resources/480":"thumbnails/screenshots",i=`${K}/common/assets/${s}`,r=e.bgColor?`--story-bg: ${e.bgColor};`:"";var l=X();y(l,"style",r),w(l,"youtube",t);var h=a(l);Z(h,()=>!e.resource&&!e.footer,m=>{var n=R(),f=a(n),A=a(f);o(f);var p=v(f,2),B=a(p,!0);o(p),o(n),S(()=>{j(A,`#${e.id??""}`),j(B,e.month)}),b(m,n)});var g=v(h,2),u=a(g),d=a(u),z=v(d,2);Z(z,()=>t,m=>{var n=W(),f=a(n);x(f,()=>Q),o(n),b(m,n)}),o(u);var L=v(u,2),_=a(L),C=a(_),N=a(C);x(N,()=>e.short),o(C),o(_);var I=v(_,2),q=a(I);x(q,()=>e.tease),o(I),o(L),o(g),o(l),S(()=>{w(l,"resource",e.resource),w(l,"footer",e.footer),y(g,"href",e.href),y(d,"src",`${i??""}/${e.slug??""}.jpg`)}),J(d),b(c,l),H()}export{ce as S,ae as k,oe as s,w as t};

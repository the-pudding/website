import{a as _,t as C}from"./disclose-version.B6U6Qg9F.js";import{m as A,g as s,j as o,s as v,t as k,o as D}from"./index-client.Br0fZ5fH.js";import{i as z,b as Z}from"./props.C2gVJaBR.js";import{s as y,h as w,b as E}from"./attributes.Bkhssghn.js";import{b as F}from"./entry.CmQuU9cY.js";function x(c,t,e){if(e){if(c.classList.contains(t))return;c.classList.add(t)}else{if(!c.classList.contains(t))return;c.classList.remove(t)}}const U=G(Math.random);function G(c){return function(e,l=0,g=e.length){let i=g-(l=+l);for(;i;){const a=c()*i--|0,f=e[i+l];e[i+l]=e[a+l],e[a+l]=f}return e}}const H=`<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.75 0.855957C15.086 0.855957 0.75 15.192 0.75 32.856C0.75 50.52 15.086 64.856 32.75 64.856C50.414 64.856 64.75 50.52 64.75 32.856C64.75 15.192 50.414 0.855957 32.75 0.855957ZM26.35 47.256V18.456L45.55 32.856L26.35 47.256Z" fill="white" fill-opacity="0.9"/>
</svg>
`;var I=C('<div class="info svelte-1c7ocfg"><p class="id svelte-1c7ocfg"> </p> <p class="month svelte-1c7ocfg"> </p></div>'),J=C('<span class="icon--play svelte-1c7ocfg"><!></span>'),K=C('<div class="story svelte-1c7ocfg"><!> <a rel="external" target="_blank" class="inner svelte-1c7ocfg"><div class="screenshot svelte-1c7ocfg"><img loading="lazy" alt="thumbnail for story" class="svelte-1c7ocfg"> <!></div> <div class="text svelte-1c7ocfg"><h3 class="short svelte-1c7ocfg"><strong><!></strong></h3> <p class="tease svelte-1c7ocfg"><!></p></div></a></div>');function W(c,t){A(t,!0);const e=t.href.includes("youtube")||t.href.includes("youtu.be"),l=t.resource?"resources/480":"thumbnails/screenshots",g=`${F}/common/assets/${l}`,i=t.bgColor?`--story-bg: ${t.bgColor};`:"";var a=K();y(a,"style",i),x(a,"youtube",e);var f=s(a);z(f,()=>!t.resource&&!t.footer,b=>{var r=I(),n=s(r),V=s(n);o(n);var j=v(n,2),q=s(j,!0);o(j),o(r),k(()=>{Z(V,`#${t.id??""}`),Z(q,t.month)}),_(b,r)});var h=v(f,2),u=s(h),d=s(u),p=v(d,2);z(p,()=>e,b=>{var r=J(),n=s(r);w(n,()=>H),o(r),_(b,r)}),o(u);var L=v(u,2),m=s(L),M=s(m),B=s(M);w(B,()=>t.short),o(M),o(m);var S=v(m,2),P=s(S);w(P,()=>t.tease),o(S),o(L),o(h),o(a),k(()=>{x(a,"resource",t.resource),x(a,"footer",t.footer),y(h,"href",t.href),y(d,"src",`${g??""}/${t.slug??""}.jpg`)}),E(d),_(c,a),D()}export{W as S,U as s,x as t};

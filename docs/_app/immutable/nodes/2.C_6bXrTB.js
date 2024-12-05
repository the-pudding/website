import{a as Y,t as Z}from"../chunks/disclose-version.Ckrn2PLg.js";import{aF as ee,r as te,h as se,m as z,ab as oe,x as U,v as O,t as re,o as q,w as B,s as E,g as F,l as m,y as ne,j as A,aG as ae,k as ie}from"../chunks/index-client.C75Qpj4Y.js";import{M as le}from"../chunks/Meta.C6Y3Q8t-.js";import{d as ce,e as I}from"../chunks/props.meDx0K-t.js";import{r as ue}from"../chunks/attributes.C2oiQdJS.js";import{t as fe}from"../chunks/Story.D3ugDL9a.js";import{l as de,F as ve}from"../chunks/Filters.tXw7f7K2.js";import{b as he}from"../chunks/this.Bm9NJbuO.js";import"../chunks/transform.BXP9HJX6.js";import{S as pe}from"../chunks/Stories.WEPscXX_.js";import{d as me}from"../chunks/descending.BO6OmMcj.js";function ge(e,s,o=s){var n=ee();de(e,"input",()=>{var r=V(e)?P(e.value):e.value;o(r),n&&r!==(r=s())&&(e.value=r??"")}),te(()=>{var r=s();if(se&&e.defaultValue!==e.value){o(e.value);return}V(e)&&r===P(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function V(e){var s=e.type;return s==="number"||s==="range"}function P(e){return e===""?null:+e}var x={},L={},N=34,R=10,W=13;function J(e){return new Function("d","return {"+e.map(function(s,o){return JSON.stringify(s)+": d["+o+'] || ""'}).join(",")+"}")}function we(e,s){var o=J(e);return function(n,r){return s(o(n),r,e)}}function H(e){var s=Object.create(null),o=[];return e.forEach(function(n){for(var r in n)r in s||o.push(s[r]=r)}),o}function f(e,s){var o=e+"",n=o.length;return n<s?new Array(s-n+1).join(0)+o:o}function be(e){return e<0?"-"+f(-e,6):e>9999?"+"+f(e,6):f(e,4)}function _e(e){var s=e.getUTCHours(),o=e.getUTCMinutes(),n=e.getUTCSeconds(),r=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":be(e.getUTCFullYear())+"-"+f(e.getUTCMonth()+1,2)+"-"+f(e.getUTCDate(),2)+(r?"T"+f(s,2)+":"+f(o,2)+":"+f(n,2)+"."+f(r,3)+"Z":n?"T"+f(s,2)+":"+f(o,2)+":"+f(n,2)+"Z":o||s?"T"+f(s,2)+":"+f(o,2)+"Z":"")}function Ce(e){var s=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function n(t,a){var d,l,i=r(t,function(_,v){if(d)return d(_,v-1);l=_,d=a?we(_,a):J(_)});return i.columns=l||[],i}function r(t,a){var d=[],l=t.length,i=0,_=0,v,M=l<=0,g=!1;t.charCodeAt(l-1)===R&&--l,t.charCodeAt(l-1)===W&&--l;function S(){if(M)return L;if(g)return g=!1,x;var h,u=i,p;if(t.charCodeAt(u)===N){for(;i++<l&&t.charCodeAt(i)!==N||t.charCodeAt(++i)===N;);return(h=i)>=l?M=!0:(p=t.charCodeAt(i++))===R?g=!0:p===W&&(g=!0,t.charCodeAt(i)===R&&++i),t.slice(u+1,h-1).replace(/""/g,'"')}for(;i<l;){if((p=t.charCodeAt(h=i++))===R)g=!0;else if(p===W)g=!0,t.charCodeAt(i)===R&&++i;else if(p!==o)continue;return t.slice(u,h)}return M=!0,t.slice(u,l)}for(;(v=S())!==L;){for(var c=[];v!==x&&v!==L;)c.push(v),v=S();a&&(c=a(c,_++))==null||d.push(c)}return d}function w(t,a){return t.map(function(d){return a.map(function(l){return y(d[l])}).join(e)})}function b(t,a){return a==null&&(a=H(t)),[a.map(y).join(e)].concat(w(t,a)).join(`
`)}function C(t,a){return a==null&&(a=H(t)),w(t,a).join(`
`)}function k(t){return t.map(j).join(`
`)}function j(t){return t.map(y).join(e)}function y(t){return t==null?"":t instanceof Date?_e(t):s.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:n,parseRows:r,format:b,formatBody:C,formatRows:k,formatRow:j,formatValue:y}}var je=Ce(","),ye=je.parse;async function Te(e){const o=await(await fetch(e)).text();return ye(o)}const ke=["a","an","and","are","as","at","be","but","by","for","if","in","into","is","it","no","not","of","on","or","such","that","the","their","then","there","these","they","this","to","was","will","with","here","who","its","what","where","when","why","whats","we","how"];function T(e){return e==null?void 0:e.toLowerCase().split(/\s+/).map(s=>s.replace(/[^a-z]/g,"")).filter(s=>s&&!ke.includes(s))}function Fe(e,s,o){e.stopPropagation(),B(s,I(o.length))}var Ae=Z('<div class="c svelte-1j3os58"><div class="ui column-wide svelte-1j3os58"><div class="search svelte-1j3os58"><img class="icon svelte-1j3os58" src="assets/stickers/search@2x.png" aria-hidden="true" alt=""> <input type="text" placeholder="Find a story..." class="svelte-1j3os58"></div> <div class="filters"><!></div></div> <div class="stories"><!></div> <div class="more svelte-1j3os58"><button class="svelte-1j3os58"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down svelte-1j3os58"><polyline points="6 9 12 15 18 9"></polyline></svg> <span class="svelte-1j3os58">Load More Stories</span></button></div></div>');function Me(e,s){z(s,!0);const o=27,{stories:n}=oe("Home"),r=["Our Faves","Popular","Updating","Your Input","Video","Audio"];let w=U(o),b,C=U(I([...n])),k=U(""),j=U(void 0),y=ne(()=>{const c=m(k).toLowerCase(),h=m(C).filter(p=>{const Q=T(c).every(K=>p.search.some(X=>X.includes(K))),$=m(j)?p.filters.includes(m(j)):!0;return Q&&$});h.sort((p,D)=>me(p.id,D.id));const u=h.slice(0,m(w));return u.splice(7,0,{component:"Subscribe",slug:"Subscribe"}),u.splice(15,0,{component:"Faves",slug:"Faves"}),u.splice(26,0,{component:"Merch",slug:"Merch"}),u});O(()=>{m(k)&&(b.scrollIntoView({behavior:"instant"}),window.scrollBy({top:-54,behavior:"instant"}))}),O(async()=>{const c=await Te("assets/data/search.csv");B(C,I(m(C).map(h=>{const u=c.find(p=>p.slug===h.slug)||{};return{...h,search:[...T(h.tease),...T(h.short),...T(u.hed),...T(u.dek),...T(u.keyword),...T(u.author)]}})))});var t=Ae(),a=F(t),d=F(a),l=E(F(d),2);ue(l),A(d);var i=E(d,2),_=F(i);ve(_,{filters:r,get activeFilter(){return m(j)},set activeFilter(c){B(j,I(c))}}),A(i),A(a);var v=E(a,2);he(v,c=>b=c,()=>b);var M=F(v);pe(M,{get stories(){return m(y)}}),A(v);var g=E(v,2),S=F(g);S.__click=[Fe,w,n],A(g),A(t),re(()=>fe(g,"visible",m(y).length>m(w))),ge(l,()=>m(k),c=>B(k,c)),Y(e,t),q()}ce(["click"]);function Re(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 6.3.1"),console.log("build: 2024-12-04-22:33"),console.log("--- --- --- --- --- ---")}const Ee="The Pudding",Se="The Pudding explains ideas with visual essays.",G={title:Ee,description:Se};var Ue=Z("<!> <!>",1);function Ge(e,s){z(s,!0),Re();const o=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2","https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2","https://pudding.cool/assets/fonts/atlas/AtlasTypewriter-Medium-Web.woff2"],{stories:n,staff:r}=s.data;ae("Home",{stories:n,copy:G,staff:r});var w=Ue(),b=ie(w);le(b,{copy:G,preloadFont:o});var C=E(b,2);Me(C,{}),Y(e,w),q()}export{Ge as component};

var Se=Object.defineProperty,Ee=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var ne=(l,e,t)=>e in l?Se(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,x=(l,e)=>{for(var t in e||(e={}))ke.call(e,t)&&ne(l,t,e[t]);if(re)for(var t of re(e))ye.call(e,t)&&ne(l,t,e[t]);return l},le=(l,e)=>Ee(l,Te(e));import{U as Me,S as G,i as U,s as Y,e as b,t as D,c as H,a as S,g as V,d as _,b as v,f as j,H as d,h as K,j as O,k as P,m as q,n as L,G as C,o as W,x as I,u as N,v as z,V as ee,A as je,W as Pe,X as Le,I as B,Y as oe,L as Ie,Z as Ae,_ as Ne,$ as Ce,a0 as Re,r as ae,w as ie,K as ue,a1 as te,O as se,a2 as ce,a3 as fe,y as De}from"../chunks/vendor-868b2ba2.js";import{M as Ve}from"../chunks/Meta-9d4959a9.js";import{H as Oe}from"../chunks/HeroText-a2f169f6.js";import{w as qe}from"../chunks/wordmark-0849a013.js";import{S as We}from"../chunks/Story-a65aa67a.js";function he({stories:l,copy:e,category:t,filterFunction:s}){s=s||(()=>!0);const n=`home_${t}`,r=l.filter(m=>m[n]).filter(s);if(!r.length)return"";Me(r);const o=new RegExp(`\\[${t}\\]`,"g");return e[t].replace(o,()=>{const m=r.pop();return`
    		<a href="https://pudding.cool/${m.url}" rel="external">
    			<span>${m[n]}</span>
    			<img src="common/assets/thumbnails/320/${m.slug}.jpg" alt="" /></a>`})}function ze(l){let e,t,s,n,r,o,a,m,u,f,i=l[7].tagline+"",c,p,E,h,g,T,w,A,M;return{c(){e=b("h1"),t=b("div"),s=P(),n=b("div"),r=b("p"),o=b("span"),a=D("The Pudding"),m=P(),u=b("span"),f=new Pe,c=b("span"),p=D(l[0]),E=D("."),h=P(),g=b("span"),T=P(),w=b("span"),A=P(),M=b("span"),this.h()},l($){e=H($,"H1",{"aria-label":!0});var k=S(e);t=H(k,"DIV",{class:!0});var F=S(t);F.forEach(_),k.forEach(_),s=L($),n=H($,"DIV",{class:!0});var J=S(n);r=H(J,"P",{class:!0});var R=S(r);o=H(R,"SPAN",{class:!0});var X=S(o);a=V(X,"The Pudding"),X.forEach(_),m=L(R),u=H(R,"SPAN",{class:!0});var y=S(u);f=Le(y),c=H(y,"SPAN",{class:!0});var Q=S(c);p=V(Q,l[0]),E=V(Q,"."),Q.forEach(_),y.forEach(_),h=L(R),g=H(R,"SPAN",{class:!0});var $e=S(g);$e.forEach(_),T=L(R),w=H(R,"SPAN",{class:!0});var be=S(w);be.forEach(_),A=L(R),M=H(R,"SPAN",{class:!0});var He=S(M);He.forEach(_),R.forEach(_),J.forEach(_),this.h()},h(){v(t,"class","wordmark svelte-tlvvua"),v(e,"aria-label",l[7].title),v(o,"class","sr-only"),f.a=c,v(c,"class","tagline-alt svelte-tlvvua"),C(c,"is-visible",l[0]),v(u,"class","tagline"),C(u,"is-del",l[0]),v(g,"class","popular svelte-tlvvua"),C(g,"is-visible",l[1]),v(w,"class","personal svelte-tlvvua"),C(w,"is-visible",l[1]),v(M,"class","welcome svelte-tlvvua"),C(M,"is-visible",l[2]),v(r,"class","svelte-tlvvua"),v(n,"class","letter svelte-tlvvua")},m($,k){j($,e,k),d(e,t),t.innerHTML=qe,j($,s,k),j($,n,k),d(n,r),d(r,o),d(o,a),d(r,m),d(r,u),f.m(i,u),d(u,c),d(c,p),d(c,E),d(r,h),d(r,g),g.innerHTML=l[1],d(r,T),d(r,w),w.innerHTML=l[2],d(r,A),d(r,M),M.innerHTML=l[5]},p($,k){k&1&&K(p,$[0]),k&1&&C(c,"is-visible",$[0]),k&1&&C(u,"is-del",$[0]),k&2&&(g.innerHTML=$[1]),k&2&&C(g,"is-visible",$[1]),k&4&&(w.innerHTML=$[2]),k&2&&C(w,"is-visible",$[1]),k&32&&(M.innerHTML=$[5]),k&4&&C(M,"is-visible",$[2])},d($){$&&_(e),$&&_(s),$&&_(n)}}}function me(l){let e,t,s;return{c(){e=b("a"),t=D(l[3]),this.h()},l(n){e=H(n,"A",{href:!0});var r=S(e);t=V(r,l[3]),r.forEach(_),this.h()},h(){v(e,"href",s="/author/"+l[4])},m(n,r){j(n,e,r),d(e,t)},p(n,r){r&8&&K(t,n[3]),r&16&&s!==(s="/author/"+n[4])&&v(e,"href",s)},d(n){n&&_(e)}}}function Ge(l){let e,t,s,n,r,o,a,m,u;t=new Oe({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}});let f=l[4]&&me(l);return{c(){e=b("section"),O(t.$$.fragment),s=P(),n=b("div"),r=b("p"),f&&f.c(),o=P(),a=b("p"),m=D(l[6]),this.h()},l(i){e=H(i,"SECTION",{id:!0,class:!0});var c=S(e);q(t.$$.fragment,c),s=L(c),n=H(c,"DIV",{class:!0});var p=S(n);r=H(p,"P",{class:!0});var E=S(r);f&&f.l(E),E.forEach(_),o=L(p),a=H(p,"P",{class:!0});var h=S(a);m=V(h,l[6]),h.forEach(_),p.forEach(_),c.forEach(_),this.h()},h(){v(r,"class","name"),v(a,"class","position"),v(n,"class","signature svelte-tlvvua"),C(n,"is-visible",l[2]),v(e,"id","intro"),v(e,"class","column svelte-tlvvua")},m(i,c){j(i,e,c),W(t,e,null),d(e,s),d(e,n),d(n,r),f&&f.m(r,null),d(n,o),d(n,a),d(a,m),u=!0},p(i,[c]){const p={};c&16423&&(p.$$scope={dirty:c,ctx:i}),t.$set(p),i[4]?f?f.p(i,c):(f=me(i),f.c(),f.m(r,null)):f&&(f.d(1),f=null),(!u||c&64)&&K(m,i[6]),c&4&&C(n,"is-visible",i[2])},i(i){u||(I(t.$$.fragment,i),u=!0)},o(i){N(t.$$.fragment,i),u=!1},d(i){i&&_(e),z(t),f&&f.d()}}}function Ue(l,e,t){const{stories:s,staff:n,copy:r}=ee("Home");let o="",a="",m="",u="",f="",i="",c="";const p=()=>{t(1,a=he({stories:s,copy:r,category:"popular"}))},E=()=>{Math.floor(Math.random()*n.length);const{id:T,name:w,slug:A}=n[1],M=k=>k.personal_pick.includes(T),$=s.filter(k=>!a.includes(k.url));t(2,m=he({stories:$,copy:r,category:"personal",filterFunction:M})),t(3,u=w),t(4,f=A)},h=()=>{const T=Math.floor(Math.random()*r.altTaglines.length);t(0,o=` ${r.altTaglines[T]}`)},g=()=>{!m||(t(5,i=r.welcome),t(6,c="Pudding team member"))};return je(()=>{h(),p(),E(),g()}),[o,a,m,u,f,i,c,r]}class Ye extends G{constructor(e){super();U(this,e,Ue,Ge,Y,{})}}function Be(l){let e;return{c(){e=b("div"),this.h()},l(t){e=H(t,"DIV",{class:!0});var s=S(e);s.forEach(_),this.h()},h(){v(e,"class","svelte-het5lh")},m(t,s){j(t,e,s),e.innerHTML=l[0]},p(t,[s]){s&1&&(e.innerHTML=t[0])},i:B,o:B,d(t){t&&_(e)}}}function Ke(l,e,t){let{content:s}=e;return l.$$set=n=>{"content"in n&&t(0,s=n.content)},[s]}class Xe extends G{constructor(e){super();U(this,e,Ke,Be,Y,{content:0})}}function Ze(l){let e,t,s,n,r,o=l[0].length+"",a,m,u,f;return{c(){e=b("div"),t=b("div"),s=b("input"),n=P(),r=b("p"),a=D(o),m=D(" matches"),this.h()},l(i){e=H(i,"DIV",{id:!0,class:!0});var c=S(e);t=H(c,"DIV",{class:!0});var p=S(t);s=H(p,"INPUT",{placeholder:!0,class:!0}),n=L(p),r=H(p,"P",{class:!0});var E=S(r);a=V(E,o),m=V(E," matches"),E.forEach(_),p.forEach(_),c.forEach(_),this.h()},h(){v(s,"placeholder","Search stories (e.g., Spotify)"),v(s,"class","svelte-131yach"),v(r,"class","svelte-131yach"),v(t,"class","inner column svelte-131yach"),v(e,"id","search"),v(e,"class","svelte-131yach")},m(i,c){j(i,e,c),d(e,t),d(t,s),oe(s,l[1]),d(t,n),d(t,r),d(r,a),d(r,m),u||(f=Ie(s,"input",l[4]),u=!0)},p(i,[c]){c&2&&s.value!==i[1]&&oe(s,i[1]),c&1&&o!==(o=i[0].length+"")&&K(a,o)},i:B,o:B,d(i){i&&_(e),u=!1,f()}}}const Z=3;function Fe(l,e,t){let s,n,{highlight:r}=e;const{stories:o}=ee("Home"),a=[{prop:"hed",weight:1},{prop:"dek",weight:1},{prop:"tease",weight:1},{prop:"keyword",weight:2}],m=Ae();let u="";const f=g=>a.map(({prop:T})=>{if(typeof g[T]!="string")return{prop:T,tokens:g[T]};const M=Ne(g[T].toLowerCase()).split(/\W/).filter($=>$.length>=Z);return{prop:T,tokens:M}}),i=({prop:g,tokens:T},w)=>{const A=w.split(/\W/).filter(y=>y.length>=Z).map(y=>y.toLowerCase()),{weight:M}=a.find(y=>y.prop===g),F=A.map(y=>T.includes(y)).filter(y=>y).length*M,X=A.map(y=>T.join(" ").includes(y)).filter(y=>y).length*M*.5;return F+X},c=(g,T)=>{const w=g.map(A=>i(A,T));return Ce(w)},p=g=>{const T=E.map(w=>le(x({},w),{score:c(w.search,g)})).filter(w=>w.score>0);return T.sort((w,A)=>Re(w.score,A.score)),T},E=o.map(g=>({slug:g.slug,search:f(g)}));function h(){u=this.value,t(1,u)}return l.$$set=g=>{"highlight"in g&&t(0,r=g.highlight)},l.$$.update=()=>{l.$$.dirty&2&&t(2,s=u.toLowerCase().trim()),l.$$.dirty&4&&t(3,n=s.length>=Z?p(s):E),l.$$.dirty&8&&t(0,r=n.map(g=>g.slug)),l.$$.dirty&4&&s.length>=Z&&m("focus")},[r,u,s,n,h]}class Je extends G{constructor(e){super();U(this,e,Fe,Ze,Y,{highlight:0})}}function pe(l,e,t){const s=l.slice();return s[8]=e[t].tease,s[9]=e[t].url,s[10]=e[t].slug,s}function ge(l){let e,t,s,n;return t=new We({props:{tease:l[8],url:l[9],slug:l[10],collapse:!l[0].includes(l[10])}}),{c(){e=b("li"),O(t.$$.fragment),s=P()},l(r){e=H(r,"LI",{});var o=S(e);q(t.$$.fragment,o),s=L(o),o.forEach(_)},m(r,o){j(r,e,o),W(t,e,null),d(e,s),n=!0},p(r,o){const a={};o&4&&(a.tease=r[8]),o&4&&(a.url=r[9]),o&4&&(a.slug=r[10]),o&5&&(a.collapse=!r[0].includes(r[10])),t.$set(a)},i(r){n||(I(t.$$.fragment,r),n=!0)},o(r){N(t.$$.fragment,r),n=!1},d(r){r&&_(e),z(t)}}}function Qe(l){let e,t,s=l[3].storiesHed+"",n,r,o,a,m=l[2],u=[];for(let i=0;i<m.length;i+=1)u[i]=ge(pe(l,m,i));const f=i=>N(u[i],1,1,()=>{u[i]=null});return{c(){e=b("section"),t=b("h2"),n=D(s),r=P(),o=b("ul");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){e=H(i,"SECTION",{id:!0,class:!0});var c=S(e);t=H(c,"H2",{class:!0});var p=S(t);n=V(p,s),p.forEach(_),r=L(c),o=H(c,"UL",{});var E=S(o);for(let h=0;h<u.length;h+=1)u[h].l(E);E.forEach(_),c.forEach(_),this.h()},h(){v(t,"class","column svelte-1wqvgrz"),v(e,"id","stories"),v(e,"class","svelte-1wqvgrz")},m(i,c){j(i,e,c),d(e,t),d(t,n),d(e,r),d(e,o);for(let p=0;p<u.length;p+=1)u[p].m(o,null);l[5](e),a=!0},p(i,[c]){if(c&5){m=i[2];let p;for(p=0;p<m.length;p+=1){const E=pe(i,m,p);u[p]?(u[p].p(E,c),I(u[p],1)):(u[p]=ge(E),u[p].c(),I(u[p],1),u[p].m(o,null))}for(ae(),p=m.length;p<u.length;p+=1)f(p);ie()}},i(i){if(!a){for(let c=0;c<m.length;c+=1)I(u[c]);a=!0}},o(i){u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)N(u[c]);a=!1},d(i){i&&_(e),ue(u,i),l[5](null)}}}function xe(l,e,t){const s=()=>{const{top:i}=a.getBoundingClientRect(),c=window.scrollY+i-64;window.scrollTo(0,c)};let{highlight:n}=e;const{stories:r,copy:o}=ee("Home");let a;r.sort((i,c)=>te(i.date,c.date));let m=r.map(i=>x({},i));const u=()=>{m.sort((i,c)=>te(n.indexOf(i.slug),n.indexOf(c.slug))||te(i.date,c.date)),t(2,m)};function f(i){se[i?"unshift":"push"](()=>{a=i,t(1,a)})}return l.$$set=i=>{"highlight"in i&&t(0,n=i.highlight)},l.$$.update=()=>{l.$$.dirty&1&&u()},[n,a,m,o,s,f]}class et extends G{constructor(e){super();U(this,e,xe,Qe,Y,{jump:4,highlight:0})}get jump(){return this.$$.ctx[4]}}function _e(l){let e,t;return e=new Xe({props:{content:l[0].promo}}),{c(){O(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,n){W(e,s,n),t=!0},p(s,n){const r={};n&1&&(r.content=s[0].promo),e.$set(r)},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){N(e.$$.fragment,s),t=!1},d(s){z(e,s)}}}function tt(l){let e,t,s,n,r,o,a,m,u;e=new Ye({});let f=l[0].promo&&_e(l);function i(h){l[6](h)}let c={};l[1]!==void 0&&(c.highlight=l[1]),n=new Je({props:c}),se.push(()=>ce(n,"highlight",i)),n.$on("focus",l[3]);function p(h){l[7](h)}let E={highlight:l[1]};return l[2]!==void 0&&(E.jump=l[2]),a=new et({props:E}),se.push(()=>ce(a,"jump",p)),{c(){O(e.$$.fragment),t=P(),f&&f.c(),s=P(),O(n.$$.fragment),o=P(),O(a.$$.fragment)},l(h){q(e.$$.fragment,h),t=L(h),f&&f.l(h),s=L(h),q(n.$$.fragment,h),o=L(h),q(a.$$.fragment,h)},m(h,g){W(e,h,g),j(h,t,g),f&&f.m(h,g),j(h,s,g),W(n,h,g),j(h,o,g),W(a,h,g),u=!0},p(h,[g]){h[0].promo?f?(f.p(h,g),g&1&&I(f,1)):(f=_e(h),f.c(),I(f,1),f.m(s.parentNode,s)):f&&(ae(),N(f,1,1,()=>{f=null}),ie());const T={};!r&&g&2&&(r=!0,T.highlight=h[1],fe(()=>r=!1)),n.$set(T);const w={};g&2&&(w.highlight=h[1]),!m&&g&4&&(m=!0,w.jump=h[2],fe(()=>m=!1)),a.$set(w)},i(h){u||(I(e.$$.fragment,h),I(f),I(n.$$.fragment,h),I(a.$$.fragment,h),u=!0)},o(h){N(e.$$.fragment,h),N(f),N(n.$$.fragment,h),N(a.$$.fragment,h),u=!1},d(h){z(e,h),h&&_(t),f&&f.d(h),h&&_(s),z(n,h),h&&_(o),z(a,h)}}}function st(l,e,t){let{copy:s}=e,{stories:n}=e,{staff:r}=e,o=n.map(i=>i.slug),a;De("Home",{stories:n,staff:r,copy:s});const m=()=>a();function u(i){o=i,t(1,o)}function f(i){a=i,t(2,a)}return l.$$set=i=>{"copy"in i&&t(0,s=i.copy),"stories"in i&&t(4,n=i.stories),"staff"in i&&t(5,r=i.staff)},[s,o,a,m,n,r,u,f]}class rt extends G{constructor(e){super();U(this,e,st,tt,Y,{copy:0,stories:4,staff:5})}}function de(l,e,t){const s=l.slice();return s[1]=e[t],s}function ve(l){let e,t=l[1]+"",s,n;return{c(){e=b("a"),s=D(t),this.h()},l(r){e=H(r,"A",{href:!0});var o=S(e);s=V(o,t),o.forEach(_),this.h()},h(){v(e,"href",n="/author/"+l[1])},m(r,o){j(r,e,o),d(e,s)},p(r,o){o&1&&t!==(t=r[1]+"")&&K(s,t),o&1&&n!==(n="/author/"+r[1])&&v(e,"href",n)},d(r){r&&_(e)}}}function nt(l){let e,t=l[0],s=[];for(let n=0;n<t.length;n+=1)s[n]=ve(de(l,t,n));return{c(){e=b("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=H(n,"DIV",{class:!0});var r=S(e);for(let o=0;o<s.length;o+=1)s[o].l(r);r.forEach(_),this.h()},h(){v(e,"class","svelte-1l89d97")},m(n,r){j(n,e,r);for(let o=0;o<s.length;o+=1)s[o].m(e,null)},p(n,[r]){if(r&1){t=n[0];let o;for(o=0;o<t.length;o+=1){const a=de(n,t,o);s[o]?s[o].p(a,r):(s[o]=ve(a),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:B,o:B,d(n){n&&_(e),ue(s,n)}}}function lt(l,e,t){let{authors:s}=e;return l.$$set=n=>{"authors"in n&&t(0,s=n.authors)},[s]}class ot extends G{constructor(e){super();U(this,e,lt,nt,Y,{authors:0})}}const at="The Pudding",it="",ut="is a digital publication that <del>explains ideas debated in culture with visual essays</del>",ct="You might have seen our story on [popular], but we\u2019ve also made stuff about [popular] [popular] or [popular].",ft="Some of my favorite projects are about [personal], [personal], and [personal].",ht="So, welcome to The Pudding. Get  cozy, you could be here a while. Explore all of our stories below.",mt="Our Stories",pt=["makes cool shit on the internet","makes awesome stories with data","crafts data into stories about culture","brings you longform data journalism","creates visual essays with data"];var we={title:at,promo:it,tagline:ut,popular:ct,personal:ft,welcome:ht,storiesHed:mt,altTaglines:pt};function gt(l){let e,t,s,n,r,o;return e=new Ve({props:{copy:we}}),s=new rt({props:{copy:we,stories:l[0],staff:l[1]}}),r=new ot({props:{authors:l[2]}}),{c(){O(e.$$.fragment),t=P(),O(s.$$.fragment),n=P(),O(r.$$.fragment)},l(a){q(e.$$.fragment,a),t=L(a),q(s.$$.fragment,a),n=L(a),q(r.$$.fragment,a)},m(a,m){W(e,a,m),j(a,t,m),W(s,a,m),j(a,n,m),W(r,a,m),o=!0},p(a,[m]){const u={};m&1&&(u.stories=a[0]),m&2&&(u.staff=a[1]),s.$set(u);const f={};m&4&&(f.authors=a[2]),r.$set(f)},i(a){o||(I(e.$$.fragment,a),I(s.$$.fragment,a),I(r.$$.fragment,a),o=!0)},o(a){N(e.$$.fragment,a),N(s.$$.fragment,a),N(r.$$.fragment,a),o=!1},d(a){z(e,a),a&&_(t),z(s,a),a&&_(n),z(r,a)}}}async function St({fetch:l}){const t=await l("/api/home.json");if(t.ok){const{stories:s,staff:n,authors:r}=await t.json();return{props:{stories:s,staff:n,authors:r}}}return{status:t.status,error:new Error("Could not load data")}}function _t(l,e,t){let{stories:s}=e,{staff:n}=e,{authors:r}=e;return l.$$set=o=>{"stories"in o&&t(0,s=o.stories),"staff"in o&&t(1,n=o.staff),"authors"in o&&t(2,r=o.authors)},[s,n,r]}class Et extends G{constructor(e){super();U(this,e,_t,gt,Y,{stories:0,staff:1,authors:2})}}export{Et as default,St as load};
import{S as re,i as se,s as oe,D as Ie,E as Te,a as b,d as f,F as Se,G as ie,f as P,H as u,p as Qe,l as Ve,I as B,J as Ge,B as Ye,e as E,j as he,c as w,m as ue,b as p,o as fe,x as ee,u as te,v as _e,t as W,g as R,k as S,n as V,r as Xe,w as Ze,K as le,L as me,M as xe,A as et,N as Ue,O as be,P as tt,Q as lt,R as at,T as nt}from"../chunks/vendor-868b2ba2.js";import{w as rt}from"../chunks/wordmark-0849a013.js";function De(a){let e,t,l=a[2].contents+"",_,n=[a[2].attrs,{style:_="width: "+a[0]+"; height: "+a[1]+"; transform: rotate("+a[3]+"deg);"}],s={};for(let o=0;o<n.length;o+=1)s=Ye(s,n[o]);return{c(){e=Ie("svg"),t=Ie("g"),this.h()},l(o){e=Te(o,"svg",{style:!0});var d=b(e);t=Te(d,"g",{});var r=b(t);r.forEach(f),d.forEach(f),this.h()},h(){Se(e,s),ie(e,"svelte-x4av39",!0)},m(o,d){P(o,e,d),u(e,t),t.innerHTML=l},p(o,d){d&4&&l!==(l=o[2].contents+"")&&(t.innerHTML=l),Se(e,s=Qe(n,[d&4&&o[2].attrs,d&11&&_!==(_="width: "+o[0]+"; height: "+o[1]+"; transform: rotate("+o[3]+"deg);")&&{style:_}])),ie(e,"svelte-x4av39",!0)},d(o){o&&f(e)}}}function st(a){let e,t=a[2]&&De(a);return{c(){t&&t.c(),e=Ve()},l(l){t&&t.l(l),e=Ve()},m(l,_){t&&t.m(l,_),P(l,e,_)},p(l,[_]){l[2]?t?t.p(l,_):(t=De(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:B,o:B,d(l){t&&t.d(l),l&&f(e)}}}function ot(a,e,t){let l,_;const n=["n","ne","e","se","s","sw","w","nw"];let{name:s}=e,{direction:o="n"}=e,{width:d="1em"}=e,{height:r="1em"}=e,{strokeWidth:i=void 0}=e,{stroke:c=void 0}=e;return a.$$set=g=>{"name"in g&&t(5,s=g.name),"direction"in g&&t(6,o=g.direction),"width"in g&&t(0,d=g.width),"height"in g&&t(1,r=g.height),"strokeWidth"in g&&t(7,i=g.strokeWidth),"stroke"in g&&t(8,c=g.stroke)},a.$$.update=()=>{a.$$.dirty&32&&t(2,l=Ge.icons[s]),a.$$.dirty&64&&t(3,_=n.indexOf(o)*45),a.$$.dirty&388&&l&&(c&&t(2,l.attrs.stroke=c,l),i&&t(2,l.attrs["stroke-width"]=i,l))},[d,r,l,_,n,s,o,i,c]}class it extends re{constructor(e){super();se(this,e,ot,st,oe,{directions:4,name:5,direction:6,width:0,height:1,strokeWidth:7,stroke:8})}get directions(){return this.$$.ctx[4]}}const pe=[{name:"Our Team",url:"/about"},{name:"FAQ",url:"/faq"},{name:"Pitch a Story",url:"/pitch"},{name:"Data Viz Resources",url:"/resources"},{name:"Privacy",url:"/privacy"},{name:"Polygraph Studio",url:"https://polygraph.cool",rel:"external"}],ae=[{name:"Twitter",url:"https://twitter.com/puddingviz"},{name:"Instagram",url:"https://www.instagram.com/the.pudding"},{name:"Patreon",cta:"Support The Pudding",url:"https://patreon.com/thepudding"},{name:"Facebook",url:"https://facebook.com/pudding.viz"},{name:"YouTube",url:"https://www.youtube.com/channel/UCFuV9vMFVluW9CAOdS4Oluw"},{name:"Newsletter",cta:"Join the newsletter",url:"http://eepurl.com/czym6f"},{name:"RSS",url:"/feed/index.xml"}];function Fe(a,e,t){const l=a.slice();return l[3]=e[t].cta,l[4]=e[t].url,l}function Le(a,e,t){const l=a.slice();return l[7]=e[t].name,l[4]=e[t].url,l}function Ne(a){let e,t,l,_,n;return t=new it({props:{name:a[7].toLowerCase()}}),{c(){e=E("a"),he(t.$$.fragment),this.h()},l(s){e=w(s,"A",{href:!0,rel:!0,"aria-label":!0,class:!0});var o=b(e);ue(t.$$.fragment,o),o.forEach(f),this.h()},h(){p(e,"href",l=a[4]),p(e,"rel","external"),p(e,"aria-label",_=a[7]),p(e,"class","svelte-1elzwrl")},m(s,o){P(s,e,o),fe(t,e,null),n=!0},p:B,i(s){n||(ee(t.$$.fragment,s),n=!0)},o(s){te(t.$$.fragment,s),n=!1},d(s){s&&f(e),_e(t)}}}function He(a){let e,t=a[3]+"",l,_;return{c(){e=E("a"),l=W(t),this.h()},l(n){e=w(n,"A",{class:!0,href:!0,rel:!0});var s=b(e);l=R(s,t),s.forEach(f),this.h()},h(){p(e,"class","btn svelte-1elzwrl"),p(e,"href",_=a[4]),p(e,"rel","external")},m(n,s){P(n,e,s),u(e,l)},p:B,d(n){n&&f(e)}}}function ct(a){let e,t,l,_,n,s=a[0],o=[];for(let c=0;c<s.length;c+=1)o[c]=Ne(Le(a,s,c));const d=c=>te(o[c],1,1,()=>{o[c]=null});let r=a[1],i=[];for(let c=0;c<r.length;c+=1)i[c]=He(Fe(a,r,c));return{c(){e=E("div"),t=E("div");for(let c=0;c<o.length;c+=1)o[c].c();l=S(),_=E("div");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=w(c,"DIV",{class:!0});var g=b(e);t=w(g,"DIV",{class:!0});var m=b(t);for(let M=0;M<o.length;M+=1)o[M].l(m);m.forEach(f),l=V(g),_=w(g,"DIV",{class:!0});var I=b(_);for(let M=0;M<i.length;M+=1)i[M].l(I);I.forEach(f),g.forEach(f),this.h()},h(){p(t,"class","platforms svelte-1elzwrl"),p(_,"class","cta"),p(e,"class","container svelte-1elzwrl")},m(c,g){P(c,e,g),u(e,t);for(let m=0;m<o.length;m+=1)o[m].m(t,null);u(e,l),u(e,_);for(let m=0;m<i.length;m+=1)i[m].m(_,null);n=!0},p(c,[g]){if(g&1){s=c[0];let m;for(m=0;m<s.length;m+=1){const I=Le(c,s,m);o[m]?(o[m].p(I,g),ee(o[m],1)):(o[m]=Ne(I),o[m].c(),ee(o[m],1),o[m].m(t,null))}for(Xe(),m=s.length;m<o.length;m+=1)d(m);Ze()}if(g&2){r=c[1];let m;for(m=0;m<r.length;m+=1){const I=Fe(c,r,m);i[m]?i[m].p(I,g):(i[m]=He(I),i[m].c(),i[m].m(_,null))}for(;m<i.length;m+=1)i[m].d(1);i.length=r.length}},i(c){if(!n){for(let g=0;g<s.length;g+=1)ee(o[g]);n=!0}},o(c){o=o.filter(Boolean);for(let g=0;g<o.length;g+=1)te(o[g]);n=!1},d(c){c&&f(e),le(o,c),le(i,c)}}}function ht(a){const e=["Twitter","Instagram","Facebook"],t=ae.filter(_=>e.includes(_.name)),l=ae.filter(_=>_.cta);return[t,l]}class ut extends re{constructor(e){super();se(this,e,ht,ct,oe,{})}}const ft="The Pudding is a digital publication that explains ideas debated in culture with visual essays.",_t="We pour our heart into these stories, but they take time and money. For just $2/month, you can help support us. Join our growing community of data-driven enthusiasts.";var Oe={tagline:ft,patreon:_t};function ze(a,e,t){const l=a.slice();return l[17]=e[t].name,l[18]=e[t].url,l}function Me(a,e,t){const l=a.slice();return l[17]=e[t].name,l[18]=e[t].url,l[21]=e[t].rel,l}function Ce(a,e,t){const l=a.slice();return l[24]=e[t].cta,l[18]=e[t].url,l}function Pe(a){let e,t=a[24]+"",l,_;return{c(){e=E("a"),l=W(t),this.h()},l(n){e=w(n,"A",{class:!0,href:!0,rel:!0});var s=b(e);l=R(s,t),s.forEach(f),this.h()},h(){p(e,"class","btn btn-light svelte-bawfva"),p(e,"href",_=a[18]),p(e,"rel","external")},m(n,s){P(n,e,s),u(e,l)},p:B,d(n){n&&f(e)}}}function $e(a){let e,t,l,_=a[17].toUpperCase()+"",n,s,o,d;return{c(){e=E("li"),t=E("a"),l=E("span"),n=W(_),d=S(),this.h()},l(r){e=w(r,"LI",{class:!0});var i=b(e);t=w(i,"A",{href:!0,rel:!0,class:!0});var c=b(t);l=w(c,"SPAN",{});var g=b(l);n=R(g,_),g.forEach(f),c.forEach(f),d=V(i),i.forEach(f),this.h()},h(){p(t,"href",s=a[18]),p(t,"rel",o=a[21]),p(t,"class","svelte-bawfva"),p(e,"class","svelte-bawfva")},m(r,i){P(r,e,i),u(e,t),u(t,l),u(l,n),u(e,d)},p:B,d(r){r&&f(e)}}}function Be(a){let e,t,l,_=a[17].toUpperCase()+"",n,s,o;return{c(){e=E("li"),t=E("a"),l=E("span"),n=W(_),o=S(),this.h()},l(d){e=w(d,"LI",{class:!0});var r=b(e);t=w(r,"A",{href:!0,rel:!0,class:!0});var i=b(t);l=w(i,"SPAN",{});var c=b(l);n=R(c,_),c.forEach(f),i.forEach(f),o=V(r),r.forEach(f),this.h()},h(){p(t,"href",s=a[18]),p(t,"rel","external"),p(t,"class","svelte-bawfva"),p(e,"class","svelte-bawfva")},m(d,r){P(d,e,r),u(e,t),u(t,l),u(l,n),u(e,o)},p:B,d(d){d&&f(e)}}}function dt(a){let e,t,l,_,n,s,o,d,r,i,c=Oe.patreon+"",g,m,I,M,O,J,$,Q,A,X,G,j,T,Z,D,K,F,y,L=a[5],h=[];for(let k=0;k<L.length;k+=1)h[k]=Pe(Ce(a,L,k));let C=pe,H=[];for(let k=0;k<C.length;k+=1)H[k]=$e(Me(a,C,k));let x=ae,U=[];for(let k=0;k<x.length;k+=1)U[k]=Be(ze(a,x,k));return{c(){e=E("nav"),t=E("button"),l=W("\u2630"),_=S(),n=E("div"),s=E("button"),o=W("\xD7"),d=S(),r=E("section"),i=E("p"),g=W(c),m=S(),I=E("div");for(let k=0;k<h.length;k+=1)h[k].c();M=S(),O=E("section"),J=E("div"),$=E("h4"),Q=W("About Us"),A=S(),X=E("ul");for(let k=0;k<H.length;k+=1)H[k].c();G=S(),j=E("div"),T=E("h4"),Z=W("Follow Us"),D=S(),K=E("ul");for(let k=0;k<U.length;k+=1)U[k].c();this.h()},l(k){e=w(k,"NAV",{});var z=b(e);t=w(z,"BUTTON",{type:!0,class:!0,"aria-label":!0,"aria-controls":!0,"aria-expanded":!0});var v=b(t);l=R(v,"\u2630"),v.forEach(f),_=V(z),n=w(z,"DIV",{id:!0,class:!0});var N=b(n);s=w(N,"BUTTON",{type:!0,class:!0,"aria-label":!0});var ce=b(s);o=R(ce,"\xD7"),ce.forEach(f),d=V(N),r=w(N,"SECTION",{class:!0});var ne=b(r);i=w(ne,"P",{});var q=b(i);g=R(q,c),q.forEach(f),m=V(ne),I=w(ne,"DIV",{});var Ee=b(I);for(let Y=0;Y<h.length;Y+=1)h[Y].l(Ee);Ee.forEach(f),ne.forEach(f),M=V(N),O=w(N,"SECTION",{class:!0});var de=b(O);J=w(de,"DIV",{});var ve=b(J);$=w(ve,"H4",{});var we=b($);Q=R(we,"About Us"),we.forEach(f),A=V(ve),X=w(ve,"UL",{});var ke=b(X);for(let Y=0;Y<H.length;Y+=1)H[Y].l(ke);ke.forEach(f),ve.forEach(f),G=V(de),j=w(de,"DIV",{});var ge=b(j);T=w(ge,"H4",{});var ye=b(T);Z=R(ye,"Follow Us"),ye.forEach(f),D=V(ge),K=w(ge,"UL",{});var Ae=b(K);for(let Y=0;Y<U.length;Y+=1)U[Y].l(Ae);Ae.forEach(f),ge.forEach(f),de.forEach(f),N.forEach(f),z.forEach(f),this.h()},h(){p(t,"type","button"),p(t,"class","btn-open svelte-bawfva"),p(t,"aria-label","open navigation"),p(t,"aria-controls","slide-nav"),p(t,"aria-expanded","false"),p(s,"type","button"),p(s,"class","btn-close"),p(s,"aria-label","close navigation"),p(r,"class","about"),p(O,"class","links"),p(n,"id","slide-nav"),p(n,"class","slide-content svelte-bawfva"),ie(n,"visible",a[3]),ie(n,"active",a[4])},m(k,z){P(k,e,z),u(e,t),u(t,l),a[9](t),u(e,_),u(e,n),u(n,s),u(s,o),a[10](s),u(n,d),u(n,r),u(r,i),u(i,g),u(r,m),u(r,I);for(let v=0;v<h.length;v+=1)h[v].m(I,null);u(n,M),u(n,O),u(O,J),u(J,$),u($,Q),u(J,A),u(J,X);for(let v=0;v<H.length;v+=1)H[v].m(X,null);u(O,G),u(O,j),u(j,T),u(T,Z),u(j,D),u(j,K);for(let v=0;v<U.length;v+=1)U[v].m(K,null);a[11](n),F||(y=[me(t,"click",a[6]),me(s,"click",a[7]),me(n,"transitionend",a[8]),me(n,"keyup",a[7])],F=!0)},p(k,[z]){if(z&32){L=k[5];let v;for(v=0;v<L.length;v+=1){const N=Ce(k,L,v);h[v]?h[v].p(N,z):(h[v]=Pe(N),h[v].c(),h[v].m(I,null))}for(;v<h.length;v+=1)h[v].d(1);h.length=L.length}if(z&0){C=pe;let v;for(v=0;v<C.length;v+=1){const N=Me(k,C,v);H[v]?H[v].p(N,z):(H[v]=$e(N),H[v].c(),H[v].m(X,null))}for(;v<H.length;v+=1)H[v].d(1);H.length=C.length}if(z&0){x=ae;let v;for(v=0;v<x.length;v+=1){const N=ze(k,x,v);U[v]?U[v].p(N,z):(U[v]=Be(N),U[v].c(),U[v].m(K,null))}for(;v<U.length;v+=1)U[v].d(1);U.length=x.length}z&8&&ie(n,"visible",k[3]),z&16&&ie(n,"active",k[4])},i:B,o:B,d(k){k&&f(e),a[9](null),a[10](null),le(h,k),le(H,k),le(U,k),a[11](null),F=!1,xe(y)}}}function vt(a,e,t){const l=ae.filter(A=>A.cta);let _,n,s,o,d,r,i=!1,c=!1;const g=async()=>{t(4,c=!0),t(3,i=!0),await Ue(),o.focus(),_.setAttribute("aria-hidden",!0),s.setAttribute("aria-hidden",!0)},m=async A=>{A.type==="keyup"&&A.key!=="Escape"||(t(4,c=!1),await Ue(),s.focus(),_.removeAttribute("aria-hidden"),s.removeAttribute("aria-hidden"))},I=()=>{t(3,i=c)},M=A=>{A.key==="Tab"&&!A.shiftKey&&(A.preventDefault(),d.focus())},O=A=>{A.key==="Tab"&&A.shiftKey&&(A.preventDefault(),r.focus())};et(()=>{_=document.querySelector("main");const A=[...n.querySelectorAll("a, button")];d=A.shift(),r=A.pop(),d.addEventListener("keydown",O),r.addEventListener("keydown",M)});function J(A){be[A?"unshift":"push"](()=>{s=A,t(1,s)})}function $(A){be[A?"unshift":"push"](()=>{o=A,t(2,o)})}function Q(A){be[A?"unshift":"push"](()=>{n=A,t(0,n)})}return[n,s,o,i,c,l,g,m,I,J,$,Q]}class gt extends re{constructor(e){super();se(this,e,vt,dt,oe,{})}}var mt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 110"><path class="st0" d="M67.2 14.1C62.6 4.8 55.3 3.8 48.1 7.6c-5.8 3.1-22.3 13.1-22.3 13.1v11.8s18.8-10.9 22.3-12.7c4.3-2.3 8.7-1.6 11.5 3.9 2.8 5.6 2.7 15-1.8 22.5-3.5 5.9-6.8 8.6-9.9 10.3S25.8 69.4 25.8 69.4v11.8s16.8-9.6 22-12.4c5.1-2.8 10.5-7.3 16.4-17.1 7.5-12.6 7.6-28.3 3-37.6z"/><path class="st0" d="M50.8 40.9c1.5-2.5 1.5-5.6.6-7.4-.9-1.8-2.4-2-3.8-1.3-1.1.6-21.9 12.4-21.9 12.4v11.8s20.8-11.6 21.8-12.2c1.1-.5 2.2-1.4 3.3-3.3zM25.8 105.5l11-6.3V87.4l-11 6.3v11.8z"/><g><path class="st1" d="M25.8 32.5l-11-6.4V14.3l11 6.4v11.8zM25.8 56.4l-22-12.6V32l22 12.6v11.8zM25.8 81.1l-5.6-3.2V66.1l5.6 3.2v11.8zM25.8 105.5L9.5 96.1V84.3l16.3 9.4v11.8z"/></g></svg>';function pt(a){let e,t,l,_,n,s,o,d,r;return s=new ut({}),d=new gt({}),{c(){e=E("header"),t=E("div"),l=E("a"),_=S(),n=E("div"),he(s.$$.fragment),o=S(),he(d.$$.fragment),this.h()},l(i){e=w(i,"HEADER",{class:!0});var c=b(e);t=w(c,"DIV",{class:!0});var g=b(t);l=w(g,"A",{href:!0,"aria-label":!0,class:!0});var m=b(l);m.forEach(f),g.forEach(f),_=V(c),n=w(c,"DIV",{class:!0});var I=b(n);ue(s.$$.fragment,I),o=V(I),ue(d.$$.fragment,I),I.forEach(f),c.forEach(f),this.h()},h(){p(l,"href","https://pudding.cool"),p(l,"aria-label","The Pudding"),p(l,"class","svelte-155nnis"),p(t,"class","logo svelte-155nnis"),p(n,"class","links svelte-155nnis"),p(e,"class","svelte-155nnis")},m(i,c){P(i,e,c),u(e,t),u(t,l),l.innerHTML=mt,u(e,_),u(e,n),fe(s,n,null),u(n,o),fe(d,n,null),r=!0},p:B,i(i){r||(ee(s.$$.fragment,i),ee(d.$$.fragment,i),r=!0)},o(i){te(s.$$.fragment,i),te(d.$$.fragment,i),r=!1},d(i){i&&f(e),_e(s),_e(d)}}}class bt extends re{constructor(e){super();se(this,e,null,pt,oe,{})}}function We(a,e,t){const l=a.slice();return l[1]=e[t].name,l[2]=e[t].url,l}function Re(a,e,t){const l=a.slice();return l[1]=e[t].name,l[2]=e[t].url,l[5]=e[t].rel,l}function je(a,e,t){const l=a.slice();return l[8]=e[t].cta,l[2]=e[t].url,l}function qe(a){let e,t=a[8]+"",l,_;return{c(){e=E("a"),l=W(t),this.h()},l(n){e=w(n,"A",{class:!0,href:!0,rel:!0});var s=b(e);l=R(s,t),s.forEach(f),this.h()},h(){p(e,"class","btn"),p(e,"href",_=a[2]),p(e,"rel","external")},m(n,s){P(n,e,s),u(e,l)},p:B,d(n){n&&f(e)}}}function Je(a){let e,t,l,_=a[1].toUpperCase()+"",n,s,o,d;return{c(){e=E("li"),t=E("a"),l=E("span"),n=W(_),d=S(),this.h()},l(r){e=w(r,"LI",{});var i=b(e);t=w(i,"A",{href:!0,rel:!0});var c=b(t);l=w(c,"SPAN",{});var g=b(l);n=R(g,_),g.forEach(f),c.forEach(f),d=V(i),i.forEach(f),this.h()},h(){p(t,"href",s=a[2]),p(t,"rel",o=a[5])},m(r,i){P(r,e,i),u(e,t),u(t,l),u(l,n),u(e,d)},p:B,d(r){r&&f(e)}}}function Ke(a){let e,t,l,_=a[1].toUpperCase()+"",n,s,o;return{c(){e=E("li"),t=E("a"),l=E("span"),n=W(_),o=S(),this.h()},l(d){e=w(d,"LI",{});var r=b(e);t=w(r,"A",{href:!0,rel:!0});var i=b(t);l=w(i,"SPAN",{});var c=b(l);n=R(c,_),c.forEach(f),i.forEach(f),o=V(r),r.forEach(f),this.h()},h(){p(t,"href",s=a[2]),p(t,"rel","external")},m(d,r){P(d,e,r),u(e,t),u(t,l),u(l,n),u(e,o)},p:B,d(d){d&&f(e)}}}function Et(a){let e,t,l,_,n,s=Oe.patreon+"",o,d,r,i,c,g,m,I,M,O,J,$,Q,A,X,G,j=a[0],T=[];for(let y=0;y<j.length;y+=1)T[y]=qe(je(a,j,y));let Z=pe,D=[];for(let y=0;y<Z.length;y+=1)D[y]=Je(Re(a,Z,y));let K=ae,F=[];for(let y=0;y<K.length;y+=1)F[y]=Ke(We(a,K,y));return{c(){e=E("footer"),t=E("section"),l=E("div"),_=S(),n=E("p"),o=W(s),d=S(),r=E("div");for(let y=0;y<T.length;y+=1)T[y].c();i=S(),c=E("section"),g=E("div"),m=E("h4"),I=W("About Us"),M=S(),O=E("ul");for(let y=0;y<D.length;y+=1)D[y].c();J=S(),$=E("div"),Q=E("h4"),A=W("Follow Us"),X=S(),G=E("ul");for(let y=0;y<F.length;y+=1)F[y].c();this.h()},l(y){e=w(y,"FOOTER",{class:!0});var L=b(e);t=w(L,"SECTION",{class:!0});var h=b(t);l=w(h,"DIV",{class:!0});var C=b(l);C.forEach(f),_=V(h),n=w(h,"P",{});var H=b(n);o=R(H,s),H.forEach(f),d=V(h),r=w(h,"DIV",{});var x=b(r);for(let q=0;q<T.length;q+=1)T[q].l(x);x.forEach(f),h.forEach(f),i=V(L),c=w(L,"SECTION",{class:!0});var U=b(c);g=w(U,"DIV",{});var k=b(g);m=w(k,"H4",{});var z=b(m);I=R(z,"About Us"),z.forEach(f),M=V(k),O=w(k,"UL",{class:!0});var v=b(O);for(let q=0;q<D.length;q+=1)D[q].l(v);v.forEach(f),k.forEach(f),J=V(U),$=w(U,"DIV",{});var N=b($);Q=w(N,"H4",{});var ce=b(Q);A=R(ce,"Follow Us"),ce.forEach(f),X=V(N),G=w(N,"UL",{class:!0});var ne=b(G);for(let q=0;q<F.length;q+=1)F[q].l(ne);ne.forEach(f),N.forEach(f),U.forEach(f),L.forEach(f),this.h()},h(){p(l,"class","wordmark svelte-1h4agal"),p(t,"class","about svelte-1h4agal"),p(O,"class","svelte-1h4agal"),p(G,"class","svelte-1h4agal"),p(c,"class","links svelte-1h4agal"),p(e,"class","svelte-1h4agal")},m(y,L){P(y,e,L),u(e,t),u(t,l),l.innerHTML=rt,u(t,_),u(t,n),u(n,o),u(t,d),u(t,r);for(let h=0;h<T.length;h+=1)T[h].m(r,null);u(e,i),u(e,c),u(c,g),u(g,m),u(m,I),u(g,M),u(g,O);for(let h=0;h<D.length;h+=1)D[h].m(O,null);u(c,J),u(c,$),u($,Q),u(Q,A),u($,X),u($,G);for(let h=0;h<F.length;h+=1)F[h].m(G,null)},p(y,[L]){if(L&1){j=y[0];let h;for(h=0;h<j.length;h+=1){const C=je(y,j,h);T[h]?T[h].p(C,L):(T[h]=qe(C),T[h].c(),T[h].m(r,null))}for(;h<T.length;h+=1)T[h].d(1);T.length=j.length}if(L&0){Z=pe;let h;for(h=0;h<Z.length;h+=1){const C=Re(y,Z,h);D[h]?D[h].p(C,L):(D[h]=Je(C),D[h].c(),D[h].m(O,null))}for(;h<D.length;h+=1)D[h].d(1);D.length=Z.length}if(L&0){K=ae;let h;for(h=0;h<K.length;h+=1){const C=We(y,K,h);F[h]?F[h].p(C,L):(F[h]=Ke(C),F[h].c(),F[h].m(G,null))}for(;h<F.length;h+=1)F[h].d(1);F.length=K.length}},i:B,o:B,d(y){y&&f(e),le(T,y),le(D,y),le(F,y)}}}function wt(a){return[ae.filter(t=>t.cta)]}class kt extends re{constructor(e){super();se(this,e,wt,Et,oe,{})}}function yt(a){let e,t,l,_,n,s;e=new bt({});const o=a[1].default,d=tt(o,a,a[0],null);return n=new kt({}),{c(){he(e.$$.fragment),t=S(),l=E("main"),d&&d.c(),_=S(),he(n.$$.fragment),this.h()},l(r){ue(e.$$.fragment,r),t=V(r),l=w(r,"MAIN",{id:!0});var i=b(l);d&&d.l(i),i.forEach(f),_=V(r),ue(n.$$.fragment,r),this.h()},h(){p(l,"id","content")},m(r,i){fe(e,r,i),P(r,t,i),P(r,l,i),d&&d.m(l,null),P(r,_,i),fe(n,r,i),s=!0},p(r,[i]){d&&d.p&&(!s||i&1)&&lt(d,o,r,r[0],s?nt(o,r[0],i,null):at(r[0]),null)},i(r){s||(ee(e.$$.fragment,r),ee(d,r),ee(n.$$.fragment,r),s=!0)},o(r){te(e.$$.fragment,r),te(d,r),te(n.$$.fragment,r),s=!1},d(r){_e(e,r),r&&f(t),r&&f(l),d&&d.d(r),r&&f(_),_e(n,r)}}}function At(a,e,t){let{$$slots:l={},$$scope:_}=e;return a.$$set=n=>{"$$scope"in n&&t(0,_=n.$$scope)},[_,l]}class St extends re{constructor(e){super();se(this,e,At,yt,oe,{})}}export{St as default};

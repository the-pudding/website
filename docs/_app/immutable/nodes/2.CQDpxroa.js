import{a as A,t as C}from"../chunks/disclose-version.B6U6Qg9F.js";import{ab as Y,r as q,h as E,m as L,ac as I,t as U,o as P,w as x,x as _,l as a,g as n,y as $,s as d,j as c,ad as D,k as J}from"../chunks/index-client.Br0fZ5fH.js";import{M as K}from"../chunks/Meta.C_DoJjiR.js";import{d as N,e as G}from"../chunks/props.C2gVJaBR.js";import{r as Q}from"../chunks/attributes.Bkhssghn.js";import{t as X}from"../chunks/Story.DJ_wyz2J.js";import{l as Z,F as ee}from"../chunks/Filters.Cf_LdLWY.js";import"../chunks/transform.BXP9HJX6.js";import{S as se}from"../chunks/Stories.CX8O8ql2.js";import{d as te}from"../chunks/descending.BO6OmMcj.js";function oe(e,t,o=t){var r=Y();Z(e,"input",()=>{var s=W(e)?H(e.value):e.value;o(s),r&&s!==(s=t())&&(e.value=s??"")}),q(()=>{var s=t();if(E&&e.defaultValue!==e.value){o(e.value);return}W(e)&&s===H(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function W(e){var t=e.type;return t==="number"||t==="range"}function H(e){return e===""?null:+e}function ae(e,t,o){x(t,G(o.length))}var re=C('<div class="c"><div class="ui column-wide svelte-1yrx6ab"><div class="search svelte-1yrx6ab"><img class="icon svelte-1yrx6ab" src="assets/stickers/search@2x.png" aria-hidden="true" alt=""> <input type="text" placeholder="Find a story" class="svelte-1yrx6ab"></div> <div class="filters"><!></div></div> <!> <div class="more svelte-1yrx6ab"><button class="svelte-1yrx6ab">Load More Stories</button></div></div>');function ie(e,t){L(t,!0);const o=27;let r=_(o);const{stories:s,staff:p,copy:f}=I("Home"),m=["Our Faves","Popular","Updating","Your Input","Video","Audio"];let h=_(""),u=_(void 0),V=$(()=>{const i=a(h).toLowerCase(),M=s.filter(l=>{const O=[l.short,l.tease].join(" ").toLowerCase().includes(i),R=a(u)?l.filters.includes(a(u)):!0;return O&&R});M.sort((l,T)=>te(l.id,T.id));const v=M.slice(0,a(r));return v.splice(7,0,{component:"Subscribe",slug:"Subscribe"}),v.splice(15,0,{component:"Faves",slug:"Faves"}),v.splice(26,0,{component:"Merch",slug:"Merch"}),v});var g=re(),b=n(g),y=n(b),k=d(n(y),2);Q(k),c(y);var F=d(y,2),z=n(F);ee(z,{filters:m,get activeFilter(){return a(u)},set activeFilter(i){x(u,G(i))}}),c(F),c(b);var S=d(b,2);se(S,{get stories(){return a(V)}});var w=d(S,2),B=n(w);B.__click=[ae,r,s],c(w),c(g),U(()=>X(w,"visible",o===a(r))),oe(k,()=>a(h),i=>x(h,i)),A(e,g),P()}N(["click"]);function le(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 6.3.1"),console.log("build: 2024-11-26-14:02"),console.log("--- --- --- --- --- ---")}const ne="The Pudding",ce="The Pudding explains ideas debated in culture with visual essays.",de={text:"What’s behind our name?",link:"https://www.npr.org/2012/08/24/159975466/corrections-and-comments-to-stories"},ue="is a digital publication that <del>explains ideas debated in culture with visual essays</del>",ve="You might have seen our story on [popular], but we’ve also made stuff about [popular] and [popular].",pe="Some of my favorite projects are about [personal], [personal], and [personal].",fe="So, welcome to The Pudding. Get  cozy, you could be here a while. Explore all of our stories below.",me="Our Stories",he=["explains ideas with visual essays","makes cool shit on the internet","makes awesome stories with data","brings you longform data journalism","creates visual essays with data","is the best internet rabbit hole","brings hot takes with cool viz","makes you fall in love with data"],j={title:ne,description:ce,promo:de,tagline:ue,popular:ve,personal:pe,welcome:fe,storiesHed:me,taglines:he};var ge=C("<!> <!>",1);function We(e,t){L(t,!0),le();const o=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2","https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2","https://pudding.cool/assets/fonts/atlas/AtlasTypewriter-Medium-Web.woff2"],{stories:r,staff:s}=t.data;D("Home",{stories:r,copy:j,staff:s});var p=ge(),f=J(p);K(f,{copy:j,preloadFont:o});var m=d(f,2);ie(m,{}),A(e,p),P()}export{We as component};

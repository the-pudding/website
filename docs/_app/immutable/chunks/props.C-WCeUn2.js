import{S as x,ae as be,af as ye,Q as S,ag as ge,o as E,ah as L,ai as y,k as T,K as C,aj as pe,a1 as we,B as se,ak as fe,q as Ee,al as V,am as F,aa as Te,an as J,x as ue,b as le,ao as Re,h as P,ap as oe,Y as U,F as m,z as H,c as I,V as de,aq as W,_ as K,A as ce,W as Pe,Z as Se,ar as me,T as Ie,C as Oe,as as Ae,a as $,p as De,l as Ne,at as Le,G as ee,I as re,E as Ce,H as Fe,D as je,n as z,u as G,P as _e,au as qe,av as Be,aw as Ye,ax as xe,ay as He,az as Me,aA as Ve,aB as ke,aC as Ke,w as te,aD as Ue,aE as We,aF as $e,aG as B}from"./index-client.DZE9jS3f.js";import{d as ze}from"./disclose-version.-DYHpAVl.js";function N(e,r=null,n){if(typeof e!="object"||e===null||x in e)return e;const t=we(e);if(t!==be&&t!==ye)return e;var s=new Map,a=se(e),c=S(0);a&&s.set("length",S(e.length));var _;return new Proxy(e,{defineProperty(o,i,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ge();var u=s.get(i);return u===void 0?(u=S(f.value),s.set(i,u)):E(u,N(f.value,_)),!0},deleteProperty(o,i){var f=s.get(i);if(f===void 0)i in o&&s.set(i,S(y));else{if(a&&typeof i=="string"){var u=s.get("length"),l=Number(i);Number.isInteger(l)&&l<u.v&&E(u,l)}E(f,y),ne(c)}return!0},get(o,i,f){var v;if(i===x)return e;var u=s.get(i),l=i in o;if(u===void 0&&(!l||(v=L(o,i))!=null&&v.writable)&&(u=S(N(l?o[i]:y,_)),s.set(i,u)),u!==void 0){var d=T(u);return d===y?void 0:d}return Reflect.get(o,i,f)},getOwnPropertyDescriptor(o,i){var f=Reflect.getOwnPropertyDescriptor(o,i);if(f&&"value"in f){var u=s.get(i);u&&(f.value=T(u))}else if(f===void 0){var l=s.get(i),d=l==null?void 0:l.v;if(l!==void 0&&d!==y)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(o,i){var d;if(i===x)return!0;var f=s.get(i),u=f!==void 0&&f.v!==y||Reflect.has(o,i);if(f!==void 0||C!==null&&(!u||(d=L(o,i))!=null&&d.writable)){f===void 0&&(f=S(u?N(o[i],_):y),s.set(i,f));var l=T(f);if(l===y)return!1}return u},set(o,i,f,u){var w;var l=s.get(i),d=i in o;if(a&&i==="length")for(var v=f;v<l.v;v+=1){var h=s.get(v+"");h!==void 0?E(h,y):v in o&&(h=S(y),s.set(v+"",h))}l===void 0?(!d||(w=L(o,i))!=null&&w.writable)&&(l=S(void 0),E(l,N(f,_)),s.set(i,l)):(d=l.v!==y,E(l,N(f,_)));var R=Reflect.getOwnPropertyDescriptor(o,i);if(R!=null&&R.set&&R.set.call(u,f),!d){if(a&&typeof i=="string"){var O=s.get("length"),p=Number(i);Number.isInteger(p)&&p>=O.v&&E(O,p+1)}ne(c)}return!0},ownKeys(o){T(c);var i=Reflect.ownKeys(o).filter(l=>{var d=s.get(l);return d===void 0||d.v!==y});for(var[f,u]of s)u.v!==y&&!(f in o)&&i.push(f);return i},setPrototypeOf(){pe()}})}function ne(e,r=1){E(e,e.v+r)}function ae(e){return e!==null&&typeof e=="object"&&x in e?e[x]:e}function ir(e,r){return Object.is(ae(e),ae(r))}const ve=new Set,Z=new Set;function Ge(e,r,n,t){function s(a){if(t.capture||Y.call(r,a),!a.cancelBubble){var c=J,_=C;V(null),F(null);try{return n.call(this,a)}finally{V(c),F(_)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ee(()=>{r.addEventListener(e,s,t)}):r.addEventListener(e,s,t),s}function sr(e,r,n,t,s){var a={capture:t,passive:s},c=Ge(e,r,n,a);(r===document.body||r===window||r===document)&&fe(()=>{r.removeEventListener(e,c,a)})}function fr(e){for(var r=0;r<e.length;r++)ve.add(e[r]);for(var n of Z)n(e)}function Y(e){var p;var r=this,n=r.ownerDocument,t=e.type,s=((p=e.composedPath)==null?void 0:p.call(e))||[],a=s[0]||e.target,c=0,_=e.__root;if(_){var o=s.indexOf(_);if(o!==-1&&(r===document||r===window)){e.__root=r;return}var i=s.indexOf(r);if(i===-1)return;o<=i&&(c=o)}if(a=s[c]||e.target,a!==r){Te(e,"currentTarget",{configurable:!0,get(){return a||n}});var f=J,u=C;V(null),F(null);try{for(var l,d=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+t];if(h!==void 0&&!a.disabled)if(se(h)){var[R,...O]=h;R.apply(a,[e,...O])}else h.call(a,e)}catch(w){l?d.push(w):l=w}if(e.cancelBubble||v===r||v===null)break;a=v}if(l){for(let w of d)queueMicrotask(()=>{throw w});throw l}}finally{e.__root=r,delete e.currentTarget,V(f),F(u)}}}let g;function Ze(){g=void 0}function ur(e){let r=null,n=P;var t;if(P){for(r=I,g===void 0&&(g=de(document.head));g!==null&&(g.nodeType!==8||g.data!==oe);)g=U(g);g===null?m(!1):g=H(U(g))}P||(t=document.head.appendChild(ue()));try{le(()=>e(t),Re)}finally{n&&(m(!0),g=I,H(r))}}const Qe=["touchstart","touchmove"];function Je(e){return Qe.includes(e)}function lr(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function Xe(e,r){return he(e,r)}function or(e,r){W(),r.intro=r.intro??!1;const n=r.target,t=P,s=I;try{for(var a=de(n);a&&(a.nodeType!==8||a.data!==oe);)a=U(a);if(!a)throw K;m(!0),H(a),ce();const c=he(e,{...r,anchor:a});if(I===null||I.nodeType!==8||I.data!==Pe)throw Se(),K;return m(!1),c}catch(c){if(c===K)return r.recover===!1&&me(),W(),Ie(n),m(!1),Xe(e,r);throw c}finally{m(t),H(s),Ze()}}const D=new Map;function he(e,{target:r,anchor:n,props:t={},events:s,context:a,intro:c=!0}){W();var _=new Set,o=u=>{for(var l=0;l<u.length;l++){var d=u[l];if(!_.has(d)){_.add(d);var v=Je(d);r.addEventListener(d,Y,{passive:v});var h=D.get(d);h===void 0?(document.addEventListener(d,Y,{passive:v}),D.set(d,1)):D.set(d,h+1)}}};o(Oe(ve)),Z.add(o);var i=void 0,f=Ae(()=>{var u=n??r.appendChild(ue());return $(()=>{if(a){De({});var l=Le;l.c=a}s&&(t.$$events=s),P&&ze(u,null),i=e(u,t)||{},P&&(C.nodes_end=I),a&&Ne()}),()=>{var v;for(var l of _){r.removeEventListener(l,Y);var d=D.get(l);--d===0?(document.removeEventListener(l,Y),D.delete(l)):D.set(l,d)}Z.delete(o),Q.delete(i),u!==n&&((v=u.parentNode)==null||v.removeChild(u))}});return Q.set(i,f),i}let Q=new WeakMap;function dr(e){const r=Q.get(e);r&&r()}function cr(e,r,n,t=null,s=!1){P&&ce();var a=e,c=null,_=null,o=null,i=s?Ce:0;le(()=>{if(o===(o=!!r()))return;let f=!1;if(P){const u=a.data===Fe;o===u&&(a=je(),H(a),m(!1),f=!0)}o?(c?ee(c):c=$(()=>n(a)),_&&re(_,()=>{_=null})):(_?ee(_):t&&(_=$(()=>t(a))),c&&re(c,()=>{c=null})),f&&m(!0)},i),P&&(a=I)}function er(e,r,n){if(e==null)return r(void 0),z;const t=G(()=>e.subscribe(r,n));return t.unsubscribe?()=>t.unsubscribe():t}let M=!1;function _r(e,r,n){const t=n[r]??(n[r]={store:null,source:_e(void 0),unsubscribe:z});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=z;else{var s=!0;t.unsubscribe=er(e,a=>{s?t.source.v=a:E(t.source,a)}),s=!1}return T(t.source)}function vr(){const e={};return fe(()=>{for(var r in e)e[r].unsubscribe()}),e}function rr(e){var r=M;try{return M=!1,[e(),M]}finally{M=r}}const tr={get(e,r){let n=e.props.length;for(;n--;){let t=e.props[n];if(B(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t)return t[r]}},set(e,r,n){let t=e.props.length;for(;t--;){let s=e.props[t];B(s)&&(s=s());const a=L(s,r);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let t=e.props[n];if(B(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t){const s=L(t,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){for(let n of e.props)if(B(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){B(n)&&(n=n());for(const t in n)r.includes(t)||r.push(t)}return r}};function hr(...e){return new Proxy({props:e},tr)}function ie(e){for(var r=C,n=C;r!==null&&!(r.f&(He|Me));)r=r.parent;try{return F(r),e()}finally{F(n)}}function br(e,r,n,t){var X;var s=(n&Ve)!==0,a=(n&ke)!==0,c=(n&Ke)!==0,_=(n&$e)!==0,o=!1,i;c?[i,o]=rr(()=>e[r]):i=e[r];var f=(X=L(e,r))==null?void 0:X.set,u=t,l=!0,d=!1,v=()=>(d=!0,l&&(l=!1,_?u=G(t):u=t),u);i===void 0&&t!==void 0&&(f&&a&&qe(),i=v(),f&&f(i));var h;if(a)h=()=>{var b=e[r];return b===void 0?v():(l=!0,d=!1,b)};else{var R=ie(()=>(s?te:Ue)(()=>e[r]));R.f|=Be,h=()=>{var b=T(R);return b!==void 0&&(u=void 0),b===void 0?u:b}}if(!(n&Ye))return h;if(f){var O=e.$$legacy;return function(b,A){return arguments.length>0?((!a||!A||O||o)&&f(A?h():b),b):h()}}var p=!1,w=!1,k=_e(i),j=ie(()=>te(()=>{var b=h(),A=T(k),q=J;return p||b===void 0&&q.f&We?(p=!1,w=!0,A):(w=!1,k.v=b)}));return s||(j.equals=xe),function(b,A){if(arguments.length>0){const q=A?T(j):a&&c?N(b):b;return j.equals(q)||(p=!0,E(k,q),d&&u!==void 0&&(u=q),G(()=>T(j))),b}return T(j)}}export{vr as a,_r as b,lr as c,ir as d,fr as e,N as f,sr as g,ur as h,cr as i,or as j,Xe as m,br as p,hr as s,dr as u};
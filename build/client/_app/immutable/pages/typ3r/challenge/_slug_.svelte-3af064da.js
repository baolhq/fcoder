import{S as $,i as k,s as C,Z as v,a as y,e as f,V as w,h as i,c as S,b as m,_ as B,f as u,t as p,K as E,E as c,l as q,w as _,m as D,n as F,x as h,p as T,y as d,B as g}from"../../../chunks/index-94d693ab.js";import{p as V}from"../../../chunks/stores-3bbf04d8.js";import{b as x}from"../../../chunks/db-4e1443a1.js";import{S as I}from"../../../chunks/Spinner-c339ff2c.js";import{T as K}from"../../../chunks/TypingBox-d68bb410.js";import"../../../chunks/index-b74a06b3.js";/* empty css                                                            */import"../../../chunks/navigation-88dbfef8.js";import"../../../chunks/singletons-cdeec3fd.js";import"../../../chunks/store-87ee3f59.js";import"../../../chunks/index-1ec7f5d9.js";function N(s){return{c,l:c,m:c,p:c,i:c,o:c,d:c}}function U(s){let t,n,e;return n=new K({props:{sample:s[2].content,isChallenge:!0,title:s[2].title}}),{c(){t=q("div"),_(n.$$.fragment),this.h()},l(a){t=D(a,"DIV",{class:!0});var l=F(t);h(n.$$.fragment,l),l.forEach(i),this.h()},h(){T(t,"class","container")},m(a,l){m(a,t,l),d(n,t,null),e=!0},p:c,i(a){e||(u(n.$$.fragment,a),e=!0)},o(a){p(n.$$.fragment,a),e=!1},d(a){a&&i(t),g(n)}}}function Z(s){let t,n;return t=new I({}),{c(){_(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p:c,i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function j(s){let t,n,e,a;document.title=t="Challenge "+s[0]+" - FCoder";let l={ctx:s,current:null,token:null,hasCatch:!1,pending:Z,then:U,catch:N,value:2,blocks:[,,,]};return v(s[1](),l),{c(){n=y(),e=f(),l.block.c()},l(o){w('[data-svelte="svelte-vylsw6"]',document.head).forEach(i),n=S(o),e=f(),l.block.l(o)},m(o,r){m(o,n,r),m(o,e,r),l.block.m(o,l.anchor=r),l.mount=()=>e.parentNode,l.anchor=e,a=!0},p(o,[r]){s=o,(!a||r&1)&&t!==(t="Challenge "+s[0]+" - FCoder")&&(document.title=t),B(l,s,r)},i(o){a||(u(l.block),a=!0)},o(o){for(let r=0;r<3;r+=1){const b=l.blocks[r];p(b)}a=!1},d(o){o&&i(n),o&&i(e),l.block.d(o),l.token=null,l=null}}}function z(s,t,n){let e;E(s,V,r=>n(3,e=r));let a="",l;return[a,async()=>{let r=await x(e.params.slug);return n(0,a=r.title),r},l]}class X extends ${constructor(t){super(),k(this,t,z,j,C,{})}}export{X as default};

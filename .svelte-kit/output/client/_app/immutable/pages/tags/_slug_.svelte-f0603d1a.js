import{S as w,i as B,s as v,Z as y,a as C,e as p,V as E,h as _,c as T,b as m,_ as q,f,t as h,K as D,E as i,g as N,d as S,a0 as F,w as K,x as U,y as V,B as Z}from"../../chunks/index-94d693ab.js";import{B as j}from"../../chunks/BlogCard-758185d6.js";import{p as x}from"../../chunks/stores-3bbf04d8.js";import{a as z}from"../../chunks/db-4e1443a1.js";import"../../chunks/index-b74a06b3.js";function b(r,n,c){const o=r.slice();return o[5]=n[c],o}function A(r){return{c:i,l:i,m:i,p:i,i,o:i,d:i}}function G(r){let n,c,o=r[4],l=[];for(let e=0;e<o.length;e+=1)l[e]=k(b(r,o,e));const s=e=>h(l[e],1,1,()=>{l[e]=null});return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=p()},l(e){for(let t=0;t<l.length;t+=1)l[t].l(e);n=p()},m(e,t){for(let a=0;a<l.length;a+=1)l[a].m(e,t);m(e,n,t),c=!0},p(e,t){if(t&2){o=e[4];let a;for(a=0;a<o.length;a+=1){const u=b(e,o,a);l[a]?(l[a].p(u,t),f(l[a],1)):(l[a]=k(u),l[a].c(),f(l[a],1),l[a].m(n.parentNode,n))}for(N(),a=o.length;a<l.length;a+=1)s(a);S()}},i(e){if(!c){for(let t=0;t<o.length;t+=1)f(l[t]);c=!0}},o(e){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)h(l[t]);c=!1},d(e){F(l,e),e&&_(n)}}}function k(r){let n,c;return n=new j({props:{slug:r[5].slug,title:r[5].title}}),{c(){K(n.$$.fragment)},l(o){U(n.$$.fragment,o)},m(o,l){V(n,o,l),c=!0},p:i,i(o){c||(f(n.$$.fragment,o),c=!0)},o(o){h(n.$$.fragment,o),c=!1},d(o){Z(n,o)}}}function H(r){return{c:i,l:i,m:i,p:i,i,o:i,d:i}}function I(r){let n,c,o,l;document.title=n='Tagged with "'+r[0]+'" - FCoder';let s={ctx:r,current:null,token:null,hasCatch:!1,pending:H,then:G,catch:A,value:4,blocks:[,,,]};return y(r[1](),s),{c(){c=C(),o=p(),s.block.c()},l(e){E('[data-svelte="svelte-1drwb0l"]',document.head).forEach(_),c=T(e),o=p(),s.block.l(e)},m(e,t){m(e,c,t),m(e,o,t),s.block.m(e,s.anchor=t),s.mount=()=>o.parentNode,s.anchor=o,l=!0},p(e,[t]){r=e,(!l||t&1)&&n!==(n='Tagged with "'+r[0]+'" - FCoder')&&(document.title=n),q(s,r,t)},i(e){l||(f(s.block),l=!0)},o(e){for(let t=0;t<3;t+=1){const a=s.blocks[t];h(a)}l=!1},d(e){e&&_(c),e&&_(o),s.block.d(e),s.token=null,s=null}}}function J(r,n,c){let o;D(r,x,t=>c(2,o=t));let l=o.params.slug;const s=async()=>{let t=await z();return e(l,t)},e=(t,a)=>{if(!t)return a;let u=[];return a.forEach(d=>{let g=!1;d.tags.forEach($=>{$===t&&(g=!0)}),g&&u.push(d)}),u};return[l,s]}class R extends w{constructor(n){super(),B(this,n,J,I,v,{})}}export{R as default};

import{S as D,i as U,s as I,e as k,c as b,a as v,d as m,b as h,f as B,g as M,n as a,t as V,h as L,F as f,j as F,K as Y,L as H,k as C,m as Q,M as K,r as $,p as w,x as N,y as j,z as P,C as x}from"../chunks/index-2908ee93.js";function A(r){let e;return{c(){e=k("div"),this.h()},l(n){e=b(n,"DIV",{id:!0,style:!0,class:!0}),v(e).forEach(m),this.h()},h(){h(e,"id","mask"),B(e,"background-image","url('"+r[0]+"')"),h(e,"class","mask")},m(n,t){M(n,e,t)},p(n,[t]){t&1&&B(e,"background-image","url('"+n[0]+"')")},i:a,o:a,d(n){n&&m(e)}}}function G(r,e,n){let{dogPictureUrl:t}=e;return r.$$set=o=>{"dogPictureUrl"in o&&n(0,t=o.dogPictureUrl)},[t]}class O extends D{constructor(e){super(),U(this,e,G,A,I,{dogPictureUrl:0})}}function J(r){let e,n;return{c(){e=k("h2"),n=V(r[1]),this.h()},l(t){e=b(t,"H2",{id:!0,class:!0});var o=v(e);n=L(o,r[1]),o.forEach(m),this.h()},h(){h(e,"id","quote"),h(e,"class","quote svelte-2lvytl")},m(t,o){M(t,e,o),f(e,n),r[2](e)},p(t,[o]){o&2&&F(n,t[1])},i:a,o:a,d(t){t&&m(e),r[2](null)}}}function X(r,e,n){let{quote:t}=e,{quoteElement:o}=e;function u(l){Y[l?"unshift":"push"](()=>{o=l,n(0,o)})}return r.$$set=l=>{"quote"in l&&n(1,t=l.quote),"quoteElement"in l&&n(0,o=l.quoteElement)},[o,t,u]}class W extends D{constructor(e){super(),U(this,e,X,J,I,{quote:1,quoteElement:0})}}const T=async r=>{const e=await fetch(r,{});if(e.ok)return await e.json()};function Z(r){return{c:a,l:a,m:a,p:a,i:a,o:a,d:a}}function ee(r){let e,n;return e=new O({props:{dogPictureUrl:r[6]}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p:a,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function te(r){let e,n;return e=new O({props:{dogPictureUrl:"https://images.dog.ceo/breeds/bulldog-french/n02108915_38.jpg"}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p:a,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function ne(r){return{c:a,l:a,m:a,p:a,i:a,o:a,d:a}}function re(r){let e,n;return e=new W({props:{quoteElement:r[1],quote:r[6]}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p:a,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function oe(r){let e,n;return e=new W({props:{quoteElement:r[1],quote:"Wait for quote..."}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p:a,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function ae(r){let e,n,t,o,u,l,y,g,_,z,E,c={ctx:r,current:null,token:null,hasCatch:!1,pending:te,then:ee,catch:Z,value:6,blocks:[,,,]};H(r[2],c);let i={ctx:r,current:null,token:null,hasCatch:!1,pending:oe,then:re,catch:ne,value:6,blocks:[,,,]};return H(r[3],i),{c(){e=k("section"),n=k("div"),t=k("div"),c.block.c(),o=C(),u=k("h1"),l=V(r[0]),y=C(),g=k("div"),_=V("..."),z=C(),i.block.c(),this.h()},l(d){e=b(d,"SECTION",{class:!0});var s=v(e);n=b(s,"DIV",{class:!0});var q=v(n);t=b(q,"DIV",{class:!0});var p=v(t);c.block.l(p),o=Q(p),u=b(p,"H1",{class:!0});var R=v(u);l=L(R,r[0]),R.forEach(m),y=Q(p),g=b(p,"DIV",{class:!0});var S=v(g);_=L(S,"..."),S.forEach(m),z=Q(p),i.block.l(p),p.forEach(m),q.forEach(m),s.forEach(m),this.h()},h(){h(u,"class","name svelte-eswchk"),h(g,"class","separator svelte-eswchk"),h(t,"class","info svelte-eswchk"),h(n,"class","container"),h(e,"class","hello_section svelte-eswchk")},m(d,s){M(d,e,s),f(e,n),f(n,t),c.block.m(t,c.anchor=null),c.mount=()=>t,c.anchor=o,f(t,o),f(t,u),f(u,l),f(t,y),f(t,g),f(g,_),f(t,z),i.block.m(t,i.anchor=null),i.mount=()=>t,i.anchor=null,E=!0},p(d,[s]){r=d,K(c,r,s),(!E||s&1)&&F(l,r[0]),K(i,r,s)},i(d){E||($(c.block),$(i.block),E=!0)},o(d){for(let s=0;s<3;s+=1){const q=c.blocks[s];w(q)}for(let s=0;s<3;s+=1){const q=i.blocks[s];w(q)}E=!1},d(d){d&&m(e),c.block.d(),c.token=null,c=null,i.block.d(),i.token=null,i=null}}}function se(r,e,n){let{headerName:t}=e,o;const u=async()=>(await T(new URL("https://favqs.com/api/qotd"))).quote.body,l=async()=>(await T(new URL("https://random.dog/woof.json"))).url;let y=l(),g=u();return r.$$set=_=>{"headerName"in _&&n(0,t=_.headerName)},[t,o,y,g,u,l]}class le extends D{constructor(e){super(),U(this,e,se,ae,I,{headerName:0,getNewQuote:4,getNewDogPicture:5})}get getNewQuote(){return this.$$.ctx[4]}get getNewDogPicture(){return this.$$.ctx[5]}}function ce(r){let e,n;return e=new le({props:{headerName:"Yan Kozyrenko"}}),{c(){N(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p:a,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}const ue=!0;class fe extends D{constructor(e){super(),U(this,e,null,ce,I,{})}}export{fe as default,ue as prerender};

(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return 0===Object.keys(t).length}new Set;let c,i=!1;function a(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function u(t,e){i?(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const l=a(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[l]+1;const s=l+1;n[s]=t,r=Math.max(s,r)}const l=[],s=[];let c=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(l.push(e[t-1]);c>=t;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);l.reverse(),s.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<s.length;e++){for(;n<l.length&&s[e].claim_order>=l[n].claim_order;)n++;const o=n<l.length?l[n]:null;t.insertBefore(s[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function d(t,e,n){i&&!n?u(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function $(){return t=" ",document.createTextNode(t);var t}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){c=t}new Set;const g=[],_=[],b=[],y=[],w=Promise.resolve();let x=!1;function v(t){b.push(t)}let k=!1;const C=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];m(e),A(e.$$)}for(m(null),g.length=0;_.length;)_.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while(g.length);for(;y.length;)y.pop()();x=!1,k=!1,C.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const M=new Set;let S;function N(t,e){t&&t.i&&(M.delete(t),t.i(e))}function T(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),undefined.c.push((()=>{M.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function B(t){t&&t.c()}function P(t,n,l,s){const{fragment:c,on_mount:i,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,l),s||v((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(v)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(e,r,l,s,a,u,d=[-1]){const h=c;m(e);const $=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:r.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let p=!1;if($.ctx=l?l(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&a($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,w.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],$.update(),p=!0,o($.before_update),$.fragment=!!s&&s($.ctx),r.target){if(r.hydrate){i=!0;const t=(_=r.target,Array.from(_.childNodes));$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();r.intro&&N(e.$$.fragment),P(e,r.target,r.anchor,r.customElement),i=!1,E()}var _;m(h)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(S=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class j{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n;return{c(){n=h("div"),n.innerHTML='<h1 id="username" class="logo svelte-1at8n13">AM2i9</h1> \n\t<hr id="seperator" class="logo svelte-1at8n13"/> \n\t<h2 id="full-name" class="logo svelte-1at8n13">Patrick Brennan</h2> \n\t<img src="https://github.com/AM2i9.png" alt="Current Github Profile Picture" class="svelte-1at8n13"/>',p(n,"class","logo svelte-1at8n13")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}const H=class extends j{constructor(t){super(),O(this,t,null,q,l,{})}};function G(e){let n,o,r;return{c(){n=h("a"),o=h("img"),o.src!==(r=e[1])&&p(o,"src",r),p(o,"alt",e[0]),p(o,"class","svelte-tcc5ov"),p(n,"href",e[2]),p(n,"target","_blank"),p(n,"rel","noopener noreferrer")},m(t,e){d(t,n,e),u(n,o)},p(t,[e]){2&e&&o.src!==(r=t[1])&&p(o,"src",r),1&e&&p(o,"alt",t[0]),4&e&&p(n,"href",t[2])},i:t,o:t,d(t){t&&f(n)}}}function I(t,e,n){let{alt:o}=e,{src:r}=e,{href:l}=e;return t.$$set=t=>{"alt"in t&&n(0,o=t.alt),"src"in t&&n(1,r=t.src),"href"in t&&n(2,l=t.href)},[o,r,l]}const Q=class extends j{constructor(t){super(),O(this,t,I,G,l,{alt:0,src:1,href:2})}};function R(e){let n,o,r,l,s;return o=new Q({props:{alt:"Github",src:"/assets/github-logo.png",href:"https://github.com/am2i9"}}),l=new Q({props:{alt:"YouTube",src:"/assets/youtube-logo.png",href:"https://www.youtube.com/channel/UCfLCmE1BPuZm_xX3hxRMNdQ"}}),{c(){n=h("div"),B(o.$$.fragment),r=$(),B(l.$$.fragment),p(n,"class","media-links svelte-ydl4l2")},m(t,e){d(t,n,e),P(o,n,null),u(n,r),P(l,n,null),s=!0},p:t,i(t){s||(N(o.$$.fragment,t),N(l.$$.fragment,t),s=!0)},o(t){T(o.$$.fragment,t),T(l.$$.fragment,t),s=!1},d(t){t&&f(n),L(o),L(l)}}}const U=class extends j{constructor(t){super(),O(this,t,null,R,l,{})}};function X(e){let n,o,r,l,s;return o=new H({}),l=new U({}),{c(){n=h("main"),B(o.$$.fragment),r=$(),B(l.$$.fragment)},m(t,e){d(t,n,e),P(o,n,null),u(n,r),P(l,n,null),s=!0},p:t,i(t){s||(N(o.$$.fragment,t),N(l.$$.fragment,t),s=!0)},o(t){T(o.$$.fragment,t),T(l.$$.fragment,t),s=!1},d(t){t&&f(n),L(o),L(l)}}}new class extends j{constructor(t){super(),O(this,t,null,X,l,{})}}({target:document.body})})();
import{a4 as $,a5 as D,a6 as x,a as L,f as N,a7 as z,a8 as R,a9 as I,aa as C,B as O,ab as H,d as y,ac as U,ad as F,r as W,D as T,o as G,i as Z,x as J,k as j}from"./ZGgCcq_-.js";async function Q(e,t){return await V(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function V(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};t(s)},r.onerror=s=>i(s),r.src=e})}function M(e){return t=>t?e[t]||t:e.missingValue}function Y({formatter:e,keyMap:t,joinWith:i="/",valueMap:r}={}){e||(e=(n,o)=>`${n}=${o}`),t&&typeof t!="function"&&(t=M(t));const s=r||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=M(s[n]))}),(n={})=>Object.entries(n).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const l=s[a];return typeof l=="function"&&(d=l(n[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(i)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function X(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const r=Number.parseInt(i.replace("x",""));r&&t.add(r)}return Array.from(t)}function K(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ee(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function te(e){const t={options:e},i=(s,n={})=>E(t,s,n),r=(s,n={},o={})=>i(s,{...o,modifiers:N(n,o.modifiers||{})}).url;for(const s in e.presets)r[s]=(n,o,a)=>r(n,o,{...e.presets[s],...a});return r.options=e,r.getImage=i,r.getMeta=(s,n)=>re(t,s,n),r.getSizes=(s,n)=>ne(t,s,n),t.$img=r,r}async function re(e,t,i){const r=E(e,t,{...i});return typeof r.getMeta=="function"?await r.getMeta():await Q(e,r.url)}function E(e,t,i){var l,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:r,defaults:s}=ie(e,i.provider||e.options.provider),n=se(e,i.preset);if(t=$(t)?t:D(t),!r.supportsAlias){for(const g in e.options.alias)if(t.startsWith(g)){const h=e.options.alias[g];h&&(t=x(h,t.slice(g.length)))}}if(r.validateDomains&&$(t)){const g=L(t).host;if(!e.options.domains.find(h=>h===g))return{url:t}}const o=N(i,n,s);o.modifiers={...o.modifiers};const a=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=v(o.modifiers.width)),(u=o.modifiers)!=null&&u.height&&(o.modifiers.height=v(o.modifiers.height));const d=r.getImage(t,o,e);return d.format=d.format||a||"",d}function ie(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function se(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ne(e,t,i){var _,q,b,c,m;const r=v((_=i.modifiers)==null?void 0:_.width),s=v((q=i.modifiers)==null?void 0:q.height),n=ee(i.sizes),o=(b=i.densities)!=null&&b.trim()?X(i.densities.trim()):e.options.densities;K(o);const a=r&&s?s/r:0,d=[],l=[];if(Object.keys(n).length>=1){for(const f in n){const p=A(f,String(n[f]),s,a,e);if(p!==void 0){d.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const w of o)l.push({width:p._cWidth*w,src:P(e,t,i,p,w)})}}oe(d)}else for(const f of o){const p=Object.keys(n)[0];let w=p?A(p,String(n[p]),s,a,e):void 0;w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(c=i.modifiers)==null?void 0:c.width,_cHeight:(m=i.modifiers)==null?void 0:m.height}),l.push({width:f,src:P(e,t,i,w,f)})}ae(l);const u=l[l.length-1],g=d.length?d.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,h=g?"w":"x",S=l.map(f=>`${f.src} ${f.width}${h}`).join(", ");return{sizes:g,srcset:S,src:u==null?void 0:u.src}}function A(e,t,i,r,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!n||!a)return;o&&(a=Math.round(a/100*n));const d=r?Math.round(a*r):i;return{size:t,screenMaxWidth:n,_cWidth:a,_cHeight:d}}function P(e,t,i,r,s){return e.$img(t,{...i.modifiers,width:r._cWidth?r._cWidth*s:void 0,height:r._cHeight?r._cHeight*s:void 0},i)}function oe(e){var i;e.sort((r,s)=>r.screenMaxWidth-s.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const s=e[r];s.media===t&&e.splice(r,1),t=s.media}for(let r=0;r<e.length;r++)e[r].media=((i=e[r+1])==null?void 0:i.media)||""}function ae(e){e.sort((i,r)=>i.width-r.width);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.width===t&&e.splice(i,1),t=r.width}}const ce=(e,{modifiers:t,baseURL:i="http://localhost:1337/uploads"}={})=>{const r=(t==null?void 0:t.breakpoint)??"";return r?{url:z(`${r}_${R(e)}`,i)}:{url:z(e,i)}},de=!0,le=Object.freeze(Object.defineProperty({__proto__:null,getImage:ce,validateDomains:de},Symbol.toStringTag,{value:"Module"})),ue=Y({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>I(e)+"_"+I(t)}),fe=(e,{modifiers:t={},baseURL:i}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=ue(t)||"_";return i||(i=x(r.options.nuxt.baseURL,"/_ipx")),{url:x(i,s,C(e))}},ge=!0,he=!0,me=Object.freeze(Object.defineProperty({__proto__:null,getImage:fe,supportsAlias:he,validateDomains:ge},Symbol.toStringTag,{value:"Module"})),k={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp"]};k.providers={strapi:{provider:le,defaults:{baseURL:"https://agon-cms-strapi.onrender.com/uploads/"}},ipx:{provider:me,defaults:{}}};const B=()=>{const e=H(),t=O();return t.$img||t._img||(t._img=te({...k,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function pe(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ve={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},ye=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),i=y(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=B(),s=y(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:s}},we={...ve,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}},Se=["src"],be=U({__name:"NuxtImg",props:we,emits:["load","error"],setup(e,{emit:t}){const i=e,r=F(),s=t,n=!1,o=B(),a=ye(i),d=W(!1),l=W(),u=y(()=>o.getSizes(i.src,{...a.options.value,sizes:i.sizes,densities:i.densities,modifiers:{...a.modifiers.value,width:v(i.width),height:v(i.height)}})),g=y(()=>{const c={...a.attrs.value,"data-nuxt-img":""};return(!i.placeholder||d.value)&&(c.sizes=u.value.sizes,c.srcset=u.value.srcset),c}),h=y(()=>{let c=i.placeholder;if(c===""&&(c=!0),!c||d.value)return!1;if(typeof c=="string")return c;const m=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return o(i.src,{...a.modifiers.value,width:m[0],height:m[1],quality:m[2]||50,blur:m[3]||3},a.options.value)}),S=y(()=>i.sizes?u.value.src:o(i.src,a.modifiers.value,a.options.value)),_=y(()=>h.value?h.value:S.value),b=O().isHydrating;return T(()=>{if(h.value){const c=new Image;S.value&&(c.src=S.value),i.sizes&&(c.sizes=u.value.sizes||"",c.srcset=u.value.srcset),c.onload=m=>{d.value=!0,s("load",m)},pe("nuxt-image");return}l.value&&(l.value.complete&&b&&(l.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),l.value.onload=c=>{s("load",c)},l.value.onerror=c=>{s("error",c)})}),(c,m)=>(G(),Z("img",J({ref_key:"imgEl",ref:l,class:i.placeholder&&!d.value?i.placeholderClass:void 0},{...j(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...j(r)},{src:_.value}),null,16,Se))}});export{be as _};

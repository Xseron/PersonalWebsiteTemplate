const __vite__fileDeps=["./DnNsX0p0.js","./D4XLuwHP.js","./swiper-vue.C8kddlLw.css","./BrPXNuAo.js","./fxaZXLwR.js","./error-404.Cs7Z0ZwI.css","./BmRWUsgS.js","./error-500.BY691cIp.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as Bi,r as n2,h as a0,g as e0,i as c1,t as Ei,n as o2,v as _i,u as F,a as l1,w as Fi,b as Z2,o as Di,c as qi,d as Oi,s as X1,f as K2,j as s1,k as E,l as K,p as B1,K as Ui,m as Ii,S as p4,T as r0,q as Wi,x as Z,y as V1,z as T,A as A1,F as F6,B as D6,C as q6,D as Gi,E as ji,G as $i,H as O3,I as w1,J as Zi,L as Ki,M as O6,N as Yi,O as Xi,P as Qi,Q as Ji}from"./D4XLuwHP.js";const cn=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,an=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,en=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function rn(c,a){if(c==="__proto__"||c==="constructor"&&a&&typeof a=="object"&&"prototype"in a){sn(c);return}return a}function sn(c){console.warn(`[destr] Dropping "${c}" key to prevent prototype pollution.`)}function _2(c,a={}){if(typeof c!="string")return c;const e=c.trim();if(c[0]==='"'&&c.endsWith('"')&&!c.includes("\\"))return e.slice(1,-1);if(e.length<=9){const r=e.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!en.test(c)){if(a.strict)throw new SyntaxError("[destr] Invalid JSON");return c}try{if(cn.test(c)||an.test(c)){if(a.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(c,rn)}return JSON.parse(c)}catch(r){if(a.strict)throw r;return c}}const s0=/#/g,i0=/&/g,n0=/\//g,nn=/=/g,on=/\?/g,Y2=/\+/g,ln=/%5e/gi,fn=/%60/gi,tn=/%7c/gi,mn=/%20/gi,vn=/%252f/gi;function o0(c){return encodeURI(""+c).replace(tn,"|")}function U3(c){return o0(typeof c=="string"?c:JSON.stringify(c)).replace(Y2,"%2B").replace(mn,"+").replace(s0,"%23").replace(i0,"%26").replace(fn,"`").replace(ln,"^").replace(n0,"%2F")}function y3(c){return U3(c).replace(nn,"%3D")}function l0(c){return o0(c).replace(s0,"%23").replace(on,"%3F").replace(vn,"%2F").replace(i0,"%26").replace(Y2,"%2B")}function U6(c){return l0(c).replace(n0,"%2F")}function F2(c=""){try{return decodeURIComponent(""+c)}catch{return""+c}}function zn(c){return F2(c.replace(Y2," "))}function hn(c){return F2(c.replace(Y2," "))}function Hn(c=""){const a={};c[0]==="?"&&(c=c.slice(1));for(const e of c.split("&")){const r=e.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=zn(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=hn(r[2]||"");a[s]===void 0?a[s]=i:Array.isArray(a[s])?a[s].push(i):a[s]=[a[s],i]}return a}function un(c,a){return(typeof a=="number"||typeof a=="boolean")&&(a=String(a)),a?Array.isArray(a)?a.map(e=>`${y3(c)}=${U3(e)}`).join("&"):`${y3(c)}=${U3(a)}`:y3(c)}function pn(c){return Object.keys(c).filter(a=>c[a]!==void 0).map(a=>un(a,c[a])).filter(Boolean).join("&")}const Vn=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Mn=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Cn=/^([/\\]\s*){2,}[^/\\]/,dn=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Ln=/\/$|\/\?|\/#/,gn=/^\.?\//;function f1(c,a={}){return typeof a=="boolean"&&(a={acceptRelative:a}),a.strict?Vn.test(c):Mn.test(c)||(a.acceptRelative?Cn.test(c):!1)}function bn(c){return!!c&&dn.test(c)}function I3(c="",a){return a?Ln.test(c):c.endsWith("/")}function V4(c="",a){if(!a)return(I3(c)?c.slice(0,-1):c)||"/";if(!I3(c,!0))return c||"/";let e=c,r="";const s=c.indexOf("#");s>=0&&(e=c.slice(0,s),r=c.slice(s));const[i,...n]=e.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(n.length>0?`?${n.join("?")}`:"")+r}function W3(c="",a){if(!a)return c.endsWith("/")?c:c+"/";if(I3(c,!0))return c||"/";let e=c,r="";const s=c.indexOf("#");if(s>=0&&(e=c.slice(0,s),r=c.slice(s),!e))return r;const[i,...n]=e.split("?");return i+"/"+(n.length>0?`?${n.join("?")}`:"")+r}function xn(c=""){return c.startsWith("/")}function G3(c=""){return xn(c)?c:"/"+c}function Nn(c,a){if(t0(a)||f1(c))return c;const e=V4(a);return c.startsWith(e)?c:_1(e,c)}function I6(c,a){if(t0(a))return c;const e=V4(a);if(!c.startsWith(e))return c;const r=c.slice(e.length);return r[0]==="/"?r:"/"+r}function f0(c,a){const e=l2(c),r={...Hn(e.search),...a};return e.search=pn(r),wn(e)}function t0(c){return!c||c==="/"}function Sn(c){return c&&c!=="/"}function _1(c,...a){let e=c||"";for(const r of a.filter(s=>Sn(s)))if(e){const s=r.replace(gn,"");e=W3(e)+s}else e=r;return e}function m0(...c){var n,o,f,t;const a=/\/(?!\/)/,e=c.filter(Boolean),r=[];let s=0;for(const l of e)if(!(!l||l==="/")){for(const[m,v]of l.split(a).entries())if(!(!v||v===".")){if(v===".."){if(r.length===1&&f1(r[0]))continue;r.pop(),s--;continue}if(m===1&&((n=r[r.length-1])!=null&&n.endsWith(":/"))){r[r.length-1]+="/"+v;continue}r.push(v),s++}}let i=r.join("/");return s>=0?(o=e[0])!=null&&o.startsWith("/")&&!i.startsWith("/")?i="/"+i:(f=e[0])!=null&&f.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(t=e[e.length-1])!=null&&t.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function yn(c,a,e={}){return e.trailingSlash||(c=W3(c),a=W3(a)),e.leadingSlash||(c=G3(c),a=G3(a)),e.encoding||(c=F2(c),a=F2(a)),c===a}const v0=Symbol.for("ufo:protocolRelative");function l2(c="",a){const e=c.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(e){const[,m,v=""]=e;return{protocol:m.toLowerCase(),pathname:v,href:m+v,auth:"",host:"",search:"",hash:""}}if(!f1(c,{acceptRelative:!0}))return a?l2(a+c):W6(c);const[,r="",s,i=""]=c.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,n="",o=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:f,search:t,hash:l}=W6(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:n,pathname:f,search:t,hash:l,[v0]:!r}}function W6(c=""){const[a="",e="",r=""]=(c.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:a,search:e,hash:r}}function wn(c){const a=c.pathname||"",e=c.search?(c.search.startsWith("?")?"":"?")+c.search:"",r=c.hash||"",s=c.auth?c.auth+"@":"",i=c.host||"";return(c.protocol||c[v0]?(c.protocol||"")+"//":"")+s+i+a+e+r}class kn extends Error{constructor(a,e){super(a,e),this.name="FetchError",e!=null&&e.cause&&!this.cause&&(this.cause=e.cause)}}function An(c){var f,t,l,m,v;const a=((f=c.error)==null?void 0:f.message)||((t=c.error)==null?void 0:t.toString())||"",e=((l=c.request)==null?void 0:l.method)||((m=c.options)==null?void 0:m.method)||"GET",r=((v=c.request)==null?void 0:v.url)||String(c.request)||"/",s=`[${e}] ${JSON.stringify(r)}`,i=c.response?`${c.response.status} ${c.response.statusText}`:"<no response>",n=`${s}: ${i}${a?` ${a}`:""}`,o=new kn(n,c.error?{cause:c.error}:void 0);for(const z of["request","options","response"])Object.defineProperty(o,z,{get(){return c[z]}});for(const[z,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(o,z,{get(){return c.response&&c.response[p]}});return o}const Pn=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function G6(c="GET"){return Pn.has(c.toUpperCase())}function Tn(c){if(c===void 0)return!1;const a=typeof c;return a==="string"||a==="number"||a==="boolean"||a===null?!0:a!=="object"?!1:Array.isArray(c)?!0:c.buffer?!1:c.constructor&&c.constructor.name==="Object"||typeof c.toJSON=="function"}const Rn=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Bn=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function En(c=""){if(!c)return"json";const a=c.split(";").shift()||"";return Bn.test(a)?"json":Rn.has(a)||a.startsWith("text/")?"text":"blob"}function _n(c,a,e=globalThis.Headers){const r={...a,...c};if(a!=null&&a.params&&(c!=null&&c.params)&&(r.params={...a==null?void 0:a.params,...c==null?void 0:c.params}),a!=null&&a.query&&(c!=null&&c.query)&&(r.query={...a==null?void 0:a.query,...c==null?void 0:c.query}),a!=null&&a.headers&&(c!=null&&c.headers)){r.headers=new e((a==null?void 0:a.headers)||{});for(const[s,i]of new e((c==null?void 0:c.headers)||{}))r.headers.set(s,i)}return r}const Fn=new Set([408,409,425,429,500,502,503,504]),Dn=new Set([101,204,205,304]);function z0(c={}){const{fetch:a=globalThis.fetch,Headers:e=globalThis.Headers,AbortController:r=globalThis.AbortController}=c;async function s(o){const f=o.error&&o.error.name==="AbortError"&&!o.options.timeout||!1;if(o.options.retry!==!1&&!f){let l;typeof o.options.retry=="number"?l=o.options.retry:l=G6(o.options.method)?0:1;const m=o.response&&o.response.status||500;if(l>0&&(Array.isArray(o.options.retryStatusCodes)?o.options.retryStatusCodes.includes(m):Fn.has(m))){const v=o.options.retryDelay||0;return v>0&&await new Promise(z=>setTimeout(z,v)),i(o.request,{...o.options,retry:l-1})}}const t=An(o);throw Error.captureStackTrace&&Error.captureStackTrace(t,i),t}const i=async function(f,t={}){var z;const l={request:f,options:_n(t,c.defaults,e),response:void 0,error:void 0};l.options.method=(z=l.options.method)==null?void 0:z.toUpperCase(),l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=Nn(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=f0(l.request,{...l.options.params,...l.options.query}))),l.options.body&&G6(l.options.method)&&(Tn(l.options.body)?(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new e(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")):("pipeTo"in l.options.body&&typeof l.options.body.pipeTo=="function"||typeof l.options.body.pipe=="function")&&("duplex"in l.options||(l.options.duplex="half")));let m;if(!l.options.signal&&l.options.timeout){const p=new r;m=setTimeout(()=>p.abort(),l.options.timeout),l.options.signal=p.signal}try{l.response=await a(l.request,l.options)}catch(p){return l.error=p,l.options.onRequestError&&await l.options.onRequestError(l),await s(l)}finally{m&&clearTimeout(m)}if(l.response.body&&!Dn.has(l.response.status)&&l.options.method!=="HEAD"){const p=(l.options.parseResponse?"json":l.options.responseType)||En(l.response.headers.get("content-type")||"");switch(p){case"json":{const V=await l.response.text(),b=l.options.parseResponse||_2;l.response._data=b(V);break}case"stream":{l.response._data=l.response.body;break}default:l.response._data=await l.response[p]()}}return l.options.onResponse&&await l.options.onResponse(l),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),await s(l)):l.response},n=async function(f,t){return(await i(f,t))._data};return n.raw=i,n.native=(...o)=>a(...o),n.create=(o={})=>z0({...c,defaults:{...c.defaults,...o}}),n}const M4=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),qn=M4.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),On=M4.Headers,Un=M4.AbortController,In=z0({fetch:qn,Headers:On,AbortController:Un}),Wn=In,Gn=()=>{var c;return((c=window==null?void 0:window.__NUXT__)==null?void 0:c.config)||{}},D2=Gn().app,jn=()=>D2.baseURL,$n=()=>D2.buildAssetsDir,C4=(...c)=>m0(h0(),$n(),...c),h0=(...c)=>{const a=D2.cdnURL||D2.baseURL;return c.length?m0(a,...c):a};globalThis.__buildAssetsURL=C4,globalThis.__publicAssetsURL=h0;globalThis.$fetch||(globalThis.$fetch=Wn.create({baseURL:jn()}));function j3(c,a={},e){for(const r in c){const s=c[r],i=e?`${e}:${r}`:r;typeof s=="object"&&s!==null?j3(s,a,i):typeof s=="function"&&(a[i]=s)}return a}const Zn={run:c=>c()},Kn=()=>Zn,H0=typeof console.createTask<"u"?console.createTask:Kn;function Yn(c,a){const e=a.shift(),r=H0(e);return c.reduce((s,i)=>s.then(()=>r.run(()=>i(...a))),Promise.resolve())}function Xn(c,a){const e=a.shift(),r=H0(e);return Promise.all(c.map(s=>r.run(()=>s(...a))))}function w3(c,a){for(const e of[...c])e(a)}class Qn{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(a,e,r={}){if(!a||typeof e!="function")return()=>{};const s=a;let i;for(;this._deprecatedHooks[a];)i=this._deprecatedHooks[a],a=i.to;if(i&&!r.allowDeprecated){let n=i.message;n||(n=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(n)||(console.warn(n),this._deprecatedMessages.add(n))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+a.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[a]=this._hooks[a]||[],this._hooks[a].push(e),()=>{e&&(this.removeHook(a,e),e=void 0)}}hookOnce(a,e){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,e(...i));return r=this.hook(a,s),r}removeHook(a,e){if(this._hooks[a]){const r=this._hooks[a].indexOf(e);r!==-1&&this._hooks[a].splice(r,1),this._hooks[a].length===0&&delete this._hooks[a]}}deprecateHook(a,e){this._deprecatedHooks[a]=typeof e=="string"?{to:e}:e;const r=this._hooks[a]||[];delete this._hooks[a];for(const s of r)this.hook(a,s)}deprecateHooks(a){Object.assign(this._deprecatedHooks,a);for(const e in a)this.deprecateHook(e,a[e])}addHooks(a){const e=j3(a),r=Object.keys(e).map(s=>this.hook(s,e[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(a){const e=j3(a);for(const r in e)this.removeHook(r,e[r])}removeAllHooks(){for(const a in this._hooks)delete this._hooks[a]}callHook(a,...e){return e.unshift(a),this.callHookWith(Yn,a,...e)}callHookParallel(a,...e){return e.unshift(a),this.callHookWith(Xn,a,...e)}callHookWith(a,e,...r){const s=this._before||this._after?{name:e,args:r,context:{}}:void 0;this._before&&w3(this._before,s);const i=a(e in this._hooks?[...this._hooks[e]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&w3(this._after,s)}):(this._after&&s&&w3(this._after,s),i)}beforeEach(a){return this._before=this._before||[],this._before.push(a),()=>{if(this._before!==void 0){const e=this._before.indexOf(a);e!==-1&&this._before.splice(e,1)}}}afterEach(a){return this._after=this._after||[],this._after.push(a),()=>{if(this._after!==void 0){const e=this._after.indexOf(a);e!==-1&&this._after.splice(e,1)}}}}function u0(){return new Qn}function Jn(c={}){let a,e=!1;const r=n=>{if(a&&a!==n)throw new Error("Context conflict")};let s;if(c.asyncContext){const n=c.AsyncLocalStorage||globalThis.AsyncLocalStorage;n?s=new n:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&a===void 0){const n=s.getStore();if(n!==void 0)return n}return a};return{use:()=>{const n=i();if(n===void 0)throw new Error("Context is not available");return n},tryUse:()=>i(),set:(n,o)=>{o||r(n),a=n,e=!0},unset:()=>{a=void 0,e=!1},call:(n,o)=>{r(n),a=n;try{return s?s.run(n,o):o()}finally{e||(a=void 0)}},async callAsync(n,o){a=n;const f=()=>{a=n},t=()=>a===n?f:void 0;$3.add(t);try{const l=s?s.run(n,o):o();return e||(a=void 0),await l}finally{$3.delete(t)}}}}function co(c={}){const a={};return{get(e,r={}){return a[e]||(a[e]=Jn({...c,...r})),a[e],a[e]}}}const q2=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},j6="__unctx__",ao=q2[j6]||(q2[j6]=co()),eo=(c,a={})=>ao.get(c,a),$6="__unctx_async_handlers__",$3=q2[$6]||(q2[$6]=new Set);function Q1(c){const a=[];for(const s of $3){const i=s();i&&a.push(i)}const e=()=>{for(const s of a)s()};let r=c();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw e(),s})),[r,e]}const p0=eo("nuxt-app",{asyncContext:!1}),ro="__nuxt_plugin";function so(c){let a=0;const e={_scope:Bi(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.11.2"},get vue(){return e.vueApp.version}},payload:n2({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>e._scope.run(()=>oo(e,s)),isHydrating:!0,deferHydration(){if(!e.isHydrating)return()=>{};a++;let s=!1;return()=>{if(!s&&(s=!0,a--,a===0))return e.isHydrating=!1,e.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...c};e.hooks=u0(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(s,i)=>{const n="$"+s;d2(e,n,i),d2(e.vueApp.config.globalProperties,n,i)},d2(e.vueApp,"$nuxt",e),d2(e.vueApp.config.globalProperties,"$nuxt",e);{window.addEventListener("nuxt.preloadError",i=>{e.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||D;const s=e.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});e.hook("app:mounted",s)}const r=e.payload.config;return e.provide("config",r),e}async function io(c,a){if(a.hooks&&c.hooks.addHooks(a.hooks),typeof a=="function"){const{provide:e}=await c.runWithContext(()=>a(c))||{};if(e&&typeof e=="object")for(const r in e)c.provide(r,e[r])}}async function no(c,a){const e=[],r=[],s=[],i=[];let n=0;async function o(f){var l;const t=((l=f.dependsOn)==null?void 0:l.filter(m=>a.some(v=>v._name===m)&&!e.includes(m)))??[];if(t.length>0)r.push([new Set(t),f]);else{const m=io(c,f).then(async()=>{f._name&&(e.push(f._name),await Promise.all(r.map(async([v,z])=>{v.has(f._name)&&(v.delete(f._name),v.size===0&&(n++,await o(z)))})))});f.parallel?s.push(m.catch(v=>i.push(v))):await m}}for(const f of a)await o(f);if(await Promise.all(s),n)for(let f=0;f<n;f++)await Promise.all(s);if(i.length)throw i[0]}function z1(c){if(typeof c=="function")return c;const a=c._name||c.name;return delete c.name,Object.assign(c.setup||(()=>{}),c,{[ro]:!0,_name:a})}function oo(c,a,e){const r=()=>a();return p0.set(c),c.vueApp.runWithContext(r)}function lo(){var a;let c;return a0()&&(c=(a=e0())==null?void 0:a.appContext.app.$nuxt),c=c||p0.tryUse(),c||null}function D(){const c=lo();if(!c)throw new Error("[nuxt] instance unavailable");return c}function X2(c){return D().$config}function d2(c,a,e){Object.defineProperty(c,a,{get:()=>e})}function fo(c,a){return{ctx:{table:c},matchAll:e=>M0(e,c)}}function V0(c){const a={};for(const e in c)a[e]=e==="dynamic"?new Map(Object.entries(c[e]).map(([r,s])=>[r,V0(s)])):new Map(Object.entries(c[e]));return a}function to(c){return fo(V0(c))}function M0(c,a,e){c.endsWith("/")&&(c=c.slice(0,-1)||"/");const r=[];for(const[i,n]of Z6(a.wildcard))(c===i||c.startsWith(i+"/"))&&r.push(n);for(const[i,n]of Z6(a.dynamic))if(c.startsWith(i+"/")){const o="/"+c.slice(i.length).split("/").splice(2).join("/");r.push(...M0(o,n))}const s=a.static.get(c);return s&&r.push(s),r.filter(Boolean)}function Z6(c){return[...c.entries()].sort((a,e)=>a[0].length-e[0].length)}function k3(c){if(c===null||typeof c!="object")return!1;const a=Object.getPrototypeOf(c);return a!==null&&a!==Object.prototype&&Object.getPrototypeOf(a)!==null||Symbol.iterator in c?!1:Symbol.toStringTag in c?Object.prototype.toString.call(c)==="[object Module]":!0}function Z3(c,a,e=".",r){if(!k3(a))return Z3(c,{},e,r);const s=Object.assign({},a);for(const i in c){if(i==="__proto__"||i==="constructor")continue;const n=c[i];n!=null&&(r&&r(s,i,n,e)||(Array.isArray(n)&&Array.isArray(s[i])?s[i]=[...n,...s[i]]:k3(n)&&k3(s[i])?s[i]=Z3(n,s[i],(e?`${e}.`:"")+i.toString(),r):s[i]=n))}return s}function C0(c){return(...a)=>a.reduce((e,r)=>Z3(e,r,"",c),{})}const Q2=C0(),mo=C0((c,a,e)=>{if(c[a]!==void 0&&typeof e=="function")return c[a]=e(c[a]),!0});function vo(c,a){try{return a in c}catch{return!1}}var zo=Object.defineProperty,ho=(c,a,e)=>a in c?zo(c,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[a]=e,g1=(c,a,e)=>(ho(c,typeof a!="symbol"?a+"":a,e),e);class K3 extends Error{constructor(a,e={}){super(a,e),g1(this,"statusCode",500),g1(this,"fatal",!1),g1(this,"unhandled",!1),g1(this,"statusMessage"),g1(this,"data"),g1(this,"cause"),e.cause&&!this.cause&&(this.cause=e.cause)}toJSON(){const a={message:this.message,statusCode:X3(this.statusCode,500)};return this.statusMessage&&(a.statusMessage=d0(this.statusMessage)),this.data!==void 0&&(a.data=this.data),a}}g1(K3,"__h3_error__",!0);function Y3(c){if(typeof c=="string")return new K3(c);if(Ho(c))return c;const a=new K3(c.message??c.statusMessage??"",{cause:c.cause||c});if(vo(c,"stack"))try{Object.defineProperty(a,"stack",{get(){return c.stack}})}catch{try{a.stack=c.stack}catch{}}if(c.data&&(a.data=c.data),c.statusCode?a.statusCode=X3(c.statusCode,a.statusCode):c.status&&(a.statusCode=X3(c.status,a.statusCode)),c.statusMessage?a.statusMessage=c.statusMessage:c.statusText&&(a.statusMessage=c.statusText),a.statusMessage){const e=a.statusMessage;d0(a.statusMessage)!==e&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return c.fatal!==void 0&&(a.fatal=c.fatal),c.unhandled!==void 0&&(a.unhandled=c.unhandled),a}function Ho(c){var a;return((a=c==null?void 0:c.constructor)==null?void 0:a.__h3_error__)===!0}const uo=/[^\u0009\u0020-\u007E]/g;function d0(c=""){return c.replace(uo,"")}function X3(c,a=200){return!c||(typeof c=="string"&&(c=Number.parseInt(c,10)),c<100||c>999)?a:c}const L0=Symbol("layout-meta"),f2=Symbol("route"),i1=()=>{var c;return(c=D())==null?void 0:c.$router},d4=()=>a0()?c1(f2,D()._route):D()._route;const po=()=>{try{if(D()._processingMiddleware)return!0}catch{return!1}return!1},AK=(c,a)=>{c||(c="/");const e=typeof c=="string"?c:f0(c.path||"/",c.query||{})+(c.hash||"");if(a!=null&&a.open){const{target:o="_blank",windowFeatures:f={}}=a.open,t=Object.entries(f).filter(([l,m])=>m!==void 0).map(([l,m])=>`${l.toLowerCase()}=${m}`).join(", ");return open(e,o,t),Promise.resolve()}const r=(a==null?void 0:a.external)||f1(e,{acceptRelative:!0});if(r){if(!(a!=null&&a.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const o=l2(e).protocol;if(o&&bn(o))throw new Error(`Cannot navigate to a URL with '${o}' protocol.`)}const s=po();if(!r&&s)return c;const i=i1(),n=D();return r?(n._scope.stop(),a!=null&&a.replace?location.replace(e):location.href=e,s?n.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):a!=null&&a.replace?i.replace(c):i.push(c)},g0="__nuxt_error",J2=()=>Ei(D().payload,"error"),P1=c=>{const a=c3(c);try{const e=D(),r=J2();e.hooks.callHook("app:error",a),r.value=r.value||a}catch{throw a}return a},Vo=async(c={})=>{const a=D(),e=J2();a.callHook("app:error:cleared",c),c.redirect&&await i1().replace(c.redirect),e.value=null},Mo=c=>!!c&&typeof c=="object"&&g0 in c,c3=c=>{const a=Y3(c);return Object.defineProperty(a,g0,{value:!0,configurable:!1,writable:!1}),a},Co=-1,Lo=-2,go=-3,bo=-4,xo=-5,No=-6;function So(c,a){return yo(JSON.parse(c),a)}function yo(c,a){if(typeof c=="number")return s(c,!0);if(!Array.isArray(c)||c.length===0)throw new Error("Invalid input");const e=c,r=Array(e.length);function s(i,n=!1){if(i===Co)return;if(i===go)return NaN;if(i===bo)return 1/0;if(i===xo)return-1/0;if(i===No)return-0;if(n)throw new Error("Invalid input");if(i in r)return r[i];const o=e[i];if(!o||typeof o!="object")r[i]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const f=o[0],t=a==null?void 0:a[f];if(t)return r[i]=t(s(o[1]));switch(f){case"Date":r[i]=new Date(o[1]);break;case"Set":const l=new Set;r[i]=l;for(let z=1;z<o.length;z+=1)l.add(s(o[z]));break;case"Map":const m=new Map;r[i]=m;for(let z=1;z<o.length;z+=2)m.set(s(o[z]),s(o[z+1]));break;case"RegExp":r[i]=new RegExp(o[1],o[2]);break;case"Object":r[i]=Object(o[1]);break;case"BigInt":r[i]=BigInt(o[1]);break;case"null":const v=Object.create(null);r[i]=v;for(let z=1;z<o.length;z+=2)v[o[z]]=s(o[z+1]);break;default:throw new Error(`Unknown type ${f}`)}}else{const f=new Array(o.length);r[i]=f;for(let t=0;t<o.length;t+=1){const l=o[t];l!==Lo&&(f[t]=s(l))}}else{const f={};r[i]=f;for(const t in o){const l=o[t];f[t]=s(l)}}return r[i]}return s(0)}function wo(c){return Array.isArray(c)?c:[c]}const ko=["title","titleTemplate","script","style","noscript"],P2=["base","meta","link","style","script","noscript"],Ao=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Po=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],b0=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],To=typeof window<"u";function L4(c){let a=9;for(let e=0;e<c.length;)a=Math.imul(a^c.charCodeAt(e++),9**9);return((a^a>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function K6(c){return c._h||L4(c._d?c._d:`${c.tag}:${c.textContent||c.innerHTML||""}:${Object.entries(c.props).map(([a,e])=>`${a}:${String(e)}`).join(",")}`)}function x0(c,a){const{props:e,tag:r}=c;if(Po.includes(r))return r;if(r==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof e[i]<"u"){const n=String(e[i]);return`${r}:${i}:${n}`}return!1}function Y6(c,a){return c==null?a||null:typeof c=="function"?c(a):c}async function Ro(c,a,e){const r={tag:c,props:await N0(typeof a=="object"&&typeof a!="function"&&!(a instanceof Promise)?{...a}:{[["script","noscript","style"].includes(c)?"innerHTML":"textContent"]:a},["templateParams","titleTemplate"].includes(c))};return b0.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:e[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||ko.includes(r.tag))&&(r[s==="children"?"innerHTML":s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function Bo(c,a){var r;const e=c==="class"?" ":";";return typeof a=="object"&&!Array.isArray(a)&&(a=Object.entries(a).filter(([,s])=>s).map(([s,i])=>c==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(a)?a.join(e):a))==null?void 0:r.split(e).filter(s=>s.trim()).filter(Boolean).join(e)}async function N0(c,a){for(const e of Object.keys(c)){if(["class","style"].includes(e)){c[e]=Bo(e,c[e]);continue}if(c[e]instanceof Promise&&(c[e]=await c[e]),!a&&!b0.includes(e)){const r=String(c[e]),s=e.startsWith("data-");r==="true"||r===""?c[e]=s?"true":!0:c[e]||(s&&r==="false"?c[e]="false":delete c[e])}}return c}const Eo=10;async function _o(c){const a=[];return Object.entries(c.resolvedInput).filter(([e,r])=>typeof r<"u"&&Ao.includes(e)).forEach(([e,r])=>{const s=wo(r);a.push(...s.map(i=>Ro(e,i,c)).flat())}),(await Promise.all(a)).flat().filter(Boolean).map((e,r)=>(e._e=c._i,c.mode&&(e._m=c.mode),e._p=(c._i<<Eo)+r,e))}const X6={base:-10,title:10},Q6={critical:-80,high:-10,low:20};function O2(c){let a=100;const e=c.tagPriority;return typeof e=="number"?e:(c.tag==="meta"?(c.props["http-equiv"]==="content-security-policy"&&(a=-30),c.props.charset&&(a=-20),c.props.name==="viewport"&&(a=-15)):c.tag==="link"&&c.props.rel==="preconnect"?a=20:c.tag in X6&&(a=X6[c.tag]),typeof e=="string"&&e in Q6?a+Q6[e]:a)}const Fo=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],J6=["onload","onerror","onabort","onprogress","onloadstart"],H1="%separator";function T2(c,a,e){if(typeof c!="string"||!c.includes("%"))return c;function r(n){let o;return["s","pageTitle"].includes(n)?o=a.pageTitle:n.includes(".")?o=n.split(".").reduce((f,t)=>f&&f[t]||void 0,a):o=a[n],typeof o<"u"?(o||"").replace(/"/g,'\\"'):!1}let s=c;try{s=decodeURI(c)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(n=>{const o=r(n.slice(1));typeof o=="string"&&(c=c.replace(new RegExp(`\\${n}(\\W|$)`,"g"),(f,t)=>`${o}${t}`).trim())}),c.includes(H1)&&(c.endsWith(H1)&&(c=c.slice(0,-H1.length).trim()),c.startsWith(H1)&&(c=c.slice(H1.length).trim()),c=c.replace(new RegExp(`\\${H1}\\s*\\${H1}`,"g"),H1),c=T2(c,{separator:e},e)),c}async function S0(c,a={}){var l;const e=a.document||c.resolvedOptions.document;if(!e||!c.dirty)return;const r={shouldRender:!0,tags:[]};if(await c.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await c.resolveTags()).map(m=>({tag:m,id:P2.includes(m.tag)?K6(m):m.tag,shouldRender:!0}));let i=c._dom;if(!i){i={elMap:{htmlAttrs:e.documentElement,bodyAttrs:e.body}};for(const m of["body","head"]){const v=(l=e[m])==null?void 0:l.children,z=[];for(const p of[...v].filter(V=>P2.includes(V.tagName.toLowerCase()))){const V={tag:p.tagName.toLowerCase(),props:await N0(p.getAttributeNames().reduce((h,M)=>({...h,[M]:p.getAttribute(M)}),{})),innerHTML:p.innerHTML};let b=1,H=x0(V);for(;H&&z.find(h=>h._d===H);)H=`${H}:${b++}`;V._d=H||void 0,z.push(V),i.elMap[p.getAttribute("data-hid")||K6(V)]=p}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function n(m,v,z){const p=`${m}:${v}`;i.sideEffects[p]=z,delete i.pendingSideEffects[p]}function o({id:m,$el:v,tag:z}){const p=z.tag.endsWith("Attrs");i.elMap[m]=v,p||(["textContent","innerHTML"].forEach(V=>{z[V]&&z[V]!==v[V]&&(v[V]=z[V])}),n(m,"el",()=>{var V;(V=i.elMap[m])==null||V.remove(),delete i.elMap[m]}));for(const[V,b]of Object.entries(z._eventHandlers||{}))v.getAttribute(`data-${V}`)!==""&&((z.tag==="bodyAttrs"?e.defaultView:v).addEventListener(V.replace("on",""),b.bind(v)),v.setAttribute(`data-${V}`,""));Object.entries(z.props).forEach(([V,b])=>{const H=`attr:${V}`;if(V==="class")for(const h of(b||"").split(" ").filter(Boolean))p&&n(m,`${H}:${h}`,()=>v.classList.remove(h)),!v.classList.contains(h)&&v.classList.add(h);else if(V==="style")for(const h of(b||"").split(";").filter(Boolean)){const[M,...x]=h.split(":").map(S=>S.trim());n(m,`${H}:${h}:${M}`,()=>{v.style.removeProperty(M)}),v.style.setProperty(M,x.join(":"))}else v.getAttribute(V)!==b&&v.setAttribute(V,b===!0?"":String(b)),p&&n(m,H,()=>v.removeAttribute(V))})}const f=[],t={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const m of s){const{tag:v,shouldRender:z,id:p}=m;if(z){if(v.tag==="title"){e.title=v.textContent;continue}m.$el=m.$el||i.elMap[p],m.$el?o(m):P2.includes(v.tag)&&f.push(m)}}for(const m of f){const v=m.tag.tagPosition||"head";m.$el=e.createElement(m.tag.tag),o(m),t[v]=t[v]||e.createDocumentFragment(),t[v].appendChild(m.$el)}for(const m of s)await c.hooks.callHook("dom:renderTag",m,e,n);t.head&&e.head.appendChild(t.head),t.bodyOpen&&e.body.insertBefore(t.bodyOpen,e.body.firstChild),t.bodyClose&&e.body.appendChild(t.bodyClose),Object.values(i.pendingSideEffects).forEach(m=>m()),c._dom=i,c.dirty=!1,await c.hooks.callHook("dom:rendered",{renders:s})}async function Do(c,a={}){const e=a.delayFn||(r=>setTimeout(r,10));return c._domUpdatePromise=c._domUpdatePromise||new Promise(r=>e(async()=>{await S0(c,a),delete c._domUpdatePromise,r()}))}function qo(c){return a=>{var r,s;const e=((s=(r=a.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return e&&a.push(JSON.parse(e)),{mode:"client",hooks:{"entries:updated":function(i){Do(i,c)}}}}}const Oo=["templateParams","htmlAttrs","bodyAttrs"],Uo={hooks:{"tag:normalise":function({tag:c}){["hid","vmid","key"].forEach(r=>{c.props[r]&&(c.key=c.props[r],delete c.props[r])});const e=x0(c)||(c.key?`${c.tag}:${c.key}`:!1);e&&(c._d=e)},"tags:resolve":function(c){const a={};c.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=a[s];if(i){let o=r==null?void 0:r.tagDuplicateStrategy;if(!o&&Oo.includes(r.tag)&&(o="merge"),o==="merge"){const f=i.props;["class","style"].forEach(t=>{f[t]&&(r.props[t]?(t==="style"&&!f[t].endsWith(";")&&(f[t]+=";"),r.props[t]=`${f[t]} ${r.props[t]}`):r.props[t]=f[t])}),a[s].props={...f,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(O2(r)>O2(i))return}const n=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(P2.includes(r.tag)&&n===0){delete a[s];return}a[s]=r});const e=[];Object.values(a).forEach(r=>{const s=r._duped;delete r._duped,e.push(r),s&&e.push(...s)}),c.tags=e,c.tags=c.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},Io={mode:"server",hooks:{"tags:resolve":function(c){const a={};c.tags.filter(e=>["titleTemplate","templateParams","title"].includes(e.tag)&&e._m==="server").forEach(e=>{a[e.tag]=e.tag.startsWith("title")?e.textContent:e.props}),Object.keys(a).length&&c.tags.push({tag:"script",innerHTML:JSON.stringify(a),props:{id:"unhead:payload",type:"application/json"}})}}},Wo=["script","link","bodyAttrs"],Go=c=>({hooks:{"tags:resolve":function(a){for(const e of a.tags.filter(r=>Wo.includes(r.tag)))Object.entries(e.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"&&(c.ssr&&J6.includes(r)?e.props[r]=`this.dataset.${r}fired = true`:delete e.props[r],e._eventHandlers=e._eventHandlers||{},e._eventHandlers[r]=s)}),c.ssr&&e._eventHandlers&&(e.props.src||e.props.href)&&(e.key=e.key||L4(e.props.src||e.props.href))},"dom:renderTag":function({$el:a,tag:e}){var r,s;for(const i of Object.keys((a==null?void 0:a.dataset)||{}).filter(n=>J6.some(o=>`${o}fired`===n))){const n=i.replace("fired","");(s=(r=e._eventHandlers)==null?void 0:r[n])==null||s.call(a,new Event(n.replace("on","")))}}}}),jo=["link","style","script","noscript"],$o={hooks:{"tag:normalise":({tag:c})=>{c.key&&jo.includes(c.tag)&&(c.props["data-hid"]=c._h=L4(c.key))}}},Zo={hooks:{"tags:resolve":c=>{const a=e=>{var r;return(r=c.tags.find(s=>s._d===e))==null?void 0:r._p};for(const{prefix:e,offset:r}of Fo)for(const s of c.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(e))){const i=a(s.tagPriority.replace(e,""));typeof i<"u"&&(s._p=i+r)}c.tags.sort((e,r)=>e._p-r._p).sort((e,r)=>O2(e)-O2(r))}}},Ko={meta:"content",link:"href",htmlAttrs:"lang"},Yo=c=>({hooks:{"tags:resolve":a=>{var o;const{tags:e}=a,r=(o=e.find(f=>f.tag==="title"))==null?void 0:o.textContent,s=e.findIndex(f=>f.tag==="templateParams"),i=s!==-1?e[s].props:{},n=i.separator||"|";delete i.separator,i.pageTitle=T2(i.pageTitle||r||"",i,n);for(const f of e.filter(t=>t.processTemplateParams!==!1)){const t=Ko[f.tag];t&&typeof f.props[t]=="string"?f.props[t]=T2(f.props[t],i,n):(f.processTemplateParams===!0||["titleTemplate","title"].includes(f.tag))&&["innerHTML","textContent"].forEach(l=>{typeof f[l]=="string"&&(f[l]=T2(f[l],i,n))})}c._templateParams=i,c._separator=n,a.tags=e.filter(f=>f.tag!=="templateParams")}}}),Xo={hooks:{"tags:resolve":c=>{const{tags:a}=c;let e=a.findIndex(s=>s.tag==="titleTemplate");const r=a.findIndex(s=>s.tag==="title");if(r!==-1&&e!==-1){const s=Y6(a[e].textContent,a[r].textContent);s!==null?a[r].textContent=s||a[r].textContent:delete a[r]}else if(e!==-1){const s=Y6(a[e].textContent);s!==null&&(a[e].textContent=s,a[e].tag="title",e=-1)}e!==-1&&delete a[e],c.tags=a.filter(Boolean)}}},Qo={hooks:{"tags:afterResolve":function(c){for(const a of c.tags)typeof a.innerHTML=="string"&&(a.innerHTML&&["application/ld+json","application/json"].includes(a.props.type)?a.innerHTML=a.innerHTML.replace(/</g,"\\u003C"):a.innerHTML=a.innerHTML.replace(new RegExp(`</${a.tag}`,"g"),`<\\/${a.tag}`))}}};let y0;function Jo(c={}){const a=cl(c);return a.use(qo()),y0=a}function c8(c,a){return!c||c==="server"&&a||c==="client"&&!a}function cl(c={}){const a=u0();a.addHooks(c.hooks||{}),c.document=c.document||(To?document:void 0);const e=!c.document,r=()=>{o.dirty=!0,a.callHook("entries:updated",o)};let s=0,i=[];const n=[],o={plugins:n,dirty:!1,resolvedOptions:c,hooks:a,headEntries(){return i},use(f){const t=typeof f=="function"?f(o):f;(!t.key||!n.some(l=>l.key===t.key))&&(n.push(t),c8(t.mode,e)&&a.addHooks(t.hooks||{}))},push(f,t){t==null||delete t.head;const l={_i:s++,input:f,...t};return c8(l.mode,e)&&(i.push(l),r()),{dispose(){i=i.filter(m=>m._i!==l._i),a.callHook("entries:updated",o),r()},patch(m){i=i.map(v=>(v._i===l._i&&(v.input=l.input=m),v)),r()}}},async resolveTags(){const f={tags:[],entries:[...i]};await a.callHook("entries:resolve",f);for(const t of f.entries){const l=t.resolvedInput||t.input;if(t.resolvedInput=await(t.transform?t.transform(l):l),t.resolvedInput)for(const m of await _o(t)){const v={tag:m,entry:t,resolvedOptions:o.resolvedOptions};await a.callHook("tag:normalise",v),f.tags.push(v.tag)}}return await a.callHook("tags:beforeResolve",f),await a.callHook("tags:resolve",f),await a.callHook("tags:afterResolve",f),f.tags},ssr:e};return[Uo,Io,Go,$o,Zo,Yo,Xo,Qo,...(c==null?void 0:c.plugins)||[]].forEach(f=>o.use(f)),o.hooks.callHook("init",o),o}function al(){return y0}const el=_i.startsWith("3");function rl(c){return typeof c=="function"?c():F(c)}function U2(c,a=""){if(c instanceof Promise)return c;const e=rl(c);return!c||!e?e:Array.isArray(e)?e.map(r=>U2(r,a)):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,F(s)]:[r,U2(s,r)])):e}const sl={hooks:{"entries:resolve":function(c){for(const a of c.entries)a.resolvedInput=U2(a.input)}}},w0="usehead";function il(c){return{install(e){el&&(e.config.globalProperties.$unhead=c,e.config.globalProperties.$head=c,e.provide(w0,c))}}.install}function nl(c={}){c.domDelayFn=c.domDelayFn||(e=>o2(()=>setTimeout(()=>e(),0)));const a=Jo(c);return a.use(sl),a.install=il(a),a}const Q3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J3="__unhead_injection_handler__";function ol(c){Q3[J3]=c}function ll(){if(J3 in Q3)return Q3[J3]();const c=c1(w0);return c||al()}function fl(c,a={}){const e=a.head||ll();if(e)return e.ssr?e.push(c,a):tl(e,c,a)}function tl(c,a,e={}){const r=l1(!1),s=l1({});Fi(()=>{s.value=r.value?{}:U2(a)});const i=c.push(s.value,e);return Z2(s,o=>{i.patch(o)}),e0()&&(Di(()=>{i.dispose()}),qi(()=>{r.value=!0}),Oi(()=>{r.value=!1})),i}const ml={nuxt:{buildId:"14ec43e3-5a14-41ad-8ced-27b0bc3da964"}},vl=mo(ml);function k0(){const c=D();return c._appConfig||(c._appConfig=n2(vl)),c._appConfig}const zl=!1,c4=!1,hl=!1,PK={componentName:"NuxtLink"},Hl="#__nuxt";let R2,A0;function ul(){var a;const c=(a=k0().nuxt)==null?void 0:a.buildId;return R2=$fetch(C4(`builds/meta/${c}.json`)),R2.then(e=>{A0=to(e.matcher)}),R2}function a3(){return R2||ul()}async function g4(c){return await a3(),Q2({},...A0.matchAll(c).reverse())}function a8(c,a={}){const e=Vl(c,a),r=D(),s=r._payloadCache=r._payloadCache||{};return e in s||(s[e]=Ml(c).then(i=>i?P0(e).then(n=>n||(delete s[e],null)):(s[e]=null,null))),s[e]}const pl="_payload.json";function Vl(c,a={}){var s;const e=new URL(c,"http://localhost");if(e.host!=="localhost"||f1(e.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+c);const r=a.hash||(a.fresh?Date.now():(s=k0().nuxt)==null?void 0:s.buildId);return _1(X2().app.baseURL,e.pathname,pl+(r?`?${r}`:""))}async function P0(c){const a=fetch(c).then(e=>e.text().then(T0));try{return await a}catch(e){console.warn("[nuxt] Cannot load payload ",c,e)}return null}async function Ml(c=d4().path){if(c=V4(c),(await a3()).prerendered.includes(c))return!0;const e=await g4(c);return!!e.prerender&&!e.redirect}let L2=null;async function Cl(){if(L2)return L2;const c=document.getElementById("__NUXT_DATA__");if(!c)return{};const a=await T0(c.textContent||""),e=c.dataset.src?await P0(c.dataset.src):void 0;return L2={...a,...e,...window.__NUXT__},L2}async function T0(c){return await So(c,D()._payloadRevivers)}function dl(c,a){D()._payloadRevivers[c]=a}const e8={NuxtError:c=>c3(c),EmptyShallowRef:c=>X1(c==="_"?void 0:c==="0n"?BigInt(0):_2(c)),EmptyRef:c=>l1(c==="_"?void 0:c==="0n"?BigInt(0):_2(c)),ShallowRef:c=>X1(c),ShallowReactive:c=>K2(c),Ref:c=>l1(c),Reactive:c=>n2(c)},Ll=z1({name:"nuxt:revive-payload:client",order:-30,async setup(c){let a,e;for(const r in e8)dl(r,e8[r]);Object.assign(c.payload,([a,e]=Q1(()=>c.runWithContext(Cl)),a=await a,e(),a)),window.__NUXT__=c.payload}}),gl=[],bl=z1({name:"nuxt:head",enforce:"pre",setup(c){const a=nl({plugins:gl});ol(()=>D().vueApp._context.provides.usehead),c.vueApp.use(a);{let e=!0;const r=async()=>{e=!1,await S0(a)};a.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!e}),c.hooks.hook("page:start",()=>{e=!0}),c.hooks.hook("page:finish",()=>{c.isHydrating||r()}),c.hooks.hook("app:error",r),c.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const k1=typeof document<"u";function xl(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const P=Object.assign;function A3(c,a){const e={};for(const r in a){const s=a[r];e[r]=a1(s)?s.map(c):c(s)}return e}const j1=()=>{},a1=Array.isArray,R0=/#/g,Nl=/&/g,Sl=/\//g,yl=/=/g,wl=/\?/g,B0=/\+/g,kl=/%5B/g,Al=/%5D/g,E0=/%5E/g,Pl=/%60/g,_0=/%7B/g,Tl=/%7C/g,F0=/%7D/g,Rl=/%20/g;function b4(c){return encodeURI(""+c).replace(Tl,"|").replace(kl,"[").replace(Al,"]")}function Bl(c){return b4(c).replace(_0,"{").replace(F0,"}").replace(E0,"^")}function a4(c){return b4(c).replace(B0,"%2B").replace(Rl,"+").replace(R0,"%23").replace(Nl,"%26").replace(Pl,"`").replace(_0,"{").replace(F0,"}").replace(E0,"^")}function El(c){return a4(c).replace(yl,"%3D")}function _l(c){return b4(c).replace(R0,"%23").replace(wl,"%3F")}function Fl(c){return c==null?"":_l(c).replace(Sl,"%2F")}function J1(c){try{return decodeURIComponent(""+c)}catch{}return""+c}const Dl=/\/$/,ql=c=>c.replace(Dl,"");function P3(c,a,e="/"){let r,s={},i="",n="";const o=a.indexOf("#");let f=a.indexOf("?");return o<f&&o>=0&&(f=-1),f>-1&&(r=a.slice(0,f),i=a.slice(f+1,o>-1?o:a.length),s=c(i)),o>-1&&(r=r||a.slice(0,o),n=a.slice(o,a.length)),r=Wl(r??a,e),{fullPath:r+(i&&"?")+i+n,path:r,query:s,hash:J1(n)}}function Ol(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function r8(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Ul(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&F1(a.matched[r],e.matched[s])&&D0(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function F1(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function D0(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Il(c[e],a[e]))return!1;return!0}function Il(c,a){return a1(c)?s8(c,a):a1(a)?s8(a,c):c===a}function s8(c,a){return a1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Wl(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=e.length-1,n,o;for(n=0;n<r.length;n++)if(o=r[n],o!==".")if(o==="..")i>1&&i--;else break;return e.slice(0,i).join("/")+"/"+r.slice(n).join("/")}var c2;(function(c){c.pop="pop",c.push="push"})(c2||(c2={}));var $1;(function(c){c.back="back",c.forward="forward",c.unknown=""})($1||($1={}));function Gl(c){if(!c)if(k1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),ql(c)}const jl=/^[^#]+#/;function $l(c,a){return c.replace(jl,"#")+a}function Zl(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const e3=()=>({left:window.scrollX,top:window.scrollY});function Kl(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=Zl(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.scrollX,a.top!=null?a.top:window.scrollY)}function i8(c,a){return(history.state?history.state.position-a:-1)+c}const e4=new Map;function Yl(c,a){e4.set(c,a)}function Xl(c){const a=e4.get(c);return e4.delete(c),a}let Ql=()=>location.protocol+"//"+location.host;function q0(c,a){const{pathname:e,search:r,hash:s}=a,i=c.indexOf("#");if(i>-1){let o=s.includes(c.slice(i))?c.slice(i).length:1,f=s.slice(o);return f[0]!=="/"&&(f="/"+f),r8(f,"")}return r8(e,c)+r+s}function Jl(c,a,e,r){let s=[],i=[],n=null;const o=({state:v})=>{const z=q0(c,location),p=e.value,V=a.value;let b=0;if(v){if(e.value=z,a.value=v,n&&n===p){n=null;return}b=V?v.position-V.position:0}else r(z);s.forEach(H=>{H(e.value,p,{delta:b,type:c2.pop,direction:b?b>0?$1.forward:$1.back:$1.unknown})})};function f(){n=e.value}function t(v){s.push(v);const z=()=>{const p=s.indexOf(v);p>-1&&s.splice(p,1)};return i.push(z),z}function l(){const{history:v}=window;v.state&&v.replaceState(P({},v.state,{scroll:e3()}),"")}function m(){for(const v of i)v();i=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:f,listen:t,destroy:m}}function n8(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?e3():null}}function cf(c){const{history:a,location:e}=window,r={value:q0(c,e)},s={value:a.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(f,t,l){const m=c.indexOf("#"),v=m>-1?(e.host&&document.querySelector("base")?c:c.slice(m))+f:Ql()+c+f;try{a[l?"replaceState":"pushState"](t,"",v),s.value=t}catch(z){console.error(z),e[l?"replace":"assign"](v)}}function n(f,t){const l=P({},a.state,n8(s.value.back,f,s.value.forward,!0),t,{position:s.value.position});i(f,l,!0),r.value=f}function o(f,t){const l=P({},s.value,a.state,{forward:f,scroll:e3()});i(l.current,l,!0);const m=P({},n8(r.value,f,null),{position:l.position+1},t);i(f,m,!1),r.value=f}return{location:r,state:s,push:o,replace:n}}function O0(c){c=Gl(c);const a=cf(c),e=Jl(c,a.state,a.location,a.replace);function r(i,n=!0){n||e.pauseListeners(),history.go(i)}const s=P({location:"",base:c,go:r,createHref:$l.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function af(c){return c=location.host?c||location.pathname+location.search:"",c.includes("#")||(c+="#"),O0(c)}function ef(c){return typeof c=="string"||c&&typeof c=="object"}function U0(c){return typeof c=="string"||typeof c=="symbol"}const Q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},I0=Symbol("");var o8;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(o8||(o8={}));function D1(c,a){return P(new Error,{type:c,[I0]:!0},a)}function n1(c,a){return c instanceof Error&&I0 in c&&(a==null||!!(c.type&a))}const l8="[^/]+?",rf={sensitive:!1,strict:!1,start:!0,end:!0},sf=/[.+*?^${}()[\]/\\]/g;function nf(c,a){const e=P({},rf,a),r=[];let s=e.start?"^":"";const i=[];for(const t of c){const l=t.length?[]:[90];e.strict&&!t.length&&(s+="/");for(let m=0;m<t.length;m++){const v=t[m];let z=40+(e.sensitive?.25:0);if(v.type===0)m||(s+="/"),s+=v.value.replace(sf,"\\$&"),z+=40;else if(v.type===1){const{value:p,repeatable:V,optional:b,regexp:H}=v;i.push({name:p,repeatable:V,optional:b});const h=H||l8;if(h!==l8){z+=10;try{new RegExp(`(${h})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${p}" (${h}): `+x.message)}}let M=V?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;m||(M=b&&t.length<2?`(?:/${M})`:"/"+M),b&&(M+="?"),s+=M,z+=20,b&&(z+=-8),V&&(z+=-20),h===".*"&&(z+=-50)}l.push(z)}r.push(l)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const n=new RegExp(s,e.sensitive?"":"i");function o(t){const l=t.match(n),m={};if(!l)return null;for(let v=1;v<l.length;v++){const z=l[v]||"",p=i[v-1];m[p.name]=z&&p.repeatable?z.split("/"):z}return m}function f(t){let l="",m=!1;for(const v of c){(!m||!l.endsWith("/"))&&(l+="/"),m=!1;for(const z of v)if(z.type===0)l+=z.value;else if(z.type===1){const{value:p,repeatable:V,optional:b}=z,H=p in t?t[p]:"";if(a1(H)&&!V)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const h=a1(H)?H.join("/"):H;if(!h)if(b)v.length<2&&(l.endsWith("/")?l=l.slice(0,-1):m=!0);else throw new Error(`Missing required param "${p}"`);l+=h}}return l||"/"}return{re:n,score:r,keys:i,parse:o,stringify:f}}function of(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===80?-1:1:c.length>a.length?a.length===1&&a[0]===80?1:-1:0}function lf(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const i=of(r[e],s[e]);if(i)return i;e++}if(Math.abs(s.length-r.length)===1){if(f8(r))return 1;if(f8(s))return-1}return s.length-r.length}function f8(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const ff={type:0,value:""},tf=/[a-zA-Z0-9_]/;function mf(c){if(!c)return[[]];if(c==="/")return[[ff]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(z){throw new Error(`ERR (${e})/"${t}": ${z}`)}let e=0,r=e;const s=[];let i;function n(){i&&s.push(i),i=[]}let o=0,f,t="",l="";function m(){t&&(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(f==="*"||f==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:l,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):a("Invalid state to consume buffer"),t="")}function v(){t+=f}for(;o<c.length;){if(f=c[o++],f==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:f==="/"?(t&&m(),n()):f===":"?(m(),e=1):v();break;case 4:v(),e=r;break;case 1:f==="("?e=2:tf.test(f)?v():(m(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&o--);break;case 2:f===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+f:e=3:l+=f;break;case 3:m(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&o--,l="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),m(),n(),s}function vf(c,a,e){const r=nf(mf(c.path),e),s=P(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function zf(c,a){const e=[],r=new Map;a=v8({strict:!1,end:!0,sensitive:!1},a);function s(l){return r.get(l)}function i(l,m,v){const z=!v,p=hf(l);p.aliasOf=v&&v.record;const V=v8(a,l),b=[p];if("alias"in l){const M=typeof l.alias=="string"?[l.alias]:l.alias;for(const x of M)b.push(P({},p,{components:v?v.record.components:p.components,path:x,aliasOf:v?v.record:p}))}let H,h;for(const M of b){const{path:x}=M;if(m&&x[0]!=="/"){const S=m.record.path,w=S[S.length-1]==="/"?"":"/";M.path=m.record.path+(x&&w+x)}if(H=vf(M,m,V),v?v.alias.push(H):(h=h||H,h!==H&&h.alias.push(H),z&&l.name&&!m8(H)&&n(l.name)),p.children){const S=p.children;for(let w=0;w<S.length;w++)i(S[w],H,v&&v.children[w])}v=v||H,(H.record.components&&Object.keys(H.record.components).length||H.record.name||H.record.redirect)&&f(H)}return h?()=>{n(h)}:j1}function n(l){if(U0(l)){const m=r.get(l);m&&(r.delete(l),e.splice(e.indexOf(m),1),m.children.forEach(n),m.alias.forEach(n))}else{const m=e.indexOf(l);m>-1&&(e.splice(m,1),l.record.name&&r.delete(l.record.name),l.children.forEach(n),l.alias.forEach(n))}}function o(){return e}function f(l){let m=0;for(;m<e.length&&lf(l,e[m])>=0&&(l.record.path!==e[m].record.path||!W0(l,e[m]));)m++;e.splice(m,0,l),l.record.name&&!m8(l)&&r.set(l.record.name,l)}function t(l,m){let v,z={},p,V;if("name"in l&&l.name){if(v=r.get(l.name),!v)throw D1(1,{location:l});V=v.record.name,z=P(t8(m.params,v.keys.filter(h=>!h.optional).concat(v.parent?v.parent.keys.filter(h=>h.optional):[]).map(h=>h.name)),l.params&&t8(l.params,v.keys.map(h=>h.name))),p=v.stringify(z)}else if(l.path!=null)p=l.path,v=e.find(h=>h.re.test(p)),v&&(z=v.parse(p),V=v.record.name);else{if(v=m.name?r.get(m.name):e.find(h=>h.re.test(m.path)),!v)throw D1(1,{location:l,currentLocation:m});V=v.record.name,z=P({},m.params,l.params),p=v.stringify(z)}const b=[];let H=v;for(;H;)b.unshift(H.record),H=H.parent;return{name:V,path:p,params:z,matched:b,meta:uf(b)}}return c.forEach(l=>i(l)),{addRoute:i,resolve:t,removeRoute:n,getRoutes:o,getRecordMatcher:s}}function t8(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function hf(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Hf(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Hf(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function m8(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function uf(c){return c.reduce((a,e)=>P(a,e.meta),{})}function v8(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function W0(c,a){return a.children.some(e=>e===c||W0(c,e))}function pf(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(B0," "),n=i.indexOf("="),o=J1(n<0?i:i.slice(0,n)),f=n<0?null:J1(i.slice(n+1));if(o in a){let t=a[o];a1(t)||(t=a[o]=[t]),t.push(f)}else a[o]=f}return a}function z8(c){let a="";for(let e in c){const r=c[e];if(e=El(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(a1(r)?r.map(i=>i&&a4(i)):[r&&a4(r)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function Vf(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=a1(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const Mf=Symbol(""),h8=Symbol(""),x4=Symbol(""),N4=Symbol(""),r4=Symbol("");function W1(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function p1(c,a,e,r,s,i=n=>n()){const n=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,f)=>{const t=v=>{v===!1?f(D1(4,{from:e,to:a})):v instanceof Error?f(v):ef(v)?f(D1(2,{from:a,to:v})):(n&&r.enterCallbacks[s]===n&&typeof v=="function"&&n.push(v),o())},l=i(()=>c.call(r&&r.instances[s],a,e,t));let m=Promise.resolve(l);c.length<3&&(m=m.then(t)),m.catch(v=>f(v))})}function T3(c,a,e,r,s=i=>i()){const i=[];for(const n of c)for(const o in n.components){let f=n.components[o];if(!(a!=="beforeRouteEnter"&&!n.instances[o]))if(Cf(f)){const l=(f.__vccOpts||f)[a];l&&i.push(p1(l,e,r,n,o,s))}else{let t=f();i.push(()=>t.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${n.path}"`));const m=xl(l)?l.default:l;n.components[o]=m;const z=(m.__vccOpts||m)[a];return z&&p1(z,e,r,n,o,s)()}))}}return i}function Cf(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function H8(c){const a=c1(x4),e=c1(N4),r=E(()=>{const f=F(c.to);return a.resolve(f)}),s=E(()=>{const{matched:f}=r.value,{length:t}=f,l=f[t-1],m=e.matched;if(!l||!m.length)return-1;const v=m.findIndex(F1.bind(null,l));if(v>-1)return v;const z=u8(f[t-2]);return t>1&&u8(l)===z&&m[m.length-1].path!==z?m.findIndex(F1.bind(null,f[t-2])):v}),i=E(()=>s.value>-1&&bf(e.params,r.value.params)),n=E(()=>s.value>-1&&s.value===e.matched.length-1&&D0(e.params,r.value.params));function o(f={}){return gf(f)?a[F(c.replace)?"replace":"push"](F(c.to)).catch(j1):Promise.resolve()}return{route:r,href:E(()=>r.value.href),isActive:i,isExactActive:n,navigate:o}}const df=s1({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:H8,setup(c,{slots:a}){const e=n2(H8(c)),{options:r}=c1(x4),s=E(()=>({[p8(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[p8(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:K("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},i)}}}),Lf=df;function gf(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function bf(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!a1(s)||s.length!==r.length||r.some((i,n)=>i!==s[n]))return!1}return!0}function u8(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const p8=(c,a,e)=>c??a??e,xf=s1({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=c1(r4),s=E(()=>c.route||r.value),i=c1(h8,0),n=E(()=>{let t=F(i);const{matched:l}=s.value;let m;for(;(m=l[t])&&!m.components;)t++;return t}),o=E(()=>s.value.matched[n.value]);B1(h8,E(()=>n.value+1)),B1(Mf,o),B1(r4,s);const f=l1();return Z2(()=>[f.value,o.value,c.name],([t,l,m],[v,z,p])=>{l&&(l.instances[m]=t,z&&z!==l&&t&&t===v&&(l.leaveGuards.size||(l.leaveGuards=z.leaveGuards),l.updateGuards.size||(l.updateGuards=z.updateGuards))),t&&l&&(!z||!F1(l,z)||!v)&&(l.enterCallbacks[m]||[]).forEach(V=>V(t))},{flush:"post"}),()=>{const t=s.value,l=c.name,m=o.value,v=m&&m.components[l];if(!v)return V8(e.default,{Component:v,route:t});const z=m.props[l],p=z?z===!0?t.params:typeof z=="function"?z(t):z:null,b=K(v,P({},p,a,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(m.instances[l]=null)},ref:f}));return V8(e.default,{Component:b,route:t})||b}}});function V8(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const G0=xf;function Nf(c){const a=zf(c.routes,c),e=c.parseQuery||pf,r=c.stringifyQuery||z8,s=c.history,i=W1(),n=W1(),o=W1(),f=X1(Q);let t=Q;k1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=A3.bind(null,u=>""+u),m=A3.bind(null,Fl),v=A3.bind(null,J1);function z(u,L){let C,N;return U0(u)?(C=a.getRecordMatcher(u),N=L):N=u,a.addRoute(N,C)}function p(u){const L=a.getRecordMatcher(u);L&&a.removeRoute(L)}function V(){return a.getRoutes().map(u=>u.record)}function b(u){return!!a.getRecordMatcher(u)}function H(u,L){if(L=P({},L||f.value),typeof u=="string"){const y=P3(e,u,L.path),U=a.resolve({path:y.path},L),I1=s.createHref(y.fullPath);return P(y,U,{params:v(U.params),hash:J1(y.hash),redirectedFrom:void 0,href:I1})}let C;if(u.path!=null)C=P({},u,{path:P3(e,u.path,L.path).path});else{const y=P({},u.params);for(const U in y)y[U]==null&&delete y[U];C=P({},u,{params:m(y)}),L.params=m(L.params)}const N=a.resolve(C,L),R=u.hash||"";N.params=l(v(N.params));const O=Ol(r,P({},u,{hash:Bl(R),path:N.path})),k=s.createHref(O);return P({fullPath:O,hash:R,query:r===z8?Vf(u.query):u.query||{}},N,{redirectedFrom:void 0,href:k})}function h(u){return typeof u=="string"?P3(e,u,f.value.path):P({},u)}function M(u,L){if(t!==u)return D1(8,{from:L,to:u})}function x(u){return A(u)}function S(u){return x(P(h(u),{replace:!0}))}function w(u){const L=u.matched[u.matched.length-1];if(L&&L.redirect){const{redirect:C}=L;let N=typeof C=="function"?C(u):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=h(N):{path:N},N.params={}),P({query:u.query,hash:u.hash,params:N.path!=null?{}:u.params},N)}}function A(u,L){const C=t=H(u),N=f.value,R=u.state,O=u.force,k=u.replace===!0,y=w(C);if(y)return A(P(h(y),{state:typeof y=="object"?P({},R,y.state):R,force:O,replace:k}),L||C);const U=C;U.redirectedFrom=L;let I1;return!O&&Ul(r,N,C)&&(I1=D1(16,{to:U,from:N}),E6(N,N,!0,!1)),(I1?Promise.resolve(I1):V2(U,N)).catch(j=>n1(j)?n1(j,2)?j:x3(j):b3(j,U,N)).then(j=>{if(j){if(n1(j,2))return A(P({replace:k},h(j.to),{state:typeof j.to=="object"?P({},R,j.to.state):R,force:O}),L||U)}else j=R6(U,N,!0,k,R);return T6(U,N,j),j})}function G(u,L){const C=M(u,L);return C?Promise.reject(C):Promise.resolve()}function W(u){const L=C2.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(u):u()}function V2(u,L){let C;const[N,R,O]=Sf(u,L);C=T3(N.reverse(),"beforeRouteLeave",u,L);for(const y of N)y.leaveGuards.forEach(U=>{C.push(p1(U,u,L))});const k=G.bind(null,u,L);return C.push(k),y1(C).then(()=>{C=[];for(const y of i.list())C.push(p1(y,u,L));return C.push(k),y1(C)}).then(()=>{C=T3(R,"beforeRouteUpdate",u,L);for(const y of R)y.updateGuards.forEach(U=>{C.push(p1(U,u,L))});return C.push(k),y1(C)}).then(()=>{C=[];for(const y of O)if(y.beforeEnter)if(a1(y.beforeEnter))for(const U of y.beforeEnter)C.push(p1(U,u,L));else C.push(p1(y.beforeEnter,u,L));return C.push(k),y1(C)}).then(()=>(u.matched.forEach(y=>y.enterCallbacks={}),C=T3(O,"beforeRouteEnter",u,L,W),C.push(k),y1(C))).then(()=>{C=[];for(const y of n.list())C.push(p1(y,u,L));return C.push(k),y1(C)}).catch(y=>n1(y,8)?y:Promise.reject(y))}function T6(u,L,C){o.list().forEach(N=>W(()=>N(u,L,C)))}function R6(u,L,C,N,R){const O=M(u,L);if(O)return O;const k=L===Q,y=k1?history.state:{};C&&(N||k?s.replace(u.fullPath,P({scroll:k&&y&&y.scroll},R)):s.push(u.fullPath,R)),f.value=u,E6(u,L,C,k),x3()}let U1;function Ti(){U1||(U1=s.listen((u,L,C)=>{if(!_6.listening)return;const N=H(u),R=w(N);if(R){A(P(R,{replace:!0}),N).catch(j1);return}t=N;const O=f.value;k1&&Yl(i8(O.fullPath,C.delta),e3()),V2(N,O).catch(k=>n1(k,12)?k:n1(k,2)?(A(k.to,N).then(y=>{n1(y,20)&&!C.delta&&C.type===c2.pop&&s.go(-1,!1)}).catch(j1),Promise.reject()):(C.delta&&s.go(-C.delta,!1),b3(k,N,O))).then(k=>{k=k||R6(N,O,!1),k&&(C.delta&&!n1(k,8)?s.go(-C.delta,!1):C.type===c2.pop&&n1(k,20)&&s.go(-1,!1)),T6(N,O,k)}).catch(j1)}))}let g3=W1(),B6=W1(),M2;function b3(u,L,C){x3(u);const N=B6.list();return N.length?N.forEach(R=>R(u,L,C)):console.error(u),Promise.reject(u)}function Ri(){return M2&&f.value!==Q?Promise.resolve():new Promise((u,L)=>{g3.add([u,L])})}function x3(u){return M2||(M2=!u,Ti(),g3.list().forEach(([L,C])=>u?C(u):L()),g3.reset()),u}function E6(u,L,C,N){const{scrollBehavior:R}=c;if(!k1||!R)return Promise.resolve();const O=!C&&Xl(i8(u.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return o2().then(()=>R(u,L,O)).then(k=>k&&Kl(k)).catch(k=>b3(k,u,L))}const N3=u=>s.go(u);let S3;const C2=new Set,_6={currentRoute:f,listening:!0,addRoute:z,removeRoute:p,hasRoute:b,getRoutes:V,resolve:H,options:c,push:x,replace:S,go:N3,back:()=>N3(-1),forward:()=>N3(1),beforeEach:i.add,beforeResolve:n.add,afterEach:o.add,onError:B6.add,isReady:Ri,install(u){const L=this;u.component("RouterLink",Lf),u.component("RouterView",G0),u.config.globalProperties.$router=L,Object.defineProperty(u.config.globalProperties,"$route",{enumerable:!0,get:()=>F(f)}),k1&&!S3&&f.value===Q&&(S3=!0,x(s.location).catch(R=>{}));const C={};for(const R in Q)Object.defineProperty(C,R,{get:()=>f.value[R],enumerable:!0});u.provide(x4,L),u.provide(N4,K2(C)),u.provide(r4,f);const N=u.unmount;C2.add(u),u.unmount=function(){C2.delete(u),C2.size<1&&(t=Q,U1&&U1(),U1=null,f.value=Q,S3=!1,M2=!1),N()}}};function y1(u){return u.reduce((L,C)=>L.then(()=>W(C)),Promise.resolve())}return _6}function Sf(c,a){const e=[],r=[],s=[],i=Math.max(a.matched.length,c.matched.length);for(let n=0;n<i;n++){const o=a.matched[n];o&&(c.matched.find(t=>F1(t,o))?r.push(o):e.push(o));const f=c.matched[n];f&&(a.matched.find(t=>F1(t,f))||s.push(f))}return[e,r,s]}function yf(){return c1(N4)}const wf=(c,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,e=>{var r;return((r=c.params[e.slice(1)])==null?void 0:r.toString())||""}),s4=(c,a)=>{const e=c.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===c.Component.type}),r=a??(e==null?void 0:e.meta.key)??(e&&wf(c.route,e));return typeof r=="function"?r(c.route):r},kf=(c,a)=>({default:()=>c?K(Ui,c===!0?{}:c,a):a});function S4(c){return Array.isArray(c)?c:[c]}const Af="modulepreload",Pf=function(c,a){return c[0]==="."?new URL(c,a).href:c},M8={},Tf=function(a,e,r){let s=Promise.resolve();if(e&&e.length>0){const i=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),o=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.all(e.map(f=>{if(f=Pf(f,r),f in M8)return;M8[f]=!0;const t=f.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!r)for(let z=i.length-1;z>=0;z--){const p=i[z];if(p.href===f&&(!t||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${l}`))return;const v=document.createElement("link");if(v.rel=t?"stylesheet":Af,t||(v.as="script",v.crossOrigin=""),v.href=f,o&&v.setAttribute("nonce",o),document.head.appendChild(v),t)return new Promise((z,p)=>{v.addEventListener("load",z),v.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${f}`)))})}))}return s.then(()=>a()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},I2=(...c)=>Tf(...c).catch(a=>{const e=new Event("nuxt.preloadError");throw e.payload=a,window.dispatchEvent(e),a}),R3=null,B3=null,C8=[{name:"about",path:"/about",meta:{},alias:[],redirect:R3==null?void 0:R3.redirect,component:()=>I2(()=>import("./DnNsX0p0.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(c=>c.default||c)},{name:"index",path:"/",meta:{},alias:[],redirect:B3==null?void 0:B3.redirect,component:()=>I2(()=>import("./BrPXNuAo.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(c=>c.default||c)}],j0=(c,a,e)=>(a=a===!0?{}:a,{default:()=>{var r;return a?K(c,a,e):(r=e.default)==null?void 0:r.call(e)}});function d8(c){const a=(c==null?void 0:c.meta.key)??c.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,e=>{var r;return((r=c.params[e.slice(1)])==null?void 0:r.toString())||""});return typeof a=="function"?a(c):a}function Rf(c,a){return c===a||a===Q?!1:d8(c)!==d8(a)?!0:!c.matched.every((r,s)=>{var i,n;return r.components&&r.components.default===((n=(i=a.matched[s])==null?void 0:i.components)==null?void 0:n.default)})}const Bf={scrollBehavior(c,a,e){var t;const r=D(),s=((t=i1().options)==null?void 0:t.scrollBehaviorType)??"auto";let i=e||void 0;const n=typeof c.meta.scrollToTop=="function"?c.meta.scrollToTop(c,a):c.meta.scrollToTop;if(!i&&a&&c&&n!==!1&&Rf(c,a)&&(i={left:0,top:0}),c.path===a.path)return a.hash&&!c.hash?{left:0,top:0}:c.hash?{el:c.hash,top:L8(c.hash),behavior:s}:!1;const o=l=>!!(l.meta.pageTransition??c4),f=o(a)&&o(c)?"page:transition:finish":"page:finish";return new Promise(l=>{r.hooks.hookOnce(f,async()=>{await new Promise(m=>setTimeout(m,0)),c.hash&&(i={el:c.hash,top:L8(c.hash),behavior:s}),l(i)})})}};function L8(c){try{const a=document.querySelector(c);if(a)return parseFloat(getComputedStyle(a).scrollMarginTop)}catch{}return 0}const Ef={hashMode:!1,scrollBehaviorType:"auto"},Y={...Ef,...Bf},_f=async c=>{var f;let a,e;if(!((f=c.meta)!=null&&f.validate))return;const r=D(),s=i1();if(([a,e]=Q1(()=>Promise.resolve(c.meta.validate(c))),a=await a,e(),a)===!0)return;const n=c3({statusCode:404,statusMessage:`Page Not Found: ${c.fullPath}`,data:{path:c.fullPath}}),o=s.beforeResolve(t=>{if(o(),t===c){const l=s.afterEach(async()=>{l(),await r.runWithContext(()=>P1(n)),window.history.pushState({},"",c.fullPath)});return!1}})},Ff=async c=>{let a,e;const r=([a,e]=Q1(()=>g4(c.path)),a=await a,e(),a);if(r.redirect)return f1(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},Df=[_f,Ff],Z1={};function qf(c,a,e){const{pathname:r,search:s,hash:i}=a,n=c.indexOf("#");if(n>-1){const t=i.includes(c.slice(n))?c.slice(n).length:1;let l=i.slice(t);return l[0]!=="/"&&(l="/"+l),I6(l,"")}const o=I6(r,c),f=!e||yn(o,e,{trailingSlash:!0})?o:e;return f+(f.includes("?")?"":s)+i}const Of=z1({name:"nuxt:router",enforce:"pre",async setup(c){var b,H;let a,e,r=X2().app.baseURL;Y.hashMode&&!r.includes("#")&&(r+="#");const s=((b=Y.history)==null?void 0:b.call(Y,r))??(Y.hashMode?af(r):O0(r)),i=((H=Y.routes)==null?void 0:H.call(Y,C8))??C8;let n;const o=Nf({...Y,scrollBehavior:(h,M,x)=>{if(M===Q){n=x;return}if(Y.scrollBehavior){if(o.options.scrollBehavior=Y.scrollBehavior,"scrollRestoration"in window.history){const S=o.beforeEach(()=>{S(),window.history.scrollRestoration="manual"})}return Y.scrollBehavior(h,Q,n||x)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),c.vueApp.use(o);const f=X1(o.currentRoute.value);o.afterEach((h,M)=>{f.value=M}),Object.defineProperty(c.vueApp.config.globalProperties,"previousRoute",{get:()=>f.value});const t=qf(r,window.location,c.payload.path),l=X1(o.currentRoute.value),m=()=>{l.value=o.currentRoute.value};c.hook("page:finish",m),o.afterEach((h,M)=>{var x,S,w,A;((S=(x=h.matched[0])==null?void 0:x.components)==null?void 0:S.default)===((A=(w=M.matched[0])==null?void 0:w.components)==null?void 0:A.default)&&m()});const v={};for(const h in l.value)Object.defineProperty(v,h,{get:()=>l.value[h]});c._route=K2(v),c._middleware=c._middleware||{global:[],named:{}};try{[a,e]=Q1(()=>o.isReady()),await a,e()}catch(h){[a,e]=Q1(()=>c.runWithContext(()=>P1(h))),await a,e()}const z=t!==o.currentRoute.value.fullPath?o.resolve(t):o.currentRoute.value;m();const p=c.payload.state._layout;o.beforeEach(async(h,M)=>{var x;await c.callHook("page:loading:start"),h.meta=n2(h.meta),c.isHydrating&&p&&!Ii(h.meta.layout)&&(h.meta.layout=p),c._processingMiddleware=!0;{const S=new Set([...Df,...c._middleware.global]);for(const w of h.matched){const A=w.meta.middleware;if(A)for(const G of S4(A))S.add(G)}{const w=await c.runWithContext(()=>g4(h.path));if(w.appMiddleware)for(const A in w.appMiddleware)w.appMiddleware[A]?S.add(A):S.delete(A)}for(const w of S){const A=typeof w=="string"?c._middleware.named[w]||await((x=Z1[w])==null?void 0:x.call(Z1).then(W=>W.default||W)):w;if(!A)throw new Error(`Unknown route middleware: '${w}'.`);const G=await c.runWithContext(()=>A(h,M));if(!c.payload.serverRendered&&c.isHydrating&&(G===!1||G instanceof Error)){const W=G||Y3({statusCode:404,statusMessage:`Page Not Found: ${t}`});return await c.runWithContext(()=>P1(W)),!1}if(G!==!0&&(G||G===!1))return G}}}),o.onError(async()=>{delete c._processingMiddleware,await c.callHook("page:loading:end")});const V=J2();return o.afterEach(async(h,M,x)=>{delete c._processingMiddleware,!c.isHydrating&&V.value&&await c.runWithContext(Vo),x&&await c.callHook("page:loading:end"),h.matched.length===0&&await c.runWithContext(()=>P1(Y3({statusCode:404,fatal:!1,statusMessage:`Page not found: ${h.fullPath}`,data:{path:h.fullPath}})))}),c.hooks.hookOnce("app:created",async()=>{try{"name"in z&&(z.name=void 0),await o.replace({...z,force:!0}),o.options.scrollBehavior=Y.scrollBehavior}catch(h){await c.runWithContext(()=>P1(h))}}),{provide:{router:o}}}}),g8=globalThis.requestIdleCallback||(c=>{const a=Date.now(),e={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{c(e)},1)}),TK=globalThis.cancelIdleCallback||(c=>{clearTimeout(c)}),$0=c=>{const a=D();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{g8(c)}):g8(c)},Uf=z1({name:"nuxt:payload",setup(c){i1().beforeResolve(async(a,e)=>{if(a.path===e.path)return;const r=await a8(a.path);r&&Object.assign(c.static.data,r.data)}),$0(()=>{var a;c.hooks.hook("link:prefetch",async e=>{l2(e).protocol||await a8(e)}),((a=navigator.connection)==null?void 0:a.effectiveType)!=="slow-2g"&&setTimeout(a3,1e3)})}}),If=z1(c=>{let a;async function e(){const r=await a3();a&&clearTimeout(a),a=setTimeout(e,1e3*60*60);try{const s=await $fetch(C4("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&c.hooks.callHook("app:manifest:update",s)}catch{}}$0(()=>{a=setTimeout(e,1e3*60*60)})}),Wf=z1({name:"nuxt:global-components"}),M1={},Gf=z1({name:"nuxt:prefetch",setup(c){const a=i1();c.hooks.hook("app:mounted",()=>{a.beforeEach(async e=>{var s;const r=(s=e==null?void 0:e.meta)==null?void 0:s.layout;r&&typeof M1[r]=="function"&&await M1[r]()})}),c.hooks.hook("link:prefetch",e=>{if(f1(e))return;const r=a.resolve(e);if(!r)return;const s=r.meta.layout;let i=S4(r.meta.middleware);i=i.filter(n=>typeof n=="string");for(const n of i)typeof Z1[n]=="function"&&Z1[n]();s&&typeof M1[s]=="function"&&M1[s]()})}});function jf(c={}){const a=c.path||window.location.pathname;let e={};try{e=_2(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(c.force||(e==null?void 0:e.path)!==a||(e==null?void 0:e.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:a,expires:Date.now()+(c.ttl??1e4)}))}catch{}if(c.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:D().payload.state}))}catch{}window.location.pathname!==a?window.location.href=a:window.location.reload()}}const $f=z1({name:"nuxt:chunk-reload",setup(c){const a=i1(),e=X2(),r=new Set;a.beforeEach(()=>{r.clear()}),c.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o="href"in i&&i.href[0]==="#"?e.app.baseURL+i.href:_1(e.app.baseURL,i.fullPath);jf({path:o,persistState:!0})}c.hook("app:manifest:update",()=>{a.beforeResolve(s)}),a.onError((i,n)=>{r.has(i)&&s(n)})}});function b8(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function d(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?b8(Object(e),!0).forEach(function(r){I(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):b8(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function W2(c){"@babel/helpers - typeof";return W2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},W2(c)}function Zf(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function Kf(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Yf(c,a,e){return a&&Kf(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function I(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function y4(c,a){return Qf(c)||ct(c,a)||Z0(c,a)||et()}function t2(c){return Xf(c)||Jf(c)||Z0(c)||at()}function Xf(c){if(Array.isArray(c))return i4(c)}function Qf(c){if(Array.isArray(c))return c}function Jf(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ct(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,o;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(f){i=!0,o=f}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw o}}return r}}function Z0(c,a){if(c){if(typeof c=="string")return i4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i4(c,a)}}function i4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function at(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function et(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var x8=function(){},w4={},K0={},Y0=null,X0={mark:x8,measure:x8};try{typeof window<"u"&&(w4=window),typeof document<"u"&&(K0=document),typeof MutationObserver<"u"&&(Y0=MutationObserver),typeof performance<"u"&&(X0=performance)}catch{}var rt=w4.navigator||{},N8=rt.userAgent,S8=N8===void 0?"":N8,C1=w4,_=K0,y8=Y0,g2=X0;C1.document;var h1=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",Q0=~S8.indexOf("MSIE")||~S8.indexOf("Trident/"),b2,x2,N2,S2,y2,t1="___FONT_AWESOME___",n4=16,J0="fa",c5="svg-inline--fa",N1="data-fa-i2svg",o4="data-fa-pseudo-element",st="data-fa-pseudo-element-pending",k4="data-prefix",A4="data-icon",w8="fontawesome-i2svg",it="async",nt=["HTML","HEAD","STYLE","SCRIPT"],a5=function(){try{return!0}catch{return!1}}(),B="classic",q="sharp",P4=[B,q];function m2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[B]}})}var a2=m2((b2={},I(b2,B,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),I(b2,q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),b2)),e2=m2((x2={},I(x2,B,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),I(x2,q,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),x2)),r2=m2((N2={},I(N2,B,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),I(N2,q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),N2)),ot=m2((S2={},I(S2,B,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),I(S2,q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),S2)),lt=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,e5="fa-layers-text",ft=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,tt=m2((y2={},I(y2,B,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),I(y2,q,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),y2)),r5=[1,2,3,4,5,6,7,8,9,10],mt=r5.concat([11,12,13,14,15,16,17,18,19,20]),vt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],b1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},s2=new Set;Object.keys(e2[B]).map(s2.add.bind(s2));Object.keys(e2[q]).map(s2.add.bind(s2));var zt=[].concat(P4,t2(s2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",b1.GROUP,b1.SWAP_OPACITY,b1.PRIMARY,b1.SECONDARY]).concat(r5.map(function(c){return"".concat(c,"x")})).concat(mt.map(function(c){return"w-".concat(c)})),K1=C1.FontAwesomeConfig||{};function ht(c){var a=_.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Ht(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(_&&typeof _.querySelector=="function"){var ut=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ut.forEach(function(c){var a=y4(c,2),e=a[0],r=a[1],s=Ht(ht(e));s!=null&&(K1[r]=s)})}var s5={styleDefault:"solid",familyDefault:"classic",cssPrefix:J0,replacementClass:c5,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K1.familyPrefix&&(K1.cssPrefix=K1.familyPrefix);var q1=d(d({},s5),K1);q1.autoReplaceSvg||(q1.observeMutations=!1);var g={};Object.keys(s5).forEach(function(c){Object.defineProperty(g,c,{enumerable:!0,set:function(e){q1[c]=e,Y1.forEach(function(r){return r(g)})},get:function(){return q1[c]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(a){q1.cssPrefix=a,Y1.forEach(function(e){return e(g)})},get:function(){return q1.cssPrefix}});C1.FontAwesomeConfig=g;var Y1=[];function pt(c){return Y1.push(c),function(){Y1.splice(Y1.indexOf(c),1)}}var u1=n4,e1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vt(c){if(!(!c||!h1)){var a=_.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=_.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return _.head.insertBefore(a,r),c}}var Mt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i2(){for(var c=12,a="";c-- >0;)a+=Mt[Math.random()*62|0];return a}function O1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function T4(c){return c.classList?O1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function i5(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ct(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(i5(c[e]),'" ')},"").trim()}function r3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function R4(c){return c.size!==e1.size||c.x!==e1.x||c.y!==e1.y||c.rotate!==e1.rotate||c.flipX||c.flipY}function dt(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(o)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:t}}function Lt(c){var a=c.transform,e=c.width,r=e===void 0?n4:e,s=c.height,i=s===void 0?n4:s,n=c.startCentered,o=n===void 0?!1:n,f="";return o&&Q0?f+="translate(".concat(a.x/u1-r/2,"em, ").concat(a.y/u1-i/2,"em) "):o?f+="translate(calc(-50% + ".concat(a.x/u1,"em), calc(-50% + ").concat(a.y/u1,"em)) "):f+="translate(".concat(a.x/u1,"em, ").concat(a.y/u1,"em) "),f+="scale(".concat(a.size/u1*(a.flipX?-1:1),", ").concat(a.size/u1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var gt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function n5(){var c=J0,a=c5,e=g.cssPrefix,r=g.replacementClass,s=gt;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(o,".".concat(r))}return s}var k8=!1;function E3(){g.autoAddCss&&!k8&&(Vt(n5()),k8=!0)}var bt={mixout:function(){return{dom:{css:n5,insertCss:E3}}},hooks:function(){return{beforeDOMElementCreation:function(){E3()},beforeI2svg:function(){E3()}}}},m1=C1||{};m1[t1]||(m1[t1]={});m1[t1].styles||(m1[t1].styles={});m1[t1].hooks||(m1[t1].hooks={});m1[t1].shims||(m1[t1].shims=[]);var J=m1[t1],o5=[],xt=function c(){_.removeEventListener("DOMContentLoaded",c),G2=1,o5.map(function(a){return a()})},G2=!1;h1&&(G2=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),G2||_.addEventListener("DOMContentLoaded",xt));function Nt(c){h1&&(G2?setTimeout(c,0):o5.push(c))}function v2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?i5(c):"<".concat(a," ").concat(Ct(r),">").concat(i.map(v2).join(""),"</").concat(a,">")}function A8(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var _3=function(a,e,r,s){var i=Object.keys(a),n=i.length,o=e,f,t,l;for(r===void 0?(f=1,l=a[i[0]]):(f=0,l=r);f<n;f++)t=i[f],l=o(l,a[t],t,a);return l};function St(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function l4(c){var a=St(c);return a.length===1?a[0].toString(16):null}function yt(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function P8(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function f4(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=P8(a);typeof J.hooks.addPack=="function"&&!s?J.hooks.addPack(c,P8(a)):J.styles[c]=d(d({},J.styles[c]||{}),i),c==="fas"&&f4("fa",a)}var w2,k2,A2,T1=J.styles,wt=J.shims,kt=(w2={},I(w2,B,Object.values(r2[B])),I(w2,q,Object.values(r2[q])),w2),B4=null,l5={},f5={},t5={},m5={},v5={},At=(k2={},I(k2,B,Object.keys(a2[B])),I(k2,q,Object.keys(a2[q])),k2);function Pt(c){return~zt.indexOf(c)}function Tt(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Pt(s)?s:null}var z5=function(){var a=function(i){return _3(T1,function(n,o,f){return n[f]=_3(o,i,{}),n},{})};l5=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var o=i[2].filter(function(f){return typeof f=="number"});o.forEach(function(f){s[f.toString(16)]=n})}return s}),f5=a(function(s,i,n){if(s[n]=n,i[2]){var o=i[2].filter(function(f){return typeof f=="string"});o.forEach(function(f){s[f]=n})}return s}),v5=a(function(s,i,n){var o=i[2];return s[n]=n,o.forEach(function(f){s[f]=n}),s});var e="far"in T1||g.autoFetchSvg,r=_3(wt,function(s,i){var n=i[0],o=i[1],f=i[2];return o==="far"&&!e&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:f}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:f}),s},{names:{},unicodes:{}});t5=r.names,m5=r.unicodes,B4=s3(g.styleDefault,{family:g.familyDefault})};pt(function(c){B4=s3(c.styleDefault,{family:g.familyDefault})});z5();function E4(c,a){return(l5[c]||{})[a]}function Rt(c,a){return(f5[c]||{})[a]}function x1(c,a){return(v5[c]||{})[a]}function h5(c){return t5[c]||{prefix:null,iconName:null}}function Bt(c){var a=m5[c],e=E4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function d1(){return B4}var _4=function(){return{prefix:null,iconName:null,rest:[]}};function s3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?B:e,s=a2[r][c],i=e2[r][c]||e2[r][s],n=c in J.styles?c:null;return i||n||null}var T8=(A2={},I(A2,B,Object.keys(r2[B])),I(A2,q,Object.keys(r2[q])),A2);function i3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},I(a,B,"".concat(g.cssPrefix,"-").concat(B)),I(a,q,"".concat(g.cssPrefix,"-").concat(q)),a),n=null,o=B;(c.includes(i[B])||c.some(function(t){return T8[B].includes(t)}))&&(o=B),(c.includes(i[q])||c.some(function(t){return T8[q].includes(t)}))&&(o=q);var f=c.reduce(function(t,l){var m=Tt(g.cssPrefix,l);if(T1[l]?(l=kt[o].includes(l)?ot[o][l]:l,n=l,t.prefix=l):At[o].indexOf(l)>-1?(n=l,t.prefix=s3(l,{family:o})):m?t.iconName=m:l!==g.replacementClass&&l!==i[B]&&l!==i[q]&&t.rest.push(l),!s&&t.prefix&&t.iconName){var v=n==="fa"?h5(t.iconName):{},z=x1(t.prefix,t.iconName);v.prefix&&(n=null),t.iconName=v.iconName||z||t.iconName,t.prefix=v.prefix||t.prefix,t.prefix==="far"&&!T1.far&&T1.fas&&!g.autoFetchSvg&&(t.prefix="fas")}return t},_4());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&o===q&&(T1.fass||g.autoFetchSvg)&&(f.prefix="fass",f.iconName=x1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=d1()||"fas"),f}var Et=function(){function c(){Zf(this,c),this.definitions={}}return Yf(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(o){e.definitions[o]=d(d({},e.definitions[o]||{}),n[o]),f4(o,n[o]);var f=r2[B][o];f&&f4(f,n[o]),z5()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],o=n.prefix,f=n.iconName,t=n.icon,l=t[2];e[o]||(e[o]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[o][m]=t)}),e[o][f]=t}),e}}]),c}(),R8=[],R1={},E1={},_t=Object.keys(E1);function Ft(c,a){var e=a.mixoutsTo;return R8=c,R1={},Object.keys(E1).forEach(function(r){_t.indexOf(r)===-1&&delete E1[r]}),R8.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),W2(s[n])==="object"&&Object.keys(s[n]).forEach(function(o){e[n]||(e[n]={}),e[n][o]=s[n][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){R1[n]||(R1[n]=[]),R1[n].push(i[n])})}r.provides&&r.provides(E1)}),e}function t4(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=R1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function S1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=R1[c]||[];s.forEach(function(i){i.apply(null,e)})}function v1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return E1[c]?E1[c].apply(null,a):void 0}function m4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||d1();if(a)return a=x1(e,a)||a,A8(H5.definitions,e,a)||A8(J.styles,e,a)}var H5=new Et,Dt=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,S1("noAuto")},qt={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h1?(S1("beforeI2svg",a),v1("pseudoElements2svg",a),v1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,Nt(function(){Ut({autoReplaceSvgRoot:e}),S1("watch",a)})}},Ot={icon:function(a){if(a===null)return null;if(W2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:x1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=s3(a[0]);return{prefix:r,iconName:x1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(g.cssPrefix,"-"))>-1||a.match(lt))){var s=i3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||d1(),iconName:x1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=d1();return{prefix:i,iconName:x1(i,a)||a}}}},X={noAuto:Dt,config:g,dom:qt,parse:Ot,library:H5,findIconDefinition:m4,toHtml:v2},Ut=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?_:e;(Object.keys(J.styles).length>0||g.autoFetchSvg)&&h1&&g.autoReplaceSvg&&X.dom.i2svg({node:r})};function n3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return v2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(h1){var r=_.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function It(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(R4(n)&&e.found&&!r.found){var o=e.width,f=e.height,t={x:o/f/2,y:.5};s.style=r3(d(d({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Wt(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(g.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},s),{},{id:n}),children:r}]}]}function F4(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,o=c.symbol,f=c.title,t=c.maskId,l=c.titleId,m=c.extra,v=c.watchable,z=v===void 0?!1:v,p=r.found?r:e,V=p.width,b=p.height,H=s==="fak",h=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),M={children:[],attributes:d(d({},m.attributes),{},{"data-prefix":s,"data-icon":i,class:h,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(V," ").concat(b)})},x=H&&!~m.classes.indexOf("fa-fw")?{width:"".concat(V/b*16*.0625,"em")}:{};z&&(M.attributes[N1]=""),f&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(l||i2())},children:[f]}),delete M.attributes.title);var S=d(d({},M),{},{prefix:s,iconName:i,main:e,mask:r,maskId:t,transform:n,symbol:o,styles:d(d({},x),m.styles)}),w=r.found&&e.found?v1("generateAbstractMask",S)||{children:[],attributes:{}}:v1("generateAbstractIcon",S)||{children:[],attributes:{}},A=w.children,G=w.attributes;return S.children=A,S.attributes=G,o?Wt(S):It(S)}function B8(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,o=c.watchable,f=o===void 0?!1:o,t=d(d(d({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(t[N1]="");var l=d({},n.styles);R4(s)&&(l.transform=Lt({transform:s,startCentered:!0,width:e,height:r}),l["-webkit-transform"]=l.transform);var m=r3(l);m.length>0&&(t.style=m);var v=[];return v.push({tag:"span",attributes:t,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Gt(c){var a=c.content,e=c.title,r=c.extra,s=d(d(d({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=r3(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var F3=J.styles;function v4(c){var a=c[0],e=c[1],r=c.slice(4),s=y4(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(b1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(b1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(b1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var jt={found:!1,width:512,height:512};function $t(c,a){!a5&&!g.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function z4(c,a){var e=a;return a==="fa"&&g.styleDefault!==null&&(a=d1()),new Promise(function(r,s){if(v1("missingIconAbstract"),e==="fa"){var i=h5(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&F3[a]&&F3[a][c]){var n=F3[a][c];return r(v4(n))}$t(c,a),r(d(d({},jt),{},{icon:g.showMissingIcons&&c?v1("missingIconAbstract")||{}:{}}))})}var E8=function(){},h4=g.measurePerformance&&g2&&g2.mark&&g2.measure?g2:{mark:E8,measure:E8},G1='FA "6.5.2"',Zt=function(a){return h4.mark("".concat(G1," ").concat(a," begins")),function(){return u5(a)}},u5=function(a){h4.mark("".concat(G1," ").concat(a," ends")),h4.measure("".concat(G1," ").concat(a),"".concat(G1," ").concat(a," begins"),"".concat(G1," ").concat(a," ends"))},D4={begin:Zt,end:u5},B2=function(){};function _8(c){var a=c.getAttribute?c.getAttribute(N1):null;return typeof a=="string"}function Kt(c){var a=c.getAttribute?c.getAttribute(k4):null,e=c.getAttribute?c.getAttribute(A4):null;return a&&e}function Yt(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(g.replacementClass)}function Xt(){if(g.autoReplaceSvg===!0)return E2.replace;var c=E2[g.autoReplaceSvg];return c||E2.replace}function Qt(c){return _.createElementNS("http://www.w3.org/2000/svg",c)}function Jt(c){return _.createElement(c)}function p5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Qt:Jt:e;if(typeof c=="string")return _.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(p5(n,{ceFn:r}))}),s}function cm(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var E2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(p5(s),e)}),e.getAttribute(N1)===null&&g.keepOriginalSource){var r=_.createComment(cm(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~T4(e).indexOf(g.replacementClass))return E2.replace(a);var s=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,f){return f===g.replacementClass||f.match(s)?o.toSvg.push(f):o.toNode.push(f),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(o){return v2(o)}).join(`
`);e.setAttribute(N1,""),e.innerHTML=n}};function F8(c){c()}function V5(c,a){var e=typeof a=="function"?a:B2;if(c.length===0)e();else{var r=F8;g.mutateApproach===it&&(r=C1.requestAnimationFrame||F8),r(function(){var s=Xt(),i=D4.begin("mutate");c.map(s),i(),e()})}}var q4=!1;function M5(){q4=!0}function H4(){q4=!1}var j2=null;function D8(c){if(y8&&g.observeMutations){var a=c.treeCallback,e=a===void 0?B2:a,r=c.nodeCallback,s=r===void 0?B2:r,i=c.pseudoElementsCallback,n=i===void 0?B2:i,o=c.observeMutationsRoot,f=o===void 0?_:o;j2=new y8(function(t){if(!q4){var l=d1();O1(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!_8(m.addedNodes[0])&&(g.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&g.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&_8(m.target)&&~vt.indexOf(m.attributeName))if(m.attributeName==="class"&&Kt(m.target)){var v=i3(T4(m.target)),z=v.prefix,p=v.iconName;m.target.setAttribute(k4,z||l),p&&m.target.setAttribute(A4,p)}else Yt(m.target)&&s(m.target)})}}),h1&&j2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function am(){j2&&j2.disconnect()}function em(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],o=i.slice(1);return n&&o.length>0&&(r[n]=o.join(":").trim()),r},{})),e}function rm(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=i3(T4(c));return s.prefix||(s.prefix=d1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Rt(s.prefix,c.innerText)||E4(s.prefix,l4(c.innerText))),!s.iconName&&g.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function sm(c){var a=O1(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return g.autoA11y&&(e?a["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(r||i2()):(a["aria-hidden"]="true",a.focusable="false")),a}function im(){return{iconName:null,title:null,titleId:null,prefix:null,transform:e1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function q8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=rm(c),r=e.iconName,s=e.prefix,i=e.rest,n=sm(c),o=t4("parseNodeAttributes",{},c),f=a.styleParser?em(c):[];return d({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:e1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},o)}var nm=J.styles;function C5(c){var a=g.autoReplaceSvg==="nest"?q8(c,{styleParser:!1}):q8(c);return~a.extra.classes.indexOf(e5)?v1("generateLayersText",c,a):v1("generateSvgReplacementMutation",c,a)}var L1=new Set;P4.map(function(c){L1.add("fa-".concat(c))});Object.keys(a2[B]).map(L1.add.bind(L1));Object.keys(a2[q]).map(L1.add.bind(L1));L1=t2(L1);function O8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h1)return Promise.resolve();var e=_.documentElement.classList,r=function(m){return e.add("".concat(w8,"-").concat(m))},s=function(m){return e.remove("".concat(w8,"-").concat(m))},i=g.autoFetchSvg?L1:P4.map(function(l){return"fa-".concat(l)}).concat(Object.keys(nm));i.includes("fa")||i.push("fa");var n=[".".concat(e5,":not([").concat(N1,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(N1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var o=[];try{o=O1(c.querySelectorAll(n))}catch{}if(o.length>0)r("pending"),s("complete");else return Promise.resolve();var f=D4.begin("onTree"),t=o.reduce(function(l,m){try{var v=C5(m);v&&l.push(v)}catch(z){a5||z.name==="MissingIcon"&&console.error(z)}return l},[]);return new Promise(function(l,m){Promise.all(t).then(function(v){V5(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),f(),l()})}).catch(function(v){f(),m(v)})})}function om(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;C5(c).then(function(e){e&&V5([e],a)})}function lm(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:m4(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:m4(s||{})),c(r,d(d({},e),{},{mask:s}))}}var fm=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?e1:r,i=e.symbol,n=i===void 0?!1:i,o=e.mask,f=o===void 0?null:o,t=e.maskId,l=t===void 0?null:t,m=e.title,v=m===void 0?null:m,z=e.titleId,p=z===void 0?null:z,V=e.classes,b=V===void 0?[]:V,H=e.attributes,h=H===void 0?{}:H,M=e.styles,x=M===void 0?{}:M;if(a){var S=a.prefix,w=a.iconName,A=a.icon;return n3(d({type:"icon"},a),function(){return S1("beforeDOMElementCreation",{iconDefinition:a,params:e}),g.autoA11y&&(v?h["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(p||i2()):(h["aria-hidden"]="true",h.focusable="false")),F4({icons:{main:v4(A),mask:f?v4(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:w,transform:d(d({},e1),s),symbol:n,title:v,maskId:l,titleId:p,extra:{attributes:h,styles:x,classes:b}})})}},tm={mixout:function(){return{icon:lm(fm)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=O8,e.nodeCallback=om,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?_:r,i=e.callback,n=i===void 0?function(){}:i;return O8(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,o=r.prefix,f=r.transform,t=r.symbol,l=r.mask,m=r.maskId,v=r.extra;return new Promise(function(z,p){Promise.all([z4(s,o),l.iconName?z4(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(V){var b=y4(V,2),H=b[0],h=b[1];z([e,F4({icons:{main:H,mask:h},prefix:o,iconName:s,transform:f,symbol:t,maskId:m,title:i,titleId:n,extra:v,watchable:!0})])}).catch(p)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,o=e.styles,f=r3(o);f.length>0&&(s.style=f);var t;return R4(n)&&(t=v1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(t||i.icon),{children:r,attributes:s}}}},mm={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return n3({type:"layer"},function(){S1("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(o){Array.isArray(o)?o.map(function(f){n=n.concat(f.abstract)}):n=n.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(t2(i)).join(" ")},children:n}]})}}}},vm={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,o=n===void 0?[]:n,f=r.attributes,t=f===void 0?{}:f,l=r.styles,m=l===void 0?{}:l;return n3({type:"counter",content:e},function(){return S1("beforeDOMElementCreation",{content:e,params:r}),Gt({content:e.toString(),title:i,extra:{attributes:t,styles:m,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(t2(o))}})})}}}},zm={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?e1:s,n=r.title,o=n===void 0?null:n,f=r.classes,t=f===void 0?[]:f,l=r.attributes,m=l===void 0?{}:l,v=r.styles,z=v===void 0?{}:v;return n3({type:"text",content:e},function(){return S1("beforeDOMElementCreation",{content:e,params:r}),B8({content:e,transform:d(d({},e1),i),title:o,extra:{attributes:m,styles:z,classes:["".concat(g.cssPrefix,"-layers-text")].concat(t2(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,o=null,f=null;if(Q0){var t=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/t,f=l.height/t}return g.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,B8({content:e.innerHTML,width:o,height:f,transform:i,title:s,extra:n,watchable:!0})])}}},hm=new RegExp('"',"ug"),U8=[1105920,1112319];function Hm(c){var a=c.replace(hm,""),e=yt(a,0),r=e>=U8[0]&&e<=U8[1],s=a.length===2?a[0]===a[1]:!1;return{value:l4(s?a[0]:a),isSecondary:r||s}}function I8(c,a){var e="".concat(st).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=O1(c.children),n=i.filter(function(A){return A.getAttribute(o4)===a})[0],o=C1.getComputedStyle(c,a),f=o.getPropertyValue("font-family").match(ft),t=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&l!=="none"&&l!==""){var m=o.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?q:B,z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?e2[v][f[2].toLowerCase()]:tt[v][t],p=Hm(m),V=p.value,b=p.isSecondary,H=f[0].startsWith("FontAwesome"),h=E4(z,V),M=h;if(H){var x=Bt(V);x.iconName&&x.prefix&&(h=x.iconName,z=x.prefix)}if(h&&!b&&(!n||n.getAttribute(k4)!==z||n.getAttribute(A4)!==M)){c.setAttribute(e,M),n&&c.removeChild(n);var S=im(),w=S.extra;w.attributes[o4]=a,z4(h,z).then(function(A){var G=F4(d(d({},S),{},{icons:{main:A,mask:_4()},prefix:z,iconName:M,extra:w,watchable:!0})),W=_.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(W,c.firstChild):c.appendChild(W),W.outerHTML=G.map(function(V2){return v2(V2)}).join(`
`).splice(1).map(m=>({text:m.replace("webpack:/","").replace(".vue",".js").trim(),internal:m.includes("node_modules")&&!m.includes(".cache")||m.includes("internal")||m.includes("new Promise")})).map(m=>`<span class="stack${m.internal?" internal":""}">${m.text}</span>`).join(`
`);const r=Number(e.statusCode||500),s=r===404,i=e.statusMessage??(s?"Page Not Found":"Internal Server Error"),n=e.message||e.toString(),o=void 0,f=O6(()=>I2(()=>import("./fxaZXLwR.js"),__vite__mapDeps([4,1,2,5]),import.meta.url).then(m=>m.default||m)),t=O6(()=>I2(()=>import("./BmRWUsgS.js"),__vite__mapDeps([6,1,2,7]),import.meta.url).then(m=>m.default||m)),l=s?f:t;return(m,v)=>(Z(),w1(F(l),Zi(Ki({statusCode:F(r),statusMessage:F(i),description:F(n),stack:F(o)})),null,16))}},J8={__name:"nuxt-root",setup(c){const a=()=>null,e=D(),r=e.deferHydration();if(e.isHydrating){const o=e.hooks.hookOnce("app:error",r);i1().beforeEach(o)}const s=!1;B1(f2,d4()),e.hooks.callHookWith(o=>o.map(f=>f()),"vue:setup");const i=J2();Yi((o,f,t)=>{if(e.hooks.callHook("vue:error",o,f,t).catch(l=>console.error("[nuxt] Error in `vue:error` hook",l)),Mo(o)&&(o.fatal||o.unhandled))return e.runWithContext(()=>P1(o)),!1});const n=!1;return(o,f)=>(Z(),w1(p4,{onResolve:F(r)},{default:O3(()=>[F(i)?(Z(),w1(F(wK),{key:0,error:F(i)},null,8,["error"])):F(n)?(Z(),w1(F(a),{key:1,context:F(n)},null,8,["context"])):F(s)?(Z(),w1(Xi(F(s)),{key:2})):(Z(),w1(F(yK),{key:3}))]),_:1},8,["onResolve"]))}};let c0;{let c;c0=async function(){var n,o;if(c)return c;const r=!!((n=window.__NUXT__)!=null&&n.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?Qi(J8):Ji(J8),s=so({vueApp:r});async function i(f){await s.callHook("app:error",f),s.payload.error=s.payload.error||c3(f)}r.config.errorHandler=i;try{await no(s,LZ)}catch(f){i(f)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(Hl),await s.hooks.callHook("app:mounted",r),await o2()}catch(f){i(f)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},c=c0().catch(a=>{throw console.error("Error while mounting app:",a),a})}export{VK as _,Hn as a,X2 as b,TK as c,D as d,AK as e,V4 as f,fl as g,f1 as h,YZ as i,_1 as j,PK as n,$0 as o,l2 as p,g8 as r,i1 as u,W3 as w};
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7160:(C,_,g)=>{g.d(_,{c:()=>m});var o=g(2361),f=g(7683),l=g(3139);const m=(t,s)=>{let e,n;const r=(a,p,d)=>{if("undefined"==typeof document)return;const h=document.elementFromPoint(a,p);h&&s(h)?h!==e&&(c(),i(h,d)):c()},i=(a,p)=>{e=a,n||(n=e);const d=e;(0,o.c)(()=>d.classList.add("ion-activated")),p()},c=(a=!1)=>{if(!e)return;const p=e;(0,o.c)(()=>p.classList.remove("ion-activated")),a&&n!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>r(a.currentX,a.currentY,f.a),onMove:a=>r(a.currentX,a.currentY,f.b),onEnd:()=>{c(!0),(0,f.h)(),n=void 0}})}},8685:(C,_,g)=>{g.d(_,{g:()=>o});const o=(s,e,n,r,i)=>l(s[1],e[1],n[1],r[1],i).map(c=>f(s[0],e[0],n[0],r[0],c)),f=(s,e,n,r,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-s*Math.pow(i-1,3),l=(s,e,n,r,i)=>t((r-=i)-3*(n-=i)+3*(e-=i)-(s-=i),3*n-6*e+3*s,3*e-3*s,s).filter(a=>a>=0&&a<=1),t=(s,e,n,r)=>{if(0===s)return((s,e,n)=>{const r=e*e-4*s*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*s),(-e-Math.sqrt(r))/(2*s)]})(e,n,r);const i=(3*(n/=s)-(e/=s)*e)/3,c=(2*e*e*e-9*e*n+27*(r/=s))/27;if(0===i)return[Math.pow(-c,1/3)];if(0===c)return[Math.sqrt(-i),-Math.sqrt(-i)];const a=Math.pow(c/2,2)+Math.pow(i/3,3);if(0===a)return[Math.pow(c/2,.5)-e/3];if(a>0)return[Math.pow(-c/2+Math.sqrt(a),1/3)-Math.pow(c/2+Math.sqrt(a),1/3)-e/3];const p=Math.sqrt(Math.pow(-i/3,3)),d=Math.acos(-c/(2*Math.sqrt(Math.pow(-i/3,3)))),h=2*Math.pow(p,1/3);return[h*Math.cos(d/3)-e/3,h*Math.cos((d+2*Math.PI)/3)-e/3,h*Math.cos((d+4*Math.PI)/3)-e/3]}},5062:(C,_,g)=>{g.d(_,{i:()=>o});const o=f=>f&&""!==f.dir?"rtl"===f.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(C,_,g)=>{g.r(_),g.d(_,{startFocusVisible:()=>m});const o="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],m=t=>{let s=[],e=!0;const n=t?t.shadowRoot:document,r=t||document.body,i=v=>{s.forEach(w=>w.classList.remove(o)),v.forEach(w=>w.classList.add(o)),s=v},c=()=>{e=!1,i([])},a=v=>{e=l.includes(v.key),e||i([])},p=v=>{if(e&&v.composedPath){const w=v.composedPath().filter(M=>!!M.classList&&M.classList.contains("ion-focusable"));i(w)}},d=()=>{n.activeElement===r&&i([])};return n.addEventListener("keydown",a),n.addEventListener("focusin",p),n.addEventListener("focusout",d),n.addEventListener("touchstart",c),n.addEventListener("mousedown",c),{destroy:()=>{n.removeEventListener("keydown",a),n.removeEventListener("focusin",p),n.removeEventListener("focusout",d),n.removeEventListener("touchstart",c),n.removeEventListener("mousedown",c)},setFocus:i}}},4118:(C,_,g)=>{g.d(_,{C:()=>t,a:()=>l,d:()=>m});var o=g(5861),f=g(1643);const l=function(){var s=(0,o.Z)(function*(e,n,r,i,c,a){var p;if(e)return e.attachViewToDom(n,r,c,i);if(!(a||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const d="string"==typeof r?null===(p=n.ownerDocument)||void 0===p?void 0:p.createElement(r):r;return i&&i.forEach(h=>d.classList.add(h)),c&&Object.assign(d,c),n.appendChild(d),yield new Promise(h=>(0,f.c)(d,h)),d});return function(n,r,i,c,a,p){return s.apply(this,arguments)}}(),m=(s,e)=>{if(e){if(s)return s.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},t=()=>{let s,e;return{attachViewToDom:function(){var i=(0,o.Z)(function*(c,a,p={},d=[]){var h,v;if(s=c,a){const M="string"==typeof a?null===(h=s.ownerDocument)||void 0===h?void 0:h.createElement(a):a;d.forEach(u=>M.classList.add(u)),Object.assign(M,p),s.appendChild(M),yield new Promise(u=>(0,f.c)(M,u))}else if(s.children.length>0){const M=null===(v=s.ownerDocument)||void 0===v?void 0:v.createElement("div");d.forEach(u=>M.classList.add(u)),M.append(...s.children),s.appendChild(M)}const w=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),s.parentNode.insertBefore(e,s),w.appendChild(s),s});return function(a,p){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(s&&e&&(e.parentNode.insertBefore(s,e),e.remove()),Promise.resolve())}}},7683:(C,_,g)=>{g.d(_,{a:()=>l,b:()=>m,c:()=>f,d:()=>s,h:()=>t});const o={getEngine(){var e;const n=window;return n.TapticEngine||(null===(e=n.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&n.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const n=this.getEngine();if(!n)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;n.impact({style:r})},notification(e){const n=this.getEngine();if(!n)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;n.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},f=()=>{o.selection()},l=()=>{o.selectionStart()},m=()=>{o.selectionChanged()},t=()=>{o.selectionEnd()},s=e=>{o.impact(e)}},1473:(C,_,g)=>{g.d(_,{a:()=>i,b:()=>p,f:()=>c,g:()=>r,p:()=>d,s:()=>a});var o=g(5861),f=g(1643),l=g(7208);const t="ion-content",s=".ion-content-scroll-host",e=`${t}, ${s}`,n=h=>h&&"ION-CONTENT"===h.tagName,r=function(){var h=(0,o.Z)(function*(v){return n(v)?(yield new Promise(w=>(0,f.c)(v,w)),v.getScrollElement()):v});return function(w){return h.apply(this,arguments)}}(),i=h=>h.querySelector(s)||h.querySelector(e),c=h=>h.closest(e),a=(h,v)=>n(h)?h.scrollToTop(v):Promise.resolve(h.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),p=(h,v,w,M)=>n(h)?h.scrollByPoint(v,w,M):Promise.resolve(h.scrollBy({top:w,left:v,behavior:M>0?"smooth":"auto"})),d=h=>(0,l.a)(h,t)},7208:(C,_,g)=>{g.d(_,{a:()=>l,b:()=>f,p:()=>o});const o=m=>console.warn(`[Ionic Warning]: ${m}`),f=(m,...t)=>console.error(`[Ionic Error]: ${m}`,...t),l=(m,...t)=>console.error(`<${m.tagName.toLowerCase()}> must be used inside ${t.join(" or ")}.`)},8439:(C,_,g)=>{g.d(_,{s:()=>o});const o=n=>{try{if(n instanceof class e{constructor(r){this.value=r}})return n.value;if(!m()||"string"!=typeof n||""===n)return n;const r=document.createDocumentFragment(),i=document.createElement("div");r.appendChild(i),i.innerHTML=n,s.forEach(d=>{const h=r.querySelectorAll(d);for(let v=h.length-1;v>=0;v--){const w=h[v];w.parentNode?w.parentNode.removeChild(w):r.removeChild(w);const M=l(w);for(let u=0;u<M.length;u++)f(M[u])}});const c=l(r);for(let d=0;d<c.length;d++)f(c[d]);const a=document.createElement("div");a.appendChild(r);const p=a.querySelector("div");return null!==p?p.innerHTML:a.innerHTML}catch(r){return console.error(r),""}},f=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let i=n.attributes.length-1;i>=0;i--){const c=n.attributes.item(i),a=c.name;if(!t.includes(a.toLowerCase())){n.removeAttribute(a);continue}const p=c.value;null!=p&&p.toLowerCase().includes("javascript:")&&n.removeAttribute(a)}const r=l(n);for(let i=0;i<r.length;i++)f(r[i])},l=n=>null!=n.children?n.children:n.childNodes,m=()=>{var n;const r=window,i=null===(n=null==r?void 0:r.Ionic)||void 0===n?void 0:n.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},t=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},8117:(C,_,g)=>{g.d(_,{a:()=>o,b:()=>c,c:()=>s,d:()=>a,e:()=>u,f:()=>l,g:()=>f,h:()=>w,i:()=>e,j:()=>r,k:()=>p,l:()=>n,m:()=>t,n:()=>m,o:()=>i,p:()=>d,q:()=>h,r:()=>v,s:()=>M});const o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},1316:(C,_,g)=>{g.r(_),g.d(_,{KEYBOARD_DID_CLOSE:()=>f,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>M,keyboardDidClose:()=>d,keyboardDidOpen:()=>a,keyboardDidResize:()=>p,resetKeyboardAssist:()=>e,setKeyboardClose:()=>c,setKeyboardOpen:()=>i,startKeyboardAssist:()=>n,trackViewportChanges:()=>w});const o="ionKeyboardDidShow",f="ionKeyboardDidHide";let m={},t={},s=!1;const e=()=>{m={},t={},s=!1},n=u=>{r(u),u.visualViewport&&(t=M(u.visualViewport),u.visualViewport.onresize=()=>{w(u),a()||p(u)?i(u):d(u)&&c(u)})},r=u=>{u.addEventListener("keyboardDidShow",y=>i(u,y)),u.addEventListener("keyboardDidHide",()=>c(u))},i=(u,y)=>{h(u,y),s=!0},c=u=>{v(u),s=!1},a=()=>!s&&m.width===t.width&&(m.height-t.height)*t.scale>150,p=u=>s&&!d(u),d=u=>s&&t.height===u.innerHeight,h=(u,y)=>{const A=new CustomEvent(o,{detail:{keyboardHeight:y?y.keyboardHeight:u.innerHeight-t.height}});u.dispatchEvent(A)},v=u=>{const y=new CustomEvent(f);u.dispatchEvent(y)},w=u=>{m=Object.assign({},t),t=M(u.visualViewport)},M=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},7741:(C,_,g)=>{g.d(_,{S:()=>f});const f={bubbles:{dur:1e3,circles:9,fn:(l,m,t)=>{const s=l*m/t-l+"ms",e=2*Math.PI*m/t;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(l,m,t)=>{const s=m/t,e=l*s-l+"ms",n=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,m)=>({r:6,style:{left:9-9*m+"px","animation-delay":-110*m+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,m,t)=>({y1:14,y2:26,style:{transform:`rotate(${360/t*m+(m<t/2?180:-180)}deg)`,"animation-delay":l*m/t-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,m,t)=>({y1:12,y2:20,style:{transform:`rotate(${360/t*m+(m<t/2?180:-180)}deg)`,"animation-delay":l*m/t-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,m,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*m+(m<6?180:-180)}deg)`,"animation-delay":l*m/t-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,m,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*m+(m<6?180:-180)}deg)`,"animation-delay":l*m/t-l+"ms"}})}}},5713:(C,_,g)=>{g.r(_),g.d(_,{createSwipeBackGesture:()=>t});var o=g(1643),f=g(5062),l=g(3139);g(3509);const t=(s,e,n,r,i)=>{const c=s.ownerDocument.defaultView,a=(0,f.i)(s),d=u=>a?-u.deltaX:u.deltaX;return(0,l.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:u=>(u=>{const{startX:E}=u;return a?E>=c.innerWidth-50:E<=50})(u)&&e(),onStart:n,onMove:u=>{const E=d(u)/c.innerWidth;r(E)},onEnd:u=>{const y=d(u),E=c.innerWidth,A=y/E,O=(u=>a?-u.velocityX:u.velocityX)(u),P=O>=0&&(O>.2||y>E/2),x=(P?1-A:A)*E;let Z=0;if(x>5){const L=x/Math.abs(O);Z=Math.min(L,540)}i(P,A<=0?.01:(0,o.k)(0,A,.9999),Z)}})}},2854:(C,_,g)=>{g.d(_,{c:()=>l,g:()=>t,h:()=>f,o:()=>e});var o=g(5861);const f=(n,r)=>null!==r.closest(n),l=(n,r)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},r):r,t=n=>{const r={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(n).forEach(i=>r[i]=!0),r},s=/^[a-z][a-z0-9+\-.]*:/,e=function(){var n=(0,o.Z)(function*(r,i,c,a){if(null!=r&&"#"!==r[0]&&!s.test(r)){const p=document.querySelector("ion-router");if(p)return null!=i&&i.preventDefault(),p.push(r,c,a)}return!1});return function(i,c,a,p){return n.apply(this,arguments)}}()},2672:(C,_,g)=>{g.r(_),g.d(_,{ActorDetailPageModule:()=>c});var o=g(9808),f=g(4182),l=g(6359),m=g(9800),t=g(2096),s=g(520);function e(a,p){if(1&a&&(t.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t._uU(3),t.qZA()(),t.TgZ(4,"ion-card-content"),t._UZ(5,"ion-img",2),t.qZA(),t.TgZ(6,"div",3)(7,"ion-item"),t._UZ(8,"ion-icon",4),t.TgZ(9,"ion-label")(10,"span"),t._uU(11,"Height:"),t.qZA(),t._uU(12),t.qZA()(),t.TgZ(13,"ion-item"),t._UZ(14,"ion-icon",5),t.TgZ(15,"ion-label")(16,"span"),t._uU(17,"Mass:"),t.qZA(),t._uU(18),t.qZA()(),t.TgZ(19,"ion-item"),t._UZ(20,"ion-icon",6),t.TgZ(21,"ion-label")(22,"span"),t._uU(23,"Gender:"),t.qZA(),t._uU(24),t.qZA()(),t.TgZ(25,"ion-item"),t._UZ(26,"ion-icon",7),t.TgZ(27,"ion-label")(28,"span"),t._uU(29,"Homeworld:"),t.qZA(),t._uU(30),t.qZA()(),t.TgZ(31,"ion-item"),t._UZ(32,"ion-icon",8),t.TgZ(33,"ion-label")(34,"span"),t._uU(35,"Wiki:"),t.qZA(),t.TgZ(36,"a",9),t._uU(37),t.qZA()()(),t.TgZ(38,"ion-item"),t._UZ(39,"ion-icon",10),t.TgZ(40,"ion-label")(41,"span"),t._uU(42,"Born:"),t.qZA(),t._uU(43),t.qZA()(),t.TgZ(44,"ion-item"),t._UZ(45,"ion-icon",11),t.TgZ(46,"ion-label")(47,"span"),t._uU(48,"Born Location:"),t.qZA(),t._uU(49),t.qZA()(),t.TgZ(50,"ion-item"),t._UZ(51,"ion-icon",12),t.TgZ(52,"ion-label")(53,"span"),t._uU(54,"Died:"),t.qZA(),t._uU(55),t.qZA()(),t.TgZ(56,"ion-item"),t._UZ(57,"ion-icon",11),t.TgZ(58,"ion-label")(59,"span"),t._uU(60,"Died Location:"),t.qZA(),t._uU(61),t.qZA()(),t.TgZ(62,"ion-item"),t._UZ(63,"ion-icon",13),t.TgZ(64,"ion-label")(65,"span"),t._uU(66,"Species:"),t.qZA(),t._uU(67),t.qZA()(),t.TgZ(68,"ion-item"),t._UZ(69,"ion-icon",14),t.TgZ(70,"ion-label")(71,"span"),t._uU(72,"HairColor:"),t.qZA(),t._uU(73),t.qZA()(),t.TgZ(74,"ion-item"),t._UZ(75,"ion-icon",14),t.TgZ(76,"ion-label")(77,"span"),t._uU(78,"EyeColor:"),t.qZA(),t._uU(79),t.qZA()(),t.TgZ(80,"ion-item"),t._UZ(81,"ion-icon",14),t.TgZ(82,"ion-label")(83,"span"),t._uU(84,"SkinColor:"),t.qZA(),t._uU(85),t.qZA()(),t.TgZ(86,"ion-item"),t._UZ(87,"ion-icon",15),t.TgZ(88,"ion-label")(89,"span"),t._uU(90,"Cybernetics:"),t.qZA(),t._uU(91),t.qZA()()(),t.TgZ(92,"div",16)(93,"ion-button",17)(94,"a",18),t._uU(95,"Back to actors' list"),t.qZA()()()()),2&a){const d=t.oxw();t.xp6(3),t.Oqu(d.actor.name),t.xp6(2),t.Q6J("src",d.actor.image),t.xp6(7),t.hij(" ",d.actor.height,""),t.xp6(6),t.hij(" ",d.actor.mass,""),t.xp6(6),t.hij(" ",d.actor.gender,""),t.xp6(6),t.hij(" ",d.actor.homeworld,""),t.xp6(6),t.s9C("href",d.actor.wiki,t.LSH),t.xp6(1),t.hij(" ",d.actor.name,""),t.xp6(6),t.hij(" ",d.actor.born,""),t.xp6(6),t.hij(" ",d.actor.bornLocation,""),t.xp6(6),t.hij(" ",d.actor.died,""),t.xp6(6),t.hij(" ",d.actor.diedLocation,""),t.xp6(6),t.hij(" ",d.actor.species,""),t.xp6(6),t.hij(" ",d.actor.hairColor,""),t.xp6(6),t.hij(" ",d.actor.eyeColor,""),t.xp6(6),t.hij(" ",d.actor.skinColor,""),t.xp6(6),t.hij(" ",d.actor.cybernetics,"")}}const r=[{path:"",component:(()=>{class a{constructor(d,h){this.activatedRoute=d,this.http=h}ngOnInit(){this.actorId=this.activatedRoute.snapshot.paramMap.get("actorId"),this.getActor(this.actorId)}getActor(d){this.http.get(`https://akabab.github.io/starwars-api/api/id/${d}.json`).subscribe(h=>{this.actor=h})}}return a.\u0275fac=function(d){return new(d||a)(t.Y36(m.gz),t.Y36(s.eN))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-actor-detail"]],decls:2,vars:2,consts:[[3,"fullscreen"],[4,"ngIf"],["slot","start",3,"src"],[1,"stats"],["name","accessibility-outline","slot","start"],["name","barbell-outline","slot","start"],["name","transgender-outline","slot","start"],["name","planet-outline","slot","start"],["name","globe-outline","slot","start"],[3,"href"],["name","egg-outline","slot","start"],["name","location-outline","slot","start"],["name","skull-outline","slot","start"],["name","person-outline","slot","start"],["name","color-palette-outline","slot","start"],["name","hardware-chip-outline","slot","start"],["id","backToList"],["fill","outline"],["href","../folder/actors-list"]],template:function(d,h){1&d&&(t.TgZ(0,"ion-content",0),t.YNc(1,e,96,17,"ion-card",1),t.qZA()),2&d&&(t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",h.actor))},directives:[l.W2,o.O5,l.PM,l.Zi,l.Dq,l.FN,l.Xz,l.Ie,l.gu,l.Q$,l.YG],styles:["ion-card[_ngcontent-%COMP%]{width:95%;margin:auto}ion-card-title[_ngcontent-%COMP%]{font-size:2.1rem;text-align:center}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]::part(image){width:auto;height:400px;margin:.5rem 0;border-radius:.25rem}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native){padding:0 .5rem}ion-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0}ion-card-title[_ngcontent-%COMP%]{text-align:center;font-size:2.1rem}ion-card[_ngcontent-%COMP%]   #backToList[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:1rem 0}ion-card[_ngcontent-%COMP%]   #backToList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:italic;color:var(--ion-color-primary)}@media screen and (min-width: 768px){ion-card[_ngcontent-%COMP%]{margin-top:.75rem;display:grid;grid-template-columns:1fr 1fr}ion-card-title[_ngcontent-%COMP%]{font-size:3rem}ion-card-header[_ngcontent-%COMP%]{grid-column:2/3}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]::part(image){height:650px;padding:1rem;border-radius:1.25rem}ion-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{align-self:center}ion-card[_ngcontent-%COMP%]   #backToList[_ngcontent-%COMP%]{grid-column:1/2;grid-row:1/2;align-self:center}}"]}),a})()}];let i=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[m.Bz.forChild(r)],m.Bz]}),a})(),c=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[o.ez,f.u5,l.Pc,i]]}),a})()},1865:(C,_,g)=>{g.r(_),g.d(_,{ActorsListPageModule:()=>r});var o=g(9808),f=g(4182),l=g(6359),m=g(9800),t=g(7541),s=g(2096);const e=[{path:"",component:t.J}];let n=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({imports:[[m.Bz.forChild(e)],m.Bz]}),i})(),r=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({imports:[[o.ez,f.u5,l.Pc,n]]}),i})()},7541:(C,_,g)=>{g.d(_,{J:()=>n});var o=g(2096),f=g(520),l=g(6359),m=g(9808),t=g(9800);function s(r,i){if(1&r&&(o.TgZ(0,"li")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),o._uU(4),o.qZA()(),o.TgZ(5,"ion-card-content"),o._UZ(6,"ion-img",2),o.qZA(),o.TgZ(7,"ion-item"),o._UZ(8,"ion-icon",3),o.TgZ(9,"ion-label")(10,"span"),o._uU(11,"Height:"),o.qZA(),o._uU(12),o.qZA()(),o.TgZ(13,"ion-item"),o._UZ(14,"ion-icon",4),o.TgZ(15,"ion-label")(16,"span"),o._uU(17,"Mass:"),o.qZA(),o._uU(18),o.qZA()(),o.TgZ(19,"ion-item"),o._UZ(20,"ion-icon",5),o.TgZ(21,"ion-label")(22,"span"),o._uU(23,"Gender:"),o.qZA(),o._uU(24),o.qZA()(),o.TgZ(25,"ion-item"),o._UZ(26,"ion-icon",6),o.TgZ(27,"ion-label")(28,"span"),o._uU(29,"Homeworld:"),o.qZA(),o._uU(30),o.qZA()(),o.TgZ(31,"div",7)(32,"ion-button",8),o._uU(33,"More details..."),o.qZA()()()()),2&r){const c=i.$implicit;o.xp6(4),o.Oqu(c.name),o.xp6(2),o.Q6J("src",c.image),o.xp6(6),o.hij(" ",c.height,""),o.xp6(6),o.hij(" ",c.mass,""),o.xp6(6),o.hij(" ",c.gender,""),o.xp6(6),o.hij(" ",c.homeworld,""),o.xp6(2),o.MGl("routerLink","../actor-detail/",c.id,"")}}let n=(()=>{class r{constructor(c){this.http=c}ngOnInit(){this.getActors()}getActors(){this.http.get("https://akabab.github.io/starwars-api/api/all.json").subscribe(c=>{console.log(c),this.actors=c.slice(0,18)})}}return r.\u0275fac=function(c){return new(c||r)(o.Y36(f.eN))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-actors-list"]],decls:7,vars:2,consts:[[3,"fullscreen"],[4,"ngFor","ngForOf"],["slot","start",3,"src"],["name","accessibility-outline","slot","start"],["name","barbell-outline","slot","start"],["name","transgender-outline","slot","start"],["name","planet-outline","slot","start"],["id","moreDetails"],["fill","outline",3,"routerLink"]],template:function(c,a){1&c&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"Actors"),o.qZA()()(),o.TgZ(4,"ion-content",0)(5,"ul"),o.YNc(6,s,34,7,"li",1),o.qZA()()),2&c&&(o.xp6(4),o.Q6J("fullscreen",!0),o.xp6(2),o.Q6J("ngForOf",a.actors))},directives:[l.Gu,l.sr,l.wd,l.W2,m.sg,l.PM,l.Zi,l.Dq,l.FN,l.Xz,l.Ie,l.gu,l.Q$,l.YG,l.YI,t.rH],styles:["ion-title[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase}ul[_ngcontent-%COMP%]{width:100%;list-style-type:none;padding:0;display:grid;grid-template-columns:1fr}ul[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]::part(image){width:auto;height:300px;margin:.5rem 0;border-radius:.25rem}ul[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native){padding:0 .5rem}ul[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0}ul[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem}ul[_ngcontent-%COMP%]   #moreDetails[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:1rem 0}ul[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:italic;color:var(--ion-color-primary)}@media screen and (min-width: 768px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);padding:.5rem 1rem}}"]}),r})()}}]);
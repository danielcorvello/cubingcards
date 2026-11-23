const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/twisty-dynamic-3d-A2G22YLA-fxseOHy9.js","assets/chunk-YFNXHRNE-DxFY9emB.js","assets/chunk-KHUP3BPA-DsGz1HLr.js","assets/preload-helper-BLdHbfdN.js","assets/puzzle-geometry-Dwh6NpeR.js"])))=>i.map(i=>d[i]);
import{U as e}from"./utils-QtLids5q.js";import{t}from"./preload-helper-BLdHbfdN.js";import{C as n,T as r,_ as i,c as a,d as o,g as s,h as c,i as l,l as u,m as d,n as f,o as p,p as m,s as h,t as g,u as ee,x as _,y as te}from"./chunk-YFNXHRNE-DxFY9emB.js";import{a as v,c as ne,d as re,i as ie,n as ae,o as oe,s as se,u as ce}from"./chunk-KHUP3BPA-DsGz1HLr.js";var y={shareAllNewRenderers:`auto`,showRenderStats:!1};function le(e){for(let[t,n]of Object.entries(e))t in y&&(y[t]=n)}var ue=class{#e=0;#t=0;queue(e){return new Promise(async(t,n)=>{try{let n=++this.#e,r=await e;n>this.#t&&(this.#t=n,t(r))}catch(e){n(e)}})}},de=0,fe=class{canReuse(e,t){return e===t||this.canReuseValue(e,t)}canReuseValue(e,t){return!1}debugGetChildren(){return Array.from(this.#e.values())}#e=new Set;addChild(e){this.#e.add(e)}removeChild(e){this.#e.delete(e)}lastSourceGeneration=0;markStale(e){if(e.detail.generation!==de)throw Error(`A TwistyProp was marked stale too late!`);if(this.lastSourceGeneration!==e.detail.generation){this.lastSourceGeneration=e.detail.generation;for(let t of this.#e)t.markStale(e);this.#n()}}#t=new Set;addRawListener(e,t){this.#t.add(e),t?.initial&&e()}removeRawListener(e){this.#t.delete(e)}#n(){this.#r||(this.#r=!0,setTimeout(()=>this.#i(),0))}#r=!1;#i(){if(!this.#r)throw Error(`Invalid dispatch state!`);for(let e of this.#t)e();this.#r=!1}#a=new Map;addFreshListener(e){let t=new ue,n=null,r=async()=>{let r=await t.queue(this.get());n!==null&&this.canReuse(n,r)||(n=r,e(r))};this.#a.set(e,r),this.addRawListener(r,{initial:!0})}removeFreshListener(e){this.removeRawListener(this.#a.get(e)),this.#a.delete(e)}},b=class extends fe{#e;constructor(e){super(),this.#e=new ie(async()=>this.getDefaultValue()),e&&(this.#e=this.deriveFromPromiseOrValue(e,this.#e))}set(e){this.#e=this.deriveFromPromiseOrValue(e,this.#e);let t={sourceProp:this,value:this.#e,generation:++de};this.markStale(new CustomEvent(`stale`,{detail:t}))}async get(){return this.#e}async deriveFromPromiseOrValue(e,t){return this.derive(await e,t)}},x=class extends b{derive(e){return e}},S=Symbol(`no value`),C=class extends fe{#e;userVisibleErrorTracker;constructor(e,t){super(),this.userVisibleErrorTracker=t,this.#e=e;for(let t of Object.values(e))t.addChild(this)}#t=null;#n=null;async get(){let e=this.lastSourceGeneration;if(this.#n?.generation===e)return this.#n.output;let t={generation:e,output:this.#i(this.#r(),e,this.#t)};return this.#n=t,this.userVisibleErrorTracker?.reset(),t.output}async#r(){let e={};for(let[t,n]of Object.entries(this.#e))e[t]=n.get();let t={};for(let n in this.#e)t[n]=await e[n];return t}async#i(e,t,n=null){let r=await e,i=e=>(this.#t={inputs:r,output:Promise.resolve(e),generation:t},e);if(!n)return i(await this.derive(r));let a=n.inputs;for(let e in this.#e)if(!this.#e[e].canReuse(r[e],a[e]))return i(await this.derive(r));return n.output}},w=class{#e=[];addListener(e,t){let n=!1,r=e=>{n||t(e)};e.addFreshListener(r),this.#e.push(()=>{e.removeFreshListener(r),n=!0})}addMultiListener3(e,t){this.addMultiListener(e,t)}addMultiListener(e,t){let n=!1,r=e.length-1,i=async i=>{if(r>0){r--;return}if(n)return;let a=e.map(e=>e.get());t(await Promise.all(a))};for(let t of e)t.addFreshListener(i);this.#e.push(()=>{for(let t of e)t.removeFreshListener(i);n=!0})}disconnect(){for(let e of this.#e)e()}},pe=class{},me=globalThis.HTMLElement?globalThis.HTMLElement:pe,he=class{define(){}},T=globalThis.customElements?globalThis.customElements:new he,E,ge=class{replaceSync(){}};E=globalThis.CSSStyleSheet?globalThis.CSSStyleSheet:ge;var D=class extends me{shadow;contentWrapper;constructor(e){super(),this.shadow=this.attachShadow({mode:e?.mode??`closed`}),this.contentWrapper=document.createElement(`div`),this.contentWrapper.classList.add(`wrapper`),this.shadow.appendChild(this.contentWrapper)}addCSS(e){this.shadow.adoptedStyleSheets.push(e)}removeCSS(e){let t=this.shadow.adoptedStyleSheets.indexOf(e);t!==void 0&&this.shadow.adoptedStyleSheets.splice(t,t+1)}addElement(e){return this.contentWrapper.appendChild(e)}prependElement(e){this.contentWrapper.prepend(e)}removeElement(e){return this.contentWrapper.removeChild(e)}};T.define(`twisty-managed-custom-element`,D);var O=class{animFrameID=null;animFrame=this.animFrameWrapper.bind(this);callback;constructor(e){this.callback=e}requestIsPending(){return!!this.animFrameID}requestAnimFrame(){this.animFrameID||=requestAnimationFrame(this.animFrame)}cancelAnimFrame(){this.animFrameID&&=(cancelAnimationFrame(this.animFrameID),0)}animFrameWrapper(e){this.animFrameID=0,this.callback(e)}},_e={floating:!0,none:!0},ve=class extends x{getDefaultValue(){return`auto`}},ye=Math.PI*2,k=360/ye,A=globalThis.performance,be=class{mode=0;dom=document.createElement(`div`);constructor(){this.dom.style.cssText=`position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000`,this.dom.addEventListener(`click`,e=>{e.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},!1),this.showPanel(0)}addPanel(e){return this.dom.appendChild(e.dom),e}showPanel(e){for(let t=0;t<this.dom.children.length;t++)this.dom.children[t].style.display=t===e?`block`:`none`;this.mode=e}beginTime=(A||Date).now();prevTime=this.beginTime;frames=0;fpsPanel=this.addPanel(new Te(`FPS`,`#0ff`,`#002`));msPanel=this.addPanel(new Te(`MS`,`#0f0`,`#020`));memPanel=A?.memory?this.addPanel(new Te(`MB`,`#f08`,`#201`)):null;REVISION=16;begin(){this.beginTime=(A||Date).now()}end(){this.frames++;let e=(A||Date).now();if(this.msPanel.update(e-this.beginTime,200),e>=this.prevTime+1e3&&(this.fpsPanel.update(this.frames*1e3/(e-this.prevTime),100),this.prevTime=e,this.frames=0,this.memPanel)){let e=A.memory;this.memPanel.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return e}update(){this.beginTime=this.end()}},j=Math.round(globalThis?.window?.devicePixelRatio??1),xe=80*j,Se=48*j,Ce=3*j,we=2*j,M=3*j,N=15*j,P=74*j,F=30*j,Te=class{min=1/0;max=0;dom=document.createElement(`canvas`);context=this.dom.getContext(`2d`);name;fg;bg;constructor(e,t,n){this.name=e,this.fg=t,this.bg=n,this.dom.width=xe,this.dom.height=Se,this.dom.style.cssText=`width:80px;height:48px`,this.context.font=`bold ${9*j}px Helvetica,Arial,sans-serif`,this.context.textBaseline=`top`,this.context.fillStyle=n,this.context.fillRect(0,0,xe,Se),this.context.fillStyle=t,this.context.fillText(e,Ce,we),this.context.fillRect(M,N,P,F),this.context.fillStyle=n,this.context.globalAlpha=.9,this.context.fillRect(M,N,P,F)}update(e,t){this.min=Math.min(this.min,e),this.max=Math.max(this.max,e),this.context.fillStyle=this.bg,this.context.globalAlpha=1,this.context.fillRect(0,0,xe,N),this.context.fillStyle=this.fg,this.context.fillText(`${Math.round(e)} ${this.name} (${Math.round(this.min)}-${Math.round(this.max)})`,Ce,we),this.context.drawImage(this.dom,M+j,N,P-j,F,M,N,P-j,F),this.context.fillRect(M+P-j,N,j,F),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(M+P-j,N,j,Math.round((1-e/t)*F))}},I=new ie(()=>t(()=>import(`./twisty-dynamic-3d-A2G22YLA-fxseOHy9.js`),__vite__mapDeps([0,1,2,3]))),Ee=null;function De(){return Ee??(devicePixelRatio||1)}var Oe=.1,ke=class extends EventTarget{#e=new Map;target;constructor(e){super(),this.target=e}start(){this.addTargetListener(`pointerdown`,this.onPointerDown.bind(this)),this.addTargetListener(`contextmenu`,e=>{e.preventDefault()}),this.addTargetListener(`touchmove`,e=>e.preventDefault()),this.addTargetListener(`dblclick`,e=>e.preventDefault())}stop(){for(let[e,t]of this.#t.entries())this.target.removeEventListener(e,t);this.#t.clear(),this.#n=!1}#t=new Map;addTargetListener(e,t){this.#t.has(e)||(this.target.addEventListener(e,t),this.#t.set(e,t))}#n=!1;#r(){this.#n||=(this.addTargetListener(`pointermove`,this.onPointerMove.bind(this)),this.addTargetListener(`pointerup`,this.onPointerUp.bind(this)),!0)}#i(e){this.#e.delete(e.pointerId)}#a(e){let t=this.#e.get(e.pointerId);if(!t)return{movementInfo:null,hasMoved:!1};let n;return n=(e.movementX??0)!==0||(e.movementY??0)!==0?{attachedInfo:t.attachedInfo,movementX:e.movementX,movementY:e.movementY,elapsedMs:e.timeStamp-t.lastTimeStamp}:{attachedInfo:t.attachedInfo,movementX:e.clientX-t.lastClientX,movementY:e.clientY-t.lastClientY,elapsedMs:e.timeStamp-t.lastTimeStamp},t.lastClientX=e.clientX,t.lastClientY=e.clientY,t.lastTimeStamp=e.timeStamp,Math.abs(n.movementX)<Oe&&Math.abs(n.movementY)<Oe?{movementInfo:null,hasMoved:t.hasMoved}:(t.hasMoved=!0,{movementInfo:n,hasMoved:t.hasMoved})}onPointerDown(e){this.#r();let t={attachedInfo:{},hasMoved:!1,lastClientX:e.clientX,lastClientY:e.clientY,lastTimeStamp:e.timeStamp};this.#e.set(e.pointerId,t),this.target.setPointerCapture(e.pointerId)}onPointerMove(e){let t=this.#a(e).movementInfo;t&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(`move`,{detail:t})))}onPointerUp(e){let t=this.#a(e),n=this.#e.get(e.pointerId);this.#i(e),this.target.releasePointerCapture(e.pointerId);let r;if(t.hasMoved)r=new CustomEvent(`up`,{detail:{attachedInfo:n.attachedInfo}});else{let{altKey:t,ctrlKey:n,metaKey:i,shiftKey:a}=e;r=new CustomEvent(`press`,{detail:{normalizedX:e.offsetX/this.target.offsetWidth*2-1,normalizedY:1-e.offsetY/this.target.offsetHeight*2,rightClick:!!(e.button&2),keys:{altKey:t,ctrlOrMetaKey:n||i,shiftKey:a}}})}this.dispatchEvent(r)}},L=[];async function Ae(e,t,n,r){L.length===0&&L.push(Ne());let i=await L[0];return i.setSize(e,t),i.render(n,r),i.domElement}async function je(e,t,n,r,i){if(e===0||t===0)return;L.length===0&&L.push(Ne());let a=await Ae(e,t,r,i),o=n.getContext(`2d`);o.clearRect(0,0,n.width,n.height),o.drawImage(a,0,0)}var Me=`srgb-linear`;async function Ne(){let e=(await I).ThreeWebGLRenderer,t=new e({antialias:!0,alpha:!0});return t.outputColorSpace=Me,t.setPixelRatio(De()),t}var Pe=new E;Pe.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  place-content: center;
  contain: strict;
}

.loading {
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  border: 0.5em solid rgba(0, 0, 0, 0);
  border-top: 0.5em solid rgba(0, 0, 0, 0.7);
  border-right: 0.5em solid rgba(0, 0, 0, 0.7);
  animation: fade-in-delayed 4s, rotate 1s linear infinite;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; }
  25% {opacity: 0; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  max-width: 100%;
  max-height: 100%;
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wrapper.invisible {
  opacity: 0;
}

.wrapper.drag-input-enabled > canvas {
  cursor: grab;
}

.wrapper.drag-input-enabled > canvas:active {
  cursor: grabbing;
}
`);var Fe=!0,Ie=500,Le=50,Re=.75;function ze(e){return(Math.exp(1-e)-(1-e))/(1-Math.E)+1}var Be=class{scheduler=new O(this.render.bind(this));lastTimestamp;startTimestamp;momentumX;momentumY;callback;constructor(e,t,n,r){this.startTimestamp=e,this.momentumX=t,this.momentumY=n,this.callback=r,this.scheduler.requestAnimFrame(),this.lastTimestamp=e}render(e){let t=(this.lastTimestamp-this.startTimestamp)/Ie,n=Math.min(1,(e-this.startTimestamp)/Ie);if(t===0&&n>Le/Ie)return;let r=ze(n)-ze(t);this.callback(this.momentumX*r*1e3,this.momentumY*r*1e3),n<1&&this.scheduler.requestAnimFrame(),this.lastTimestamp=e}},Ve=class{experimentalInertia=Fe;onMovementBound=this.onMovement.bind(this);experimentalHasBeenMoved=!1;model;mirror;canvas;dragTracker;constructor(e,t,n,r){this.model=e,this.mirror=t,this.canvas=n,this.dragTracker=r,this.dragTracker.addEventListener(`move`,this.onMove.bind(this)),this.dragTracker.addEventListener(`up`,this.onUp.bind(this))}temperMovement(e){return Math.sign(e)*Math.log(Math.abs(e*10)+1)/6}onMove(e){e.detail.attachedInfo??={};let{temperedX:t,temperedY:n}=this.onMovement(e.detail.movementX,e.detail.movementY),r=e.detail.attachedInfo;r.lastTemperedX=t*10,r.lastTemperedY=n*10,r.timestamp=e.timeStamp}onMovement(e,t){let n=this.mirror?-1:1,r=Math.min(this.canvas.offsetWidth,this.canvas.offsetHeight),i=this.temperMovement(e/r),a=this.temperMovement(t/r*Re);return this.model.twistySceneModel.orbitCoordinatesRequest.set((async()=>{let e=await this.model.twistySceneModel.orbitCoordinates.get();return{latitude:e.latitude+2*a*k*n,longitude:e.longitude-2*i*k}})()),{temperedX:i,temperedY:a}}onUp(e){e.preventDefault(),`lastTemperedX`in e.detail.attachedInfo&&`lastTemperedY`in e.detail.attachedInfo&&`timestamp`in e.detail.attachedInfo&&e.timeStamp-e.detail.attachedInfo.timestamp<60&&new Be(e.timeStamp,e.detail.attachedInfo.lastTemperedX,e.detail.attachedInfo.lastTemperedY,this.onMovementBound)}};async function He(e,t,n=!1){let r=new(await I).ThreeSpherical(t.distance,(90-(n?-1:1)*t.latitude)/k,((n?180:0)+t.longitude)/k);r.makeSafe(),e.position.setFromSpherical(r),e.lookAt(0,0,0)}var Ue=0,We=2,Ge=!1;function Ke(){return y.shareAllNewRenderers===`auto`?Ue<We?(Ue++,!1):(Ge=!0,!0):(y.shareAllNewRenderers||Ue++,y.shareAllNewRenderers!==`never`)}function qe(){return Ge}var Je=class extends D{scene=null;stats=null;rendererIsShared=Ke();loadingElement=null;model;options;constructor(e,t,n){super(),this.model=e,this.options=n,this.scene=t??null,this.loadingElement=this.addElement(document.createElement(`div`)),this.loadingElement.classList.add(`loading`),y.showRenderStats&&(this.stats=new be,this.stats.dom.style.position=`absolute`,this.contentWrapper.appendChild(this.stats.dom))}async connectedCallback(){this.addCSS(Pe),this.addElement((await this.canvasInfo()).canvas),this.#i(),new ResizeObserver(this.#i.bind(this)).observe(this.contentWrapper),this.orbitControls(),this.#e(),this.scheduleRender()}async#e(){(await this.#c()).addEventListener(`press`,(async e=>{await this.model.twistySceneModel.movePressInput.get()===`basic`&&this.dispatchEvent(new CustomEvent(`press`,{detail:{pressInfo:e.detail,cameraPromise:this.camera()}}))}))}#t=new ue;async clearCanvas(){if(this.rendererIsShared){let e=await this.canvasInfo();e.context.clearRect(0,0,e.canvas.width,e.canvas.height)}else{let e=(await this.renderer()).getContext();e.clear(e.COLOR_BUFFER_BIT)}}#n=0;#r=0;async#i(){let e=await this.#t.queue(this.camera()),t=this.contentWrapper.clientWidth,n=this.contentWrapper.clientHeight;this.#n=t,this.#r=n;let r=0,i=0;if(n>t&&(i=n-t,r=-Math.floor(.5*i)),e.aspect=t/n,e.setViewOffset(t,n-i,0,r,t,n),e.updateProjectionMatrix(),this.clearCanvas(),this.rendererIsShared){let e=await this.canvasInfo();e.canvas.width=t*De(),e.canvas.height=n*De(),e.canvas.style.width=`${t.toString()}px`,e.canvas.style.height=`${n.toString()}px`}else(await this.renderer()).setSize(t,n,!0);this.scheduleRender()}#a=null;async renderer(){if(this.rendererIsShared)throw Error(`renderer expected to be shared.`);return this.#a??=Ne()}#o=null;async canvasInfo(){return this.#o??=(async()=>{let e;if(this.rendererIsShared)e=this.addElement(document.createElement(`canvas`));else{let t=await this.renderer();e=this.addElement(t.domElement)}this.loadingElement?.remove();let t=e.getContext(`2d`);return{canvas:e,context:t}})()}#s=null;async#c(){return this.#s??=(async()=>{let e=new ke((await this.canvasInfo()).canvas);return this.model?.twistySceneModel.dragInput.addFreshListener(t=>{let n=!1;switch(t){case`auto`:e.start(),n=!0;break;case`none`:e.stop()}this.contentWrapper.classList.toggle(`drag-input-enabled`,n)}),e})()}#l=null;async camera(){return this.#l??=(async()=>{let e=new(await I).ThreePerspectiveCamera(20,1,.1,20);return e.position.copy(new(await I).ThreeVector3(2,4,4).multiplyScalar(this.options?.backView?-1:1)),e.lookAt(0,0,0),e})()}#u=null;async orbitControls(){return this.#u??=(async()=>{let e=new Ve(this.model,!!this.options?.backView,(await this.canvasInfo()).canvas,await this.#c());return this.model&&this.addListener(this.model.twistySceneModel.orbitCoordinates,async e=>{He(await this.camera(),e,this.options?.backView),this.scheduleRender()}),e})()}addListener(e,t){e.addFreshListener(t),this.#d.push(()=>{e.removeFreshListener(t)})}#d=[];disconnect(){for(let e of this.#d)e();this.#d=[]}#f=null;experimentalNextRenderFinishedCallback(e){this.#f=e}async render(){if(!this.scene)throw Error(`Attempted to render without a scene`);this.stats?.begin();let[e,t,n]=await Promise.all([this.scene.scene(),this.camera(),this.canvasInfo()]);this.rendererIsShared?await je(this.#n,this.#r,n.canvas,e,t):(await this.renderer()).render(e,t),this.stats?.end(),this.#f?.(),this.#f=null}#p=new O(this.render.bind(this));scheduleRender(){this.#p.requestAnimFrame()}};T.define(`twisty-3d-vantage`,Je);var Ye=_(class extends d{traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){return this.traverseAlg(e.alg)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 0}traverseLineComment(e){return 0}}),R={OuterBlockTurnMetric:`OBTM`,RangeBlockTurnMetric:`RBTM`,SingleSliceTurnMetric:`SSTM`,OuterBlockQuantumTurnMetric:`OBQTM`,RangeBlockQuantumTurnMetric:`RBQTM`,SingleSliceQuantumTurnMetric:`SSQTM`,ExecutionTurnMetric:`ETM`},z={Rotation:`Rotation`,Outer:`Outer`,Inner:`Inner`};function Xe(e){return e.endsWith(`v`)||[`x`,`y`,`z`].includes(e)?z.Rotation:e.startsWith(`2`)||[`M`,`E`,`S`].includes(e)?z.Inner:z.Outer}var B;function Ze(){if(B)return B;B={};let e=[...Object.keys(se.moves),...Object.keys(se.derivedMoves)];for(let t of e)B[t]=Xe(t);return B}var Qe={[R.OuterBlockTurnMetric]:{[z.Rotation]:{constantFactor:0,amountFactor:0,zeroAmount:0},[z.Outer]:{constantFactor:1,amountFactor:0,zeroAmount:0},[z.Inner]:{constantFactor:2,amountFactor:0,zeroAmount:0}},[R.RangeBlockTurnMetric]:{[z.Rotation]:{constantFactor:0,amountFactor:0,zeroAmount:0},[z.Outer]:{constantFactor:1,amountFactor:0,zeroAmount:0},[z.Inner]:{constantFactor:1,amountFactor:0,zeroAmount:0}},[R.OuterBlockQuantumTurnMetric]:{[z.Rotation]:{constantFactor:0,amountFactor:0,zeroAmount:0},[z.Outer]:{constantFactor:0,amountFactor:1,zeroAmount:0},[z.Inner]:{constantFactor:0,amountFactor:2,zeroAmount:0}},[R.RangeBlockQuantumTurnMetric]:{[z.Rotation]:{constantFactor:0,amountFactor:0,zeroAmount:0},[z.Outer]:{constantFactor:0,amountFactor:1,zeroAmount:0},[z.Inner]:{constantFactor:0,amountFactor:1,zeroAmount:0}},[R.ExecutionTurnMetric]:{[z.Rotation]:{constantFactor:1,amountFactor:0,zeroAmount:1},[z.Outer]:{constantFactor:1,amountFactor:0,zeroAmount:1},[z.Inner]:{constantFactor:1,amountFactor:0,zeroAmount:1}}};function $e(e,t){let n=Qe[e];if(!n)throw Error(`Invalid metric for 3x3x3: ${e}`);let r=Ze(),i=t.quantum.toString();if(!(i in r))throw Error(`Invalid move for 3x3x3 ${e}: ${i}`);let{constantFactor:a,amountFactor:o,zeroAmount:s}=n[r[i]];return t.amount===0?s:a+o*Math.abs(t.amount)}var V=class extends d{metric;constructor(e){super(),this.metric=e}traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){let t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return this.metric(e)}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 0}traverseNewline(e){return 0}traverseLineComment(e){return 0}},et=class extends d{traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){let t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 1}traverseLineComment(e){return 1}};function tt(e){return`A`<=e&&e<=`Z`}function nt(e){let t=e.family;return tt(t[0])&&t[t.length-1]===`v`||t===`x`||t===`y`||t===`z`||t===`T`?0:1}function rt(e){return 1}function it(e){let t=e.family;return tt(t[0])&&t[t.length-1]===`v`||t===`x`||t===`y`||t===`z`||t===`T`?0:1}function at(e){return Math.abs(e.amount)*it(e)}_(V,[nt]);var ot=_(V,[rt]),st=_(V,[at]),ct=_(V,[it]),lt=_(et,[]);function ut(e,t,n){if(e.id===`3x3x3`){if(t in Qe)return _(V,[e=>$e(t,e)])(n)}else switch(t){case R.ExecutionTurnMetric:return ot(n);case R.RangeBlockTurnMetric:if(e.pg)return ct(n);break;case R.RangeBlockQuantumTurnMetric:if(e.pg)return st(n)}throw Error(`Unsupported puzzle or metric.`)}var dt=e({EXPERIMENTAL_PROP_NO_VALUE:()=>S,ExperimentalSVGAnimator:()=>Dt,SimpleAlgIndexer:()=>pt,TreeAlgIndexer:()=>yt,TwistyAlgEditor:()=>si,TwistyAlgViewer:()=>gi,TwistyPlayer:()=>Z,TwizzleLink:()=>wi,backViewLayouts:()=>bt,setTwistyDebug:()=>le});function H(e){switch(Math.abs(e)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}var ft=class extends d{durationForAmount=H;constructor(e=H){super(),this.durationForAmount=e}traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){return e.amount*this.traverseAlg(e.alg)}traverseMove(e){return this.durationForAmount(e.amount)}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return this.durationForAmount(1)}traverseNewline(e){return this.durationForAmount(1)}traverseLineComment(e){return this.durationForAmount(0)}},pt=class{moves;durationFn=new ft(H);kpuzzle;constructor(e,t){this.kpuzzle=e,this.moves=new g(t.experimentalExpand())}getAnimLeaf(e){return Array.from(this.moves.childAlgNodes())[e]}indexToMoveStartTimestamp(e){let t=new g(Array.from(this.moves.childAlgNodes()).slice(0,e));return this.durationFn.traverseAlg(t)}timestampToIndex(e){let t=0,n=0;for(;n<this.numAnimatedLeaves();n++)if(t+=this.durationFn.traverseMove(this.getAnimLeaf(n)),t>=e)return n;return n}patternAtIndex(e){return this.kpuzzle.defaultPattern().applyTransformation(this.transformationAtIndex(e))}transformationAtIndex(e){let t=this.kpuzzle.identityTransformation();for(let n of Array.from(this.moves.childAlgNodes()).slice(0,e))t=t.applyMove(n);return t}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return Ye(this.moves)}moveDuration(e){return this.durationFn.traverseMove(this.getAnimLeaf(e))}},U=class{moveCount;duration;forward;backward;children=[];constructor(e,t,n,r,i=[]){this.moveCount=e,this.duration=t,this.forward=n,this.backward=r,this.children=i}},mt=class extends d{identity;dummyLeaf;durationFn=new ft(H);cache={};kpuzzle;constructor(e){super(),this.kpuzzle=e,this.identity=e.identityTransformation(),this.dummyLeaf=new U(0,0,this.identity,this.identity,[])}traverseAlg(e){let t=0,n=0,r=this.identity,i=[];for(let a of e.childAlgNodes()){let e=this.traverseAlgNode(a);t+=e.moveCount,n+=e.duration,r=r===this.identity?e.forward:r.applyTransformation(e.forward),i.push(e)}return new U(t,n,r,r.invert(),i)}traverseGrouping(e){let t=this.traverseAlg(e.alg);return this.mult(t,e.amount,[t])}traverseMove(e){let t=e.toString(),n=this.cache[t];if(n)return n;let r=this.kpuzzle.moveToTransformation(e);return n=new U(1,this.durationFn.traverseAlgNode(e),r,r.invert()),this.cache[t]=n,n}traverseCommutator(e){let t=this.traverseAlg(e.A),n=this.traverseAlg(e.B),r=t.forward.applyTransformation(n.forward),i=t.backward.applyTransformation(n.backward),a=r.applyTransformation(i),o=new U(2*(t.moveCount+n.moveCount),2*(t.duration+n.duration),a,a.invert(),[t,n]);return this.mult(o,1,[o,t,n])}traverseConjugate(e){let t=this.traverseAlg(e.A),n=this.traverseAlg(e.B),r=t.forward.applyTransformation(n.forward).applyTransformation(t.backward),i=new U(2*t.moveCount+n.moveCount,2*t.duration+n.duration,r,r.invert(),[t,n]);return this.mult(i,1,[i,t,n])}traversePause(e){return e.experimentalNISSGrouping?this.dummyLeaf:new U(1,this.durationFn.traverseAlgNode(e),this.identity,this.identity)}traverseNewline(e){return this.dummyLeaf}traverseLineComment(e){return this.dummyLeaf}mult(e,t,n){let r=Math.abs(t),i=e.forward.selfMultiply(t);return new U(e.moveCount*r,e.duration*r,i,i.invert(),n)}},W=class{apd;back;constructor(e,t){this.apd=e,this.back=t}},ht=class extends m{move;moveDuration;back;st;root;i;dur;goalIndex;goalDuration;kpuzzle;algOrAlgNode;apd;constructor(e,t,n){super(),this.kpuzzle=e,this.algOrAlgNode=t,this.apd=n,this.i=-1,this.dur=-1,this.goalIndex=-1,this.goalDuration=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new W(this.apd,!1)}moveByIndex(e){return this.i>=0&&this.i===e?this.move!==void 0:this.dosearch(e,1/0)}moveByDuration(e){return this.dur>=0&&this.dur<e&&this.dur+this.moveDuration>=e?this.move!==void 0:this.dosearch(1/0,e)}dosearch(e,t){return this.goalIndex=e,this.goalDuration=t,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(g)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(e,t){if(!this.firstcheck(t))return!1;let n=t.back?e.experimentalNumChildAlgNodes()-1:0;for(let r of s(e.childAlgNodes(),t.back?h.Backwards:h.Forwards)){if(this.traverseAlgNode(r,new W(t.apd.children[n],t.back)))return!0;n+=t.back?-1:1}return!1}traverseGrouping(e,t){if(!this.firstcheck(t))return!1;let n=this.domult(t,e.amount);return this.traverseAlg(e.alg,new W(t.apd.children[0],n))}traverseMove(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseCommutator(e,t){if(!this.firstcheck(t))return!1;let n=this.domult(t,1);return n?this.traverseAlg(e.B,new W(t.apd.children[2],!n))||this.traverseAlg(e.A,new W(t.apd.children[1],!n))||this.traverseAlg(e.B,new W(t.apd.children[2],n))||this.traverseAlg(e.A,new W(t.apd.children[1],n)):this.traverseAlg(e.A,new W(t.apd.children[1],n))||this.traverseAlg(e.B,new W(t.apd.children[2],n))||this.traverseAlg(e.A,new W(t.apd.children[1],!n))||this.traverseAlg(e.B,new W(t.apd.children[2],!n))}traverseConjugate(e,t){if(!this.firstcheck(t))return!1;let n=this.domult(t,1);return n?this.traverseAlg(e.A,new W(t.apd.children[1],!n))||this.traverseAlg(e.B,new W(t.apd.children[2],n))||this.traverseAlg(e.A,new W(t.apd.children[1],n)):this.traverseAlg(e.A,new W(t.apd.children[1],n))||this.traverseAlg(e.B,new W(t.apd.children[2],n))||this.traverseAlg(e.A,new W(t.apd.children[1],!n))}traversePause(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseNewline(e,t){return!1}traverseLineComment(e,t){return!1}firstcheck(e){return e.apd.moveCount+this.i<=this.goalIndex&&e.apd.duration+this.dur<this.goalDuration?this.keepgoing(e):!0}domult(e,t){let n=e.back;if(t===0)return n;t<0&&(n=!n,t=-t);let r=e.apd.children[0],i=Math.min(Math.floor((this.goalIndex-this.i)/r.moveCount),Math.ceil((this.goalDuration-this.dur)/r.duration-1));return i>0&&this.keepgoing(new W(r,n),i),n}keepgoing(e,t=1){return this.i+=t*e.apd.moveCount,this.dur+=t*e.apd.duration,this.st=t===1?e.back?this.st.applyTransformation(e.apd.backward):this.st.applyTransformation(e.apd.forward):e.back?this.st.applyTransformation(e.apd.backward.selfMultiply(t)):this.st.applyTransformation(e.apd.forward.selfMultiply(t)),!1}},gt=16;function _t(e,t){let n=new f,r=new f;for(let i of e.childAlgNodes())r.push(i),r.experimentalNumAlgNodes()>=t&&(n.push(new p(r.toAlg())),r.reset());return n.push(new p(r.toAlg())),n.toAlg()}var vt=_(class extends d{traverseAlg(e){let t=e.experimentalNumChildAlgNodes();return t<gt?e:_t(e,Math.ceil(Math.sqrt(t)))}traverseGrouping(e){return new p(this.traverseAlg(e.alg),e.amount)}traverseMove(e){return e}traverseCommutator(e){return new l(this.traverseAlg(e.A),this.traverseAlg(e.B))}traverseConjugate(e){return new l(this.traverseAlg(e.A),this.traverseAlg(e.B))}traversePause(e){return e}traverseNewline(e){return e}traverseLineComment(e){return e}}),yt=class{decoration;walker;kpuzzle;constructor(e,t){this.kpuzzle=e;let n=new mt(this.kpuzzle),r=vt(t);this.decoration=n.traverseAlg(r),this.walker=new ht(this.kpuzzle,r,this.decoration)}getAnimLeaf(e){if(this.walker.moveByIndex(e)){if(!this.walker.move)throw Error("`this.walker.mv` missing");let e=this.walker.move;return this.walker.back?e.invert():e}return null}indexToMoveStartTimestamp(e){if(this.walker.moveByIndex(e)||this.walker.i===e)return this.walker.dur;throw Error(`Out of algorithm: index ${e}`)}indexToMovesInProgress(e){if(this.walker.moveByIndex(e)||this.walker.i===e)return this.walker.dur;throw Error(`Out of algorithm: index ${e}`)}patternAtIndex(e,t){return this.walker.moveByIndex(e),(t??this.kpuzzle.defaultPattern()).applyTransformation(this.walker.st)}transformationAtIndex(e){return this.walker.moveByIndex(e),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(e){return this.walker.moveByDuration(e),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(e){return this.walker.moveByIndex(e),this.walker.moveDuration}},bt={none:!0,"side-by-side":!0,"top-right":!0},xt=class extends x{getDefaultValue(){return`auto`}},St=`http://www.w3.org/2000/svg`,Ct=`data-copy-id`,wt=0;function Tt(){return wt+=1,`svg${wt.toString()}`}var Et={dim:{white:`#dddddd`,orange:`#884400`,limegreen:`#008800`,red:`#660000`,"rgb(34, 102, 255)":`#000088`,yellow:`#888800`,"rgb(102, 0, 153)":`rgb(50, 0, 76)`,purple:`#3f003f`},oriented:`#44ddcc`,ignored:`#555555`,invisible:`#00000000`},Dt=class{wrapperElement;svgElement;gradientDefs;originalColors={};gradients={};svgID;kpuzzle;showUnknownOrientations=!1;constructor(e,t,n,r=!1){if(this.kpuzzle=e,this.showUnknownOrientations=r,!t)throw Error(`No SVG definition for puzzle type: ${e.name()}`);this.svgID=Tt(),this.wrapperElement=document.createElement(`div`),this.wrapperElement.classList.add(`svg-wrapper`),this.wrapperElement.innerHTML=t;let i=this.wrapperElement.querySelector(`svg`);if(!i)throw Error(`Could not get SVG element`);if(this.svgElement=i,St!==i.namespaceURI)throw Error(`Unexpected XML namespace`);i.style.maxWidth=`100%`,i.style.maxHeight=`100%`,this.gradientDefs=document.createElementNS(St,`defs`),i.insertBefore(this.gradientDefs,i.firstChild);for(let t of e.definition.orbits)for(let e=0;e<t.numPieces;e++)for(let r=0;r<t.numOrientations;r++){let i=this.elementID(t.orbitName,e,r),a=this.elementByID(i),o=a?.style.fill;n?(()=>{let i=n.orbits;if(!i)return;let a=i[t.orbitName];if(!a)return;let s=a.pieces[e];if(!s)return;let c=s.facelets[r];if(!c)return;let l=Et[typeof c==`string`?c:c?.mask];typeof l==`string`?o=l:l&&(o=l[o])})():o=a?.style.fill,this.originalColors[i]=o,this.gradients[i]=this.newGradient(i,o),this.gradientDefs.appendChild(this.gradients[i]),a?.setAttribute(`style`,`fill: url(#grad-${this.svgID}-${i})`)}for(let e of Array.from(i.querySelectorAll(`[${Ct}]`))){let t=e.getAttribute(Ct);e.setAttribute(`style`,`fill: url(#grad-${this.svgID}-${t})`)}this.showUnknownOrientations&&this.drawPattern(this.kpuzzle.defaultPattern())}drawPattern(e,t,n){this.draw(e,t,n)}draw(e,t,n){let r=t?.experimentalToTransformation();if(!e)throw Error(`Distinguishable pieces are not handled for SVG yet!`);for(let t of e.kpuzzle.definition.orbits){let i=e.patternData[t.orbitName],a=r?r.transformationData[t.orbitName]:null;for(let e=0;e<t.numPieces;e++)for(let r=0;r<t.numOrientations;r++){let o=this.elementID(t.orbitName,e,r),s=this.elementID(t.orbitName,i.pieces[e],(t.numOrientations-i.orientation[e]+r)%t.numOrientations),c=!1;if(a){let i=this.elementID(t.orbitName,a.permutation[e],(t.numOrientations-a.orientationDelta[e]+r)%t.numOrientations);s===i&&(c=!0),n||=0;let l=100*(1-n*n*(2-n*n));this.gradients[o].children[0].setAttribute(`stop-color`,this.originalColors[s]),this.gradients[o].children[0].setAttribute(`offset`,`${Math.max(l-5,0)}%`),this.gradients[o].children[1].setAttribute(`offset`,`${Math.max(l-5,0)}%`),this.gradients[o].children[2].setAttribute(`offset`,`${l}%`),this.gradients[o].children[3].setAttribute(`offset`,`${l}%`),this.gradients[o].children[3].setAttribute(`stop-color`,this.originalColors[i])}else c=!0;c&&(this.showUnknownOrientations&&i.orientationMod?.[e]===1?(this.gradients[o].children[0].setAttribute(`stop-color`,`#000`),this.gradients[o].children[0].setAttribute(`offset`,`5%`),this.gradients[o].children[1].setAttribute(`offset`,`5%`),this.gradients[o].children[2].setAttribute(`offset`,`20%`),this.gradients[o].children[3].setAttribute(`offset`,`20%`),this.gradients[o].children[3].setAttribute(`stop-color`,this.originalColors[s])):(this.gradients[o].children[0].setAttribute(`stop-color`,this.originalColors[s]),this.gradients[o].children[0].setAttribute(`offset`,`100%`),this.gradients[o].children[1].setAttribute(`offset`,`100%`),this.gradients[o].children[2].setAttribute(`offset`,`100%`),this.gradients[o].children[3].setAttribute(`offset`,`100%`)))}}}newGradient(e,t){let n=document.createElementNS(St,`radialGradient`);n.setAttribute(`id`,`grad-${this.svgID}-${e}`),n.setAttribute(`r`,`70.7107%`);let r=[{offset:0,color:t},{offset:0,color:`black`},{offset:0,color:`black`},{offset:0,color:t}];for(let e of r){let t=document.createElementNS(St,`stop`);t.setAttribute(`offset`,`${e.offset}%`),t.setAttribute(`stop-color`,e.color),t.setAttribute(`stop-opacity`,`1`),n.appendChild(t)}return n}elementID(e,t,n){return`${e}-l${t}-o${n}`}elementByID(e){return this.wrapperElement.querySelector(`#${e}`)}},G=class{#e=null;elem;prefix;validSuffixes;constructor(e,t,n){this.elem=e,this.prefix=t,this.validSuffixes=n}clearValue(){this.#e&&this.elem.contentWrapper.classList.remove(this.#e),this.#e=null}setValue(e){if(!this.validSuffixes.includes(e))throw Error(`Invalid suffix: ${e}`);let t=`${this.prefix}${e}`,n=this.#e!==t;return n&&(this.clearValue(),this.elem.contentWrapper.classList.add(t),this.#e=t),n}};function Ot(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function kt(e,t,n){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function At(e,t,r){return n(e,r-t,t)}var K={Forwards:1,Paused:0,Backwards:-1};function jt(e){return e}var q={Move:`move`,EntireTimeline:`entire-timeline`},Mt=class{catchingUp=!1;pendingFrame=!1;tempoScale=1;model;constructor(e){this.model=e,e.tempoScale.addFreshListener(e=>{this.tempoScale=e})}scheduler=new O(this.animFrame.bind(this));start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}catchUpMs=500;lastTimestamp=0;animFrame(e){this.scheduler.requestAnimFrame();let t=this.tempoScale*(e-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=e,this.model.catchUpMove.set((async()=>{let e=await this.model.catchUpMove.get();if(e.move===null)return e;let n=e.amount+t;return n>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set(`end`),{move:null,amount:0}):(this.pendingFrame=!1,{move:e.move,amount:n})})())}},Nt=class{playing=!1;direction=K.Forwards;catchUpHelper;model;lastDatestamp=0;lastTimestampPromise;scheduler=new O(this.animFrame.bind(this));delegate;constructor(e,t){this.delegate=t,this.model=e,this.lastTimestampPromise=this.#e(),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new Mt(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}async onPlayingProp(e){e.playing!==this.playing&&(e.playing?this.play(e):this.pause())}async onCatchUpMoveProp(e){let t=e.move!==null;t!==this.catchUpHelper.catchingUp&&(t?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}async#e(){return(await this.model.detailedTimelineInfo.get()).timestamp}jumpToStart(e){this.model.timestampRequest.set(`start`),this.pause(),e?.flash&&this.delegate.flash()}jumpToEnd(e){this.model.timestampRequest.set(`end`),this.pause(),e?.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}play(e){(async()=>{let t=e?.direction??K.Forwards,n=await this.model.coarseTimelineInfo.get();(e?.autoSkipToOtherEndIfStartingAtBoundary??!0)&&(t===K.Forwards&&n.atEnd&&(this.model.timestampRequest.set(`start`),this.delegate.flash()),t===K.Backwards&&n.atStart&&(this.model.timestampRequest.set(`end`),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:t,untilBoundary:e?.untilBoundary??q.EntireTimeline,loop:e?.loop??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=this.#e(),this.scheduler.requestAnimFrame()})()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:q.EntireTimeline})}#t=new ue;async animFrame(e){this.playing&&this.scheduler.requestAnimFrame();let t=this.lastDatestamp,[n,r,i,a,o]=await this.#t.queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()]));if(!n.playing){this.playing=!1;return}let s=o.earliestEnd;(o.currentMoves.length===0||n.untilBoundary===q.EntireTimeline)&&(s=i.end);let c=o.latestStart;(o.currentMoves.length===0||n.untilBoundary===q.EntireTimeline)&&(c=i.start);let l=(e-t)*jt(this.direction)*a;l=Math.max(l,1),l*=n.direction;let u=r+l,d=null;u>=s?n.loop?u=At(u,i.start,i.end):(u===i.end?d=`end`:u=s,this.playing=!1,this.model.playingInfo.set({playing:!1})):u<=c&&(n.loop?u=At(u,i.start,i.end):(u===i.start?d=`start`:u=c,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=e,this.lastTimestampPromise=Promise.resolve(u),this.model.timestampRequest.set(d??u)}},Pt=class{animationController;model;constructor(e,t){this.model=e,this.animationController=new Nt(e,t)}jumpToStart(e){this.animationController.jumpToStart(e)}jumpToEnd(e){this.animationController.jumpToEnd(e)}togglePlay(e){e===void 0&&this.animationController.playPause(),e?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){let e=document.createElement(`a`);e.href=await this.model.twizzleLink(),e.target=`_blank`,e.click()}},Ft={"bottom-row":!0,none:!0},It=class extends x{getDefaultValue(){return`auto`}},Lt=new E;Lt.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);var Rt=new E;Rt.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hint-facelets-none .hint-facelet {
  display: none;
}
`);var zt=class extends D{svgWrapper;scheduler=new O(this.render.bind(this));#e=null;model;kpuzzle;svgSource;options;puzzleLoader;constructor(e,t,n,r,i){super(),this.model=e,this.kpuzzle=t,this.svgSource=n,this.options=r,this.addCSS(Rt),this.resetSVG(),this.#t.addListener(this.model.puzzleID,e=>{i?.id!==e&&this.disconnect()}),this.#t.addListener(this.model.twistySceneModel.hintFacelet,e=>{this.setHintFacelet(e)}),this.#t.addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),this.options?.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}#t=new w;disconnect(){this.#t.disconnect()}onPositionChange(e){try{if(e.movesInProgress.length>0){let t=e.movesInProgress[0].move,n=t;e.movesInProgress[0].direction===K.Backwards&&(n=t.invert());let r=e.pattern.applyMove(n);this.svgWrapper?.draw(e.pattern,r,e.movesInProgress[0].fraction)}else this.svgWrapper?.draw(e.pattern),this.#e=e}catch(e){console.warn(`Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:`,this.puzzleLoader?.id,e),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(e){this.resetSVG(e)}resetSVG(e){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new Dt(this.kpuzzle,this.svgSource,e),this.addElement(this.svgWrapper.wrapperElement),this.#e&&this.onPositionChange(this.#e))}hintFaceletsClassListManager=new G(this,`hint-facelets-`,Object.keys(_e));setHintFacelet(e){this.hintFaceletsClassListManager.setValue(e===`auto`?`floating`:e)}render(){}};T.define(`twisty-2d-puzzle`,zt);var Bt=class{model;schedulable;puzzleLoader;effectiveVisualization;constructor(e,t,n,r){this.model=e,this.schedulable=t,this.puzzleLoader=n,this.effectiveVisualization=r,this.twisty2DPuzzle(),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async e=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(e)})}#e=new w;disconnect(){this.#e.disconnect()}scheduleRender(){}#t=null;async twisty2DPuzzle(){return this.#t??=(async()=>{let e=this.effectiveVisualization===`experimental-2D-LL-face`?this.puzzleLoader.llFaceSVG():this.effectiveVisualization===`experimental-2D-LL`?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new zt(this.model,await this.puzzleLoader.kpuzzle(),await e,{},this.puzzleLoader)})()}},Vt=class extends D{#e=new w;disconnect(){this.#e.disconnect()}model;effectiveVisualization;constructor(e,t){super(),this.model=e,this.effectiveVisualization=t}async connectedCallback(){this.addCSS(Lt),this.model&&this.#e.addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}#t;async scene(){return this.#t??=(async()=>new(await I).ThreeScene)()}scheduleRender(){this.#n?.scheduleRender()}#n;currentTwisty2DPuzzleWrapper(){return this.#n}async setCurrentTwisty2DPuzzleWrapper(e){let t=this.#n;this.#n=e,t?.disconnect();let n=e.twisty2DPuzzle();this.contentWrapper.textContent=``,this.addElement(await n)}async onPuzzleLoader(e){this.#n?.disconnect();let t=new Bt(this.model.twistyPlayerModel,this,e,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(t)}};T.define(`twisty-2d-scene-wrapper`,Vt);var Ht=class{#e;reject;promise;constructor(){this.promise=new Promise((e,t)=>{this.#e=e,this.reject=t})}handleNewValue(e){this.#e(e)}},Ut=class extends EventTarget{model;schedulable;puzzleLoader;visualizationStrategy;constructor(e,t,n,r){super(),this.model=e,this.schedulable=t,this.puzzleLoader=n,this.visualizationStrategy=r,this.twisty3DPuzzle(),this.#e.addListener(this.model.puzzleLoader,e=>{this.puzzleLoader.id!==e.id&&this.disconnect()}),this.#e.addListener(this.model.legacyPosition,async e=>{try{(await this.twisty3DPuzzle()).onPositionChange(e),this.scheduleRender()}catch{this.disconnect()}}),this.#e.addListener(this.model.twistySceneModel.hintFacelet,async e=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:e===`auto`?`floating`:e}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.foundationDisplay,async e=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:e!==`none`}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async e=>{(await this.twisty3DPuzzle()).setStickeringMask(e),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.faceletScale,async e=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:e}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.hintFaceletsElevation,async e=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFaceletsElevation:e}),this.scheduleRender()}),this.#e.addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async e=>{`experimentalUpdateTexture`in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(e[0].specialBehaviour===`picture`,e[1],e[2]),this.scheduleRender())})}#e=new w;disconnect(){this.#e.disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent(`render-scheduled`))}#t=null;async twisty3DPuzzle(){return this.#t??=(async()=>{if(this.puzzleLoader.id===`3x3x3`&&this.visualizationStrategy===`Cube3D`){let[e,t,n,r,i,a]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get(),this.model.twistySceneModel.faceletScale.get(),this.model.twistySceneModel.hintFaceletsElevation.get()]);return(await I).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:e,hintSprite:t,experimentalStickeringMask:n,initialHintFaceletsAnimation:r,faceletScale:i,hintFaceletsElevation:a})}{let[e,t,n,r]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),i=(await I).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,e===`auto`?`floating`:e,r,this.puzzleLoader.id===`kilominx`);return i.then(e=>e.experimentalUpdateTexture(!0,t??void 0,n??void 0)),i}})()}async raycastMove(e,t){let n=await this.twisty3DPuzzle();if(!(`experimentalGetControlTargets`in n)){console.info(`not PG3D! skipping raycast`);return}let r=n.experimentalGetControlTargets(),[i,a]=await Promise.all([e,this.model.twistySceneModel.movePressCancelOptions.get()]),o=i.intersectObjects(r);if(o.length>0){let e=n.getClosestMoveToAxis(o[0].point,t);e?this.model.experimentalAddMove(e.move,{cancel:a}):console.info(`Skipping move!`)}}},Wt=class extends D{#e=new G(this,`back-view-`,[`auto`,`none`,`side-by-side`,`top-right`]);#t=new w;disconnect(){this.#t.disconnect()}model;constructor(e){super(),this.model=e}async connectedCallback(){this.addCSS(Lt);let e=new Je(this.model,this);this.addVantage(e),this.model&&(this.#t.addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),this.#t.addListener(this.model.backView,this.setBackView.bind(this))),this.scheduleRender()}#n=null;setBackView(e){let t=[`side-by-side`,`top-right`].includes(e),n=this.#n!==null;this.#e.setValue(e),t?n||(this.#n=new Je(this.model,this,{backView:!0}),this.addVantage(this.#n),this.scheduleRender()):this.#n&&=(this.removeVantage(this.#n),null)}async onPress(e){let t=this.#a;if(!t){console.info(`no wrapper; skipping scene wrapper press!`);return}let n=(async()=>{let[t,{ThreeRaycaster:n,ThreeVector2:r}]=await Promise.all([e.detail.cameraPromise,(async()=>{let{ThreeRaycaster:e,ThreeVector2:t}=await I;return{ThreeRaycaster:e,ThreeVector2:t}})()]),i=new n,a=new r(e.detail.pressInfo.normalizedX,e.detail.pressInfo.normalizedY);return i.setFromCamera(a,t),i})();await t.raycastMove(n,{invert:!e.detail.pressInfo.rightClick,depth:e.detail.pressInfo.keys.ctrlOrMetaKey?`rotation`:e.detail.pressInfo.keys.shiftKey?`secondSlice`:`none`})}#r;async scene(){return this.#r??=(async()=>new(await I).ThreeScene)()}#i=new Set;addVantage(e){e.addEventListener(`press`,this.onPress.bind(this)),this.#i.add(e),this.contentWrapper.appendChild(e)}removeVantage(e){this.#i.delete(e),e.remove(),e.disconnect(),this.#a?.disconnect()}experimentalVantages(){return this.#i.values()}scheduleRender(){for(let e of this.#i)e.scheduleRender()}#a=null;async setCurrentTwisty3DPuzzleWrapper(e,t){let n=this.#a;try{this.#a=t,n?.disconnect(),e.add(await t.twisty3DPuzzle())}finally{n&&e.remove(await n.twisty3DPuzzle())}this.#o.handleNewValue(t)}#o=new Ht;async experimentalTwisty3DPuzzleWrapper(){return this.#a||this.#o.promise}#s=new ue;async onPuzzle(e){if(e[1]===`2D`)return;this.#a?.disconnect();let[t,n]=await this.#s.queue(Promise.all([this.scene(),new Ut(this.model,this,e[0],e[1])]));this.setCurrentTwisty3DPuzzleWrapper(t,n)}};T.define(`twisty-3d-scene-wrapper`,Wt);var J=typeof document>`u`?null:document,Gt=J?.fullscreenEnabled||!!J?.webkitFullscreenEnabled;function Kt(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function qt(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function Jt(e){return e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen()}var Yt=[`skip-to-start`,`skip-to-end`,`step-forward`,`step-backward`,`pause`,`play`,`enter-fullscreen`,`exit-fullscreen`,`twizzle-tw`],Xt=class extends C{derive(e){return{fullscreen:{enabled:Gt,icon:document.fullscreenElement===null?`enter-fullscreen`:`exit-fullscreen`,title:`Enter fullscreen`},"jump-to-start":{enabled:!e.coarseTimelineInfo.atStart,icon:`skip-to-start`,title:`Restart`},"play-step-backwards":{enabled:!e.coarseTimelineInfo.atStart,icon:`step-backward`,title:`Step backward`},"play-pause":{enabled:!(e.coarseTimelineInfo.atStart&&e.coarseTimelineInfo.atEnd),icon:e.coarseTimelineInfo.playing?`pause`:`play`,title:e.coarseTimelineInfo.playing?`Pause`:`Play`},"play-step":{enabled:!e.coarseTimelineInfo.atEnd,icon:`step-forward`,title:`Step forward`},"jump-to-end":{enabled:!e.coarseTimelineInfo.atEnd,icon:`skip-to-end`,title:`Skip to End`},"twizzle-link":{enabled:!0,icon:`twizzle-tw`,title:`View at Twizzle`,hidden:e.viewerLink===`none`}}}},Zt=new E;Zt.replaceSync(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`);var Qt=new E;Qt.replaceSync(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);var $t={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},en=class extends D{buttons=null;model;controller;defaultFullscreenElement;constructor(e,t,n){super(),this.model=e,this.controller=t,this.defaultFullscreenElement=n}connectedCallback(){this.addCSS(Zt);let e={};for(let t in $t){let n=new tn;e[t]=n,n.htmlButton.addEventListener(`click`,()=>this.#e(t)),this.addElement(n)}this.buttons=e,this.model?.buttonAppearance.addFreshListener(this.update.bind(this)),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}#e(e){switch(e){case`fullscreen`:this.onFullscreenButton();break;case`jump-to-start`:this.controller?.jumpToStart({flash:!0});break;case`play-step-backwards`:this.controller?.animationController.play({direction:K.Backwards,untilBoundary:q.Move});break;case`play-pause`:this.controller?.togglePlay();break;case`play-step`:this.controller?.animationController.play({direction:K.Forwards,untilBoundary:q.Move});break;case`jump-to-end`:this.controller?.jumpToEnd({flash:!0});break;case`twizzle-link`:this.controller?.visitTwizzleLink();break;default:throw Error(`Missing command`)}}async onFullscreenButton(){if(!this.defaultFullscreenElement)throw Error(`Attempted to go fullscreen without an element.`);if(qt()===this.defaultFullscreenElement)Kt();else{this.buttons?.fullscreen.setIcon(`exit-fullscreen`),Jt(await this.model?.twistySceneModel.fullscreenElement.get()??this.defaultFullscreenElement);let e=()=>{qt()!==this.defaultFullscreenElement&&(this.buttons?.fullscreen.setIcon(`enter-fullscreen`),globalThis.removeEventListener(`fullscreenchange`,e))};globalThis.addEventListener(`fullscreenchange`,e)}}async update(e){for(let t in $t){let n=this.buttons[t],r=e[t];n.htmlButton.disabled=!r.enabled,n.htmlButton.title=r.title,n.setIcon(r.icon),n.hidden=!!r.hidden}}updateColorScheme(e){for(let t of Object.values(this.buttons??{}))t.updateColorScheme(e)}};T.define(`twisty-buttons`,en);var tn=class extends D{htmlButton=document.createElement(`button`);updateColorScheme(e){this.contentWrapper.classList.toggle(`dark-mode`,e===`dark`)}connectedCallback(){this.addCSS(Qt),this.addElement(this.htmlButton)}#e=new G(this,`svg-`,Yt);setIcon(e){this.#e.setValue(e)}};T.define(`twisty-button`,tn);var nn=new E;nn.replaceSync(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`),J?.addEventListener(`mousedown`,e=>{e.which},!0),J?.addEventListener(`mouseup`,e=>{e.which},!0);var rn=0;J?.addEventListener(`mousedown`,()=>{rn++},!1),J?.addEventListener(`mousemove`,an,!1),J?.addEventListener(`mouseenter`,an,!1);function an(e){e.pageY}var on=class extends D{model;controller;constructor(e,t){super(),this.model=e,this.controller=t}async onDetailedTimelineInfo(e){let t=await this.inputElem();t.min=e.timeRange.start.toString(),t.max=e.timeRange.end.toString(),t.disabled=t.min===t.max,t.value=e.timestamp.toString()}async connectedCallback(){this.addCSS(nn),this.addElement(await this.inputElem()),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(e){this.contentWrapper.classList.toggle(`dark-mode`,e===`dark`)}#e=null;async inputElem(){return this.#e??=(async()=>{let e=document.createElement(`input`);return e.type=`range`,e.disabled=!0,this.model?.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),e.addEventListener(`input`,this.onInput.bind(this)),e.addEventListener(`keydown`,this.onKeypress.bind(this)),e})()}async onInput(e){let t=await this.inputElem();await this.slowDown(e,t);let n=parseInt(t.value,10);this.model?.playingInfo.set({playing:!1}),this.model?.timestampRequest.set(n)}onKeypress(e){switch(e.key){case`ArrowLeft`:case`ArrowRight`:this.controller?.animationController.play({direction:e.key===`ArrowLeft`?K.Backwards:K.Forwards,untilBoundary:q.Move}),e.preventDefault();break;case` `:this.controller?.togglePlay(),e.preventDefault()}}async slowDown(e,t){}};T.define(`twisty-scrubber`,on);var sn=null;async function cn(e,t){let[{ThreePerspectiveCamera:n,ThreeScene:r},i,a,o,s,c,l]=await Promise.all([(async()=>{let{ThreePerspectiveCamera:e,ThreeScene:t}=await I;return{ThreePerspectiveCamera:e,ThreeScene:t}})(),await e.puzzleLoader.get(),await e.visualizationStrategy.get(),await e.twistySceneModel.stickeringRequest.get(),await e.twistySceneModel.stickeringMaskRequest.get(),await e.legacyPosition.get(),await e.twistySceneModel.orbitCoordinates.get()]),u=t?.width??2048,d=t?.height??2048,f=u/d,p=sn??=await(async()=>new n(20,f,.1,20))(),m=new r,h=new Ut(e,{scheduleRender:()=>{}},i,a);m.add(await h.twisty3DPuzzle()),await He(p,l);let g=(await Ae(u,d,m,p)).toDataURL(),ee=await ln(e);return{dataURL:g,download:async e=>{un(g,e??ee)}}}async function ln(e){let[t,n]=await Promise.all([e.puzzleID.get(),e.alg.get()]);return`[${t}]${n.alg.experimentalNumChildAlgNodes()===0?``:` ${n.alg.toString()}`}`}function un(e,t,n=`png`){let r=document.createElement(`a`);r.href=e,r.download=`${t}.${n}`,r.click()}var dn=new E;dn.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);var fn=class extends x{getDefaultValue(){return null}},pn=class extends b{getDefaultValue(){return null}derive(e){return typeof e==`string`?new URL(e,location.href):e}},Y=class e{warnings;errors;constructor(e){this.warnings=Object.freeze(e?.warnings??[]),this.errors=Object.freeze(e?.errors??[]),Object.freeze(this)}add(t){return new e({warnings:this.warnings.concat(t?.warnings??[]),errors:this.errors.concat(t?.errors??[])})}log(){this.errors.length>0?console.error(`\u{1F6A8} ${this.errors[0]}`):this.warnings.length>0?console.warn(`\u26A0\uFE0F ${this.warnings[0]}`):console.info(`😎 No issues!`)}};function mn(e){try{let t=g.fromString(e),n=[];return t.toString()!==e&&n.push(`Alg is non-canonical!`),{alg:t,issues:new Y({warnings:n})}}catch(e){return{alg:new g,issues:new Y({errors:[`Malformed alg: ${e.toString()}`]})}}}function hn(e,t){return e.alg.isIdentical(t.alg)&&Ot(e.issues.warnings,t.issues.warnings)&&Ot(e.issues.errors,t.issues.errors)}var gn=class extends b{getDefaultValue(){return{alg:new g,issues:new Y}}canReuseValue(e,t){return hn(e,t)}async derive(e){return typeof e==`string`?mn(e):{alg:e,issues:new Y}}},_n=class extends C{derive(e){return e.kpuzzle.algToTransformation(e.setupAlg.alg)}},vn=class extends C{derive(e){if(e.setupTransformation)return e.setupTransformation;switch(e.setupAnchor){case`start`:return e.setupAlgTransformation;case`end`:{let t=e.indexer.transformationAtIndex(e.indexer.numAnimatedLeaves()).invert();return e.setupAlgTransformation.applyTransformation(t)}default:throw Error(`Unimplemented!`)}}},yn=class extends x{getDefaultValue(){return null}},bn=class extends x{getDefaultValue(){return{move:null,amount:0}}canReuseValue(e,t){return e.move===t.move&&e.amount===t.amount}},xn=class extends C{derive(e){return{patternIndex:e.currentMoveInfo.patternIndex,movesFinishing:e.currentMoveInfo.movesFinishing.map(e=>e.move),movesFinished:e.currentMoveInfo.movesFinished.map(e=>e.move)}}canReuseValue(e,t){return e.patternIndex===t.patternIndex&&kt(e.movesFinishing,t.movesFinishing,(e,t)=>e.isIdentical(t))&&kt(e.movesFinished,t.movesFinished,(e,t)=>e.isIdentical(t))}},Sn=class extends C{derive(e){function t(t){return e.detailedTimelineInfo.atEnd&&e.catchUpMove.move!==null&&t.currentMoves.push({move:e.catchUpMove.move,direction:K.Backwards,fraction:1-e.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),t}if(e.indexer.currentMoveInfo)return t(e.indexer.currentMoveInfo(e.detailedTimelineInfo.timestamp));{let n=e.indexer.timestampToIndex(e.detailedTimelineInfo.timestamp),r={patternIndex:n,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(e.indexer.numAnimatedLeaves()>0){let i=e.indexer.getAnimLeaf(n)?.as(u);if(!i)return t(r);let a=e.indexer.indexToMoveStartTimestamp(n),o=e.indexer.moveDuration(n),s=o?(e.detailedTimelineInfo.timestamp-a)/o:0,c=a+o,l={move:i,direction:K.Forwards,fraction:s,startTimestamp:a,endTimestamp:c};s===0?r.movesStarting.push(l):s===1?r.movesFinishing.push(l):(r.currentMoves.push(l),r.latestStart=Math.max(r.latestStart,a),r.earliestEnd=Math.min(r.earliestEnd,c))}return t(r)}}},Cn=class extends C{derive(e){let t=e.indexer.transformationAtIndex(e.currentLeavesSimplified.patternIndex);t=e.anchoredStart.applyTransformation(t);for(let n of e.currentLeavesSimplified.movesFinishing)t=t.applyMove(n);for(let n of e.currentLeavesSimplified.movesFinished)t=t.applyMove(n);return t.toKPattern()}},wn={u:`y`,l:`x`,f:`z`,r:`x`,b:`z`,d:`y`,m:`x`,e:`y`,s:`z`,x:`x`,y:`y`,z:`z`};function Tn(e,t){return wn[e.family[0].toLowerCase()]===wn[t.family[0].toLowerCase()]}var En=_(class extends d{traverseAlg(e){let t=[];for(let n of e.childAlgNodes())t.push(this.traverseAlgNode(n));return Array.prototype.concat(...t)}traverseGroupingOnce(e){if(e.experimentalIsEmpty())return[];let t=[];for(let n of e.childAlgNodes()){if(!(n.is(u)||n.is(a)||n.is(ee)))return this.traverseAlg(e);let r=n.as(u);r&&t.push(r)}let n=H(t[0].amount);for(let r=0;r<t.length-1;r++){for(let n=1;n<t.length;n++)if(!Tn(t[r],t[n]))return this.traverseAlg(e);n=Math.max(n,H(t[r].amount))}let r=t.map(e=>({animLeafAlgNode:e,msUntilNext:0,duration:n}));return r[r.length-1].msUntilNext=n,r}traverseGrouping(e){let t=[],n=e.amount>0?e.alg:e.alg.invert();for(let r=0;r<Math.abs(e.amount);r++)t.push(this.traverseGroupingOnce(n));return Array.prototype.concat(...t)}traverseMove(e){let t=H(e.amount);return[{animLeafAlgNode:e,msUntilNext:t,duration:t}]}traverseCommutator(e){let t=[],n=[e.A,e.B,e.A.invert(),e.B.invert()];for(let e of n)t.push(this.traverseGroupingOnce(e));return Array.prototype.concat(...t)}traverseConjugate(e){let t=[],n=[e.A,e.B,e.A.invert()];for(let e of n)t.push(this.traverseGroupingOnce(e));return Array.prototype.concat(...t)}traversePause(e){if(e.experimentalNISSGrouping)return[];let t=H(1);return[{animLeafAlgNode:e,msUntilNext:t,duration:t}]}traverseNewline(e){return[]}traverseLineComment(e){return[]}});function Dn(e){let t=0;return En(e).map(e=>{let n={animLeaf:e.animLeafAlgNode,start:t,end:t+e.duration};return t+=e.msUntilNext,n})}var On=class{animLeaves;kpuzzle;constructor(e,t,n){this.kpuzzle=e,this.animLeaves=n?.animationTimelineLeaves??Dn(t)}getAnimLeaf(e){return this.animLeaves[Math.min(e,this.animLeaves.length-1)]?.animLeaf??null}getAnimationTimelineLeaf(e){return this.animLeaves[Math.min(e,this.animLeaves.length-1)]}indexToMoveStartTimestamp(e){let t=0;return this.animLeaves.length>0&&(t=this.animLeaves[Math.min(e,this.animLeaves.length-1)].start),t}timestampToIndex(e){let t=0;for(t=0;t<this.animLeaves.length;t++)if(this.animLeaves[t].start>=e)return Math.max(0,t-1);return Math.max(0,t-1)}timestampToPosition(e,t){let n=this.currentMoveInfo(e),r=t??this.kpuzzle.identityTransformation().toKPattern();for(let e of this.animLeaves.slice(0,n.patternIndex)){let t=e.animLeaf.as(u);t!==null&&(r=r.applyMove(t))}return{pattern:r,movesInProgress:n.currentMoves}}currentMoveInfo(e){let t=1/0;for(let n of this.animLeaves)if(n.start<=e&&n.end>=e)t=Math.min(t,n.start);else if(n.start>e)break;let n=[],r=[],i=[],a=[],o=-1/0,s=1/0,c=0;for(let l of this.animLeaves)if(l.end<=t){if(!isFinite(t)&&l.start>e)break;c++}else if(l.start>e)break;else{let t=l.animLeaf.as(u);if(t!==null){let c=(e-l.start)/(l.end-l.start),u=!1;c>1&&(c=1,u=!0);let d={move:t,direction:K.Forwards,fraction:c,startTimestamp:l.start,endTimestamp:l.end};switch(c){case 0:r.push(d);break;case 1:u?a.push(d):i.push(d);break;default:n.push(d),o=Math.max(o,l.start),s=Math.min(s,l.end)}}}return{patternIndex:c,currentMoves:n,latestStart:o,earliestEnd:s,movesStarting:r,movesFinishing:i,movesFinished:a}}patternAtIndex(e,t){let n=t??this.kpuzzle.defaultPattern();for(let t=0;t<this.animLeaves.length&&t<e;t++){let e=this.animLeaves[t].animLeaf.as(u);e!==null&&(n=n.applyMove(e))}return n}transformationAtIndex(e){let t=this.kpuzzle.identityTransformation();for(let n of this.animLeaves.slice(0,e)){let e=n.animLeaf.as(u);e!==null&&(t=t.applyMove(e))}return t}algDuration(){let e=0;for(let t of this.animLeaves)e=Math.max(e,t.end);return e}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(e){let t=this.getAnimationTimelineLeaf(e);return t.end-t.start}},kn=1024,An=class extends C{derive(e){switch(e.indexerConstructorRequest){case`auto`:return e.animationTimelineLeaves!==null||lt(e.alg.alg)<=kn&&e.puzzle===`3x3x3`&&e.visualizationStrategy===`Cube3D`?On:yt;case`tree`:return yt;case`simple`:return pt;case`simultaneous`:return On;default:throw Error(`Invalid indexer request!`)}}},jn=class extends x{getDefaultValue(){return`auto`}},Mn=class extends C{derive(e){return new e.indexerConstructor(e.kpuzzle,e.algWithIssues.alg,{animationTimelineLeaves:e.animationTimelineLeaves})}},Nn=class extends C{derive(e){return{pattern:e.currentPattern,movesInProgress:e.currentMoveInfo.currentMoves}}},Pn=!0,Fn=class extends C{async derive(e){try{return Pn&&e.kpuzzle.algToTransformation(e.algWithIssues.alg),e.algWithIssues}catch(e){return{alg:new g,issues:new Y({errors:[`Invalid alg for puzzle: ${e.toString()}`]})}}}},In=class extends x{getDefaultValue(){return`start`}},Ln=class extends x{getDefaultValue(){return null}},Rn=class extends C{async derive(e){return e.puzzleLoader.kpuzzle()}},zn=class extends x{getDefaultValue(){return S}},Bn=class extends C{async derive(e){return e.puzzleLoader.id}},Vn=class extends x{getDefaultValue(){return S}},Hn=class extends C{derive(e){if(e.puzzleIDRequest&&e.puzzleIDRequest!==S){let t=ae[e.puzzleIDRequest];return t||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${e.puzzleIDRequest}`]}),t}return e.puzzleDescriptionRequest&&e.puzzleDescriptionRequest!==S?ne(e.puzzleDescriptionRequest):oe}},Un=class extends C{derive(e){return{playing:e.playingInfo.playing,atStart:e.detailedTimelineInfo.atStart,atEnd:e.detailedTimelineInfo.atEnd}}canReuseValue(e,t){return e.playing===t.playing&&e.atStart===t.atStart&&e.atEnd===t.atEnd}},Wn=class extends C{derive(e){let t=this.#e(e),n=!1,r=!1;return t>=e.timeRange.end&&(r=!0,t=Math.min(e.timeRange.end,t)),t<=e.timeRange.start&&(n=!0,t=Math.max(e.timeRange.start,t)),{timestamp:t,timeRange:e.timeRange,atStart:n,atEnd:r}}#e(e){switch(e.timestampRequest){case`auto`:return e.setupAnchor===`start`&&e.setupAlg.alg.experimentalIsEmpty()?e.timeRange.end:e.timeRange.start;case`start`:return e.timeRange.start;case`end`:return e.timeRange.end;case`anchor`:return e.setupAnchor===`start`?e.timeRange.start:e.timeRange.end;case`opposite-anchor`:return e.setupAnchor===`start`?e.timeRange.end:e.timeRange.start;default:return e.timestampRequest}}canReuseValue(e,t){return e.timestamp===t.timestamp&&e.timeRange.start===t.timeRange.start&&e.timeRange.end===t.timeRange.end&&e.atStart===t.atStart&&e.atEnd===t.atEnd}},Gn=class extends b{async getDefaultValue(){return{direction:K.Forwards,playing:!1,untilBoundary:q.EntireTimeline,loop:!1}}async derive(e,t){let n=await t,r=Object.assign({},n);return Object.assign(r,e),r}canReuseValue(e,t){return e.direction===t.direction&&e.playing===t.playing&&e.untilBoundary===t.untilBoundary&&e.loop===t.loop}},Kn=class extends b{getDefaultValue(){return 1}derive(e){return e<0?1:e}},qn={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},Jn=class extends x{getDefaultValue(){return`auto`}set(e){let t=this.get();super.set((async()=>this.validInput(await e)?e:t)())}validInput(e){return!!(typeof e==`number`||qn[e])}},Yn=class extends C{derive(e){return{start:0,end:e.indexer.algDuration()}}},Xn=class extends x{getDefaultValue(){return`auto`}},Zn=class extends x{getDefaultValue(){return`auto`}},Qn=class extends C{derive(e){switch(e.puzzleID){case`clock`:case`square1`:case`redi_cube`:case`melindas2x2x2x2`:case`tri_quad`:case`loopover`:return`2D`;case`3x3x3`:switch(e.visualizationRequest){case`auto`:case`3D`:return`Cube3D`;default:return e.visualizationRequest}default:switch(e.visualizationRequest){case`auto`:case`3D`:return`PG3D`;case`experimental-2D-LL`:case`experimental-2D-LL-face`:return[`2x2x2`,`4x4x4`,`megaminx`].includes(e.puzzleID)?`experimental-2D-LL`:`2D`;default:return e.visualizationRequest}}}},$n=class extends x{getDefaultValue(){return`auto`}},er=class extends x{getDefaultValue(){return`auto`}},tr=class extends x{getDefaultValue(){return`auto`}},nr=class extends x{getDefaultValue(){return`auto`}},rr=null;async function ir(){return rr??=new(await I).ThreeTextureLoader}var ar=class extends C{async derive(e){let{spriteURL:t}=e;return t===null?null:new Promise(async(e,n)=>{let r=()=>{console.warn(`Could not load sprite:`,t.toString()),e(null)};try{(await ir()).load(t.toString(),e,r,r)}catch{r()}})}},or={facelets:[`regular`,`regular`,`regular`,`regular`,`regular`]};async function sr(e){let{definition:t}=await e.kpuzzle(),n={orbits:{}};for(let e of t.orbits)n.orbits[e.orbitName]={pieces:Array(e.numPieces).fill(or)};return n}var cr=class extends C{getDefaultValue(){return{orbits:{}}}async derive(e){return e.stickeringMaskRequest?e.stickeringMaskRequest:e.stickeringRequest===`picture`?{specialBehaviour:`picture`,orbits:{}}:e.puzzleLoader.stickeringMask?.(e.stickeringRequest??`full`)??sr(e.puzzleLoader)}},lr={"-":v.Regular,D:v.Dim,I:v.Ignored,X:v.Invisible,O:v.IgnoreNonPrimary,P:v.PermuteNonPrimary,o:v.Ignoriented,"?":v.OrientationWithoutPermutation,M:v.Mystery,"@":v.Regular};function ur(e){let t={orbits:{}},n=e.split(`,`);for(let e of n){let[n,r,...i]=e.split(`:`);if(i.length>0)throw Error(`Invalid serialized orbit stickering mask (too many colons): \`${e}\``);let a=[];t.orbits[n]={pieces:a};for(let e of r){let t=lr[e];a.push(re(t))}}return t}var dr=class extends b{getDefaultValue(){return null}derive(e){return e===null?null:typeof e==`string`?ur(e):e}},fr=class extends x{getDefaultValue(){return null}},pr=class extends x{getDefaultValue(){return`auto`}},mr=class extends x{getDefaultValue(){return{}}},hr=class extends x{getDefaultValue(){return`auto`}},gr=class extends x{getDefaultValue(){return`auto`}},_r=class extends C{derive(e){return e.colorSchemeRequest===`dark`?`dark`:`light`}},vr=class extends x{getDefaultValue(){return`auto`}},yr=class extends x{getDefaultValue(){return null}},br=35,xr=class extends x{getDefaultValue(){return br}};function Sr(e,t){return e.latitude===t.latitude&&e.longitude===t.longitude&&e.distance===t.distance}var Cr=class extends b{getDefaultValue(){return`auto`}canReuseValue(e,t){return e===t||Sr(e,t)}async derive(e,t){if(e===`auto`)return`auto`;let n=await t;n===`auto`&&(n={});let r=Object.assign({},n);return Object.assign(r,e),r.latitude!==void 0&&(r.latitude=Math.min(Math.max(r.latitude,-90),90)),r.longitude!==void 0&&(r.longitude=At(r.longitude,180,-180)),r}},wr=class extends C{canReuseValue(e,t){return Sr(e,t)}async derive(e){if(e.orbitCoordinatesRequest===`auto`)return Ar(e.puzzleID,e.strategy);let t=Object.assign(Object.assign({},Ar(e.puzzleID,e.strategy),e.orbitCoordinatesRequest));if(Math.abs(t.latitude)<=e.latitudeLimit)return t;{let{latitude:n,longitude:r,distance:i}=t;return{latitude:e.latitudeLimit*Math.sign(n),longitude:r,distance:i}}}},Tr={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},Er={latitude:35,longitude:30,distance:6},Dr={latitude:35,longitude:30,distance:6.25},Or={latitude:Math.atan(1/2)*k,longitude:0,distance:6.7},kr={latitude:26.56505117707799,longitude:0,distance:6};function Ar(e,t){if(e[1]===`x`)return t===`Cube3D`?Er:Dr;switch(e){case`megaminx`:case`gigaminx`:return Or;case`pyraminx`:case`master_tetraminx`:return kr;case`skewb`:return Dr;default:return Tr}}var jr=class{background=new gr;colorSchemeRequest=new vr;dragInput=new pr;foundationDisplay=new er;foundationStickerSpriteURL=new pn;fullscreenElement=new yr;hintFacelet=new ve;hintStickerSpriteURL=new pn;initialHintFaceletsAnimation=new nr;hintFaceletsElevation=new tr;latitudeLimit=new xr;movePressInput=new hr;movePressCancelOptions=new mr;orbitCoordinatesRequest=new Cr;stickeringMaskRequest=new dr;stickeringRequest=new fr;faceletScale=new $n;colorScheme=new _r({colorSchemeRequest:this.colorSchemeRequest});foundationStickerSprite=new ar({spriteURL:this.foundationStickerSpriteURL});hintStickerSprite=new ar({spriteURL:this.hintStickerSpriteURL});orbitCoordinates;stickeringMask;twistyPlayerModel;constructor(e){this.twistyPlayerModel=e,this.orbitCoordinates=new wr({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:e.puzzleID,strategy:e.visualizationStrategy}),this.stickeringMask=new cr({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:e.puzzleLoader})}},Mr={errors:[]},Nr=class extends x{getDefaultValue(){return Mr}reset(){this.set(this.getDefaultValue())}canReuseValue(e,t){return Ot(e.errors,t.errors)}},Pr=class{userVisibleErrorTracker=new Nr;alg=new gn;backView=new xt;controlPanel=new It;catchUpMove=new bn;indexerConstructorRequest=new jn;playingInfo=new Gn;puzzleDescriptionRequest=new zn;puzzleIDRequest=new Vn;setupAnchor=new In;setupAlg=new gn;setupTransformation=new Ln;tempoScale=new Kn;timestampRequest=new Jn;viewerLink=new Xn;visualizationFormat=new Zn;title=new fn;videoURL=new pn;competitionID=new fn;animationTimelineLeavesRequest=new yn;puzzleLoader=new Hn({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker);kpuzzle=new Rn({puzzleLoader:this.puzzleLoader});puzzleID=new Bn({puzzleLoader:this.puzzleLoader});puzzleAlg=new Fn({algWithIssues:this.alg,kpuzzle:this.kpuzzle});puzzleSetupAlg=new Fn({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle});visualizationStrategy=new Qn({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID});indexerConstructor=new An({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest,animationTimelineLeaves:this.animationTimelineLeavesRequest});setupAlgTransformation=new _n({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle});indexer=new Mn({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle,animationTimelineLeaves:this.animationTimelineLeavesRequest});anchorTransformation=new vn({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer});timeRange=new Yn({indexer:this.indexer});detailedTimelineInfo=new Wn({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg});coarseTimelineInfo=new Un({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo});currentMoveInfo=new Sn({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove});buttonAppearance=new Xt({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink});currentLeavesSimplified=new xn({currentMoveInfo:this.currentMoveInfo});currentPattern=new Cn({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer});legacyPosition=new Nn({currentMoveInfo:this.currentMoveInfo,currentPattern:this.currentPattern});twistySceneModel=new jr(this);async twizzleLink(){let[e,t,n,r,i,a,o,s]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),c=e===`experimental-twizzle-explorer`,l=new URL(`https://alpha.twizzle.net/${c?`explore`:`edit`}/`);return r.alg.experimentalIsEmpty()||l.searchParams.set(`alg`,r.alg.toString()),i.alg.experimentalIsEmpty()||l.searchParams.set(`setup-alg`,i.alg.toString()),a!==`start`&&l.searchParams.set(`setup-anchor`,a),o!==`full`&&o!==null&&l.searchParams.set(`experimental-stickering`,o),c&&n!==S?l.searchParams.set(`puzzle-description`,n):t!==`3x3x3`&&l.searchParams.set(`puzzle`,t),s&&l.searchParams.set(`title`,s),l.toString()}experimentalAddAlgLeaf(e,t){let n=e.as(u);n?this.experimentalAddMove(n,t):this.alg.set((async()=>{let t=(await this.alg.get()).alg.concat(new g([e]));return this.timestampRequest.set(`end`),t})())}experimentalAddMove(e,t){let n=typeof e==`string`?new u(e):e;this.alg.set((async()=>{let[{alg:e},r]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),i=te(e,n,{...t,...await ce(r)});return this.timestampRequest.set(`end`),this.catchUpMove.set({move:n,amount:0}),i})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{let e=(await this.alg.get()).alg,t=Array.from(e.childAlgNodes()),[n]=t.splice(-1);if(!n)return e;this.timestampRequest.set(`end`);let r=n.as(u);return r&&this.catchUpMove.set({move:r.invert(),amount:0}),new g(t)})())}};function X(e){return Error(`Cannot get \`.${e}\` directly from a \`TwistyPlayer\`.`)}var Fr=class extends D{experimentalModel=new Pr;set alg(e){this.experimentalModel.alg.set(e)}get alg(){throw X(`alg`)}set experimentalSetupAlg(e){this.experimentalModel.setupAlg.set(e)}get experimentalSetupAlg(){throw X(`setup`)}set experimentalSetupAnchor(e){this.experimentalModel.setupAnchor.set(e)}get experimentalSetupAnchor(){throw X(`anchor`)}set puzzle(e){this.experimentalModel.puzzleIDRequest.set(e)}get puzzle(){throw X(`puzzle`)}set experimentalPuzzleDescription(e){this.experimentalModel.puzzleDescriptionRequest.set(e)}get experimentalPuzzleDescription(){throw X(`experimentalPuzzleDescription`)}set timestamp(e){this.experimentalModel.timestampRequest.set(e)}get timestamp(){throw X(`timestamp`)}set hintFacelets(e){this.experimentalModel.twistySceneModel.hintFacelet.set(e)}get hintFacelets(){throw X(`hintFacelets`)}set experimentalStickering(e){this.experimentalModel.twistySceneModel.stickeringRequest.set(e)}get experimentalStickering(){throw X(`experimentalStickering`)}set experimentalStickeringMaskOrbits(e){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(e)}get experimentalStickeringMaskOrbits(){throw X(`experimentalStickeringMaskOrbits`)}set experimentalFaceletScale(e){this.experimentalModel.twistySceneModel.faceletScale.set(e)}get experimentalFaceletScale(){throw X(`experimentalFaceletScale`)}set backView(e){this.experimentalModel.backView.set(e)}get backView(){throw X(`backView`)}set background(e){this.experimentalModel.twistySceneModel.background.set(e)}get background(){throw X(`background`)}set colorScheme(e){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(e)}get colorScheme(){throw X(`colorScheme`)}set controlPanel(e){this.experimentalModel.controlPanel.set(e)}get controlPanel(){throw X(`controlPanel`)}set visualization(e){this.experimentalModel.visualizationFormat.set(e)}get visualization(){throw X(`visualization`)}set experimentalTitle(e){this.experimentalModel.title.set(e)}get experimentalTitle(){throw X(`experimentalTitle`)}set experimentalVideoURL(e){this.experimentalModel.videoURL.set(e)}get experimentalVideoURL(){throw X(`experimentalVideoURL`)}set experimentalCompetitionID(e){this.experimentalModel.competitionID.set(e)}get experimentalCompetitionID(){throw X(`experimentalCompetitionID`)}set viewerLink(e){this.experimentalModel.viewerLink.set(e)}get viewerLink(){throw X(`viewerLink`)}set experimentalMovePressInput(e){this.experimentalModel.twistySceneModel.movePressInput.set(e)}get experimentalMovePressInput(){throw X(`experimentalMovePressInput`)}set experimentalMovePressCancelOptions(e){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(e)}get experimentalMovePressCancelOptions(){throw X(`experimentalMovePressCancelOptions`)}set cameraLatitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:e})}get cameraLatitude(){throw X(`cameraLatitude`)}set cameraLongitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:e})}get cameraLongitude(){throw X(`cameraLongitude`)}set cameraDistance(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:e})}get cameraDistance(){throw X(`cameraDistance`)}set cameraLatitudeLimit(e){this.experimentalModel.twistySceneModel.latitudeLimit.set(e)}get cameraLatitudeLimit(){throw X(`cameraLatitudeLimit`)}set indexer(e){this.experimentalModel.indexerConstructorRequest.set(e)}get indexer(){throw X(`indexer`)}set tempoScale(e){this.experimentalModel.tempoScale.set(e)}get tempoScale(){throw X(`tempoScale`)}set experimentalSprite(e){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(e)}get experimentalSprite(){throw X(`experimentalSprite`)}set experimentalHintSprite(e){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(e)}get experimentalHintSprite(){throw X(`experimentalHintSprite`)}set fullscreenElement(e){this.experimentalModel.twistySceneModel.fullscreenElement.set(e)}get fullscreenElement(){throw X(`fullscreenElement`)}set experimentalInitialHintFaceletsAnimation(e){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(e)}get experimentalInitialHintFaceletsAnimation(){throw X(`experimentalInitialHintFaceletsAnimation`)}set experimentalHintFaceletsElevation(e){this.experimentalModel.twistySceneModel.hintFaceletsElevation.set(e)}get experimentalHintFaceletsElevation(){throw X(`experimentalHintFaceletsElevation`)}set experimentalDragInput(e){this.experimentalModel.twistySceneModel.dragInput.set(e)}get experimentalDragInput(){throw X(`experimentalDragInput`)}experimentalGet=new Ir(this.experimentalModel)},Ir=class{model;constructor(e){this.model=e}async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}},Lr=`data-`,Rr={alg:`alg`,"experimental-setup-alg":`experimentalSetupAlg`,"experimental-setup-anchor":`experimentalSetupAnchor`,puzzle:`puzzle`,"experimental-puzzle-description":`experimentalPuzzleDescription`,visualization:`visualization`,"hint-facelets":`hintFacelets`,"experimental-stickering":`experimentalStickering`,"experimental-stickering-mask-orbits":`experimentalStickeringMaskOrbits`,background:`background`,"color-scheme":`colorScheme`,"control-panel":`controlPanel`,"back-view":`backView`,"experimental-facelet-scale":`experimentalFaceletScale`,"experimental-initial-hint-facelets-animation":`experimentalInitialHintFaceletsAnimation`,"experimental-hint-facelets-elevation":`experimentalHintFaceletsElevation`,"viewer-link":`viewerLink`,"experimental-move-press-input":`experimentalMovePressInput`,"experimental-drag-input":`experimentalDragInput`,"experimental-title":`experimentalTitle`,"experimental-video-url":`experimentalVideoURL`,"experimental-competition-id":`experimentalCompetitionID`,"camera-latitude":`cameraLatitude`,"camera-longitude":`cameraLongitude`,"camera-distance":`cameraDistance`,"camera-latitude-limit":`cameraLatitudeLimit`,"tempo-scale":`tempoScale`,"experimental-sprite":`experimentalSprite`,"experimental-hint-sprite":`experimentalHintSprite`},zr=Object.fromEntries(Object.values(Rr).map(e=>[e,!0])),Br={experimentalMovePressCancelOptions:!0},Vr,Hr=Symbol(`intersectedCallback`);function Ur(e){Vr??=new IntersectionObserver((e,t)=>{for(let n of e)n.isIntersecting&&n.intersectionRect.height>0&&(n.target[Hr](),t.unobserve(n.target))}),Vr.observe(e)}var Z=class extends Fr{controller=new Pt(this.experimentalModel,this);buttons;experimentalCanvasClickCallback=()=>{};constructor(e={}){super();for(let[t,n]of Object.entries(e)){if(!(zr[t]||Br[t])){console.warn(`Invalid config passed to TwistyPlayer: ${t}`);break}this[t]=n}}#e=new G(this,`controls-`,[`auto`].concat(Object.keys(Ft)));#t=document.createElement(`div`);#n=document.createElement(`div`);#r=!1;connectedCallback(){this.addCSS(dn),Ur(this)}async[Hr](){if(this.#r)return;this.#r=!0,this.addElement(this.#t).classList.add(`visualization-wrapper`),this.addElement(this.#n).classList.add(`error-elem`),this.#n.textContent=`Error`,this.experimentalModel.userVisibleErrorTracker.addFreshListener(e=>{let t=e.errors[0]??null;this.contentWrapper.classList.toggle(`error`,!!t),t&&(this.#n.textContent=t)});let e=new on(this.experimentalModel,this.controller);this.contentWrapper.appendChild(e),this.buttons=new en(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(e=>{this.contentWrapper.classList.toggle(`checkered`,[`auto`,`checkered`].includes(e)),this.contentWrapper.classList.toggle(`checkered-transparent`,e===`checkered-transparent`)}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(e=>{this.contentWrapper.classList.toggle(`dark-mode`,[`dark`].includes(e))}),this.experimentalModel.controlPanel.addFreshListener(e=>{this.#e.setValue(e)}),this.experimentalModel.visualizationStrategy.addFreshListener(this.#c.bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}#i=`auto`;experimentalSetFlashLevel(e){this.#i=e}flash(){this.#i===`auto`&&this.#a?.animate([{opacity:.25},{opacity:1}],{duration:250,easing:`ease-out`})}#a=null;#o=new Ht;#s=null;#c(e){if(e!==this.#s){this.#a?.remove(),this.#a?.disconnect();let t;switch(e){case`2D`:case`experimental-2D-LL`:case`experimental-2D-LL-face`:t=new Vt(this.experimentalModel.twistySceneModel,e);break;case`Cube3D`:case`PG3D`:t=new Wt(this.experimentalModel),this.#o.handleNewValue(t);break;default:throw Error(`Invalid visualization`)}this.#t.appendChild(t),this.#a=t,this.#s=e}}async experimentalCurrentVantages(){this.connectedCallback();let e=this.#a;return e instanceof Wt?e.experimentalVantages():[]}async experimentalCurrentCanvases(){let e=await this.experimentalCurrentVantages(),t=[];for(let n of e)t.push((await n.canvasInfo()).canvas);return t}async experimentalCurrentThreeJSPuzzleObject(e){this.connectedCallback();let t=await(await this.#o.promise).experimentalTwisty3DPuzzleWrapper(),n=t.twisty3DPuzzle(),r=(async()=>{await n,await new Promise(e=>setTimeout(e,0))})();if(e){let n=new O(async()=>{});t.addEventListener(`render-scheduled`,async()=>{n.requestIsPending()||(n.requestAnimFrame(),await r,e())})}return n}jumpToStart(e){this.controller.jumpToStart(e)}jumpToEnd(e){this.controller.jumpToEnd(e)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(e){this.controller.togglePlay(e)}experimentalAddMove(e,t){this.experimentalModel.experimentalAddMove(e,t)}experimentalAddAlgLeaf(e,t){this.experimentalModel.experimentalAddAlgLeaf(e,t)}static get observedAttributes(){let e=[];for(let t of Object.keys(Rr))e.push(t,Lr+t);return e}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(e,t,n){e.startsWith(Lr)&&(e=e.slice(Lr.length));let r=Rr[e];r&&(this[r]=n)}async experimentalScreenshot(e){return(await cn(this.experimentalModel,e)).dataURL}async experimentalDownloadScreenshot(e){if([`2D`,`experimental-2D-LL`,`experimental-2D-LL-face`].includes(await this.experimentalModel.visualizationStrategy.get())){let t=await this.#a.currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),n=new XMLSerializer().serializeToString(t.svgWrapper.svgElement);un(URL.createObjectURL(new Blob([n])),e??await ln(this.experimentalModel),`svg`)}else await(await cn(this.experimentalModel)).download(e)}};T.define(`twisty-player`,Z);var Wr=_(class extends m{traverseAlg(e,t){let n=[],r=0;for(let i of e.childAlgNodes()){let e=this.traverseAlgNode(i,{numMovesSoFar:t.numMovesSoFar+r});n.push(e.tokens),r+=e.numLeavesInside}return{tokens:Array.prototype.concat(...n),numLeavesInside:r}}traverseGrouping(e,t){let n=this.traverseAlg(e.alg,t);return{tokens:n.tokens,numLeavesInside:n.numLeavesInside*e.amount}}traverseMove(e,t){return{tokens:[{leaf:e,idx:t.numMovesSoFar}],numLeavesInside:1}}traverseCommutator(e,t){let n=this.traverseAlg(e.A,t),r=this.traverseAlg(e.B,{numMovesSoFar:t.numMovesSoFar+n.numLeavesInside});return{tokens:n.tokens.concat(r.tokens),numLeavesInside:n.numLeavesInside*2+r.numLeavesInside}}traverseConjugate(e,t){let n=this.traverseAlg(e.A,t),r=this.traverseAlg(e.B,{numMovesSoFar:t.numMovesSoFar+n.numLeavesInside});return{tokens:n.tokens.concat(r.tokens),numLeavesInside:n.numLeavesInside*2+r.numLeavesInside*2}}traversePause(e,t){return{tokens:[{leaf:e,idx:t.numMovesSoFar}],numLeavesInside:1}}traverseNewline(e,t){return{tokens:[],numLeavesInside:0}}traverseLineComment(e,t){return{tokens:[],numLeavesInside:0}}}),Gr=class extends x{getDefaultValue(){return``}},Kr=class extends C{derive(e){return mn(e.value)}},qr=class extends b{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(e,t){let{selectionStart:n,selectionEnd:r}=e,i=await t;return{selectionStart:n,selectionEnd:r,endChangedMostRecently:e.selectionStart===i.selectionStart&&e.selectionEnd!==(await t).selectionEnd}}},Jr=class extends C{derive(e){return e.selectionInfo.endChangedMostRecently?e.selectionInfo.selectionEnd:e.selectionInfo.selectionStart}},Yr=class extends C{derive(e){return Wr(e.algWithIssues.alg,{numMovesSoFar:0}).tokens}},Xr=class extends C{derive(e){function t(t){if(t===null)return null;let n;return n=e.targetChar<t.leaf[r]?`before`:e.targetChar===t.leaf[r]?`start`:e.targetChar<t.leaf[i]?`inside`:e.targetChar===t.leaf[i]?`end`:`after`,{leafInfo:t,where:n}}let n=null;for(let a of e.leafTokens){if(e.targetChar<a.leaf[r]&&n!==null)return t(n);if(e.targetChar<=a.leaf[i])return t(a);n=a}return t(n)}},Zr=class{valueProp=new Gr;selectionProp=new qr;targetCharProp=new Jr({selectionInfo:this.selectionProp});algEditorAlgWithIssues=new Kr({value:this.valueProp});leafTokensProp=new Yr({algWithIssues:this.algEditorAlgWithIssues});leafToHighlight=new Xr({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp})},Qr=`//`;function $r(e){try{return g.fromString(e)}catch{return null}}function ei(e,t){let n=e.indexOf(t);return n===-1?[e,``]:[e.slice(0,n),e.slice(n)]}function ti(e){let t=[];for(let n of e.split(`
`)){let[e,r]=ei(n,Qr);e=e.replaceAll(`’`,`'`),t.push(e+r)}return t.join(`
`)}function ni(e,t){let{value:n}=e,{selectionStart:r,selectionEnd:i}=e,a=n.slice(0,r),o=n.slice(i);t=t.replaceAll(`\r
`,`
`);let s=a.match(/\/\/[^\n]*$/),c=n[r-1]===`/`&&t[0]===`/`,l=s||c,u=t.match(/\/\/[^\n]*$/),d=t;if(l){let[e,n]=ei(t,`
`);d=e+ti(n)}else d=ti(t);let f=!l&&r!==0&&![`
`,` `].includes(d[0])&&![`
`,` `].includes(n[r-1]),p=!u&&i!==n.length&&![`
`,` `].includes(d.at(-1))&&![`
`,` `].includes(n[i]);function m(e,t){let n=e+d+t,r=!!$r(a+n+o);return r&&(d=n),r}f&&p&&m(` `,` `)||f&&m(` `,``)||p&&m(``,` `),J?.execCommand(`insertText`,!1,d)||e.setRangeText(d,r,i,`end`)}var ri=new E;ri.replaceSync(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
  overflow: hidden;
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);var ii=`for-twisty-player`,ai=`placeholder`,oi=`twisty-player-prop`,si=class extends D{model=new Zr;#e=document.createElement(`textarea`);#t=document.createElement(`div`);#n=document.createElement(`span`);#r=document.createElement(`span`);#i=document.createElement(`span`);#a=new G(this,`valid-for-puzzle-`,[`none`,`warning`,`error`]);#o=null;#s;get#c(){return this.#o===null?null:this.#o.experimentalModel[this.#s]}debugNeverRequestTimestamp=!1;constructor(e){super(),this.#t.classList.add(`carbon-copy`),this.addElement(this.#t),this.#e.rows=1,this.addElement(this.#e),this.#n.classList.add(`prefix`),this.#t.appendChild(this.#n),this.#r.classList.add(`highlight`),this.#t.appendChild(this.#r),this.#i.classList.add(`suffix`),this.#t.appendChild(this.#i),this.#e.placeholder=`Alg`,this.#e.setAttribute(`spellcheck`,`false`),this.addCSS(ri),this.#e.addEventListener(`input`,()=>{this.#l=!0,this.onInput()}),this.#e.addEventListener(`blur`,()=>this.onBlur()),document.addEventListener(`selectionchange`,()=>this.onSelectionChange()),e?.twistyPlayer&&(this.twistyPlayer=e.twistyPlayer),this.#s=e?.twistyPlayerProp??`alg`,e?.twistyPlayerProp===`alg`&&this.model.leafToHighlight.addFreshListener(e=>{e&&this.highlightLeaf(e.leafInfo.leaf)})}connectedCallback(){this.#e.addEventListener(`paste`,e=>{let t=e.clipboardData?.getData(`text`);t&&(ni(this.#e,t),e.preventDefault(),this.onInput())})}set algString(e){this.#e.value=e,this.onInput()}get algString(){return this.#e.value}set placeholder(e){this.#e.placeholder=e}#l=!1;onInput(){this.#r.hidden=!0,this.highlightLeaf(null);let e=this.#e.value.trimEnd();this.model.valueProp.set(e),this.#c?.set(e)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==this.#e||this.#s!==`alg`)return;let{selectionStart:e,selectionEnd:t}=this.#e;this.model.selectionProp.set({selectionStart:e,selectionEnd:t})}async onBlur(){}setAlgIssueClassForPuzzle(e){this.#a.setValue(e)}#u(e){return e.endsWith(`
`)?`${e} `:e}#d=null;highlightLeaf(e){e===null?(this.#n.textContent=``,this.#r.textContent=``,this.#i.textContent=this.#u(this.#e.value)):e!==this.#d&&(this.#d=e,this.#n.textContent=this.#e.value.slice(0,e[r]),this.#r.textContent=this.#e.value.slice(e[r],e[i]),this.#i.textContent=this.#u(this.#e.value.slice(e[i])),this.#r.hidden=!1)}get twistyPlayer(){return this.#o}set twistyPlayer(e){this.#o?console.warn(`twisty-player reassignment/clearing is not supported`):(this.#o=e,e&&((async()=>{this.algString=this.#c?(await this.#c.get()).alg.toString():``})(),this.#s===`alg`&&(this.#o?.experimentalModel.puzzleAlg.addFreshListener(e=>{if(e.issues.errors.length===0){this.setAlgIssueClassForPuzzle(e.issues.warnings.length===0?`none`:`warning`);let t=e.alg,n=g.fromString(this.algString);t.isIdentical(n)||(this.algString=t.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle(`error`)}),this.model.leafToHighlight.addFreshListener(async t=>{if(t===null)return;let[n,r]=await Promise.all([await e.experimentalModel.indexer.get(),await e.experimentalModel.timestampRequest.get()]);if(r===`auto`&&!this.#l)return;let i=n.indexToMoveStartTimestamp(t.leafInfo.idx),a=n.moveDuration(t.leafInfo.idx),o;switch(t.where){case`before`:o=i;break;case`start`:case`inside`:o=i+a/4;break;case`end`:case`after`:o=i+a;break;default:throw console.log(`invalid where`),Error(`Invalid where!`)}this.debugNeverRequestTimestamp||e.experimentalModel.timestampRequest.set(o)}),e.experimentalModel.currentLeavesSimplified.addFreshListener(async t=>{let n=(await e.experimentalModel.indexer.get()).getAnimLeaf(t.patternIndex);this.highlightLeaf(n)}))))}attributeChangedCallback(e,t,n){switch(e){case ii:{let e=document.getElementById(n);if(!e){console.warn(`${ii}= elem does not exist`);return}if(!(e instanceof Z)){console.warn(`${ii}=is not a twisty-player`);return}this.twistyPlayer=e;return}case ai:this.placeholder=n;return;case oi:if(this.#o)throw console.log(`cannot set prop`),Error(`cannot set prop after twisty player`);this.#s=n;return}}static get observedAttributes(){return[ii,ai,oi]}};T.define(`twisty-alg-editor`,si);async function ci(e){return new Promise((t,n)=>{try{let n=document.getElementById(e);n&&t(n);let r=new MutationObserver(n=>{for(let i of n)i.attributeName===`id`&&i.target instanceof Element&&i.target.getAttribute(`id`)===e&&(t(i.target),r.disconnect())});r.observe(document.body,{attributeFilter:[`id`],subtree:!0})}catch(e){n(e)}})}var li=new E;li.replaceSync(`
:host {
  display: inline;
  --comment-opacity: 0.4;
  --active-background-shade: rgba(66, 133, 244);
}

.wrapper {
  display: inline;
  --current-color: currentColor
}

a {
  color: currentColor;

  &:not(:hover) {
    text-decoration: none;
  }

  &:hover {
    background: color-mix(in oklab, currentColor 20%, transparent);
  }

  &:active {
    color: currentColor;
    animation: 1s linear flash;
  }
}

@keyframes flash {
  from { opacity: 0.5; }
  to { opacity: 1; }
}

twisty-alg-leaf-elem.twisty-alg-line-comment {
  opacity: var(--comment-opacity);
}

.current-move {
  background: color-mix(in oklab, var(--active-background-shade) 30%, transparent);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);var ui=.25,Q=class extends me{algOrAlgNode;constructor(e,t,n,r,i,a){if(super(),this.algOrAlgNode=r,this.classList.add(e),a){let e=this.appendChild(document.createElement(`a`));e.href=`#`,e.textContent=t,e.addEventListener(`click`,e=>{e.preventDefault(),n.twistyAlgViewer.jumpToIndex(n.earliestMoveIndex,i)})}else this.appendChild(document.createElement(`span`)).textContent=t}pathToIndex(e){return[]}setCurrentMove(e){this.classList.toggle(`current-move`,e)}};T.define(`twisty-alg-leaf-elem`,Q);var $=class extends me{queue=[];algOrAlgNode;constructor(e,t){super(),this.algOrAlgNode=t,this.classList.add(e)}addString(e){let t=document.createElement(`span`);t.textContent=e,this.queue.push(t)}addElem(e){return this.queue.push(e.element),e.moveCount}flushQueue(e=h.Forwards){for(let t of pi(this.queue,e))this.append(t);this.queue=[]}pathToIndex(e){return[]}};T.define(`twisty-alg-wrapper-elem`,$);function di(e){return e===h.Forwards?h.Backwards:h.Forwards}function fi(e,t){return t<0?di(e):e}function pi(e,t){if(t===h.Forwards)return e;let n=Array.from(e);return n.reverse(),n}var mi=_(class extends m{traverseAlg(e,t){let n=0,r=new $(`twisty-alg-alg`,e),i=!0;for(let a of c(e.childAlgNodes(),t.direction))i||r.addString(` `),i=!1,a.as(o)?.experimentalNISSGrouping&&r.addString(`^(`),a.as(p)?.experimentalNISSPlaceholder||(n+=r.addElem(this.traverseAlgNode(a,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction}))),a.as(o)?.experimentalNISSGrouping&&r.addString(`)`);return r.flushQueue(t.direction),{moveCount:n,element:r}}traverseGrouping(e,t){let n=e.experimentalAsSquare1Tuple(),r=fi(t.direction,e.amount),i=0,a=new $(`twisty-alg-grouping`,e);return a.addString(`(`),n?(i+=a.addElem({moveCount:1,element:new Q(`twisty-alg-move`,n[0].amount.toString(),t,n[0],!0,!0)}),a.addString(`, `),i+=a.addElem({moveCount:1,element:new Q(`twisty-alg-move`,n[1].amount.toString(),t,n[1],!0,!0)})):i+=a.addElem(this.traverseAlg(e.alg,{earliestMoveIndex:t.earliestMoveIndex+i,twistyAlgViewer:t.twistyAlgViewer,direction:r})),a.addString(`)${e.experimentalRepetitionSuffix}`),a.flushQueue(),{moveCount:i*Math.abs(e.amount),element:a}}traverseMove(e,t){let n=new Q(`twisty-alg-move`,e.toString(),t,e,!0,!0);return t.twistyAlgViewer.highlighter.addMove(e[r],n),{moveCount:1,element:n}}traverseCommutator(e,t){let n=0,r=new $(`twisty-alg-commutator`,e);r.addString(`[`),r.flushQueue();let[i,a]=pi([e.A,e.B],t.direction);return n+=r.addElem(this.traverseAlg(i,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),r.addString(`, `),n+=r.addElem(this.traverseAlg(a,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),r.flushQueue(t.direction),r.addString(`]`),r.flushQueue(),{moveCount:n*2,element:r}}traverseConjugate(e,t){let n=0,r=new $(`twisty-alg-conjugate`,e);r.addString(`[`);let i=r.addElem(this.traverseAlg(e.A,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction}));return n+=i,r.addString(`: `),n+=r.addElem(this.traverseAlg(e.B,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),r.addString(`]`),r.flushQueue(),{moveCount:n+i,element:r}}traversePause(e,t){return e.experimentalNISSGrouping?this.traverseAlg(e.experimentalNISSGrouping.alg,t):{moveCount:1,element:new Q(`twisty-alg-pause`,`.`,t,e,!0,!0)}}traverseNewline(e,t){let n=new $(`twisty-alg-newline`,e);return n.append(document.createElement(`br`)),{moveCount:0,element:n}}traverseLineComment(e,t){return{moveCount:0,element:new Q(`twisty-alg-line-comment`,`//${e.text}`,t,e,!1,!1)}}}),hi=class{moveCharIndexMap=new Map;currentElem=null;addMove(e,t){this.moveCharIndexMap.set(e,t)}set(e){let t=e?this.moveCharIndexMap.get(e[r])??null:null;this.currentElem!==t&&(this.currentElem?.setCurrentMove(!1),t?.setCurrentMove(!0),this.currentElem=t)}},gi=class extends D{highlighter=new hi;#e;#t;#n=null;lastClickTimestamp=null;constructor(e){super({mode:`open`}),this.addCSS(li),e?.twistyPlayer&&(this.twistyPlayer=e?.twistyPlayer)}connectedCallback(){}setAlg(e){this.#t?.isIdentical(e)||(this.#e=mi(e,{earliestMoveIndex:0,twistyAlgViewer:this,direction:h.Forwards}).element,this.#t=e,this.contentWrapper.textContent=``,this.contentWrapper.appendChild(this.#e))}get twistyPlayer(){return this.#n}set twistyPlayer(e){this.#r(e)}async#r(e){if(this.#n)console.warn(`twisty-player reassignment is not supported`);else{if(e===null)throw Error(`clearing twistyPlayer is not supported`);this.#n=e,this.#n.experimentalModel.alg.addFreshListener(e=>{this.setAlg(e.alg)}),e.experimentalModel.currentMoveInfo.addFreshListener(e=>{let t=e.currentMoves[0];if(t??=e.movesStarting[0],t??=e.movesFinishing[0],!t)this.highlighter.set(null);else{let e=t.move;this.highlighter.set(e)}}),e.experimentalModel.detailedTimelineInfo.addFreshListener(e=>{e.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})}}async jumpToIndex(e,t){let n=this.#n;if(n){n.pause();let r=(async()=>{let r=await n.experimentalModel.indexer.get(),i=t?r.moveDuration(e)*ui:0;return r.indexToMoveStartTimestamp(e)+r.moveDuration(e)-i})();n.experimentalModel.timestampRequest.set(await r),this.lastClickTimestamp===await r?(n.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await r}}async attributeChangedCallback(e,t,n){if(e===`for`){let e=document.getElementById(n);if(e||console.info(`for= elem does not exist, waiting for one`),await customElements.whenDefined(`twisty-player`),e=await ci(n),!(e instanceof Z)){console.warn(`for= elem is not a twisty-player`);return}this.twistyPlayer=e}}static get observedAttributes(){return[`for`]}};T.define(`twisty-alg-viewer`,gi);var _i=new E;_i.replaceSync(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`);var vi=new E;vi.replaceSync(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);function yi(e=``,t=location.href){let n={alg:`alg`,"setup-alg":`experimental-setup-alg`,"setup-anchor":`experimental-setup-anchor`,puzzle:`puzzle`,stickering:`experimental-stickering`,"puzzle-description":`experimental-puzzle-description`,title:`experimental-title`,"video-url":`experimental-video-url`,competition:`experimental-competition-id`},r=new URL(t).searchParams,i={};for(let[t,a]of Object.entries(n)){let n=r.get(e+t);if(n!==null){let e=Rr[a];i[e]=n}}return i}var bi=`outer block moves (e.g. R, Rw, or 4r)`,xi=`inner block moves (e.g. M or 2-5r)`,Si={[R.OuterBlockTurnMetric]:`HTM = OBTM ("Outer Block Turn Metric"):
\u2022 ${xi} count as 2 turns
\u2022 ${bi} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,[R.OuterBlockQuantumTurnMetric]:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
\u2022 ${xi} count as 2 turns per quantum (e.g. M2 counts as 4)
\u2022 ${bi} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,[R.RangeBlockTurnMetric]:`STM = RBTM ("Range Block Turn Metric"):
\u2022 ${xi} count as 1 turn
\u2022 ${bi} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,[R.RangeBlockQuantumTurnMetric]:`SQTM = RBQTM ("Range Block Quantum Turn Metric"):
\u2022 ${xi} count as 1 turn per quantum (e.g. M2 counts as 2)
\u2022 ${bi} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,[R.ExecutionTurnMetric]:`ETM ("Execution Turn Metric"):
• all moves (including rotations) count as 1 turn`},Ci={[R.OuterBlockTurnMetric]:`OB`,[R.OuterBlockQuantumTurnMetric]:`OBQ`,[R.RangeBlockTurnMetric]:`RB`,[R.RangeBlockQuantumTurnMetric]:`RBQ`,[R.ExecutionTurnMetric]:`E`},wi=class extends D{twistyPlayer=null;a=null;options;constructor(e){super({mode:`open`}),this.options=e}#e(){if(this.contentWrapper.textContent=``,this.a){let e=this.contentWrapper.appendChild(document.createElement(`span`));e.textContent=`❗️`,e.title=`Could not show a player for link`,this.addElement(this.a)}this.removeCSS(_i);let e=this.shadow.adoptedStyleSheets.indexOf(_i);e!==void 0&&this.shadow.adoptedStyleSheets.splice(e,e+1),this.#t?.remove()}#t;#n;#r;#i;async connectedCallback(){if(this.#r=this.addElement(document.createElement(`div`)),this.#r.classList.add(`responsive-wrapper`),this.options?.colorScheme===`dark`&&this.contentWrapper.classList.add(`dark-mode`),this.addCSS(_i),this.options?.cdnForumTweaks&&this.addCSS(vi),this.a=this.querySelector(`a`),!this.a)return;let e=yi(``,this.a.href),n=this.a?.href,{hostname:r,pathname:i}=new URL(n);if(r!==`alpha.twizzle.net`)this.#e();else if([`/edit/`,`/explore/`].includes(i)){let n=i===`/explore/`;if(e.puzzle&&!(e.puzzle in ae)){let n=(await t(async()=>{let{getPuzzleDescriptionString:e}=await import(`./puzzle-geometry-Dwh6NpeR.js`);return{getPuzzleDescriptionString:e}},__vite__mapDeps([4,1]))).getPuzzleDescriptionString(e.puzzle);delete e.puzzle,e.experimentalPuzzleDescription=n}if(this.twistyPlayer=this.#r.appendChild(new Z({background:this.options?.cdnForumTweaks?`checkered-transparent`:`checkered`,colorScheme:this.options?.colorScheme===`dark`?`dark`:`light`,...e,viewerLink:n?`experimental-twizzle-explorer`:`auto`})),this.twistyPlayer.fullscreenElement=this.contentWrapper,e.experimentalTitle&&(this.twistyPlayer.experimentalTitle=e.experimentalTitle),this.#n=this.#r.appendChild(document.createElement(`div`)),this.#n.classList.add(`scrollable-region`),e.experimentalTitle&&this.#a(e.experimentalTitle).classList.add(`title`),e.experimentalSetupAlg){this.#a(`Setup`,async()=>(await this.twistyPlayer?.experimentalModel.setupAlg.get())?.alg.toString()??null);let t=this.#n.appendChild(document.createElement(`div`));t.classList.add(`setup-alg`),t.textContent=new g(e.experimentalSetupAlg).toString()}let r=this.#a(`Moves`,async()=>(await this.twistyPlayer?.experimentalModel.alg.get())?.alg.toString()??null);this.#i=r.appendChild(Ti(this.twistyPlayer.experimentalModel)),this.#i.classList.add(`move-count`),this.#n.appendChild(new gi({twistyPlayer:this.twistyPlayer})).part.add(`twisty-alg-viewer`)}else this.#e()}#a(e,t){let n=this.#n.appendChild(document.createElement(`div`));n.classList.add(`heading`);let r=n.appendChild(document.createElement(`span`));if(r.textContent=e,t){r.textContent+=` `;let e=r.appendChild(document.createElement(`a`));e.textContent=`📋`,e.href=`#`,e.title=`Copy to clipboard`;async function n(t){e.textContent=t,await new Promise(e=>setTimeout(e,2e3)),e.textContent===t&&(e.textContent=`📋`)}e.addEventListener(`click`,async r=>{r.preventDefault(),e.textContent=`📋…`;let i=await t();if(i)try{await navigator.clipboard.writeText(i),n(`📋✅`)}catch(e){throw n(`📋❌`),e}else n(`📋❌`)})}return n}};T.define(`twizzle-link`,wi);function Ti(e,t=document.createElement(`span`)){async function n(){let[n,r]=await Promise.all([e.puzzleAlg.get(),e.puzzleLoader.get()]);if(n.issues.errors.length!==0){t.textContent=``;return}let i=!0;function a(e){i?i=!1:t.append(`)(`);let a=t.appendChild(document.createElement(`span`)),o=ut(r,e,n.alg);a.append(`${Ci[e]}: `);let s=a.appendChild(document.createElement(`span`));s.textContent=o.toString(),s.classList.add(`move-number`),a.setAttribute(`data-before`,Si[e]??``),a.setAttribute(`title`,Si[e]??``)}t.textContent=`(`,r.id===`3x3x3`?(a(R.OuterBlockTurnMetric),a(R.OuterBlockQuantumTurnMetric),a(R.RangeBlockTurnMetric)):r.pg&&(a(R.RangeBlockTurnMetric),a(R.RangeBlockQuantumTurnMetric)),a(R.ExecutionTurnMetric),t.append(`)`)}return e.puzzleAlg.addFreshListener(n),e.puzzleID.addFreshListener(n),t}export{S as EXPERIMENTAL_PROP_NO_VALUE,Dt as ExperimentalSVGAnimator,pt as SimpleAlgIndexer,yt as TreeAlgIndexer,si as TwistyAlgEditor,gi as TwistyAlgViewer,Z as TwistyPlayer,wi as TwizzleLink,_e as a,bt as backViewLayouts,qe as i,ye as n,I as r,le as setTwistyDebug,dt as t};
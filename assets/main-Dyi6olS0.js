import{f as b,L as y}from"./layout-Ceycnx3X.js";import{o as f,a as g,w as v,r as d,c as E,b as w,d as C,n as L}from"./vue-vendor-CJvUEO8z.js";import{C as M,s as I,L as u,S as P,P as T,G as D,R as S,V as k,W as x,a as R,M as O,b as F}from"./three-GkjKvAHA.js";function A(){const n=d([]),i=d([]),s=d("all"),e=d(!0),a=d("");let t=null;const r=E(()=>s.value==="all"?n.value:n.value.filter(o=>o.category===s.value)),l=o=>{s.value=o};return f(async()=>{t=new AbortController;try{const o=await b("home/home.json",t.signal);n.value=o.features,i.value=o.categories}catch(o){o instanceof DOMException&&o.name==="AbortError"||(a.value="功能資料載入失敗，請稍後再試。",console.error(o))}finally{e.value=!1}}),g(()=>t==null?void 0:t.abort()),{features:n,categories:i,activeCategory:s,filteredFeatures:r,isLoading:e,errorMessage:a,selectCategory:l,watchFeatures:o=>v(r,o)}}const N={description:"#475569",gradient:["#ffffff","#eef2ff","#cffafe"],planned:"#64748b",ready:"#0369a1",scanLine:"rgba(79, 70, 229, 0.07)",shadow:"rgba(49, 46, 129, 0.3)",stroke:"rgba(79, 70, 229, 0.58)",title:"#172554"},U={description:"#cbd5e1",gradient:["#312e81","#0f172a","#164e63"],planned:"#94a3b8",ready:"#67e8f9",scanLine:"rgba(255, 255, 255, 0.06)",shadow:"rgba(0, 0, 0, 0.72)",stroke:"rgba(165, 180, 252, 0.56)",title:"#ffffff"};function m(n,i,s,e){const a=[...i],t=[];let r="";for(const l of a){const o=`${r}${l}`;if(n.measureText(o).width>s&&r){if(t.push(r),r=l,t.length===e-1)break}else r=o}return r&&t.length<e&&t.push(r),t}function c(n,i,s,e,a,t){n.beginPath(),n.moveTo(i+t,s),n.lineTo(i+e-t,s),n.quadraticCurveTo(i+e,s,i+e,s+t),n.lineTo(i+e,s+a-t),n.quadraticCurveTo(i+e,s+a,i+e-t,s+a),n.lineTo(i+t,s+a),n.quadraticCurveTo(i,s+a,i,s+a-t),n.lineTo(i,s+t),n.quadraticCurveTo(i,s,i+t,s),n.closePath()}function p(n,i){const s=document.createElement("canvas");s.width=768,s.height=960;const e=s.getContext("2d");if(!e)throw new Error("Canvas 2D context is not available.");const a=i?U:N,t={x:46,y:34,width:s.width-92,height:s.height-88,radius:38},r=e.createLinearGradient(t.x,t.y,t.x+t.width,t.y+t.height);r.addColorStop(0,a.gradient[0]),r.addColorStop(.5,a.gradient[1]),r.addColorStop(1,a.gradient[2]),e.save(),e.shadowColor=a.shadow,e.shadowBlur=44,e.shadowOffsetY=24,e.fillStyle=r,c(e,t.x,t.y,t.width,t.height,t.radius),e.fill(),e.restore(),e.strokeStyle=a.stroke,e.lineWidth=4,c(e,t.x,t.y,t.width,t.height,t.radius),e.stroke(),e.save(),c(e,t.x,t.y,t.width,t.height,t.radius),e.clip(),e.fillStyle=a.scanLine;for(let o=t.y;o<t.y+t.height;o+=48)e.fillRect(t.x,o,t.width,1);e.restore(),e.textAlign="center",e.fillStyle="#ffffff",e.font='138px "Segoe UI Emoji", sans-serif',e.fillText(n.icon,s.width/2,270),e.fillStyle=a.title,e.font='700 64px "Noto Sans TC", sans-serif',m(e,n.title,620,2).forEach((o,h)=>{e.fillText(o,s.width/2,430+h*80)}),e.fillStyle=a.description,e.font='400 35px "Noto Sans TC", sans-serif',m(e,n.description,590,4).forEach((o,h)=>{e.fillText(o,s.width/2,610+h*51)}),e.fillStyle=n.link==="#"?a.planned:a.ready,e.font='700 29px "Noto Sans TC", sans-serif',e.fillText(n.link==="#"?"MODULE PLANNED":"OPEN MODULE  →",s.width/2,865);const l=new M(s);return l.encoding=I,l.minFilter=u,l.magFilter=u,l.needsUpdate=!0,l}class z{constructor(i,s){this.container=i,this.items=s,this.scene=new P,this.camera=new T(48,1,.1,100),this.group=new D,this.raycaster=new S,this.pointer=new k,this.cards=[],this.animationFrameId=null,this.activeIndex=0,this.currentRotation=0,this.targetRotation=0,this.pointerStartX=0,this.draggedDistance=0,this.isDragging=!1,this.destroyed=!1,this.isDark=document.documentElement.classList.contains("dark"),this.handleThemeChange=()=>{const e=document.documentElement.classList.contains("dark");e!==this.isDark&&(this.isDark=e,this.cards.forEach(a=>{const t=a.material.map;a.material.map=p(a.userData.item,e),a.material.needsUpdate=!0,t==null||t.dispose()}))},this.handlePointerDown=e=>{this.isDragging=!0,this.pointerStartX=e.clientX,this.draggedDistance=0,this.renderer.domElement.setPointerCapture(e.pointerId)},this.handlePointerMove=e=>{if(!this.isDragging||this.items.length===0)return;const a=e.clientX-this.pointerStartX;this.draggedDistance+=Math.abs(a),this.pointerStartX=e.clientX,this.targetRotation-=a*.006},this.handlePointerUp=e=>{if(!this.isDragging||(this.isDragging=!1,this.renderer.domElement.hasPointerCapture(e.pointerId)&&this.renderer.domElement.releasePointerCapture(e.pointerId),this.items.length===0))return;const a=Math.PI*2/this.items.length;this.activeIndex=(Math.round(-this.targetRotation/a)%this.items.length+this.items.length)%this.items.length,this.targetRotation=-this.activeIndex*a},this.handleWheel=e=>{if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.shiftKey))return;e.preventDefault(),(e.shiftKey&&e.deltaX===0?e.deltaY:e.deltaX)>0?this.next():this.previous()},this.handleClick=e=>{var r;if(this.draggedDistance>8)return;const a=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-a.left)/a.width*2-1,this.pointer.y=-((e.clientY-a.top)/a.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const t=(r=this.raycaster.intersectObjects(this.cards)[0])==null?void 0:r.object;if(t){if(t.userData.index===this.activeIndex){if(t.userData.item.link==="#")return;window.location.href=`/Per_OutTools/${t.userData.item.link}`;return}this.activeIndex=t.userData.index,this.targetRotation=-this.activeIndex*(Math.PI*2/this.items.length)}},this.render=()=>{if(this.destroyed)return;this.currentRotation+=(this.targetRotation-this.currentRotation)*.08,this.group.rotation.y=this.currentRotation;const e=performance.now()*.001;this.cards.forEach((a,t)=>{const r=Math.min(Math.abs(t-this.activeIndex),this.items.length-Math.abs(t-this.activeIndex)),l=r===0,o=l?1:r===1?.62:.28,h=l?1.08:r===1?.88:.76;a.material.opacity+=(o-a.material.opacity)*.08,a.scale.x+=(h-a.scale.x)*.08,a.scale.y+=(h-a.scale.y)*.08,a.position.y=Math.sin(e*1.15+t*1.7)*(l?.16:.09)}),this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.render)},this.renderer=new x({antialias:window.devicePixelRatio<=1.5,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setClearColor(0,0),this.renderer.domElement.className="home-carousel-canvas",this.renderer.domElement.setAttribute("aria-hidden","true"),this.container.appendChild(this.renderer.domElement),this.camera.position.set(0,0,12),this.scene.add(this.group),this.rebuildCards(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.themeObserver=new MutationObserver(this.handleThemeChange),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.bindEvents(),this.resize(),this.animationFrameId=requestAnimationFrame(this.render)}setItems(i){this.items=i,this.activeIndex=0,this.currentRotation=0,this.targetRotation=0,this.rebuildCards()}previous(){this.items.length<2||(this.activeIndex=(this.activeIndex-1+this.items.length)%this.items.length,this.targetRotation=-this.activeIndex*(Math.PI*2/this.items.length))}next(){this.items.length<2||(this.activeIndex=(this.activeIndex+1)%this.items.length,this.targetRotation=-this.activeIndex*(Math.PI*2/this.items.length))}destroy(){this.destroyed=!0,this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.resizeObserver.disconnect(),this.themeObserver.disconnect(),this.unbindEvents(),this.disposeCards(),this.renderer.dispose(),this.renderer.domElement.remove()}rebuildCards(){if(this.disposeCards(),this.items.length===0)return;const i=this.items.length<=2?5.4:7.2;this.group.position.z=-i;const s=new R(5.8,7.25);this.cards=this.items.map((e,a)=>{const t=new O({map:p(e,this.isDark),transparent:!0,opacity:1}),r=new F(s.clone(),t),l=a/this.items.length*Math.PI*2;return r.position.set(Math.sin(l)*i,0,Math.cos(l)*i),r.rotation.y=l,r.userData={index:a,item:e},this.group.add(r),r}),s.dispose()}disposeCards(){this.cards.forEach(i=>{var s;(s=i.material.map)==null||s.dispose(),i.material.dispose(),i.geometry.dispose(),this.group.remove(i)}),this.cards=[]}resize(){const i=Math.max(1,this.container.clientWidth),s=Math.max(1,this.container.clientHeight);this.camera.position.z=i<640?10.5:12,this.camera.aspect=i/s,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,s,!1)}bindEvents(){const i=this.renderer.domElement;i.addEventListener("pointerdown",this.handlePointerDown),i.addEventListener("pointermove",this.handlePointerMove),i.addEventListener("pointerup",this.handlePointerUp),i.addEventListener("pointercancel",this.handlePointerUp),i.addEventListener("wheel",this.handleWheel,{passive:!1}),i.addEventListener("click",this.handleClick)}unbindEvents(){const i=this.renderer.domElement;i.removeEventListener("pointerdown",this.handlePointerDown),i.removeEventListener("pointermove",this.handlePointerMove),i.removeEventListener("pointerup",this.handlePointerUp),i.removeEventListener("pointercancel",this.handlePointerUp),i.removeEventListener("wheel",this.handleWheel),i.removeEventListener("click",this.handleClick)}}const _=C({name:"HomeApp",components:{LayoutComponent:y},setup(){const n=d(null),i=A();let s=null,e=null;const a=r=>r.link==="#"?"#":`/Per_OutTools/${r.link}`,t=async()=>{await L(),n.value&&(s?s.setItems(i.filteredFeatures.value):s=new z(n.value,i.filteredFeatures.value))};return f(()=>{e=v(i.filteredFeatures,t,{immediate:!0})}),g(()=>{e==null||e(),s==null||s.destroy()}),{...i,carouselHost:n,featureHref:a,previousFeature:()=>s==null?void 0:s.previous(),nextFeature:()=>s==null?void 0:s.next()}},template:`
    <LayoutComponent>
      <section class="home-dashboard">
        <div class="home-hero">
          <div class="home-hero__copy">
            <p class="eyebrow">MULTI-TOOL CONTROL / SYSTEM ONLINE</p>
          </div>

          <div class="mission-metrics" aria-label="系統摘要">
            <div>
              <span>{{ features.length.toString().padStart(2, '0') }}</span>
              <small>MODULES</small>
            </div>
            <div>
              <span>{{ categories.length.toString().padStart(2, '0') }}</span>
              <small>CHANNELS</small>
            </div>
            <div>
              <span>24/7</span>
              <small>READY</small>
            </div>
          </div>
        </div>

        <div class="module-toolbar">
          <div class="module-toolbar__heading">
            <span>01</span>
            <div>
              <p>SELECT CHANNEL</p>
              <h2>選擇任務模組</h2>
            </div>
          </div>

          <div class="category-filter" role="group" aria-label="功能分類">
            <button
              v-for="category in categories"
              :key="category.id"
              type="button"
              :class="{ 'is-active': activeCategory === category.id }"
              :aria-pressed="activeCategory === category.id"
              @click="selectCategory(category.id)"
            >
              <span aria-hidden="true">{{ category.icon }}</span>
              {{ category.name }}
            </button>
          </div>
        </div>

        <div v-if="isLoading" class="state-panel" role="status">
          <span class="loading-ring" aria-hidden="true"></span>
          正在連接任務資料…
        </div>
        <div v-else-if="errorMessage" class="state-panel state-panel--error" role="alert">
          {{ errorMessage }}
        </div>

        <template v-else>
          <div class="carousel-shell">
            <button
              class="carousel-control carousel-control--previous"
              type="button"
              aria-label="上一個功能"
              @click="previousFeature"
            >←</button>
            <div ref="carouselHost" class="home-carousel-stage"></div>
            <button
              class="carousel-control carousel-control--next"
              type="button"
              aria-label="下一個功能"
              @click="nextFeature"
            >→</button>
          </div>

          <div class="module-shortcuts" aria-label="功能快速連結">
            <template v-for="feature in filteredFeatures" :key="feature.id">
              <a
                v-if="feature.link !== '#'"
                class="module-shortcut"
                :href="featureHref(feature)"
              >
                <span class="module-shortcut__icon" aria-hidden="true">{{ feature.icon }}</span>
                <span>
                  <strong>{{ feature.title }}</strong>
                  <small>{{ feature.description }}</small>
                </span>
                <i aria-hidden="true">↗</i>
              </a>
              <button
                v-else
                class="module-shortcut is-disabled"
                type="button"
                disabled
              >
                <span class="module-shortcut__icon" aria-hidden="true">{{ feature.icon }}</span>
                <span>
                  <strong>{{ feature.title }}</strong>
                  <small>{{ feature.description }}</small>
                </span>
                <i aria-hidden="true">SOON</i>
              </button>
            </template>
          </div>
        </template>
      </section>
    </LayoutComponent>
  `});w(_).mount("#homeApp");

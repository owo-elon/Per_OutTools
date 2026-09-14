import{f as x,L as S}from"./layout-Ceycnx3X.js";import{r as o,o as R,n as E,w as z,a as T,b as L,d as M}from"./vue-vendor-CJvUEO8z.js";import{u as O}from"./useDialogFocus-fl-t6tVL.js";import"./three-GkjKvAHA.js";const I=8e3,B=.988,A=5e-4,m=2,w=["#f87171","#fb923c","#fbbf24","#34d399","#22d3ee","#60a5fa","#818cf8","#a78bfa","#f472b6"],_={1:"一等獎",2:"二等獎",3:"三等獎"};class N{constructor(i,a){this.canvas=i,this.options=a,this.animationFrameId=null,this.autoBrakeTimer=null,this.angle=0,this.velocity=0,this.braking=!1,this.isSpinning=!1,this.size=0,this.tick=()=>{if(this.isSpinning){if(this.angle=(this.angle+this.velocity)%(Math.PI*2),this.braking&&(this.velocity*=B),this.draw(),this.braking&&this.velocity<A){this.finish();return}this.animationFrameId=requestAnimationFrame(this.tick)}};const t=i.getContext("2d");if(!t)throw new Error("Canvas 2D context is not available.");this.context=t,this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(i.parentElement??i),this.resize()}spin(){return this.isSpinning||this.options.getPrizes().length<2?!1:(this.isSpinning=!0,this.braking=!1,this.velocity=.25+Math.random()*.12,this.autoBrakeTimer=window.setTimeout(()=>{this.braking=!0},I),this.tick(),!0)}brake(){this.isSpinning&&(this.braking=!0)}redraw(){this.draw()}destroy(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.autoBrakeTimer!==null&&clearTimeout(this.autoBrakeTimer),this.resizeObserver.disconnect(),this.animationFrameId=null,this.autoBrakeTimer=null}resize(){const i=this.canvas.parentElement??this.canvas,a=getComputedStyle(i),t=parseFloat(a.paddingLeft)+parseFloat(a.paddingRight),l=parseFloat(a.paddingTop)+parseFloat(a.paddingBottom),e=i.clientWidth-t,u=i.clientHeight-l;this.size=Math.max(260,Math.min(e||520,u||e||520));const r=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.round(this.size*r),this.canvas.height=Math.round(this.size*r),this.canvas.style.width=`${this.size}px`,this.canvas.style.height=`${this.size}px`,this.context.setTransform(r,0,0,r,0,0),this.draw()}finish(){this.isSpinning=!1,this.braking=!1,this.velocity=0,this.animationFrameId=null,this.autoBrakeTimer!==null&&(clearTimeout(this.autoBrakeTimer),this.autoBrakeTimer=null);const i=this.options.getPrizes();if(i.length===0)return;const a=Math.PI*2/i.length,t=(-this.angle%(Math.PI*2)+Math.PI*2)%(Math.PI*2),l=Math.floor(t/a)%i.length;this.options.onStop(i[l])}draw(){const i=this.options.getPrizes(),a=this.size;if(!a)return;const t=a/2,l=a*.46,e=this.context;if(e.clearRect(0,0,a,a),i.length===0)return;const u=Math.PI*2/i.length;i.forEach((s,d)=>{const h=this.angle+d*u-Math.PI/2,p=h+u;e.beginPath(),e.moveTo(t,t),e.arc(t,t,l,h,p),e.closePath(),e.fillStyle=s.color,e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.7)",e.lineWidth=Math.max(1,a*.005),e.stroke(),e.save(),e.translate(t,t),e.rotate(h+u/2),e.textAlign="right",e.textBaseline="middle",e.fillStyle="#ffffff",e.shadowColor="rgba(0, 0, 0, 0.45)",e.shadowBlur=4,e.font=`700 ${Math.max(13,Math.min(22,a*.043))}px system-ui`;const b=i.length>10?7:12,f=s.text.length>b?`${s.text.slice(0,b)}…`:s.text;e.fillText(f,l*.86,0),e.restore()});const r=e.createRadialGradient(t-l*.2,t-l*.2,0,t,t,l*.16);r.addColorStop(0,"#ffffff"),r.addColorStop(.42,"#dbeafe"),r.addColorStop(1,"#7c3aed"),e.beginPath(),e.arc(t,t,l*.14,0,Math.PI*2),e.fillStyle=r,e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.9)",e.lineWidth=3,e.stroke()}}function C(c){const i=o(!1),a=o(""),t=o(0),l=o(""),e=s=>{l.value=s};return{isPanelOpen:i,newPrizeText:a,newPrizeLevel:t,feedbackMessage:l,showFeedback:e,addPrize:()=>{const s=a.value.trim();return s?(c.value.push({text:s,level:t.value,color:w[c.value.length%w.length]}),a.value="",t.value=0,e("已新增獎項"),!0):(e("請先輸入獎項名稱"),!1)},removePrize:s=>c.value.length<=m?(e(`至少需要 ${m} 個獎項`),!1):(c.value.splice(s,1),e("已移除獎項"),!0)}}function F(c){const i=o([]),a=o(null),t=o(!1),l=o(!1),e=o(!0),u=o(""),r=C(i);let s=null,d=null;const h=()=>{c.value&&(s==null||s.destroy(),s=new N(c.value,{getPrizes:()=>i.value,onStop:n=>{var v,g;a.value=n,t.value=!0,l.value=!1,(v=window.threeBg)==null||v.setSpeed(1,700),(g=window.threeBg)==null||g.celebrate()}}))},p=async()=>{d==null||d.abort(),d=new AbortController;const n=await x("turntable/turntable.json",d.signal);i.value=n.prizes.map(v=>({...v}))},b=async()=>{try{await p(),r.showFeedback("已恢復預設獎項")}catch(n){n instanceof DOMException&&n.name==="AbortError"||(r.showFeedback("無法恢復預設獎項"),console.error(n))}},f=()=>{var n;s!=null&&s.spin()&&(t.value=!1,a.value=null,l.value=!0,(n=window.threeBg)==null||n.setSpeed(2.4,400))},k=()=>{var n;s==null||s.brake(),(n=window.threeBg)==null||n.setSpeed(1.25,600)},P=()=>{r.addPrize()&&(s==null||s.redraw())},y=n=>{r.removePrize(n)&&(s==null||s.redraw())};return R(async()=>{try{await p(),e.value=!1,await E(),h()}catch(n){n instanceof DOMException&&n.name==="AbortError"||(u.value="轉盤資料載入失敗，請稍後再試。",console.error(n)),e.value=!1}}),z(i,()=>s==null?void 0:s.redraw(),{deep:!0}),T(()=>{var n;d==null||d.abort(),s==null||s.destroy(),(n=window.threeBg)==null||n.setSpeed(1,0)}),{prizes:i,result:a,isResultOpen:t,isSpinning:l,isLoading:e,errorMessage:u,...r,spin:f,brake:k,addPrize:P,removePrize:y,resetPrizes:b}}const D=M({name:"TurntableApp",components:{LayoutComponent:S},setup(){const c=o(null),i=o(null),a=F(c);let t=null;const l=()=>{a.isResultOpen.value=!1};O(a.isResultOpen,i,l);const e=z(a.feedbackMessage,u=>{u&&(t!==null&&clearTimeout(t),t=window.setTimeout(()=>{a.feedbackMessage.value="",t=null},2200))});return T(()=>{e(),t!==null&&clearTimeout(t)}),{...a,canvasRef:c,resultDialogRef:i,prizeLevelLabels:_,closeResult:l}},template:`
    <LayoutComponent announcement-scope="turntable">
      <section class="turntable-page">
        <header class="turntable-header">
          <div>
            <p class="eyebrow">PROBABILITY ENGINE / ONLINE</p>
            <h1>命運選擇器</h1>
            <p>編輯候選項目、啟動轉盤，讓隨機結果替猶豫按下確認鍵。</p>
          </div>
          <button
            class="secondary-button settings-toggle"
            type="button"
            :aria-expanded="isPanelOpen"
            aria-controls="turntable-settings"
            @click="isPanelOpen = !isPanelOpen"
          >
            <span aria-hidden="true">⚙</span>
            {{ isPanelOpen ? '收起設定' : '調整獎項' }}
          </button>
        </header>

        <div v-if="isLoading" class="state-panel" role="status">
          <span class="loading-ring" aria-hidden="true"></span>
          正在校準轉盤…
        </div>
        <div v-else-if="errorMessage" class="state-panel state-panel--error" role="alert">
          {{ errorMessage }}
        </div>

        <div v-else class="turntable-workspace" :class="{ 'is-panel-open': isPanelOpen }">
          <div class="wheel-zone">
            <div class="wheel-readout wheel-readout--top">
              <span>ENTRIES</span>
              <strong>{{ prizes.length.toString().padStart(2, '0') }}</strong>
            </div>
            <div class="wheel-readout wheel-readout--bottom">
              <span>STATUS</span>
              <strong>{{ isSpinning ? 'RUNNING' : 'READY' }}</strong>
            </div>

            <div class="wheel-frame">
              <div class="wheel-pointer" aria-hidden="true"></div>
              <canvas ref="canvasRef" aria-label="獎項轉盤"></canvas>
              <button
                class="wheel-trigger"
                type="button"
                :disabled="isSpinning"
                :aria-label="isSpinning ? '轉盤運轉中' : '啟動轉盤'"
                @click="spin"
              >
                <span>{{ isSpinning ? 'RUN' : 'SPIN' }}</span>
              </button>
            </div>

            <button
              v-if="isSpinning"
              class="brake-button"
              type="button"
              @click="brake"
            >
              啟動減速程序
            </button>
            <p class="wheel-instruction">
              轉盤會自動減速，也可以手動提前啟動煞車。
            </p>
          </div>

          <aside
            v-show="isPanelOpen"
            id="turntable-settings"
            class="settings-hud"
            aria-labelledby="settings-title"
          >
            <div class="settings-hud__header">
              <div>
                <p class="eyebrow">CONTROL HUD</p>
                <h2 id="settings-title">獎項設定</h2>
              </div>
              <button
                class="icon-button"
                type="button"
                aria-label="關閉獎項設定"
                @click="isPanelOpen = false"
              >×</button>
            </div>

            <form class="prize-form" @submit.prevent="addPrize">
              <label>
                獎項名稱
                <input
                  v-model="newPrizeText"
                  type="text"
                  maxlength="40"
                  placeholder="輸入新的選項"
                />
              </label>
              <label>
                獎項層級
                <select v-model.number="newPrizeLevel">
                  <option :value="0">一般項目</option>
                  <option :value="1">一等獎</option>
                  <option :value="2">二等獎</option>
                  <option :value="3">三等獎</option>
                </select>
              </label>
              <button class="primary-button" type="submit">＋ 新增獎項</button>
            </form>

            <div class="prize-list" aria-label="目前獎項">
              <div
                v-for="(prize, index) in prizes"
                :key="index + '-' + prize.text"
                class="prize-item"
              >
                <i :style="{ backgroundColor: prize.color }"></i>
                <span>
                  <strong>{{ prize.text }}</strong>
                  <small>{{ prize.level === 0 ? '一般項目' : prizeLevelLabels[prize.level] }}</small>
                </span>
                <button
                  type="button"
                  :aria-label="'刪除 ' + prize.text"
                  @click="removePrize(index)"
                >×</button>
              </div>
            </div>

            <button class="text-button settings-reset" type="button" @click="resetPrizes">
              恢復預設獎項
            </button>
          </aside>
        </div>

        <Transition name="toast">
          <div v-if="feedbackMessage" class="app-toast" role="status">
            {{ feedbackMessage }}
          </div>
        </Transition>

        <Transition name="dialog">
          <div v-if="isResultOpen" class="dialog-backdrop" @click.self="closeResult">
            <section
              ref="resultDialogRef"
              class="app-dialog result-dialog"
              :class="'result-dialog--level-' + (result?.level ?? 0)"
              role="dialog"
              aria-modal="true"
              aria-labelledby="result-title"
              tabindex="-1"
              @keydown.esc.prevent="closeResult"
            >
              <p class="eyebrow">SELECTION COMPLETE</p>
              <span class="result-dialog__icon" aria-hidden="true">✦</span>
              <h2 id="result-title">{{ result?.text }}</h2>
              <p v-if="result?.level">
                {{ prizeLevelLabels[result.level] }}
              </p>
              <button class="primary-button" type="button" @click="closeResult">
                確認結果
              </button>
            </section>
          </div>
        </Transition>
      </section>
    </LayoutComponent>
  `});L(D).mount("#app");

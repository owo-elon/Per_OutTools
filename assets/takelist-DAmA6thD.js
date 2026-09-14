import{w as P,r as R,f as V,a as X,b as Z,L as ee}from"./layout-Ceycnx3X.js";import{o as te,a as D,r as c,c as f,b as ae,d as se}from"./vue-vendor-CJvUEO8z.js";import{u as x}from"./useDialogFocus-fl-t6tVL.js";import"./three-GkjKvAHA.js";const T="All",w="🚨 絕對不能忘記",M=[{id:"Tokyo",name:"東京",lat:35.6895,lon:139.6917},{id:"Seoul",name:"首爾",lat:37.5665,lon:126.978},{id:"Bangkok",name:"曼谷",lat:13.7563,lon:100.5018},{id:"Paris",name:"巴黎",lat:48.8566,lon:2.3522},{id:"London",name:"倫敦",lat:51.5074,lon:-.1278},{id:"New York",name:"紐約",lat:40.7128,lon:-74.006},{id:"Taipei",name:"台北",lat:25.033,lon:121.5654}];function A(a,s){const t=`${a}_${s}`;return{checked:`travel_packing_${t}`,custom:`travel_packing_custom_${t}`,deleted:`travel_packing_deleted_${t}`}}function oe(a,s){const t=A(a,s);return{checkedIds:new Set(R(t.checked,[])),customItems:R(t.custom,[]),deletedIds:new Set(R(t.deleted,[]))}}function O(a,s,t){P(A(a,s).checked,t.filter(l=>l.checked).map(l=>l.id))}function G(a,s,t){P(A(a,s).custom,t.filter(l=>l.isCustom))}function ne(a,s,t){P(A(a,s).deleted,[...t])}function le(a){return"id"in a}function ie(){const a=c(null),s=c(""),t=c(""),l=c(T),u=c(""),y=c(!1),p=c(!1),o=c([]),v=c(new Set),m=c(!0),h=c("");let b=null;const S=f(()=>{var e;return Object.entries(((e=a.value)==null?void 0:e.countries)??{})}),I=f(()=>{var e;return s.value?(e=a.value)==null?void 0:e.countries[s.value]:null}),L=f(()=>!!(s.value&&t.value)),k=f(()=>{var n;const e=new Set(o.value.map(d=>d.category)),i=[{name:T,icon:"◉"}];e.has(w)&&i.push({name:w,icon:"⚠"});for(const d of((n=a.value)==null?void 0:n.defaultItems.categories)??[])e.has(d.name)&&i.push({name:d.name,icon:d.icon});for(const d of e)i.some(r=>r.name===d)||i.push({name:d,icon:"✦"});return i}),E=f(()=>{const e=u.value.trim().toLocaleLowerCase("zh-TW"),i=new Map;for(const n of o.value){if(l.value!==T&&n.category!==l.value||e&&!n.name.toLocaleLowerCase("zh-TW").includes(e))continue;const d=i.get(n.category)??[];d.push(n),i.set(n.category,d)}return k.value.filter(n=>n.name!==T).map(n=>({name:n.name,icon:n.icon,items:i.get(n.name)??[]})).filter(n=>n.items.length>0)}),C=f(()=>o.value.length),g=f(()=>o.value.filter(e=>e.checked).length),N=f(()=>C.value?Math.round(g.value/C.value*100):0),K=f(()=>C.value>0&&g.value===C.value),W=f(()=>!m.value&&E.value.length===0),Y=e=>(!e.gender||e.gender===t.value)&&(!e.country||e.country.toLocaleLowerCase("en-US")===s.value.toLocaleLowerCase("en-US")),U=()=>{if(!a.value||!s.value||!t.value){o.value=[];return}const e=oe(s.value,t.value);v.value=e.deletedIds;const i=[],n=(r,_,H=!1)=>{!Y(r)||e.deletedIds.has(r.id)||i.push({...r,category:_,isMust:H,checked:e.checkedIds.has(r.id)})};a.value.defaultItems.must.forEach(r=>n(r,w,!0)),a.value.defaultItems.categories.forEach(r=>{r.items.forEach(_=>n(_,r.name))}),(a.value.defaultItems[s.value]??[]).filter(le).forEach(r=>n(r,r.category||"其他"));for(const r of e.customItems)i.push({...r,checked:e.checkedIds.has(r.id),category:r.category||"其他",isMust:r.category===w,isCustom:!0});o.value=i,k.value.some(r=>r.name===l.value)||(l.value=T)},$=e=>{s.value&&(t.value=e,l.value=T,u.value="",y.value=!1,p.value=!1,U())},Q=()=>{t.value="",u.value="",p.value=!1,o.value=[]},j=e=>{s.value=e,t.value="",o.value=[]},B=e=>{l.value=e,e===w&&(y.value=!0)},F=e=>{e.checked=!e.checked,O(s.value,t.value,o.value)},J=(e,i)=>{const n=e.trim();if(!n||!s.value||!t.value)return!1;const d={id:`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:n,checked:!1,category:i,isMust:i===w,isCustom:!0};return o.value.push(d),G(s.value,t.value,o.value),!0},q=e=>{o.value=o.value.filter(i=>i.id!==e.id),e.isCustom?G(s.value,t.value,o.value):(v.value.add(e.id),ne(s.value,t.value,v.value)),O(s.value,t.value,o.value)},z=()=>{o.value.forEach(e=>{e.checked=!1}),O(s.value,t.value,o.value)};return te(async()=>{var e;b=new AbortController;try{a.value=await V("takelist/takelist.json",b.signal);const i=(e=Object.entries(a.value.countries).find(([,n])=>n.implemented))==null?void 0:e[0];s.value=i??""}catch(i){i instanceof DOMException&&i.name==="AbortError"||(h.value="行李清單載入失敗，請稍後再試。",console.error(i))}finally{m.value=!1}}),D(()=>b==null?void 0:b.abort()),{TAKELIST_ALL_CATEGORY:T,TAKELIST_MUST_CATEGORY:w,countries:S,selectedCountry:s,selectedCountryInfo:I,selectedGender:t,selectedCategory:l,searchQuery:u,mustExpanded:y,deleteMode:p,items:o,availableCategories:k,visibleCategories:E,totalCount:C,checkedCount:g,progressPercentage:N,isComplete:K,hasNoResults:W,hasStarted:L,isLoading:m,errorMessage:h,selectCountry:j,startPacking:$,leavePackingList:Q,selectCategory:B,toggleItem:F,addCustomItem:J,deleteItem:q,resetProgress:z}}async function ce(a,s){const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${a.lat}&longitude=${a.lon}&current_weather=true`,{signal:s});if(!t.ok)throw new Error(`Failed to fetch weather: ${t.status}`);return(await t.json()).current_weather??null}function re(){const a=c(X("weatherCity")??M[0].id),s=c(null),t=c(!1),l=c("");let u=null;const y=async()=>{const p=M.find(v=>v.id===a.value);if(!p){l.value="找不到選擇的城市";return}u==null||u.abort();const o=new AbortController;u=o,t.value=!0,l.value="",Z("weatherCity",p.id);try{s.value=await ce(p,o.signal),s.value||(l.value="暫時沒有天氣資料")}catch(v){v instanceof DOMException&&v.name==="AbortError"||(l.value="天氣資料載入失敗",console.error(v))}finally{u===o&&(t.value=!1)}};return D(()=>u==null?void 0:u.abort()),{weatherCities:M,selectedCity:a,weather:s,isLoadingWeather:t,weatherError:l,loadWeather:y}}const ue=se({name:"TakelistApp",components:{LayoutComponent:ee},setup(){const a=ie(),s=re(),t=c(!1),l=c(!1),u=c(null),y=c(null),p=c(""),o=c(a.TAKELIST_MUST_CATEGORY),v=c("");let m=null;const h=g=>{v.value=g,m!==null&&clearTimeout(m),m=window.setTimeout(()=>{v.value="",m=null},2200)},b=async g=>{a.startPacking(g),await s.loadWeather()},S=()=>{p.value="",o.value=a.selectedCategory.value===a.TAKELIST_ALL_CATEGORY?a.TAKELIST_MUST_CATEGORY:a.selectedCategory.value,t.value=!0},I=()=>{t.value=!1},L=()=>{if(!a.addCustomItem(p.value,o.value)){h("請輸入要新增的物品");return}I(),h("已加入自訂物品")},k=()=>{l.value=!1},E=()=>{a.resetProgress(),k(),h("已清除目前的勾選進度")},C=g=>{a.deleteItem(g),h(g.isCustom?"已移除自訂物品":"已隱藏預設物品")};return x(t,u,I),x(l,y,k),D(()=>{m!==null&&clearTimeout(m)}),{...a,...s,isAddOpen:t,isResetOpen:l,addDialogRef:u,resetDialogRef:y,newItemName:p,newItemCategory:o,feedbackMessage:v,startPacking:b,openAddDialog:S,closeAddDialog:I,submitCustomItem:L,closeResetDialog:k,confirmReset:E,deleteItem:C}},template:`
    <LayoutComponent
      announcement-scope="country"
      :country-code="selectedCountry"
    >
      <section class="takelist-page">
        <div v-if="isLoading" class="state-panel" role="status">
          <span class="loading-ring" aria-hidden="true"></span>
          正在同步裝備資料…
        </div>
        <div v-else-if="errorMessage" class="state-panel state-panel--error" role="alert">
          {{ errorMessage }}
        </div>

        <div v-else-if="!hasStarted" class="packing-onboarding">
          <div class="packing-onboarding__copy">
            <p class="eyebrow">PACKING PROTOCOL / STEP 01</p>
            <h1>建立你的出發清單</h1>
            <p>先選擇目的地與旅客類型，系統會保留既有清單規則並載入專屬項目。</p>
          </div>

          <div class="onboarding-panel">
            <fieldset>
              <legend>目的地</legend>
              <div class="country-grid">
                <button
                  v-for="[code, country] in countries"
                  :key="code"
                  type="button"
                  :disabled="!country.implemented"
                  :class="{ 'is-active': selectedCountry === code }"
                  :aria-pressed="selectedCountry === code"
                  @click="selectCountry(code)"
                >
                  <span aria-hidden="true">{{ country.flag }}</span>
                  <strong>{{ country.name }}</strong>
                  <small>{{ country.implemented ? 'READY' : 'PLANNED' }}</small>
                </button>
              </div>
            </fieldset>

            <fieldset>
              <legend>旅客類型</legend>
              <div class="gender-actions">
                <button type="button" @click="startPacking('male')">
                  <span aria-hidden="true">♂</span>
                  男性清單
                </button>
                <button type="button" @click="startPacking('female')">
                  <span aria-hidden="true">♀</span>
                  女性清單
                </button>
              </div>
            </fieldset>
          </div>
        </div>

        <template v-else>
          <header class="packing-header">
            <div>
              <button class="text-button" type="button" @click="leavePackingList">← 重新選擇</button>
              <p class="eyebrow">PACKING PROTOCOL / ACTIVE</p>
              <h1>{{ selectedCountryInfo?.flag }} {{ selectedCountryInfo?.name }}出發清單</h1>
            </div>
            <div class="packing-header__actions">
              <button
                class="secondary-button"
                type="button"
                :aria-pressed="deleteMode"
                @click="deleteMode = !deleteMode"
              >
                {{ deleteMode ? '完成整理' : '整理項目' }}
              </button>
              <button class="secondary-button" type="button" @click="isResetOpen = true">
                清除勾選
              </button>
              <button class="primary-button" type="button" @click="openAddDialog()">
                ＋ 新增物品
              </button>
            </div>
          </header>

          <div class="packing-dashboard">
            <section class="progress-panel" aria-labelledby="packing-progress-title">
              <div class="progress-panel__readout">
                <div>
                  <p id="packing-progress-title">MISSION PROGRESS</p>
                  <strong>{{ checkedCount }} / {{ totalCount }}</strong>
                </div>
                <span>{{ progressPercentage }}%</span>
              </div>
              <div
                class="progress-track"
                role="progressbar"
                aria-label="行李打包進度"
                :aria-valuenow="progressPercentage"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <i :style="{ width: progressPercentage + '%' }"></i>
              </div>
              <p v-if="isComplete" class="completion-signal" role="status">
                ✓ 所有裝備已確認，可以出發。
              </p>
            </section>

            <section class="weather-panel" aria-labelledby="weather-title">
              <div>
                <p id="weather-title">LIVE WEATHER</p>
                <select
                  v-model="selectedCity"
                  aria-label="選擇天氣城市"
                  @change="loadWeather"
                >
                  <option v-for="city in weatherCities" :key="city.id" :value="city.id">
                    {{ city.name }}
                  </option>
                </select>
              </div>
              <strong v-if="weather">{{ Math.round(weather.temperature) }}°C</strong>
              <span v-else-if="isLoadingWeather">同步中…</span>
              <span v-else>{{ weatherError || '尚無資料' }}</span>
              <small v-if="weather">風速 {{ weather.windspeed }} km/h</small>
            </section>
          </div>

          <div class="packing-controls">
            <label class="search-control">
              <span aria-hidden="true">⌕</span>
              <span class="sr-only">搜尋物品</span>
              <input v-model="searchQuery" type="search" placeholder="搜尋裝備…" />
              <button
                v-if="searchQuery"
                type="button"
                aria-label="清除搜尋"
                @click="searchQuery = ''"
              >×</button>
            </label>

            <div class="category-tabs" role="group" aria-label="清單分類">
              <button
                v-for="category in availableCategories"
                :key="category.name"
                type="button"
                :aria-pressed="selectedCategory === category.name"
                :class="{ 'is-active': selectedCategory === category.name }"
                @click="selectCategory(category.name)"
              >
                <span aria-hidden="true">{{ category.icon }}</span>
                {{ category.name === TAKELIST_ALL_CATEGORY ? '全部' : category.name }}
              </button>
            </div>
          </div>

          <div class="packing-list" :class="{ 'is-delete-mode': deleteMode }">
            <section
              v-for="category in visibleCategories"
              :key="category.name"
              class="packing-category"
            >
              <button
                v-if="category.name === TAKELIST_MUST_CATEGORY"
                class="category-heading category-heading--button"
                type="button"
                :aria-expanded="mustExpanded || Boolean(searchQuery)"
                @click="mustExpanded = !mustExpanded"
              >
                <span><i>{{ category.icon }}</i>{{ category.name }}</span>
                <b>{{ category.items.length }}</b>
                <em aria-hidden="true">{{ mustExpanded || searchQuery ? '−' : '+' }}</em>
              </button>
              <div v-else class="category-heading">
                <span><i>{{ category.icon }}</i>{{ category.name }}</span>
                <b>{{ category.items.length }}</b>
              </div>

              <Transition name="category-reveal">
                <div
                  v-if="category.name !== TAKELIST_MUST_CATEGORY || mustExpanded || searchQuery"
                  class="packing-items"
                >
                  <div
                    v-for="item in category.items"
                    :key="item.id"
                    class="packing-item"
                    :class="{ 'is-checked': item.checked }"
                  >
                    <button
                      class="packing-item__toggle"
                      type="button"
                      :aria-pressed="item.checked"
                      @click="toggleItem(item)"
                    >
                      <span class="packing-checkbox" aria-hidden="true">
                        {{ item.checked ? '✓' : '' }}
                      </span>
                      <span>{{ item.name }}</span>
                      <small v-if="item.isCustom">CUSTOM</small>
                    </button>
                    <button
                      v-if="deleteMode"
                      class="packing-item__delete"
                      type="button"
                      :aria-label="'移除 ' + item.name"
                      @click="deleteItem(item)"
                    >×</button>
                  </div>
                </div>
              </Transition>
            </section>

            <div v-if="hasNoResults" class="empty-state" role="status">
              <span aria-hidden="true">⌕</span>
              <strong>找不到符合的裝備</strong>
              <p>試著清除搜尋或切換分類。</p>
            </div>
          </div>
        </template>

        <Transition name="toast">
          <div v-if="feedbackMessage" class="app-toast" role="status">
            {{ feedbackMessage }}
          </div>
        </Transition>

        <Transition name="dialog">
          <div v-if="isAddOpen" class="dialog-backdrop" @click.self="closeAddDialog">
            <section
              ref="addDialogRef"
              class="app-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="add-item-title"
              tabindex="-1"
              @keydown.esc.prevent="closeAddDialog"
            >
              <button class="dialog-close" type="button" aria-label="關閉" @click="closeAddDialog">×</button>
              <p class="eyebrow">NEW EQUIPMENT</p>
              <h2 id="add-item-title">新增自訂物品</h2>
              <form @submit.prevent="submitCustomItem">
                <label>
                  物品名稱
                  <input v-model="newItemName" type="text" maxlength="60" placeholder="例如：備用眼鏡" />
                </label>
                <label>
                  所屬分類
                  <select v-model="newItemCategory">
                    <option
                      v-for="category in availableCategories.filter(item => item.name !== TAKELIST_ALL_CATEGORY)"
                      :key="category.name"
                      :value="category.name"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </label>
                <div class="dialog-actions">
                  <button class="secondary-button" type="button" @click="closeAddDialog">取消</button>
                  <button class="primary-button" type="submit">加入清單</button>
                </div>
              </form>
            </section>
          </div>
        </Transition>

        <Transition name="dialog">
          <div v-if="isResetOpen" class="dialog-backdrop" @click.self="closeResetDialog">
            <section
              ref="resetDialogRef"
              class="app-dialog app-dialog--compact"
              role="dialog"
              aria-modal="true"
              aria-labelledby="reset-title"
              tabindex="-1"
              @keydown.esc.prevent="closeResetDialog"
            >
              <p class="eyebrow">RESET PROGRESS</p>
              <h2 id="reset-title">清除目前勾選進度？</h2>
              <p>自訂物品與已隱藏項目不會被還原或刪除。</p>
              <div class="dialog-actions">
                <button class="secondary-button" type="button" @click="closeResetDialog">取消</button>
                <button class="danger-button" type="button" @click="confirmReset">清除勾選</button>
              </div>
            </section>
          </div>
        </Transition>
      </section>
    </LayoutComponent>
  `});ae(ue).mount("#app");

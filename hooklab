<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>HookLab – Say Something</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=DM+Sans:wght@400;500;600;700&family=DM+Mono&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;background:#F4F5F9;color:#1A1A2E;min-height:100vh}
button,input,textarea,select{font-family:'DM Sans',sans-serif}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#F4F5F9}::-webkit-scrollbar-thumb{background:#DDD;border-radius:3px}
input:focus,textarea:focus,select:focus{outline:none;border-color:#00B3E6!important;box-shadow:0 0 0 3px rgba(0,179,230,.15)!important;background:#fff!important}
option{background:#fff}

/* Header */
#app-header{background:#fff;border-bottom:1px solid #EBEBF0;box-shadow:0 2px 12px rgba(0,0,0,.05);position:sticky;top:0;z-index:100}
.header-inner{max-width:900px;margin:0 auto;padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:62px;position:relative}
.header-logo-left{display:flex;align-items:center;gap:8px;z-index:1}
.header-icon{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:16px;transition:background .3s;box-shadow:0 3px 10px rgba(0,179,230,.4)}
.header-brand{font-family:‘Barlow Condensed’,sans-serif;font-weight:900;font-size:15px;letter-spacing:.04em;text-transform:uppercase;color:#1A1A2E;line-height:1}
.header-brand-sub{font-size:9px;color:#AAA;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
.header-center{position:absolute;left:50%;transform:translateX(-50%);z-index:1}
.say-something{font-family:‘Barlow Condensed’,sans-serif;font-weight:900;font-size:28px;letter-spacing:.04em;text-transform:uppercase;color:#00B3E6;text-shadow:3px 3px 0 #E8192C;line-height:1}
.header-right{z-index:1}
.saved-badge{font-size:11px;font-weight:700;padding:5px 13px;border-radius:20px;letter-spacing:.05em;text-transform:uppercase;transition:all .3s;background:rgba(0,179,230,.12);color:#00B3E6}

/* Tabs */
#tab-bar{background:#fff;border-bottom:1px solid #EBEBF0}
.tab-bar-inner{max-width:900px;margin:0 auto;padding:0 20px;display:flex;overflow-x:auto}
.tab-btn{padding:14px 18px;background:transparent;border:none;border-bottom:3px solid transparent;color:#888;font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;white-space:nowrap;display:flex;align-items:center;gap:6px}
.tab-btn.active{font-weight:700}
.tab-badge{font-size:10px;font-weight:700;border-radius:10px;padding:1px 6px;background:#E8192C;color:#fff}

/* Main */
#main{max-width:900px;margin:0 auto;padding:24px 20px 60px}

/* Cards */
.card{background:#fff;border-radius:16px;border:1px solid #EBEBF0;box-shadow:0 2px 12px rgba(0,0,0,.06);transition:box-shadow .2s,transform .2s}
.card:hover{box-shadow:0 6px 24px rgba(0,0,0,.1);transform:translateY(-1px)}
.card-pad{padding:20px}

/* Section title */
.section-title{margin-bottom:24px}
.section-title-row{display:flex;align-items:center;gap:10px;margin-bottom:4px}
.section-icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px}
.section-title h2{font-family:‘Barlow Condensed’,sans-serif;font-weight:900;font-size:26px;letter-spacing:.01em;text-transform:uppercase;color:#1A1A2E}
.section-sub{font-size:13px;color:#888;padding-left:48px}

/* Form */
.field{margin-bottom:16px}
.field label{display:block;font-size:12px;font-weight:700;color:#888;letter-spacing:.05em;text-transform:uppercase;margin-bottom:6px}
.field input,.field textarea,.field select{width:100%;padding:12px 14px;background:#FAFAFA;border:1.5px solid #E8E8EE;border-radius:10px;color:#1A1A2E;font-size:14px;transition:border-color .2s}
.field textarea{line-height:1.6;resize:vertical}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.range-row{padding-top:8px}
.range-row input[type=range]{width:100%;accent-color:#00B3E6}
.range-labels{display:flex;justify-content:space-between;margin-top:4px}
.range-labels span{font-size:11px;color:#AAA}
.range-val{font-size:13px;font-weight:700;color:#00B3E6}

/* Mode toggle */
.mode-toggle{display:inline-flex;background:#F0F0F5;border-radius:10px;padding:3px;margin-bottom:18px}
.mode-btn{padding:8px 18px;background:transparent;border:1px solid transparent;border-radius:8px;color:#888;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s}
.mode-btn.active{background:#fff;border-color:#E0E0E8;color:#00B3E6;box-shadow:0 1px 4px rgba(0,0,0,.1)}

/* Platform buttons */
.platform-row{display:flex;gap:8px;flex-wrap:wrap}
.plat-btn{padding:8px 16px;border:none;border-radius:20px;background:#F0F0F5;color:#555;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:5px}
.plat-btn.active-yt{background:#FF0000;color:#fff}
.plat-btn.active-tt{background:#000;color:#fff}
.plat-btn.active-ig{background:#C13584;color:#fff}

/* Action button */
.action-btn{width:100%;padding:15px;border:none;border-radius:12px;color:#fff;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:10px;font-family:‘Barlow Condensed’,sans-serif;letter-spacing:.02em}
.action-btn:hover{filter:brightness(1.08);transform:translateY(-2px)}
.action-btn:active{transform:translateY(1px) scale(.98)}
.action-btn:disabled{background:#F0F0F5!important;color:#AAA;cursor:not-allowed;transform:none;box-shadow:none}

/* Error */
.err{background:#FFF0F0;border:1px solid #FFCDD2;border-radius:10px;padding:11px 15px;margin-bottom:16px;color:#D32F2F;font-size:13px;font-weight:500}

/* Empty */
.empty{text-align:center;padding:52px 24px;background:#FAFAFA;border-radius:16px;border:2px dashed #E8E8EE}
.empty .empty-icon{font-size:40px;margin-bottom:10px}
.empty h3{color:#444;font-size:15px;font-weight:600;margin-bottom:6px}
.empty p{color:#999;font-size:13px}

/* Hook cards */
.hook-card{background:#fff;border-radius:14px;border:1px solid #EBEBF0;box-shadow:0 2px 8px rgba(0,0,0,.05);overflow:hidden;margin-bottom:10px;transition:box-shadow .2s,transform .2s}
.hook-card:hover{box-shadow:0 6px 20px rgba(0,0,0,.1);transform:translateY(-1px)}
.hook-card-top{padding:16px 18px}
.hook-badges{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:8px}
.badge{display:inline-flex;align-items:center;font-size:10px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:20px;text-transform:uppercase}
.hook-title{font-family:‘Barlow Condensed’,sans-serif;font-weight:700;font-size:17px;color:#1A1A2E;line-height:1.35}
.hook-card-actions{display:flex;gap:6px;flex-shrink:0}
.copy-btn{background:#F0F0F5;border:none;border-radius:8px;padding:7px 14px;color:#555;font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;white-space:nowrap}
.copy-btn:hover{background:#E0E0E8}
.copy-btn.copied{background:#00B3E6;color:#fff}
.del-btn{background:#FFF0F0;border:none;border-radius:8px;padding:7px 10px;color:#D32F2F;cursor:pointer;font-size:12px;font-weight:600;transition:all .2s}
.toggle-script{background:none;border:none;padding:8px 0 0;font-size:12px;font-weight:700;cursor:pointer;letter-spacing:.04em;transition:color .2s}
.script-box{border-top:1px solid #F0F0F5;background:#FAFAFA;padding:14px 18px}
.script-inner{position:relative}
.script-text{font-family:‘DM Mono’,monospace;font-size:13px;color:#333;line-height:1.75;white-space:pre-wrap;padding-right:80px}
.script-copy{position:absolute;top:0;right:0}

/* Trends */
.source-badge{display:flex;align-items:center;gap:8px;margin:14px 0;padding:10px 16px;border-radius:10px}
.trend-card{background:#fff;border-radius:14px;border:1px solid #EBEBF0;box-shadow:0 2px 8px rgba(0,0,0,.05);padding:16px 18px;margin-bottom:10px;transition:box-shadow .2s,transform .2s}
.trend-card:hover{box-shadow:0 6px 20px rgba(0,0,0,.1);transform:translateY(-1px)}
.trend-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}
.trend-box{border-radius:8px;padding:9px 11px}
.trend-box-label{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;margin-bottom:3px}
.trend-box-val{font-size:12px;color:#444;line-height:1.5}

/* Repurpose */
.repurpose-platform{background:#fff;border-radius:14px;border:1px solid #EBEBF0;box-shadow:0 2px 8px rgba(0,0,0,.05);margin-bottom:10px;overflow:hidden}
.rep-header{padding:14px 18px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #F0F0F5}
.rep-label{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700}
.rep-body{padding:14px 18px;font-family:‘DM Mono’,monospace;font-size:13px;color:#333;line-height:1.75;white-space:pre-wrap}

/* Calendar */
.cal-item{background:#fff;border-radius:12px;border:1px solid #EBEBF0;box-shadow:0 2px 6px rgba(0,0,0,.04);display:flex;gap:14px;align-items:flex-start;padding:14px 16px;margin-bottom:8px;transition:box-shadow .2s,transform .2s}
.cal-item:hover{box-shadow:0 6px 18px rgba(0,0,0,.08);transform:translateY(-1px)}
.cal-day{text-align:center;flex-shrink:0;width:44px;border-radius:10px;padding:8px 4px}
.cal-day-num{font-size:20px;font-weight:800;font-family:‘Barlow Condensed’,sans-serif;line-height:1}
.cal-day-label{font-size:9px;font-weight:700;text-transform:uppercase;margin-top:1px}
.cal-content{flex:1;min-width:0}
.cal-hook{font-size:14px;font-weight:700;color:#1A1A2E;line-height:1.35;font-family:‘Barlow Condensed’,sans-serif;margin:5px 0 4px}
.cal-note{font-size:12px;color:#888;line-height:1.5}

/* View toggle */
.view-toggle{display:inline-flex;background:#F0F0F5;border-radius:8px;padding:3px}
.view-btn{padding:5px 14px;background:transparent;border:1px solid transparent;border-radius:6px;color:#888;font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;text-transform:capitalize}
.view-btn.active{background:#fff;border-color:#E0E0E8;box-shadow:0 1px 3px rgba(0,0,0,.08)}

/* Grid calendar */
.cal-grid-week{margin-bottom:16px}
.cal-grid-week-label{font-size:11px;font-weight:700;color:#888;letter-spacing:.07em;text-transform:uppercase;margin-bottom:8px}
.cal-grid-row{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}
.cal-grid-cell{background:#fff;border-radius:10px;padding:10px 6px;border:1px solid #EBEBF0;text-align:center;min-height:88px;display:flex;flex-direction:column;gap:4px;box-shadow:0 1px 4px rgba(0,0,0,.04)}
.cal-grid-num{font-size:17px;font-weight:800;font-family:‘Barlow Condensed’,sans-serif}
.cal-grid-type{font-size:8px;font-weight:700;padding:2px 4px;border-radius:8px;letter-spacing:.03em}
.cal-grid-title{font-size:9px;color:#666;line-height:1.3;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}

/* Spinner dots */
.dots{display:inline-flex;gap:5px;align-items:center}
.dot{width:7px;height:7px;border-radius:50%;animation:dotpulse 1.2s ease-in-out infinite}
@keyframes dotpulse{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}
</style>

</head>
<body>

<div id="app-header">
  <div class="header-inner">
    <div class="header-logo-left">
      <div class="header-icon" id="header-icon" style="background:linear-gradient(135deg,#00B3E6,#0090BB)">⚡</div>
      <div>
        <div class="header-brand">HookLab</div>
        <div class="header-brand-sub">Content Suite</div>
      </div>
    </div>
    <div class="header-center">
      <div class="say-something">SAY SOMETHING!</div>
    </div>
    <div class="header-right">
      <span class="saved-badge" id="saved-count">0 Saved</span>
    </div>
  </div>
</div>

<div id="tab-bar">
  <div class="tab-bar-inner">
    <button class="tab-btn active" data-tab="generate" style="border-color:#00B3E6;color:#00B3E6" onclick="switchTab('generate')">⚡ Generate</button>
    <button class="tab-btn" data-tab="trends" onclick="switchTab('trends')">🔥 Trends</button>
    <button class="tab-btn" data-tab="repurpose" onclick="switchTab('repurpose')">♻️ Repurpose</button>
    <button class="tab-btn" data-tab="calendar" onclick="switchTab('calendar')">📅 Calendar</button>
    <button class="tab-btn" data-tab="saved" onclick="switchTab('saved')">📁 Saved <span class="tab-badge" id="saved-tab-count" style="display:none">0</span></button>
  </div>
</div>

<div id="main">
  <div id="tab-generate"></div>
  <div id="tab-trends" style="display:none"></div>
  <div id="tab-repurpose" style="display:none"></div>
  <div id="tab-calendar" style="display:none"></div>
  <div id="tab-saved" style="display:none"></div>
</div>

<script>
// ── State ───────────────────────────────────────────────────────────────────
const TAB_COLORS = {generate:'#00B3E6',trends:'#FF6B35',repurpose:'#0BB07B',calendar:'#E040A0',saved:'#F5A623'};
const TAB_ICONS  = {generate:'⚡',trends:'🔥',repurpose:'♻️',calendar:'📅',saved:'📁'};
const NICHES = ['Faith & Christianity','Personal Development','Finance & Money','Health & Fitness','Relationships','Business & Entrepreneurship','Education','Entertainment','Other'];
const TYPE_COLORS = {Tutorial:'#00B3E6',Story:'#E040A0',List:'#0BB07B',Question:'#FF9F0A','Myth-Bust':'#E8192C',Testimony:'#0077B5',Challenge:'#FF6B35'};
const PLAT_COLORS = {'YouTube Shorts':'#FF0000',TikTok:'#000',Instagram:'#C13584'};

let savedHooks = JSON.parse(localStorage.getItem('hl-saved')||'[]');
let calendarData = JSON.parse(localStorage.getItem('hl-cal')||'null');
let currentTab = 'generate';

// ── Helpers ─────────────────────────────────────────────────────────────────
async function callClaude(prompt, sys) {
  const r = await fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:4000,system:sys,messages:[{role:'user',content:prompt}]})
  });
  const d = await r.json();
  if(d.error) throw new Error(d.error.message);
  return d.content?.[0]?.text||'';
}

function parseJSON(t){
  try{return JSON.parse(t.trim())}catch(e){}
  try{return JSON.parse(t.replace(/```json\s*/gi,'').replace(/```\s*/g,'').trim())}catch(e){}
  try{const m=t.match(/[\[\{][\s\S]*[\]\}]/);if(m)return JSON.parse(m[0])}catch(e){}
  return null;
}

function saveSaved(){localStorage.setItem('hl-saved',JSON.stringify(savedHooks));updateSavedCount();}
function updateSavedCount(){
  const n=savedHooks.length;
  document.getElementById('saved-count').textContent=n+' Saved';
  const b=document.getElementById('saved-tab-count');
  if(n>0){b.textContent=n;b.style.display='';}else{b.style.display='none';}
}

function dots(color='#00B3E6'){return `<span class="dots"><span class="dot" style="background:${color};animation-delay:0s"></span><span class="dot" style="background:${color};animation-delay:.2s"></span><span class="dot" style="background:${color};animation-delay:.4s"></span></span>`;}

function badge(txt,color){return `<span class="badge" style="background:${color}18;color:${color}">${txt}</span>`;}

function copyText(text,btnId){
  navigator.clipboard.writeText(text).then(()=>{
    const b=document.getElementById(btnId);
    if(!b)return;
    b.textContent='✓ Copied';b.classList.add('copied');
    setTimeout(()=>{b.textContent='Copy';b.classList.remove('copied');},2000);
  });
}

function hookCardHTML(item,index,color,deletable){
  const pc={'YouTube Shorts':'#FF0000',TikTok:'#000000','Instagram Reels':'#C13584'};
  const bgs=(item.platforms||[]).map(p=>badge(p,pc[p]||'#888')).join('');
  return `
  <div class="hook-card" id="card-${item.id}">
    <div class="hook-card-top">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
        <div style="flex:1;min-width:0">
          <div class="hook-badges">${bgs}${badge(item.niche||'',color)}</div>
          <div class="hook-title">${item.hookTitle||''}</div>
        </div>
        <div class="hook-card-actions">
          <button class="copy-btn" id="copy-title-${item.id}" onclick="copyText(${JSON.stringify(item.hookTitle||'')},'copy-title-${item.id}')">Copy</button>
          ${deletable?`<button class="del-btn" onclick="deleteHook('${item.id}')">✕</button>`:''}
        </div>
      </div>
      <button class="toggle-script" style="color:${color}" onclick="toggleScript('${item.id}')">▼ VIEW SCRIPT</button>
    </div>
    <div class="script-box" id="script-${item.id}" style="display:none">
      <div class="script-inner">
        <div class="script-text">${(item.script||'').replace(/</g,'&lt;')}</div>
        <div class="script-copy"><button class="copy-btn" id="copy-script-${item.id}" onclick="copyText(${JSON.stringify(item.script||'')},'copy-script-${item.id}')">Copy</button></div>
      </div>
      ${item.formula?`<div style="margin-top:8px;font-size:11px;color:#888">Formula: <strong style="color:${color}">${item.formula}</strong>${item.estimatedLength?' · Length: <strong style="color:#444">'+item.estimatedLength+'</strong>':''}</div>`:''}
    </div>
  </div>`;
}

function toggleScript(id){
  const box=document.getElementById('script-'+id);
  const btn=box?box.previousElementSibling:null;
  if(!box)return;
  const open=box.style.display==='none';
  box.style.display=open?'':'none';
  if(btn)btn.textContent=open?'▲ HIDE SCRIPT':'▼ VIEW SCRIPT';
}

function deleteHook(id){
  savedHooks=savedHooks.filter(h=>h.id!==id);
  saveSaved();
  const el=document.getElementById('card-'+id);
  if(el)el.remove();
  renderSaved();
}

// ── Tab switching ────────────────────────────────────────────────────────────
function switchTab(tab){
  currentTab=tab;
  document.querySelectorAll('.tab-btn').forEach(b=>{
    const t=b.dataset.tab;
    const c=TAB_COLORS[t];
    b.className='tab-btn'+(t===tab?' active':'');
    b.style.borderColor=t===tab?c:'transparent';
    b.style.color=t===tab?c:'#888';
  });
  document.querySelectorAll('[id^="tab-"]').forEach(d=>{
    d.style.display=d.id==='tab-'+tab?'':'none';
  });
  const icon=document.getElementById('header-icon');
  const color=TAB_COLORS[tab];
  icon.style.background=`linear-gradient(135deg,${color},${color}BB)`;
  icon.style.boxShadow=`0 3px 10px ${color}40`;
  icon.textContent=TAB_ICONS[tab];
  if(tab==='saved')renderSaved();
}

// ── GENERATE TAB ─────────────────────────────────────────────────────────────
function renderGenerate(){
  const el=document.getElementById('tab-generate');
  el.innerHTML=`
  <div class="section-title">
    <div class="section-title-row">
      <div class="section-icon" style="background:#00B3E618">⚡</div>
      <h2>GENERATE HOOKS</h2>
    </div>
    <div class="section-sub">Turn any topic or transcript into viral short-form content</div>
  </div>
  <div class="card"><div class="card-pad">
    <div class="mode-toggle">
      <button class="mode-btn active" id="mode-topic" onclick="setMode('topic')">✏️ By Topic</button>
      <button class="mode-btn" id="mode-transcript" onclick="setMode('transcript')">📄 From Transcript</button>
    </div>
    <div id="gen-topic-field" class="field">
      <label>Your Topic</label>
      <input type="text" id="gen-topic" placeholder="e.g. How to know if you're truly saved..." onkeydown="if(event.key==='Enter')runGenerate()"/>
    </div>
    <div id="gen-transcript-field" class="field" style="display:none">
      <label>Paste Your Transcript</label>
      <textarea id="gen-transcript" rows="5" placeholder="Paste your full sermon, script, or transcript here..."></textarea>

```
</div>
<div class="two-col">
  <div class="field">
    <label>Content Niche</label>
    <select id="gen-niche">${NICHES.map(n=>`<option>${n}</option>`).join('')}</select>
  </div>
  <div class="field">
    <label>Hooks: <span class="range-val" id="gen-count-val">5</span></label>
    <div class="range-row">
      <input type="range" min="3" max="10" value="5" id="gen-count" oninput="document.getElementById('gen-count-val').textContent=this.value"/>
      <div class="range-labels"><span>3</span><span>10</span></div>
    </div>
  </div>
</div>
<div class="field">
  <label>Platforms</label>
  <div class="platform-row">
    <button class="plat-btn active-yt" id="plat-yt" onclick="togglePlat('yt')">✓ YouTube Shorts</button>
    <button class="plat-btn" id="plat-tt" onclick="togglePlat('tt')">TikTok</button>
    <button class="plat-btn" id="plat-ig" onclick="togglePlat('ig')">Instagram Reels</button>
  </div>
</div>
<div id="gen-err" class="err" style="display:none"></div>
<button class="action-btn" id="gen-btn" style="background:#00B3E6;box-shadow:0 4px 16px rgba(0,179,230,.4)" onclick="runGenerate()">⚡ Generate Hooks</button>
```

  </div></div>
  <div id="gen-results" style="margin-top:24px"></div>`;
}

let genMode=‘topic’;
const platState={yt:true,tt:false,ig:false};
function setMode(m){
genMode=m;
document.getElementById(‘mode-topic’).className=‘mode-btn’+(m===‘topic’?’ active’:’’);
document.getElementById(‘mode-transcript’).className=‘mode-btn’+(m===‘transcript’?’ active’:’’);
document.getElementById(‘gen-topic-field’).style.display=m===‘topic’?’’:‘none’;
document.getElementById(‘gen-transcript-field’).style.display=m===‘transcript’?’’:‘none’;
}
function togglePlat(p){
platState[p]=!platState[p];
const map={yt:‘active-yt’,tt:‘active-tt’,ig:‘active-ig’};
const lbl={yt:‘YouTube Shorts’,tt:‘TikTok’,ig:‘Instagram Reels’};
const btn=document.getElementById(‘plat-’+p);
btn.className=‘plat-btn’+(platState[p]?’ ‘+map[p]:’’);
btn.textContent=(platState[p]?‘✓ ‘:’’)+lbl[p];
}
function getPlats(){
const m={yt:‘YouTube Shorts’,tt:‘TikTok’,ig:‘Instagram Reels’};
return Object.keys(platState).filter(k=>platState[k]).map(k=>m[k]);
}

async function runGenerate(){
const topic=document.getElementById(‘gen-topic’)?.value.trim();
const transcript=document.getElementById(‘gen-transcript’)?.value.trim();
const niche=document.getElementById(‘gen-niche’).value;
const count=document.getElementById(‘gen-count’).value;
const plats=getPlats();
const err=document.getElementById(‘gen-err’);
const btn=document.getElementById(‘gen-btn’);
const results=document.getElementById(‘gen-results’);
if(genMode===‘topic’&&!topic){err.textContent=‘Enter a topic first.’;err.style.display=’’;return;}
if(genMode===‘transcript’&&!transcript){err.textContent=‘Paste a transcript first.’;err.style.display=’’;return;}
if(!plats.length){err.textContent=‘Select at least one platform.’;err.style.display=’’;return;}
err.style.display=‘none’;
btn.disabled=true;btn.innerHTML=dots(’#fff’)+’ Generating your hooks…’;
results.innerHTML=’’;
const sys=‘You are HookLab. Return ONLY a valid JSON array. No markdown, no explanation.’;
const prompt=genMode===‘topic’
?`Generate ${count} viral hooks and scripts for: "${topic}"\nNiche: ${niche} | Platforms: ${plats.join(', ')}\nReturn JSON array of ${count} objects: hookTitle (under 12 words), script (150-200 words punchy+CTA), formula, estimatedLength, platforms ${JSON.stringify(plats)}, niche "${niche}"`
:`Extract ${count} viral ideas from:\n---\n${transcript.slice(0,3000)}\n---\nNiche: ${niche} | Platforms: ${plats.join(', ')}\nReturn JSON array of ${count} objects: hookTitle, script (rewritten 150-200 words+CTA), formula, estimatedLength, platforms ${JSON.stringify(plats)}, niche "${niche}", sourceQuote`;
try{
const raw=await callClaude(prompt,sys);
const parsed=parseJSON(raw);
if(!parsed||!Array.isArray(parsed))throw new Error(‘Could not parse response. Try again.’);
const items=parsed.map((x,i)=>({…x,id:`${Date.now()}-${i}`,createdAt:new Date().toISOString()}));
savedHooks=[…items,…savedHooks];saveSaved();
results.innerHTML=`<p style="font-size:12px;font-weight:700;color:#888;margin-bottom:12px">${items.length} hooks generated · auto-saved</p>`+items.map((x,i)=>hookCardHTML(x,i,’#00B3E6’,true)).join(’’);
}catch(e){err.textContent=e.message||‘Something went wrong. Try again.’;err.style.display=’’;}
btn.disabled=false;btn.innerHTML=‘⚡ Generate Hooks’;
}

// ── TRENDS TAB ────────────────────────────────────────────────────────────────
function renderTrends(){
const el=document.getElementById(‘tab-trends’);
el.innerHTML=`

  <div class="section-title">
    <div class="section-title-row"><div class="section-icon" style="background:#FF6B3518">🔥</div><h2>TREND SPOTTER</h2></div>
    <div class="section-sub">Discover what's hot in your niche right now</div>
  </div>
  <div class="card"><div class="card-pad">
    <div style="display:grid;grid-template-columns:1fr auto;gap:12px;align-items:flex-end">
      <div class="field" style="margin:0">
        <label>Your Niche</label>
        <select id="trend-niche">${NICHES.map(n=>`<option>${n}</option>`).join('')}</select>
      </div>
      <button class="action-btn" id="trend-btn" style="background:#FF6B35;box-shadow:0 4px 14px rgba(255,107,53,.4);width:auto;padding:12px 20px;margin-bottom:2px" onclick="runTrends()">🔥 Spot Trends</button>
    </div>
    <div id="trend-err" class="err" style="display:none;margin-top:12px"></div>
  </div></div>
  <div id="trend-source" style="display:none" class="source-badge"></div>
  <div id="trend-results"></div>
  <div id="trend-empty" class="empty" style="margin-top:14px"><div class="empty-icon">🔥</div><h3>No trends yet</h3><p>Select your niche and tap Spot Trends</p></div>`;
}

async function runTrends(){
const niche=document.getElementById(‘trend-niche’).value;
const btn=document.getElementById(‘trend-btn’);
const err=document.getElementById(‘trend-err’);
const results=document.getElementById(‘trend-results’);
const src=document.getElementById(‘trend-source’);
const empty=document.getElementById(‘trend-empty’);
err.style.display=‘none’;empty.style.display=‘none’;results.innerHTML=’’;src.style.display=‘none’;
btn.disabled=true;btn.innerHTML=dots(’#fff’);
let live=null;
try{
const url=encodeURIComponent(‘https://trends.google.com/trends/trendingsearches/daily/rss?geo=US’);
const r=await fetch(‘https://api.allorigins.win/get?url=’+url,{signal:AbortSignal.timeout?AbortSignal.timeout(7000):undefined});
const d=await r.json();
const xml=new DOMParser().parseFromString(d.contents,‘text/xml’);
const items=Array.from(xml.querySelectorAll(‘item title’)).slice(0,15).map(i=>i.textContent).filter(Boolean);
if(items.length>0)live=items;
}catch(e){}
const isLive=live&&live.length>0;
const sys=‘You are HookLab. Return ONLY a valid JSON array, no markdown.’;
const prompt=isLive
?`Trending on Google now: ${live.join(', ')}\nNiche: ${niche}\nGenerate 8 video ideas connecting these to ${niche}.\nReturn JSON array of 8: topic (under 12 words), trendConnection, hookAngle, whyNow (1 sentence), estimatedPotential ("Very High"|"High"|"Medium")`
:`Generate 8 high-potential video ideas for a ${niche} creator.\nReturn JSON array of 8: topic, trendConnection, hookAngle, whyNow (1 sentence), estimatedPotential ("Very High"|"High"|"Medium")`;
try{
const raw=await callClaude(prompt,sys);
const parsed=parseJSON(raw);
if(!parsed||!Array.isArray(parsed))throw new Error(‘Could not parse. Try again.’);
const pc={“Very High”:”#0BB07B”,“High”:”#00B3E6”,“Medium”:”#FF9F0A”};
src.style.display=‘flex’;
src.style.background=isLive?’#E8FBF5’:’#E8F4FF’;
src.style.border=`1px solid ${isLive?'#B2EFD8':'#B3DCF0'}`;
src.innerHTML=`<span style="font-size:16px">${isLive?'📡':'🤖'}</span><p style="margin:0;font-size:12px;font-weight:600;color:${isLive?'#0BB07B':'#00B3E6'}">${isLive?'Live Google Trends data · filtered for your niche':'AI-powered analysis · based on top performing patterns'}</p>`;
results.innerHTML=parsed.map(x=>` <div class="trend-card"> <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px"> <p style="margin:0;font-size:15px;font-weight:700;color:#1A1A2E;font-family:'Barlow Condensed',sans-serif;flex:1;line-height:1.35">${x.topic}</p> <span style="font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;white-space:nowrap;background:${(pc[x.estimatedPotential]||'#888')}18;color:${pc[x.estimatedPotential]||'#888'}">${x.estimatedPotential}</span> </div> <div class="trend-grid"> <div class="trend-box" style="background:#EEF0FF"><div class="trend-box-label" style="color:#00B3E6">🎣 Hook Angle</div><div class="trend-box-val">${x.hookAngle}</div></div> <div class="trend-box" style="background:#FFF7E6"><div class="trend-box-label" style="color:#F5A623">⏰ Why Now</div><div class="trend-box-val">${x.whyNow}</div></div> </div> </div>`).join(’’);
}catch(e){err.textContent=e.message||‘Something went wrong.’;err.style.display=’’;empty.style.display=’’;}
btn.disabled=false;btn.innerHTML=‘🔥 Spot Trends’;
}

// ── REPURPOSE TAB ─────────────────────────────────────────────────────────────
function renderRepurpose(){
const el=document.getElementById(‘tab-repurpose’);
el.innerHTML=`

  <div class="section-title">
    <div class="section-title-row"><div class="section-icon" style="background:#0BB07B18">♻️</div><h2>REPURPOSE ENGINE</h2></div>
    <div class="section-sub">One script → content for every platform instantly</div>
  </div>
  <div class="card"><div class="card-pad">
    <div class="field"><label>Your Script or Hook</label>
      <textarea id="rep-input" rows="5" placeholder="Paste your Short script, sermon excerpt, or any content..."></textarea>
    </div>
    <div id="rep-err" class="err" style="display:none"></div>
    <button class="action-btn" id="rep-btn" style="background:#0BB07B;box-shadow:0 4px 16px rgba(11,176,123,.4)" onclick="runRepurpose()">♻️ Repurpose to All Platforms</button>
  </div></div>
  <div id="rep-results" style="margin-top:14px"></div>
  <div id="rep-empty" class="empty" style="margin-top:14px"><div class="empty-icon">♻️</div><h3>Nothing repurposed yet</h3><p>Paste a script and tap Repurpose</p></div>`;
}

async function runRepurpose(){
const input=document.getElementById(‘rep-input’).value.trim();
const btn=document.getElementById(‘rep-btn’);
const err=document.getElementById(‘rep-err’);
const results=document.getElementById(‘rep-results’);
const empty=document.getElementById(‘rep-empty’);
if(!input){err.textContent=‘Paste a script first.’;err.style.display=’’;return;}
err.style.display=‘none’;empty.style.display=‘none’;results.innerHTML=’’;
btn.disabled=true;btn.innerHTML=dots(’#fff’)+’ Repurposing…’;
const sys=‘You are HookLab. Return ONLY a valid JSON object. No markdown.’;
const prompt=`Repurpose this into 5 formats:\n\nSCRIPT:\n${input.slice(0,2000)}\n\nReturn JSON object:\n- twitter: 5-7 tweet thread (numbered 1/ 2/ etc)\n- linkedin: 150-200 word professional post ending with question\n- instagram: 100-150 word caption + hashtags\n- facebook: 120-160 word warm post with CTA\n- email: subject line + 100-120 word body + CTA button text`;
try{
const raw=await callClaude(prompt,sys);
const parsed=parseJSON(raw);
if(!parsed||typeof parsed!==‘object’)throw new Error(‘Could not parse. Try again.’);
const pf=[
{k:‘twitter’,label:‘𝕏 Twitter / X’,color:’#1A1A2E’,bg:’#F5F5F5’,icon:‘🐦’},
{k:‘linkedin’,label:‘LinkedIn’,color:’#0077B5’,bg:’#E8F4FD’,icon:‘💼’},
{k:‘instagram’,label:‘Instagram’,color:’#C13584’,bg:’#FCF0F8’,icon:‘📸’},
{k:‘facebook’,label:‘Facebook’,color:’#1877F2’,bg:’#EAF2FF’,icon:‘👥’},
{k:‘email’,label:‘Email Newsletter’,color:’#0BB07B’,bg:’#E8FBF5’,icon:‘✉️’},
];
results.innerHTML=pf.filter(p=>parsed[p.k]).map((p,i)=>` <div class="repurpose-platform"> <div class="rep-header" style="background:${p.bg}"> <div class="rep-label" style="color:${p.color}">${p.icon} ${p.label}</div> <button class="copy-btn" id="rep-copy-${p.k}" onclick="copyText(${JSON.stringify(parsed[p.k])},'rep-copy-${p.k}')">Copy</button> </div> <div class="rep-body">${parsed[p.k].replace(/</g,'&lt;')}</div> </div>`).join(’’);
}catch(e){err.textContent=e.message||‘Something went wrong.’;err.style.display=’’;empty.style.display=’’;}
btn.disabled=false;btn.innerHTML=‘♻️ Repurpose to All Platforms’;
}

// ── CALENDAR TAB ──────────────────────────────────────────────────────────────
let calView=‘list’;
function renderCalendar(){
const el=document.getElementById(‘tab-calendar’);
el.innerHTML=`

  <div class="section-title">
    <div class="section-title-row"><div class="section-icon" style="background:#E040A018">📅</div><h2>CONTENT CALENDAR</h2></div>
    <div class="section-sub">Your complete 30-day posting plan</div>
  </div>
  <div class="card"><div class="card-pad">
    <div class="two-col">
      <div class="field"><label>Niche</label><select id="cal-niche">${NICHES.map(n=>`<option>${n}</option>`).join('')}</select></div>
      <div class="field"><label>Posts/Day: <span class="range-val" id="cal-ppd-val">1</span></label>
        <div class="range-row">
          <input type="range" min="1" max="3" value="1" id="cal-ppd" oninput="document.getElementById('cal-ppd-val').textContent=this.value" style="accent-color:#E040A0"/>
          <div class="range-labels"><span>1</span><span>3x daily</span></div>
        </div>
      </div>
    </div>
    <div class="field"><label>Platforms</label>
      <div class="platform-row">
        <button class="plat-btn active-yt" id="cal-plat-yt" onclick="toggleCalPlat('yt')">✓ YouTube Shorts</button>
        <button class="plat-btn" id="cal-plat-tt" onclick="toggleCalPlat('tt')">TikTok</button>
        <button class="plat-btn" id="cal-plat-ig" onclick="toggleCalPlat('ig')">Instagram Reels</button>
      </div>
    </div>
    <div id="cal-err" class="err" style="display:none"></div>
    <button class="action-btn" id="cal-btn" style="background:#E040A0;box-shadow:0 4px 16px rgba(224,64,160,.4)" onclick="runCalendar()">📅 Build 30-Day Calendar</button>
  </div></div>
  <div id="cal-output" style="margin-top:20px"></div>
  <div id="cal-empty" class="empty" style="margin-top:14px"><div class="empty-icon">📅</div><h3>No calendar yet</h3><p>Configure your settings and build your plan</p></div>`;
  if(calendarData)renderCalOutput();
}

const calPlatState={yt:true,tt:false,ig:false};
function toggleCalPlat(p){
calPlatState[p]=!calPlatState[p];
const map={yt:‘active-yt’,tt:‘active-tt’,ig:‘active-ig’};
const lbl={yt:‘YouTube Shorts’,tt:‘TikTok’,ig:‘Instagram Reels’};
const btn=document.getElementById(‘cal-plat-’+p);
if(!btn)return;
btn.className=‘plat-btn’+(calPlatState[p]?’ ‘+map[p]:’’);
btn.textContent=(calPlatState[p]?‘✓ ‘:’’)+lbl[p];
}

async function runCalendar(){
const niche=document.getElementById(‘cal-niche’).value;
const ppd=document.getElementById(‘cal-ppd’).value;
const plats=Object.keys(calPlatState).filter(k=>calPlatState[k]).map(k=>({yt:‘YouTube Shorts’,tt:‘TikTok’,ig:‘Instagram Reels’}[k]));
const btn=document.getElementById(‘cal-btn’);
const err=document.getElementById(‘cal-err’);
const empty=document.getElementById(‘cal-empty’);
err.style.display=‘none’;empty.style.display=‘none’;
btn.disabled=true;btn.innerHTML=dots(’#fff’)+’ Building calendar…’;
const hooks=savedHooks.slice(0,8).map(s=>s.hookTitle).join(’\n’);
const sys=‘You are HookLab. Return ONLY a valid JSON array, no markdown.’;
const prompt=`Create a 30-day content calendar for a ${niche} creator posting ${ppd}x/day on: ${plats.join(', ')}\n${hooks?'\nExisting hooks:\n'+hooks+'\n':''}\nVary type daily. Never repeat.\nReturn JSON array of 30 objects: day (1-30), platform, hookTitle, contentType ("Tutorial"|"Story"|"List"|"Question"|"Myth-Bust"|"Testimony"|"Challenge"), postingTime, notes (1 filming tip)`;
try{
const raw=await callClaude(prompt,sys,4000);
const parsed=parseJSON(raw);
if(!parsed||!Array.isArray(parsed))throw new Error(‘Could not generate. Try again.’);
calendarData=parsed;localStorage.setItem(‘hl-cal’,JSON.stringify(calendarData));
renderCalOutput();
}catch(e){err.textContent=e.message||‘Something went wrong.’;err.style.display=’’;empty.style.display=’’;}
btn.disabled=false;btn.innerHTML=‘📅 Build 30-Day Calendar’;
}

function renderCalOutput(){
const el=document.getElementById(‘cal-output’);
const empty=document.getElementById(‘cal-empty’);
if(!calendarData||!el){return;}
empty.style.display=‘none’;
const color=’#E040A0’;
const weeks=[];
for(let i=0;i<calendarData.length;i+=7)weeks.push(calendarData.slice(i,i+7));
el.innerHTML=`

  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
    <p style="font-size:12px;font-weight:700;color:#888">${calendarData.length} days planned</p>
    <div class="view-toggle">
      <button class="view-btn ${calView==='list'?'active':''}" onclick="setCalView('list')" style="${calView==='list'?'color:#E040A0':''}">List</button>
      <button class="view-btn ${calView==='grid'?'active':''}" onclick="setCalView('grid')" style="${calView==='grid'?'color:#E040A0':''}">Grid</button>
    </div>
  </div>
  <div id="cal-list-view" style="display:${calView==='list'?'block':'none'}">
    ${calendarData.map(d=>`
    <div class="cal-item">
      <div class="cal-day" style="background:${color}12">
        <div class="cal-day-num" style="color:${color}">${d.day}</div>
        <div class="cal-day-label" style="color:${color}">Day</div>
      </div>
      <div class="cal-content">
        <div class="hook-badges">${badge(d.contentType||'',TYPE_COLORS[d.contentType]||'#888')}${badge(d.platform||'',PLAT_COLORS[d.platform]||'#888')}${badge(d.postingTime||'','#888')}</div>
        <div class="cal-hook">${d.hookTitle||''}</div>
        <div class="cal-note">💡 ${d.notes||''}</div>
      </div>
      <button class="copy-btn" id="cal-copy-${d.day}" onclick="copyText('Day ${d.day}: ${(d.hookTitle||'').replace(/'/g,"\\'")}\\nPlatform: ${d.platform||''} | Post at: ${d.postingTime||''}\\nType: ${d.contentType||''}\\nTip: ${(d.notes||'').replace(/'/g,"\\'")}','cal-copy-${d.day}')">Copy</button>
    </div>`).join('')}
  </div>
  <div id="cal-grid-view" style="display:${calView==='grid'?'block':'none'}">
    ${weeks.map((wk,wi)=>`
    <div class="cal-grid-week">
      <div class="cal-grid-week-label">Week ${wi+1}</div>
      <div class="cal-grid-row">
        ${wk.map(d=>`
        <div class="cal-grid-cell">
          <div class="cal-grid-num" style="color:${color}">${d.day}</div>
          <span class="cal-grid-type" style="background:${(TYPE_COLORS[d.contentType]||'#888')}18;color:${TYPE_COLORS[d.contentType]||'#888'}">${d.contentType||''}</span>
          <div class="cal-grid-title">${d.hookTitle||''}</div>
        </div>`).join('')}
        ${Array(7-wk.length).fill('<div></div>').join('')}
      </div>
    </div>`).join('')}
  </div>`;
}

function setCalView(v){
calView=v;
const list=document.getElementById(‘cal-list-view’);
const grid=document.getElementById(‘cal-grid-view’);
if(list)list.style.display=v===‘list’?‘block’:‘none’;
if(grid)grid.style.display=v===‘grid’?‘block’:‘none’;
document.querySelectorAll(’.view-btn’).forEach(b=>{
const isActive=b.textContent.toLowerCase()===v;
b.className=‘view-btn’+(isActive?’ active’:’’);
b.style.color=isActive?’#E040A0’:’’;
});
}

// ── SAVED TAB ─────────────────────────────────────────────────────────────────
function renderSaved(){
const el=document.getElementById(‘tab-saved’);
const n=savedHooks.length;
el.innerHTML=`

  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px">
    <div class="section-title" style="margin:0">
      <div class="section-title-row"><div class="section-icon" style="background:#F5A62318">📁</div><h2>SAVED LIBRARY</h2></div>
      <div class="section-sub">${n} hook${n!==1?'s':''} in your library</div>
    </div>
    ${n>0?`<button class="copy-btn del-btn" onclick="clearAll()" style="margin-top:4px;background:#FFF0F0;border:1px solid #FFCDD2">Clear All</button>`:''}
  </div>
  ${n===0?`<div class="empty"><div class="empty-icon">⚡</div><h3>Library is empty</h3><p>Generate hooks and they'll be saved here automatically</p></div>`
  :`<div>${savedHooks.map((x,i)=>hookCardHTML(x,i,'#F5A623',true)).join('')}</div>`}`;
}

function clearAll(){savedHooks=[];saveSaved();renderSaved();}

// ── Init ─────────────────────────────────────────────────────────────────────
updateSavedCount();
renderGenerate();
renderTrends();
renderRepurpose();
renderCalendar();
</script>

</body>
</html>

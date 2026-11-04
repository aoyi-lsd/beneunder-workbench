(()=>{
const sample={capturedAt:new Date().toLocaleString('zh-CN'),period:'平台近7天（页面未显示精确起止日）',source:'https://www.bigdatavoice.com/app/#/promotion-search/index?keyword=%E8%95%89%E4%B8%8B',scope:'关键词查询首页10条中，经货盘映射筛出的4条外套商品链接样本；非全量、非去重SPU排行。',rows:[{code:'PM030',name:'女士连帽万粒绒外套双面穿',total:'100万元以上',video:'25万–50万元',count:24,basis:'名称特征匹配'},{code:'CL026',name:'女士夹克气绒服',total:'100万元以上',video:'1万–2.5万元',count:13,basis:'已知对应商品链接'},{code:'CL028',name:'男士气绒外套 CL02826',total:'100万元以上',video:'0元',count:0,basis:'货号匹配，26为年份'},{code:'CL028',name:'男士夹克气绒服（另一商品链接）',total:'100万元以上',video:'2.5万–5万元',count:17,basis:'名称特征匹配'}]};
sample.capturedAt='2026-10-30 · 本轮登录后采集';
function setup(){const select=document.getElementById('guide-window');if(!select)return;const option=select.querySelector('option[value="seven"]');option.textContent='近7天：平台已采样（部分商品）';const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));function show(){if(select.value!=='seven')return;const box=document.getElementById('guide-radar-result');box.innerHTML=`<p class="guide-note"><b>最新平台快照 · ${sample.capturedAt}</b><br>${sample.period}。${sample.scope}<br>视频销售额为该商品链接的视频渠道合计，不是单条视频销售额，也不代表全部渠道。未接入持续自动同步，当前没有同比或环比增长证据。</p>${sample.rows.map(r=>`<article class="guide-card" style="margin-bottom:12px"><small>${esc(r.code)} · ${esc(r.basis)}</small><h3>${esc(r.name)}</h3><p>视频渠道销售额：<b>${esc(r.video)}</b> · 带货视频：${r.count} 条</p><p>全渠道商品销售额：${esc(r.total)}</p><p><small>两个 CL028 为不同商品链接，不合并累计、不推断单条视频效果。</small></p></article>`).join('')}<p class="guide-note">来源：用户提供的已登录商品库，筛选“蕉下 / 近7天”。后续可继续逐款采集；这次未修改原参考视频、库存、价格或历史销售额。</p>`;}
select.addEventListener('change',show);const date=document.querySelector('.guide-date');if(date)date.innerHTML='历史视频截至 2026.10.29<br>库存快照 2026.11.04<br>近7天商品样本：10.30采集<br>更新方式：登录后人工采集';}
setup();
})();
(()=>{
function fallback(img){if(!(img instanceof HTMLImageElement)||img.dataset.rootFallback)return;const src=img.getAttribute('src')||'';if(!/^assets\/products\/[a-f0-9]+\.jpg$/.test(src))return;img.dataset.rootFallback='1';img.src=src.split('/').pop();}
document.addEventListener('error',event=>fallback(event.target),true);
document.querySelectorAll('img').forEach(img=>{if(img.complete&&!img.naturalWidth)fallback(img);});
})();

// ── Product Catalog ────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'matebook-pro-s',
    brand: 'HUAWEI',
    brandColor: '#e4000f',
    name: 'MateBook Pro S',
    fullName: 'HUAWEI MateBook Pro S',
    tier: 'premium',
    tierLabel: 'Premium',
    price: '¥7,999',
    priceUSD: '$1,099',
    tagline: "World's Lightest 14\" Full-Metal Laptop",
    thumb: 'https://nova-api.betteryeah.com/v1/super_agent/chat/file/AGyNlYKP',
    url: 'matebook-pro-s.html',
    os: 'HarmonyOS 6.1',
    chip: 'Kirin XE90',
    display: '14.2" OLED 3.1K 120Hz',
    weight: '798g',
    battery: '18h',
    ram: '16–32GB',
    storage: '512GB–1TB',
    score: { portability: 9.5, performance: 7.5, display: 9.5, battery: 8.5, ecosystem: 9.0, value: 7.0 }
  },
  {
    id: 'macbook-neo',
    brand: 'Apple',
    brandColor: '#555',
    name: 'MacBook Neo',
    fullName: 'Apple MacBook Neo',
    tier: 'entry',
    tierLabel: 'Entry',
    price: '$699',
    priceUSD: '$699',
    tagline: "Apple's Most Affordable Laptop Ever",
    thumb: 'https://nova-api.betteryeah.com/v1/super_agent/chat/file/AGM92uVo',
    url: 'macbook-neo.html',
    os: 'macOS 27',
    chip: 'Apple A18 Pro',
    display: '13" Liquid Retina IPS 219ppi',
    weight: '1.23kg',
    battery: '16h',
    ram: '8GB',
    storage: '256GB–512GB',
    score: { portability: 7.5, performance: 8.0, display: 7.5, battery: 8.0, ecosystem: 9.0, value: 9.5 }
  },
  {
    id: 'dell-xps-14',
    brand: 'Dell',
    brandColor: '#007db8',
    name: 'XPS 14 (2026)',
    fullName: 'Dell XPS 14 (2026)',
    tier: 'premium',
    tierLabel: 'Premium',
    price: '$2,069',
    priceUSD: '$2,069',
    tagline: 'Premium OLED Windows Ultrabook',
    thumb: 'https://nova-api.betteryeah.com/v1/super_agent/chat/file/AGM94r6Y',
    url: 'dell-xps-14.html',
    os: 'Windows 11',
    chip: 'Intel Core Ultra X7',
    display: '14" OLED 2.8K 120Hz Touch',
    weight: '1.36kg',
    battery: '~12h',
    ram: '32–64GB',
    storage: '1TB–2TB',
    score: { portability: 6.5, performance: 9.0, display: 9.0, battery: 7.0, ecosystem: 8.5, value: 6.5 }
  }
];

const TIERS = [
  { id: 'all',     label: 'All Products' },
  { id: 'premium', label: 'Premium (High-End)' },
  { id: 'mid',     label: 'Mid-Range' },
  { id: 'entry',   label: 'Entry-Level' }
];

const BRANDS = ['All Brands', 'HUAWEI', 'Apple', 'Dell'];

// ── Render Global Nav ─────────────────────────────────────────
// Nav page registry — add new pages here, prefix rules:
//   weekly* → 行业周报  |  topic* → 热点专项  |  comp* → 竞品分析
// Pages listed here override prefix detection (for legacy filenames).
const NAV_PAGES = [
  // 行业周报
  { id: 'weekly-brief',   url: 'weekly-brief.html',   label: '行业周报 · 2026 Q4',  cat: 'weekly' },
  // 热点专项
  { id: 'rtx-spark-cn',   url: 'rtx-spark-cn.html',   label: 'RTX Spark 平台深度分析', cat: 'topic' },
  { id: 'rtx-spark',      url: 'rtx-spark.html',       label: 'RTX Spark Analysis (EN)', cat: 'topic' },
  // 竞品分析
  { id: 'matebook-pro-s', url: 'matebook-pro-s.html',  label: 'MateBook Pro S',     cat: 'comp' },
  { id: 'macbook-neo',    url: 'macbook-neo.html',      label: 'MacBook Neo',        cat: 'comp' },
  { id: 'dell-xps-14',    url: 'dell-xps-14.html',     label: 'Dell XPS 14 (2026)', cat: 'comp' },
];

const NAV_CATS = [
  { id: 'weekly', label: '行业周报', prefix: 'weekly' },
  { id: 'topic',  label: '热点专项', prefix: 'topic'  },
  { id: 'comp',   label: '竞品分析', prefix: 'comp'   },
];

function renderNav(currentId) {

  // Determine which category the current page belongs to
  const currentPage = NAV_PAGES.find(p => p.id === currentId);
  const currentCat  = currentPage ? currentPage.cat : null;

  // Build dropdown items for each category
  function buildDropdown(catId) {
    const pages = NAV_PAGES.filter(p => p.cat === catId);
    return pages.map(p => {
      const isActive = p.id === currentId;
      return `<a href="${p.url}" style="display:block;padding:8px 16px;font-size:13px;text-decoration:none;white-space:nowrap;color:${isActive ? '#76b900' : '#cbd5e1'};font-weight:${isActive ? '700' : '400'};background:${isActive ? 'rgba(118,185,0,0.08)' : 'transparent'};transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.07)'" onmouseout="this.style.background='${isActive ? 'rgba(118,185,0,0.08)' : 'transparent'}'">
        ${isActive ? '<span style="color:#76b900;margin-right:6px;">▸</span>' : '<span style="color:transparent;margin-right:6px;">▸</span>'}${p.label}
      </a>`;
    }).join('');
  }

  const navStyle = `
    <style>
      .snav-item{position:relative;}
      .snav-item:hover .snav-drop{display:block;}
      .snav-btn{display:flex;align-items:center;gap:5px;padding:6px 13px;border-radius:8px;cursor:pointer;transition:background 0.15s;text-decoration:none;}
      .snav-btn:hover,.snav-item.active .snav-btn{background:rgba(255,255,255,0.1);}
      .snav-drop{display:none;position:absolute;top:100%;left:0;min-width:200px;background:rgba(8,15,30,0.98);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:6px 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:300;margin-top:4px;}
      .snav-chevron{transition:transform 0.2s;}
      .snav-item:hover .snav-chevron{transform:rotate(180deg);}
    </style>`;

  return navStyle + `
  <nav id="siteNav" style="position:sticky;top:0;z-index:200;background:rgba(8,15,30,0.98);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,0.07);">
    <div style="max-width:1400px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:54px;gap:0;">

      <!-- Logo / Home -->
      <a href="index.html" style="display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0;margin-right:20px;padding:6px 14px;border-radius:8px;background:${currentId === 'index' ? 'rgba(255,255,255,0.12)' : 'transparent'};transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='${currentId === 'index' ? 'rgba(255,255,255,0.12)' : 'transparent'}'">
        <svg viewBox="0 0 20 20" fill="currentColor" style="width:16px;height:16px;color:#4a9edd;flex-shrink:0;"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        <span style="font-size:13px;font-weight:700;color:#fff;white-space:nowrap;">首页</span>
      </a>

      <!-- Divider -->
      <div style="width:1px;height:26px;background:rgba(255,255,255,0.1);margin-right:16px;flex-shrink:0;"></div>

      <!-- Three category dropdowns -->
      <div style="display:flex;align-items:center;gap:2px;flex:1;">
        ${NAV_CATS.map(cat => {
          const isActiveCat = currentCat === cat.id;
          return `
          <div class="snav-item${isActiveCat ? ' active' : ''}">
            <span class="snav-btn" style="color:${isActiveCat ? '#fff' : '#94a3b8'};">
              <span style="font-size:13px;font-weight:${isActiveCat ? '700' : '500'};">${cat.label}</span>
              <svg class="snav-chevron" viewBox="0 0 20 20" fill="currentColor" style="width:12px;height:12px;color:#64748b;"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </span>
            <div class="snav-drop">
              ${buildDropdown(cat.id)}
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </nav>`;


// ── Render Score Ra// ── Render Score Radar (inline Chart.js) ─────────────────────
function renderRadarData(product) {
  return {
    labels: ['Portability', 'Performance', 'Display', 'Battery', 'Ecosystem', 'Value'],
    data: Object.values(product.score)
  };
}

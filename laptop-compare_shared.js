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
function renderNav(currentId) {
  const brandIcons = {
    'matebook-pro-s': '<svg viewBox="0 0 24 24" fill="none" style="width:14px;height:14px;flex-shrink:0;"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M0 20h24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    'macbook-neo':    '<svg viewBox="0 0 24 24" fill="none" style="width:14px;height:14px;flex-shrink:0;"><rect x="3" y="3" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M1 18h22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    'dell-xps-14':    '<svg viewBox="0 0 24 24" fill="none" style="width:14px;height:14px;flex-shrink:0;"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
  };
  const brandAccent = {
    'matebook-pro-s': '#e4000f',
    'macbook-neo':    '#a3a3a3',
    'dell-xps-14':    '#007db8'
  };

  return `
  <nav id="siteNav" style="position:sticky;top:0;z-index:200;background:rgba(8,15,30,0.98);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,0.07);">
    <div style="max-width:1400px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:54px;gap:0;">

      <!-- Compare All (homepage) — primary left anchor -->
      <a href="index.html" style="display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0;margin-right:8px;padding:6px 14px;border-radius:8px;background:${currentId === 'index' ? 'rgba(255,255,255,0.12)' : 'transparent'};transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='${currentId === 'index' ? 'rgba(255,255,255,0.12)' : 'transparent'}'">
        <svg viewBox="0 0 20 20" fill="currentColor" style="width:16px;height:16px;color:#4a9edd;flex-shrink:0;"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        <span style="font-size:13px;font-weight:700;color:#fff;white-space:nowrap;">Compare All</span>
      </a>

      <!-- Weekly Brief link -->
      <a href="weekly-brief.html" style="display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0;margin-right:8px;padding:6px 14px;border-radius:8px;background:${currentId === 'weekly-brief' ? 'rgba(255,255,255,0.12)' : 'transparent'};transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='${currentId === 'weekly-brief' ? 'rgba(255,255,255,0.12)' : 'transparent'}'">
        <svg viewBox="0 0 20 20" fill="currentColor" style="width:16px;height:16px;color:#4a9edd;flex-shrink:0;"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        <span style="font-size:13px;font-weight:700;color:#fff;white-space:nowrap;">Latest Focus</span>
      </a>

      <!-- Divider -->
      <div style="width:1px;height:28px;background:rgba(255,255,255,0.1);margin-right:20px;flex-shrink:0;"></div>

      <!-- Product links — flat, all 3 visible -->
      <div style="display:flex;align-items:center;gap:2px;flex:1;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;">
        ${PRODUCTS.map(p => {
          const isActive = p.id === currentId;
          const accent = brandAccent[p.id] || '#4a9edd';
          return `<a href="${p.url}" style="display:flex;align-items:center;gap:7px;padding:6px 16px;border-radius:8px;text-decoration:none;white-space:nowrap;transition:background 0.15s;${isActive ? `background:rgba(255,255,255,0.1);border-bottom:2px solid ${accent};` : 'border-bottom:2px solid transparent;'}">
            <span style="color:${isActive ? accent : '#64748b'};display:flex;align-items:center;">${brandIcons[p.id]}</span>
            <span style="font-size:13px;font-weight:${isActive ? '700' : '500'};color:${isActive ? '#fff' : '#94a3b8'};">${p.brand}</span>
            <span style="font-size:12px;color:${isActive ? '#cbd5e1' : '#64748b'};">${p.name}</span>
          </a>`;
        }).join('')}
      </div>

      <!-- Right: section quick-nav (shown on product pages) -->
      ${currentId && currentId !== 'index' ? `
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;margin-left:16px;border-left:1px solid rgba(255,255,255,0.08);padding-left:16px;">
        <a href="#overview"    class="nav-link" style="font-size:11px;color:#64748b;text-decoration:none;padding:4px 8px;border-radius:5px;transition:all 0.15s;" onmouseover="this.style.color='#fff';this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.color='#64748b';this.style.background='transparent'">Overview</a>
        <a href="#specs"       class="nav-link" style="font-size:11px;color:#64748b;text-decoration:none;padding:4px 8px;border-radius:5px;transition:all 0.15s;" onmouseover="this.style.color='#fff';this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.color='#64748b';this.style.background='transparent'">Specs</a>
        <a href="#reviews"     class="nav-link" style="font-size:11px;color:#64748b;text-decoration:none;padding:4px 8px;border-radius:5px;transition:all 0.15s;" onmouseover="this.style.color='#fff';this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.color='#64748b';this.style.background='transparent'">Review</a>
        <a href="#comparison"  class="nav-link" style="font-size:11px;color:#64748b;text-decoration:none;padding:4px 8px;border-radius:5px;transition:all 0.15s;" onmouseover="this.style.color='#fff';this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.color='#64748b';this.style.background='transparent'">Compare</a>
        <div style="margin-left:8px;display:flex;border-radius:5px;overflow:hidden;border:1px solid rgba(255,255,255,0.2);">
          <button id="nav-lt-en" onclick="setLang('en')" style="padding:3px 10px;font-size:11px;font-weight:700;border:none;cursor:pointer;background:#1b3a6b;color:#fff;letter-spacing:.3px;">EN</button>
          <button id="nav-lt-cn" onclick="setLang('cn')" style="padding:3px 10px;font-size:11px;font-weight:700;border:none;cursor:pointer;background:transparent;color:rgba(255,255,255,0.55);letter-spacing:.3px;">中文</button>
        </div>
      </div>` : ''}
    </div>
  </nav>`;
}

// ── Render Score Ra// ── Render Score Radar (inline Chart.js) ─────────────────────
function renderRadarData(product) {
  return {
    labels: ['Portability', 'Performance', 'Display', 'Battery', 'Ecosystem', 'Value'],
    data: Object.values(product.score)
  };
}

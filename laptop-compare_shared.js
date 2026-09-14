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
  const tierColors = { premium: '#1b3a6b', mid: '#7c3aed', entry: '#059669' };
  const tierBg    = { premium: '#dbeafe', mid: '#ede9fe', entry: '#d1fae5' };
  const tierText  = { premium: '#1e40af', mid: '#6d28d9', entry: '#065f46' };

  return `
  <nav id="siteNav" style="position:sticky;top:0;z-index:200;background:rgba(10,18,35,0.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.07);">
    <div style="max-width:1400px;margin:0 auto;padding:0 28px;display:flex;align-items:center;height:56px;gap:0;">
      <!-- Logo -->
      <a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;margin-right:28px;">
        <div style="width:32px;height:32px;background:linear-gradient(135deg,#2563eb,#1b3a6b);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:#fff;">LA</div>
        <span style="font-weight:700;font-size:14px;color:#fff;letter-spacing:-0.3px;">CPC Competitive Analysis</span>
      </a>

      <!-- Products dropdown area -->
      <div style="display:flex;align-items:center;gap:4px;flex:1;overflow-x:auto;scrollbar-width:none;">
        ${PRODUCTS.map(p => `
          <a href="${p.url}" style="display:flex;align-items:center;gap:8px;padding:6px 14px;border-radius:8px;text-decoration:none;white-space:nowrap;transition:background 0.15s;${p.id === currentId ? 'background:rgba(255,255,255,0.12);' : ''}">
            <span style="font-size:11px;font-weight:700;padding:2px 7px;border-radius:4px;background:${tierBg[p.tier]};color:${tierText[p.tier]};">${p.tierLabel}</span>
            <span style="font-size:13px;font-weight:600;color:${p.id === currentId ? '#fff' : '#94a3b8'};">${p.brand}</span>
            <span style="font-size:13px;color:${p.id === currentId ? '#cbd5e1' : '#64748b'};">${p.name}</span>
          </a>
        `).join('')}
      </div>

      <!-- Right actions -->
      <div style="display:flex;align-items:center;gap:10px;flex-shrink:0;margin-left:16px;">
        <a href="index.html" style="font-size:12px;font-weight:600;color:#64748b;text-decoration:none;padding:5px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;transition:all 0.2s;" onmouseover="this.style.color='#fff';this.style.borderColor='rgba(255,255,255,0.3)'" onmouseout="this.style.color='#64748b';this.style.borderColor='rgba(255,255,255,0.1)'">
          ⊞ Compare All
        </a>
      </div>
    </div>
  </nav>`;
}

// ── Render Score Radar (inline Chart.js) ─────────────────────
function renderRadarData(product) {
  return {
    labels: ['Portability', 'Performance', 'Display', 'Battery', 'Ecosystem', 'Value'],
    data: Object.values(product.score)
  };
}

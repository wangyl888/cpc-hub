
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>本周值得关注 | 笔记本行业周报 2026.09.14—09.20</title>
<script src="https://resource.bantouyan.com/js/tailwind@3.4.16.js"></script>
<script src="laptop-compare_shared.js"></script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap');
  body { font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif; }
  .gradient-header { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f2744 100%); }
  .card-hover { transition: all 0.2s ease; }
  .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.12); }
  .tag-red { background:#fef2f2;color:#dc2626;border:1px solid #fecaca; }
  .tag-orange { background:#fff7ed;color:#ea580c;border:1px solid #fed7aa; }
  .tag-yellow { background:#fefce8;color:#ca8a04;border:1px solid #fde68a; }
  .tag-blue { background:#eff6ff;color:#2563eb;border:1px solid #bfdbfe; }
  .tag-green { background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0; }
  .tag-purple { background:#faf5ff;color:#9333ea;border:1px solid #e9d5ff; }
  .section-divider { height:3px;background:linear-gradient(90deg,#2563eb,#7c3aed,transparent);border-radius:2px; }
  .model-card:nth-child(1){border-left:4px solid #3b82f6;}
  .model-card:nth-child(2){border-left:4px solid #8b5cf6;}
  .model-card:nth-child(3){border-left:4px solid #6366f1;}
  .model-card:nth-child(4){border-left:4px solid #ec4899;}
  .model-card:nth-child(5){border-left:4px solid #06b6d4;}
  .scrollbar-thin::-webkit-scrollbar{height:4px;}
  .scrollbar-thin::-webkit-scrollbar-track{background:#f1f5f9;}
  .scrollbar-thin::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:2px;}
  table{border-collapse:collapse;}
  thead th{background:#f8fafc;}
  tr:hover td{background:#f8fafc;}
  a.src-link{color:#2563eb;text-decoration:none;}
  a.src-link:hover{text-decoration:underline;}
</style>
</head>
<body class="bg-gray-50 text-gray-800">

<!-- SITE NAV -->
<div id="navContainer"></div>
<script>
  if (typeof renderNav === 'function') {
    document.getElementById('navContainer').innerHTML = renderNav('weekly-brief');
  }
</script>

<!-- HEADER -->
<div class="gradient-header text-white">
  <div class="max-w-5xl mx-auto px-6 py-10">
    <div class="flex items-start justify-between flex-wrap gap-4">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs font-medium bg-blue-500 bg-opacity-30 border border-blue-400 border-opacity-40 text-blue-200 px-2.5 py-0.5 rounded-full">行业简报</span>
          <span class="text-xs text-blue-300">老板视角</span>
        </div>
        <h1 class="text-3xl font-bold tracking-tight mb-1">笔记本制造行业周报</h1>
        <p class="text-blue-200 text-sm font-light">2026年9月14日—9月20日 &nbsp;|&nbsp; 发布于 2026.09.21</p>
      </div>
      <div class="text-right">
        <div class="text-xs text-blue-300 mb-1">本期关键数字</div>
        <div class="flex gap-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-white">−4.2%</div>
            <div class="text-xs text-blue-300">全球笔记本出货</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-yellow-300">+20%</div>
            <div class="text-xs text-blue-300">PC均价涨幅</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-red-300">80%</div>
            <div class="text-xs text-blue-300">内存占BOM比</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
      <div class="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">总体摘要</div>
      <p class="text-sm text-blue-50 leading-relaxed">本周行业呈现两条并行主线。<strong class="text-white">竞争端</strong>：Panther Lake与骁龙X2 Elite双平台量产铺货，ARM笔记本份额达历史峰值15.3%；Google Googlebook本周开放预购，五大品牌联合首发，$999起，是对笔记本OS生态的有组织重构；苹果OLED MacBook Ultra年底发布基本确定。<strong class="text-white">行业端</strong>：内存荒持续至2027年+，AMD芯片组Q4涨价10%，成本端双重夹击；全球PC出货量降4%但均价涨20%~40%，"量跌价涨"格局确立；供应链产能从东南亚回流中国大陆；《电子信息制造业"十五五"规划》落地，国产化率2027年目标80%。</p>
    </div>
  </div>
</div>

<div class="max-w-5xl mx-auto px-6 py-8">

  <!-- PART 1 -->
  <div class="mb-2">
    <div class="flex items-center gap-3 mb-1">
      <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">一</div>
      <h2 class="text-xl font-bold text-gray-900">竞争动向与新机型上市</h2>
    </div>
    <div class="section-divider mb-4"></div>
  </div>

  <div class="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-900 leading-relaxed">
    <strong>本周要点：</strong>三大平台（Intel Panther Lake / AMD Ryzen AI 400 / Qualcomm Snapdragon X2）NPU均已越过微软Copilot+ 40 TOPS门槛，"AI PC"进入标配化阶段。游戏本、商务本、轻薄本三大品类均有新品落地，价格带400欧元至$2,500全覆盖。最大变量是 <strong>Googlebook 本周开放预购</strong>——Android系统替代ChromeOS，$999起，宏碁/华硕/戴尔/惠普/联想五大品牌联合首发，构成对现有Windows生态的长期挑战。
  </div>

  <div class="space-y-4 mb-10">

    <!-- 华硕 TUF Gaming 16 -->
    <div class="model-card bg-white rounded-xl p-5 shadow-sm card-hover">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="font-bold text-gray-900">华硕 TUF Gaming 16 (2026)</span>
            <span class="text-xs px-2 py-0.5 rounded-full tag-blue">入门~中端游戏本</span>
            <span class="text-xs px-2 py-0.5 rounded-full tag-green">全球开售</span>
          </div>
          <div class="text-xs text-gray-500 mb-3">上市时间：2026-09-17 &nbsp;|&nbsp; 全球多国同步开售</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">核心规格</div>
              <div class="text-gray-700 text-xs leading-relaxed">Core i5-14450HX + RTX 5050/5060（85W TGP）<br>16英寸 144Hz 16:10 IPS，63Wh，2.2kg<br>双SODIMM+双SSD插槽（可升级）</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">定价</div>
              <div class="text-gray-700 text-xs leading-relaxed">法国起 <strong>1,799欧元</strong><br>意大利 <strong>1,199欧元</strong>（1TB SSD版）<br>加拿大RTX5060版 <strong>1,699加元</strong></div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">用户评论要点</div>
              <div class="text-xs leading-relaxed">
                <span class="text-green-600">✓ 散热优秀、噪音低（&lt;40dB）</span><br>
                <span class="text-green-600">✓ 屏幕16:10比例好、内存/硬盘可升级</span><br>
                <span class="text-red-500">✗ GPU功耗仅85W（旧款F16可达115W）</span><br>
                <span class="text-red-500">✗ 暂未登陆美国市场</span>
              </div>
            </div>
          </div>
        </div>
        <a href="https://www.asus.com/ca-en/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-16-2026/" target="_blank" class="text-xs text-blue-600 hover:underline whitespace-nowrap mt-1">官网 →</a>
      </div>
    </div>

    <!-- 宏碁 Swift Spin 14 -->
    <div class="model-card bg-white rounded-xl p-5 shadow-sm card-hover">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="font-bold text-gray-900">宏碁 Swift Spin 14 (SFSP14-I51T)</span>
            <span class="text-xs px-2 py-0.5 rounded-full tag-blue">中端轻薄二合一</span>
            <span class="text-xs px-2 py-0.5 rounded-full tag-green">全球上市</span>
          </div>
          <div class="text-xs text-gray-500 mb-3">上市时间：2026-09-16 &nbsp;|&nbsp; 全球上市</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">核心规格</div>
              <div class="text-gray-700 text-xs leading-relaxed">Panther Lake Core Ultra 7 355 / Core Ultra 5 325<br>14英寸 120Hz（美/阿联酋）/ 60Hz（欧）<br>32GB，71Wh，续航 <strong>26小时</strong>，Wacom AES 2.0触控笔</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">定价</div>
              <div class="text-gray-700 text-xs leading-relaxed">美国 <strong>$1,599</strong>（Core Ultra 7版）<br>欧元区 <strong>1,499欧元</strong>（Core Ultra 7）<br>欧元区 <strong>1,415欧元</strong>（Core Ultra 5）</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">用户评论要点</div>
              <div class="text-xs leading-relaxed">
                <span class="text-green-600">✓ Panther Lake效率接近Lunar Lake，性能提升32%</span><br>
                <span class="text-green-600">✓ 超长续航、轻薄、支持Wacom触控笔</span><br>
                <span class="text-red-500">✗ Core Ultra 7比骁龙X2 Elite性能低约10%</span><br>
                <span class="text-red-500">✗ 欧版仅60Hz屏</span>
              </div>
            </div>
          </div>
        </div>
        <a href="https://www.acer.com/us-en/laptops/swift/swift-spin-14/pdp/NX.KHPAA.001" target="_blank" class="text-xs text-blue-600 hover:underline whitespace-nowrap mt-1">官网 →</a>
      </div>
    </div>

    <!-- Googlebook -->
    <div class="model-card bg-white rounded-xl p-5 shadow-sm card-hover border-2 border-indigo-200">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="font-bold text-gray-900">Googlebook（宏碁/华硕/戴尔/惠普/联想 首批）</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">全新品类</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">⚡ 重点关注</span>
          </div>
          <div class="text-xs text-gray-500 mb-3">上市时间：2026-09-21 开放预购（本周）&nbsp;|&nbsp; 五大品牌联合首发</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">核心规格</div>
              <div class="text-gray-700 text-xs leading-relaxed">Android系统（非ChromeOS）<br>Gemini AI深度集成，Magic Pointer<br>可直接运行Android手机App<br>与Android手机深度联动</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">定价</div>
              <div class="text-gray-700 text-xs leading-relaxed">起售价 <strong>$999</strong></div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">用户评论要点</div>
              <div class="text-xs leading-relaxed">
                <span class="text-green-600">✓ Android生态+Gemini AI整合，与手机深度联动</span><br>
                <span class="text-red-500">✗ Reddit：Google曾放弃Pixelbook，品牌承诺存疑</span><br>
                <span class="text-yellow-600">⚠ 预购与评测同时解禁，被指"激进策略"</span>
              </div>
            </div>
          </div>
        </div>
        <a href="https://googlebook.google/" target="_blank" class="text-xs text-blue-600 hover:underline whitespace-nowrap mt-1">官网 →</a>
      </div>
    </div>

    <!-- MacBook Ultra -->
    <div class="model-card bg-white rounded-xl p-5 shadow-sm card-hover">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="font-bold text-gray-900">苹果 MacBook Ultra（OLED触摸屏，内测中）</span>
            <span class="text-xs px-2 py-0.5 rounded-full tag-purple">旗舰商务/创意本</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200">预计年底发布</span>
          </div>
          <div class="text-xs text-gray-500 mb-3">预计2026年底发布 &nbsp;|&nbsp; Bloomberg Mark Gurman确认</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">核心规格</div>
              <div class="text-gray-700 text-xs leading-relaxed">M5 Pro / M5 Max芯片<br>14/16英寸 Tandem OLED 触摸屏<br>Dynamic Island取代刘海，机身更薄<br>macOS 27.1内测中</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">定价</div>
              <div class="text-gray-700 text-xs leading-relaxed">预计高于现款MacBook Pro<br>（具体定价未公布）</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">用户评论要点</div>
              <div class="text-xs leading-relaxed">
                <span class="text-green-600">✓ PCMag M5 Max版评测：24h续航，OLED屏"惊艳"</span><br>
                <span class="text-green-600">✓ 触摸屏交互自然，苹果首款OLED Mac</span><br>
                <span class="text-yellow-600">⚠ Reddit：将是独立于MacBook Pro的高端产品线</span>
              </div>
            </div>
          </div>
        </div>
        <a href="https://www.apple.com/macbook-pro/" target="_blank" class="text-xs text-blue-600 hover:underline whitespace-nowrap mt-1">官网 →</a>
      </div>
    </div>

    <!-- Intel Core Ultra X9 -->
    <div class="model-card bg-white rounded-xl p-5 shadow-sm card-hover">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="font-bold text-gray-900">Intel Core Ultra X9 388H 搭载机型（德国限量款）</span>
            <span class="text-xs px-2 py-0.5 rounded-full tag-blue">高端商务 / AI PC</span>
            <span class="text-xs px-2 py-0.5 rounded-full tag-green">已出货</span>
          </div>
          <div class="text-xs text-gray-500 mb-3">上市时间：2026-09-14 德国零售渠道出现 &nbsp;|&nbsp; Panther Lake旗舰首批量产机型</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">核心规格</div>
              <div class="text-gray-700 text-xs leading-relaxed">Core Ultra X9 388H，16核20线程，5.1GHz<br><strong>50 TOPS NPU</strong>，Arc B390集显<br>32GB LPDDR5X，1TB SSD，14英寸 2合1</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">定价</div>
              <div class="text-gray-700 text-xs leading-relaxed">德国零售约 <strong>€2,499</strong><br>（限量款）</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase mb-1">用户评论要点</div>
              <div class="text-xs leading-relaxed">
                <span class="text-green-600">✓ Panther Lake效率兑现承诺：性能+32%，续航持平</span><br>
                <span class="text-green-600">✓ 50 TOPS NPU，Copilot+ AI PC标配化</span><br>
                <span class="text-yellow-600">⚠ ARM架构Q2市场份额达15.3%历史峰值，竞争加剧</span>
              </div>
            </div>
          </div>
        </div>
        <a href="https://www.intel.com/content/www/us/en/products/sku/240957/intel-core-ultra-9-processor-388h-24m-cache-up-to-5-10-ghz/specifications.html" target="_blank" class="text-xs text-blue-600 hover:underline whitespace-nowrap mt-1">官网 →</a>
      </div>
    </div>

  </div><!-- end model cards -->


  <!-- PART 2 -->
  <div class="mb-2">
    <div class="flex items-center gap-3 mb-1">
      <div class="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-sm">二</div>
      <h2 class="text-xl font-bold text-gray-900">行业讯息</h2>
    </div>
    <div class="section-divider mb-6" style="background:linear-gradient(90deg,#ea580c,#f59e0b,transparent);"></div>
  </div>

  <div class="space-y-8">

    <!-- 成本端 -->
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2 h-5 rounded-sm bg-red-500 inline-block"></span>
        <h3 class="font-bold text-gray-900 text-base">成本端 — 内存+芯片双重涨价，利润空间持续收窄</h3>
        <span class="text-xs px-2 py-0.5 rounded-full tag-red ml-auto">🔴 高优先级</span>
      </div>
      <div class="bg-red-50 border border-red-100 rounded-xl p-4 mb-3 text-sm text-red-900 leading-relaxed">
        内存荒是当前最高优先级成本风险。SK海力士CEO预警2027年将是行业史上供应最糟糕的一年，HBM挤占通用DRAM产能，入门级笔记本内存BOM占比已达 <strong>80%</strong>。AMD通知合作伙伴Q4起对AI芯片/Radeon GPU/主板芯片组涨价约 <strong>10%</strong>，根因是台积电先进制程代工提价5%~10%，2027年还计划再涨一轮。Ryzen CPU暂未涨价，但后续跟进风险明确。中小厂商已出现"盲订抢货"（Framework）和"双主板方案"（Jolla）等极端自救手段。
      </div>
      <div class="overflow-x-auto scrollbar-thin">
        <table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr class="text-gray-600">
              <th class="text-left px-3 py-2 font-semibold w-5/12">内容摘要</th>
              <th class="text-left px-3 py-2 font-semibold">平台</th>
              <th class="text-left px-3 py-2 font-semibold">媒体/来源</th>
              <th class="text-left px-3 py-2 font-semibold whitespace-nowrap">时间</th>
              <th class="text-left px-3 py-2 font-semibold">热度</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="px-3 py-2"><a href="https://finance.sina.com.cn/tech/discovery/2026-09-16/doc-inirzfsy2899323.shtml" target="_blank" class="src-link">内存荒持续至2027年：SK海力士CEO预警，Framework"盲订"抢货，Jolla双主板方案，假冒芯片流入风险</a></td>
              <td class="px-3 py-2 text-gray-600">快科技 / 新浪财经</td>
              <td class="px-3 py-2 text-gray-600">快科技·青山（原载路透社）</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-16</td>
              <td class="px-3 py-2 text-gray-600">浏览量2,560次；多平台转载</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://shattered.io/budget-phones-laptops-memory-cost-crisis-2026/" target="_blank" class="src-link">入门级笔记本内存BOM占比高达80%，英特尔CEO AI峰会发言；内存危机将在2026年继续恶化</a></td>
              <td class="px-3 py-2 text-gray-600">Shattered.io / 247 Wall St.</td>
              <td class="px-3 py-2 text-gray-600">Ryan Cole</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-18</td>
              <td class="px-3 py-2 text-gray-600">多家英文科技媒体同步转载</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://shattered.io/amd-10-percent-price-hike-ryzen-spared-2026/" target="_blank" class="src-link">AMD Q4起对AI芯片/Radeon GPU/主板芯片组涨价约10%；Ryzen CPU暂不涉及；根因为台积电晶圆提价</a></td>
              <td class="px-3 py-2 text-gray-600">Shattered.io</td>
              <td class="px-3 py-2 text-gray-600">Priya Anand（综合Wccftech等）</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-17~18</td>
              <td class="px-3 py-2 text-gray-600">Wccftech首发，24h内多家跟进</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://www.tomshardware.com/tech-industry/semiconductors/tsmc-is-reportedly-hiking-prices-for-all-advanced-nodes-accounting-for-74-percent-of-the-companys-wafer-business-nvidia-amd-apple-qualcomm-and-others-will-face-higher-wafer-costs" target="_blank" class="src-link">台积电先进制程2026年涨价5%~10%，2027年再涨最高10%，波及英伟达/苹果/AMD/高通</a></td>
              <td class="px-3 py-2 text-gray-600">Tom's Hardware / TrendForce</td>
              <td class="px-3 py-2 text-gray-600">Tom's Hardware编辑团队</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-16~18</td>
              <td class="px-3 py-2 text-gray-600">行业核心报道，被广泛引用</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 供应端 -->
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2 h-5 rounded-sm bg-orange-500 inline-block"></span>
        <h3 class="font-bold text-gray-900 text-base">供应端 — 产能回流中国大陆，芯片交期拉长至半年</h3>
        <span class="text-xs px-2 py-0.5 rounded-full tag-orange ml-auto">🟠 重要</span>
      </div>
      <div class="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-3 text-sm text-orange-900 leading-relaxed">
        据DigiTimes援引供应链人士：多家台系及美系笔记本制造商正将产能从东南亚转回中国大陆，与"China+1"策略形成方向性逆转。同时CPU、PCB、功率IC等核心物料紧缺，头部工业PC厂商交期已拉长至 <strong>半年</strong>，大量订单向后递延至2027年。芯片供应配额已成为中小厂商生死线，假冒翻新芯片流入风险上升。
      </div>
      <div class="overflow-x-auto scrollbar-thin">
        <table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr class="text-gray-600">
              <th class="text-left px-3 py-2 font-semibold w-5/12">内容摘要</th>
              <th class="text-left px-3 py-2 font-semibold">平台</th>
              <th class="text-left px-3 py-2 font-semibold">媒体/来源</th>
              <th class="text-left px-3 py-2 font-semibold whitespace-nowrap">时间</th>
              <th class="text-left px-3 py-2 font-semibold">热度</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="px-3 py-2"><a href="http://www.titan24.com/uRtstsKpqO" target="_blank" class="src-link">多家台系/美系笔记本制造商将产能从东南亚转回中国大陆（DigiTimes消息）</a></td>
              <td class="px-3 py-2 text-gray-600">体坛加（titan24.com）</td>
              <td class="px-3 py-2 text-gray-600">DigiTimes 供应链报道</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-18</td>
              <td class="px-3 py-2 text-gray-600">多平台转载</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://www.idc.com/resource-center/blog/%E5%B7%A5%E4%B8%9A-pc-16-8-%E9%AB%98%E5%A2%9E%E9%95%BF%EF%BC%9A%E7%9C%9F%E5%AE%9E%E5%A2%9E%E9%87%8F%E4%B8%8E%E9%9C%80%E6%B1%82%E9%80%8F%E6%94%AF%E5%B9%B6%E5%AD%98%EF%BC%8C%E4%B8%89%E5%A4%A7%E7%AD%96/" target="_blank" class="src-link">中国工业PC Q2出货+16.8%，但CPU/PCB/功率IC交期拉长至半年，大量订单向后递延至2027年</a></td>
              <td class="px-3 py-2 text-gray-600">IDC官网博客</td>
              <td class="px-3 py-2 text-gray-600">IDC中国研究团队</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-20</td>
              <td class="px-3 py-2 text-gray-600">IDC官方发布，权威性高</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://finance.sina.com.cn/tech/discovery/2026-09-16/doc-inirzfsy2899323.shtml" target="_blank" class="src-link">没有配额就出局：中小厂商供应链议价能力丧失，假冒芯片流入，行业等待2028年产能释放</a></td>
              <td class="px-3 py-2 text-gray-600">快科技 / 新浪财经</td>
              <td class="px-3 py-2 text-gray-600">快科技（原载路透社）</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-16</td>
              <td class="px-3 py-2 text-gray-600">浏览量2,560次；多平台转载</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 市场需求端 -->
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2 h-5 rounded-sm bg-blue-500 inline-block"></span>
        <h3 class="font-bold text-gray-900 text-base">市场需求端 — 出货量下滑，提价保收入；工业PC高增长含隐患</h3>
        <span class="text-xs px-2 py-0.5 rounded-full tag-orange ml-auto">🟠 重要</span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
        <div class="bg-white rounded-lg p-3 border border-gray-200 text-center">
          <div class="text-xl font-bold text-red-500">−4.2%</div>
          <div class="text-xs text-gray-500 mt-0.5">Q2全球笔记本出货</div>
          <div class="text-xs text-gray-400">5,170万台</div>
        </div>
        <div class="bg-white rounded-lg p-3 border border-gray-200 text-center">
          <div class="text-xl font-bold text-green-600">+20%</div>
          <div class="text-xs text-gray-500 mt-0.5">PC均价预计涨幅</div>
          <div class="text-xs text-gray-400">同类产品线最高+40%</div>
        </div>
        <div class="bg-white rounded-lg p-3 border border-gray-200 text-center">
          <div class="text-xl font-bold text-blue-600">+16.8%</div>
          <div class="text-xs text-gray-500 mt-0.5">中国工业PC Q2出货</div>
          <div class="text-xs text-gray-400">含大量前置备货</div>
        </div>
        <div class="bg-white rounded-lg p-3 border border-gray-200 text-center">
          <div class="text-xl font-bold text-yellow-600">25.1%</div>
          <div class="text-xs text-gray-500 mt-0.5">消费者第一时间购AI新品</div>
          <div class="text-xs text-gray-400">B站/CBNData调查</div>
        </div>
      </div>
      <div class="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-3 text-sm text-blue-900 leading-relaxed">
        全球PC市场"量跌价涨"格局确立：出货量降4%，但均价涨20%~40%，厂商收入维稳。联想（份额25%）稳居第一，苹果增长最强，惠普同比降9%。中国工业PC Q2出货+16.8%，但IDC明确指出其中混杂大量"涨价前置备货"需求，<strong>2027年上半年增速大概率承压</strong>。AI硬件方面，36氪分析指出"AI让硬件卖得更贵，但增长消失了"——国补退坡后需求真实性存疑。
      </div>
      <div class="overflow-x-auto scrollbar-thin">
        <table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr class="text-gray-600">
              <th class="text-left px-3 py-2 font-semibold w-5/12">内容摘要</th>
              <th class="text-left px-3 py-2 font-semibold">平台</th>
              <th class="text-left px-3 py-2 font-semibold">媒体/来源</th>
              <th class="text-left px-3 py-2 font-semibold whitespace-nowrap">时间</th>
              <th class="text-left px-3 py-2 font-semibold">热度</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="px-3 py-2"><a href="https://www.199it.com/archives/1839252.html" target="_blank" class="src-link">Q2全球PC出货同比降3.6%（笔记本降4.2%）；PC均价涨20%~40%；联想/惠普/戴尔/苹果/华硕五强格局</a></td>
              <td class="px-3 py-2 text-gray-600">199IT</td>
              <td class="px-3 py-2 text-gray-600">Omdia 数据</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-16</td>
              <td class="px-3 py-2 text-gray-600">B2B专业媒体，行业决策参考</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://www.idc.com/resource-center/blog/%E5%B7%A5%E4%B8%9A-pc-16-8-%E9%AB%98%E5%A2%9E%E9%95%BF%EF%BC%9A%E7%9C%9F%E5%AE%9E%E5%A2%9E%E9%87%8F%E4%B8%8E%E9%9C%80%E6%B1%82%E9%80%8F%E6%94%AF%E5%B9%B6%E5%AD%98%EF%BC%8C%E4%B8%89%E5%A4%A7%E7%AD%96/" target="_blank" class="src-link">中国工业PC Q2出货+16.8%；IDC预警前置需求透支，2027年上半年增速承压；三大应对策略</a></td>
              <td class="px-3 py-2 text-gray-600">IDC官网博客</td>
              <td class="px-3 py-2 text-gray-600">IDC中国研究团队</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-20</td>
              <td class="px-3 py-2 text-gray-600">IDC官方发布，权威性高</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://36kr.com/p/3984460893280134" target="_blank" class="src-link">AI让智能硬件卖得更贵但增长消失：国补退坡后需求失速，仅25.1%消费者第一时间出手</a></td>
              <td class="px-3 py-2 text-gray-600">36氪</td>
              <td class="px-3 py-2 text-gray-600">消费观象局·关樾</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-15</td>
              <td class="px-3 py-2 text-gray-600">收藏6；点赞31；评论0</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://finance.sina.com.cn/tech/digi/2026-09-20/doc-inismvph6840213.shtml" target="_blank" class="src-link">IDC：上半年中国PC显示器出货1,430万台，同比下滑2.2%；华为份额大涨3.2%</a></td>
              <td class="px-3 py-2 text-gray-600">21经济网 / 凤凰网科技</td>
              <td class="px-3 py-2 text-gray-600">IDC 数据</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-20</td>
              <td class="px-3 py-2 text-gray-600">多家财经媒体同步报道</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 政策端 -->
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2 h-5 rounded-sm bg-purple-500 inline-block"></span>
        <h3 class="font-bold text-gray-900 text-base">政策端 — 十五五规划落地，合规门槛全面提升</h3>
        <span class="text-xs px-2 py-0.5 rounded-full tag-yellow ml-auto">🟡 持续关注</span>
      </div>
      <div class="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-3 text-sm text-purple-900 leading-relaxed">
        9月15日，工信部+发改委联合发布《电子信息制造业发展"十五五"规划》，明确AI电脑为重点方向，目标2030年行业收入突破 <strong>30万亿元</strong>，研发投入强度达3.5%。发改委要求 <strong>2027年前国产化率超80%</strong>，教育部要求2026年底前完成全国中小学笔记本配备。新版笔记本能效标准已落地，入门级独立显卡笔记本被纳入。中消协数据：2025年笔记本投诉 <strong>同比增35%</strong>，创近五年新高，监管收紧趋势明确。
      </div>
      <div class="overflow-x-auto scrollbar-thin">
        <table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr class="text-gray-600">
              <th class="text-left px-3 py-2 font-semibold w-5/12">内容摘要</th>
              <th class="text-left px-3 py-2 font-semibold">平台</th>
              <th class="text-left px-3 py-2 font-semibold">媒体/来源</th>
              <th class="text-left px-3 py-2 font-semibold whitespace-nowrap">时间</th>
              <th class="text-left px-3 py-2 font-semibold">热度</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="px-3 py-2"><a href="https://wap.miit.gov.cn/gyhxxhb/jgsj/dzxxsnew/gzdt/art/2026/art_ee9b4f7f88c54c278dbab522a2e6b4bd.html" target="_blank" class="src-link">工信部+发改委联合发布《电子信息制造业"十五五"规划》：AI电脑列重点方向，2030年收入目标30万亿，国产替代为核心任务</a></td>
              <td class="px-3 py-2 text-gray-600">工信部官网</td>
              <td class="px-3 py-2 text-gray-600">工业和信息化部（官方原文）</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-15</td>
              <td class="px-3 py-2 text-gray-600">政策级重磅文件，各大媒体同步报道</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://news.qq.com/rain/a/20260915A07GGE00" target="_blank" class="src-link">规划解读：AI手机/AI电脑等新品类持续涌现；端侧大模型、AI芯片、高带宽内存为关键技术方向</a></td>
              <td class="px-3 py-2 text-gray-600">腾讯新闻（九派财经）</td>
              <td class="px-3 py-2 text-gray-600">中国电子信息产业发展研究院</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-15</td>
              <td class="px-3 py-2 text-gray-600">政策解读类，广泛传播</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://www.ttplus.cn/blog/wiki/2026-09-17/dWWe4awZ-WDm3vJ/" target="_blank" class="src-link">工信部推动笔记本能效合规升级，入门级独立显卡笔记本纳入新版能效标准</a></td>
              <td class="px-3 py-2 text-gray-600">体坛加</td>
              <td class="px-3 py-2 text-gray-600">工信部节能与综合利用司</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-17</td>
              <td class="px-3 py-2 text-gray-600">行业强制性合规要求</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://www.ttplus.cn/wiki-iVWILmj.html" target="_blank" class="src-link">中消协：2025年全国笔记本投诉4.2万件，同比+35%，创近五年新高</a></td>
              <td class="px-3 py-2 text-gray-600">体坛加</td>
              <td class="px-3 py-2 text-gray-600">中国消费者协会</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-18</td>
              <td class="px-3 py-2 text-gray-600">监管收紧信号</td>
            </tr>
            <tr>
              <td class="px-3 py-2"><a href="https://www.chinairn.com/hyzx/20260918/181315790.shtml" target="_blank" class="src-link">2026中国笔记本电脑产业：技术智能化、场景多元化、产业链协同化、合规严格化四大特征深度分析</a></td>
              <td class="px-3 py-2 text-gray-600">中研网</td>
              <td class="px-3 py-2 text-gray-600">中研普华产业研究院·彭文豪</td>
              <td class="px-3 py-2 text-gray-600 whitespace-nowrap">09-18</td>
              <td class="px-3 py-2 text-gray-600">阅读量80次（B2B专业媒体）</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div><!-- end industry -->

  <!-- Footer -->
  <div class="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-400 flex flex-wrap justify-between gap-2">
    <div>数据来源：Omdia · IDC · DigiTimes · 快科技 · 新浪财经 · 36氪 · 中研网 · 工信部官网 · Notebookcheck · Shattered.io · MacRumors · Android Central</div>
    <div>2026年9月14日—9月20日 &nbsp;|&nbsp; 制作于 2026.09.21</div>
  </div>

</div>
</body>
</html>

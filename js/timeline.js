/* ===== CONSTANTS ===== */
const NAME_W     = 170;
let   HDR_H      = 82;    // dynamic: computed from MAX_EV_LANES_VISIBLE
const ROW_H      = 28;
const RULER_H    = 26;    // height per ruler band row (天皇・将軍・執権 etc.)
const EV_LANE_H  = 20;    // height per event label lane
const EV_TICK_H  = 20;    // year-tick area at the bottom of the header
const EV_BASE_FONT = 11;  // base font size for event labels
const MAX_EV_LANES_VISIBLE = 3;  // イベントエリアに同時表示するレーン数（固定）

/* ===== THEME ===== */
// Read a CSS custom property from body (reflects current dark/light mode)
function cv(name) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

// Format a year value; supports BCE (negative years) when dataset has bce:true
function fmtYear(y) {
  const ds = DATASETS[currentKey];
  if (ds && ds.bce && y <= 0) return `前${Math.abs(y)}年`;
  return `${y}年`;
}

// Estimate pixel width of an event label string
function evLabelW(text, fontSize) {
  return text.length * fontSize * 0.60 + 12;
}

// Return an array of ruler band descriptors for a dataset.
// If ds.rulers exists, use it directly; otherwise fall back to emperors/retired.
function getRulers(ds) {
  if (ds.rulers && ds.rulers.length > 0) return ds.rulers;
  const out = [];
  if (ds.emperors && ds.emperors.length > 0)
    out.push({ label: ds.empLabel || '天皇', entries: ds.emperors });
  if (ds.retired && ds.retired.length > 0)
    out.push({ label: ds.retLabel || '上皇', entries: ds.retired });
  return out;
}

// Compute header height — fixed to MAX_EV_LANES_VISIBLE lanes (event area is scrollable)
function computeHeaderHeight(ds, chartW) {
  const base = EV_TICK_H;
  if (!ds.events || ds.events.length === 0) return base + EV_LANE_H;
  return base + MAX_EV_LANES_VISIBLE * EV_LANE_H;
}

let currentTheme = localStorage.getItem('tl-theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  document.body.classList.toggle('light', theme === 'light');
  localStorage.setItem('tl-theme', theme);
  const icon  = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (icon)  icon.textContent  = theme === 'light' ? '☀️' : '🌙';
  if (label) label.textContent = theme === 'light' ? 'ダークモードに切替' : 'ライトモードに切替';
  buildChart();   // redraw chart with new colors
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/* ===== STATE ===== */
let currentKey  = 'kamakura';
let visibleCats = {};
let curPersons  = [];
let curT        = d3.zoomIdentity;
let sortMode    = 'birth';      // 'birth' | 'category'
let groupStarts = new Set();    // row indices that begin a new category group
let evScrollY   = 0;            // イベントエリアのスクロール量（px）
let evTotalLanes = 0;           // 現在のイベントレーン総数（drawAxisPanel が設定）
let evHitItems  = [];           // イベントラベルのヒット範囲（drawAxisPanel が設定）
let kXExtra     = 1.0;          // 横軸のみの追加拡大率（横ズーム機能）

function setSort(mode) {
  sortMode = mode;
  document.getElementById('sort-birth').classList.toggle('seg-active', mode === 'birth');
  document.getElementById('sort-cat').classList.toggle('seg-active', mode === 'category');
  buildChart();
}

let svgEl, contentG, namesG, axisG, zoomBehavior, xScale;
let curChartH = 0;      // visible chart height (below header)
let curTotalDataH = 0;  // total data height (persons) × ROW_H
let curChartW = 0;      // visible chart width (right of names panel)
let selectedYear = null; // currently selected year (for age panel)

/* ========================================================
   AGE PANEL
   ======================================================== */

// モバイル判定（< 600px ではボトムシートになるため幅に影響しない）
function isMobile() { return window.innerWidth < 600; }

function selectYear(year) {
  const wasOpen = selectedYear !== null;
  selectedYear = year;
  renderAgePanel();
  redrawFixed();   // refresh selection line
  // デスクトップ: パネルが右に展開してチャート幅が変わるので再描画
  // モバイル: ボトムシートなのでチャート幅は変わらない → スキップ
  if (!wasOpen && !isMobile()) setTimeout(buildChart, 240);
}

function closeAgePanel() {
  selectedYear = null;
  document.getElementById('age-panel').classList.remove('open');
  redrawFixed();
  // デスクトップのみ再描画
  if (!isMobile()) setTimeout(buildChart, 240);
}

function renderAgePanel() {
  const panel   = document.getElementById('age-panel');
  const yearEl  = document.getElementById('age-panel-year');
  const listEl  = document.getElementById('age-panel-list');

  panel.classList.add('open');
  yearEl.textContent = fmtYear(selectedYear);
  listEl.innerHTML = '';

  const ds = DATASETS[currentKey];

  // Events occurring in the selected year
  const events = ds.events.filter(ev => ev.year === selectedYear);
  if (events.length > 0) {
    const evSec = document.createElement('div');
    evSec.className = 'age-ev-sec';
    events.forEach(ev => {
      const row = document.createElement('div');
      row.className = 'age-ev-item';
      row.innerHTML = `<span class="age-ev-icon">⚡</span><span class="age-ev-name">${ev.name}</span>`;
      evSec.appendChild(row);
    });
    listEl.appendChild(evSec);
  }

  // Only persons alive at selectedYear, sorted oldest first
  const alive = curPersons
    .filter(p => p.birth <= selectedYear && selectedYear <= p.death)
    .sort((a, b) => (selectedYear - b.birth) - (selectedYear - a.birth));

  alive.forEach(p => {
    const color  = ds.categories[p.cat] || '#888';
    const age    = selectedYear - p.birth;

    // Active serve roles at selectedYear
    const serves = Array.isArray(p.serve) ? p.serve : (p.serve ? [p.serve] : []);
    const activeRoles = serves
      .filter(sv => sv.start <= selectedYear && selectedYear <= sv.end)
      .map(sv => sv.role);
    const roleSuffix = activeRoles.length > 0
      ? `<span class="age-role">(${activeRoles.join('・')})</span>` : '';

    const item = document.createElement('div');
    item.className = 'age-item age-alive';
    item.innerHTML =
      `<span class="age-dot" style="background:${color}"></span>` +
      `<span class="age-name">${p.name}${roleSuffix}</span>` +
      `<span class="age-val">${age}歳</span>`;
    listEl.appendChild(item);
  });
}

/* ===== HAMBURGER MENU ===== */
function toggleMenu(e) {
  e.stopPropagation();
  document.getElementById('hamburger-menu').classList.toggle('hidden');
}
function closeMenu() {
  document.getElementById('hamburger-menu').classList.add('hidden');
}
// Close menu when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('#hamburger-btn') && !e.target.closest('#hamburger-menu')) {
    closeMenu();
  }
});


/* ========================================================
   SIDEBAR
   ======================================================== */
function renderSidebar() {
  const list = document.getElementById('era-list');
  list.innerHTML = '';
  Object.keys(DATASETS).forEach(key => {
    const d  = DATASETS[key];
    const el = document.createElement('div');
    el.className = 'era-item' + (key === currentKey ? ' active' : '');
    el.innerHTML =
      `<div class="era-name">${d.name}</div>` +
      `<div class="era-period">${d.period}</div>`;
    el.onclick = () => { visibleCats = {}; loadDataset(key); };
    list.appendChild(el);
  });
}

function renderFilters(ds) {
  const sec = document.getElementById('filters');
  sec.innerHTML = '<h3>カテゴリ フィルター</h3>';
  Object.entries(ds.categories).forEach(([cat, color]) => {
    if (visibleCats[cat] === undefined) visibleCats[cat] = true;
    const lbl = document.createElement('label');
    lbl.className = 'filter-check';
    lbl.innerHTML =
      `<input type="checkbox" ${visibleCats[cat] ? 'checked' : ''}>` +
      `<span class="filter-dot" style="background:${color}"></span>${cat}`;
    lbl.querySelector('input').onchange = e => {
      visibleCats[cat] = e.target.checked;
      buildChart();
    };
    sec.appendChild(lbl);
  });
}

function renderLegend(ds) {
  const leg = document.getElementById('legend');
  leg.innerHTML = '';
  Object.entries(ds.categories).forEach(([name, color]) => {
    leg.innerHTML +=
      `<div class="legend-item"><span class="legend-dot" style="background:${color}"></span>${name}</div>`;
  });
}

/* ========================================================
   SIDEBAR TOGGLE
   ======================================================== */
let sidebarOpen = true;
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sb        = document.getElementById('sidebar');
  const expandBtn = document.getElementById('expand-btn');
  sb.classList.toggle('collapsed', !sidebarOpen);
  // expand-btn はサイドバーが閉じているときだけ表示
  expandBtn.style.display = sidebarOpen ? 'none' : 'flex';
  setTimeout(buildChart, 270);
}

/* ========================================================
   MAIN CHART
   ======================================================== */
function loadDataset(key) {
  currentKey = key;
  // URL ハッシュを更新（ブックマーク・共有用）
  if (location.hash !== '#' + key) location.hash = '#' + key;
  renderSidebar();   // サイドバーの選択状態を更新
  const ds = DATASETS[key];
  document.getElementById('t-title').textContent = ds.name;
  // Reset year selection when switching datasets
  selectedYear = null;
  document.getElementById('age-panel').classList.remove('open');
  renderFilters(ds);
  renderLegend(ds);
  // Reset zoom and event scroll when switching datasets
  curT = d3.zoomIdentity;
  evScrollY = 0;
  kXExtra = 1.0;
  buildChart();
}

/* ── Rebuild chart SVG (preserves zoom & selectedYear) ── */
function buildChart() {
  const ds = DATASETS[currentKey];
  const wrap = document.getElementById('chart-wrap');
  wrap.innerHTML = '';

  // Filter + sort persons
  curPersons = ds.persons
    .filter(p => visibleCats[p.cat] !== false)
    .slice()
    .sort((a, b) => {
      if (sortMode === 'category') {
        const cc = (a.cat || '').localeCompare(b.cat || '', 'ja');
        if (cc !== 0) return cc;
      }
      return a.birth - b.birth;
    });

  // Compute category group boundaries (used by drawBars & drawNamesPanel)
  groupStarts = new Set();
  if (sortMode === 'category') {
    let prevCat = null;
    curPersons.forEach((p, i) => {
      if (p.cat !== prevCat) { groupStarts.add(i); prevCat = p.cat; }
    });
  }

  const rect = wrap.getBoundingClientRect();
  const W = rect.width, H = rect.height;
  if (W < 20 || H < 20) return;

  /* ── Year range ── */
  const allY = [
    ...curPersons.flatMap(p => [p.birth, p.death]),
    ...ds.events.map(e => e.year),
    ...(ds.emperors || []).flatMap(e => [e.start, e.end]),
  ];
  const yMin = Math.min(...allY) - 2;
  const yMax = Math.max(...allY) + 2;

  const chartW = W - NAME_W;   // chart content width in screen px

  // xScale maps year → chart content x (0 = left edge of chart)
  // (must be computed BEFORE computeHeaderHeight, which uses xScale)
  xScale = d3.scaleLinear().domain([yMin, yMax]).range([0, chartW]);

  // Dynamic header height: tall enough for all event lanes at default zoom
  HDR_H = computeHeaderHeight(ds, chartW);
  const chartH = H - HDR_H;    // chart content height in screen px

  // Store for scroll clamping
  curChartH     = chartH;
  curTotalDataH = curPersons.length * ROW_H;
  curChartW     = chartW;

  /* ── SVG ── */
  svgEl = d3.select(wrap).append('svg')
    .attr('width', W).attr('height', H)
    .style('display', 'block');

  /* ── Clip paths ── */
  const defs = svgEl.append('defs');
  // Chart body clip
  defs.append('clipPath').attr('id', 'clip-chart')
    .append('rect')
      .attr('x', NAME_W).attr('y', HDR_H)
      .attr('width', chartW).attr('height', chartH);
  // Event area clip (hides overflow during scroll)
  const evAreaH = HDR_H - EV_TICK_H;
  defs.append('clipPath').attr('id', 'clip-ev')
    .append('rect')
      .attr('x', NAME_W).attr('y', 0)
      .attr('width', chartW).attr('height', evAreaH);

  /* ── Content group (zoomable, clipped) ──
       Items inside are drawn as if origin = top-left of chart area.
       Transform: translate(NAME_W + t.x, HDR_H + t.y) scale(t.k)
       ─> screen_x = NAME_W + t.x + data_x * t.k
       ─> screen_y = HDR_H  + t.y + data_y * t.k          */
  contentG = svgEl.append('g').attr('clip-path', 'url(#clip-chart)');
  const cg = contentG.append('g').attr('class', 'cg');
  applyContentTransform(cg, curT);

  /* ── Draw chart bars into cg ── */
  drawBars(cg, ds, yMin, yMax, chartW, chartH);

  /* ── Fixed overlay groups (always on top) ── */
  namesG = svgEl.append('g');   // no transform — uses absolute SVG coords
  axisG  = svgEl.append('g');   // no transform

  /* ── Corner fill (top-left square) ── */
  svgEl.append('rect')
    .attr('width', NAME_W).attr('height', HDR_H)
    .attr('fill', cv('--chart-panel'));

  /* Initial draw of fixed panels */
  redrawFixed();

  /* ── Zoom behaviour (drag to pan, buttons/pinch to zoom)
        ホイール = スクロール（上下 / Shift+水平）
        ズームはツールバーボタン・キーボード・トラックパッドピンチのみ ── */
  // Track mousedown position to distinguish click from drag
  let _clMdX = 0, _clMdY = 0;

  zoomBehavior = d3.zoom()
    .scaleExtent([0.15, 20])
    // ホイールイベントをズームに使わず、ドラッグとタッチピンチのみ許可
    .filter(event => {
      if (event.type === 'wheel') return false;   // ← ホイールはズームしない
      return !event.ctrlKey && !event.button;
    })
    .on('start', event => {
      // Record pointer position at gesture start (mousedown / touchstart)
      const src = event.sourceEvent;
      if (!src) return;
      if (src.type === 'touchstart') {
        const t = src.touches && src.touches[0];
        if (t) { _clMdX = t.clientX; _clMdY = t.clientY; }
      } else {
        _clMdX = src.clientX; _clMdY = src.clientY;
      }
    })
    .on('zoom', event => {
      let t = event.transform;
      // Clamp vertical: no blank space above first row or below last row
      const minY = Math.min(0, curChartH - curTotalDataH * t.k);
      const clampedY = Math.max(minY, Math.min(0, t.y));
      // Clamp horizontal: no blank space left of data start or right of data end
      const minX = Math.min(0, curChartW - curChartW * t.k * kXExtra);
      const clampedX = Math.max(minX, Math.min(0, t.x));
      if (clampedY !== t.y || clampedX !== t.x) {
        t = d3.zoomIdentity.scale(t.k).translate(clampedX / t.k, clampedY / t.k);
      }
      curT = t;
      applyContentTransform(svgEl.select('.cg'), curT);
      redrawFixed();
      document.getElementById('zoom-info').textContent =
        Math.round(curT.k * 100) + '%';
    })
    .on('end', event => {
      // Detect tap/click: gesture ended near where it started (no significant drag)
      const src = event.sourceEvent;
      if (!src) return;

      // Resolve end coordinates for mouse and touch
      let endX, endY;
      if (src.type === 'touchend') {
        const t = src.changedTouches && src.changedTouches[0];
        if (!t) return;
        endX = t.clientX; endY = t.clientY;
      } else if (src.type === 'mouseup') {
        endX = src.clientX; endY = src.clientY;
      } else {
        return;
      }

      if (Math.abs(endX - _clMdX) > 8 || Math.abs(endY - _clMdY) > 8) return;
      const rect = svgEl.node().getBoundingClientRect();
      const px = endX - rect.left;
      const py = endY - rect.top;

      // Names panel click → select clicked person's birth year
      if (px < NAME_W) {
        if (py >= HDR_H) {
          const dataY = (py - HDR_H - curT.y) / curT.k;
          const idx   = Math.floor(dataY / ROW_H);
          if (idx >= 0 && idx < curPersons.length) {
            selectYear(curPersons[idx].birth);
          }
        }
        return;
      }

      // Snap to an event year if tap is within SNAP_PX of its vertical line
      const SNAP_PX = src.type === 'touchend' ? 16 : 12;
      let year = null;
      for (const ev of DATASETS[currentKey].events) {
        const evSx = NAME_W + curT.x + xScale(ev.year) * curT.k * kXExtra;
        if (Math.abs(px - evSx) <= SNAP_PX) { year = ev.year; break; }
      }
      // ラベルテキストの幅内をクリックした場合もそのイベント年にスナップ
      if (year === null) {
        for (const hit of evHitItems) {
          if (px >= hit.sx - hit.w / 2 && px <= hit.sx + hit.w / 2) {
            year = hit.evYear; break;
          }
        }
      }
      if (year === null) {
        const dataX = (px - NAME_W - curT.x) / (curT.k * kXExtra);
        year = Math.round(xScale.invert(dataX));
      }
      selectYear(year);
    });

  svgEl.call(zoomBehavior);

  /* ── ホイール → スクロール ──
        イベントエリア上 : イベントを縦スクロール
        通常ホイール     : チャートを縦スクロール
        Shift+ホイール   : チャートを横スクロール ── */
  // evAreaH は上の defs セクションで宣言済み

  svgEl.on('wheel.scroll', function(event) {
    event.preventDefault();
    const svgRect = svgEl.node().getBoundingClientRect();
    const mouseY  = event.clientY - svgRect.top;

    // ── Ctrl+ホイール → 横軸のみ拡大縮小 ──
    if (event.ctrlKey) {
      const delta  = event.deltaMode === 1 ? event.deltaY * ROW_H : event.deltaY;
      const factor = delta > 0 ? 1 / 1.15 : 1.15;
      const cx = event.clientX - svgRect.left;
      zoomXBy(factor, cx);
      return;
    }

    // ── イベントエリア上のホイール → イベントスクロール ──
    if (mouseY < evAreaH && !event.shiftKey) {
      const delta = event.deltaMode === 1 ? event.deltaY * EV_LANE_H : event.deltaY;
      const totalEvH  = evTotalLanes * EV_LANE_H;
      const maxScroll = Math.max(0, totalEvH - evAreaH);
      evScrollY = Math.max(0, Math.min(evScrollY + delta, maxScroll));
      redrawFixed();
      return;
    }

    // ── チャートエリアのホイール → チャートスクロール ──
    const delta = event.deltaMode === 1 ? event.deltaY * ROW_H : event.deltaY;
    const hDelta = event.deltaMode === 1 ? event.deltaX * ROW_H : event.deltaX;

    const dx = event.shiftKey ? -delta : -hDelta;
    const dy = event.shiftKey ? 0      : -delta;

    let newT = curT.translate(dx, dy);

    const minY = Math.min(0, curChartH - curTotalDataH * newT.k);
    const clampedY = Math.max(minY, Math.min(0, newT.y));
    const minX = Math.min(0, curChartW - curChartW * newT.k * kXExtra);
    const clampedX = Math.max(minX, Math.min(0, newT.x));
    if (clampedY !== newT.y || clampedX !== newT.x) {
      newT = d3.zoomIdentity.scale(newT.k).translate(clampedX / newT.k, clampedY / newT.k);
    }

    svgEl.call(zoomBehavior.transform, newT);
  }, { passive: false });

  /* ── タッチ → イベントエリアスクロール（モバイル） ── */
  let _evTouchY = null;
  svgEl.on('touchstart.evscroll', function(event) {
    const t0 = event.touches[0];
    const svgRect = svgEl.node().getBoundingClientRect();
    if (t0.clientY - svgRect.top < evAreaH) {
      _evTouchY = t0.clientY;
    } else {
      _evTouchY = null;
    }
  }, { passive: true });

  svgEl.on('touchmove.evscroll', function(event) {
    if (_evTouchY === null) return;
    const t0 = event.touches[0];
    const dy = _evTouchY - t0.clientY;
    _evTouchY = t0.clientY;
    const totalEvH  = evTotalLanes * EV_LANE_H;
    const maxScroll = Math.max(0, totalEvH - evAreaH);
    evScrollY = Math.max(0, Math.min(evScrollY + dy, maxScroll));
    redrawFixed();
  }, { passive: true });

}

/* ========================================================
   HORIZONTAL-ONLY ZOOM
   cx: SVG左端からのスクリーンX座標（ズームの中心）
   ======================================================== */
function zoomXBy(factor, cx) {
  const oldKX = kXExtra;
  const newKX = Math.max(0.1, Math.min(50, oldKX * factor));

  // cx を固定点として curT.x を調整
  // 変換前: px = NAME_W + curT.x + xScale(data) * curT.k * oldKX
  // 変換後: px = NAME_W + newTx + xScale(data) * curT.k * newKX
  // → newTx = curT.x + (cx - NAME_W) * (1 - newKX / oldKX)
  const chartX = cx - NAME_W;
  const newTx  = curT.x + chartX * (1 - newKX / oldKX);

  // 横方向クランプ
  const minX      = Math.min(0, curChartW - curChartW * curT.k * newKX);
  const clampedX  = Math.max(minX, Math.min(0, newTx));

  kXExtra = newKX;

  // curT.x のみ更新（k と y は維持）
  curT = d3.zoomIdentity.translate(clampedX / curT.k, curT.y / curT.k).scale(curT.k);
  svgEl.call(zoomBehavior.transform, curT);

  // バーテキストの横伸びを補正（data-x を元に x と transform を更新）
  svgEl.selectAll('.bar-text').each(function() {
    const el = d3.select(this);
    const dx = +el.attr('data-x');
    el.attr('x', dx * kXExtra)
      .attr('transform', `scale(${1 / kXExtra},1)`);
  });
  // 生年・没年ドットの横伸びを補正（data-cx を元に cx と transform を更新）
  svgEl.selectAll('.bar-dot').each(function() {
    const el = d3.select(this);
    const dcx = +el.attr('data-cx');
    el.attr('cx', dcx * kXExtra)
      .attr('transform', `scale(${1 / kXExtra},1)`);
  });
}

/* Apply transform to the content group
   X軸は t.k * kXExtra でスケール、Y軸は t.k のみ（横ズーム対応） */
function applyContentTransform(sel, t) {
  sel.attr('transform',
    `translate(${NAME_W + t.x},${HDR_H + t.y}) scale(${t.k * kXExtra},${t.k})`
  );
}

/* ── Draw bars, events, grid ── */
function drawBars(cg, ds, yMin, yMax, chartW, chartH) {
  const totalDataH = curPersons.length * ROW_H;

  /* Vertical grid lines */
  const span = yMax - yMin;
  const gStep = span > 300 ? 50 : span > 100 ? 10 : 5;
  for (let y = Math.ceil(yMin / gStep) * gStep; y <= yMax; y += gStep) {
    cg.append('line')
      .attr('x1', xScale(y)).attr('y1', 0)
      .attr('x2', xScale(y)).attr('y2', totalDataH)
      .attr('stroke', cv('--chart-grid')).attr('stroke-width', 1);
  }

  /* Event lines — vertical dashed lines through the row area only
     (labels are drawn in the fixed header by drawAxisPanel)       */
  const ttEl = document.getElementById('tooltip');
  ds.events.forEach(ev => {
    const x = xScale(ev.year);
    cg.append('line')
      .attr('x1', x).attr('y1', 0)
      .attr('x2', x).attr('y2', totalDataH)
      .attr('stroke', cv('--chart-ev-line')).attr('stroke-width', 0.8)
      .attr('stroke-dasharray', '3,3').attr('opacity', 0.6);
  });

  /* ── Person rows ── */
  const cats = DATASETS[currentKey].categories;
  curPersons.forEach((p, i) => {
    const color = cats[p.cat] || '#888';
    const x1 = xScale(p.birth);
    const x2 = xScale(p.death);
    const barW = x2 - x1;
    const cy  = i * ROW_H + ROW_H / 2;   // row center y in data coords

    /* Category group separator line */
    if (groupStarts.has(i) && i > 0) {
      cg.append('line')
        .attr('x1', xScale(yMin) - 5).attr('y1', i * ROW_H)
        .attr('x2', xScale(yMax) + 5).attr('y2', i * ROW_H)
        .attr('stroke', color).attr('stroke-width', 0.8).attr('opacity', 0.35);
    }

    /* Row stripe */
    if (i % 2 === 0) {
      cg.append('rect')
        .attr('x', xScale(yMin) - 5).attr('y', i * ROW_H)
        .attr('width', xScale(yMax) - xScale(yMin) + 10)
        .attr('height', ROW_H)
        .attr('fill', cv('--chart-stripe'));
    }

    /* Glow shadow */
    cg.append('rect')
      .attr('x', x1).attr('y', cy - 8).attr('width', barW).attr('height', 16)
      .attr('fill', color).attr('rx', 3).attr('opacity', 0.1);

    /* Main bar — dashed outline when either date is uncertain */
    const bar = cg.append('rect')
      .attr('x', x1).attr('y', cy - 6).attr('width', barW).attr('height', 12)
      .attr('fill', color).attr('rx', 3).attr('opacity', 0.82)
      .attr('cursor', 'pointer');
    if (p.birthUncertain || p.deathUncertain) {
      bar.attr('stroke', 'rgba(255,220,50,0.7)')
         .attr('stroke-width', 1).attr('stroke-dasharray', '3,2');
    }

    /* Birth dot (hollow if uncertain) */
    cg.append('circle')
      .attr('class', 'bar-dot').attr('data-cx', x1)
      .attr('cx', x1 * kXExtra).attr('cy', cy).attr('r', 3)
      .attr('transform', `scale(${1 / kXExtra},1)`)
      .attr('fill', p.birthUncertain ? 'none' : color)
      .attr('stroke', color).attr('stroke-width', p.birthUncertain ? 1.5 : 0);
    /* Death dot (hollow if uncertain) */
    cg.append('circle')
      .attr('class', 'bar-dot').attr('data-cx', x2)
      .attr('cx', x2 * kXExtra).attr('cy', cy).attr('r', 3)
      .attr('transform', `scale(${1 / kXExtra},1)`)
      .attr('fill', '#fff').attr('stroke', color).attr('stroke-width', 1.5);

    /* ? marks for uncertain birth / death */
    if (p.birthUncertain) {
      const _x = x1 - 3;
      cg.append('text')
        .attr('class', 'bar-text').attr('data-x', _x)
        .attr('x', _x * kXExtra).attr('y', cy + 3).attr('text-anchor', 'end')
        .attr('transform', `scale(${1 / kXExtra},1)`)
        .attr('fill', 'rgba(255,220,50,0.95)').attr('font-size', 9).attr('font-weight', 700)
        .attr('pointer-events', 'none').text('?');
    }
    if (p.deathUncertain) {
      const _x = x2 + 3;
      cg.append('text')
        .attr('class', 'bar-text').attr('data-x', _x)
        .attr('x', _x * kXExtra).attr('y', cy + 3).attr('text-anchor', 'start')
        .attr('transform', `scale(${1 / kXExtra},1)`)
        .attr('fill', 'rgba(255,220,50,0.95)').attr('font-size', 9).attr('font-weight', 700)
        .attr('pointer-events', 'none').text('?');
    }

    /* Year labels on bar */
    if (barW > 18) {
      const _x = x1 + 3;
      cg.append('text')
        .attr('class', 'bar-text').attr('data-x', _x)
        .attr('x', _x * kXExtra).attr('y', cy + 3)
        .attr('transform', `scale(${1 / kXExtra},1)`)
        .attr('fill', 'rgba(255,255,255,0.45)').attr('font-size', 7)
        .attr('pointer-events', 'none')
        .text(p.birthUncertain ? '?' : fmtYear(p.birth));
    }
    if (barW > 28) {
      const _x = x2 - 3;
      cg.append('text')
        .attr('class', 'bar-text').attr('data-x', _x)
        .attr('x', _x * kXExtra).attr('y', cy + 3).attr('text-anchor', 'end')
        .attr('transform', `scale(${1 / kXExtra},1)`)
        .attr('fill', 'rgba(255,255,255,0.45)').attr('font-size', 7)
        .attr('pointer-events', 'none')
        .text(p.deathUncertain ? '?' : fmtYear(p.death));
    }
    /* Role label inside bar */
    if (p.title && barW > 55) {
      const _x = (x1 + x2) / 2;
      cg.append('text')
        .attr('class', 'bar-text').attr('data-x', _x)
        .attr('x', _x * kXExtra).attr('y', cy + 3).attr('text-anchor', 'middle')
        .attr('transform', `scale(${1 / kXExtra},1)`)
        .attr('fill', 'rgba(255,255,255,0.7)').attr('font-size', 8)
        .attr('pointer-events', 'none').text(p.title);
    }

    /* ── Serve period overlay bars ──
       Drawn on top of the main bar as narrower, brighter segments.
       p.serve: {role, start, end} or [{role, start, end}, ...]       */
    const serves = Array.isArray(p.serve) ? p.serve : (p.serve ? [p.serve] : []);
    // Colors per serve slot: golden-yellow, sky-blue, lime-green, orange
    const serveClrs = ['#ffe066', '#60cfff', '#7ef09a', '#ffaa55'];
    serves.forEach((sv, si) => {
      const sx1 = xScale(sv.start);
      const sx2 = xScale(sv.end + 1);
      const sw  = Math.max(0, sx2 - sx1);
      if (sw <= 0) return;
      const sc = serveClrs[si % serveClrs.length];
      /* Serve bar — 8 px tall, centered on row, drawn over main bar */
      cg.append('rect')
        .attr('x', sx1).attr('y', cy - 4).attr('width', sw).attr('height', 8)
        .attr('fill', sc).attr('rx', 2).attr('opacity', 0.88)
        .attr('pointer-events', 'none');
      /* Role label inside serve bar (dark text for contrast) */
      if (sw > 30 && sv.role) {
        const _x = (sx1 + sx2) / 2;
        cg.append('text')
          .attr('class', 'bar-text').attr('data-x', _x)
          .attr('x', _x * kXExtra).attr('y', cy + 3)
          .attr('text-anchor', 'middle')
          .attr('transform', `scale(${1 / kXExtra},1)`)
          .attr('fill', 'rgba(0,0,0,0.72)').attr('font-size', 7).attr('font-weight', 700)
          .attr('pointer-events', 'none').text(sv.role);
      }
    });

    /* Hover tooltip */
    bar
      .on('mouseover', function(event) {
        d3.select(this).attr('opacity', 1);
        const birthStr = (p.birthUncertain ? '?' : '') + fmtYear(p.birth) + (p.birthUncertain ? '頃' : '');
        const deathStr = (p.deathUncertain ? '?' : '') + fmtYear(p.death) + (p.deathUncertain ? '頃' : '');
        const ageNote  = (p.birthUncertain || p.deathUncertain) ? '（推定）' : '';
        const serveLines = serves.map(sv =>
          `<div class="tt-serve" style="border-left:3px solid ${serveClrs[serves.indexOf(sv) % serveClrs.length]};padding-left:5px;margin-top:3px">${sv.role}: ${fmtYear(sv.start)}〜${fmtYear(sv.end)}</div>`
        ).join('');
        ttEl.innerHTML =
          `<div class="tt-name">${p.name}${p.fictional ? ' <span class="tt-fic">(架空)</span>' : ''}</div>` +
          (p.title ? `<div class="tt-role">${p.title}</div>` : '') +
          `<div class="tt-years">${birthStr} 〜 ${deathStr}</div>` +
          `<div class="tt-age">享年 ${p.death - p.birth}歳${ageNote}</div>` +
          serveLines;
        ttEl.classList.add('show');
      })
      .on('mousemove', event => {
        ttEl.style.left = (event.clientX + 14) + 'px';
        ttEl.style.top  = (event.clientY - 10) + 'px';
      })
      .on('mouseout', function() {
        d3.select(this).attr('opacity', 0.82);
        ttEl.classList.remove('show');
      });
  });
}

/* ========================================================
   FIXED PANELS — redrawn on every zoom event
   ======================================================== */
function redrawFixed() {
  drawNamesPanel();
  drawAxisPanel();
}

/* ── Fixed names column (left) ──
   Person at row i has screen_y = HDR_H + curT.y + (i*ROW_H + ROW_H/2) * curT.k  */
function drawNamesPanel() {
  namesG.selectAll('*').remove();

  const W = +svgEl.attr('width');
  const H = +svgEl.attr('height');
  const ds = DATASETS[currentKey];

  /* Background */
  namesG.append('rect')
    .attr('width', NAME_W).attr('height', H).attr('fill', cv('--chart-panel'));

  const t = curT;

  /* ── Person rows ── */
  curPersons.forEach((p, i) => {
    const color = ds.categories[p.cat] || '#888';

    /* Screen y of this row's center */
    const sy = HDR_H + t.y + (i * ROW_H + ROW_H / 2) * t.k;
    if (sy < HDR_H - ROW_H || sy > H + ROW_H) return;  // out of view

    /* Stripe */
    if (i % 2 === 0) {
      namesG.append('rect')
        .attr('x', 0).attr('y', sy - (ROW_H * t.k) / 2)
        .attr('width', NAME_W - 1).attr('height', ROW_H * t.k)
        .attr('fill', cv('--chart-stripe'));
    }

    /* Color accent strip */
    namesG.append('rect')
      .attr('x', 0).attr('y', sy - 5).attr('width', 3).attr('height', 10)
      .attr('fill', color).attr('rx', 1);

    /* Category group header (top of each group in category-sort mode) */
    if (groupStarts.has(i)) {
      const topY = sy - (ROW_H * t.k) / 2;
      /* Colored top border */
      namesG.append('line')
        .attr('x1', 0).attr('y1', topY).attr('x2', NAME_W).attr('y2', topY)
        .attr('stroke', color).attr('stroke-width', 1.5).attr('opacity', 0.5);
      /* Category label (only if there's enough height) */
      if (ROW_H * t.k > 20) {
        namesG.append('text')
          .attr('x', 6).attr('y', topY + Math.min(8, ROW_H * t.k * 0.3))
          .attr('dominant-baseline', 'middle')
          .attr('fill', color).attr('font-size', Math.min(8, 7 * t.k)).attr('opacity', 0.75)
          .text('◆ ' + p.cat);
      }
    }

    /* Name — centered in row; append (架空) tspan for fictional characters */
    const fsSz = Math.max(9, Math.min(13, 11 * t.k));
    const nameEl = namesG.append('text')
      .attr('x', NAME_W - 8).attr('y', sy)
      .attr('text-anchor', 'end').attr('dominant-baseline', 'middle')
      .attr('font-size', fsSz).attr('font-weight', 600)
      .attr('cursor', 'pointer');
    nameEl.append('tspan').attr('fill', color).text(p.name);
    if (p.fictional) {
      nameEl.append('tspan')
        .attr('fill', 'rgba(190,140,255,0.85)')
        .attr('font-size', Math.max(6, fsSz * 0.7))
        .attr('font-weight', 400)
        .text('(架空)');
    }
  });

  /* Right border */
  namesG.append('line')
    .attr('x1', NAME_W).attr('y1', HDR_H)
    .attr('x2', NAME_W).attr('y2', H)
    .attr('stroke', cv('--border')).attr('stroke-width', 1);
}

/* ── Fixed year axis + emperor labels (top) ──
   Year y has screen_x = NAME_W + curT.x + xScale(y) * curT.k  */
function drawAxisPanel() {
  axisG.selectAll('*').remove();

  const W  = +svgEl.attr('width');
  const ds = DATASETS[currentKey];
  const chartW = W - NAME_W;
  const t = curT;

  /* ── Background ── */
  axisG.append('rect')
    .attr('x', NAME_W).attr('width', chartW).attr('height', HDR_H)
    .attr('fill', cv('--chart-panel'));

  /* ── Event lanes (horizontal labels, staggered + scrollable) ── */
  const evAreaTop    = 0;
  const evAreaBottom = HDR_H - EV_TICK_H;  // visible height of event area
  const evFontSize   = Math.min(16, Math.max(11, EV_BASE_FONT * t.k));

  // Compute screen x for each event (use all events for correct lane assignment)
  const evItemsAll = ds.events.map(ev => {
    const sx   = NAME_W + t.x + xScale(ev.year) * t.k * kXExtra;
    const text = fmtYear(ev.year) + ' ' + ev.name;
    return { ev, sx, text, w: evLabelW(text, evFontSize) };
  });
  evItemsAll.sort((a, b) => a.sx - b.sx);

  // Greedy lane assignment (all events, not just visible ones)
  const laneRights = [];
  for (const item of evItemsAll) {
    const leftEdge = item.sx - item.w / 2 - 5;
    let lane = laneRights.findIndex(r => leftEdge >= r);
    if (lane === -1) { lane = laneRights.length; laneRights.push(0); }
    laneRights[lane] = item.sx + item.w / 2;
    item.lane = lane;
  }
  evTotalLanes = Math.max(1, laneRights.length);

  // ラベルのヒット範囲を保存（ズームの end ハンドラーが参照）
  evHitItems = evItemsAll.map(item => ({
    sx: item.sx, w: item.w, evYear: item.ev.year
  }));

  // Clamp evScrollY
  const totalEvH  = evTotalLanes * EV_LANE_H;
  const maxScroll = Math.max(0, totalEvH - evAreaBottom);
  evScrollY = Math.max(0, Math.min(evScrollY, maxScroll));

  // Clip group for event labels
  const evG = axisG.append('g').attr('clip-path', 'url(#clip-ev)');

  // Draw only visible events (within viewport x and scrolled y range)
  const evItems = evItemsAll.filter(
    item => item.sx + item.w / 2 >= NAME_W && item.sx - item.w / 2 <= W
  );

  for (const item of evItems) {
    const centerY = evAreaTop + (item.lane + 0.5) * EV_LANE_H - evScrollY;

    // Thin vertical connector (clipped)
    if (centerY + evFontSize * 0.65 < evAreaBottom) {
      evG.append('line')
        .attr('x1', item.sx).attr('y1', centerY + evFontSize * 0.65)
        .attr('x2', item.sx).attr('y2', evAreaBottom)
        .attr('stroke', cv('--chart-ev-line'))
        .attr('stroke-width', 0.8).attr('opacity', 0.45);
    }

    // Downward-pointing triangle
    const ty = evAreaBottom;
    axisG.append('polygon')
      .attr('points', `${item.sx-4},${ty} ${item.sx+4},${ty} ${item.sx},${ty+6}`)
      .attr('fill', cv('--chart-ev-line')).attr('opacity', 0.85);

    // Event label (clipped)
    const isSelected = selectedYear === item.ev.year;
    evG.append('text')
      .attr('x', item.sx).attr('y', centerY)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
      .attr('fill', isSelected ? cv('--accent') : cv('--chart-ev-text'))
      .attr('font-size', evFontSize).attr('font-weight', isSelected ? 700 : 500)
      .attr('cursor', 'pointer')
      .text(item.text);
  }

  // Mini scrollbar (if event content overflows)
  if (maxScroll > 0) {
    const sbW = 3, sbX = W - sbW - 2;
    const thumbH  = Math.max(16, evAreaBottom * (evAreaBottom / totalEvH));
    const thumbTop = (evScrollY / totalEvH) * evAreaBottom;
    axisG.append('rect')   // track
      .attr('x', sbX).attr('y', 0)
      .attr('width', sbW).attr('height', evAreaBottom)
      .attr('fill', cv('--border')).attr('rx', sbW / 2).attr('opacity', 0.5);
    axisG.append('rect')   // thumb
      .attr('x', sbX).attr('y', thumbTop)
      .attr('width', sbW).attr('height', thumbH)
      .attr('fill', cv('--text-muted')).attr('rx', sbW / 2).attr('opacity', 0.8);
  }

  /* ── Year ticks (bottom strip of header) ── */
  const x0 = xScale.invert(-t.x / (t.k * kXExtra));
  const x1 = xScale.invert((chartW - t.x) / (t.k * kXExtra));
  const span = x1 - x0;
  const step = span > 500 ? 100 : span > 200 ? 50 : span > 80 ? 20 : span > 35 ? 10 : 5;

  for (let yr = Math.ceil(x0 / step) * step; yr <= x1; yr += step) {
    const sx = NAME_W + t.x + xScale(yr) * t.k * kXExtra;
    if (sx < NAME_W || sx > W) continue;
    axisG.append('line')
      .attr('x1', sx).attr('y1', HDR_H)
      .attr('x2', sx).attr('y2', HDR_H - 6)
      .attr('stroke', cv('--border-lite')).attr('stroke-width', 1);
    axisG.append('text')
      .attr('x', sx).attr('y', HDR_H - 8)
      .attr('text-anchor', 'middle').attr('fill', cv('--chart-yr-text')).attr('font-size', 10)
      .attr('cursor', 'pointer')
      .text(fmtYear(yr));
  }

  /* ── Selected year: vertical line through header + chart ── */
  if (selectedYear !== null) {
    const H  = +svgEl.attr('height');
    const sx = NAME_W + t.x + xScale(selectedYear) * t.k * kXExtra;
    if (sx >= NAME_W && sx <= W) {
      // Line through chart body
      axisG.append('line')
        .attr('x1', sx).attr('y1', HDR_H)
        .attr('x2', sx).attr('y2', H)
        .attr('stroke', cv('--accent')).attr('stroke-width', 1.5)
        .attr('stroke-dasharray', '5,3').attr('opacity', 0.65)
        .attr('pointer-events', 'none');
      // Line through header
      axisG.append('line')
        .attr('x1', sx).attr('y1', 0)
        .attr('x2', sx).attr('y2', HDR_H)
        .attr('stroke', cv('--accent')).attr('stroke-width', 1.5)
        .attr('opacity', 0.4).attr('pointer-events', 'none');
      // Year label pill in header
      const yr = fmtYear(selectedYear);
      const pillW = yr.length * 7.5 + 10;
      const pillX = Math.min(W - pillW / 2 - 4, Math.max(NAME_W + pillW / 2 + 4, sx));
      axisG.append('rect')
        .attr('x', pillX - pillW / 2).attr('y', HDR_H - 18)
        .attr('width', pillW).attr('height', 14)
        .attr('fill', cv('--accent')).attr('rx', 3).attr('opacity', 0.9);
      axisG.append('text')
        .attr('x', pillX).attr('y', HDR_H - 7)
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
        .attr('fill', '#fff').attr('font-size', 9).attr('font-weight', 700)
        .attr('pointer-events', 'none').text(yr);
    }
  }

  /* ── Bottom border ── */
  axisG.append('line')
    .attr('x1', 0).attr('y1', HDR_H)
    .attr('x2', W).attr('y2', HDR_H)
    .attr('stroke', cv('--border')).attr('stroke-width', 1);
}

/* ========================================================
   ZOOM CONTROLS
   ======================================================== */
function zoomIn()    { svgEl.transition().duration(280).call(zoomBehavior.scaleBy, 1.6); }
function zoomOut()   { svgEl.transition().duration(280).call(zoomBehavior.scaleBy, 0.625); }
function resetZoom() { svgEl.transition().duration(350).call(zoomBehavior.transform, d3.zoomIdentity); }

/* ========================================================
   ADD DATASET MODAL
   ======================================================== */
function openAddModal() {
  document.getElementById('modal-bg').classList.remove('hidden');
  document.getElementById('modal-body').innerHTML = `
    <div class="form-grp"><label>データセット名</label><input id="ds-name" placeholder="例: 室町時代"></div>
    <div class="form-grp"><label>時代（表示用）</label><input id="ds-period" placeholder="例: 1336〜1573年"></div>
    <div class="form-grp">
      <label>データ（JSON形式）</label>
      <textarea id="ds-json">{
  "categories": {"将軍": "#e74c3c", "その他": "#95a5a6"},
  "persons": [
    {"name": "足利尊氏", "title": "初代将軍", "birth": 1305, "death": 1358, "cat": "将軍"}
  ],
  "events": [{"year": 1336, "name": "室町幕府成立"}],
  "emperors": [{"name": "後醍醐天皇", "start": 1318, "end": 1339}],
  "retired": []
}</textarea>
    </div>
    <div class="hint">
      <b>persons</b>: name, title（任意）, birth, death, cat（カテゴリ名）<br>
      <b>events</b>: year, name &nbsp;｜&nbsp; <b>emperors / retired</b>: name, start, end
    </div>`;
  document.getElementById('modal-foot').innerHTML =
    `<button class="tbtn" onclick="closeModal()">キャンセル</button>
     <button class="tbtn" style="background:#5b7fff;color:#fff;border-color:#5b7fff" onclick="addDataset()">追加</button>`;
}

function addDataset() {
  try {
    const name   = document.getElementById('ds-name').value.trim();
    const period = document.getElementById('ds-period').value.trim();
    const data   = JSON.parse(document.getElementById('ds-json').value);
    if (!name) { alert('データセット名を入力してください'); return; }
    const key = 'custom_' + Date.now();
    DATASETS[key] = {
      name, period,
      categories:  data.categories  || { "その他": "#95a5a6" },
      persons:     data.persons      || [],
      events:      data.events       || [],
      emperors:    data.emperors     || [],
      retired:     data.retired      || [],
    };
    currentKey = key; visibleCats = {};
    renderSidebar(); loadDataset(key); closeModal();
  } catch (e) {
    alert('JSONの形式が正しくありません:\n' + e.message);
  }
}

function closeModal() {
  document.getElementById('modal-bg').classList.add('hidden');
}

/* ========================================================
   SCROLL YEAR INTO VIEW
   選択年の縦線が画面端に近づいたとき、自動スクロールして追従させる
   ======================================================== */
function scrollYearIntoView(year) {
  const margin = 80;  // 画面端からのマージン（px）
  const sx = NAME_W + curT.x + xScale(year) * curT.k * kXExtra;
  const rightEdge = NAME_W + curChartW;

  let newX = curT.x;
  if (sx < NAME_W + margin) {
    // 左端に近い → 右にスクロール
    newX = margin - xScale(year) * curT.k * kXExtra;
  } else if (sx > rightEdge - margin) {
    // 右端に近い → 左にスクロール
    newX = (curChartW - margin) - xScale(year) * curT.k * kXExtra;
  }

  if (newX === curT.x) return;

  const minX     = Math.min(0, curChartW - curChartW * curT.k * kXExtra);
  const clampedX = Math.max(minX, Math.min(0, newX));
  curT = d3.zoomIdentity.translate(clampedX / curT.k, curT.y / curT.k).scale(curT.k);
  svgEl.call(zoomBehavior.transform, curT);
}

/* ========================================================
   KEYBOARD SHORTCUTS
   ======================================================== */
document.addEventListener('keydown', e => {
  if (e.target.matches('input, textarea')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === '+' || e.key === '=') zoomIn();
  if (e.key === '-') zoomOut();
  if (e.key === '0') resetZoom();
  // Shift+左右矢印 → 横軸のみ拡大縮小（ビューポート中央基準）
  if (e.key === 'ArrowRight' && e.shiftKey) { zoomXBy(1.2, NAME_W + curChartW / 2); return; }
  if (e.key === 'ArrowLeft'  && e.shiftKey) { zoomXBy(1 / 1.2, NAME_W + curChartW / 2); return; }
  // 左右矢印（Shiftなし）→ 選択年を1年移動 + 画面端で自動スクロール
  if (e.key === 'ArrowRight' && !e.shiftKey && selectedYear !== null) {
    selectYear(selectedYear + 1);
    scrollYearIntoView(selectedYear);
  }
  if (e.key === 'ArrowLeft' && !e.shiftKey && selectedYear !== null) {
    selectYear(selectedYear - 1);
    scrollYearIntoView(selectedYear);
  }
  // 上下矢印 → 縦スクロール（3行分）
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const step  = ROW_H * 3;   // データ座標で3行分
    const dy    = e.key === 'ArrowDown' ? -step : step;
    let newT    = curT.translate(0, dy);
    const minY  = Math.min(0, curChartH - curTotalDataH * newT.k);
    const clampedY = Math.max(minY, Math.min(0, newT.y));
    if (clampedY !== newT.y) {
      newT = d3.zoomIdentity.translate(newT.x / newT.k, clampedY / newT.k).scale(newT.k);
    }
    svgEl.call(zoomBehavior.transform, newT);
  }
});

window.addEventListener('resize', buildChart);

// ブラウザの戻る / 進む、または直接 URL を開いた時にデータセットを切り替える
window.addEventListener('hashchange', () => {
  const key = location.hash.slice(1);
  if (key && DATASETS[key] && key !== currentKey) loadDataset(key);
});

/* ========================================================
   BOOT
   ======================================================== */
applyTheme(currentTheme);   // apply saved theme (dark/light) before first render
renderSidebar();
// URL ハッシュにデータセットキーが指定されていればそちらを優先
const _initKey = location.hash.slice(1);
loadDataset((_initKey && DATASETS[_initKey]) ? _initKey : currentKey);

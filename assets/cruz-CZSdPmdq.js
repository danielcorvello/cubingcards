import{o as e,r as t}from"./TreinoDaCruz.module-DJcIub7h.js";import"./embaralhador-D_6MIb3g.js";var n=`// Aba "Cruz": treino da cruz (como o Cross Trainer do SpeedCubeDB), sem internet.\r
// - Solver ótimo: a cruz tem 190 080 estados; uma tabela de distâncias (busca em largura, feita uma vez) dá o\r
//   número mínimo de movimentos e todas as soluções ótimas na hora.\r
// - Embaralhamento com dificuldade exata: estado aleatório do cubo inteiro, a cruz trocada por uma que precisa de\r
//   N movimentos, e o min2phase (o mesmo da aba Embaralhamentos) escreve o embaralhamento até esse estado.\r
// - Embaralha-se no padrão WCA (branco em cima, verde na frente) e resolve-se com a cruz embaixo.\r
// Depende de globais da página: C (Cubo), Embaralhamentos, Imagens, esc, MODE.\r
(function (global) {\r
  const C = global.Cubo;\r
\r
  // ================= solver da cruz =================\r
  // arestas: posição (0..11) e orientação (0: adesivo da cor da cruz na face "principal" da posição — a de\r
  // cima/baixo, ou a da frente/trás nas arestas do meio)\r
  const EDGE_POS = [];\r
  for (const s of C.solved()) if (C.isEdge(s.p) && !EDGE_POS.some(p => C.eq(p, s.p))) EDGE_POS.push(s.p);\r
  const posIdx = p => EDGE_POS.findIndex(q => C.eq(q, p));\r
  const primary = p => (p[1] !== 0 ? [0, p[1], 0] : [0, 0, p[2]]);\r
  const other = p => (p[1] !== 0 ? (p[0] !== 0 ? [p[0], 0, 0] : [0, 0, p[2]]) : [p[0], 0, 0]);\r
  const FACES = 'URFDLB';\r
  const MOVES = [];\r
  for (const f of FACES) for (const [suf, n] of [['', 1], ['2', 2], ["'", 3]]) MOVES.push({ s: f + suf, f, n });\r
  const AXIS = { U: 0, D: 0, R: 1, L: 1, F: 2, B: 2 };\r
  // lugar de cada aresta da cruz (embaixo): DF, DR, DB, DL — a aresta k é a que tem a cor do centro ao lado\r
  const HOMES = [[0, -1, 1], [1, -1, 0], [0, -1, -1], [-1, -1, 0]];\r
  const N_STATES = 24 ** 4;\r
  let MT = null, DIST = null, BY_DEPTH = null;\r
\r
  function init() {\r
    if (DIST) return;\r
    // tabela de movimentos: aresta (pos*2+ori) -> nova aresta\r
    MT = MOVES.map(m => {\r
      const t = new Int8Array(24), mv = C.parse(m.s);\r
      for (let pi = 0; pi < 12; pi++) for (let o = 0; o < 2; o++) {\r
        const p = EDGE_POS[pi], [s] = C.apply([{ p, n: o ? other(p) : primary(p), c: 'x' }], mv);\r
        t[pi * 2 + o] = posIdx(s.p) * 2 + (C.eq(s.n, primary(s.p)) ? 0 : 1);\r
      }\r
      return t;\r
    });\r
    // busca em largura a partir da cruz resolvida\r
    DIST = new Int8Array(N_STATES).fill(-1);\r
    const solved = encode(HOMES.map(p => posIdx(p) * 2));\r
    DIST[solved] = 0;\r
    BY_DEPTH = [[solved]];\r
    let frontier = [solved];\r
    for (let d = 1; frontier.length; d++) {\r
      const next = [];\r
      for (const x of frontier) for (let m = 0; m < 18; m++) {\r
        const y = move(x, m);\r
        if (DIST[y] < 0) { DIST[y] = d; next.push(y); }\r
      }\r
      if (next.length) BY_DEPTH.push(next);\r
      frontier = next;\r
    }\r
  }\r
  const encode = e => e[0] + 24 * (e[1] + 24 * (e[2] + 24 * e[3]));\r
  function move(x, m) {\r
    const t = MT[m];\r
    const e0 = x % 24, e1 = Math.floor(x / 24) % 24, e2 = Math.floor(x / 576) % 24, e3 = Math.floor(x / 13824);\r
    return t[e0] + 24 * (t[e1] + 24 * (t[e2] + 24 * t[e3]));\r
  }\r
\r
  // estado da cruz da cor \`color\` num cubo segurado com essa cor embaixo\r
  function coordOf(st, color) {\r
    const e = HOMES.map(h => {\r
      const side = [h[0], 0, h[2]];\r
      const sideColor = C.sticker(st, side, side).c;\r
      const s = st.find(x => x.c === color && C.isEdge(x.p) && C.pieceColors(st, x.p).includes(sideColor));\r
      return posIdx(s.p) * 2 + (C.eq(s.n, primary(s.p)) ? 0 : 1);\r
    });\r
    return encode(e);\r
  }\r
\r
  // todas as soluções ótimas (até \`max\`), as mais confortáveis primeiro (menos B e D)\r
  const ORDER = 'UDRLFB';\r
  function solutions(x, max = 300) {\r
    init();\r
    const out = [], seq = [];\r
    (function rec(x, d, last) {\r
      if (out.length >= max) return;\r
      if (d === 0) { out.push(seq.join(' ')); return; }\r
      for (let m = 0; m < 18; m++) {\r
        const f = MOVES[m].f;\r
        if (last && (f === last || (AXIS[f] === AXIS[last] && ORDER.indexOf(f) < ORDER.indexOf(last)))) continue;\r
        const y = move(x, m);\r
        if (DIST[y] !== d - 1) continue;\r
        seq.push(MOVES[m].s); rec(y, d - 1, f); seq.pop();\r
      }\r
    })(x, DIST[x], null);\r
    const score = a => a.split(' ').reduce((s, t) => s + ({ B: 3, D: 1, L: 0.5 }[t[0]] || 0) + (t[1] === '2' ? 0.2 : 0), 0);\r
    return out.sort((a, b) => score(a) - score(b) || a.localeCompare(b));\r
  }\r
\r
  // cruzes de \`extra\` movimentos a mais que o mínimo também (para a aba Análise), até \`max\`\r
  function solutionsUpTo(x, extra, max) {\r
    init();\r
    const out = [], seq = [], opt = DIST[x];\r
    for (let len = opt; len <= opt + extra && out.length < max; len++) {\r
      (function rec(x, r, last) {\r
        if (out.length >= max) return;\r
        if (r === 0) { if (DIST[x] === 0) out.push(seq.join(' ')); return; }\r
        for (let m = 0; m < 18; m++) {\r
          const f = MOVES[m].f;\r
          if (last && (f === last || (AXIS[f] === AXIS[last] && ORDER.indexOf(f) < ORDER.indexOf(last)))) continue;\r
          const y = move(x, m);\r
          if (DIST[y] > r - 1) continue;\r
          seq.push(MOVES[m].s); rec(y, r - 1, f); seq.pop();\r
        }\r
      })(x, len, null);\r
    }\r
    return out;\r
  }\r
\r
  // ================= solver da X-Cross (cruz + 1 par) =================\r
  // IDA*: heurística = maior entre a tabela da cruz e a tabela do slot. A tabela do slot tem as 2 arestas da cruz\r
  // vizinhas do slot, o canto e a aresta do par (24⁴ ≈ 330 mil estados, uma por slot, feita na primeira vez).\r
  // Canto e aresta do par são seguidos por um adesivo (posição + face), como as arestas da cruz.\r
  const CORNER_POS = [];\r
  for (const s of C.solved()) if (C.isCorner(s.p) && !CORNER_POS.some(p => C.eq(p, s.p))) CORNER_POS.push(s.p);\r
  const cIdx = (p, n) => CORNER_POS.findIndex(q => C.eq(q, p)) * 3 + (n[0] ? 0 : n[1] ? 1 : 2);\r
  const cNormal = (p, k) => [[p[0], 0, 0], [0, p[1], 0], [0, 0, p[2]]][k];\r
  const eIdx = (p, n) => posIdx(p) * 2 + (C.eq(n, primary(p)) ? 0 : 1);\r
  const SLOTS = [{ name: 'FR', x: 1, z: 1 }, { name: 'FL', x: -1, z: 1 }, { name: 'BL', x: -1, z: -1 }, { name: 'BR', x: 1, z: -1 }];\r
  SLOTS.forEach(s => {\r
    s.adj = [s.z === 1 ? 0 : 2, s.x === 1 ? 1 : 3];  // arestas da cruz vizinhas (DF/DB e DR/DL, índices de HOMES)\r
    s.corner = cIdx([s.x, -1, s.z], [0, -1, 0]);     // adesivo da cor da cruz do canto, embaixo\r
    s.edge = eIdx([s.x, 0, s.z], [s.x, 0, 0]);       // adesivo da aresta do par que fica do lado R/L\r
  });\r
  const P24 = [1, 24, 576, 13824];\r
  let CMT = null;\r
  const SLOT_T = [];\r
  function initX() {\r
    init();\r
    if (CMT) return;\r
    CMT = MOVES.map(m => {\r
      const t = new Int8Array(24), mv = C.parse(m.s);\r
      for (let pi = 0; pi < 8; pi++) for (let k = 0; k < 3; k++) {\r
        const p = CORNER_POS[pi], [s] = C.apply([{ p, n: cNormal(p, k), c: 'x' }], mv);\r
        t[pi * 3 + k] = cIdx(s.p, s.n);\r
      }\r
      return t;\r
    });\r
  }\r
  function slotTable(k) {\r
    initX();\r
    if (SLOT_T[k]) return SLOT_T[k];\r
    const s = SLOTS[k], T = new Int8Array(N_STATES).fill(-1);\r
    const enc = (a, b, c, e) => a + 24 * (b + 24 * (c + 24 * e));\r
    const start = enc(posIdx(HOMES[s.adj[0]]) * 2, posIdx(HOMES[s.adj[1]]) * 2, s.corner, s.edge);\r
    T[start] = 0;\r
    let frontier = [start];\r
    for (let d = 1; frontier.length; d++) {\r
      const next = [];\r
      for (const x of frontier) {\r
        const a = x % 24, b = Math.floor(x / 24) % 24, c = Math.floor(x / 576) % 24, e = Math.floor(x / 13824);\r
        for (let m = 0; m < 18; m++) {\r
          const y = enc(MT[m][a], MT[m][b], CMT[m][c], MT[m][e]);\r
          if (T[y] < 0) { T[y] = d; next.push(y); }\r
        }\r
      }\r
      frontier = next;\r
    }\r
    return (SLOT_T[k] = T);\r
  }\r
  // estado da X-Cross (cor \`color\`, slot k) num cubo segurado com a cruz embaixo\r
  function xstate(st, color, k) {\r
    const s = SLOTS[k], cen = n => C.sticker(st, n, n).c;\r
    const A = cen([s.x, 0, 0]), B = cen([0, 0, s.z]);\r
    const pc = p => C.pieceColors(st, p);\r
    const cs = st.find(x => x.c === color && C.isCorner(x.p) && pc(x.p).includes(A) && pc(x.p).includes(B));\r
    const es = st.find(x => x.c === A && C.isEdge(x.p) && pc(x.p).includes(B));\r
    return { x: coordOf(st, color), c: cIdx(cs.p, cs.n), e: eIdx(es.p, es.n), k };\r
  }\r
  // soluções ótimas da X-Cross (até \`max\`); com maxLen, desiste se precisar de mais movimentos (devolve [])\r
  function xsolve(xs, max = 300, maxLen = 14) {\r
    const T = slotTable(xs.k), [ia, ib] = SLOTS[xs.k].adj;\r
    const h = (x, c, e) => Math.max(DIST[x], T[Math.floor(x / P24[ia]) % 24 + 24 * (Math.floor(x / P24[ib]) % 24 + 24 * (c + 24 * e))]);\r
    const out = [], seq = [];\r
    function rec(x, c, e, g, bound, last) {\r
      const hv = h(x, c, e);\r
      if (hv === 0) { if (g === bound) out.push(seq.join(' ')); return; }\r
      if (g + hv > bound || out.length >= max) return;\r
      for (let m = 0; m < 18; m++) {\r
        const f = MOVES[m].f;\r
        if (last && (f === last || (AXIS[f] === AXIS[last] && ORDER.indexOf(f) < ORDER.indexOf(last)))) continue;\r
        seq.push(MOVES[m].s);\r
        rec(move(x, m), CMT[m][c], MT[m][e], g + 1, bound, f);\r
        seq.pop();\r
      }\r
    }\r
    for (let bound = h(xs.x, xs.c, xs.e); bound <= maxLen && !out.length; bound++) rec(xs.x, xs.c, xs.e, 0, bound, null);\r
    return out.sort((a, b) => comfort(a) - comfort(b) || a.localeCompare(b));\r
  }\r
  const comfort = a => a.split(' ').reduce((s, t) => s + ({ B: 3, D: 1, L: 0.5 }[t[0]] || 0) + (t[1] === '2' ? 0.2 : 0), 0);\r
  function randomWalk(n) {\r
    const seq = [];\r
    let last = null;\r
    while (seq.length < n) {\r
      const m = MOVES[Math.floor(Math.random() * 18)];\r
      if (last && (m.f === last || (AXIS[m.f] === AXIS[last] && ORDER.indexOf(m.f) < ORDER.indexOf(last)))) continue;\r
      seq.push(m.s); last = m.f;\r
    }\r
    return seq.join(' ');\r
  }\r
\r
  // ================= embaralhamentos =================\r
  const COLORS = ['w', 'y', 'g', 'b', 'r', 'o'];\r
  const COLOR_NAME = { w: 'branca', y: 'amarela', g: 'verde', b: 'azul', r: 'vermelha', o: 'laranja' };\r
  // do padrão WCA (branco em cima, verde na frente) até a cor da cruz embaixo\r
  const ROT = { w: 'z2', y: '', g: "x'", b: 'x', r: 'z', o: "z'" };\r
  // o motor usa amarelo em cima; o padrão WCA é o mesmo cubo com branco/amarelo e laranja/vermelho trocados\r
  const SWAP = { y: 'w', w: 'y', o: 'r', r: 'o' };\r
  const swapSt = st => st.map(s => ({ p: s.p, n: s.n, c: SWAP[s.c] || s.c }));\r
  const held = (zb, c) => C.apply(swapSt(zb), C.parse(ROT[c]));  // como fica na mão, com a cruz embaixo\r
  const depthFor = (zb, c) => { init(); return DIST[coordOf(held(zb, c), c)]; };\r
  const pick = a => a[Math.floor(Math.random() * a.length)];\r
\r
  // colors: cores permitidas; n: dificuldade (mínimo entre as cores permitidas) ou null = aleatório de verdade\r
  function generate(colors, n) {\r
    init();\r
    let zb = null, scramble = null;\r
    if (n == null) ({ scramble, state: zb } = Embaralhamentos.randomState());\r
    else {\r
      for (let tries = 0; tries < 30; tries++) {\r
        const c = pick(colors);\r
        const p0 = held(Embaralhamentos.randomState().state, c);\r
        const p1 = C.apply(p0, C.parse(solutions(coordOf(p0, c), 1)[0]));  // cruz resolvida, resto aleatório\r
        const target = pick(BY_DEPTH[n]);\r
        const p = C.apply(p1, C.invert(C.parse(solutions(target, 1)[0])));  // cruz trocada por uma de N movimentos\r
        zb = swapSt(C.apply(p, C.invert(C.parse(ROT[c]))));\r
        if (Math.min(...colors.map(k => depthFor(zb, k))) === n) break;\r
      }\r
      scramble = Embaralhamentos.scrambleFor(zb);\r
      zb = C.apply(C.solved(), C.parse(scramble));\r
    }\r
    const depths = Object.fromEntries(colors.map(c => [c, depthFor(zb, c)]));\r
    return { scramble, zb, depths, best: Math.min(...Object.values(depths)) };\r
  }\r
\r
  // X-Cross: embaralhamento com dificuldade exata = mínimo entre as cores e os slots permitidos.\r
  // A partir de um cubo aleatório com a X-Cross pronta, N movimentos ao acaso; aceito se nenhuma cor/slot\r
  // resolver em menos de N (os detalhes de cada cor e slot são calculados só quando as soluções aparecem)\r
  // mínimo entre as cores e slots (cada busca só procura algo mais curto que o melhor até ali)\r
  function minX(zb, colors, slots) {\r
    let best = 99;\r
    for (const c of colors) {\r
      const h = held(zb, c);\r
      for (const k of slots) { const s = xsolve(xstate(h, c, k), 1, Math.min(best - 1, 14)); if (s.length) best = C.parse(s[0]).length; }\r
    }\r
    return best;\r
  }\r
  function generateX(colors, slots, n) {\r
    initX();\r
    let zb = null, scramble = null;\r
    if (n == null) ({ scramble, state: zb } = Embaralhamentos.randomState());\r
    else {\r
      let best = null;\r
      const consider = z => { const d = Math.abs(minX(z, colors, slots) - n); if (!best || d < best.d) best = { z, d }; return d === 0; };\r
      for (let tries = 0; tries < 25; tries++) {\r
        const c = pick(colors), k = pick(slots);\r
        const p0 = held(Embaralhamentos.randomState().state, c);\r
        const p1 = C.apply(p0, C.parse(xsolve(xstate(p0, c, k), 1)[0]));\r
        const p = C.apply(p1, C.parse(randomWalk(n)));\r
        if (consider(swapSt(C.apply(p, C.invert(C.parse(ROT[c])))))) break;\r
      }\r
      // dificuldades altas (raras com vários pares/cores): sorteia cubos inteiros por até 2,5 s, fica com o mais perto\r
      const t0 = performance.now();\r
      while (best.d && performance.now() - t0 < 2500) if (consider(Embaralhamentos.randomState().state)) break;\r
      scramble = Embaralhamentos.scrambleFor(best.z);\r
      zb = C.apply(C.solved(), C.parse(scramble));\r
    }\r
    const g = { scramble, zb, x: true, colors, slots, want: n };\r
    xinfo(g);\r
    return g;\r
  }\r
  // ótimo de cada cor e slot (com as soluções), calculado uma vez por embaralhamento\r
  function xinfo(g) {\r
    if (g.info) return g.info;\r
    const info = {};\r
    let best = Infinity;\r
    for (const c of g.colors) {\r
      const h = held(g.zb, c);\r
      info[c] = g.slots.map(k => { const sols = xsolve(xstate(h, c, k)); return { k, d: sols.length ? C.parse(sols[0]).length : 99, sols }; })\r
        .sort((a, b) => a.d - b.d);\r
      best = Math.min(best, info[c][0].d);\r
    }\r
    g.best = best;\r
    return (g.info = info);\r
  }\r
  // cores do par do slot k (para destacar na planificação)\r
  function pairColors(zb, c, k) {\r
    const h = held(zb, c), s = SLOTS[k];\r
    return [C.sticker(h, [s.x, 0, 0], [s.x, 0, 0]).c, C.sticker(h, [0, 0, s.z], [0, 0, s.z]).c];\r
  }\r
\r
  // planificação no padrão WCA (como fica depois de embaralhar); \`focus\`: cores da cruz a destacar;\r
  // \`pairs\`: pares a destacar também, como [cor da cruz, cor A, cor B]\r
  function netSVG(zb, focus, pairs) {\r
    const st = swapSt(zb);\r
    const POS = { U: [1, 0], L: [0, 1], F: [1, 1], R: [2, 1], B: [3, 1], D: [1, 2] };\r
    const s = 3.2, gap = 0.6;\r
    let body = '';\r
    for (const f in POS) {\r
      const [n, rd, cd] = C.FACES[f], [fx, fy] = POS[f];\r
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {\r
        const p = C.add(C.add(n, C.mul(rd, r - 1)), C.mul(cd, c - 1));\r
        const k = C.sticker(st, p, n).c;\r
        const center = r === 1 && c === 1;\r
        const pcs = C.pieceColors(st, p);\r
        const isPair = (pairs || []).some(([c0, a, b]) => pcs.includes(a) && pcs.includes(b) && (C.isEdge(p) ? pcs.length === 2 : pcs.includes(c0)));\r
        const on = !focus || center || isPair || (C.isEdge(p) && pcs.some(x => focus.includes(x)));\r
        const x = fx * (3 * s + gap) + c * s, y = fy * (3 * s + gap) + r * s;\r
        body += \`<rect x="\${x}" y="\${y}" width="\${s}" height="\${s}" fill="\${on ? Imagens.COLORS[k] : '#d4d4d9'}" stroke="#000" stroke-width="0.25"/>\`;\r
      }\r
    }\r
    const W = 4 * (3 * s + gap) - gap, H = 3 * (3 * s + gap) - gap;\r
    return \`<svg viewBox="-0.3 -0.3 \${W + 0.6} \${H + 0.6}" xmlns="http://www.w3.org/2000/svg">\${body}</svg>\`;\r
  }\r
\r
  // ================= tela =================\r
  const CFG_KEY = 'cfop-cross-cfg', TIMES_KEY = 'cfop-cross';\r
  let CFG = { color: 'w', n: '', insp: true, net: true, focus: true, kind: 'cross', slot: 'any' };\r
  try { Object.assign(CFG, JSON.parse(localStorage.getItem(CFG_KEY) || '{}')); } catch (e) {}\r
  const saveCfg = () => { try { localStorage.setItem(CFG_KEY, JSON.stringify(CFG)); } catch (e) {} };\r
  let TIMES = [];\r
  try { TIMES = JSON.parse(localStorage.getItem(TIMES_KEY) || '[]') || []; } catch (e) {}\r
  const saveTimes = () => { try { localStorage.setItem(TIMES_KEY, JSON.stringify(TIMES)); } catch (e) {} };\r
  const MAX_TIMES = 500;\r
\r
  const COLOR_OPTS = { w: 'Branca', y: 'Amarela', g: 'Verde', b: 'Azul', r: 'Vermelha', o: 'Laranja', wy: 'Branca ou amarela', any: 'Qualquer cor (cor neutra)' };\r
  const colorsOf = v => (v === 'wy' ? ['w', 'y'] : v === 'any' ? COLORS : [v]);\r
  const fmt = ms => (Math.round(ms / 10) / 100).toFixed(2);\r
  const isX = () => CFG.kind === 'x';\r
  const slotsOf = v => (v === 'any' ? [0, 1, 2, 3] : [SLOTS.findIndex(s => s.name === v)]);\r
  const MAX_N = { cross: 8, x: 10 };\r
  const whatName = () => (isX() ? 'X-Cross' : 'cruz');\r
\r
  let S = null;  // { gen, state: idle|insp|armed|running|done, t0, i0, insp, elapsed, shown, more }\r
  function newScramble() {\r
    const box = document.getElementById('sheets');\r
    if (box && MODE === 'cross') box.querySelector('.xscr') && (box.querySelector('.xscr').textContent = 'Gerando…');\r
    setTimeout(() => {  // deixa a tela mostrar "Gerando…" (a primeira vez monta a tabela e o solver)\r
      let gen;\r
      const n = CFG.n === '' ? null : +CFG.n;\r
      try { gen = isX() ? generateX(colorsOf(CFG.color), slotsOf(CFG.slot), n) : generate(colorsOf(CFG.color), n); }\r
      catch (e) { alert('Não consegui gerar o embaralhamento: ' + e.message); return; }\r
      S = { gen, state: 'idle', elapsed: 0, insp: 0, shown: false, more: false };\r
      draw();\r
    }, 20);\r
  }\r
\r
  // ---- cronômetro (espaço / toque) ----\r
  let raf = 0;\r
  function tick() {\r
    if (!S) return;\r
    const now = performance.now(), el = document.getElementById('xclock'), hint = document.getElementById('xhint');\r
    if (!el) return;\r
    if (S.state === 'insp' || (S.state === 'armed' && S.i0)) {\r
      const left = 15 - (now - S.i0) / 1000;\r
      el.textContent = left > 0 ? Math.ceil(left) : left > -2 ? '+2' : 'DNF';\r
      el.parentNode.classList.toggle('late', left <= 3);\r
    } else if (S.state === 'running') el.textContent = fmt(now - S.t0);\r
    if (['insp', 'armed', 'running'].includes(S.state)) raf = requestAnimationFrame(tick);\r
    if (hint) hint.textContent = HINT[S.state];\r
  }\r
  const HINT = {\r
    idle: CFG.insp ? 'Embaralhe e aperte a barra de espaço (ou toque) para começar a inspeção' : 'Embaralhe; segure a barra de espaço (ou toque) e solte para começar',\r
    insp: 'Planeje… segure a barra de espaço e solte para começar',\r
    armed: 'Solte para começar…',\r
    running: 'Aperte qualquer tecla (ou toque) quando terminar',\r
    done: 'Enter / espaço: próximo embaralhamento · R: soluções',\r
  };\r
  function press() {\r
    if (!S) return;\r
    if (S.state === 'running') return stop();\r
    if (S.state === 'done') return newScramble();\r
    if (S.state === 'idle' && CFG.insp) { S.state = 'insp'; S.i0 = performance.now(); return redrawClock(); }\r
    if (S.state === 'idle' || S.state === 'insp') { S.state = 'armed'; redrawClock(); }\r
  }\r
  function release() {\r
    if (!S || S.state !== 'armed') return;\r
    if (S.i0) S.insp = performance.now() - S.i0;\r
    S.state = 'running'; S.t0 = performance.now();\r
    redrawClock();\r
  }\r
  function stop() {\r
    cancelAnimationFrame(raf);\r
    S.elapsed = Math.round(performance.now() - S.t0); S.state = 'done'; S.shown = true;\r
    const pen = S.insp > 17000 ? 'dnf' : S.insp > 15000 ? '+2' : '';\r
    if (S.gen.x) xinfo(S.gen);  // calcula o ótimo (a dificuldade) da X-Cross\r
    TIMES.push({ t: Math.round(S.elapsed + (pen === '+2' ? 2000 : 0)), d: Date.now(), n: S.gen.best, c: CFG.color, ok: pen !== 'dnf', insp: Math.round(S.insp), pen, k: S.gen.x ? 'x' : 'cross' });\r
    if (TIMES.length > MAX_TIMES) TIMES.splice(0, TIMES.length - MAX_TIMES);\r
    saveTimes();\r
    draw();\r
  }\r
  function redrawClock() {\r
    const w = document.getElementById('xclockwrap'); if (!w) return;\r
    w.className = \`tclock xclock \${S.state}\`;\r
    if (S.state === 'armed' && !S.i0) document.getElementById('xclock').textContent = '0.00';\r
    cancelAnimationFrame(raf); tick();\r
  }\r
\r
  // ---- desenho ----\r
  function configHTML() {\r
    return \`<div class="tcfg">\r
      <div class="trow">\r
        <label>Treino <select data-xc="kind"><option value="cross" \${isX() ? '' : 'selected'}>Cruz</option><option value="x" \${isX() ? 'selected' : ''}>X-Cross (cruz + 1 par)</option></select></label>\r
        \${isX() ? \`<label title="Qual par vai junto com a cruz">Par <select data-xc="slot">\${[['any', 'Qualquer (o mais curto)'], ['FR', 'Frente-direita (FR)'], ['FL', 'Frente-esquerda (FL)'], ['BR', 'Trás-direita (BR)'], ['BL', 'Trás-esquerda (BL)']].map(([v, l]) => \`<option value="\${v}" \${CFG.slot === v ? 'selected' : ''}>\${l}</option>\`).join('')}</select></label>\` : ''}\r
      </div>\r
      <div class="trow">\r
        <label>Cor da cruz <select data-xc="color">\${Object.entries(COLOR_OPTS).map(([v, l]) => \`<option value="\${v}" \${CFG.color === v ? 'selected' : ''}>\${l}</option>\`).join('')}</select></label>\r
        <label title="Número mínimo de movimentos (com várias cores ou pares: o mais curto deles)">Dificuldade <select data-xc="n">\r
          <option value="" \${CFG.n === '' ? 'selected' : ''}>Aleatória (como numa resolução)</option>\r
          \${Array.from({ length: MAX_N[CFG.kind] }, (_, i) => i + 1).map(k => \`<option value="\${k}" \${String(CFG.n) === String(k) ? 'selected' : ''}>\${k} movimento\${k > 1 ? 's' : ''}</option>\`).join('')}</select></label>\r
      </div>\r
      <div class="trow">\r
        <label title="15 segundos para planejar, como na WCA (passou de 15 s: +2; de 17 s: DNF)"><input type="checkbox" data-xc="insp" \${CFG.insp ? 'checked' : ''}> Inspeção (15 s)</label>\r
        <label><input type="checkbox" data-xc="net" \${CFG.net ? 'checked' : ''}> Planificação</label>\r
        <label title="Na planificação, deixa em destaque só as peças da cruz (e do par, na X-Cross)"><input type="checkbox" data-xc="focus" \${CFG.focus ? 'checked' : ''}> Destacar as peças</label>\r
        <span class="sp"></span>\r
        <button data-xa="analyze" title="Abrir este embaralhamento na aba Análise (soluções CFOP completas)">🔎 Analisar</button>\r
        <button class="primary" data-xa="new">🔀 Novo embaralhamento</button>\r
      </div></div>\`;\r
  }\r
\r
  function xsolutionsHTML() {\r
    const g = S.gen, info = xinfo(g);\r
    const cols = Object.keys(info).sort((a, b) => info[a][0].d - info[b][0].d);\r
    const one = c => {\r
      const rot = ROT[c], rows = S.more ? info[c] : info[c].filter(r => r.d === g.best);\r
      return \`<div class="xsol"><div class="xsolh"><i style="background:\${Imagens.COLORS[c]}"></i> X-Cross \${COLOR_NAME[c]} <small>\${rot ? \`gire <b>\${rot}</b> antes\` : 'sem girar'}</small></div>\r
        \${rows.map(r => \`<div class="xslot">par <b>\${SLOTS[r.k].name}</b>: <b>\${r.d} movimento\${r.d === 1 ? '' : 's'}</b> <small>\${r.sols.length >= 300 ? '300+' : r.sols.length} solução(ões) ótima(s)</small></div>\r
          \${r.d === 0 ? '<div class="xalg">Já está pronta!</div>' : r.sols.slice(0, S.more ? 6 : 3).map(a => \`<div class="xalg">\${rot ? \`<span class="xrot">\${rot}</span> \` : ''}\${esc(a)}</div>\`).join('')}\`).join('')}</div>\`;\r
    };\r
    const shownCols = S.more ? cols : cols.filter(c => info[c][0].d === g.best);\r
    return \`<div class="xsols">\${shownCols.map(one).join('')}\r
      <button class="lnk" data-xa="more">\${S.more ? 'mostrar menos' : 'mais soluções, os outros pares e cores'}</button></div>\`;\r
  }\r
\r
  function solutionsHTML() {\r
    if (S.gen.x) return xsolutionsHTML();\r
    const g = S.gen, cols = Object.keys(g.depths).sort((a, b) => g.depths[a] - g.depths[b]);\r
    const one = c => {\r
      const x = coordOf(held(g.zb, c), c), list = solutions(x), show = S.more ? list.slice(0, 12) : list.slice(0, 4);\r
      const rot = ROT[c];\r
      return \`<div class="xsol"><div class="xsolh"><i style="background:\${Imagens.COLORS[c]}"></i> Cruz \${COLOR_NAME[c]}: <b>\${g.depths[c]} movimento\${g.depths[c] === 1 ? '' : 's'}</b>\r
          <small>\${rot ? \`gire <b>\${rot}</b> antes\` : 'sem girar'} · \${list.length >= 300 ? '300+' : list.length} solução(ões) ótima(s)</small></div>\r
        \${g.depths[c] === 0 ? '<div class="xalg">Já está pronta!</div>' : show.map(a => \`<div class="xalg">\${rot ? \`<span class="xrot">\${rot}</span> \` : ''}\${esc(a)}</div>\`).join('')}</div>\`;\r
    };\r
    const shownCols = cols.length > 1 && !S.more ? cols.filter(c => g.depths[c] === g.best) : cols;\r
    return \`<div class="xsols">\${shownCols.map(one).join('')}\r
      <button class="lnk" data-xa="more">\${S.more ? 'mostrar menos' : cols.length > 1 ? 'mais soluções e as outras cores' : 'mais soluções'}</button></div>\`;\r
  }\r
\r
  function statsHTML() {\r
    const rows = [];\r
    const mine = TIMES.filter(x => (x.k || 'cross') === CFG.kind);\r
    for (let k = 0; k <= 12; k++) {\r
      const l = mine.filter(x => x.n === k), ok = l.filter(x => x.ok).map(x => x.t);\r
      if (!l.length) continue;\r
      const last = ok.slice(-12);\r
      rows.push(\`<tr><td>\${k}</td><td>\${l.length}</td><td>\${ok.length ? fmt(Math.min(...ok)) : '—'}</td><td>\${last.length ? fmt(last.reduce((a, b) => a + b, 0) / last.length) : '—'}</td><td>\${l.length - ok.length}</td></tr>\`);\r
    }\r
    if (!rows.length) return \`<div class="tstat">Os tempos de \${whatName()} aparecem aqui, separados pela dificuldade.</div>\`;\r
    return \`<details class="xstats" open><summary>Seus tempos de \${whatName()} por dificuldade</summary>\r
      <table><tr><th>Movimentos</th><th>Tempos</th><th>Melhor</th><th>Média (últimos 12)</th><th>DNF</th></tr>\${rows.join('')}</table>\r
      <button class="lnk" data-xa="clear">apagar os tempos de \${whatName()}</button></details>\`;\r
  }\r
\r
  // planificação com destaque: a cruz (e, na X-Cross, os pares permitidos; depois das soluções, só o melhor)\r
  function netFor(g, cols) {\r
    if (!CFG.focus) return netSVG(g.zb, null);\r
    if (!g.x) return netSVG(g.zb, S.shown ? Object.keys(g.depths).filter(c => g.depths[c] === g.best) : cols);\r
    const pairs = [];\r
    let focus = cols;\r
    if (S.shown) {\r
      const info = xinfo(g);\r
      focus = cols.filter(c => info[c][0].d === g.best);\r
      for (const c of focus) for (const r of info[c]) if (r.d === g.best) pairs.push([c, ...pairColors(g.zb, c, r.k)]);\r
    } else for (const c of cols) for (const k of g.slots) pairs.push([c, ...pairColors(g.zb, c, k)]);\r
    return netSVG(g.zb, focus, pairs);\r
  }\r
\r
  function draw() {\r
    const root = document.getElementById('sheets');\r
    if (!S) { root.innerHTML = \`<div class="train cross">\${configHTML()}<div class="tsess"><div class="xscr">Gerando…</div></div></div>\`; newScramble(); return; }\r
    const g = S.gen, cols = colorsOf(CFG.color);\r
    const hold = cols.length === 1\r
      ? (ROT[cols[0]] ? \`depois gire <b>\${ROT[cols[0]]}</b> para a cruz \${COLOR_NAME[cols[0]]} ficar embaixo\` : 'a cruz amarela já fica embaixo')\r
      : 'depois gire para a cor que preferir ficar embaixo';\r
    root.innerHTML = \`<div class="train cross">\${configHTML()}\r
      <div class="tsess">\r
        <div class="tlbl">Embaralhamento</div>\r
        <div class="xscr">\${esc(g.scramble)}</div>\r
        <div class="xhold">Embaralhe com o <b>branco em cima</b> e o <b>verde na frente</b> (padrão WCA); \${hold}.</div>\r
        \${g.x && g.want != null && g.best !== g.want ? \`<div class="xhold xwarn">Não encontrei uma X-Cross de \${g.want} movimentos com essas opções (é bem rara); esta é de <b>\${g.best}</b>.</div>\` : ''}\r
        \${CFG.net ? \`<div class="xnet">\${netFor(g, cols)}</div>\` : ''}\r
        <div id="xclockwrap" class="tclock xclock \${S.state}" data-xa="clock">\r
          <div id="xclock">\${S.state === 'done' ? fmt(S.elapsed) : '0.00'}</div>\r
          <div id="xhint">\${HINT[S.state]}</div></div>\r
        \${S.state === 'done' ? \`<div class="tstat">\${S.insp ? \`inspeção: \${(S.insp / 1000).toFixed(1)} s\${S.insp > 17000 ? ' · <b>DNF</b>' : S.insp > 15000 ? ' · <b>+2</b>' : ''} · \` : ''}\${whatName()} de \${g.best} movimento\${g.best === 1 ? '' : 's'}</div>\` : ''}\r
        \${S.shown ? solutionsHTML() : \`<button class="treveal" data-xa="show">👁 Ver as soluções ótimas (R)</button>\`}\r
        \${S.state === 'done' ? '<div class="tafter"><button class="primary" data-xa="new">✓ Próximo (Enter)</button></div>' : ''}\r
      </div>\r
      \${statsHTML()}</div>\`;\r
    const info = document.getElementById('info');\r
    if (info) info.textContent = \`\${isX() ? 'X-Cross' : 'Cruz'} · \${COLOR_OPTS[CFG.color]} · \${CFG.n === '' ? 'dificuldade aleatória' : \`\${CFG.n} movimento(s)\`} · tempos salvos neste navegador\`;\r
    if (['insp', 'armed', 'running'].includes(S.state)) { cancelAnimationFrame(raf); tick(); }\r
  }\r
\r
  // ---- eventos ----\r
  function init_() {\r
    const root = document.getElementById('sheets');\r
    root.addEventListener('click', ev => {\r
      if (MODE !== 'cross') return;\r
      const b = ev.target.closest('[data-xa]'); if (!b) return;\r
      const a = b.dataset.xa;\r
      if (a === 'new') return newScramble();\r
      if (a === 'analyze') { if (S && global.Analise) Analise.open(S.gen.scramble, colorsOf(CFG.color)); return; }\r
      if (a === 'show') { S.shown = true; return draw(); }\r
      if (a === 'more') { S.more = !S.more; return draw(); }\r
      if (a === 'clear') { if (confirm(\`Apagar todos os tempos de \${whatName()}?\`)) { TIMES = TIMES.filter(x => (x.k || 'cross') !== CFG.kind); saveTimes(); draw(); } }\r
    });\r
    root.addEventListener('change', ev => {\r
      if (MODE !== 'cross') return;\r
      const k = ev.target.dataset.xc; if (!k) return;\r
      CFG[k] = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;\r
      saveCfg();\r
      if (k === 'kind' && CFG.n !== '' && +CFG.n > MAX_N[CFG.kind]) { CFG.n = ''; saveCfg(); }\r
      if (['color', 'n', 'kind', 'slot'].includes(k)) return newScramble();\r
      HINT.idle = CFG.insp ? 'Embaralhe e aperte a barra de espaço (ou toque) para começar a inspeção' : 'Embaralhe; segure a barra de espaço (ou toque) e solte para começar';\r
      draw();\r
    });\r
    root.addEventListener('pointerdown', ev => {\r
      if (MODE === 'cross' && ev.target.closest('#xclockwrap')) { ev.preventDefault(); press(); }\r
    });\r
    root.addEventListener('pointerup', ev => {\r
      if (MODE === 'cross' && ev.target.closest('#xclockwrap')) release();\r
    });\r
    const typing = ev => ['INPUT', 'SELECT', 'TEXTAREA'].includes(ev.target.tagName);\r
    document.addEventListener('keydown', ev => {\r
      if (MODE !== 'cross' || !S || typing(ev) || document.querySelector('.amodal')) return;\r
      if (S.state === 'running') { ev.preventDefault(); stop(); return; }\r
      if (ev.code === 'Space') { ev.preventDefault(); if (!ev.repeat) press(); }\r
      else if (ev.key === 'Enter' && S.state === 'done') { ev.preventDefault(); newScramble(); }\r
      else if (ev.key.toLowerCase() === 'r' && !S.shown) { S.shown = true; draw(); }\r
    });\r
    document.addEventListener('keyup', ev => {\r
      if (MODE !== 'cross' || typing(ev)) return;\r
      if (ev.code === 'Space') { ev.preventDefault(); release(); }\r
    });\r
  }\r
\r
  global.Cruz = {\r
    render: () => (S ? draw() : draw()), init: init_,\r
    exportTimes: () => TIMES,\r
    importTimes: t => { TIMES = Array.isArray(t) ? t : []; saveTimes(); },\r
    // usados pela aba Análise\r
    held, ROT, COLOR_NAME, netSVG, crosses: (st, c, extra, max) => solutionsUpTo(coordOf(st, c), extra, max),\r
    // usados nos testes\r
    _init: init, _coordOf: coordOf, _solutions: solutions, _generate: generate, _depthFor: depthFor, _held: held, _ROT: ROT,\r
    _dist: x => DIST[x], _byDepth: () => BY_DEPTH.map(l => l.length),\r
    _xsolve: xsolve, _xstate: xstate, _generateX: generateX, _xinfo: xinfo, _slotTable: slotTable, _walk: randomWalk,\r
  };\r
})(window);\r
`,r=globalThis;r.Imagens??={COLORS:{y:`#FEFE00`,r:`#EE0000`,b:`#0000F2`,w:`#FFFFFF`,o:`#FFA100`,g:`#00D800`,d:`#404040`}},`Cruz`in r||Function(`window`,n)(globalThis);var{Cruz:i,Cubo:a}=r,o=e=>t.includes(e);function s(e,t){let n=i._generate([...e],t);return{texto:n.scramble,xcross:!1,movimentos:n.best,pedido:t,cores:l(e.map(e=>{let t=i._solutions(i._coordOf(i.held(n.zb,e),e));return{cor:e,giro:i.ROT[e]??``,pares:[{par:void 0,movimentos:n.depths?.[e]??0,solucoes:t}]}})),estado:n.zb}}function c(t,n,r){let a=i._generateX([...t],n.map(t=>e.indexOf(t)),r),s=i._xinfo(a),c=Object.entries(s).flatMap(([t,n])=>o(t)?[{cor:t,giro:i.ROT[t]??``,pares:n.map(t=>({par:e[t.k],movimentos:t.d,solucoes:t.sols}))}]:[]);return{texto:a.scramble,xcross:!0,movimentos:a.best,pedido:r,cores:l(c),estado:a.zb}}var l=e=>[...e].sort((e,t)=>u(e)-u(t)),u=e=>Math.min(...e.pares.map(e=>e.movimentos)),d={FR:{x:1,z:1},FL:{x:-1,z:1},BL:{x:-1,z:-1},BR:{x:1,z:-1}};function f(e,t,n){let r=i.held(e,t),{x:o,z:s}=d[n];return[t,a.sticker(r,[o,0,0],[o,0,0]).c,a.sticker(r,[0,0,s],[0,0,s]).c]}function p(e,t){if(!t)return i.netSVG(e.estado,null);let n=e.xcross?t.flatMap(({cor:t,pares:n})=>n.map(n=>f(e.estado,t,n))):void 0;return i.netSVG(e.estado,t.map(e=>e.cor),n)}export{s as gerarCruz,c as gerarXCross,p as planificacao};
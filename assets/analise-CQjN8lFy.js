import{i as e}from"./TreinoDaCruz.module-DJcIub7h.js";import{t}from"./grupos-DkD6PMP9.js";import"./cruz-CZSdPmdq.js";var n=`// Aba "Análise": analisa um embaralhamento e mostra soluções CFOP completas (como o Scramble Analyzer do SpeedCubeDB).\r
// Usa as SUAS fórmulas (planilha + Meus algoritmos): cruz ótima (e +1) em cada cor, pares da F2L em qualquer slot,\r
// OLL e PLL, com pulos — e, se você quiser, COLL, OLLCP e ZBLL (por padrão só os casos que você já marcou como aprendidos).\r
// Busca em feixe: a cada etapa ficam só os caminhos mais curtos.\r
// Cada fórmula vira uma permutação dos 54 adesivos (calculada uma vez), então testar uma fórmula é barato.\r
// Depende de globais da página: C (Cubo), Cruz, Embaralhamentos, Animacao, DATA, esc, MODE.\r
(function (global) {\r
  const C = global.Cubo;\r
\r
  // ================= motor rápido =================\r
  const SOLVED = C.solved();\r
  const key = (p, n) => p.join() + '|' + n.join();\r
  const IDX = new Map(SOLVED.map((s, i) => [key(s.p, s.n), i]));\r
  const CODE = { y: 0, w: 1, g: 2, b: 3, o: 4, r: 5 };\r
  const CENTER = SOLVED.map(s => IDX.get(key(s.n, s.n)));  // adesivo do centro da mesma face\r
  function permOf(moves) {\r
    const out = C.apply(SOLVED.map((s, i) => ({ p: s.p, n: s.n, c: i })), moves);\r
    const perm = new Uint8Array(54);\r
    for (const s of out) perm[s.c] = IDX.get(key(s.p, s.n));\r
    return perm;\r
  }\r
  const compose = (p, q) => { const r = new Uint8Array(54); for (let i = 0; i < 54; i++) r[i] = q[p[i]]; return r; };  // p, depois q\r
  function applyP(st, perm) { const out = new Uint8Array(54); for (let i = 0; i < 54; i++) out[perm[i]] = st[i]; return out; }\r
  const toArr = st => { const a = new Uint8Array(54); for (const s of st) a[IDX.get(key(s.p, s.n))] = CODE[s.c]; return a; };\r
  const idxWhere = f => SOLVED.map((s, i) => [s, i]).filter(([s]) => f(s)).map(([, i]) => i);\r
  // com a cruz embaixo: arestas de baixo; slots FR, FL, BL, BR (canto + aresta do meio); face de cima\r
  const CROSS = idxWhere(s => s.p[1] === -1 && C.isEdge(s.p));\r
  const SLOTS = [[1, 1], [-1, 1], [-1, -1], [1, -1]].map(([x, z]) => idxWhere(s => s.p[0] === x && s.p[2] === z && s.p[1] <= 0));\r
  const SLOT_NAME = ['FR', 'FL', 'BL', 'BR'];\r
  const slotNames = m => [0, 1, 2, 3].filter(k => m & (1 << k)).map(k => SLOT_NAME[k]).join('+');\r
  const TOP = idxWhere(s => s.n[1] === 1 && !C.eq(s.p, s.n));\r
  const okIdx = (st, idx) => { for (const i of idx) if (st[i] !== st[CENTER[i]]) return false; return true; };\r
  const crossOk = st => okIdx(st, CROSS);\r
  const maskOf = st => SLOTS.reduce((m, idx, k) => (okIdx(st, idx) ? m | (1 << k) : m), 0);\r
  const ollOk = st => { const c = st[CENTER[TOP[0]]]; for (const i of TOP) if (st[i] !== c) return false; return true; };\r
  const allOk = st => { for (let i = 0; i < 54; i++) if (st[i] !== st[CENTER[i]]) return false; return true; };\r
  // arestas de cima orientadas (COLL e ZBLL partem daí); OLL feita e cantos de cima no lugar, a menos de U (fim da COLL/OLLCP)\r
  const ETOP = idxWhere(s => s.n[1] === 1 && C.isEdge(s.p)), CTOP = idxWhere(s => s.p[1] === 1 && C.isCorner(s.p));\r
  const eoOk = st => { const c = st[CENTER[TOP[0]]]; for (const i of ETOP) if (st[i] !== c) return false; return true; };\r
  const cpOk = st => ollOk(st) && U_PERM.some(p => okIdx(applyP(st, p), CTOP));\r
  const bits = m => (m & 1) + ((m >> 1) & 1) + ((m >> 2) & 1) + ((m >> 3) & 1);\r
  const AUF = ['', 'U', 'U2', "U'"];\r
  const U_PERM = AUF.map(a => permOf(C.parse(a)));\r
  const Y = ['', 'y', 'y2', "y'"], YI = ['', "y'", 'y2', 'y'];\r
\r
  // ================= fórmulas candidatas =================\r
  // texto em giros de face (sem rotações), com o giro de U antes juntado ao começo da fórmula\r
  function variant(alg, k, a) {\r
    const ft = C.toFaceTurns(C.parse(\`\${Y[k]} \${alg} \${YI[k]}\`.trim()));\r
    const moves = a ? [['U', a]].concat(ft) : ft;\r
    const merged = [];\r
    for (const [f, n] of moves) {\r
      if (merged.length && merged[merged.length - 1][0] === f) { merged[merged.length - 1] = [f, (merged[merged.length - 1][1] + n) % 4]; if (!merged[merged.length - 1][1]) merged.pop(); }\r
      else merged.push([f, n]);\r
    }\r
    return merged;\r
  }\r
  const PERM_CACHE = new Map();\r
  function cands(groups, rotations, learnedOnly) {\r
    const out = [], seen = new Set();\r
    for (const c of DATA.cases) {\r
      if (!groups.includes(c.group) || (learnedOnly && c.status !== 'learned')) continue;\r
      for (const alg of [...new Set([c.alg, ...c.alts])]) {\r
        for (const k of rotations) for (let a = 0; a < 4; a++) {\r
          let moves; try { moves = variant(alg, k, a); } catch (e) { continue; }\r
          const text = C.fmt(moves);\r
          if (!text || seen.has(text)) continue;\r
          seen.add(text);\r
          let perm = PERM_CACHE.get(text);\r
          if (!perm) { perm = permOf(moves); PERM_CACHE.set(text, perm); }\r
          out.push({ text, n: moves.length, perm, name: c.name });\r
        }\r
      }\r
    }\r
    return out.sort((x, y) => x.n - y.n);\r
  }\r
  // tirar um par preso (quando nenhuma fórmula serve): R U R' e parecidas, em qualquer slot\r
  const PULL = [0, 1, 2, 3].flatMap(k => ["R U R'", "R U' R'", "R U2 R'", "R' F R F'"].map(a => {\r
    const moves = variant(a, k, 0);\r
    return { text: C.fmt(moves), n: moves.length, perm: permOf(moves) };\r
  }));\r
\r
  // ================= busca =================\r
  const BEAM = 80;\r
  const nap = () => new Promise(r => setTimeout(r, 0));\r
\r
  async function analyze(scramble, colors, target, progress) {\r
    // F2L: as do slot da frente à direita em qualquer slot (por rotação) e as dos outros slots como estão (sem girar)\r
    const F2L = cands(['F2L', 'F2L Avançado'], [0, 1, 2, 3]).concat(cands(['F2L outros slots'], [0])).sort((x, y) => x.n - y.n);\r
    const OLL = cands(['OLL'], [0]), PLL = cands(['PLL'], [0]);\r
    const EXTRA = (CFG.ll || []).map(g => ({ g, list: cands([g], [0], CFG.learnedOnly) })).filter(x => x.list.length);\r
    const zb = C.apply(C.solved(), C.toFaceTurns(C.parse(scramble)));\r
    const stats = { crosses: 0, pairs: 0, ll: 0 };\r
    // cruzes\r
    let frontier = [];\r
    for (const c of colors) {\r
      const held = Cruz.held(zb, c), st = toArr(held);\r
      for (const alg of Cruz.crosses(held, c, 1, 40)) {\r
        const moves = C.parse(alg), s2 = applyP(st, permOf(moves));\r
        frontier.push({ st: s2, mask: maskOf(s2), htm: moves.length, color: c,\r
          steps: [{ k: 'cross', alg, n: moves.length, free: slotNames(maskOf(s2)) }] });\r
        stats.crosses++;\r
      }\r
    }\r
    // pares\r
    const done = [];\r
    const score = nd => nd.htm + 7.5 * (target - Math.min(target, bits(nd.mask)));\r
    for (let stage = 0; stage < 8 && frontier.length; stage++) {\r
      const next = new Map();\r
      frontier.sort((a, b) => score(a) - score(b));\r
      frontier = frontier.slice(0, BEAM);\r
      for (let i = 0; i < frontier.length; i++) {\r
        const nd = frontier[i];\r
        if (bits(nd.mask) >= target) { done.push(nd); continue; }\r
        let kids = expand(nd, F2L, stats);\r
        if (!kids.length) kids = expandPulled(nd, F2L, stats);\r
        for (const kd of kids) {\r
          const h = kd.st.join(',');\r
          const old = next.get(h);\r
          if (!old || old.htm > kd.htm) next.set(h, kd);\r
        }\r
        if (i % 8 === 7) { progress && progress(\`Pares: etapa \${stage + 1}, \${i + 1}/\${frontier.length}…\`); await nap(); }\r
      }\r
      frontier = [...next.values()];\r
    }\r
    for (const nd of frontier) if (bits(nd.mask) >= target) done.push(nd);\r
    done.sort((a, b) => a.htm - b.htm);\r
    const complete = done.slice(0, BEAM);\r
    if (target < 4) return { stats, sols: complete.map(nd => finish(nd, 'part')) };\r
    // última camada\r
    progress && progress('Última camada…'); await nap();\r
    const sols = [];\r
    for (const nd of complete) for (const ll of lastLayer(nd.st, OLL, PLL, stats).concat(extraLL(nd.st, EXTRA, PLL, stats))) {\r
      sols.push(finish({ ...nd, htm: nd.htm + ll.htm, steps: nd.steps.concat(ll.steps) }, ll.type));\r
    }\r
    const seen = new Set();\r
    return { stats, sols: sols.sort((a, b) => a.htm - b.htm).filter(s => !seen.has(s.full) && seen.add(s.full)) };\r
  }\r
\r
  function expand(nd, F2L, stats, pre) {\r
    const best = new Map();  // por conjunto de slots novos: as 3 mais curtas\r
    for (const cd of F2L) {\r
      const s2 = applyP(nd.st, cd.perm);\r
      if (!crossOk(s2)) continue;\r
      const m2 = maskOf(s2);\r
      if ((m2 & nd.mask) !== nd.mask || m2 === nd.mask) continue;\r
      stats.pairs++;\r
      const nw = m2 & ~nd.mask, l = best.get(nw) || [];\r
      const n = cd.n + (pre ? pre.n : 0);\r
      if (l.length < 3 || n < l[l.length - 1].n) {\r
        l.push({ cd, n, s2, m2 }); l.sort((a, b) => a.n - b.n); if (l.length > 3) l.pop();\r
        best.set(nw, l);\r
      }\r
    }\r
    const kids = [];\r
    for (const [nw, l] of best) for (const { cd, n, s2, m2 } of l) {\r
      const slots = [0, 1, 2, 3].filter(k => nw & (1 << k)).map(k => SLOT_NAME[k]).join('+');\r
      kids.push({ st: s2, mask: m2, htm: nd.htm + n, color: nd.color,\r
        steps: nd.steps.concat({ k: 'pair', alg: pre ? \`\${pre.text} \${cd.text}\` : cd.text, n, name: cd.name, slots, pulled: !!pre }) });\r
    }\r
    return kids;\r
  }\r
  function expandPulled(nd, F2L, stats) {\r
    let kids = [];\r
    for (const pl of PULL) {\r
      const s1 = applyP(nd.st, pl.perm);\r
      if (!crossOk(s1) || (maskOf(s1) & nd.mask) !== nd.mask) continue;\r
      kids = kids.concat(expand({ ...nd, st: s1 }, F2L, stats, pl));\r
    }\r
    return kids.sort((a, b) => a.htm - b.htm).slice(0, 6);\r
  }\r
\r
  function lastLayer(st, OLL, PLL, stats) {\r
    // OLL (ou pulo)\r
    let olls = [];\r
    if (ollOk(st)) olls = [{ st, steps: [], htm: 0, skip: true }];\r
    else {\r
      for (const cd of OLL) {\r
        const s2 = applyP(st, cd.perm);\r
        if (!ollOk(s2)) continue;\r
        stats.ll++;\r
        olls.push({ st: s2, steps: [{ k: 'oll', alg: cd.text, n: cd.n, name: cd.name }], htm: cd.n });\r
      }\r
      olls = olls.sort((a, b) => a.htm - b.htm).slice(0, 4);\r
    }\r
    // PLL (ou pulo), com o giro final\r
    const out = [];\r
    for (const o of olls) {\r
      for (const f of pllFinals(o.st, PLL, stats).slice(0, 2)) {\r
        const type = o.skip && f.skip ? 'llskip' : o.skip ? 'ollskip' : f.skip ? 'pllskip' : 'full';\r
        out.push({ steps: o.steps.concat(f.steps), htm: o.htm + f.htm, type });\r
      }\r
    }\r
    return out;\r
  }\r
\r
  // PLL (ou pulo) com o giro final, as mais curtas primeiro\r
  function pllFinals(st, PLL, stats) {\r
    const finals = [];\r
    for (let u = 0; u < 4; u++) if (allOk(applyP(st, U_PERM[u]))) finals.push({ steps: u ? [{ k: 'auf', alg: AUF[u], n: 1 }] : [], htm: u ? 1 : 0, skip: true });\r
    if (!finals.length) {\r
      for (const cd of PLL) {\r
        const s2 = applyP(st, cd.perm);\r
        for (let u = 0; u < 4; u++) {\r
          if (!allOk(u ? applyP(s2, U_PERM[u]) : s2)) continue;\r
          stats.ll++;\r
          finals.push({ steps: [{ k: 'pll', alg: cd.text + (u ? \` \${AUF[u]}\` : ''), n: cd.n + (u ? 1 : 0), name: cd.name }], htm: cd.n + (u ? 1 : 0) });\r
        }\r
      }\r
    }\r
    return finals.sort((a, b) => a.htm - b.htm);\r
  }\r
\r
  // última camada com os conjuntos avançados: COLL (arestas orientadas) e OLLCP fazem a OLL e os cantos de uma vez e\r
  // sobra a PLL das arestas; a ZBLL (arestas orientadas) resolve tudo. Só quando a OLL ainda não está feita\r
  function extraLL(st, extra, PLL, stats) {\r
    if (!extra.length || ollOk(st)) return [];\r
    const eo = eoOk(st), out = [];\r
    for (const { g, list } of extra) {\r
      if (g !== 'OLLCP' && !eo) continue;\r
      const k = g.toLowerCase(), found = [];\r
      for (const cd of list) {\r
        const s2 = applyP(st, cd.perm);\r
        if (g === 'ZBLL') {\r
          for (let u = 0; u < 4; u++) {\r
            if (!allOk(u ? applyP(s2, U_PERM[u]) : s2)) continue;\r
            stats.ll++;\r
            found.push({ steps: [{ k, alg: cd.text + (u ? \` \${AUF[u]}\` : ''), n: cd.n + (u ? 1 : 0), name: cd.name }], htm: cd.n + (u ? 1 : 0) });\r
          }\r
        } else if (cpOk(s2)) { stats.ll++; found.push({ st: s2, steps: [{ k, alg: cd.text, n: cd.n, name: cd.name }], htm: cd.n }); }\r
      }\r
      found.sort((a, b) => a.htm - b.htm);\r
      for (const f of found.slice(0, 2)) {\r
        if (g === 'ZBLL') { out.push({ steps: f.steps, htm: f.htm, type: k }); continue; }\r
        const p = pllFinals(f.st, PLL, stats)[0];\r
        if (p) out.push({ steps: f.steps.concat(p.steps), htm: f.htm + p.htm, type: k });\r
      }\r
    }\r
    return out;\r
  }\r
\r
  function finish(nd, type) {\r
    const rot = Cruz.ROT[nd.color];\r
    const full = [rot, ...nd.steps.map(s => s.alg)].filter(Boolean).join(' ');\r
    return { ...nd, type, rot, full, st: undefined };\r
  }\r
\r
  // ================= tela =================\r
  const CFG_KEY = 'cfop-analise-cfg';\r
  let CFG = { colors: ['w', 'y', 'g', 'b', 'r', 'o'], target: 4, filter: 'all', ll: [], learnedOnly: true };\r
  try { Object.assign(CFG, JSON.parse(localStorage.getItem(CFG_KEY) || '{}')); } catch (e) {}\r
  const saveCfg = () => { try { localStorage.setItem(CFG_KEY, JSON.stringify(CFG)); } catch (e) {} };\r
  const COLOR_LABEL = { w: 'Branca', y: 'Amarela', g: 'Verde', b: 'Azul', r: 'Vermelha', o: 'Laranja' };\r
  const TYPES = { all: 'Todas', full: 'Passo completo', ollskip: 'Pulo de OLL', pllskip: 'Pulo de PLL', llskip: 'Pulo da última camada',\r
    coll: 'Com COLL', ollcp: 'Com OLLCP', zbll: 'Com ZBLL' };\r
  const LL_SETS = ['COLL', 'OLLCP', 'ZBLL'];  // conjuntos avançados que a Análise pode usar na última camada\r
  let R = { scramble: '', result: null, busy: false, msg: '', open: 0, run: 0 };\r
\r
  function stepLabel(s, i, pairNo) {\r
    if (s.k === 'cross') return s.free ? \`cruz · par \${s.free} já fica pronto\` : 'cruz';\r
    if (s.k === 'pair') return \`\${s.name} · par \${pairNo}\${s.slots.includes('+') ? 's' : ''} (\${s.slots})\${s.pulled ? ' · tira o par antes' : ''}\`;\r
    if (s.k === 'oll') return s.name;\r
    if (s.k === 'pll') return s.name;\r
    if (['coll', 'ollcp', 'zbll'].includes(s.k)) return s.name;\r
    return 'giro final';\r
  }\r
  function solHTML(s, i) {\r
    let pairNo = 0;\r
    const lines = [\`<div><span class="xrot">\${esc(s.rot || '(sem girar)')}</span> <i>// inspeção: cruz \${Cruz.COLOR_NAME[s.color]} embaixo</i></div>\`]\r
      .concat(s.steps.map(st => {\r
        if (st.k === 'pair') pairNo += st.slots.split('+').length;\r
        return \`<div>\${esc(st.alg)} <i>// \${esc(stepLabel(st, i, pairNo))} (\${st.n})</i></div>\`;\r
      }))\r
      .concat(['ollskip', 'llskip'].includes(s.type) ? ['<div><i>// OLL: pulo (a última camada já está orientada)</i></div>'] : [])\r
      .concat(['pllskip', 'llskip'].includes(s.type) ? ['<div><i>// PLL: pulo</i></div>'] : []);\r
    const tag = { full: '', ollskip: 'pulo de OLL', pllskip: 'pulo de PLL', llskip: 'pulo da última camada', part: '', coll: 'COLL', ollcp: 'OLLCP', zbll: 'ZBLL' }[s.type];\r
    return \`<div class="asol \${R.open === i ? 'open' : ''}">\r
      <button class="asolh" data-aa="open" data-i="\${i}"><b>\${s.htm} HTM</b> <span><i style="background:\${Imagens.COLORS[s.color]}"></i>cruz \${Cruz.COLOR_NAME[s.color]}\${tag ? \` · \${tag}\` : ''}</span></button>\r
      \${R.open === i ? \`<div class="asolb">\${lines.join('')}\r
        <div class="tdbtns"><button class="aplay big" data-aa="anim" data-i="\${i}">▶ Animar a resolução</button>\r
        <button class="lnk" data-aa="copy" data-i="\${i}">copiar</button></div></div>\` : ''}\r
    </div>\`;\r
  }\r
\r
  // a resolução para o player: uma linha por etapa, com o nome do caso em comentário (F2L 42, PLL V…),\r
  // para saber em que parte da resolução a animação está\r
  function script(s) {\r
    let pairNo = 0;\r
    const lines = s.rot ? [\`\${s.rot} // inspeção: cruz \${Cruz.COLOR_NAME[s.color]} embaixo\`] : [];\r
    for (const st of s.steps) {\r
      if (st.k === 'pair') pairNo += st.slots.split('+').length;\r
      lines.push(\`\${st.alg} // \${stepLabel(st, 0, pairNo)}\`);\r
    }\r
    if (['ollskip', 'llskip'].includes(s.type)) lines.push('// OLL: pulo');\r
    if (['pllskip', 'llskip'].includes(s.type)) lines.push('// PLL: pulo');\r
    return lines.join('\\n');\r
  }\r
\r
  const learnedCount = () => DATA ? DATA.cases.filter(c => (CFG.ll || []).includes(c.group) && c.status === 'learned').length : 0;\r
\r
  function visible() {\r
    const sols = R.result ? R.result.sols : [];\r
    return CFG.filter === 'all' || CFG.target < 4 ? sols : sols.filter(s => s.type === CFG.filter);\r
  }\r
\r
  function draw() {\r
    const root = document.getElementById('sheets');\r
    let zb = null, err = '';\r
    if (R.scramble) { try { zb = C.apply(C.solved(), C.toFaceTurns(C.parse(R.scramble))); } catch (e) { err = e.message; } }\r
    const res = R.result, sols = visible();\r
    root.innerHTML = \`<div class="train analise">\r
      <div class="tcfg">\r
        <div class="trow"><input class="ainput" data-af="scr" placeholder="Cole ou digite um embaralhamento (ex.: R U R' F2 …)" value="\${esc(R.scramble)}">\r
          <button data-aa="rand" title="Gerar um embaralhamento aleatório (padrão WCA)">🎲</button>\r
          <button class="primary" data-aa="go" \${R.busy ? 'disabled' : ''}>🔎 Analisar</button></div>\r
        <div class="trow"><span>Cor da cruz:</span>\${Object.entries(COLOR_LABEL).map(([c, l]) => \`<label><input type="checkbox" data-ac="\${c}" \${CFG.colors.includes(c) ? 'checked' : ''}> \${l}</label>\`).join('')}</div>\r
        <div class="trow"><label>Até <select data-af="target">\r
          \${[[4, 'Resolução completa'], [3, 'Cruz + 3 pares'], [2, 'Cruz + 2 pares'], [1, 'Cruz + 1 par']].map(([v, l]) => \`<option value="\${v}" \${+CFG.target === v ? 'selected' : ''}>\${l}</option>\`).join('')}</select></label>\r
          <span class="tpnote">Usa as suas fórmulas (planilha + Meus algoritmos). Embaralhe com o branco em cima e o verde na frente.</span></div>\r
        <div class="trow"><span title="Além de OLL + PLL, tentar a última camada com estes conjuntos">Última camada também com:</span>\r
          \${LL_SETS.map(g => \`<label><input type="checkbox" data-al="\${g}" \${(CFG.ll || []).includes(g) ? 'checked' : ''}> \${g}</label>\`).join('')}\r
          <label title="Usar só os casos marcados como aprendidos em Meus algoritmos (desmarcado: todos os casos do conjunto)"><input type="checkbox" data-al="*learned" \${CFG.learnedOnly ? 'checked' : ''}> só os que você já aprendeu</label>\r
          \${(CFG.ll || []).length && CFG.learnedOnly ? \`<span class="tpnote">\${learnedCount()} caso(s) marcados como aprendidos nesses conjuntos</span>\` : ''}</div>\r
      </div>\r
      \${err ? \`<div class="tsess"><div class="rfeed bad">Embaralhamento inválido: \${esc(err)}</div></div>\` : ''}\r
      \${zb ? \`<div class="tsess"><div class="tlbl">Embaralhamento</div><div class="xscr">\${esc(R.scramble)}</div>\r
        <div class="xnet">\${Cruz.netSVG(zb, null)}</div>\r
        \${R.busy ? \`<div class="tstat">\${esc(R.msg || 'Analisando…')}</div>\` : ''}\r
        \${res ? \`<div class="tstat">\${res.stats.crosses} cruzes · \${res.stats.pairs} soluções de pares · \${res.stats.ll} de última camada testadas · <b>\${res.sols.length}</b> soluções</div>\` : ''}\r
      </div>\` : ''}\r
      \${res && CFG.target >= 4 ? \`<div class="mgroups afilters">\${Object.entries(TYPES).filter(([k]) => !['coll', 'ollcp', 'zbll'].includes(k) || (CFG.ll || []).includes(k.toUpperCase())).map(([k, l]) => {\r
          const n = k === 'all' ? res.sols.length : res.sols.filter(s => s.type === k).length;\r
          return \`<button data-aa="filter" data-k="\${k}" class="\${CFG.filter === k ? 'on' : ''}">\${l} <small>\${n}</small></button>\`;\r
        }).join('')}</div>\` : ''}\r
      \${res ? \`<div class="asols">\${sols.slice(0, 40).map((s, i) => solHTML(s, i)).join('') || '<div class="tstat">Nenhuma solução nesta categoria.</div>'}</div>\` : ''}\r
    </div>\`;\r
    const info = document.getElementById('info');\r
    if (info) info.textContent = 'Análise de embaralhamento · soluções CFOP com as suas fórmulas';\r
  }\r
\r
  async function run() {\r
    if (!R.scramble.trim() || R.busy) return;\r
    try { C.parse(R.scramble); } catch (e) { R.result = null; return draw(); }\r
    if (!CFG.colors.length) { alert('Escolha pelo menos uma cor de cruz.'); return; }\r
    R.busy = true; R.result = null; R.open = 0; R.msg = 'Analisando…';\r
    const my = ++R.run;\r
    draw();\r
    await nap();\r
    try {\r
      const result = await analyze(R.scramble, CFG.colors, +CFG.target, m => {\r
        if (R.run !== my) return;\r
        R.msg = m; const el = document.querySelector('.analise .tstat'); if (el) el.textContent = m;\r
      });\r
      if (R.run !== my) return;\r
      R.result = result;\r
    } catch (e) { alert('Erro na análise: ' + e.message); }\r
    R.busy = false;\r
    if (MODE === 'analise') draw();\r
  }\r
\r
  function init() {\r
    const root = document.getElementById('sheets');\r
    root.addEventListener('click', ev => {\r
      if (MODE !== 'analise') return;\r
      const b = ev.target.closest('[data-aa]'); if (!b) return;\r
      const a = b.dataset.aa, sols = visible(), s = sols[+b.dataset.i];\r
      if (a === 'go') { R.scramble = root.querySelector('[data-af=scr]').value.trim(); return run(); }\r
      if (a === 'rand') { R.scramble = Embaralhamentos.randomState().scramble; R.result = null; draw(); return run(); }\r
      if (a === 'filter') { CFG.filter = b.dataset.k; saveCfg(); R.open = 0; return draw(); }\r
      if (a === 'open') { R.open = R.open === +b.dataset.i ? -1 : +b.dataset.i; return draw(); }\r
      if (a === 'anim' && s) return Animacao.open({ scramble: R.scramble, alg: script(s), title: \`\${s.htm} HTM · cruz \${Cruz.COLOR_NAME[s.color]}\` });\r
      if (a === 'copy' && s) { navigator.clipboard && navigator.clipboard.writeText(s.full); b.textContent = 'copiado!'; }\r
    });\r
    root.addEventListener('change', ev => {\r
      if (MODE !== 'analise') return;\r
      const c = ev.target.dataset.ac;\r
      const l = ev.target.dataset.al;\r
      if (l) {\r
        if (l === '*learned') CFG.learnedOnly = ev.target.checked;\r
        else CFG.ll = LL_SETS.filter(g => root.querySelector(\`[data-al="\${g}"]\`).checked);\r
        saveCfg(); draw(); if (R.scramble && R.result) run(); return;\r
      }\r
      if (c) { CFG.colors = Object.keys(COLOR_LABEL).filter(k => root.querySelector(\`[data-ac=\${k}]\`).checked); saveCfg(); return; }\r
      if (ev.target.dataset.af === 'target') { CFG.target = +ev.target.value; saveCfg(); if (R.scramble) run(); }\r
    });\r
    root.addEventListener('keydown', ev => {\r
      if (MODE === 'analise' && ev.key === 'Enter' && ev.target.dataset.af === 'scr') { R.scramble = ev.target.value.trim(); run(); }\r
    });\r
  }\r
\r
  // abre a aba com um embaralhamento (vindo da aba Cruz)\r
  function open(scramble, colors) {\r
    R.scramble = scramble; R.result = null;\r
    if (colors && colors.length) { CFG.colors = colors.slice(); saveCfg(); }\r
    setMode('analise');\r
    run();\r
  }\r
\r
  global.Analise = { render: draw, init, open, _analyze: analyze };\r
})(window);\r
`,r=globalThis,i={cases:[]},a=JSON.stringify({ll:t,learnedOnly:!1});`Analise`in r||Function(`window`,`localStorage`,`DATA`,n)(globalThis,{getItem:()=>a,setItem:()=>void 0},i);var{Analise:o,Cruz:s,Cubo:c,Embaralhamentos:l}=r,u={full:`completa`,ollskip:`puloDeOll`,pllskip:`puloDePll`,llskip:`puloDaUltimaCamada`,part:`parcial`,coll:`coll`,ollcp:`ollcp`,zbll:`zbll`},d={cross:`cruz`,pair:`par`,oll:`oll`,pll:`pll`,coll:`coll`,ollcp:`ollcp`,zbll:`zbll`,auf:`giro`},f=t=>t in e;function p(e){return c.apply(c.solved(),c.toFaceTurns(c.parse(e)))}function m(e){try{p(e);return}catch(e){return e instanceof Error?e.message:String(e)}}function h(e){return s.netSVG(p(e),null)}function g(){return l.randomState().scramble}async function _(e,t,n,r,a){i.cases=r.flatMap(({grupo:e,nome:t,formulas:[n,...r]})=>n?[{group:e,name:t,alg:n,alts:r}]:[]);let{stats:s,sols:c}=await o._analyze(e,[...t],n,a);return{cruzes:s.crosses,solucoesDePares:s.pairs,ultimasCamadas:s.ll,solucoes:c.flatMap(e=>f(e.color)?[{movimentos:e.htm,cor:e.color,giro:e.rot??``,tipo:u[e.type]??`completa`,texto:e.full,etapas:e.steps.map(e=>({tipo:d[e.k]??`giro`,alg:e.alg,movimentos:e.n,caso:e.name,pares:e.slots??(e.free||void 0),tirou:e.pulled}))}]:[])}}export{_ as analisar,g as embaralhamentoAleatorio,m as erroDoEmbaralhamento,h as planificacaoDoEmbaralhamento};
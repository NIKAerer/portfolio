// Lecteur de la séquence Blender : le scroll choisit l'image affichée, le geste
// horizontal fait tourner la vraie caméra autour du bureau (arc de ±12°).
// La page du site est plaquée dans l'écran du PC avec les coins mesurés image par image.
//
// Règle de rendu : jamais de fondu entre deux images (ça crée des fantômes).
// Plongée : micro-zoom de l'image courante calé sur l'image suivante. Arc : image la plus proche.

const SETS = {
  wide: { dir: 'wide', W: 1920, H: 1080, poster: true },
  portrait: { dir: 'portrait', W: 1080, H: 2340, poster: false },
}
const PAGE_W = 1280
const PAGE_H = 728
const LOOK_PX = [10, 5]
const ORDER = ['top_left', 'top_right', 'bottom_right', 'bottom_left']
// décalage du poster SCROLL le long de l'arc (mesuré sur les rendus, en px 1920)
const POSTER_SHIFT = { left: [-31, 2], right: [17, -3] }
// images à charger avant d'enlever l'écran de chargement : le début de la plongée et le centre de l'arc
const READY_DIVE = 12
const READY_ARC = 8

const clamp = (x, a, b) => Math.min(b, Math.max(a, x))
const seg = (x, a, b) => clamp((x - a) / (b - a), 0, 1)
const ease = (x) => 1 - Math.pow(1 - x, 3)
const ok = (im) => !!(im && im.complete && im.naturalWidth)

function homography(w, h, q) {
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = q
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3
  const den = dx1 * dy2 - dx2 * dy1
  const g = (dx3 * dy2 - dx2 * dy3) / den, hh = (dx1 * dy3 - dx3 * dy1) / den
  const a = x1 - x0 + g * x1, b = x3 - x0 + hh * x3, c = x0
  const d = y1 - y0 + g * y1, e = y3 - y0 + hh * y3, f = y0
  return [a / w, d / w, 0, g / w, b / h, e / h, 0, hh / h, 0, 0, 1, 0, c, f, 0, 1]
}

const toQuads = (frames, set) =>
  frames.map((f) => ORDER.map((k) => [f.corners[k][0] * set.W, f.corners[k][1] * set.H]))

function normArc(raw, set, base) {
  const a = raw[set.dir].arc
  if (!a || !a.frames || a.frames.length !== a.count) return null
  return { count: a.count, c: a.center_index, files: a.frames.map((f) => base + f.file), corners: toQuads(a.frames, set) }
}

/**
 * el : { track, sticky, canvas, screen, screenIn, full, veil, screenLayer, posterLayer, poster,
 *        hintScroll, hintDrag, skip, fallback }
 * opts : { base, onProgress(fraction), onReady() }
 * Renvoie une fonction qui arrête tout.
 */
export function startPlayer(el, { base, onProgress, onReady }) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const ctx = el.canvas.getContext('2d')
  const WIN = matchMedia('(pointer: coarse)').matches ? 5 : 8
  const off = []
  const on = (target, type, fn, o) => { target.addEventListener(type, fn, o); off.push(() => target.removeEventListener(type, fn, o)) }

  let set, frames = [], corners = [], COUNT = 0
  let vw = innerWidth, vh = innerHeight, dpr = 1
  let pTarget = 0, p = 0, look = [0, 0], lookTarget = [0, 0]
  let dragging = false, dragStart = null, dragged = false
  let t0 = performance.now(), introDone = reduce, quad = null, lastKey = ''
  let arc = null, arcImgs = [], raf = 0, stopped = false, running = false
  let loaded = 0, total = 1, ready = false

  // images déjà décodées autour de la position courante : le dessin ne décode plus rien
  const bmp = new Map()
  let winAt = ''
  function want(key, im) {
    if (bmp.has(key) || !ok(im) || !self.createImageBitmap) return
    bmp.set(key, null)
    createImageBitmap(im)
      .then((b) => { if (bmp.has(key) && !bmp.get(key)) { bmp.set(key, b); lastKey = '' } else b.close() })
      .catch(() => bmp.delete(key))
  }
  const src = (key, im) => bmp.get(key) || (ok(im) ? im : null)
  function keepAround(di, ai) {
    const at = di + '/' + ai
    if (at === winAt) return
    winAt = at
    const keep = new Set()
    for (let k = di - WIN; k <= di + WIN; k++) if (k >= 0 && k < COUNT) { keep.add('d' + k); want('d' + k, frames[k]) }
    if (arc && ai >= 0) for (let k = ai - WIN; k <= ai + WIN; k++) if (k >= 0 && k < arc.count) { keep.add('a' + k); want('a' + k, arcImgs[k]) }
    for (const [k, b] of bmp) if (!keep.has(k)) { if (b) b.close(); bmp.delete(k) }
  }

  function resize() {
    vw = innerWidth
    vh = el.sticky.clientHeight || innerHeight
    // pas plus de pixels que l'image n'en a : au-delà, on peint pour rien
    const cover = set ? Math.max(vw / set.W, vh / set.H) : 1
    dpr = Math.max(1, Math.min(devicePixelRatio || 1, 2, 1.1 / cover))
    el.canvas.width = Math.round(vw * dpr)
    el.canvas.height = Math.round(vh * dpr)
    lastKey = ''
  }
  function readScroll() {
    const r = el.track.getBoundingClientRect()
    pTarget = clamp(-r.top / (el.track.offsetHeight - vh), 0, 1)
  }
  on(window, 'resize', resize)
  on(window, 'scroll', readScroll, { passive: true })

  on(el.sticky, 'pointerdown', (e) => {
    if (e.target.closest('button, a') || p > 0.6) return
    dragging = true
    dragStart = [e.clientX, e.clientY, lookTarget[0], lookTarget[1]]
    el.sticky.classList.add('drag')
  })
  on(window, 'pointermove', (e) => {
    if (!dragging) return
    const k = 2.4 / Math.min(vw, 900)
    lookTarget = [
      clamp(dragStart[2] - (e.clientX - dragStart[0]) * k, -1, 1),
      clamp(dragStart[3] - (e.clientY - dragStart[1]) * k, -1, 1),
    ]
    if (!dragged && Math.hypot(e.clientX - dragStart[0], e.clientY - dragStart[1]) > 12) {
      dragged = true
      el.hintDrag.style.opacity = 0
    }
  })
  const release = () => { dragging = false; el.sticky.classList.remove('drag') }
  on(window, 'pointerup', release)
  on(window, 'pointercancel', release)

  let last = performance.now()
  function frame(now) {
    if (stopped) return
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    p += (pTarget - p) * (1 - Math.exp(-dt * 8))
    if (!dragging) lookTarget = lookTarget.map((v) => v * Math.exp(-dt * 0.9))
    look = look.map((v, i) => v + (lookTarget[i] - v) * (1 - Math.exp(-dt * 6)))
    const t = (now - t0) / 1000
    const intro = reduce ? 1 : ease(clamp(t / 2.6, 0, 1))
    const z = seg(p, 0.04, 0.9)
    const zf = z * (COUNT - 1)
    let i = Math.floor(zf)
    const i1 = Math.min(i + 1, COUNT - 1), zfrac = zf - i
    while (i > 0 && !ok(frames[i])) i--
    const img = src('d' + i, frames[i])
    const amt = 1 - z
    const idle = reduce ? [0, 0] : [Math.sin(t * 0.31) * 0.3 + Math.sin(t * 0.13) * 0.15, Math.sin(t * 0.23 + 1.3) * 0.3]
    // avec l'arc, le geste horizontal tourne la vraie caméra ; sinon simple glissement de quelques pixels
    const arcAmt = arc ? 1 - seg(p, 0, 0.04) : 0
    const arcX = arc ? clamp(arc.c + (look[0] + (reduce ? 0 : Math.sin(t * 0.27) * 0.16)) * arc.c * arcAmt, 0, arc.count - 1) : 0
    const shift = [arc ? 0 : (look[0] + idle[0]) * amt * LOOK_PX[0], (look[1] + idle[1]) * amt * LOOK_PX[1]]
    // cadrage « cover » + petite marge pour le regard, et une arrivée qui se pose doucement
    const s = Math.max(vw / set.W, vh / set.H) * (1.025 + 0.05 * (1 - intro))
    const ox = (vw - set.W * s) / 2 - shift[0], oy = (vh - set.H * s) / 2 - shift[1]
    const a0 = Math.floor(arcX), a1 = Math.min(a0 + 1, arc ? arc.count - 1 : 0), af = arcX - a0
    const onArc = arc && z === 0 && ok(arcImgs[a0])
    keepAround(i, arc && arcAmt > 0 ? a0 : -1)
    const key = [onArc ? 'a' + arcX.toFixed(2) : 'd' + zf.toFixed(2) + i, ox.toFixed(1), oy.toFixed(1), s.toFixed(4)].join()
    if (key !== lastKey && (onArc || img)) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (onArc) {
        const an = af >= 0.5 && ok(arcImgs[a1]) ? a1 : a0
        ctx.drawImage(src('a' + an, arcImgs[an]), ox, oy, set.W * s, set.H * s)
        quad = arc.corners[an]
      } else {
        // entre deux vraies images, l'image courante avance d'un micro-zoom centré sur l'écran,
        // calé pour que l'écran arrive exactement là où il est dans l'image suivante
        const q0 = corners[i]
        let kz = 1, c0 = [0, 0], ct = [0, 0]
        if (i === Math.floor(zf) && zfrac > 0 && i1 > i) {
          const q1 = corners[i1]
          const size = (q) => Math.hypot(q[1][0] - q[0][0], q[1][1] - q[0][1]) + Math.hypot(q[2][0] - q[3][0], q[2][1] - q[3][1])
          const mid = (q) => [(q[0][0] + q[1][0] + q[2][0] + q[3][0]) / 4, (q[0][1] + q[1][1] + q[2][1] + q[3][1]) / 4]
          kz = Math.pow(size(q1) / size(q0), zfrac)
          c0 = mid(q0)
          const c1 = mid(q1)
          ct = [c0[0] + (c1[0] - c0[0]) * zfrac, c0[1] + (c1[1] - c0[1]) * zfrac]
        }
        const tx = ct[0] - c0[0] * kz, ty = ct[1] - c0[1] * kz
        ctx.drawImage(img, ox + tx * s, oy + ty * s, set.W * s * kz, set.H * s * kz)
        quad = kz === 1 ? q0 : q0.map(([x, y]) => [tx + x * kz, ty + y * kz])
      }
      lastKey = key
    }
    if (quad) el.screen.style.transform = 'matrix3d(' + homography(PAGE_W, PAGE_H, quad).join(',') + ')'
    if (set.poster) {
      const r = arc ? (arcX - arc.c) / arc.c : 0
      const sh = r < 0 ? POSTER_SHIFT.left : POSTER_SHIFT.right
      const k = (Math.abs(r) * set.W) / 1920
      el.poster.style.transform = `translate(${sh[0] * k}px, ${sh[1] * k}px) scale(${set.W / 2560})`
    }
    el.screenLayer.style.transform = el.posterLayer.style.transform = `translate(${ox}px, ${oy}px) scale(${s})`
    el.posterLayer.style.opacity = 1 - seg(p, 0, 0.05)

    el.screenIn.style.opacity = 1 - seg(p, 0.86, 0.93)
    el.full.style.opacity = seg(p, 0.9, 0.95)
    const f = seg(p, 0.93, 0.99)
    el.full.style.setProperty('--c', f)
    el.full.classList.toggle('live', f > 0.98)
    el.full.inert = f <= 0.98
    const ui = 1 - seg(p, 0.02, 0.1)
    el.hintScroll.style.opacity = ui
    if (!dragged) el.hintDrag.style.opacity = ui * (introDone ? 1 : 0)
    el.skip.style.opacity = 1 - seg(p, 0.9, 0.98)
    el.skip.style.visibility = p > 0.98 ? 'hidden' : 'visible'
    raf = requestAnimationFrame(frame)
  }

  function loadImage(url, isEssential) {
    const im = new Image()
    im.decoding = 'async'
    const done = () => {
      loaded++
      if (isEssential) essentialLeft--
      winAt = ''
      onProgress?.(loaded / total)
      if (!ready && essentialLeft <= 0) { ready = true; onReady?.() }
    }
    im.onload = done
    im.onerror = done
    im.src = url
    return im
  }
  let essentialLeft = 0

  let available = ['wide']
  const sceneFor = () => (innerWidth / innerHeight < 0.8 && available.includes('portrait') ? 'portrait' : 'wide')

  function start(name, raw) {
    set = { ...SETS[name], name }
    corners = toQuads(raw[set.dir].frames, set)
    for (const L of [el.screenLayer, el.posterLayer]) { L.style.width = set.W + 'px'; L.style.height = set.H + 'px' }
    el.posterLayer.hidden = !set.poster
    el.poster.style.transform = `scale(${set.W / 2560})`
    arc = normArc(raw, set, base)
    quad = null
    const files = raw[set.dir].frames.map((f) => base + f.file)
    COUNT = files.length
    for (const b of bmp.values()) if (b) b.close()
    bmp.clear()
    winAt = ''
    loaded = 0
    total = COUNT + (arc ? arc.count : 0)
    // ordre de chargement : ce qu'on voit à l'arrivée d'abord, le fond de la plongée en dernier
    const arcFirst = arc
      ? Array.from({ length: arc.count }, (_, k) => k).sort((a, b) => Math.abs(a - arc.c) - Math.abs(b - arc.c))
      : []
    essentialLeft = Math.min(READY_DIVE, COUNT) + Math.min(READY_ARC * 2 + 1, arcFirst.length)
    frames = new Array(COUNT)
    arcImgs = arc ? new Array(arc.count) : []
    frames[0] = loadImage(files[0], true)
    frames[0].decode().catch(() => {}).then(() => {
      if (stopped) return
      arcFirst.forEach((k, n) => { arcImgs[k] = loadImage(arc.files[k], n <= READY_ARC * 2) })
      for (let k = 1; k < COUNT; k++) frames[k] = loadImage(files[k], k < READY_DIVE)
      resize()
      readScroll()
      lastKey = ''
      if (!running) {
        running = true
        t0 = performance.now()
        el.veil.style.opacity = 0
        setTimeout(() => el.screen.classList.add('on'), reduce ? 0 : 1500)
        setTimeout(() => { introDone = true }, reduce ? 0 : 2600)
        raf = requestAnimationFrame(frame)
      }
    })
  }

  fetch(base + 'corners.json')
    .then((r) => r.json())
    .then((raw) => {
      if (stopped) return
      available = Object.keys(SETS).filter((k) => raw[k] && raw[k].frames && raw[k].frames.length >= 2)
      start(sceneFor(), raw)
      on(window, 'resize', () => { if (sceneFor() !== set.name) start(sceneFor(), raw) })
    })
    .catch(() => {
      el.veil.style.opacity = 0
      el.fallback.style.display = 'block'
      ready = true
      onReady?.()
    })
  resize()

  return () => {
    stopped = true
    cancelAnimationFrame(raf)
    off.forEach((fn) => fn())
    for (const b of bmp.values()) if (b) b.close()
    bmp.clear()
  }
}

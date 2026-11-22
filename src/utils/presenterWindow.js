// ==========================================================================
// Presenter Window Manager
// Permite abrir una ventana secundaria de apoyo para la laptop del presentador
// ==========================================================================

import { QA_LIST, SECTIONS } from '../data/slidesData'

let pw = null

export function isPresenterOpen() {
  return pw && !pw.closed
}

export function openPresenterWindow({
  slides,
  currentSlide,
  step,
  elapsed,
  onNext,
  onPrev,
  onStartTimer,
  onPauseTimer,
  onResetTimer
}) {
  if (pw && !pw.closed) {
    pw.focus()
    syncPresenterWindow({ slides, currentSlide, step, elapsed })
    return
  }

  pw = window.open('', 'didis_presenter', 'width=1000,height=720')
  if (!pw) {
    alert(
      'El navegador bloqueó la ventana emergente. Permite las ventanas emergentes para este sitio y vuelve a presionar P.'
    )
    return
  }

  const qaHtml = QA_LIST.map(
    (q, i) =>
      `<details><summary>${i + 1}. ${q.question}</summary><p>${q.answer}</p></details>`
  ).join('')

  pw.document.open()
  pw.document.write(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Presentador · The Didi's House</title>
  <style>
    body { margin: 0; font: 16px/1.45 "Segoe UI", system-ui, sans-serif; background: #0E1544; color: #fff; padding: 18px 24px; }
    .top { display: flex; align-items: center; gap: 22px; border-bottom: 3px solid #F6B92B; padding-bottom: 12px; }
    #pt { font: 800 64px/1 Georgia, serif; font-variant-numeric: tabular-nums; }
    #pt.warn { color: #F6B92B; }
    #pt.stop { color: #FF7A63; }
    button { font: 700 15px "Segoe UI", sans-serif; padding: 9px 16px; border: 0; background: #3346B3; color: #fff; cursor: pointer; margin-right: 6px; }
    button.g { background: #F6B92B; color: #10153A; }
    .bar { position: relative; height: 12px; background: #2A3578; margin: 14px 0; }
    .bar i { position: absolute; left: 0; top: 0; bottom: 0; background: #F6B92B; }
    .bar u { position: absolute; top: -4px; bottom: -4px; width: 3px; background: #fff; }
    .grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 26px; }
    h2 { font: 800 26px Georgia, serif; margin: 4px 0; }
    .sec { color: #AEB7E6; margin-bottom: 8px; }
    .notes ul { margin: 6px 0 0 20px; padding: 0; }
    .notes li { margin-bottom: 5px; }
    .nx { color: #AEB7E6; }
    .nx b { color: #fff; }
    details { background: #1A2468; margin: 6px 0; padding: 8px 12px; }
    summary { cursor: pointer; font-weight: 700; }
    details p { margin: 8px 0 2px; color: #DDE2F7; }
    .ck label { display: block; margin: 4px 0; }
  </style>
</head>
<body>
  <div class="top">
    <div id="pt">8:00</div>
    <div>
      <button class="g" id="b1">Iniciar</button>
      <button id="b2">Pausa</button>
      <button id="b3">Reiniciar</button>
    </div>
    <div id="plan" class="nx"></div>
  </div>
  <div class="bar">
    <i id="pf"></i>
    <u style="left:75%" title="Minuto 6"></u>
  </div>
  <div class="grid">
    <div>
      <h2 id="ttl"></h2>
      <div class="sec" id="sec"></div>
      <div class="notes" id="nt"></div>
      <p style="margin-top:18px">
        <button id="bp">‹ Anterior</button>
        <button id="bn" class="g">Siguiente ›</button>
      </p>
    </div>
    <div>
      <div class="nx" id="nxt"></div>
      <h2 style="margin-top:18px;font-size:20px">Antes de empezar</h2>
      <div class="ck">
        <label><input type="checkbox"> Prototipo abierto en otra pestaña</label>
        <label><input type="checkbox"> Capturas de respaldo cargadas</label>
        <label><input type="checkbox"> Internet probado</label>
        <label><input type="checkbox"> Quién responde cada pregunta, repartido</label>
      </div>
      <h2 style="margin-top:18px;font-size:20px">Preguntas probables</h2>
      ${qaHtml}
    </div>
  </div>
</body>
</html>`)
  pw.document.close()

  const d = pw.document
  if (d.getElementById('b1')) d.getElementById('b1').onclick = onStartTimer
  if (d.getElementById('b2')) d.getElementById('b2').onclick = onPauseTimer
  if (d.getElementById('b3')) d.getElementById('b3').onclick = onResetTimer
  if (d.getElementById('bp')) d.getElementById('bp').onclick = onPrev
  if (d.getElementById('bn')) d.getElementById('bn').onclick = onNext

  pw.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault()
      onNext()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      onPrev()
    }
  })

  syncPresenterWindow({ slides, currentSlide, step, elapsed })
}

export function syncPresenterWindow({ slides, currentSlide, step, elapsed }) {
  if (!pw || pw.closed) return
  const d = pw.document
  const pt = d.getElementById('pt')
  if (!pt) return

  const fmt = (s) => {
    const sec = Math.max(0, Math.round(s))
    const m = Math.floor(sec / 60)
    const rem = ('0' + (sec % 60)).slice(-2)
    return `${m}:${rem}`
  }

  const left = 480 - elapsed
  pt.textContent = left >= 0 ? fmt(left) : '+' + fmt(-left)
  pt.className = elapsed >= 480 ? 'stop' : elapsed >= 360 ? 'warn' : ''

  const pf = d.getElementById('pf')
  if (pf) {
    pf.style.width = Math.min(elapsed / 480, 1) * 100 + '%'
  }

  const s = slides[currentSlide]
  const sec = SECTIONS[currentSlide] || { n: s.section, end: null }

  const ttl = d.getElementById('ttl')
  if (ttl) ttl.textContent = `${currentSlide + 1} · ${s.title}`

  const secEl = d.getElementById('sec')
  if (secEl) {
    secEl.textContent = sec.end
      ? `Esta parte (${sec.n}) debe terminar en ${fmt(sec.end)}. Llevan ${fmt(elapsed)}${
          elapsed > sec.end ? ` · van atrasados ${fmt(elapsed - sec.end)}` : ''
        }`
      : 'Preguntas: 3 minutos, respuestas de máximo 30 segundos.'
  }

  const nt = d.getElementById('nt')
  if (nt && s.notes) {
    nt.innerHTML = `<ul>${s.notes.map((n) => `<li>${n}</li>`).join('')}</ul>`
  }

  const nxt = d.getElementById('nxt')
  if (nxt) {
    nxt.innerHTML =
      currentSlide < slides.length - 1
        ? `Sigue: <b>${currentSlide + 2} · ${slides[currentSlide + 1].title}</b>`
        : 'Última lámina'
  }

  const plan = d.getElementById('plan')
  if (plan) {
    const maxSt = s.maxStep || 0
    plan.textContent = `Lámina ${currentSlide + 1} de ${slides.length}${
      maxSt ? ` · paso ${step}/${maxSt}` : ''
    }`
  }
}

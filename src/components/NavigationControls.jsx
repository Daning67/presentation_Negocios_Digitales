export default function NavigationControls({
  onPrev,
  onNext,
  canPrev,
  canNext,
  onOpenHelp,
  onOpenOverview
}) {
  return (
    <div className="nav-controls" role="toolbar" aria-label="Controles de navegación">
      <span className="nav-btn-hint">← → teclas</span>
      <button
        className="nav-btn"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Paso o diapositiva anterior"
      >
        ‹ Ant
      </button>
      <button
        className="nav-btn"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Paso o diapositiva siguiente"
      >
        Sig ›
      </button>
      <button
        className="nav-btn"
        onClick={onOpenOverview}
        title="Plano de diapositivas (G)"
        aria-label="Plano de la presentación"
      >
        Plano
      </button>
      <button
        className="nav-btn"
        onClick={onOpenHelp}
        title="Atajos de teclado (H)"
        aria-label="Ayuda y atajos"
      >
        ?
      </button>
    </div>
  )
}

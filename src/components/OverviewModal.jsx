export default function OverviewModal({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onSelectSlide
}) {
  if (!isOpen) return null

  return (
    <div
      id="overview"
      className="on"
      role="dialog"
      aria-label="Plano de la presentación"
    >
      <button className="closeo" data-close onClick={onClose}>
        Cerrar (Esc)
      </button>
      <h3>El plano de la casa</h3>
      <div className="rooms" id="rooms">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={index === currentSlide ? 'cur' : ''}
            onClick={() => {
              onSelectSlide(index)
              onClose()
            }}
          >
            {index + 1}. {slide.title}
            <small>{slide.section}</small>
          </button>
        ))}
      </div>
    </div>
  )
}

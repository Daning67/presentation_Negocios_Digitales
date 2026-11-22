export default function ProgressBar({ slides, currentSlide, onSelectSlide }) {
  return (
    <div id="plan" className="chrome" aria-label="Plano de la presentación">
      {slides.map((slide, index) => {
        let btnClass = ''
        if (index === currentSlide) {
          btnClass = 'cur'
        } else if (index < currentSlide) {
          btnClass = 'seen'
        }

        return (
          <button
            key={slide.id}
            className={btnClass}
            title={`${index + 1} · ${slide.title}`}
            aria-label={`Ir a ${slide.title}`}
            onClick={() => onSelectSlide(index)}
          />
        )
      })}
    </div>
  )
}

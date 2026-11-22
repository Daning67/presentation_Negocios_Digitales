import { useState, useRef } from 'react'

export default function SlideDemo({ data, isActive }) {
  const [shotIndex, setShotIndex] = useState(0)
  const captions = data.defaultCaptions || ['Pantalla 1', 'Pantalla 2', 'Pantalla 3']
  const [images, setImages] = useState([null, null, null])
  const fileInputRefs = useRef([])

  const totalShots = 3

  const prevShot = () => {
    setShotIndex((prev) => (prev - 1 + totalShots) % totalShots)
  }

  const nextShot = () => {
    setShotIndex((prev) => (prev + 1) % totalShots)
  }

  const handleFileChange = (index, file) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setImages((prev) => {
        const next = [...prev]
        next[index] = reader.result
        return next
      })
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e, index) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(index, e.dataTransfer.files[0])
    }
  }

  const handleShotClick = (index) => {
    if (!images[index] && fileInputRefs.current[index]) {
      fileInputRefs.current[index].click()
    }
  }

  return (
    <section
      className={`slide dark ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2>{data.heading}</h2>

      <div className="laptop">
        <div className="screen" id="screen">
          {[0, 1, 2].map((idx) => {
            const hasImg = Boolean(images[idx])
            return (
              <div
                key={idx}
                className={`shot ${idx === shotIndex ? 'cur' : ''} ${hasImg ? 'has' : ''}`}
                onClick={() => handleShotClick(idx)}
                onDoubleClick={() => fileInputRefs.current[idx]?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, idx)}
              >
                {hasImg ? (
                  <img src={images[idx]} alt={`Captura ${idx + 1}`} />
                ) : (
                  <img alt="" />
                )}
                {!hasImg && (
                  <div className="empty">
                    Plan B sin internet
                    <br />
                    Haz clic para agregar una captura del prototipo
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  ref={(el) => (fileInputRefs.current[idx] = el)}
                  onChange={(e) => handleFileChange(idx, e.target.files?.[0])}
                />
              </div>
            )
          })}
        </div>
        <div className="base"></div>
      </div>

      <div className="shotnav">
        <button id="shotPrev" aria-label="Captura anterior" onClick={prevShot}>
          ‹
        </button>
        <div className="dots">
          {[0, 1, 2].map((idx) => (
            <i
              key={idx}
              className={idx === shotIndex ? 'on' : ''}
              onClick={() => setShotIndex(idx)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        <button id="shotNext" aria-label="Captura siguiente" onClick={nextShot}>
          ›
        </button>
      </div>

      <div className="cap" id="shotcap">
        {captions[shotIndex]}
      </div>

      <div className="open">
        <a
          className="btn"
          href={data.prototypeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.buttonText}
        </a>
        {data.instructions.map((inst, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: inst }} />
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function SlideCierre({ data, isActive }) {
  const [selectedStage, setSelectedStage] = useState(0)
  const [activeChips, setActiveChips] = useState({ 0: true })

  const toggleChip = (index) => {
    setActiveChips((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section
      className={`slide dark ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2 style={{ color: '#fff' }}>{data.heading}</h2>

      <div className="stages" role="group" aria-label="Etapas de una startup">
        {data.stages.map((stg, idx) => (
          <button
            key={idx}
            className={`stg ${selectedStage === idx ? 'on' : ''}`}
            onClick={() => setSelectedStage(idx)}
          >
            <b>{stg.name}</b>
            <span>{stg.desc}</span>
          </button>
        ))}
      </div>

      <div className="need">
        <h3>{data.needsHeading}</h3>
        <div className="chips">
          {data.needsChips.map((chip, idx) => (
            <button
              key={idx}
              className={`chip ${activeChips[idx] ? 'on' : ''}`}
              onClick={() => toggleChip(idx)}
            >
              {chip}
            </button>
          ))}
        </div>
        <p className="line" data-edit>
          {data.needsPlaceholder ? (
            <span className="ph">{data.needsLine}</span>
          ) : (
            data.needsLine
          )}
        </p>
      </div>

      <p className="cierre">{data.closureText}</p>
    </section>
  )
}

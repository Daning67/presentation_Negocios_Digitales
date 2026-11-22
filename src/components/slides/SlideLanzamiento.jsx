import { useState } from 'react'

export default function SlideLanzamiento({ data, cacValue, isActive }) {
  const [months, setMonths] = useState({
    m1: '',
    m2: '',
    m3: ''
  })

  const m1 = parseFloat(months.m1) || 0
  const m2 = parseFloat(months.m2) || 0
  const m3 = parseFloat(months.m3) || 0
  const total = m1 + m2 + m3

  const CIRC = data.circumference || 879.6
  const dashOffset = CIRC * (1 - Math.min(total, data.targetClients) / data.targetClients)

  const cacDisplayText =
    cacValue !== null && cacValue !== undefined
      ? `US$${cacValue.toFixed(2)} por cliente`
      : data.meta.cacDefaultText

  return (
    <section
      className={`slide ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2>{data.heading}</h2>

      <div className="ringwrap">
        <svg viewBox="0 0 330 330">
          <circle
            cx="165"
            cy="165"
            r="140"
            fill="none"
            stroke="#E1E6F5"
            strokeWidth="28"
          />
          <circle
            id="ring"
            cx="165"
            cy="165"
            r="140"
            fill="none"
            stroke="#1B2A78"
            strokeWidth="28"
            strokeDasharray={CIRC}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset .6s' }}
          />
        </svg>
        <div className="c">
          <b id="ringn">{Math.round(total)}</b>
          <span>de {data.targetClients} clientes</span>
        </div>
      </div>

      <div className="plan">
        <div className="mes">
          <b>{data.months[0].label}</b>
          <input
            className="mi"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="0"
            aria-label="Clientes en el mes 1"
            value={months.m1}
            onChange={(e) => setMonths((prev) => ({ ...prev, m1: e.target.value }))}
          />
          <div data-edit>
            {data.months[0].placeholder ? (
              <span className="ph">{data.months[0].text}</span>
            ) : (
              data.months[0].text
            )}
          </div>
        </div>

        <div className="mes">
          <b>{data.months[1].label}</b>
          <input
            className="mi"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="0"
            aria-label="Clientes en el mes 2"
            value={months.m2}
            onChange={(e) => setMonths((prev) => ({ ...prev, m2: e.target.value }))}
          />
          <div data-edit>
            {data.months[1].placeholder ? (
              <span className="ph">{data.months[1].text}</span>
            ) : (
              data.months[1].text
            )}
          </div>
        </div>

        <div className="mes">
          <b>{data.months[2].label}</b>
          <input
            className="mi"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="0"
            aria-label="Clientes en el mes 3"
            value={months.m3}
            onChange={(e) => setMonths((prev) => ({ ...prev, m3: e.target.value }))}
          />
          <div data-edit>
            {data.months[2].placeholder ? (
              <span className="ph">{data.months[2].text}</span>
            ) : (
              data.months[2].text
            )}
          </div>
        </div>

        <div className="meta">
          <div>
            <b>Canal principal</b>
            <span data-edit>
              {data.meta.mainChannelPlaceholder ? (
                <span className="ph">{data.meta.mainChannel}</span>
              ) : (
                data.meta.mainChannel
              )}
            </span>
          </div>
          <div>
            <b>Costo por cliente (CAC)</b>
            <span id="cacview">{cacDisplayText}</span>
          </div>
        </div>
      </div>

      <div className="src">{data.source}</div>
    </section>
  )
}

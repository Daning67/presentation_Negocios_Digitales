import { useState, useEffect } from 'react'

export default function SlideModelo({ data, onCacChange, isActive }) {
  const [inputs, setInputs] = useState({
    precio: '',
    margen: '',
    meses: '',
    gasto: '',
    nuevos: ''
  })

  const handleChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }))
  }

  const p = parseFloat(inputs.precio)
  const m = parseFloat(inputs.margen)
  const me = parseFloat(inputs.meses)
  const g = parseFloat(inputs.gasto)
  const n = parseFloat(inputs.nuevos)

  const ltv = p > 0 && m > 0 && me > 0 ? p * (m / 100) * me : null
  const cac = g >= 0 && n > 0 && !isNaN(g) ? g / n : null
  const ratio = ltv !== null && cac !== null && cac > 0 ? ltv / cac : null

  useEffect(() => {
    if (onCacChange) {
      onCacChange(cac)
    }
  }, [cac, onCacChange])

  const formatCurrency = (val) => {
    if (val === null || isNaN(val)) return '—'
    return `US$${val.toFixed(val >= 100 ? 0 : 2)}`
  }

  let verdictText = data.calc.defaultVerdict
  if (ratio !== null) {
    verdictText = ratio >= data.calc.targetRatio ? data.calc.healthyVerdict : data.calc.warningVerdict
  }

  const meterWidth = ratio !== null ? `${Math.min(ratio / 5, 1) * 100}%` : '0%'
  const isHealthy = ratio !== null && ratio >= data.calc.targetRatio

  return (
    <section
      className={`slide ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2>{data.heading}</h2>

      <div className="canvas">
        {data.canvas.map((cell, index) => (
          <div key={index} className="cell">
            <h4>{cell.title}</h4>
            <div data-edit>
              {cell.placeholder ? <span className="ph">{cell.text}</span> : cell.text}
            </div>
          </div>
        ))}
      </div>

      <div className="calc" id="calc">
        <h3>{data.calc.title}</h3>

        <label>
          Precio por mes (US$)
          <input
            id="c_precio"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            placeholder="0"
            value={inputs.precio}
            onChange={(e) => handleChange('precio', e.target.value)}
          />
        </label>

        <label>
          Margen de ganancia (%)
          <input
            id="c_margen"
            type="number"
            min="0"
            max="100"
            step="any"
            inputMode="decimal"
            placeholder="0"
            value={inputs.margen}
            onChange={(e) => handleChange('margen', e.target.value)}
          />
        </label>

        <label>
          Meses que se queda
          <input
            id="c_meses"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            placeholder="0"
            value={inputs.meses}
            onChange={(e) => handleChange('meses', e.target.value)}
          />
        </label>

        <label>
          Marketing al mes (US$)
          <input
            id="c_gasto"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            placeholder="0"
            value={inputs.gasto}
            onChange={(e) => handleChange('gasto', e.target.value)}
          />
        </label>

        <label>
          Clientes nuevos al mes
          <input
            id="c_nuevos"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            placeholder="0"
            value={inputs.nuevos}
            onChange={(e) => handleChange('nuevos', e.target.value)}
          />
        </label>

        <div className="res">
          <div>
            LTV
            <b id="r_ltv">{formatCurrency(ltv)}</b>
          </div>
          <div>
            CAC
            <b id="r_cac">{formatCurrency(cac)}</b>
          </div>
          <div>
            LTV ÷ CAC
            <b id="r_ratio">{ratio !== null ? ratio.toFixed(1) : '—'}</b>
          </div>
        </div>

        <div className={`meter ${isHealthy ? 'ok' : ''}`} id="meter">
          <i style={{ width: meterWidth }}></i>
          <u title="Meta: 3"></u>
        </div>

        <div className="verdict" id="verdict">
          {verdictText}
        </div>
      </div>

      <div className="src">{data.source}</div>
    </section>
  )
}

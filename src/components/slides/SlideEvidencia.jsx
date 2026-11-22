import { useState } from 'react'

export default function SlideEvidencia({ data, step, isActive }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section
      className={`slide ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2>{data.heading}</h2>

      <div
        className={`bars ${step >= 1 ? 'shown' : ''}`}
        data-step="1"
      >
        {data.bars.map((bar, i) => (
          <div
            key={i}
            className={`bar ${step >= 1 ? 'shown' : ''}`}
            style={{ '--w': bar.width }}
          >
            <div className="n">{bar.metric}</div>
            <p>{bar.text}</p>
            <div className="track">
              <i style={{ width: step >= 1 ? bar.width : '0%' }}></i>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`trends ${step >= 2 ? 'shown' : ''}`}
        data-step="2"
      >
        <div className="tabs" role="tablist">
          {data.trends.tabs.map((tab, idx) => (
            <button
              key={idx}
              className={activeTab === idx ? 'on' : ''}
              data-tab={idx}
              role="tab"
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tpanel">
          {data.trends.images.map((img, idx) => (
            <img
              key={idx}
              className={activeTab === idx ? 'on' : ''}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
        <p className="tcap">{data.trends.caption}</p>
      </div>

      <div
        className={`stat ${step >= 3 ? 'shown' : ''}`}
        data-step="3"
      >
        <b>{data.stat.value}</b>
        <span>{data.stat.text}</span>
      </div>

      <div className="src">{data.source}</div>
    </section>
  )
}

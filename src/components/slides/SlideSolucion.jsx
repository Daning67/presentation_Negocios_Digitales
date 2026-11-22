export default function SlideSolucion({ data, step, isActive }) {
  return (
    <section
      className={`slide ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2>{data.heading}</h2>

      <svg id="arrows" viewBox="0 0 1280 720" aria-hidden="true">
        <defs>
          <marker
            id="ah"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#1B2A78" />
          </marker>
        </defs>
        <g
          data-step={data.arrows.step}
          className={`arrowset ${step >= data.arrows.step ? 'shown' : ''}`}
        >
          <line
            x1="378"
            y1="320"
            x2="486"
            y2="320"
            stroke="#1B2A78"
            strokeWidth="4"
            markerEnd="url(#ah)"
          />
          <text x="432" y="306" textAnchor="middle">
            {data.arrows.studentLabel}
          </text>
          <line
            x1="902"
            y1="320"
            x2="794"
            y2="320"
            stroke="#1B2A78"
            strokeWidth="4"
            markerEnd="url(#ah)"
          />
          <text x="848" y="306" textAnchor="middle">
            {data.arrows.landlordLabel}
          </text>
        </g>
      </svg>

      {data.nodes.map((node) => (
        <div
          key={node.id}
          className={`node ${step >= node.step ? 'shown' : ''}`}
          id={node.id}
          data-step={node.step}
        >
          <h3>{node.title}</h3>
          <div className="role">{node.role}</div>
          <p className="d">{node.desc}</p>
        </div>
      ))}

      {data.features.map((feat, index) => (
        <div
          key={index}
          className={`feat ${step >= feat.step ? 'shown' : ''}`}
          style={{ left: feat.left, width: feat.width || undefined }}
          data-step={feat.step}
        >
          <b>{feat.title}</b>
          <span>{feat.desc}</span>
        </div>
      ))}

      <div className="src">{data.source}</div>
    </section>
  )
}

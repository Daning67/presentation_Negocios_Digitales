export default function SlideDatosIA({ data, isActive }) {
  const leftPositions = ['80px', '468px', '856px']

  return (
    <section
      className={`slide ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2>{data.heading}</h2>

      {data.columns.map((col, idx) => (
        <div
          key={idx}
          className="col3"
          style={{ left: leftPositions[idx] || '80px' }}
        >
          <h3>{col.title}</h3>
          <div className="b" data-edit>
            {col.placeholder ? (
              <span className="ph">{col.text}</span>
            ) : (
              col.text
            )}
          </div>
          {col.law && <small>{col.law}</small>}
        </div>
      ))}

      <div className="src">{data.source}</div>
    </section>
  )
}

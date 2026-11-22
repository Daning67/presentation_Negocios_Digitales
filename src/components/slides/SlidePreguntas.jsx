export default function SlidePreguntas({ data, isActive }) {
  return (
    <section
      className={`slide dark ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2>{data.heading}</h2>

      <div className="crew">
        {data.crew.map((member, idx) => (
          <div key={idx}>
            <b>{member.name}</b>
            {member.role}
          </div>
        ))}
      </div>
    </section>
  )
}

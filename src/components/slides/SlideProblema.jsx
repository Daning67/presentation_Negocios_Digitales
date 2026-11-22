export default function SlideProblema({ data, step, isActive }) {
  return (
    <section
      className={`slide ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h2>{data.heading}</h2>

      <div className="rows">
        {data.pains.map((pain) => (
          <div
            key={pain.step}
            className={`pain ${step >= pain.step ? 'shown' : ''}`}
            data-step={pain.step}
          >
            <div className="n">{pain.metric}</div>
            <p dangerouslySetInnerHTML={{ __html: pain.text }} />
          </div>
        ))}
      </div>

      <div
        className={`sign ${step >= data.quote.step ? 'shown' : ''}`}
        data-step={data.quote.step}
      >
        <div className="hd">{data.quote.author}</div>
        <blockquote>{data.quote.text}</blockquote>
      </div>

      <div
        className={`news ${step >= data.news.step ? 'shown' : ''}`}
        data-step={data.news.step}
      >
        <b>{data.news.headline}</b>
        <span>{data.news.source}</span>
      </div>

      <div className="src">{data.source}</div>
    </section>
  )
}

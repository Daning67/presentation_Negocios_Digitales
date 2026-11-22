export default function SlidePortada({ data, onNext, isActive }) {
  return (
    <section
      className={`slide dark ${isActive ? 'on' : ''}`}
      id={data.id}
      data-title={data.title}
      data-section={data.section}
    >
      <div className="tag">{data.tag}</div>
      <h1>{data.titleText}</h1>
      <p className="lema">{data.lema}</p>
      <p className="sub">{data.sub}</p>
      <p className="team">
        <b>{data.team}</b>
        <br />
        {data.teamDetails}
      </p>

      {/* Casa interactiva SVG */}
      <svg
        id="house"
        viewBox="0 0 470 520"
        role="img"
        aria-label="Casa con puerta amarilla; al hacer clic en la puerta se avanza"
      >
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity=".95"
        >
          <polyline points="30,250 235,70 440,250" />
          <polyline points="70,222 70,470 400,470 400,222" />
          <polyline points="345,142 345,95 385,95 385,178" />
          <line x1="10" y1="470" x2="460" y2="470" />
        </g>
        <g fill="#0E1544" stroke="#8E98D0" strokeWidth="4">
          <rect x="100" y="270" width="80" height="80" />
          <line x1="140" y1="270" x2="140" y2="350" />
          <line x1="100" y1="310" x2="180" y2="310" />
          <rect x="290" y="270" width="80" height="80" />
          <line x1="330" y1="270" x2="330" y2="350" />
          <line x1="290" y1="310" x2="370" y2="310" />
        </g>
        <g
          className="door"
          tabIndex={0}
          role="button"
          aria-label="Empezar presentación"
          id="door"
          onClick={onNext}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onNext()
            }
          }}
        >
          <rect className="leaf" x="195" y="330" width="80" height="140" fill="#F6B92B" />
          <circle cx="259" cy="405" r="6" fill="#0E1544" />
          <rect x="185" y="320" width="100" height="10" fill="#F6B92B" opacity=".4" />
        </g>
        <g>
          <line x1="105" y1="222" x2="105" y2="246" stroke="#fff" strokeWidth="3" />
          <line x1="215" y1="222" x2="215" y2="246" stroke="#fff" strokeWidth="3" />
          <rect x="85" y="244" width="150" height="44" fill="#fff" />
          <text
            x="160"
            y="272"
            textAnchor="middle"
            fontFamily="Fira Sans,sans-serif"
            fontWeight="700"
            fontSize="17"
            fill="#1B2A78"
          >
            {data.houseLabel}
          </text>
        </g>
      </svg>
    </section>
  )
}

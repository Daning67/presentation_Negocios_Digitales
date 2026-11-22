export default function TimerClock({
  elapsed,
  running,
  isVisible,
  onTogglePlay,
  onReset
}) {
  const left = 480 - elapsed

  const fmt = (s) => {
    const sec = Math.max(0, Math.round(s))
    const m = Math.floor(sec / 60)
    const rem = ('0' + (sec % 60)).slice(-2)
    return `${m}:${rem}`
  }

  const displayText = left >= 0 ? fmt(left) : `+${fmt(-left)}`

  let clockClass = 'chrome'
  if (elapsed >= 480) {
    clockClass += ' stop'
  } else if (elapsed >= 360) {
    clockClass += ' warn'
  }

  return (
    <div
      id="clock"
      className={clockClass}
      style={{ display: isVisible ? 'block' : 'none' }}
      title={
        running
          ? 'Clic para pausar, doble clic para reiniciar'
          : 'Clic para iniciar el cronómetro'
      }
      onClick={onTogglePlay}
      onDoubleClick={onReset}
    >
      {displayText}
    </div>
  )
}

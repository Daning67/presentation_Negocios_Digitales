import { useState, useEffect } from 'react'

export default function SlideContainer({
  theme = 'light',
  children
}) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720)
      setScale(s)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      id="stage"
      data-theme={theme}
      style={{
        transform: `scale(${scale})`
      }}
    >
      {children}
    </div>
  )
}

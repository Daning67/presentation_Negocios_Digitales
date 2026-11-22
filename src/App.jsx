import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'
import { SLIDES_DATA } from './data/slidesData'

// Components
import SlideContainer from './components/SlideContainer'
import ProgressBar from './components/ProgressBar'
import NavigationControls from './components/NavigationControls'
import TimerClock from './components/TimerClock'
import OverviewModal from './components/OverviewModal'
import HelpModal from './components/HelpModal'
import EditToolbar from './components/EditToolbar'
import NotesDrawer from './components/NotesDrawer'

// Slide layouts
import SlidePortada from './components/slides/SlidePortada'
import SlideProblema from './components/slides/SlideProblema'
import SlideSolucion from './components/slides/SlideSolucion'
import SlideDemo from './components/slides/SlideDemo'
import SlideEvidencia from './components/slides/SlideEvidencia'
import SlideModelo from './components/slides/SlideModelo'
import SlideDatosIA from './components/slides/SlideDatosIA'
import SlideLanzamiento from './components/slides/SlideLanzamiento'
import SlideCierre from './components/slides/SlideCierre'
import SlidePreguntas from './components/slides/SlidePreguntas'

import {
  openPresenterWindow,
  syncPresenterWindow
} from './utils/presenterWindow'

export default function App() {
  const slides = SLIDES_DATA
  const totalSlides = slides.length

  // Navigation state (initialized from URL hash if present)
  const [currentSlide, setCurrentSlide] = useState(() => {
    if (typeof window !== 'undefined') {
      const hashMatch = window.location.hash.match(/#(\d+)/)
      if (hashMatch) {
        const idx = parseInt(hashMatch[1], 10) - 1
        if (idx >= 0 && idx < SLIDES_DATA.length) {
          return idx
        }
      }
    }
    return 0
  })
  const [step, setStep] = useState(0)

  // Auxiliary UI state
  const [isOverviewOpen, setIsOverviewOpen] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [isClockVisible, setIsClockVisible] = useState(false)

  // Cac shared value (from Slide 6 to Slide 8)
  const [cacValue, setCacValue] = useState(null)

  // Timer state (8 minutes countdown: 480 seconds)
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const timerStartRef = useRef(null)
  const timerElapsedRef = useRef(0)

  const currentSlideData = slides[currentSlide]

  // Step limit helper
  const getMaxStep = useCallback(
    (slideIndex) => slides[slideIndex]?.maxStep || 0,
    [slides]
  )

  // Navigation handlers
  const next = useCallback(() => {
    const maxSt = getMaxStep(currentSlide)
    if (step < maxSt) {
      setStep((prev) => prev + 1)
    } else if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1)
      setStep(0)
    }
  }, [currentSlide, step, totalSlides, getMaxStep])

  const prev = useCallback(() => {
    if (step > 0) {
      setStep((prev) => prev - 1)
    } else if (currentSlide > 0) {
      const prevIdx = currentSlide - 1
      setCurrentSlide(prevIdx)
      setStep(getMaxStep(prevIdx))
    }
  }, [currentSlide, step, getMaxStep])

  const goToSlide = useCallback((index) => {
    const target = Math.max(0, Math.min(totalSlides - 1, index))
    setCurrentSlide(target)
    setStep(0)
  }, [totalSlides])

  // Timer controls
  const startTimer = useCallback(() => {
    if (running) return
    timerStartRef.current = Date.now()
    setRunning(true)
  }, [running])

  const pauseTimer = useCallback(() => {
    if (!running) return
    const nowSec =
      timerElapsedRef.current +
      (timerStartRef.current ? (Date.now() - timerStartRef.current) / 1000 : 0)
    timerElapsedRef.current = nowSec
    timerStartRef.current = null
    setRunning(false)
    setElapsed(nowSec)
  }, [running])

  const resetTimer = useCallback(() => {
    setRunning(false)
    timerStartRef.current = null
    timerElapsedRef.current = 0
    setElapsed(0)
  }, [])

  const toggleTimerRunning = useCallback(() => {
    if (running) {
      pauseTimer()
    } else {
      startTimer()
    }
  }, [running, pauseTimer, startTimer])

  // Timer tick effect
  useEffect(() => {
    let interval = null
    if (running) {
      interval = setInterval(() => {
        const nowSec =
          timerElapsedRef.current +
          (timerStartRef.current
            ? (Date.now() - timerStartRef.current) / 1000
            : 0)
        setElapsed(nowSec)
      }, 250)
    }
    return () => clearInterval(interval)
  }, [running])

  // Sync with presenter window when state changes
  useEffect(() => {
    syncPresenterWindow({
      slides,
      currentSlide,
      step,
      elapsed
    })
  }, [slides, currentSlide, step, elapsed])

  // Toggle body classes for editing and clock
  useEffect(() => {
    document.body.classList.toggle('editing', isEditing)
  }, [isEditing])

  useEffect(() => {
    document.body.classList.toggle('notesOpen', isNotesOpen)
  }, [isNotesOpen])

  useEffect(() => {
    document.body.classList.toggle('clockon', isClockVisible)
  }, [isClockVisible])

  // Presenter window opener
  const handleOpenPresenter = useCallback(() => {
    openPresenterWindow({
      slides,
      currentSlide,
      step,
      elapsed,
      onNext: next,
      onPrev: prev,
      onStartTimer: startTimer,
      onPauseTimer: pauseTimer,
      onResetTimer: resetTimer
    })
  }, [slides, currentSlide, step, elapsed, next, prev, startTimer, pauseTimer, resetTimer])

  // Synchronize hash with current slide
  useEffect(() => {
    window.location.hash = `#${currentSlide + 1}`
  }, [currentSlide])

  // Listen to browser hashchange (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hashMatch = window.location.hash.match(/#(\d+)/)
      if (hashMatch) {
        const idx = parseInt(hashMatch[1], 10) - 1
        if (idx >= 0 && idx < totalSlides) {
          setCurrentSlide(idx)
          setStep(0)
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [totalSlides])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const target = e.target
      const isTyping =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)

      if (e.key === 'Escape') {
        setIsOverviewOpen(false)
        setIsHelpOpen(false)
        setIsEditing(false)
        return
      }

      if (isTyping) return
      if (e.ctrlKey || e.metaKey || e.altKey) return

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
        case 'Enter':
          if (
            target &&
            (target.tagName === 'BUTTON' || target.tagName === 'A') &&
            e.key !== 'ArrowRight' &&
            e.key !== 'PageDown'
          ) {
            return
          }
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          goToSlide(0)
          break
        case 'End':
          goToSlide(totalSlides - 1)
          break
        case 'g':
        case 'G':
          setIsOverviewOpen((prev) => !prev)
          break
        case 'p':
        case 'P':
          handleOpenPresenter()
          break
        case 't':
        case 'T':
          setIsClockVisible((prev) => !prev)
          break
        case 'e':
        case 'E':
          setIsEditing((prev) => !prev)
          break
        case 'h':
        case 'H':
        case '?':
          setIsHelpOpen((prev) => !prev)
          break
        case 'f':
        case 'F':
          if (document.fullscreenElement) {
            document.exitFullscreen?.()
          } else {
            document.documentElement.requestFullscreen?.()
          }
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev, goToSlide, totalSlides, handleOpenPresenter])

  // Render slide by index
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        return (
          <SlidePortada
            data={currentSlideData}
            onNext={next}
            isActive={true}
          />
        )
      case 1:
        return (
          <SlideProblema
            data={currentSlideData}
            step={step}
            isActive={true}
          />
        )
      case 2:
        return (
          <SlideSolucion
            data={currentSlideData}
            step={step}
            isActive={true}
          />
        )
      case 3:
        return (
          <SlideDemo
            data={currentSlideData}
            isActive={true}
          />
        )
      case 4:
        return (
          <SlideEvidencia
            data={currentSlideData}
            step={step}
            isActive={true}
          />
        )
      case 5:
        return (
          <SlideModelo
            data={currentSlideData}
            onCacChange={setCacValue}
            isActive={true}
          />
        )
      case 6:
        return (
          <SlideDatosIA
            data={currentSlideData}
            isActive={true}
          />
        )
      case 7:
        return (
          <SlideLanzamiento
            data={currentSlideData}
            cacValue={cacValue}
            isActive={true}
          />
        )
      case 8:
        return (
          <SlideCierre
            data={currentSlideData}
            isActive={true}
          />
        )
      case 9:
        return (
          <SlidePreguntas
            data={currentSlideData}
            isActive={true}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <SlideContainer theme={currentSlideData.theme}>
        {renderSlideContent()}

        {/* Chrome navigation controls */}
        <ProgressBar
          slides={slides}
          currentSlide={currentSlide}
          onSelectSlide={goToSlide}
        />

        <div id="count" className="chrome">
          {currentSlide + 1} / {totalSlides}
        </div>

        <TimerClock
          elapsed={elapsed}
          running={running}
          isVisible={isClockVisible}
          onTogglePlay={toggleTimerRunning}
          onReset={resetTimer}
        />

        <NavigationControls
          onPrev={prev}
          onNext={next}
          canPrev={currentSlide > 0 || step > 0}
          canNext={currentSlide < totalSlides - 1 || step < getMaxStep(currentSlide)}
          onOpenOverview={() => setIsOverviewOpen(true)}
          onOpenHelp={() => setIsHelpOpen(true)}
        />
      </SlideContainer>

      {/* Editing Toolbar */}
      <EditToolbar
        isEditing={isEditing}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onExitEditing={() => setIsEditing(false)}
      />

      {/* Speaker Notes Drawer */}
      <NotesDrawer
        isOpen={isNotesOpen}
        currentSlideIndex={currentSlide}
        currentSlideData={currentSlideData}
      />

      {/* Overview Modal (El plano de la casa) */}
      <OverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={slides}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />

      {/* Help Modal */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </>
  )
}

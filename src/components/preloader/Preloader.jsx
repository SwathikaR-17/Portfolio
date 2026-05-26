import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const bootLines = [
  'booting transmission...',
  'establishing signal...',
  'transmission established.',
]

const coordinates = [
  { label: 'N 07.1119', className: 'left-5 top-5 sm:left-8 sm:top-8' },
  { label: 'E 03.7BFF', className: 'right-5 top-5 sm:right-8 sm:top-8' },
  { label: 'SYS 05.26', className: 'bottom-5 left-5 sm:bottom-8 sm:left-8' },
  { label: 'SIG 6FA3', className: 'bottom-5 right-5 sm:bottom-8 sm:right-8' },
]

function useBootText(onComplete) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (finished) {
      const completionTimer = window.setTimeout(() => {
        onComplete?.()
      }, 1300)

      return () => window.clearTimeout(completionTimer)
    }

    const activeLine = bootLines[lineIndex]
    const isTypingLine = charIndex < activeLine.length
    const delay = isTypingLine ? 58 + Math.random() * 34 : lineIndex === 0 ? 760 : 620

    const typingTimer = window.setTimeout(() => {
      if (isTypingLine) {
        setCharIndex((current) => current + 1)
        return
      }

      if (lineIndex < bootLines.length - 1) {
        setLineIndex((current) => current + 1)
        setCharIndex(0)
        return
      }

      setFinished(true)
    }, delay)

    return () => window.clearTimeout(typingTimer)
  }, [charIndex, finished, lineIndex, onComplete])

  const visibleLines = useMemo(() => {
    return bootLines.slice(0, lineIndex + 1).map((line, index) => {
      if (index < lineIndex || finished) return line
      return line.slice(0, charIndex)
    })
  }, [charIndex, finished, lineIndex])

  return { finished, lineIndex, visibleLines }
}

export default function Preloader({ onComplete }) {
  const { finished, lineIndex, visibleLines } = useBootText(onComplete)
  const gridVisible = lineIndex >= 1

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 isolate overflow-hidden bg-[var(--color-void)] text-[var(--color-ghost)]"
        initial={{ opacity: 1 }}
        animate={{ opacity: finished ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Swathika Portfolio system initialization"
      >
        <motion.div
          className="blueprint-grid absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: gridVisible ? 1 : 0.08 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />

        <div className="noise-texture absolute inset-0" />
        <div className="scanline-field absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(58,123,255,0.12),transparent_34%),linear-gradient(180deg,rgba(7,17,31,0.45),rgba(7,17,31,0.84))]" />

        <motion.div
          className="signal-line absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[rgba(111,163,255,0.55)] to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: gridVisible ? ['-100%', '0%', '100%'] : '-100%',
            opacity: gridVisible ? [0, 0.75, 0] : 0,
          }}
          transition={{
            duration: 3.2,
            ease: 'easeInOut',
            repeat: gridVisible && !finished ? Infinity : 0,
            repeatDelay: 1.5,
          }}
        />

        <motion.div
          className="signal-pulse absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(111,163,255,0.34)]"
          initial={{ scale: 0.18, opacity: 0 }}
          animate={
            lineIndex >= 2
              ? { scale: [0.18, 5.8], opacity: [0, 0.34, 0] }
              : { scale: 0.18, opacity: 0 }
          }
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {coordinates.map((coordinate) => (
          <motion.span
            key={coordinate.label}
            className={`terminal-coordinate absolute ${coordinate.className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: gridVisible ? 0.56 : 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {coordinate.label}
          </motion.span>
        ))}

        <main className="relative z-10 grid min-h-svh place-items-center px-6">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[rgba(245,247,250,0.48)]">
              <span className="h-px w-8 bg-[rgba(111,163,255,0.5)]" />
              <span>Swathika Portfolio</span>
            </div>

            <div className="terminal-panel">
              <div className="mb-6 flex items-center justify-between border-b border-[rgba(111,163,255,0.14)] pb-4">
                <span className="terminal-kicker">Transmission Kernel</span>
                <span className="terminal-status">AI-NATIVE / INIT</span>
              </div>

              <div className="min-h-32 space-y-3" aria-live="polite">
                {visibleLines.map((line, index) => (
                  <p key={`${line}-${index}`} className="terminal-line">
                    <span className="text-[rgba(111,163,255,0.66)]">~/</span>
                    {line}
                    {index === visibleLines.length - 1 && !finished ? (
                      <span className="terminal-cursor" aria-hidden="true" />
                    ) : null}
                  </p>
                ))}
              </div>

              <motion.div
                className="mt-8 h-px w-full overflow-hidden bg-[rgba(111,163,255,0.14)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: lineIndex >= 2 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-[var(--color-signal)] to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </main>
      </motion.div>
    </AnimatePresence>
  )
}

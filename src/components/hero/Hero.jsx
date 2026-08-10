import { useEffect, useMemo, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

const statusRows = [
  ['STATUS', 'EXPERIMENTING'],
  ['FIELD', 'AI / IoT'],
  ['CURRENT STATE', 'EVOLVING'],
  ['LOCATION', 'HYDERABAD'],
  ['MODE', 'ARTIFICIAL HUMAN'],
]

const typePhrases = [
  'building systems_',
  'debugging confidence_',
  'shipping anyway_',
  'learning loudly_',
  'experimenting in public_',
  'currently becoming dangerous in tech_',
]

const coordinates = [
  { label: 'LAT 17.3850', className: 'left-5 top-5 sm:left-8 sm:top-8' },
  { label: 'LON 78.4867', className: 'right-5 top-5 sm:right-8 sm:top-8' },
  { label: 'HUMAN SIGNAL', className: 'bottom-5 left-5 sm:bottom-8 sm:left-8' },
  { label: 'BOOT COMPLETE', className: 'bottom-5 right-5 sm:bottom-8 sm:right-8' },
]

const constellationNodes = [
  { cx: 12, cy: 24, r: 1.5 },
  { cx: 28, cy: 18, r: 1.1 },
  { cx: 45, cy: 34, r: 1.35 },
  { cx: 63, cy: 22, r: 1.2 },
  { cx: 78, cy: 42, r: 1.55 },
  { cx: 88, cy: 30, r: 1.05 },
  { cx: 20, cy: 65, r: 1.2 },
  { cx: 39, cy: 72, r: 1.45 },
  { cx: 58, cy: 62, r: 1.1 },
  { cx: 72, cy: 78, r: 1.3 },
]

const linePaths = [
  'M12 24 L28 18 L45 34 L63 22 L78 42 L88 30',
  'M20 65 L39 72 L58 62 L72 78',
  'M45 34 L58 62',
]

function useTypewriter(phrases) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [direction, setDirection] = useState('forward')

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    const isForward = direction === 'forward'
    const atEnd = charIndex === phrase.length
    const atStart = charIndex === 0
    const delay = atEnd ? 1350 : atStart && !isForward ? 420 : isForward ? 58 : 28

    const timer = window.setTimeout(() => {
      if (isForward && !atEnd) {
        setCharIndex((current) => current + 1)
        return
      }

      if (isForward && atEnd) {
        setDirection('backward')
        return
      }

      if (!isForward && !atStart) {
        setCharIndex((current) => current - 1)
        return
      }

      setPhraseIndex((current) => (current + 1) % phrases.length)
      setDirection('forward')
    }, delay)

    return () => window.clearTimeout(timer)
  }, [charIndex, direction, phraseIndex, phrases])

  return phrases[phraseIndex].slice(0, charIndex)
}

export default function Hero() {
  const typedText = useTypewriter(typePhrases)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 55, damping: 22, mass: 0.7 })
  const springY = useSpring(mouseY, { stiffness: 55, damping: 22, mass: 0.7 })
  const glowX = useTransform(springX, [-1, 1], ['37%', '63%'])
  const glowY = useTransform(springY, [-1, 1], ['28%', '58%'])
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(58, 123, 255, 0.18), transparent 34rem)`
  const constellationX = useTransform(springX, [-1, 1], [-14, 14])
  const constellationY = useTransform(springY, [-1, 1], [-10, 10])

  const nameLetters = useMemo(() => ['RASOORI', 'SWATHIKA'], [])

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width * 2 - 1)
    mouseY.set((event.clientY - rect.top) / rect.height * 2 - 1)
  }

  function handlePointerLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      className="hero-shell relative isolate min-h-svh overflow-hidden bg-[var(--color-void)] text-[var(--color-ghost)]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Swathika Portfolio hero"
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="noise-texture absolute inset-0" />
      <div className="scanline-field absolute inset-0" />

      <motion.div className="absolute inset-0" style={{ background: glowBackground }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.92),rgba(7,17,31,0.54)_48%,rgba(7,17,31,0.9))]" />

      <motion.svg
        className="constellation-map absolute right-[-8%] top-[8%] h-[58vh] w-[58vw] min-w-[520px] opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ x: constellationX, y: constellationY }}
        aria-hidden="true"
      >
        {linePaths.map((path) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="rgba(111, 163, 255, 0.24)"
            strokeWidth="0.16"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.3, ease: 'easeOut', delay: 0.5 }}
          />
        ))}
        {constellationNodes.map((node, index) => (
          <motion.circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="rgba(245, 247, 250, 0.72)"
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: [0.34, 0.78, 0.42], scale: [0.88, 1.08, 0.9] }}
            transition={{
              duration: 4.8 + index * 0.14,
              delay: 0.7 + index * 0.08,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.svg>

      {coordinates.map((coordinate) => (
        <motion.span
          key={coordinate.label}
          className={`terminal-coordinate pointer-events-none absolute ${coordinate.className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.52 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        >
          {coordinate.label}
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[90rem] flex-col justify-between px-6 py-20 sm:px-8 lg:px-16">
        <motion.div
          className="mt-10 grid flex-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.16, delayChildren: 0.22 } },
          }}
        >
          <div className="max-w-4xl">
            <motion.p
              className="terminal-kicker mb-5 flex items-center gap-3 text-[rgba(111,163,255,0.72)]"
              variants={revealVariant}
            >
              <span className="h-px w-10 bg-[rgba(111,163,255,0.52)]" />
              System initialized / human signal detected
            </motion.p>

            <h1 className="hero-name" aria-label="Rasoori Swathika">
              {nameLetters.map((line) => (
                <motion.span
                  key={line}
                  className="hero-name-line"
                  variants={revealVariant}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-10 max-w-lg font-[var(--font-editorial)] text-lg leading-8 text-[rgba(245,247,250,0.68)] sm:text-xl"
              variants={revealVariant}
            >
              I build things before I fully know how.
            </motion.p>
          </div>

          <motion.aside
            className="system-panel justify-self-start lg:justify-self-end lg:mr-2"
            variants={revealVariant}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="mb-7 flex items-center justify-between border-b border-[rgba(111,163,255,0.16)] pb-4">
              <span className="terminal-kicker">System Status</span>
              <motion.span
                className="terminal-status"
                animate={{ opacity: [0.48, 0.86, 0.56] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                ONLINE
              </motion.span>
            </div>

            <dl className="space-y-4">
              {statusRows.map(([label, value], index) => (
                <motion.div
                  key={label}
                  className="grid grid-cols-[7.75rem_minmax(0,1fr)] gap-5 border-b border-[rgba(111,163,255,0.09)] pb-4 last:border-b-0 last:pb-0"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.72 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  <dt className="terminal-coordinate text-[rgba(122,134,154,0.76)]">{label}</dt>
                  <dd className="terminal-line text-sm leading-5 text-[rgba(245,247,250,0.82)] sm:text-[0.95rem]">
                    {value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.aside>
        </motion.div>

        <motion.div
          className="hero-typewriter terminal-line mt-12 flex min-h-10 items-center border-t border-[rgba(111,163,255,0.14)] pt-6 text-[rgba(245,247,250,0.76)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mr-3 text-[rgba(111,163,255,0.66)]">~/</span>
          <span>{typedText}</span>
          <span className="terminal-cursor" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}

const revealVariant = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

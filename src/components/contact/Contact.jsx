import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const contactFields = [
  { id: 'name', label: 'NAME', type: 'text', placeholder: 'Swathika' },
  { id: 'email', label: 'EMAIL', type: 'email', placeholder: 'hello@system.dev' },
  { id: 'message', label: 'MESSAGE', type: 'textarea', placeholder: 'Open a channel...' },
]

const channels = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'swathikarasoori06@gmail.com',
    href: 'mailto:swathikarasoori06@gmail.com',
    x: 25,
    y: 24,
    rotation: -12,
    color: 'rgba(111,163,255,0.82)',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/swathika',
    href: 'https://github.com/',
    x: 75,
    y: 68,
    rotation: 12,
    color: 'rgba(111,163,255,0.78)',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/swathika',
    href: 'https://www.linkedin.com/',
    x: 28,
    y: 72,
    rotation: 8,
    color: 'rgba(111,163,255,0.74)',
  },
]

export default function Contact() {
  const shouldReduceMotion = useReducedMotion()
  const [terminalStep, setTerminalStep] = useState(0)
  const [focusedField, setFocusedField] = useState(null)
  const [hoveredChannel, setHoveredChannel] = useState(null)
  const [sweepAngle, setSweepAngle] = useState(0)
  const [detectedChannel, setDetectedChannel] = useState(null)

  useEffect(() => {
    if (shouldReduceMotion) {
      setTerminalStep(3)
      setDetectedChannel(null)
      return
    }

    const timers = [
      window.setTimeout(() => setTerminalStep(1), 220),
      window.setTimeout(() => setTerminalStep(2), 900),
      window.setTimeout(() => setTerminalStep(3), 1500),
    ]

    const radarInterval = window.setInterval(() => {
      setSweepAngle((current) => {
        const next = (current + 4) % 360
        const detected = channels.find((channel) => {
          const dx = channel.x - 50
          const dy = channel.y - 50
          const angle = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360
          const diff = Math.abs(((next - angle + 540) % 360) - 180)
          return diff <= 16 && Math.hypot(dx, dy) <= 44
        })
        setDetectedChannel(detected ? detected.id : null)
        return next
      })
    }, 50)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.clearInterval(radarInterval)
    }
  }, [shouldReduceMotion])

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-void)] py-24 text-[var(--color-ghost)] sm:py-28 lg:py-32"
      aria-label="Contact signal interface"
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="noise-texture absolute inset-0" />
      <motion.div
        className="scanline-field absolute inset-0"
        animate={shouldReduceMotion ? { opacity: 0.18 } : { opacity: [0.14, 0.21, 0.14] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col px-6 sm:px-8 lg:px-16">
        <motion.div
          className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(111,163,255,0.16)] pb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariant}
        >
          <p className="terminal-kicker flex items-center gap-3 text-[rgba(111,163,255,0.72)]">
            <span className="h-px w-10 bg-[rgba(111,163,255,0.42)]" />
            // SIGNAL_INTERFACE / CONTACT
          </p>
          <p className="terminal-status text-[rgba(111,163,255,0.72)]">SYS_STATUS: ONLINE</p>
        </motion.div>

        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariant}
        >
          <h2 className="font-[var(--font-editorial)] text-[clamp(2rem,4.8vw,2.95rem)] uppercase tracking-[0.04em] text-[rgba(245,247,250,0.96)]">
            ACTIVE SIGNAL
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(245,247,250,0.72)] sm:text-lg">
            Sonar sweep engaged. Contact channels are now visible as underwater nodes within the broadcast field.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={contentVariant}
        >
          <div className="relative flex min-h-[24rem] items-center justify-center overflow-hidden py-4 lg:min-h-[28rem]">
            <div className="absolute inset-0 rounded-[0.1rem] border border-[rgba(111,163,255,0.12)]" />
            <div className="absolute inset-4 border border-[rgba(111,163,255,0.08)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(111,163,255,0.06),transparent_62%)]" />

            <svg viewBox="0 0 100 100" className="relative h-[min(72vw,24rem)] w-[min(72vw,24rem)] max-w-[24rem]">
              <circle cx="50" cy="50" r="44" stroke="rgba(111,163,255,0.2)" strokeWidth="0.18" fill="none" />
              <circle cx="50" cy="50" r="32" stroke="rgba(111,163,255,0.16)" strokeWidth="0.16" fill="none" />
              <circle cx="50" cy="50" r="20" stroke="rgba(111,163,255,0.14)" strokeWidth="0.16" fill="none" />
              <circle cx="50" cy="50" r="10" stroke="rgba(111,163,255,0.12)" strokeWidth="0.16" fill="none" />
              {Array.from({ length: 8 }).map((_, index) => (
                <line
                  key={index}
                  x1="50"
                  y1="50"
                  x2={50 + 44 * Math.cos((index / 8) * Math.PI * 2)}
                  y2={50 + 44 * Math.sin((index / 8) * Math.PI * 2)}
                  stroke="rgba(111,163,255,0.12)"
                  strokeWidth="0.12"
                />
              ))}

              <line
                x1="50"
                y1="50"
                x2={50 + 44 * Math.cos((sweepAngle * Math.PI) / 180)}
                y2={50 + 44 * Math.sin((sweepAngle * Math.PI) / 180)}
                stroke="rgba(111,163,255,0.68)"
                strokeWidth="0.24"
                strokeLinecap="round"
              />

              <circle cx="50" cy="50" r="1.9" fill="rgba(245,247,250,0.8)" />
              <circle cx="50" cy="50" r="4.4" fill="rgba(111,163,255,0.08)" stroke="rgba(111,163,255,0.22)" strokeWidth="0.16" />
              <text x="50" y="44" textAnchor="middle" fontSize="3.2" fill="rgba(111,163,255,0.72)" fontFamily="IBM Plex Mono, monospace">HOST_NODE</text>
              <text x="50" y="48.2" textAnchor="middle" fontSize="2.6" fill="rgba(245,247,250,0.7)" fontFamily="IBM Plex Mono, monospace">SWATHIKA</text>
              <text x="50" y="52" textAnchor="middle" fontSize="2.2" fill="rgba(111,163,255,0.58)" fontFamily="IBM Plex Mono, monospace">HYDERABAD // IN</text>

              <circle cx="18" cy="24" r="0.55" fill="rgba(111,163,255,0.24)" />
              <circle cx="76" cy="34" r="0.42" fill="rgba(111,163,255,0.2)" />
              <circle cx="34" cy="78" r="0.44" fill="rgba(111,163,255,0.2)" />

              {channels.map((channel) => {
                const isActive = hoveredChannel === channel.id || detectedChannel === channel.id
                const isDetected = detectedChannel === channel.id
                const labelOffset = channel.id === 'github' ? { x: 0, y: -5 } : { x: 0, y: -4 }

                return (
                  <motion.g
                    key={channel.id}
                    initial={{ opacity: 0.7, scale: 0.94 }}
                    animate={{
                      opacity: isActive ? 1 : 0.76,
                      scale: isActive ? 1.02 : 0.96,
                      x: shouldReduceMotion ? 0 : [0, -0.35, 0.35, 0],
                      y: shouldReduceMotion ? 0 : [0, 0.25, -0.2, 0],
                      rotate: shouldReduceMotion ? channel.rotation : [channel.rotation, channel.rotation - 0.7, channel.rotation + 0.7, channel.rotation],
                    }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    onMouseEnter={() => setHoveredChannel(channel.id)}
                    onMouseLeave={() => setHoveredChannel(null)}
                  >
                    <a href={channel.href} target={channel.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                      <circle
                        cx={channel.x}
                        cy={channel.y}
                        r={isDetected ? 3.3 : 2.7}
                        fill={isActive ? 'rgba(111,163,255,0.09)' : 'rgba(111,163,255,0.05)'}
                        stroke={isActive ? 'rgba(111,163,255,0.7)' : 'rgba(111,163,255,0.28)'}
                        strokeWidth="0.16"
                      />
                      <circle
                        cx={channel.x}
                        cy={channel.y}
                        r={isDetected ? 1.8 : 1.4}
                        fill={isActive ? 'rgba(111,163,255,0.38)' : 'rgba(111,163,255,0.2)'}
                      />
                      <path
                        d={`M${channel.x - 1.2} ${channel.y + 1.2} L${channel.x + 1.8} ${channel.y - 0.8} L${channel.x + 1.3} ${channel.y - 1.3} L${channel.x - 0.6} ${channel.y + 0.1} Z`}
                        fill={isActive ? 'rgba(245,247,250,0.18)' : 'rgba(245,247,250,0.12)'}
                        opacity={isActive ? 1 : 0.82}
                      />
                      <line
                        x1={channel.x}
                        y1={channel.y}
                        x2={channel.x + (channel.id === 'github' ? 2.1 : 1.8)}
                        y2={channel.y - (channel.id === 'github' ? 2.1 : 1.6)}
                        stroke={isActive ? 'rgba(111,163,255,0.72)' : 'rgba(111,163,255,0.24)'}
                        strokeWidth="0.16"
                      />
                    </a>
                    <text
                      x={channel.x + labelOffset.x}
                      y={channel.y + labelOffset.y}
                      textAnchor="middle"
                      fontSize="2.2"
                      fill={isActive ? 'rgba(245,247,250,0.9)' : 'rgba(111,163,255,0.64)'}
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      [{channel.label}_CHANNEL]
                    </text>
                  </motion.g>
                )
              })}
            </svg>

            <motion.div
              className="absolute bottom-8 left-6 flex flex-col gap-1 text-[0.56rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.66)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45 }}
            >
              <span>SCAN_MODE: ACTIVE</span>
              <span>RANGE: 1000m</span>
              <span>SIGNAL: {detectedChannel ? 'DETECTED' : 'LISTENING'}</span>
            </motion.div>

            <motion.div
              className="absolute right-6 top-6 flex flex-col items-end gap-1 text-[0.56rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.6)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: terminalStep >= 2 ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <span>HOST: SWATHIKA</span>
              <span>LAT: 17.3850</span>
              <span>LON: 78.4867</span>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: detectedChannel ? 1 : 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="flex flex-col items-center gap-2 text-center font-[var(--font-terminal)] text-[0.56rem] uppercase tracking-[0.24em] text-[rgba(245,247,250,0.8)]">
                <span className="text-[rgba(111,163,255,0.82)]">[SIGNAL_DETECTED]</span>
                <span>PING: 24ms</span>
                <span>CHANNEL: {detectedChannel ? detectedChannel.toUpperCase() : ''}</span>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:translate-x-[-0.5rem] lg:pr-2">
            <div className="font-[var(--font-terminal)] text-[0.62rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.72)]">
              <p className="terminal-kicker mb-4 text-[rgba(111,163,255,0.72)]">// INITIATE_SIGNAL / CONNECT</p>
              <p className="max-w-xl text-sm leading-8 text-[rgba(245,247,250,0.72)] sm:text-[0.95rem]">
                Pinging for new opportunities, collaborations, or technical discussions.
              </p>

              <motion.div
                className="mt-6 flex items-center gap-1 text-[rgba(245,247,250,0.86)]"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: terminalStep >= 1 ? 1 : 0, y: terminalStep >= 1 ? 0 : 4 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[rgba(111,163,255,0.78)]">swathika@portfolio:~$</span>
                <span className="ml-1 text-[rgba(245,247,250,0.86)]">./INITIATE_CONTACT.SH</span>
                <span className="terminal-cursor ml-1" aria-hidden="true" />
              </motion.div>

              <motion.p
                className="mt-3 leading-7 text-[rgba(245,247,250,0.72)]"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: terminalStep >= 2 ? 1 : 0, y: terminalStep >= 2 ? 0 : 4 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                &gt; INITIALIZING COMMUNICATION PROTOCOL...
              </motion.p>
              <motion.p
                className="leading-7 text-[rgba(111,163,255,0.76)]"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: terminalStep >= 3 ? 1 : 0, y: terminalStep >= 3 ? 0 : 4 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                &gt; CONNECTION_STATUS: READY
              </motion.p>

              <motion.div
                className="mt-6 flex items-center gap-2 text-[0.56rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.66)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: terminalStep >= 3 ? 1 : 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="inline-block h-2 w-2 rounded-full bg-[rgba(111,163,255,0.8)]"
                  animate={shouldReduceMotion ? { opacity: 0.8 } : { opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span>SIGNAL_STATUS: {detectedChannel ? 'DETECTED' : 'ONLINE'}</span>
              </motion.div>

              <form className="mt-8 space-y-6" onSubmit={(event) => event.preventDefault()}>
                <div className="h-px w-full bg-[linear-gradient(90deg,rgba(111,163,255,0.32),rgba(111,163,255,0.02))]" />
                {contactFields.map((field) => (
                  <label key={field.id} className="block">
                    <div className={`mb-2 flex items-center gap-2 font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] transition-colors duration-300 ${focusedField === field.id ? 'text-[rgba(111,163,255,0.95)]' : 'text-[rgba(111,163,255,0.7)]'}`}>
                      <span className={`transition-colors duration-300 ${focusedField === field.id ? 'text-[rgba(111,163,255,0.95)]' : 'text-[rgba(245,247,250,0.62)]'}`}>
                        {focusedField === field.id ? '▌' : '>'}
                      </span>
                      {field.label}
                    </div>
                    {field.type === 'textarea' ? (
                      <textarea
                        rows="4"
                        placeholder={field.placeholder}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full border-0 border-b bg-transparent py-3 font-[var(--font-terminal)] text-sm leading-7 text-[rgba(245,247,250,0.9)] outline-none transition-all duration-300 placeholder:text-[rgba(122,134,154,0.38)] ${focusedField === field.id ? 'border-[rgba(111,163,255,0.72)] shadow-[0_0_0_1px_rgba(111,163,255,0.08)]' : 'border-[rgba(111,163,255,0.18)]'}`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full border-0 border-b bg-transparent py-3 font-[var(--font-terminal)] text-sm leading-7 text-[rgba(245,247,250,0.9)] outline-none transition-all duration-300 placeholder:text-[rgba(122,134,154,0.38)] ${focusedField === field.id ? 'border-[rgba(111,163,255,0.72)] shadow-[0_0_0_1px_rgba(111,163,255,0.08)]' : 'border-[rgba(111,163,255,0.18)]'}`}
                      />
                    )}
                  </label>
                ))}
              </form>

              <motion.button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 font-[var(--font-terminal)] text-[0.72rem] uppercase tracking-[0.28em] text-[rgba(111,163,255,0.82)] transition-colors duration-300 hover:text-[rgba(245,247,250,0.96)]"
                whileHover={{ x: 4, color: 'rgba(245,247,250,0.96)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(event) => event.preventDefault()}
              >
                <span className="text-[rgba(245,247,250,0.72)]">&gt;</span>
                ./SEND_MESSAGE.SH ↗
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 border-t border-[rgba(111,163,255,0.16)] pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerVariant}
        >
          <div className="flex flex-col gap-3 text-[0.56rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.64)] sm:flex-row sm:items-center sm:justify-between">
            <p>CHANNEL_STATUS: AVAILABLE</p>
            <p>CONNECTION: OPEN</p>
            <p>SYS_STATUS: ONLINE</p>
            <p>GRID: 017.04 // NODE: CONTACT</p>
          </div>
          <p className="mt-3 text-[0.6rem] uppercase tracking-[0.22em] text-[rgba(122,134,154,0.72)]">
            © 2026 SWATHIKA
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const headerVariant = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const contentVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const footerVariant = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

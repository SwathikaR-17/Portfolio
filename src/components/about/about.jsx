import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      className="about-shell relative isolate overflow-hidden bg-[var(--color-void)] text-[var(--color-ghost)]"
      aria-label="About Swathika"
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="noise-texture absolute inset-0" />
      <div className="scanline-field absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[74vh] w-full max-w-[90rem] flex-col justify-center px-6 py-24 sm:px-8 lg:px-16">
        <motion.div
          className="max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
          }}
        >
          <motion.p
            className="terminal-kicker mb-5 flex items-center gap-3 text-[rgba(111,163,255,0.72)]"
            variants={revealVariant}
          >
            <span className="h-px w-10 bg-[rgba(111,163,255,0.42)]" />
            profile / intent / signal
          </motion.p>

          <motion.h2 className="about-heading" variants={revealVariant}>
            ABOUT
          </motion.h2>

          <motion.div
            className="my-8 h-px w-full max-w-[13rem] bg-[linear-gradient(90deg,rgba(111,163,255,0.36),rgba(111,163,255,0.02))]"
            variants={revealVariant}
          />

          <motion.p
            className="mb-6 max-w-3xl text-xl font-semibold leading-8 text-[rgba(245,247,250,0.96)] sm:text-2xl sm:leading-9"
            variants={revealVariant}
          >
            I’m a curious builder who likes to turn ideas into systems that feel human, useful, and a little bit alive.
          </motion.p>

          <motion.p
            className="max-w-3xl font-[var(--font-editorial)] text-lg leading-8 text-[rgba(245,247,250,0.72)] sm:text-xl"
            variants={revealVariant}
          >
            My work lives at the edge of curiosity and craft, where research, experimentation, and clear thinking meet in real products. I enjoy shaping thoughtful experiences, learning in public, and moving with the pace of a field that keeps changing faster than any one person can keep up with.
          </motion.p>

          <motion.p
            className="mt-10 text-sm uppercase tracking-[0.26em] text-[rgba(111,163,255,0.7)]"
            variants={revealVariant}
          >
            Hyderabad
          </motion.p>
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
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}


import { motion } from 'framer-motion'

const education = [
  {
    date: '2022 - 2026',
    status: 'ACTIVE NODE / DEGREE',
    degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
    institution: 'G. Narayanamma Institute of Technology & Science (GNITS)',
    location: 'Hyderabad, Telangana, IN',
    focus: ['Computer Vision', 'Embedded IoT Systems', 'Deep Learning', 'Data Structures & Algorithms'],
    active: true,
  },
  {
    date: '2020 - 2022',
    status: 'ARCHIVED LOG',
    degree: 'Intermediate Education (MPC - Math, Physics, Chemistry)',
    institution: 'Junior College / Higher Secondary',
    location: 'Hyderabad, IN',
    focus: ['Mathematics', 'Physics', 'Computer Science Basics'],
    active: false,
  },
]

export default function Education() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-void)] py-24 text-[var(--color-ghost)] sm:py-28 lg:py-32"
      aria-label="Academic telemetry"
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="noise-texture absolute inset-0" />
      <div className="scanline-field absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col px-6 sm:px-8 lg:px-16">
        <motion.div
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariant}
        >
          <div className="max-w-2xl">
            <p className="terminal-kicker mb-4 flex items-center gap-3 text-[rgba(111,163,255,0.72)]">
              <span className="h-px w-10 bg-[rgba(111,163,255,0.42)]" />
              // ACADEMIC_TELEMETRY
            </p>
            <h2 className="font-[var(--font-editorial)] text-[clamp(2.8rem,6vw,4.2rem)] uppercase tracking-[0.04em] text-[rgba(245,247,250,0.96)]">
              EDUCATION
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[rgba(245,247,250,0.72)] sm:text-lg">
              A record of the systems, disciplines, and foundations built along the way.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start text-[0.62rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.66)]">
            <span className="h-px w-6 bg-[rgba(111,163,255,0.24)]" />
            SYS_STATUS: ACTIVE
          </div>
        </motion.div>

        <div className="relative mt-4 mx-auto w-full max-w-5xl lg:max-w-6xl">
          <div className="space-y-8 md:space-y-10">
            {education.map((item, index) => (
              <motion.div
                key={item.date}
                className="flex flex-col gap-3 md:grid md:grid-cols-[10rem_2.5rem_minmax(0,1fr)] md:gap-6 lg:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={entryVariant}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center md:justify-end md:pr-4 md:pt-1">
                  <span className="font-[var(--font-terminal)] text-[0.6rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.7)]">
                    [{item.date}]
                  </span>
                </div>

                <div className="relative flex items-start md:justify-center">
                  <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 border-l border-dashed border-[rgba(111,163,255,0.16)] md:block" />
                  <motion.span
                    className={`relative z-10 mt-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border ${item.active ? 'border-[rgba(111,163,255,0.72)]' : 'border-[rgba(111,163,255,0.28)]'}`}
                    initial={{ scale: 0.8, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${item.active ? 'bg-[rgba(111,163,255,0.9)]' : 'bg-[rgba(111,163,255,0.35)]'}`} />
                  </motion.span>
                </div>

                <div className="relative pl-1 md:pl-0">
                  <motion.div
                    className="mb-3 flex flex-wrap items-center gap-2"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className={`font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] ${item.active ? 'text-[rgba(111,163,255,0.76)]' : 'text-[rgba(245,247,250,0.45)]'}`}>
                      {item.status}
                    </span>
                  </motion.div>

                  <div className="relative">
                    <div className={`absolute left-0 top-2 h-px w-6 ${item.active ? 'bg-[rgba(111,163,255,0.48)]' : 'bg-[rgba(111,163,255,0.2)]'}`} />
                    <h3 className={`pl-8 text-[clamp(1rem,2.2vw,1.3rem)] leading-7 ${item.active ? 'text-[rgba(245,247,250,0.98)]' : 'text-[rgba(245,247,250,0.82)]'}`}>
                      {item.degree}
                    </h3>
                  </div>

                  <p className="mt-2 pl-8 text-[0.95rem] leading-7 text-[rgba(245,247,250,0.72)]">
                    {item.institution}
                  </p>
                  <p className="mt-1 pl-8 font-[var(--font-terminal)] text-[0.6rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.66)]">
                    └─ {item.location}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 pl-8">
                    {item.focus.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[rgba(111,163,255,0.18)] bg-[rgba(7,17,31,0.3)] px-2.5 py-1 font-[var(--font-terminal)] text-[0.56rem] uppercase tracking-[0.24em] text-[rgba(245,247,250,0.62)]"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const headerVariant = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const entryVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

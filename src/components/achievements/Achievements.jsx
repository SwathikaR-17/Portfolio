import { motion, useReducedMotion } from 'framer-motion'

const achievements = [
  {
    hash: 'c0mm1t_01',
    tag: 'AWARD_WIN',
    title: "1st Place Winner @ Hacksavvy '26 National Hackathon",
    details: '+ Developed STOMA (AI-driven smart irrigation system) under 24hr constraints.',
    link: 'case_study.sh',
  },
  {
    hash: 'c0mm1t_02',
    tag: 'ROLE_PROMOTION',
    title: 'Promoted to Project Coordinator @ SmartX',
    details: '+ Advanced from Intern Developer to Project Coordinator; leading SafeSpeak AI integration and engineering sprint deliverables.',
  },
  {
    hash: 'c0mm1t_03',
    tag: 'LEADERSHIP',
    title: 'Junior & Senior Manager @ AIESEC Hyderabad',
    details: '+ Executed 7-month operational stint managing cross-functional team workflows and intern onboarding.',
  },
  {
    hash: 'c0mm1t_04',
    tag: 'PROJECT_DEPLOY',
    title: 'Launched SightSense (Assistive AI Vision App)',
    details: '+ Integrated on-device YOLO models for real-time object detection and dataset processing.',
    link: 'github_repo.sh',
  },
]

export default function Achievements() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-void)] py-24 text-[var(--color-ghost)] sm:py-28 lg:py-32"
      aria-label="System commits"
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="noise-texture absolute inset-0" />
      <div className="scanline-field absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col px-6 sm:px-8 lg:px-16">
        <motion.div
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariant}
        >
          <div className="max-w-2xl">
            <p className="terminal-kicker mb-4 flex items-center gap-3 text-[rgba(111,163,255,0.72)]">
              <span className="h-px w-10 bg-[rgba(111,163,255,0.42)]" />
              // SYSTEM_COMMITS / MILESTONES
            </p>
            <h2 className="font-[var(--font-editorial)] text-[clamp(2.8rem,6vw,4.2rem)] uppercase tracking-[0.04em] text-[rgba(245,247,250,0.96)]">
              ACHIEVEMENTS
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[rgba(245,247,250,0.72)] sm:text-lg">
              The milestones committed to the engineering journey.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start text-[0.62rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.66)]">
            <span className="h-px w-6 bg-[rgba(111,163,255,0.24)]" />
            BRANCH: main // HEAD → active
          </div>
        </motion.div>

        <div className="relative mt-4 md:mt-6">
          <motion.div
            className="absolute left-3 top-0 bottom-0 hidden w-px border-l border-dashed border-[rgba(111,163,255,0.18)] md:block"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-10 md:space-y-12">
            {achievements.map((achievement, index) => {
              const isLatest = index === 0

              return (
                <motion.article
                  key={achievement.hash}
                  className="relative md:grid md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-6 lg:gap-8"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={shouldReduceMotion ? undefined : { x: 3, transition: { duration: 0.2 } }}
                >
                  <div className="mb-3 flex items-center gap-3 md:mb-0 md:pt-1">
                    <motion.span
                      className={`relative z-10 h-2.5 w-2.5 shrink-0 rounded-full border ${isLatest ? 'border-[rgba(111,163,255,0.82)] bg-[rgba(111,163,255,0.92)] shadow-[0_0_12px_rgba(111,163,255,0.24)]' : 'border-[rgba(111,163,255,0.34)] bg-[rgba(111,163,255,0.16)]'}`}
                      initial={{ scale: 0.72, opacity: 0.7 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                    />
                    <span className="font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.7)]">
                      {achievement.hash}
                    </span>
                  </div>

                  <div className="relative pl-0 md:pl-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center border border-[rgba(111,163,255,0.18)] bg-[rgba(7,17,31,0.28)] px-2.5 py-1 font-[var(--font-terminal)] text-[0.56rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.74)] transition-colors duration-300">
                        [{achievement.tag}]
                      </span>
                      {isLatest ? (
                        <span className="text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.58)]">
                          HEAD → active
                        </span>
                      ) : null}
                    </div>

                    <div className="relative pl-1 md:pl-0">
                      <div className={`absolute left-0 top-2 h-px w-6 ${isLatest ? 'bg-[rgba(111,163,255,0.56)]' : 'bg-[rgba(111,163,255,0.24)]'}`} />
                      <p className={`pl-8 text-[clamp(1rem,2.2vw,1.25rem)] leading-7 transition-colors duration-300 ${isLatest ? 'text-[rgba(245,247,250,0.98)]' : 'text-[rgba(245,247,250,0.84)]'}`}>
                        {achievement.title}
                      </p>
                    </div>

                    <p className="mt-3 pl-8 text-sm leading-7 text-[rgba(245,247,250,0.72)]">
                      └─ {achievement.details}
                    </p>

                    {achievement.link ? (
                      <motion.a
                        href="#"
                        className="ml-8 mt-2 inline-flex items-center gap-2 font-[var(--font-terminal)] text-[0.6rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.68)] transition-colors duration-300 hover:text-[rgba(245,247,250,0.95)]"
                        whileHover={shouldReduceMotion ? undefined : { x: 3, color: 'rgba(245,247,250,0.95)' }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        git diff --stat [{achievement.link}] ↗
                      </motion.a>
                    ) : null}
                  </div>
                </motion.article>
              )
            })}
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

import { motion } from 'framer-motion'

const smartx = {
  company: 'SMARTX',
  status: 'STATUS: ACTIVE_NODE',
  dates: 'Present',
  location: 'Hyderabad, IN',
  progression: 'Intern Developer ───► Project Coordinator',
  roles: [
    {
      title: 'Intern Developer',
      techStack: 'Python, AI/ML, REST APIs',
      project: 'SafeSpeak AI',
      impact: 'Developed and integrated core features for SafeSpeak AI, optimizing real-time inference performance.',
    },
    
    {
      title: 'Project Coordinator',
      coreSkills: 'Cross-Functional Leadership, Project Management, Technical Communication',
      impact: 'Coordinating sprint cycles, managing tech team deliverables, and bridging communication between technical and product teams.',
    },
  ],
}

const aiesec = {
  company: 'AIESEC',
  status: 'STATUS: 7_MONTHS_DURATION',
  dates: '7 Months',
  location: 'Hyderabad, IN',
  progression: 'Junior Manager ───► Senior Manager',
  roles: [
    {
      title: 'Junior Manager',
      impact: 'Supported team operations and helped shape early leadership responsibilities within the organization.',
    },
    {
      title: 'Senior Manager',
      coreSkills: 'Team Leadership, Stakeholder Management, Operations, Public Speaking',
      impact: 'Managed cross-functional team workflows, led intern onboarding programs, and drove operational growth across leadership portfolios.',
    },
  ],
}

export default function Experience() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-void)] py-24 text-[var(--color-ghost)] sm:py-28 lg:py-32"
      aria-label="Work experience"
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="noise-texture absolute inset-0" />
      <div className="scanline-field absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col px-6 sm:px-8 lg:px-16">
        <motion.div
          className="mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariant}
        >
          <p className="terminal-kicker mb-4 flex items-center gap-3 text-[rgba(111,163,255,0.72)]">
            <span className="h-px w-10 bg-[rgba(111,163,255,0.42)]" />
            // SYSTEM_THREAD / WORK_EXPERIENCE
          </p>
          <h2 className="experience-heading">EXPERIENCE</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(245,247,250,0.72)] sm:text-lg">
            Two independent execution threads operating within the same technical system.
          </p>
        </motion.div>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:gap-14">
          <ExperienceThread data={smartx} isActive />
          <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(111,163,255,0.24),transparent)]" />
          <ExperienceThread data={aiesec} />
        </div>
      </div>
    </section>
  )
}

function ExperienceThread({ data, isActive = false }) {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariant}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(111,163,255,0.16)] pb-3">
        <div>
          <p className="font-[var(--font-editorial)] text-[clamp(1.3rem,2.3vw,1.7rem)] uppercase tracking-[0.04em] text-[rgba(245,247,250,0.95)]">
            {data.company}
          </p>
          <p className="mt-2 font-[var(--font-terminal)] text-[0.6rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.68)]">
            {data.status} • {data.dates} • {data.location}
          </p>
        </div>
        <p className="font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.6)]">
          THREAD_COUNT: 0{isActive ? '1' : '2'}
        </p>
      </div>

      <div className="relative pl-0 md:pl-2">
        <div className="mb-5 flex flex-wrap items-center gap-2 font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.7)]">
          <span className="h-px w-6 bg-[rgba(111,163,255,0.24)]" />
          {data.progression}
        </div>

        <div className="space-y-6">
          {data.roles.map((role, index) => (
            <div key={role.title} className="relative pl-4 md:pl-6">
              <div className="absolute left-0 top-2.5 h-px w-4 bg-[rgba(111,163,255,0.22)]" />
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full border ${isActive ? 'border-[rgba(111,163,255,0.8)] bg-[rgba(111,163,255,0.9)]' : 'border-[rgba(111,163,255,0.3)] bg-transparent'}`} />
                <span className="font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(245,247,250,0.56)]">
                  {index === 0 ? '├─► ROLE' : '└─► ROLE'}
                </span>
              </div>

              <p className={`mt-3 text-[clamp(1rem,2.1vw,1.2rem)] leading-7 ${isActive ? 'text-[rgba(245,247,250,0.98)]' : 'text-[rgba(245,247,250,0.84)]'}`}>
                {role.title}
              </p>

              {role.techStack ? (
                <p className="mt-2 font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.68)]">
                  [TECH_STACK]: {role.techStack}
                </p>
              ) : null}

              {role.project ? (
                <p className="mt-2 font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.68)]">
                  [PROJECT]: {role.project}
                </p>
              ) : null}

              {role.coreSkills ? (
                <p className="mt-2 font-[var(--font-terminal)] text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.68)]">
                  [CORE_SKILLS]: {role.coreSkills}
                </p>
              ) : null}

              <p className="mt-3 text-sm leading-7 text-[rgba(245,247,250,0.72)]">
                {role.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
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

const cardVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

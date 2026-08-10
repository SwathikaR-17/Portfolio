import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const experiments = [
  {
    id: '001',
    title: 'SightSense',
    subtitle: 'AI-powered assistive vision application',
    status: 'BUILDING',
    statusTone: 'building',
    mission: 'Helping visually impaired people navigate everyday life more independently.',
    focus: 'Real-time object detection and dataset preparation.',
    learning: 'Building AI for the real world is much harder than building AI demos.',
    proud: 'The idea. Every meaningful project starts with asking the right question.',
    buttons: ['GitHub', 'Coming Soon'],
    accent: 'camera',
    featured: false,
  },
  {
    id: '002',
    title: 'STOMA',
    subtitle: 'AI Driven Smart Irrigation Inspired by Plant Stomata',
    status: '🏆 HackSavvy\'26 Winner',
    statusTone: 'featured',
    mission: 'Helping agriculture become smarter by learning from nature.',
    focus: 'Nature already solved many engineering problems. Sometimes innovation means learning from it.',
    learning: 'Nature already solved many engineering problems. Sometimes innovation means learning from it.',
    proud: 'Winning 1st Prize at a National 24-hour Hackathon.',
    buttons: ['GitHub', 'Case Study'],
    accent: 'stoma',
    featured: true,
  },
  {
    id: '003',
    title: 'ScholarQuest',
    subtitle: 'Student Opportunity Platform',
    status: 'COMPLETE',
    statusTone: 'complete',
    mission: 'Helping students discover scholarships, internships, hackathons and opportunities from one place.',
    focus: 'Designing for students requires understanding their journey, not just building interfaces.',
    learning: 'Designing for students requires understanding their journey, not just building interfaces.',
    proud: 'Building something that could genuinely help fellow students.',
    buttons: ['GitHub', 'Preview'],
    accent: 'dashboard',
    featured: false,
  },
  {
    id: '004',
    title: 'NoiseIOT',
    subtitle: 'IoT Noise Monitoring Dashboard',
    status: 'COMPLETE',
    statusTone: 'complete',
    mission: 'Exploring IoT to monitor environmental noise pollution.',
    focus: 'Successfully connected Wokwi simulation with a Streamlit dashboard using MQTT.',
    learning: 'Successfully connected Wokwi simulation with a Streamlit dashboard using MQTT.',
    proud: 'Making two independent systems communicate in real time.',
    buttons: ['GitHub', 'Preview'],
    accent: 'sensor',
    featured: false,
  },
  {
    id: '005',
    title: 'AYIDRA',
    subtitle: 'AI × AR × VR Fashion Experience',
    status: 'COMING SOON',
    statusTone: 'soon',
    mission: 'This experiment is still evolving.',
    focus: '',
    learning: '',
    proud: '',
    buttons: [],
    accent: 'fashion',
    featured: false,
  },
]

const accentMap = {
  camera: 'camera-grid',
  stoma: 'stoma-grid',
  dashboard: 'dashboard-grid',
  sensor: 'sensor-grid',
  fashion: 'fashion-grid',
}

export default function Experiments() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-void)] py-24 text-[var(--color-ghost)] sm:py-28 lg:py-32"
      aria-label="Experiments archive"
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="noise-texture absolute inset-0" />
      <div className="scanline-field absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col px-6 sm:px-8 lg:px-16">
        <motion.div
          className="mb-16 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariant}
        >
          <motion.p className="terminal-kicker mb-5 flex items-center gap-3 text-[rgba(111,163,255,0.72)]" variants={itemVariant}>
            <span className="h-px w-10 bg-[rgba(111,163,255,0.42)]" />
            RESEARCH / BUILD / ITERATE
          </motion.p>
          <motion.h2 className="experiments-heading" variants={itemVariant}>
            EXPERIMENTS
          </motion.h2>
          <motion.p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(245,247,250,0.72)] sm:text-xl" variants={itemVariant}>
            Technology becomes meaningful when it solves real human problems.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiments.map((experiment, index) => {
            const details = getDetailBlocks(experiment)

            return (
              <motion.article
                key={experiment.id}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-[rgba(111,163,255,0.16)] bg-[linear-gradient(145deg,rgba(245,247,250,0.04),transparent_46%),rgba(7,17,31,0.54)] p-6 backdrop-blur-[18px] sm:p-6 lg:p-7 ${experiment.featured ? 'border-[rgba(111,163,255,0.24)] shadow-[0_0_32px_rgba(58,123,255,0.05)]' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={cardVariant}
                transition={{ delay: index * 0.06, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.24, ease: 'easeOut' } }}
              >
                <div className={`pointer-events-none absolute inset-0 opacity-[0.04] ${accentMap[experiment.accent]}`} />
                <div className={`pointer-events-none absolute right-4 top-4 h-24 w-24 opacity-[0.12] ${accentMap[experiment.accent]}`} />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {experiment.featured ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(111,163,255,0.22)] bg-[rgba(111,163,255,0.09)] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[rgba(111,163,255,0.78)]">
                          <Sparkles size={11} />
                          FEATURED
                        </span>
                      ) : null}
                      <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] ${statusClassName(experiment.statusTone)}`}>
                        <span className={`h-2.5 w-2.5 rounded-full ${pulseClassName(experiment.statusTone)}`} />
                        {experiment.status}
                      </span>
                    </div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.68)]">
                      EXP. {experiment.id}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-[var(--font-editorial)] text-2.2rem leading-tight text-[rgba(245,247,250,0.96)] sm:text-[1.95rem]">
                      {experiment.title}
                    </h3>
                    <p className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-[rgba(245,247,250,0.58)] sm:text-[0.78rem]">
                      {experiment.subtitle}
                    </p>
                  </div>

                  {experiment.id === '005' ? (
                    <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-[1rem] border border-[rgba(111,163,255,0.12)] bg-[rgba(7,17,31,0.36)] px-6 py-10 text-center">
                      <div className={`mb-5 h-20 w-20 opacity-[0.16] ${accentMap[experiment.accent]}`} />
                      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.66)]">
                        RESEARCH IN PROGRESS
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[rgba(245,247,250,0.72)]">
                        {experiment.mission}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6 grid flex-1 grid-cols-2 gap-2">
                      {details.map((detail) => (
                        <div
                          key={detail.label}
                          className="min-h-[92px] rounded-[0.9rem] border border-[rgba(111,163,255,0.12)] bg-[rgba(7,17,31,0.36)] p-3"
                        >
                          <p className="text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(111,163,255,0.68)]">
                            {detail.label}
                          </p>
                          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[rgba(245,247,250,0.74)]">
                            {detail.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {experiment.id === '005' ? null : experiment.buttons.map((button) => (
                      <motion.a
                        key={button}
                        href="#"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(111,163,255,0.16)] bg-[rgba(7,17,31,0.58)] px-3 py-2 text-sm font-medium text-[rgba(245,247,250,0.86)] transition-colors duration-300 hover:border-[rgba(111,163,255,0.34)] hover:text-[rgba(245,247,250,1)]"
                        whileHover={{ x: 2, transition: { duration: 0.2 } }}
                      >
                        {button}
                        <ArrowUpRight size={15} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function getDetailBlocks(experiment) {
  if (experiment.id === '005') {
    return []
  }

  return [
    { label: 'WHY', value: experiment.mission },
    { label: 'BUILDING', value: experiment.focus },
    { label: 'DISCOVERY', value: experiment.learning },
    { label: 'RESULT', value: experiment.proud },
  ]
}

function statusClassName(statusTone) {
  switch (statusTone) {
    case 'building':
      return 'border-[rgba(255,200,72,0.24)] bg-[rgba(255,200,72,0.08)] text-[rgba(255,200,72,0.88)]'
    case 'featured':
      return 'border-[rgba(111,163,255,0.24)] bg-[rgba(111,163,255,0.10)] text-[rgba(111,163,255,0.88)]'
    case 'complete':
      return 'border-[rgba(94,214,120,0.24)] bg-[rgba(94,214,120,0.08)] text-[rgba(94,214,120,0.88)]'
    case 'soon':
      return 'border-[rgba(245,247,250,0.16)] bg-[rgba(245,247,250,0.05)] text-[rgba(245,247,250,0.7)]'
    default:
      return 'border-[rgba(111,163,255,0.16)] bg-[rgba(111,163,255,0.06)] text-[rgba(111,163,255,0.78)]'
  }
}

function pulseClassName(statusTone) {
  switch (statusTone) {
    case 'building':
      return 'bg-[rgba(255,200,72,0.96)] animate-pulse'
    case 'featured':
      return 'bg-[rgba(111,163,255,0.96)]'
    case 'complete':
      return 'bg-[rgba(94,214,120,0.96)]'
    case 'soon':
      return 'bg-[rgba(245,247,250,0.8)]'
    default:
      return 'bg-[rgba(111,163,255,0.96)]'
  }
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

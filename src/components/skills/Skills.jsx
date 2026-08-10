import { motion } from 'framer-motion'
import { useState } from 'react'

const skillGroups = [
  {
    id: 'ai',
    title: 'AI / ML',
    label: 'AI / ML',
    x: 330,
    y: 220,
    skills: [
      { id: 'python', label: 'Python', x: 250, y: 125 },
      { id: 'numpy', label: 'NumPy', x: 330, y: 95 },
      { id: 'pandas', label: 'Pandas', x: 425, y: 130 },
      { id: 'opencv', label: 'OpenCV', x: 468, y: 205 },
      { id: 'yolo', label: 'YOLO', x: 242, y: 262 },
    ],
  },
  {
    id: 'dev',
    title: 'DEVELOPMENT',
    label: 'DEVELOPMENT',
    x: 700,
    y: 235,
    skills: [
      { id: 'java', label: 'Java', x: 640, y: 145 },
      { id: 'javascript', label: 'JavaScript', x: 750, y: 120 },
      { id: 'react', label: 'React', x: 835, y: 190 },
      { id: 'css', label: 'CSS', x: 810, y: 286 },
      { id: 'htmlcss', label: 'HTML', x: 686, y: 314 },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND / DATA',
    label: 'BACKEND / DATA',
    x: 725,
    y: 540,
    skills: [
      { id: 'flask', label: 'Flask', x: 635, y: 620 },
      { id: 'fastapi', label: 'FastAPI', x: 730, y: 645 },
      { id: 'sql', label: 'SQL', x: 830, y: 610 },
      { id: 'rest', label: 'REST API', x: 895, y: 560 },
    ],
  },
  {
    id: 'iot',
    title: 'IOT / SYSTEMS',
    label: 'IOT / SYSTEMS',
    x: 345,
    y: 570,
    skills: [
      { id: 'arduino', label: 'Arduino', x: 230, y: 642 },
      { id: 'mqtt', label: 'MQTT', x: 320, y: 672 },
      { id: 'wokwi', label: 'Wokwi', x: 435, y: 648 },
      { id: 'sensors', label: 'Sensors', x: 497, y: 590 },
    ],
  },
  {
    id: 'tools',
    title: 'TOOLS',
    label: 'TOOLS',
    x: 175,
    y: 395,
    skills: [
      { id: 'git', label: 'Git', x: 110, y: 300 },
      { id: 'github', label: 'GitHub', x: 80, y: 392 },
      { id: 'vscode', label: 'VS Code', x: 135, y: 478 },
      { id: 'figma', label: 'Figma', x: 240, y: 455 },
    ],
  },
]

const secondaryConnections = [
  ['python', 'numpy'],
  ['numpy', 'pandas'],
  ['java', 'javascript'],
  ['javascript', 'react'],
  ['flask', 'fastapi'],
  ['fastapi', 'sql'],
  ['arduino', 'mqtt'],
  ['mqtt', 'wokwi'],
  ['git', 'github'],
  ['github', 'vscode'],
]

export default function Skills() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-void)] py-24 text-[var(--color-ghost)] sm:py-28 lg:py-32"
      aria-label="Engineering constellation"
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="noise-texture absolute inset-0" />
      <div className="scanline-field absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col px-6 sm:px-8 lg:px-16">
        <motion.div
          className="mb-8 max-w-3xl sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariant}
        >
          <p className="terminal-kicker mb-4 flex items-center gap-3 text-[rgba(111,163,255,0.72)]">
            <span className="h-px w-10 bg-[rgba(111,163,255,0.42)]" />
            ENGINEERING CONSTELLATION
          </p>
          <h2 className="experience-heading">SKILLS</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(245,247,250,0.72)] sm:text-lg">
            A map of the technologies I use, explore, and connect together.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden p-0 sm:p-0 lg:p-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardVariant}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[720px]">
            <svg
              viewBox="0 0 1000 720"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.25" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle cx="500" cy="360" r="178" fill="none" stroke="rgba(111,163,255,0.08)" strokeWidth="1" />
              <circle cx="500" cy="360" r="238" fill="none" stroke="rgba(111,163,255,0.05)" strokeWidth="1" />
              <circle cx="500" cy="360" r="120" fill="none" stroke="rgba(111,163,255,0.1)" strokeDasharray="3 7" strokeWidth="1" />

              {skillGroups.flatMap((group) =>
                group.skills.map((skill) => (
                  <motion.path
                    key={`${group.id}-${skill.id}-to-group`}
                    d={`M ${group.x} ${group.y} L ${skill.x} ${skill.y}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    stroke={groupIsActive(group.id, activeId) || skillIsActive(group.id, skill.id, activeId) ? 'rgba(130,190,250,0.58)' : 'rgba(86,145,215,0.24)'}
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                  />
                )),
              )}

              <motion.path
                d="M 330 220 L 500 360"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                stroke={groupIsActive('ai', activeId) ? 'rgba(130,190,250,0.58)' : 'rgba(91,156,255,0.26)'}
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
              />
              <motion.path
                d="M 700 235 L 500 360"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                stroke={groupIsActive('dev', activeId) ? 'rgba(130,190,250,0.58)' : 'rgba(91,156,255,0.26)'}
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
              />
              <motion.path
                d="M 725 540 L 500 360"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                stroke={groupIsActive('backend', activeId) ? 'rgba(130,190,250,0.58)' : 'rgba(91,156,255,0.26)'}
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
              />
              <motion.path
                d="M 345 570 L 500 360"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                stroke={groupIsActive('iot', activeId) ? 'rgba(130,190,250,0.58)' : 'rgba(91,156,255,0.26)'}
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
              />
              <motion.path
                d="M 175 395 L 500 360"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                stroke={groupIsActive('tools', activeId) ? 'rgba(130,190,250,0.58)' : 'rgba(91,156,255,0.26)'}
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
              />

              <motion.path
                d="M 250 125 L 330 95 L 425 130"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                stroke={activeId && (activeId.includes('python') || activeId.includes('numpy') || activeId.includes('pandas')) ? 'rgba(130,190,250,0.36)' : 'rgba(120,175,235,0.16)'}
                strokeWidth="1"
                strokeDasharray="4 8"
                fill="none"
              />
              <motion.path
                d="M 640 145 L 750 120 L 835 190"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                stroke={activeId && (activeId.includes('java') || activeId.includes('javascript') || activeId.includes('react')) ? 'rgba(130,190,250,0.36)' : 'rgba(120,175,235,0.16)'}
                strokeWidth="1"
                strokeDasharray="4 8"
                fill="none"
              />
              <motion.path
                d="M 635 620 L 730 645 L 830 610"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                stroke={activeId && (activeId.includes('flask') || activeId.includes('fastapi') || activeId.includes('sql')) ? 'rgba(130,190,250,0.36)' : 'rgba(120,175,235,0.16)'}
                strokeWidth="1"
                strokeDasharray="4 8"
                fill="none"
              />
              <motion.path
                d="M 230 642 L 320 672 L 435 648"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                stroke={activeId && (activeId.includes('arduino') || activeId.includes('mqtt') || activeId.includes('wokwi')) ? 'rgba(130,190,250,0.36)' : 'rgba(120,175,235,0.16)'}
                strokeWidth="1"
                strokeDasharray="4 8"
                fill="none"
              />
              <motion.path
                d="M 110 300 L 80 392 L 135 478"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                stroke={activeId && (activeId.includes('git') || activeId.includes('github') || activeId.includes('vscode')) ? 'rgba(130,190,250,0.36)' : 'rgba(120,175,235,0.16)'}
                strokeWidth="1"
                strokeDasharray="4 8"
                fill="none"
              />

              {secondaryConnections.map(([from, to]) => {
                const fromSkill = skillGroups.flatMap((group) => group.skills).find((skill) => skill.id === from)
                const toSkill = skillGroups.flatMap((group) => group.skills).find((skill) => skill.id === to)
                if (!fromSkill || !toSkill) return null
                return (
                  <motion.path
                    key={`${from}-${to}`}
                    d={`M ${fromSkill.x} ${fromSkill.y} L ${toSkill.x} ${toSkill.y}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.28 }}
                    stroke={activeId && (activeId.includes(from) || activeId.includes(to)) ? 'rgba(130,190,250,0.32)' : 'rgba(120,175,235,0.12)'}
                    strokeWidth="1"
                    strokeDasharray="3 10"
                    fill="none"
                  />
                )
              })}

              {skillGroups.map((group) => (
                <g key={group.id} onMouseEnter={() => setActiveId(group.id)} onMouseLeave={() => setActiveId(null)}>
                  <circle
                    cx={group.x}
                    cy={group.y}
                    r="34"
                    fill="none"
                    stroke="rgba(111,163,255,0.28)"
                    strokeWidth="1.2"
                  />

                  <circle
                    cx={group.x}
                    cy={group.y}
                    r="23"
                    fill="none"
                    stroke={groupIsActive(group.id, activeId)
                      ? 'rgba(129,195,255,0.85)'
                      : 'rgba(111,163,255,0.65)'}
                    strokeWidth="1.2"
                  />
                  <circle
      cx={group.x}
      cy={group.y}
      r="4"
      fill="none"
      stroke={groupIsActive(group.id, activeId)
        ? 'rgba(150,210,255,0.95)'
        : 'rgba(111,163,255,0.75)'}
      strokeWidth="1.5"
    />
                  <text x={group.x} y={group.y + 50} textAnchor="middle" fill={groupIsActive(group.id, activeId) ? 'rgba(205,225,245,0.95)' : 'rgba(142,194,248,0.85)'} fontSize="9" letterSpacing="1.4">
                    {group.label}
                  </text>
                </g>
              ))}

              {skillGroups.flatMap((group) =>
                group.skills.map((skill) => (
                  <g key={`${group.id}-${skill.id}`} onMouseEnter={() => setActiveId(`${group.id}:${skill.id}`)} onMouseLeave={() => setActiveId(null)}>
                    <circle cx={skill.x} cy={skill.y} r="10" fill="rgba(77,151,235,0.06)" />
                    <circle
                      cx={skill.x}
                      cy={skill.y}
                      r={skill.label === 'Python' ? 4.3 : 3.2}
                      fill={skillIsActive(group.id, skill.id, activeId) ? 'rgba(205,225,245,0.95)' : 'rgba(130,190,250,0.95)'}
                    />
                    <text x={skill.x + 10} y={skill.y + 4} fill={skillIsActive(group.id, skill.id, activeId) ? 'rgba(231,241,255,0.92)' : 'rgba(205,225,245,0.72)'} fontSize="9" letterSpacing="1.2">
                      {skill.label.toUpperCase()}
                    </text>
                  </g>
                )),
              )}

              <motion.g initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                <circle cx="500" cy="360" r="84" fill="none" stroke="rgba(83,148,220,0.1)" />
                <circle cx="500" cy="360" r="68" fill="rgba(4,18,34,0.2)" stroke="rgba(105,174,240,0.58)" strokeWidth="1" />
                <circle cx="500" cy="360" r="50" fill="rgba(8,27,47,0.2)" stroke="rgba(105,174,240,0.18)" />
                <text x="500" y="348" textAnchor="middle" fill="rgba(111,175,240,0.76)" fontSize="8" letterSpacing="3">
                  CORE
                </text>
                <text x="500" y="368" textAnchor="middle" fill="rgba(245,247,250,0.96)" fontSize="17" letterSpacing="1">
                  SWATHIKA
                </text>
                <text x="500" y="386" textAnchor="middle" fill="rgba(150,185,215,0.48)" fontSize="6" letterSpacing="2">
                  ENGINEERING SYSTEM
                </text>
              </motion.g>
            </svg>

            <div className="pointer-events-none absolute left-3 top-3 text-[8px] uppercase tracking-[0.28em] text-[rgba(111,163,255,0.24)] sm:left-4 sm:top-4">
              X: 001
            </div>
            <div className="pointer-events-none absolute right-3 top-3 text-[8px] uppercase tracking-[0.28em] text-[rgba(111,163,255,0.24)] sm:right-4 sm:top-4">
              SYSTEM / MAP
            </div>
            <div className="pointer-events-none absolute bottom-3 left-3 text-[8px] uppercase tracking-[0.28em] text-[rgba(111,163,255,0.24)] sm:left-4 sm:bottom-4">
              CORE / BUILDING / EXPLORING
            </div>
            <div className="pointer-events-none absolute bottom-3 right-3 text-[8px] uppercase tracking-[0.28em] text-[rgba(111,163,255,0.24)] sm:right-4 sm:bottom-4">
              STATUS: EVOLVING
            </div>
          </div>

          <div className="relative mt-3 flex flex-wrap items-center gap-4 border-t border-[rgba(111,163,255,0.12)] pt-4 text-[9px] uppercase tracking-[0.24em] text-[rgba(245,247,250,0.34)] sm:mt-4 sm:gap-6">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[rgba(130,190,250,0.95)]" />
              SKILL
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-[rgba(130,190,250,0.78)]" />
              DOMAIN
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-[rgba(111,163,255,0.3)]" />
              CONNECTION
            </span>
          </div>
        </motion.div>
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

const cardVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

function groupIsActive(groupId, activeId) {
  return activeId === groupId || activeId?.startsWith(`${groupId}:`)
}

function skillIsActive(groupId, skillId, activeId) {
  return activeId === `${groupId}:${skillId}`
}

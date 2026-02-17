import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Crown, Fingerprint, Database, Cpu, GitBranch,
  MessageSquare, Sparkles, Activity
} from 'lucide-react'
import { PROJECT } from '../constants/content'
import { staggerContainer, staggerContainerSlow, fadeInUp, fadeInLeft, scaleIn } from '../animations/motionVariants'
import SectionWrapper from './SectionWrapper'

const iconMap = { Crown, Fingerprint, Database, Cpu, GitBranch, MessageSquare, Sparkles, Activity }

const tagColors = {
  'Core System': { bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.35)', text: '#A78BFA' },
  'Character Engine': { bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.3)', text: '#F472B6' },
  'Memory Layer': { bg: 'rgba(79,70,229,0.15)', border: 'rgba(79,70,229,0.35)', text: '#818CF8' },
  'Execution': { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', text: '#34D399' },
  'Reasoning': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)', text: '#FCD34D' },
  'Expression': { bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.3)', text: '#F472B6' },
  'AI Model': { bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.35)', text: '#A78BFA' },
  'Performance': { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.25)', text: '#67E8F9' },
}

export default function ProjectSummary() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="project">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-6"
              style={{
                background: 'rgba(124, 58, 237, 0.12)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                color: '#A78BFA',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              {PROJECT.eyebrow}
            </div>

            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Sora, sans-serif' }}
            >
              <span className="text-white">{PROJECT.title} </span>
              <span className="gradient-text">{PROJECT.titleAccent}</span>
            </h2>

            <p
              className="text-zinc-400 leading-relaxed text-lg"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {PROJECT.description}
            </p>
          </motion.div>

          {/* Architecture diagram placeholder */}
          <motion.div variants={scaleIn}>
            <div
              className="relative p-8 rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 60%)',
                }}
              />

              <div className="relative flex flex-col items-center gap-6">
                <div
                  className="text-xs font-mono tracking-widest uppercase"
                  style={{ color: '#A78BFA', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  System Architecture
                </div>

                {/* Visual architecture diagram */}
                <div className="w-full max-w-3xl">
                  {/* Director Agent */}
                  <div className="flex justify-center mb-4">
                    <div
                      className="px-6 py-3 rounded-xl text-sm font-semibold text-white text-center min-w-[180px]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(79,70,229,0.4))',
                        border: '1px solid rgba(124,58,237,0.5)',
                        boxShadow: '0 0 20px rgba(124,58,237,0.3)',
                        fontFamily: 'Sora, sans-serif',
                      }}
                    >
                      Director Agent
                    </div>
                  </div>

                  {/* Connection line */}
                  <div className="flex justify-center mb-4">
                    <div className="w-px h-8" style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.6), rgba(236,72,153,0.6))' }} />
                  </div>

                  {/* Middle layer */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['Character Personas', 'Memory Buffers', 'Action Engine'].map((label, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div
                          className="px-4 py-2.5 rounded-xl text-xs font-medium text-center w-full"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            fontFamily: 'DM Sans, sans-serif',
                            color: '#D1D5DB',
                          }}
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Connection lines */}
                  <div className="flex justify-center mb-4">
                    <div className="w-px h-8" style={{ background: 'linear-gradient(180deg, rgba(236,72,153,0.6), rgba(79,70,229,0.6))' }} />
                  </div>

                  {/* Bottom layer */}
                  <div className="grid grid-cols-2 gap-4">
                    {['Gemini Model', '25-Turn Simulation'].map((label, i) => (
                      <div
                        key={i}
                        className="px-4 py-2.5 rounded-xl text-xs font-medium text-center"
                        style={{
                          background: 'rgba(236,72,153,0.08)',
                          border: '1px solid rgba(236,72,153,0.2)',
                          fontFamily: 'DM Sans, sans-serif',
                          color: '#F9A8D4',
                        }}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature cards grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {PROJECT.features.map((feature, i) => {
              const Icon = iconMap[feature.icon]
              const tagStyle = tagColors[feature.tag] || tagColors['Core System']
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass p-5 rounded-2xl flex flex-col gap-3 group"
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    boxShadow: '0 16px 40px rgba(124,58,237,0.2)',
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.2))',
                        border: '1px solid rgba(124,58,237,0.25)',
                      }}
                    >
                      {Icon && <Icon className="w-4 h-4 text-violet-400" />}
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-md font-mono"
                      style={{
                        background: tagStyle.bg,
                        border: `1px solid ${tagStyle.border}`,
                        color: tagStyle.text,
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '9px',
                      }}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-white font-semibold text-sm mb-2"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-zinc-500 text-xs leading-relaxed"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Brain, Trophy, Users } from 'lucide-react'
import { ABOUT } from '../constants/content'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../animations/motionVariants'
import SectionWrapper from './SectionWrapper'

const iconMap = { Zap, Brain, Trophy, Users }

export default function AboutEvent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="about">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-16"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div variants={fadeInLeft} className="flex-1">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-6"
                style={{
                  background: 'rgba(79, 70, 229, 0.12)',
                  border: '1px solid rgba(79, 70, 229, 0.3)',
                  color: '#818CF8',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {ABOUT.eyebrow}
              </div>

              <h2
                className="font-display font-bold leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Sora, sans-serif' }}
              >
                <span className="text-white">{ABOUT.title} </span>
                <span className="gradient-text-alt">{ABOUT.titleAccent}</span>
              </h2>

              <div className="flex flex-col gap-4">
                {ABOUT.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-zinc-400 leading-relaxed"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              variants={fadeInRight}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {ABOUT.cards.map((card, i) => {
                const Icon = iconMap[card.icon]
                return (
                  <motion.div
                    key={i}
                    className="glass p-5 rounded-2xl group"
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.2))',
                        border: '1px solid rgba(124,58,237,0.25)',
                      }}
                    >
                      {Icon && <Icon className="w-5 h-5 text-violet-400" />}
                    </div>
                    <h3
                      className="text-white font-semibold text-sm mb-2"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-zinc-500 text-sm leading-relaxed"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {card.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Timeline divider */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)' }} />
            <div
              className="px-4 py-1.5 rounded-full text-xs font-mono"
              style={{
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.2)',
                color: '#A78BFA',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Hackfest 2026
            </div>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)' }} />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

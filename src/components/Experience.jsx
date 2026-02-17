import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE } from '../constants/content'
import { staggerContainer, fadeInUp, fadeInLeft } from '../animations/motionVariants'
import SectionWrapper from './SectionWrapper'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="experience">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-6"
              style={{
                background: 'rgba(236, 72, 153, 0.1)',
                border: '1px solid rgba(236, 72, 153, 0.25)',
                color: '#F472B6',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              {EXPERIENCE.eyebrow}
            </div>

            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Sora, sans-serif' }}
            >
              <span className="text-white">{EXPERIENCE.title} </span>
              <span className="gradient-text">{EXPERIENCE.titleAccent}</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.5) 10%, rgba(236,72,153,0.5) 90%, transparent)',
                transform: 'translateX(-50%)',
              }}
            />

            <div className="flex flex-col gap-12">
              {EXPERIENCE.chapters.map((chapter, i) => {
                const isEven = i % 2 === 0
                return (
                  <motion.div
                    key={i}
                    variants={fadeInLeft}
                    className={`relative flex items-start gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full z-10"
                      style={{
                        transform: 'translate(-50%, 8px)',
                        background: i % 2 === 0
                          ? 'linear-gradient(135deg, #7C3AED, #4F46E5)'
                          : 'linear-gradient(135deg, #EC4899, #7C3AED)',
                        boxShadow: `0 0 12px ${i % 2 === 0 ? 'rgba(124,58,237,0.6)' : 'rgba(236,72,153,0.6)'}`,
                      }}
                    />

                    {/* Content — left side on even, right side on odd */}
                    <div className={`pl-14 md:pl-0 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-[calc(50%+2rem)]'}`}>
                      <motion.div
                        className="glass p-6 rounded-2xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ duration: 0.2 }}
                        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                      >
                        {/* Time badge */}
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${isEven ? '' : ''}`}
                          style={{
                            background: i % 2 === 0
                              ? 'rgba(124,58,237,0.15)'
                              : 'rgba(236,72,153,0.12)',
                            border: `1px solid ${i % 2 === 0 ? 'rgba(124,58,237,0.3)' : 'rgba(236,72,153,0.25)'}`,
                            color: i % 2 === 0 ? '#A78BFA' : '#F472B6',
                            fontFamily: 'JetBrains Mono, monospace',
                          }}
                        >
                          T+{chapter.time}
                        </div>

                        <h3
                          className="text-white font-semibold mb-3 text-base"
                          style={{ fontFamily: 'Sora, sans-serif' }}
                        >
                          {chapter.title}
                        </h3>

                        <p
                          className="text-zinc-400 text-sm leading-relaxed"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {chapter.content}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

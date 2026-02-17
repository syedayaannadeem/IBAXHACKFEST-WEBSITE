import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, CheckCircle2, Code2 } from 'lucide-react'
import { DEMO } from '../constants/content'
import { staggerContainer, fadeInUp, scaleIn } from '../animations/motionVariants'
import SectionWrapper from './SectionWrapper'

export default function DemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="demo">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
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
              {DEMO.eyebrow}
            </div>

            <h2
              className="font-display font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Sora, sans-serif' }}
            >
              <span className="text-white">{DEMO.title} </span>
              <span className="gradient-text">{DEMO.titleAccent}</span>
            </h2>

            <p
              className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {DEMO.description}
            </p>
          </motion.div>

          {/* Demo card */}
          <motion.div variants={scaleIn}>
            <div
              className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% -20%, rgba(124,58,237,0.15) 0%, transparent 60%)',
                }}
              />

              {/* Animated border top */}
              <div
                className="absolute top-0 left-0 right-0 h-px animated-border"
                style={{ opacity: 0.7 }}
              />

              <div className="relative flex flex-col md:flex-row items-center gap-10">
                {/* GitHub logo animated */}
                <motion.div
                  className="flex-shrink-0"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.2))',
                      border: '1px solid rgba(124,58,237,0.3)',
                      boxShadow: '0 0 30px rgba(124,58,237,0.2)',
                    }}
                  >
                    <Github className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Info */}
                <div className="flex-1 flex flex-col gap-5">
                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {DEMO.features.map((f, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#10B981' }} />
                        <span
                          className="text-zinc-300 text-sm"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {f}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.a
                      href={DEMO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white"
                      style={{
                        background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
                        boxShadow: '0 0 30px rgba(124, 58, 237, 0.35)',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(124, 58, 237, 0.5)' }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Github className="w-4 h-4" />
                      {DEMO.btnLabel}
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.span>
                    </motion.a>

                    <motion.button
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.25)' }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Code2 className="w-4 h-4" />
                      View Architecture
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

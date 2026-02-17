import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, ArrowRight, ChevronDown } from 'lucide-react'
import { HERO } from '../constants/content'
import { staggerContainer, heroTitle, fadeInUp, fadeIn, floatAnimation } from '../animations/motionVariants'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ paddingTop: '6rem', paddingBottom: '4rem' }}
    >
      {/* Hero glow orb */}
      <motion.div
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        className="absolute pointer-events-none"
        style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div
          className="rounded-full blur-[100px]"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(79,70,229,0.1) 50%, transparent 100%)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Event badge */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(124, 58, 237, 0.12)',
                border: '1px solid rgba(124, 58, 237, 0.35)',
                color: '#A78BFA',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.12em',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-violet-400"
                style={{ animation: 'pulse 2s infinite' }}
              />
              {HERO.eyebrow}
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={heroTitle} className="overflow-hidden">
            <h1
              className="font-display font-bold leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              <span className="text-white">{HERO.title} </span>
              <br />
              <span className="gradient-text">{HERO.titleAccent}</span>
            </h1>
          </motion.div>

          {/* Team/event info row */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
            <span
              className="px-3 py-1 rounded-md text-xs font-mono"
              style={{
                background: 'rgba(236, 72, 153, 0.1)',
                border: '1px solid rgba(236, 72, 153, 0.25)',
                color: '#F472B6',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {HERO.teamBadge}
            </span>
            <span className="text-zinc-500 text-xs">×</span>
            <span
              className="px-3 py-1 rounded-md text-xs font-mono"
              style={{
                background: 'rgba(79, 70, 229, 0.1)',
                border: '1px solid rgba(79, 70, 229, 0.3)',
                color: '#818CF8',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {HERO.representing}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {HERO.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
                boxShadow: '0 0 30px rgba(124, 58, 237, 0.35)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124, 58, 237, 0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              {HERO.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href={HERO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-4 h-4" />
              {HERO.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-xl"
          >
            {HERO.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-1 p-4 rounded-xl glass"
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className="gradient-text font-display font-bold text-2xl"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-zinc-500 text-xs uppercase tracking-widest"
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px' }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span
          className="text-zinc-600 text-xs tracking-widest uppercase"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}

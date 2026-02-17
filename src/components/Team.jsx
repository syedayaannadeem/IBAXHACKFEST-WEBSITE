import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { TEAM } from '../constants/content'
import { staggerContainer, fadeInUp, staggerContainerSlow } from '../animations/motionVariants'
import SectionWrapper from './SectionWrapper'

function TeamCard({ member, index }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setTilt({ rotateX, rotateY })
  }

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 })

  return (
    <motion.div
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        className="glass-strong p-8 rounded-3xl flex flex-col items-center text-center gap-5 h-full group"
        whileHover={{
          boxShadow: `0 20px 60px rgba(124,58,237,0.25), 0 0 0 1px rgba(124,58,237,0.2)`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Avatar */}
        <div className="relative">
          {/* Glow ring */}
          <div
            className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, rgba(124,58,237,0.4), rgba(236,72,153,0.3))`,
              transform: 'scale(1.3)',
            }}
          />

          {/* Avatar circle */}
          <div
            className="relative w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl"
            style={{
              background: `linear-gradient(135deg, ${
                index === 0 ? '#7C3AED, #4F46E5' :
                index === 1 ? '#EC4899, #7C3AED' :
                '#4F46E5, #EC4899'
              })`,
              boxShadow: `0 0 20px ${
                index === 0 ? 'rgba(124,58,237,0.4)' :
                index === 1 ? 'rgba(236,72,153,0.4)' :
                'rgba(79,70,229,0.4)'
              }`,
              fontFamily: 'Sora, sans-serif',
            }}
          >
            {member.initials}
          </div>

          {/* Online dot */}
          <div
            className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2"
            style={{
              background: '#10B981',
              borderColor: '#030014',
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
            }}
          />
        </div>

        {/* Info */}
        <div>
          <h3
            className="text-white font-bold text-lg mb-1"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {member.name}
          </h3>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: index === 0
                ? 'rgba(124,58,237,0.15)'
                : index === 1
                ? 'rgba(236,72,153,0.12)'
                : 'rgba(79,70,229,0.15)',
              border: `1px solid ${
                index === 0
                  ? 'rgba(124,58,237,0.3)'
                  : index === 1
                  ? 'rgba(236,72,153,0.25)'
                  : 'rgba(79,70,229,0.3)'
              }`,
              color: index === 0 ? '#A78BFA' : index === 1 ? '#F472B6' : '#818CF8',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {member.role}
          </span>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          }}
        />

        {/* Contribution */}
        <p
          className="text-zinc-400 text-sm leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {member.contribution}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3 mt-auto">
          <motion.a
            href={member.linkedin}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-500 hover:text-blue-400 transition-colors"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={member.github}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="team">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainerSlow}
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
              {TEAM.eyebrow}
            </div>

            <h2
              className="font-display font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Sora, sans-serif' }}
            >
              <span className="gradient-text">{TEAM.title}</span>
            </h2>

            <p
              className="text-zinc-400"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {TEAM.description}
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ perspective: '1500px' }}
          >
            {TEAM.members.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

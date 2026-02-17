import { motion } from 'framer-motion'
import { Github, Linkedin, Heart } from 'lucide-react'
import { FOOTER } from '../constants/content'
import { fadeInUp } from '../animations/motionVariants'

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(236,72,153,0.5), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-6 h-6 rounded-md animated-border flex items-center justify-center">
              <div className="w-4 h-4 rounded bg-bg-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-sm bg-violet-400" />
              </div>
            </div>
            <span
              className="font-display font-bold text-white text-sm"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {FOOTER.brand}
            </span>
          </motion.div>

          {/* Event info */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="px-3 py-1 rounded-full"
              style={{
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.2)',
                color: '#A78BFA',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {FOOTER.event}
            </span>
            <span style={{ color: '#6B7280', fontFamily: 'JetBrains Mono, monospace' }}>
              {FOOTER.representing}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-zinc-500 text-sm flex items-center gap-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {FOOTER.tagline.replace('passion', '')}
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>passion</span>
            {' for AI innovation.'}
          </motion.p>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          />

          {/* Copyright */}
          <motion.p
            className="text-zinc-600 text-xs"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            © {FOOTER.year} {FOOTER.brand}. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NAV } from '../constants/content'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15])

  useEffect(() => {
    const sections = NAV.links.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: bgOpacity,
          background: 'rgba(3, 0, 20, 0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
        }}
      />

      <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="w-7 h-7 rounded-md animated-border flex items-center justify-center">
            <div className="w-5 h-5 rounded bg-bg-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-violet-400" />
            </div>
          </div>
          <span
            className="font-display font-bold text-sm tracking-wide text-white"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {NAV.brand}
          </span>
        </motion.button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.links.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(124, 58, 237, 0.15)', border: '1px solid rgba(124, 58, 237, 0.3)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.button>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.button
            onClick={() => handleNav('#demo')}
            className="px-4 py-2 text-sm font-semibold rounded-lg text-white"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.3))',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              fontFamily: 'DM Sans, sans-serif',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Demo →
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden"
        style={{ background: 'rgba(3, 0, 20, 0.95)', backdropFilter: 'blur(24px)' }}
      >
        <div className="px-6 pb-6 flex flex-col gap-2">
          {NAV.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import BackgroundEffects from './components/BackgroundEffects'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutEvent from './components/AboutEvent'
import ProjectSummary from './components/ProjectSummary'
import Experience from './components/Experience'
import Team from './components/Team'
import DemoSection from './components/DemoSection'
import Footer from './components/Footer'

// Page loader animation
function Loader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: '#030014' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated logo */}
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-2xl animated-border"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <div
            className="absolute inset-0.5 rounded-2xl flex items-center justify-center"
            style={{ background: '#030014' }}
          >
            <div className="w-4 h-4 rounded bg-violet-500" />
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="text-white font-bold text-sm tracking-widest uppercase"
            style={{ fontFamily: 'Sora, sans-serif' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Midnight Sons
          </motion.div>
          <div
            className="text-zinc-600 text-xs"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Initializing narrative engine...
          </div>
        </div>

        {/* Progress bar */}
        <motion.div
          className="w-40 h-0.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #7C3AED, #EC4899)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            onAnimationComplete={onComplete}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
  }, [])

  return (
    <div className="relative min-h-screen" style={{ background: '#030014' }}>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setTimeout(() => setLoading(false), 300)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Global effects */}
          <BackgroundEffects />
          {!isMobile && <CursorGlow />}
          <ScrollProgress />

          {/* App shell */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
            style={{ zIndex: 1 }}
          >
            <Navbar />

            <main>
              <Hero />
              <AboutEvent />
              <ProjectSummary />
              <Experience />
              <Team />
              <DemoSection />
            </main>

            <Footer />
          </motion.div>
        </>
      )}
    </div>
  )
}

import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #7C3AED, #EC4899, #4F46E5)',
        boxShadow: '0 0 8px rgba(124, 58, 237, 0.6)',
      }}
    />
  )
}

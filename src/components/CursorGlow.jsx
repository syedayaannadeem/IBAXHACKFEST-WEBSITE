import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 250 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const trailX = useSpring(mouseX, { damping: 40, stiffness: 150 })
  const trailY = useSpring(mouseY, { damping: 40, stiffness: 150 })

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    const checkPointer = () => {
      const el = document.elementFromPoint(mouseX.get(), mouseY.get())
      if (el) {
        const style = window.getComputedStyle(el)
        setIsPointer(
          style.cursor === 'pointer' ||
          el.tagName === 'A' ||
          el.tagName === 'BUTTON' ||
          el.closest('a') !== null ||
          el.closest('button') !== null
        )
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', checkPointer)
    document.body.addEventListener('mouseleave', onLeave)
    document.body.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', checkPointer)
      document.body.removeEventListener('mouseleave', onLeave)
      document.body.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY])

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Glow trail */}
      <motion.div
        className="cursor-dot"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          style={{
            width: isPointer ? 60 : 40,
            height: isPointer ? 60 : 40,
            borderRadius: '50%',
            background: isPointer
              ? 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
            transition: 'width 0.3s, height 0.3s, background 0.3s',
          }}
        />
      </motion.div>

      {/* Main cursor dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          style={{
            width: isPointer ? 8 : 6,
            height: isPointer ? 8 : 6,
            borderRadius: '50%',
            background: isPointer ? '#EC4899' : '#A78BFA',
            boxShadow: isPointer
              ? '0 0 12px rgba(236, 72, 153, 0.8)'
              : '0 0 10px rgba(167, 139, 250, 0.8)',
            transition: 'width 0.2s, height 0.2s, background 0.2s',
          }}
        />
      </motion.div>
    </>
  )
}

"use client"

import React, { useRef, useCallback } from "react"
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion"

interface GlacialCardProps {
  children: React.ReactNode
  className?: string
  tilt?: boolean
  glow?: boolean
  intensity?: number
}

export function GlacialCard({
  children,
  className = "",
  tilt = true,
  glow = true,
  intensity = 12,
}: GlacialCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const shouldTilt = tilt && !reducedMotion
  const shouldGlow = glow && !reducedMotion

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!shouldTilt || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)

    if (shouldGlow && overlayRef.current) {
      const px = ((e.clientX - rect.left) / rect.width) * 100
      const py = ((e.clientY - rect.top) / rect.height) * 100
      overlayRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.18) 0%, transparent 55%)`
    }
  }, [shouldTilt, shouldGlow, x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
    if (ref.current) ref.current.style.willChange = "auto"
    if (overlayRef.current) overlayRef.current.style.background = "transparent"
  }, [x, y])

  const handleMouseEnter = useCallback(() => {
    if (shouldTilt && ref.current) ref.current.style.willChange = "transform"
  }, [shouldTilt])

  const cardInner = (
    <div
      className={`
        bg-white/40 backdrop-blur-xl saturate-[180%]
        border border-white/30
        shadow-[0_8px_32px_rgba(15,23,42,0.08)]
        rounded-2xl
        text-slate-900
        glacial-noise
        relative overflow-hidden
        supports-[not_(backdrop-filter:blur(1px))]:bg-[#F1F5F9]
        supports-[not_(backdrop-filter:blur(1px))]:border-[#CBD5E1]
        ${className}
      `}
    >
      {shouldGlow && (
        <div
          ref={overlayRef}
          className="absolute inset-0 z-[2] pointer-events-none rounded-2xl transition-[background] duration-300"
        />
      )}
      <div className="relative z-[1] w-full h-full">{children}</div>
    </div>
  )

  if (!shouldTilt) {
    return <div className="w-full h-full relative">{cardInner}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative"
    >
      {cardInner}
    </motion.div>
  )
}

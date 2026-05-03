"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion"
import GlareHover from "@/components/ui/glare-hover" // ReactBits Component

interface GlacialCardProps {
  children: React.ReactNode
  className?: string
  tilt?: boolean
  glow?: boolean
  intensity?: number
}

// GlacialCard — Atomic Design: Atom
export function GlacialCard({
  children,
  className = "",
  tilt = true,
  glow = true,
  intensity = 12,
}: GlacialCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Respetar preferencias de accesibilidad del SO
  const reducedMotion = useReducedMotion()
  const shouldTilt = tilt && !reducedMotion
  const shouldGlow = glow && !reducedMotion

  // Valores de Motion (Capa 1)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Mapeo dinámico: rotación calculada sobre la posición del cursor
  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!shouldTilt || !ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    if (!shouldTilt || !ref.current) return
    x.set(0)
    y.set(0)
    // Se remueve will-change al salir para no afectar performance global
    ref.current.style.willChange = "auto"
  }

  const handleMouseEnter = () => {
    if (!shouldTilt || !ref.current) return
    // Inyectado dinámicamente según restricción
    ref.current.style.willChange = "transform"
  }

  // Clases Glaciales (Capa 2) combinadas con el fallback @supports
  // Contraste WCAG AA: text-slate-900 (#0F172A) garantizado por defecto
  const glacialClasses = `
    bg-white/40 
    backdrop-blur-xl 
    saturate-[180%] 
    border 
    border-white/30 
    shadow-[0_8px_32px_rgba(15,23,42,0.08)] 
    rounded-2xl
    text-slate-900
    glacial-noise
    relative 
    overflow-hidden
    supports-[not_(backdrop-filter:blur(1px))]:bg-[#F1F5F9]
    supports-[not_(backdrop-filter:blur(1px))]:border-[#CBD5E1]
    ${className}
  `.replace(/\s+/g, " ").trim()

  // Construcción del contenido interno
  const cardContent = (
    <div className={glacialClasses}>
      {/* Capa 3 - ReactBits GlareHover solo si aplica */}
      {shouldGlow ? (
        <GlareHover 
          className="w-full h-full rounded-2xl"
          background="transparent"
          borderColor="transparent"
        >
          {children}
        </GlareHover>
      ) : (
        <div className="w-full h-full rounded-2xl">{children}</div>
      )}
    </div>
  )

  // Si tilt está apagado o hay reduced-motion, retornar componente estático
  if (!shouldTilt) {
    return <div className="w-full h-full relative">{cardContent}</div>
  }

  // Wrapper 3D dinámico
  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative"
    >
      {cardContent}
    </motion.div>
  )
}

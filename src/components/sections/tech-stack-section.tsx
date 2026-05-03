"use client"

import React, { useEffect, useRef, useState, forwardRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Triangle, Code2, Box, Wind, Frame, Layers, Cloud, Sparkles } from "lucide-react"

import FadeContent from "@/components/ui/fade-content"

interface TechItem {
  id: string
  name: string
  icon: React.ElementType
}

interface TechStackSectionProps {}

const techStack: TechItem[] = [
  { id: "nextjs", name: "Next.js", icon: Triangle },
  { id: "typescript", name: "TypeScript", icon: Code2 },
  { id: "react", name: "React", icon: Box },
  { id: "tailwind", name: "Tailwind CSS", icon: Wind },
  { id: "framer", name: "Framer Motion", icon: Frame },
  { id: "shadcn", name: "Shadcn UI", icon: Layers },
  { id: "cloudflare", name: "Cloudflare", icon: Cloud },
  { id: "reactbits", name: "ReactBits", icon: Sparkles },
]

// Componente individual separado para manejar animación con forwardRef
const TechItemCard = forwardRef<
  HTMLDivElement,
  { item: TechItem; isActive: boolean; reducedMotion: boolean | null }
>(({ item, isActive, reducedMotion }, ref) => {

  const scaleValue = isActive ? (reducedMotion ? 1 : 1.05) : 1
  const opacityValue = isActive ? 1 : 0.6

  return (
    <motion.div
      ref={ref}
      data-tech-id={item.id}
      animate={{ scale: scaleValue, opacity: opacityValue }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative overflow-hidden
        bg-white/40 backdrop-blur-xl saturate-[180%]
        border border-white/30
        shadow-[0_4px_24px_rgba(15,23,42,0.06)]
        rounded-2xl
        glacial-noise
        transition-all duration-300
        hover:bg-white/55 hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)]
        hover:border-white/50
        ${isActive ? "ring-2 ring-sky-200/50 shadow-[0_8px_32px_rgba(15,23,42,0.10)]" : ""}
      `}
    >
      {/* Contenido con z-index relativo al noise pseudo-element */}
      <div className="relative z-[1] flex flex-col items-center justify-center p-6">
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white/60 rounded-lg text-slate-700">
          <item.icon className="w-6 h-6" />
        </div>
        <span className="font-sans text-sm font-medium text-slate-800 text-center">
          {item.name}
        </span>
      </div>
    </motion.div>
  )
})
TechItemCard.displayName = "TechItemCard"

export function TechStackSection({}: TechStackSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const techId = (entry.target as HTMLElement).dataset.techId
            if (techId) {
              setActiveId(techId)
            }
          }
        })
      },
      {
        threshold: 0.6,
        rootMargin: "-30% 0px -30% 0px",
      }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stack" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Título de Sección */}
        <FadeContent delay={0} className="mb-4 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900">
            Stack Tecnológico
          </h2>
        </FadeContent>

        {/* Subtítulo */}
        <FadeContent delay={100} className="mb-16 text-center">
          <p className="font-sans text-base md:text-lg text-slate-600">
            Las herramientas con las que construimos.
          </p>
        </FadeContent>

        {/* Grid de Tech Items */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techStack.map((item, index) => (
            <TechItemCard
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              item={item}
              isActive={activeId === item.id}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

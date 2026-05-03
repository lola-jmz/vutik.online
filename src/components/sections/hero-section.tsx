"use client"

import React, { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import AuroraLight from "@/components/ui/aurora-light"
import FadeContent from "@/components/ui/fade-content"
import { GlacialCard } from "@/components/ui/glacial-card"

export function HeroSection() {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowFloatingBtn(true)
      } else {
        setShowFloatingBtn(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Adjust delays based on accessibility settings
  const getDelay = (ms: number) => (reducedMotion ? 0 : ms)
  // Aurora speed adjustment
  const auroraSpeed = reducedMotion ? 0.3 : 1.0

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#F1F5F9]">
      {/* CAPA 0a — AuroraLight base */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AuroraLight />
      </div>

      {/* CAPA 0b — Orbes de ALTA saturación: fuente densa de color para refracción */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-indigo-500/25 rounded-full blur-[100px]" />
      </div>

      {/* CAPA 1 — Contenedor principal */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">

        {/* RECTÁNGULO MAESTRO — glass directo en el contenedor */}
        <div className="hero-glass-container glass-noise relative max-w-5xl mx-auto p-12 md:p-20 rounded-[48px] overflow-hidden w-full">

          {/* Contenido real — z-10 sobre el noise ::before */}
          <div className="relative z-10 flex flex-col items-center text-center">

            {/* CAPA 2 — Wordmark "VUTIK" */}
            <FadeContent
              delay={getDelay(0)}
              initialOpacity={reducedMotion ? 1 : 0}
              className="mb-6"
            >
              <span className="font-mono text-sm md:text-base uppercase tracking-widest text-slate-900 font-medium">
                VUTIK
              </span>
            </FadeContent>

            {/* CAPA 3 — Headline principal */}
            <FadeContent
              delay={getDelay(150)}
              initialOpacity={reducedMotion ? 1 : 0}
              className="mb-8"
            >
              <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-tight">
                Desarrollo frontend <br className="hidden md:block" />
                de alto nivel.
              </h1>
            </FadeContent>

            {/* CAPA 4 — Subheadline */}
            <FadeContent
              delay={getDelay(300)}
              initialOpacity={reducedMotion ? 1 : 0}
              className="mb-12 max-w-2xl"
            >
              <p className="font-sans font-normal text-base md:text-xl text-slate-600 leading-relaxed">
                Construimos estructuras digitales sólidas y fluidas, diseñadas para
                evolucionar al ritmo de las marcas más exigentes.
              </p>
            </FadeContent>

            {/* CAPA 5 — CTA Principal */}
            <FadeContent
              delay={getDelay(450)}
              initialOpacity={reducedMotion ? 1 : 0}
            >
              <button
                onClick={() => scrollToSection("portfolio")}
                className="
                  relative overflow-hidden
                  bg-white/10 backdrop-blur-[30px] backdrop-saturate-[250%]
                  border border-white/40 border-t-white/70 border-l-white/70
                  shadow-[0_15px_40px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(255,255,255,0.1)]
                  px-12 py-5 rounded-2xl
                  text-slate-900 font-bold tracking-tight
                  transition-all duration-500 ease-out
                  hover:scale-[1.03] hover:bg-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  outline-none
                "
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none rounded-2xl"
                />
                <span className="relative z-10 font-sans text-lg">
                  Explorar Capacidades
                </span>
              </button>
            </FadeContent>

          </div>
        </div>
      </div>

      {/* CAPA 6 — Botón flotante persistente de contacto */}
      {showFloatingBtn && (
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button onClick={() => scrollToSection("configurador")} className="group outline-none">
            <GlacialCard
              tilt={false}
              glow={true}
              className="px-6 py-3 flex items-center gap-2 rounded-full transition-transform active:scale-95 shadow-lg"
            >
              <span className="font-sans font-medium text-slate-900 text-sm md:text-base">
                Hablemos
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-900" />
            </GlacialCard>
          </button>
        </motion.div>
      )}
    </section>
  )
}

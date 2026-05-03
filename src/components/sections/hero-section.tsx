"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import AuroraLight from "@/components/ui/aurora-light"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

export function HeroSection() {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false)
  const orbsRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      const handleScroll = () => setShowFloatingBtn(window.scrollY > 80)
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowFloatingBtn(window.scrollY > 80)
          if (orbsRef.current) {
            orbsRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`
          }
          if (cardRef.current) {
            cardRef.current.style.transform = `translateY(${window.scrollY * 0.05}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [reducedMotion])

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#EEF4FF]">
      {/* Aurora backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AuroraLight />
      </div>

      {/* Parallax color orbs — visible through glass */}
      <div ref={orbsRef} className="absolute inset-0 z-0 overflow-hidden will-change-transform">
        <div
          className="absolute top-[10%] left-[8%] w-[550px] h-[550px] rounded-full opacity-40 will-change-transform"
          style={{
            background: "radial-gradient(circle, #7DD3FC 0%, #38BDF8 40%, transparent 70%)",
            filter: "blur(80px)",
            animation: "parallax-orb-1 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[30%] right-[5%] w-[450px] h-[450px] rounded-full opacity-35 will-change-transform"
          style={{
            background: "radial-gradient(circle, #BAE6FD 0%, #0EA5E9 40%, transparent 70%)",
            filter: "blur(90px)",
            animation: "parallax-orb-2 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[25%] w-[600px] h-[400px] rounded-full opacity-30 will-change-transform"
          style={{
            background: "radial-gradient(circle, #E0F2FE 0%, #7DD3FC 40%, transparent 70%)",
            filter: "blur(100px)",
            animation: "parallax-orb-3 35s ease-in-out infinite",
          }}
        />
      </div>

      {/* Main content layer */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">
        <div
          ref={cardRef}
          className="hero-glass-container glass-noise relative max-w-5xl mx-auto p-12 md:p-20 rounded-[48px] overflow-hidden w-full will-change-transform"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Wordmark */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="font-mono text-sm md:text-base uppercase tracking-[0.25em] text-slate-700 font-medium">
                VUTIK
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1]">
                Desarrollo frontend
                <br className="hidden md:block" />
                {" "}de alto nivel.
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
              <p className="font-sans font-normal text-base md:text-xl text-slate-600 leading-relaxed">
                Construimos estructuras digitales solidas y fluidas, disenadas para
                evolucionar al ritmo de las marcas mas exigentes.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="
                  relative overflow-hidden
                  bg-white/15 backdrop-blur-xl backdrop-saturate-200
                  border border-white/40 border-t-white/60
                  shadow-[0_16px_48px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.3)]
                  px-12 py-5 rounded-2xl
                  text-slate-900 font-bold tracking-tight
                  transition-all duration-500 ease-out
                  hover:scale-[1.03] hover:bg-white/25 hover:shadow-[0_24px_56px_rgba(0,0,0,0.1)]
                  active:scale-[0.98]
                  outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50
                "
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent pointer-events-none rounded-2xl"
                />
                <span className="relative z-10 font-sans text-lg">
                  Explorar Capacidades
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating contact button */}
      <AnimatePresence>
        {showFloatingBtn && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => scrollToSection("configurador")}
              className="
                group outline-none
                bg-white/20 backdrop-blur-xl backdrop-saturate-180
                border border-white/40
                shadow-[0_8px_32px_rgba(15,23,42,0.1)]
                px-6 py-3 flex items-center gap-2 rounded-full
                transition-all duration-300
                hover:bg-white/30 hover:shadow-[0_12px_40px_rgba(15,23,42,0.15)]
                active:scale-95
                focus-visible:ring-2 focus-visible:ring-sky-400/50
              "
            >
              <span className="font-sans font-medium text-slate-900 text-sm md:text-base">
                Hablemos
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-700 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

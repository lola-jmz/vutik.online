"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import FadeContent from "@/components/ui/fade-content"
import { GlacialCard } from "@/components/ui/glacial-card"

interface PortfolioItem {
    id: string
    name: string
    initial: string
    tag: string
    value: string
    accent: string
    accentLight: string
    accentIsLight: boolean
    span: "wide" | "normal"
}

const portfolioItems: PortfolioItem[] = [
    {
        id: "art-vanguard",
        name: "Art-Vanguard",
        initial: "A",
        tag: "Fine Arts & Global Sales",
        value: "8K asset load optimization and immersive visualization",
        accent: "#1E293B",
        accentLight: "#334155",
        accentIsLight: false,
        span: "wide",
    },
    {
        id: "pawhealth",
        name: "PawHealth",
        initial: "P",
        tag: "PetCare & Booking",
        value: "Simplified interface for appointment and medical record management",
        accent: "#0284C7",
        accentLight: "#38BDF8",
        accentIsLight: false,
        span: "normal",
    },
    {
        id: "marinelogix",
        name: "MarineLogix",
        initial: "M",
        tag: "Logistics & CDMX Global",
        value: "Real-time tracking dashboard with low latency",
        accent: "#0F4C75",
        accentLight: "#1B6CA8",
        accentIsLight: false,
        span: "normal",
    },
    {
        id: "gourmetgo",
        name: "GourmetGo",
        initial: "G",
        tag: "Pick & Go / Artisanal",
        value: "Flash ordering system optimized for mobile devices",
        accent: "#B45309",
        accentLight: "#D97706",
        accentIsLight: false,
        span: "normal",
    },
    {
        id: "civicbuild",
        name: "CivicBuild",
        initial: "C",
        tag: "Infrastructure / Projects",
        value: "Visual construction documentation with progressive rendering",
        accent: "#374151",
        accentLight: "#4B5563",
        accentIsLight: false,
        span: "normal",
    },
    {
        id: "industrialnexus",
        name: "IndustrialNexus",
        initial: "I",
        tag: "Industrial Parks Qro",
        value: "2D/3D spatial navigation of lots and industrial warehouses",
        accent: "#1F2937",
        accentLight: "#374151",
        accentIsLight: false,
        span: "normal",
    },
    {
        id: "purelife",
        name: "PureLife",
        initial: "P",
        tag: "Healthcare / Fertility",
        value: "Secure and aesthetic digital environment for premium patients",
        accent: "#0C4A6E",
        accentLight: "#0EA5E9",
        accentIsLight: false,
        span: "normal",
    },
    {
        id: "normaflow",
        name: "NormaFlow",
        initial: "N",
        tag: "Nearshoring / Legal",
        value: "Information architecture for procedures and regulatory compliance",
        accent: "#1E3A5F",
        accentLight: "#2563EB",
        accentIsLight: false,
        span: "wide",
    },
]

const staggerDelays = [0, 50, 100, 150, 200, 250, 300, 350]

function PortfolioCard({ item, delay }: { item: PortfolioItem; delay: number }) {
    const [hovered, setHovered] = useState(false)
    const reducedMotion = useReducedMotion()

    return (
        <FadeContent delay={delay} className="h-full">
            <GlacialCard
                tilt={true}
                glow={true}
                className="h-full flex flex-col overflow-hidden relative p-0"
            >
                {/* Lettermark background */}
                <span
                    aria-hidden="true"
                    className="absolute bottom-0 right-2 select-none pointer-events-none font-mono leading-none"
                    style={{
                        fontSize: "clamp(6rem, 12vw, 10rem)",
                        color: item.accent,
                        opacity: item.accentIsLight ? 0.2 : 0.08,
                        fontFamily: "var(--font-geist-mono, monospace)",
                        zIndex: 0,
                        userSelect: "none",
                        lineHeight: 0.85,
                        WebkitTextStroke: `1px ${item.accentLight}33`,
                    }}
                >
                    {item.initial}
                </span>

                {/* Gradient header */}
                <div
                    className="relative z-10 w-full h-28 shrink-0"
                    style={{
                        background: `linear-gradient(135deg, ${item.accent} 0%, ${item.accentLight} 100%)`,
                        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.15)`,
                    }}
                >
                    {/* Industry tag pill */}
                    <span
                        className="
              absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider
              bg-white/20 backdrop-blur-sm
              rounded-full px-2.5 py-1 font-medium text-white
              border border-white/20
            "
                    >
                        {item.tag}
                    </span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                        {item.name}
                    </h3>
                    <p className="text-xs font-mono tracking-widest uppercase text-slate-400 mt-1 mb-2">
                        e-Commerce
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mt-auto">
                        {item.value}
                    </p>

                    {/* Hover reveal CTA */}
                    <AnimatePresence>
                        {hovered && !reducedMotion && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 8 }}
                                transition={{ duration: 0.2 }}
                                className="mt-3 flex items-center gap-1.5 text-xs font-medium text-sky-600"
                            >
                                <span>Ver detalles</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Hover detector overlay */}
                <div
                    className="absolute inset-0 z-20"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </GlacialCard>
        </FadeContent>
    )
}

export function PortfolioSection() {
    return (
        <section id="portfolio" className="py-24 px-6 md:px-12 lg:px-24 bg-[#EEF4FF]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Header */}
                <FadeContent delay={0} className="mb-3 text-center">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 font-medium">
                        Portfolio
                    </span>
                </FadeContent>

                <FadeContent delay={50} className="mb-4 text-center w-full">
                    <div className="flex items-center gap-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-300" />
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 whitespace-nowrap">
                            Concept Works
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-300" />
                    </div>
                </FadeContent>

                <FadeContent delay={100} className="mb-16 text-center">
                    <p className="font-sans text-base md:text-lg text-slate-500">
                        8 nichos estrategicos. 8 identidades distintas.
                    </p>
                </FadeContent>

                {/* Bento grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={item.span === "wide" ? "sm:col-span-2" : ""}
                        >
                            <PortfolioCard item={item} delay={staggerDelays[index]} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

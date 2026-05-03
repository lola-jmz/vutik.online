"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

import FadeContent from "@/components/ui/fade-content"

interface TechItem {
  id: string
  name: string
  svg: React.ReactNode
}

const techStackRow1: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" fill="none" className="w-8 h-8">
        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.7944L139.999 164.845C143.34 162.814 146.509 160.532 149.508 157.52Z" fill="url(#paint0)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1)" />
        </g>
        <defs>
          <linearGradient id="paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <rect width="256" height="256" rx="20" fill="#3178C6" />
        <path d="M150.518 200.475V177.098C155.77 181.775 161.684 185.413 168.26 188.012C174.836 190.611 181.672 191.91 188.768 191.91C192.536 191.91 195.844 191.58 198.692 190.92C201.54 190.26 203.908 189.3 205.796 188.04C207.684 186.78 209.092 185.26 210.02 183.48C210.948 181.7 211.412 179.72 211.412 177.54C211.412 174.78 210.548 172.32 208.82 170.16C207.092 168 204.78 166.02 201.884 164.22C198.988 162.42 195.556 160.68 191.588 159C187.62 157.32 183.392 155.58 178.904 153.78C169.784 150.18 162.164 145.74 156.044 140.46C149.924 135.18 146.864 128.1 146.864 119.22C146.864 112.62 148.292 106.98 151.148 102.3C154.004 97.62 157.784 93.84 162.488 90.96C167.192 88.08 172.628 85.98 178.796 84.66C184.964 83.34 191.348 82.68 197.948 82.68C204.748 82.68 210.916 83.1 216.452 83.94C221.988 84.78 227.044 86.16 231.62 88.08V109.68C229.348 108.12 226.828 106.74 224.06 105.54C221.292 104.34 218.396 103.38 215.372 102.66C212.348 101.94 209.276 101.4 206.156 101.04C203.036 100.68 200.012 100.5 197.084 100.5C193.636 100.5 190.476 100.83 187.604 101.49C184.732 102.15 182.276 103.11 180.236 104.37C178.196 105.63 176.588 107.19 175.412 109.05C174.236 110.91 173.648 113.04 173.648 115.44C173.648 117.96 174.416 120.24 175.952 122.28C177.488 124.32 179.588 126.24 182.252 128.04C184.916 129.84 188.108 131.58 191.828 133.26C195.548 134.94 199.628 136.68 204.068 138.48C208.748 140.4 213.164 142.5 217.316 144.78C221.468 147.06 225.116 149.7 228.26 152.7C231.404 155.7 233.876 159.18 235.676 163.14C237.476 167.1 238.376 171.72 238.376 177C238.376 184.2 236.9 190.14 233.948 194.82C230.996 199.5 227.108 203.22 222.284 205.98C217.46 208.74 211.916 210.72 205.652 211.92C199.388 213.12 192.956 213.72 186.356 213.72C179.084 213.72 172.196 213.12 165.692 211.92C159.188 210.72 153.548 208.76 148.772 206.04L150.518 200.475Z" fill="white" />
        <path d="M96 198H72V84H96V198Z" fill="white" />
        <path d="M96 198H72V84H96V198Z" fill="white" />
      </svg>
    ),
  },
  {
    id: "react",
    name: "React",
    svg: (
      <svg viewBox="0 0 256 228" className="w-8 h-8">
        <g>
          <path d="M128 133.1C136.838 133.1 144 125.938 144 117.1C144 108.262 136.838 101.1 128 101.1C119.162 101.1 112 108.262 112 117.1C112 125.938 119.162 133.1 128 133.1Z" fill="#61DAFB" />
          <path d="M210.3 75.1C207.5 64.3 193.3 58.3 174.5 59.1C166.1 59.5 156.8 61.5 147.2 64.9C143.6 63.3 139.9 61.9 136 60.7C139.2 48.3 137.6 37.8 131.2 31.4C124.4 24.6 113.2 24.4 101.6 30.8C95.4 34.2 89.3 39.3 83.6 45.8C77.9 39.3 71.8 34.2 65.6 30.8C54 24.4 42.8 24.6 36 31.4C29.6 37.8 28 48.3 31.2 60.7C27.3 61.9 23.6 63.3 20 64.9C10.4 61.5 1.1 59.5 -7.3 59.1C-26.1 58.3 -39.9 64.3 -42.7 75.1C-45.5 85.9 -37.3 99.1 -21.3 112.1C-16.3 116.1 -10.7 119.9 -4.7 123.5C-10.7 127.1 -16.3 130.9 -21.3 134.9C-37.3 147.9 -45.5 161.1 -42.7 171.9C-39.9 182.7 -26.1 188.7 -7.3 187.9C1.1 187.5 10.4 185.5 20 182.1C23.6 183.7 27.3 185.1 31.2 186.3C28 198.7 29.6 209.2 36 215.6C42.8 222.4 54 222.6 65.6 216.2C71.8 212.8 77.9 207.7 83.6 201.2C89.3 207.7 95.4 212.8 101.6 216.2C113.2 222.6 124.4 222.4 131.2 215.6C137.6 209.2 139.2 198.7 136 186.3C139.9 185.1 143.6 183.7 147.2 182.1C156.8 185.5 166.1 187.5 174.5 187.9C193.3 188.7 207.5 182.7 210.3 171.9C213.1 161.1 204.9 147.9 188.9 134.9C183.9 130.9 178.3 127.1 172.3 123.5C178.3 119.9 183.9 116.1 188.9 112.1C204.9 99.1 213.1 85.9 210.3 75.1Z" stroke="#61DAFB" strokeWidth="4" fill="none" transform="translate(44, -5) scale(0.85)" />
        </g>
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 256 154" className="w-8 h-8">
        <path d="M128 0C93.867 0 72.533 17.067 64 51.2C76.267 34.133 90.667 27.733 107.2 32C116.537 34.356 123.198 41.058 130.533 48.483C142.498 60.57 156.342 74.667 192 74.667C226.133 74.667 247.467 57.6 256 23.467C243.733 40.533 229.333 46.933 212.8 42.667C203.463 40.311 196.802 33.609 189.467 26.184C177.502 14.097 163.658 0 128 0ZM64 74.667C29.867 74.667 8.533 91.733 0 125.867C12.267 108.8 26.667 102.4 43.2 106.667C52.537 109.022 59.198 115.724 66.533 123.149C78.498 135.236 92.342 149.333 128 149.333C162.133 149.333 183.467 132.267 192 98.133C179.733 115.2 165.333 121.6 148.8 117.333C139.463 114.978 132.802 108.276 125.467 100.851C113.502 88.764 99.658 74.667 64 74.667Z" fill="#06B6D4" />
      </svg>
    ),
  },
]

const techStackRow2: TechItem[] = [
  {
    id: "framer",
    name: "Framer Motion",
    svg: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M34.4 114.4L128 20.8L221.6 114.4H162.4L128 80L93.6 114.4H34.4Z" fill="#05EFF7" />
        <path d="M34.4 141.6L128 48L162.4 82.4H221.6L128 176L34.4 141.6Z" fill="#05EFF7" />
        <path d="M128 235.2L34.4 141.6H93.6L128 176L162.4 141.6H221.6L128 235.2Z" fill="#0095FF" />
      </svg>
    ),
  },
  {
    id: "shadcn",
    name: "Shadcn UI",
    svg: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M28 128C28 72.7715 72.7715 28 128 28C183.229 28 228 72.7715 228 128C228 183.229 183.229 228 128 228C72.7715 228 28 183.229 28 128Z" stroke="black" strokeWidth="16" fill="none" />
        <path d="M128 28V228" stroke="black" strokeWidth="16" />
        <path d="M192 56C174 82 148 100 128 100C108 100 82 82 64 56" stroke="black" strokeWidth="16" fill="none" />
        <path d="M192 200C174 174 148 156 128 156C108 156 82 174 64 200" stroke="black" strokeWidth="16" fill="none" />
      </svg>
    ),
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    svg: (
      <svg viewBox="0 0 256 170" className="w-8 h-8">
        <path d="M205.2 115.2C205.6 113.2 205.8 111.1 205.8 109C205.8 91.6 191.7 77.5 174.3 77.5C170.5 77.5 166.9 78.2 163.5 79.4C156.3 67.5 143.2 59.6 128.2 59.6C105.8 59.6 87.6 77.8 87.6 100.2C87.6 101.1 87.6 102 87.7 102.9C72.2 106.3 60.7 120.1 60.7 136.6C60.7 155.5 76 170.8 94.9 170.8H197.3C213.5 170.8 226.6 157.7 226.6 141.5C226.6 128.2 217.5 117 205.2 115.2Z" fill="#F48120" />
      </svg>
    ),
  },
  {
    id: "supabase",
    name: "Supabase",
    svg: (
      <svg viewBox="0 0 256 259" className="w-8 h-8">
        <path d="M149.6 254.4C143.2 262.4 130 258 130 247.6L130 147.2L256 147.2L149.6 254.4Z" fill="#3ECF8E" />
        <path d="M149.6 254.4C143.2 262.4 130 258 130 247.6L130 147.2L256 147.2L149.6 254.4Z" fill="url(#paint0_linear)" fillOpacity="0.2" />
        <path d="M149.6 4.8C143.2 -3.2 130 1.2 130 11.6L130 112L256 112L149.6 4.8Z" fill="#3ECF8E" />
        <defs>
          <linearGradient id="paint0_linear" x1="130" y1="147.2" x2="256" y2="147.2" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
]

function TechCard({ item }: { item: TechItem }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={reducedMotion ? {} : { scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="
        flex-shrink-0
        flex flex-col items-center justify-center
        w-36 h-28
        bg-white/40 backdrop-blur-xl saturate-[180%]
        border border-white/30
        shadow-[0_4px_24px_rgba(15,23,42,0.06)]
        rounded-2xl
        glacial-noise
        transition-colors duration-300
        hover:bg-white/65 hover:border-white/50 hover:shadow-[0_8px_32px_rgba(15,23,42,0.1)]
        cursor-default
      "
    >
      <div className="relative z-[1] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          {item.svg}
        </div>
        <span className="font-sans text-xs font-medium text-slate-700 text-center tracking-wide">
          {item.name}
        </span>
      </div>
    </motion.div>
  )
}

function MarqueeRow({ items, direction, speed }: {
  items: TechItem[]
  direction: "left" | "right"
  speed: number
}) {
  const reducedMotion = useReducedMotion()
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#EEF4FF] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#EEF4FF] to-transparent pointer-events-none" />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: reducedMotion
            ? "none"
            : `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <TechCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}

export function TechStackSection() {
  return (
    <section id="stack" className="py-24 px-6 md:px-12 lg:px-24 bg-[#EEF4FF]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <FadeContent delay={0} className="mb-3 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 font-medium">
            Stack
          </span>
        </FadeContent>

        {/* Title with horizontal rules */}
        <FadeContent delay={50} className="mb-4 text-center w-full">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-300" />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 whitespace-nowrap">
              Stack Tecnologico
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </FadeContent>

        {/* Subtitle */}
        <FadeContent delay={100} className="mb-16 text-center">
          <p className="font-sans text-base md:text-lg text-slate-500">
            Las herramientas con las que construimos.
          </p>
        </FadeContent>

        {/* Marquee rows */}
        <div className="w-full flex flex-col gap-4">
          <MarqueeRow items={techStackRow1} direction="left" speed={35} />
          <MarqueeRow items={techStackRow2} direction="right" speed={40} />
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Stack", href: "#stack" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Configurador", href: "#configurador" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Top glow border */}
      <div className="footer-glow-border" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Column 1 — Brand & Address */}
          <div className="flex flex-col">
            <span className="font-mono text-2xl font-bold text-white tracking-wider mb-4">
              VUTIK
            </span>
            <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Desarrollo frontend de alto nivel. Interfaces que convierten, codigo que escala.
            </p>
            <address className="not-italic font-sans text-sm text-slate-500 leading-loose">
              <span>Ignacio Perez N&#176;49</span>
              <br />
              <span>Col Carrizal, CP. 76030</span>
              <br />
              <span>Queretaro, Mexico</span>
            </address>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6">
              Navegacion
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact CTA */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6">
              Contacto
            </h3>
            <a
              href="mailto:hola@vutik.online"
              className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-6"
            >
              hola@vutik.online
            </a>
            <a
              href="#configurador"
              className="
                group inline-flex items-center gap-2
                bg-white/10 backdrop-blur-sm
                border border-white/15
                px-5 py-2.5 rounded-full
                font-sans text-sm font-medium text-white
                transition-all duration-300
                hover:bg-white/15 hover:border-white/25
                active:scale-95
              "
            >
              Trabajemos juntos
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Vutik
          </span>
          <span className="font-sans text-xs text-slate-600">
            Hecho en Mexico
          </span>
        </div>
      </div>
    </footer>
  )
}

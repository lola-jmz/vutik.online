import React from "react"
import FadeContent from "@/components/ui/fade-content"
import { GlacialCard } from "@/components/ui/glacial-card"

interface PortfolioItem {
  id: string
  name: string
  initial: string
  descriptor: string
  metric: string
  accent: string // color hex
  accentIsLight: boolean
  priority: boolean
}

interface PortfolioSectionProps {}

const portfolioItems: PortfolioItem[] = [
  {
    id: "art-vanguard",
    name: "Art-Vanguard",
    initial: "A",
    descriptor: "Fine Arts · Global Sales",
    metric: "Optimización de carga para activos 8K y visualización inmersiva",
    accent: "#1E293B",
    accentIsLight: false,
    priority: true,
  },
  {
    id: "pawhealth",
    name: "PawHealth",
    initial: "P",
    descriptor: "PetCare · Booking",
    metric: "Interfaz simplificada para gestión de citas y expedientes médicos",
    accent: "#BAE6FD",
    accentIsLight: true,
    priority: true,
  },
  {
    id: "marinelogix",
    name: "MarineLogix",
    initial: "M",
    descriptor: "Logistics · CDMX Global",
    metric: "Dashboard de tracking en tiempo real con baja latencia",
    accent: "#0F4C75",
    accentIsLight: false,
    priority: true,
  },
  {
    id: "gourmetgo",
    name: "GourmetGo",
    initial: "G",
    descriptor: "Pick & Go · Artesanal",
    metric: "Sistema de pedidos flash optimizado para dispositivos móviles",
    accent: "#92400E",
    accentIsLight: false,
    priority: false,
  },
  {
    id: "civicbuild",
    name: "CivicBuild",
    initial: "C",
    descriptor: "Infraestructura · Proyectos",
    metric: "Documentación visual de obra con renderizado progresivo",
    accent: "#374151",
    accentIsLight: false,
    priority: false,
  },
  {
    id: "industrialnexus",
    name: "IndustrialNexus",
    initial: "I",
    descriptor: "Parques Industriales · Qro",
    metric: "Navegación espacial 2D/3D de lotes y naves industriales",
    accent: "#1F2937",
    accentIsLight: false,
    priority: false,
  },
  {
    id: "purelife",
    name: "PureLife",
    initial: "P",
    descriptor: "Healthcare · Fertilidad",
    metric: "Entorno digital seguro y estético para pacientes premium",
    accent: "#E0F2FE",
    accentIsLight: true,
    priority: false,
  },
  {
    id: "normaflow",
    name: "NormaFlow",
    initial: "N",
    descriptor: "Nearshoring · Legal",
    metric: "Arquitectura de información para trámites y cumplimiento normativo",
    accent: "#312E81",
    accentIsLight: false,
    priority: false,
  },
]

// Función auxiliar para determinar contraste de texto sobre el color base
const getContrastTextColor = (hexColor: string) => {
  const color = hexColor.charAt(0) === "#" ? hexColor.substring(1, 7) : hexColor
  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? "text-slate-900" : "text-white"
}

export function PortfolioSection({}: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Encabezado */}
        <FadeContent delay={0} className="mb-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900">
              Concept Works
            </h2>
            <span className="text-xs bg-slate-100 text-slate-500 rounded-full px-2 py-0.5 font-medium">
              Research Projects
            </span>
          </div>
        </FadeContent>

        <FadeContent delay={100} className="mb-16 text-center">
          <p className="font-sans text-base md:text-lg text-slate-600">
            8 nichos estratégicos. 8 identidades distintas.
          </p>
        </FadeContent>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {portfolioItems.map((item, index) => {
            // Fila 1 (items 0-3): 200ms | Fila 2 (items 4-7): 350ms
            const delay = index < 4 ? 200 : 350
            const badgeTextColor = getContrastTextColor(item.accent)

            return (
              <FadeContent key={item.id} delay={delay} className="h-full">
                <GlacialCard
                  tilt={true}
                  glow={true}
                  className="h-full flex flex-col overflow-hidden relative p-0"
                >
                  {/* Lettermark decorativo — fondo de card */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 right-2 select-none pointer-events-none font-mono leading-none"
                    style={{
                      fontSize: 'clamp(7rem, 15vw, 11rem)',
                      color: item.accent,
                      opacity: item.accentIsLight ? 0.28 : 0.13,
                      fontFamily: 'var(--font-geist-mono, monospace)',
                      zIndex: 0,
                      userSelect: 'none',
                      lineHeight: 0.85,
                    }}
                  >
                    {item.initial}
                  </span>

                  {/* Capa A — Bloque visual superior */}
                  <div
                    className="relative z-10 w-full h-32 shrink-0 rounded-t-xl"
                    style={{ backgroundColor: item.accent }}
                  >
                    <span
                      className={`
                        absolute top-3 right-3 text-xs bg-white/20 backdrop-blur-sm 
                        rounded-full px-2 py-0.5 font-medium ${badgeTextColor}
                      `}
                    >
                      Concept Work
                    </span>
                  </div>

                  {/* Capa B — Contenido inferior */}
                  <div className="relative z-10 p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono tracking-widest uppercase opacity-60 mt-1 mb-2">
                      {item.descriptor}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mt-auto">
                      {item.metric}
                    </p>
                  </div>
                </GlacialCard>
              </FadeContent>
            )
          })}
        </div>
      </div>
    </section>
  )
}

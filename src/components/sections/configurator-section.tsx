"use client"

import React, { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

import FadeContent from "@/components/ui/fade-content"
import { GlacialCard } from "@/components/ui/glacial-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// ────────────────────────────────────
// TIPOS Y LÓGICA PURA
// ────────────────────────────────────

type BenefitType = "golden-ticket" | "msi-inhouse" | "error-lucrativo" | "standard"

interface NichoOption {
  id: string
  name: string
  tag: string
}

const NICHO_OPTIONS: NichoOption[] = [
  { id: "art-vanguard", name: "Art-Vanguard", tag: "Fine Arts" },
  { id: "pawhealth", name: "PawHealth", tag: "PetCare" },
  { id: "marinelogix", name: "MarineLogix", tag: "Logistics" },
  { id: "gourmetgo", name: "GourmetGo", tag: "Pick & Go" },
  { id: "civicbuild", name: "CivicBuild", tag: "Infraestructura" },
  { id: "industrialnexus", name: "IndustrialNexus", tag: "Real Estate" },
  { id: "purelife", name: "PureLife", tag: "Healthcare" },
  { id: "normaflow", name: "NormaFlow", tag: "Consultoría" },
  { id: "not-found", name: "Mi industria no está en la lista", tag: "" },
]

function getBenefit(nichoId: string): BenefitType {
  if (nichoId === "pawhealth" || nichoId === "gourmetgo") return "golden-ticket"
  if (nichoId === "marinelogix" || nichoId === "civicbuild") return "msi-inhouse"
  if (nichoId === "not-found") return "error-lucrativo"
  return "standard"
}

const BENEFIT_COPY: Record<BenefitType, { title: string; description: string; emoji: string }> = {
  "golden-ticket": {
    title: "Golden Ticket — 20% de descuento",
    description: "Incentivo de emprendimiento para proyectos en tu nicho. Válido por los próximos 5 minutos.",
    emoji: "🎟",
  },
  "msi-inhouse": {
    title: "MSI In-House — 3 o 6 meses sin tarjeta",
    description: "Financiamiento directo controlado por la agencia para proyectos de alta rentabilidad.",
    emoji: "📆",
  },
  "error-lucrativo": {
    title: "Error Lucrativo — 25% de descuento",
    description: "Aceptamos nuestra omisión. Queremos compensarte por ayudarnos a expandir nuestro radar.",
    emoji: "🔭",
  },
  standard: {
    title: "Contacto Directo",
    description: "Cuéntanos tu proyecto. Lo evaluamos sin compromisos.",
    emoji: "🤝",
  },
}

const TIMER_KEY_START = "vutik_timer_start"
const TIMER_KEY_BENEFIT = "vutik_timer_benefit"
const TIMER_DURATION = 5 * 60 * 1000 // 300,000 ms

// ────────────────────────────────────
// HOOK useConfigurator()
// ────────────────────────────────────

function useConfigurator() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)
  const [selectedNicho, setSelectedNicho] = useState<string | null>(null)
  const [benefit, setBenefit] = useState<BenefitType | null>(null)
  const [remaining, setRemaining] = useState<number>(TIMER_DURATION)
  const [isExpired, setIsExpired] = useState<boolean>(false)
  const [isHydrated, setIsHydrated] = useState(false)

  // Hydration effect (Client only)
  useEffect(() => {
    const startStr = localStorage.getItem(TIMER_KEY_START)
    const benefitStr = localStorage.getItem(TIMER_KEY_BENEFIT) as BenefitType | null

    if (startStr && benefitStr) {
      const elapsed = Date.now() - parseInt(startStr, 10)
      if (elapsed < TIMER_DURATION) {
        setRemaining(TIMER_DURATION - elapsed)
        setBenefit(benefitStr)
        setCurrentStep(3)
      } else {
        setIsExpired(true)
        setCurrentStep(3)
      }
    }
    setIsHydrated(true)
  }, [])

  // Countdown effect
  useEffect(() => {
    if (currentStep !== 3 || isExpired) return

    const interval = setInterval(() => {
      const startStr = localStorage.getItem(TIMER_KEY_START)
      if (!startStr) return

      const elapsed = Date.now() - parseInt(startStr, 10)
      const rem = TIMER_DURATION - elapsed

      if (rem <= 0) {
        setIsExpired(true)
        clearInterval(interval)
      } else {
        setRemaining(rem)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentStep, isExpired])

  const selectNicho = (id: string) => {
    setSelectedNicho(id)
    setBenefit(getBenefit(id))
    setCurrentStep(2)
  }

  const startTimer = () => {
    if (!benefit) return
    localStorage.setItem(TIMER_KEY_START, Date.now().toString())
    localStorage.setItem(TIMER_KEY_BENEFIT, benefit)
    setCurrentStep(3)
  }

  const resetConfigurator = () => {
    localStorage.removeItem(TIMER_KEY_START)
    localStorage.removeItem(TIMER_KEY_BENEFIT)
    setCurrentStep(1)
    setSelectedNicho(null)
    setBenefit(null)
    setRemaining(TIMER_DURATION)
    setIsExpired(false)
  }

  return {
    currentStep,
    selectedNicho,
    benefit,
    remaining,
    isExpired,
    isHydrated,
    selectNicho,
    startTimer,
    resetConfigurator,
  }
}

// ────────────────────────────────────
// SUB-COMPONENTES INTERNOS
// ────────────────────────────────────

function CountdownTimer({
  remaining,
  isExpired,
  onReset,
}: {
  remaining: number
  isExpired: boolean
  onReset: () => void
}) {
  if (isExpired) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-red-50/50 rounded-xl border border-red-100">
        <span className="font-mono text-3xl font-bold text-red-600 mb-2">00:00</span>
        <p className="text-sm text-red-600 font-medium mb-4">El beneficio ha expirado.</p>
        <button
          onClick={onReset}
          className="text-sm px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
        >
          ¿Quieres intentarlo de nuevo?
        </button>
      </div>
    )
  }

  const mins = Math.floor(remaining / 60000)
    .toString()
    .padStart(2, "0")
  const secs = Math.floor((remaining % 60000) / 1000)
    .toString()
    .padStart(2, "0")

  const isUrgent = remaining <= 60000

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-50/50 rounded-xl border border-slate-100">
      <span
        className={`font-mono text-4xl font-bold tracking-tight ${
          isUrgent ? "text-red-600 animate-pulse" : "text-slate-900"
        }`}
      >
        {mins}:{secs}
      </span>
      <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">
        Tiempo restante
      </span>
    </div>
  )
}

function BenefitForm({ isExpired }: { isExpired: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isExpired) return

    setStatus("loading")
    // Mock submit 1.5s delay
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Solicitud recibida</h3>
        <p className="text-sm text-slate-600 max-w-sm">
          Hemos asegurado tu beneficio. Nuestro equipo revisará los detalles y se comunicará contigo a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="fullName" className="text-slate-900">
          Nombre completo
        </Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Ej. María González"
          onBlur={handleBlur}
          className={touched.fullName ? "invalid:border-red-500 invalid:focus-visible:ring-red-500" : ""}
          aria-invalid={touched.fullName ? undefined : false}
        />
        <span className="text-xs text-red-500 hidden peer-invalid:block" role="alert">
          Este campo es requerido.
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-slate-900">
          Correo electrónico
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="maria@empresa.com"
          onBlur={handleBlur}
          className={touched.email ? "invalid:border-red-500 invalid:focus-visible:ring-red-500" : ""}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-slate-900">
          Mensaje (opcional)
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Cuéntanos brevemente sobre tu proyecto..."
          className="resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || isExpired}
        className="mt-2 w-full bg-slate-900 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-800 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Procesando...
          </>
        ) : (
          "Enviar solicitud"
        )}
      </button>

      <p className="text-xs text-slate-400 text-center mt-2">
        Tu información es confidencial y no será compartida.
      </p>
    </form>
  )
}

// ────────────────────────────────────
// ORQUESTADOR PRINCIPAL
// ────────────────────────────────────

export function ConfiguratorSection() {
  const {
    currentStep,
    benefit,
    remaining,
    isExpired,
    isHydrated,
    selectNicho,
    startTimer,
    resetConfigurator,
  } = useConfigurator()

  if (!isHydrated) return null // Evitar mismatch SSR/CSR

  return (
    <section id="configurador" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent flex flex-col items-center">
      {/* TÍTULO Y SUBTÍTULO */}
      <FadeContent delay={0} className="mb-12 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-4">
          Encuentra tu ventaja
        </h2>
        <p className="font-sans text-base md:text-lg text-slate-600 max-w-xl mx-auto">
          Selecciona tu industria y descubre el beneficio que preparamos para ti.
        </p>
      </FadeContent>

      {/* GLACIAL CARD PRINCIPAL */}
      <GlacialCard tilt={false} glow={true} className="max-w-2xl w-full p-8 md:p-10 mx-auto">
        
        {/* ── PASO 1 — Selección de nicho ────────────── */}
        {currentStep === 1 && (
          <FadeContent delay={0}>
            <h3 className="font-sans font-semibold text-lg text-slate-900 mb-6 text-center">
              ¿En qué industria opera tu proyecto?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {NICHO_OPTIONS.map((nicho) => {
                const isNotFound = nicho.id === "not-found"
                return (
                  <button
                    key={nicho.id}
                    onClick={() => selectNicho(nicho.id)}
                    className={`
                      flex flex-col items-center justify-center text-center px-4 py-3 rounded-xl border transition-all
                      ${
                        isNotFound
                          ? "col-span-2 md:col-span-3 border-dashed border-slate-400 text-slate-500 bg-transparent hover:bg-slate-50"
                          : "border-slate-200 bg-white/50 hover:border-slate-400 hover:bg-white/80"
                      }
                    `}
                  >
                    <span className={`font-sans font-medium text-sm ${isNotFound ? "text-slate-600" : "text-slate-900"}`}>
                      {nicho.name}
                    </span>
                    {nicho.tag && (
                      <span className="font-sans text-xs text-slate-500 mt-1">{nicho.tag}</span>
                    )}
                  </button>
                )
              })}
            </div>
          </FadeContent>
        )}

        {/* ── PASO 2 — Beneficio desbloqueado ────────── */}
        {currentStep === 2 && benefit && (
          <FadeContent delay={0}>
            <div className="flex flex-col items-center text-center py-6">
              <span className="text-5xl mb-6">{BENEFIT_COPY[benefit].emoji}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {BENEFIT_COPY[benefit].title}
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mb-8">
                {BENEFIT_COPY[benefit].description}
              </p>

              <div className="w-full border-t border-white/40 mb-6" />

              <p className="text-xs text-slate-400 italic mb-4">
                Este beneficio expira en 5 minutos
              </p>
              
              <button
                onClick={startTimer}
                className="bg-slate-900 text-white font-medium rounded-xl px-8 py-3 hover:bg-slate-700 transition-colors shadow-sm"
              >
                Reclamar ahora →
              </button>
            </div>
          </FadeContent>
        )}

        {/* ── PASO 3 — Formulario de reclamación ─────── */}
        {currentStep === 3 && (
          <FadeContent delay={0}>
            <div className="flex flex-col">
              <CountdownTimer remaining={remaining} isExpired={isExpired} onReset={resetConfigurator} />

              {!isExpired && benefit && (
                <div className="mt-8 flex flex-col items-center">
                  <span className="inline-block text-xs bg-slate-100 text-slate-700 font-medium rounded-full px-3 py-1 mb-4">
                    Beneficio activo: {BENEFIT_COPY[benefit].emoji} {BENEFIT_COPY[benefit].title.split("—")[0].trim()}
                  </span>
                  
                  <div className="w-full text-left">
                    <BenefitForm isExpired={isExpired} />
                  </div>
                </div>
              )}
            </div>
          </FadeContent>
        )}
      </GlacialCard>
    </section>
  )
}

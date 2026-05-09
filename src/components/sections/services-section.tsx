import React from "react"
import { Grid2x2 as Grid, Layers, Zap } from "lucide-react"

import FadeContent from "@/components/ui/fade-content"
import { GlacialCard } from "@/components/ui/glacial-card"

interface Service {
    id: string
    title: string
    description: string
    icon: React.ReactNode
}

interface ServicesSectionProps { }

const services: Service[] = [
    {
        id: "design-systems",
        title: "Sistemas de Diseño",
        description:
            "Arquitecturas de componentes escalables, documentadas y listas para crecer con tu producto.",
        icon: <Grid className="w-8 h-8 text-slate-900" />,
    },
    {
        id: "immersive-ui",
        title: "UI Inmersiva",
        description:
            "Interfaces con motion, profundidad y microinteracciones que convierten la navegación en una experiencia memorable.",
        icon: <Layers className="w-8 h-8 text-slate-900" />,
    },
    {
        id: "performance",
        title: "Performance",
        description:
            "Optimización de Core Web Vitals, tiempos de carga y métricas técnicas que impactan directamente la conversión.",
        icon: <Zap className="w-8 h-8 text-slate-900" />,
    },
]

export function ServicesSection({ }: ServicesSectionProps) {
    return (
        <section id="servicios" className="py-24 px-6 md:px-12 lg:px-24 bg-[#EEF4FF]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Título de Sección */}
                <FadeContent delay={0} className="mb-4 text-center">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900">
                        Capacidades
                    </h2>
                </FadeContent>

                {/* Subtítulo */}
                <FadeContent delay={100} className="mb-16 text-center">
                    <p className="font-sans text-base md:text-lg text-slate-600">
                        Lo que construimos y cómo lo hacemos.
                    </p>
                </FadeContent>

                {/* Grid de Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {services.map((service, index) => {
                        // Animaciones de entrada escalonadas: 200ms, 350ms, 500ms
                        const delay = 200 + index * 150

                        return (
                            <FadeContent key={service.id} delay={delay} className="h-full">
                                <GlacialCard
                                    tilt={true}
                                    glow={true}
                                    className="h-full flex flex-col items-start text-left p-8"
                                >
                                    <div className="mb-6">{service.icon}</div>
                                    <h3 className="font-sans font-semibold text-xl text-slate-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </GlacialCard>
                            </FadeContent>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

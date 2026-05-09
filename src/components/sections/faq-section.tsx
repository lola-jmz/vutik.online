"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

import FadeContent from "@/components/ui/fade-content"

interface FaqItem {
    id: string
    question: string
    answer: string
}

const faqItems: FaqItem[] = [
    {
        id: "faq-1",
        question: "Que servicios ofrece Vutik?",
        answer:
            "Nos especializamos en desarrollo frontend de alto nivel: sistemas de diseno, interfaces inmersivas con motion y microinteracciones, y optimizacion de performance. Trabajamos con Next.js, React, TypeScript y Tailwind CSS para construir productos digitales que convierten y escalan.",
    },
    {
        id: "faq-2",
        question: "Cuanto tarda un proyecto tipico?",
        answer:
            "Un proyecto de landing page o sitio corporativo suele tomar entre 2 y 4 semanas. Aplicaciones web mas complejas con funcionalidades interactivas pueden requerir de 6 a 12 semanas. Siempre definimos un cronograma claro antes de iniciar.",
    },
    {
        id: "faq-3",
        question: "Como manejan los precios?",
        answer:
            "Trabajamos con presupuestos por proyecto, no por hora. Esto te da certeza total sobre la inversion. Cada cotizacion se basa en el alcance, la complejidad de las interacciones y los entregables definidos. Solicita una llamada de descubrimiento sin costo.",
    },
    {
        id: "faq-4",
        question: "Trabajan con startups o solo con empresas grandes?",
        answer:
            "Ambas. Para startups, ofrecemos MVPs rapidos y escalables. Para empresas establecidas, construimos sistemas de diseno y plataformas de alto rendimiento. Lo importante es que tu producto necesite una interfaz que marque la diferencia.",
    },
    {
        id: "faq-5",
        question: "Por que usan este stack tecnologico?",
        answer:
            "Next.js ofrece el mejor rendimiento y SEO. TypeScript garantiza codigo robusto. Tailwind CSS acelera el desarrollo sin sacrificar personalizacion. Framer Motion nos da animaciones fluidas sin peso innecesario. Es el stack que usan las empresas mas exigentes del mundo.",
    },
    {
        id: "faq-6",
        question: "Ofrecen diseno o solo desarrollo?",
        answer:
            "Hacemos ambas cosas. Podemos tomar tu diseno existente y llevarlo a codigo pixel-perfect, o podemos disenar desde cero con un enfoque en conversion y experiencia de usuario. Tambien creamos sistemas de diseno completos para equipos de producto.",
    },
    {
        id: "faq-7",
        question: "Que pasa despues del lanzamiento?",
        answer:
            "Ofrecemos planes de mantenimiento post-lanzamiento que incluyen correcciones, optimizaciones de performance y nuevas funcionalidades. No te dejamos solo despues de entregar. Tu producto necesita evolucionar y nosotros estamos ahi para eso.",
    },
    {
        id: "faq-8",
        question: "Como inicio un proyecto con Vutik?",
        answer:
            "El primer paso es una llamada de descubrimiento de 30 minutos donde entendemos tu producto, tus objetivos y tu timeline. A partir de ahi, te enviamos una propuesta con alcance, entregables y precio. Si todo cuadra, comenzamos en menos de una semana.",
    },
]

function FaqAccordionItem({ item, isOpen, onToggle }: {
    item: FaqItem
    isOpen: boolean
    onToggle: () => void
}) {
    const reducedMotion = useReducedMotion()

    return (
        <div className="border-b border-slate-200 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex items-start gap-4 py-5 text-left group outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 rounded-lg"
                aria-expanded={isOpen}
            >
                <span className="font-mono text-xs text-slate-400 pt-1 select-none tabular-nums w-6 shrink-0">
                    {String(Number(item.id.split("-")[1])).padStart(2, "0")}
                </span>
                <span className="flex-1 font-sans font-semibold text-base md:text-lg text-slate-900 group-hover:text-sky-700 transition-colors duration-200">
                    {item.question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.2 }}
                    className="text-slate-400 shrink-0 pt-1"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={reducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 pl-10 pr-10">
                            <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function FaqSection() {
    const [openId, setOpenId] = useState<string>("faq-1")

    return (
        <section id="faq" className="py-24 px-6 md:px-12 lg:px-24 bg-[#EEF4FF]">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                {/* Eyebrow */}
                <FadeContent delay={0} className="mb-3 text-center">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 font-medium">
                        FAQ
                    </span>
                </FadeContent>

                {/* Title */}
                <FadeContent delay={50} className="mb-4 text-center w-full">
                    <div className="flex items-center gap-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-300" />
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 whitespace-nowrap">
                            Preguntas Frecuentes
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-300" />
                    </div>
                </FadeContent>

                {/* Subtitle */}
                <FadeContent delay={100} className="mb-16 text-center">
                    <p className="font-sans text-base md:text-lg text-slate-500">
                        Todo lo que necesitas saber antes de trabajar con nosotros.
                    </p>
                </FadeContent>

                {/* Accordion */}
                <FadeContent delay={150} className="w-full">
                    <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
                        {faqItems.map((item) => (
                            <FaqAccordionItem
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onToggle={() => setOpenId(openId === item.id ? "" : item.id)}
                            />
                        ))}
                    </div>
                </FadeContent>
            </div>
        </section>
    )
}

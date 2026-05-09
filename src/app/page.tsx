import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ConfiguratorSection } from "@/components/sections/configurator-section"
import { FaqSection } from "@/components/sections/faq-section"

export default function HomePage() {
    return (
        <main className="bg-[#EEF4FF] min-h-screen">
            <HeroSection />
            <ServicesSection />
            <TechStackSection />
            <PortfolioSection />
            <ConfiguratorSection />
            <FaqSection />
        </main>
    )
}

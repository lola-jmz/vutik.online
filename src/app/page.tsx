import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ConfiguratorSection } from "@/components/sections/configurator-section"

export default function HomePage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      {/* Sección 1 */}
      <HeroSection />

      {/* Sección 2 */}
      <ServicesSection />

      {/* Sección 3 */}
      <TechStackSection />

      {/* Sección 4 */}
      <PortfolioSection />

      {/* Sección 5 */}
      <ConfiguratorSection />
    </main>
  )
}

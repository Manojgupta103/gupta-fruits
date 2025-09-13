import { HeroSection } from "@/components/hero-section"
import { FeaturedFruits } from "@/components/featured-fruits"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedFruits />
      <Footer />
    </main>
  )
}

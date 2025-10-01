import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import UseCasesCarousel from '../components/UseCasesCarousel'
import FuturisticCTA from '../components/FuturisticCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-background text-text min-h-screen flex flex-col">
      <Hero />
      <About />
      <Features />
      <UseCasesCarousel />
      <FuturisticCTA />
      <Footer />
    </main>
  )
}

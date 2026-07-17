import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import BrandStatement from './components/BrandStatement'
import BrandsList from './components/BrandsList'
import SoulBehind from './components/SoulBehind'
import Manifesto from './components/Manifesto'
import Testimonials from './components/Testimonials'
import NextChapter from './components/NextChapter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <BrandStatement />
        <BrandsList />
        <SoulBehind />
        <Manifesto />
        <Testimonials />
        <NextChapter />
      </main>
      <Footer />
    </div>
  )
}

export default App

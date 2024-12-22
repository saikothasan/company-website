import { Hero } from './components/sections/Hero'
import { Features } from './components/Features'
import { Testimonials } from './components/sections/Testimonials'
import { Pricing } from './components/sections/Pricing'
import { CTA } from './components/sections/CTA'

function App() {
  return (
    <main className="bg-gray-900">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  )
}

export default App

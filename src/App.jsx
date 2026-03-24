import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Properties from './components/Properties'
import InvestmentSimulator from './components/InvestmentSimulator'
import DeveloperProfile from './components/DeveloperProfile'
import FloorPlans from './components/FloorPlans'
import MarketAnalysis from './components/MarketAnalysis'
import PaymentOptions from './components/PaymentOptions'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Hero animation
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    )
    
    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
    )
    
    gsap.fromTo('.hero-cta', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 }
    )

    // Section animations
    gsap.utils.toArray('.gsap-fade-in').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
    })

    gsap.utils.toArray('.gsap-scale-in').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      })
    })

    // Parallax effect for images
    gsap.utils.toArray('.parallax-image').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -50,
        ease: 'none',
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-arq-stone-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Properties />
        <InvestmentSimulator />
        <DeveloperProfile />
        <FloorPlans />
        <MarketAnalysis />
        <PaymentOptions />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

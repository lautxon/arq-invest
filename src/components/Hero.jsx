import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import VideoPresentation from './VideoPresentation'

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 gradient-navy">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-arq-navy-950/70 via-arq-navy-900/50 to-arq-stone-50"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-arq-gold-400/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="hero-subtitle inline-flex items-center gap-2 bg-arq-gold-500/20 border border-arq-gold-500/30 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-arq-gold-400 rounded-full animate-pulse"></span>
            <span className="text-arq-gold-300 text-sm font-medium tracking-wide">
              Proyectos Premium en Buenos Aires
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
            Inversiones que
            <br />
            <span className="text-gradient-gold">construyen futuro</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-arq-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Desarrollos arquitectónicos exclusivos con alta rentabilidad, 
            seguridad jurídica y certeza de finalización.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#proyectos"
              className="btn-gold flex items-center gap-3 group"
            >
              Explorar Proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="btn-secondary text-white border-white/30 hover:bg-white/10 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-4 h-4 text-white ml-1" />
              </div>
              Ver Presentación
            </button>
          </div>

          {/* Stats */}
          <div className="hero-subtitle grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10">
            {[
              { value: '+15', label: 'Años de Trayectoria' },
              { value: '98%', label: 'Proyectos Completados' },
              { value: '+200K', label: 'm² Construidos' },
              { value: '+500', label: 'Inversores Satisfechos' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-arq-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-arq-stone-400 text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Video Presentation Modal */}
      <VideoPresentation isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}

export default Hero

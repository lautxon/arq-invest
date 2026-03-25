import { useState, useEffect } from 'react'
import { X, Play, Pause, RotateCcw, Building2, MapPin, TrendingUp, Shield, Home, Users, CheckCircle } from 'lucide-react'

const VideoPresentation = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const slides = [
    {
      icon: Building2,
      title: 'ARQ Invest',
      subtitle: 'Inversiones Inmobiliarias Premium',
      description: 'Más de 15 años construyendo confianza y generando rentabilidad',
      bg: 'from-arq-navy-900 to-arq-navy-700',
    },
    {
      icon: MapPin,
      title: 'Ubicaciones Premium',
      subtitle: 'Las zonas de mayor revalorización',
      description: 'Palermo • Recoleta • Puerto Madero • Belgrano',
      bg: 'from-arq-gold-600 to-arq-gold-800',
    },
    {
      icon: TrendingUp,
      title: 'Alta Rentabilidad',
      subtitle: 'Proyecciones claras y transparentes',
      description: '+16% crecimiento promedio anual\n7.2% rental yield en alquiler temporal',
      bg: 'from-arq-sage-600 to-arq-sage-800',
    },
    {
      icon: Shield,
      title: 'Seguridad Jurídica',
      subtitle: 'Transparencia total',
      description: 'Contratos registrados • Permisos municipales\nSeguros de caución • Fideicomisos auditados',
      bg: 'from-arq-navy-800 to-arq-stone-700',
    },
    {
      icon: Home,
      title: 'Diseño de Calidad',
      subtitle: 'Arquitectura contemporánea',
      description: 'Materiales premium • Espacios optimizados\nSustentabilidad • Certificaciones LEED',
      bg: 'from-arq-stone-600 to-arq-navy-800',
    },
    {
      icon: Users,
      title: '+500 Inversores',
      subtitle: 'Confianza que se construye',
      description: '98% proyectos completados\n100% entregas a tiempo\n+200K m² construidos',
      bg: 'from-arq-gold-700 to-arq-navy-900',
    },
    {
      icon: CheckCircle,
      title: 'Comenzá tu Inversión',
      subtitle: 'El momento es ahora',
      description: 'Agendá una reunión con nuestros asesores\ny encontrá la oportunidad perfecta para vos',
      bg: 'from-arq-navy-900 to-arq-gold-700',
      isFinal: true,
    },
  ]

  const totalSlides = slides.length
  const slideDuration = 15000 / totalSlides

  // Auto-advance slides when playing
  useEffect(() => {
    if (!isPlaying || !isOpen) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1
        if (next >= totalSlides) {
          setIsPlaying(false)
          setTimeout(onClose, 500)
          return prev
        }
        return next
      })
    }, slideDuration)

    return () => clearInterval(interval)
  }, [isPlaying, isOpen, totalSlides, slideDuration, onClose])

  // Update progress bar
  useEffect(() => {
    if (!isPlaying || !isOpen) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (15000 / 50))
        if (next >= 100) return 100
        return next
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPlaying, isOpen])

  // Handle open/close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setCurrentSlide(0)
      setProgress(0)
      const timer = setTimeout(() => setIsPlaying(true), 500)
      return () => clearTimeout(timer)
    } else {
      document.body.style.overflow = 'unset'
      setIsPlaying(false)
      setCurrentSlide(0)
      setProgress(0)
    }
  }, [isOpen])

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  const handleReset = () => {
    setCurrentSlide(0)
    setProgress(0)
    setIsPlaying(true)
  }
  const handleClose = () => {
    setIsPlaying(false)
    onClose()
  }

  if (!isOpen) return null

  const currentSlideData = slides[currentSlide]
  const CurrentIcon = currentSlideData.icon

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-5xl mx-4 bg-arq-navy-950 rounded-lg overflow-hidden shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className={`relative h-[500px] bg-gradient-to-br ${currentSlideData.bg} transition-all duration-700`}>
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
            <div className="mb-8">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 animate-bounce">
                <CurrentIcon className="w-12 h-12 text-arq-gold-400" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {currentSlideData.title}
            </h2>

            <p className="text-xl text-arq-gold-400 mb-6 font-medium">
              {currentSlideData.subtitle}
            </p>

            <p className="text-arq-stone-300 text-lg max-w-xl whitespace-pre-line leading-relaxed">
              {currentSlideData.description}
            </p>

            <div className="flex gap-2 mt-12">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? 'w-8 bg-arq-gold-400'
                      : index < currentSlide
                      ? 'w-4 bg-arq-gold-400/50'
                      : 'w-4 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-arq-navy-950 px-6 py-4">
          <div className="w-full h-2 bg-arq-stone-700 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-arq-gold-500 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={isPlaying ? handlePause : handlePlay}
                className="w-12 h-12 rounded-full bg-arq-gold-500 flex items-center justify-center hover:bg-arq-gold-600 transition-colors"
                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-1" />
                )}
              </button>

              <button
                onClick={handleReset}
                className="w-10 h-10 rounded-full bg-arq-stone-700 flex items-center justify-center hover:bg-arq-stone-600 transition-colors"
                aria-label="Reiniciar"
              >
                <RotateCcw className="w-4 h-4 text-white" />
              </button>

              <div className="text-arq-stone-400 text-sm font-mono">
                {Math.floor((progress / 100) * 15)}s / 15s
              </div>
            </div>

            <div className="text-arq-stone-400 text-sm">
              Slide {currentSlide + 1} de {totalSlides}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPresentation

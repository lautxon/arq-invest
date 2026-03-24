import { Building, TrendingUp, Shield, Award, Clock, Leaf } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Building,
      title: 'Ubicaciones Premium',
      description: 'Proyectos en las zonas de mayor revalorización de Buenos Aires. Conectividad, servicios y entorno urbano privilegiado.',
      color: 'arq-gold',
    },
    {
      icon: TrendingUp,
      title: 'Alta Rentabilidad',
      description: 'Análisis de mercado exhaustivos. Proyecciones claras con potencial de revalorización del 15-25% anual.',
      color: 'arq-sage',
    },
    {
      icon: Shield,
      title: 'Seguridad Jurídica',
      description: 'Toda la documentación en regla. Contratos transparentes, permisos municipales y seguros de caución.',
      color: 'arq-navy',
    },
    {
      icon: Award,
      title: 'Diseño de Calidad',
      description: 'Arquitectura contemporánea con materiales premium. Espacios pensados para maximizar habitabilidad y valor.',
      color: 'arq-gold',
    },
    {
      icon: Clock,
      title: 'Certeza de Finalización',
      description: 'Cronogramas claros y cumplidos. Inversión en pozo con hitos definidos y transparencia total.',
      color: 'arq-sage',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidad',
      description: 'Eficiencia energética, paneles solares, gestión inteligente del agua. Certificaciones LEED en proyectos seleccionados.',
      color: 'arq-navy',
    },
  ]

  return (
    <section className="section-padding bg-arq-stone-50" id="features">
      <div className="container-custom">
        {/* Header */}
        <div className="gsap-fade-in text-center max-w-4xl mx-auto mb-20">
          <span className="text-arq-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-arq-navy-900 mb-6">
            Lo que buscan los inversores
          </h2>
          <p className="text-arq-stone-600 text-lg leading-relaxed">
            Entendemos las claves de una inversión inmobiliaria exitosa. 
            Cada proyecto está diseñado para maximizar rentabilidad y minimizar riesgos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gsap-fade-in group bg-white p-8 border border-arq-stone-200 card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-sm bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}-700`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-arq-navy-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-arq-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

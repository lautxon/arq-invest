import { CheckCircle, Award, Building2, Users } from 'lucide-react'

const DeveloperProfile = () => {
  const stats = [
    { icon: Building2, value: '+15', label: 'Años en el Mercado' },
    { icon: Award, value: '98%', label: 'Proyectos Completados' },
    { icon: Users, value: '+500', label: 'Inversores Satisfechos' },
    { icon: CheckCircle, value: '100%', label: 'Entregas a Tiempo' },
  ]

  const certifications = [
    'Cámara Argentina de la Construcción',
    'Certificación ISO 9001',
    'Miembro de CEDU',
    'Licencia Municipal de Desarrollador',
  ]

  return (
    <section className="section-padding bg-arq-stone-50" id="desarrollador">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="gsap-scale-in relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Oficinas ARQ Invest"
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
              />
              {/* Overlay Card */}
              <div className="absolute -bottom-8 -right-8 bg-arq-navy-900 text-white p-8 rounded-sm shadow-xl max-w-xs">
                <div className="text-arq-gold-400 text-5xl font-display font-bold mb-2">
                  15+
                </div>
                <div className="text-arq-stone-300">
                  Años construyendo confianza y desarrollando proyectos excepcionales
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-arq-gold-500/20 rounded-sm"></div>
          </div>

          {/* Content */}
          <div className="gsap-fade-in">
            <span className="text-arq-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-arq-navy-900 mb-6">
              Trayectoria que genera confianza
            </h2>
            <p className="text-arq-stone-600 text-lg leading-relaxed mb-6">
              Somos una desarrolladora inmobiliaria con más de 15 años de experiencia 
              en el mercado argentino. Nuestra filosofía se basa en la transparencia, 
              la calidad constructiva y el compromiso con cada inversor.
            </p>
            <p className="text-arq-stone-600 text-lg leading-relaxed mb-8">
              Cada proyecto es el resultado de un exhaustivo análisis de mercado, 
              diseño arquitectónico de vanguardia y una gestión eficiente que garantiza 
              la finalización en los plazos establecidos.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-arq-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-arq-gold-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-arq-navy-900">
                      {stat.value}
                    </div>
                    <div className="text-arq-stone-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-white border border-arq-stone-200 p-6 rounded-sm">
              <h4 className="font-display font-semibold text-arq-navy-900 mb-4">
                Certificaciones y Membresías
              </h4>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-arq-sage-600 flex-shrink-0" />
                    <span className="text-arq-stone-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contacto"
                className="btn-primary inline-block"
              >
                Conocer Más Sobre Nosotros
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeveloperProfile

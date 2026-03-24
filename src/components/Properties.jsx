import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react'

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: 'Torre Bellini',
      location: 'Palermo, CABA',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
      units: '28 Unidades',
      m2: '75 - 180 m²',
      status: 'En Construcción',
      progress: 45,
      price: 'Desde USD 180.000',
      features: ['2-3 Ambientes', 'Amenities Premium', 'Entrega 2026'],
    },
    {
      id: 2,
      name: 'Residencia Alvear',
      location: 'Recoleta, CABA',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1000&auto=format&fit=crop',
      units: '42 Unidades',
      m2: '95 - 250 m²',
      status: 'Oportunidad de Inversión',
      progress: 15,
      price: 'Desde USD 290.000',
      features: ['3-4 Ambientes', 'Penthouse', 'Entrega 2027'],
    },
    {
      id: 3,
      name: 'Puerto Norte',
      location: 'Puerto Madero, CABA',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop',
      units: '56 Unidades',
      m2: '65 - 150 m²',
      status: 'Pre-Lanzamiento',
      progress: 5,
      price: 'Desde USD 220.000',
      features: ['1-3 Ambientes', 'Vista al Río', 'Entrega 2027'],
    },
  ]

  const statusColors = {
    'En Construcción': 'bg-arq-sage-500',
    'Oportunidad de Inversión': 'bg-arq-gold-500',
    'Pre-Lanzamiento': 'bg-arq-navy-500',
  }

  return (
    <section className="section-padding bg-white" id="proyectos">
      <div className="container-custom">
        {/* Header */}
        <div className="gsap-fade-in flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-arq-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">
              Portafolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-arq-navy-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-arq-stone-600 text-lg">
              Desarrollos exclusivos en las ubicaciones más cotizadas. 
              Oportunidades únicas para inversores exigentes.
            </p>
          </div>
          <a
            href="#contacto"
            className="btn-primary flex items-center gap-2 whitespace-nowrap"
          >
            Ver Todos los Proyectos
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="gsap-fade-in group bg-arq-stone-50 card-hover overflow-hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arq-navy-900/80 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${statusColors[property.status]} text-white text-xs font-medium px-4 py-2 rounded-full`}>
                    {property.status}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-2xl font-display font-semibold">
                    {property.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-arq-navy-900 mb-2">
                  {property.name}
                </h3>
                
                <div className="flex items-center gap-2 text-arq-stone-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-arq-stone-600">Avance de obra</span>
                    <span className="text-arq-navy-900 font-medium">{property.progress}%</span>
                  </div>
                  <div className="h-2 bg-arq-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-arq-gold-500 transition-all duration-1000"
                      style={{ width: `${property.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-6 pb-6 border-b border-arq-stone-200 mb-6">
                  <div className="flex items-center gap-2 text-arq-stone-600">
                    <Square className="w-4 h-4" />
                    <span className="text-sm">{property.m2}</span>
                  </div>
                  <div className="flex items-center gap-2 text-arq-stone-600">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{property.units}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-arq-stone-100 text-arq-stone-700 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="btn-primary w-full text-center block"
                >
                  Solicitar Información
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Properties

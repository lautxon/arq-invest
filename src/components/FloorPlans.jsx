import { useState } from 'react'
import { Home, Maximize, Sun, Wind } from 'lucide-react'

const FloorPlans = () => {
  const [activeUnit, setActiveUnit] = useState('2amb')

  const units = [
    {
      id: '1amb',
      name: '1 Ambiente',
      m2: '45-55 m²',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Estar integrado',
        'Baño completo',
        'Balcón',
        'Orientación Norte',
      ],
    },
    {
      id: '2amb',
      name: '2 Ambientes',
      m2: '70-85 m²',
      image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Estar comedor',
        'Dormitorio en suite',
        'Cocina integrada',
        'Balcón panorámico',
      ],
    },
    {
      id: '3amb',
      name: '3 Ambientes',
      m2: '95-120 m²',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Estar comedor amplio',
        '2 Dormitorios en suite',
        'Cocina con lavadero',
        '2 Balcones',
      ],
    },
    {
      id: 'ph',
      name: 'Penthouse',
      m2: '180-250 m²',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Doble altura',
        '3 Dormitorios',
        'Terraza privativa',
        'Vista 360°',
      ],
    },
  ]

  const activeData = units.find(u => u.id === activeUnit)

  return (
    <section className="section-padding bg-white" id="planos">
      <div className="container-custom">
        {/* Header */}
        <div className="gsap-fade-in text-center max-w-4xl mx-auto mb-16">
          <span className="text-arq-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">
            Unidades
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-arq-navy-900 mb-6">
            Planos Interactivos
          </h2>
          <p className="text-arq-stone-600 text-lg">
            Explorá la distribución de cada unidad. Diseños optimizados para 
            maximizar espacio, luz natural y ventilación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Unit Selector */}
          <div className="gsap-fade-in">
            {/* Tabs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {units.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => setActiveUnit(unit.id)}
                  className={`p-6 border-2 transition-all text-left ${
                    activeUnit === unit.id
                      ? 'border-arq-gold-500 bg-arq-gold-50'
                      : 'border-arq-stone-200 hover:border-arq-stone-300'
                  }`}
                >
                  <Home className={`w-6 h-6 mb-3 ${
                    activeUnit === unit.id ? 'text-arq-gold-600' : 'text-arq-stone-400'
                  }`} />
                  <div className="font-display font-semibold text-arq-navy-900">
                    {unit.name}
                  </div>
                  <div className="text-arq-stone-600 text-sm">{unit.m2}</div>
                </button>
              ))}
            </div>

            {/* Features */}
            <div className="bg-arq-stone-50 border border-arq-stone-200 p-6 rounded-sm">
              <h4 className="font-display font-semibold text-arq-navy-900 mb-4">
                Características de {activeData?.name}
              </h4>
              <ul className="space-y-3">
                {activeData?.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-arq-gold-500 rounded-full"></div>
                    <span className="text-arq-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Additional Info */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-arq-stone-200">
                <div className="text-center">
                  <Maximize className="w-5 h-5 text-arq-gold-600 mx-auto mb-2" />
                  <div className="text-xs text-arq-stone-600">Espacios</div>
                  <div className="text-sm font-semibold text-arq-navy-900">Optimizados</div>
                </div>
                <div className="text-center">
                  <Sun className="w-5 h-5 text-arq-gold-600 mx-auto mb-2" />
                  <div className="text-xs text-arq-stone-600">Luz Natural</div>
                  <div className="text-sm font-semibold text-arq-navy-900">Todo el día</div>
                </div>
                <div className="text-center">
                  <Wind className="w-5 h-5 text-arq-gold-600 mx-auto mb-2" />
                  <div className="text-xs text-arq-stone-600">Ventilación</div>
                  <div className="text-sm font-semibold text-arq-navy-900">Cruzada</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="btn-primary w-full text-center block mt-6"
            >
              Solicitar Plano Detallado
            </a>
          </div>

          {/* Floor Plan Image */}
          <div className="gsap-scale-in">
            <div className="relative bg-arq-stone-50 border border-arq-stone-200 p-8 rounded-sm">
              {/* Placeholder for actual floor plan */}
              <div className="aspect-square bg-white border-2 border-dashed border-arq-stone-300 rounded-sm flex items-center justify-center overflow-hidden">
                <img
                  src={activeData?.image}
                  alt={`Plano ${activeData?.name}`}
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Overlay with unit info */}
                <div className="absolute inset-0 bg-gradient-to-t from-arq-navy-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-arq-gold-400 text-sm mb-1">{activeData?.m2}</div>
                  <div className="text-2xl font-display font-semibold">{activeData?.name}</div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {units.map((unit) => (
                  <button
                    key={unit.id}
                    onClick={() => setActiveUnit(unit.id)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeUnit === unit.id
                        ? 'bg-arq-gold-500 w-8'
                        : 'bg-arq-stone-300 hover:bg-arq-stone-400'
                    }`}
                    aria-label={`Ver ${unit.name}`}
                  />
                ))}
              </div>

              <p className="text-center text-arq-stone-600 text-sm mt-4">
                * Planos ilustrativos. Las medidas pueden variar ligeramente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloorPlans

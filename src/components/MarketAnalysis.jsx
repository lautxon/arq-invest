import { TrendingUp, DollarSign, Percent, MapPin } from 'lucide-react'

const MarketAnalysis = () => {
  const marketData = [
    { year: '2020', growth: 8, price: 1800 },
    { year: '2021', growth: 12, price: 2100 },
    { year: '2022', growth: 15, price: 2450 },
    { year: '2023', growth: 18, price: 2900 },
    { year: '2024', growth: 14, price: 3350 },
    { year: '2025', growth: 16, price: 3900 },
  ]

  const maxGrowth = Math.max(...marketData.map(d => d.growth))

  const neighborhoods = [
    {
      name: 'Palermo',
      avgPrice: 'USD 3,200/m²',
      growth: '+18% anual',
      demand: 'Muy Alta',
    },
    {
      name: 'Recoleta',
      avgPrice: 'USD 4,100/m²',
      growth: '+15% anual',
      demand: 'Alta',
    },
    {
      name: 'Puerto Madero',
      avgPrice: 'USD 4,800/m²',
      growth: '+22% anual',
      demand: 'Muy Alta',
    },
    {
      name: 'Belgrano',
      avgPrice: 'USD 3,500/m²',
      growth: '+14% anual',
      demand: 'Alta',
    },
  ]

  return (
    <section className="section-padding bg-arq-stone-50" id="mercado">
      <div className="container-custom">
        {/* Header */}
        <div className="gsap-fade-in text-center max-w-4xl mx-auto mb-16">
          <span className="text-arq-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">
            Análisis
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-arq-navy-900 mb-6">
            Mercado y Proyecciones
          </h2>
          <p className="text-arq-stone-600 text-lg">
            Datos reales del mercado inmobiliario de Buenos Aires. 
            Análisis exhaustivo para decisiones informadas.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="gsap-fade-in grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-arq-stone-200 p-8 rounded-sm text-center card-hover">
            <div className="w-14 h-14 rounded-sm bg-arq-gold-100 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-7 h-7 text-arq-gold-600" />
            </div>
            <div className="text-4xl font-display font-bold text-arq-navy-900 mb-2">
              +16%
            </div>
            <div className="text-arq-stone-600">
              Crecimiento promedio anual (últimos 5 años)
            </div>
          </div>

          <div className="bg-white border border-arq-stone-200 p-8 rounded-sm text-center card-hover">
            <div className="w-14 h-14 rounded-sm bg-arq-sage-100 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-7 h-7 text-arq-sage-600" />
            </div>
            <div className="text-4xl font-display font-bold text-arq-navy-900 mb-2">
              USD 3,500
            </div>
            <div className="text-arq-stone-600">
              Precio promedio por m² en zonas premium
            </div>
          </div>

          <div className="bg-white border border-arq-stone-200 p-8 rounded-sm text-center card-hover">
            <div className="w-14 h-14 rounded-sm bg-arq-navy-100 flex items-center justify-center mx-auto mb-4">
              <Percent className="w-7 h-7 text-arq-navy-600" />
            </div>
            <div className="text-4xl font-display font-bold text-arq-navy-900 mb-2">
              7.2%
            </div>
            <div className="text-arq-stone-600">
              Rental yield promedio en alquiler temporal
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Growth Chart */}
          <div className="gsap-fade-in bg-white border border-arq-stone-200 p-8 rounded-sm">
            <h3 className="text-2xl font-display font-semibold text-arq-navy-900 mb-6">
              Revalorización Histórica
            </h3>
            
            {/* Bar Chart */}
            <div className="space-y-4">
              {marketData.map((data, index) => (
                <div key={data.year} className="flex items-center gap-4">
                  <div className="w-12 text-arq-stone-600 font-medium">{data.year}</div>
                  <div className="flex-1">
                    <div className="relative h-10 bg-arq-stone-100 rounded-sm overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-arq-gold-500 to-arq-gold-600 rounded-sm transition-all duration-1000"
                        style={{ 
                          width: `${(data.growth / maxGrowth) * 100}%`,
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-semibold text-sm">
                          +{data.growth}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-24 text-right text-arq-stone-600 text-sm">
                    USD {data.price}/m²
                  </div>
                </div>
              ))}
            </div>

            <p className="text-arq-stone-500 text-xs mt-6">
              Fuente: Cámara Inmobiliaria Argentina. Datos actualizados Q4 2024.
            </p>
          </div>

          {/* Neighborhood Analysis */}
          <div className="gsap-fade-in bg-white border border-arq-stone-200 p-8 rounded-sm">
            <h3 className="text-2xl font-display font-semibold text-arq-navy-900 mb-6">
              Análisis por Barrio
            </h3>

            <div className="space-y-4">
              {neighborhoods.map((neighborhood, index) => (
                <div
                  key={neighborhood.name}
                  className="flex items-center justify-between p-4 bg-arq-stone-50 rounded-sm hover:bg-arq-stone-100 transition-colors"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-arq-navy-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-arq-navy-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-arq-navy-900">
                        {neighborhood.name}
                      </div>
                      <div className="text-arq-stone-600 text-sm">
                        {neighborhood.avgPrice}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-arq-gold-600 font-semibold">
                      {neighborhood.growth}
                    </div>
                    <div className="text-arq-stone-500 text-xs">
                      Demanda: {neighborhood.demand}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Tips */}
            <div className="mt-6 p-4 bg-arq-gold-50 border border-arq-gold-200 rounded-sm">
              <h4 className="font-semibold text-arq-gold-800 mb-2">
                💡 Consejo de Inversión
              </h4>
              <p className="text-arq-gold-700 text-sm">
                Puerto Madero muestra la mayor revalorización potencial debido a 
                proyectos de infraestructura planificados y oferta limitada de unidades.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="gsap-fade-in text-center mt-16">
          <a
            href="#contacto"
            className="btn-primary inline-flex items-center gap-3"
          >
            Solicitar Estudio Completo
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MarketAnalysis

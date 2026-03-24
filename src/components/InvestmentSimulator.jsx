import { useState } from 'react'
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react'

const InvestmentSimulator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100000)
  const [paymentType, setPaymentType] = useState('pozo')
  const [projectType, setProjectType] = useState('departamento')

  const paymentOptions = [
    { id: 'pozo', label: 'En Pozo', discount: 0.15, label2: '15% descuento' },
    { id: 'obra', label: 'Obra Avanzada', discount: 0.08, label2: '8% descuento' },
    { id: 'entrega', label: 'Al Entrega', discount: 0, label2: 'Precio full' },
  ]

  const projectOptions = [
    { id: 'departamento', label: 'Departamento', avgReturn: 0.18 },
    { id: 'oficina', label: 'Oficina', avgReturn: 0.15 },
    { id: 'local', label: 'Local Comercial', avgReturn: 0.22 },
  ]

  const calculateReturns = () => {
    const selectedPayment = paymentOptions.find(p => p.id === paymentType)
    const selectedProject = projectOptions.find(p => p.id === projectType)
    
    const discountedAmount = investmentAmount * (1 - selectedPayment.discount)
    const year1Return = discountedAmount * (1 + selectedProject.avgReturn)
    const year3Return = discountedAmount * Math.pow(1 + selectedProject.avgReturn, 3)
    const year5Return = discountedAmount * Math.pow(1 + selectedProject.avgReturn, 5)
    
    return {
      initial: discountedAmount,
      year1: year1Return,
      year3: year3Return,
      year5: year5Return,
      totalReturn: ((year5Return - investmentAmount) / investmentAmount) * 100,
    }
  }

  const returns = calculateReturns()

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="section-padding bg-arq-navy-950 text-white" id="simulador">
      <div className="container-custom">
        {/* Header */}
        <div className="gsap-fade-in text-center max-w-4xl mx-auto mb-16">
          <span className="text-arq-gold-400 font-medium tracking-widest text-sm uppercase mb-4 block">
            Herramientas
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Simulador de Inversión
          </h2>
          <p className="text-arq-stone-300 text-lg">
            Proyectá tu rentabilidad con diferentes escenarios de inversión. 
            Datos basados en análisis de mercado reales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="gsap-fade-in bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-6 h-6 text-arq-gold-400" />
              <h3 className="text-2xl font-display font-semibold">Configurar Inversión</h3>
            </div>

            {/* Investment Amount */}
            <div className="mb-8">
              <label className="block text-arq-stone-300 text-sm font-medium mb-3">
                Monto a Invertir (USD)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-arq-gold-400" />
                <input
                  type="range"
                  min="50000"
                  max="500000"
                  step="10000"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="w-full h-2 bg-arq-stone-700 rounded-lg appearance-none cursor-pointer accent-arq-gold-500"
                />
                <div className="flex justify-between mt-2 text-xs text-arq-stone-400">
                  <span>USD 50K</span>
                  <span>USD 500K</span>
                </div>
                <div className="text-center mt-4">
                  <span className="text-3xl font-display font-bold text-arq-gold-400">
                    {formatCurrency(investmentAmount)}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Type */}
            <div className="mb-8">
              <label className="block text-arq-stone-300 text-sm font-medium mb-3">
                Momento de Inversión
              </label>
              <div className="space-y-3">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setPaymentType(option.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all ${
                      paymentType === option.id
                        ? 'bg-arq-gold-500/20 border-arq-gold-500'
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-arq-stone-400" />
                      <span className="font-medium">{option.label}</span>
                    </div>
                    <span className={`text-sm ${option.discount > 0 ? 'text-arq-gold-400' : 'text-arq-stone-500'}`}>
                      {option.label2}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-arq-stone-300 text-sm font-medium mb-3">
                Tipo de Propiedad
              </label>
              <div className="grid grid-cols-3 gap-3">
                {projectOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setProjectType(option.id)}
                    className={`p-4 rounded-lg border transition-all text-center ${
                      projectType === option.id
                        ? 'bg-arq-gold-500/20 border-arq-gold-500'
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-arq-stone-300 text-sm mb-1">{option.label}</div>
                    <div className="flex items-center justify-center gap-1 text-arq-gold-400">
                      <Percent className="w-3 h-3" />
                      <span className="text-sm font-bold">{option.avgReturn * 100}%</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="gsap-fade-in bg-gradient-to-br from-arq-gold-500 to-arq-gold-700 rounded-lg p-8 lg:sticky lg:top-24">
            <h3 className="text-2xl font-display font-semibold mb-8 text-white">
              Proyección de Retornos
            </h3>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-arq-gold-200 text-sm mb-2">Inversión Inicial</div>
                <div className="text-3xl font-display font-bold text-white">
                  {formatCurrency(returns.initial)}
                </div>
                {investmentAmount !== returns.initial && (
                  <div className="text-arq-gold-200 text-xs mt-1">
                    Ahorrás {formatCurrency(investmentAmount - returns.initial)} con descuento
                  </div>
                )}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-arq-gold-200 text-sm mb-2">Retorno Total (5 años)</div>
                <div className="text-3xl font-display font-bold text-white">
                  {returns.totalReturn.toFixed(0)}%
                </div>
                <div className="text-arq-gold-200 text-xs mt-1">
                  Tasa anual promedio
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="text-arq-gold-200 text-xs">Año 1</div>
                    <div className="text-white font-semibold">{formatCurrency(returns.year1)}</div>
                  </div>
                </div>
                <div className="text-arq-gold-200 text-sm">
                  +{((returns.year1 - returns.initial) / returns.initial * 100).toFixed(0)}%
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="text-arq-gold-200 text-xs">Año 3</div>
                    <div className="text-white font-semibold">{formatCurrency(returns.year3)}</div>
                  </div>
                </div>
                <div className="text-arq-gold-200 text-sm">
                  +{((returns.year3 - returns.initial) / returns.initial * 100).toFixed(0)}%
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div>
                    <div className="text-arq-gold-200 text-xs">Año 5</div>
                    <div className="text-white font-semibold">{formatCurrency(returns.year5)}</div>
                  </div>
                </div>
                <div className="text-arq-gold-200 text-sm">
                  +{((returns.year5 - returns.initial) / returns.initial * 100).toFixed(0)}%
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="block w-full bg-white text-arq-gold-700 text-center py-4 rounded-lg font-semibold mt-8 hover:bg-arq-stone-50 transition-colors"
            >
              Consultar con un Asesor
            </a>

            <p className="text-arq-gold-200 text-xs text-center mt-4">
              * Proyecciones basadas en datos históricos. Rentabilidad no garantizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentSimulator

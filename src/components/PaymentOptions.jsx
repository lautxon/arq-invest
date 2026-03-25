import { CreditCard, Bitcoin, Building, FileText, Shield, Calendar, Wallet, Landmark, Briefcase } from 'lucide-react'

const PaymentOptions = () => {
  const paymentMethods = [
    {
      icon: Wallet,
      title: 'Mercado Pago',
      description: 'Pagá con saldo, tarjeta o QR. Aceptamos todas las tarjetas argentinas.',
      color: 'arq-gold',
    },
    {
      icon: CreditCard,
      title: 'Transferencia Bancaria',
      description: 'Pesos o dólares. Cuentas en Argentina y exterior.',
      color: 'arq-navy',
    },
    {
      icon: Bitcoin,
      title: 'Criptomonedas',
      description: 'Bitcoin, Ethereum, USDT. Wallet segura y custodia.',
      color: 'arq-gold',
    },
  ]

  const bankOptions = [
    {
      icon: Landmark,
      name: 'Banco Nación',
      title: 'Hipotecario AR',
      description: 'Hasta 30 años. Tasa fija en pesos. Acepta ingresos informales.',
      rate: 'Desde 119% TNA',
      color: 'arq-navy',
    },
    {
      icon: Building,
      name: 'Banco Ciudad',
      title: 'Crédito Construcción',
      description: 'Para construcción o ampliación. Hasta 80% del valor del proyecto.',
      rate: 'Desde 99% TNA',
      color: 'arq-sage',
    },
    {
      icon: Briefcase,
      name: 'Banco Supervielle',
      title: 'Préstamo Inversión',
      description: 'Para inversores. Financiación en UVA o tasa fija. Rápida aprobación.',
      rate: 'Desde 85% TNA',
      color: 'arq-gold',
    },
  ]

  const paymentStages = [
    {
      stage: 'Reserva',
      percentage: '10%',
      description: 'Seña para reservar la unidad',
      icon: Calendar,
    },
    {
      stage: 'Boleto',
      percentage: '30%',
      description: 'Firma de boleto de compraventa',
      icon: FileText,
    },
    {
      stage: 'En Obra',
      percentage: '40%',
      description: 'Pagos escalonados según hitos',
      icon: Building,
    },
    {
      stage: 'Entrega',
      percentage: '20%',
      description: 'Al momento de la escrituración',
      icon: Shield,
    },
  ]

  return (
    <section className="section-padding bg-white" id="pago">
      <div className="container-custom">
        {/* Header */}
        <div className="gsap-fade-in text-center max-w-4xl mx-auto mb-16">
          <span className="text-arq-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">
            Flexibilidad
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-arq-navy-900 mb-6">
            Opciones de Pago
          </h2>
          <p className="text-arq-stone-600 text-lg">
            Adaptamos las condiciones a tus necesidades. 
            Múltiples formas de invertir con seguridad y flexibilidad.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="gsap-fade-in grid md:grid-cols-3 gap-8 mb-20">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-arq-stone-50 border border-arq-stone-200 p-8 rounded-sm text-center card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-sm bg-${method.color}-100 flex items-center justify-center mx-auto mb-6`}>
                <method.icon className={`w-8 h-8 text-${method.color}-600`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-arq-navy-900 mb-3">
                {method.title}
              </h3>
              <p className="text-arq-stone-600">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Payment Schedule */}
        <div className="gsap-scale-in bg-arq-navy-950 text-white rounded-sm p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold mb-4">
              Cronograma de Pagos Típico
            </h3>
            <p className="text-arq-stone-300 max-w-2xl mx-auto">
              Estructura flexible que se adapta al avance de obra.
              Invertí en pozo con máxima seguridad y rentabilidad.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-4 gap-6">
            {paymentStages.map((stage, index) => (
              <div
                key={index}
                className="relative text-center"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connector Line */}
                {index < paymentStages.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-arq-gold-500/30"></div>
                )}

                {/* Icon */}
                <div className="relative w-16 h-16 mx-auto mb-6 bg-arq-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-arq-gold-500/30">
                  <stage.icon className="w-7 h-7 text-white" />
                </div>

                {/* Percentage */}
                <div className="text-4xl font-display font-bold text-arq-gold-400 mb-2">
                  {stage.percentage}
                </div>

                {/* Stage Name */}
                <div className="text-lg font-semibold mb-2">
                  {stage.stage}
                </div>

                {/* Description */}
                <div className="text-arq-stone-400 text-sm">
                  {stage.description}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="text-arq-gold-400 text-sm mb-2">Moneda</div>
              <div className="text-white font-semibold">Pesos, Dólares o Cripto</div>
            </div>
            <div className="text-center">
              <div className="text-arq-gold-400 text-sm mb-2">Financiación</div>
              <div className="text-white font-semibold">Hasta 24 meses</div>
            </div>
            <div className="text-center">
              <div className="text-arq-gold-400 text-sm mb-2">Descuento</div>
              <div className="text-white font-semibold">Hasta 15% en pozo</div>
            </div>
          </div>
        </div>

        {/* Bank Options - Argentina */}
        <div className="gsap-fade-in mt-16">
          <div className="text-center mb-12">
            <span className="text-arq-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">
              Financiación Bancaria
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-arq-navy-900 mb-4">
              Bancos Nacionales
            </h3>
            <p className="text-arq-stone-600 text-lg max-w-3xl mx-auto">
              Trabajamos con las principales entidades bancarias de Argentina 
              para ofrecerte las mejores condiciones de financiación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bankOptions.map((bank, index) => (
              <div
                key={index}
                className="gsap-fade-in bg-white border-4 border-arq-stone-200 p-8 rounded-sm card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-sm bg-${bank.color}-100 flex items-center justify-center mx-auto mb-6`}>
                  <bank.icon className={`w-8 h-8 text-${bank.color}-600`} />
                </div>
                
                <h4 className="text-xl font-display font-semibold text-arq-navy-900 mb-2 text-center">
                  {bank.name}
                </h4>
                <p className="text-arq-gold-600 font-medium text-center mb-4">
                  {bank.title}
                </p>
                <p className="text-arq-stone-600 text-sm text-center mb-4 leading-relaxed">
                  {bank.description}
                </p>
                <div className="bg-arq-stone-50 border border-arq-stone-200 rounded-sm p-4 text-center">
                  <span className="text-arq-stone-500 text-xs uppercase tracking-wide">Tasa</span>
                  <p className="text-arq-navy-900 font-bold text-lg">{bank.rate}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-arq-stone-500 text-sm italic">
              * Tasas sujetas a cambio. Consultar condiciones actualizadas en cada banco.
            </p>
          </div>
        </div>

        {/* Legal Info */}
        <div className="gsap-fade-in mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-arq-stone-50 border border-arq-stone-200 p-8 rounded-sm">
            <h4 className="font-display font-semibold text-arq-navy-900 mb-4 flex items-center gap-3">
              <FileText className="w-5 h-5 text-arq-gold-600" />
              Documentación Legal
            </h4>
            <ul className="space-y-3 text-arq-stone-700">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-arq-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Contrato de compraventa registrado</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-arq-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Permiso de construcción municipal</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-arq-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Seguro de caución (Ley 19.610)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-arq-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Propiedad horizontal aprobada</span>
              </li>
            </ul>
          </div>

          <div className="bg-arq-stone-50 border border-arq-stone-200 p-8 rounded-sm">
            <h4 className="font-display font-semibold text-arq-navy-900 mb-4 flex items-center gap-3">
              <Shield className="w-5 h-5 text-arq-gold-600" />
              Seguridad para el Inversor
            </h4>
            <ul className="space-y-3 text-arq-stone-700">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-arq-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Fideicomiso transparente y auditado</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-arq-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Informes de avance mensuales</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-arq-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Garantía de titularidad registral</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-arq-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Asesoría legal incluida</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="gsap-fade-in text-center mt-12">
          <a
            href="#contacto"
            className="btn-gold inline-flex items-center gap-3"
          >
            Coordinar Forma de Pago
            <CreditCard className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default PaymentOptions

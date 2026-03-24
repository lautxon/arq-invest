import { useState } from 'react'
import { Mail, Phone, MapPin, Calendar, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here would be the actual form submission logic
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
    }, 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'inversiones@arqinvest.com',
      href: 'mailto:inversiones@arqinvest.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+54 11 4567-8900',
      href: 'tel:+541145678900',
    },
    {
      icon: MapPin,
      label: 'Oficinas',
      value: 'Av. Alvear 1850, Recoleta, CABA',
      href: 'https://maps.google.com',
    },
    {
      icon: Clock,
      label: 'Horario',
      value: 'Lun - Vie: 9:00 - 19:00',
      href: '#',
    },
  ]

  return (
    <section className="section-padding bg-arq-stone-50" id="contacto">
      <div className="container-custom">
        {/* Header */}
        <div className="gsap-fade-in text-center max-w-4xl mx-auto mb-16">
          <span className="text-arq-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-arq-navy-900 mb-6">
            Comenzá tu Inversión
          </h2>
          <p className="text-arq-stone-600 text-lg">
            Nuestro equipo de asesores está listo para guiarte en cada paso. 
            Agendá una reunión o consultanos sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="gsap-fade-in bg-white border border-arq-stone-200 rounded-sm p-8 lg:p-10">
            <h3 className="text-2xl font-display font-semibold text-arq-navy-900 mb-6">
              Envianos tu Consulta
            </h3>

            {submitted ? (
              <div className="bg-arq-sage-50 border border-arq-sage-200 rounded-sm p-8 text-center">
                <CheckCircle className="w-16 h-16 text-arq-sage-600 mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-arq-navy-900 mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-arq-stone-600">
                  Nos pondremos en contacto dentro de las próximas 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-arq-stone-700 text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-arq-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-arq-gold-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-arq-stone-700 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-arq-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-arq-gold-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-arq-stone-700 text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-arq-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-arq-gold-500 focus:border-transparent transition-all"
                      placeholder="+54 11 ..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-arq-stone-700 text-sm font-medium mb-2">
                    Estoy interesado en *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-arq-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-arq-gold-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="1amb">1 Ambiente - Inversión</option>
                    <option value="2amb">2 Ambientes</option>
                    <option value="3amb">3 Ambientes</option>
                    <option value="ph">Penthouse</option>
                    <option value="oficina">Oficina</option>
                    <option value="local">Local Comercial</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-arq-stone-700 text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-arq-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-arq-gold-500 focus:border-transparent transition-all resize-none"
                    placeholder="Contanos más sobre tu inversión..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-3"
                >
                  Enviar Consulta
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-arq-stone-500 text-xs text-center">
                  Al enviar este formulario, aceptás nuestra política de privacidad.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info & CTA */}
          <div className="gsap-fade-in space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="bg-white border border-arq-stone-200 p-6 rounded-sm card-hover group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-6 h-6 text-arq-gold-600 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-arq-stone-500 text-sm mb-1">{item.label}</div>
                  <div className="text-arq-navy-900 font-semibold">{item.value}</div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5491145678900"
              target="_blank"
              rel="noopener noreferrer"
              className="gsap-scale-in block bg-[#25D366] text-white p-8 rounded-sm text-center card-hover"
            >
              <MessageCircle className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold mb-2">
                Hablá por WhatsApp
              </h3>
              <p className="text-white/90 mb-4">
                Respuesta inmediata en horario comercial
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-sm font-semibold">
                <MessageCircle className="w-5 h-5" />
                +54 9 11 4567-8900
              </div>
            </a>

            {/* Calendar CTA */}
            <a
              href="#calendar"
              className="gsap-scale-in block bg-arq-navy-900 text-white p-8 rounded-sm text-center card-hover"
              style={{ transitionDelay: '200ms' }}
            >
              <Calendar className="w-10 h-10 mx-auto mb-4 text-arq-gold-400" />
              <h3 className="text-2xl font-display font-bold mb-2">
                Agendá una Reunión
              </h3>
              <p className="text-arq-stone-300 mb-4">
                Virtual o presencial. Elegí el horario que prefieras.
              </p>
              <div className="inline-flex items-center gap-2 bg-arq-gold-500 px-6 py-3 rounded-sm font-semibold">
                <Calendar className="w-5 h-5" />
                Reservar Turno
              </div>
            </a>

            {/* Office Hours */}
            <div className="gsap-fade-in bg-white border border-arq-stone-200 p-6 rounded-sm">
              <h4 className="font-display font-semibold text-arq-navy-900 mb-4">
                Atención al Cliente
              </h4>
              <div className="space-y-3 text-arq-stone-700">
                <div className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-semibold">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-semibold">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span className="text-arq-stone-400">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

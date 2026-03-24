import { Building2, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    proyectos: [
      { name: 'Torre Bellini', href: '#proyectos' },
      { name: 'Residencia Alvear', href: '#proyectos' },
      { name: 'Puerto Norte', href: '#proyectos' },
      { name: 'Próximos Lanzamientos', href: '#proyectos' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#desarrollador' },
      { name: 'Trayectoria', href: '#desarrollador' },
      { name: 'Certificaciones', href: '#desarrollador' },
      { name: 'Prensa', href: '#' },
    ],
    inversores: [
      { name: 'Simulador', href: '#simulador' },
      { name: 'Análisis de Mercado', href: '#mercado' },
      { name: 'Preguntas Frecuentes', href: '#' },
      { name: 'Centro de Descargas', href: '#' },
    ],
    legal: [
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Defensa al Consumidor', href: '#' },
      { name: 'Trámites y Servicios', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-arq-navy-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-arq-gold-400" />
              <span className="text-2xl font-display font-semibold">
                ARQ<span className="text-arq-gold-400">Invest</span>
              </span>
            </a>
            <p className="text-arq-stone-400 mb-6 leading-relaxed">
              Desarrollos inmobiliarios premium con más de 15 años de trayectoria. 
              Construyendo confianza, generando rentabilidad.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center hover:bg-arq-gold-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-arq-stone-400 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-arq-gold-400 flex-shrink-0" />
                <span>Av. Alvear 1850, Recoleta, CABA</span>
              </div>
              <a href="tel:+541145678900" className="flex items-center gap-3 hover:text-arq-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-arq-gold-400 flex-shrink-0" />
                <span>+54 11 4567-8900</span>
              </a>
              <a href="mailto:inversiones@arqinvest.com" className="flex items-center gap-3 hover:text-arq-gold-400 transition-colors">
                <Mail className="w-4 h-4 text-arq-gold-400 flex-shrink-0" />
                <span>inversiones@arqinvest.com</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold mb-6">Proyectos</h4>
            <ul className="space-y-3">
              {footerLinks.proyectos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-arq-stone-400 hover:text-arq-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-arq-stone-400 hover:text-arq-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Inversores</h4>
            <ul className="space-y-3">
              {footerLinks.inversores.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-arq-stone-400 hover:text-arq-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-arq-stone-400 hover:text-arq-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-arq-stone-500 text-sm">
              © {currentYear} ARQ Invest. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6 text-arq-stone-500 text-sm">
              <span>Hecho en Buenos Aires, Argentina</span>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-arq-gold-400 transition-colors">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

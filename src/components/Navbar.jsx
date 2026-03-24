import { useState, useEffect } from 'react'
import { Menu, X, Building2 } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Desarrollador', href: '#desarrollador' },
    { name: 'Planos', href: '#planos' },
    { name: 'Mercado', href: '#mercado' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-arq-navy-950/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Building2 className="w-8 h-8 text-arq-gold-400 group-hover:text-arq-gold-300 transition-colors" />
          <span className="text-2xl font-display font-semibold text-white">
            ARQ<span className="text-arq-gold-400">Invest</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-arq-stone-200 hover:text-arq-gold-400 transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-gold text-sm px-6 py-3"
          >
            Invertir Ahora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-arq-navy-950 border-t border-arq-navy-800">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-arq-stone-200 hover:text-arq-gold-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-gold text-sm px-6 py-3 block text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Invertir Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

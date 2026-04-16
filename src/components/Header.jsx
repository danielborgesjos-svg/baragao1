import { useState } from 'react'
import { useLocation } from 'wouter'
import { Phone, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Quem Somos', path: '/quem-somos' },
  { label: 'Baragão Veículos', path: '/veiculos' },
  { label: 'Shineray Tarumã', path: '/shineray' },
  { label: 'Baragão Soluções e Negócios', path: '/consorcios' },
]

export default function Header() {
  const [location, navigate] = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <>
      <header className="header" role="banner">
        <div className="container">
          <div
            className="logo-area"
            onClick={() => handleNav('/')}
            role="link"
            aria-label="Grupo Baragão - Página Inicial"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNav('/')}
          >
            <span className="logo-title">GRUPO <span>BARAGÃO</span></span>
            <span className="logo-tagline">Aqui seu sonho se realiza</span>
          </div>

          <nav aria-label="Navegação principal">
            <ul className="nav-menu">
              {navItems.map(item => (
                <li key={item.path}>
                  <span
                    className={`nav-link${location === item.path ? ' active' : ''}`}
                    onClick={() => handleNav(item.path)}
                    role="link"
                    aria-label={item.label}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav(item.path)}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="tel:+551800000000"
            className="contact-btn"
            aria-label="Ligar para o Grupo Baragão"
          >
            <Phone size={16} />
            Contato
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Menu mobile">
        <ul>
          {navItems.map(item => (
            <li key={item.path}>
              <span
                className={`nav-link${location === item.path ? ' active' : ''}`}
                onClick={() => handleNav(item.path)}
                role="link"
                tabIndex={menuOpen ? 0 : -1}
                onKeyDown={(e) => e.key === 'Enter' && handleNav(item.path)}
              >
                {item.label}
              </span>
            </li>
          ))}
          <li style={{ marginTop: '0.5rem', padding: '0 1rem' }}>
            <a
              href="tel:+551800000000"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
            >
              <Phone size={16} />
              Ligar agora
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

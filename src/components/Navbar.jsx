import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="Mellow Johnny's Home" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-name">Mellow Johnny's</span>
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `navbar__link${isActive ? ' active navbar__link--active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary navbar__cta">
            Book Service
          </Link>
        </nav>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`navbar__bar${menuOpen ? ' navbar__bar--open' : ''}`} />
          <span className={`navbar__bar${menuOpen ? ' navbar__bar--open' : ''}`} />
          <span className={`navbar__bar${menuOpen ? ' navbar__bar--open' : ''}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ marginTop: '24px' }}
            onClick={() => setMenuOpen(false)}
          >
            Book Service
          </Link>
        </nav>
      </div>
    </header>
  )
}

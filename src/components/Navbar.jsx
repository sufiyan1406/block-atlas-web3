import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Box } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/concepts', label: 'Concepts' },
  { to: '/prices', label: 'Live Prices' },
  { to: '/simulator', label: 'Block Simulator' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          aria-label="Web3 Explorer Home"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            style={{
              width: 40, height: 40,
              background: 'var(--color-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            <Box className="w-5 h-5" style={{ color: 'white' }} strokeWidth={3} />
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            WEB3 EXPLORER
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            width: 48, height: 48,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '4px solid var(--color-primary)',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div
          className="md:hidden animate-fade-in"
          style={{
            position: 'absolute',
            top: 80,
            left: 0,
            right: 0,
            background: 'var(--color-bg)',
            borderBottom: '4px solid var(--color-primary)',
            padding: '1rem 1.5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={{ display: 'block', textAlign: 'center' }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

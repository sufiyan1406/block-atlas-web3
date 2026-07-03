import { GitBranch, Box, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{ background: 'var(--color-primary)', color: 'white', borderTop: '4px solid var(--color-primary)' }}
      role="contentinfo"
    >
      <div className="container-main" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', textDecoration: 'none', color: 'white' }}>
              <div style={{ width: 40, height: 40, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: 20, height: 20, color: 'var(--color-primary)' }} strokeWidth={3} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.01em' }}>WEB3 EXPLORER</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: 280 }}>
              An educational platform for understanding blockchain technology,
              Ethereum, Layer 2 solutions, and the future of the decentralized web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'rgba(255,255,255,0.4)' }}>
              Explore
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/concepts', label: 'Concepts' },
                { to: '/prices', label: 'Live Prices' },
                { to: '/simulator', label: 'Block Simulator' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'rgba(255,255,255,0.4)' }}>
              About
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span style={{ color: 'white', fontWeight: 700 }}>Developer:</span>{' '}
                Web3 Explorer Team
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span style={{ color: 'white', fontWeight: 700 }}>Batch:</span>{' '}
                Full Stack Web3 — 2026
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontWeight: 500 }}
                aria-label="Visit GitHub repository"
              >
                <GitBranch style={{ width: 18, height: 18 }} />
                <span>GitHub Repository</span>
                <ArrowUpRight style={{ width: 12, height: 12 }} />
              </a>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
          <p>© {new Date().getFullYear()} Web3 Explorer. Built for education.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Made with
            <span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--color-red)' }} />
            and React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

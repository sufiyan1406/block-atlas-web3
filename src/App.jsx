import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Concepts = lazy(() => import('./pages/Concepts.jsx'))
const LivePrices = lazy(() => import('./pages/LivePrices.jsx'))
const Simulator = lazy(() => import('./pages/Simulator.jsx'))

function PageLoader() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 56, height: 56,
          border: '4px solid var(--color-primary)',
          borderTopColor: 'var(--color-blue)',
          borderRadius: '50%',
          margin: '0 auto 1rem',
        }} className="animate-spin-slow" />
        <p style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Loading</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 84 }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/prices" element={<LivePrices />} />
            <Route path="/simulator" element={<Simulator />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

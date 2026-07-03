import { useEffect } from 'react'
import { RefreshCw, AlertCircle, Clock } from 'lucide-react'
import CryptoCard, { CryptoCardSkeleton } from '../components/CryptoCard.jsx'
import Button from '../components/Button.jsx'
import { useCryptoPrices } from '../hooks/useCryptoPrices.js'
import { formatTimestamp } from '../utils/format.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function LivePrices() {
  const containerRef = useScrollReveal()
  const { data, loading, error, lastUpdated, refresh } = useCryptoPrices()

  useEffect(() => {
    document.title = 'Live Crypto Prices — Web3 Explorer'
  }, [])

  return (
    <div ref={containerRef}>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="border-b-thick" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container-main">
          <div className="animate-fade-in-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem' }}>
            <div>
              <div className="brutal-tag" style={{ background: 'var(--color-green)', color: 'white', marginBottom: '1.5rem' }}>
                Real-Time Data
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
                LIVE
                <br />
                <span style={{ color: 'var(--color-blue)' }}>PRICES</span>
              </h1>
              <p style={{ fontSize: '1.05rem', color: '#666', maxWidth: 450, marginTop: '1rem', lineHeight: 1.6 }}>
                Real-time cryptocurrency prices from the CoinGecko API.
                Track the top assets in the ecosystem.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
              <Button onClick={refresh} variant="outline" disabled={loading} ariaLabel="Refresh crypto prices">
                <RefreshCw style={{ width: 18, height: 18 }} className={loading ? 'animate-spin-slow' : ''} />
                {loading ? 'Refreshing...' : 'Refresh'}
              </Button>

              {lastUpdated && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#999' }}>
                  <Clock style={{ width: 14, height: 14 }} />
                  <span>Last updated: {formatTimestamp(lastUpdated)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRICE GRID ═══════════════════ */}
      <section className="section-pad">
        <div className="container-main">
          {/* Error State */}
          {error && (
            <div className="brutal-card-static animate-fade-in" style={{ padding: '2rem', background: '#fef2f2', borderColor: 'var(--color-red)', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 48, height: 48,
                  background: 'var(--color-red)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '4px solid var(--color-primary)',
                  flexShrink: 0,
                }}>
                  <AlertCircle style={{ width: 24, height: 24, color: 'white' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Failed to Load Prices</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    {error}. This could be a network issue or API rate limiting.
                  </p>
                  <Button onClick={refresh} variant="outline" className="text-sm">
                    <RefreshCw style={{ width: 16, height: 16 }} />
                    Try Again
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Loading Skeletons */}
          {loading && !data && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <CryptoCardSkeleton key={i} />
              ))}
            </div>
          )}

          {/* Data */}
          {data && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.map((coin, i) => (
                <div key={coin.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CryptoCard coin={coin} />
                </div>
              ))}
            </div>
          )}

          {/* API Attribution */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: '#aaa' }}>
              Data provided by{' '}
              <a
                href="https://www.coingecko.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                CoinGecko API
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

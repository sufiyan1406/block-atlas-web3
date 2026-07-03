import { TrendingUp, TrendingDown } from 'lucide-react'
import { formatPrice, formatChange } from '../utils/format.js'

function CoinIcon({ symbol, color }) {
  return (
    <div style={{
      width: 52, height: 52,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '4px solid var(--color-primary)',
      background: color, color: 'white',
      fontWeight: 700, fontSize: '1rem',
    }}>
      {symbol.slice(0, 2)}
    </div>
  )
}

export default function CryptoCard({ coin }) {
  const isPositive = coin.change >= 0

  return (
    <div className="brutal-card" style={{ padding: '1.75rem' }} id={`crypto-${coin.id}`}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <CoinIcon symbol={coin.symbol} color={coin.color} />
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{coin.name}</h3>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {coin.symbol}
            </span>
          </div>
        </div>
        <div className="brutal-tag" style={{
          background: isPositive ? '#f0fdf4' : '#fef2f2',
          color: isPositive ? 'var(--color-green)' : 'var(--color-red)',
          borderColor: isPositive ? 'var(--color-green)' : 'var(--color-red)',
        }}>
          {isPositive ? '↑' : '↓'} {formatChange(coin.change)}%
        </div>
      </div>

      {/* Price */}
      <p style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
        {formatPrice(coin.price)}
      </p>

      {/* Status Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '2px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {isPositive ? (
            <TrendingUp style={{ width: 18, height: 18, color: 'var(--color-green)' }} />
          ) : (
            <TrendingDown style={{ width: 18, height: 18, color: 'var(--color-red)' }} />
          )}
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#999' }}>24h change</span>
        </div>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: isPositive ? 'var(--color-green)' : 'var(--color-red)' }}>
          {isPositive ? '+' : ''}{formatChange(coin.change)}%
        </span>
      </div>
    </div>
  )
}

export function CryptoCardSkeleton() {
  return (
    <div className="brutal-card-static" style={{ padding: '1.75rem', pointerEvents: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
        <div className="skeleton" style={{ width: 52, height: 52 }} />
        <div>
          <div className="skeleton" style={{ width: 96, height: 18, marginBottom: 8 }} />
          <div className="skeleton" style={{ width: 48, height: 12 }} />
        </div>
      </div>
      <div className="skeleton" style={{ width: 180, height: 36, marginBottom: '1.25rem' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '2px solid #eee' }}>
        <div className="skeleton" style={{ width: 80, height: 16 }} />
        <div className="skeleton" style={{ width: 60, height: 16 }} />
      </div>
    </div>
  )
}

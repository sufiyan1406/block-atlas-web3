import { useState, useEffect } from 'react'

export default function BlockchainIllustration() {
  const [activeBlock, setActiveBlock] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const blocks = [
    { hash: 'a3f2...8b1c', nonce: '23847', data: 'Genesis Block' },
    { hash: 'e7d1...4f9a', nonce: '91204', data: 'Alice → Bob: 5 ETH' },
    { hash: '1b8c...d3e7', nonce: '54019', data: 'Bob → Charlie: 2 ETH' },
  ]

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }} aria-hidden="true">
      {blocks.map((block, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: 240,
            border: '4px solid var(--color-primary)',
            background: 'white',
            transition: 'all 0.5s',
            boxShadow: activeBlock === i ? '8px 8px 0px var(--color-blue)' : '6px 6px 0px var(--color-primary)',
            transform: activeBlock === i ? 'scale(1.03)' : 'scale(1)',
          }}>
            <div style={{
              padding: '0.5rem 1rem',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              background: activeBlock === i ? 'var(--color-blue)' : 'var(--color-primary)',
              transition: 'background 0.5s',
            }}>
              Block #{i + 1}
            </div>
            <div style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.55rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#bbb' }}>Hash</span>
                <span style={{
                  fontFamily: 'monospace', fontSize: '0.7rem', fontWeight: 700,
                  color: activeBlock === i ? 'var(--color-blue)' : 'var(--color-primary)',
                  transition: 'color 0.5s',
                }}>
                  {block.hash}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.55rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#bbb' }}>Nonce</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.7rem' }}>{block.nonce}</span>
              </div>
              <div style={{ paddingTop: '0.4rem', borderTop: '2px solid #eee' }}>
                <span style={{ fontSize: '0.55rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#bbb', display: 'block', marginBottom: '0.2rem' }}>Data</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{block.data}</span>
              </div>
            </div>
          </div>

          {i < blocks.length - 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.4rem 0' }}>
              <div style={{
                width: 3, height: 20,
                background: activeBlock === i || activeBlock === i + 1 ? 'var(--color-blue)' : 'var(--color-primary)',
                transition: 'background 0.5s',
              }} />
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M8 10L0 0H16L8 10Z" fill={activeBlock === i || activeBlock === i + 1 ? 'var(--color-blue)' : 'var(--color-primary)'} />
              </svg>
            </div>
          )}
        </div>
      ))}

      {/* Decorative dots */}
      <div className="animate-float" style={{ position: 'absolute', top: -12, right: -24, width: 20, height: 20, background: 'var(--color-yellow)', border: '2px solid var(--color-primary)' }} />
      <div className="animate-float" style={{ position: 'absolute', bottom: -12, left: -18, width: 14, height: 14, background: 'var(--color-red)', border: '2px solid var(--color-primary)', animationDelay: '1s' }} />
      <div className="animate-float" style={{ position: 'absolute', top: '50%', right: -30, width: 10, height: 10, background: 'var(--color-green)', border: '2px solid var(--color-primary)', animationDelay: '1.5s' }} />
    </div>
  )
}

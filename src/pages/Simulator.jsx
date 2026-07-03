import { useState, useCallback, useEffect } from 'react'
import {
  ArrowDown,
  Link as LinkIcon,
  Unlink,
  Hash,
  Cpu,
  Shield,
  Layers,
  BookOpen,
  AlertTriangle,
} from 'lucide-react'
import Block from '../components/Block.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Simulator() {
  const containerRef = useScrollReveal()
  const [block1Hash, setBlock1Hash] = useState('')
  const [block2Mined, setBlock2Mined] = useState(false)
  const [chainValid, setChainValid] = useState(true)
  const [prevBlock1Hash, setPrevBlock1Hash] = useState('')

  useEffect(() => {
    document.title = 'Block Simulator — Web3 Explorer'
  }, [])

  const handleBlock1HashChange = useCallback(
    (hash) => {
      if (prevBlock1Hash && prevBlock1Hash !== hash && block2Mined) {
        setChainValid(false)
      }
      setPrevBlock1Hash(block1Hash)
      setBlock1Hash(hash)
    },
    [prevBlock1Hash, block1Hash, block2Mined]
  )

  const handleBlock2HashChange = useCallback(() => {}, [])

  const handleBlock1MiningState = useCallback((mining) => {
    if (!mining) {
      setChainValid(true)
    }
  }, [])

  const handleBlock2MiningState = useCallback((mining) => {
    if (!mining) {
      setBlock2Mined(true)
      setChainValid(true)
    }
  }, [])

  const isChainBroken = block2Mined && !chainValid

  return (
    <div ref={containerRef}>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="border-b-thick grid-bg" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container-main">
          <div className="animate-fade-in-up">
            <div className="brutal-tag" style={{ background: 'var(--color-yellow)', marginBottom: '1.5rem' }}>
              Interactive Demo
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              BLOCK
              <br />
              <span style={{ color: 'var(--color-blue)' }}>SIMULATOR</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: 600, marginTop: '1.5rem', lineHeight: 1.7 }}>
              Mine blocks with real SHA-256 hashing. See proof of work in action.
              Change data and watch the chain break — experiencing blockchain
              immutability firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SIMULATOR ═══════════════════ */}
      <section className="section-pad">
        <div className="container-main" style={{ maxWidth: 860 }}>
          {/* Instructions */}
          <div className="reveal brutal-card-static" style={{ padding: '1.5rem 2rem', background: 'var(--color-yellow)', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>How to use this simulator</h2>
            <ol style={{ listStyleType: 'decimal', paddingLeft: '1.25rem', fontSize: '0.9rem', lineHeight: 1.8, color: '#333' }}>
              <li>Click <strong>&quot;Mine Block&quot;</strong> on Block #1 to find a valid hash (starts with &quot;00&quot;).</li>
              <li>Block #2 automatically receives Block #1&apos;s hash as its previous hash.</li>
              <li>Mine Block #2 to complete the chain.</li>
              <li>Now go back and <strong>change Block #1&apos;s data</strong> — watch the chain break!</li>
            </ol>
          </div>

          {/* Block 1 */}
          <div className="reveal">
            <Block
              blockNumber={1}
              previousHash={'0'.repeat(64)}
              onHashChange={handleBlock1HashChange}
              onMiningStateChange={handleBlock1MiningState}
              isChainValid={true}
            />
          </div>

          {/* Chain Arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem 0' }}>
            <div style={{ width: 3, height: 28, background: isChainBroken ? 'var(--color-red)' : 'var(--color-primary)', transition: 'background 0.3s' }} />
            <div style={{
              width: 48, height: 48,
              border: `4px solid ${isChainBroken ? 'var(--color-red)' : 'var(--color-primary)'}`,
              background: isChainBroken ? '#fef2f2' : 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s',
            }}>
              {isChainBroken ? (
                <Unlink style={{ width: 20, height: 20, color: 'var(--color-red)' }} />
              ) : (
                <LinkIcon style={{ width: 20, height: 20, color: 'var(--color-primary)' }} />
              )}
            </div>
            <div style={{ width: 3, height: 28, background: isChainBroken ? 'var(--color-red)' : 'var(--color-primary)', transition: 'background 0.3s' }} />
            <ArrowDown style={{ width: 24, height: 24, color: isChainBroken ? 'var(--color-red)' : 'var(--color-primary)', transition: 'color 0.3s' }} />
          </div>

          {/* Chain Status Message */}
          {isChainBroken && (
            <div className="brutal-card-static animate-fade-in" style={{ padding: '1.25rem', background: '#fef2f2', borderColor: 'var(--color-red)', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <AlertTriangle style={{ width: 24, height: 24, color: 'var(--color-red)', flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--color-red)' }}>CHAIN INTEGRITY BROKEN</p>
                  <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>
                    Block #1&apos;s hash changed, but Block #2 still references the old hash.
                    In a real blockchain, all subsequent blocks would need to be re-mined.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Block 2 */}
          <div className="reveal">
            <Block
              blockNumber={2}
              previousHash={block1Hash}
              onHashChange={handleBlock2HashChange}
              onMiningStateChange={handleBlock2MiningState}
              isChainValid={!isChainBroken}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════ EDUCATIONAL PANEL ═══════════════════ */}
      <section className="border-t-thick section-pad" style={{ background: 'white' }}>
        <div className="container-main" style={{ maxWidth: 860 }}>
          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <div className="brutal-tag" style={{ background: 'var(--color-blue)', color: 'white', marginBottom: '1.5rem' }}>
              Deep Dive
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              HOW IT <span style={{ color: 'var(--color-blue)' }}>WORKS</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Nonce */}
            <div className="reveal brutal-card" style={{ padding: '2rem' }}>
              <div style={{ width: 48, height: 48, background: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid var(--color-primary)', marginBottom: '1.25rem' }}>
                <Hash style={{ width: 24, height: 24, color: 'white' }} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Nonce</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                A nonce (&quot;number used once&quot;) is a random number that miners increment
                to find a hash that meets the difficulty requirement.
              </p>
              <div style={{ padding: '0.75rem 1rem', background: '#f9f9f7', border: '2px solid #eee', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                <span style={{ color: '#aaa' }}>nonce:</span> 0 → 1 → 2 → ... → <span style={{ color: 'var(--color-blue)', fontWeight: 700 }}>23847</span> ✓
              </div>
            </div>

            {/* Hash */}
            <div className="reveal brutal-card" style={{ padding: '2rem' }}>
              <div style={{ width: 48, height: 48, background: 'var(--color-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid var(--color-primary)', marginBottom: '1.25rem' }}>
                <Cpu style={{ width: 24, height: 24, color: 'var(--color-primary)' }} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>SHA-256 Hash</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                SHA-256 produces a unique 256-bit fingerprint. Even a tiny change in input
                produces a completely different output — the avalanche effect.
              </p>
              <div style={{ padding: '0.75rem 1rem', background: '#f9f9f7', border: '2px solid #eee', fontFamily: 'monospace', fontSize: '0.75rem', wordBreak: 'break-all' }}>
                <span style={{ color: '#aaa' }}>input:</span> &quot;hello&quot; →<br />
                <span style={{ color: 'var(--color-blue)', fontWeight: 700 }}>2cf24d...71e8d</span>
              </div>
            </div>

            {/* Proof of Work */}
            <div className="reveal brutal-card" style={{ padding: '2rem' }}>
              <div style={{ width: 48, height: 48, background: 'var(--color-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid var(--color-primary)', marginBottom: '1.25rem' }}>
                <Shield style={{ width: 24, height: 24, color: 'white' }} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Proof of Work</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Miners must find a nonce producing a hash starting with zeros. Expensive
                to compute, trivial to verify — the foundation of blockchain security.
              </p>
              <div style={{ padding: '0.75rem 1rem', background: '#f9f9f7', border: '2px solid #eee', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div><span style={{ fontWeight: 700, color: 'var(--color-red)' }}>✗</span> <span style={{ fontFamily: 'monospace' }}>a8f3e1... (invalid)</span></div>
                <div><span style={{ fontWeight: 700, color: 'var(--color-red)' }}>✗</span> <span style={{ fontFamily: 'monospace' }}>7bc019... (invalid)</span></div>
                <div><span style={{ fontWeight: 700, color: 'var(--color-green)' }}>✓</span> <span style={{ fontFamily: 'monospace', color: 'var(--color-green)', fontWeight: 700 }}>00a4f2... (valid!)</span></div>
              </div>
            </div>

            {/* Immutability */}
            <div className="reveal brutal-card" style={{ padding: '2rem' }}>
              <div style={{ width: 48, height: 48, background: 'var(--color-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid var(--color-primary)', marginBottom: '1.25rem' }}>
                <Layers style={{ width: 24, height: 24, color: 'white' }} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Immutability</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Each block contains the previous block&apos;s hash. Changing any data
                invalidates every subsequent block — making tampering practically impossible.
              </p>
              <div style={{ padding: '0.75rem 1rem', background: '#f9f9f7', border: '2px solid #eee', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: 12, height: 12, background: 'var(--color-green)', border: '2px solid var(--color-primary)' }} />
                  <span>Block 1 → Hash: <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>00a4f2...</span></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: 12, height: 12, background: 'var(--color-green)', border: '2px solid var(--color-primary)' }} />
                  <span>Block 2 → Prev: <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>00a4f2...</span> ✓</span>
                </div>
                <div style={{ marginTop: '0.25rem', paddingTop: '0.25rem', borderTop: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: 12, height: 12, background: 'var(--color-red)', border: '2px solid var(--color-primary)' }} />
                  <span>Change Block 1 → Chain <span style={{ fontWeight: 700, color: 'var(--color-red)' }}>BROKEN</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Blockchain Diagram */}
          <div className="reveal brutal-card-static" style={{ padding: '2rem 2.5rem', background: 'var(--color-primary)', color: 'white', marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BookOpen style={{ width: 24, height: 24 }} />
              The Blockchain Structure
            </h3>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 'max-content', paddingBottom: '0.5rem' }}>
                {[
                  { label: 'Genesis', hash: '0000...', prev: 'null' },
                  { label: 'Block 1', hash: '00a4...', prev: '0000...' },
                  { label: 'Block 2', hash: '00e7...', prev: '00a4...' },
                  { label: 'Block N', hash: '00f1...', prev: '00e7...' },
                ].map((block, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: 150, border: '2px solid rgba(255,255,255,0.25)', padding: '0.75rem 1rem' }}>
                      <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                        {block.label}
                      </p>
                      <p style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: 'rgba(255,255,255,0.6)' }}>
                        prev: {block.prev}
                      </p>
                      <p style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: 'var(--color-green)' }}>
                        hash: {block.hash}
                      </p>
                    </div>
                    {i < 3 && (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: 20, height: 2, background: 'rgba(255,255,255,0.3)' }} />
                        <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid rgba(255,255,255,0.3)' }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '1.5rem', lineHeight: 1.6, maxWidth: 600 }}>
              Each block cryptographically references its predecessor, creating an append-only
              ledger where history cannot be rewritten without invalidating every subsequent block.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

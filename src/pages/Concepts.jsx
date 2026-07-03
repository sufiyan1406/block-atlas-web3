import { useEffect } from 'react'
import { Eye, EyeOff, Lock, Unlock, Wallet } from 'lucide-react'
import ComparisonCard from '../components/ComparisonCard.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Concepts() {
  const containerRef = useScrollReveal()

  useEffect(() => {
    document.title = 'Web3 Fundamentals — Web3 Explorer'
  }, [])

  return (
    <div ref={containerRef}>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="border-b-thick" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container-main">
          <div className="animate-fade-in-up">
            <div className="brutal-tag" style={{ background: 'var(--color-blue)', color: 'white', marginBottom: '1.5rem' }}>
              Core Knowledge
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              WEB3
              <br />
              <span style={{ color: 'var(--color-blue)' }}>FUNDAMENTALS</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: 600, marginTop: '1.5rem', lineHeight: 1.7 }}>
              Every concept explained side-by-side. No walls of text — just clear
              comparisons that reveal how the decentralized web differs from everything
              you already know.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMPARISONS ═══════════════════ */}
      <section className="section-pad">
        <div className="container-main" style={{ maxWidth: 960 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>

            {/* 1. WEB2 VS WEB3 */}
            <div className="reveal" id="web2-vs-web3">
              <div style={{ marginBottom: '2rem' }}>
                <div className="brutal-tag" style={{ background: '#eee', marginBottom: '1rem' }}>Comparison 01</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>WEB2 vs WEB3</h2>
              </div>
              <ComparisonCard
                titleLeft="Web2"
                titleRight="Web3"
                accentLeft="#FF5757"
                accentRight="#2563EB"
                rows={[
                  {
                    category: 'Ownership',
                    left: 'Platforms own your data',
                    leftDetail: 'Facebook, Google, and Amazon control your content, followers, and reputation.',
                    leftIcon: 'x',
                    right: 'You own your data',
                    rightDetail: 'Your assets, identity, and history are stored on-chain — under your control.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Identity',
                    left: 'Email & password login',
                    leftDetail: 'Each platform has its own account. Password resets, data breaches, and lock-outs.',
                    leftIcon: 'arrow',
                    right: 'Wallet-based identity',
                    rightDetail: 'One cryptographic keypair works across every dApp. No passwords to remember.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Servers',
                    left: 'Centralized servers',
                    leftDetail: 'AWS goes down, your favourite app goes with it. Single point of failure.',
                    leftIcon: 'x',
                    right: 'Decentralized network',
                    rightDetail: 'Thousands of nodes worldwide. No single point of failure. Always available.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Payments',
                    left: 'Banks & payment processors',
                    leftDetail: 'Visa, PayPal, Stripe — each takes a cut and can freeze your funds.',
                    leftIcon: 'arrow',
                    right: 'Peer-to-peer payments',
                    rightDetail: 'Send value directly. No intermediaries, no 3-day settlement, no borders.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Data',
                    left: 'Opaque data practices',
                    leftDetail: 'You agree to Terms of Service you never read. Your data is the product.',
                    leftIcon: 'x',
                    right: 'Transparent & auditable',
                    rightDetail: 'Every transaction is recorded on a public blockchain. Full transparency.',
                    rightIcon: 'check',
                  },
                ]}
              />
            </div>

            {/* 2. BITCOIN VS ETHEREUM */}
            <div className="reveal" id="bitcoin-vs-ethereum">
              <div style={{ marginBottom: '2rem' }}>
                <div className="brutal-tag" style={{ background: '#eee', marginBottom: '1rem' }}>Comparison 02</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>BITCOIN vs ETHEREUM</h2>
              </div>
              <ComparisonCard
                titleLeft="Bitcoin"
                titleRight="Ethereum"
                accentLeft="#F7931A"
                accentRight="#627EEA"
                rows={[
                  {
                    category: 'Purpose',
                    left: 'Digital Gold',
                    leftDetail: 'Bitcoin is a store of value and a peer-to-peer electronic cash system designed to replace fiat.',
                    leftIcon: 'arrow',
                    right: 'World Computer',
                    rightDetail: 'Ethereum is a programmable blockchain that runs smart contracts and powers decentralized applications.',
                    rightIcon: 'arrow',
                  },
                  {
                    category: 'Speed',
                    left: '7 transactions per second',
                    leftDetail: '10-minute block time. Optimized for security over speed.',
                    leftIcon: 'x',
                    right: '15-30 transactions per second',
                    rightDetail: '12-second block time. Faster, but still needs Layer 2 for scale.',
                    rightIcon: 'arrow',
                  },
                  {
                    category: 'Programming',
                    left: 'Limited scripting',
                    leftDetail: 'Bitcoin Script is intentionally simple — handles basic transactions only.',
                    leftIcon: 'x',
                    right: 'Turing-complete (Solidity)',
                    rightDetail: 'Write any program as a smart contract. DeFi, NFTs, DAOs — all built here.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Supply',
                    left: 'Fixed: 21 million BTC',
                    leftDetail: 'Hard cap creates scarcity. All Bitcoin will be mined by 2140.',
                    leftIcon: 'check',
                    right: 'Dynamic supply',
                    rightDetail: 'ETH issuance adjusts. EIP-1559 burns fees, sometimes making ETH deflationary.',
                    rightIcon: 'arrow',
                  },
                  {
                    category: 'Use Cases',
                    left: 'Value transfer & savings',
                    leftDetail: 'Buy, hold, send. Bitcoin is simple by design. Used as digital gold.',
                    leftIcon: 'arrow',
                    right: 'DeFi, NFTs, DAOs, Gaming',
                    rightDetail: 'Lending, borrowing, trading, governance, metaverse — all on Ethereum.',
                    rightIcon: 'check',
                  },
                ]}
              />
            </div>

            {/* 3. PUBLIC KEY VS PRIVATE KEY */}
            <div className="reveal" id="public-vs-private-key">
              <div style={{ marginBottom: '2rem' }}>
                <div className="brutal-tag" style={{ background: '#eee', marginBottom: '1rem' }}>Comparison 03</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>PUBLIC KEY vs PRIVATE KEY</h2>
              </div>

              {/* Wallet Illustration */}
              <div className="brutal-card-static" style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="md:grid-cols-2">
                  {/* Visual */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', maxWidth: 320 }}>
                      <div style={{ border: '4px solid var(--color-primary)', background: '#f9f9f7', padding: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                          <Wallet style={{ width: 20, height: 20 }} />
                          <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.85rem' }}>Your Wallet</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {/* Public Key */}
                          <div style={{ padding: '1rem', border: '4px solid var(--color-green)', background: '#f0fdf4' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                              <Eye style={{ width: 14, height: 14, color: 'var(--color-green)' }} />
                              <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-green)' }}>
                                Public Key
                              </span>
                            </div>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: '#666', wordBreak: 'break-all' }}>
                              0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18
                            </p>
                          </div>
                          {/* Private Key */}
                          <div style={{ padding: '1rem', border: '4px solid var(--color-red)', background: '#fef2f2' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                              <EyeOff style={{ width: 14, height: 14, color: 'var(--color-red)' }} />
                              <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-red)' }}>
                                Private Key
                              </span>
                            </div>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: '#666' }}>
                              ••••••••••••••••••••••••••••••••••••••••••••
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 28, height: 28, background: 'var(--color-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-primary)' }}>
                          <Unlock style={{ width: 14, height: 14, color: 'white' }} />
                        </div>
                        Public Key (Your Address)
                      </h3>
                      <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        Think of this as your bank account number. You can share it with anyone
                        so they can send you cryptocurrency. It&apos;s derived from your private
                        key using elliptic curve cryptography. Safe to share publicly.
                      </p>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 28, height: 28, background: 'var(--color-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-primary)' }}>
                          <Lock style={{ width: 14, height: 14, color: 'white' }} />
                        </div>
                        Private Key (Your Password)
                      </h3>
                      <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        This is your master password. It proves you own the wallet and lets you
                        sign transactions. If you lose it, you lose access to your funds forever.
                        If someone else gets it, they can drain your wallet. Never share it.
                      </p>
                    </div>
                    <div style={{ padding: '1rem', background: 'var(--color-yellow)', border: '4px solid var(--color-primary)' }}>
                      <p style={{ fontWeight: 700, fontSize: '0.85rem' }}>
                        🔑 Golden Rule: Your private key is the only thing standing between your
                        crypto and the rest of the world. Guard it like your life savings — because it is.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. BLOCKCHAIN VS TRADITIONAL DATABASE */}
            <div className="reveal" id="blockchain-vs-database">
              <div style={{ marginBottom: '2rem' }}>
                <div className="brutal-tag" style={{ background: '#eee', marginBottom: '1rem' }}>Comparison 04</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>BLOCKCHAIN vs TRADITIONAL DATABASE</h2>
              </div>
              <ComparisonCard
                titleLeft="Traditional DB"
                titleRight="Blockchain"
                accentLeft="#111111"
                accentRight="#22C55E"
                rows={[
                  {
                    category: 'Control',
                    left: 'Single administrator',
                    leftDetail: 'One company or DBA controls read/write access, schema, and data retention.',
                    leftIcon: 'x',
                    right: 'Decentralized governance',
                    rightDetail: 'No single entity has control. Network consensus determines the state.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Security',
                    left: 'Perimeter security',
                    leftDetail: 'Firewalls and access controls. If breached, all data is compromised.',
                    leftIcon: 'x',
                    right: 'Cryptographic security',
                    rightDetail: 'Every transaction is signed and hashed. Tampering breaks the chain.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Speed',
                    left: 'Thousands of TPS',
                    leftDetail: 'PostgreSQL handles 10,000+ TPS easily. Optimized for speed.',
                    leftIcon: 'check',
                    right: 'Limited throughput',
                    rightDetail: 'Ethereum does 15-30 TPS on L1. Trade-off for decentralization.',
                    rightIcon: 'x',
                  },
                  {
                    category: 'Ownership',
                    left: 'Company owns data',
                    leftDetail: 'Your data lives on their servers. They can delete, modify, or sell it.',
                    leftIcon: 'x',
                    right: 'Users own data',
                    rightDetail: 'On-chain data is immutable and public. You control your own assets.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Transparency',
                    left: 'Opaque operations',
                    leftDetail: 'You trust the operator. No way to verify what happens behind the scenes.',
                    leftIcon: 'x',
                    right: 'Fully transparent',
                    rightDetail: 'Every transaction is publicly auditable. Anyone can verify the state.',
                    rightIcon: 'check',
                  },
                  {
                    category: 'Trust',
                    left: 'Trust the institution',
                    leftDetail: 'You rely on the reputation and integrity of the company running the database.',
                    leftIcon: 'arrow',
                    right: 'Trust the math',
                    rightDetail: 'Cryptographic proofs and consensus algorithms replace institutional trust.',
                    rightIcon: 'check',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useEffect } from 'react'
import {
  ArrowRight,
  ArrowDown,
  BookOpen,
  Layers,
  Code2,
  Zap,
  Shield,
  DollarSign,
  Clock,
  TrendingUp,
} from 'lucide-react'
import Button from '../components/Button.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import BlockchainIllustration from '../components/BlockchainIllustration.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Home() {
  const containerRef = useScrollReveal()

  useEffect(() => {
    document.title = 'Web3 Explorer — Blockchain Education Platform'
  }, [])

  return (
    <div ref={containerRef}>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="grid-bg" style={{ minHeight: 'calc(100vh - 84px)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-main" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="lg:grid-cols-2">
            {/* Left — Content */}
            <div className="animate-fade-in-up">
              <div className="brutal-tag" style={{ background: 'var(--color-yellow)', marginBottom: '2rem' }}>
                Layer 2 · Arbitrum · Ethereum
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                marginBottom: '2rem',
              }}>
                BLOCKCHAIN
                <br />
                ISN&apos;T MAGIC.
                <br />
                <span style={{ color: 'var(--color-blue)' }}>IT&apos;S COMPUTER</span>
                <br />
                SCIENCE.
              </h1>

              <p style={{
                fontSize: '1.125rem',
                color: '#666',
                maxWidth: '540px',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}>
                Blockchain is a decentralized ledger that records transactions across thousands
                of computers. No single person controls it. Every block is linked to the previous
                one using cryptographic hashes, making tampering virtually impossible. It&apos;s not
                about hype — it&apos;s about mathematics, consensus, and trust in code.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Button to="/concepts" variant="primary">
                  Explore Concepts
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button to="/simulator" variant="outline">
                  Launch Simulator
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right — Blockchain Illustration */}
            <div className="hidden lg:flex animate-fade-in-up" style={{ justifyContent: 'center', animationDelay: '0.2s' }}>
              <BlockchainIllustration />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="animate-float" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#aaa' }}>Scroll</span>
          <br />
          <ArrowDown style={{ width: 20, height: 20, color: '#aaa', margin: '0.25rem auto 0' }} />
        </div>
      </section>

      {/* ═══════════════════ WHY LAYER 2 ═══════════════════ */}
      <section className="border-y-thick section-pad" style={{ background: 'white' }}>
        <div className="container-main">
          <div className="reveal" style={{ marginBottom: '4rem' }}>
            <div className="brutal-tag" style={{ background: 'var(--color-red)', color: 'white', marginBottom: '1.5rem' }}>
              The Problem
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '700px' }}>
              WHY ETHEREUM NEEDED{' '}
              <span style={{ color: 'var(--color-blue)' }}>LAYER 2</span>
            </h2>
          </div>

          {/* Problems */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              {
                icon: DollarSign,
                title: 'High Gas Fees',
                desc: 'Simple token transfers cost $20–$100+ during peak congestion. DeFi interactions and NFT mints became prohibitively expensive for most users.',
                color: 'var(--color-red)',
              },
              {
                icon: Clock,
                title: 'Slow Transactions',
                desc: 'Ethereum processes only 15–30 transactions per second. During high demand, transactions queue up for minutes or even hours.',
                color: 'var(--color-yellow)',
              },
              {
                icon: TrendingUp,
                title: 'Network Congestion',
                desc: 'Popular NFT drops and DeFi launches have brought the network to a standstill, pricing out everyday users and small-value transactions.',
                color: 'var(--color-primary)',
              },
            ].map((item, i) => (
              <div key={i} className="reveal brutal-card" style={{ padding: '2rem' }}>
                <div style={{
                  width: 48, height: 48,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '4px solid var(--color-primary)',
                  background: item.color,
                  marginBottom: '1.25rem',
                }}>
                  <item.icon style={{ width: 24, height: 24, color: 'white' }} strokeWidth={2.5} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution — Arbitrum */}
          <div className="reveal">
            <div className="brutal-tag" style={{ background: 'var(--color-green)', color: 'white', marginBottom: '1.5rem' }}>
              The Solution
            </div>
            <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
              ENTER <span style={{ color: 'var(--color-blue)' }}>ARBITRUM</span>
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'start' }} className="lg:grid-cols-2">
            {/* Explanation */}
            <div className="reveal">
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Arbitrum is an Optimistic Rollup — a Layer 2 scaling solution that bundles
                hundreds of transactions into a single batch, executes them off-chain, and posts
                only the compressed result back to Ethereum.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { value: '40,000 TPS', sub: 'Transaction throughput' },
                  { value: '~$0.01', sub: 'Average gas fee' },
                  { value: 'Ethereum L1', sub: 'Security inherited' },
                  { value: 'Full EVM', sub: 'Same Solidity code' },
                ].map((stat, i) => (
                  <div key={i} style={{ padding: '1rem', border: '4px solid var(--color-primary)', background: '#f9f9f7' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-blue)' }}>{stat.value}</p>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#888', marginTop: '0.25rem' }}>{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Flow */}
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* User */}
                <div style={{ width: 200, padding: '1.25rem', border: '4px solid var(--color-primary)', background: 'var(--color-yellow)', textAlign: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase' }}>User</p>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Initiates transaction</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.25rem 0' }}>
                  <div style={{ width: 4, height: 32, background: 'var(--color-primary)' }} />
                  <ArrowDown style={{ width: 24, height: 24 }} />
                </div>

                {/* Arbitrum */}
                <div style={{ width: 200, padding: '1.25rem', border: '4px solid var(--color-primary)', background: 'var(--color-blue)', textAlign: 'center', color: 'white' }}>
                  <p style={{ fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase' }}>Arbitrum</p>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.8 }}>Processes & batches</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.25rem 0' }}>
                  <div style={{ width: 4, height: 32, background: 'var(--color-primary)' }} />
                  <ArrowDown style={{ width: 24, height: 24 }} />
                </div>

                {/* Ethereum */}
                <div style={{ width: 200, padding: '1.25rem', border: '4px solid var(--color-primary)', background: 'var(--color-primary)', textAlign: 'center', color: 'white' }}>
                  <p style={{ fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase' }}>Ethereum</p>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.6 }}>Final settlement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section className="section-pad">
        <div className="container-main">
          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <div className="brutal-tag" style={{ background: 'var(--color-primary)', color: 'white', marginBottom: '1.5rem' }}>
              What You&apos;ll Learn
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              THREE PILLARS
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="reveal">
              <FeatureCard
                icon={BookOpen}
                title="Learn Blockchain"
                description="Understand how blocks, hashes, and consensus mechanisms work at a fundamental level. No jargon — just clear explanations backed by interactive simulations."
                color="var(--color-blue)"
              />
            </div>
            <div className="reveal">
              <FeatureCard
                icon={Layers}
                title="Understand Ethereum"
                description="From smart contracts to gas fees, from Layer 1 to Layer 2 scaling — learn how Ethereum powers the decentralized economy and why it matters."
                color="var(--color-yellow)"
              />
            </div>
            <div className="reveal">
              <FeatureCard
                icon={Code2}
                title="Build Like a Web3 Dev"
                description="Go beyond theory. Use our block simulator to mine blocks with real SHA-256 hashing, understand proof of work, and see how blockchain immutability works."
                color="var(--color-green)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container-main">
          <div className="reveal brutal-card-static" style={{ padding: 'clamp(2.5rem, 5vw, 5rem)', background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              READY TO BUILD ON{' '}
              <span style={{ color: 'var(--color-yellow)' }}>WEB3</span>?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Dive into interactive lessons, real-time crypto data, and hands-on
              blockchain simulations. The future of the internet is being built right now.
            </p>
            <Button to="/concepts" variant="yellow">
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

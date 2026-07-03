import { useState, useEffect, useCallback } from 'react'
import { Hash, Database, Pickaxe, Check, AlertTriangle } from 'lucide-react'
import { computeBlockHash, mineBlock } from '../utils/crypto.js'

export default function Block({
  blockNumber,
  previousHash,
  onHashChange,
  onMiningStateChange,
  isChainValid = true,
}) {
  const [data, setData] = useState(blockNumber === 1 ? 'Alice sends 5 ETH to Bob' : 'Bob sends 2 ETH to Charlie')
  const [nonce, setNonce] = useState(0)
  const [hash, setHash] = useState('')
  const [isMining, setIsMining] = useState(false)
  const [isMined, setIsMined] = useState(false)
  const [miningProgress, setMiningProgress] = useState(null)

  const updateHash = useCallback(async () => {
    const newHash = await computeBlockHash(data, nonce, previousHash)
    setHash(newHash)
    if (onHashChange) onHashChange(newHash)
    if (isMined && !newHash.startsWith('00')) {
      setIsMined(false)
    }
  }, [data, nonce, previousHash, onHashChange, isMined])

  useEffect(() => {
    updateHash()
  }, [updateHash])

  const handleMine = async () => {
    setIsMining(true)
    setIsMined(false)
    if (onMiningStateChange) onMiningStateChange(true)

    try {
      const result = await mineBlock(data, previousHash, '00', (progress) => {
        setMiningProgress(progress)
        setNonce(progress.nonce)
      })

      setNonce(result.nonce)
      setHash(result.hash)
      setIsMined(true)
      if (onHashChange) onHashChange(result.hash)
    } finally {
      setIsMining(false)
      setMiningProgress(null)
      if (onMiningStateChange) onMiningStateChange(false)
    }
  }

  const handleDataChange = (e) => {
    setData(e.target.value)
    setIsMined(false)
    setNonce(0)
  }

  const headerBg = isMined ? 'var(--color-green)' : isMining ? 'var(--color-blue)' : 'var(--color-primary)'
  const borderColor = isMined ? 'var(--color-green)' : 'var(--color-primary)'

  return (
    <div
      className={isMining ? 'mining-active' : ''}
      style={{
        background: 'white',
        border: `4px solid ${borderColor}`,
        boxShadow: '8px 8px 0px var(--color-primary)',
        transition: 'all 0.3s',
      }}
      id={`block-${blockNumber}`}
      role="region"
      aria-label={`Block ${blockNumber}`}
    >
      {/* Header */}
      <div style={{
        background: headerBg, color: 'white',
        padding: '1rem 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.3s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Database style={{ width: 20, height: 20 }} strokeWidth={2.5} />
          <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>BLOCK #{blockNumber}</span>
        </div>
        {isMined && (
          <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Check style={{ width: 18, height: 18 }} strokeWidth={3} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mined</span>
          </div>
        )}
        {!isChainValid && !isMining && (
          <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-yellow)' }}>
            <AlertTriangle style={{ width: 18, height: 18 }} strokeWidth={2.5} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Invalid</span>
          </div>
        )}
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Data Input */}
        <div>
          <label htmlFor={`data-${blockNumber}`} style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '0.5rem' }}>
            Data
          </label>
          <textarea
            id={`data-${blockNumber}`}
            value={data}
            onChange={handleDataChange}
            className="block-input"
            rows={3}
            disabled={isMining}
            aria-label={`Block ${blockNumber} data input`}
          />
        </div>

        {/* Nonce */}
        <div>
          <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '0.5rem' }}>
            Nonce
          </label>
          <div className="block-field" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
            {nonce}
          </div>
        </div>

        {/* Previous Hash */}
        <div>
          <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '0.5rem' }}>
            Previous Hash
          </label>
          <div className="block-field" style={{ fontSize: '0.7rem', color: '#666' }}>
            {previousHash || '0'.repeat(64)}
          </div>
        </div>

        {/* Current Hash */}
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '0.5rem' }}>
            <Hash style={{ width: 12, height: 12 }} />
            Hash
          </label>
          <div style={{
            padding: '1rem',
            border: `4px solid ${isMined ? 'var(--color-green)' : isMining ? 'var(--color-blue)' : 'var(--color-primary)'}`,
            background: isMined ? '#f0fdf4' : isMining ? '#eff6ff' : '#f9f9f7',
            fontFamily: 'monospace',
            fontSize: '0.7rem',
            wordBreak: 'break-all',
            color: isMined ? 'var(--color-green)' : isMining ? 'var(--color-blue)' : '#666',
            transition: 'all 0.3s',
          }}>
            {isMining && miningProgress ? miningProgress.hash : hash || 'Mining required...'}
          </div>
        </div>

        {/* Status */}
        {isMined && (
          <div className="animate-fade-in" style={{ padding: '1rem', background: '#f0fdf4', border: '4px solid var(--color-green)' }}>
            <p style={{ fontWeight: 700, color: 'var(--color-green)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check style={{ width: 16, height: 16 }} strokeWidth={3} />
              BLOCK SUCCESSFULLY MINED
            </p>
            <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>
              Hash starts with &quot;00&quot; — valid proof of work achieved.
            </p>
          </div>
        )}

        {!isChainValid && !isMining && (
          <div className="animate-fade-in" style={{ padding: '1rem', background: '#fef2f2', border: '4px solid var(--color-red)' }}>
            <p style={{ fontWeight: 700, color: 'var(--color-red)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle style={{ width: 16, height: 16 }} strokeWidth={3} />
              CHAIN BROKEN
            </p>
            <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>
              The previous block&apos;s hash has changed, invalidating this block.
              This demonstrates blockchain immutability — changing any prior block
              breaks the entire chain.
            </p>
          </div>
        )}

        {/* Mine Button */}
        <button
          onClick={handleMine}
          disabled={isMining}
          className={`brutal-btn ${isMining ? 'brutal-btn-blue' : isMined ? '' : 'brutal-btn-primary'}`}
          style={{
            width: '100%',
            justifyContent: 'center',
            fontSize: '1rem',
            ...(isMined && !isMining ? { background: 'var(--color-green)', color: 'white' } : {}),
            ...(isMining ? { cursor: 'wait' } : {}),
          }}
          aria-label={`Mine block ${blockNumber}`}
        >
          <Pickaxe style={{ width: 20, height: 20 }} className={isMining ? 'animate-spin-slow' : ''} />
          {isMining ? `Mining... Nonce: ${nonce}` : isMined ? 'Re-Mine Block' : 'Mine Block'}
        </button>
      </div>
    </div>
  )
}

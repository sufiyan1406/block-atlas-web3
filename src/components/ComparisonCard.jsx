import { ArrowRight, Check, X as XIcon } from 'lucide-react'

export default function ComparisonCard({
  titleLeft,
  titleRight,
  rows,
  accentLeft = '#2563EB',
  accentRight = '#FFD400',
}) {
  return (
    <div className="brutal-card-static" style={{ overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', borderBottom: '4px solid var(--color-primary)' }}>
        <div style={{ padding: '1.5rem', background: accentLeft, display: 'flex', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
            {titleLeft}
          </h3>
        </div>
        <div style={{ background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em' }}>VS</span>
        </div>
        <div style={{ padding: '1.5rem', background: accentRight, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '-0.01em', textAlign: 'right' }}>
            {titleRight}
          </h3>
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, index) => (
        <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 60px 1fr',
            borderBottom: index < rows.length - 1 ? '2px solid #eee' : 'none',
          }}
          className="comparison-row"
        >
          {/* Left */}
          <div style={{ padding: '1.25rem 1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{
                marginTop: 4, width: 20, height: 20, flexShrink: 0,
                background: row.leftIcon === 'check' ? '#dbeafe' : row.leftIcon === 'x' ? '#fee2e2' : '#f3f4f6',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {row.leftIcon === 'check' ? (
                  <Check style={{ width: 12, height: 12, color: 'var(--color-blue)' }} strokeWidth={3} />
                ) : row.leftIcon === 'x' ? (
                  <XIcon style={{ width: 12, height: 12, color: 'var(--color-red)' }} strokeWidth={3} />
                ) : (
                  <ArrowRight style={{ width: 12, height: 12, color: 'var(--color-primary)' }} strokeWidth={3} />
                )}
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>{row.left}</p>
                {row.leftDetail && (
                  <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem', lineHeight: 1.5 }}>{row.leftDetail}</p>
                )}
              </div>
            </div>
          </div>

          {/* Category */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#fafafa', borderLeft: '2px solid #eee', borderRight: '2px solid #eee',
          }}>
            <span style={{
              fontSize: '0.55rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.06em', color: '#bbb', writingMode: 'vertical-lr',
              textOrientation: 'mixed', textAlign: 'center',
            }}>
              {row.category}
            </span>
          </div>

          {/* Right */}
          <div style={{ padding: '1.25rem 1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{
                marginTop: 4, width: 20, height: 20, flexShrink: 0,
                background: row.rightIcon === 'check' ? '#dcfce7' : row.rightIcon === 'x' ? '#fee2e2' : '#f3f4f6',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {row.rightIcon === 'check' ? (
                  <Check style={{ width: 12, height: 12, color: 'var(--color-green)' }} strokeWidth={3} />
                ) : row.rightIcon === 'x' ? (
                  <XIcon style={{ width: 12, height: 12, color: 'var(--color-red)' }} strokeWidth={3} />
                ) : (
                  <ArrowRight style={{ width: 12, height: 12, color: 'var(--color-primary)' }} strokeWidth={3} />
                )}
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>{row.right}</p>
                {row.rightDetail && (
                  <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem', lineHeight: 1.5 }}>{row.rightDetail}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

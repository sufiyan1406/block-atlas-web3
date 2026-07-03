export default function FeatureCard({ icon: Icon, title, description, color = 'var(--color-blue)' }) {
  return (
    <div className="brutal-card" style={{ padding: '2rem' }}>
      <div
        style={{
          width: 56, height: 56,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '4px solid var(--color-primary)',
          background: color,
          marginBottom: '1.25rem',
        }}
      >
        <Icon style={{ width: 28, height: 28, color: 'white' }} strokeWidth={2.5} />
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.2 }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6 }}>{description}</p>
    </div>
  )
}

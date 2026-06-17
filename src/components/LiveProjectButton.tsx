interface Props {
  label?: string
  href?: string
}

export default function LiveProjectButton({ label = 'Ver Proyecto', href = '#' }: Props) {
  return (
    
     <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '0.7rem 1.75rem', borderRadius: 9999,
        border: '2px solid #D7E2EA', background: 'transparent',
        color: '#D7E2EA', fontFamily: 'Kanit, sans-serif',
        fontWeight: 500, textTransform: 'uppercase' as const,
        letterSpacing: '0.1em', fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
        cursor: 'pointer', textDecoration: 'none',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(215,226,234,0.1)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      {label} ↗
    </a>
  )
}
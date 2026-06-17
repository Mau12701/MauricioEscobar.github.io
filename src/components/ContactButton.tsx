export default function ContactButton({
  label = 'Contact Me',
  href = '#contact',
}: {
  label?: string
  href?: string
}) {
  return (
    
     <a href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.85rem 2rem',
        borderRadius: 9999,
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: -3,
        color: '#fff',
        fontFamily: 'Kanit, sans-serif',
        fontWeight: 500,
        textTransform: 'uppercase' as const,
        letterSpacing: '0.12em',
        fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
        textDecoration: 'none',
        transition: 'transform 0.2s',
        cursor: 'pointer',
      }}
    >
      {label}
    </a>
  )
}
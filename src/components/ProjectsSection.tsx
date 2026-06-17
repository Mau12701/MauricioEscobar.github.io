import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'

const projects = [
  {
    num: '01',
    cat: 'Web · Python',
    name: 'Proyecto',
    href: '#',
    imgs: ['screenshot 1', 'screenshot 2', 'pantalla principal'],
  },
  {
    num: '02',
    cat: 'Redes · Cisco',
    name: 'Topología de red empresarial',
    href: '#',
    imgs: ['diagrama red', 'config CLI', 'topología completa'],
  },
  {
    num: '03',
    cat: 'Desktop · C# / Java',
    name: 'Aplicación de escritorio',
    href: '#',
    imgs: ['UI vista 1', 'UI vista 2', 'pantalla principal'],
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: '#0C0C0C',
        borderRadius: '50px 50px 0 0',
        marginTop: -20,
        position: 'relative',
        zIndex: 3,
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      <FadeIn>
        <p style={{ fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(215,226,234,0.4)', marginBottom: 8 }}>
          // proyectos
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          className="hero-heading"
          style={{
            fontSize: 'clamp(3rem, 12vw, 10rem)',
            fontWeight: 900, textTransform: 'uppercase',
            letterSpacing: '-0.03em', lineHeight: 0.9,
            marginBottom: '3rem',
          }}
        >
          Project
        </h2>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.1}>
            <div style={{
              position: 'sticky', top: `${96 + i * 24}px`,
              border: '2px solid rgba(215,226,234,0.15)',
              borderRadius: 40, padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              background: '#0C0C0C',
            }}>
              {/* header */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', flexWrap: 'wrap',
                gap: '1rem', marginBottom: '1.5rem',
              }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(215,226,234,0.5)', marginBottom: 4 }}>
                    {p.cat}
                  </div>
                  <div style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', color: '#D7E2EA' }}>
                    {p.name}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                  <div style={{ fontWeight: 900, color: 'rgba(215,226,234,0.15)', fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1 }}>
                    {p.num}
                  </div>
                  <LiveProjectButton href={p.href} />
                </div>
              </div>

              {/* imágenes */}
              <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '1rem', height: 300 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[p.imgs[0], p.imgs[1]].map((label, j) => (
                    <div key={j} style={{
                      flex: 1, borderRadius: 20,
                      background: 'rgba(215,226,234,0.04)',
                      border: '1px solid rgba(215,226,234,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'monospace', fontSize: 11,
                      color: 'rgba(215,226,234,0.2)', letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      {label}
                    </div>
                  ))}
                </div>
                <div style={{
                  borderRadius: 20, height: '100%',
                  background: 'rgba(215,226,234,0.04)',
                  border: '1px solid rgba(215,226,234,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'monospace', fontSize: 11,
                  color: 'rgba(215,226,234,0.2)', letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {p.imgs[2]}
                </div>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
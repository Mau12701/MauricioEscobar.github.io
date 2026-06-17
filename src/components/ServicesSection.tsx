import FadeIn from './FadeIn'

const services = [
  {
    num: '01',
    name: 'Desarrollo Web',
    desc: 'Construcción de interfaces y APIs modernas. Del frontend al servidor, con atención al detalle y al rendimiento.',
    tags: ['HTML', 'CSS', 'JavaScript', 'FastAPI'],
  },
  {
    num: '02',
    name: 'Backend & Lenguajes',
    desc: 'Lógica de negocio, bases de datos y automatización con múltiples lenguajes orientados a objetos.',
    tags: ['Python', 'Java', 'C#', 'Node.js'],
  },
  {
    num: '03',
    name: 'Redes LAN & WAN',
    desc: 'Diseño, configuración y administración de infraestructura de red. Switches, routers, VLANs y enrutamiento.',
    tags: ['Cisco IOS', 'VLAN', 'OSPF', 'Packet Tracer'],
  },
  {
    num: '04',
    name: 'Herramientas & Dev',
    desc: 'Control de versiones y flujo de trabajo colaborativo para proyectos de software individuales y en equipo.',
    tags: ['Git', 'GitHub', 'VS Code', 'Linux'],
  },
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
      style={{
        background: '#ffffff',
        borderRadius: '50px 50px 0 0',
        marginTop: -20,
        position: 'relative',
        zIndex: 2,
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      <FadeIn>
        <p style={{ fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 8 }}>
          // habilidades
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 style={{
          fontSize: 'clamp(3rem, 12vw, 10rem)',
          fontWeight: 900, textTransform: 'uppercase',
          letterSpacing: '-0.03em', lineHeight: 0.9,
          color: '#0C0C0C', marginBottom: '3rem',
        }}>
          Services
        </h2>
      </FadeIn>

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '2rem',
              padding: '2rem 0',
              borderBottom: '1px solid rgba(12,12,12,0.1)',
            }}>
              {/* número */}
              <div style={{
                fontWeight: 900, lineHeight: 1, color: '#0C0C0C',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                minWidth: 100, textAlign: 'right', opacity: 0.15,
              }}>
                {s.num}
              </div>

              {/* info */}
              <div style={{ paddingTop: '0.5rem', flex: 1 }}>
                <div style={{
                  fontWeight: 500, textTransform: 'uppercase',
                  fontSize: 'clamp(1rem, 2vw, 1.8rem)',
                  marginBottom: '0.4rem', color: '#0C0C0C',
                }}>
                  {s.name}
                </div>
                <div style={{
                  fontWeight: 300, fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)',
                  opacity: 0.55, lineHeight: 1.6, maxWidth: 500, color: '#0C0C0C',
                  marginBottom: '0.75rem',
                }}>
                  {s.desc}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'monospace', fontSize: 11,
                      padding: '3px 10px', borderRadius: 4,
                      background: 'rgba(12,12,12,0.07)',
                      border: '1px solid rgba(12,12,12,0.12)',
                      color: '#333',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
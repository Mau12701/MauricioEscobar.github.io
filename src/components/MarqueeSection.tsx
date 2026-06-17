const items = [
  'Python', 'FastAPI', 'JavaScript', 'Java', 'C#',
  'HTML & CSS', 'Cisco IOS', 'VLAN & WAN', 'Node.js', 'Git & GitHub',
]

function Track({ reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex gap-8 w-max"
      style={{ animation: `marquee 25s linear infinite ${reverse ? 'reverse' : ''}` }}>
      {doubled.map((item, i) => (
        <span key={i} className="flex items-center gap-4 font-mono text-[13px]
          uppercase tracking-widest whitespace-nowrap text-[#D7E2EA]/30">
          {item}
          <span className="w-1 h-1 rounded-full bg-[#63b3ff] inline-block" />
        </span>
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <div className="overflow-hidden py-12 border-y border-[#D7E2EA]/[0.06]">
      <Track />
    </div>
  )
}
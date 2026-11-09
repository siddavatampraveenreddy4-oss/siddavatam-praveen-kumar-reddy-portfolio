import { leadershipList } from '../data/portfolioData'

// Individual timeline item component
function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12 last:mb-0 pl-10 md:pl-0">
      {/* Red glowing dot positioned directly on the vertical timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.8)] border-2 border-white z-10" />

      {/* Even index: Card on the LEFT on md+ screens */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full md:w-[45%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:text-right shadow-lg hover:border-red-500/30 transition-all duration-300"
          >
            {/* Badge pill */}
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 uppercase tracking-widest text-xs font-semibold mb-3">
              {item.badge}
            </span>
            {/* Title with hover color change */}
            <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors mb-1">
              {item.title}
            </h3>
            {/* Monospace uppercase role */}
            <p className="font-mono text-xs uppercase text-red-400 tracking-wider mb-3">
              {item.role}
            </p>
            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
          {/* Empty spacer on the right */}
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        /* Odd index: Card on the RIGHT on md+ screens */
        <>
          {/* Empty spacer on the left */}
          <div className="hidden md:block md:w-[45%]" />
          <div
            data-aos="fade-left"
            className="w-full md:w-[45%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:text-left shadow-lg hover:border-red-500/30 transition-all duration-300"
          >
            {/* Badge pill */}
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 uppercase tracking-widest text-xs font-semibold mb-3">
              {item.badge}
            </span>
            {/* Title with hover color change */}
            <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors mb-1">
              {item.title}
            </h3>
            {/* Monospace uppercase role */}
            <p className="font-mono text-xs uppercase text-red-400 tracking-wider mb-3">
              {item.role}
            </p>
            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default function Leadership() {
  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-28 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top torn-paper divider transitioning from red to dark */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 fill-[#ff2a2a] rotate-180 -translate-y-[1px] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Centred Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20">
        <span className="px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-mono uppercase tracking-widest inline-block mb-4">
          Activities
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Leadership & Engagement
        </h2>
        <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
          Collaborative initiatives, peer mentoring, and community engagements in data analysis.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="max-w-5xl mx-auto relative">
        {/* 2px Gradient vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

        {/* Timeline items list */}
        <div className="relative z-10">
          {leadershipList.map((item, index) => (
            <LeadershipItem
              key={item.title + index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

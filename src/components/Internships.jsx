import { internshipsList } from '../data/portfolioData'

// Individual internship card component
function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-xl flex flex-col justify-between"
    >
      <div>
        {/* Top row: Duration and mini badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs uppercase text-white/50 tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/15 text-white/90 text-[10px] font-mono uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role and organization */}
        <h3 className="text-2xl font-black text-white leading-tight mb-1">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-sm font-bold tracking-wider mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained list */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 mb-3">
            Skills Gained:
          </h4>
          <ul className="space-y-2">
            {intern.skills.map((skill, sIdx) => (
              <li
                key={sIdx}
                className="flex items-start space-x-2 text-sm text-white/90"
              >
                <span className="text-black font-black text-base leading-none select-none">
                  •
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies bottom footer */}
      <div className="pt-4 border-t border-white/10 mt-auto">
        <span className="text-[10px] font-mono uppercase tracking-wider text-white/60 block mb-2">
          Technologies:
        </span>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Internships() {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top torn-paper SVG divider flowing from previous dark section */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180 -translate-y-[1px] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Decorative pulsing black star bottom-left */}
      <svg
        className="absolute bottom-10 left-8 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Centred Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-red-100 text-base md:text-lg max-w-2xl mx-auto">
          Practical hands-on industry experience applying data preprocessing, analysis, and problem-solving.
        </p>
      </div>

      {/* Grid of internship cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {internshipsList.map((intern, index) => (
          <InternshipCard
            key={intern.organization + index}
            intern={intern}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

import { intelligenceTeasers } from '@/data/content';

export default function IntelligenceTeaser() {
  return (
    <section id="intelligence" className="relative py-36 md:py-44 bg-[#fafaf8] overflow-hidden">
      {/* ── Top ornamental rule ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

      {/* ── Section Header ── */}
      <div className="text-center mb-24 md:mb-32">
        <span className="inline-block text-xs tracking-[.25em] uppercase text-[#c4a962] mb-5 font-medium">
          Market Intelligence
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-tight">
          Institutional <span className="text-[#c4a962]">Foresight</span>
        </h2>
        <p className="text-sm md:text-base text-[#6b6b6b] mt-6 max-w-xl mx-auto leading-relaxed">
          Proprietary market intelligence from the OBC atelier. Insights that shape real estate strategy.
        </p>
      </div>

      {/* ── Report Cards ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {intelligenceTeasers.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white border border-[#d4c5a0]/20 hover:border-[#c4a962]/40 transition-colors duration-500 rounded-sm overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* Thin gold top accent bar */}
              <div className="h-[2px] bg-[#c4a962]/50 group-hover:bg-[#c4a962] transition-colors duration-500" />

              <div className="flex flex-col flex-1 p-8">
                {/* Report type label */}
                <span className="text-[10px] tracking-[.2em] uppercase text-[#c4a962] font-medium mb-4">
                  {item.type}
                </span>

                {/* Report title */}
                <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-4 leading-snug group-hover:text-[#c4a962] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#6b6b6b] leading-relaxed mb-8 flex-1">
                  {item.excerpt}
                </p>

                {/* CTA link */}
                <span className="inline-flex items-center text-sm font-medium text-[#c4a962] hover:text-[#b89b4a] transition-colors cursor-pointer mt-auto">
                  {item.cta}
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom ornamental rule ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
    </section>
  );
}
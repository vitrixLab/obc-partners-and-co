import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-36 md:py-44 bg-[#fafaf8] overflow-hidden">
      {/* ── Top ornamental rule ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

      {/* ── Section Header ── */}
      <div className="text-center mb-24 md:mb-32">
        <span className="inline-block text-xs tracking-[.25em] uppercase text-[#c4a962] mb-5 font-medium">
          Words of Trust
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-tight">
          From Those We’ve <span className="text-[#c4a962]">Served</span>
        </h2>
      </div>

      {/* ── Testimonials Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* ── Gold opening mark ── */}
              <div className="mb-6 text-[#c4a962] text-5xl font-serif leading-none opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                “
              </div>

              {/* ── Quote ── */}
              <blockquote className="flex-1 text-base md:text-lg text-[#6b6b6b] leading-relaxed italic mb-8">
                {t.quote}
              </blockquote>

              {/* ── Thin gold divider ── */}
              <div className="w-10 h-[1px] bg-[#c4a962]/40 mb-5 group-hover:w-16 group-hover:bg-[#c4a962]/70 transition-all duration-500" />

              {/* ── Attribution ── */}
              <div>
                <div className="text-sm font-semibold text-[#1a1a1a] tracking-wide">
                  {t.name}
                </div>
                <div className="text-xs text-[#999] mt-1 tracking-wider uppercase">
                  {t.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom ornamental rule ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
    </section>
  );
};
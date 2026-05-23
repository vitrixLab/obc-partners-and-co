import { trustContent } from '@/data/content';

export default function Trust() {
  return (
    <section id="trust" className="relative py-36 md:py-44 bg-[#fafaf8] overflow-hidden">
      {/* ── Top ornamental rule ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

      {/* ── Section Header ── */}
      <div className="text-center mb-20 md:mb-28">
        <span className="inline-block text-xs tracking-[.25em] uppercase text-[#c4a962] mb-5 font-medium">
          Trust &amp; Assurance
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-tight">
          The OBC <span className="text-[#c4a962]">Standard</span>
        </h2>
      </div>

      {/* ── Trust Seals ── */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
          {[
            {
              label: 'ISO 27001 Aligned',
              icon: (
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 stroke-[#6b6b6b] group-hover:stroke-[#c4a962] transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              ),
            },
            {
              label: '100% Confidential',
              icon: (
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 stroke-[#6b6b6b] group-hover:stroke-[#c4a962] transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
            {
              label: 'Bespoke Strategy',
              icon: (
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 stroke-[#6b6b6b] group-hover:stroke-[#c4a962] transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              ),
            },
          ].map((seal, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 p-6 rounded-lg border border-[#d4c5a0]/30 bg-white/60 hover:border-[#c4a962]/60 hover:bg-white transition-all duration-500 group min-w-[160px]"
            >
              <div className="group-hover:scale-110 transition-transform duration-500">
                {seal.icon}
              </div>
              <span className="text-xs tracking-[.15em] uppercase text-[#1a1a1a] font-medium text-center">
                {seal.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Descriptive text ── */}
        <p className="text-center text-lg md:text-xl text-[#6b6b6b] mb-4 font-serif italic">
          {trustContent.heading}
        </p>
        <p className="text-center text-sm text-[#999] mb-14 max-w-2xl mx-auto leading-relaxed">
          {trustContent.text}
        </p>

        {/* ── Central Tagline ── */}
        <div className="text-center">
          <div className="w-12 h-[1px] bg-[#c4a962]/50 mx-auto mb-6" />
          <p className="text-3xl md:text-4xl font-serif italic text-[#c4a962] leading-relaxed tracking-tight">
            {trustContent.tagline}
          </p>
          <div className="w-12 h-[1px] bg-[#c4a962]/50 mx-auto mt-6" />
        </div>
      </div>

      {/* ── Bottom ornamental rule ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
    </section>
  );
}
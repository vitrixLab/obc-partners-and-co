import { offerContent } from '@/data/content';

export default function Offer() {
  // Highlight the word "Advisory" in gold, if it appears in the heading
  const headingParts = offerContent.heading.split('Advisory');

  return (
    <section id="offer" className="relative py-36 md:py-44 bg-[#1a1a1a] overflow-hidden">
      {/* ── Top ornamental rule ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

      {/* ── Subtle grain texture ── */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        {/* Overline */}
        <span className="inline-block text-xs tracking-[.3em] uppercase text-[#c4a962] mb-6 font-medium opacity-90">
          Private Engagement
        </span>

        {/* Headline with optional gold word */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          {headingParts.length > 1 ? (
            <>
              {headingParts[0]}
              <span className="text-[#c4a962]">Advisory</span>
              {headingParts[1]}
            </>
          ) : (
            offerContent.heading
          )}
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-[#a0a0a0] mb-12 max-w-xl mx-auto leading-relaxed">
          {offerContent.text}
        </p>

        {/* CTA Button — gold */}
        <a
          href="#contact"
          className="inline-block bg-[#c4a962] text-[#1a1a1a] font-semibold py-4 px-14 rounded-sm tracking-wider hover:bg-[#b89b4a] transition-all duration-300 hover:scale-105 shadow-[0_2px_20px_rgba(196,169,98,0.2)]"
        >
          {offerContent.cta}
        </a>

        {/* Microcopy */}
        <p className="mt-6 text-sm text-[#888]">
          No obligation. Completely confidential.
        </p>
      </div>

      {/* ── Bottom ornamental rule ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
    </section>
  );
}
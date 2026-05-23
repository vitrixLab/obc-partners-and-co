import { finalCtaContent } from '@/data/content';

export default function FinalCta() {
  return (
    <section className="relative py-36 md:py-44 bg-[#fafaf8] overflow-hidden">
      {/* ── Top ornamental rule ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        {/* Thin gold rule above headline */}
        <div className="w-10 h-[1px] bg-[#c4a962]/60 mx-auto mb-8" />

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] mb-10 leading-tight">
          {finalCtaContent.headline}
        </h2>

        {/* Button — gold with subtle shadow */}
        <a
          href="#contact"
          className="inline-block bg-[#c4a962] text-[#1a1a1a] font-semibold py-4 px-14 rounded-sm tracking-wider hover:bg-[#b89b4a] transition-all duration-300 hover:scale-105 shadow-[0_2px_20px_rgba(196,169,98,0.2)]"
        >
          {finalCtaContent.buttonText}
        </a>

        {/* Microcopy */}
        <p className="mt-6 text-sm text-[#999]">
          {finalCtaContent.microcopy}
        </p>
      </div>

      {/* ── Bottom ornamental rule ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
    </section>
  );
}
import { heroContent } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-architecture.avif')" }}
      >
        {/* Ken Burns slow zoom – disabled for reduced motion */}
        <div className="motion-safe:animate-kenburns absolute inset-0" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-30" />

      {/* Dark gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white">
        
        {/* Overline */}
        <span className="inline-block text-xs md:text-sm tracking-[.3em] uppercase text-[#c4a962] mb-6 font-medium opacity-90 animate-fade-up">
          Private Spatial Advisory
        </span>

        {/* Top ornamental rule */}
        <div className="w-12 h-[1px] bg-[#c4a962]/70 mx-auto mb-8 animate-fade-up animate-fade-up-delay-1" />

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8 tracking-wide animate-fade-up text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.3)]">
          {heroContent.headline}
        </h1>

        {/* Bottom ornamental rule */}
        <div className="w-12 h-[1px] bg-[#c4a962]/70 mx-auto mb-8 animate-fade-up animate-fade-up-delay-1" />

        {/* Subheadline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed animate-fade-up animate-fade-up-delay-2">
          {heroContent.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up animate-fade-up-delay-3">
          {/* Primary – gold background, dark text */}
          <a
            href="#contact"
            className="inline-block bg-[#c4a962] text-[#1a1a1a] font-semibold py-4 px-12 rounded-sm tracking-wider hover:bg-[#b89b4a] transition-all duration-300 hover:scale-105"
          >
            {heroContent.primaryCta}
          </a>
          {/* Secondary – gold outline, white text */}
          <a
            href="#contact"
            className="inline-block border border-[#c4a962] text-[#c4a962] font-semibold py-4 px-12 rounded-sm tracking-wider hover:bg-[#c4a962] hover:text-[#1a1a1a] transition-all duration-300"
          >
            {heroContent.secondaryCta}
          </a>
        </div>

        {/* Microcopy */}
        <p className="mt-6 text-sm text-[#c4a962]/70 animate-fade-up animate-fade-up-delay-3">
          All consultations and briefs are free & fully confidential.
        </p>
      </div>
    </section>
  );
}
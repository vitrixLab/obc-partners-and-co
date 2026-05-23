import { heroContent } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative bg-blueprint min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Soft gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8 tracking-wide animate-fade-up">
          {heroContent.headline}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 animate-fade-up animate-fade-up-delay-1">
          {heroContent.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up animate-fade-up-delay-2">
          <a
            href="#contact"
            className="inline-block bg-accent text-white font-medium py-3.5 px-10 rounded-md tracking-wider hover:bg-accent/90 transition-all duration-300 hover:scale-105"
          >
            {heroContent.primaryCta}
          </a>
          <a
            href="#contact"
            className="inline-block border border-white/60 text-white font-medium py-3.5 px-10 rounded-md tracking-wider hover:bg-white hover:text-graphite transition-all duration-300"
          >
            {heroContent.secondaryCta}
          </a>
        </div>
        
        <p className="mt-5 text-sm text-white/70 animate-fade-up animate-fade-up-delay-3">
          All consultations and briefs are free & fully confidential.
        </p>
      </div>
    </section>
  );
}
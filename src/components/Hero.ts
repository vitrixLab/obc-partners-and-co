'use client'; // if we need interactivity, though not strictly necessary here
import { heroContent } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
          {heroContent.headline}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          {heroContent.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="inline-block bg-accent text-white font-semibold py-3 px-8 rounded-md hover:bg-accent/90 transition-colors text-center">
            {heroContent.primaryCta}
          </a>
          <a href="#contact" className="inline-block border border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-darkgray transition-colors text-center">
            {heroContent.secondaryCta}
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-200">All consultations and briefs are free & fully confidential.</p>
      </div>
    </section>
  );
}
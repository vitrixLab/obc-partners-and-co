import { finalCtaContent } from '@/data/content';

export default function FinalCta() {
  return (
    <section className="py-32 bg-stone/30">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite mb-8">
          {finalCtaContent.headline}
        </h2>
        <a
          href="#contact"
          className="inline-block bg-accent text-white font-semibold py-4 px-12 rounded-md text-lg tracking-wide hover:bg-accent/90 transition-all duration-300 hover:scale-105"
        >
          {finalCtaContent.buttonText}
        </a>
        <p className="mt-4 text-sm text-muted/70">{finalCtaContent.microcopy}</p>
      </div>
    </section>
  );
}
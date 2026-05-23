import { trustContent } from '@/data/content';

export default function Trust() {
  return (
    <section className="py-24 bg-stone/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-8 opacity-60">
          {/* Simulated trust badges: replace with real logos later */}
          <span className="text-xs tracking-widest uppercase text-graphite/60">ISO 27001 Aligned</span>
          <span className="text-xs tracking-widest uppercase text-graphite/60">Confidential</span>
          <span className="text-xs tracking-widest uppercase text-graphite/60">Bespoke</span>
        </div>
        <p className="text-lg text-muted mb-4">{trustContent.heading}</p>
        <p className="text-sm text-muted/70 mb-8 max-w-xl mx-auto">{trustContent.text}</p>
        <p className="text-3xl font-serif italic text-accent">{trustContent.tagline}</p>
      </div>
    </section>
  );
}
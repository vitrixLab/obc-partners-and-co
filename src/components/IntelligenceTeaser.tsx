import { intelligenceTeasers } from '@/data/content';

export default function IntelligenceTeaser() {
  return (
    <section className="py-32 bg-stone/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite mb-4">
            Institutional Foresight
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Proprietary market intelligence from the OBC atelier. Insights that shape real estate strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {intelligenceTeasers.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-accent hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-xs tracking-widest uppercase text-muted mb-2">{item.type}</div>
              <h3 className="text-xl font-serif font-bold text-graphite mb-3">{item.title}</h3>
              <p className="text-sm text-muted mb-6">{item.excerpt}</p>
              <span className="inline-block text-sm font-medium text-accent hover:underline cursor-pointer">
                {item.cta} →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
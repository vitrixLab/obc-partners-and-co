import { trustStats } from '@/data/content';

export default function TrustBar() {
  return (
    <section className="bg-stone/40 border-b border-stone/30">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {trustStats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-graphite">
              {stat.value}
            </span>
            <span className="text-sm text-muted mt-1 tracking-wide uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
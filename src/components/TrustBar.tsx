import { trustStats } from '@/data/content';

export default function TrustBar() {
  return (
    <section className="relative bg-[#fafaf8]">
      {/* Top gold rule — links this bar to the hero’s aesthetic */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4a962]" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
          {trustStats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col items-center ${
                idx < trustStats.length - 1
                  ? 'md:border-r md:border-[#c4a962]/20'
                  : ''
              }`}
            >
              {/* Value */}
              <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] tracking-tight">
                {stat.value}
              </span>
              {/* Label */}
              <span className="mt-2 text-xs md:text-sm tracking-[.15em] uppercase text-[#6b6b6b] font-medium">
                {stat.label}
              </span>
              {/* Thin gold underline for the value */}
              <div className="mt-3 w-8 h-[1px] bg-[#c4a962]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
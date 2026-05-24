import React from 'react';
import { benefits } from '@/data/content';

const iconMap: Record<string, React.JSX.Element> = {
  'Deep Spatial Analysis': (
    <svg className="w-7 h-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
    </svg>
  ),
  'Curated Shortlists': (
    <svg className="w-7 h-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  'Strategic Negotiation': (
    <svg className="w-7 h-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 2m0 0l-2-2m2 2V2m8 10a6 6 0 11-12 0 6 6 0 0112 0z" />
    </svg>
  ),
  'Institutional Foresight': (
    <svg className="w-7 h-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  'Complete Archive': (
    <svg className="w-7 h-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
};

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-36 md:py-44 bg-[#fafaf8] overflow-hidden">
      {/* Subtle top ornamental rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32">
          <span className="inline-block text-xs tracking-[.25em] uppercase text-[#c4a962] mb-5 font-medium">
            Our Distinction
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-tight">
            Why OBC Partner <span className="text-[#c4a962]">&amp;</span> Co.
          </h2>
        </div>

        {/* Alternating Rows — Editorial Layout */}
        <div className="space-y-28 md:space-y-36">
          {benefits.map((b, idx) => {
            const isEven = idx % 2 === 0;          // topic on left  → left‑align text
            // const isOdd  = idx % 2 === 1;      // topic on right → right‑align text

            return (
              <div
                key={idx}
                className={`group flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-10 md:gap-20`}
              >
                {/* Number / Icon Column */}
                <div
                  className={`flex-shrink-0 flex flex-col items-center ${
                    isEven ? 'md:items-start' : 'md:items-end'
                  } w-full md:w-48`}
                >
                  {/* Thin vertical rule */}
                  <div className="hidden md:block w-[1px] h-16 bg-[#d4c5a0] mb-6" />
                  {/* Icon in a refined circle */}
                  <div className="w-16 h-16 rounded-full border border-[#d4c5a0]/50 flex items-center justify-center text-[#c4a962] group-hover:border-[#c4a962] group-hover:bg-[#c4a962]/5 transition-all duration-500">
                    {iconMap[b.title] ?? iconMap['Deep Spatial Analysis']}
                  </div>
                  {/* Index number */}
                  <span className="mt-4 text-xs tracking-[.2em] text-[#c4a962]/60 font-medium uppercase">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content Column — align text based on row */}
                <div
                  className={`flex-1 text-center ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] mb-5 tracking-tight">
                    {b.title}
                  </h3>
                  {/* Thin ornamental rule — position accordingly */}
                  <div
                    className={`w-12 h-[1px] bg-[#c4a962]/50 mb-6 ${
                      isEven
                        ? 'mx-auto md:mx-0'
                        : 'mx-auto md:mr-0 md:ml-auto'
                    }`}
                  />
                  <p
                    className={`text-base md:text-lg text-[#6b6b6b] leading-relaxed max-w-lg ${
                      isEven
                        ? 'mx-auto md:mx-0'
                        : 'mx-auto md:mr-0 md:ml-auto'
                    }`}
                  >
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom ornamental rule */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
    </section>
  );
};
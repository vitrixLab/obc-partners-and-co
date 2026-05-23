import React from 'react';
import { benefits } from '@/data/content';

const iconMap: Record<string, React.JSX.Element> = {
  'Deep Spatial Analysis': (
    <svg className="w-6 h-6 text-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
    </svg>
  ),
  'Curated Shortlists': (
    <svg className="w-6 h-6 text-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  default: (
    <svg className="w-6 h-6 text-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
};

export default function Benefits() {
  // ... rest of component unchanged
  return (
    <section id="benefits" className="py-32 bg-stone/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite mb-16 text-center">
          Why OBC Partner &amp; Co.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{iconMap[b.title] ?? iconMap.default}</div>
              <h3 className="text-xl font-serif font-bold text-graphite mb-3">{b.title}</h3>
              <p className="text-muted leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
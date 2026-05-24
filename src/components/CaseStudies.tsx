'use client';
import { useState } from 'react';
import { caseStudies } from '@/data/content';
import CaseStudyModal from './CaseStudyModal';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<
    (typeof caseStudies)[number] | null
  >(null);

  return (
    <>
      <section
        id="case-studies"
        className="relative py-36 md:py-44 bg-[#fafaf8] overflow-hidden"
      >
        {/* ── Top ornamental rule ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

        {/* ── Section Header ── */}
        <div className="text-center mb-24 md:mb-32">
          <span className="inline-block text-xs tracking-[.25em] uppercase text-[#c4a962] mb-5 font-medium">
            Selected Engagements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-tight">
            Work We’re Proud <span className="text-[#c4a962]">Of</span>
          </h2>
        </div>

        {/* ── Carousel ── */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Fade masks for a polished scroll hint */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#fafaf8] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#fafaf8] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-10 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#c4a962]/30">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[85vw] md:w-[420px] group"
              >
                {/* ── Image ── */}
                <div className="relative h-64 md:h-72 overflow-hidden mb-6 bg-[#e0dcd0]">
                  <div
                    className="absolute inset-0 bg-cover bg-center motion-safe:group-hover:scale-105 transition-transform duration-[2s] ease-out"
                    style={{ backgroundImage: `url(${cs.image})` }}
                  />
                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-[#c4a962]/0 group-hover:bg-[#c4a962]/10 transition-colors duration-500" />
                </div>

                {/* ── Content ── */}
                <div className="px-1">
                  {/* Industry */}
                  <span className="text-[10px] tracking-[.2em] uppercase text-[#c4a962] font-medium">
                    {cs.industry}
                  </span>
                  {/* Thin gold divider */}
                  <div className="w-8 h-[1px] bg-[#c4a962]/50 my-3" />
                  {/* Client */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1a1a1a] mb-4">
                    {cs.client}
                  </h3>
                  {/* Challenge & Result */}
                  <p className="text-sm text-[#6b6b6b] mb-2 leading-relaxed">
                    <span className="font-semibold text-[#1a1a1a]">
                      Challenge:
                    </span>{' '}
                    {cs.challenge}
                  </p>
                  <p className="text-sm text-[#6b6b6b] mb-5 leading-relaxed">
                    <span className="font-semibold text-[#1a1a1a]">Result:</span>{' '}
                    {cs.result}
                  </p>

                  {/* CTA – opens the modal */}
                  <button
                    onClick={() => setSelectedCase(cs)}
                    className="inline-block text-sm font-medium text-[#c4a962] hover:text-[#b89b4a] transition-colors cursor-pointer group/link"
                  >
                    Read the case
                    <span className="inline-block ml-1 transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom ornamental rule ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
      </section>

      {/* ── Modal ── */}
      <CaseStudyModal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        caseStudy={selectedCase}
      />
    </>
  );
}
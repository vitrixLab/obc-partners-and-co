'use client';
import { useState } from 'react';
import { faqContent } from '@/data/content';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-36 md:py-44 bg-[#fafaf8] overflow-hidden">
      {/* ── Top ornamental rule ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

      {/* ── Section Header ── */}
      <div className="text-center mb-24 md:mb-32">
        <span className="inline-block text-xs tracking-[.25em] uppercase text-[#c4a962] mb-5 font-medium">
          Common Questions
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-tight">
          You May <span className="text-[#c4a962]">Wonder</span>
        </h2>
      </div>

      {/* ── Accordion ── */}
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="space-y-4">
          {faqContent.map((item, idx) => (
            <div
              key={idx}
              className={`border rounded-sm transition-all duration-500 ${
                openIndex === idx
                  ? 'border-[#c4a962]/40 bg-white shadow-sm'
                  : 'border-[#d4c5a0]/20 bg-white/60 hover:border-[#c4a962]/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-[#1a1a1a] pr-4">
                  {item.question}
                </span>
                {/* Gold +/× icon */}
                <span className="flex-shrink-0 w-6 h-6 relative flex items-center justify-center text-[#c4a962]">
                  <svg
                    aria-hidden="true"
                    className={`w-4 h-4 transition-all duration-300 ${
                      openIndex === idx ? 'rotate-90 opacity-0' : 'opacity-100'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className={`absolute w-4 h-4 transition-all duration-300 ${
                      openIndex === idx ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4" />
                  </svg>
                </span>
              </button>

              {/* Answer panel */}
              <div
                id={`faq-answer-${idx}`}
                role="region"
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[#6b6b6b] leading-relaxed text-sm md:text-base">
                  {/* Thin gold rule above answer */}
                  <div className="w-8 h-[1px] bg-[#c4a962]/40 mb-4" />
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom ornamental rule ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
    </section>
  );
}
'use client';
import { useState, useRef } from 'react';
import { faqContent } from '@/data/content';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite mb-16 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqContent.map((item, idx) => (
            <div key={idx} className="border border-stone/50 rounded-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-graphite hover:bg-stone/20 transition-colors"
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 text-muted leading-relaxed">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import { useState } from 'react';
import { faqContent } from '@/data/content';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-darkgray mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqContent.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-darkgray hover:bg-gray-50 transition-colors"
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 transform ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
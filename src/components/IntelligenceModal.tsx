'use client';
import { useState } from 'react';
import Modal from './Modal';

interface IntelligenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: {
    title: string;
    type: string;
    excerpt: string;
    cta?: string;   // ← add this line
  } | null;
}

export default function IntelligenceModal({ isOpen, onClose, report }: IntelligenceModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!report) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST email to API
    setSubmitted(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="px-8 md:px-10 py-10">
        {!submitted ? (
          <>
            {/* Type */}
            <span className="text-[10px] tracking-[.2em] uppercase text-[#c4a962] font-medium">
              {report.type}
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] mt-3 mb-4 leading-snug">
              {report.title}
            </h2>

            {/* Excerpt */}
            <p className="text-sm md:text-base text-[#6b6b6b] leading-relaxed mb-8">
              {report.excerpt}
            </p>

            {/* Thin gold rule */}
            <div className="w-12 h-[1px] bg-[#c4a962]/40 mb-6" />

            {/* Download Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-xs tracking-[.15em] uppercase text-[#999] font-medium">
                  Email Address
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="mt-2 w-full px-4 py-3 bg-white border border-[#d4c5a0]/30 rounded-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#c4a962] focus:ring-1 focus:ring-[#c4a962]/30 transition-all duration-300 text-sm"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-[#c4a962] text-[#1a1a1a] font-semibold py-3 rounded-sm tracking-wider hover:bg-[#b89b4a] transition-all duration-300 text-sm"
              >
                {report.cta || 'Download Report'}
              </button>
            </form>

            <p className="mt-4 text-xs text-[#999] text-center">
              We respect your privacy. No spam, ever.
            </p>
          </>
        ) : (
          /* ── Success State ── */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full border border-[#c4a962]/50 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#c4a962]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-3">
              Thank You
            </h3>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              The report will be sent to your email shortly. Our team may follow up to discuss how these insights apply to your portfolio.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
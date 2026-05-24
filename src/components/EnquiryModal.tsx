'use client';
import { useState } from 'react';
import Modal from './Modal';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="px-8 md:px-10 py-10">
        {!submitted ? (
          <>
            <span className="text-[10px] tracking-[.2em] uppercase text-[#c4a962] font-medium">
              Private Enquiry
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] mt-3 mb-2 leading-snug">
              Start a <span className="text-[#c4a962]">Conversation</span>
            </h2>
            <p className="text-sm text-[#6b6b6b] mb-8 leading-relaxed">
              Tell us about your real estate ambitions. We respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white border border-[#d4c5a0]/30 rounded-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#c4a962] focus:ring-1 focus:ring-[#c4a962]/30 transition-all duration-300 text-sm"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white border border-[#d4c5a0]/30 rounded-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#c4a962] focus:ring-1 focus:ring-[#c4a962]/30 transition-all duration-300 text-sm"
              />
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-white border border-[#d4c5a0]/30 rounded-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#c4a962] focus:ring-1 focus:ring-[#c4a962]/30 transition-all duration-300 text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#c4a962] text-[#1a1a1a] font-semibold py-3 rounded-sm tracking-wider hover:bg-[#b89b4a] transition-all duration-300 text-sm"
              >
                Send Enquiry
              </button>
            </form>

            <p className="mt-4 text-xs text-[#999] text-center">
              Your data is handled with strict confidentiality.
            </p>
          </>
        ) : (
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
              Enquiry Received
            </h3>
            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">
              Thank you for reaching out. A member of the OBC collective will respond within one business day.
            </p>
            <button
              onClick={onClose}
              className="text-sm text-[#c4a962] hover:text-[#b89b4a] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
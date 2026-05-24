'use client';
import Modal from './Modal';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    client: string;
    industry: string;
    challenge: string;
    result: string;
    image: string;
  } | null;
}

export default function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      {/* Image */}
      <div className="relative h-56 md:h-72 bg-[#e0dcd0]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${caseStudy.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="px-8 md:px-10 py-8">
        {/* Industry */}
        <span className="text-[10px] tracking-[.2em] uppercase text-[#c4a962] font-medium">
          {caseStudy.industry}
        </span>

        {/* Client */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] mt-3 mb-6">
          {caseStudy.client}
        </h2>

        {/* Challenge */}
        <div className="mb-6">
          <h3 className="text-xs tracking-[.15em] uppercase text-[#999] mb-2 font-medium">
            Challenge
          </h3>
          <p className="text-sm md:text-base text-[#6b6b6b] leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Result */}
        <div className="mb-8">
          <h3 className="text-xs tracking-[.15em] uppercase text-[#999] mb-2 font-medium">
            Result
          </h3>
          <p className="text-sm md:text-base text-[#6b6b6b] leading-relaxed">
            {caseStudy.result}
          </p>
        </div>

        {/* Thin gold rule */}
        <div className="w-12 h-[1px] bg-[#c4a962]/40 mb-6" />

        {/* CTA */}
        <p className="text-sm text-[#999] leading-relaxed mb-6">
          This engagement reflects the OBC atelier standard. Every mandate is handled with the same discretion, spatial intelligence, and commitment to legacy outcomes.
        </p>

        <a
          href="#contact"
          onClick={onClose}
          className="inline-block bg-[#c4a962] text-[#1a1a1a] font-semibold py-3 px-8 rounded-sm tracking-wider hover:bg-[#b89b4a] transition-all duration-300 text-sm"
        >
          Start a Similar Conversation
        </a>
      </div>
    </Modal>
  );
}
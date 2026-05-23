'use client';

export default function Contact() {
  return (
    <section id="contact" className="relative py-36 md:py-44 bg-[#fafaf8] overflow-hidden">
      {/* ── Top ornamental rule ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />

      {/* ── Content ── */}
      <div className="max-w-xl mx-auto px-6 lg:px-10 text-center">
        
        {/* Overline */}
        <span className="inline-block text-xs tracking-[.25em] uppercase text-[#c4a962] mb-5 font-medium">
          Private Enquiry
        </span>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] mb-4 leading-tight">
          Start a <span className="text-[#c4a962]">Conversation</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-[#6b6b6b] mb-12 max-w-md mx-auto leading-relaxed">
          Tell us about your real estate ambitions. We’ll respond within one business day.
        </p>

        {/* ── Form ── */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-4 bg-white border border-[#d4c5a0]/30 rounded-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#c4a962] focus:ring-1 focus:ring-[#c4a962]/30 transition-all duration-300"
            aria-label="Full name"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-4 bg-white border border-[#d4c5a0]/30 rounded-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#c4a962] focus:ring-1 focus:ring-[#c4a962]/30 transition-all duration-300"
            aria-label="Email address"
            required
          />
          <textarea
            placeholder="How can we help?"
            rows={5}
            className="w-full px-4 py-4 bg-white border border-[#d4c5a0]/30 rounded-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#c4a962] focus:ring-1 focus:ring-[#c4a962]/30 transition-all duration-300 resize-none"
            aria-label="Your message"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#c4a962] text-[#1a1a1a] font-semibold py-4 px-10 rounded-sm tracking-wider hover:bg-[#b89b4a] transition-all duration-300 hover:scale-[1.02] shadow-[0_2px_12px_rgba(196,169,98,0.2)] mt-2"
          >
            Send Enquiry
          </button>
        </form>

        {/* Microcopy */}
        <p className="mt-6 text-xs text-[#999]">
          Your data is handled with strict confidentiality.
        </p>
      </div>

      {/* ── Bottom ornamental rule ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#c4a962]" />
    </section>
  );
}
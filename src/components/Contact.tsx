'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-stone/30">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite mb-6">
          Start a Conversation
        </h2>
        <p className="text-muted mb-8">
          Tell us about your real estate ambitions. We’ll respond within one business day.
        </p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-stone/50 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Full name"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border border-stone/50 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Email address"
          />
          <textarea
            placeholder="How can we help?"
            rows={4}
            className="w-full p-3 border border-stone/50 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Your message"
          />
          <button
            type="submit"
            className="bg-accent text-white font-semibold py-3 px-10 rounded-md hover:bg-accent/90 transition-colors"
          >
            Send Enquiry
          </button>
        </form>
        <p className="mt-4 text-xs text-muted">Your data is handled with strict confidentiality.</p>
      </div>
    </section>
  );
}
import { offerContent } from '@/data/content';

export default function Offer() {
  return (
    <section className="py-32 bg-accent text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{offerContent.heading}</h2>
        <p className="text-lg mb-10 text-white/80">{offerContent.text}</p>
        <a
          href="#contact"
          className="inline-block bg-white text-accent font-semibold py-4 px-12 rounded-md tracking-wider hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          {offerContent.cta}
        </a>
      </div>
    </section>
  );
}
import { offerContent } from '@/data/content';

export default function Offer() {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          {offerContent.heading}
        </h2>
        <p className="text-lg mb-8">{offerContent.text}</p>
        <a href="#contact" className="inline-block bg-white text-accent font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
          {offerContent.cta}
        </a>
      </div>
    </section>
  );
}
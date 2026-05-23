import { finalCtaContent } from '@/data/content';

export default function FinalCta() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-darkgray mb-6">
          {finalCtaContent.headline}
        </h2>
        <a
          href="#contact"
          className="inline-block bg-accent text-white font-semibold py-4 px-10 rounded-md text-lg hover:bg-accent/90 transition-colors"
        >
          {finalCtaContent.buttonText}
        </a>
        <p className="mt-3 text-sm text-gray-500">{finalCtaContent.microcopy}</p>
      </div>
    </section>
  );
}import { finalCtaContent } from '@/data/content';

export default function FinalCta() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-darkgray mb-6">
          {finalCtaContent.headline}
        </h2>
        <a
          href="#contact"
          className="inline-block bg-accent text-white font-semibold py-4 px-10 rounded-md text-lg hover:bg-accent/90 transition-colors"
        >
          {finalCtaContent.buttonText}
        </a>
        <p className="mt-3 text-sm text-gray-500">{finalCtaContent.microcopy}</p>
      </div>
    </section>
  );
}
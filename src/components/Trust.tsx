import { trustContent } from '@/data/content';

export default function Trust() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-lg text-gray-600 mb-2">{trustContent.heading}</p>
        <p className="text-sm text-gray-500 mb-6">{trustContent.text}</p>
        <p className="text-2xl font-serif italic text-darkgray">{trustContent.tagline}</p>
      </div>
    </section>
  );
}
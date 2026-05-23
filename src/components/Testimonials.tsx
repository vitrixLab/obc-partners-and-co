import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite mb-16 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex-1 border-l-4 border-accent/30 pl-6 mb-6">
                <blockquote className="text-lg italic text-muted leading-relaxed">
                  “{t.quote}”
                </blockquote>
              </div>
              <div className="pl-6">
                <div className="font-semibold text-graphite text-sm tracking-wide">{t.name}</div>
                <div className="text-muted text-sm mt-0.5">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
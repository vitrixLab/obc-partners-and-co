import { caseStudies } from '@/data/content';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite mb-16 text-center">
          Selected Engagements
        </h2>
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-full md:w-[380px] bg-stone/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Placeholder image */}
              <div className="h-48 bg-graphite/10 flex items-center justify-center text-muted text-sm">
                [Image: {cs.client}]
              </div>
              <div className="p-6">
                <div className="text-xs tracking-widest uppercase text-accent mb-2">{cs.industry}</div>
                <h3 className="text-xl font-serif font-bold text-graphite mb-2">{cs.client}</h3>
                <p className="text-sm text-muted mb-3"><strong>Challenge:</strong> {cs.challenge}</p>
                <p className="text-sm text-muted mb-4"><strong>Result:</strong> {cs.result}</p>
                <span className="text-sm font-medium text-accent hover:underline cursor-pointer">Read the case →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
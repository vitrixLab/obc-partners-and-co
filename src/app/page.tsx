import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Benefits from '@/components/Benefits';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Trust from '@/components/Trust';
import Offer from '@/components/Offer';
import IntelligenceTeaser from '@/components/IntelligenceTeaser';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import FinalCta from '@/components/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <Trust />
      <Offer />
      <IntelligenceTeaser />
      <Faq />
      <Contact />
      <FinalCta />
    </>
  );
}
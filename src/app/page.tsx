import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Trust from '@/components/Trust';
import Offer from '@/components/Offer';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import FinalCta from '@/components/FinalCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Testimonials />
      <Trust />
      <Offer />
      <Faq />
      <Contact />
      <FinalCta />
    </main>
  );
}
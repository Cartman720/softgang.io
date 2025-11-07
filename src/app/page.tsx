import { Hero } from '@/components/sections/hero';
import { TrustedByMarquee } from '@/components/sections/trusted-by-marquee';
import { ServicesSection } from '@/components/sections/services-section';
import { OurServicesSection } from '@/components/sections/our-services-section';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactUsSection } from '@/components/sections/contact-us-section';
import { Header } from '@/app/components';
import homeData from './home.data.json';
import { Partners } from '@/components/sections/partners';

interface HomeData {
  logos: { src: string; alt: string; link?: string }[];
  testimonials: {
    quote: string;
    name: string;
    title: string;
    logoSrc: string;
    link?: string;
    variant: 'light' | 'dark';
  }[];
  partners: { src: string; alt: string; title?: string; link?: string }[];
}

export default function Home() {
  const { logos = [], testimonials = [], partners = [] } = homeData;
  return (
    <div
      className="bg-[#d6f3ca] pb-20"
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />

      <main>
        <Hero />
        <TrustedByMarquee logos={logos} />
        <ServicesSection />
        <OurServicesSection />
        <Partners logos={partners} />
        <Testimonials testimonials={testimonials} />
        <ContactUsSection />
      </main>
    </div>
  );
}

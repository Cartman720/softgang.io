import { Hero } from '@/components/sections/hero';
import { TrustedByMarquee } from '@/components/sections/trusted-by-marquee';
import { ServicesSection } from '@/components/sections/services-section';
import { OurServicesSection } from '@/components/sections/our-services-section';
import { Testimonials } from '@/components/sections/testimonials';
import { Partners } from '@/components/sections/partners';
import type { Metadata } from 'next';
import homeData from './home.data.json';

export const metadata: Metadata = {
  title:
    'Software Gang — Tech Talent Outsourcing, Cloud Native & Automation',
  description:
    'Europe-based engineering with solid value for money and flexible contracts. We deliver Cloud Native Development, Proof of Concept builds, Intelligent Automation, and Strategic & Technical Consulting.',
  openGraph: {
    title:
      'Software Gang — Tech Talent Outsourcing, Cloud Native & Automation',
    description:
      'Europe-based engineering with solid value for money and flexible contracts. We deliver Cloud Native Development, Proof of Concept builds, Intelligent Automation, and Strategic & Technical Consulting.',
    url: 'https://www.softgang.io/',
    siteName: 'Software Gang',
    locale: 'en_US',
    type: 'website',
  },
};

interface HomeData {
  heroTexts: string[];
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
  const { heroTexts = [], logos = [], testimonials = [], partners = [] } =
    homeData as HomeData;
  return (
    <>
      <Hero texts={heroTexts} />
      <TrustedByMarquee logos={logos} />
      <ServicesSection />
      <OurServicesSection />
      <Partners logos={partners} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}



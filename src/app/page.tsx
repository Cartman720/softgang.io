import { Button } from '@/components/retroui/Button';
import { Hero } from '@/components/sections/hero';
import { TrustedByMarquee } from '@/components/sections/trusted-by-marquee';
import { ServicesSection } from '@/components/sections/services-section';
import { OurServicesSection } from '@/components/sections/our-services-section';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactUsSection } from '@/components/sections/contact-us-section';
import homeData from './home.data.json';

export default function Home() {
  const { logos = [], testimonials = [] } = homeData as {
    logos: { src: string; alt: string; link?: string }[];
    testimonials: {
      quote: string;
      name: string;
      title: string;
      logoSrc: string;
      link?: string;
      variant: 'light' | 'dark';
    }[];
  };
  return (
    <div
      className="bg-[#d6f3ca] pb-20"
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <header className="py-6">
        <div className="max-w-8xl container mx-auto flex items-center justify-between">
          <div className="p-2">
            <div className="font-modak p-1 text-5xl">SoftGang</div>
          </div>

          <nav className="ml-auto">
            <div className="px-4 py-4 lg:px-6">
              <div className="flex items-center justify-center gap-4">
                <Button>Services</Button>
                <Button variant="secondary">Let's Start</Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustedByMarquee logos={logos} />
        <ServicesSection />
        <OurServicesSection />
        <Testimonials testimonials={testimonials} />
        <ContactUsSection />
      </main>
    </div>
  );
}

import { cn } from '@/lib/utils';
import { Header } from '@/app/components';
import React from 'react';
import { ContactUsSection } from '@/components/sections/contact-us-section';
import { Testimonials } from '@/components/sections/testimonials';
import homeData from './home.data.json';

export default function CoreLayout({ children }: { children: React.ReactNode }) {
  const { testimonials = [] } = (homeData as any) || {};
  return (
    <div
      className={cn(
        // Visual
        'bg-[#d6f3ca]',
        // Spacing
        'pb-20'
      )}
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <main>{children}</main>
      {Array.isArray(testimonials) && testimonials.length > 0 ? (
        <Testimonials testimonials={testimonials as any} />
      ) : null}
      <ContactUsSection />
    </div>
  );
}



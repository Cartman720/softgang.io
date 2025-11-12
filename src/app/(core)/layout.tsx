import { cn } from '@/lib/utils';
import { Header } from '@/app/components';
import React from 'react';
import { ContactUsSection } from '@/components/sections/contact-us-section';

export default function CoreLayout({ children }: { children: React.ReactNode }) {
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
      <ContactUsSection />
    </div>
  );
}



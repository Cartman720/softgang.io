'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

import BevyLogo from '@/assets/bevy-logo.png';
import CottonBeeLogo from '@/assets/cottonbee-logo.png';
import LogoSquare from '@/assets/logo-square.png';

export function TrustedByMarquee() {
  const logos = [
    { src: BevyLogo, alt: 'Bevy' },
    { src: CottonBeeLogo, alt: 'CottonBee' },
    { src: LogoSquare, alt: 'SoftGang' },
  ];

  return (
    <section
      className={cn('w-full bg-white', 'border-t border-b-2 border-black')}
    >
      <div className={cn('py-6', 'sm:py-8')}>
        <h2 className={cn('sr-only')}>Trusted by</h2>
        <Marquee speed={40} pauseOnHover gradient={false} autoFill>
          <div className={cn('mr-16', 'flex items-center gap-12', 'sm:gap-16')}>
            {logos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className={cn('block h-10 w-auto', 'transition')}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

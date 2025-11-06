'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

interface TrustedLogo {
  src: string;
  alt: string;
  link?: string;
}

interface TrustedByMarqueeProps {
  logos: TrustedLogo[];
}

export function TrustedByMarquee({ logos }: TrustedByMarqueeProps) {
  return (
    <section
      className={cn('w-full bg-white', 'border-t border-b-2 border-black')}
    >
      <div className={cn('py-2')}>
        <h2 className={cn('sr-only')}>Trusted by</h2>
        <Marquee speed={40} pauseOnHover gradient={false} autoFill>
          <div className={cn('mr-16', 'flex items-center gap-12', 'sm:gap-16')}>
            {logos.map((logo, idx) => {
              const img = (
                <Image
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className={cn('block w-auto', 'object-contain transition')}
                  fill
                />
              );
              return (
                <div
                  key={idx}
                  className={cn('relative w-[150px] h-16', 'object-contain transition')}
                >
                  {logo.link ? (
                    <a
                      href={logo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

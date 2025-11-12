import Image from 'next/image';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import aboutData from './about.data.json';
import Star2 from '@/components/stars/star-2';
import Star3 from '@/components/stars/star-3';
import Star4 from '@/components/stars/star-4';
import { CheckIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Software Gang',
  description:
    'Entrepreneurs helping startups with tech talent, engineering, and pragmatic delivery.',
  openGraph: {
    title: 'About — Software Gang',
    description:
      'Entrepreneurs helping startups with tech talent, engineering, and pragmatic delivery.',
    url: 'https://www.softgang.io/about',
    siteName: 'Software Gang',
    locale: 'en_US',
    type: 'website',
  },
};

interface TeamMember {
  name: string;
  description: string;
  imageSrc?: string;
  link?: string;
}

interface AboutData {
  title: string;
  intro: string[];
  team: TeamMember[];
  offeringsTitle?: string;
  offerings?: string[];
}

export default function AboutPage() {
  const {
    title,
    intro = [],
    team = [],
    offeringsTitle,
    offerings = [],
  } = aboutData as AboutData;

  return (
    <>
      {/* Main about section - containerized with decorations */}
      <section
        className={cn(
          'relative',
          'section-padding-x',
          'mt-16',
        )}
      >
        <div
          className={cn(
            // Slightly narrower container than other pages
            'container mx-auto max-w-8xl',
            'relative overflow-hidden',
            'rounded-lg border-4 border-black bg-white',
            'px-4 py-10 md:py-14'
          )}
          style={{
            backgroundImage: "url('/grid.svg')",
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Decorative stars */}
          <Star4
            size={64}
            color="#FFF500"
            stroke="#000000"
            strokeWidth={3}
            className={cn(
              'absolute',
              'top-6 left-6',
              'text-black',
              'hidden md:block'
            )}
            aria-hidden
          />
          <Star3
            size={48}
            color="#FF4D4F"
            stroke="#000000"
            strokeWidth={3}
            className={cn(
              'absolute',
              'right-8 bottom-8',
              'text-black',
              'hidden sm:block'
            )}
            aria-hidden
          />
          <Star2
            size={40}
            color="#BDE0FE"
            stroke="#000000"
            strokeWidth={3}
            className={cn(
              'absolute',
              'top-1/2 right-10 -translate-y-1/2',
              'text-black',
              'sm:hidden'
            )}
            aria-hidden
          />

          <div className={cn('mx-auto max-w-5xl')}>
            <h1
              className={cn(
                'font-head font-bold',
                'text-3xl md:text-5xl',
                'text-black'
              )}
            >
              {title}
            </h1>

            <div
              className={cn(
                'mt-6 md:mt-8',
                'flex flex-col',
                'gap-4 md:gap-6',
                'text-black'
              )}
            >
              {intro.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={cn(
                    'font-sans text-base md:text-lg',
                    'leading-relaxed'
                  )}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={cn('my-8 md:my-10')}>
              {offeringsTitle ? (
                <h2
                  className={cn(
                    'font-head font-semibold',
                    'text-2xl md:text-3xl',
                    'text-black'
                  )}
                >
                  {offeringsTitle}
                </h2>
              ) : null}
              <ul className={cn('mt-4 space-y-3 md:space-y-4')}>
                {offerings.map((item) => (
                  <li key={item} className={cn('flex items-center gap-3')}>
                    <span
                      className={cn(
                        'inline-grid h-6 w-6 shrink-0 place-items-center rounded-full',
                        'border-2 border-black bg-[#C4FF83] text-black shadow-sm'
                      )}
                    >
                      <CheckIcon size={16} />
                    </span>
                    <span
                      className={cn(
                        'font-sans leading-snug font-semibold',
                        'text-black',
                        'text-base md:text-lg'
                      )}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
              )}
            >
              {team.map((member) => (
                <a
                  key={member.name}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open LinkedIn profile of ${member.name}`}
                  className={cn(
                    'block',
                    // Visual neo-brutalism shell
                    'rounded-lg border-4 border-black bg-white',
                    // Shadow + hover (match site-wide)
                    'shadow-md transition-all duration-100',
                    'hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-lg',
                    // Spacing
                    'overflow-hidden'
                  )}
                >
                  {member.imageSrc ? (
                    <div
                      className={cn(
                        'relative max-h-[500px]',
                        // Ensure portrait 9:16 ratio
                        'aspect-3/4 w-full'
                      )}
                    >
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        fill
                        className={cn('object-cover')}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className={cn(
                          'pointer-events-none absolute inset-0',
                          'border-b-4 border-black'
                        )}
                        aria-hidden
                      />
                    </div>
                  ) : null}
                  <div className={cn('px-4 py-4 md:px-6 md:py-6')}>
                    <h3
                      className={cn(
                        'font-head font-semibold',
                        'text-xl md:text-2xl',
                        'text-black'
                      )}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={cn(
                        'mt-2',
                        'font-sans text-base md:text-lg',
                        'text-black'
                      )}
                    >
                      {member.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings moved into main section above */}

      {/* Contact section now rendered globally via (core) layout */}
    </>
  );
}

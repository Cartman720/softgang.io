'use client';

import { Button } from '@/components/retroui/Button';
import Star1 from '@/components/stars/star-1';
import Star2 from '@/components/stars/star-2';
import Star3 from '@/components/stars/star-3';
import { Badge } from '@/components/retroui/Badge';
import Typewriter from '@/components/fancy/text/typewriter';
import { cn } from '@/lib/utils';

interface HeroProps {
  texts?: string[];
}

export function Hero({ texts = ['Software Gang'] }: HeroProps) {
  return (
    <section
      className={cn(
        'relative flex justify-center', // Layout
        'items-start md:items-center', // Responsive alignment
        'border-b border-black', // Divider
        'min-h-[calc(100vh-120px)] md:h-[calc(100vh-120px)]' // Height
      )}
    >
      {/* Decorative neo-brutalist stars */}
      <div
        className={cn('pointer-events-none absolute inset-0', 'z-1')}
        aria-hidden
      >
        <Star1
          className={cn(
            'absolute top-6 left-4',
            'text-primary',
            'hidden md:block'
          )}
          stroke="#000"
          strokeWidth={6}
          size={64}
        />
        <Star2
          className={cn(
            'absolute top-1/2 right-6 -translate-y-1/2 rotate-12',
            'text-secondary',
            'hidden sm:block'
          )}
          stroke="#000"
          strokeWidth={6}
          size={56}
        />
        <Star3
          className={cn(
            'absolute bottom-32 left-1/4 -translate-x-1/2 rotate-45',
            'text-indigo-light',
            'hidden sm:block'
          )}
          stroke="#000"
          strokeWidth={6}
          size={48}
        />
      </div>
      <div className={cn('px-4', 'lg:px-8')}>
        <div
          className={cn('max-w-8xl container mx-auto', 'pt-16 pb-32 lg:pt-32')}
        >
          <div className={cn('mx-auto max-w-4xl', 'p-6 sm:p-8 lg:p-12')}>
            <div className={cn('max-w-5xl', 'relative flex flex-col items-center')}>
              <Star2
                size={64}
                className={cn(
                  'absolute top-0 right-0',
                  'text-destructive',
                  'hidden sm:block'
                )}
                stroke="#000"
                strokeWidth={3}
              />

              <h1
                className={cn(
                  'relative text-center',
                  'font-head leading-tight font-bold text-black',
                  'text-3xl sm:text-5xl lg:text-6xl'
                )}
              >
                <div>We are the</div>
                <div
                  className={cn(
                    'inline-block align-middle',
                    'rounded-lg border-2 border-black',
                    'bg-primary text-primary-foreground',
                    'px-3 py-1'
                  )}
                >
                  <Typewriter
                    as="span"
                    text={texts}
                    waitTime={5000}
                    className={cn('inline-flex')}
                  />
                </div>
              </h1>

              <p
                className={cn(
                  'mt-6 max-w-3xl text-center text-black',
                  'font-sans text-base font-semibold lg:text-xl'
                )}
              >
                We outsource{' '}
                <Badge
                  variant="surface"
                  className={cn(
                    'bg-accent', // Visual
                    'text-base', // Typography
                    'px-2 py-0.5 sm:px-3 sm:py-1' // Mobile padding override
                  )}
                >
                  tech talent
                </Badge>{' '}
                and build software the smart way to help your company{' '}
                <Badge
                  variant="surface"
                  className={cn(
                    'bg-red-300', // Visual
                    'text-base', // Typography
                    'px-2 py-0.5 sm:px-3 sm:py-1' // Mobile padding override
                  )}
                >
                  achieve its milestones
                </Badge>
              </p>

              <div
                className={cn(
                  'mt-10 sm:mt-16 lg:mt-20',
                  'flex flex-col gap-3',
                  'sm:flex-row sm:items-center sm:gap-4'
                )}
              >
                <Button variant="default">Get in touch</Button>
                <Button variant="secondary">See services</Button>
              </div>

              {/* Static trusted-by row under hero */}
              {/* <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <Badge variant="solid">
                  They have trusted us
                </Badge>
                <div className="flex items-center gap-6">
                  <Image src={BevyLogo} alt="Bevy" className="h-7 w-auto" />
                  <Image
                    src={CottonBeeLogo}
                    alt="CottonBee"
                    className="h-7 w-auto"
                  />
                </div>
                <Star2
                  size={32}
                  className="text-destructive"
                  stroke="#000"
                  strokeWidth={3}
                />
              </div> */}
            </div>
          </div>

          <div
            className={cn(
              'mt-10 flex flex-col items-center justify-center gap-2 text-xs text-black/80 md:flex-row',
              'sm:mt-16',
              'animate-pulse'
            )}
          >
            <span className={cn('block md:inline')}>Scroll to explore</span>
            <span
              className={cn(
                'grid h-6 w-6 place-items-center',
                'border-2 border-black bg-white shadow',
                'animate-bounce rounded-md'
              )}
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

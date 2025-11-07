import { ExternalLink, Handshake } from 'lucide-react';
import Star6 from '@/components/stars/star-3';
import Star4 from '@/components/stars/star-4';
import Star9 from '@/components/stars/star-2';
import { Badge } from '@/components/retroui/Badge';
import { cn } from '@/lib/utils';

interface PartnerLogoItem {
  src: string;
  alt: string;
  link?: string;
  title?: string;
}

interface PartnersProps {
  logos: PartnerLogoItem[];
}

export function Partners({ logos }: PartnersProps) {
  return (
    <section
      className={cn(
        'section-padding-x',
        'mt-16 md:mt-24',
        'xl:mt-32'
      )}
    >
      <div className={cn('mx-auto max-w-6xl')}>
        <div className={cn('mb-10 md:mb-16 text-center')}>
          <Badge
            className={cn(
              'mb-12 inline-flex items-center gap-2 font-semibold',
              'bg-green-500 text-white'
            )}
          >
            <Handshake size={16} className={cn('text-white')} /> Partners
          </Badge>
          <h2
            className={cn(
              'font-head mb-4 font-semibold',
              'text-3xl lg:text-4xl'
            )}
          >
            Proud to work with{' '}
            <span
              className={cn(
                'inline-block skew-x-6 transform',
                'bg-rose-500 text-white border-2 border-black px-3'
              )}
            >
              partners
            </span>
          </h2>
          <p className={cn('mx-auto max-w-2xl font-sans text-lg font-medium')}>
            A selection of teams we collaborate with.
          </p>
        </div>

        {(() => {
          const isTwoOrLess = (logos?.length ?? 0) <= 2;
          return (
            <div
              className={cn(
                'grid items-start',
                isTwoOrLess
                  ? 'grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 md:gap-10 max-w-3xl mx-auto'
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'
              )}
            >
                {logos?.map((logo, idx) => {
                  const title = logo.title || logo.alt || 'Partner';
                  const href = logo.link || '#';
                  return (
                    <a
                      key={`${title}-${idx}`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} — Learn more`}
                      className={cn('block w-full')}
                    >
                      <div
                        className={cn(
                          'relative overflow-hidden',
                          'flex flex-col items-center',
                          'w-full rounded-lg border-4 border-black bg-white',
                          isTwoOrLess ? 'p-6 md:p-8' : 'p-4',
                          'shadow-[4px_4px_0_0_#000]',
                          'transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000]'
                        )}
                      >
                        <Star6
                          size={28}
                          color="#FFCF33"
                          stroke="#000000"
                          strokeWidth={2}
                          className={cn('absolute', 'top-2 left-2', 'text-black')}
                        />
                        <Star4
                          size={22}
                          color="#3B82F6"
                          stroke="#000000"
                          strokeWidth={2}
                          className={cn('absolute', 'bottom-3 right-3', 'text-black')}
                        />
                        <Star9
                          size={20}
                          color="#22C55E"
                          stroke="#000000"
                          strokeWidth={2}
                          className={cn('absolute', 'top-1/2 right-6 -translate-y-1/2', 'text-black', 'hidden sm:block')}
                        />
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={cn(
                            'w-auto object-contain', // Size + behavior
                            isTwoOrLess ? 'max-h-20 md:max-h-24' : 'max-h-12 md:max-h-14' // Responsive
                          )}
                        />
                        <div className={cn('mt-4 w-full border-t-2 border-black pt-3')}> 
                          <div className={cn('text-center font-sans font-semibold', 'text-lg md:text-xl')}>{title}</div>
                          <div className={cn('mt-2 text-center')}>
                            <span
                              className={cn(
                                'inline-flex items-center gap-2',
                                'text-base md:text-lg font-medium underline',
                                'hover:opacity-90'
                              )}
                            >
                              Learn more <ExternalLink size={16} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
            </div>
          );
        })()}
      </div>
    </section>
  );
}



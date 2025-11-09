import QRCode from 'react-qr-code';
import { cn } from '@/lib/utils';
import { Button } from '@/components/retroui/Button';
import Image from 'next/image';
import Star2 from '@/components/stars/star-2';
import Star3 from '@/components/stars/star-3';
import Star4 from '@/components/stars/star-4';
import { Badge } from '@/components/retroui/Badge';

export default function LeafletPage() {
  const logos = [
    { src: '/images/logos/bevy-logo.svg', alt: 'Bevy' },
    { src: '/images/logos/cottonbee-logo.svg', alt: 'Cottonbee' },
    { src: '/images/logos/kino-mural-logo.png', alt: 'Kino Mural' },
    { src: '/images/logos/maramio-logo.png', alt: 'Maramio' },
    { src: '/images/logos/savicase-logo.jpg', alt: 'SaviCase' },
  ];
  const scheduleUrl =
    'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ22eVo7MxrYmVPWBd7YC-AK9rmBiRPKjg_W6ACb8LICSOk2b_pOlO9bOFIdOx5WCbVh6lSEIKfB';

  const logosForGrid = logos
    .filter((l) =>
      ['bevy', 'cottonbee', 'kino', 'maramio'].some((k) =>
        l.src.toLowerCase().includes(k)
      )
    )
    .slice(0, 4);

  return (
    <div
      className={cn(
        // Fullscreen overlay to ensure single-screen fit even with global footer present
        'relative z-50',
        // Layout
        'section-padding-x',
        'flex min-h-screen flex-col',
        // Visual
        'text-black'
      )}
      style={{
        backgroundColor: '#d6f3ca',
        backgroundImage: "url('/grid.svg')",
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <section className={cn('pt-4 md:pt-6')}>
        <div className={cn('sm:p-2')}>
          <h1
            className={cn(
              'font-head font-bold text-black',
              'mb-5 text-center text-2xl md:text-3xl'
            )}
          >
            <div>We are the</div>
            <span
              className={cn(
                'inline-block',
                'rounded-lg border-2 border-black',
                'bg-primary text-primary-foreground',
                'px-3 py-0.5'
              )}
            >
              Software Gang
            </span>
          </h1>
        </div>
      </section>

      {/* Content (neo-brutalist section) */}
      <section>
        <div
          className={cn(
            'mx-auto w-full max-w-md',
            'md:max-w-lg',
            'lg:max-w-xl',
            'relative overflow-hidden',
            'bg-indigo-light rounded-lg border-2 border-black shadow-md',
            'px-3 py-3 md:px-5 md:py-5'
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
            color="#FFEA00"
            stroke="#000000"
            strokeWidth={3}
            className={cn(
              'absolute', // Positioning
              'top-2 right-2 md:top-4 md:right-4', // Responsive positioning (top-right)
              'z-10', // Z-index
              'pointer-events-none select-none', // Interaction
              'text-black' // Visual
            )}
            aria-hidden
          />
          <Star2
            size={48}
            color="#FF4D4F"
            stroke="#000000"
            strokeWidth={3}
            className={cn(
              'absolute', // Positioning
              'top-1/3 right-3 md:top-1/2 md:right-10 md:-translate-y-1/2', // Responsive positioning
              'z-10', // Z-index
              'pointer-events-none select-none', // Interaction
              'text-black' // Visual
            )}
            aria-hidden
          />
          <div
            className={cn(
              'flex flex-col items-center',
              'text-center text-white',
              'gap-3 md:gap-4'
            )}
          >
            <div className={cn('mt-1', 'w-full text-left')}>
              <div
                className={cn(
                  'font-sans text-sm font-bold tracking-wide',
                  'uppercase md:text-base'
                )}
              >
                We offer:
              </div>
              <ul
                className={cn(
                  'mt-2',
                  'list-disc pl-5 text-left font-semibold',
                  'text-base leading-relaxed md:text-base'
                )}
              >
                <li>Europe-based talent pool</li>
                <li>Solid value for money</li>
                <li>Flexible contracts</li>
              </ul>
            </div>

            <div className={cn('mt-3 w-full text-left')}>
              <div
                className={cn(
                  'font-sans text-sm font-bold tracking-wide',
                  'md:text-base'
                )}
              >
                OUR SERVICES:
              </div>
              <ul
                className={cn(
                  'mt-2',
                  'list-disc pl-5 text-left font-semibold',
                  'text-base leading-relaxed md:text-base'
                )}
              >
                <li className="relative">
                  Tech Talent Outsourcing{' '}
                  <Badge className="bg-yellow-400 py-0 text-black shadow shadow-black">
                    from 40 EUR/h
                  </Badge>
                  <Star2
                    size={16}
                    color="#6051e4"
                    stroke="#000000"
                    strokeWidth={3}
                    className={cn(
                      'absolute -top-2 right-2 inline-block',
                      'ml-2'
                    )}
                    aria-hidden
                  />
                </li>
                <li>Cloud Native Development</li>
                <li>Proof of Concept Development</li>
                <li>Intelligent Automation</li>
                <li>Strategic &amp; Technical Consulting</li>
              </ul>
            </div>

            {/* Logos + QR on the same row (grid continuation) */}
            <div className={cn('w-full')}>
              <div
                className={cn(
                  'mb-2 text-left font-sans text-sm font-bold tracking-wide',
                  'uppercase md:text-base'
                )}
              >
                Trusted by:
              </div>
              <div
                className={cn(
                  'grid grid-cols-3 gap-3 md:gap-4',
                  'items-stretch'
                )}
              >
                {/* Logos grid (left, spans two columns) */}
                <div className={cn('col-span-2')}>
                  <div
                    className={cn(
                      'grid h-full grid-cols-2 rounded-md border-2 border-black bg-white p-2'
                    )}
                    style={{
                      backgroundImage: "url('/grid.svg')",
                      backgroundRepeat: 'repeat',
                      backgroundSize: 'contain',
                      backgroundAttachment: 'fixed',
                    }}
                  >
                    {logosForGrid.map((logo) => (
                      <div
                        key={logo.src}
                        className={cn(
                          'flex items-center justify-center',
                          'p-1.5 md:p-2'
                        )}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          className={cn('max-h-7 md:max-h-9', 'object-contain')}
                          width={110}
                          height={28}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* QR tile (right column) */}
                <div
                  className={cn(
                    'relative',
                    'rounded-md border-2 border-black bg-white',
                    'shadow-md',
                    'flex items-center justify-center',
                    'p-2.5 md:p-3'
                  )}
                >
                  <a
                    href={scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open scheduling link"
                  >
                    <QRCode
                      value={scheduleUrl}
                      style={{ height: 96, width: 96 }}
                      viewBox="0 0 256 256"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="font-head text-center text-sm font-semibold">
              https://www.softgang.io/
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

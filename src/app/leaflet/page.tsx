import QRCode from 'react-qr-code';
import { cn } from '@/lib/utils';
import { Button } from '@/components/retroui/Button';
import Image from 'next/image';

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
        'fixed inset-0 z-50',
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
      <section
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className={cn(
            'mx-auto w-full max-w-3xl',
            'bg-indigo-light rounded-lg border-2 border-black shadow-md',
            'px-4 py-3 md:px-6 md:py-6'
          )}
        >
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
                  'font-head text-sm tracking-wide',
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
                  'font-head text-sm tracking-wide',
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
                <li>Tech Talent Outsourcing (from 40 EUR/ h)</li>
                <li>Cloud Native Development</li>
                <li>Proof of Concept Development</li>
                <li>Intelligent Automation</li>
                <li>Strategic &amp; Technical Consulting</li>
              </ul>
            </div>

            {/* QR inside main container under the button */}
            <div
              className={cn(
                'mt-3 mb-5',
                'rounded-md border-2 border-black bg-white p-3',
                'shadow-md'
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
                  style={{ height: 128, width: 128 }}
                  viewBox="0 0 256 256"
                />
              </a>
            </div>

            {/* Logos section */}
            <div>
              <div
                className={cn(
                  'font-head mb-4 text-sm tracking-wide',
                  'uppercase md:text-base'
                )}
              >
                Trusted by:
              </div>
              <div className={cn('grid grid-cols-2 gap-4', 'w-full')}>
                {logosForGrid.map((logo) => (
                  <div
                    key={logo.src}
                    className={cn(
                      'flex items-center justify-center',
                      'rounded-md bg-white shadow shadow-black',
                      'p-2'
                    )}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className={cn(
                        'max-h-12 object-contain',
                        'object-contain'
                      )}
                      width={150}
                      height={40}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

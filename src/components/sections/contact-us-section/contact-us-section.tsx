'use server';

import { Mail } from 'lucide-react';
import { Badge } from '@/components/retroui/Badge';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';
import Star6 from '@/components/stars/star-3';
import Star4 from '@/components/stars/star-4';
import Star9 from '@/components/stars/star-2';
import { ContactForm } from './contact-form.client';
import { submitContactFormAction } from '@/actions/contacts';

export async function ContactUsSection() {
  const [star1Color, star2Color, star3Color] = useMemo(() => {
    const palette = ['#FFD1DC', '#BDE0FE', '#C4FF83', '#FFF2B2', '#EAB8FF'];
    const pick = () => palette[Math.floor(Math.random() * palette.length)];
    return [pick(), pick(), pick()];
  }, []);

  return (
    <section id="contact-us"
      className={cn(
        'relative',
        'section-padding-x',
        'mt-16 md:mt-24',
        'scroll-mt-16 md:scroll-mt-24 xl:scroll-mt-28',
        'xl:mt-32'
      )}
    >
      <div
        className={cn(
          'max-w-6xl container mx-auto',
          'relative overflow-hidden',
          'rounded-lg border-4 border-black bg-white',
          'px-4 py-14 md:py-20'
        )}
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Decorative stars */}
        <Star6
          size={56}
          color={star1Color}
          stroke="#000000"
          strokeWidth={2}
          className={cn('absolute', 'top-6 left-6', 'text-black')}
        />
        <Star4
          size={72}
          color={star2Color}
          stroke="#000000"
          strokeWidth={2}
          className={cn('absolute', 'right-8 bottom-8', 'text-black', 'hidden sm:block')}
        />
        <Star9
          size={48}
          color={star3Color}
          stroke="#000000"
          strokeWidth={2}
          className={cn(
            'absolute',
            'top-1/2 right-16 -translate-y-1/2',
            'text-black',
            'hidden sm:block'
          )}
        />

        <div className={cn('mx-auto max-w-6xl')}>
          <div className={cn('mb-12 text-center')}>
            <Badge
              className={cn(
                'mb-8 inline-flex items-center gap-2 font-semibold',
                'bg-blue-500 text-white'
              )}
            >
              <Mail size={16} className={cn('text-white')} /> Let&apos;s Talk
            </Badge>
            <h2
              className={cn(
                'font-head mb-4 font-semibold',
                'text-3xl lg:text-4xl'
              )}
            >
              Start your{' '}
              <span
                className={cn(
                  'inline-block skew-x-3 transform',
                  'bg-sky-500 text-white border-2 border-black px-3'
                )}
              >
                journey
              </span>
            </h2>
            <p
              className={cn('mx-auto max-w-2xl font-sans text-lg font-medium')}
            >
              Leave your email and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <ContactForm action={submitContactFormAction} />
        </div>
      </div>
    </section>
  );
}

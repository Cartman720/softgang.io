import { HeartHandshake } from 'lucide-react';
import { Badge } from '@/components/retroui/Badge';
import { TestimonialCard } from './testimonial-card';
import { Button } from '@/components/retroui/Button';
import { cn } from '@/lib/utils';

interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  logoSrc: string;
  link?: string;
  className?: string;
  variant: 'light' | 'dark';
}

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export function Testimonials({ testimonials }: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        'px-4',
        'mt-16 md:mt-24',
        'xl:mt-32'
      )}
    >
      <div className={cn('mx-auto max-w-6xl')}>
        <div className={cn('mb-10 md:mb-20 text-center')}>
          <Badge
            className={cn(
              'mb-12 inline-flex items-center gap-2 font-semibold',
              'bg-red-400 text-white'
            )}
          >
            <HeartHandshake size={16} className={cn('text-white')} /> Wall of
            Love
          </Badge>
          <h2
            className={cn(
              'font-head mb-4 font-semibold',
              'text-3xl lg:text-4xl'
            )}
          >
            Voice of{' '}
            <span
              className={cn(
                'inline-block -skew-x-3 transform',
                'bg-amber-500 text-white border-2 border-black px-3'
              )}
            >
              Trust
            </span>
          </h2>
          <p
            className={cn(
              'mx-auto max-w-2xl font-sans text-lg font-medium',
            )}
          >
            Don't just take our word for it. Hear what our customers have to say
            about their experience.
          </p>
        </div>

        {/* Unified testimonials grid */}
        <div className={cn('mb-16 grid gap-8', 'md:grid-cols-2')}>
          {testimonials?.map((item, idx) => {
            return (
              <TestimonialCard
                key={`${item.name}-${idx}`}
                variant={item.variant}
                quote={item.quote}
                name={item.name}
                title={item.title}
                logoSrc={item.logoSrc}
                link={item.link}
                className={item.className}
              />
            );
          })}
        </div>

        {/* <div className={cn('mx-auto mt-16 text-center')}>
          <Button size="lg" variant="secondary">
            Read More Stories →
          </Button>
        </div> */}
      </div>
    </section>
  );
}

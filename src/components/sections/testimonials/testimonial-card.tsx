import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  link?: string;
  initials?: string;
  className?: string;
  showAvatar?: boolean;
  logoSrc?: string;
  variant?: 'light' | 'dark';
}

export function TestimonialCard({
  quote,
  name,
  title,
  link,
  className,
  logoSrc,
  variant = 'dark',
}: TestimonialCardProps) {
  const cardVariants = cva(
    [
      'border-4 border-black',
      'rounded',
      'p-8',
      'shadow-lg transition-all',
      'hover:-translate-y-1',
      'hover:shadow-amber-500',
      'flex flex-col',
    ],
    {
      variants: {
        variant: {
          // Light variant: light-blue background with dark foreground text
          light: 'bg-[#BDE0FE] text-slate-900',
          // Dark variant: indigo background with light foreground text
          dark: 'bg-indigo-light text-white',
        },
      },
      defaultVariants: {
        variant: 'dark',
      },
    }
  );

  return (
    <div className={cn(cardVariants({ variant }), className)}>
      <div className="mb-5 flex h-14 items-center">
        <Image
          src={logoSrc || ''}
          alt={`${name} logo`}
          width={200}
          height={40}
          className={cn('max-h-10 object-contain object-left')}
        />
      </div>

      <blockquote className={cn('mb-6 text-lg font-medium')}>
        {quote}
      </blockquote>
      <div className="mt-auto flex items-center gap-4">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'group flex flex-col'
            )}
          >
            <div
              className={cn(
                'flex items-center gap-2',            // Layout
                'underline underline-offset-4',       // Underline
                'decoration-current'                  // Color inherits
              )}
            >
              <span className={cn('font-semibold')}>{name}</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  'h-3 w-3',                          // Size
                  'transition-transform',             // Transition
                  'group-hover:-translate-y-0.5'      // Hover motion
                )}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 13L17 3" />
                <path d="M10 3h7v7" />
              </svg>
            </div>
            <div className={cn('text-sm')}>{title}</div>
          </a>
        ) : (
          <div className={cn('initials flex flex-col')}>
            <div className={cn('font-semibold')}>{name}</div>
            <div className={cn('text-sm')}>{title}</div>
          </div>
        )}
      </div>
    </div>
  );
}

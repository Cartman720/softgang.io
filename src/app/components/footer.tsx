import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'border-border border-t bg-[#d6f3ca]', // Divider
        'section-padding-x', // Horizontal padding utility
        'py-2' // Vertical spacing
      )}
    >
      <div>
        <div
          className={cn(
            'flex items-center justify-between', // Layout
            'gap-4', // Spacing
            'text-sm', // Typography
            'flex-col md:flex-row' // Responsive
          )}
        >
          <div
            className={cn(
              'flex items-center', // Layout
              'gap-3' // Spacing
            )}
          >
            <div className="p-2">
              <div className="font-modak text-black p-1 text-3xl">SoftGang</div>
            </div>
            <span className={cn('whitespace-nowrap text-black')}>
              © {year} Softgang. All rights reserved.
            </span>
          </div>

          <nav
            className={cn(
              'flex items-center', // Layout
              'gap-6' // Spacing
            )}
            aria-label="Footer"
          >
            <Link
              href="/privacy"
              className={cn('hover:underline text-black', 'underline-offset-4')}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className={cn('hover:underline text-black', 'underline-offset-4')}
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

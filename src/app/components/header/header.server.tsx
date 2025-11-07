import { cn } from '@/lib/utils';
import { HeaderClient } from './header.client';

export function Header() {
  return (
    <header
      className={cn(
        'section-padding-x', // Responsive horizontal padding
        'py-6' // Vertical spacing
      )}
    >
      <div
        className={cn(
          'container mx-auto', // Width + centering
          'max-w-8xl' // Max width
        )}
      >
        <HeaderClient />
      </div>
    </header>
  );
}



'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/retroui/Button';
import { useState } from 'react';

export function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((v) => !v);
  }

  return (
    <div>
      <div
        className={cn(
          'flex items-center justify-between', // Layout
          'gap-4 max-w-6xl mx-auto' // Spacing
        )}
      >
        <div className="sm:p-2">
          <a href="/" className="font-modak p-1 text-4xl md:text-5xl">SoftGang</a>
        </div>

        <nav
          className={cn(
            'hidden md:block' // Responsive
          )}
          aria-label="Main"
        >
          <div
            className={cn(
              'flex items-center justify-center', // Layout
              'gap-4', // Spacing
              'px-4 py-4' // Spacing
            )}
          >
            <Button variant="link" href="/#our-services">
              Services
            </Button>
            <Button variant="link" href="/about">
              About
            </Button>
            <Button variant="secondary" href="#contact-us">
              {"Let's Start"}
            </Button>
          </div>
        </nav>

        <div
          className={cn(
            'md:hidden' // Responsive
          )}
        >
          <button
            type="button"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className={cn(
              'inline-flex items-center justify-center', // Layout
              'rounded border-2 border-black bg-white', // Visual
              'p-2', // Spacing
              'shadow-md transition hover:shadow active:shadow-none' // Effects
            )}
          >
            <span className="sr-only">Open main menu</span>
            <div
              className={cn(
                'flex flex-col items-center justify-center', // Layout
                'gap-1' // Spacing
              )}
            >
              <span
                className={cn(
                  'block h-0.5 w-6 bg-black', // Top bar
                  'origin-center transition-transform duration-200', // Animation
                  isOpen ? 'translate-y-[6px] rotate-45' : ''
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-6 bg-black', // Middle bar
                  'origin-center transition-opacity duration-200', // Animation
                  isOpen ? 'opacity-0' : 'opacity-100'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-6 bg-black', // Bottom bar
                  'origin-center transition-transform duration-200', // Animation
                  isOpen ? '-translate-y-[6px] -rotate-45' : ''
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden', // Responsive
          isOpen ? 'mt-2 block' : 'hidden' // Visibility
        )}
      >
        <nav aria-label="Mobile">
          <div
            className={cn(
              'flex flex-col', // Layout
              'gap-2', // Spacing
              'pt-2' // Spacing
            )}
          >
            <Button
              className={cn('w-full')}
              variant="link"
              href="/#our-services"
            >
              Services
            </Button>
            <Button className={cn('w-full')} variant="link" href="/about">
              About
            </Button>
            <Button
              className={cn('w-full')}
              variant="secondary"
              href="#contact-us"
            >
              {"Let's Start"}
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

import type React from 'react';
import { cn } from '@/lib/utils';

interface StepProps {
  number: number | string;
  label: string;
  className?: string;
  rightIcon?: React.ReactNode;
}

export function Step({ number, label, className, rightIcon }: StepProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3',
        'rounded border-2 border-black px-4 py-2',
        className
      )}
    >
      <div
        className={cn(
          'flex h-6 w-6 items-center justify-center',
          'rounded-full border border-black bg-primary text-xs font-bold text-primary-foreground'
        )}
      >
        {number}
      </div>
      <span className={cn('font-sans text-sm font-semibold')}>{label}</span>
      {rightIcon}
    </div>
  );
}



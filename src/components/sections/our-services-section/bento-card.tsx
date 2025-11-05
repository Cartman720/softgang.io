'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface BentoCardProps {
  className?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  layoutId?: string;
}

export default function BentoCard({
  className,
  title,
  subtitle,
  icon,
  children,
  layoutId,
}: BentoCardProps) {
  return (
    <motion.div
      layout
      layoutId={layoutId}
      className={cn(
        'relative flex h-full cursor-pointer flex-col overflow-hidden rounded border-4 border-black p-6 shadow-lg',
        className
      )}
    >
      <div className="relative">
        {icon ? (
          <div className="mb-6 inline-block rounded border-2 border-black bg-white p-3">
            {icon}
          </div>
        ) : null}
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        {subtitle ? (
          <p className="mt-3 border-l-4 pl-2 text-sm font-medium">{subtitle}</p>
        ) : null}
      </div>
      {children ? (
        <div className="mt-4 space-y-3 text-sm leading-relaxed font-medium">
          {children}
        </div>
      ) : null}
      <div className="absolute right-3 bottom-3 flex space-x-1">
        <div className="h-2 w-2 rounded-full bg-black" />
        <div className="h-2 w-2 rounded-full bg-black" />
        <div className="h-2 w-2 rounded-full bg-black" />
      </div>
    </motion.div>
  );
}

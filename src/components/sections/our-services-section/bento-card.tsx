"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        "relative border-4 border-black p-6 shadow-lg cursor-pointer overflow-hidden h-full flex flex-col rounded",
        className
      )}
    >
      <div className="relative">
        {icon ? (
          <div className="mb-6 bg-white p-3 inline-block border-2 border-black rounded">
            {icon}
          </div>
        ) : null}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {subtitle ? (
          <p className="font-medium text-sm mt-3 border-l-4 pl-2">{subtitle}</p>
        ) : null}
      </div>
      {children ? (
        <div className="mt-4 space-y-3 text-sm leading-relaxed font-medium">
          {children}
        </div>
      ) : null}
      <div className="absolute bottom-3 right-3 flex space-x-1">
        <div className="w-2 h-2 bg-black rounded-full" />
        <div className="w-2 h-2 bg-black rounded-full" />
        <div className="w-2 h-2 bg-black rounded-full" />
      </div>
    </motion.div>
  );
}

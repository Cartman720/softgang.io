"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import BentoCard, { BentoCardProps } from "./bento-card";

interface ServiceCardWithModalProps extends Omit<BentoCardProps, "children"> {
  children: React.ReactNode;
}

export default function ServiceCardWithModal({
  title,
  subtitle,
  icon,
  children,
  className,
}: ServiceCardWithModalProps) {
  const layoutKey = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className="text-left w-full h-full">
          <BentoCard
            title={title}
            subtitle={subtitle}
            icon={icon}
            className={cn(className, open ? "invisible" : "")}
            layoutId={layoutKey}
          />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 bg-black/40 z-40"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <BentoCard
                title={title}
                subtitle={subtitle}
                icon={icon}
                className={cn(
                  "fixed inset-0 z-50 m-auto w-[92vw] max-w-2xl max-h-[80vh] overflow-auto cursor-default",
                  className
                )}
                layoutId={layoutKey}
              >
                <Dialog.Title className="sr-only">{title}</Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="absolute top-3 right-3 inline-grid place-items-center h-9 w-9 border-2 border-black bg-white shadow hover:translate-y-0.5 active:translate-y-1 transition"
                    aria-label="Close"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </Dialog.Close>
                <div className="text-sm leading-relaxed font-medium">
                  {children}
                </div>
              </BentoCard>
            </Dialog.Content>
          </>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  GemIcon,
  GlobeIcon,
  StarIcon,
  ZapIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

interface BentoCardProps {
  className?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  layoutId?: string;
}

function BentoCard({
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
          <p className="font-medium text-sm mt-3 border-l-4 pl-2">
            {subtitle}
          </p>
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="inline-grid place-items-center h-5 w-5 shrink-0 rounded-full bg-white text-black border-2 border-black">
        <CheckIcon size={12} />
      </span>
      <span className="flex-1">{children}</span>
    </li>
  );
}

export default function OurServicesSection() {
  return (
    <section className="px-4 relative">
      <LayoutGroup id="our-services">
        <div className="py-20 px-4 container mx-auto max-w-8xl bg-white rounded-lg border-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="font-head text-3xl lg:text-4xl font-semibold">
                Our services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              {/* Tech Talent Outsourcing - wide card */}
              <div className="col-span-1 md:col-span-2 h-full">
                <ServiceCardWithModal
                  className="h-full bg-[#FFF2B2]"
                  title="Tech Talent Outsourcing"
                  subtitle="Get skilled developers without the hiring hassle"
                  icon={<ZapIcon className="w-8 h-8" />}
                >
                  <div className="space-y-3">
                    <p>
                      We connect startups and scaleups with vetted developers
                      who can start contributing immediately. Our front-end and
                      back-end specialists focus on building SaaS products and
                      platforms using JavaScript, Python, React, Node.js, and
                      modern cloud infrastructure. You get quality developers at
                      competitive rates without the months-long hiring process.
                    </p>
                    <div>
                      <div className="font-semibold">Tech stack:</div>
                      <p>
                        JavaScript, Python, React, Node.js, PostgreSQL,
                        AWS/Azure/GCP Cloud, React-Native, Flutter
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold">Perfect for:</div>
                      <p>
                        Scaling development teams, filling skill gaps,
                        project-based work, and rapid prototyping
                      </p>
                    </div>
                  </div>
                </ServiceCardWithModal>
              </div>

              {/* Intelligent Automation / Hyperautomation */}
              <ServiceCardWithModal
                className="h-full bg-[#BDE0FE]"
                title="Intelligent Automation / Hyperautomation"
                subtitle="Connect your tools with intelligent automation."
                icon={<ZapIcon className="w-8 h-8" />}
              >
                <div className="space-y-3">
                  <p>
                    Streamline your existing business processes by connecting
                    your current software stack with smart automation. We build
                    intelligent workflows that combine Robotic Process
                    Automation (RPA) with advanced Artificial Intelligence (AI)
                    and Generative AI, which trigger actions across your tools,
                    i.e., from automatically updating CRMs when deals close, to
                    generating reports from multiple data sources, to routing
                    support tickets based on sentiment analysis. Focus on
                    connecting and optimizing what you already have.
                  </p>
                  <div>
                    <div className="font-semibold">Perfect for:</div>
                    <p>
                      Automating redundant tasks, avoiding human errors, and
                      saving time. It’s applicable in various industries and
                      functions.
                    </p>
                  </div>
                </div>
              </ServiceCardWithModal>

              {/* Cloud-Native Development */}
              <ServiceCardWithModal
                className="h-full bg-[#C4FF83]"
                title="Cloud-Native Development"
                subtitle="Flexible, scalable infrastructure on AWS, Azure, and GCP."
                icon={<GlobeIcon className="w-8 h-8" />}
              >
                <div className="space-y-3">
                  <p>
                    Enjoy full flexibility and scalability of your resources,
                    allowing you to scale up or down as needed, based on current
                    demand, and save money by only paying for what you use. We
                    are certified AWS practitioners, but we also have experience
                    with Microsoft Azure and Google Cloud. Whenever you want to
                    build an independent cloud architecture and innovate your
                    way, we are here to support you by setting up the space just
                    the way you need it.
                  </p>
                  <div>
                    <div className="font-semibold">Perfect for:</div>
                    <p>Innovators, SaaS platforms, AI-agents…</p>
                  </div>
                </div>
              </ServiceCardWithModal>

              {/* Strategic and Technical Consulting */}
              <ServiceCardWithModal
                className="h-full bg-[#EAB8FF]"
                title="Strategic and Technical Consulting"
                subtitle="Strategic tech leadership without the full-time cost."
                icon={<GemIcon className="w-8 h-8" />}
              >
                <div className="space-y-3">
                  <p>
                    ​​Get an experienced technical or strategic leader who
                    understands both code and business. We help you make
                    critical decisions about software architecture, choose the
                    right tech stack for your goals, and oversee your entire
                    development process. Whether you need to optimize costs,
                    accelerate development speed, or establish the right team
                    structure, we provide the technical expertise and business
                    judgment that growing companies require.
                  </p>
                  <div>
                    <div className="font-semibold">What we handle:</div>
                    <ul className="mt-2 space-y-2">
                      <Bullet>Architecture decisions</Bullet>
                      <Bullet>Tech stack selection</Bullet>
                      <Bullet>Team building & development oversight</Bullet>
                      <Bullet>Cost optimization</Bullet>
                      <Bullet>Technical strategy</Bullet>
                    </ul>
                  </div>
                </div>
              </ServiceCardWithModal>

              {/* Proof of Concept Development */}
              <ServiceCardWithModal
                className="h-full bg-[#FFD1DC]"
                title="Proof of Concept Development"
                subtitle="Turn your vision into reality, fast"
                icon={<StarIcon className="w-8 h-8" />}
              >
                <div className="space-y-3">
                  <p>
                    Don't have a tech co-founder? No problem. We help
                    solo-preneurs and non-technical founders to quickly and
                    efficiently build their first Proof of Concept. We will help
                    you conduct comprehensive research and quickly build PoCs to
                    validate ideas and understand your users. We leverage both
                    traditional coding and the no-code/low-code platforms to
                    maximize speed-to-market and minimize initial investment.
                  </p>
                  <div>
                    <div className="font-semibold">Perfect for:</div>
                    <p>
                      First-time founders, idea validation, rapid prototyping
                    </p>
                  </div>
                </div>
              </ServiceCardWithModal>
            </div>
          </div>
        </div>
      </LayoutGroup>
    </section>
  );
}

interface ServiceCardWithModalProps extends Omit<BentoCardProps, "children"> {
  children: React.ReactNode;
}

function ServiceCardWithModal({
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

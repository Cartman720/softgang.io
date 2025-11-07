'use client';

import { GemIcon, GlobeIcon, StarIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { LayoutGroup } from 'framer-motion';
import ServiceCardWithModal from './service-card-with-modal';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';
import Star2 from '@/components/stars/star-2';
import Star3 from '@/components/stars/star-3';
import Star4 from '@/components/stars/star-4';

interface BentoCardProps {
  className?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  layoutId?: string;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className={cn('flex items-start gap-2')}>
      <span
        className={cn(
          'inline-grid h-5 w-5 shrink-0 place-items-center rounded-full',
          'border-2 border-black bg-white text-black'
        )}
      >
        <CheckIcon size={12} />
      </span>
      <span className={cn('flex-1')}>{children}</span>
    </li>
  );
}

export function OurServicesSection() {
  const [star1Color, star2Color, star3Color, star4Color, star5Color] = useMemo(() => {
    const palette = [
      '#FF4D4F', // Bright red
      '#3B82F6', // Bright blue
      '#22C55E', // Bright green
      '#FFD1DC',
      '#BDE0FE',
      '#C4FF83',
      '#FFF2B2',
      '#EAB8FF',
    ];
    const pick = () => palette[Math.floor(Math.random() * palette.length)];
    return [pick(), pick(), pick(), pick(), pick()];
  }, []);
  return (
    <section id="our-services"
      className={cn(
        'relative',
        'section-padding-x',
        'mt-16 md:mt-24',
        'scroll-mt-24 md:scroll-mt-28 xl:scroll-mt-32',
        'xl:mt-32'
      )}
    >
      <LayoutGroup id="our-services">
        <div
          className={cn(
            'max-w-8xl container mx-auto',
            'relative overflow-hidden',
            'rounded-lg border-4 border-black bg-white',
            'px-4 py-6 md:py-20'
          )}
          style={{
            backgroundImage: "url('/grid.svg')",
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Decorative stars */}
          <Star4
            size={64}
            color={star1Color}
            stroke="#000000"
            strokeWidth={2}
            className={cn('absolute', 'top-6 left-6', 'text-black', 'hidden md:block')}
            aria-hidden
          />
          <Star3
            size={48}
            color={star2Color}
            stroke="#000000"
            strokeWidth={2}
            className={cn('absolute', 'right-6 bottom-6', 'text-black', 'hidden sm:block')}
            aria-hidden
          />
          <Star2
            size={40}
            color={star3Color}
            stroke="#000000"
            strokeWidth={2}
            className={cn(
              'absolute',
              'top-1/2 right-12 -translate-y-1/2',
              'text-black',
              'sm:hidden'
            )}
            aria-hidden
          />
          {/* Extra accents */}
          <Star2
            size={36}
            color={star4Color}
            stroke="#000000"
            strokeWidth={2}
            className={cn(
              'absolute',
              'top-10 right-24',
              'text-black',
              'hidden md:block'
            )}
            aria-hidden
          />
          <Star4
            size={44}
            color={star5Color}
            stroke="#000000"
            strokeWidth={2}
            className={cn(
              'absolute',
              'bottom-1/3 left-8',
              'text-black',
              'hidden sm:block'
            )}
            aria-hidden
          />
          <div className={cn('mx-auto max-w-6xl')}>
            <div className={cn('mb-6')}>
              <h2
                className={cn(
                  'font-head font-semibold',
                  'text-3xl lg:text-4xl'
                )}
              >
                Our services
              </h2>
            </div>
            <div
              className={cn(
                'grid auto-rows-fr grid-cols-1 gap-6',
                'md:grid-cols-3'
              )}
            >
              {/* Tech Talent Outsourcing - wide card */}
              <div className={cn('col-span-1 h-full', 'md:col-span-2')}>
                <ServiceCardWithModal
                  className={cn('h-full bg-[#FFF2B2]')}
                  title="Tech Talent Outsourcing"
                  subtitle="Get skilled developers without the hiring hassle"
                  icon={<ZapIcon className={cn('h-8 w-8')} />}
                >
                  <div className={cn('space-y-3')}>
                    <p>
                      We connect startups and scaleups with vetted developers
                      who can start contributing immediately. Our front-end and
                      back-end specialists focus on building SaaS products and
                      platforms using JavaScript, Python, React, Node.js, and
                      modern cloud infrastructure. You get quality developers at
                      competitive rates without the months-long hiring process.
                    </p>
                    <div>
                      <div className={cn('font-semibold')}>Tech stack:</div>
                      <p>
                        JavaScript, Python, React, Node.js, PostgreSQL,
                        AWS/Azure/GCP Cloud, React-Native, Flutter
                      </p>
                    </div>
                    <div>
                      <div className={cn('font-semibold')}>Perfect for:</div>
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
                className={cn('h-full bg-[#BDE0FE]')}
                title="Intelligent Automation / Hyperautomation"
                subtitle="Connect your tools with intelligent automation."
                icon={<ZapIcon className={cn('h-8 w-8')} />}
              >
                <div className={cn('space-y-3')}>
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
                    <div className={cn('font-semibold')}>Perfect for:</div>
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
                className={cn('h-full bg-[#C4FF83]')}
                title="Cloud-Native Development"
                subtitle="Flexible, scalable infrastructure on AWS, Azure, and GCP."
                icon={<GlobeIcon className={cn('h-8 w-8')} />}
              >
                <div className={cn('space-y-3')}>
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
                    <div className={cn('font-semibold')}>Perfect for:</div>
                    <p>Innovators, SaaS platforms, AI-agents…</p>
                  </div>
                </div>
              </ServiceCardWithModal>

              {/* Strategic and Technical Consulting */}
              <ServiceCardWithModal
                className={cn('h-full bg-[#EAB8FF]')}
                title="Strategic and Technical Consulting"
                subtitle="Strategic tech leadership without the full-time cost."
                icon={<GemIcon className={cn('h-8 w-8')} />}
              >
                <div className={cn('space-y-3')}>
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
                    <div className={cn('font-semibold')}>What we handle:</div>
                    <ul className={cn('mt-2 space-y-2')}>
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
                className={cn('h-full bg-[#FFD1DC]')}
                title="Proof of Concept Development"
                subtitle="Turn your vision into reality, fast"
                icon={<StarIcon className={cn('h-8 w-8')} />}
              >
                <div className={cn('space-y-3')}>
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
                    <div className={cn('font-semibold')}>Perfect for:</div>
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

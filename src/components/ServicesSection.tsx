import Star4 from "./stars/star-4";
import { CheckIcon, GemIcon, GlobeIcon, StarIcon, ZapIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgClassName?: string;
  className?: string;
  iconWrapperClassName?: string;
}

function ServiceCard({
  icon,
  title,
  description,
  bgClassName,
  className,
  iconWrapperClassName,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "border-2 border-black p-4 sm:p-6 shadow-lg rounded",
        "hover:scale-105 hover:translate-y-2 transition-all duration-75",
        className
      )}
    >
      <div className="text-black">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={cn(
              "grid h-6 w-6 place-items-center rounded-full border-2 border-black bg-white",
              iconWrapperClassName
            )}
          >
            {icon}
          </span>
          <h4 className="font-head text-lg lg:text-xl font-medium">{title}</h4>
        </div>
        <p className="font-sans text-base leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

function ServicesCards() {
  return (
    <div>
      <ServiceCard
        icon={<ZapIcon size={16} />}
        title="Ship fast"
        description="On-demand experts to accelerate your roadmap."
        className="max-w-md bg-white w-full animate-jump-in duration-200"
        iconWrapperClassName="bg-[#C4FF83]"
      />

      <ServiceCard
        icon={<GemIcon size={16} />}
        title="Quality first"
        description="Senior engineers with a product mindset."
        className="bg-[#C4FF83] shadow-xl w-full -mt-2 ml-4"
      />

      <ServiceCard
        icon={<StarIcon size={16} />}
        title="Great value"
        description="Transparent pricing tailored to your needs."
        className="bg-[#FED13B] shadow-xl w-full ml-8 -mt-2"
      />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="px-4 lg:px-8">
      <div
        className={cn(
          "container mx-auto max-w-8xl my-12 lg:my-20",
          "shadow-lg rounded-lg",
          "bg-[#6051e4] py-14 lg:py-20 relative overflow-hidden"
        )}
      >
        {/* Decorative asterisk (uses public/next.svg as a placeholder accent) */}
        <Star4
          className="text-white absolute top-6 left-4"
          stroke="#000"
          color="#FFF500"
          strokeWidth={4}
          size={132}
        />

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center">
            {/* Copy */}
            <div className="text-white flex-1 min-w-0">
              <h2 className="font-head text-3xl lg:text-4xl font-semibold mb-4 drop-shadow-[4px_4px_0_black]">
                Flexible, affordable, and innovative services on demand.
              </h2>
              <p className="font-sans text-base lg:text-lg text-gray-100/90 font-medium leading-relaxed">
                Dedicated to startups and scaleups.
              </p>

              <div className="mt-8 lg:mt-10 max-w-xl">
                <p className="font-sans text-semibold lg:text-lg text-white font-medium leading-relaxed">
                  If you are looking to scale your team quickly or ship a
                  feature, let's talk!
                </p>

                <p className="mt-4 font-sans text-base text-gray-100/90 font-medium">
                  We are offering:
                </p>

                <ul className="mt-3 space-y-3">
                  <BulletItem>Europe-based talent pool</BulletItem>
                  <BulletItem>Solid value for money</BulletItem>
                  <BulletItem>Flexible contracts</BulletItem>
                </ul>
              </div>
            </div>

            {/* Right stack of cards */}
            <div className="flex-1 w-full lg:w-auto">
              <ServicesCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BulletItemProps {
  children: React.ReactNode;
  className?: string;
  iconWrapperClassName?: string;
  textClassName?: string;
}

function BulletItem({
  children,
  className,
  iconWrapperClassName,
  textClassName,
}: BulletItemProps) {
  return (
    <li className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "inline-grid place-items-center h-6 w-6 shrink-0 rounded-full",
          "bg-[#C4FF83] text-black border-2 border-black shadow-sm",
          iconWrapperClassName
        )}
      >
        <CheckIcon size={16} />
      </span>
      <span
        className={cn(
          "font-sans text-base lg:text-lg text-white/95 font-semibold leading-snug",
          textClassName
        )}
      >
        {children}
      </span>
    </li>
  );
}

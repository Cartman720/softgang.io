import Star4 from "@/components/stars/star-4";
import { CheckIcon, GemIcon, StarIcon, ZapIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconWrapperClassName?: string;
}

function ServiceCard({
  icon,
  title,
  description,
  className,
  iconWrapperClassName,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "rounded border-2 border-black p-4 sm:p-6 shadow-lg",
        "transition-all duration-75 hover:translate-y-2 hover:scale-105",
        className
      )}
    >
      <div className={cn("text-black")}> 
        <div className={cn("mb-2", "flex items-center gap-2")}>
          <span
            className={cn(
              "grid h-6 w-6 place-items-center rounded-full",
              "border-2 border-black bg-white",
              iconWrapperClassName
            )}
          >
            {icon}
          </span>
          <h4 className={cn("font-head font-medium", "text-lg lg:text-xl")}>{title}</h4>
        </div>
        <p className={cn("font-sans text-base font-medium leading-relaxed")}>{description}</p>
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
        className={cn("w-full max-w-md animate-jump-in bg-white", "duration-200")}
        iconWrapperClassName={cn("bg-[#C4FF83]")}
      />

      <ServiceCard
        icon={<GemIcon size={16} />}
        title="Quality first"
        description="Senior engineers with a product mindset."
        className={cn("w-full -mt-2 ml-4 bg-[#C4FF83] shadow-xl")}
      />

      <ServiceCard
        icon={<StarIcon size={16} />}
        title="Great value"
        description="Transparent pricing tailored to your needs."
        className={cn("w-full ml-8 -mt-2 bg-[#FED13B] shadow-xl")}
      />
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className={cn("px-4", "lg:px-8")}> 
      <div
        className={cn(
          "container mx-auto my-12 max-w-8xl lg:my-20",
          "relative overflow-hidden rounded-lg shadow-lg",
          "bg-[#6051e4] py-14 lg:py-20"
        )}
      >
        {/* Decorative asterisk (uses public/next.svg as a placeholder accent) */}
        <Star4
          className={cn("absolute top-6 left-4", "text-white")}
          stroke="#000"
          color="#FFF500"
          strokeWidth={4}
          size={132}
        />

        <div className={cn("relative mx-auto max-w-6xl px-4")}> 
          <div
            className={cn(
              "flex items-start gap-12 lg:items-center lg:gap-20",
              "flex-col lg:flex-row"
            )}
          >
            {/* Copy */}
            <div className={cn("min-w-0 flex-1 text-white")}> 
              <h2
                className={cn(
                  "mb-4 drop-shadow-[4px_4px_0_black]",
                  "font-head font-semibold",
                  "text-3xl lg:text-4xl"
                )}
              >
                Flexible, affordable, and innovative services on demand.
              </h2>
              <p className={cn("font-sans text-base font-medium leading-relaxed", "text-gray-100/90")}>
                Dedicated to startups and scaleups.
              </p>

              <div className={cn("mt-8 max-w-xl lg:mt-10")}> 
                <p className={cn("font-sans font-medium leading-relaxed", "text-white", "lg:text-lg")}> 
                  If you are looking to scale your team quickly or ship a
                  feature, let's talk!
                </p>

                <p className={cn("mt-4 font-sans text-base font-medium", "text-gray-100/90")}> 
                  We are offering:
                </p>

                <ul className={cn("mt-3 space-y-3")}> 
                  <BulletItem>Europe-based talent pool</BulletItem>
                  <BulletItem>Solid value for money</BulletItem>
                  <BulletItem>Flexible contracts</BulletItem>
                </ul>
              </div>
            </div>

            {/* Right stack of cards */}
            <div className={cn("w-full flex-1 lg:w-auto")}> 
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
          "inline-grid h-6 w-6 shrink-0 place-items-center rounded-full",
          "border-2 border-black bg-[#C4FF83] text-black shadow-sm",
          iconWrapperClassName
        )}
      >
        <CheckIcon size={16} />
      </span>
      <span
        className={cn(
          "font-sans font-semibold leading-snug",
          "text-white/95",
          "text-base lg:text-lg",
          textClassName
        )}
      >
        {children}
      </span>
    </li>
  );
}



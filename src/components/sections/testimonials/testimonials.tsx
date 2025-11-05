import { HeartHandshake } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/retroui/Button";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className={cn("px-4", "py-20")}> 
      <div className={cn("mx-auto max-w-6xl")}> 
        <div className={cn("mb-20 text-center")}> 
          <Badge
            className={cn(
              "mb-12 inline-flex items-center gap-2 font-semibold",
              "bg-red-400 text-white"
            )}
          >
            <HeartHandshake size={16} className={cn("text-white")} /> Wall of Love
          </Badge>
          <h2 className={cn("mb-4 font-head font-semibold", "text-3xl lg:text-4xl")}>
            Trusted by{" "}
            <span
              className={cn(
                "inline-block -rotate-1 transform",
                "border-2 border-black bg-primary px-3"
              )}
            >
              partners
            </span>
          </h2>
          <p
            className={cn(
              "mx-auto max-w-2xl font-sans text-lg font-medium",
              "text-muted-foreground"
            )}
          >
            Don't just take our word for it. Hear what our customers have to say
            about their experience.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className={cn("mb-16")}> 
          <TestimonialCard
            size="featured"
            variant="primary"
            quote={
              "We have been using the outsourcing services for over a year now. Their flexibility and value for money is exactly what we need and what they provide. The whole process, from establishing the partnership, through securing the right candidates and adjusting our needs on the go has been really smooth. They are a solid business partner."
            }
            name="Federica Lettieri"
            title="Co-Founder & CEO @ Bevi Express"
            showAvatar
            avatarSize="lg"
            initials="FL"
          />
        </div>

        {/* Additional testimonials grid */}
        <div className={cn("mb-16 grid gap-8", "md:grid-cols-1")}> 
          <TestimonialCard
            size="compact"
            variant="white"
            quote={
              "We have teamed up with a software gang as we did not know what path to pick in our future product development. We started with consulting, went through a technical and business audit, got a super solid report and ideas on how our future architecture should be, and what tech stack is the ideal choice. Very proactive team, big experience and vast technical & business knowledge."
            }
            name="Michał Laskowski"
            title="Co-Founder & CEO @ Cottonbee"
            initials="ML"
            showAvatar
          />
        </div>

        <div className={cn("mx-auto mt-16 text-center")}> 
          <Button size="lg" variant="secondary">
            Read More Stories →
          </Button>
        </div>
      </div>
    </section>
  );
}



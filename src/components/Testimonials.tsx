import { HeartHandshake } from "lucide-react";
import { Badge } from "./retroui/Badge";
import TestimonialCard from "./TestimonialCard";
import { Button } from "./retroui/Button";

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="font-semibold mb-12 inline-flex items-center gap-2 bg-red-400 text-white">
            <HeartHandshake size={16} className="text-white" /> Wall of Love
          </Badge>
          <h2 className="font-head text-3xl lg:text-4xl font-semibold mb-4">
            Trusted by{" "}
            <span className="bg-primary px-3 border-2 border-black inline-block transform -rotate-1">
              partners
            </span>
          </h2>
          <p className="font-sans text-lg font-medium text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our customers have to say
            about their experience.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-16">
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
        <div className="grid md:grid-cols-1 gap-8 mb-16">
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

        <div className="mt-16 mx-auto text-center">
          <Button size="lg" variant="secondary">
            Read More Stories →
          </Button>
        </div>
      </div>
    </section>
  );
}

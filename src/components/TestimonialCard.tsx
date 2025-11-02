import { cn } from "@/lib/utils";
import Star from "@/assets/star.svg";

type TestimonialSize = "featured" | "compact";
type TestimonialVariant = "primary" | "white";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  initials?: string;
  starCount?: number;
  size?: TestimonialSize;
  variant?: TestimonialVariant;
  className?: string;
  showAvatar?: boolean;
  avatarSize?: "md" | "lg";
}

export default function TestimonialCard({
  quote,
  name,
  title,
  initials,
  starCount = 5,
  size = "compact",
  variant = "white",
  className,
  showAvatar,
  avatarSize = "md",
}: TestimonialCardProps) {
  const isFeatured = size === "featured";

  const Stars = (
    <div className={cn("flex gap-1", isFeatured ? undefined : "mb-4")}>
      {Array.from({ length: starCount }).map((_, i) => (
        <Star
          key={i}
          className={cn("text-black fill-black", isFeatured ? "h-5 w-5" : "h-4 w-4")}
        />
      ))}
    </div>
  );

  if (isFeatured) {
    return (
      <div
        className={cn(
          "border-4 border-black shadow-lg p-8 transition-all",
          variant === "primary" ? "bg-primary" : "bg-white",
          className
        )}
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {showAvatar && (
            <div className={cn("border-black bg-white flex items-center justify-center font-black text-3xl shrink-0", "w-24 h-24 border-4")}>{initials}</div>
          )}
          <div className="space-y-4">
            {Stars}
            <blockquote className="text-2xl font-bold">{quote}</blockquote>
            <div className="border-l-4 border-black pl-4">
              <div className="font-black text-lg">{name}</div>
              <div className="font-medium">{title}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border-4 border-black shadow-lg p-8 bg-white transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#FFE600]",
        variant === "primary" && "bg-primary",
        className
      )}
    >
      {Stars}
      <blockquote className="text-lg font-medium mb-6">{quote}</blockquote>
      <div className="flex items-center gap-4">
        {showAvatar && (
          <div className={cn("border-black bg-primary flex items-center justify-center font-bold", avatarSize === "lg" ? "w-24 h-24 border-4" : "w-12 h-12 border-2")}>{initials}</div>
        )}
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm">{title}</div>
        </div>
      </div>
    </div>
  );
}



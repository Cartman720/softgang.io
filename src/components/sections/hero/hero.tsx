"use client";

import { Button } from "@/components/retroui/Button";
import Star1 from "@/components/stars/star-1";
import Star2 from "@/components/stars/star-2";
import Star3 from "@/components/stars/star-3";
import { Badge } from "@/components/retroui/Badge";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center",
        "border-b border-black"
      )}
    >
      {/* Decorative neo-brutalist stars */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "z-1"
        )}
        aria-hidden
      >
        <Star1
          className={cn(
            "absolute top-6 left-4",
            "text-primary"
          )}
          stroke="#000"
          strokeWidth={6}
          size={64}
        />
        <Star2
          className={cn(
            "absolute right-6 top-1/2 -translate-y-1/2 rotate-12",
            "text-secondary"
          )}
          stroke="#000"
          strokeWidth={6}
          size={56}
        />
        <Star3
          className={cn(
            "absolute bottom-6 left-1/3 -translate-x-1/2 rotate-45",
            "text-foreground"
          )}
          stroke="#000"
          strokeWidth={6}
          size={48}
        />
      </div>
      <div className={cn("px-4", "lg:px-8")}>
        <div className={cn("container mx-auto max-w-8xl", "py-10 lg:py-16")}>
          <div className={cn("mx-auto max-w-4xl", "p-6 sm:p-8 lg:p-12")}>
            <div className={cn("max-w-5xl", "flex flex-col items-center")}>
              <h1
                className={cn(
                  "relative text-center",
                  "font-head font-bold leading-tight text-black",
                  "text-5xl sm:text-6xl lg:text-7xl"
                )}
              >
                <span>We are the </span>
                <span
                  className={cn(
                    "inline-block align-middle",
                    "rounded-lg border-2 border-black",
                    "bg-primary text-primary-foreground",
                    "px-3 py-1"
                  )}
                >
                  Software Gang
                </span>

                <Star2
                  size={64}
                  className={cn("absolute top-0 right-0", "text-destructive")}
                  stroke="#000"
                  strokeWidth={3}
                />
              </h1>

              <p
                className={cn(
                  "mt-6 max-w-3xl text-center text-black",
                  "font-sans text-base font-semibold lg:text-xl"
                )}
              >
                We outsource
                {" "}
                <Badge variant="surface" className={cn("bg-accent", "text-base")}>
                  tech talent
                </Badge>
                {" "}
                and build software the smart way to help your company
                {" "}
                <Badge variant="surface" className={cn("bg-red-300", "text-base")}>
                  achieve its milestones
                </Badge>
              </p>

              <div
                className={cn(
                  "mt-20",
                  "flex flex-col gap-3",
                  "sm:flex-row sm:items-center sm:gap-4"
                )}
              >
                <Button variant="default">Get in touch</Button>
                <Button variant="secondary">See services</Button>
              </div>

              {/* Static trusted-by row under hero */}
              {/* <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <Badge variant="solid">
                  They have trusted us
                </Badge>
                <div className="flex items-center gap-6">
                  <Image src={BevyLogo} alt="Bevy" className="h-7 w-auto" />
                  <Image
                    src={CottonBeeLogo}
                    alt="CottonBee"
                    className="h-7 w-auto"
                  />
                </div>
                <Star2
                  size={32}
                  className="text-destructive"
                  stroke="#000"
                  strokeWidth={3}
                />
              </div> */}
            </div>
          </div>

          <div
            className={cn(
              "mt-10 flex items-center justify-center gap-2 text-xs text-black/80",
              "sm:mt-16",
              "animate-pulse"
            )}
          >
            <span className={cn("hidden sm:inline")}>Scroll to explore</span>
            <span
              className={cn(
                "grid h-6 w-6 place-items-center",
                "border-2 border-black bg-white shadow",
                "animate-bounce"
              )}
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}



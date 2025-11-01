"use client";

import Image from "next/image";
import BevyLogo from "@/assets/bevy-logo.png";
import CottonBeeLogo from "@/assets/cottonbee-logo.png";
import { Button } from "@/components/retroui/Button";
import Star1 from "@/components/stars/star-1";
import Star2 from "@/components/stars/star-2";
import Star3 from "@/components/stars/star-3";
import { Badge } from "./retroui/Badge";

export default function Hero() {
  return (
    <section className="relative border-b-2 border-black">
      {/* Decorative neo-brutalist stars */}
      <div className="pointer-events-none absolute inset-0 z-1" aria-hidden>
        <Star1
          className="text-primary absolute top-6 left-4"
          stroke="#000"
          strokeWidth={6}
          size={64}
        />
        <Star2
          className="text-secondary absolute right-6 top-1/2 -translate-y-1/2 rotate-12"
          stroke="#000"
          strokeWidth={6}
          size={56}
        />
        <Star3
          className="text-foreground absolute bottom-6 left-1/3 -translate-x-1/2 rotate-45"
          stroke="#000"
          strokeWidth={6}
          size={48}
        />
      </div>
      <div className="px-4 lg:px-8">
        <div className="container mx-auto max-w-8xl py-10 lg:py-16">
          <div className="p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="max-w-5xl flex flex-col items-center">
              <h1 className="font-head font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-black text-center relative">
                <span>We are the </span>
                <span className="align-middle inline-block border-2 rounded-lg border-black bg-primary text-primary-foreground px-3 py-1">
                  Software Gang
                </span>

                <Star2
                  size={64}
                  className="text-destructive absolute top-0 right-0"
                  stroke="#000"
                  strokeWidth={3}
                />
              </h1>

              <p className="mt-6 font-sans text-base lg:text-xl text-black max-w-3xl">
                We outsource tech talent and build software the smart way to
                help your company achieve its milestones
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button size="lg" variant="default">
                  Get in touch
                </Button>
                <Button size="lg" variant="secondary">
                  See services
                </Button>
              </div>

              {/* Static trusted-by row under hero */}
              {/* <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <Badge className="bg-amber-300 text-foreground">
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

          <div className="mt-10 sm:mt-16 flex animate-pulse items-center gap-2 text-xs text-black/80 justify-center ">
            <span className="hidden sm:inline">Scroll to explore</span>
            <span className="grid h-6 w-6 place-items-center border-2 border-black bg-white shadow animate-bounce">
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

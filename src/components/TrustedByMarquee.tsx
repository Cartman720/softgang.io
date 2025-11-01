"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import BevyLogo from "@/assets/bevy-logo.png";
import CottonBeeLogo from "@/assets/cottonbee-logo.png";
import LogoSquare from "@/assets/logo-square.png";

export default function TrustedByMarquee() {
  const logos = [
    { src: BevyLogo, alt: "Bevy" },
    { src: CottonBeeLogo, alt: "CottonBee" },
    { src: LogoSquare, alt: "SoftGang" },
  ];

  return (
    <section className="w-full bg-white border-t border-b-2 border-black">
      <div className="py-6 sm:py-8">
        <h2 className="sr-only">Trusted by</h2>
        <Marquee speed={40} pauseOnHover gradient={false} autoFill >
          <div className="flex items-center gap-12 sm:gap-16 mr-16">
            {logos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="block h-10 w-auto transition"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}



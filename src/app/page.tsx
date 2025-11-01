import { Button } from "@/components/retroui/Button";
import Hero from "@/components/Hero";
import TrustedByMarquee from "../components/TrustedByMarquee";

export default function Home() {
  return (
    <div
      className="bg-[#d6f3ca]"
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      <header className="py-6">
        <div className="container max-w-8xl mx-auto flex items-center justify-between ">
          <div className="p-2">
            <div className="font-modak text-5xl p-1">SoftGang</div>
          </div>

          <nav className="ml-auto">
            <div className="px-4 lg:px-6 py-4">
              <div className="flex items-center justify-center gap-4">
                <Button>Services</Button>
                <Button variant="secondary">Let's Start</Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustedByMarquee />
      </main>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Cta } from "./Cta";
import { LOGO_URL } from "./Logo";
import robotAsset from "@/assets/robot-moby.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div
        aria-hidden="true"
        className="bg-hero-blob pointer-events-none absolute inset-0 -z-10"
      />
      <div className="container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[55fr_45fr] lg:gap-16 lg:py-24">
        <div>
          <img
            src={LOGO_URL}
            width={528}
            height={506}
            alt="Nova Knights team logo: a winged knight holding a sword"
            className="hidden w-44 drop-shadow-sm md:block"
            style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,.25))" }}
          />
          <p className="eyebrow mt-6">FTC Team #32326 · Chesapeake Bay Region</p>
          <h1 id="hero-heading" className="h-hero mt-4 text-balance">
            <span className="text-gradient-brand">Nova Knights</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl text-muted-foreground italic">
            “11 FTC rookies driven by curiosity and creativity”
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta asChild size="lg" className="rounded-full">
              <Link to="/about">
                Meet the team
                <ArrowRight strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </Cta>
            <Cta asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/outreach">Our outreach</Link>
            </Cta>
          </div>
        </div>

        <figure className="relative">
          <img
            src={robotAsset.url}
            width={1002}
            height={1341}
            alt="MOBY, the Nova Knights competition robot, on the practice field"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card-hover"
          />
          <figcaption className="font-display mt-3 text-center text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            MOBY · 2025–26 robot
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Cta } from "./Cta";
import { Parallax } from "./Parallax";
import { TiltCard } from "./TiltCard";
const robotAsset = { url: "/images/robot-moby.jpg" };
export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div
        aria-hidden="true"
        className="bg-hero-blob pointer-events-none absolute inset-0 -z-10"
      />
      <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[52fr_48fr] lg:gap-16 lg:py-28">
        <div>
          <p className="chip eyebrow">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            FTC Team #32326 · Chesapeake Bay Region
          </p>
          <h1 id="hero-heading" className="h-hero mt-6 text-balance">
            <span className="block">Nova</span>
            <span className="text-gradient-brand block">Knights</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
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

        <Parallax speed={0.07}>
          <figure className="relative">
            <span
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/25 blur-3xl"
            />
            <TiltCard>
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={robotAsset.url}
                  width={1856}
                  height={1920}
                  alt="MOBY, the Nova Knights competition robot, on the practice field"
                  className="aspect-[4/3] w-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/40"
                />
                <span className="chip absolute top-4 left-4 text-xs font-medium">
                  Single-shooter · 90% accuracy
                </span>
                <span className="chip absolute right-4 bottom-16 text-xs font-medium">
                  Weight-optimized chassis
                </span>
                <div className="absolute inset-x-4 bottom-4 flex items-baseline justify-between">
                  <figcaption className="font-display text-sm font-bold tracking-[0.14em] uppercase">
                    MOBY
                  </figcaption>
                  <span className="text-xs text-muted-foreground">2025–26 robot</span>
                </div>
              </div>
              <span aria-hidden="true" className="tilt-shine" />
            </TiltCard>
          </figure>
        </Parallax>
      </div>
    </section>
  );
}

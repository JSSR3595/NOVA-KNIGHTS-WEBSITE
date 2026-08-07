import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Cta } from "./Cta";
import heroImage from "@/assets/hero-team.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Decorative gradient blob behind the hero image */}
      <div
        aria-hidden="true"
        className="bg-hero-blob pointer-events-none absolute inset-0 -z-10"
      />
      <div className="container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[55fr_45fr] lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow">Chesapeake Bay Region · Founded 2024</p>
          <h1 id="hero-heading" className="h-hero mt-4 text-balance">
            <span className="text-gradient-brand">Nova Knights</span> — a youth robotics
            competition team.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {"\n"}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta asChild size="lg" className="rounded-full">
              <Link to="/apply">
                Get involved
                <ArrowRight strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </Cta>
            <Cta asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/about">About the team</Link>
            </Cta>
          </div>
        </div>

        <figure className="relative">
          <img
            src={heroImage}
            width={1200}
            height={960}
            alt="Team members assembling a competition robot chassis at a workshop table"
            className="aspect-[5/4] w-full rounded-2xl object-cover shadow-card-hover"
          />
        </figure>
      </div>
    </section>
  );
}

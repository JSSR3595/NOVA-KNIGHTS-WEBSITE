import { Link } from "@tanstack/react-router";
import { HeartHandshake, ArrowRight } from "lucide-react";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

export function SupportCallout() {
  return (
    <section className="container-page pb-4" aria-labelledby="support-heading">
      <Reveal>
        <div className="bg-gradient-brand relative overflow-hidden rounded-3xl px-6 py-14 text-center text-primary-foreground shadow-card-hover md:px-16 md:py-20">
          <HeartHandshake
            strokeWidth={1.5}
            aria-hidden="true"
            className="mx-auto size-12 text-accent"
          />
          <h2 id="support-heading" className="h-section mt-6 text-balance">
            Keep the workshop lights on
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85">
            Parts, travel, and registration run about $640 per student each season. Every
            gift goes directly to the bench — we have no paid staff.
          </p>
          <Cta asChild variant="onDark" size="lg" className="mt-9 rounded-full">
            <Link to="/apply">
              Support the team
              <ArrowRight strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </Cta>
        </div>
      </Reveal>
    </section>
  );
}

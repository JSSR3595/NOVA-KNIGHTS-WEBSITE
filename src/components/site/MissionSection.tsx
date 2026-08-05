import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import missionImage from "@/assets/mission-outreach.jpg";

export function MissionSection() {
  return (
    <section className="section-y" aria-labelledby="mission-heading">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our mission</p>
          <h2 id="mission-heading" className="h-section mt-4 text-balance">
            Every student gets a wrench, a keyboard, and a voice
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We run a year-round program built on three habits: design something honest,
            test it until it fails, and pass what you learned to someone younger. No
            tryouts, no experience required, and no cost to participate.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <figure className="mx-auto max-w-4xl">
            <img
              src={missionImage}
              width={1200}
              height={800}
              loading="lazy"
              alt="Two teenage mentors helping younger children program small wheeled robots at a library table"
              className="aspect-[3/2] w-full rounded-2xl object-cover shadow-card"
            />
            <figcaption className="mt-3 text-center text-[0.8125rem] text-muted-foreground">
              Saturday outreach lab — our students mentor 8-to-11 year olds each month.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={200} className="mt-10 text-center">
          <Link
            to="/programs"
            className="font-display inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 transition-all hover:gap-3 hover:underline"
          >
            See how the season works
            <ArrowRight strokeWidth={1.75} className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

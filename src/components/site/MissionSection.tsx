import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import missionImage from "@/assets/mission-outreach.jpg";

export function MissionSection() {
  return (
    <section className="section-y" aria-labelledby="mission-heading">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our team</p>
          <h2 id="mission-heading" className="h-section mt-4 text-balance">
            Students building competition robots in the Chesapeake Bay region
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Nova Knights was founded in 2024. Since then the team has competed in the
            Chesapeake Bay region, qualified for the Chesapeake Championship, and reached a
            top 10% regional ranking.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <figure className="mx-auto max-w-4xl">
            <img
              src={missionImage}
              width={1200}
              height={800}
              loading="lazy"
              alt="Team members working with robot kits at a shared worktable"
              className="aspect-[3/2] w-full rounded-2xl object-cover shadow-card"
            />
          </figure>
        </Reveal>

        <Reveal delay={200} className="mt-10 text-center">
          <Link
            to="/about"
            className="font-display inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 transition-all hover:gap-3 hover:underline"
          >
            More about Nova Knights
            <ArrowRight strokeWidth={1.75} className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import { Instagram, ArrowRight } from "lucide-react";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { INSTAGRAM_URL, INTEREST_FORM_URL } from "./links";

export function SupportCallout() {
  return (
    <section className="container-page pb-16 md:pb-24" aria-labelledby="support-heading">
      <Reveal>
        <div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-14 md:px-14 md:py-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-primary/20 blur-3xl"
          />
          <Instagram strokeWidth={1.5} aria-hidden="true" className="size-10 text-accent" />
          <h2 id="support-heading" className="h-section mt-6 text-balance">
            Get in touch with the team
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Build updates, competition days, and team news are posted to our Instagram. If you are
            interested in our programs, fill out the interest form or shoot us a DM.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Cta asChild size="lg" className="rounded-full">
              <a href={INTEREST_FORM_URL} target="_blank" rel="noreferrer">
                Fill out the interest form
                <ArrowRight strokeWidth={1.75} aria-hidden="true" />
              </a>
            </Cta>
            <Cta asChild variant="outline" size="lg" className="rounded-full">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Instagram strokeWidth={1.75} aria-hidden="true" />
                @novaknights32326
              </a>
            </Cta>
          </div>
        </div>
      </Reveal>

    </section>
  );
}

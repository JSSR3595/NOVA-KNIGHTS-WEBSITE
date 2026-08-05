import { Instagram, ArrowRight } from "lucide-react";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { INSTAGRAM_URL } from "./SiteFooter";

export function SupportCallout() {
  return (
    <section className="container-page pb-16 md:pb-24" aria-labelledby="support-heading">
      <Reveal>
        <div className="bg-gradient-brand relative overflow-hidden rounded-3xl px-6 py-14 text-center text-primary-foreground shadow-card-hover md:px-16 md:py-20">
          <Instagram
            strokeWidth={1.5}
            aria-hidden="true"
            className="mx-auto size-12 text-accent"
          />
          <h2 id="support-heading" className="h-section mt-6 text-balance">
            Follow the season on Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85">
            Build updates, competition days, and team news are posted to our page.
          </p>
          <Cta asChild variant="onDark" size="lg" className="mt-9 rounded-full">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              @novaknights32326
              <ArrowRight strokeWidth={1.75} aria-hidden="true" />
            </a>
          </Cta>
        </div>
      </Reveal>
    </section>
  );
}

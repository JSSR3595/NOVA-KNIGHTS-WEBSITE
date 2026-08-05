import { Reveal } from "./Reveal";

/** Fictional supporters — placeholder wordmarks, no real organizations. */
const partners = [
  "Harborline Tooling",
  "Kestrel Machine Works",
  "Blue Meridian Fund",
  "Fairgrove Library",
  "Ninth Street Makers",
  "Orbit Fabrication",
];

export function PartnersStrip() {
  return (
    <section className="section-y" aria-labelledby="partners-heading">
      <div className="container-page text-center">
        <h2 id="partners-heading" className="eyebrow">
          Supported by
        </h2>
        <ul className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((name, i) => (
            <Reveal as="li" key={name} delay={i * 70} className="w-full">
              <div className="font-display grid h-20 w-full place-items-center rounded-xl border border-border bg-card px-4 text-center text-sm font-semibold text-muted-foreground grayscale transition-all duration-300 ease-out hover:text-primary hover:shadow-card hover:grayscale-0">
                {name}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

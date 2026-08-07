import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MEMBERS } from "@/components/site/team";

const title = "About Nova Knights — FTC Team #32326";
const description =
  "Meet the Nova Knights: 11 FTC rookies from the Chesapeake Bay region building engineering, programming, and teamwork skills through hands-on learning.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About us"
      title="We are the Nova Knights"
      intro="An enthusiastic team of 11 FTC rookies driven by curiosity and creativity, developing strong engineering, programming, and teamwork skills through hands-on learning and focused specialization."
    >
      <div className="bg-gradient-brand rounded-3xl px-6 py-12 text-center text-primary-foreground shadow-card-hover md:px-16 md:py-14">
        <h2 className="font-display text-sm font-semibold tracking-[0.18em] uppercase text-accent">
          Our mission
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-balance md:text-xl">
          To grow as leaders and strengthen our robotics skills, while upholding FIRST
          values, and inspiring the next generation of STEM leaders.
        </p>
      </div>

      <section aria-labelledby="team-heading" className="mt-20">
        <h2 id="team-heading" className="h-section text-balance">
          The team
        </h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((m) => (
            <li key={m.name} className="text-center">
              <img
                src={m.photo}
                width={310}
                height={310}
                loading="lazy"
                alt={`${m.name}, ${m.role}`}
                className="mx-auto size-40 rounded-full object-cover"
              />
              <h3 className="font-display mt-4 text-xl font-bold">{m.name}</h3>
              <p className="font-display mt-1 text-[0.8125rem] font-semibold tracking-[0.08em] text-primary uppercase">
                {m.role}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{m.focus}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}

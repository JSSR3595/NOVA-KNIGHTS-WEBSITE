import { ExternalLink } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const title = "Sponsorships — Nova Knights FTC Team #32326";
const description =
  "Meet the Haas Foundation, a proud sponsor supporting the Nova Knights FTC robotics team.";

export const Route = createFileRoute("/sponsorships")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sponsorships" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sponsorships" }],
  }),
  component: SponsorshipsPage,
});

function SponsorshipsPage() {
  return (
    <PageShell
      eyebrow="Sponsorships"
      title="Powered by people who believe in the next generation"
      intro="We are grateful to the Haas Foundation for sponsoring the Nova Knights and helping make our robotics journey possible."
    >
      <section aria-labelledby="haas-heading" className="glass-panel relative overflow-hidden rounded-3xl px-6 py-12 md:px-14">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl"
        />
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          Our sponsor
        </p>
        <h2 id="haas-heading" className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Haas Foundation
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          The Haas Foundation supports education and community programs that help students build meaningful futures through hands-on learning.
        </p>
        <a
          href="https://www.haasfoundation.org/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/40 px-5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Visit the Haas Foundation
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </section>
    </PageShell>
  );
}

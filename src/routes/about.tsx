import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const title = "About Nova Knights — Chesapeake Bay Region Robotics";
const description =
  "Nova Knights is a youth robotics competition team founded in 2024, competing in the Chesapeake Bay region.";

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

const facts = [
  { label: "Founded", value: "2024" },
  { label: "Region", value: "Chesapeake Bay" },
  { label: "Ranking", value: "Top 10% of the Chesapeake region" },
  { label: "Highlight", value: "Qualified for the Chesapeake Championship" },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About us"
      title="Nova Knights"
      intro="A youth robotics competition team founded in 2024, competing in the Chesapeake Bay region."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {facts.map((f) => (
          <li
            key={f.label}
            className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-200 ease-out hover:shadow-card-hover"
          >
            <p className="font-display text-[0.8125rem] font-semibold tracking-[0.02em] text-muted-foreground uppercase">
              {f.label}
            </p>
            <p className="font-display mt-2 text-xl font-semibold">{f.value}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

const title = "Awards & Results — Nova Knights Robotics";
const description =
  "Nova Knights results: qualified for the Chesapeake Championship and ranked in the top 10% of the Chesapeake region.";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/awards" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/awards" }],
  }),
  component: AwardsPage,
});

const results = [
  {
    Icon: Trophy,
    title: "Chesapeake Championship qualifier",
    body: "The team earned a spot at the Chesapeake Championship.",
  },
  {
    Icon: Medal,
    title: "Top 10% of the Chesapeake region",
    body: "Nova Knights currently ranks in the top 10% of the Chesapeake region.",
  },
];

function AwardsPage() {
  return (
    <PageShell
      eyebrow="Results"
      title="Where the team stands"
      intro="Only confirmed results are listed here. Send us any additional awards and we'll add them."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {results.map(({ Icon, title: t, body }) => (
          <li
            key={t}
            className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-200 ease-out hover:shadow-card-hover"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
              <Icon strokeWidth={1.75} className="size-6" aria-hidden="true" />
            </span>
            <h2 className="font-display mt-5 text-lg font-semibold">{t}</h2>
            <p className="mt-2 text-muted-foreground">{body}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

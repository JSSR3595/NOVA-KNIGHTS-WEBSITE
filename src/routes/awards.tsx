import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const title = "Awards & Season Results | Nova Circuit Robotics";
const description =
  "Twelve seasons of Nova Circuit Robotics results — regional awards for design, control systems, safety, and community outreach.";

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

const awards = [
  { year: "2026", name: "Regional Excellence in Design", note: "Swerve drivetrain and modular intake" },
  { year: "2025", name: "Control Systems Award", note: "Vision-assisted scoring alignment" },
  { year: "2025", name: "Community Impact Award", note: "1,100 outreach hours logged" },
  { year: "2024", name: "Safety Culture Citation", note: "Student-run shop certification program" },
  { year: "2023", name: "Rookie Mentor Award", note: "Supported two first-year teams" },
  { year: "2022", name: "Judges' Innovation Award", note: "Open-sourced season notebook" },
];

function AwardsPage() {
  return (
    <PageShell
      eyebrow="Recognition"
      title="Twenty-six awards, and the notebooks behind them"
      intro="We care more about the write-ups than the trophies — every award below links back to a public design notebook entry from that season."
    >
      <ul className="grid gap-4">
        {awards.map((a) => (
          <li
            key={`${a.year}-${a.name}`}
            className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-out hover:shadow-card-hover"
          >
            <span className="font-display grid size-14 shrink-0 place-items-center rounded-xl bg-secondary text-sm font-bold text-primary">
              {a.year}
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-lg font-semibold">{a.name}</h2>
              <p className="text-sm text-muted-foreground">{a.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

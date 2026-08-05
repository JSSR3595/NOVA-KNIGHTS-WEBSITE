import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Cpu, Users, Presentation } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

const title = "Programs — Build Season, Labs & Outreach | Nova Circuit";
const description =
  "Explore Nova Circuit Robotics programs: fall build season, off-season engineering labs, community outreach workshops, and the alumni mentor track.";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/programs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    Icon: Wrench,
    title: "Fall build season",
    body: "Nine weeks from kickoff to competition. Students prototype, machine, wire, and iterate a full competition robot together.",
  },
  {
    Icon: Cpu,
    title: "Off-season labs",
    body: "Spring workshops on CAD, embedded C, motion control, and machine vision — two evenings a week, drop-in friendly.",
  },
  {
    Icon: Users,
    title: "Community outreach",
    body: "Monthly Saturday labs where our students teach elementary and middle schoolers to build and program small robots.",
  },
  {
    Icon: Presentation,
    title: "Alumni mentor track",
    body: "Graduates return as paid-stipend mentors, coaching subsystem crews while building teaching and project-management skills.",
  },
];

function ProgramsPage() {
  return (
    <PageShell
      eyebrow="Programs"
      title="A season that runs all year"
      intro="Competition is nine weeks. The learning is fifty-two. Here is how a Nova Circuit year is structured, and where a new student can jump in."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {programs.map(({ Icon, title: t, body }) => (
          <article
            key={t}
            className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-card-hover"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
              <Icon strokeWidth={1.75} className="size-6" aria-hidden="true" />
            </span>
            <h2 className="font-display mt-5 text-xl font-semibold">{t}</h2>
            <p className="mt-3 text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

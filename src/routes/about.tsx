import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const title = "About Nova Circuit Robotics — Our Story and Values";
const description =
  "Meet Nova Circuit Robotics: a student-run nonprofit competition team founded in a two-car garage, now serving 148 students across the Fairgrove area.";

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

const values = [
  {
    title: "Students drive",
    body: "Every subsystem, budget line, and outreach event is owned by a student lead. Mentors coach; they do not build.",
  },
  {
    title: "Open bench",
    body: "No tryouts, no fees, no prior experience. We supply tools, transport, and a spot at the table.",
  },
  {
    title: "Document everything",
    body: "Design notebooks, CAD, and code are public so the next season and the next team start further ahead.",
  },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About us"
      title="A garage team that grew into a neighborhood program"
      intro="Nova Circuit Robotics started in 2014 with six students, one borrowed drill press, and a season of losses. Twelve years on, we field two competition squads and run free STEM labs every month."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <article
            key={v.title}
            className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-card-hover"
          >
            <h2 className="font-display text-xl font-semibold">{v.title}</h2>
            <p className="mt-3 text-muted-foreground">{v.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 max-w-3xl">
        <h2 className="h-section">How we are organized</h2>
        <p className="mt-4 text-muted-foreground">
          We are a registered 501(c)(3) nonprofit governed by a volunteer board of parents,
          alumni, and local engineers. Day-to-day the team splits into four student crews —
          mechanical, electrical, software, and community — each with an elected lead and a
          published season plan. Adults handle paperwork and safety training; students
          handle the robot.
        </p>
      </div>
    </PageShell>
  );
}

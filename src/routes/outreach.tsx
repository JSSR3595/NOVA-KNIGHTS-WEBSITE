import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import fll1 from "@/assets/outreach-fll-1.jpg.asset.json";
import fll2 from "@/assets/outreach-fll-2.jpg.asset.json";
import fll3 from "@/assets/outreach-fll-3.jpg.asset.json";

const title = "Outreach — Nova Knights FTC #32326";
const description =
  "Nova Knights outreach: inspiring younger FLL students, connecting with the FTC community, and applying shared learning to improve our robot and team.";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/outreach" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/outreach" }],
  }),
  component: OutreachPage,
});

const fllPoints = [
  "Visited a local FLL team of 5 students and introduced them to FIRST values through a short interactive session.",
  "Gave each student individual drive time on our FTC robot, totaling about 15 minutes of hands-on practice.",
  "Introduced various aspects of FTC: design strategy, the difference between programming in FLL and FTC, and the importance of outreach.",
];

const teams = [
  {
    name: "Beaver Bots (#26073)",
    points: [
      "Met with the Beaver Bots to compare robot design approaches",
      "Shared details about our mechanical layout and programming choices",
      "Broke down the advantages and drawbacks of dual-shooter designs",
      "After discussing the drawbacks of dual-shooters, we decided to focus on our single-shooter",
    ],
    outcome:
      "This discussion directly influenced our decision to switch to a single-shooter design, improving accuracy to 90%.",
  },
  {
    name: "Novatard (#24950)",
    points: [
      "Met with the Novatard robotics team",
      "Exchanged ideas on planning and running effective outreach events",
      "Learned strategies for engaging different teams and the community",
      "Discussed ways to better explain robotics concepts to new audiences",
    ],
    outcome:
      "These discussions helped us improve outreach planning and strengthen how we explain robotics concepts to new audiences.",
  },
];

const photos = [
  { url: fll1.url, alt: "Nova Knights members demonstrating their robot to a local FLL team" },
  { url: fll2.url, alt: "An FLL student driving the Nova Knights robot during the session" },
  { url: fll3.url, alt: "Students gathered around the robot during the outreach session" },
];

function OutreachPage() {
  return (
    <PageShell
      eyebrow="Outreach"
      title="Inspiring the next generation of STEM leaders"
      intro="Our outreach focuses on inspiring younger students, strengthening the FTC community, and applying shared learning to improve our robot and team."
    >
      <section aria-labelledby="fll-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 id="fll-heading" className="h-section text-balance">
              Local FLL team
            </h2>
            <ul className="mt-6 grid gap-4">
              {fllPoints.map((p) => (
                <li key={p} className="flex gap-3 text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 glass-panel rounded-2xl p-6 font-medium">
              The session increased student interest in FTC and provided early exposure to
              robot design, programming differences, and FIRST values.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {photos.map((p, i) => (
              <li key={p.url} className={i === 0 ? "sm:col-span-2" : undefined}>
                <img
                  src={p.url}
                  alt={p.alt}
                  loading="lazy"
                  className={`w-full rounded-2xl border border-white/10 object-cover shadow-card ${
                    i === 0 ? "aspect-[3/2]" : "aspect-square"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="community-heading" className="mt-20">
        <h2 id="community-heading" className="h-section text-balance">
          Connecting with the FTC community
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {teams.map((t) => (
            <li
              key={t.name}
              className="glass-panel glass-panel-hover rounded-2xl p-7"
            >
              <h3 className="font-display text-xl font-semibold text-primary">{t.name}</h3>
              <ul className="mt-4 grid gap-3">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-5 text-sm font-medium">
                {t.outcome}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}

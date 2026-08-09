import { Reveal } from "./Reveal";

/** Facts taken directly from the team portfolio. */
const facts = [
  { value: "#32326", label: "FTC team" },
  { value: "2024", label: "Founded" },
  { value: "11", label: "Members" },
  { value: "Chesapeake Bay", label: "Region" },
];

export function StatsStrip() {
  return (
    <section className="container-page pb-16 md:pb-24" aria-label="Team at a glance">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f, i) => (
          <Reveal as="li" key={f.label} delay={i * 90}>
            <div className="glass-panel glass-panel-hover h-full rounded-2xl p-6">
              <span className="font-display text-2xl font-bold text-primary md:text-3xl">
                {f.value}
              </span>
              <p className="font-display mt-2 text-[0.8125rem] font-semibold tracking-[0.02em] text-muted-foreground uppercase">
                {f.label}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

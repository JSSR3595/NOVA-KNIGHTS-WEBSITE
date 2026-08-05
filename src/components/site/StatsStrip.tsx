import { Reveal } from "./Reveal";

/** Only facts approved by the team are shown here. */
const facts = [
  { value: "2024", label: "Founded" },
  { value: "Chesapeake Bay", label: "Region" },
  { value: "Championship", label: "Qualified" },
  { value: "Top 10%", label: "Regional ranking" },
];

export function StatsStrip() {
  return (
    <section className="container-page pb-4 md:pb-8" aria-label="Team at a glance">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f, i) => (
          <Reveal as="li" key={f.label} delay={i * 90}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-card-hover">
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

import { Reveal } from "./Reveal";
import { MEMBERS } from "./team";

/** Staggered scroll-reveal grid of team members with hover profile reveal. */
export function TeamGrid() {
  return (
    <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {MEMBERS.map((m, i) => (
        <Reveal as="li" key={m.name} delay={(i % 3) * 90 + Math.floor(i / 3) * 40}>
          <div className="member-card group h-full rounded-2xl border border-transparent p-5 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-border hover:bg-card hover:shadow-card-hover">
            <div className="relative mx-auto size-44">
              <span
                aria-hidden="true"
                className="absolute inset-2 -z-10 rounded-full bg-accent/25 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <img
                src={m.photo}
                width={310}
                height={310}
                loading="lazy"
                alt={`${m.name}, ${m.role}`}
                className="size-44 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="font-display mt-3 text-base font-bold tracking-[0.06em] text-primary uppercase">
              <span className="sr-only">{m.name} — </span>
              {m.role}
            </h3>
            <p className="member-focus mt-2 text-sm text-muted-foreground">{m.focus}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

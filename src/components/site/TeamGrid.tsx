import { Reveal } from "./Reveal";
import { MEMBERS } from "./team";

/** Staggered scroll-reveal grid of team members. Photos stay uncropped. */
export function TeamGrid() {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {MEMBERS.map((m, i) => (
        <Reveal as="li" key={m.name} delay={(i % 4) * 80 + Math.floor(i / 4) * 40}>
          <div className="glass-panel glass-panel-hover group h-full overflow-hidden rounded-2xl p-4">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-6 -z-10 rounded-full bg-accent/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <img
                src={m.photo}
                width={310}
                height={310}
                loading="lazy"
                alt={`${m.name}, ${m.role}`}
                className="mx-auto size-40 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="font-display mt-4 text-base font-bold">{m.name}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
            <p className="member-focus mt-2 text-sm text-muted-foreground">{m.focus}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const stats = [
  { value: 148, suffix: "+", label: "Students mentored" },
  { value: 12, suffix: "", label: "Competition seasons" },
  { value: 26, suffix: "", label: "Regional awards" },
  { value: 4100, suffix: "+", label: "Outreach hours" },
];

/** Count-up number that animates the first time it scrolls into view. */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-primary md:text-5xl">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="container-page pb-4 md:pb-8" aria-label="Team by the numbers">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 90}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-card-hover">
              <CountUp value={s.value} suffix={s.suffix} />
              <p className="font-display mt-2 text-[0.8125rem] font-semibold tracking-[0.02em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

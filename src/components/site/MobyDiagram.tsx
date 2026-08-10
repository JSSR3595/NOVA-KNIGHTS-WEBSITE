import { useState } from "react";
import { cn } from "@/lib/utils";
import moby from "@/assets/robot-moby.jpg.asset.json";

/** Hotspot boxes are percentages of the photo (left/top/width/height). */
export type MobyPart = {
  id: string;
  name: string;
  note: string;
  box: { x: number; y: number; w: number; h: number };
};

export const mobyParts: MobyPart[] = [
  {
    id: "shooter",
    name: "3D printed (CAD) shooter",
    note: "Design choice: enables consistent shooting from multiple field positions.",
    box: { x: 22, y: 20, w: 36, h: 24 },
  },
  {
    id: "limelight",
    name: "Limelight camera",
    note: "Vision-based alignment and distance estimation.",
    box: { x: 57, y: 32, w: 15, h: 10 },
  },
  {
    id: "servo",
    name: "Barrier servo",
    note: "Barrier servo keeps artifacts contained.",
    box: { x: 48, y: 34, w: 11, h: 10 },
  },
  {
    id: "gears",
    name: "3D printed (CAD) gears",
    note: "Custom gearing designed in CAD.",
    box: { x: 66, y: 42, w: 13, h: 11 },
  },
  {
    id: "bands",
    name: "Three sets of rubber bands",
    note: "Purpose: reduces jamming and allows holding multiple artifacts reliably.",
    box: { x: 72, y: 44, w: 20, h: 14 },
  },
  {
    id: "ramp",
    name: "Ramp with barriers",
    note: "Design choice: guides artifacts cleanly while preventing penalties.",
    box: { x: 61, y: 51, w: 34, h: 30 },
  },
  {
    id: "funnel",
    name: "3D printed (CAD) funnel",
    note: "Design choice: guides artifacts cleanly while preventing penalties.",
    box: { x: 5, y: 42, w: 58, h: 47 },
  },
];

export function MobyDiagram() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-muted shadow-card">
        <img
          src={moby.url}
          alt="MOBY, the Nova Knights competition robot, with labelled subsystems"
          loading="lazy"
          className={cn(
            "w-full object-contain transition-all duration-300",
            active && "brightness-[.55] saturate-[.8]",
          )}
        />
        {mobyParts.map((p) => {
          const on = active === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive((c) => (c === p.id ? null : c))}
              onFocus={() => setActive(p.id)}
              onBlur={() => setActive((c) => (c === p.id ? null : c))}
              aria-label={`Highlight ${p.name}`}
              style={{
                left: `${p.box.x}%`,
                top: `${p.box.y}%`,
                width: `${p.box.w}%`,
                height: `${p.box.h}%`,
              }}
              className={cn(
                "absolute rounded-xl border-2 transition-all duration-300 outline-none",
                on
                  ? "border-accent bg-accent/12 shadow-[0_0_0_9999px_rgba(0,0,0,0.001),0_0_28px_var(--color-accent)]"
                  : "border-transparent hover:border-accent/60",
              )}
            >
              <span
                className={cn(
                  "font-display absolute -top-3 left-2 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap text-accent-foreground transition-opacity duration-200",
                  on ? "opacity-100" : "opacity-0",
                )}
              >
                {p.name}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-4">
        {mobyParts.map((p) => {
          const on = active === p.id;
          return (
            <li key={p.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive((c) => (c === p.id ? null : c))}
                onFocus={() => setActive(p.id)}
                onBlur={() => setActive((c) => (c === p.id ? null : c))}
                className={cn(
                  "glass-panel w-full rounded-2xl p-6 text-left transition-all duration-300",
                  on
                    ? "-translate-y-0.5 border-accent/50 shadow-card-hover"
                    : "hover:-translate-y-0.5",
                )}
              >
                <h3
                  className={cn(
                    "font-display font-semibold transition-colors",
                    on ? "text-accent" : "text-primary",
                  )}
                >
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

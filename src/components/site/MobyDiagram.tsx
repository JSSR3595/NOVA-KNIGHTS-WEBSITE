import { useState } from "react";
import { cn } from "@/lib/utils";
import moby from "@/assets/robot-moby.jpg.asset.json";
import shooter3 from "@/assets/shooter-3.jpg.asset.json";
import intake3 from "@/assets/intake-3.jpg.asset.json";

/** Hotspot boxes are percentages of the photo (left/top/width/height). */
export type MobyPart = {
  id: string;
  name: string;
  note: string;
  box: { x: number; y: number; w: number; h: number };
  /** Optional dedicated close-up from the portfolio, shown instead of a zoom. */
  alt?: { src: string; caption: string; alt: string };
};

export const mobyParts: MobyPart[] = [
  {
    id: "shooter",
    name: "3D printed (CAD) shooter",
    note: "Design choice: enables consistent shooting from multiple field positions.",
    box: { x: 24, y: 21, w: 36, h: 22 },
    alt: {
      src: shooter3.url,
      caption: "Final CAD shooter, off the robot",
      alt: "3D printed shooter part with a yellow internal ramp",
    },
  },
  {
    id: "servo",
    name: "Barrier servo",
    note: "Barrier servo keeps artifacts contained.",
    box: { x: 48, y: 35, w: 13, h: 10 },
  },
  {
    id: "limelight",
    name: "Limelight camera",
    note: "Vision-based alignment and distance estimation.",
    box: { x: 60, y: 32, w: 13, h: 10 },
  },
  {
    id: "gears",
    name: "3D printed (CAD) gears",
    note: "Custom gearing designed in CAD.",
    box: { x: 71, y: 39, w: 18, h: 12 },
    alt: {
      src: intake3.url,
      caption: "Intake assembly with the printed gears",
      alt: "3D printed intake mechanism showing printed gears and rubber bands",
    },
  },
  {
    id: "bands",
    name: "Three sets of rubber bands",
    note: "Purpose: reduces jamming and allows holding multiple artifacts reliably.",
    box: { x: 67, y: 50, w: 25, h: 15 },
    alt: {
      src: intake3.url,
      caption: "Three sets of rubber bands on the final intake",
      alt: "Intake mechanism with three sets of rubber bands",
    },
  },
  {
    id: "ramp",
    name: "Ramp with barriers",
    note: "Design choice: guides artifacts cleanly while preventing penalties.",
    box: { x: 58, y: 62, w: 34, h: 18 },
  },
  {
    id: "funnel",
    name: "3D printed (CAD) funnel",
    note: "Design choice: guides artifacts cleanly while preventing penalties.",
    box: { x: 6, y: 43, w: 54, h: 40 },
  },
];

function zoomStyle(box: MobyPart["box"]) {
  const cx = box.x + box.w / 2;
  const cy = box.y + box.h / 2;
  const scale = Math.min(2.6, Math.max(1.4, 78 / Math.max(box.w, box.h)));
  return {
    transformOrigin: `${cx}% ${cy}%`,
    transform: `translate(${50 - cx}%, ${50 - cy}%) scale(${scale})`,
  };
}

export function MobyDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const part = mobyParts.find((p) => p.id === active) ?? null;

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-muted shadow-card">
        <img
          src={moby.url}
          alt="MOBY, the Nova Knights competition robot, with labelled subsystems"
          loading="lazy"
          className={cn(
            "w-full object-contain transition-all duration-500",
            part && "brightness-[.5] saturate-[.8]",
          )}
        />

        {/* Hotspot outlines on the full robot photo */}
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
                  ? "border-accent bg-accent/12 shadow-[0_0_28px_var(--color-accent)]"
                  : "border-transparent hover:border-accent/60",
              )}
            />
          );
        })}

        {/* Detail layer: slides over the full photo while a part is active */}
        <div
          aria-hidden={!part}
          className={cn(
            "pointer-events-none absolute inset-0 overflow-hidden transition-all duration-500 ease-out",
            part ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
          )}
        >
          {part ? (
            part.alt ? (
              <img
                src={part.alt.src}
                alt={part.alt.alt}
                className="size-full bg-background object-contain"
              />
            ) : (
              <img
                src={moby.url}
                alt=""
                style={zoomStyle(part.box)}
                className="size-full object-contain transition-transform duration-500 ease-out"
              />
            )
          ) : null}
          {part ? (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-12">
              <p className="font-display text-sm font-semibold text-accent">{part.name}</p>
              <p className="mt-1 text-xs text-white/75">
                {part.alt ? part.alt.caption : "Close-up from the robot photo"}
              </p>
            </div>
          ) : null}
        </div>
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

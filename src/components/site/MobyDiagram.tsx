import { useState } from "react";
import { cn } from "@/lib/utils";
const moby = { url: "/images/robot-moby.jpg" };
const shooter3 = { url: "/images/shooter-3.jpg" };
const intake3 = { url: "/images/intake-3.jpg" };

type Box = { x: number; y: number; w: number; h: number };

/** Hotspot boxes are percentages of the photo (left/top/width/height). */
export type MobyPart = {
  id: string;
  name: string;
  note: string;
  box: Box;
  /** Optional dedicated close-up; shown with a slow crossfade, with its own box. */
  alt?: { src: string; caption: string; alt: string; box: Box };
  /** When true, we never switch the photo — the part is clearly visible. */
  inView?: boolean;
};

export const mobyParts: MobyPart[] = [
  {
    id: "shooter",
    name: "3D printed (CAD) shooter",
    note: "Design choice: enables consistent shooting from multiple field positions.",
    box: { x: 16, y: 1, w: 42, h: 29 },
    inView: true,
  },
  {
    id: "limelight",
    name: "Limelight camera",
    note: "Vision-based alignment and distance estimation.",
    box: { x: 53, y: 22, w: 14, h: 10 },
    inView: true,
  },
  {
    id: "funnel",
    name: "3D printed (CAD) funnel",
    note: "Design choice: guides artifacts cleanly while preventing penalties.",
    box: { x: 21, y: 2, w: 21, h: 21 },
    inView: true,
  },
  {
    id: "servo",
    name: "Barrier servo",
    note: "Barrier servo keeps artifacts contained.",
    box: { x: 7, y: 25, w: 18, h: 10 },
  },
  {
    id: "gears",
    name: "3D printed (CAD) gears",
    note: "Custom gearing designed in CAD.",
    box: { x: 30, y: 40, w: 30, h: 20 },
    alt: {
      src: intake3.url,
      caption: "Intake assembly with the printed gears",
      alt: "3D printed intake mechanism showing yellow printed gears",
      box: { x: 11, y: 15, w: 20, h: 50 },
    },
  },
  {
    id: "bands",
    name: "Three sets of rubber bands",
    note: "Purpose: reduces jamming and allows holding multiple artifacts reliably.",
    box: { x: 30, y: 40, w: 30, h: 20 },
    alt: {
      src: intake3.url,
      caption: "Three sets of rubber bands on the final intake",
      alt: "Intake mechanism with three sets of rubber bands",
      box: { x: 16, y: 16, w: 68, h: 58 },
    },
  },
  {
    id: "ramp",
    name: "Ramp with barriers",
    note: "Design choice: guides artifacts cleanly while preventing penalties.",
    box: { x: 30, y: 12, w: 26, h: 22 },
    alt: {
      src: shooter3.url,
      caption: "Yellow internal ramp inside the final CAD shooter",
      alt: "3D printed shooter part with a yellow internal ramp",
      box: { x: 38, y: 5, w: 36, h: 52 },
    },
  },
];

function boxStyle(b: Box) {
  return { left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%` };
}

export function MobyDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const part = mobyParts.find((p) => p.id === active) ?? null;
  const detail = part?.alt ?? null;

  const on = (id: string) => ({
    onMouseEnter: () => setActive(id),
    onMouseLeave: () => setActive((c) => (c === id ? null : c)),
    onFocus: () => setActive(id),
    onBlur: () => setActive((c) => (c === id ? null : c)),
  });

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-muted shadow-card">
        <img
          src={moby.url}
          alt="MOBY, the Nova Knights competition robot, with labelled subsystems"
          loading="lazy"
          className={cn(
            "w-full object-contain transition-all duration-[900ms] ease-in-out",
            part && "brightness-[.55] saturate-[.85]",
            detail && "opacity-0",
          )}
        />

        {/* Hotspot outlines on the full robot photo */}
        {mobyParts.map((p) => (
          <button
            key={p.id}
            type="button"
            {...on(p.id)}
            aria-label={`Highlight ${p.name}`}
            style={boxStyle(p.box)}
            className={cn(
              "absolute rounded-xl border-2 transition-all duration-500 outline-none",
              active === p.id && !p.alt
                ? "border-accent bg-accent/12 shadow-[0_0_28px_var(--color-accent)]"
                : "border-transparent hover:border-accent/60",
              detail && "opacity-0",
            )}
          />
        ))}

        {/* Detail layer: slow crossfade over the full photo while a part has an alternate */}
        <div
          aria-hidden={!detail}
          className={cn(
            "pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-[900ms] ease-in-out",
            detail ? "opacity-100" : "opacity-0",
          )}
        >
          {detail ? (
            <>
              <img
                src={detail.src}
                alt={detail.alt}
                className="size-full bg-background object-contain"
              />
              <span
                aria-hidden="true"
                style={boxStyle(detail.box)}
                className="absolute rounded-xl border-2 border-accent bg-accent/12 shadow-[0_0_28px_var(--color-accent)]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-12">
                <p className="font-display text-sm font-semibold text-accent">{part?.name}</p>
                <p className="mt-1 text-xs text-white/75">{detail.caption}</p>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <ul className="grid gap-4">
        {mobyParts.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              {...on(p.id)}
              className={cn(
                "glass-panel w-full rounded-2xl p-6 text-left transition-all duration-300",
                active === p.id
                  ? "-translate-y-0.5 border-accent/50 shadow-card-hover"
                  : "hover:-translate-y-0.5",
              )}
            >
              <h3
                className={cn(
                  "font-display font-semibold transition-colors",
                  active === p.id ? "text-accent" : "text-primary",
                )}
              >
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

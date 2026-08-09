import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Pointer-driven 3D tilt with a moving specular highlight — used to show off
 * the robot as a pseudo-3D object without shipping a WebGL model.
 */
export function TiltCard({
  children,
  className,
  max = 9,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--tilt-x", `${(0.5 - py) * 2 * max}deg`);
    el.style.setProperty("--tilt-y", `${(px - 0.5) * 2 * max}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
    el.style.setProperty("--tilt-shine", "1");
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-shine", "0");
  };

  return (
    <div className={cn("tilt-scene", className)}>
      <div ref={ref} className="tilt-card" onPointerMove={onMove} onPointerLeave={reset}>
        {children}
      </div>
    </div>
  );
}

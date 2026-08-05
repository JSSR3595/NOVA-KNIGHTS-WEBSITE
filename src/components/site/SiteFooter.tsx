import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { LogoMark } from "./Logo";
import { INSTAGRAM_URL } from "./links";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/awards", label: "Awards" },
  { to: "/apply", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;



export function SiteFooter() {
  return (
    <footer className="bg-slate-section text-slate-section-foreground">
      <div className="container-page grid gap-12 py-16 text-center sm:text-left md:grid-cols-3 md:py-20">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <div className="flex items-center gap-3">
            <LogoMark className="size-9" />
            <span className="font-display text-lg font-bold">Nova Knights</span>
          </div>
          <p className="max-w-xs text-sm text-slate-section-foreground/70">
            A youth robotics competition team in the Chesapeake Bay region, founded in 2024.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold tracking-[0.02em] uppercase">
            Explore
          </h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex min-h-11 items-center text-slate-section-foreground/75 transition-colors hover:text-accent sm:min-h-0"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-4 sm:items-start">
          <h2 className="font-display text-sm font-semibold tracking-[0.02em] uppercase">
            Follow us
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Nova Knights on Instagram"
            className="inline-flex min-h-11 items-center gap-3 rounded-full border border-white/15 px-4 text-sm text-slate-section-foreground/80 transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <Instagram strokeWidth={1.75} className="size-5" aria-hidden="true" />
            @novaknights32326
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 text-center text-[0.8125rem] text-slate-section-foreground/60">
          <p>© {new Date().getFullYear()} Nova Knights Robotics.</p>
        </div>
      </div>
    </footer>
  );
}

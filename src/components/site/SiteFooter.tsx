import { Link } from "@tanstack/react-router";
import { Mail, Instagram, Youtube, Github, Linkedin } from "lucide-react";
import { LogoMark } from "./Logo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/awards", label: "Awards" },
  { to: "/apply", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  { href: "https://example.com/novacircuit", label: "Instagram", Icon: Instagram },
  { href: "https://example.com/novacircuit", label: "YouTube", Icon: Youtube },
  { href: "https://example.com/novacircuit", label: "GitHub", Icon: Github },
  { href: "https://example.com/novacircuit", label: "LinkedIn", Icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-section text-slate-section-foreground">
      <div className="container-page grid gap-12 py-16 text-center sm:text-left md:grid-cols-3 md:py-20">
        {/* Brand + tagline */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <div className="flex items-center gap-3">
            <LogoMark className="size-9" />
            <span className="font-display text-lg font-bold">Nova Circuit Robotics</span>
          </div>
          <p className="max-w-xs text-sm text-slate-section-foreground/70">
            A student-led robotics and STEM nonprofit building engineers, mentors, and
            neighbors — one season at a time.
          </p>
        </div>

        {/* Site navigation */}
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

        {/* Social + contact */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <h2 className="font-display text-sm font-semibold tracking-[0.02em] uppercase">
            Connect
          </h2>
          <ul className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={`Nova Circuit Robotics on ${label}`}
                  className="grid size-11 place-items-center rounded-full border border-white/15 text-slate-section-foreground/80 transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Icon strokeWidth={1.75} className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <address className="text-sm not-italic text-slate-section-foreground/70">
            <a
              className="inline-flex items-center gap-2 hover:text-accent"
              href="mailto:hello@novacircuit.example"
            >
              <Mail strokeWidth={1.75} className="size-4" aria-hidden="true" />
              hello@novacircuit.example
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-[0.8125rem] text-slate-section-foreground/60 sm:flex-row">
          <p>(555) 014-2200 · hello@novacircuit.example</p>
          <p>© {new Date().getFullYear()} Nova Circuit Robotics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

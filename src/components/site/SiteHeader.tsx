import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram } from "lucide-react";
import { Cta } from "./Cta";
import { LogoMark, Wordmark } from "./Logo";
import { INSTAGRAM_URL } from "./links";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/robot", label: "Design & Build" },
  { to: "/outreach", label: "Outreach" },
  { to: "/programs", label: "Programs" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Focus trap + escape handling for the mobile drawer
  useEffect(() => {
    if (!open) return;
    const node = drawerRef.current;
    const focusables = node?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200 ease-out",
        scrolled
          ? "border-b border-white/10 bg-background/80 shadow-card backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Nova Knights home">
          <LogoMark className="size-11" />
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="nav-link" activeOptions={{ exact: l.to === "/" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Cta asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram strokeWidth={1.75} aria-hidden="true" />
              Follow us
            </a>
          </Cta>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-lg border border-white/12 bg-white/5 lg:hidden"
          >
            <Menu strokeWidth={1.75} className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col border-l border-white/10 bg-background p-6 shadow-card-hover transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <LogoMark className="size-11" />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-lg border border-white/12"
            >
              <X strokeWidth={1.75} className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8">
            <ul className="grid gap-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display flex min-h-12 items-center rounded-lg px-3 text-lg font-semibold transition-colors hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Cta asChild className="mt-8 w-full rounded-full">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram strokeWidth={1.75} aria-hidden="true" />
              Follow us
            </a>
          </Cta>
        </div>
      </div>
    </header>
  );
}

import type { ReactNode } from "react";
import { SiteLayout } from "./SiteLayout";
import { Reveal } from "./Reveal";

/** Shared inner-page header + content wrapper for sub-pages. */
export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-hero-blob pointer-events-none absolute inset-0 -z-10" />
        <div className="container-page py-14 md:py-20">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-hero mt-4 max-w-3xl text-balance">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        </div>
      </section>
      <Reveal className="container-page pb-20 md:pb-28">{children}</Reveal>
    </SiteLayout>
  );
}

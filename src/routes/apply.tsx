import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Cta } from "@/components/site/Cta";

const title = "Get Involved — Join, Mentor or Donate | Nova Circuit";
const description =
  "Apply to join Nova Circuit Robotics as a student or mentor, or support the team with a donation. No fees, no tryouts, no experience required.";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/apply" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/apply" }],
  }),
  component: ApplyPage,
});

const fieldClass =
  "mt-2 h-12 w-full rounded-lg border border-input bg-card px-4 text-base outline-none transition-shadow focus:border-accent focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-accent)_25%,transparent)]";

function ApplyPage() {
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: { name?: string; email?: string } = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your full name.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <PageShell
      eyebrow="Get involved"
      title="Three ways in: build, mentor, or give"
      intro="Students join with no fee and no tryout. Mentors give two evenings a month. Donors keep the parts bin full. Tell us which one fits and we will follow up within a week."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <h2 className="font-display text-xl font-semibold">Interest form</h2>

          <div className="mt-6 grid gap-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                name="name"
                className={fieldClass}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={fieldClass}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="role" className="text-sm font-medium">
                I want to
              </label>
              <select id="role" name="role" className={fieldClass} defaultValue="student">
                <option value="student">Join as a student</option>
                <option value="mentor">Volunteer as a mentor</option>
                <option value="donor">Sponsor or donate</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Anything we should know? <span className="text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${fieldClass} h-auto py-3`}
              />
            </div>
          </div>

          <Cta type="submit" size="lg" className="mt-8 w-full rounded-full sm:w-auto">
            Send my interest form
          </Cta>

          <p aria-live="polite" className="mt-4 text-sm text-[var(--color-success)]">
            {sent ? "Thanks — your form is in. We reply within one week." : ""}
          </p>
        </form>

        <aside className="rounded-2xl border border-border bg-secondary p-7">
          <h2 className="font-display text-xl font-semibold">Donate</h2>
          <p className="mt-3 text-muted-foreground">
            $640 covers one student for a full season: parts, safety gear, registration,
            and travel. Gifts are tax-deductible under our 501(c)(3) status.
          </p>
          <Cta asChild variant="accent" className="mt-6 w-full rounded-full">
            <a href="mailto:hello@novacircuit.example?subject=Donation">
              Give by email invoice
            </a>
          </Cta>
        </aside>
      </div>
    </PageShell>
  );
}

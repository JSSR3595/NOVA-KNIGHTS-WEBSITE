import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

const title = "Contact Nova Circuit Robotics — Workshop & Team Info";
const description =
  "Reach the Nova Circuit Robotics team: workshop hours, email, phone, and directions for students, mentors, sponsors, and press.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Come by the workshop"
      intro="We build Tuesday and Thursday evenings and Saturday mornings during the season. Visitors are welcome — email ahead so a student lead can meet you at the door."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <Mail strokeWidth={1.75} className="size-6 text-primary" aria-hidden="true" />
          <h2 className="font-display mt-4 text-lg font-semibold">Email</h2>
          <address className="mt-2 text-muted-foreground not-italic">
            <a className="hover:text-primary" href="mailto:hello@novacircuit.example">
              hello@novacircuit.example
            </a>
          </address>
        </article>

        <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <Phone strokeWidth={1.75} className="size-6 text-primary" aria-hidden="true" />
          <h2 className="font-display mt-4 text-lg font-semibold">Phone</h2>
          <address className="mt-2 text-muted-foreground not-italic">
            <a className="hover:text-primary" href="tel:+15550142200">
              (555) 014-2200
            </a>
          </address>
        </article>

        <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <MapPin strokeWidth={1.75} className="size-6 text-primary" aria-hidden="true" />
          <h2 className="font-display mt-4 text-lg font-semibold">Workshop</h2>
          <address className="mt-2 text-muted-foreground not-italic">
            412 Ninth Street, Bay C
            <br />
            Fairgrove
          </address>
        </article>
      </div>
    </PageShell>
  );
}

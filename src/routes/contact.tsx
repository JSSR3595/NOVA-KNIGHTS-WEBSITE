import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { INSTAGRAM_URL } from "@/components/site/SiteFooter";

const title = "Contact Nova Knights Robotics";
const description =
  "Contact Nova Knights, a youth robotics competition team in the Chesapeake Bay region, through our Instagram page.";

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
      title="Get in touch"
      intro="Instagram is our only published contact channel right now. Send us an email address or phone number and we'll add it here."
    >
      <article className="max-w-md rounded-2xl border border-border bg-card p-7 shadow-card">
        <Instagram strokeWidth={1.75} className="size-6 text-primary" aria-hidden="true" />
        <h2 className="font-display mt-4 text-lg font-semibold">Instagram</h2>
        <p className="mt-2">
          <a
            className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            @novaknights32326
          </a>
        </p>
      </article>
    </PageShell>
  );
}

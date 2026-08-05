import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Cta } from "@/components/site/Cta";
import { INSTAGRAM_URL } from "@/components/site/SiteFooter";

const title = "Get Involved — Nova Knights Robotics";
const description =
  "Interested in joining or supporting Nova Knights, a Chesapeake Bay region youth robotics team? Reach the team on Instagram.";

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

function ApplyPage() {
  return (
    <PageShell
      eyebrow="Get involved"
      title="Reach out to Nova Knights"
      intro="Joining details and sponsorship information will be published once the team approves them. For now, message us on Instagram."
    >
      <Cta asChild size="lg" className="rounded-full">
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          <Instagram strokeWidth={1.75} aria-hidden="true" />
          Message us on Instagram
        </a>
      </Cta>
    </PageShell>
  );
}

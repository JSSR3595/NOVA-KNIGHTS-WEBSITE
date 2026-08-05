import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Cta } from "@/components/site/Cta";
import { INSTAGRAM_URL } from "@/components/site/links";

const title = "Programs — Nova Knights Robotics";
const description =
  "Program details for Nova Knights, a youth robotics competition team in the Chesapeake Bay region.";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/programs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <PageShell
      eyebrow="Programs"
      title="Program details coming soon"
      intro="We're finalizing what to publish here. In the meantime, follow the team on Instagram for build and competition updates."
    >
      <Cta asChild size="lg" className="rounded-full">
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          <Instagram strokeWidth={1.75} aria-hidden="true" />
          @novaknights32326
        </a>
      </Cta>
    </PageShell>
  );
}

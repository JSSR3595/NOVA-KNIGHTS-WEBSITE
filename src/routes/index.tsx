import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { MissionSection } from "@/components/site/MissionSection";
import { SupportCallout } from "@/components/site/SupportCallout";

const title = "Nova Knights — Chesapeake Bay Region Robotics Team";
const description =
  "Nova Knights is a youth robotics competition team founded in 2024 in the Chesapeake Bay region, a Chesapeake Championship qualifier ranked in the top 10% of the region.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nova Knights",
          description,
          foundingDate: "2024",
          url: "/",
          sameAs: ["https://www.instagram.com/novaknights32326/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <StatsStrip />
      <MissionSection />
      <SupportCallout />
    </SiteLayout>
  );
}

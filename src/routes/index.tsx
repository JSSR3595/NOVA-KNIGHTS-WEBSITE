import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { SupportCallout } from "@/components/site/SupportCallout";

const title = "Nova Knights — FTC Robotics Team #32326";
const description =
  "Nova Knights, FTC team #32326 from the Chesapeake Bay region: 11 rookies driven by curiosity and creativity, building MOBY for the 2025–26 season.";

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
      <SupportCallout />
    </SiteLayout>
  );
}

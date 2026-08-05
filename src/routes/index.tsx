import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { MissionSection } from "@/components/site/MissionSection";
import { SupportCallout } from "@/components/site/SupportCallout";
import { PartnersStrip } from "@/components/site/PartnersStrip";

const title = "Nova Circuit Robotics — Youth STEM Competition Team";
const description =
  "Nova Circuit Robotics is a student-led nonprofit robotics team. Free year-round build seasons, mentoring, and community STEM outreach for middle and high school students.";

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
          name: "Nova Circuit Robotics",
          description,
          url: "/",
          email: "hello@novacircuit.example",
          telephone: "+1-555-014-2200",
          sameAs: [
            "https://example.com/novacircuit",
            "https://example.com/novacircuit-youtube",
          ],
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
      <PartnersStrip />
    </SiteLayout>
  );
}

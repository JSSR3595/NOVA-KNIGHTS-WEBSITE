import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { MobyDiagram } from "@/components/site/MobyDiagram";
import d1 from "@/assets/design-1-whiteboard.jpg.asset.json";
import d2 from "@/assets/design-2-research-cad.jpg.asset.json";
import d3 from "@/assets/design-3-prototype.jpg.asset.json";
import d4 from "@/assets/design-4-improve.jpg.asset.json";
import intake1 from "@/assets/intake-1.jpg.asset.json";
import intake2 from "@/assets/intake-2.jpg.asset.json";
import intake3 from "@/assets/intake-3.jpg.asset.json";
import shooter1 from "@/assets/shooter-1.jpg.asset.json";
import shooter2 from "@/assets/shooter-2.jpg.asset.json";
import shooter3 from "@/assets/shooter-3.jpg.asset.json";

const title = "Design & Build — Nova Knights FTC #32326";
const description =
  "How Nova Knights designed and built MOBY: our engineering design process, plus the intake and shooter build iterations that took us to 90% shooting accuracy.";

export const Route = createFileRoute("/robot")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/robot" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/robot" }],
  }),
  component: RobotPage,
});

const stages = ["Strategy", "Research", "CAD", "Prototype", "Improve", "Finalize"];

const steps = [
  {
    n: "01",
    heading: "Strategy",
    body: "We sketch ideas on a whiteboard to explore multiple robot concepts quickly. We compare pros and cons and refine the strongest designs together.",
    img: d1.url,
    alt: "Whiteboard with team tasks and a sketch of a robot concept",
  },
  {
    n: "02",
    heading: "Research",
    body: "We research online to explore new robot concepts and proven design approaches.",
    img: d2.url,
    alt: "CAD render of a robot mechanism studied during research",
  },
  {
    n: "03",
    heading: "Prototype",
    body: "We prototype mechanisms and program early subsystem code to validate geometry, control logic, and performance before finalizing the robot design.",
    img: d3.url,
    alt: "Team members prototyping the robot chassis and mechanisms on a workbench",
  },
  {
    n: "04",
    heading: "Improve & finalize",
    body: "We assemble mechanisms and continuously improve them by testing, adjusting geometry, and refining parts for better performance.",
    img: d4.url,
    alt: "Assembled robot chassis being adjusted and refined by the team",
  },
];

const intake = [
  {
    label: "First design",
    img: intake1.url,
    alt: "Green wheel with orange surgical tubing gripping a purple artifact",
    points: [
      "Surgical tubes attached to a rubber boot wheel",
      "Too bulky and dragged on the floor",
      "Tubes often got stuck in the artifacts",
    ],
  },
  {
    label: "Qualifier 1 design",
    img: intake2.url,
    alt: "Rubber bands stretched between two sprockets holding artifacts",
    points: [
      "Rubber bands threaded through two sprockets on either side",
      "Saved a ton of space and gripped artifacts well",
      "Rubber bands would often snap or fall off",
    ],
  },
  {
    label: "Final design",
    img: intake3.url,
    alt: "3D printed intake mechanism with multiple sets of rubber bands",
    points: [
      "3D printed parts hold rubber bands more securely",
      "Thicker rubber bands reduce breakage risk",
      "3 sets of rubber bands allow us to hold 3 artifacts",
    ],
  },
];

const shooter = [
  {
    label: "First design (vertical shooter)",
    img: shooter1.url,
    alt: "Vertical shooter mechanism built from two rhino wheels",
    points: [
      "Made from two rhino wheels",
      "Achieved only 20% accuracy during initial testing due to inconsistent motor speeds resulting in unpredictable shot trajectories",
      "This poor performance clearly demonstrated the need for a more controlled shooting process",
    ],
  },
  {
    label: "Qualifier 1 design",
    img: shooter2.url,
    alt: "Hooded shooter mechanism with a ramp made from aluminum sheet",
    points: [
      "Hooded shooter with ramp made from aluminum sheet",
      "Shot differently on both sides",
      "Limited artifact capacity and only achieved 75% accuracy from one field position (100+ shots)",
    ],
  },
  {
    label: "Final design",
    img: shooter3.url,
    alt: "3D printed shooter component with a yellow internal ramp",
    points: [
      "Designed in CAD software",
      "3D printed",
      "Our Limelight shooter achieves 90% accuracy (100+ shots) targeting the backdrop from various field positions",
    ],
  },
];

function IterationGrid({
  items,
}: {
  items: { label: string; img: string; alt: string; points: string[] }[];
}) {
  return (
    <ul className="mt-8 grid gap-6 md:grid-cols-3">
      {items.map((it, i) => (
        <Reveal as="li" key={it.label} delay={i * 90}>
          <div className="glass-panel glass-panel-hover flex h-full flex-col overflow-hidden rounded-2xl">
            <img
              src={it.img}
              alt={it.alt}
              loading="lazy"
              className="aspect-[4/3] w-full bg-muted object-contain"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-primary">{it.label}</h3>
              <ul className="mt-4 grid gap-3">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

function RobotPage() {
  return (
    <PageShell
      eyebrow="Design & Build"
      title="How we designed and built MOBY"
      intro="Our engineering design process, and the intake and shooter iterations that took our shooting accuracy from 20% to 90%."
    >
      <section aria-labelledby="process-heading">
        <h2 id="process-heading" className="h-section text-balance">
          Our engineering design process
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {stages.map((s) => (
            <li
              key={s}
              className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-sm font-medium"
            >
              {s}
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90}>
              <div className="glass-panel glass-panel-hover flex h-full flex-col overflow-hidden rounded-2xl">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full bg-muted object-contain"
                />
                <div className="p-7">
                  <p className="font-display text-sm font-semibold text-accent">{s.n}</p>
                  <h3 className="font-display mt-1 text-xl font-semibold">{s.heading}</h3>
                  <p className="mt-3 text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="moby-heading" className="mt-20">
        <h2 id="moby-heading" className="h-section text-balance">
          MOBY, part by part
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Hover (or focus) a part to highlight it on the robot.
        </p>
        <MobyDiagram />
      </section>

      <section aria-labelledby="intake-heading" className="mt-20">
        <h2 id="intake-heading" className="h-section text-balance">
          Intake build process
        </h2>
        <IterationGrid items={intake} />
      </section>

      <section aria-labelledby="shooter-heading" className="mt-20">
        <h2 id="shooter-heading" className="h-section text-balance">
          Shooter build process
        </h2>
        <IterationGrid items={shooter} />
        <p className="glass-panel mt-8 rounded-2xl p-6 font-medium">
          Feedback from other teams pushed us toward a single-shooter design — accuracy went
          from 20% to 75% to 90% across three iterations.
        </p>
      </section>
    </PageShell>
  );
}

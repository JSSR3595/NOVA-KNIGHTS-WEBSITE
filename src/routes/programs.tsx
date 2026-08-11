import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { INSTAGRAM_URL } from "@/components/site/links";

const title = "Programs, Terms & FAQ — Nova Knights Robotics";
const description =
  "Terms and conditions, commitment expectations, refund and photo release policies, plus frequently asked questions about Nova Knights robotics programs.";

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

type Block = { heading: string; intro?: string; points?: string[]; body?: string[] };

const terms: Block[] = [
  {
    heading: "Expectations and behavior",
    intro:
      "We hold everyone to the same high standards of behavior. Based on basic common sense, here are some guidelines:",
    points: [
      "Everyone respects each other in the group",
      "We all settle our disagreements in an amicable fashion",
      "Understand that your kid may not get to drive the robots (there are a lot of other things a robotics team does)",
    ],
  },
  {
    heading: "Commitment",
    intro:
      "We hope that the children (and their parents) attending our programs are fully committed to learning and participating in our STEM and robotics. You are expected to:",
    points: [
      "We expect you to stay with the program for the whole year.",
      "Parents are required to help out their own kids in, for example, providing transportation, snacks, and logistics help.",
      "Competitive robotics: strive to strike a balance between working towards the betterment of the team and achieving your personal goals.",
      "Understand that competitive robotics needs a significant time commitment. If you cannot commit that much time, we have other programs for you.",
    ],
  },
  {
    heading: "Refund policy",
    body: [
      "Please note that we do not issue refunds. We do give you ample time to evaluate our programs. You get a month worth of sessions to check if our programs are a good fit for you or not. Please feel free to ask us questions before you sign up.",
    ],
  },
  {
    heading: "Photo release",
    body: [
      "As a part of day-to-day activities of our programs, photos and videos will be taken of you and your kids. These photos may be posted on the internet and social media. The same thing will happen when kids go to robotics competitions. The “program delivery partners” will be taking videos and photos there also.",
      "You will be asked to sign a photo release form at the time of signing up for our programs. There is no “opt-out” from this.",
    ],
  },
];

type Faq = { q: string; body?: string[]; points?: string[] };

const financial: Faq[] = [
  {
    q: "Why are you charging so much?",
    body: [
      "Well, STEM – robotics can be an expensive activity. There are so many things which cost a lot of money in our programs. Fees have to be paid to other organizations, like FIRST and CHS, expensive robot parts need to be bought, etc. We try to cover many of those costs in our yearly fees, but there are some costs which are transferred to the parents (split between the kids in the teams).",
    ],
  },
  {
    q: "What is covered?",
    points: [
      "The facility (space, electricity, HVAC, etc)",
      "Equipment, tools, etc.",
      "Basic FTC competition fees (team registration fee and 2 game plays)",
      "New game set every season",
      "Mentoring / coaching / instruction",
    ],
  },
  {
    q: "What is not covered?",
    points: [
      "Team T-shirts, hoodies, etc ($15 to $25)",
      "If the kids want extra robot parts (we already have a lot of parts)",
      "CNC fees and 3D printer filaments",
      "If the team wants to compete a third time in a season (FTC third play fees)",
      "If the team makes it to state championship (FTC championship fees)",
    ],
  },
  {
    q: "What is the payment plan?",
    body: [
      "We have a very simple payment plan: you pay $100 to join and that covers the first month. In the second and third month you split the balance owed for the program.",
    ],
  },
  {
    q: "I do not like your program, or I am moving out, or I got sick. Can I get a refund of my money?",
    body: [
      "No. Sorry, we do not have a refund policy. Please read the terms and conditions carefully before you join. Ask us questions.",
    ],
  },
];

const programQuestions: Faq[] = [
  {
    q: "My kid is X years old. Do you have a program for him/her?",
    body: [
      "Currently, all our programs are geared towards middle and high schoolers. However, we are looking for enough kids from the older elementary school age to form a FLL team. If you are interested in that, please contact us and you shall be contacted about it when a team forms.",
    ],
  },
  {
    q: "What is the size of your FTC teams?",
    body: ["We try to keep a FTC team below 10 kids."],
  },
  {
    q: "When do the regular team meetings happen?",
    body: [
      "All our programs meet at least once a week. It is on Sunday evenings. Kids are supposed to come in at 5 PM. The end time is usually 8 PM, but kids sometimes stay back and work more (if they want to). They are also expected to meet more often during October to February. That is the peak season for FTC robotics programs.",
    ],
  },
  {
    q: "When do the other team meetings happen?",
    body: [
      "This is usually decided by the kids in the team. Historically, we have had the second team meeting mid week (Wednesday nights 6 to 8 PM). Additional team meetings may be necessary as needed. Competitive robotics is very time consuming; on very rare days, kids spend up to 10 hours or more here! You have been warned.",
    ],
  },
  {
    q: "Seems too much, my kid does not have that much time.",
    body: [
      "Well, in that case you should look at our non-competitive program. This is designed just for kids like yours, who do want to do robotics, but do not have a large amount of time.",
    ],
  },
  {
    q: "Where do the team meetings happen?",
    body: [
      "All our programs are run in our house’s basement, which is a dedicated space for our robotics programs. We are in the Bradley Farms neighborhood in Herndon VA. You should check how long it will take you to drive here: https://maps.app.goo.gl/c9MGyvRCMxVNtwL88 — some kids carpool to save travel time. That may be an option for you, but depends upon if another kid lives near you.",
    ],
  },
  {
    q: "Ok, I filled out the form. What happens next?",
    body: [
      "You filled it out? GREAT. Now please wait for an email from us. Usually we respond in a day or two. If you do not get a response (technical difficulties happen) please do contact us.",
      "Here is our intake process: we do a Zoom call first with the parents and children. This gives everyone a chance to meet each other, ask questions, etc. After that we offer an in-person tour of our facilities. After that, if everything is acceptable to you, you fill out some forms, pay the fees, and join the team/program.",
    ],
  },
];

const volunteering: Faq[] = [
  {
    q: "Why is the parent required to volunteer?",
    body: [
      "FTC events are primarily run by volunteers. Volunteers are usually the parents/mentors/coaches of the teams. Events cannot be run without your help. That is why we require you to volunteer at least one day in a year at a FTC event.",
    ],
  },
  {
    q: "How much time do I need to spend volunteering?",
    body: [
      "This is usually a whole day commitment, starting around 7 AM and ending around 5 PM. Additionally, parents are encouraged (but not required) to help at kids team meetings.",
    ],
  },
];

function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="mt-4 grid gap-3">
      {points.map((p) => (
        <li key={p} className="flex gap-3 text-muted-foreground">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function FaqList({ items }: { items: Faq[] }) {
  return (
    <ul className="mt-6 grid gap-5">
      {items.map((f, i) => (
        <Reveal as="li" key={f.q} delay={i * 60}>
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-7">
            <h3 className="font-display text-lg font-semibold text-primary">{f.q}</h3>
            {f.body?.map((b) => (
              <p key={b} className="mt-3 text-muted-foreground">
                {b}
              </p>
            ))}
            {f.points ? <Bullets points={f.points} /> : null}
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

function ProgramsPage() {
  return (
    <PageShell
      eyebrow="Programs"
      title="Terms, conditions & frequently asked questions"
      intro="This page lists some of the terms and conditions which apply to all our programs, along with answers to the questions families ask us most often."
    >
      <section aria-labelledby="terms-heading">
        <h2 id="terms-heading" className="h-section text-balance">
          Terms and conditions
        </h2>
        <ul className="mt-6 grid gap-5">
          {terms.map((t, i) => (
            <Reveal as="li" key={t.heading} delay={i * 70}>
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold">{t.heading}</h3>
                {t.intro ? <p className="mt-3 text-muted-foreground">{t.intro}</p> : null}
                {t.body?.map((b) => (
                  <p key={b} className="mt-3 text-muted-foreground">
                    {b}
                  </p>
                ))}
                {t.points ? <Bullets points={t.points} /> : null}
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="financial-heading" className="mt-20">
        <h2 id="financial-heading" className="h-section text-balance">
          Financial questions
        </h2>
        <FaqList items={financial} />
      </section>

      <section aria-labelledby="programs-faq-heading" className="mt-20">
        <h2 id="programs-faq-heading" className="h-section text-balance">
          Questions about our programs
        </h2>
        <FaqList items={programQuestions} />
      </section>

      <section aria-labelledby="volunteer-heading" className="mt-20">
        <h2 id="volunteer-heading" className="h-section text-balance">
          Questions about volunteering by parents
        </h2>
        <FaqList items={volunteering} />
      </section>

      <div className="mt-16">
        <Cta asChild size="lg" className="rounded-full">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram strokeWidth={1.75} aria-hidden="true" />
            @novaknights32326
          </a>
        </Cta>
      </div>
    </PageShell>
  );
}

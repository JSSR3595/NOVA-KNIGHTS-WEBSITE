const armaan = { url: "/images/member-armaan.png" };
const ekansh = { url: "/images/member-ekansh.png" };
const sahanvi = { url: "/images/member-sahanvi.png" };
const avni = { url: "/images/member-avni.png" };
const harsehaj = { url: "/images/member-harsehaj.png" };
const suhas = { url: "/images/member-suhas.png" };
const sam = { url: "/images/member-sam.png" };
const vashisht = { url: "/images/member-vashisht.png" };
const ariv = { url: "/images/member-ariv.png" };
const sanjeev = { url: "/images/member-sanjeev.png" };
const srikar = { url: "/images/member-srikar.png" };
export type Member = {
  name: string;
  role: string;
  focus: string;
  photo: string;
};

/** Members, roles and photos taken directly from the 2025-26 team portfolio. */
export const MEMBERS: Member[] = [
  {
    name: "Armaan",
    role: "CAD Design",
    focus: "Parametric constraints and manufacturability",
    photo: armaan.url,
  },
  {
    name: "Ekansh",
    role: "Autonomous Programming",
    focus: "Path planning, sensor-based decision making",
    photo: ekansh.url,
  },
  {
    name: "Sahanvi",
    role: "Outreach & Branding",
    focus: "Social media growth, portfolio design",
    photo: sahanvi.url,
  },
  {
    name: "Avni",
    role: "Collaboration & Coordination",
    focus: "International team communication",
    photo: avni.url,
  },
  {
    name: "Harsehaj",
    role: "Mechanical Design",
    focus: "Ramp layout, trifold & portfolio support",
    photo: harsehaj.url,
  },
  {
    name: "Suhas",
    role: "Tele-Op Programming",
    focus: "Control logic, driver optimization",
    photo: suhas.url,
  },
  {
    name: "Sam",
    role: "Drivetrain & Motors",
    focus: "Motor placement trade-offs, balance",
    photo: sam.url,
  },
  {
    name: "Vashisht",
    role: "Full Robot CAD",
    focus: "Structural design, assembly planning",
    photo: vashisht.url,
  },
  {
    name: "Ariv",
    role: "Weight Optimization",
    focus: "Center-of-mass analysis, stability",
    photo: ariv.url,
  },
  {
    name: "Sanjeev",
    role: "Prototyping & Iteration",
    focus: "Testing-driven refinement",
    photo: sanjeev.url,
  },
  {
    name: "Srikar",
    role: "Intake Mechanisms",
    focus: "Compliant design, reliability tuning",
    photo: srikar.url,
  },
];

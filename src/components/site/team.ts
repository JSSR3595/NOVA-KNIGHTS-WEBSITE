import armaan from "@/assets/member-armaan.png.asset.json";
import ekansh from "@/assets/member-ekansh.png.asset.json";
import sahanvi from "@/assets/member-sahanvi.png.asset.json";
import avni from "@/assets/member-avni.png.asset.json";
import harsehaj from "@/assets/member-harsehaj.png.asset.json";
import suhas from "@/assets/member-suhas.png.asset.json";
import sam from "@/assets/member-sam.png.asset.json";
import vashisht from "@/assets/member-vashisht.png.asset.json";
import ariv from "@/assets/member-ariv.png.asset.json";
import sanjeev from "@/assets/member-sanjeev.png.asset.json";
import srikar from "@/assets/member-srikar.png.asset.json";

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

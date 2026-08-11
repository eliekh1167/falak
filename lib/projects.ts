export type ProgramPillar = "UAV Engineering" | "CubeSat & Small Satellites" | "Research Lab";

export type ProjectStatus = "In Development" | "Testing" | "Design Phase" | "Completed";

export type ProjectSpec = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  pillar: ProgramPillar;
  status: ProjectStatus;
  tagline: string;
  heroImage: string; // placeholder path, labeled
  overview: string;
  objectives: string[];
  specs: ProjectSpec[];
  gallery: { src: string; caption: string }[];
  timeline: { phase: string; detail: string; done: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "stingray-blended-wing-uav",
    title: "Stingray Blended-Wing UAV",
    pillar: "UAV Engineering",
    status: "In Development",
    tagline: "A tailless blended-wing airframe built for endurance over conventional lift.",
    heroImage: "/images/projects/stingray-hero.jpg",
    overview:
      "Stingray is FALAK's first from-scratch airframe: a blended-wing-body UAV that trades a conventional fuselage-and-tail layout for a single lifting surface. The blended-wing form reduces parasitic drag and increases internal volume relative to wingspan, giving the airframe meaningfully better range and endurance per watt than the trainer platforms most student teams start with. The programme exists to take members through a full design cycle, aerodynamic sizing, structural layout, manufacturing, and flight test, rather than assembling a kit.",
    objectives: [
      "Design and manufacture a composite blended-wing airframe from initial sizing through flight-ready structure",
      "Validate stability and control without a conventional tail surface",
      "Integrate a modular payload bay for future atmospheric sensing work with the Research Lab pillar",
      "Establish a repeatable structural build process the next UAV cohort can inherit",
    ],
    specs: [
      { label: "Wingspan", value: "1.8 m" },
      { label: "MTOW", value: "4.2 kg" },
      { label: "Structure", value: "Foam-core composite, carbon spar" },
      { label: "Propulsion", value: "Electric pusher, single motor" },
      { label: "Est. Endurance", value: "45–55 min" },
      { label: "Payload Bay", value: "1.1 L modular" },
    ],
    gallery: [
      { src: "/images/projects/stingray-1.jpg", caption: "Early wing-loading and planform studies" },
      { src: "/images/projects/stingray-2.jpg", caption: "Foam-core wing shell mid-layup" },
      { src: "/images/projects/stingray-3.jpg", caption: "Static structural test rig" },
    ],
    timeline: [
      { phase: "Conceptual Design", detail: "Mission requirements, planform selection, sizing", done: true },
      { phase: "Structural Layout", detail: "Spar architecture, skin layup plan, CG budget", done: true },
      { phase: "Manufacturing", detail: "Mold prep, composite layup, systems integration", done: false },
      { phase: "Ground & Taxi Testing", detail: "Control surface checkout, weight and balance", done: false },
      { phase: "First Flight", detail: "Initial flight test envelope expansion", done: false },
    ],
  },
  {
    slug: "1u-cubesat-technology-demonstrator",
    title: "1U CubeSat Technology Demonstrator",
    pillar: "CubeSat & Small Satellites",
    status: "Design Phase",
    tagline: "A 10 cm nanosatellite platform built to prove out subsystems before a launch bid.",
    heroImage: "/images/projects/cubesat-hero.jpg",
    overview:
      "FALAK's CubeSat programme begins with a standard 1U (10x10x10 cm) technology demonstrator, not a mission payload. The goal at this stage is disciplined: prove that the team can design, integrate, and environmentally qualify a functioning satellite bus, power, attitude sensing, onboard computing, and communications, before committing to a specific science or imaging mission for a future launch opportunity. It is deliberately the harder, less glamorous first step, and the one that actually determines whether a later mission is credible.",
    objectives: [
      "Design a 1U-compliant structure meeting standard CubeSat deployer tolerances",
      "Integrate power (solar + battery), onboard computing, and UHF communications subsystems",
      "Pass basic environmental qualification: vibration, thermal cycling, vacuum bake-out",
      "Establish ground station link budget and basic telemetry downlink",
    ],
    specs: [
      { label: "Form Factor", value: "1U (10 x 10 x 11.35 cm)" },
      { label: "Mass Budget", value: "≤ 1.33 kg" },
      { label: "Power", value: "Body-mounted solar + Li-ion pack" },
      { label: "Comms", value: "UHF uplink/downlink" },
      { label: "OBC", value: "Radiation-tolerant microcontroller" },
      { label: "Target Qual.", value: "CubeSat Design Spec rev. 14" },
    ],
    gallery: [
      { src: "/images/projects/cubesat-1.jpg", caption: "Structural frame CAD, deployer-tolerance check" },
      { src: "/images/projects/cubesat-2.jpg", caption: "Power board bring-up on the bench" },
      { src: "/images/projects/cubesat-3.jpg", caption: "Thermal vacuum chamber access, partner lab" },
    ],
    timeline: [
      { phase: "Subsystem Design", detail: "Power, OBC, comms architecture selection", done: true },
      { phase: "Structural Design", detail: "Frame CAD, deployer tolerance verification", done: false },
      { phase: "Bench Integration", detail: "Subsystem bring-up and interface testing", done: false },
      { phase: "Environmental Qualification", detail: "Vibration, thermal, vacuum testing", done: false },
      { phase: "Ground Station Link Test", detail: "End-to-end telemetry validation", done: false },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByPillar(pillar: ProgramPillar | "All") {
  if (pillar === "All") return projects;
  return projects.filter((p) => p.pillar === pillar);
}

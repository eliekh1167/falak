export type Program = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  whatStudentsDo: string[];
  skillsGained: string[];
  status: string;
  heroPath: string;
};

export const programs: Program[] = [
  {
    slug: "uav-engineering",
    name: "UAV Engineering",
    shortName: "UAV",
    tagline: "Fixed-wing and blended-wing drone design, from sketch to flight test.",
    description:
      "The UAV pillar takes members through a complete unmanned aircraft development cycle: aerodynamic sizing, structural design, manufacturing, systems integration, and flight test. Teams work on both conventional fixed-wing platforms and more ambitious blended-wing airframes, building the airframes they design rather than assembling kits.",
    whatStudentsDo: [
      "Size and design airframes against real mission requirements (endurance, payload, launch method)",
      "Build composite and foam-core structures in FALAK's workshop",
      "Integrate flight controllers, telemetry, and payload systems",
      "Plan and execute ground and flight test campaigns",
    ],
    skillsGained: [
      "Aerodynamics and flight mechanics",
      "Composite structural design and fabrication",
      "Systems integration and avionics",
      "Flight test planning and data analysis",
    ],
    status: "Active — Stingray blended-wing airframe in development",
    heroPath: "/images/programs/uav-hero.jpg",
  },
  {
    slug: "cubesat-small-satellites",
    name: "CubeSat & Small Satellites",
    shortName: "CubeSat",
    tagline: "Nanosatellite technology demonstrators built toward a future launch bid.",
    description:
      "The CubeSat pillar builds toward orbital flight the disciplined way: proving out a satellite bus, power, computing, and communications on the ground before committing to a specific mission. The current focus is a 1U technology demonstrator, built to standard CubeSat deployer tolerances and basic environmental qualification.",
    whatStudentsDo: [
      "Design structures to standard CubeSat deployer specifications",
      "Integrate power, onboard computing, and communications subsystems",
      "Run environmental qualification: vibration, thermal cycling, vacuum testing",
      "Build and operate a ground station for telemetry downlink",
    ],
    skillsGained: [
      "Spacecraft systems engineering",
      "Embedded systems and onboard computing",
      "RF communications and link budgets",
      "Environmental test planning",
    ],
    status: "Active — 1U technology demonstrator in design phase",
    heroPath: "/images/programs/cubesat-hero.jpg",
  },
  {
    slug: "research-lab",
    name: "Research Lab",
    shortName: "Lab",
    tagline: "Atmospheric sensing, materials testing, and the hands-on bench work behind every build.",
    description:
      "The Research Lab pillar is where FALAK's other programmes get their groundwork done: materials characterization for airframes and satellite structures, atmospheric sensing payload development, and the general instrumentation work that a serious aerospace programme needs but rarely gets credit for. It's also the most accessible entry point for members without a design/build background yet.",
    whatStudentsDo: [
      "Characterize composite and structural materials for strength and fatigue",
      "Develop atmospheric sensing payloads for UAV integration",
      "Support UAV and CubeSat teams with instrumentation and data acquisition",
      "Maintain and calibrate lab equipment and test rigs",
    ],
    skillsGained: [
      "Materials science and testing methodology",
      "Sensor design and data acquisition",
      "Lab instrumentation and calibration",
      "Scientific documentation and reporting",
    ],
    status: "Active — supporting UAV and CubeSat payload development",
    heroPath: "/images/programs/lab-hero.jpg",
  },
];

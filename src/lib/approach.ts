export interface ProcessPhase {
  step: string;
  title: string;
  description: string;
}

export const processPhases: ProcessPhase[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We sit with the teams who'll actually use the system to understand current workflows, bottlenecks, and constraints — before any design work starts.",
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Requirements are mapped against existing tools and data so we know exactly what needs to integrate, migrate, or change.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Solution architecture and interface design are built around your workflows, not a generic template.",
  },
  {
    step: "04",
    title: "Develop",
    description:
      "Modular development with regular checkpoints, so you see working software early and often — not just at the end.",
  },
  {
    step: "05",
    title: "Test",
    description:
      "Functional, security, and integration testing against real-world usage scenarios, not just the happy path.",
  },
  {
    step: "06",
    title: "Deploy",
    description:
      "Phased rollout with data migration, training, and change-management support so adoption doesn't stall at go-live.",
  },
  {
    step: "07",
    title: "Support",
    description:
      "Ongoing monitoring, support, and iteration — systems keep improving after launch, not just get maintained.",
  },
];

export const differentiators = [
  {
    icon: "Puzzle",
    title: "Modular, customizable architecture",
    description:
      "Start with what you need today and add modules as the business grows — without re-platforming.",
  },
  {
    icon: "Plug",
    title: "Integration-ready",
    description:
      "Built to connect with the systems you already run, not replace them wholesale.",
  },
  {
    icon: "TrendingUp",
    title: "Built to scale",
    description:
      "Architecture designed for growth in users, locations, and transaction volume from day one.",
  },
  {
    icon: "Target",
    title: "Business-first approach",
    description:
      "We understand the process before we write a line of code — technology follows the workflow, not the other way around.",
  },
  {
    icon: "ShieldCheck",
    title: "One accountable partner",
    description:
      "A single technology partner across workplace, enterprise, and custom systems — one relationship, one point of accountability.",
  },
  {
    icon: "Headset",
    title: "Support that doesn't stop at go-live",
    description:
      "24/7 monitoring and a dedicated support desk behind every system we deploy.",
  },
];

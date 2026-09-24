export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  relevantServices: string[];
}

export const industries: Industry[] = [
  {
    slug: "corporate-enterprises",
    name: "Corporate Enterprises",
    icon: "Building",
    description:
      "Multi-department, multi-location organizations running HR, workplace, and operations systems that need to work together, not around each other.",
    relevantServices: ["hrms", "visitor-management-system", "asset-management"],
  },
  {
    slug: "it-technology",
    name: "IT & Technology",
    icon: "Cpu",
    description:
      "Fast-scaling tech companies that need integration-ready systems and engineering support that keeps pace with growth.",
    relevantServices: ["custom-software-development", "cloud-solutions", "hot-desk-management"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    description:
      "Plant and multi-facility operations running ERP, asset tracking, and dealer networks on connected, auditable systems.",
    relevantServices: ["erp", "asset-management", "dealer-management-system"],
  },
  {
    slug: "automobile",
    name: "Automobile",
    icon: "Car",
    description:
      "OEMs and dealer networks managing inventory, warranty claims, and channel performance across dozens of locations.",
    relevantServices: ["dealer-management-system", "crm", "erp"],
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    description:
      "Campuses and institutes coordinating visitor access, transportation, and facility scheduling across large sites.",
    relevantServices: ["visitor-management-system", "corporate-transportation", "car-parking-management"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    description:
      "Hospitals and clinics that need secure visitor tracking, asset accountability, and compliant record-keeping.",
    relevantServices: ["visitor-management-system", "asset-management", "hrms"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "BuildingComplex",
    description:
      "Commercial property and facility operators running space, parking, and access systems across managed portfolios.",
    relevantServices: ["car-parking-management", "hot-desk-management", "conference-room-booking"],
  },
  {
    slug: "business-parks",
    name: "Business Parks",
    icon: "Trees",
    description:
      "Shared campuses coordinating visitor entry, parking, and transportation for multiple tenant organizations at once.",
    relevantServices: ["visitor-management-system", "car-parking-management", "corporate-transportation"],
  },
];

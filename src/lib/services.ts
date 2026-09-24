export type ServiceCategory = "workplace" | "enterprise" | "development";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: string;
  summary: string;
  description: string;
  features: string[];
  benefits: string[];
}

export const serviceCategories: Record<
  ServiceCategory,
  { title: string; description: string }
> = {
  workplace: {
    title: "Workplace Management",
    description:
      "Connected systems that run the physical workplace — from the front desk to the parking lot — on one platform.",
  },
  enterprise: {
    title: "Enterprise Systems",
    description:
      "Core business systems for people, operations, customers, and assets, built to integrate rather than sit in silos.",
  },
  development: {
    title: "Development & Support",
    description:
      "Custom engineering, mobile apps, cloud infrastructure, and ongoing support behind every Varexa deployment.",
  },
};

export const services: Service[] = [
  {
    slug: "visitor-management-system",
    name: "Visitor Management System",
    category: "workplace",
    icon: "UserCheck",
    summary: "Digital check-in, host notifications, and audit-ready visitor logs at every entry point.",
    description:
      "Replace the paper register with a digital front desk. Varexa's Visitor Management System handles pre-registration, ID capture, instant host notifications, badge printing, and a searchable visit history — configured around how your reception, security, and facilities teams actually operate.",
    features: [
      "Self-service kiosk and receptionist-assisted check-in",
      "Pre-scheduled visits with QR-code fast entry",
      "Automatic SMS/email/app notifications to hosts",
      "ID capture, photo, and NDA/e-signature on arrival",
      "Watchlist and blacklist screening",
      "Exportable visit logs for compliance and audits",
    ],
    benefits: [
      "Shorter lobby wait times and a more professional first impression",
      "Full visibility into who is on-site at any moment",
      "Audit-ready records for security and compliance reviews",
      "Works across multiple sites from a single console",
    ],
  },
  {
    slug: "conference-room-booking",
    name: "Conference Room Booking",
    category: "workplace",
    icon: "CalendarClock",
    summary: "Real-time room availability, calendar sync, and no-show automation for every meeting space.",
    description:
      "Give employees a fast, reliable way to find and book the right room. Varexa's room booking system syncs with your existing calendar tools, shows live availability on room-panel displays, and automatically frees up rooms that go unused.",
    features: [
      "Outlook / Google Calendar two-way sync",
      "Room-panel and mobile booking",
      "Capacity, equipment, and location-based search",
      "Auto-release for no-shows and unconfirmed bookings",
      "Recurring meeting and resource booking (AV, catering)",
      "Utilization analytics per room and floor",
    ],
    benefits: [
      "Fewer double-bookings and interrupted meetings",
      "Higher utilization of existing meeting space",
      "Data to right-size future office space",
    ],
  },
  {
    slug: "hot-desk-management",
    name: "Hot Desk Management",
    category: "workplace",
    icon: "LayoutGrid",
    summary: "Interactive floor maps for flexible seating, hybrid-work scheduling, and team-zone bookings.",
    description:
      "Support hybrid work without the chaos. Employees book desks on an interactive floor plan, teams can reserve zones for in-office days, and facilities get a clear read on real occupancy versus planned capacity.",
    features: [
      "Interactive, floor-by-floor seating maps",
      "Individual desk and team-zone booking",
      "Hybrid schedule planning and in/out status",
      "Neighborhood-based seating for teams",
      "Check-in confirmation to release unused desks",
      "Occupancy and space-utilization reporting",
    ],
    benefits: [
      "Better use of office footprint in a hybrid model",
      "Employees always know where to sit and who's in",
      "Facilities data to plan real-estate decisions",
    ],
  },
  {
    slug: "car-parking-management",
    name: "Car Parking Management",
    category: "workplace",
    icon: "SquareParking",
    summary: "Automated slot allocation, visitor parking, and license-plate recognition for campus parking.",
    description:
      "Manage limited parking fairly and automatically. Reserve slots for employees and visitors, run rotational allocation for oversubscribed lots, and use camera-based recognition to remove manual gate checks.",
    features: [
      "Employee, visitor, and reserved slot categories",
      "Rotational or first-come allocation policies",
      "License-plate recognition (LPR) gate integration",
      "Mobile booking and real-time slot availability",
      "Multi-lot and multi-site management",
      "Usage reports for space planning",
    ],
    benefits: [
      "Eliminates disputes over parking allocation",
      "Faster, contactless entry and exit",
      "Clear data on demand versus available capacity",
    ],
  },
  {
    slug: "corporate-transportation",
    name: "Corporate Bus Transportation",
    category: "workplace",
    icon: "Bus",
    summary: "Route planning, live tracking, and employee booking for corporate transport fleets.",
    description:
      "Coordinate employee transportation across shifts, routes, and vehicles from one dashboard. Employees book seats and track buses in real time; transport admins manage routes, drivers, vendors, and utilization.",
    features: [
      "Route and stop planning by shift",
      "Employee self-service seat booking",
      "Live GPS tracking and ETA notifications",
      "Driver and vendor management",
      "Attendance-linked boarding confirmation",
      "Route utilization and cost reporting",
    ],
    benefits: [
      "Safer, more predictable commutes for employees",
      "Lower empty-seat costs through utilization data",
      "Centralized oversight of vendors and vehicles",
    ],
  },
  {
    slug: "hrms",
    name: "Human Resource Management System",
    category: "enterprise",
    icon: "Users",
    summary: "One HRMS for the employee lifecycle — hiring, attendance, payroll, performance, and exit.",
    description:
      "A modular HRMS that covers the full employee lifecycle without forcing every team onto a rigid process. Start with core HR and attendance, and add payroll, performance, or recruitment modules as you need them.",
    features: [
      "Core HR, employee database, and org charts",
      "Attendance, shift, and leave management",
      "Payroll processing and statutory compliance",
      "Recruitment and onboarding workflows",
      "Performance appraisals and goal tracking",
      "Employee self-service portal and mobile app",
    ],
    benefits: [
      "Less manual HR admin, fewer spreadsheets",
      "Consistent, auditable HR processes across locations",
      "A single source of truth for workforce data",
    ],
  },
  {
    slug: "erp",
    name: "Enterprise Resource Planning",
    category: "enterprise",
    icon: "Network",
    summary: "Connect finance, procurement, inventory, and operations in one modular ERP.",
    description:
      "Varexa ERP brings finance, procurement, inventory, and production planning together so decisions are made on current data, not end-of-month reconciliation. Modules are deployed around your existing processes and integrated with the systems you already run.",
    features: [
      "Finance and accounting with statutory reporting",
      "Procurement and vendor management",
      "Inventory and warehouse management",
      "Production and materials planning",
      "Multi-branch and multi-currency support",
      "Role-based dashboards and approvals",
    ],
    benefits: [
      "Real-time visibility across departments",
      "Fewer reconciliation errors between teams",
      "Faster, better-informed operational decisions",
    ],
  },
  {
    slug: "crm",
    name: "Customer Relationship Management",
    category: "enterprise",
    icon: "Handshake",
    summary: "Track leads, sales pipelines, and customer support in one connected CRM.",
    description:
      "Give sales, marketing, and support teams a shared view of every customer. Varexa CRM manages the pipeline from lead to renewal and integrates with your ERP and support desk so customer data never lives in two places.",
    features: [
      "Lead capture, scoring, and pipeline tracking",
      "Quotation and order management",
      "Customer support ticketing and SLAs",
      "Campaign tracking and marketing automation",
      "Sales performance dashboards and forecasting",
      "Integration with ERP, email, and telephony",
    ],
    benefits: [
      "Fewer leads lost between marketing and sales",
      "Faster response times on customer issues",
      "Clear pipeline visibility for sales leadership",
    ],
  },
  {
    slug: "asset-management",
    name: "Asset Management",
    category: "enterprise",
    icon: "Boxes",
    summary: "Track, maintain, and audit physical and IT assets across their full lifecycle.",
    description:
      "Know what assets you own, where they are, and who is responsible for them. Varexa's asset management system covers procurement to disposal, with maintenance scheduling and barcode/QR-based audits built in.",
    features: [
      "Asset register with procurement-to-disposal tracking",
      "Barcode / QR-code based physical audits",
      "Preventive maintenance scheduling and alerts",
      "Depreciation and warranty tracking",
      "Assignment and transfer history per employee",
      "Custom asset categories for IT, facilities, and fleet",
    ],
    benefits: [
      "Fewer lost or unaccounted-for assets",
      "Lower downtime through scheduled maintenance",
      "Audit-ready records at all times",
    ],
  },
  {
    slug: "dealer-management-system",
    name: "Dealer Management System",
    category: "enterprise",
    icon: "Store",
    summary: "Manage dealer networks, inventory, orders, and claims from a single platform.",
    description:
      "Built for manufacturers and distributors running multi-tier dealer networks. Varexa's DMS connects dealers, inventory, orders, and after-sales claims so manufacturers get real-time visibility into the entire channel.",
    features: [
      "Dealer onboarding and territory management",
      "Order booking and stock allocation",
      "Inventory visibility across the dealer network",
      "Warranty and claims processing",
      "Dealer performance scorecards",
      "Mobile app for field and dealer teams",
    ],
    benefits: [
      "Real-time visibility into channel inventory and sales",
      "Faster claims processing and dealer payouts",
      "Consistent processes across a growing dealer network",
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    category: "development",
    icon: "CodeXml",
    summary: "Bespoke web platforms and internal tools engineered around your exact workflows.",
    description:
      "When off-the-shelf software doesn't fit, we design and build custom platforms around your actual processes — not the other way around. From internal operations tools to customer-facing platforms, engineered for integration with the systems you already run.",
    features: [
      "Requirements discovery and process mapping",
      "Custom web application and API development",
      "Legacy system modernization",
      "Third-party and system-to-system integrations",
      "Scalable architecture on modern frameworks",
      "QA, security testing, and documentation",
    ],
    benefits: [
      "Software that matches how your team already works",
      "No paying for features you'll never use",
      "A system that grows with the business",
    ],
  },
  {
    slug: "mobile-application-development",
    name: "Mobile Application Development",
    category: "development",
    icon: "Smartphone",
    summary: "Native and cross-platform iOS/Android apps connected to your enterprise systems.",
    description:
      "Mobile apps for employees, customers, or field teams — built to talk to the same HRMS, ERP, or CRM data your web platforms use, so there's one source of truth across every device.",
    features: [
      "Native iOS and Android development",
      "Cross-platform apps for faster delivery",
      "Offline-first support for field teams",
      "Push notifications and real-time updates",
      "Secure API integration with backend systems",
      "App Store / Play Store deployment and maintenance",
    ],
    benefits: [
      "Consistent data between mobile and web systems",
      "Faster field operations with offline support",
      "Higher adoption through a native user experience",
    ],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    category: "development",
    icon: "Cloud",
    summary: "Migration, hosting, and managed cloud infrastructure sized for reliability and cost.",
    description:
      "We plan and manage cloud infrastructure so systems stay available, secure, and cost-efficient as usage grows — including migration from on-premise, multi-environment setups, and ongoing monitoring.",
    features: [
      "Cloud readiness assessment and migration planning",
      "AWS / Azure / Google Cloud deployment",
      "Auto-scaling and load-balanced architecture",
      "Backup, disaster recovery, and monitoring",
      "Cost optimization and infrastructure audits",
      "DevOps and CI/CD pipeline setup",
    ],
    benefits: [
      "Predictable uptime under variable load",
      "Lower infrastructure cost through right-sizing",
      "Faster, safer releases with automated pipelines",
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    category: "development",
    icon: "Megaphone",
    summary: "SEO, performance campaigns, and content that support the platforms we build.",
    description:
      "For clients who need visibility as well as software, we run SEO, paid campaigns, and content programs — often for the same platforms and portals we've built, so marketing and product stay aligned.",
    features: [
      "SEO strategy and technical optimization",
      "Paid search and social campaign management",
      "Content strategy and creation",
      "Marketing analytics and reporting",
      "Landing page design and conversion optimization",
      "Email and marketing automation setup",
    ],
    benefits: [
      "Better visibility for the platforms we build",
      "Marketing decisions backed by real analytics",
      "One partner for product and go-to-market",
    ],
  },
  {
    slug: "business-systems-support",
    name: "24/7 Business Systems Support",
    category: "development",
    icon: "LifeBuoy",
    summary: "Round-the-clock monitoring and support for every system Varexa deploys.",
    description:
      "Every Varexa deployment is backed by ongoing support — monitoring, incident response, and continuous improvement — so systems keep running as your business does, on any shift, any day.",
    features: [
      "24/7 monitoring and incident response",
      "Tiered SLAs by system criticality",
      "Scheduled maintenance and patching",
      "Dedicated support desk and escalation paths",
      "Regular system health and performance reviews",
      "Continuous improvement recommendations",
    ],
    benefits: [
      "Minimal downtime across time zones and shifts",
      "One accountable partner instead of multiple vendors",
      "Systems that keep improving after go-live",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}

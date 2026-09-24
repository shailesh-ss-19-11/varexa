export const siteConfig = {
  name: "Varexa Infotech",
  legalName: "Varexa Infotech Pvt. Ltd.",
  shortName: "Varexa",
  tagline: "Technology that simplifies business",
  description:
    "Varexa Infotech is a single technology partner delivering workplace management systems, enterprise software (HRMS, ERP, CRM), custom development, mobile apps, and cloud solutions that adapt to how your business already works.",
  url: "https://www.varexa.in",
  email: "info@varexa.in",
  phone: "+91 90212 69997",
  phoneHref: "+919021269997",
  address: "Tukdoji Square, Nagpur, Maharashtra, India",
  addressLocality: "Nagpur",
  addressRegion: "Maharashtra",
  methodology: ["Understand", "Design", "Build", "Integrate", "Automate", "Improve"],
  social: {
    linkedin: "https://www.linkedin.com/company/varexa-infotech",
  },
  whatsapp: {
    number: "919021269997",
    message: "Hi Varexa, I'd like to know more about your services.",
  },
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why Varexa", href: "/why-varexa" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  company: [
    { label: "About us", href: "/about" },
    { label: "Why Varexa", href: "/why-varexa" },
    { label: "Our approach", href: "/approach" },
    { label: "Contact", href: "/contact" },
  ],
  workplace: [
    { label: "Visitor Management", href: "/services/visitor-management-system" },
    { label: "Conference Room Booking", href: "/services/conference-room-booking" },
    { label: "Hot Desk Management", href: "/services/hot-desk-management" },
    { label: "Car Parking Management", href: "/services/car-parking-management" },
  ],
  enterprise: [
    { label: "HRMS", href: "/services/hrms" },
    { label: "ERP", href: "/services/erp" },
    { label: "CRM", href: "/services/crm" },
    { label: "Asset Management", href: "/services/asset-management" },
  ],
} as const;

export type ServiceSummary = {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  tagline: string;
  description: string;
  points: string[];
};

export const services: ServiceSummary[] = [
  {
    slug: "labour-hire",
    name: "Construction Labour Hire",
    shortName: "Labour Hire",
    href: "/labour-hire",
    tagline: "Temporary and project-based workforce, deployed when you need it.",
    description:
      "Nexa supplies general labour and project-ready crews on flexible terms, so site schedules aren't held up waiting on headcount.",
    points: [
      "Temporary workforce for defined project phases",
      "General labour and site support",
      "Flexible engagement lengths — short call-outs to multi-month placements",
      "Workers briefed on your site requirements before deployment",
    ],
  },
  {
    slug: "skilled-trades",
    name: "Skilled Trades & Construction Workers",
    shortName: "Skilled Trades",
    href: "/skilled-trades",
    tagline: "Trade-specific workers matched to the scope of your project.",
    description:
      "Beyond general labour, Nexa places tradespeople against specific project requirements — matched on trade, experience and availability.",
    points: [
      "Trade-matched placements, not generic labour",
      "Workers screened against project requirements before referral",
      "Coverage for short-term gaps and longer project phases",
      "Direct communication between site supervisors and Nexa",
    ],
  },
  {
    slug: "workforce-solutions",
    name: "Workforce Solutions",
    shortName: "Workforce Solutions",
    href: "/workforce-solutions",
    tagline: "Workforce planning and supply built around how your project actually runs.",
    description:
      "For businesses managing multiple sites or fluctuating labour needs, Nexa acts as an ongoing workforce partner rather than a one-off supplier.",
    points: [
      "Ongoing workforce planning across project phases",
      "Support scaling crews up or down as work changes",
      "Single point of contact across multiple site requirements",
      "Built around your delivery schedule, not a fixed roster",
    ],
  },
  {
    slug: "construction-services",
    name: "Construction Services",
    shortName: "Construction Services",
    href: "/services",
    tagline: "Project and site support that keeps construction work moving.",
    description:
      "Where a project needs more than a workforce placement, Nexa provides construction support services scoped to the job.",
    points: [
      "Site support services",
      "Project-based construction assistance",
      "Commercial construction support",
      "Residential construction support",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export type Industry = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const industries: Industry[] = [
  {
    slug: "residential",
    name: "Residential Construction",
    description:
      "Workforce and site support across residential builds — from single dwellings to multi-unit developments — scaled to each stage of the build.",
    image: "/images/industries/residential.jpg",
    imageAlt: "Timber-framed residential house under construction",
  },
  {
    slug: "commercial",
    name: "Commercial Construction",
    description:
      "Labour and trade placements for commercial builds, where programme certainty and site coordination matter as much as raw headcount.",
    image: "/images/industries/commercial.jpg",
    imageAlt: "Modern commercial glass building facade",
  },
  {
    slug: "civil",
    name: "Civil Construction",
    description:
      "Site labour and machine operators for civil works, matched against the plant, ticketing and scheduling demands of civil projects.",
    image: "/images/industries/civil.jpg",
    imageAlt: "Aerial view of heavy equipment on a civil earthworks site",
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    description:
      "Workforce support for infrastructure projects that need reliable crews across extended programmes and multiple work fronts.",
    image: "/images/industries/infrastructure.jpg",
    imageAlt: "Large infrastructure viaduct under construction at dusk",
  },
  {
    slug: "fit-outs",
    name: "Fit-Outs",
    description:
      "Trade and labour placements for commercial and residential fit-out works, from base-build handover through to practical completion.",
    image: "/images/industries/fitouts.jpg",
    imageAlt: "Interior fit-out in progress with exposed ceiling grid",
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    description:
      "Ongoing and reactive workforce support for construction and facilities maintenance programmes.",
    image: "/images/industries/maintenance.jpg",
    imageAlt: "Worker performing maintenance repair on site equipment",
  },
];

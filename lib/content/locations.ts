export type LocationContent = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: { heading: string; paragraphs: string[] }[];
  servedAreas?: string[];
};

export const locations: LocationContent[] = [
  {
    slug: "sydney",
    name: "Sydney",
    h1: "Construction Workforce & Services Across Sydney.",
    metaTitle: "Construction Workforce & Services Sydney | Nexa Construction Solutions",
    metaDescription:
      "Nexa Construction Solutions supplies construction labour hire, skilled trades and project support across the Sydney metro area, based in Rouse Hill NSW.",
    intro:
      "Sydney's construction market spans dense inner-city commercial builds, established suburban residential work, and the fast-growing corridors on the city's fringe. Nexa is based in Rouse Hill, in Sydney's North West Growth Area, and supplies workforce and construction services across the wider metro area.",
    body: [
      {
        heading: "A metro area with different labour needs in every corridor",
        paragraphs: [
          "Sydney isn't one construction market — it's several. Inner-ring commercial and high-density residential projects run on tighter sites with strict access and safety controls. Middle-ring suburbs carry a steady base of renovation, extension and small commercial work. Growth corridors like the North West and South West need large volumes of labour over sustained build-out periods.",
          "Because Nexa's base in Rouse Hill sits inside one of Sydney's most active growth corridors, workforce supply into North West and Western Sydney sites doesn't rely on long cross-city travel — which matters when a project needs crews on-site early and reliably.",
        ],
      },
      {
        heading: "Workforce and services, not just headcount",
        paragraphs: [
          "Across Sydney, Nexa supports two related needs: supplying labour and trades to builders and contractors who need workforce capacity, and providing direct construction services and site support where a project needs more than staffing alone.",
          "Both are covered by the same points of contact, so a project that starts as a labour hire requirement and grows into a broader support need doesn't require starting again with a new supplier.",
        ],
      },
    ],
  },
  {
    slug: "western-sydney",
    name: "Western Sydney",
    h1: "Construction Labour Hire for Western Sydney.",
    metaTitle: "Construction Labour Hire Western Sydney | Nexa Construction Solutions",
    metaDescription:
      "Construction labour hire and skilled trades for Western Sydney projects. Nexa Construction Solutions is based in Rouse Hill and supplies workforce across the western corridor.",
    intro:
      "Western Sydney is one of the most active construction regions in the country — driven by residential release areas, infrastructure delivery, and a growing base of commercial and industrial development. Nexa's Rouse Hill base sits directly in this corridor.",
    body: [
      {
        heading: "Building where the work is",
        paragraphs: [
          "Western Sydney's construction pipeline runs across new-release residential estates, established suburb infill, and large-scale infrastructure and logistics projects. Labour demand in the region moves with that pipeline — projects need crews that can mobilise quickly and scale as sites progress through different build phases.",
          "Being based in Rouse Hill means Nexa's workforce supply into the western corridor — from the Hills District through to Greater Western Sydney — starts close to where the work actually is, rather than being coordinated from the far side of the city.",
        ],
      },
      {
        heading: "Labour hire built for project timelines",
        paragraphs: [
          "Western Sydney projects often run on tight, sequenced programmes — civil and infrastructure works feeding into residential and commercial build stages. Nexa's labour hire is structured around that: general labour and skilled trades supplied for the length of a project phase, not locked into rigid long-term contracts that don't match how construction actually schedules work.",
        ],
      },
    ],
  },
  {
    slug: "rouse-hill",
    name: "Rouse Hill",
    h1: "Construction Services Based in Rouse Hill.",
    metaTitle: "Construction Services Rouse Hill NSW | Nexa Construction Solutions",
    metaDescription:
      "Nexa Construction Solutions Pty Ltd is based at 589 Withers Road, Rouse Hill NSW 2155 — supplying construction labour hire and services locally and across NSW.",
    intro:
      "Rouse Hill is home base for Nexa Construction Solutions. Located at 589 Withers Road, Rouse Hill NSW 2155, Nexa is positioned in the heart of Sydney's North West Growth Area — one of the largest active development corridors in NSW.",
    body: [
      {
        heading: "Local base, wider reach",
        paragraphs: [
          "Rouse Hill and the surrounding North West Growth Area have seen sustained residential, commercial and infrastructure development over recent years. Operating from within this corridor means Nexa understands the pace and structure of construction work here directly, rather than servicing the area remotely.",
          "That local base also supports faster response for Rouse Hill and Hills District projects specifically — shorter lead times for site visits, workforce briefings and deployment when a project needs people on the ground.",
        ],
      },
      {
        heading: "From local projects to NSW-wide supply",
        paragraphs: [
          "While Rouse Hill is home, Nexa's labour hire and construction services extend across Greater Sydney and NSW. The Rouse Hill base is the operational centre for that wider supply — not a limit on where Nexa works.",
        ],
      },
    ],
  },
  {
    slug: "nsw",
    name: "New South Wales",
    h1: "Construction Workforce Solutions Across NSW.",
    metaTitle: "Construction Workforce Solutions NSW | Nexa Construction Solutions",
    metaDescription:
      "Nexa Construction Solutions Pty Ltd provides construction labour hire, skilled trades and project support across New South Wales, based in Rouse Hill NSW.",
    intro:
      "Nexa Construction Solutions Pty Ltd (ABN 13 701 158 072) supplies construction workforce and services across New South Wales, operating from its base at 589 Withers Road, Rouse Hill NSW 2155.",
    body: [
      {
        heading: "One workforce partner, a state-wide construction pipeline",
        paragraphs: [
          "NSW's construction activity spans metropolitan Sydney, major regional centres, and growth corridors where residential, commercial, civil and infrastructure projects run side by side. Labour needs on any given project can shift week to week — Nexa is structured to supply workforce across that range, rather than specialising in a single project type or region.",
        ],
      },
      {
        heading: "Consistent supply, wherever the project sits",
        paragraphs: [
          "Whether a project is in Sydney's inner suburbs, the growth corridors of Western Sydney, or elsewhere in NSW, the same process applies: a project team tells Nexa what workforce or services they need, and Nexa works to match suitable people to the requirement. That consistency matters for builders and contractors managing multiple sites across the state.",
        ],
      },
    ],
  },
];

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);

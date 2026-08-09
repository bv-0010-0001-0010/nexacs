export type BlogCategory =
  | "Construction Labour Hire"
  | "Workforce Management"
  | "Construction Safety"
  | "Skilled Trades"
  | "Construction Careers"
  | "Project Workforce Planning"
  | "Australian Construction Industry";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  metaDescription: string;
  publishedAt: string;
  readingMinutes: number;
  body: { heading?: string; paragraphs: string[] }[];
};

export const blogCategories: BlogCategory[] = [
  "Construction Labour Hire",
  "Workforce Management",
  "Construction Safety",
  "Skilled Trades",
  "Construction Careers",
  "Project Workforce Planning",
  "Australian Construction Industry",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "when-to-use-construction-labour-hire",
    title: "When Does Labour Hire Make Sense on a Construction Project?",
    category: "Construction Labour Hire",
    excerpt:
      "Labour hire isn't just a fallback for busy periods. Here's how project teams typically decide when to bring in hired workforce versus growing a permanent crew.",
    metaDescription:
      "A practical look at when construction labour hire fits a project — from short-term gaps to sustained workforce scaling — and when it doesn't.",
    publishedAt: "2026-02-10",
    readingMinutes: 5,
    body: [
      {
        paragraphs: [
          "Every builder eventually faces the same question: hire directly, or bring in labour hire workforce? The answer usually comes down to how predictable the work is, not just how busy the site happens to be right now.",
        ],
      },
      {
        heading: "Short, defined phases",
        paragraphs: [
          "A project phase with a clear start and end date — demolition, a concrete pour cycle, a fit-out push before handover — rarely justifies a permanent hire. Labour hire lets a site bring in the right number of people for exactly that phase, then scale back down without carrying wage costs once the work is done.",
        ],
      },
      {
        heading: "Unpredictable or lumpy programmes",
        paragraphs: [
          "Some projects run on schedules that shift constantly — weather delays, sequencing changes, variations. Permanent crews sized for the busiest week end up underused in quieter ones. A labour hire arrangement absorbs that variability: workforce numbers move with the programme instead of the programme being constrained by fixed headcount.",
        ],
      },
      {
        heading: "Specialist gaps",
        paragraphs: [
          "Sometimes it's not about volume at all — it's a specific trade or skill needed for a defined stretch of work that doesn't exist on the permanent team. Bringing in a matched worker for that window is usually faster and cheaper than a full recruitment process for a role that won't exist once the phase ends.",
        ],
      },
      {
        heading: "When it doesn't make sense",
        paragraphs: [
          "Labour hire isn't the right tool for every gap. Roles that need deep, ongoing familiarity with a single site, or genuinely permanent headcount growth, are usually better served by direct hiring. The clearest signal: if the need will still exist in eighteen months in roughly the same form, it's probably a permanent role, not a labour hire one.",
        ],
      },
    ],
  },
  {
    slug: "planning-workforce-across-multiple-sites",
    title: "Planning Workforce Across Multiple Construction Sites",
    category: "Workforce Management",
    excerpt:
      "Running several sites at once turns workforce planning into a moving target. A few practical approaches that keep crew numbers matched to actual demand.",
    metaDescription:
      "How construction businesses managing multiple sites keep workforce supply matched to shifting project demand without over- or under-resourcing.",
    publishedAt: "2026-03-04",
    readingMinutes: 4,
    body: [
      {
        paragraphs: [
          "Managing workforce for one site is hard enough. Managing it across several sites, each on a different programme, is a different problem entirely — and it's where a lot of construction businesses lose margin without realising it.",
        ],
      },
      {
        heading: "Treat workforce as a shared pool, not per-site headcount",
        paragraphs: [
          "The biggest inefficiency in multi-site operations is treating each site's crew as fixed and separate. In reality, most trades and general labour needs move between sites as phases finish on one and start on another. Planning workforce as a shared, flexible pool — rather than locking people to a single site — reduces both idle time and last-minute scrambling.",
        ],
      },
      {
        heading: "Build in lead time for ramp-up and ramp-down",
        paragraphs: [
          "Workforce needs rarely change overnight, but they're often planned as if they do. Mapping out roughly when each site will need to scale up or down — even loosely — gives enough lead time to source additional crew or reallocate existing workers, instead of reacting after a schedule slip has already happened.",
        ],
      },
      {
        heading: "One point of contact reduces coordination cost",
        paragraphs: [
          "When workforce is sourced separately for each site, coordination overhead multiplies with every additional project. Businesses managing multiple sites often find it more efficient to run workforce sourcing through a single relationship — one point of contact who understands requirements across all active sites — rather than starting from scratch for each one.",
        ],
      },
    ],
  },
  {
    slug: "site-safety-basics-for-temporary-workers",
    title: "Getting Temporary Workers Safely Onto a New Site",
    category: "Construction Safety",
    excerpt:
      "Bringing new workers onto an unfamiliar site is a known risk point. A clear induction and briefing process matters more than most site processes.",
    metaDescription:
      "Why site induction and briefing matter most in the first hours a temporary or hired worker spends on an unfamiliar construction site.",
    publishedAt: "2026-04-18",
    readingMinutes: 4,
    body: [
      {
        paragraphs: [
          "The period with the highest safety risk for any construction worker is often the first few hours on an unfamiliar site — before they know the layout, the hazards, or the site's specific procedures. That's true whether a worker has ten years of experience or ten weeks.",
        ],
      },
      {
        heading: "Site-specific induction, every time",
        paragraphs: [
          "General trade experience doesn't transfer site knowledge. Every site has its own access points, exclusion zones, plant movements and emergency procedures. A worker's broader safety training matters, but it doesn't replace a proper site-specific induction before they start work — regardless of how experienced they are elsewhere.",
        ],
      },
      {
        heading: "Clear briefing on the actual task",
        paragraphs: [
          "Beyond general induction, workers need to know exactly what they're doing that day, what's around them, and who to report to. This is especially important for short-term or project-based placements, where a worker might be on a site for days rather than months and doesn't have time to build up the same situational awareness a long-term crew member has.",
        ],
      },
      {
        heading: "Two-way responsibility",
        paragraphs: [
          "Getting a worker safely onto a new site is a shared responsibility between the site and whoever supplied the worker. The site controls induction, supervision and hazard management on the ground; the workforce provider is responsible for briefing workers on expectations before they arrive and making sure the right person is going to the right job. Neither side can fully cover for gaps in the other.",
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);

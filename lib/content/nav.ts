export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Labour Hire", href: "/labour-hire" },
  { label: "Skilled Trades", href: "/skilled-trades" },
  { label: "Workforce Solutions", href: "/workforce-solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export const employerNav: NavLink = { label: "For Employers", href: "/for-employers" };
export const workerNav: NavLink = { label: "For Workers", href: "/for-workers" };
export const contactNav: NavLink = { label: "Contact", href: "/contact" };

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Nexa", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Construction Services", href: "/services" },
      { label: "Labour Hire", href: "/labour-hire" },
      { label: "Skilled Trades", href: "/skilled-trades" },
      { label: "Workforce Solutions", href: "/workforce-solutions" },
    ],
  },
  {
    title: "For Employers",
    links: [
      { label: "For Employers", href: "/for-employers" },
      { label: "Request Workers", href: "/request-workers" },
    ],
  },
  {
    title: "For Workers",
    links: [
      { label: "For Workers", href: "/for-workers" },
      { label: "Register With Nexa", href: "/register" },
    ],
  },
];

export const locationLinks: NavLink[] = [
  { label: "Sydney", href: "/locations/sydney" },
  { label: "Western Sydney", href: "/locations/western-sydney" },
  { label: "Rouse Hill", href: "/locations/rouse-hill" },
  { label: "New South Wales", href: "/locations/nsw" },
];

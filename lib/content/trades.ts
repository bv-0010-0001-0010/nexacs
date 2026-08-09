export type Trade = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const trades: Trade[] = [
  {
    name: "Carpenters",
    description: "Formwork, framing and fit-out carpentry across residential and commercial sites.",
    image: "/images/trades/carpenter.jpg",
    imageAlt: "Carpenter framing timber wall structure on a construction site",
  },
  {
    name: "Electricians",
    description: "Site electrical work matched against project scope and licensing requirements.",
    image: "/images/trades/electrician.jpg",
    imageAlt: "Electrician installing wiring on a construction site",
  },
  {
    name: "Plumbers",
    description: "Plumbing trades for new builds, fit-outs and ongoing project works.",
    image: "/images/trades/plumber.jpg",
    imageAlt: "Plumber inspecting pipes and valves on site",
  },
  {
    name: "Steel Workers",
    description: "Structural steel fixing and erection support for framed builds.",
    image: "/images/trades/steel-worker.jpg",
    imageAlt: "Steel workers welding structural steel beams at height",
  },
  {
    name: "Concreters",
    description: "Formwork, pour and finishing crews for slabs, footings and structural concrete.",
    image: "/images/trades/concreter.jpg",
    imageAlt: "Concreter pouring concrete on an active construction site",
  },
  {
    name: "Machine Operators",
    description: "Operators for site plant and equipment, matched to project and ticket requirements.",
    image: "/images/trades/machine-operator.jpg",
    imageAlt: "Excavator silhouetted against the sky on a construction site",
  },
  {
    name: "General Construction Workers",
    description: "Site labour for material handling, site setup, cleanup and general project support.",
    image: "/images/trades/general-worker.jpg",
    imageAlt: "General construction worker wearing PPE on an active site",
  },
];

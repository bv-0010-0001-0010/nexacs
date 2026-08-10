export type Trade = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const trades: Trade[] = [
  {
    name: "Carpenter",
    description: "Formwork, framing and fit-out carpentry across residential and commercial sites.",
    image: "/images/trades/carpenter.jpg",
    imageAlt: "Carpenter framing timber wall structure on a construction site",
  },
  {
    name: "Bricklayer & Blocklayer",
    description: "Brick and block laying for structural and feature walls across residential and commercial builds.",
    image: "/images/trades/bricklayer.jpg",
    imageAlt: "Bricklayer laying and mortaring bricks on a construction site",
  },
  {
    name: "Painter & Decorator",
    description: "Interior and exterior painting and decorating for new builds, renovations and fit-outs.",
    image: "/images/trades/painter.jpg",
    imageAlt: "Painter rolling paint onto an interior wall on site",
  },
  {
    name: "Wall & Floor Tiler",
    description: "Wall and floor tiling for bathrooms, kitchens and commercial fit-outs.",
    image: "/images/trades/tiler.jpg",
    imageAlt: "Tiler applying adhesive and setting tiles on a wall",
  },
  {
    name: "Solid Plasterer",
    description: "Solid plastering and rendering for internal and external wall finishes.",
    image: "/images/trades/plasterer.jpg",
    imageAlt: "Plasterer applying and finishing plaster with trowels",
  },
  {
    name: "Welder",
    description: "Structural steel welding and fabrication support for framed builds.",
    image: "/images/trades/welder.jpg",
    imageAlt: "Welder working on structural steel beams at height",
  },
  {
    name: "General Labour",
    description: "Site labour for material handling, site setup, cleanup and general project support.",
    image: "/images/trades/general-worker.jpg",
    imageAlt: "General construction worker wearing PPE on an active site",
  },
  {
    name: "Cabinet & Joinery Worker",
    description: "Cabinet making and joinery for fit-outs, fixtures and custom timber work.",
    image: "/images/trades/joinery.jpg",
    imageAlt: "Joinery worker shaping timber in a workshop",
  },
];

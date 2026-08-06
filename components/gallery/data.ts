export type PatchCategory =
  | "Embroidered"
  | "Woven"
  | "PVC"
  | "Leather"
  | "Chenille"
  | "Military";

export type PatchShape = "circle" | "rect" | "shield" | "badge";

export type Patch = {
  id: string;
  name: string;
  category: PatchCategory;
  shape: PatchShape;
  motif: string;
  colors: string[];
  border: string;
  backings: string[];
  size: string;
  description: string;
};

export const CATEGORIES: Array<"All" | PatchCategory> = [
  "All",
  "Embroidered",
  "Woven",
  "PVC",
  "Leather",
  "Chenille",
  "Military",
];

export const PATCHES: Patch[] = [
  {
    id: "garage-emblem",
    name: "Garage Emblem",
    category: "Embroidered",
    shape: "circle",
    motif: "rings",
    colors: ["#37486e", "#0d1b2a", "#e3e9f0", "#c9d4e3", "#5a6b7d"],
    border: "Merrowed",
    backings: ["Iron-on", "Velcro hook", "Sew-on"],
    size: '3.5" round',
    description:
      "A dense, raised-thread roundel with a polished merrowed edge — the classic garage and club patch.",
  },
  {
    id: "voyager-compass",
    name: "Voyager Compass",
    category: "Embroidered",
    shape: "circle",
    motif: "compass",
    colors: ["#0d1b2a", "#37486e"],
    border: "Merrowed",
    backings: ["Sew-on", "Iron-on"],
    size: '3" round',
    description:
      "Full-coverage compass embroidery with layered satin stops and a contrasting merrowed rim.",
  },
  {
    id: "speedway-wheel",
    name: "Speedway Wheel",
    category: "Embroidered",
    shape: "circle",
    motif: "wheel",
    colors: ["#2b3856", "#e3e9f0"],
    border: "Merrowed",
    backings: ["Velcro hook", "Sew-on"],
    size: '4" round',
    description:
      "Retro racing roundel with bold spoke detail, stitched dense enough to survive the track.",
  },
  {
    id: "houndstooth-twill",
    name: "Houndstooth Twill",
    category: "Woven",
    shape: "rect",
    motif: "houndstooth",
    colors: ["#37486e", "#0d1b2a"],
    border: "Satin",
    backings: ["Iron-on", "Sew-on"],
    size: '4 x 2.5"',
    description:
      "Tight, flat weave for crisp fine detail — a sharp tailored look with a clean satin edge.",
  },
  {
    id: "atelier-monogram",
    name: "Atelier Monogram",
    category: "Woven",
    shape: "rect",
    motif: "monogram",
    colors: ["#0d1b2a", "#5a6b7d"],
    border: "Satin",
    backings: ["Sew-on"],
    size: '2.75 x 2.75"',
    description:
      "Precision-woven lettering for apparel labels and branding that needs a smooth, flat finish.",
  },
  {
    id: "coastal-wave",
    name: "Coastal Wave",
    category: "Woven",
    shape: "rect",
    motif: "wave",
    colors: ["#2b3856", "#e3e9f0"],
    border: "Heat-cut",
    backings: ["Iron-on", "Velcro hook"],
    size: '4.5 x 1.75"',
    description:
      "Ultra-fine wave detail that only woven thread can hold — laser cut to a hairline edge.",
  },
  {
    id: "tactical-glow",
    name: "Tactical Glow",
    category: "PVC",
    shape: "shield",
    motif: "bolt",
    colors: ["#0d1b2a", "#37486e"],
    border: "Heat-cut",
    backings: ["Velcro hook", "Velcro loop"],
    size: '3.5 x 3.5"',
    description:
      "Raised rubber moulding with a soft-touch finish — waterproof, colourfast, and field-tough.",
  },
  {
    id: "hazard-hardline",
    name: "Hazard Hardline",
    category: "PVC",
    shape: "rect",
    motif: "chevron",
    colors: ["#2b3856", "#c9d4e3"],
    border: "Heat-cut",
    backings: ["Velcro hook"],
    size: '4 x 2"',
    description:
      "Structured 3D mould with crisp bevels, made for kit that faces weather, oil, and wash cycles.",
  },
  {
    id: "ranch-brand",
    name: "Ranch Brand",
    category: "Leather",
    shape: "shield",
    motif: "brand",
    colors: ["#7a4a2b", "#0d1b2a"],
    border: "Skived",
    backings: ["Sew-on", "Snap"],
    size: '3.5 x 3"',
    description:
      "Top-grain leather with a heat-burned brand mark and hand-skived edge that lies flat.",
  },
  {
    id: "heritage-crest",
    name: "Heritage Crest",
    category: "Leather",
    shape: "badge",
    motif: "crest",
    colors: ["#0d1b2a", "#c9d4e3"],
    border: "Lasered",
    backings: ["Sew-on"],
    size: '3.75 x 3.5"',
    description:
      "Laser-etched detailing on vegetable-tanned leather for a vintage club-house feel.",
  },
  {
    id: "varsity-letter",
    name: "Varsity Letter",
    category: "Chenille",
    shape: "badge",
    motif: "letter",
    colors: ["#37486e", "#ffffff"],
    border: "Chenille",
    backings: ["Sew-on", "Snap"],
    size: '4" tall',
    description:
      "Plush chenille letter with a twisted wool border — the timeless varsity look, rebuilt to last.",
  },
  {
    id: "felt-star",
    name: "Felt Star",
    category: "Chenille",
    shape: "badge",
    motif: "star",
    colors: ["#5a6b7d", "#ffffff"],
    border: "Chenille",
    backings: ["Sew-on"],
    size: '3.5" tall',
    description:
      "Soft felt appliqué trimmed with a fluffy chenille edge for stadium and sideline energy.",
  },
  {
    id: "unit-shield",
    name: "Unit Shield",
    category: "Military",
    shape: "shield",
    motif: "crossed-arrows",
    colors: ["#2b3856", "#0d1b2a", "#e3e9f0"],
    border: "Merrowed",
    backings: ["Velcro hook", "Sew-on"],
    size: '3.5 x 3.25"',
    description:
      "Scout-spec embroidered shield with a rank-bright merrowed border and tactical hook backing.",
  },
  {
    id: "airborne-wings",
    name: "Airborne Wings",
    category: "Military",
    shape: "badge",
    motif: "wings",
    colors: ["#37486e", "#e3e9f0"],
    border: "Merrowed",
    backings: ["Velcro hook"],
    size: '3 x 2.5"',
    description:
      "High-stitch-count wing detail with full-density fill, built for daily field wear.",
  },
  {
    id: "callsign-tab",
    name: "Callsign Tab",
    category: "Military",
    shape: "rect",
    motif: "tab",
    colors: ["#0d1b2a", "#c9d4e3"],
    border: "Heat-cut",
    backings: ["Velcro hook", "Iron-on"],
    size: '3 x 0.75"',
    description:
      "Standard-issue name tape with crisp twill lettering — offered in a dozen combat-spec colours.",
  },
];

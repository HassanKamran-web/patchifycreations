export type PatchCategory =
  | "Embroidery"
  | "Woven"
  | "PVC"
  | "Leather"
  | "Chenille"
  | "Sublimation";

export type Patch = {
  id: string;
  name: string;
  category: PatchCategory;
  image: string;
  backings: string[];
  size: string;
  description: string;
};

export const CATEGORIES: Array<"All" | PatchCategory> = [
  "All",
  "Embroidery",
  "Woven",
  "PVC",
  "Leather",
  "Chenille",
  "Sublimation",
];

export const PATCHES: Patch[] = [
  {
    id: "patch-design-01",
    name: "Heritage Roundel Patch",
    category: "Embroidery",
    image: "/images/embroidery/patch-01.png",
    backings: ["Iron-on", "Velcro hook", "Sew-on"],
    size: '3.5" round',
    description:
      "A dense, raised-thread embroidered design with a polished merrowed edge.",
  },
  {
    id: "patch-design-02",
    name: "Distressed Leather Patch",
    category: "Leather",
    image: "/images/leather/patch-02.png",
    backings: ["Sew-on", "Snap"],
    size: '3.5 x 3"',
    description:
      "Top-grain leather with a hand-skived edge that lies flat on any garment.",
  },
  {
    id: "patch-design-03",
    name: "Classic Embroidered Badge",
    category: "Embroidery",
    image: "/images/embroidery/patch-03.png",
    backings: ["Iron-on", "Sew-on"],
    size: '3" round',
    description:
      "Full-coverage embroidery with layered satin stops and a contrasting merrowed rim.",
  },
  {
    id: "patch-design-04",
    name: "Tactical PVC Badge",
    category: "PVC",
    image: "/images/pvc/patch-04.png",
    backings: ["Velcro hook", "Velcro loop"],
    size: '3.5 x 3.5"',
    description:
      "Raised rubber moulding — waterproof, colourfast, and field-tough.",
  },
  {
    id: "patch-design-05",
    name: "Laser-Etched Leather Badge",
    category: "Leather",
    image: "/images/leather/patch-05.png",
    backings: ["Sew-on"],
    size: '3.75 x 3.5"',
    description:
      "Laser-etched detailing on vegetable-tanned leather for a vintage feel.",
  },
  {
    id: "patch-design-06",
    name: "Retro Roundel Patch",
    category: "Embroidery",
    image: "/images/embroidery/patch-06.png",
    backings: ["Iron-on", "Velcro hook", "Sew-on"],
    size: '4" round',
    description:
      "Retro roundel with bold detail, stitched dense enough for daily wear.",
  },
  {
    id: "patch-design-07",
    name: "Embroidered Crest Patch",
    category: "Embroidery",
    image: "/images/embroidery/patch-07.png",
    backings: ["Sew-on", "Iron-on"],
    size: '3.5" round',
    description:
      "Dense, raised-thread design with a polished merrowed edge and rich depth.",
  },
  {
    id: "patch-design-08",
    name: "3D Rubber Insignia",
    category: "PVC",
    image: "/images/pvc/patch-08.png",
    backings: ["Velcro hook"],
    size: '4 x 2"',
    description:
      "Structured 3D mould with crisp bevels, made for gear that faces weather and oil.",
  },
  {
    id: "patch-design-09",
    name: "Mini Stitch Emblem",
    category: "Embroidery",
    image: "/images/embroidery/patch-09.png",
    backings: ["Sew-on"],
    size: '2.75 x 2.75"',
    description:
      "Fine embroidered detail for small placements and apparel branding.",
  },
  {
    id: "patch-design-10",
    name: "Varsity Crest Badge",
    category: "Embroidery",
    image: "/images/embroidery/patch-10.png",
    backings: ["Iron-on", "Velcro hook"],
    size: '4 x 2"',
    description:
      "Bold embroidered crest with layered satin detail and a clean finished edge.",
  },
  {
    id: "patch-design-11",
    name: "Vintage Leather Emblem",
    category: "Leather",
    image: "/images/leather/patch-11.png",
    backings: ["Sew-on", "Snap"],
    size: '3.5 x 3"',
    description:
      "Top-grain leather with a hand-finished edge that ages beautifully.",
  },
  {
    id: "patch-design-12",
    name: "Field-Day Roundel",
    category: "Embroidery",
    image: "/images/embroidery/patch-12.png",
    backings: ["Velcro hook", "Sew-on"],
    size: '4" round',
    description:
      "Full-coverage embroidery, weather-ready and built for repeated wear.",
  },
  {
    id: "patch-design-13",
    name: "Classic Merrowed Patch",
    category: "Embroidery",
    image: "/images/embroidery/patch-13.png",
    backings: ["Iron-on", "Velcro hook", "Sew-on"],
    size: '3.5" round',
    description:
      "Dense embroidery with a polished merrowed edge and a tailored finish.",
  },
  {
    id: "patch-design-14",
    name: "Soft-Touch PVC Patch",
    category: "PVC",
    image: "/images/pvc/patch-14.png",
    backings: ["Velcro hook", "Iron-on"],
    size: '3 x 2.5"',
    description:
      "Soft-touch rubber moulding with fine, raised detail that lasts for years.",
  },
  {
    id: "patch-design-15",
    name: "Long Crest Patch",
    category: "Embroidery",
    image: "/images/embroidery/patch-15.png",
    backings: ["Iron-on", "Sew-on"],
    size: '4.5 x 1.75"',
    description:
      "An elongated embroidered badge with crisp detail and a slim profile.",
  },
  {
    id: "patch-design-16",
    name: "Weatherproof PVC Emblem",
    category: "PVC",
    image: "/images/pvc/patch-16.png",
    backings: ["Velcro hook", "Velcro loop"],
    size: '3.5 x 3.5"',
    description:
      "Raised rubber moulding that resists weather, oil, and repeated wash cycles.",
  },
  {
    id: "patch-design-17",
    name: "Heritage Emblem Patch",
    category: "Embroidery",
    image: "/images/embroidery/patch-17.png",
    backings: ["Sew-on", "Iron-on"],
    size: '3.25" round',
    description:
      "Rich embroidered detail with a merrowed rim, ready for daily wear.",
  },
  {
    id: "patch-design-18",
    name: "Varsity Chenille Letter",
    category: "Chenille",
    image: "/images/chenille/patch-18.png",
    backings: ["Sew-on", "Snap"],
    size: '4" tall',
    description:
      "Plush chenille construction with a twisted wool border for the classic varsity look.",
  },
  {
    id: "patch-design-19",
    name: "Chenille Club Patch",
    category: "Chenille",
    image: "/images/chenille/patch-19.png",
    backings: ["Sew-on"],
    size: '3.5" tall',
    description:
      "Soft felt appliqué trimmed with a fluffy chenille edge for sideline energy.",
  },
  {
    id: "patch-design-20",
    name: "Classic Varsity Badge",
    category: "Chenille",
    image: "/images/chenille/patch-20.png",
    backings: ["Sew-on", "Snap"],
    size: '4" tall',
    description:
      "Plush chenille letter with a twisted wool border — rebuilt to last.",
  },
  {
    id: "patch-design-21",
    name: "Award Chenille Patch",
    category: "Chenille",
    image: "/images/chenille/patch-21.png",
    backings: ["Sew-on", "Iron-on"],
    size: '3" tall',
    description:
      "Premium chenille construction for the classic award-winning varsity look.",
  },
  {
    id: "patch-design-22",
    name: "Rustic Leather Patch",
    category: "Leather",
    image: "/images/leather/patch-leather01.jpeg",
    backings: ["Sew-on", "Snap"],
    size: '3.5 x 3"',
    description:
      "Full-grain leather with a worn, rustic finish and a hand-skived edge.",
  },
  {
    id: "patch-design-23",
    name: "Distressed Leather Badge",
    category: "Leather",
    image: "/images/leather/patch-leaher02.jpeg",
    backings: ["Sew-on", "Velcro hook"],
    size: '3.25 x 2.75"',
    description:
      "Distressed leather construction with bold debossed detailing.",
  },
  {
    id: "patch-design-24",
    name: "Embossed Leather Emblem",
    category: "Leather",
    image: "/images/leather/patch-leather03.jpeg",
    backings: ["Sew-on", "Snap"],
    size: '3.5 x 3"',
    description:
      "Embossed top-grain leather patch that ages beautifully with wear.",
  },
  {
    id: "patch-design-25",
    name: "Glossy PVC Emblem",
    category: "PVC",
    image: "/images/pvc/patch-pvc-01.jpeg",
    backings: ["Velcro hook", "Velcro loop"],
    size: '3.5 x 3.5"',
    description:
      "Smooth, glossy rubber moulding with crisp raised detail and a clean edge.",
  },
  {
    id: "patch-design-26",
    name: "Tactical PVC Morale Patch",
    category: "PVC",
    image: "/images/pvc/patch-pvc-02.jpeg",
    backings: ["Velcro hook"],
    size: '4 x 2"',
    description:
      "Structured PVC mould with bold colour blocking — built for gear that takes a beating.",
  },
  {
    id: "patch-design-27",
    name: "Classic Woven Patch",
    category: "Woven",
    image: "/images/woven/patch-woven01.jpeg",
    backings: ["Iron-on", "Sew-on"],
    size: '3.5 x 2"',
    description:
      "Crisp woven construction with tight detail and a clean merrowed edge.",
  },
  {
    id: "patch-design-28",
    name: "Woven Label Badge",
    category: "Woven",
    image: "/images/woven/patch-woven02.jpeg",
    backings: ["Sew-on"],
    size: '3 x 2"',
    description:
      "Fine-gauge woven badge with sharp lettering and a neat finished edge.",
  },
  {
    id: "patch-design-29",
    name: "Multi-Thread Woven Emblem",
    category: "Woven",
    image: "/images/woven/patch-woven03.jpeg",
    backings: ["Iron-on", "Velcro hook", "Sew-on"],
    size: '3.5 x 3.5"',
    description:
      "High-density woven detail with rich colour layering for a refined finish.",
  },
  {
    id: "patch-design-30",
    name: "Woven Club Patch",
    category: "Woven",
    image: "/images/woven/patch-woven04.jpeg",
    backings: ["Sew-on", "Snap"],
    size: '3 x 3"',
    description:
      "Smooth woven face with a soft border — ideal for apparel and accessories.",
  },
  {
    id: "patch-design-31",
    name: "Minimal Woven Badge",
    category: "Woven",
    image: "/images/woven/patch-woven05.jpeg",
    backings: ["Sew-on", "Iron-on"],
    size: '2.5 x 2.5"',
    description:
      "Tight, small-format woven detail with a clean, understated edge.",
  },
  {
    id: "patch-design-32",
    name: "Vintage Woven Emblem",
    category: "Woven",
    image: "/images/woven/patch-woven06.jpeg",
    backings: ["Velcro hook", "Sew-on"],
    size: '3.75 x 3"',
    description:
      "Heritage-style woven emblem with durable, colourfast threads.",
  },
  {
    id: "patch-design-33",
    name: "Vibrant Sublimation Patch",
    category: "Sublimation",
    image: "/images/sublimation/patch-sublimation01.png",
    backings: ["Iron-on", "Sew-on"],
    size: '3.5 x 3"',
    description:
      "Full-colour sublimation print with photo-real detail and a soft edge.",
  },
  {
    id: "patch-design-34",
    name: "Photo Sublimation Badge",
    category: "Sublimation",
    image: "/images/sublimation/patch-sublimation02.png",
    backings: ["Velcro hook", "Sew-on"],
    size: '3.5 x 3.5"',
    description:
      "High-resolution sublimated artwork with fade-resistant, vibrant colours.",
  },
  {
    id: "patch-design-35",
    name: "Colour-Pop Sublimation Emblem",
    category: "Sublimation",
    image: "/images/sublimation/patch-sublimation03.png",
    backings: ["Iron-on", "Velcro hook", "Sew-on"],
    size: '3 x 3"',
    description:
      "Bold, gradient-rich sublimation patch with unlimited colour depth.",
  },
  {
    id: "patch-design-36",
    name: "Artwork Sublimation Patch",
    category: "Sublimation",
    image: "/images/sublimation/patch-sublimation04.png",
    backings: ["Sew-on"],
    size: '4 x 2"',
    description:
      "Sharp dye-sublimation print that captures fine artwork in true colour.",
  },
  {
    id: "patch-design-37",
    name: "Soft-Edge Sublimation Badge",
    category: "Sublimation",
    image: "/images/sublimation/patch-sublimation05.png",
    backings: ["Sew-on", "Snap"],
    size: '3.25 x 3.25"',
    description:
      "Colourfast sublimated design with a clean, soft-touch finish.",
  },
  {
    id: "patch-design-38",
    name: "Premium Sublimation Emblem",
    category: "Sublimation",
    image: "/images/sublimation/patch-sublimation06.png",
    backings: ["Iron-on", "Sew-on"],
    size: '3.5 x 3"',
    description:
      "Premium dye-sublimation patch with rich colour and detailed gradients.",
  },
];

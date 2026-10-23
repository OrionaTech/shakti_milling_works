import { tierOneLocations } from "@/lib/site";

export type NavLink = { label: string; href: string };

export const services: NavLink[] = [
  { label: "Ball Nose End Mill Regrinding", href: "/services/ball-nose-end-mill-regrinding" },
  { label: "Drill Bit Regrinding", href: "/services/drill-bit-regrinding" },
  { label: "Chamfer & Corner Radius", href: "/services/chamfer-and-corner-radius-regrinding" },
  { label: "Roughing & Corn Cutter", href: "/services/roughing-corn-cutter-regrinding" },
  { label: "Center Drill & Custom Tools", href: "/services/center-drill-and-custom-tools" },
];

export const guides: NavLink[] = [
  { label: "All Guides", href: "/guides" },
  { label: "When to Regrind vs Replace", href: "/guides/when-to-regrind-vs-replace" },
  { label: "How Many Times Can Carbide Be Reground?", href: "/guides/how-many-times-can-carbide-be-reground" },
  { label: "How Flute Count Affects Regrinding", href: "/guides/how-flute-count-affects-regrinding" },
  { label: "Send End Mills by Courier", href: "/guides/send-end-mills-by-courier" },
  { label: "Precision Regrinding (Video)", href: "/videos/precision-regrinding" },
];

export const locations: NavLink[] = [
  ...tierOneLocations.map((l) => ({
    label: l.city,
    href: `/locations/${l.slug}`,
  })),
  { label: "Pan India", href: "/pan-india" },
];

export const directLinks: NavLink[] = [
  { label: "Send by Courier", href: "/send-by-courier" },
  { label: "Bulk Accounts", href: "/bulk-accounts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
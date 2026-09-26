export const siteUrl = "https://shaktimillingworks.orionatech.in";

export const business = {
  name: "Shakti Milling Works",
  address: "Near PNB Bank, Aurangabad, Yamuna Nagar, Haryana 135001, India",
  telephone: "+918572068977",
  latitude: 30.1036325,
  longitude: 77.2309723,
} as const;

export type TierOneLocation = {
  slug: string;
  city: string;
  title: string;
  description: string;
  intro: string;
  localNote: string;
};

export const tierOneLocations: TierOneLocation[] = [
  {
    slug: "yamunanagar",
    city: "Yamunanagar",
    title: "Carbide End Mill Regrinding in Yamunanagar",
    description: "Local carbide end mill, drill and ball nose regrinding in Yamunanagar, with quicker local pickup and return from Shakti Milling Works.",
    intro: "Shakti Milling Works is based in Aurangabad, Yamuna Nagar, near PNB Bank. For Yamunanagar workshops, worn carbide tools can be assessed locally instead of starting with a courier shipment.",
    localNote: "Local pickup and return can make the turnaround quicker than a courier-dependent order.",
  },
  {
    slug: "ambala",
    city: "Ambala",
    title: "Carbide End Mill Regrinding for Ambala",
    description: "Carbide end mill, drill and ball nose regrinding service for Ambala manufacturing and machining teams, with fast local pickup coordination.",
    intro: "Machining teams in Ambala can send tool photos to Shakti Milling Works on WhatsApp for a practical regrinding assessment before arranging collection.",
    localNote: "For nearby Ambala work, pickup can be coordinated for a faster local-service flow than a standard courier-only order.",
  },
  {
    slug: "jagadhri",
    city: "Jagadhri",
    title: "Carbide End Mill Regrinding for Jagadhri",
    description: "End mill, drill and ball nose regrinding for Jagadhri workshops from Shakti Milling Works in nearby Yamunanagar.",
    intro: "Jagadhri workshops are close to our Yamunanagar base, making it straightforward to discuss worn carbide tooling, share photos and arrange local handling.",
    localNote: "The nearby location means local pickup and return are not dependent on a long courier route.",
  },
  {
    slug: "karnal",
    city: "Karnal",
    title: "Carbide End Mill Regrinding for Karnal",
    description: "Professional carbide end mill, drill and ball nose regrinding for Karnal customers, with photo assessment and local pickup coordination.",
    intro: "For Karnal manufacturers, Shakti Milling Works offers a direct way to assess worn carbide cutters by WhatsApp before planning collection and regrinding.",
    localNote: "Where local collection is practical, it offers a quicker alternative to waiting for a courier pickup and return cycle.",
  },
];

/**
 * Add a slug here once a city has real customer history worth targeting.
 * It will become indexed and enter sitemap.xml without another route change.
 */
export const indexedLocationSlugs = tierOneLocations.map(({ slug }) => slug);

export const getTierOneLocation = (slug: string) =>
  tierOneLocations.find((location) => location.slug === slug);

export const normaliseCity = (city?: string) =>
  city?.trim().toLowerCase().replace(/[-\s]+/g, "");

export const getTierOneLocationByCity = (city?: string) => {
  const value = normaliseCity(city);
  return tierOneLocations.find((location) => normaliseCity(location.city) === value);
};

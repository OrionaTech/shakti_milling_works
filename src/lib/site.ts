export const site = {
  url: "https://shaktimillingworks.in",
  host: "shaktimillingworks.in",
  homeDescription: "End mill regrinding in Yamunanagar, Haryana, from Shakti Milling Works. Courier orders are accepted from across India.",
  name: "Shakti Milling Works",
  ownerName: "Balram",
  gstin: "06GLRPK9430C1ZV",
  locale: "en_IN",
  logoUrl: "https://shaktimillingworks.in/images/logo.png",
  imageUrl: "https://shaktimillingworks.in/images/video-poster.jpg",
  contact: {
    primaryPhoneE164: "+918572068977",
    primaryPhoneDisplay: "+91 85720 68977",
    secondaryPhoneE164: "+919588321053",
    secondaryPhoneDisplay: "+91 95883 21053",
    whatsappE164: "+918572068977",
    hours: "Monday–Saturday, 9:00 AM–6:00 PM",
    emailSender: "contact@shaktimillingworks.in",
    quoteInbox: "contact@shaktimillingworks.in",
  },
  bulkAccounts: {
    minimumQuantity: "20 tools (single-tool orders are also welcome)",
    localCollectionSchedule: "Daily for Yamunanagar, Jagadhri, Ambala and Karnal",
    weeklyCollectionSchedule: "Weekly for Mohali, Chandigarh and Panchkula",
  },
  googleRating: { value: 5, reviewCount: 5 },
  localServiceExamples: {
    yamunanagar: [
      "Bhagmal and Sons, Yamunanagar",
      "Guru Amar Industries, E-34 Industrial Area, Yamuna Nagar",
      "Yamuna Nagar Engineering Cluster Pvt Ltd",
      "Shree Ram Industries, Radaur, Yamuna Nagar",
      "Other local shops and industries in the Yamunanagar area",
    ],
  },
  address: "Near PNB Bank, Aurangabad, Distt. Yamuna Nagar, Haryana 135002, India",
  addressParts: {
    streetAddress: "Near PNB Bank, Aurangabad",
    addressLocality: "Yamunanagar",
    addressRegion: "Haryana",
    postalCode: "135002",
    addressCountry: "IN",
  },
  geo: { latitude: 30.1036325, longitude: 77.2309723 },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  mapsDirectionsUrl: "https://share.google/m1UGKogJ6bBEmteyJ",
  feedbackUrl: "https://tally.so/r/o9bK7b",
  feedbackFormId: "o9bK7b",
  socialLinks: ["https://youtube.com/@shaktimillingworks", "https://www.instagram.com/shaktimillingworks"],
} as const;

export const pricing = {
  startingAt: "from ₹50 per piece",
  ranges: [
    { minDiameterMm: 4, maxDiameterMm: 8, priceInr: 50, fluteCount: "2–6 flutes", label: "4–8 mm" },
    { minDiameterMm: 8, maxDiameterMm: 12, priceInr: 80, fluteCount: "2–6 flutes", label: "over 8 up to 12 mm" },
    { minDiameterMm: 12, maxDiameterMm: 20, priceInr: 120, fluteCount: "2–6 flutes", label: "over 12 up to 20 mm" },
  ],
} as const;

export const formatPricePerPiece = (priceInr: number) => `₹${priceInr} per piece`;

export type SampleOrder = {
  summary: string;
  qty?: number;
  tool?: string;
  issue?: string;
  outcome?: string;
  turnaround?: string;
  permission: boolean;
};

export type TierOneLocation = {
  slug: string;
  city: string;
  title: string;
  description: string;
  intro: string;
  localNote: string;
  distanceKm?: number;
  serviceMode: "local" | "pickup" | "courier";
  route?: string;
  transit?: string;
  sampleOrder?: SampleOrder;
};

export const tierOneLocations: TierOneLocation[] = [
  {
    slug: "yamunanagar",
    city: "Yamunanagar",
    title: "Carbide End Mill Regrinding in Yamunanagar",
    description: "End mill, drill and ball nose regrinding at Shakti Milling Works' own workshop in Yamunanagar, Haryana, with in-house pickup and delivery.",
    intro: "Our grinding workshop is in Yamunanagar. Walk in with your tools, or our own team member collects them from your unit and brings them back reground.",
    localNote: "Our own person collects and delivers per order. For urgent jobs, we send someone immediately.",
    distanceKm: 0,
    serviceMode: "local",
    route: "Your unit to our workshop and back, handled by our own person.",
    transit: "Pickup is arranged per order, and immediately for urgent requirements.",
    sampleOrder: {
      summary: "Regrinding work from Yamunanagar units comes to our workshop daily, with our own person handling pickup and delivery.",
      permission: true,
    },
  },
  {
    slug: "jagadhri",
    city: "Jagadhri",
    title: "Carbide End Mill Regrinding for Jagadhri",
    description: "Carbide end mill, drill and ball nose regrinding for Jagadhri workshops, with pickup and delivery by our own team from Yamunanagar.",
    intro: "Jagadhri is next door to our Yamunanagar workshop. Our own team member picks up worn tools and delivers them back after regrinding.",
    localNote: "Pickup per order, and immediate pickup when you need tools back fast.",
    distanceKm: 3,
    serviceMode: "pickup",
    route: "Jagadhri to our Yamunanagar workshop and back, by our own person.",
    transit: "Short run, so urgent tools can be collected immediately.",
    sampleOrder: {
      summary: "Recent order: a Jagadhri workshop sent 20 carbide tools for regrinding, picked up and delivered back by our own person.",
      qty: 20,
      permission: false,
    },
  },
  {
    slug: "ambala",
    city: "Ambala",
    title: "Carbide End Mill Regrinding for Ambala",
    description: "Carbide end mill, drill and ball nose regrinding for Ambala customers, with in-house pickup and delivery from Shakti Milling Works.",
    intro: "Ambala machining teams can share photos and tool details first. Our own team member then collects the tools and delivers them back reground.",
    localNote: "Pickup is arranged per order. Tell us it's urgent and we go immediately.",
    distanceKm: 50,
    serviceMode: "pickup",
    route: "Ambala to Yamunanagar and back, by our own person.",
    transit: "Pickup per order, with immediate dispatch for urgent jobs.",
  },
  {
    slug: "saharanpur",
    city: "Saharanpur",
    title: "Carbide Tool Regrinding for Saharanpur",
    description: "Carbide tool regrinding for Saharanpur customers, with pickup and delivery arranged by Shakti Milling Works.",
    intro: "Saharanpur is just across the UP–Haryana border. Share tool photos, quantities and dimensions, and we arrange pickup and return.",
    localNote: "Pickup is arranged per order, and immediately if the requirement is urgent.",
    distanceKm: 60,
    serviceMode: "pickup",
    route: "Saharanpur to Yamunanagar and back, by our own person.",
    transit: "Pickup per order, with immediate dispatch for urgent jobs.",
  },
  {
    slug: "kurukshetra",
    city: "Kurukshetra",
    title: "Carbide Tool Regrinding for Kurukshetra",
    description: "Carbide tool regrinding for Kurukshetra customers, with pickup and delivery arranged by Shakti Milling Works.",
    intro: "Kurukshetra customers share tool photos, quantities and dimensions first. We then arrange pickup and return to our Yamunanagar workshop.",
    localNote: "Pickup is arranged per order, and immediately for urgent tools.",
    distanceKm: 70,
    serviceMode: "pickup",
    route: "Kurukshetra to Yamunanagar and back, by our own person.",
    transit: "Pickup per order, with immediate dispatch for urgent jobs.",
  },
  {
    slug: "karnal",
    city: "Karnal",
    title: "Carbide End Mill Regrinding for Karnal",
    description: "Carbide end mill, drill and ball nose regrinding for Karnal customers, with pickup and delivery from Shakti Milling Works.",
    intro: "Karnal manufacturers send photos of worn carbide cutters first. We assess them, then arrange pickup and return to our Yamunanagar workshop.",
    localNote: "Pickup is arranged per order, and immediately if you need it urgently.",
    distanceKm: 100,
    serviceMode: "pickup",
    route: "Karnal to Yamunanagar and back, by our own person.",
    transit: "Pickup per order, with immediate dispatch for urgent jobs.",
  },
  {
    slug: "panchkula",
    city: "Panchkula",
    title: "Carbide Tool Regrinding for Panchkula",
    description: "Carbide tool regrinding for Panchkula customers, with pickup and delivery from our Yamunanagar workshop.",
    intro: "Panchkula orders travel to our Yamunanagar workshop with pickup and return arranged by Shakti Milling Works.",
    localNote: "Pickup is arranged per order, and immediately for urgent requirements.",
    distanceKm: 90,
    serviceMode: "pickup",
    route: "Panchkula to Yamunanagar and back, by our own person.",
    transit: "Pickup per order, with immediate dispatch for urgent jobs.",
  },
  {
    slug: "dera-bassi",
    city: "Dera Bassi",
    title: "Carbide Tool Regrinding for Dera Bassi",
    description: "Carbide tool regrinding for Dera Bassi industrial customers, with pickup and delivery from Shakti Milling Works.",
    intro: "Dera Bassi customers share tool photos, quantities and dimensions first. We then arrange pickup and return to Yamunanagar.",
    localNote: "Pickup is arranged per order, and immediately for urgent tools.",
    distanceKm: 100,
    serviceMode: "pickup",
    route: "Dera Bassi to Yamunanagar and back, by our own person.",
    transit: "Pickup per order, with immediate dispatch for urgent jobs.",
  },
  {
    slug: "mohali-chandigarh",
    city: "Mohali–Chandigarh",
    title: "Carbide Tool Regrinding for Mohali & Chandigarh",
    description: "Carbide tool regrinding for Mohali and Chandigarh customers, with pickup and delivery from our Yamunanagar workshop.",
    intro: "Shakti Milling Works serves Mohali and Chandigarh from Yamunanagar, with pickup and return arranged. We have no shop or premises in either city.",
    localNote: "Pickup is arranged per order, and immediately for urgent requirements.",
    distanceKm: 100,
    serviceMode: "pickup",
    route: "Mohali and Chandigarh to Yamunanagar and back, by our own person.",
    transit: "Pickup per order, with immediate dispatch for urgent jobs.",
  },
];

/** Add a city here only once its page has verified, publishable local detail. */
/** Keep only locations with confirmed unique content indexable. */
export const indexedLocationSlugs = ["yamunanagar", "jagadhri"];

export const getTierOneLocation = (slug: string) =>
  tierOneLocations.find((location) => location.slug === slug);

export const normaliseCity = (city?: string) =>
  city?.trim().toLowerCase().replace(/[-\s]+/g, "");

export const getTierOneLocationByCity = (city?: string) => {
  const value = normaliseCity(city);
  return tierOneLocations.find((location) => normaliseCity(location.city) === value);
};

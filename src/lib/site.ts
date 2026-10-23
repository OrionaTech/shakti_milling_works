export const site = {
  url: "https://shaktimillingworks.in",
  host: "shaktimillingworks.in",
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
  mapsDirectionsUrl: "https://www.google.com/maps/dir//SHAKTI+MILLING+WORKS,+Aurangabad,+Yamuna+Nagar,+Haryana+135002/@30.0969664,77.2290188,3014m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390ef942dbc03141:0xc9e820f8a58b7917!2m2!1d77.2309723!2d30.1036325?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
  feedbackUrl: "https://tally.so/r/o9bK7b",
  feedbackFormId: "o9bK7b",
  socialLinks: ["https://youtube.com/@shaktimillingworks", "https://www.instagram.com/shaktimillingworks"],
} as const;

export const pricing = {
  startingAt: "₹50 per piece",
  ranges: [
    { minDiameterMm: 4, maxDiameterMm: 8, priceInr: 50, fluteCount: "2–6 flutes", label: "4–8 mm" },
    { minDiameterMm: 9, maxDiameterMm: 12, priceInr: 80, fluteCount: "2–6 flutes", label: "9–12 mm" },
    { minDiameterMm: 14, maxDiameterMm: 20, priceInr: 120, fluteCount: "2–6 flutes", label: "14–20 mm" },
  ],
} as const;

export const formatPricePerPiece = (priceInr: number) => `₹${priceInr} per piece`;

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
    slug: "panchkula",
    city: "Panchkula",
    title: "Carbide Tool Regrinding for Panchkula",
    description: "Pickup and courier support for Panchkula carbide tool regrinding orders.",
    intro: "Shakti Milling Works provides pickup and courier support for Panchkula carbide-tool regrinding orders from its Yamunanagar premises.",
    localNote: "Pickup and delivery service is available for Panchkula orders, with a typical 24–48 hour turnaround.",
  },
  {
    slug: "dera-bassi",
    city: "Dera Bassi",
    title: "Carbide Tool Regrinding for Dera Bassi",
    description: "Courier-based carbide tool regrinding support for Dera Bassi orders.",
    intro: "Dera Bassi customers can share tool photographs, quantities and dimensions with Shakti Milling Works before arranging a courier-based regrinding order.",
    localNote: "Pickup and delivery service is available, with a typical 24–48 hour turnaround.",
  },
  {
    slug: "kurukshetra",
    city: "Kurukshetra",
    title: "Carbide Tool Regrinding for Kurukshetra",
    description: "Courier-based carbide tool regrinding support for Kurukshetra orders.",
    intro: "Kurukshetra customers can share tool photographs, quantities and dimensions with Shakti Milling Works before arranging a courier-based regrinding order.",
    localNote: "Pickup and delivery service is available, with a typical 24–48 hour turnaround.",
  },
  {
    slug: "saharanpur",
    city: "Saharanpur",
    title: "Carbide Tool Regrinding for Saharanpur",
    description: "Courier-based carbide tool regrinding support for Saharanpur orders.",
    intro: "Saharanpur customers can share tool photographs, quantities and dimensions with Shakti Milling Works before arranging a courier-based regrinding order.",
    localNote: "Pickup and delivery service is available, with a typical 24–48 hour turnaround.",
  },
  { slug: "mohali-chandigarh", city: "Mohali–Chandigarh", 
    title: "Carbide Tool Regrinding for Mohali & Chandigarh", 
    description: "Pickup and courier support for Mohali and Chandigarh carbide tool regrinding orders.", 
    intro: "Shakti Milling Works provides pickup and courier support for Mohali and Chandigarh orders. This page does not represent a shop or premises in Mohali or Chandigarh.", 
    localNote: "Pickup and delivery service is available, with a typical 24–48 hour turnaround." },
  {
    slug: "yamunanagar",
    city: "Yamunanagar",
    title: "Carbide End Mill Regrinding in Yamunanagar",
    description: "End mill, drill and ball nose regrinding from Shakti Milling Works in Yamunanagar, Haryana.",
    intro: "Shakti Milling Works serves Yamunanagar from its local premises. Share tool photos and requirements to discuss whether regrinding is suitable.",
    localNote: "Local pickup and return are available in Yamunanagar.",
  },
  {
    slug: "ambala",
    city: "Ambala",
    title: "Carbide End Mill Regrinding for Ambala",
    description: "Courier-based carbide end mill, drill and ball nose regrinding for Ambala customers from Shakti Milling Works.",
    intro: "Ambala machining teams can share photos and tool details with Shakti Milling Works before arranging a courier-based regrinding order.",
    localNote: "Local pickup and return are available in Ambala.",
  },
  {
    slug: "jagadhri",
    city: "Jagadhri",
    title: "Carbide End Mill Regrinding for Jagadhri",
    description: "Carbide end mill, drill and ball nose regrinding for Jagadhri customers from Shakti Milling Works in Yamunanagar.",
    intro: "Jagadhri workshops can share tool photos and requirements with Shakti Milling Works to discuss a suitable regrinding order.",
    localNote: "Local pickup and return are available in Jagadhri.",
  },
  {
    slug: "karnal",
    city: "Karnal",
    title: "Carbide End Mill Regrinding for Karnal",
    description: "Courier-based carbide end mill, drill and ball nose regrinding for Karnal customers from Shakti Milling Works.",
    intro: "Karnal manufacturers can share photos of worn carbide cutters before arranging a courier-based assessment and regrinding order.",
    localNote: "Local pickup and return are available in Karnal.",
  },
];

/** Add a city here only once its page has verified, publishable local detail. */
/** All configured service areas are available for indexing. */
export const indexedLocationSlugs = tierOneLocations.map(({ slug }) => slug);

export const getTierOneLocation = (slug: string) =>
  tierOneLocations.find((location) => location.slug === slug);

export const normaliseCity = (city?: string) =>
  city?.trim().toLowerCase().replace(/[-\s]+/g, "");

export const getTierOneLocationByCity = (city?: string) => {
  const value = normaliseCity(city);
  return tierOneLocations.find((location) => normaliseCity(location.city) === value);
};

export const site = {
  url: "https://shaktimillingworks.in",
  host: "shaktimillingworks.in",
  name: "Shakti Milling Works",
  locale: "en_IN",
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
  address: "Near PNB Bank, Aurangabad, Distt. Yamuna Nagar, Haryana 135002, India",
  geo: { latitude: 30.1036325, longitude: 77.2309723 },
  mapsDirectionsUrl: "https://www.google.com/maps/dir//SHAKTI+MILLING+WORKS,+Aurangabad,+Yamuna+Nagar,+Haryana+135002/@30.0969664,77.2290188,3014m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390ef942dbc03141:0xc9e820f8a58b7917!2m2!1d77.2309723!2d30.1036325?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
  feedbackUrl: "https://tally.so/r/o9bK7b",
  feedbackFormId: "o9bK7b",
  socialLinks: ["https://youtube.com/@shaktimillingworks", "https://www.instagram.com/shaktimillingworks"],
} as const;

export const pricing = {
  startingAt: "₹50 per piece",
  ranges: [
    { diameter: "4–8 mm", fluteCount: "2–6 flutes", price: "₹50 per piece" },
    { diameter: "8–12 mm", fluteCount: "2–6 flutes", price: "₹80 per piece" },
    { diameter: "14–20 mm", fluteCount: "2–6 flutes", price: "₹120 per piece" },
  ],
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
  { slug: "mohali-chandigarh", city: "Mohali–Chandigarh", title: "Carbide Tool Regrinding for Mohali & Chandigarh", description: "Pickup and courier support for Mohali and Chandigarh carbide tool regrinding orders.", intro: "Shakti Milling Works provides pickup and courier support for Mohali and Chandigarh orders. This page does not represent a shop or premises in Mohali or Chandigarh.", localNote: "Pickup and courier support are available; the only premises are in Yamunanagar." },
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
export const indexedLocationSlugs = tierOneLocations.map(({ slug }) => slug);

export const getTierOneLocation = (slug: string) =>
  tierOneLocations.find((location) => location.slug === slug);

export const normaliseCity = (city?: string) =>
  city?.trim().toLowerCase().replace(/[-\s]+/g, "");

export const getTierOneLocationByCity = (city?: string) => {
  const value = normaliseCity(city);
  return tierOneLocations.find((location) => normaliseCity(location.city) === value);
};

import { business } from "@/lib/locations";

type LocationSchemaProps = {
  areaServed: string | string[];
  serviceName?: string;
};

export default function LocationSchema({ areaServed, serviceName }: LocationSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shaktimillingworks.in/#business",
    name: business.name,
    url: "https://shaktimillingworks.in",
    telephone: business.telephone,
    priceRange: "₹70–₹₹",
    openingHours: "Mo-Sa 09:00-18:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near PNB Bank, Aurangabad",
      addressLocality: "Yamuna Nagar",
      addressRegion: "Haryana",
      postalCode: "135001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    areaServed,
    ...(serviceName
      ? {
          makesOffer: {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: serviceName },
          },
        }
      : {}),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

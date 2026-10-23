import { pricing, site } from "@/lib/site";

type LocationSchemaProps = {
  areaServed: string | string[];
  serviceName?: string;
};

export default function LocationSchema({ areaServed, serviceName }: LocationSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    taxID: site.gstin,
    priceRange: pricing.startingAt,
    telephone: site.contact.primaryPhoneE164,
    openingHours: "Mo-Sa 09:00-18:00",
    sameAs: site.socialLinks,
    address: { "@type": "PostalAddress", streetAddress: "Near PNB Bank, Aurangabad", addressLocality: "Yamuna Nagar", addressRegion: "Haryana", postalCode: "135002", addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.googleRating.value, reviewCount: site.googleRating.reviewCount },
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

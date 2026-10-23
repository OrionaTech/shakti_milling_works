import type { TierOneLocation } from "@/lib/site";
import { pricing, site } from "@/lib/site";

const schemaUrl = "https://schema.org";
const businessId = `${site.url}/#business`;
const regrindingId = `${site.url}/#regrinding`;

export const toJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJsonLd(data) }}
    />
  );
}

export function homeGraph() {
  const offers = pricing.ranges.map((range) => ({
    "@type": "Offer",
    priceCurrency: "INR",
    price: String(range.priceInr),
    description: `${range.label} diameter, ${range.fluteCount}, per piece`,
  }));

  return {
    "@context": schemaUrl,
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: site.name,
        url: site.url,
        logo: { "@type": "ImageObject", url: site.logoUrl },
        image: site.imageUrl,
        description: "End Mill Regrinding in Yamunanagar. Regrind & Resharpen.",
        telephone: site.contact.primaryPhoneE164,
        email: site.contact.emailSender,
        priceRange: "₹50–₹120 per piece",
        taxID: site.gstin,
        address: {
          "@type": "PostalAddress",
          ...site.addressParts,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: site.openingHours.days.map((day) => `${schemaUrl}/${day}`),
          opens: site.openingHours.opens,
          closes: site.openingHours.closes,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.contact.primaryPhoneE164,
            contactType: "customer service",
          },
          {
            "@type": "ContactPoint",
            telephone: site.contact.secondaryPhoneE164,
            contactType: "sales",
          },
        ],
        areaServed: { "@type": "Country", name: "India" },
        hasMap: site.mapsDirectionsUrl,
        sameAs: site.socialLinks,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": businessId },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id": regrindingId,
        name: "Carbide End Mill Regrinding",
        description: "Suitable 4mm–20mm carbide end mills can often be reground instead of replaced.",
        url: site.url,
        provider: { "@id": businessId },
        areaServed: { "@type": "Country", name: "India" },
        offers,
      },
    ],
  };
}

export function locationJsonLd(loc: TierOneLocation) {
  const areaServed = loc.slug === "mohali-chandigarh"
    ? [
        { "@type": "City", name: "Mohali" },
        { "@type": "City", name: "Chandigarh" },
      ]
    : { "@type": "City", name: loc.city };

  return {
    "@context": schemaUrl,
    "@type": "Service",
    "@id": `${site.url}/locations/${loc.slug}#service`,
    name: loc.title,
    description: loc.intro,
    url: `${site.url}/locations/${loc.slug}`,
    provider: { "@id": businessId },
    areaServed,
  };
}

type ServiceDetails = {
  name: string;
  description: string;
  slug?: string;
  path?: string;
  areaServed?: string;
};

export function serviceJsonLd(service: ServiceDetails) {
  const path = service.path ?? (service.slug ? `/services/${service.slug}` : "/pan-india");

  return {
    "@context": schemaUrl,
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: service.name,
    description: service.description,
    url: `${site.url}${path}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "Country", name: service.areaServed ?? "India" },
  };
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  return {
    "@context": schemaUrl,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, site.url).toString(),
    })),
  };
}

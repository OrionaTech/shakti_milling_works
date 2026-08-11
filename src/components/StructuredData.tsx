export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "@id":
      "https://shaktimillingworks.orionatech.in/#business",

    name: "Shakti Milling Works",

    url: "https://shaktimillingworks.orionatech.in",

    description:
      "Tungsten carbide end mill regrinding and resharpening service from Yamunanagar, Haryana, serving CNC machining and manufacturing businesses across India.",

    telephone: "+919588321053",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Near PNB Bank, Aurangabad",
      addressLocality: "Yamunanagar",
      addressRegion: "Haryana",
      postalCode: "135002",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1036325,
      longitude: 77.2309723,
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    serviceType: [
      "Tungsten Carbide End Mill Regrinding",
      "Carbide End Mill Regrinding",
      "End Mill Sharpening",
      "End Mill Resharpening",
      "CNC End Mill Regrinding",
      "Ball Nose End Mill Regrinding",
      "Carbide Cutter Sharpening",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
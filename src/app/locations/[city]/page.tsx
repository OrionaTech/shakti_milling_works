import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getTierOneLocation, indexedLocationSlugs, site, tierOneLocations } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, JsonLd, locationJsonLd } from "@/lib/jsonld";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return tierOneLocations.map(({ slug: city }) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const location = getTierOneLocation(slug);
  const indexed = location ? indexedLocationSlugs.includes(slug) : false;
  if (!location) {
    return {
      ...pageMetadata({ title: "Carbide Tool Regrinding Across India", description: "Get a carbide tool regrinding quote from Shakti Milling Works.", path: "/pan-india" }),
      robots: { index: indexed, follow: true },
    };
  }

  return { ...pageMetadata({ title: location.title, description: location.description, path: `/locations/${slug}` }), robots: { index: indexed, follow: true } };
}

function CoreServices() {
  return <div className="mt-10 grid gap-4 md:grid-cols-3"><article><h2 className="font-bold text-xl">End mill regrinding</h2><p className="mt-2 text-charcoal/65">Restore suitable carbide end mills where the tool condition and geometry allow.</p></article><article><h2 className="font-bold text-xl">Drill regrinding</h2><p className="mt-2 text-charcoal/65">Send clear photos and dimensions so we can assess worn carbide drills before quoting.</p></article><article><h2 className="font-bold text-xl">Ball nose regrinding</h2><p className="mt-2 text-charcoal/65">Talk to us about ball nose and radius end mills that may be suitable for regrinding.</p></article></div>;
}

export default async function LocationPage({ params }: Props) {
  const { city: slug } = await params;
  const location = getTierOneLocation(slug);

  if (!location) {
    return <><Header /><main className="max-w-4xl mx-auto px-5 py-20"><p className="text-xs font-bold uppercase tracking-widest text-spark">Pan-India service</p><h1 className="mt-4 font-black text-4xl tracking-tight">Carbide tool regrinding across India</h1><p className="mt-6 text-lg text-charcoal/65 leading-relaxed">We do not publish distance or turnaround claims for this city without a live route calculation. Send photos of your tools on WhatsApp for assessment and a quote.</p><Link href="/pan-india" className="inline-block mt-8 bg-navy text-white font-bold px-6 py-3 rounded-md">View pan-India service</Link></main><Contact /><Footer /><WhatsAppButton /></>;
  }

  const localExamples = location.slug === "yamunanagar" ? site.localServiceExamples.yamunanagar : [];
  return (
    <>
      <JsonLd data={locationJsonLd(location)} />
      <JsonLd data={breadcrumbJsonLd([{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: location.city, href: `/locations/${location.slug}` }])} />
      <Header />
      <main className="max-w-6xl mx-auto px-5 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link href="/" className="underline">Home</Link> / <span>Locations</span> / <span>{location.city}</span>
        </nav>
        <p className="text-xs font-bold uppercase tracking-widest text-spark">Local service area</p>
        <h1 className="mt-4 font-black text-4xl md:text-5xl tracking-tight">{location.title}</h1>
        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-charcoal/70">
          <p>{location.intro}</p>
          {location.sampleOrder?.permission && (
            <section className="rounded-lg border p-4 my-6">
              <h2 className="text-lg font-semibold">Recent work from {location.city}</h2>
              <p className="mt-2">{location.sampleOrder.summary}</p>
              {location.sampleOrder.qty && (
                <p className="mt-1 text-sm text-gray-600">Quantity: {location.sampleOrder.qty} tools</p>
              )}
            </section>
          )}
          <section className="rounded-lg border p-4 my-6">
            <h2 className="text-lg font-semibold">How it works from {location.city}</h2>
            {location.distanceKm !== undefined && <p className="mt-2">Approx. road distance: {location.distanceKm} km</p>}
            {location.route && <p className="mt-1">{location.route}</p>}
            {location.transit && <p className="mt-1">{location.transit}</p>}
          </section>
          <p>{location.localNote} Before sending tools, share photographs, quantities, diameters and known geometry. This makes it possible to discuss whether the tools are suitable and to plan pickup and return.</p>
          <p>Customers use regrinding for suitable end mills, drills, ball nose cutters and related carbide tooling. Each tool is assessed individually because damage, remaining geometry and the work required can differ. Pricing and final scope are confirmed after assessment rather than assumed from a photo alone.</p>
          {localExamples.length > 0 ? (
            <section>
              <h2 className="text-2xl font-black">Yamunanagar workshops and industries served</h2>
              <ul className="mt-3 list-disc pl-5">{localExamples.map((example) => <li key={example}>{example}</li>)}</ul>
            </section>
          ) : (
            <p>
              {location.slug === "mohali-chandigarh"
                ? "Mohali and Chandigarh are service areas only; Shakti Milling Works has no premises there. Our own person handles pickup and delivery from the Yamunanagar premises."
                : "Contact us to confirm pickup and delivery arrangements for your area."}
            </p>
          )}
        </div>
        <CoreServices />
        <section className="mt-12">
          <h2 className="text-2xl font-black">{location.city} FAQ</h2>
          <p className="mt-3 text-charcoal/70">How do I arrange service? Send tool photographs and requirements by WhatsApp, then confirm pickup and delivery arrangements before dispatch.</p>
        </section>
        <div className="mt-12 border-t border-steelgray pt-7">
          <p className="font-bold">Also serving</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {tierOneLocations.filter((other) => other.slug !== location.slug).map((other) => <Link key={other.slug} href={`/locations/${other.slug}`} className="text-navy underline">{other.city}</Link>)}
            <Link href="/" className="text-navy underline">Home</Link>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

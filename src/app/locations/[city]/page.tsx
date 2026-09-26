import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocationSchema from "@/components/LocationSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getTierOneLocation, indexedLocationSlugs, tierOneLocations } from "@/lib/locations";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return indexedLocationSlugs.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const location = getTierOneLocation(slug);
  const indexed = indexedLocationSlugs.includes(slug);
  if (!location) {
    return {
      title: "Carbide Tool Regrinding Across India",
      description: "Get a courier-based carbide tool regrinding quote from Shakti Milling Works by WhatsApp.",
      robots: { index: indexed, follow: true },
      alternates: indexed ? { canonical: `/locations/${slug}` } : { canonical: "/pan-india" },
    };
  }

  return {
    title: location.title,
    description: location.description,
    alternates: { canonical: `/locations/${slug}` },
    robots: { index: true, follow: true },
  };
}

function CoreServices() {
  return <div className="mt-10 grid gap-4 md:grid-cols-3"><article><h2 className="font-bold text-xl">End mill regrinding</h2><p className="mt-2 text-charcoal/65">Restore suitable carbide end mills where the tool condition and geometry allow.</p></article><article><h2 className="font-bold text-xl">Drill regrinding</h2><p className="mt-2 text-charcoal/65">Send clear photos and dimensions so we can assess worn carbide drills before quoting.</p></article><article><h2 className="font-bold text-xl">Ball nose regrinding</h2><p className="mt-2 text-charcoal/65">Talk to us about ball nose and radius end mills that may be suitable for regrinding.</p></article></div>;
}

export default async function LocationPage({ params }: Props) {
  const { city: slug } = await params;
  const location = getTierOneLocation(slug);

  if (!location) {
    return <><Header /><main className="max-w-4xl mx-auto px-5 py-20"><p className="text-xs font-bold uppercase tracking-widest text-spark">Pan-India service</p><h1 className="mt-4 font-black text-4xl tracking-tight">Carbide tool regrinding across India</h1><p className="mt-6 text-lg text-charcoal/65 leading-relaxed">We do not publish distance or turnaround claims for this city without a live route calculation. Send photos of your tools on WhatsApp for a courier-based assessment and quote.</p><Link href="/pan-india" className="inline-block mt-8 bg-navy text-white font-bold px-6 py-3 rounded-md">View pan-India service</Link></main><Contact /><Footer /><WhatsAppButton /></>;
  }

  return <><LocationSchema areaServed={location.city} serviceName="Carbide end mill, drill and ball nose regrinding" /><Header /><main className="max-w-6xl mx-auto px-5 py-16 md:py-20"><p className="text-xs font-bold uppercase tracking-widest text-spark">Local service area</p><h1 className="mt-4 font-black text-4xl md:text-5xl tracking-tight">{location.title}</h1><p className="mt-6 max-w-3xl text-lg text-charcoal/70 leading-relaxed">{location.intro}</p><p className="mt-5 max-w-3xl font-semibold text-navy">{location.localNote}</p><CoreServices /><div className="mt-12 border-t border-steelgray pt-7"><p className="font-bold">Also serving</p><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{tierOneLocations.filter((other) => other.slug !== location.slug).map((other) => <Link key={other.slug} href={`/locations/${other.slug}`} className="text-navy underline">{other.city}</Link>)}<Link href="/" className="text-navy underline">Home</Link></div></div></main><Contact /><Footer /><WhatsAppButton /></>;
}

import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { pageMetadata } from "@/lib/metadata";
import TrackedLink from "@/components/TrackedLink";
import { breadcrumbJsonLd, JsonLd, serviceJsonLd } from "@/lib/jsonld";

export function generateMetadata(): Metadata {
  return pageMetadata({ title: "Carbide Tool Regrinding Across India", description: "Pan-India carbide end mill, drill and ball nose regrinding. Share tool photos and requirements for assessment.", path: "/pan-india" });
}

export default function PanIndiaPage() {
  const service = {
    name: "Carbide tool regrinding, wherever you are in India.",
    description: "Send photos of your end mills, drills or ball nose cutters on WhatsApp. We will assess the tools, discuss the work and provide a quote that accounts for pickup, regrinding and return delivery.",
    path: "/pan-india",
  };
  return <><JsonLd data={serviceJsonLd(service)} /><JsonLd data={breadcrumbJsonLd([{ label: "Home", href: "/" }, { label: "Pan-India service", href: "/pan-india" }])} /><Header /><main className="max-w-6xl mx-auto px-5 py-16 md:py-20"><p className="text-xs font-bold uppercase tracking-widest text-spark">Pan-India service</p><h1 className="mt-4 max-w-4xl font-black text-4xl md:text-5xl tracking-tight">Carbide tool regrinding, wherever you are in India.</h1><p className="mt-6 max-w-3xl text-lg text-charcoal/70 leading-relaxed">Send photos of your end mills, drills or ball nose cutters on WhatsApp. We will assess the tools, discuss the work and provide a quote that accounts for pickup, regrinding and return delivery.</p><div className="mt-10 grid md:grid-cols-3 gap-5"><div><h2 className="font-bold text-xl">1. Share photos</h2><p className="mt-2 text-charcoal/65">Include quantity, diameter and any known tool details.</p></div><div><h2 className="font-bold text-xl">2. Confirm the quote</h2><p className="mt-2 text-charcoal/65">We discuss whether the tools are suitable and confirm pickup arrangements.</p></div><div><h2 className="font-bold text-xl">3. Receive your tools</h2><p className="mt-2 text-charcoal/65">Pickup and return arrangements are confirmed per order.</p></div></div><TrackedLink href="#contact" eventName="courier_cta_click" eventParameters={{ placement: "pan_india" }} className="inline-block mt-10 bg-navy text-white font-bold px-6 py-3 rounded-md">Request a WhatsApp quote</TrackedLink></main><Contact /><Footer /><WhatsAppButton /></>;
}

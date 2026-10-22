import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocationSchema from "@/components/LocationSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import { pageMetadata } from "@/lib/metadata";
import TrackedLink from "@/components/TrackedLink";

export function generateMetadata(): Metadata {
  return pageMetadata({ title: "Carbide Tool Regrinding Across India", description: "Pan-India carbide end mill, drill and ball nose regrinding by courier. Share tool photos and requirements for assessment.", path: "/pan-india" });
}

export default function PanIndiaPage() {
  return <><LocationSchema areaServed="India" serviceName="Pan-India carbide end mill, drill and ball nose regrinding" /><Header /><main className="max-w-6xl mx-auto px-5 py-16 md:py-20"><p className="text-xs font-bold uppercase tracking-widest text-spark">Pan-India service</p><h1 className="mt-4 max-w-4xl font-black text-4xl md:text-5xl tracking-tight">Carbide tool regrinding, wherever you are in India.</h1><p className="mt-6 max-w-3xl text-lg text-charcoal/70 leading-relaxed">Send photos of your end mills, drills or ball nose cutters on WhatsApp. We will assess the tools, discuss the work and provide a courier-based quote that accounts for collection, regrinding and return delivery.</p><div className="mt-10 grid md:grid-cols-3 gap-5"><div><h2 className="font-bold text-xl">1. Share photos</h2><p className="mt-2 text-charcoal/65">Include quantity, diameter and any known tool details.</p></div><div><h2 className="font-bold text-xl">2. Confirm the quote</h2><p className="mt-2 text-charcoal/65">We discuss whether the tools are suitable and coordinate the courier.</p></div><div><h2 className="font-bold text-xl">3. Receive your tools</h2><p className="mt-2 text-charcoal/65">Turnaround includes courier collection and return time, which varies by route.</p></div></div><TrackedLink href="#contact" eventName="courier_cta_click" eventParameters={{ placement: "pan_india" }} className="inline-block mt-10 bg-navy text-white font-bold px-6 py-3 rounded-md">Request a WhatsApp quote</TrackedLink></main><Contact /><Footer /><WhatsAppButton /></>;
}

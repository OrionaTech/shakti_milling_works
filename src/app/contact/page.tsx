import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { pageMetadata } from "@/lib/metadata";
export function generateMetadata(): Metadata { return pageMetadata({ title: "Contact Shakti Milling Works", description: "Contact Shakti Milling Works in Yamunanagar for carbide tool regrinding.", path: "/contact" }); }
export default function ContactPage() { return <><Header /><main className="mx-auto max-w-5xl px-5 py-12"><h1 className="text-4xl font-black">Contact Shakti Milling Works</h1><p className="mt-4 text-charcoal/70">Call or WhatsApp us with photos, quantities and tool dimensions.</p></main><Contact /><Footer /></>; }

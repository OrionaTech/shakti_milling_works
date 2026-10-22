import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingGuide from "@/components/PricingGuide";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/content";

type Props = { params: Promise<{ service: string }> };
export function generateStaticParams() { return services.map(({ slug }) => ({ service: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { service: slug } = await params; const service = services.find((item) => item.slug === slug); return service ? pageMetadata({ title: `${service.name} | Shakti Milling Works`, description: service.description, path: `/services/${slug}` }) : {}; }
export default async function ServicePage({ params }: Props) { const { service: slug } = await params; const service = services.find((item) => item.slug === slug); if (!service) notFound(); return <><Header /><main className="mx-auto max-w-5xl px-5 py-16"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/#services" }, { label: service.name }]} /><h1 className="text-4xl font-black md:text-5xl">{service.name}</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/70">{service.description} We inspect the condition and dimensions before confirming whether a tool is suitable. Final geometry, scope and timing are confirmed after assessment.</p><section className="mt-12"><h2 className="text-2xl font-black">Process and turnaround</h2><p className="mt-4 text-charcoal/70">Share clear photos, quantity and dimensions. Local orders typically take 24 hours; courier orders are typically ready 24 hours after courier acceptance, subject to assessment.</p></section><section className="mt-12"><h2 className="text-2xl font-black">Price guide</h2><PricingGuide /></section><section className="mt-12"><h2 className="text-2xl font-black">FAQ</h2><p className="mt-4 text-charcoal/70">Can this tool be reground? Every tool is assessed individually. Send photos on WhatsApp to discuss its condition and required work.</p></section><div className="mt-12 flex flex-wrap gap-4">{services.filter((item) => item.slug !== slug).map((item) => <Link className="underline" key={item.slug} href={`/services/${item.slug}`}>{item.name}</Link>)}</div></main><Contact /><Footer /></>; }

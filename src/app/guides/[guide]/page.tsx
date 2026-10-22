import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { guides, services } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
type Props = { params: Promise<{ guide: string }> };
export function generateStaticParams() { return guides.map(({ slug }) => ({ guide: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { guide: slug } = await params; const guide = guides.find((item) => item.slug === slug); return guide ? pageMetadata({ title: `${guide.title} | Shakti Milling Works`, description: `Guide: ${guide.title}.`, path: `/guides/${slug}` }) : {}; }
export default async function Guide({ params }: Props) { const { guide: slug } = await params; const guide = guides.find((item) => item.slug === slug); if (!guide) notFound(); return <><Header /><main className="mx-auto max-w-4xl px-5 py-16"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }]} /><h1 className="text-4xl font-black">{guide.title}</h1><p className="mt-6 text-charcoal/70">TODO: Final editorial copy and technical review required. Use this guide to understand the assessment questions to ask before sending a carbide tool for regrinding.</p><h2 className="mt-10 text-2xl font-black">Outline</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-charcoal/70"><li>Tool condition and inspection points</li><li>Dimensions, geometry and flute count</li><li>When to request an assessment</li><li>How to pack and send tools safely</li></ul><p className="mt-10">Related services: {services.map((service) => <a className="ml-2 underline" key={service.slug} href={`/services/${service.slug}`}>{service.name}</a>)}</p></main><Footer /></>; }

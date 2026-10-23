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
export default async function Guide({ params }: Props) { const { guide: slug } = await params; const guide = guides.find((item) => item.slug === slug); if (!guide) notFound(); return <><Header /><main className="mx-auto max-w-4xl px-5 py-16"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }]} /><h1 className="text-4xl font-black">{guide.title}</h1><p className="mt-6 text-charcoal/70">Use this guide to prepare the details needed for a regrinding assessment. Tool condition, remaining geometry and the intended application should be considered before dispatch.</p><h2 className="mt-10 text-2xl font-black">Assessment checklist</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-charcoal/70"><li>Share clear photographs of the cutting edges.</li><li>Include tool diameter, flute count and quantity.</li><li>Describe visible damage and the required work.</li><li>Pack tools so cutting edges cannot touch during courier handling.</li></ul><p className="mt-10">Related services: {services.map((service) => <a className="ml-2 underline" key={service.slug} href={`/services/${service.slug}`}>{service.name}</a>)}</p></main><Footer /></>; }

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { guides } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, JsonLd } from "@/lib/jsonld";
export function generateMetadata(): Metadata { return pageMetadata({ title: "End Mill Regrinding Guides | Shakti Milling Works", description: "Practical guides for carbide end mill assessment and courier regrinding.", path: "/guides" }); }
export default function Guides() { return <><JsonLd data={breadcrumbJsonLd([{ label: "Home", href: "/" }, { label: "End Mill Regrinding Guides", href: "/guides" }])} /><Header /><main className="mx-auto max-w-5xl px-5 py-16"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} /><h1 className="text-4xl font-black">End Mill Regrinding Guides</h1><div className="mt-10 grid gap-5 md:grid-cols-2">{guides.map((guide) => <Link className="rounded-md border border-steelgray p-6 font-bold hover:border-navy" key={guide.slug} href={`/guides/${guide.slug}`}>{guide.title}<span className="mt-3 block text-sm font-normal text-charcoal/60">Assessment, tooling and courier guidance</span></Link>)}</div></main><Footer /></>; }

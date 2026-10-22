import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function BasicPage({ title, children }: { title: string; children: ReactNode }) { return <><Header /><main className="mx-auto max-w-5xl px-5 py-16"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} /><h1 className="text-4xl font-black md:text-5xl">{title}</h1><div className="mt-7 max-w-3xl space-y-5 leading-relaxed text-charcoal/70">{children}</div></main><Contact /><Footer /></>; }

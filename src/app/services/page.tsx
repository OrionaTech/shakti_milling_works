import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/content";
import { breadcrumbJsonLd, JsonLd } from "@/lib/jsonld";

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "Tool Regrinding Services | Shakti Milling Works",
    description: "Explore carbide end mill, insert, drill, chamfer and custom tool regrinding at Shakti Milling Works in Yamunanagar, Haryana.",
    path: "/services",
  });
}

const primaryServices = [
  {
    href: "/services/end-mill-regrinding",
    title: "End Mill Regrinding",
    description: "Regrinding for suitable 4–20 mm carbide end mills, including ball nose and side-radius tools.",
  },
  {
    href: "/services/carbide-insert-regrinding",
    title: "Carbide Insert Regrinding",
    description: "Assessment and regrinding for suitable carbide turning and milling inserts, with courier service across India.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ])} />
      <Header />
      <main className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]} />
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">Carbide Tool Regrinding Services</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal/70">
          Shakti Milling Works assesses cutting tools at our Yamunanagar, Haryana workshop. Local customers can drop tools off, and customers across India can send them by courier.
        </p>

        <section className="mt-10" aria-labelledby="primary-services">
          <h2 id="primary-services" className="text-2xl font-black">Our regrinding services</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {primaryServices.map((service) => (
              <article key={service.href} className="rounded-xl border border-charcoal/10 bg-white p-6">
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal/60">{service.description}</p>
                <Link href={service.href} className="mt-5 inline-block font-bold text-navy underline underline-offset-4">
                  View service details
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="other-services">
          <h2 id="other-services" className="text-2xl font-black">Other cutting tools we assess</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="rounded-lg border border-charcoal/10 bg-white p-4">
                <Link href={`/services/${service.slug}`} className="font-semibold text-navy underline underline-offset-4">
                  {service.name}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{service.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

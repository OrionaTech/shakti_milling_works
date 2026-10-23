import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingGuide from "@/components/PricingGuide";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/content";
import { breadcrumbJsonLd, JsonLd, serviceJsonLd } from "@/lib/jsonld";

type Props = { params: Promise<{ service: string }> };
export function generateStaticParams() { return services.map(({ slug }) => ({ service: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { service: slug } = await params; const service = services.find((item) => item.slug === slug); return service ? pageMetadata({ title: `${service.name} | Shakti Milling Works`, description: service.description, path: `/services/${slug}` }) : {}; }
export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={breadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: service.name, href: `/services/${service.slug}` },
      ])} />
      <Header />
      <main className="mx-auto max-w-5xl px-5 py-16">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.name },
        ]} />
        <div className="mt-8 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
          <div>
            <h1 className="text-4xl font-black md:text-5xl">{service.name}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/70">
              {service.description} We inspect the condition and dimensions before confirming whether a tool is suitable. Final geometry, scope and timing are confirmed after assessment.
            </p>
          </div>
          <div className={`mx-auto grid w-full max-w-sm gap-3 ${service.images.length > 1 ? "grid-cols-2" : ""}`}>
            {service.images.map((image, index) => (
              <div key={image.src} className="relative aspect-square overflow-hidden rounded-xl bg-white p-4 ring-1 ring-charcoal/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 320px, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-black">Process and turnaround</h2>
          <p className="mt-4 text-charcoal/70">Share clear photos, quantity and dimensions. Local orders typically take 24–48 hours; courier orders are typically ready 24 hours after courier acceptance, subject to assessment.</p>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-black">Price guide</h2>
          <PricingGuide />
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-black">FAQ</h2>
          <p className="mt-4 text-charcoal/70">Can this tool be reground? Every tool is assessed individually. Send photos on WhatsApp to discuss its condition and required work.</p>
        </section>
        <div className="mt-12 flex flex-wrap gap-4">
          {services.filter((item) => item.slug !== slug).map((item) => (
            <Link className="underline" key={item.slug} href={`/services/${item.slug}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, JsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

const service = {
  name: "Carbide End Mill Regrinding",
  description: "Assessment and regrinding of suitable 4–20 mm carbide end mills, including 2, 3, 4, 5 and 6 flute, ball nose and side-radius tools.",
  path: "/services/end-mill-regrinding",
};

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "End Mill Regrinding in Yamunanagar | Shakti Milling Works",
    description: "Carbide end mill regrinding for suitable 4–20 mm tools in Yamunanagar, Haryana. Local drop-off and pan-India courier service.",
    path: service.path,
  });
}

export default function EndMillRegrindingPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={breadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "End Mill Regrinding", href: service.path },
      ])} />
      <Header />
      <main className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "End Mill Regrinding" },
        ]} />
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">Carbide tool service</p>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">End Mill Regrinding in Yamunanagar, Haryana</h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Shakti Milling Works regrinds suitable carbide end mills at our workshop in Aurangabad, Yamunanagar. Local customers can drop tools off, and manufacturers across India can send tools by courier. We inspect each tool and confirm suitability, scope and quotation before work.
          </p>
        </header>

        <section className="mt-12" aria-labelledby="end-mill-range">
          <h2 id="end-mill-range" className="text-2xl font-black">End mills we assess for regrinding</h2>
          <p className="mt-4 leading-relaxed text-charcoal/70">
            We work with suitable carbide end mills from 4 mm to 20 mm, with 2, 3, 4, 5 or 6 flutes. Ball nose and side-radius end mills are accepted for assessment. Condition, remaining tool material and required geometry affect whether a tool can be reground.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {["4–20 mm diameters", "2, 3, 4, 5 and 6 flute tools", "Ball nose end mills", "Side-radius end mills"].map((item) => (
              <li key={item} className="rounded-lg border border-charcoal/10 bg-white p-4 font-semibold">{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="other-tools">
          <h2 id="other-tools" className="text-2xl font-black">Other tool regrinding services</h2>
          <p className="mt-4 leading-relaxed text-charcoal/70">
            We also assess drill bits, chamfer tools, center drills, corn mill cutters and custom-made tools. Visit our <Link href="/services" className="font-semibold text-navy underline">services index</Link> for details.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal/70">
            For suitable inserts, see our <Link href="/services/carbide-insert-regrinding" className="font-semibold text-navy underline">carbide insert regrinding service</Link>.
          </p>
        </section>

        <section className="mt-12 rounded-xl bg-steelgray p-6 md:p-8" aria-labelledby="end-mill-location">
          <h2 id="end-mill-location" className="text-2xl font-black">Workshop and courier service</h2>
          <p className="mt-4 leading-relaxed text-charcoal/70">{site.address}</p>
          <p className="mt-3 leading-relaxed text-charcoal/70">
            Send tools from Yamunanagar, Jagadhri, Haryana, Punjab, Mohali or elsewhere in India. Share the tool type, quantity and clear photos first so we can discuss suitability and provide a quote.
          </p>
        </section>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

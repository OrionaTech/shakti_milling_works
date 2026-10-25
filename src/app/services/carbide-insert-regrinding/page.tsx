import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, JsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

const service = {
  name: "Carbide Insert Regrinding",
  description: "Inspection and regrinding for suitable carbide inserts and tools at Shakti Milling Works in Yamunanagar, Haryana, with pan-India courier service.",
  path: "/services/carbide-insert-regrinding",
};

const faqs = [
  {
    question: "Can all carbide inserts be reground?",
    answer: "No. Suitability depends on the insert style, coating, damage and remaining material. Coated inserts lose their coating when reground, and some molded chipbreaker geometries cannot be restored. We inspect inserts before confirming work.",
  },
  {
    question: "How many times can an insert be reground?",
    answer: "There is no fixed number. It depends on the insert geometry, how much material remains and its condition after each use. We assess each insert and do not promise a set number of regrinds.",
  },
  {
    question: "Will a reground insert last as long as a new insert?",
    answer: "Tool life varies with the insert, material being machined, cutting conditions and the remaining geometry. We cannot guarantee that a reground insert will match the life of a new one.",
  },
  {
    question: "How long does insert regrinding take?",
    answer: "Turnaround depends on the insert type, quantity and current workload. We confirm an expected schedule after inspecting the tools and discussing the required work.",
  },
  {
    question: "Is there a minimum quantity?",
    answer: "Share the quantity with us when requesting a quote. We will confirm the minimum, feasibility and pricing for your specific insert type before you send the tools.",
  },
  {
    question: "How do I send inserts by courier?",
    answer: "Contact us first with clear photos, the insert type, grade and quantity. Once we discuss suitability, pack the inserts securely and courier them to the workshop address shown on this page. Include your name, phone number and return address inside the parcel.",
  },
];

export function generateMetadata(): Metadata {
  const metadata = pageMetadata({
    title: "Carbide Insert Regrinding | Shakti Milling Works",
    description: "Carbide insert regrinding and insert resharpening in Yamunanagar, Haryana. Get a quote for suitable P, K and M grade inserts; courier across India.",
    path: service.path,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      videos: [{
        url: `${site.url}/videos/carbide-insert-regrinding-yamunanagar.mp4`,
        secureUrl: `${site.url}/videos/carbide-insert-regrinding-yamunanagar.mp4`,
        type: "video/mp4",
        width: 1280,
        height: 720,
      }],
    },
  };
}

export default function CarbideInsertRegrindingPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Carbide Insert Regrinding at Shakti Milling Works",
        description: "A short demonstration of carbide insert handling and regrinding at Shakti Milling Works in Yamunanagar, Haryana.",
        thumbnailUrl: `${site.url}/videos/carbide-insert-regrinding-yamunanagar-poster.webp`,
        uploadDate: "2026-10-25",
        contentUrl: `${site.url}/videos/carbide-insert-regrinding-yamunanagar.mp4`,
        duration: "PT17.817S",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }} />
      <JsonLd data={breadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Carbide Insert Regrinding", href: service.path },
      ])} />
      <Header />
      <main className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Carbide Insert Regrinding" },
        ]} />
        <header className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">Carbide insert service</p>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Carbide Insert Regrinding in Yamunanagar, Haryana | Pan-India Courier Service</h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Shakti Milling Works provides carbide insert regrinding and insert resharpening for suitable tools. Ask us about P30 carbide inserts, other P, K and M series grades, and CNC insert regrinding. We inspect inserts at our Yamunanagar workshop before confirming suitability, work and price; customers can drop them off locally or send them by courier from anywhere in India.
          </p>
        </header>

        <section className="mt-10" aria-labelledby="insert-video">
          <h2 id="insert-video" className="mb-5 text-2xl font-black">
            See Our Carbide Insert Regrinding Process
          </h2>
          <VideoPlayer />
          <p className="mx-auto mt-3 max-w-4xl text-sm text-charcoal/60">
            Carbide insert regrinding at Shakti Milling Works, Yamunanagar.
          </p>
          <div className="mx-auto mt-4 max-w-4xl rounded-lg bg-steelgray p-5">
            <h3 className="font-black">Video summary</h3>
            <p className="mt-2 leading-relaxed text-charcoal/70">
              The video shows a carbide insert being handled and examined as part of the regrinding process at our Yamunanagar workshop. Each insert is assessed individually; the coating, wear and damage determine whether its cutting edge can be restored.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="insert-types">
          <h2 id="insert-types" className="text-2xl font-black">Insert types we accept for assessment</h2>
          <div className="mt-5 overflow-x-auto rounded-xl border border-charcoal/10 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-steelgray">
                <tr>
                  <th scope="col" className="p-4 font-black">Insert or tool type</th>
                  <th scope="col" className="p-4 font-black">What may be restored</th>
                  <th scope="col" className="p-4 font-black">Grades</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                <tr><th scope="row" className="p-4 font-semibold">Turning inserts</th><td className="p-4 text-charcoal/70">Suitable cutting edge and face geometry</td><td className="p-4 text-charcoal/70">P10, P20, P30, P40, K and M series</td></tr>
                <tr><th scope="row" className="p-4 font-semibold">Milling inserts</th><td className="p-4 text-charcoal/70">Suitable cutting edge and geometry</td><td className="p-4 text-charcoal/70">P10, P20, P30, P40, K and M series</td></tr>
                <tr><th scope="row" className="p-4 font-semibold">Ground inserts</th><td className="p-4 text-charcoal/70">Existing edge and ground profile, subject to condition</td><td className="p-4 text-charcoal/70">P, K and M series; share the grade for assessment</td></tr>
                <tr><th scope="row" className="p-4 font-semibold">Brazed carbide tips</th><td className="p-4 text-charcoal/70">Accessible cutting edge, where enough material remains</td><td className="p-4 text-charcoal/70">Share the material grade if known</td></tr>
                <tr><th scope="row" className="p-4 font-semibold">Solid carbide tools</th><td className="p-4 text-charcoal/70">Suitable cutting edges on assessable tools</td><td className="p-4 text-charcoal/70">Share the grade and tool details for assessment</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
            Acceptance for assessment is not a guarantee of regrinding. The insert style, coating, damage and required geometry determine whether restoration is practical.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-charcoal/10 bg-white p-6 md:p-8" aria-labelledby="cannot-regrind">
          <h2 id="cannot-regrind" className="text-2xl font-black">What we cannot regrind</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-charcoal/70">
            <li>Coated inserts: regrinding removes the coating from the reground area, so the insert will not retain its original coating.</li>
            <li>Heavily chipped or cracked inserts: damage may leave too little sound material for safe, useful restoration.</li>
            <li>Molded chipbreaker inserts whose chipbreaker shape cannot be restored by grinding.</li>
          </ul>
          <p className="mt-4 leading-relaxed text-charcoal/70">If you are unsure, send photos before shipping. We will discuss what can and cannot be done.</p>
        </section>

        <section className="mt-12" aria-labelledby="insert-process">
          <h2 id="insert-process" className="text-2xl font-black">How carbide insert regrinding works</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Send or drop off", "Contact us first, then send the inserts by courier or bring them to our workshop."],
              ["Inspection and quote", "We review the grade, geometry, coating, damage and quantity before quoting."],
              ["Regrinding", "We proceed only after confirming the suitable work with you."],
              ["Return delivery", "Completed inserts are packed for return delivery; courier charges and timing are confirmed with your quote."],
            ].map(([title, detail], index) => (
              <li key={title} className="rounded-xl border border-charcoal/10 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-spark">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-black">{title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal/60">{detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-xl bg-steelgray p-6 md:p-8" aria-labelledby="insert-cost">
          <h2 id="insert-cost" className="text-2xl font-black">Regrinding cost compared with new inserts</h2>
          <p className="mt-4 leading-relaxed text-charcoal/70">
            Regrinding may be worth comparing with the cost of replacement, but savings depend on insert type, condition and the work required. We do not publish a fixed saving or promise a set tool life. Share photos and quantity to get a quote before deciding.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="insert-faq">
          <h2 id="insert-faq" className="text-2xl font-black">Carbide insert regrinding FAQs</h2>
          <div className="mt-5 space-y-5">
            {faqs.map(({ question, answer }) => (
              <article key={question} className="rounded-xl border border-charcoal/10 bg-white p-5">
                <h3 className="font-black text-lg">{question}</h3>
                <p className="mt-2 leading-relaxed text-charcoal/70">{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-xl bg-navy p-6 text-white md:p-8" aria-labelledby="insert-contact">
          <h2 id="insert-contact" className="text-2xl font-black">Ask about your carbide inserts</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
            Send the insert grade, quantity and clear photos. We will discuss whether assessment or regrinding is suitable and provide a quote.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/918572068977?text=${encodeURIComponent("Hello Shakti Milling Works, I would like a quote for carbide insert regrinding. Grade: Quantity: I can share photos for assessment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-trust px-5 py-3 font-bold text-white transition-colors hover:bg-charcoal"
            >
              WhatsApp 85720 68977
            </a>
            <a href="tel:+918572068977" className="inline-flex rounded-md border border-white/40 px-5 py-3 font-bold text-white transition-colors hover:bg-white hover:text-navy">
              Call 85720 68977
            </a>
            <Link href="#contact" className="inline-flex rounded-md bg-spark px-5 py-3 font-bold text-charcoal transition-colors hover:bg-white">
              Contact and quote details
            </Link>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Workshop: Opposite PNB Bank, Aurangabad, Distt. Yamunanagar, Haryana 135001.
          </p>
        </section>

        <nav aria-label="Related services" className="mt-10 flex flex-wrap gap-5 text-sm font-semibold">
          <Link href="/services/end-mill-regrinding" className="text-navy underline underline-offset-4">End mill regrinding</Link>
          <Link href="/services" className="text-navy underline underline-offset-4">All services</Link>
        </nav>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

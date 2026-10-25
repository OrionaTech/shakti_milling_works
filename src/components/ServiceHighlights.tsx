import Link from "next/link";

const insertFeatures = [
  {
    title: "Turning and milling inserts",
    description: "Assessment of suitable carbide inserts for turning and milling operations.",
  },
  {
    title: "P, K and M grades",
    description: "We accept enquiries for P10, P20, P30, P40, K and M series grades.",
  },
  {
    title: "Workshop inspection",
    description: "Each insert is checked before we confirm whether its edge can be reground.",
  },
  {
    title: "Courier from across India",
    description: "Send inserts to our Yamunanagar workshop or drop them off locally.",
  },
];

export default function ServiceHighlights() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16" aria-labelledby="end-mill-summary">
        <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
          Our core service
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 id="end-mill-summary" className="text-3xl font-black tracking-tight md:text-4xl">
              End Mill Regrinding in Yamunanagar
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/70">
              We regrind suitable 4–20 mm carbide end mills in 2, 3, 4, 5 and 6 flute configurations.
              Ball nose and side-radius tools are assessed for their condition and geometry.
              Customers can visit our workshop or send tools by courier from anywhere in India.
            </p>
          </div>
          <Link
            href="/services/end-mill-regrinding"
            className="inline-flex w-fit rounded-md bg-navy px-5 py-3 font-bold text-white transition-colors hover:bg-charcoal"
          >
            End mill service details
          </Link>
        </div>
      </section>

      <section className="bg-steelgray py-14 md:py-16" aria-labelledby="carbide-insert-summary">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
            Additional service
          </p>
          <h2 id="carbide-insert-summary" className="max-w-3xl text-3xl font-black tracking-tight md:text-4xl">
            Carbide Insert Regrinding
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-charcoal/70">
            We assess suitable carbide inserts for insert resharpening at our Yamunanagar workshop.
            Enquiries include P30 carbide inserts and other P, K and M series grades.
            Send your inserts by courier from across India or drop them off locally for inspection and a quote.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {insertFeatures.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-charcoal/10 bg-white p-5">
                <h3 className="font-black text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/services/carbide-insert-regrinding"
              className="inline-flex rounded-md bg-navy px-5 py-3 font-bold text-white transition-colors hover:bg-charcoal"
            >
              Learn more
            </Link>
            <Link href="/services" className="font-semibold text-navy underline underline-offset-4">
              View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

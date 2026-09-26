import Link from "next/link";
import { tierOneLocations } from "@/lib/locations";

export default function ServiceCoverage() {
  return (
    <section className="max-w-6xl mx-auto px-5 pb-16 md:pb-20" aria-labelledby="who-we-serve">
      <div className="border border-steelgray rounded-xl p-7 md:p-10 bg-white">
        <p className="text-xs font-bold uppercase tracking-widest text-spark mb-3">Who We Serve</p>
        <h2 id="who-we-serve" className="font-black text-3xl tracking-tight">Local tool regrinding, plus pan-India courier service.</h2>
        <p className="mt-4 max-w-3xl text-charcoal/65 leading-relaxed">
          We provide faster local pickup coordination for Yamunanagar, Ambala, Jagadhri and Karnal. Elsewhere in India, send tool photos on WhatsApp and we can arrange a courier-based quote.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {tierOneLocations.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}`} className="rounded-md bg-navy px-4 py-2 text-sm font-bold text-white hover:bg-charcoal">
              {location.city}
            </Link>
          ))}
          <Link href="/pan-india" className="rounded-md border border-navy px-4 py-2 text-sm font-bold text-navy hover:bg-navy hover:text-white">Across India</Link>
        </div>
      </div>
    </section>
  );
}

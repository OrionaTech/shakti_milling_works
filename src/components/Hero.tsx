import Link from "next/link";
import GeoServiceBanner from "@/components/GeoServiceBanner";
import HeroVideo from "@/components/HeroVideo";
import PricingGuide from "@/components/PricingGuide";
import TrackedLink from "@/components/TrackedLink";
import { pricing } from "@/lib/site";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-14 pb-16 md:pt-20 md:pb-20">
      <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-spark mb-5">
            Carbide End Mill Regrinding
          </p>

          <h1 className="font-black leading-[1.03] tracking-tight text-4xl sm:text-5xl md:text-6xl max-w-4xl">
            End Mill Regrinding in Yamunanagar.
            <br />
            <span className="hero-fade text-spark">
              Regrind &amp; Resharpen.
            </span>
          </h1>

          <div className="mt-8">
          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
            Suitable {pricing.ranges[0].minDiameterMm}mm–{pricing.ranges[pricing.ranges.length - 1].maxDiameterMm}mm carbide end mills can often be reground instead of replaced.
          </p>

          <p className="mt-5 text-charcoal/60 max-w-lg leading-relaxed">
            Yamunanagar is also commonly written as Yamuna Nagar. Final pricing depends on tool size, condition and required work.
          </p>

          <p className="mt-4 text-charcoal/60 max-w-lg leading-relaxed">
            Faster local coordination is available for <Link href="/locations/yamunanagar" className="underline">Yamunanagar</Link>, <Link href="/locations/ambala" className="underline">Ambala</Link>, <Link href="/locations/jagadhri" className="underline">Jagadhri</Link> and <Link href="/locations/karnal" className="underline">Karnal</Link>.
          </p>
          <div className="mt-4"><GeoServiceBanner /></div>
            <div className="mt-8">
              <TrackedLink
                href="#contact"
                eventName="courier_cta_click"
                eventParameters={{ placement: "hero" }}
                className="inline-flex bg-navy text-white font-bold px-7 py-4 rounded-md hover:bg-charcoal transition-colors"
              >
                Get A Regrinding Quote →
              </TrackedLink>

              <p className="text-xs text-charcoal/40 mt-3">
                Send us photos of your tools on WhatsApp for assessment and a quote.
              </p>

              <p className="mt-3 text-sm font-semibold text-charcoal/70">
                Public pricing: <span className="text-spark">{pricing.startingAt}</span>
              </p>
              <PricingGuide />
            </div>
          </div>
        </div>

        <HeroVideo />
      </div>
    </section>
  );
}

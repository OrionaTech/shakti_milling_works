import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { tierOneLocations } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <Link
              href="/"
              aria-label="Shakti Milling Works"
              className="relative block w-[190px] h-[90px] overflow-hidden"
            >
              <Image
                src="/images/logo.png"
                alt="Shakti Milling Works"
                width={2000}
                height={2000}
                className="absolute w-[230px] h-[230px] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </Link>

          <p className="text-white/40 text-sm mt-5 max-w-sm leading-relaxed">
            Shakti Milling Works specializes in tungsten carbide end mill
            regrinding and resharpening for CNC machining and manufacturing
            applications.
          </p>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Services
            </p>

            <div className="space-y-3 text-sm text-white/60">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="block hover:text-spark transition-colors">{service.name}</Link>)}</div>
          </div>

          {/* LOCATION */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Location
            </p>

            <div className="space-y-3 text-sm text-white/60">
              <p>{site.address}</p>
              <p>GSTIN: {site.gstin}</p>
              <a href={`tel:${site.contact.primaryPhoneE164}`} className="block hover:text-spark">{site.contact.primaryPhoneDisplay}</a>
              <a href={`tel:${site.contact.secondaryPhoneE164}`} className="block hover:text-spark">{site.contact.secondaryPhoneDisplay}</a>
              <p>{site.contact.hours}</p>
              <a href="/contact.vcf" download className="block hover:text-spark">Save contact card</a>
              {tierOneLocations.map((location) => <Link key={location.slug} href={`/locations/${location.slug}`} className="block hover:text-spark">{location.city}</Link>)}

              <a
                href="#contact"
                className="block text-spark font-semibold hover:text-white transition-colors"
              >
                Request A Quote →
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} Shakti Milling Works. All rights
            reserved.
          </p>

          <p>
            End Mill Regrinding · Tool Sharpening · Custom Cutting Tools
          </p>
        </div>
      </div>
    </footer>
  );
}

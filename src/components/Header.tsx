import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Download } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import MobileNav from "@/components/MobileNav";
import { site } from "@/lib/site";
import { services, guides, locations, directLinks, type NavLink } from "@/lib/nav";

const FLYER_URL = "/downloads/shakti-milling-works.pdf";

const navLabel =
  "flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-charcoal/70 hover:text-navy transition-colors";

function Dropdown({ label, items }: { label: string; items: NavLink[] }) {
  return (
    <div className="relative group">
      <button type="button" aria-haspopup="true" className={navLabel}>
        {label}
        <ChevronDown
          size={12}
          className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute left-0 top-full pt-3 z-50">
        <ul className="min-w-[260px] bg-offwhite border border-steelgray rounded-md shadow-lg py-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-charcoal hover:bg-navy hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-offwhite/95 backdrop-blur border-b border-steelgray">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Shakti Milling Works"
            className="relative w-[170px] h-[62px] flex items-center overflow-hidden shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Shakti Milling Works"
              width={190}
              height={75}
              priority
              className="w-[170px] h-auto"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav aria-label="Main" className="hidden xl:flex items-center gap-6">
            <Dropdown label="Services" items={services} />
            <Dropdown label="Guides" items={guides} />
            <Dropdown label="Areas" items={locations} />
            {directLinks
              .filter((l) => l.href !== "/contact") // Contact is covered by the CTA
              .map((item) => (
                <Link key={item.href} href={item.href} className={navLabel}>
                  {item.label}
                </Link>
              ))}
            <a
              href={FLYER_URL}
              download
              className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-navy hover:text-charcoal transition-colors"
            >
              Flyer
              <Download size={12} />
            </a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.contact.primaryPhoneE164}`}
              className="hidden 2xl:block text-xs font-bold text-navy"
            >
              {site.contact.primaryPhoneDisplay}
            </a>

            <TrackedLink
              href="/contact"
              eventName="courier_cta_click"
              eventParameters={{ placement: "header" }}
              className="hidden sm:block bg-spark text-charcoal font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-md hover:bg-navy hover:text-white transition-colors"
            >
              Get A Quote
            </TrackedLink>

            <MobileNav
              flyerUrl={FLYER_URL}
              services={services}
              guides={guides}
              locations={locations}
              directLinks={directLinks}
            />
          </div>
        </div>
      </header>

      {/* DESKTOP SIDE CTA */}
      <TrackedLink
        href="/contact"
        eventName="courier_cta_click"
        eventParameters={{ placement: "side_cta" }}
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-spark text-charcoal font-bold uppercase tracking-widest text-xs px-3 py-6 [writing-mode:vertical-rl] hover:bg-navy hover:text-white transition-colors"
      >
        Get A Quote
      </TrackedLink>
    </>
  );
}
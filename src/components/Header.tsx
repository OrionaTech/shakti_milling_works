import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

const FLYER_URL = "/downloads/shakti-milling-works.pdf";

const navItems = [
  { label: "Why Regrind", href: "/#why-regrind" },
  { label: "Service", href: "/#services" },
  { label: "Before / After", href: "/#gallery" },
  { label: "Process", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-offwhite/95 backdrop-blur border-b border-steelgray">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            aria-label="Shakti Milling Works"
            className="relative w-[170px] h-[62px] flex items-center overflow-hidden"
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

          {/* NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest text-charcoal/70">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 hover:text-navy transition-colors"
              >
                {item.label}
                <ArrowUpRight size={12} />
              </a>
            ))}

            {/* FLYER DOWNLOAD */}
            <a
              href={FLYER_URL}
              download
              className="flex items-center gap-1 text-navy hover:text-charcoal transition-colors"
            >
              Flyer
              <Download size={12} />
            </a>
          </nav>

          {/* RIGHT SIDE: mobile flyer icon + CTA */}
          <div className="flex items-center gap-2">
            <a
              href={FLYER_URL}
              download
              aria-label="Download flyer (PDF)"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-steelgray text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <Download size={16} />
            </a>

            <TrackedLink
              href="#contact"
              eventName="courier_cta_click"
              eventParameters={{ placement: "header" }}
              className="bg-spark text-charcoal font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-md hover:bg-navy hover:text-white transition-colors"
            >
              Get A Quote
            </TrackedLink>
          </div>
        </div>
      </header>

      {/* DESKTOP SIDE CTA */}
      <TrackedLink
        href="#contact"
        eventName="courier_cta_click"
        eventParameters={{ placement: "side_cta" }}
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-spark text-charcoal font-bold uppercase tracking-widest text-xs px-3 py-6 [writing-mode:vertical-rl] hover:bg-navy hover:text-white transition-colors"
      >
        Get A Quote
      </TrackedLink>
    </>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Why Regrind", href: "#why-regrind" },
  { label: "Service", href: "#services" },
  { label: "Before / After", href: "#gallery" },
  { label: "Process", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-offwhite/95 backdrop-blur border-b border-steelgray">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#"
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
          </a>

          {/* NAVIGATION */}
          <nav className="hidden lg:flex gap-7 text-xs font-semibold uppercase tracking-widest text-charcoal/70">
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
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="bg-spark text-charcoal font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-md hover:bg-navy hover:text-white transition-colors"
          >
            Get A Quote
          </a>
        </div>
      </header>

      {/* DESKTOP SIDE CTA */}
      <a
        href="#contact"
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-spark text-charcoal font-bold uppercase tracking-widest text-xs px-3 py-6 [writing-mode:vertical-rl] hover:bg-navy hover:text-white transition-colors"
      >
        Get A Quote
      </a>
    </>
  );
}
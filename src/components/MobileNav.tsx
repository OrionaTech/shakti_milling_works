"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import type { NavLink } from "@/lib/nav";

type Props = {
  flyerUrl: string;
  services: NavLink[];
  guides: NavLink[];
  locations: NavLink[];
  directLinks: NavLink[];
};

function Section({ title, items }: { title: string; items: NavLink[] }) {
  return (
    <details className="group border-b border-steelgray">
      <summary className="flex items-center justify-between py-3 text-xs font-bold uppercase tracking-widest text-charcoal cursor-pointer list-none">
        {title}
        <span className="text-navy transition-transform group-open:rotate-45 text-lg leading-none">+</span>
      </summary>
      <ul className="pb-3 pl-3 space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block py-2 text-sm text-charcoal/80 hover:text-navy">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default function MobileNav({ flyerUrl, services, guides, locations, directLinks }: Props) {
  const [menuState, setMenuState] = useState({ pathname: "", open: false });
  const pathname = usePathname();
  const open = menuState.pathname === pathname && menuState.open;

  // Lock scroll while open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuState({ pathname, open: false });
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, pathname]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setMenuState({ pathname, open: !open })}
        className="flex items-center justify-center w-10 h-10 rounded-md border border-steelgray text-navy hover:bg-navy hover:text-white transition-colors"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Mobile"
        hidden={!open}
        className="fixed inset-x-0 top-[86px] bottom-0 z-50 overflow-y-auto overscroll-contain bg-offwhite px-5 pb-10"
      >
          <Section title="Services" items={services} />
          <Section title="Guides" items={guides} />
          <Section title="Areas We Serve" items={locations} />

          {directLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 border-b border-steelgray text-xs font-bold uppercase tracking-widest text-charcoal"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={flyerUrl}
            download
            className="flex items-center gap-2 py-3 text-xs font-bold uppercase tracking-widest text-navy"
          >
            <Download size={14} /> Download Flyer (PDF)
          </a>
      </nav>
    </div>
  );
}
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <a
              href="#"
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
            </a>

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

            <div className="space-y-3 text-sm text-white/60">
              <a
                href="#services"
                className="block hover:text-spark transition-colors"
              >
                End Mill Regrinding
              </a>

              <a
                href="#services"
                className="block hover:text-spark transition-colors"
              >
                Ball Nose Regrinding
              </a>

              <a
                href="#services"
                className="block hover:text-spark transition-colors"
              >
                Drill Bit Regrinding
              </a>

              <a
                href="#services"
                className="block hover:text-spark transition-colors"
              >
                Carbide Tool Sharpening
              </a>

              <a
                href="#services"
                className="block hover:text-spark transition-colors"
              >
                Custom Cutting Tools
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Location
            </p>

            <div className="space-y-3 text-sm text-white/60">
              <p>Near PNB Bank, Aurangabad, Yamuna Nagar, Haryana 135001, India</p>

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

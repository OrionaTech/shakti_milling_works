export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-14 pb-16 md:pt-20 md:pb-20">
      <p className="text-xs font-bold uppercase tracking-widest text-spark mb-5">
        Carbide End Mill Regrinding
      </p>

      <h1 className="font-black leading-[1.03] tracking-tight text-4xl sm:text-5xl md:text-6xl max-w-4xl">
        Don&apos;t replace an expensive
        <br />
        carbide end mill.
        <br />
        <span className="hero-fade text-spark">
          Regrind &amp; Resharpen from ₹70.
        </span>
      </h1>

      <div className="mt-10 grid md:grid-cols-2 gap-10 items-end">
        <div>
          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
            Suitable 4mm–20mm carbide end mills can often be reground instead of replaced.
          </p>

          <p className="mt-5 text-charcoal/60 max-w-lg leading-relaxed">
            Most orders are ready within 24 hours of tool receipt. Final pricing depends on size, geometry and condition.
          </p>
        </div>

        <div className="md:flex md:flex-col md:items-end">
          <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-4">
            Have worn carbide end mills?
          </p>

          <a
            href="#contact"
            className="bg-navy text-white font-bold px-7 py-4 rounded-md hover:bg-charcoal transition-colors"
          >
            Get A Regrinding Quote →
          </a>

          <p className="text-xs text-charcoal/40 mt-3">
            Send us photos of your tools on WhatsApp.
          </p>

          <p className="mt-3 text-sm font-semibold text-charcoal/70">
            Starting at <span className="text-spark">₹70 per piece</span>
          </p>
        </div>
      </div>
    </section>
  );
}

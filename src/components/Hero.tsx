export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-16 pb-24 md:pt-24 md:pb-28">
      <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-spark mb-6">
        Tungsten Carbide End Mill Regrinding · Yamunanagar · Pan India
      </p>

      <h1 className="font-black leading-[0.92] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-6xl">
        Don&apos;t replace
        <br />
        an expensive
        <br />
        <span className="text-spark">
          carbide end mill.
        </span>
      </h1>

      <div className="mt-14 grid md:grid-cols-2 gap-10 items-end">
        <div>
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-xl">
            If your tungsten carbide end mill has become dull or worn,
            it may not need to go straight into the scrap box.
          </p>

          <p className="mt-5 text-charcoal/60 max-w-lg leading-relaxed">
            We specialize in tungsten carbide end mill regrinding and
            resharpening, helping machining businesses get more value
            from suitable worn cutting tools.
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
        </div>
      </div>
    </section>
  );
}
export default function Problem() {
  return (
    <section className="bg-charcoal text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-spark mb-5">
              The Problem
            </p>

            <h2 className="font-black text-3xl md:text-4xl leading-tight tracking-tight">
              Carbide tools
              <br />
              are an investment.
            </h2>
          </div>

          <div className="space-y-9">
            <div>
              <h3 className="font-bold text-xl mb-3">
                Every cutting edge wears
              </h3>

              <p className="text-white/60 leading-relaxed">
                End mills gradually lose their cutting performance through
                repeated machining. Once the edges become worn, replacing
                the tool can quickly add to your tooling costs.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">
                Tungsten carbide end mills aren&apos;t cheap
              </h3>

              <p className="text-white/60 leading-relaxed">
                High-performance carbide end mills are precision-made
                cutting tools. Throwing away every worn cutter means
                repeatedly paying for a completely new tool.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3 text-spark">
                Check before you replace
              </h3>

              <p className="text-white/60 leading-relaxed">
                A suitable worn end mill can sometimes be reground.
                Assessment comes first, so you can decide whether
                regrinding or replacement makes more sense.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

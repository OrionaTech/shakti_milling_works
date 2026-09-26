const benefits = [
  {
    number: "01",
    title: "Reduce unnecessary replacement",
    description:
      "A suitable worn carbide end mill may be restored instead of immediately replaced with a new tool.",
  },
  {
    number: "02",
    title: "Get more from expensive carbide tools",
    description:
      "Tungsten carbide end mills represent a tooling investment. Regrinding can help you get additional usable life from suitable cutters.",
  },
  {
    number: "03",
    title: "Keep your regular tooling in circulation",
    description:
      "Restore commonly used end mill sizes instead of repeatedly purchasing the same tools.",
  },
  {
    number: "04",
    title: "Priced to make sense",
    description:
      "Regrinding starts at just ₹70 per piece — a fraction of the cost of a new carbide end mill. We don't promise that every worn tool can be restored; we assess the condition and discuss whether regrinding is practical.",
  },
];

export default function WhyRegrind() {
  return (
    <section className="py-16 md:py-20 bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-spark mb-5">
              Why Regrind?
            </p>

            <h2 className="font-black text-3xl md:text-4xl tracking-tight leading-tight">
              Your carbide
              <br />
              tooling is valuable.
            </h2>

            <p className="mt-7 text-white/50 text-lg leading-relaxed max-w-lg">
              Don&apos;t automatically treat a worn end mill as a disposable
              tool. Find out whether it can be professionally reground.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            {benefits.map((benefit) => (
              <div key={benefit.number}>
                <span className="text-spark font-black text-sm">
                  {benefit.number}
                </span>

                <h3 className="font-bold text-xl mt-3 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white/50 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

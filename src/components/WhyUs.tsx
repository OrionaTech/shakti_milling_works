const reasons = [
  {
    number: "01",
    title: "Precision Focused",
    description:
      "We focus on restoring cutting geometry rather than simply sharpening the edge.",
  },
  {
    number: "02",
    title: "Cost Effective",
    description:
      "Regrinding usable tools can significantly reduce the cost of repeatedly purchasing new cutters.",
  },
  {
    number: "03",
    title: "Multiple Tool Types",
    description:
      "From end mills and ball nose cutters to drills, chamfer tools and special cutters.",
  },
  {
    number: "04",
    title: "Industrial Experience",
    description:
      "Our work is built around the requirements of machining and production environments.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-steelgray py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
              Why Shakti Milling Works
            </p>

            <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-[1]">
              Better tools.
              <br />
              Better value.
            </h2>

            <p className="mt-8 text-charcoal/60 text-lg max-w-lg leading-relaxed">
              We help machining businesses get more life from their cutting
              tools through reliable regrinding and custom tooling solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div key={reason.number}>
                <span className="text-spark font-black text-sm">
                  {reason.number}
                </span>

                <h3 className="font-bold text-xl mt-3 mb-2">
                  {reason.title}
                </h3>

                <p className="text-charcoal/60 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
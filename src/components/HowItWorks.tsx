const steps = [
  {
    number: "01",
    title: "Send Photos",
    description:
      "Send clear photos of your worn tungsten carbide end mills on WhatsApp.",
  },
  {
    number: "02",
    title: "Share Tool Details",
    description:
      "Tell us the approximate diameter, quantity and any requirements you have.",
  },
  {
    number: "03",
    title: "Assessment",
    description:
      "We assess the tool condition and determine whether regrinding is suitable.",
  },
  {
    number: "04",
    title: "Regrinding",
    description:
      "Suitable tools are precision reground according to their required cutting geometry.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="max-w-6xl mx-auto px-5 py-20 md:py-28"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
        How It Works
      </p>

      <h2 className="font-black text-4xl md:text-6xl tracking-tight">
        Simple process.
        <br />
        <span className="text-charcoal/40">
          Better tooling decisions.
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mt-16">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border-t border-steelgray pt-6"
          >
            <div className="flex gap-6">
              <span className="text-spark font-black">
                {step.number}
              </span>

              <div>
                <h3 className="font-black text-xl mb-3">
                  {step.title}
                </h3>

                <p className="text-charcoal/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
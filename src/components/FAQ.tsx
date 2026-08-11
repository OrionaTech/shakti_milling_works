const faqs = [
  {
    question: "Can tungsten carbide end mills be reground?",
    answer:
      "Suitable tungsten carbide end mills can often be reground when their condition, remaining geometry and dimensions allow it. Every tool should be assessed individually before regrinding.",
  },
  {
    question: "What is carbide end mill regrinding?",
    answer:
      "Carbide end mill regrinding is the process of restoring the cutting geometry and edges of a suitable worn carbide end mill so that it can potentially be used again.",
  },
  {
    question: "Is end mill regrinding cheaper than buying a new end mill?",
    answer:
      "For suitable worn tools, regrinding can be an economical alternative to repeated replacement. The actual cost depends on the tool size, condition, geometry and required work.",
  },
  {
    question: "Do you regrind tungsten carbide end mills?",
    answer:
      "Yes. Shakti Milling Works specializes in tungsten carbide end mill regrinding and resharpening.",
  },
  {
    question: "Do you regrind CNC end mills?",
    answer:
      "Yes. We provide regrinding for suitable tungsten carbide end mills used in CNC machining applications.",
  },
  {
    question: "Do you regrind ball nose end mills?",
    answer:
      "We can assess suitable tungsten carbide ball nose end mills for regrinding. Send clear photos and tool details on WhatsApp for assessment.",
  },
  {
    question: "How do I get an end mill regrinding quote?",
    answer:
      "Send photos of your worn end mills through WhatsApp along with the approximate size, quantity and any requirements you have. We can then discuss the regrinding requirement with you.",
  },
  {
    question: "Where are you located?",
    answer:
      "Shakti Milling Works is located near PNB Bank in Aurangabad, Yamunanagar, Haryana, and serves customers across India.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="max-w-4xl mx-auto px-5 py-20 md:py-28"
    >
      <div className="text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
          Frequently Asked Questions
        </p>

        <h2 className="font-black text-4xl md:text-5xl tracking-tight">
          End Mill Regrinding Questions
        </h2>
      </div>

      <div className="divide-y divide-steelgray border-y border-steelgray">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group py-6"
          >
            <summary className="cursor-pointer list-none font-bold text-lg flex items-center justify-between gap-5">
              {faq.question}

              <span className="text-spark text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <p className="text-charcoal/60 leading-relaxed mt-4">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
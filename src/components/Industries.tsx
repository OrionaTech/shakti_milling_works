export default function Industries() {
  const industries = [
    "CNC Machining",
    "Tool Rooms",
    "Mould & Die",
    "Automotive Components",
    "Engineering Workshops",
    "General Manufacturing",
  ];

  return (
    <section className="bg-steelgray py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-widest text-spark mb-8">
          Who We Serve
        </p>

        <h2 className="font-black text-3xl md:text-4xl max-w-2xl mb-10">
          For businesses that rely on carbide end mills for precision
          machining.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8">
          {industries.map((industry) => (
            <div
              key={industry}
              className="font-black text-lg md:text-2xl"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
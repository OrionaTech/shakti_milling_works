import { about } from "@/lib/about";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
          About Shakti Milling Works
        </p>

        <h2 className="font-black text-3xl md:text-4xl tracking-tight max-w-3xl">
          About the workshop
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <p className="rounded-xl border border-charcoal/10 bg-white p-5 text-charcoal/70">
            <strong>Who runs the workshop:</strong>{" "}
            {about.ownerName
              ? `${about.ownerName}${about.ownerRole ? `, ${about.ownerRole}` : ""}`
              : "TODO: Add the name and role of the person who runs the workshop."}
          </p>
          <p className="rounded-xl border border-charcoal/10 bg-white p-5 text-charcoal/70">
            <strong>Years in business:</strong>{" "}
            {about.yearsInBusiness
              ? `${about.yearsInBusiness} years`
              : "TODO: Add the confirmed number of years in business."}
          </p>
          <div className="rounded-xl border border-charcoal/10 bg-white p-5 text-charcoal/70">
            <h3 className="font-bold text-charcoal">Grinding equipment used</h3>
            {about.equipment.length > 0 ? (
              <ul className="mt-2 list-disc pl-5">
                {about.equipment.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : (
              <p className="mt-2">TODO: List the grinding equipment used.</p>
            )}
          </div>
          <div className="rounded-xl border border-charcoal/10 bg-white p-5 text-charcoal/70">
            <h3 className="font-bold text-charcoal">How each tool is inspected</h3>
            {about.inspection.length > 0 ? (
              <ul className="mt-2 list-disc pl-5">
                {about.inspection.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : (
              <p className="mt-2">TODO: Describe how each tool is inspected.</p>
            )}
          </div>
        </div>

        {about.mapsUrl && (
          <a
            href={about.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 font-bold text-navy underline underline-offset-4"
          >
            Read our Google reviews →
          </a>
        )}
      </div>
    </section>
  );
}
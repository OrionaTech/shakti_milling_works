import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Gallery from "@/components/Gallery";
import WhyRegrind from "@/components/WhyRegrind";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JsonLd, homeGraph } from "@/lib/jsonld";
import TrustStrip from "@/components/TrustStrip";
import ServiceCoverage from "@/components/ServiceCoverage";
import FlyerDownload from "@/components/FlyerDownload";
import About from "@/components/About";
import ServiceHighlights from "@/components/ServiceHighlights";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const HOME_TITLE = "End Mill Regrinding in Yamunanagar | Shakti Milling Works";

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: HOME_TITLE,
    description: site.homeDescription,
    path: "/",
  });
}

export default function Home() {
  return (
    <>
      <JsonLd data={homeGraph()} />

      <Header />

      <main>
        <Hero />
         <Solution />
        <ServiceHighlights />
        <Gallery />

        <TrustStrip />

        <Problem />


        <WhyRegrind />

        <HowItWorks />

        <Industries />

        <ServiceCoverage />
        <FlyerDownload />

        <About />

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

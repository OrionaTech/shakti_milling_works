import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Gallery from "@/components/Gallery";
import WhyRegrind from "@/components/WhyRegrind";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import TrustStrip from "@/components/TrustStrip";
import ServiceCoverage from "@/components/ServiceCoverage";
import FlyerDownload from "@/components/FlyerDownload";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "End Mill Regrinding in Yamunanagar | Shakti",
    description: "End mill regrinding in Yamunanagar, Haryana, from Shakti Milling Works. Courier orders are accepted from across India.",
    path: "/",
  });
}

export default function Home() {
  return (
    <>
      <StructuredData />

      <Header />

      <main>
        <Hero />
        <Gallery />

        <TrustStrip />

        <Problem />

        <Solution />

        <WhyRegrind />

        <HowItWorks />

        <Industries />

        <ServiceCoverage />
        <FlyerDownload />

        <FAQ />

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

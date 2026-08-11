import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyRegrind from "@/components/WhyRegrind";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />

      <Header />

      <main>
        <Hero />

        <Problem />

        <Solution />

        <Services />

        <Gallery />

        <WhyRegrind />

        <HowItWorks />

        <Industries />

        <FAQ />

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
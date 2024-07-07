import Comparison from "@/components/landingpage/comparison";
import Demo from "@/components/landingpage/demo";
import FAQ from "@/components/landingpage/faq";
import Footer from "@/components/landingpage/footer";
import Header from "@/components/landingpage/header";
import Hero from "@/components/landingpage/hero";
import LastCTA from "@/components/landingpage/last-cta";
import Pricing from "@/components/landingpage/pricing";
import ThreeSteps from "@/components/landingpage/three-steps";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Comparison />
      <ThreeSteps />
      <Demo />
      <Pricing />
      <FAQ />
      <LastCTA />
      <Footer />
    </>
  );
}

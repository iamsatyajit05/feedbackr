import Comparison from "@/components/landingpage/comparison";
import Demo from "@/components/landingpage/demo";
import FAQ from "@/components/landingpage/faq";
import Hero from "@/components/landingpage/hero";
import LastCTA from "@/components/landingpage/last-cta";
import Pricing from "@/components/landingpage/pricing";
import ThreeSteps from "@/components/landingpage/three-steps";

export default async function Home() {
  return (
    <>
      <Hero />
      <Demo />
      <Comparison />
      <ThreeSteps />
      <Pricing />
      <FAQ />
      <LastCTA />
    </>
  );
}

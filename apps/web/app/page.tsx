import {
  Navbar,
  HeroSection,
  WorkflowSection,
  PricingSection,
  CtaSection,
  Footer,
} from "~/components/pages/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <WorkflowSection />
      {/* <PricingSection /> */}
      <CtaSection />
      <Footer />
    </main>
  );
}

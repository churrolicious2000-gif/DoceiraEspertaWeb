import { TrackingScripts } from "@/components/TrackingScripts";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { ProofSection } from "@/components/ProofSection";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { AlertBox, FinalCTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TrackingScripts />
      
      <Hero />
      
      <FeatureCards />
      
      <ProofSection />
      
      <HowItWorks />
      
      <AlertBox />
      
      <FAQ />
      
      <FinalCTA />
      
      <Footer />
      
      {/* Floating Button for Mobile */}
      <WhatsAppButton variant="fixed" />
    </main>
  );
}

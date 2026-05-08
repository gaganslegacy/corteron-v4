import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { DomainsSection } from "@/components/landing/domains-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { WhoItIsForSection } from "@/components/landing/who-for-section";
import { IntelligenceSection } from "@/components/landing/intelligence-section";
import { ResultsSection } from "@/components/landing/results-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ContactSection } from "@/components/landing/contact-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <DomainsSection />
      <ComparisonSection />
      <WhoItIsForSection />
      <IntelligenceSection />
      <ResultsSection />
      <PricingSection />
      <ContactSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}

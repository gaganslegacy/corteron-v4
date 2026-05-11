import { CalButton } from "@/components/ui/cal-button";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { PricingFAQ } from "@/components/landing/pricing-faq";
import { Metadata } from "next";
import { Check, X, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Corteron",
  description: "Simple, transparent pricing for Corteron. No setup fees. No lock-ins. Just results.",
};

const features = [
  { category: "Lead Capture", starter: true, growth: true, professional: true },
  { category: "AI Qualification", starter: true, growth: true, professional: true },
  { category: "Nurture Sequences", starter: true, growth: true, professional: true },
  { category: "AI Voice Agent", starter: false, growth: true, professional: true },
  { category: "Content Creation", starter: false, growth: true, professional: true },
  { category: "Social Media Posting", starter: false, growth: true, professional: true },
  { category: "Paid Ad Management", starter: false, growth: false, professional: true },
  { category: "UGC Production", starter: false, growth: false, professional: true },
  { category: "Influencer Campaigns", starter: false, growth: false, professional: true },
  { category: "Weekly Strategy Calls", starter: false, growth: true, professional: true },
  { category: "Priority Support", starter: false, growth: false, professional: true },
  { category: "Custom Integration", starter: false, growth: false, professional: true },
];


export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      
      {/* Hero */}
      <section className="relative py-32 lg:py-40">
        {/* Radial brand glow behind headline */}
        <div className="absolute inset-0 top-1/4 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span 
              className="inline-flex items-center gap-3 text-xs font-mono text-primary mb-8 uppercase"
              style={{ letterSpacing: "0.25em" }}
            >
              <span className="w-8 h-px bg-primary" />
              Pricing
            </span>
            <h1 className="text-[clamp(48px,7vw,88px)] font-display tracking-tight text-white mb-6 leading-[0.95]">
              Simple Pricing.{" "}
              <span className="relative inline-block">
                Serious Results.
                <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-[#9CA3AF] leading-relaxed mb-6 max-w-2xl">
              No setup fees buried in the contract. No lock-ins on day one. Just a system that runs your business and pays for itself.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#9CA3AF]">
              <span>No setup fees</span>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <span>Cancel anytime</span>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <span>15 domains on every plan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingSection />

      {/* Domains Callout */}
      <section className="relative py-20 lg:py-24 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Glow behind left border */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 30%, transparent) 0%, transparent 70%)",
            }}
          />

          <div 
            className="relative p-8 lg:p-10 rounded-lg border-l-[6px] border-primary"
            style={{
              background: "linear-gradient(to right, color-mix(in srgb, var(--primary) 5%, transparent) 0%, transparent 100%)",
            }}
          >
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <p className="text-[16px] text-white leading-[1.8]">
                Every Corteron plan covers all 15 business domains. The difference between plans is depth of automation and level of support, not the scope of what gets covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-5xl font-display text-white mb-16 text-center">
            Full Feature Comparison
          </h2>
          
          <div className="overflow-x-auto rounded-xl border border-white/5">
            <table className="w-full">
              <thead>
                <tr className="sticky top-0 bg-[#0D0D1F] backdrop-blur-sm border-b border-white/5">
                  <th className="text-left py-4 px-6 text-[#D1D5DB] font-medium text-base">Feature</th>
                  <th className="text-center py-4 px-6 text-white font-medium text-base">Starter</th>
                  <th className="text-center py-4 px-6 text-white font-medium text-base">Growth</th>
                  <th className="text-center py-4 px-6 bg-primary/15 text-white font-medium text-base border-x border-primary/30">Professional</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={feature.category} 
                    className={`border-b border-white/5 hover:bg-primary/[0.03] transition-colors ${
                      index % 2 === 0 ? "bg-[rgba(255,255,255,0.01)]" : ""
                    }`}
                  >
                    <td className="py-4 px-6 text-[#D1D5DB] text-[15px] font-medium">{feature.category}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.starter ? (
                        <Check className="w-[18px] h-[18px] text-primary mx-auto" />
                      ) : (
                        <X className="w-[18px] h-[18px] text-[#DC2626] mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.growth ? (
                        <Check className="w-[18px] h-[18px] text-primary mx-auto" />
                      ) : (
                        <X className="w-[18px] h-[18px] text-[#DC2626] mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/[0.02]">
                      {feature.professional ? (
                        <Check className="w-[18px] h-[18px] text-primary mx-auto" />
                      ) : (
                        <X className="w-[18px] h-[18px] text-[#DC2626] mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-display text-white mb-16 text-center">
            Common Questions
          </h2>
          <PricingFAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 mt-8">
        {/* Radial brand glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 bg-[#0A0A1A] py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-[36px] font-display text-white mb-4 font-bold">
              Ready to run your business on autopilot?
            </h2>
            <p className="text-[#9CA3AF] mb-8">
              Join businesses already running on Corteron. Setup in 5 to 7 days.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <CalButton className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-medium text-[15px] rounded-lg transition-all pulse-glow">
                Book a Strategy Call
              </CalButton>
              <a
                href="/contact"
                className="px-8 py-3.5 border border-primary text-primary hover:bg-primary/10 font-medium text-[15px] rounded-lg transition-all"
              >
                Talk to Us
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#6B7280]">
              <span>No setup fees</span>
              <span className="w-1 h-1 rounded-full bg-[#6B7280]"></span>
              <span>Cancel with 30 days notice</span>
              <span className="w-1 h-1 rounded-full bg-[#6B7280]"></span>
              <span>All 15 domains included</span>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

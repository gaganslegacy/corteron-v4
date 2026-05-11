"use client";
import { CalButton } from "@/components/ui/cal-button";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Database, Workflow, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const businesses = [
  {
    number: "01",
    name: "First Choice Hair",
    type: "Local Salon",
    description: "The first business deployed on Corteron and the sandbox where every new feature gets tested. Fully automated lead response, rebooking, and content.",
    tags: ["Lead Response", "Content Posting", "Rebooking"],
  },
  {
    number: "02",
    name: "NeuralFlow",
    type: "AI Agency",
    description: "The commercial face of Corteron. Sells done-for-you AI automation to businesses. Monthly retainers from $1,497 to $4,997.",
    tags: ["Client Delivery", "Sales Pipeline", "Reporting"],
  },
  {
    number: "03",
    name: "PropPulse",
    type: "Realtor AI System",
    description: "AI lead nurture and voice agent for Toronto realtors. 60-second response to every missed call and DM. Booking showings automatically.",
    tags: ["Voice Agent", "Lead Nurture", "Showing Bookings"],
  },
  {
    number: "04",
    name: "BuildSync",
    type: "Trades Automation",
    description: "AI automation for contractors and trades. Missed call response, quote follow-up, portfolio content, and referral campaigns.",
    tags: ["Missed Call Response", "Quote Follow-up", "Referrals"],
  },
  {
    number: "05",
    name: "Adult Content Platform",
    type: "Subscription AI",
    description: "Subscription-based AI content platform. High margin, heavily automated, multi-platform distribution.",
    tags: ["Content Production", "Subscriber Engagement", "Renewals"],
  },
  {
    number: "06",
    name: "EternoBliss",
    type: "Health Ecommerce",
    description: "Health and wellness product brand. UGC ad creatives, abandoned cart recovery, post-purchase nurture, and review collection.",
    tags: ["UGC Creatives", "Cart Recovery", "Reviews"],
  },
  {
    number: "07",
    name: "Aesthetic Furniture",
    type: "Furniture Ecommerce",
    description: "Design-forward furniture ecommerce. Pinterest nurture flows, personalized proposals, and complementary piece upsells.",
    tags: ["Pinterest Flows", "Proposals", "Upsells"],
  },
  {
    number: "08",
    name: "Masons Vault",
    type: "Luxury Fashion",
    description: "High-end luxury fashion brand. Persona scoring, exclusive drop access, VIP membership, and editorial content.",
    tags: ["Persona Scoring", "Drop Access", "VIP Program"],
  },
  {
    number: "09",
    name: "Stakewell",
    type: "B2B Partnerships",
    description: "Equity-based B2B partnership platform. Automated deal flow, outreach, proposal generation, and portfolio monitoring.",
    tags: ["Deal Flow", "Outreach", "Portfolio Monitoring"],
  },
  {
    number: "10",
    name: "LMG",
    type: "Music Label",
    description: "AI-powered music label and influencer management. Artist discovery, campaign management, streaming tracking, and royalty calculation.",
    tags: ["Artist Discovery", "Campaigns", "Royalties"],
  },
  {
    number: "11",
    name: "Luxury Mobility",
    type: "Transport and Experience",
    description: "High-end transportation and experience brand. Booking automation, corporate accounts, and membership upsells.",
    tags: ["Booking Automation", "Corporate Accounts", "Memberships"],
  },
  {
    number: "12",
    name: "OTA Dev",
    type: "Travel Agency",
    description: "AI-powered online travel agency. Personalized itineraries, corporate travel management, and post-trip campaigns.",
    tags: ["Itineraries", "Corporate Travel", "Post-trip Campaigns"],
  },
  {
    number: "13",
    name: "NeuroArc",
    type: "Mental Health App",
    description: "AI mental health application operating under PHIPA in Canada and HIPAA in the United States. Wellness pathways and subscription management.",
    tags: ["PHIPA Compliant", "Wellness Pathways", "Subscriptions"],
    isCompliant: true,
  },
];

const commonThreads = [
  {
    icon: Database,
    title: "Same Database",
    description: "All 13 businesses sync to the same unified data layer. Customer data flows automatically across all 15 domains.",
  },
  {
    icon: Workflow,
    title: "Same Workflows",
    description: "Lead capture, nurture sequences, follow-up automation, and reporting run identically across every business.",
  },
  {
    icon: Brain,
    title: "Same Intelligence",
    description: "AI training happens once. Every business benefits from the intelligence generated across all 13 portfolios.",
  },
];

function BusinessCard({ business, index }: { business: (typeof businesses)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{
          background: "linear-gradient(to right, var(--primary) 0%, color-mix(in srgb, var(--primary) 30%, transparent) 100%)",
        }}
      />

      {/* Hover glow - brand radial glow in top-right */}
      <div
        className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative p-6 bg-[#0D0D1F] border border-white/5 group-hover:border-primary group-hover:bg-primary/[0.03] rounded-xl transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg group-hover:shadow-primary/20">
        {/* Header with number badge */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white" style={{ letterSpacing: "0.02em" }}>
              {business.name}
            </h3>
          </div>
          <span className="text-2xl font-black text-[#B45309] font-mono ml-2 shrink-0">
            /{business.number}
          </span>
        </div>

        {/* Type badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
            {business.type}
          </span>
          {business.isCompliant && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(34,197,94,0.15)] text-[#22C55E] border border-[#22C55E]/30">
              PHIPA/HIPAA
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-[#9CA3AF] leading-[1.7] mb-6">
          {business.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {business.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 rounded-full text-xs text-[#6B7280] bg-[#1a1a2e] border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(number);
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, number]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-5xl lg:text-[64px] font-display font-bold text-[#B45309] mb-2">
        {count}
      </div>
      <div className="text-sm lg:text-base text-white">{label}</div>
    </div>
  );
}

function CommonThreadCard({ item }: { item: (typeof commonThreads)[0] }) {
  const Icon = item.icon;

  return (
    <div className="group p-8 bg-[#0D0D1F] border border-white/5 rounded-xl hover:border-primary hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
      <p className="text-sm lg:text-base text-[#9CA3AF] leading-[1.7]">{item.description}</p>
    </div>
  );
}

export default function BusinessesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
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
              The Portfolio
            </span>

            <h1 className="text-[clamp(48px,7vw,88px)] font-display tracking-tight text-white mb-6 leading-[0.95]">
              <span className="block">
                13 Businesses.{" "}
                <span className="relative inline-block">
                  One Operating System.
                  <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                </span>
              </span>
            </h1>

            <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
              Every business in the Corteron portfolio runs on identical infrastructure. The configuration changes. The system does not.
            </p>

            {/* Stats row below subtext */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#9CA3AF]">
              <span>13 Businesses</span>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <span>15 Domains Each</span>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <span>1 Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cards Grid */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <BusinessCard key={business.number} business={business} index={index} />
            ))}
          </div>
          
          {/* Row dividers */}
          <div className="mt-6 h-px bg-[rgba(255,255,255,0.03)]"></div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className="p-12 rounded-xl border-t border-b"
            style={{
              background: "color-mix(in srgb, var(--primary) 3%, transparent)",
              borderColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "13", label: "Businesses on One OS" },
                { number: "15", label: "Domains Per Business" },
                { number: "5", label: "Automation Layers" },
                { number: "1", label: "Unified Infrastructure" },
              ].map((stat, index) => (
                <div key={index} className={`flex flex-col items-center ${index < 3 ? "border-r border-[rgba(255,255,255,0.05)]" : ""}`}>
                  <StatCard number={stat.number} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Thread Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-display text-white">
              The Common Thread
            </h2>
            <p className="text-lg text-[#9CA3AF] mt-4">
              Why these 13 businesses all live on the same infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commonThreads.map((item) => (
              <CommonThreadCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          {/* Radial glow behind heading */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-3">
              Is your business a fit for Corteron?
            </h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 h-auto text-base rounded-full pulse-glow mt-8 mb-4"
              asChild
            >
              <CalButton>
                Book a Strategy Call
              </CalButton>
            </Button>
            <p className="text-sm text-[#6B7280] mt-4">
              No setup fees. No long-term contracts. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

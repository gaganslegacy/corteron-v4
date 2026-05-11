"use client";
import { CalButton } from "@/components/ui/cal-button";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const domains = [
  { number: "01", name: "Legal and Corporate", description: "Contracts, compliance, IP monitoring, privacy policies generated and enforced automatically." },
  { number: "02", name: "Brand and Identity", description: "Brand voice applied consistently across every piece of content on every channel." },
  { number: "03", name: "Digital Presence", description: "Websites and stores deployed from a brief. SEO built in from day one." },
  { number: "04", name: "Social Media", description: "Instagram, TikTok, LinkedIn, YouTube, X, Pinterest, Reddit, Discord — all managed." },
  { number: "05", name: "Communication", description: "SMS, email, voice agents, WhatsApp, live chat — every channel automated." },
  { number: "06", name: "Sales and Revenue", description: "Pipeline management, proposals, contracts, payments, upsells — no manual steps." },
  { number: "07", name: "Marketing", description: "SEO, paid ads, email campaigns, influencer management, content — all running." },
  { number: "08", name: "Product Delivery", description: "Onboarding, fulfillment, reporting, quality monitoring — delivered without a VA." },
  { number: "09", name: "Operations", description: "SOPs, task delegation, approvals, escalations, vendor management — systematized." },
  { number: "10", name: "Finance", description: "Revenue tracking, P&L reports, cash flow forecasting — automated and delivered monthly." },
  { number: "11", name: "People and HR", description: "Hiring, onboarding, contractor management, performance tracking — handled." },
  { number: "12", name: "Technology", description: "Stack monitoring, backups, deployments, security — no manual maintenance." },
  { number: "13", name: "Data and Intelligence", description: "Analytics, KPI tracking, A/B testing, prediction models — always running." },
  { number: "14", name: "Customer Success", description: "Onboarding, support, retention, NPS, renewals, churn prevention — automated." },
  { number: "15", name: "Partnerships and Biz Dev", description: "Deal flow, outreach, reseller management, affiliate tracking — systematized." },
];

function DomainCard({ domain, index }: { domain: typeof domains[0]; index: number }) {
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
      className={`relative group p-6 card-premium hover:border-primary/40 hover:bg-primary/5 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {/* Top border that slides in on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

      <span className="text-sm lg:text-[14px] text-[#B45309] font-mono font-bold">{domain.number}</span>
      <h3 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-white transition-colors">{domain.name}</h3>
      <p className="text-sm text-[#9CA3AF] leading-[1.85] group-hover:text-[#D1D5DB] transition-colors">{domain.description}</p>
    </div>
  );
}

export function DomainsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="domains" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      {/* Gradient background using CSS variable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #050510 0%, color-mix(in srgb, var(--primary) 3%, transparent) 50%, #050510 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 lg:mb-24 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}>
          <span className="inline-flex items-center gap-3 text-[11px] font-mono text-primary mb-6 uppercase font-semibold" style={{ letterSpacing: "0.3em" }}>
            <span className="w-8 h-px bg-primary" />
            Complete Coverage
          </span>
          <h2 className="text-[clamp(36px,4.5vw,64px)] font-display text-white mb-5">
            Every Domain Your Business Runs Across.
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-2xl leading-[1.85]">
            Most tools automate one function. Corteron covers every operational domain simultaneously on one system.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {domains.map((domain, index) => (
            <DomainCard key={domain.number} domain={domain} index={index} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="relative card-premium px-8 py-16 text-center mb-8 overflow-hidden">
          {/* Watermark text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              fontSize: "200px",
              fontWeight: "bold",
              opacity: 0.015,
              color: "#ffffff",
              fontFamily: "var(--font-display)",
            }}
          >
            CORTERON
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              While your competitors are managing tools, Corteron is running your entire business.
            </h3>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-base rounded-full btn-primary-glow font-semibold"
              asChild
            >
              <CalButton>
                Book a Strategy Call
              </CalButton>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

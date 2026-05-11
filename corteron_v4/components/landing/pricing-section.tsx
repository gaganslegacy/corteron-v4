"use client";
import { CalButton } from "@/components/ui/cal-button";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Zap, Bot, Users } from "lucide-react";

const plans = [
  {
    name: "Self Serve",
    badge: null,
    price: 49,
    priceLabel: "/month USD",
    description: "DIY access to the Corteron platform. Build and manage your own automation workflows with unlimited assistance and support.",
    icon: Zap,
    features: [
      "Full platform access",
      "All 15 domains",
      "Workflow builder",
      "Unlimited support",
      "Community access",
      "Monthly performance report",
    ],
    cta: "Get Started",
    ctaLink: "https://cal.com/corteron",
    popular: false,
    gradient: false,
  },
  {
    name: "AI Agent Force",
    badge: "Most Popular",
    price: 249,
    priceLabel: "/month USD",
    description: "Done-for-you AI automation. Corteron builds, deploys, and runs your complete automation stack. You focus on your business.",
    icon: Bot,
    features: [
      "Everything in Self Serve",
      "Done-for-you setup",
      "AI voice agents",
      "Daily content creation",
      "Lead capture and nurture",
      "Social media posting",
      "Monthly performance reports",
      "Bi-weekly strategy calls",
    ],
    cta: "Get Started",
    ctaLink: "https://cal.com/corteron",
    popular: true,
    gradient: true,
  },
  {
    name: "Specialized Force",
    badge: "Custom",
    price: null,
    priceLabel: null,
    description: "The full stack. AI agents plus a dedicated India-based development team building custom workflows, integrations, and infrastructure.",
    icon: Users,
    features: [
      "Everything in AI Agent Force",
      "Dedicated development team",
      "Custom workflow builds",
      "Custom API integrations",
      "Advanced infrastructure",
      "Priority support",
      "Quarterly business reviews",
    ],
    cta: "Talk to Us",
    ctaLink: "/contact",
    popular: false,
    gradient: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = plan.icon;

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
      className={`relative transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className={`relative p-8 rounded-2xl h-full flex flex-col transition-all duration-300 ${
          plan.popular
            ? "border-2 border-primary bg-[#0D0D1F] lg:scale-105 shadow-2xl shadow-primary/20"
            : "border border-white/10 bg-[#0D0D1F] hover:border-white/20 hover:-translate-y-1"
        }`}
      >
        {/* Subtle grid overlay for popular card */}
        {plan.popular && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Badge */}
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span
                className={`inline-block px-4 py-1 text-xs font-bold uppercase rounded-full ${
                  plan.popular
                    ? "bg-primary text-white"
                    : "bg-[#B45309]/10 text-[#B45309] border border-[#B45309]/30"
                }`}
                style={{ letterSpacing: "0.1em" }}
              >
                {plan.badge}
              </span>
            </div>
          )}

          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
              plan.popular
                ? "bg-primary shadow-lg shadow-primary/30"
                : "bg-primary/10 border border-primary/20"
            }`}
          >
            <Icon className={`w-6 h-6 ${plan.popular ? "text-white" : "text-primary"}`} />
          </div>

          {/* Plan name */}
          <h3
            className="text-xs font-semibold text-[#9CA3AF] uppercase mb-2"
            style={{ letterSpacing: "0.15em" }}
          >
            {plan.name}
          </h3>

          {/* Price */}
          <div className="mb-5 pb-5 border-b border-white/5">
            {plan.price ? (
              <div className="flex items-baseline gap-1">
                <span className="text-[56px] font-bold text-white leading-none">
                  ${plan.price}
                </span>
                <span className="text-[16px] text-[#6B7280]">{plan.priceLabel}</span>
              </div>
            ) : (
              <div className="flex items-baseline">
                <span className="text-[40px] font-bold text-white leading-none">
                  Custom
                </span>
              </div>
            )}
            <p className="text-[14px] text-[#6B7280] mt-2 leading-relaxed">
              {plan.description}
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-[14px] text-[#D1D5DB] leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          {plan.ctaLink.startsWith("https://cal.com") ? (
            <CalButton
              className={`w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all flex items-center justify-center gap-2 group ${
                plan.popular
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                  : "border border-white/20 text-white hover:border-primary hover:bg-primary/10"
              }`}
            >
              {plan.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </CalButton>
          ) : (
            <a
              href={plan.ctaLink}
              className={`w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all flex items-center justify-center gap-2 group ${
                plan.popular
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                  : "border border-white/20 text-white hover:border-primary hover:bg-primary/10"
              }`}
            >
              {plan.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center max-w-2xl mx-auto">
          <span
            className="inline-flex items-center gap-3 text-[11px] font-mono text-primary mb-6 uppercase font-semibold"
            style={{ letterSpacing: "0.25em" }}
          >
            <span className="w-8 h-px bg-primary" />
            PRICING
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-white mb-4">
            Simple Pricing. Serious Results.
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            No setup fees buried in the contract. No lock-ins on day one.
          </p>
          {/* Trust signals */}
          <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
            {["No setup fees", "Cancel anytime", "15 domains on every plan"].map((item, i) => (
              <span key={item} className="flex items-center gap-2 text-[13px] text-[#9CA3AF]">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-primary" />}
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* 15 domains callout */}
        <div className="mt-12 p-6 rounded-xl border-l-[6px] border-primary bg-[#0D0D1F] border border-white/5">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mt-0.5 shrink-0">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <p className="text-[15px] text-[#D1D5DB] leading-relaxed">
              Every Corteron plan covers all 15 business domains. The difference between plans is depth of automation and level of support, not the scope of what gets covered.
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-[14px] text-[#6B7280]">
          Not sure which plan is right?{" "}
          <a href="/contact" className="text-primary hover:text-white transition-colors font-medium">
            Talk to us first
          </a>
        </p>
      </div>
    </section>
  );
}

"use client";
import { CalButton } from "@/components/ui/cal-button";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const businesses = [
  { title: "Local Services", description: "Salons, contractors, trades. Never miss a lead again." },
  { title: "Ecommerce Brands", description: "Product stores that need daily content, ads, and retention." },
  { title: "Real Estate", description: "Realtors who lose leads to slow response times." },
  { title: "AI Agencies", description: "Done-for-you AI automation for client businesses." },
  { title: "Luxury Brands", description: "Premium brands that need consistent editorial voice." },
  { title: "Health and Wellness", description: "Clinics, apps, and wellness brands with compliance requirements." },
];

function BusinessCard({
  business,
  index
}: {
  business: typeof businesses[0];
  index: number;
}) {
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
      className={`card-premium p-8 group blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
        {business.title}
      </h3>
      <p className="text-[#9CA3AF] leading-[1.85]">{business.description}</p>
    </div>
  );
}

export function WhoItIsForSection() {
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
    <section id="who-for" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 lg:mb-24 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}>
          <span className="inline-flex items-center gap-3 text-[11px] font-mono text-primary mb-6 uppercase font-semibold" style={{ letterSpacing: "0.3em" }}>
            <span className="w-8 h-px bg-primary" />
            Who It Is For
          </span>
          <h2 className="text-[clamp(36px,4.5vw,64px)] font-display text-white mb-5">
            Built For Every Business Type.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {businesses.map((business, index) => (
            <BusinessCard key={business.title} business={business} index={index} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-base rounded-full btn-primary-glow font-semibold"
            asChild
          >
            <CalButton>
              Book a Strategy Call
            </CalButton>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base rounded-full border-white/20 text-white hover:bg-white/5"
            asChild
          >
            <a href="/businesses">See All 13 Businesses</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

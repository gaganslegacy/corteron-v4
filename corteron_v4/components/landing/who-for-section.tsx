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
      className={`p-8 border border-white/5 bg-[#0D0D1F] hover:border-[#4F46E5]/30 transition-all duration-500 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
        {business.title}
      </h3>
      <p className="text-[#9CA3AF]">{business.description}</p>
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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#4F46E5] mb-6 uppercase tracking-widest">
            <span className="w-8 h-px bg-[#4F46E5]" />
            Who It Is For
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-white">
            Built For Every Business Type.
          </h2>
        </div>

        {/* Grid - 1 column mobile, 2 columns tablet, 3 columns desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {businesses.map((business, index) => (
            <BusinessCard key={business.title} business={business} index={index} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-8 h-14 text-base rounded-full"
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

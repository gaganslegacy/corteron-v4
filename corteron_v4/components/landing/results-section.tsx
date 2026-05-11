"use client";

import { useEffect, useRef, useState } from "react";

const results = [
  {
    badge: "Local Service",
    stat: "60s",
    label: "Average Lead Response",
    description: "Down from 4 hours. Every missed call followed up automatically within 60 seconds.",
  },
  {
    badge: "Real Estate",
    stat: "100%",
    label: "Leads Followed Up",
    description: "Every missed call and DM responded to automatically. Zero leads lost to slow response.",
  },
  {
    badge: "Ecommerce",
    stat: "3x",
    label: "More Leads Contacted",
    description: "Before competitors respond. Automated sequences running 24 hours a day.",
  },
];

function ResultCard({
  result,
  index
}: {
  result: typeof results[0];
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
      className={`card-premium p-8 lg:p-12 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-mono rounded mb-4">
        {result.badge}
      </span>
      <div className="text-5xl lg:text-6xl font-display text-[#B45309] mb-2">
        {result.stat}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{result.label}</h3>
      <p className="text-[#9CA3AF] leading-[1.85]">{result.description}</p>
    </div>
  );
}

export function ResultsSection() {
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
    <section id="results" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 lg:mb-24 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}>
          <span className="inline-flex items-center gap-3 text-[11px] font-mono text-primary mb-6 uppercase font-semibold" style={{ letterSpacing: "0.3em" }}>
            <span className="w-8 h-px bg-primary" />
            Early Results
          </span>
          <h2 className="text-[clamp(36px,4.5vw,64px)] font-display text-white mb-5">
            What Happens When Corteron Runs Your Business.
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {results.map((result, index) => (
            <ResultCard key={result.badge} result={result} index={index} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-[#6B7280] text-sm">
          Results from businesses running on Corteron. Full case studies publishing soon.{" "}
          <a href="/case-studies" className="text-primary hover:text-white transition-colors">
            View Case Studies
          </a>
        </p>
      </div>
    </section>
  );
}

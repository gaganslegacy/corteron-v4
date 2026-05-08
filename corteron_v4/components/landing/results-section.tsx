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
      className={`p-8 lg:p-12 border border-white/5 bg-[#0D0D1F] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="inline-block px-3 py-1 bg-[#4F46E5] text-white text-xs font-mono rounded mb-4">
        {result.badge}
      </span>
      <div className="text-5xl lg:text-6xl font-display text-[#B45309] mb-2">
        {result.stat}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{result.label}</h3>
      <p className="text-[#9CA3AF]">{result.description}</p>
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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#4F46E5] mb-6 uppercase tracking-widest">
            <span className="w-8 h-px bg-[#4F46E5]" />
            Early Results
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-white">
            What Happens When Corteron Runs Your Business.
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {results.map((result, index) => (
            <ResultCard key={result.badge} result={result} index={index} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-[#6B7280] text-sm">
          Results from businesses running on Corteron. Full case studies publishing soon.{" "}
          <a href="/case-studies" className="text-[#4F46E5] hover:text-white transition-colors">
            View Case Studies
          </a>
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { X, CheckCircle } from "lucide-react";

const comparison = [
  {
    column: "Traditional Agency",
    icon: "x",
    points: [
      "Trades time for money",
      "High overhead costs",
      "Inconsistent delivery",
      "Scales by hiring",
      "No compound learning",
    ],
  },
  {
    column: "Automation Tools",
    icon: "x",
    points: [
      "One function only",
      "Requires manual management",
      "No intelligence layer",
      "Separate tools for each job",
      "Disconnected data",
    ],
  },
  {
    column: "Corteron",
    icon: "check",
    isHighlighted: true,
    points: [
      "Covers all 15 domains",
      "Runs without a team",
      "Gets smarter every day",
      "Scales without hiring",
      "One system, complete memory",
    ],
  },
];

function ComparisonColumn({
  data,
  index
}: {
  data: typeof comparison[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const colRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (colRef.current) observer.observe(colRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={colRef}
      className={`relative blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className={`relative p-6 lg:p-10 border transition-all duration-300 rounded-2xl h-full ${
          data.isHighlighted
            ? "border-2 border-primary bg-primary/5 lg:scale-105 lg:shadow-2xl lg:shadow-primary/40 py-10"
            : `border border-white/5 bg-[#0D0D1F] hover:-translate-y-[6px] hover:border-white/10 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] py-6 ${data.icon === "x" ? "bg-[rgba(220,38,38,0.03)]" : ""}`
        }`}
        style={{ boxShadow: data.isHighlighted ? undefined : "inset 0 1px 0 rgba(255,255,255,0.06)" }}
      >
        {/* RECOMMENDED badge for Corteron */}
        {data.isHighlighted && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#B45309] text-white text-xs font-mono font-bold rounded-full uppercase">
            RECOMMENDED
          </div>
        )}

        <div className="flex items-center gap-3 mb-8">
          <h3 className={`text-lg lg:text-xl font-bold ${data.isHighlighted ? "text-white" : "text-[#9CA3AF]"}`}>
            {data.column}
          </h3>
          {data.icon === "x" ? (
            <X className="w-6 h-6 text-[#DC2626]" strokeWidth={3} />
          ) : (
            <CheckCircle className="w-6 h-6 text-primary" strokeWidth={2} />
          )}
        </div>

        <ul className="space-y-4">
          {data.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              {data.icon === "x" ? (
                <X className="w-5 h-5 text-[#DC2626] mt-0.5 shrink-0 font-bold" strokeWidth={3} />
              ) : (
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
              )}
              <span className={`text-sm lg:text-base leading-[1.85] ${data.isHighlighted ? "text-white" : "text-[#9CA3AF]"}`}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ComparisonSection() {
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
    <section id="comparison" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 lg:mb-24 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}>
          <span className="inline-flex items-center gap-3 text-[11px] font-mono text-primary mb-6 uppercase font-semibold" style={{ letterSpacing: "0.3em" }}>
            <span className="w-8 h-px bg-primary" />
            Why Corteron
          </span>
          <h2 className="text-[clamp(36px,4.5vw,64px)] font-display text-white">
            Not a Tool. Not an Agency. An Operating System.
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {comparison.map((col, index) => (
            <ComparisonColumn key={col.column} data={col} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

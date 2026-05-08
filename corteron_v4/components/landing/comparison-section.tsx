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
      className={`relative p-6 lg:p-10 border transition-all duration-700 rounded-xl ${
        data.isHighlighted
          ? "border-2 border-[#4F46E5] bg-[#4F46E5]/5 lg:scale-105 lg:shadow-2xl lg:shadow-[#4F46E5]/40 py-10"
          : `border border-white/5 bg-[#0D0D1F] hover:border-white/10 py-6 ${data.icon === 'x' ? 'bg-[rgba(220,38,38,0.03)]' : ''}`
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
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
          <X className={`w-6 h-6 font-bold ${data.isHighlighted ? "text-[#DC2626]" : "text-[#DC2626]"}`} strokeWidth={3} />
        ) : (
          <CheckCircle className="w-6 h-6 text-[#4F46E5]" strokeWidth={2} />
        )}
      </div>

      <ul className="space-y-4">
        {data.points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            {data.icon === "x" ? (
              <X className="w-5 h-5 text-[#DC2626] mt-0.5 shrink-0 font-bold" strokeWidth={3} />
            ) : (
              <CheckCircle className="w-5 h-5 text-[#4F46E5] mt-0.5 shrink-0" strokeWidth={2} />
            )}
            <span className={`text-sm lg:text-base ${data.isHighlighted ? "text-white" : "text-[#9CA3AF]"}`}>
              {point}
            </span>
          </li>
        ))}
      </ul>
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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#4F46E5] mb-6 uppercase tracking-widest">
            <span className="w-8 h-px bg-[#4F46E5]" />
            Why Corteron
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-white">
            Not a Tool. Not an Agency. An Operating System.
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {comparison.map((col, index) => (
            <ComparisonColumn key={col.column} data={col} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

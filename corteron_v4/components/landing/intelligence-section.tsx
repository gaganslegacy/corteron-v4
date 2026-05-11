"use client";

import { useEffect, useRef, useState } from "react";

const levels = [
  {
    number: "1",
    title: "Automated",
    description: "Executes every workflow without human involvement. Responds, posts, follows up, reports.",
    status: "Live Now",
    statusColor: "bg-green-500",
  },
  {
    number: "2",
    title: "Adaptive",
    description: "Observes outcomes and updates its own behavior. Adjusts schedules, switches formats, improves automatically.",
    status: "Live Now",
    statusColor: "bg-green-500",
  },
  {
    number: "3",
    title: "Predictive",
    description: "Detects a churning client three weeks before they cancel and intervenes automatically.",
    status: "Coming",
    statusColor: "bg-[#6B7280]",
  },
  {
    number: "4",
    title: "Generative",
    description: "Designs novel solutions from thousands of previous outcomes. Runs its own experiments.",
    status: "Coming",
    statusColor: "bg-[#6B7280]",
  },
  {
    number: "5",
    title: "Autonomous",
    description: "Deploys new businesses from a brief. Requires only strategic oversight.",
    status: "Coming",
    statusColor: "bg-[#6B7280]",
  },
];

function IntelligenceLevel({ 
  level, 
  index 
}: { 
  level: typeof levels[0]; 
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex-1 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-center lg:text-left">
        <div className="text-6xl font-display text-primary mb-4">{level.number}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{level.title}</h3>
        <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">{level.description}</p>
        <span className={`inline-block px-3 py-1 text-xs font-mono text-white rounded ${level.statusColor}`}>
          {level.status}
        </span>
      </div>
      {index < levels.length - 1 && (
        <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-white/10" />
      )}
    </div>
  );
}

export function IntelligenceSection() {
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
    <section id="intelligence" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6 uppercase tracking-widest">
            <span className="w-8 h-px bg-primary" />
            The Intelligence
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-white mb-6">
            It Gets Smarter Every Day It Runs.
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-2xl">
            Corteron does not start intelligent. It starts reliable. Intelligence emerges through the data it accumulates over time.
          </p>
        </div>

        {/* Levels Grid - desktop 5 columns, mobile stack */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {levels.map((level, index) => (
            <IntelligenceLevel key={level.number} level={level} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

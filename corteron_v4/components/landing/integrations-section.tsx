"use client";

import { useEffect, useState, useRef } from "react";

const integrations = [
  { name: "GitHub", category: "Version Control" },
  { name: "Slack", category: "Communication" },
  { name: "Stripe", category: "Payments" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "AWS", category: "Cloud" },
  { name: "MongoDB", category: "Database" },
  { name: "Vercel", category: "Hosting" },
  { name: "Figma", category: "Design" },
  { name: "Linear", category: "Project Management" },
  { name: "Notion", category: "Documentation" },
  { name: "OpenAI", category: "AI/ML" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="integrations" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}>
          <span className="inline-flex items-center gap-3 text-[11px] font-mono text-primary mb-6 uppercase font-semibold" style={{ letterSpacing: "0.3em" }}>
            <span className="w-8 h-px bg-primary" />
            Integrations
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-[clamp(36px,4.5vw,64px)] font-display tracking-tight mb-5">
            Works with everything
            <br />
            you already use.
          </h2>
          <p className="text-xl text-muted-foreground leading-[1.85]">
            200+ pre-built integrations. Connect your entire stack in minutes.
          </p>
        </div>
      </div>

      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 card-premium hover:border-primary/30 hover:bg-primary/5 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform text-white">
                    {integration.name}
                  </div>
                  <div className="text-sm text-[#6B7280]">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 card-premium hover:border-primary/30 hover:bg-primary/5 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform text-white">
                    {integration.name}
                  </div>
                  <div className="text-sm text-[#6B7280]">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";

const locations = [
  { city: "San Francisco", region: "US West", latency: "12ms" },
  { city: "New York", region: "US East", latency: "18ms" },
  { city: "London", region: "Europe", latency: "24ms" },
  { city: "Tokyo", region: "Asia Pacific", latency: "32ms" },
  { city: "Sydney", region: "Oceania", latency: "45ms" },
  { city: "Sao Paulo", region: "South America", latency: "38ms" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className={`blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}>
            <span className="inline-flex items-center gap-3 text-[11px] font-mono text-primary mb-6 uppercase font-semibold" style={{ letterSpacing: "0.3em" }}>
              <span className="w-8 h-px bg-primary" />
              Infrastructure
            </span>
            <h2 className="text-[clamp(36px,4.5vw,64px)] font-display tracking-tight mb-5">
              Global by
              <br />
              default.
            </h2>
            <p className="text-xl text-muted-foreground leading-[1.85] mb-12">
              Deploy once, run everywhere. Our edge network spans 17 data centers
              across 6 continents, delivering sub-50ms latency to 99% of the world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2 text-[#B45309]">17</div>
                <div className="text-sm text-[#9CA3AF]">Data centers</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2 text-[#B45309]">99.99%</div>
                <div className="text-sm text-[#9CA3AF]">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2 text-[#B45309]">&lt;50ms</div>
                <div className="text-sm text-[#9CA3AF]">Global latency</div>
              </div>
            </div>
          </div>

          {/* Right: Location list */}
          <div className={`blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`} style={{ transitionDelay: "200ms" }}>
            <div className="card-premium overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <span className="text-sm font-mono text-[#9CA3AF]">Edge Network</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  All operational
                </span>
              </div>

              {/* Locations */}
              <div>
                {locations.map((location, index) => (
                  <div
                    key={location.city}
                    className={`px-6 py-5 border-b border-white/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeLocation === index ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeLocation === index ? "bg-primary" : "bg-white/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium text-white">{location.city}</div>
                        <div className="text-sm text-[#6B7280]">{location.region}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-[#9CA3AF]">{location.latency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

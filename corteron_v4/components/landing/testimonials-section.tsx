"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Corteron responded to a lead at 11pm that I missed. They booked a showing the next morning. That one response paid for six months of the service.",
    author: "Michael T.",
    role: "Toronto Realtor",
    company: "PropPulse client",
    metric: "First showing booked overnight",
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const activeTestimonial = testimonials[0];

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
    <section ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className={`flex items-center gap-4 mb-16 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}>
          <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-semibold">
            Success Story
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className={`lg:col-span-8 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`} style={{ transitionDelay: "100ms" }}>
            <blockquote>
              <p className="font-display text-[clamp(28px,3.5vw,52px)] leading-[1.1] tracking-tight text-foreground">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="font-display text-2xl text-primary">
                  {activeTestimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium text-white">{activeTestimonial.author}</p>
                <p className="text-[#9CA3AF]">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className={`lg:col-span-4 flex flex-col justify-center blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`} style={{ transitionDelay: "200ms" }}>
            <div className="card-premium p-8">
              <span className="font-mono text-[11px] tracking-[0.3em] text-[#6B7280] uppercase font-semibold block mb-4">
                Key Result
              </span>
              <p className="font-display text-3xl md:text-4xl text-[#B45309]">
                {activeTestimonial.metric}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

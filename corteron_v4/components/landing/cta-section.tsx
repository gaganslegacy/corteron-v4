"use client";
import { CalButton } from "@/components/ui/cal-button";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-primary/30 bg-[#0A0A1A] rounded-2xl blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
          onMouseMove={handleMouseMove}
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300 rounded-2xl"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, color-mix(in srgb, var(--primary) 15%, transparent), transparent 40%)`
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-[clamp(36px,4.5vw,64px)] font-display tracking-tight mb-8 leading-[0.95]">
                  Ready to automate
                  <br />
                  your business?
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-[1.85] max-w-xl">
                  Book a strategy call and we will map the exact automation setup for your business. No generic demos.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-base rounded-full group btn-primary-glow font-semibold"
                    asChild
                  >
                    <CalButton>
                      Book a Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </CalButton>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-white/20 text-white hover:bg-white/5"
                    asChild
                  >
                    <a href="/contact">
                      Send a Message
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-[#6B7280] mt-8 font-mono">
                  Reply within 24 hours. Guaranteed.
                </p>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-primary/20 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-primary/20 rounded-bl-2xl" />
        </div>
      </div>
    </section>
  );
}

"use client";
import { CalButton } from "@/components/ui/cal-button";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Fixed atmospheric background depth */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 40%, color-mix(in srgb, var(--primary) 4%, transparent) 0%, transparent 100%)",
        }}
      />

      {/* Radial brand glow behind headline */}
      <div className="absolute inset-0 top-1/4 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/5"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/5"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-32 lg:pb-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-flex items-center gap-3 text-[11px] font-mono text-muted-foreground tracking-[0.3em] uppercase font-semibold">
            <span className="w-8 h-px bg-foreground/30" />
            AI OPERATING SYSTEM
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(52px,7vw,96px)] font-display leading-[1.0] tracking-[-0.03em] blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
            style={{ transitionDelay: "80ms" }}
          >
            <span className="block">The machine that</span>
            <span className="block">
              runs your{" "}
              <span className="relative inline-block text-primary">
                business.
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
              </span>
            </span>
          </h1>
        </div>

        {/* Description + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-[1.85] max-w-xl blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
            style={{ transitionDelay: "160ms" }}
          >
            Corteron captures every lead, follows up automatically, posts content daily, closes sales, and reports results across all 15 business domains — without a team of people managing it.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
            style={{ transitionDelay: "240ms" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto text-base rounded-full group btn-primary-glow font-semibold"
              asChild
            >
              <CalButton>
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </CalButton>
            </Button>
            <Button
              size="lg"
              className="h-auto py-4 px-8 text-base rounded-full border-white/20 text-white hover:bg-white/5"
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats marquee */}
      <div
        className={`absolute bottom-24 left-0 right-0 blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
        style={{ transitionDelay: "400ms" }}
      >
        <div className="flex gap-16 whitespace-nowrap overflow-hidden">
          <div className="flex gap-16 items-center animate-marquee">
            {[
              { text: "15 Domains Covered", separator: true },
              { text: "13 Businesses Running", separator: true },
              { text: "60s Lead Response", separator: true },
              { text: "24/7 Automated Delivery", separator: true },
              { text: "Zero Missed Follow-Ups", separator: true },
              { text: "15 Domains Covered", separator: true },
              { text: "13 Businesses Running", separator: true },
              { text: "60s Lead Response", separator: true },
              { text: "24/7 Automated Delivery", separator: true },
              { text: "Zero Missed Follow-Ups", separator: false },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 whitespace-nowrap">
                <span className="text-2xl lg:text-3xl font-display font-semibold text-[#B45309]">
                  {item.text}
                </span>
                {item.separator && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

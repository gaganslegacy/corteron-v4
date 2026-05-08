"use client";
import { CalButton } from "@/components/ui/cal-button";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Radial indigo glow behind headline */}
      <div className="absolute inset-0 top-1/4 pointer-events-none">
        <div 
          className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)",
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
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground tracking-[0.125em] uppercase">
            <span className="w-8 h-px bg-foreground/30" />
            AI OPERATING SYSTEM
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(48px,8vw,96px)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">The machine that</span>
            <span className="block">
              runs your{" "}
              <span className="relative inline-block text-[#4F46E5]">
                business.
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#4F46E5] rounded-full"></span>
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p 
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Corteron captures every lead, follows up automatically, posts content daily, closes sales, and reports results across all 15 business domains — without a team of people managing it.
          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-8 py-4 h-auto text-base rounded-full group pulse-glow"
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
      
      {/* Stats marquee - full width outside container */}
      <div 
        className={`absolute bottom-24 left-0 right-0 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
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
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      
    </section>
  );
}

"use client";
import { CalButton } from "@/components/ui/cal-button";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { useState, useEffect, useRef } from "react";
import { Zap, Brain, GitBranch, Database, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_COLOR } from "@/config/brand";

const modules = [
  {
    number: "01",
    title: "Traffic and Capture",
    description: "Every DM, missed call, ad click, and form submission captured automatically across every channel. Nothing falls through.",
    accent: "ping",
  },
  {
    number: "02",
    title: "Qualification and Routing",
    description: "Claude scores every lead 0 to 10 based on intent, source, and behavior. High-intent leads get immediate action. Cold leads enter long-term nurture.",
    accent: "chip",
  },
  {
    number: "03",
    title: "Nurture and Communication",
    description: "Personalized sequences run across SMS, email, Instagram DM, and voice automatically based on where each contact is in their journey.",
    accent: "channels",
  },
  {
    number: "04",
    title: "Conversion and Sales",
    description: "Proposals generated from call notes. Contracts sent. Payment links triggered at the right moment. The mechanics of every sale handled automatically.",
    accent: "dollar",
  },
  {
    number: "05",
    title: "Onboarding",
    description: "From the moment payment is confirmed the full onboarding sequence fires. Welcome message, access, intake form, strategy call booking in under 24 hours.",
    accent: "timeline",
  },
  {
    number: "06",
    title: "Fulfillment and Delivery",
    description: "Content created and posted. Reports generated. Voice agents running. Monthly deliverables completed without a VA touching them.",
    accent: "badge",
  },
  {
    number: "07",
    title: "Retention and Upsell",
    description: "Rebooking prompts, check-in messages, upsell triggers, and churn interventions fire based on behavior data not a calendar reminder.",
    accent: "trend",
  },
  {
    number: "08",
    title: "Reporting and Optimization",
    description: "Weekly and monthly reports generated automatically. Revenue attributed to the action that drove it. Every result visible without compiling a spreadsheet.",
    accent: "chart",
  },
];

const layers = [
  {
    name: "Claude",
    role: "Intelligence",
    description: "AI decision engine powering every workflow",
    accent: BRAND_COLOR,
    Icon: Brain,
  },
  {
    name: "n8n",
    role: "Orchestration",
    description: "Workflow automation and integration",
    accent: "#7C3AED",
    Icon: GitBranch,
  },
  {
    name: "OpenClaw",
    role: "Execution",
    description: "API execution and triggers",
    accent: "#0891B2",
    Icon: Zap,
  },
  {
    name: "Supabase",
    role: "Memory",
    description: "Customer data and CRM",
    accent: "#059669",
    Icon: Database,
  },
  {
    name: "GHL & Shopify",
    role: "Business Systems",
    description: "Ecommerce and CRM systems",
    accent: "#D97706",
    Icon: ShoppingCart,
  },
];

function AccentDetail({ accent, isLeft }: { accent: string; isLeft: boolean }) {
  if (accent === "ping") {
    return (
      <div className="flex items-center gap-2 mt-3">
        <div className="relative w-2.5 h-2.5 flex-shrink-0">
          <div className="absolute inset-0 bg-green-500 rounded-full" />
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
        </div>
        <span className="text-[11px] text-green-500 font-mono font-semibold tracking-widest uppercase">Live</span>
      </div>
    );
  }

  if (accent === "chip") {
    return (
      <div className="flex items-end gap-2 mt-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 rounded-sm" style={{ height: 10, background: "color-mix(in srgb, var(--primary) 25%, transparent)" }} />
          <span className="text-[9px] text-[#6B7280] font-mono">Low</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 rounded-sm" style={{ height: 18, background: "color-mix(in srgb, var(--primary) 55%, transparent)" }} />
          <span className="text-[9px] text-[#6B7280] font-mono">Med</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 rounded-sm" style={{ height: 26, background: "var(--primary)" }} />
          <span className="text-[9px] text-[#6B7280] font-mono">High</span>
        </div>
      </div>
    );
  }

  if (accent === "channels") {
    return (
      <div className="flex flex-wrap items-center gap-1.5 mt-4">
        {["SMS", "Email", "Instagram", "Voice"].map((label) => (
          <span
            key={label}
            className="text-[10px] text-[#818CF8] rounded-full px-2 py-0.5"
            style={{
              background: "color-mix(in srgb, var(--primary) 10%, transparent)",
              border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    );
  }

  if (accent === "timeline") {
    return (
      <div className="flex items-center gap-3 mt-4">
        <span className="text-[11px] text-primary font-mono shrink-0">Day 0</span>
        <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "color-mix(in srgb, var(--primary) 15%, transparent)" }}>
          <div
            className="h-full rounded-full"
            style={{ width: "72%", background: "linear-gradient(to right, var(--primary), #818CF8)" }}
          />
        </div>
        <span className="text-[11px] text-primary font-mono shrink-0">Day 1</span>
      </div>
    );
  }

  if (accent === "badge") {
    return (
      <span
        className="inline-block mt-4 text-[11px] font-semibold rounded-full px-3 py-1"
        style={{
          color: "#4ADE80",
          background: "rgba(74,222,128,0.08)",
          border: "1px solid rgba(74,222,128,0.25)",
        }}
      >
        Automated
      </span>
    );
  }

  if (accent === "trend") {
    return (
      <svg width="64" height="26" viewBox="0 0 64 26" className="mt-4" fill="none">
        <polyline
          points="0,22 10,18 22,15 34,11 46,7 56,4 64,1"
          stroke="#B45309"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="64" cy="1" r="3" fill="#B45309" />
      </svg>
    );
  }

  if (accent === "chart") {
    const heights = [8, 14, 10, 20, 14, 24, 18];
    return (
      <div className="flex items-end gap-1 mt-4">
        {heights.map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-sm"
            style={{
              height: h,
              background: "var(--primary)",
              opacity: 0.4 + i * 0.09,
              animation: `barPulse 1.8s ease-in-out ${i * 0.12}s infinite alternate`,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}

function CardInner({
  module,
  isLeft,
  isVisible,
  delay,
}: {
  module: (typeof modules)[0];
  isLeft: boolean;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div
      className="relative group rounded-2xl p-8 overflow-hidden transition-all duration-300"
      style={{
        background: "#0D0D1F",
        border: "1px solid rgba(255,255,255,0.05)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0)"
          : `translateX(${isLeft ? "-60px" : "60px"})`,
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px)";
        el.style.borderColor = "color-mix(in srgb, var(--primary) 30%, transparent)";
        el.style.boxShadow = "0 20px 60px color-mix(in srgb, var(--primary) 8%, transparent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,255,0.05)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Ghost number */}
      <div
        className="absolute top-4 pointer-events-none select-none leading-none font-black"
        style={{
          fontSize: 120,
          color: "color-mix(in srgb, var(--primary) 4%, transparent)",
          right: isLeft ? 16 : undefined,
          left: isLeft ? undefined : 16,
          top: 16,
          lineHeight: 1,
        }}
      >
        {module.number}
      </div>

      {/* Module 01 live ping — top-right */}
      {module.accent === "ping" && (
        <div className="absolute top-5 right-5 flex items-center gap-1.5">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-green-500 rounded-full" />
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-[11px] text-green-500 font-mono font-semibold tracking-widest">Live</span>
        </div>
      )}

      {/* Module 04 dollar badge — top-right */}
      {module.accent === "dollar" && (
        <div
          className="absolute top-4 right-4 text-[11px] font-bold rounded-full px-2 py-0.5 font-mono"
          style={{
            color: "#B45309",
            background: "rgba(180,83,9,0.1)",
            border: "1px solid rgba(180,83,9,0.25)",
          }}
        >
          $$$
        </div>
      )}

      {/* Title */}
      <div className="relative z-10">
        <h3
          className="font-bold text-white"
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginTop: module.accent === "ping" || module.accent === "dollar" ? 28 : 0,
          }}
        >
          {module.title}
        </h3>

        {/* Description */}
        <p
          className="text-[#9CA3AF]"
          style={{ fontSize: 15, lineHeight: 1.85, marginTop: 12 }}
        >
          {module.description}
        </p>

        {/* Accent — skip ping and dollar (already rendered above) */}
        {module.accent !== "ping" && module.accent !== "dollar" && (
          <AccentDetail accent={module.accent} isLeft={isLeft} />
        )}
      </div>
    </div>
  );
}

function MobileCardInner({
  module,
  isVisible,
  delay,
}: {
  module: (typeof modules)[0];
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div
      className="relative group rounded-2xl p-6 overflow-hidden flex-1 transition-all duration-300"
      style={{
        background: "#0D0D1F",
        border: "1px solid rgba(255,255,255,0.05)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      <h3
        className="font-bold text-white"
        style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}
      >
        {module.title}
      </h3>
      <p
        className="text-[#9CA3AF]"
        style={{ fontSize: 14, lineHeight: 1.8, marginTop: 8 }}
      >
        {module.description}
      </p>
      <AccentDetail accent={module.accent} isLeft={true} />
    </div>
  );
}

function ModuleCard({
  module,
  index,
  isVisible,
}: {
  module: (typeof modules)[0];
  index: number;
  isVisible: boolean;
}) {
  const isLeft = index % 2 === 0;
  const delay = index * 0.15;

  return (
    <>
      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex items-center w-full">
        {/* Left card slot (44%) */}
        <div style={{ width: "44%" }}>
          {isLeft && (
            <CardInner module={module} isLeft={true} isVisible={isVisible} delay={delay} />
          )}
        </div>

        {/* Center connector (12%) */}
        <div className="relative flex items-center justify-center" style={{ width: "12%" }}>
          {/* Horizontal line — left side (for left cards) */}
          {isLeft && (
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                right: "calc(50% + 22px)",
                width: 48,
                height: 1,
                background: "var(--primary)",
                opacity: 0.45,
              }}
            />
          )}

          {/* Circle */}
          <div
            className="relative flex items-center justify-center rounded-full z-20 flex-shrink-0"
            style={{
              width: 44,
              height: 44,
              background: "#050510",
              border: "2px solid var(--primary)",
            }}
          >
            <span
              className="font-mono font-bold text-primary"
              style={{ fontSize: 14 }}
            >
              {module.number}
            </span>
          </div>

          {/* Horizontal line — right side (for right cards) */}
          {!isLeft && (
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: "calc(50% + 22px)",
                width: 48,
                height: 1,
                background: "var(--primary)",
                opacity: 0.45,
              }}
            />
          )}
        </div>

        {/* Right card slot (44%) */}
        <div style={{ width: "44%" }}>
          {!isLeft && (
            <CardInner module={module} isLeft={false} isVisible={isVisible} delay={delay} />
          )}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex items-start gap-4 w-full">
        {/* Inline circle */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 44,
            height: 44,
            background: "#050510",
            border: "2px solid var(--primary)",
            marginTop: 4,
          }}
        >
          <span className="font-mono font-bold text-primary" style={{ fontSize: 13 }}>
            {module.number}
          </span>
        </div>

        {/* Card */}
        <MobileCardInner module={module} isVisible={isVisible} delay={delay} />
      </div>
    </>
  );
}

function FlowConnector({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: vertical ? 1 : 60,
        height: vertical ? 48 : 1,
        background: "color-mix(in srgb, var(--primary) 30%, transparent)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--primary)",
          boxShadow: "0 0 8px var(--primary)",
          top: vertical ? 0 : "50%",
          left: vertical ? "50%" : 0,
          transform: vertical ? "translateX(-50%)" : "translateY(-50%)",
          animation: vertical
            ? "travelDown 1.5s linear infinite"
            : "travelRight 1.5s linear infinite",
        }}
      />
    </div>
  );
}

function LayerCard({
  layer,
  index,
  isVisible,
}: {
  layer: (typeof layers)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { Icon, accent } = layer;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: 200,
        flexShrink: 0,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
      }}
    >
      <div
        className="rounded-2xl p-6 flex flex-col items-center text-center"
        style={{
          background: "#0D0D1F",
          border: `1px solid ${isHovered ? `${accent}80` : "rgba(255,255,255,0.05)"}`,
          boxShadow: isHovered ? `0 20px 40px ${accent}26` : "none",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          transition: "border-color 300ms, box-shadow 300ms, transform 300ms",
        }}
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${accent}1a` }}
        >
          <Icon style={{ width: 40, height: 40, color: accent }} />
        </div>

        <h3 className="text-[15px] font-bold text-white mt-4 text-center">{layer.name}</h3>

        <span
          className="text-[10px] font-medium rounded-full px-3 py-1 mt-2"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: accent,
            backgroundColor: `${accent}1a`,
            border: `1px solid ${accent}4d`,
          }}
        >
          {layer.role}
        </span>

        <p
          className="text-[12px] text-[#6B7280] mt-3 text-center leading-[1.6]"
          style={{ maxWidth: 160 }}
        >
          {layer.description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  const [modulesVisible, setModulesVisible] = useState(false);
  const [layersVisible, setLayersVisible] = useState(false);
  const modulesRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setModulesVisible(true);
      },
      { threshold: 0.05 }
    );
    if (modulesRef.current) observer.observe(modulesRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLayersVisible(true);
      },
      { threshold: 0.1 }
    );
    if (layersRef.current) observer.observe(layersRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 top-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="hidden lg:block w-6 h-px bg-primary" />
            <span
              className="text-[11px] font-mono text-primary uppercase font-bold"
              style={{ letterSpacing: "0.3em" }}
            >
              How It Works
            </span>
            <span className="hidden lg:block w-6 h-px bg-primary" />
          </div>

          <h1
            className="text-center font-display font-black leading-[1.05] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{
              fontSize: "clamp(56px,8vw,96px)",
              letterSpacing: "-0.02em",
              animationDelay: "0.15s",
              animationFillMode: "both",
            }}
          >
            <span className="text-white">Every Function. Fully </span>
            <span className="text-primary">Automated.</span>
          </h1>

          <p
            className="text-center text-[18px] text-[#9CA3AF] leading-[1.7] max-w-[600px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            Corteron runs the operational layer of any business from the moment a lead arrives to the
            moment revenue is attributed. Here is exactly how it works.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            {["8 Modules", "15 Domains", "Zero Manual Steps"].map((stat) => (
              <div
                key={stat}
                className="px-4 py-1.5 bg-[#0D0D1F] border border-white/10 rounded-full text-[13px] font-medium text-[#9CA3AF]"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eight Modules Section */}
      <section
        ref={modulesRef}
        className="relative py-24 lg:py-32"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--primary) 2%, transparent) 50%, transparent 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-20 lg:mb-28">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="hidden lg:block w-6 h-px bg-primary" />
              <span
                className="text-[11px] font-mono text-primary uppercase font-bold"
                style={{ letterSpacing: "0.3em" }}
              >
                The Eight Modules
              </span>
              <span className="hidden lg:block w-6 h-px bg-primary" />
            </div>

            <h2
              className="text-center font-display font-black mb-6 text-white"
              style={{
                fontSize: "clamp(36px,5vw,56px)",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              The Eight Modules Every Business Runs On.
            </h2>

            <p className="text-center text-[18px] text-[#9CA3AF] leading-[1.7] max-w-2xl mx-auto">
              Every business in the portfolio runs these same eight modules. Only the configuration
              changes.
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Center vertical line — desktop only */}
            <div
              className="hidden lg:block absolute top-0 bottom-0 w-[2px] left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, var(--primary) 8%, var(--primary) 92%, transparent 100%)",
              }}
            />

            {/* Module rows */}
            <div className="flex flex-col gap-16 lg:gap-24">
              {modules.map((module, index) => (
                <ModuleCard
                  key={module.number}
                  module={module}
                  index={index}
                  isVisible={modulesVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Five Layers Section */}
      <section className="relative py-32 lg:py-40">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.02,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            className="font-display font-black mb-20 text-center text-white"
            style={{
              fontSize: "clamp(36px,5vw,56px)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Five Layers. One Operating System.
          </h2>

          <div
            ref={layersRef}
            className="flex flex-col lg:flex-row items-center justify-center"
          >
            {layers.map((layer, index) => (
              <div key={layer.name} className="flex flex-col lg:flex-row items-center">
                <LayerCard layer={layer} index={index} isVisible={layersVisible} />
                {index < layers.length - 1 && (
                  <>
                    <div className="hidden lg:block">
                      <FlowConnector vertical={false} />
                    </div>
                    <div className="lg:hidden my-1">
                      <FlowConnector vertical={true} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div
            className="mt-12 py-6"
            style={{
              background: "color-mix(in srgb, var(--primary) 3%, transparent)",
              borderTop: "1px solid color-mix(in srgb, var(--primary) 10%, transparent)",
              borderBottom: "1px solid color-mix(in srgb, var(--primary) 10%, transparent)",
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-16">
              {[
                { stat: "5 Layers", label: "Architecture" },
                { stat: "1 System", label: "Unified" },
                { stat: "Infinite Scale", label: "Capacity" },
              ].map((item, i) => (
                <div key={item.stat} className="flex items-center gap-6 lg:gap-16">
                  {i > 0 && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                    />
                  )}
                  <div className="text-center">
                    <div className="text-[15px] font-bold text-white">{item.stat}</div>
                    <div className="text-[13px] text-[#6B7280]">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes travelRight {
            0%   { left: 0; }
            100% { left: calc(100% - 6px); }
          }
          @keyframes travelDown {
            0%   { top: 0; }
            100% { top: calc(100% - 6px); }
          }
          @keyframes barPulse {
            from { opacity: 0.5; transform: scaleY(0.75); }
            to   { opacity: 1;   transform: scaleY(1); }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, color-mix(in srgb, var(--primary) 8%, transparent) 0%, #050510 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span
            className="inline-block text-[11px] font-mono text-primary uppercase font-bold mb-6"
            style={{ letterSpacing: "0.3em" }}
          >
            Ready to Start
          </span>

          <h2
            className="font-display font-black text-white mb-4 max-w-[600px] mx-auto"
            style={{
              fontSize: 48,
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            See It Running in Your Business.
          </h2>

          <p className="text-[17px] text-[#9CA3AF] leading-[1.7] max-w-2xl mx-auto mb-10">
            30-minute call. We map the exact automation setup for your business. No generic demos. No
            sales pressure.
          </p>

          <Button
            size="lg"
            className="px-10 py-4 h-auto bg-primary text-white text-[16px] font-semibold rounded-xl hover:bg-primary/90 transition-all pulse-glow mb-8"
            style={{ boxShadow: "0 0 40px color-mix(in srgb, var(--primary) 40%, transparent)" }}
            asChild
          >
            <CalButton>
              Book a Strategy Call
            </CalButton>
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[12px] text-[#6B7280]">
            <span>No setup fees</span>
            <span>·</span>
            <span>Cancel anytime</span>
            <span>·</span>
            <span>Results in 5 to 7 days</span>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

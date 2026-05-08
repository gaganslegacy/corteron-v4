"use client";

import { CalButton } from "@/components/ui/cal-button";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { X, Lock, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const autonomyLevels = [
  {
    level: "1",
    title: "Automated",
    description: "System executes every configured workflow without human involvement.",
    status: "Live Now",
    isLive: true,
  },
  {
    level: "2",
    title: "Adaptive",
    description: "System observes its own outcomes and updates its behavior automatically.",
    status: "Live Now",
    isLive: true,
  },
  {
    level: "3",
    title: "Predictive",
    description: "Detects a client about to churn three weeks before they cancel and intervenes automatically.",
    status: "Coming",
    isLive: false,
  },
  {
    level: "4",
    title: "Generative",
    description: "Designs novel solutions from thousands of previous outcomes. Runs its own experiments.",
    status: "Coming",
    isLive: false,
  },
  {
    level: "5",
    title: "Autonomous",
    description: "A new business submits a brief. The system deploys it. That is the only involvement required.",
    status: "Coming",
    isLive: false,
  },
];

const visionCards = [
  {
    icon: X,
    title: "Not An Agency",
    description: "Agencies trade time for money. Corteron is infrastructure. It scales without proportional human cost.",
    type: "negative",
  },
  {
    icon: Lock,
    title: "Not a SaaS Tool",
    description: "Tools require someone to manage them. Corteron runs the whole operation, not just one function.",
    type: "negative",
  },
  {
    icon: Zap,
    title: "An Operating System",
    description: "The same way Shopify gave anyone a store, Corteron gives any business an autonomous operational layer covering all 15 domains.",
    type: "positive",
    badge: "THE ANSWER",
  },
];

function AnimatedPing() {
  return (
    <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
  );
}

function AutonomyCard({ level, index }: { level: (typeof autonomyLevels)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-12"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="group relative flex gap-6 lg:gap-12 items-start">
        {/* Timeline connector */}
        <div className="flex flex-col items-center shrink-0">
          <div
            className={`w-[52px] h-[52px] rounded-full flex items-center justify-center text-18px font-bold transition-all duration-300 ${
              level.isLive
                ? "bg-[#4F46E5] text-white shadow-lg shadow-[#4F46E5]/60"
                : "bg-[#0D0D1F] border-2 border-white/20 text-[#6B7280]"
            }`}
          >
            {level.isLive && <AnimatedPing />}
            {level.level}
          </div>
          {index < autonomyLevels.length - 1 && (
            <div
              className={`mt-4 transition-all duration-500 ${
                index < 1
                  ? "w-px h-24 bg-[#4F46E5] shadow-[0_0_8px_rgba(79,70,229,0.6)]"
                  : "w-px h-24 bg-dashed"
              }`}
              style={{
                backgroundImage: index < 1 ? "none" : "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 6px)",
              }}
            />
          )}
        </div>

        {/* Content */}
        <div
          className="flex-1 pt-3 ml-12 group/card p-7 bg-[#0D0D1F] rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-[#4F46E5]/30 group-hover:-translate-y-1"
        >
          <h3 className="text-20px font-bold text-white">{level.title}</h3>
          <p className="text-15px text-[#9CA3AF] leading-[1.8] mt-2">{level.description}</p>
          <div className="mt-3">
            {level.isLive ? (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(34,197,94,0.1)] border border-[#22C55E]/30 text-[#4ADE80] rounded-full text-12px font-medium">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]"></span>
                {level.status}
              </span>
            ) : (
              <span className="inline-flex px-3 py-1 bg-[rgba(107,114,128,0.08)] border border-gray-700 text-[#6B7280] rounded-full text-12px font-medium">
                {level.status}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionCard({ card, index }: { card: (typeof visionCards)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = card.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {card.type === "positive" ? (
        <div
          className="relative rounded-2xl p-8 border-2 border-[#4F46E5]/40 overflow-hidden group scale-105 shadow-xl shadow-[#4F46E5]/12"
          style={{
            background: "linear-gradient(to bottom, #0D0D1F, rgba(79, 70, 229, 0.05))",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 0 60px rgba(79, 70, 229, 0.12) inset",
            }}
          />

          {/* Badge */}
          <div className="absolute top-6 right-6 px-3 py-0.5 bg-transparent border border-[#B45309] text-[#B45309] rounded-full text-11px uppercase font-bold tracking-wider">
            {card.badge}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Icon className="w-10 h-10 text-[#4F46E5] mb-4" />
            <h3 className="text-20px font-bold text-white mt-0">{card.title}</h3>
            <p className="text-15px text-[#9CA3AF] leading-[1.8] mt-3">{card.description}</p>
          </div>
        </div>
      ) : (
        <div
          className="relative rounded-2xl p-8 bg-[#0D0D1F] border border-red-900/20 overflow-hidden group"
          style={{
            background: "rgba(0, 0, 0, 0.2) repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(220, 38, 38, 0.02) 35px, rgba(220, 38, 38, 0.02) 70px)",
          }}
        >
          {/* Red X watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none"
            style={{
              fontSize: "200px",
              fontWeight: "900",
              color: "#DC2626",
            }}
          >
            ✕
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Icon className="w-10 h-10 text-[#DC2626] mb-4" />
            <h3 className="text-20px font-bold text-white">{card.title}</h3>
            <p className="text-15px text-[#9CA3AF] leading-[1.8] mt-3">{card.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsHeroVisible(true);
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative py-32 lg:py-40 overflow-hidden">
        {/* Radial indigo glow behind headline */}
        <div className="absolute inset-0 top-1/4 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Label */}
            <div
              className={`inline-flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="hidden lg:block w-6 h-px bg-[#4F46E5]" />
              <span
                className="text-11px font-mono text-[#4F46E5] uppercase tracking-[0.3em]"
                style={{ letterSpacing: "0.3em" }}
              >
                The Story
              </span>
              <span className="hidden lg:block w-6 h-px bg-[#4F46E5]" />
            </div>

            {/* Headline */}
            <h1
              className={`text-[clamp(56px,8vw,96px)] font-display font-800 leading-[1.05] letter-spacing-[-0.02em] text-white mb-6 transition-all duration-700 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              Built by Someone Who Ran the Businesses{" "}
              <span className="text-[#4F46E5]">First.</span>
            </h1>

            {/* Subtext */}
            <p
              className={`text-18px text-[#9CA3AF] leading-[1.7] mx-auto mb-8 max-w-[600px] transition-all duration-700 delay-200 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Corteron did not start as a product. It started as a system built to run 13 businesses without hiring 13 teams.
            </p>

            {/* Context Pills */}
            <div
              className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-300 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {["13 Businesses", "1 System", "Ontario, Canada"].map((pill, i) => (
                <div
                  key={pill}
                  className="px-4 py-1.5 rounded-full bg-[#0D0D1F] border border-white/10 text-[#9CA3AF] text-13px font-medium"
                >
                  {pill}
                  {i < 2 && <span className="ml-3 inline-block text-white/30">·</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 top-0 pointer-events-none">
          <div
            className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className="grid lg:grid-cols-[45%_55%] gap-16 items-start p-12 bg-[#0D0D1F] rounded-2xl border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
            style={{
              animation: "slideInUp 0.8s ease-out",
            }}
          >
            {/* Left: Quote */}
            <div className="relative flex flex-col justify-start">
              <div
                className="absolute top-0 left-0 text-[160px] font-900 text-[#4F46E5] opacity-15 leading-none"
                style={{ marginTop: "-40px", marginLeft: "-30px" }}
              >
                "
              </div>
              <p
                className="relative text-24px italic text-white leading-[1.6] font-light"
                style={{ fontWeight: 300 }}
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#4F46E5]" />
                <span className="pl-6">
                  Every business has the same eight problems. We built one system that solves all of them across every business simultaneously.
                </span>
              </p>
            </div>

            {/* Right: Story */}
            <div className="space-y-6">
              <p className="text-16px text-[#9CA3AF] leading-[1.9]">
                Corteron was built out of necessity. Running multiple businesses simultaneously made one thing clear: every business needs the same operational infrastructure. Lead capture, follow-up, content, sales, onboarding, retention. The problems are identical. Only the configuration changes.
              </p>
              <p className="text-16px text-[#9CA3AF] leading-[1.9]">
                Rather than hire a team for each business, we built a system. That system now runs 13 businesses on identical infrastructure with a fraction of the overhead a traditional operation would require.
              </p>
              <p className="text-16px text-[#9CA3AF] leading-[1.9]">
                The system that started as an internal tool is now available to any business. Corteron is the operating system your business has always needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              className="text-[clamp(36px,5vw,56px)] font-display font-800 text-white leading-[1.1] mb-0"
              style={{ letterSpacing: "-0.02em" }}
            >
              What Corteron Is
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {visionCards.map((card, index) => (
              <VisionCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy Levels */}
      <section className="relative py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              className="text-[clamp(36px,5vw,56px)] font-display font-800 text-white leading-[1.1] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Five Levels of Autonomy
            </h2>
            <p className="text-17px text-[#9CA3AF] max-w-[560px] mx-auto">
              Corteron does not start intelligent. It starts reliable. Intelligence emerges through the data it accumulates.
            </p>
          </div>

          <div className="space-y-0">
            {autonomyLevels.map((level, index) => (
              <AutonomyCard key={level.level} level={level} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-32 lg:py-40">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 top-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[520px] mx-auto px-6 lg:px-12">
          <div
            className="relative p-12 bg-[#0D0D1F] rounded-2xl border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.5)] text-center overflow-hidden"
            style={{
              animation: "slideInUp 0.8s ease-out",
            }}
          >
            {/* Shimmer border animation */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-20"
              style={{
                backgroundImage: `conic-gradient(from 0deg, transparent, rgba(79, 70, 229, 0.4), transparent 50%, transparent)`,
                animation: "spin 6s linear infinite",
              }}
            />

            {/* Avatar with concentric rings */}
            <div className="relative inline-block mx-auto mb-6">
              {/* Ring 3 - largest */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[176px] h-[176px] rounded-full border border-[#4F46E5] opacity-5" />
              {/* Ring 2 - medium */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[144px] h-[144px] rounded-full border border-[#4F46E5] opacity-10" />
              {/* Ring 1 - inner */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112px] h-[112px] rounded-full border border-[#4F46E5] opacity-20" />

              {/* Avatar */}
              <div className="relative z-10 w-[88px] h-[88px] rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
                <span className="text-36px font-800 text-white">G</span>
              </div>
            </div>

            {/* Name */}
            <h3 className="relative z-10 text-28px font-bold text-white mt-6" style={{ letterSpacing: "-0.01em" }}>
              Gajan
            </h3>

            {/* Title */}
            <p className="relative z-10 text-15px text-[#9CA3AF] mt-1">Founder, Corteron</p>

            {/* Divider */}
            <div className="relative z-10 border-t border-white/5 my-6 w-16 mx-auto" />

            {/* Bio */}
            <p className="relative z-10 text-15px text-[#9CA3AF] leading-[1.8] text-center">
              Built Corteron after running 13 businesses on the same infrastructure. The system that was an internal tool is now available to every business.
            </p>

            {/* CTA Button */}
            <CalButton className="relative z-10 mt-8 px-8 py-4 bg-[#4F46E5] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_60px_rgba(79,70,229,0.5)] shadow-[0_0_40px_rgba(79,70,229,0.3)]">
              Book a Strategy Call
            </CalButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(79, 70, 229, 0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span
            className="inline-flex items-center justify-center text-11px font-mono text-[#4F46E5] uppercase mb-6"
            style={{ letterSpacing: "0.3em" }}
          >
            Build on Corteron
          </span>

          <h2
            className="text-48px font-display font-800 text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            The Machine That Runs Your Business.
          </h2>

          <p className="text-17px text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
            Book a 30-minute strategy call. We map the exact system for your business.
          </p>

          <CalButton className="px-10 py-4 bg-[#4F46E5] text-white font-medium rounded-lg pulse-glow transition-all duration-300 mb-8">
            Book a Strategy Call
          </CalButton>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-12px text-[#6B7280]">
            <span>No setup fees</span>
            <span className="w-1 h-1 rounded-full bg-[#6B7280]"></span>
            <span>Cancel anytime</span>
            <span className="w-1 h-1 rounded-full bg-[#6B7280]"></span>
            <span>Live in 5 to 7 days</span>
          </div>
        </div>
      </section>

      <FooterSection />

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}

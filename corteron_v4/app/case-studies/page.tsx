"use client";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Mail, TrendingUp, BarChart3, CheckCircle, Clock, Users, Trending } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const documentationItems = [
  {
    icon: BarChart3,
    title: "Revenue Attribution",
    description: "Every dollar traced back to the exact action that generated it.",
  },
  {
    icon: Clock,
    title: "Time Saved",
    description: "Hours per week returned to the business owner from automated operations.",
  },
  {
    icon: Users,
    title: "Lead Conversion",
    description: "Percentage of leads captured and converted versus the previous manual process.",
  },
  {
    icon: TrendingUp,
    title: "Churn Prevention",
    description: "Clients retained through automated intervention before they cancelled.",
  },
];

const previewResults = [
  {
    type: "Local Service",
    stat: "60s",
    label: "Average Lead Response",
    description: "Down from 4 hours. Every missed call followed up automatically within 60 seconds.",
  },
  {
    type: "Real Estate",
    stat: "100%",
    label: "Leads Followed Up",
    description: "Every missed call and DM responded to automatically. Zero leads lost to slow response.",
  },
  {
    type: "Ecommerce",
    stat: "3x",
    label: "More Leads Contacted",
    description: "Before competitors respond. Automated sequences running 24 hours a day.",
  },
];

function AnimatedPingRings() {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Ring 1 - outermost */}
      <div
        className="absolute rounded-full border border-[#4F46E5]"
        style={{
          width: "160px",
          height: "160px",
          animation: "ping-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite 0s",
          opacity: 0.3,
        }}
      />

      {/* Ring 2 */}
      <div
        className="absolute rounded-full border border-[#4F46E5]"
        style={{
          width: "128px",
          height: "128px",
          animation: "ping-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.8s",
          opacity: 0.3,
        }}
      />

      {/* Ring 3 - innermost */}
      <div
        className="absolute rounded-full border border-[#4F46E5]"
        style={{
          width: "96px",
          height: "96px",
          animation: "ping-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite 1.6s",
          opacity: 0.3,
        }}
      />

      {/* Icon */}
      <TrendingUp className="relative w-12 h-12 text-[#4F46E5]" />

      <style>{`
        @keyframes ping-ring {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          75% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

function PreviewCard({ result, index }: { result: typeof previewResults[0]; index: number }) {
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
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-[#0D0D1F] rounded-2xl p-8 border border-white/5 overflow-hidden group">
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B45309] to-transparent opacity-30"></div>

        {/* "COMING SOON" ribbon */}
        <div className="absolute top-4 right-4 bg-[rgba(79,70,229,0.15)] border border-[#4F46E5]/30 rounded-full px-3 py-1">
          <span className="text-[#4F46E5] text-xs font-semibold uppercase" style={{ letterSpacing: "0.1em" }}>
            Coming Soon
          </span>
        </div>

        {/* Blurred content wrapper */}
        <div className="blur-[2px] opacity-70">
          {/* Type badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(79,70,229,0.1)] border border-[#4F46E5]/20 rounded-full mb-6">
            <span className="text-[#818CF8] text-xs font-medium">{result.type}</span>
          </div>

          {/* Large stat */}
          <div className="text-[72px] font-black text-[#B45309] leading-none mt-6">
            {result.stat}
          </div>

          {/* Label */}
          <div className="text-base font-semibold text-white mt-2">
            {result.label}
          </div>

          {/* Description */}
          <p className="text-sm text-[#9CA3AF] leading-[1.7] mt-3">
            {result.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function DocumentationCard({ item, index }: { item: typeof documentationItems[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

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
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-[#0D0D1F] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
        <Icon className="w-8 h-8 text-[#4F46E5] mb-4" />
        <h3 className="text-base font-bold text-white mt-4">
          {item.title}
        </h3>
        <p className="text-sm text-[#9CA3AF] leading-[1.7] mt-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsLoading(false);
  };

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Radial indigo glow behind hero */}
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
              className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700"
              style={{
                animation: "slideInDown 0.6s ease-out",
              }}
            >
              <span className="w-6 h-px bg-[#4F46E5] hidden md:block"></span>
              <span
                className="text-xs font-mono text-[#4F46E5] uppercase"
                style={{ letterSpacing: "0.3em" }}
              >
                Results
              </span>
              <span className="w-6 h-px bg-[#4F46E5] hidden md:block"></span>
            </div>

            {/* H1 */}
            <h1
              className="text-[clamp(48px,7vw,88px)] font-display font-black tracking-tight text-white leading-[1.05] mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              What Corteron Does in the Real{" "}
              <span className="text-[#4F46E5]">World.</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-lg text-[#9CA3AF] leading-[1.7] max-w-[560px] mx-auto"
              style={{
                animation: "slideInUp 0.6s ease-out 0.15s forwards",
                opacity: 0,
              }}
            >
              Real results from real businesses running on the Corteron operating system.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Card - Centerpiece */}
      <section className="relative py-24 lg:py-32 flex items-center justify-center" ref={scrollRef}>
        <div className="max-w-[600px] mx-auto px-6 lg:px-12 w-full">
          <div
            className="bg-[#0D0D1F] rounded-2xl p-14 border border-[#4F46E5]/20"
            style={{
              boxShadow: "0 0 100px rgba(79, 70, 229, 0.12)",
            }}
          >
            {/* Animated ping rings + icon */}
            <div className="flex justify-center mb-8">
              <AnimatedPingRings />
            </div>

            {/* Heading */}
            <h2
              className="text-[32px] font-black text-white text-center mt-8 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Case studies publishing soon.
            </h2>

            {/* Subtext */}
            <p className="text-base text-[#9CA3AF] text-center leading-[1.8] mt-4 max-w-[420px] mx-auto">
              We are documenting the results from our first cohort of businesses. Check back in 30 days.
            </p>

            {/* Divider */}
            <div className="border-t border-white/5 my-8"></div>

            {/* Email Notification Form */}
            {!submitted ? (
              <div>
                <label className="block text-xs text-[#9CA3AF] uppercase mb-3" style={{ letterSpacing: "0.1em" }}>
                  Get notified when we publish
                </label>

                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    ref={emailInputRef}
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#374151] focus:outline-none focus:border-[#4F46E5]/50 transition-all"
                    style={{
                      boxShadow:
                        "inset 0 0 0 3px rgba(79, 70, 229, 0) transition-shadow",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow =
                        "inset 0 0 0 3px rgba(79, 70, 229, 0.1)";
                      e.currentTarget.style.borderColor = "rgba(79, 70, 229, 0.5)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow =
                        "inset 0 0 0 3px rgba(79, 70, 229, 0)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all flex-shrink-0 disabled:opacity-50"
                    style={{
                      boxShadow:
                        "0 0 0px rgba(79, 70, 229, 0.4) transition-shadow",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 30px rgba(79, 70, 229, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 0px rgba(79, 70, 229, 0.4)";
                    }}
                  >
                    {isLoading ? "Subscribing..." : "Notify"}
                  </button>
                </form>

                <p className="text-xs text-[#6B7280] mt-4">
                  We will email you when the first case studies are published.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#22C55E]" />
                  <span className="text-base text-white font-semibold">
                    You are on the list.
                  </span>
                </div>
                <p className="text-xs text-[#6B7280] mt-2">
                  We will email you at your address when the first results are
                  published.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Early Signals - Preview Results */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-8 h-px bg-[#4F46E5]"></span>
            <span
              className="text-xs font-mono text-[#4F46E5] uppercase"
              style={{ letterSpacing: "0.3em" }}
            >
              Early Signals
            </span>
            <span className="w-8 h-px bg-[#4F46E5]"></span>
          </div>

          {/* H2 */}
          <h2
            className="text-[clamp(32px,4vw,48px)] font-black text-white text-center leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Numbers From Businesses Running on Corteron.
          </h2>

          {/* Subtext */}
          <p className="text-base text-[#9CA3AF] text-center mt-3">
            Full documented case studies coming soon. These are the early numbers.
          </p>

          {/* Three cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {previewResults.map((result, index) => (
              <PreviewCard key={index} result={result} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What Gets Documented */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* H2 */}
          <h2
            className="text-[clamp(28px,4vw,44px)] font-black text-white text-center leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            What the Case Studies Will Cover.
          </h2>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {documentationItems.map((item, index) => (
              <DocumentationCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        {/* Radial indigo glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          {/* Label */}
          <span
            className="text-xs font-mono text-[#4F46E5] uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            Coming Soon
          </span>

          {/* H2 */}
          <h2
            className="text-[48px] font-black text-white mt-6 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Be First to See the Results.
          </h2>

          {/* Subtext */}
          <p className="text-lg text-[#9CA3AF] mt-4 max-w-[500px] mx-auto">
            Sign up above and we will send you the full case studies the moment they are published.
          </p>

          {/* Scroll up link */}
          <button
            onClick={scrollToTop}
            className="mt-8 inline-flex items-center gap-2 text-[#4F46E5] hover:text-white transition-colors group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m0 0l4 4m10 0v12m0 0l4-4m0 0l-4-4"
              />
            </svg>
            <span className="text-sm font-medium">Sign up for early access</span>
          </button>
        </div>
      </section>

      <FooterSection />

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

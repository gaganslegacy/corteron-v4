"use client";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { useEffect, useState, useRef } from "react";
import { ArrowUp, ArrowLeft, Mail, Calendar, Info } from "lucide-react";
import Link from "next/link";

const sections = [
  "Acceptance of Terms",
  "Services Description",
  "Payment Terms",
  "Cancellation Policy",
  "Limitation of Liability",
  "Governing Law",
  "Dispute Resolution",
  "Modifications",
];

function FloatingTOC() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 300 && bottom >= 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 w-52 bg-[#0D0D1F] rounded-xl p-5 border border-white/5 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: "0.3s" }}
    >
      <p className="text-xs uppercase tracking-widest text-[#6B7280] mb-4">On this page</p>
      <nav className="space-y-1.5">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`block w-full text-left text-sm py-1.5 px-3 rounded transition-all duration-150 ${
              activeSection === section
                ? "text-primary font-semibold bg-primary/10 border-l-2 border-primary"
                : "text-[#6B7280] hover:text-primary"
            }`}
          >
            {section}
          </button>
        ))}
      </nav>
    </div>
  );
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-0.5 bg-primary z-50 transition-all duration-300" style={{ width: `${progress}%` }} />
  );
}

export default function TermsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050510] noise-overlay">
      <ProgressBar />
      <Navigation />

      {/* Decorative top accent */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-20" />
      <div
        className="w-full h-48 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in srgb, var(--primary) 6%, transparent) 0%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative max-w-[860px] mx-auto px-6 pt-12 pb-32">
        {/* Title section */}
        <div
          className={`text-center transition-all duration-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-[56px] font-black text-white leading-[1.05] -tracking-[0.02em] mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-[#6B7280] mt-3 mb-6">Last updated: January 2026</p>
          <div className="flex justify-center">
            <div className="h-0.5 w-[60px] bg-primary rounded-full" />
          </div>
        </div>

        {/* Content sections */}
        <div className="mt-16 space-y-1">
          {/* Acceptance of Terms */}
          <section id="acceptance-of-terms" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-primary relative" style={{ boxShadow: "-4px 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}>
              Acceptance of Terms
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              By accessing and using Corteron, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Services Description */}
          <section id="services-description" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-primary relative" style={{ boxShadow: "-4px 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}>
              Services Description
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              Corteron provides an AI-powered operating system that automates business operations across multiple domains. Services include lead capture, nurturing, content creation, sales automation, and reporting. Services are provided as-is and subject to availability.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Payment Terms */}
          <section id="payment-terms" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-primary relative" style={{ boxShadow: "-4px 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}>
              Payment Terms
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              Payment is due on the day of service initiation. We accept credit cards and ACH transfers. Billing cycles are monthly. Customers are responsible for providing accurate payment information and notifying us of any changes.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Cancellation Policy */}
          <section id="cancellation-policy" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-primary relative flex items-center gap-3" style={{ boxShadow: "-4px 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}>
              <Calendar className="w-[18px] h-[18px] text-primary" />
              Cancellation Policy
            </h2>
            <p className="text-base text-[#C0C8D8] leading-[2] mb-4">
              Monthly contracts with 30 days notice required for cancellation. No long-term lock-ins. Cancellation must be submitted in writing to{" "}
            <a href="mailto:info@corteron.com" className="text-primary hover:underline">
              info@corteron.com
              </a>
              . Your service will continue through the end of your current billing cycle.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Limitation of Liability */}
          <section id="limitation-of-liability" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-primary relative" style={{ boxShadow: "-4px 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}>
              Limitation of Liability
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              Corteron shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services, even if we have been advised of the possibility of such damages.
            </p>
            <p className="text-base text-[#9CA3AF] leading-[2] mb-4">
              Our total liability for all claims arising from or relating to these terms or the services shall not exceed the amount paid by you in the 12 months preceding the claim.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Governing Law */}
          <section id="governing-law" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-primary relative" style={{ boxShadow: "-4px 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}>
              Governing Law
            </h2>
            <p className="text-base text-[#C0C8D8] leading-[2] mb-4">
              These terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Dispute Resolution */}
          <section id="dispute-resolution" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-primary relative" style={{ boxShadow: "-4px 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}>
              Dispute Resolution
            </h2>
            <p className="text-base text-[#C0C8D8] leading-[2] mb-4">
              You irrevocably submit to the exclusive jurisdiction of the courts of Ontario for any dispute arising from these terms or your use of Corteron services.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Modifications */}
          <section id="modifications" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-primary relative" style={{ boxShadow: "-4px 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}>
              Modifications
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              Corteron reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the services constitutes acceptance of the modified terms.
            </p>
          </section>

          {/* Jurisdiction Card */}
          <div className="mt-16 p-8 bg-[#0D0D1F] rounded-2xl border border-primary/20" style={{ boxShadow: "0 0 40px color-mix(in srgb, var(--primary) 6%, transparent)", borderTop: "2px solid", borderImage: "linear-gradient(to right, var(--primary), color-mix(in srgb, var(--primary) 50%, transparent), transparent) 1" }}>
            <p className="text-sm text-[#D1D5DB] leading-[1.9] flex items-start gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              These Terms of Service are governed by and construed in accordance with the laws of the Province of Ontario. You hereby consent to the exclusive jurisdiction of the courts of Ontario for any disputes arising from these terms or your use of Corteron services.
            </p>
          </div>
        </div>
      </div>

      {/* Back navigation */}
      <div className="max-w-[860px] mx-auto px-6 py-8 flex items-center justify-between border-t border-[rgba(255,255,255,0.04)]">
        <Link href="/" className="flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <button onClick={scrollToTop} className="flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity">
          Back to top
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <FloatingTOC />
      <FooterSection />
    </main>
  );
}

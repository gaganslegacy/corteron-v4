"use client";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { useEffect, useState, useRef } from "react";
import { ArrowUp, ArrowLeft, Mail, Shield, Info } from "lucide-react";
import Link from "next/link";

const sections = [
  "Information We Collect",
  "How We Use Information",
  "Information Sharing",
  "Data Retention",
  "Your Rights under PIPEDA",
  "Contact Us",
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
                ? "text-[#4F46E5] font-semibold bg-[rgba(79,70,229,0.1)] border-l-2 border-[#4F46E5]"
                : "text-[#6B7280] hover:text-[#4F46E5]"
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
    <div className="fixed top-0 left-0 h-0.5 bg-[#4F46E5] z-50 transition-all duration-300" style={{ width: `${progress}%` }} />
  );
}

export default function PrivacyPage() {
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(79,70,229,0.5)] to-transparent mt-20" />
      <div
        className="w-full h-48 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,70,229,0.06) 0%, transparent 100%)",
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
            Privacy Policy
          </h1>
          <p className="text-sm text-[#6B7280] mt-3 mb-6">Last updated: January 2026</p>
          <div className="flex justify-center">
            <div className="h-0.5 w-[60px] bg-[#4F46E5] rounded-full" />
          </div>
        </div>

        {/* Content sections */}
        <div className="mt-16 space-y-1">
          {/* Information We Collect */}
          <section id="information-we-collect" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-[#4F46E5] relative" style={{ boxShadow: "-4px 0 12px rgba(79,70,229,0.2)" }}>
              Information We Collect
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              We collect information you provide directly to us, such as when you create an account, book a consultation, or contact us through our website. This may include your name, email address, phone number, business information, and any other information you choose to provide.
            </p>
            <p className="text-base text-[#9CA3AF] leading-[2] mb-4">
              We also automatically collect certain information when you visit our website, including device information, browser type, IP address, pages visited, and the time and date of your visit.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* How We Use Information */}
          <section id="how-we-use-information" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-[#4F46E5] relative" style={{ boxShadow: "-4px 0 12px rgba(79,70,229,0.2)" }}>
              How We Use Information
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              We use the information we collect to:
            </p>
            <ul className="pl-2 mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#9CA3AF] leading-[1.9]">Provide and improve our services</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#9CA3AF] leading-[1.9]">Communicate with you about your account and respond to inquiries</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#9CA3AF] leading-[1.9]">Send promotional materials and updates (with your consent)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#9CA3AF] leading-[1.9]">Analyze usage patterns and optimize our platform</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#9CA3AF] leading-[1.9]">Comply with legal obligations</span>
              </li>
            </ul>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Information Sharing */}
          <section id="information-sharing" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-[#4F46E5] relative" style={{ boxShadow: "-4px 0 12px rgba(79,70,229,0.2)" }}>
              Information Sharing
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              We do not sell or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
            <p className="text-base text-[#9CA3AF] leading-[2] mb-4">
              We may disclose information when required by law or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Data Retention */}
          <section id="data-retention" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-[#4F46E5] relative" style={{ boxShadow: "-4px 0 12px rgba(79,70,229,0.2)" }}>
              Data Retention
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time, subject to certain exceptions required by law.
            </p>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Your Rights under PIPEDA */}
          <section id="your-rights-under-pipeda" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-[#4F46E5] relative flex items-center gap-3" style={{ boxShadow: "-4px 0 12px rgba(79,70,229,0.2)" }}>
              <Shield className="w-[18px] h-[18px] text-[#22C55E]" />
              Your Rights under PIPEDA
            </h2>
            <p className="text-base text-[#C0C8D8] leading-[2] mb-4">
              Under the Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:
            </p>
            <ul className="pl-2 mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#C0C8D8] leading-[1.9]">Access your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#C0C8D8] leading-[1.9]">Request correction of inaccurate information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#C0C8D8] leading-[1.9]">Request deletion of your information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#C0C8D8] leading-[1.9]">Withdraw consent for collection and use of your information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm text-[#C0C8D8] leading-[1.9]">File a complaint with the Privacy Commissioner of Canada</span>
              </li>
            </ul>
            <div className="h-px bg-[rgba(255,255,255,0.04)] my-8" />
          </section>

          {/* Contact Us */}
          <section id="contact-us" className="mt-14">
            <h2 className="text-xl font-bold text-white mb-5 pl-5 border-l-[3px] border-[#4F46E5] relative" style={{ boxShadow: "-4px 0 12px rgba(79,70,229,0.2)" }}>
              Contact Us
            </h2>
            <p className="text-base text-[#B0B8C8] leading-[2] mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-base mt-6 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#4F46E5]" />
          <a href="mailto:info@corteron.com" className="text-[#4F46E5] hover:underline cursor-pointer font-medium">
            info@corteron.com
              </a>
            </p>
          </section>

          {/* Jurisdiction Card */}
          <div className="mt-16 p-8 bg-[#0D0D1F] rounded-2xl border border-[#4F46E5]/20" style={{ boxShadow: "0 0 40px rgba(79,70,229,0.06)", borderTop: "2px solid", borderImage: "linear-gradient(to right, #4F46E5, rgba(79,70,229,0.5), transparent) 1" }}>
            <p className="text-sm text-[#D1D5DB] leading-[1.9] flex items-start gap-3">
              <Info className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
              We comply with applicable Canadian privacy laws including PIPEDA and Ontario provincial requirements. All personal information is subject to Canadian jurisdiction. Disputes arising from this privacy policy are subject to the exclusive jurisdiction of the courts of Ontario.
            </p>
          </div>
        </div>
      </div>

      {/* Back navigation */}
      <div className="max-w-[860px] mx-auto px-6 py-8 flex items-center justify-between border-t border-[rgba(255,255,255,0.04)]">
        <Link href="/" className="flex items-center gap-2 text-[#4F46E5] text-sm font-medium hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <button onClick={scrollToTop} className="flex items-center gap-2 text-[#4F46E5] text-sm font-medium hover:opacity-80 transition-opacity">
          Back to top
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <FloatingTOC />
      <FooterSection />
    </main>
  );
}

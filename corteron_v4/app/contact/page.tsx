"use client";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Mail, Globe, Clock, Calendar, MessageSquare, Lock, ArrowRight, Check, HelpCircle, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    (window as any).Cal("init", "corteron-strategy-call", { origin: "https://app.cal.com" });
    (window as any).Cal.ns["corteron-strategy-call"]("inline", {
      elementOrSelector: "#my-cal-inline-corteron-strategy-call",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "corteron/corteron-strategy-call",
    });
    (window as any).Cal.ns["corteron-strategy-call"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      {/* Hero */}
      <section className="relative py-32 lg:py-40">
        {/* Radial brand glow behind headline */}
        <div className="absolute inset-0 top-1/4 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          {/* Label */}
          <div
            className="inline-flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700"
            style={{ letterSpacing: "0.3em" }}
          >
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono text-primary uppercase font-medium">Contact</span>
            <span className="w-6 h-px bg-primary" />
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(48px,7vw,88px)] font-display font-black leading-[1.05] tracking-[-0.02em] text-white mb-6 animate-in fade-in duration-700 delay-150 max-w-4xl mx-auto"
          >
            Let&apos;s Build Your AI{" "}
            <span className="text-primary">System.</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-[18px] text-[#9CA3AF] leading-[1.7] max-w-[500px] mx-auto animate-in fade-in duration-700 delay-300"
          >
            Book a strategy call or send a message. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Two Column Layout - Fixed */}
      <section ref={contactRef} className="relative pt-20 pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Book a Strategy Call */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
            >
              <div className="bg-[#0D0D1F] rounded-2xl p-10 border border-white/5">
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="text-[22px] font-bold text-white">Book a Strategy Call</h3>
                </div>

                {/* Description */}
                <p className="text-[15px] text-[#9CA3AF] leading-[1.8] mt-4 mb-6">
                  In 30 minutes we will map the exact automation setup for your business and show you what Corteron does in your specific situation.
                </p>

                {/* Checkmark bullets */}
                <div className="space-y-4 mt-6 mb-8">
                  {[
                    "Custom system architecture review",
                    "Pricing tailored to your business",
                    "Implementation timeline"
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-[15px] text-[#D1D5DB] leading-[1.6]">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Inline Calendar */}
                <div
                  id="my-cal-inline-corteron-strategy-call"
                  style={{ width: "100%", height: "600px", overflow: "scroll" }}
                  className="rounded-xl border border-white/5 bg-[#0D0D1F] mt-8"
                />

                {/* Divider */}
                <div className="border-t border-white/5 my-8" />

                {/* Contact Info */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg p-2 w-fit">
                      <Mail className="w-[18px] h-[18px] text-primary" />
                    </div>
                    <div>
                      <p className="text-[14px] text-[#9CA3AF]">Email</p>
                      <a href="mailto:info@corteron.com" className="text-[14px] text-primary hover:underline cursor-pointer">
                        info@corteron.com
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg p-2 w-fit">
                      <Globe className="w-[18px] h-[18px] text-primary" />
                    </div>
                    <div>
                      <p className="text-[14px] text-[#9CA3AF]">Website</p>
                      <a href="https://corteron.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-primary hover:underline cursor-pointer">
                        corteron.com
                      </a>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span className="text-[12px] text-[#4ADE80]">Typically replies within a few hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Send a Message */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
            >
              <div className="bg-[#0D0D1F] rounded-2xl p-10 border border-white/5">
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="text-[22px] font-bold text-white">Send a Message</h3>
                </div>

                {/* Form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Promise Strip */}
      <section className="relative py-0">
        {/* Top gradient line */}
        <div
          className="h-px w-full"
          style={{
            background: "linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 30%, transparent), transparent)",
          }}
        />

        <div className="bg-[#0A0A1A] py-10 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <p className="text-[16px] text-[#9CA3AF]">Every message receives a personal reply within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { question: "How long is the call?", answer: "30 minutes." },
              { question: "Do I need to prepare anything?", answer: "No. Just show up." },
              { question: "What happens after the call?", answer: "We send a custom automation plan within 24 hours." }
            ].map((faq, index) => (
              <div key={index} className="flex gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-bold text-white mb-1">{faq.question}</p>
                  <p className="text-[13px] text-[#6B7280]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", businessType: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Please try info@corteron.com directly.");
      }
    } catch (err) {
        setError("Something went wrong. Please try info@corteron.com directly.");
      } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4" style={{ boxShadow: "0 0 30px rgba(74, 222, 128, 0.2)" }}>
          <Check className="w-8 h-8 text-[#4ADE80]" />
        </div>
        <p className="text-[24px] font-bold text-white mt-4">Message sent.</p>
        <p className="text-[16px] text-[#9CA3AF] mt-2">We will be in touch within 24 hours.</p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", businessType: "", phone: "", message: "" });
          }}
          className="text-primary hover:underline text-[14px] mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 mt-6">
      {/* Name and Email - Side by side */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] text-[#9CA3AF] uppercase font-medium mb-2 letter-spacing-wide" style={{ letterSpacing: "0.05em" }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] placeholder-[#374151] focus:outline-none transition-all duration-200"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 60%, transparent)";
              e.currentTarget.style.background = "color-mix(in srgb, var(--primary) 3%, transparent)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-[12px] text-[#9CA3AF] uppercase font-medium mb-2 letter-spacing-wide" style={{ letterSpacing: "0.05em" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] placeholder-[#374151] focus:outline-none transition-all duration-200"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 60%, transparent)";
              e.currentTarget.style.background = "color-mix(in srgb, var(--primary) 3%, transparent)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-[12px] text-[#9CA3AF] uppercase font-medium mb-2 letter-spacing-wide" style={{ letterSpacing: "0.05em" }}>
          Business Type
        </label>
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          required
          className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none transition-all duration-200"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 60%, transparent)";
            e.currentTarget.style.background = "color-mix(in srgb, var(--primary) 3%, transparent)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
          }}
        >
          <option value="">Select a business type</option>
          <option value="local-service">Local Service</option>
          <option value="ecommerce">Ecommerce</option>
          <option value="real-estate">Real Estate</option>
          <option value="agency">Agency</option>
          <option value="luxury">Luxury</option>
          <option value="health">Health and Wellness</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-[12px] text-[#9CA3AF] uppercase font-medium mb-2 letter-spacing-wide" style={{ letterSpacing: "0.05em" }}>
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] placeholder-[#374151] focus:outline-none transition-all duration-200"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 60%, transparent)";
            e.currentTarget.style.background = "color-mix(in srgb, var(--primary) 3%, transparent)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
          }}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-[12px] text-[#9CA3AF] uppercase font-medium mb-2 letter-spacing-wide" style={{ letterSpacing: "0.05em" }}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] placeholder-[#374151] focus:outline-none transition-all duration-200 resize-none min-h-[120px]"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 60%, transparent)";
            e.currentTarget.style.background = "color-mix(in srgb, var(--primary) 3%, transparent)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
          }}
          placeholder="Tell us about your business. What are you trying to automate?"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-start gap-2 p-3 bg-[rgba(220,38,38,0.1)] border border-[#DC2626]/30 rounded-lg">
          <AlertCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
          <p className="text-[13px] text-[#DC2626]">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-primary hover:bg-primary/90 disabled:opacity-80 disabled:cursor-not-allowed text-white text-[15px] font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-6 group"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Lock className="w-4 h-4" />
            Send Message
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}

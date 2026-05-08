"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

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
      elementOrSelector: "#my-cal-inline-contact-section",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "corteron/corteron-strategy-call",
    });
    (window as any).Cal.ns["corteron-strategy-call"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        setFormData({ name: "", businessType: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#4F46E5] mb-6 uppercase tracking-widest">
            <span className="w-8 h-px bg-[#4F46E5]" />
            Get Started
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-white">
            Let&apos;s Build Your AI System.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-3xl font-bold text-white mb-6">Book a Free Strategy Call</h3>
            <p className="text-[#9CA3AF] mb-8 leading-relaxed">
              In 30 minutes we will map the exact automation setup for your business and show you what Corteron does in your specific situation. No generic demos. No sales pressure.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Mapped to your exact business type",
                "Live walkthrough of what gets automated",
                "Clear timeline and pricing confirmed on the call",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4F46E5] mt-0.5 shrink-0" />
                  <span className="text-[#D1D5DB]">{item}</span>
                </li>
              ))}
            </ul>

            <div
              id="my-cal-inline-contact-section"
              style={{ width: "100%", height: "600px", overflow: "scroll" }}
              className="rounded-xl border border-white/5 bg-[#0D0D1F]"
            />
          </div>

          {/* Right Column - Form */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D0D1F] border border-white/10 text-white placeholder-[#6B7280] focus:border-[#4F46E5] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D0D1F] border border-white/10 text-white focus:border-[#4F46E5] focus:outline-none transition-colors"
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

              <div>
                <label className="block text-sm font-medium text-white mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D0D1F] border border-white/10 text-white placeholder-[#6B7280] focus:border-[#4F46E5] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0D0D1F] border border-white/10 text-white placeholder-[#6B7280] focus:border-[#4F46E5] focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0D0D1F] border border-white/10 text-white placeholder-[#6B7280] focus:border-[#4F46E5] focus:outline-none transition-colors"
                  placeholder="Tell us about your business. What are you trying to automate?"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              {isSubmitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded">
                  Message sent! We&apos;ll be in touch soon.
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white h-14 text-base rounded-full disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

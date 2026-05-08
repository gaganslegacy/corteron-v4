"use client";

import { useEffect, useRef, useState } from "react";
import { Inbox, GitBranch, Send, DollarSign, RefreshCw } from "lucide-react";

const howItWorksCards = [
  {
    number: "01",
    title: "Captures",
    description: "Every DM, missed call, and form submission captured and responded to within 60 seconds. Around the clock.",
    icon: Inbox,
  },
  {
    number: "02",
    title: "Nurtures",
    description: "Personalized follow-up sequences run automatically across SMS, email, Instagram, and voice. No manual management.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Posts",
    description: "Daily content created and posted across every platform. Captions, timing, and hashtags handled automatically.",
    icon: Send,
  },
  {
    number: "04",
    title: "Converts",
    description: "Proposals generated, contracts sent, payments collected. The full sales mechanic runs without manual coordination.",
    icon: DollarSign,
  },
  {
    number: "05",
    title: "Retains",
    description: "Rebooking prompts, upsell triggers, and churn prevention fire based on behavior data. Not guesswork.",
    icon: RefreshCw,
  },
];

function HowItWorksCard({ card, index }: { card: typeof howItWorksCards[0]; index: number }) {
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
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative p-7 rounded-xl border border-white/5 bg-[#0D0D1F] transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:shadow-xl hover:shadow-[rgba(79,70,229,0.08)] h-full">
        {/* Number badge */}
        <span className="inline-block text-[13px] font-bold font-mono text-[#B45309] mb-3">
          {card.number}
        </span>

        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/10 border border-[#4F46E5]/20 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-[#4F46E5]" />
        </div>

        {/* Title */}
        <h3 className="text-[20px] font-bold text-white mb-2">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-[15px] text-[#9CA3AF] leading-[1.8]">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <span
            className="inline-flex items-center gap-3 text-[11px] font-mono text-[#4F46E5] mb-6 uppercase font-semibold"
            style={{ letterSpacing: "0.25em" }}
          >
            <span className="w-8 h-px bg-[#4F46E5]" />
            HOW IT WORKS
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-white mb-4">
            One System. Every Business Function.
          </h2>
          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Five modules run automatically across all 15 operational domains of your business. From the moment a lead arrives to the moment revenue is attributed.
          </p>
        </div>

        {/* Cards Grid - 2 columns desktop, 1 mobile, 5th card centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {howItWorksCards.map((card, index) => (
            <div
              key={card.number}
              className={index === 4 ? "md:col-span-2 md:max-w-lg md:mx-auto w-full" : ""}
            >
              <HowItWorksCard card={card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

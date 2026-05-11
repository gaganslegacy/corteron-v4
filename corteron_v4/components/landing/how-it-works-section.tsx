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
      className={`blur-in-visible ${isVisible ? "" : "blur-in-hidden"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="card-premium p-7 h-full">
        {/* Number badge */}
        <span className="inline-block text-[13px] font-bold font-mono text-[#B45309] mb-3">
          {card.number}
        </span>

        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-[clamp(20px,2vw,28px)] font-bold text-white mb-2">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-[15px] text-[#9CA3AF] leading-[1.85]">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <span
            className="inline-flex items-center gap-3 text-[11px] font-mono text-primary mb-6 uppercase font-semibold"
            style={{ letterSpacing: "0.3em" }}
          >
            <span className="w-8 h-px bg-primary" />
            HOW IT WORKS
          </span>
          <h2 className="text-[clamp(36px,4.5vw,64px)] font-display text-white mb-5">
            One System. Every Business Function.
          </h2>
          <p className="text-lg text-[#9CA3AF] leading-[1.85]">
            Five modules run automatically across all 15 operational domains of your business. From the moment a lead arrives to the moment revenue is attributed.
          </p>
        </div>

        {/* Cards Grid - 2 columns desktop, 1 mobile, 5th card centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

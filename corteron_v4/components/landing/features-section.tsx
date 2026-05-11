"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, MessageCircle, Share2, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Captures",
    description: "Every DM, missed call, and form submission captured and responded to within 60 seconds. Around the clock.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Nurtures",
    description: "Personalized follow-up sequences run automatically across SMS, email, Instagram, and voice. No manual management.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Posts",
    description: "Daily content created and posted across every platform. Captions, timing, and hashtags handled automatically.",
    icon: Share2,
  },
  {
    number: "04",
    title: "Converts",
    description: "Proposals generated, contracts sent, payments collected. The full sales mechanic runs without manual coordination.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Retains",
    description: "Rebooking prompts, upsell triggers, and churn prevention fire based on behavior data. Not guesswork.",
    icon: Shield,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible 
          ? `opacity-100 ${isEven ? 'translate-x-0' : 'translate-x-0'}` 
          : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`grid lg:grid-cols-2 gap-8 items-start py-12 lg:py-16 ${!isEven ? 'lg:grid-cols-2 lg:direction-rtl' : ''}`}>
        {/* Icon/Number side */}
        <div className={`flex flex-col items-start gap-4 ${!isEven ? 'lg:flex-row-reverse lg:items-start' : ''}`}>
          <div className="relative">
            {/* Gold number badge */}
            <div className="w-12 h-12 rounded-lg bg-[#B45309]/20 border border-[#B45309]/40 flex items-center justify-center mb-4">
              <span className="font-mono text-lg font-bold text-[#B45309]">{feature.number}</span>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col gap-2 flex-1">
            <div className="w-12 h-1 rounded-full bg-primary" />
          </div>
        </div>

        {/* Content side */}
        <div className={`flex flex-col gap-3 ${!isEven ? 'lg:text-right' : ''}`}>
          {/* Primary left border accent */}
          <div className="flex items-start gap-4">
            <div className={`w-1 h-20 rounded-full bg-primary shrink-0 ${!isEven ? 'order-2' : ''}`} />
            <div className={!isEven ? 'order-1 text-right' : ''}>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base lg:text-[15px] text-[#9CA3AF] leading-relaxed max-w-xl">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-32 lg:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6 uppercase tracking-widest">
            <span className="w-8 h-px bg-primary" />
            How It Works
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            One System. Every Business Function.
          </h2>
          <p className="text-xl text-[#9CA3AF] mt-6 max-w-2xl">
            Five modules run automatically across all 15 operational domains of your business. From the moment a lead arrives to the moment revenue is attributed.
          </p>
        </div>

        {/* Features List with vertical line */}
        <div className="relative">
          {/* Vertical center line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
          
          <div className="flex flex-col">
            {features.map((feature, index) => (
              <FeatureCard key={feature.number} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

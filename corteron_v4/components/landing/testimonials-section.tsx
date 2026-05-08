"use client";

const testimonials = [
  {
    quote: "Corteron responded to a lead at 11pm that I missed. They booked a showing the next morning. That one response paid for six months of the service.",
    author: "Michael T.",
    role: "Toronto Realtor",
    company: "PropPulse client",
    metric: "First showing booked overnight",
  },
];

export function TestimonialsSection() {
  const activeTestimonial = testimonials[0];

  return (
    <section className="relative py-32 lg:py-40 border-t border-white/5 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Success Story
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                "{activeTestimonial.quote}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 flex items-center justify-center">
                <span className="font-display text-2xl text-[#4F46E5]">
                  {activeTestimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium text-white">{activeTestimonial.author}</p>
                <p className="text-[#9CA3AF]">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="p-8 border border-white/5 bg-[#0A0A1A]">
              <span className="font-mono text-xs tracking-widest text-[#6B7280] uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display text-3xl md:text-4xl text-[#B45309]">
                {activeTestimonial.metric}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

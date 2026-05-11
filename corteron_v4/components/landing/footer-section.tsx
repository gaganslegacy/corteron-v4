"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CalButton } from "@/components/ui/cal-button";

const navLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "The Businesses", href: "/businesses" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050510]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Left Column - Brand */}
            <div>
              <div className="mb-6">
                <Link href="/" className="inline-flex items-center gap-3 group">
                  <Image
                    src="/corteron-logo.png"
                    alt="Corteron"
                    width={40}
                    height={40}
                    className="object-contain w-10 h-10 group-hover:opacity-80 transition-opacity"
                  />
                  <span className="text-xl lg:text-2xl font-bold text-white tracking-widest group-hover:text-white/80 transition-colors">
                    CORTERON
                  </span>
                </Link>
              </div>

              <p className="text-[#9CA3AF] leading-relaxed mb-4 text-sm">
                The machine that runs every domain of your business.
              </p>
              
              <p className="text-[#4B5563] text-xs">
                Automatically.
              </p>
            </div>

            {/* Center Column - Navigate */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-white uppercase tracking-widest">Navigate</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Legal */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-white uppercase tracking-widest">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Far Right Column - Get Started */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-white uppercase tracking-widest">Get Started</h3>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white px-8 h-12 text-sm rounded-full mb-6"
                asChild
              >
                <CalButton>
                  Book a Call
                </CalButton>
              </Button>
              <a href="mailto:info@corteron.com" className="text-sm text-[#6B7280] hover:text-white transition-colors block">
                info@corteron.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-[#4B5563]">
            2026 Corteron Inc. All rights reserved. Ontario, Canada.
          </p>
        </div>
      </div>
    </footer>
  );
}
